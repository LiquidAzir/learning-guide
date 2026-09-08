---
title: Neurons and Networks
subtitle: A neuron is a weighted sum and a switch. Stack enough of them and you can approximate anything. Why that took thirty years to become useful, and what a network is actually doing.
part: III · Neural Networks
---

## What does adding a hidden layer actually buy you?

Logistic regression (chapter 4) computed a weighted sum of the inputs and passed it through a squashing function. That is a neuron. This chapter connects neurons into networks, explains what the layers do, and states the theorem that says a network can represent any function, and why that theorem was less useful than it sounds. The difficulty was never whether networks *could* learn; it was how to make them do so, which is chapter 10.

## One neuron

An **artificial neuron** takes inputs $x_1, \ldots, x_n$, multiplies each by a weight $w_i$, adds them up with a bias $b$, and passes the result through an **activation function** $g$:

$$a = g\Big(\sum_i w_i x_i + b\Big) = g(\mathbf{w}\cdot\mathbf{x} + b)$$

The weighted sum is a straight line (or plane) in feature space; the activation decides what to do on each side of it. McCulloch and Pitts used a step: fire (output 1) if the sum passes a threshold, else stay silent. Rosenblatt's perceptron learned the weights for that step function. Logistic regression uses the smooth sigmoid, which outputs a probability rather than a decision and, crucially, has a derivative everywhere, so it can be trained by calculus.

The biological analogy is real but loose. A brain neuron receives signals through thousands of synapses, sums them roughly, and fires if the sum crosses a threshold; the strength of each synapse is roughly a weight. Beyond that the analogy breaks down quickly, and modern networks are designed for what works on a GPU, not for fidelity to biology.[^1] "Neural" is a historical name, like "horsepower."

## Why one layer is not enough

A single neuron draws one straight boundary. Minsky and Papert's 1969 example was XOR: output 1 if exactly one of two inputs is 1. Plot the four cases and no single line separates the 1s from the 0s. A single neuron, however trained, cannot learn it.[^2]

Two hidden neurons feeding an output neuron can. Let one neuron detect "at least one input is on" and another detect "both inputs are on"; feed both into a third neuron that outputs "first minus second." The first two neurons form a **hidden layer**: their outputs are not the answer but a new description of the input in which the answer becomes linearly separable. That is the whole idea of deep learning in one sentence. **Each layer re-describes the input so that the next layer's job is easier**, and the final layer, which is just logistic or linear regression, works on a description in which the problem has become simple.

{{fig:neural-network|A feedforward network with three inputs, two hidden layers, and one output. Each circle is a neuron: a weighted sum of the arrows entering it, passed through an activation function. Each layer of arrows is a matrix of weights. Information flows left to right; training flows right to left.}}

## The multilayer network

A **feedforward network** (or **multilayer perceptron**) is layers of neurons, each fully connected to the next. Layer 1 turns the input vector into a vector of hidden activations; layer 2 turns that into another; the last layer produces the output. In matrix language (mathematics guide, chapter 11), each layer is a matrix multiplication followed by an elementwise activation:

$$\mathbf{h}_1 = g(W_1\mathbf{x} + \mathbf{b}_1), \qquad \mathbf{h}_2 = g(W_2\mathbf{h}_1 + \mathbf{b}_2), \qquad \hat{\mathbf{y}} = W_3\mathbf{h}_2 + \mathbf{b}_3$$

$W_1$ is a matrix with one row per hidden neuron and one column per input; its entries are the weights. The network's **parameters** are all the entries of all the matrices and bias vectors. A network with 784 inputs (a 28-by-28 pixel image), two hidden layers of 256, and 10 outputs has $784 \times 256 + 256 \times 256 + 256 \times 10 + 522 \approx 270{,}000$ parameters. GPT-3 has 175 billion. The arithmetic is the same.

The activation function must be **nonlinear**; without it the whole stack collapses into one matrix multiplication, a single linear model, and the layers buy nothing. For decades the sigmoid was standard. Since about 2011 the standard has been the **ReLU** (rectified linear unit), $g(z) = \max(0, z)$: output the input if positive, else zero. It is absurdly simple, it is not even differentiable at zero, and it made deep networks trainable, for a reason chapter 10 explains.[^3]

## What a network can represent

In 1989 George Cybenko, and independently Kurt Hornik and colleagues, proved the **universal approximation theorem**: a network with one hidden layer and enough neurons can approximate any continuous function on a bounded region to any desired accuracy.[^4] This is often quoted as the reason networks work. It is not.

The theorem says a network *exists*; it does not say how many neurons (possibly astronomically many), how to find the weights, or whether the network will generalize from finite data. Polynomials and Fourier series also approximate any continuous function, and nobody claims they are intelligent. What actually matters is that networks with *several* layers can represent useful functions **compactly**: a function that needs a hidden layer of exponentially many neurons in a shallow network can often be built with a modest number in a deep one, because deep networks reuse intermediate results, the way a program reuses subroutines.[^5] Depth is efficiency, not expressiveness. And the real question, how to find good weights and why they generalize, is answered by chapters 8 and 10, not by the approximation theorem.

:::key
A neural network is a function built from layered weighted sums and simple nonlinearities. Its power comes from three facts. It is **differentiable**, so gradient descent can train it. It is **compositional**, so each layer can build on the features the previous one found, and depth buys compactness. And it is **generic**: the same architecture, with no domain knowledge, learns images, sounds, text, and proteins. The cost is that the network's knowledge is spread across millions of numbers and cannot be read off, which is the interpretability problem of chapter 19.
:::

## What the layers learn

Train a network to recognize handwritten digits and look at what the hidden neurons respond to. The first hidden layer's neurons act as detectors for strokes: a short diagonal here, a curve there. The second layer combines strokes into parts: a loop, a vertical bar. The output layer combines parts into digits: a loop over a bar is a 9. Nobody designed this. It emerges because it is the efficient way to solve the task, and it recapitulates, roughly, how the visual cortex is organized, with simple cells detecting edges feeding complex cells detecting shapes.[^6]

This **hierarchy of features** is the thing deep learning discovered that the classical methods of Part II could not. A random forest or a support vector machine needs a human to design features (edge detectors, texture statistics). A deep network designs them itself, from raw pixels, and does it better. The word "deep" means "many layers," and the reason many layers matter is that real-world structure is hierarchical: pixels make edges make parts make objects; letters make words make phrases make meaning.

## The output layer and the loss

The last layer depends on the task, and it is always one of the models from Part II. For regression, a single linear output and squared error. For two-class classification, a sigmoid and cross-entropy: logistic regression on the learned features. For many classes, a **softmax** layer, which turns a vector of scores into probabilities that sum to one, and cross-entropy on the correct class.

$$\text{softmax}(z)_k = \frac{e^{z_k}}{\sum_j e^{z_j}}$$

The exponential makes every probability positive and amplifies differences: a score of 3 versus 1 becomes a probability ratio of $e^2 \approx 7.4$ to 1. The softmax is how a language model turns its internal scores for 50,000 possible next words into a probability distribution to sample from (chapter 15). It is the same formula as the Boltzmann distribution in statistical physics, which is not a coincidence: Hinton's Boltzmann machines of the 1980s, cited in his 2024 Nobel Prize, were built on exactly that connection.[^7]

:::howto Sizing and shaping a network for a new problem
For a problem with structured (tabular) inputs and a few thousand examples:
1. **Try gradient-boosted trees first** (chapter 6). They will probably win. Use a network only when inputs are images, audio, text, or when you need a differentiable component inside a larger system.
2. **Start small**: one or two hidden layers of 64 to 256 units, ReLU activations, and the output layer that matches your task (linear, sigmoid, softmax).
3. **Standardize inputs.** Networks train badly on features with wildly different scales.
4. **Match the loss to the output**: squared error for regression, cross-entropy for classification. Never use accuracy as a training loss; it has no useful gradient.
5. **Count parameters** and compare with the number of examples. A network with a million parameters and a thousand examples will memorize; add regularization (chapter 10) or shrink it.
6. **Watch training and validation loss** as it trains. Chapter 10 says how to read the curves.

*Example.* Predicting whether a 28×28 grayscale image is one of ten digits: 784 inputs → 128 ReLU → 64 ReLU → 10 softmax; about 109,000 parameters; 60,000 training images; cross-entropy loss. This reaches about 98 percent accuracy in a few minutes on a laptop and is the standard first exercise in the field.[^8]
:::

## A little history

The perceptron's learning rule (1958) adjusted the weights of one neuron: if the output was wrong, move the weights toward the input for a miss and away for a false alarm. Rosenblatt proved it converges when a separating line exists.[^9] Its limitation to one layer, and the absence of a rule for training hidden layers, was the gap Minsky and Papert exposed. The gap was closed by backpropagation, the subject of the next chapter, and the reason it closed *slowly* is that even with backpropagation, deep networks trained badly until three practical fixes arrived around 2010: the ReLU, better weight initialization, and far more data and compute. Each is small. Together they were the difference between a curiosity and a revolution.

:::formulas
| Idea | Formula |
|---|---|
| Neuron | $a = g(\mathbf{w}\cdot\mathbf{x} + b)$ |
| Layer | $\mathbf{h} = g(W\mathbf{x} + \mathbf{b})$, $W$ a matrix of weights |
| Sigmoid | $\sigma(z) = \dfrac{1}{1 + e^{-z}}$ |
| ReLU | $g(z) = \max(0, z)$ |
| Softmax | $p_k = \dfrac{e^{z_k}}{\sum_j e^{z_j}}$ |
| Parameter count (dense layer) | inputs × outputs + outputs |
| XOR needs | at least one hidden layer |
:::

:::know
- A neuron is a weighted sum plus a nonlinearity; logistic regression is one neuron.
- One layer draws one straight boundary and cannot learn XOR; hidden layers re-describe the input so the final layer's job is linear.
- Without a nonlinear activation, a deep network is one linear model. ReLU, $\max(0, z)$, is the standard activation.
- Universal approximation says a wide network can represent any function; it does not explain learning or generalization. Depth buys compactness.
- Layers learn a hierarchy of features (edges, parts, objects) without being told to.
- The output layer is a Part II model on learned features: linear, sigmoid, or softmax with the matching loss.
:::

:::try Put the idea to work
Why can two hidden neurons plus an output neuron represent the XOR pattern when a single linear separator cannot?

:::answer Show the reasoning
XOR's positive cases occupy opposite corners, so one straight boundary cannot separate them. Hidden units create new features, such as “at least one input is on” and “both are on.” The output combines those features to distinguish exactly one active input.
:::
:::

## Summary

- An artificial neuron computes an activation of a weighted sum; networks stack neurons in layers, each a matrix multiplication and a nonlinearity.
- Hidden layers overcome the single-boundary limitation exposed by Minsky and Papert; each layer transforms the representation so the next can separate classes linearly.
- Universal approximation guarantees representational power but not learnability or generalization; depth matters because it represents hierarchical structure efficiently.
- Trained networks learn feature hierarchies automatically, which is the capability that classical methods lacked.
- The final layer and loss are the regression or classification models of Part II; softmax with cross-entropy is the standard for classification and is the output stage of every language model.

[^1]: Lillicrap, T. P., Santoro, A., Marris, L., Akerman, C. J., Hinton, G. (2020). "Backpropagation and the brain." *Nature Reviews Neuroscience*, 21, 335–346. [doi:10.1038/s41583-020-0277-3](https://doi.org/10.1038/s41583-020-0277-3)
[^2]: Minsky, M., Papert, S. (1969). *Perceptrons*. Cambridge, MA: MIT Press. Chapter 0 (overview, with XOR) and Chapter 3, "Parity and One-in-a-Box Predicates."
[^3]: Glorot, X., Bordes, A., Bengio, Y. (2011). "Deep Sparse Rectifier Neural Networks." *AISTATS 2011*, PMLR 15, 315–323. [proceedings.mlr.press](https://proceedings.mlr.press/v15/glorot11a.html). Nair, V., Hinton, G. E. (2010). "Rectified Linear Units Improve Restricted Boltzmann Machines." *ICML 2010*.
[^4]: Cybenko, G. (1989). "Approximation by superpositions of a sigmoidal function." *Mathematics of Control, Signals and Systems*, 2, 303–314. [doi:10.1007/BF02551274](https://doi.org/10.1007/BF02551274). Hornik, K., Stinchcombe, M., White, H. (1989). "Multilayer feedforward networks are universal approximators." *Neural Networks*, 2(5), 359–366. [doi:10.1016/0893-6080(89)90020-8](https://doi.org/10.1016/0893-6080(89)90020-8)
[^5]: Montufar, G., Pascanu, R., Cho, K., Bengio, Y. (2014). "On the Number of Linear Regions of Deep Neural Networks." *NeurIPS 27*. [arxiv.org/abs/1402.1869](https://arxiv.org/abs/1402.1869). Telgarsky, M. (2016). "Benefits of depth in neural networks." *COLT 2016*. [arxiv.org/abs/1602.04485](https://arxiv.org/abs/1602.04485)
[^6]: Zeiler, M. D., Fergus, R. (2014). "Visualizing and Understanding Convolutional Networks." *ECCV 2014*. [arxiv.org/abs/1311.2901](https://arxiv.org/abs/1311.2901). Hubel, D. H., Wiesel, T. N. (1962). "Receptive fields, binocular interaction and functional architecture in the cat's visual cortex." *Journal of Physiology*, 160(1), 106–154. [doi:10.1113/jphysiol.1962.sp006837](https://doi.org/10.1113/jphysiol.1962.sp006837)
[^7]: Ackley, D. H., Hinton, G. E., Sejnowski, T. J. (1985). "A Learning Algorithm for Boltzmann Machines." *Cognitive Science*, 9(1), 147–169. [doi:10.1207/s15516709cog0901_7](https://doi.org/10.1207/s15516709cog0901_7). The Nobel Prize in Physics 2024, Scientific Background. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2024/advanced-information/)
[^8]: LeCun, Y., Cortes, C., Burges, C. J. C. *The MNIST database of handwritten digits*. [yann.lecun.com/exdb/mnist](http://yann.lecun.com/exdb/mnist/). Nielsen, M. (2015). *Neural Networks and Deep Learning*, chapter 1. Free at [neuralnetworksanddeeplearning.com](http://neuralnetworksanddeeplearning.com/)
[^9]: Rosenblatt, F. (1962). *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*. Washington: Spartan Books. Novikoff, A. B. J. (1962). "On convergence proofs on perceptrons." *Symposium on the Mathematical Theory of Automata*, 12, 615–622.
