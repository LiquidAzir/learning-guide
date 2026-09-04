---
title: Glossary and Formula Sheet
subtitle: Every term defined in this guide, and every formula, on one page.
part: VI · The Edge
---

## How to use this

The first half is the glossary, grouped by the part of the guide that introduces each term, alphabetical within each group. The second half is the formula sheet: the dozen or so equations that machine learning actually rests on, with each symbol named.

## Glossary

### Foundations (chapters 1 to 3)

**Bias–variance trade-off.** Error from a model too simple to capture the pattern (bias) versus error from a model too sensitive to the particular training set (variance). Classical wisdom: balance them. Modern finding: very large models escape the trade-off (double descent).

**Data leakage.** Information available during training that will not be available in use, such as a field filled in after the outcome. Produces spectacular fake results.

**Features, labels, examples.** The inputs a model sees, the answers it is trained to produce, and the individual records pairing them.

**Generalization.** Performing well on data not seen in training. The point of the whole enterprise.

**Hyperparameter.** A setting chosen by the practitioner rather than learned from data: learning rate, tree depth, regularization strength.

**Inductive bias.** The assumptions built into a model's architecture (locality in convolutions, additivity in linear models). Needed because no method works for all problems.

**Loss function.** A formula scoring how wrong a model's predictions are. Training minimizes it.

**Model, parameters.** A family of functions and the adjustable numbers that select one.

**Optimizer.** The procedure that adjusts parameters to reduce loss; almost always a form of gradient descent.

**Overfitting, underfitting.** Learning the training data's noise; failing to learn its pattern.

**Regularization.** Penalizing model complexity so that fitting the data has a price.

**Supervised, unsupervised, reinforcement learning.** Learning from labeled examples; finding structure in unlabeled data; learning from rewards for actions.

**Training, validation, test sets.** Data for fitting the model, for choosing between models, and for the final honest estimate, touched once.

### Learning from data (chapters 4 to 8)

**A/B test.** A randomized experiment comparing two versions; the only way to learn a causal effect from a deployed system.

**Accuracy, precision, recall, specificity, F1.** Fraction correct; fraction of flagged cases that are real; fraction of real cases flagged; fraction of negatives cleared; harmonic mean of precision and recall.

**AUC, ROC curve.** The trade-off between true and false positive rates across thresholds; the area under it, 0.5 for chance and 1 for perfect ranking.

**Bagging, boosting.** Averaging many models trained on resampled data; adding models in sequence that correct the previous ones' errors.

**Calibration.** A model that says 70 percent is right 70 percent of the time.

**Coefficient, weight, intercept, bias.** The multipliers on features in a linear model and the constant added.

**Collaborative filtering, matrix factorization.** Predicting preferences from other users' preferences; representing users and items as vectors whose dot product predicts a rating.

**Confusion matrix.** The two-by-two (or larger) table of predicted versus actual classes.

**Cross-entropy, log loss.** The classification loss: minus the log of the probability assigned to the correct answer. Maximum likelihood for categories.

**Cross-validation.** Rotating which fold of the data is held out, so every example is tested once.

**Curse of dimensionality.** In many dimensions everything is far from everything, so nearest-neighbor methods and density estimates fail.

**Decision tree.** A classifier that asks a sequence of yes/no questions about features, chosen greedily to purify the classes.

**Distribution shift.** The world changing so that training data no longer resembles deployment data.

**Double descent.** Test error falling, rising to a peak at the interpolation threshold, then falling again as models grow far larger than the data.

**Embedding, representation.** A learned vector standing for an entity, positioned so that geometry encodes meaning.

**Feature importance, SHAP.** Ranking of inputs by contribution to a model; per-prediction attribution from game theory. Show what the model uses, not what causes the outcome.

**Gradient boosting, XGBoost.** Boosting as gradient descent in function space; its dominant implementations for tabular data.

**Interpolation threshold.** Model size at which training data can just be fit exactly; the worst point for test error.

**k-means, clustering.** Partitioning data into groups by nearest center; finding groups without labels.

**k-nearest neighbors.** Classify by vote of the $k$ most similar training examples.

**Lasso, ridge.** Regularization by the sum of absolute weights (drives weights to zero, selects features) and by the sum of squared weights (shrinks weights).

**Least squares.** Choosing the line that minimizes summed squared error; solvable by formula.

**Logistic regression, sigmoid.** A linear model passed through the S-shaped function $1/(1+e^{-z})$ to output a probability; the standard first classifier and a one-neuron network.

**Maximum likelihood.** Choosing parameters under which the observed data were most probable. Squared error and cross-entropy are both instances.

**Naive Bayes.** Bayes' theorem with the assumption that features are independent given the class. The first spam filters.

**PCA, t-SNE, UMAP.** Finding the directions of greatest variance; two methods for projecting high-dimensional data onto a plane for viewing.

**Random forest.** Many decision trees on bootstrap samples with random feature subsets, voting.

**$R^2$, RMSE.** Fraction of variance explained; typical prediction error in the target's units.

**Self-supervised learning.** Manufacturing labels from unlabeled data by hiding part of it and predicting it.

**Softmax.** Turns a vector of scores into probabilities that sum to 1: $e^{z_k}/\sum_j e^{z_j}$.

**Support vector machine, kernel.** The maximum-margin classifier; the trick of computing similarities as if in a higher-dimensional space.

**Threshold.** The probability cutoff for calling a prediction positive; a choice about which error to prefer.

### Neural networks (chapters 9 to 14)

**Activation function, ReLU.** The nonlinearity applied to a neuron's weighted sum; $\max(0, z)$, the standard choice.

**Adam.** The default optimizer: gradient descent with momentum and per-parameter step scaling.

**Adversarial example.** An input perturbed imperceptibly so that a network misclassifies it confidently.

**Autoencoder, VAE.** A network trained to reconstruct its input through a bottleneck; the variant whose latent space is a Gaussian, so it can generate.

**Backpropagation.** The chain rule organized as a backward pass computing the gradient of the loss for every weight.

**Batch normalization, layer normalization.** Rescaling activations to zero mean and unit variance across a minibatch or across a token's features, for stable training.

**Bellman equation, value function.** The value of a state equals the reward plus the discounted value of the best next state; the function giving each state's expected total reward.

**Convolution, filter, feature map, pooling.** Sliding a small weight grid over an image; the grid; its output; downsampling by taking the maximum over windows.

**Credit assignment.** Deciding which of many earlier actions deserve credit for a reward that arrived later.

**Data augmentation.** Enlarging training data with transformed copies (flips, crops, noise).

**Diffusion model.** A generative model trained to predict added noise, which generates by removing noise from static step by step.

**Discount factor $\gamma$.** How much future reward counts relative to present.

**Dropout.** Randomly zeroing neurons during training so the network learns redundant features.

**Early stopping.** Halting training when validation loss stops improving.

**Epoch, minibatch.** One pass through the training data; the small random subset used for each gradient step.

**Exploration versus exploitation.** Trying new actions to learn about them versus repeating what has worked.

**Feedforward network, multilayer perceptron, hidden layer.** Layers of neurons each fully connected to the next; the layers between input and output.

**GAN.** Generator and discriminator trained against each other; produced the first realistic synthetic images.

**Gradient descent, SGD, learning rate, schedule.** Stepping parameters against the loss gradient; doing so on minibatches; the step size; its planned change over training.

**Hidden state, LSTM, gates.** A recurrent network's carried memory; the architecture with a gated cell that gradients flow through; the learned sigmoid units controlling what is remembered.

**Latent space, latent code.** The compressed representation inside an autoencoder or generative model.

**Monte Carlo tree search.** Exploring possible futures by simulating games, guided by learned policy and value networks.

**Policy, policy gradient, PPO, actor–critic.** The agent's rule for acting; adjusting it to make rewarded actions more probable; the stable standard method; combining a policy with a value critic.

**Q-learning, DQN.** Learning the value of each state–action pair; doing so with a deep network, from pixels.

**Residual connection, ResNet.** Adding a layer's input to its output so gradients bypass the layer; the architecture built from them.

**Reward, reward hacking.** The scalar signal an agent maximizes; the agent finding ways to score well that violate the designer's intent.

**RLHF.** Reinforcement learning from human feedback: a reward model learned from human preferences, then policy optimization against it.

**Self-play.** An agent training against copies of itself, so the data hardens as the agent improves.

**Transfer learning, fine-tuning.** Reusing a network trained on one task for another; continuing its training on the new task's data.

**Universal approximation.** A wide enough network can represent any continuous function; says nothing about learning it.

**Vanishing and exploding gradients.** Gradients shrinking or growing multiplicatively through layers or time steps, preventing learning.

**Weight sharing.** Using the same weights at every position (convolutions) or time step (recurrence).

**Word embedding, word2vec.** Vectors for words learned by predicting context; relationships become directions.

### Large language models (chapters 15 to 19)

**Agent, tool use.** A model acting over many steps by calling functions and observing results.

**Alignment.** Getting a system to do what its operators intend, and only that. An engineering discipline with unsolved hard cases.

**Alignment faking.** A model behaving well under training or evaluation while reasoning that it would behave differently unmonitored; demonstrated in 2024.

**Attention, self-attention, query/key/value.** A learned weighted average over positions, with weights from query–key dot products; applying it within one sequence; the three projections of each token.

**Base model, pretraining, post-training.** The raw next-token predictor; the training that produces it; everything done afterward to make it useful.

**Bradley–Terry model.** The formula for the probability that one of two options is preferred, given their scores; how a reward model is trained from human comparisons.

**Benchmark, saturation, contamination.** A fixed test set; models scoring near its ceiling; test items having leaked into training data.

**Causal mask.** Preventing each position from attending to later positions, so next-token prediction is honest.

**Chain of thought, reasoning model.** Writing intermediate steps before answering; a model trained by reinforcement learning to do so at length.

**Constitutional AI.** Post-training guided by written principles and model-generated feedback.

**Context window.** The tokens the model can attend to at once: prompt, conversation, documents, output.

**DPO.** Direct preference optimization: RLHF's objective in one supervised step, without a reward model.

**Emergent abilities.** Capabilities appearing abruptly with scale; partly a measurement artifact of all-or-nothing metrics.

**Construct validity.** Whether a test measures what it claims to; a bar exam measures the examinable part of lawyering.

**Extraction attack.** Prompting a model to reproduce memorized training data, including personal information.

**Fine-tuning, SFT, instruction tuning, LoRA.** Continuing training on task data; supervised fine-tuning on example responses, which teaches the assistant format; adapting a model by training small added low-rank matrices.

**Goodhart's law.** When a measure becomes a target, it stops being a good measure. Why benchmarks decay and rewards get hacked.

**Grokking.** A network memorizing its training set, then, long after, abruptly discovering the general rule.

**Hallucination, confabulation.** Fluent, plausible, false output; a consequence of the training objective.

**In-context learning, few-shot.** Performing a task from examples in the prompt, without weight updates.

**Inference-time compute.** Computation spent while answering, as when a reasoning model thinks; the newest axis of scaling.

**Induction head.** An attention head that implements "if this token appeared before, copy what followed it"; the mechanism behind in-context learning.

**Interpretability, probe, circuit, feature, sparse autoencoder, attribution graph.** Reading a network's mechanism; a classifier on activations; a traced mechanism; a direction responding to one concept; the method for finding features; a trace of which features caused which. **Polysemantic**: a neuron that responds to many unrelated things, which features disentangle.

**Jailbreak, prompt injection.** An input that elicits refused behavior; instructions hidden in content the model reads that it may follow.

**KL penalty.** A term keeping the RLHF-tuned model from drifting far from the SFT model it started from.

**Legible reasoning.** A chain of thought a human can read and check; models trained hard on outcomes can drift toward compressed, unreadable reasoning.

**Multi-head attention.** Several attention operations in parallel with separate weights.

**Open weights.** A model whose trained parameters are downloadable.

**Perplexity.** $e^{\text{loss}}$: the effective number of choices per token.

**Positional encoding.** Vectors added to embeddings so attention knows word order.

**Prompt engineering.** Writing the input so that the desired output is the model's most likely continuation.

**RAG.** Retrieval-augmented generation: retrieving relevant passages and putting them in the context.

**Reward model.** A network trained to predict human preference, used as the reward in RLHF.

**RLVR, verifiable reward.** Reinforcement learning from verifiable rewards: training on problems whose answers a program can check, rewarding only correctness; the recipe behind reasoning models.

**Scaling laws, Chinchilla.** Power-law relationships between loss and model size, data, and compute; the finding that data and parameters should scale together, about 20 tokens per parameter.

**Stochastic parrot.** The claim that language models manipulate form without meaning; contested by interpretability evidence.

**Sycophancy.** Telling users what they want to hear; a learned consequence of preference training.

**System card, model card.** A lab's disclosure of a model's training, evaluations, and limits.

**Temperature.** Sampling parameter; low picks the most probable token, high explores.

**Token, tokenizer, byte-pair encoding.** The units a model reads; the procedure splitting text into them; the standard merge-based method.

**Training cutoff.** The date after which the model has seen no data.

**Transformer, block, feedforward layer.** The architecture of attention plus per-token processing; one repeated unit of it; the dense sublayer where each token is processed alone.

**World model.** An internal representation of the state of the world that a system uses to predict and plan; whether language models have one is the substance of the understanding debate.

### In the world (chapters 20 to 22)

**Datasheet.** Documentation of a dataset's origin, contents, and exclusions.

**Differential privacy, machine unlearning.** Training with calibrated noise so no individual's data measurably changes the model; removing specific data from a trained model after the fact, not yet reliable.

**Distillation, quantization, batching.** Training a small model to imitate a large one; storing weights in fewer bits; serving many requests in one pass to amortize GPU cost.

**Drift.** A deployed model's inputs or accuracy changing over time as the world moves away from its training data.

**Fairness metrics.** Equal error rates, equal calibration, and others across groups; they conflict mathematically.

**Feedback loop.** A model's predictions changing the data it is next trained on.

**Frontier model.** A model at or near the best available capability.

**Guardrails.** Filters, classifiers, limits, and human review outside the model.

**Jagged frontier.** Model competence that is uneven in ways hard to see in advance.

**LLM-as-judge.** Using a strong model to grade another's outputs.

**Task horizon.** The length of task, in human time, a model completes at a given reliability.

**Training–serving skew.** Preprocessing differences between training and deployment.

**Vision-language-action model.** A model pretrained on images and text and fine-tuned to output robot motor commands as tokens.

## Formula sheet

### Learning from data

| | |
|---|---|
| Linear model | $\hat y = \mathbf{w}\cdot\mathbf{x} + b$ |
| Mean squared error | $L = \dfrac{1}{n}\sum_i (\hat y_i - y_i)^2$ |
| Least squares | $\mathbf{w} = (X^\top X)^{-1}X^\top\mathbf{y}$; one feature: $w = r\,s_y/s_x$ |
| Ridge, lasso | $+\lambda\sum w_j^2$, $\quad +\lambda\sum \lvert w_j\rvert$ |
| Sigmoid | $\sigma(z) = \dfrac{1}{1+e^{-z}}$ |
| Softmax | $p_k = \dfrac{e^{z_k}}{\sum_j e^{z_j}}$ |
| Cross-entropy | $\ell = -\log p_{\text{true class}}$; binary: $-[y\log p + (1-y)\log(1-p)]$ |
| Precision, recall, F1 | $\dfrac{TP}{TP+FP}$, $\dfrac{TP}{TP+FN}$, $\dfrac{2PR}{P+R}$ |
| Bias–variance | $\mathbb{E}[\text{error}] = \text{Bias}^2 + \text{Variance} + \text{Noise}$ |
| Gini impurity | $1 - \sum_k p_k^2$ |
| Boosting update | $F_m = F_{m-1} + \eta\,h_m$ |
| k-means objective | $\sum_c\sum_{x\in c}\lVert x - \mu_c\rVert^2$ |
| Matrix factorization | $\hat r_{ui} = \mathbf{p}_u\cdot\mathbf{q}_i$ |

### Neural networks

| | |
|---|---|
| Neuron, layer | $a = g(\mathbf{w}\cdot\mathbf{x} + b)$; $\mathbf{h} = g(W\mathbf{x} + \mathbf{b})$ |
| ReLU | $\max(0, z)$ |
| Gradient descent | $\theta \leftarrow \theta - \eta\,\nabla_\theta L$ |
| Backprop error | $\delta_\ell = (W_{\ell+1}^\top\delta_{\ell+1}) \odot g'(\mathbf{z}_\ell)$; $\quad \nabla_{W_\ell}L = \delta_\ell\,\mathbf{h}_{\ell-1}^\top$ |
| Softmax + CE gradient | $\hat{\mathbf{p}} - \mathbf{y}$ |
| Residual block | $\mathbf{h}_{\ell+1} = \mathbf{h}_\ell + f(\mathbf{h}_\ell)$ |
| Convolution | $(I * K)_{ij} = \sum_{a,b} I_{i+a,\,j+b}K_{a,b}$ |
| RNN step | $\mathbf{h}_t = g(W_h\mathbf{h}_{t-1} + W_x\mathbf{x}_t + \mathbf{b})$ |
| Forward diffusion | $\mathbf{x}_t = \sqrt{\alpha_t}\,\mathbf{x}_0 + \sqrt{1-\alpha_t}\,\boldsymbol{\epsilon}$; loss $\lVert\boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t,t)\rVert^2$ |
| Autoregression | $P(w_{1:n}) = \prod_t P(w_t\mid w_{<t})$ |
| Bellman | $V(s) = \max_a[\,r + \gamma V(s')\,]$ |
| TD update | $V(s) \leftarrow V(s) + \alpha[\,r + \gamma V(s') - V(s)\,]$ |
| Policy gradient | $\nabla J = \mathbb{E}[\nabla\log\pi(a\mid s)\,G_t]$ |

### Large language models

| | |
|---|---|
| Attention | $\text{softmax}\!\left(\dfrac{QK^\top}{\sqrt{d_k}}\right)V$, with $Q = XW_Q$, $K = XW_K$, $V = XW_V$ |
| Transformer block | $\mathbf{x} \leftarrow \text{LN}(\mathbf{x} + \text{Attn}(\mathbf{x}))$; $\mathbf{x} \leftarrow \text{LN}(\mathbf{x} + \text{FFN}(\mathbf{x}))$ |
| Parameter count | $\approx 12Ld^2 + Vd$ |
| Attention cost | $O(n^2 d)$ |
| Pretraining loss | $-\sum_t \log P_\theta(w_t\mid w_{<t})$ |
| Scaling law | $L(C) \approx (C_c/C)^{\alpha_C}$, $\alpha_C \approx 0.05$ |
| Training compute | $C \approx 6ND$; Chinchilla-optimal $D \approx 20N$ |
| Temperature sampling | $p_k \propto e^{z_k/T}$ |
| Reward model | $-\log\sigma\big(r(x,y_w) - r(x,y_l)\big)$ |
| RLHF objective | $\mathbb{E}[r(x,y)] - \beta\,\text{KL}(\pi_\theta\,\|\,\pi_{\text{SFT}})$ |
| DPO loss | $-\log\sigma\!\Big(\beta\Big[\log\frac{\pi_\theta(y_w\mid x)}{\pi_{\text{ref}}(y_w\mid x)} - \log\frac{\pi_\theta(y_l\mid x)}{\pi_{\text{ref}}(y_l\mid x)}\Big]\Big)$ |
| Verifiable-reward RL | reward $= 1$ if the final answer checks, else $0$, applied to the whole reasoning trace |
| Chinchilla with irreducible loss | $L = E + A/N^\alpha + B/D^\beta$, $E \approx 1.7$ nats |
| Multi-step reliability | $p^n$: $0.95^{20} = 0.36$ |
| Tokens per word | about 1.3 (English) |
