---
title: How Networks Learn
subtitle: Gradient descent, backpropagation, and the bag of tricks that turned an idea from 1986 into the engine of the 2010s. How to read a loss curve, and why the learning rate is the one knob that matters most.
part: III · Neural Networks
---

## Recap

Chapter 9 built the network and said its parameters are set by minimizing a loss. This chapter is about how. The method is one idea, gradient descent, plus one algorithm for computing gradients efficiently, backpropagation, plus a decade of practical fixes without which neither would work at scale. It is the most technical chapter in the guide and the most useful for anyone who will ever train a model, because training is where things go wrong.

## Walking downhill

Imagine the loss as a landscape. Each point in the landscape is one setting of all the parameters; the height is the loss at that setting. Training means finding a low point. With two parameters you could picture the landscape and look. With a million, you can only feel the slope under your feet.

The slope is the **gradient**: the vector of partial derivatives of the loss with respect to each parameter (mathematics guide, chapter 8). It points in the direction in which the loss increases fastest. So step the other way:

$$\theta \leftarrow \theta - \eta\,\nabla_\theta L$$

Every parameter $\theta$ is nudged against its gradient by an amount proportional to the **learning rate** $\eta$ (eta). Repeat thousands or millions of times. This is **gradient descent**, and it is the whole of training. Cauchy described it in 1847.[^1]

{{fig:gradient-descent|Left: gradient descent on a loss surface, shown as contours. Each step moves against the local slope; a good learning rate reaches the valley, a large one overshoots and oscillates, a tiny one crawls. Right: what the same runs look like as loss curves over time, which is what a practitioner actually watches.}}

Two complications make it interesting. First, the loss is an average over the whole training set, so computing the exact gradient means a pass over all the data for one step. **Stochastic gradient descent** (SGD) instead estimates the gradient from a random **minibatch** of 32 to a few thousand examples, takes a step, draws another batch. The estimate is noisy, the steps are cheap, and the noise turns out to help: it is thought to shake the parameters out of sharp, narrow minima that generalize badly and into wide, flat ones that generalize well, though exactly why remains debated.[^2] One pass through the whole training set is an **epoch**; training runs for a few to a few hundred.

Second, the landscape is not a bowl. It has ridges, plateaus, and saddle points where the slope is zero in every direction but the point is not a minimum. For years the field feared getting stuck in bad local minima. In practice, in high dimensions, that almost never happens: the hard problem is saddles and flat regions where progress stalls, and the fixes below address them.[^3]

## Backpropagation

Gradient descent needs the gradient: the derivative of the loss with respect to each of a million weights, many layers deep. Computing each one separately would take a million forward passes. **Backpropagation** computes them all in one backward pass, at roughly the cost of two forward passes, and it is the reason deep learning is possible at all.

:::math The chain rule, organized
A network is a composition of functions: input → layer 1 → layer 2 → … → output → loss. The chain rule (mathematics guide, chapter 7) says the derivative of a composition is the product of the derivatives of its parts. Write $\delta_\ell$ for the derivative of the loss with respect to layer $\ell$'s weighted sums $\mathbf{z}_\ell$, the values just before the activation function is applied. Then:

1. At the output: $\delta_{\text{out}}$ is the derivative of the loss with respect to the output layer's scores. For a linear output with squared error it is $2(\hat y - y)$; for softmax with cross-entropy it is, beautifully, just $\hat{\mathbf{p}} - \mathbf{y}$, the predicted probabilities minus the one-hot truth.
2. Going back one layer: $\delta_{\ell} = (W_{\ell+1}^\top \delta_{\ell+1}) \odot g'(\mathbf{z}_\ell)$. The error from the layer above is sent back through the transpose of the weights that carried the signal forward, then multiplied elementwise ($\odot$) by the slope of the activation function at each neuron.
3. The gradient for the weights of layer $\ell$ is $\nabla_{W_\ell} L = \delta_\ell\, \mathbf{h}_{\ell-1}^\top$: the error arriving at the layer, times the activations that fed into it. A weight's gradient is large when the neuron it feeds is wrong *and* the neuron it comes from was active. That is the credit assignment rule: blame goes to the connections that contributed.

Every step is a matrix multiplication, which is why GPUs, built to multiply matrices for graphics, made training fast. The algorithm was worked out in the 1960s and 70s in control theory and rediscovered for networks by several people; the 1986 Rumelhart, Hinton, and Williams paper made it the field's standard.[^4] Modern frameworks (PyTorch, JAX) implement it as **automatic differentiation**: you write the forward computation, the software records it, and the gradient comes for free.
:::

## Why deep networks would not train, and what fixed it

Backpropagation was known in 1986. Deep learning arrived in 2012. The gap was that networks with more than a few layers did not train, and the reason is in step 2 above: the error signal is multiplied, at every layer, by the weights and by the activation's slope. With sigmoid activations, the slope is at most 0.25 and usually far less. Multiply twenty such factors and the gradient reaching the early layers is effectively zero. They never learn. This is the **vanishing gradient** problem, and its mirror, **exploding gradients**, occurs when the factors exceed one.[^5]

The fixes are the practical core of the field.

**ReLU.** $\max(0, z)$ has slope exactly 1 for positive inputs. Gradients pass through active ReLUs undiminished. This change, from 2011, together with the initialization below, let networks go from 3 layers to 20.

**Initialization.** Starting weights too large or too small guarantees exploding or vanishing signals before training begins. Glorot and Bengio (2010), then He and colleagues (2015), derived the scale that keeps the signal's variance constant through the layers: weights drawn with variance about $2/n$ for a layer with $n$ inputs and ReLU activations.[^6]

**Normalization.** **Batch normalization** (2015) rescales each layer's outputs, within each minibatch, to zero mean and unit variance, then lets the network learn how to shift and scale them back. It stabilizes training dramatically, allows higher learning rates, and is in nearly every vision network. **Layer normalization**, which normalizes across a single example's features instead of across the batch, is what transformers use.[^7]

**Skip connections.** The **residual network** (ResNet, 2015) adds each layer's input to its output, so the layer learns a correction to the identity rather than a whole transformation: $\mathbf{h}_{\ell+1} = \mathbf{h}_\ell + f(\mathbf{h}_\ell)$. Gradients then have a direct path backward that bypasses every layer's multiplication. ResNets went to 152 layers, won ImageNet 2015 with an error below the human benchmark, and became the most cited paper in the field. Every transformer is a residual network.[^8]

**Better optimizers.** Plain SGD uses one learning rate for everything. **Momentum** accumulates a running average of past gradients, so that consistent directions speed up and oscillating ones cancel, like a ball rolling downhill. **Adam** (2014) additionally scales each parameter's step by the running size of its own gradients, giving rare features larger steps and common ones smaller. Adam is the default optimizer for nearly everything, including language models, in a variant (AdamW) that handles weight decay correctly.[^9]

## The learning rate

Of all the settings, the learning rate matters most. Too high and the loss oscillates or explodes; too low and training takes forever or stalls on a plateau. Worse, the right value changes during training: large steps are good early, when the parameters are far from any minimum, and bad late, when they need to settle. The universal practice is a **schedule**: warm up from a small rate over the first few hundred steps (so that the random initial gradients do not throw the parameters somewhere bad), hold or decay, then decay toward zero, often along a cosine curve. Choosing the peak rate is the first thing to tune and the source of most training failures.

:::howto Reading a loss curve
Plot training loss and validation loss against steps (one gradient update each) or epochs (one pass through the data). This is the primary diagnostic and you should look at it every time.

1. **Both falling, validation slightly above training**: healthy. Keep going.
2. **Training loss falling, validation loss rising**: overfitting has begun. Stop here (**early stopping**), or add regularization, or get more data. The best model is the one at the validation minimum, not the last one.
3. **Both flat and high from the start**: the model is not learning. Learning rate too low, a bug in the data pipeline (labels shuffled relative to inputs is the classic), or inputs not standardized. Check that the model can overfit a tiny subset of 10 examples; if it cannot, the bug is in the code.
4. **Loss exploding to infinity or NaN**: learning rate too high, or exploding gradients. Lower the rate by a factor of 10; add **gradient clipping** (cap the gradient's length before the step).
5. **Loss falling in a staircase**: the learning rate schedule is stepping down. Normal.
6. **Training loss much lower than validation from the first epoch**: leakage or a distribution mismatch between the sets. Investigate before anything else.
7. **Validation loss noisy**: validation set too small. Use more, or smooth.

*The single most common real-world bug:* the model trains fine and evaluates at chance, because the evaluation code preprocesses inputs differently from the training code. Write one preprocessing function and use it in both places.
:::

## Regularization for networks

Chapter 3's principle applies, with network-specific tools. **Weight decay** is ridge regularization: a small pull on every weight toward zero, each step. **Dropout** (2014) randomly zeroes a fraction of each layer's neurons during each training step, so that no neuron can rely on any other being present; the network is forced to learn redundant, robust features, and at test time the full network acts like an average of the many thinned networks trained.[^10] **Data augmentation** enlarges the training set with transformed copies: images flipped, cropped, rotated, recolored; audio sped up or pitch-shifted; text with words swapped. It teaches the network which variations do not matter and is, for vision, the single most effective regularizer. **Early stopping** is the simplest: stop when validation loss stops improving.

## Scale changes the rules

Everything above was learned on networks of millions of parameters. Chapter 8 said that at very large scale, overfitting stops being the main worry, and training practice changed accordingly: frontier language models train for a single epoch over their data (every example seen once, so memorization is not the issue), with little dropout, relying on scale, weight decay, and the learning rate schedule. What remains hard at scale is **stability**: keeping a run of thousands of GPUs over months from diverging, which involves careful initialization, normalization, gradient clipping, and a great deal of monitoring. A frontier training run that crashes at 80 percent has wasted tens of millions of dollars, and the engineering of not crashing is a large part of what the leading labs know and do not publish.[^11]

:::formulas
| Idea | Formula |
|---|---|
| Gradient step | $\theta \leftarrow \theta - \eta\,\nabla_\theta L$ |
| SGD | same, with $\nabla L$ estimated on a minibatch |
| Momentum | $v \leftarrow \beta v + \nabla L$; $\theta \leftarrow \theta - \eta v$ |
| Adam (idea) | per-parameter step $\propto \dfrac{\text{mean of recent gradients}}{\sqrt{\text{mean of recent squared gradients}}}$ |
| Backprop, error at layer $\ell$ | $\delta_\ell = (W_{\ell+1}^\top\delta_{\ell+1}) \odot g'(\mathbf{z}_\ell)$ |
| Weight gradient | $\nabla_{W_\ell} L = \delta_\ell\,\mathbf{h}_{\ell-1}^\top$ |
| Softmax + cross-entropy gradient | $\hat{\mathbf{p}} - \mathbf{y}$ |
| Residual block | $\mathbf{h}_{\ell+1} = \mathbf{h}_\ell + f(\mathbf{h}_\ell)$ |
| He initialization | weights $\sim \mathcal{N}(0, 2/n_{\text{in}})$ |
:::

:::know
- Training is gradient descent: step every parameter against the slope of the loss. Minibatches make it stochastic, which is cheap and helps generalization.
- Backpropagation is the chain rule organized as a backward pass; it costs about two forward passes and computes every gradient at once.
- Deep networks failed to train because gradients vanished through sigmoid layers. ReLU, careful initialization, normalization, and residual connections fixed it.
- The learning rate is the knob that matters most; warm up, then decay.
- Read the loss curves. Validation rising while training falls means stop. Flat from the start means a bug.
- Dropout, weight decay, augmentation, and early stopping regularize. At frontier scale, stability replaces overfitting as the main concern.
:::

## Summary

- Gradient descent minimizes the loss by stepping against its gradient; stochastic minibatches make each step cheap and add helpful noise.
- Backpropagation applies the chain rule layer by layer to compute all gradients in one backward pass, as matrix multiplications suited to GPUs.
- Vanishing gradients kept deep networks untrainable for two decades; ReLU activations, principled initialization, batch and layer normalization, and residual connections solved it between 2010 and 2015.
- Adam with a warmup-and-decay learning rate schedule is the standard optimizer; the learning rate is the most important hyperparameter.
- Loss curves diagnose overfitting, underfitting, bugs, and instability; regularizers include dropout, weight decay, augmentation, and early stopping.

[^1]: Cauchy, A.-L. (1847). "Méthode générale pour la résolution des systèmes d'équations simultanées." *Comptes Rendus de l'Académie des Sciences*, 25, 536–538. Robbins, H., Monro, S. (1951). "A Stochastic Approximation Method." *Annals of Mathematical Statistics*, 22(3), 400–407. [doi:10.1214/aoms/1177729586](https://doi.org/10.1214/aoms/1177729586)
[^2]: Keskar, N. S., Mudigere, D., Nocedal, J., Smelyanskiy, M., Tang, P. T. P. (2017). "On Large-Batch Training for Deep Learning: Generalization Gap and Sharp Minima." *ICLR 2017*. [arxiv.org/abs/1609.04836](https://arxiv.org/abs/1609.04836)
[^3]: Dauphin, Y. N., Pascanu, R., Gulcehre, C., Cho, K., Ganguli, S., Bengio, Y. (2014). "Identifying and attacking the saddle point problem in high-dimensional non-convex optimization." *NeurIPS 27*. [arxiv.org/abs/1406.2572](https://arxiv.org/abs/1406.2572)
[^4]: Rumelhart, D. E., Hinton, G. E., Williams, R. J. (1986). "Learning representations by back-propagating errors." *Nature*, 323, 533–536. [doi:10.1038/323533a0](https://doi.org/10.1038/323533a0). Baydin, A. G., Pearlmutter, B. A., Radul, A. A., Siskind, J. M. (2018). "Automatic Differentiation in Machine Learning: a Survey." *Journal of Machine Learning Research*, 18(153), 1–43. [jmlr.org](https://jmlr.org/papers/v18/17-468.html)
[^5]: Hochreiter, S. (1991). *Untersuchungen zu dynamischen neuronalen Netzen*. Diploma thesis, TU Munich. Bengio, Y., Simard, P., Frasconi, P. (1994). "Learning long-term dependencies with gradient descent is difficult." *IEEE Transactions on Neural Networks*, 5(2), 157–166. [doi:10.1109/72.279181](https://doi.org/10.1109/72.279181)
[^6]: Glorot, X., Bengio, Y. (2010). "Understanding the difficulty of training deep feedforward neural networks." *AISTATS 2010*, PMLR 9, 249–256. [proceedings.mlr.press](https://proceedings.mlr.press/v9/glorot10a.html). He, K., Zhang, X., Ren, S., Sun, J. (2015). "Delving Deep into Rectifiers." *ICCV 2015*. [arxiv.org/abs/1502.01852](https://arxiv.org/abs/1502.01852)
[^7]: Ioffe, S., Szegedy, C. (2015). "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift." *ICML 2015*. [arxiv.org/abs/1502.03167](https://arxiv.org/abs/1502.03167). Ba, J. L., Kiros, J. R., Hinton, G. E. (2016). "Layer Normalization." [arxiv.org/abs/1607.06450](https://arxiv.org/abs/1607.06450)
[^8]: He, K., Zhang, X., Ren, S., Sun, J. (2016). "Deep Residual Learning for Image Recognition." *CVPR 2016*, 770–778. [arxiv.org/abs/1512.03385](https://arxiv.org/abs/1512.03385)
[^9]: Kingma, D. P., Ba, J. (2015). "Adam: A Method for Stochastic Optimization." *ICLR 2015*. [arxiv.org/abs/1412.6980](https://arxiv.org/abs/1412.6980). Loshchilov, I., Hutter, F. (2019). "Decoupled Weight Decay Regularization." *ICLR 2019*. [arxiv.org/abs/1711.05101](https://arxiv.org/abs/1711.05101)
[^10]: Srivastava, N., Hinton, G., Krizhevsky, A., Sutskever, I., Salakhutdinov, R. (2014). "Dropout: A Simple Way to Prevent Neural Networks from Overfitting." *Journal of Machine Learning Research*, 15, 1929–1958. [jmlr.org](https://jmlr.org/papers/v15/srivastava14a.html)
[^11]: Grattafiori, A. et al. (2024). "The Llama 3 Herd of Models." Section 3.3 documents 466 job interruptions over a 54-day training run. [arxiv.org/abs/2407.21783](https://arxiv.org/abs/2407.21783). Wortsman, M. et al. (2023). "Small-scale proxies for large-scale Transformer training instabilities." [arxiv.org/abs/2309.14322](https://arxiv.org/abs/2309.14322)
