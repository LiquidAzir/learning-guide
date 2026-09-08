---
title: Glossary and Formula Sheet
subtitle: Definitions and reference facts to return to as you read. Search for a term, check the distinction, and follow its chapter link for the explanation.
part: VI · The Edge
---

## How to use this

The first half is the glossary, grouped by the part of the guide that introduces each term, alphabetical within each group. The second half is the formula sheet: the dozen or so equations that machine learning actually rests on, with each symbol named.

## Glossary

### Foundations (chapters 1 to 3)

**Bias–variance trade-off.** Error from a model too simple to capture the pattern (bias) versus error from a model too sensitive to the particular training set (variance). Classical wisdom: balance them. Modern finding: very large models escape the trade-off (double descent).

**Data leakage.** Information available during training that will not be available in use, such as a field filled in after the outcome. Produces spectacular fake results.

**Example.** One data record used for learning or evaluation; in supervised learning it pairs inputs with a target. See chapter 3.

**Feature.** An input variable or representation supplied to a model. See chapter 3.

**Generalization.** Performing well on data not seen in training. The point of the whole enterprise.

**Hyperparameter.** A setting chosen by the practitioner rather than learned from data: learning rate, tree depth, regularization strength.

**Inductive bias.** The assumptions built into a model's architecture (locality in convolutions, additivity in linear models). Needed because no method works for all problems.

**Label.** The target answer supplied for a training example in supervised learning. See chapter 3.

**Loss function.** A formula scoring how wrong a model's predictions are. Training minimizes it.

**Model.** A mathematical rule that maps inputs to predictions or generated outputs. See chapter 3.

**Optimizer.** The procedure that adjusts parameters to reduce loss; almost always a form of gradient descent.

**Overfitting.** Learning details of the training sample that do not generalize well to new data. See chapter 3.

**Parameter.** A value within a model, such as a weight, adjusted during training. See chapter 3.

**Regularization.** Penalizing model complexity so that fitting the data has a price.

**Reinforcement learning.** Learning a policy through actions and their rewards, often with delayed consequences; developed further in chapter 14. See chapter 3.

**Supervised learning.** Learning from examples with supplied target answers. See chapter 3.

**Test set.** Data reserved for a final evaluation after development choices are finished. See chapter 3.

**Training set.** Data used to fit model parameters and learned preprocessing. See chapter 3.

**Underfitting.** Failing to capture useful structure even in the training data, because of limited capacity, unsuitable features, or inadequate fitting. See chapter 3.

**Unsupervised learning.** Finding structure in data without a target label for each example. See chapter 3.

**Validation set.** Held-out data used to compare models and make development choices. See chapter 3.

### Learning from data (chapters 4 to 8)

**A/B test.** A randomized experiment comparing two versions; the only way to learn a causal effect from a deployed system.

**Accuracy.** Fraction of all predictions that are correct; can mislead when one class dominates. See chapter 5.

**AUC.** Area under the ROC curve. For the usual binary ranking interpretation, 0.5 is chance-level ranking and 1 is perfect ranking; a high AUC does not by itself pick a useful operating threshold. See chapter 5.

**Bagging.** Combining models trained on resampled datasets to reduce sensitivity to individual samples. See chapter 6.

**Boosting.** Building a sequence of models that improve on the preceding ensemble's errors or loss. See chapter 6.

**Calibration.** A model that says 70 percent is right 70 percent of the time.

**Clustering.** Grouping examples using a chosen notion of similarity, without supplied group labels. See chapter 7.

**Coefficient or weight.** A parameter multiplying an input or intermediate feature. See chapter 4.

**Collaborative filtering.** Predicting preferences using patterns across users and items. See chapter 7.

**Confusion matrix.** The two-by-two (or larger) table of predicted versus actual classes.

**Cross-entropy, log loss.** The classification loss: minus the log of the probability assigned to the correct answer. Maximum likelihood for categories.

**Cross-validation.** Rotating which fold of the data is held out, so every example is tested once.

**Curse of dimensionality.** In many dimensions everything is far from everything, so nearest-neighbor methods and density estimates fail.

**Decision tree.** A classifier that asks a sequence of yes/no questions about features, chosen greedily to purify the classes.

**Distribution shift.** The world changing so that training data no longer resembles deployment data.

**Double descent.** Test error falling, rising to a peak at the interpolation threshold, then falling again as models grow far larger than the data.

**Embedding, representation.** A learned vector standing for an entity, positioned so that geometry encodes meaning.

**F1.** The harmonic mean of precision and recall; useful for some comparisons, but it does not include true negatives or every cost of mistakes. See chapter 5.

**Feature importance.** A measure of how much a feature contributes under a specified model and method; not automatically causal importance. See chapter 6.

**Gradient boosting.** Adding successive models to reduce a loss, commonly by fitting trees to gradient-based targets. See chapter 6.

**Intercept or bias term.** An additive parameter that shifts a model's output; distinct from statistical or social bias. See chapter 4.

**Interpolation threshold.** Model size at which training data can just be fit exactly; the worst point for test error.

**k-means.** A clustering method that alternates between assigning points to k centers and updating those centers. The user chooses k. See chapter 7.

**k-nearest neighbors.** Classify by vote of the $k$ most similar training examples.

**Kernel.** A function that supplies inner products in an implicit feature space, allowing some methods to use nonlinear boundaries without explicitly constructing every feature. See chapter 5.

**Lasso.** Regularization with an L1 penalty on weights; can make fitted weights exactly zero. See chapter 8.

**Least squares.** Choosing the line that minimizes summed squared error; solvable by formula.

**Logistic regression.** A classifier that applies a sigmoid to a linear score to model a binary outcome probability. See chapter 5.

**Matrix factorization.** Approximating a data matrix as the product of smaller matrices, often to learn latent user and item features. See chapter 7.

**Maximum likelihood.** Choosing parameters under which the observed data were most probable. Squared error and cross-entropy are both instances.

**Naive Bayes.** Bayes' theorem with the assumption that features are independent given the class. The first spam filters.

**PCA.** Principal component analysis; finds orthogonal directions of greatest variance for a linear lower-dimensional representation. See chapter 7.

**Precision.** Among predicted positives, the fraction that are actually positive. See chapter 5.

**R².** Fraction of variation explained relative to a mean-prediction baseline in the usual regression setting; can be negative on evaluation data. See chapter 4.

**Random forest.** Many decision trees on bootstrap samples with random feature subsets, voting.

**Recall.** Among actual positives, the fraction detected; also called sensitivity. See chapter 5.

**Ridge.** Regularization with an L2 penalty on weights; shrinks them toward zero without usually setting them exactly to zero. See chapter 8.

**RMSE.** Root mean squared error; a prediction-error measure in the same units as the target, sensitive to large errors. See chapter 4.

**ROC curve.** A graph of the true positive rate against the false positive rate as the classification threshold changes. It shows the trade-off between catching positives and raising false alarms. See chapter 5.

**Self-supervised learning.** Manufacturing labels from unlabeled data by hiding part of it and predicting it.

**SHAP.** A family of attribution methods based on Shapley values, distributing a prediction relative to a baseline among features. See chapter 6.

**Sigmoid.** The S-shaped function 1/(1 + exp(−z)), mapping a real score into the interval from 0 to 1. See chapter 5.

**Softmax.** Turns a vector of scores into probabilities that sum to 1: $e^{z_k}/\sum_j e^{z_j}$.

**Specificity.** Among actual negatives, the fraction correctly identified as negative. See chapter 5.

**Support vector machine.** A method that chooses a decision boundary using a margin between classes, with allowances for violations in its soft-margin form. See chapter 5.

**t-SNE.** A method for visualizing local similarities in a low-dimensional map; global distances and cluster sizes can mislead. See chapter 7.

**Threshold.** The probability cutoff for calling a prediction positive; a choice about which error to prefer.

**UMAP.** A dimension-reduction method built around neighborhood relationships; its visualization depends on settings and should not be treated as a literal map of every distance. See chapter 7.

**XGBoost.** An optimized implementation of gradient-boosted trees. See chapter 6.

### Neural networks (chapters 9 to 14)

**Activation function.** A transformation applied within a neural network, usually nonlinear so stacked layers can express more than one linear map. See chapter 9.

**Actor–critic.** A design pairing a policy, the actor, with a learned value estimate, the critic. See chapter 14.

**Adam.** The default optimizer: gradient descent with momentum and per-parameter step scaling.

**Adversarial example.** An input perturbed imperceptibly so that a network misclassifies it confidently.

**Autoencoder.** A network trained to reconstruct an input through an intermediate representation. See chapter 13.

**Backpropagation.** The chain rule organized as a backward pass computing the gradient of the loss for every weight.

**Batch normalization.** Normalizes activations using statistics across a minibatch during training; typical implementations use accumulated statistics at inference. See chapter 10.

**Bellman equation.** A recursive relation connecting a value with immediate reward and the value of subsequent states. See chapter 14.

**Convolution.** An operation applying shared local weights across an input; neural-network implementations commonly use cross-correlation under this name. See chapter 11.

**Credit assignment.** Deciding which of many earlier actions deserve credit for a reward that arrived later.

**Data augmentation.** Enlarging training data with transformed copies (flips, crops, noise).

**Diffusion model.** A generative model trained to predict added noise, which generates by removing noise from static step by step.

**Discount factor $\gamma$.** How much future reward counts relative to present.

**DQN.** Deep Q-network; uses a neural network to approximate action values, with techniques such as replay and a target network. See chapter 14.

**Dropout.** Randomly zeroing neurons during training so the network learns redundant features.

**Early stopping.** Halting training when validation loss stops improving.

**Epoch.** One pass through the training examples. See chapter 10.

**Exploration versus exploitation.** Trying new actions to learn about them versus repeating what has worked.

**Feature map.** The activations produced as a filter is applied across an input. See chapter 11.

**Feedforward network.** A network whose computation proceeds from inputs to outputs without recurrent loops. See chapter 9.

**Filter.** A learned set of local weights used to detect a pattern. See chapter 11.

**Fine-tuning.** Continuing training of a pretrained model on selected data for a new purpose. See chapter 11.

**GAN.** Generator and discriminator trained against each other; produced the first realistic synthetic images.

**Gate.** A learned control, often between zero and one, that regulates how much information is kept, added, or passed on. See chapter 12.

**Gradient descent.** Updating parameters in the negative-gradient direction to reduce a loss locally. See chapter 10.

**Hidden layer.** An intermediate layer whose outputs serve as features for later layers rather than as the final answer. See chapter 9.

**Hidden state.** A representation carried through a sequence to summarize information from previous steps. See chapter 12.

**Latent code.** A particular point or vector in a latent space. See chapter 13.

**Latent space.** The space of internal variables through which a model represents or generates data. See chapter 13.

**Layer normalization.** Normalizes a set of features within each example or token, avoiding dependence on other examples in a minibatch. See chapter 10.

**Learning rate.** The factor controlling the size of a parameter update. See chapter 10.

**Learning-rate schedule.** A rule for changing the learning rate over training. See chapter 10.

**LSTM.** Long short-term memory; a recurrent architecture with a cell state and learned gates for controlling information flow. See chapter 12.

**Minibatch.** A subset of examples used together to estimate a gradient for an update. See chapter 10.

**Monte Carlo tree search.** Exploring possible futures by simulating games, guided by learned policy and value networks.

**Multilayer perceptron.** A feedforward network built from fully connected layers and activation functions. See chapter 9.

**Policy gradient.** A method for improving a policy using an estimate of the gradient of expected return. See chapter 14.

**Policy.** A rule or probability distribution for choosing actions from observations or states. See chapter 14.

**Pooling.** Combining nearby activations, for example by taking a maximum or average, to reduce spatial resolution. See chapter 11.

**PPO.** Proximal policy optimization; a policy-gradient method that limits the incentive for very large policy changes during an update. See chapter 14.

**Q-learning.** Learning action values by updating them toward reward plus an estimate of the best future value. See chapter 14.

**ReLU.** Rectified linear unit; returns zero for negative inputs and the input itself otherwise. See chapter 9.

**Residual connection.** A shortcut that adds a block's input to a learned transformation of it. See chapter 10.

**ResNet.** A family of neural networks built around residual connections, especially influential in computer vision. See chapter 10.

**Reward hacking.** Achieving a high specified reward through behavior that defeats the designer's intended purpose. See chapter 14.

**Reward.** The numerical feedback used to define what a reinforcement-learning agent is encouraged to achieve. See chapter 14.

**RLHF.** Reinforcement learning from human feedback: a reward model learned from human preferences, then policy optimization against it.

**Self-play.** An agent training against copies of itself, so the data hardens as the agent improves.

**SGD.** Stochastic gradient descent; estimates updates using sampled examples, usually minibatches. See chapter 10.

**Transfer learning.** Reusing knowledge or representations learned in one setting to help in another. See chapter 11.

**Universal approximation.** A wide enough network can represent any continuous function; says nothing about learning it.

**VAE.** Variational autoencoder; learns a probabilistic latent representation and a decoder under a reconstruction-and-regularization objective. See chapter 13.

**Value function.** Expected future return from a state, or a state–action pair, under specified behavior. See chapter 14.

**Vanishing and exploding gradients.** Gradients shrinking or growing multiplicatively through layers or time steps, preventing learning.

**Weight sharing.** Using the same weights at every position (convolutions) or time step (recurrence).

**Word embedding.** A vector representation of a word, learned so useful relationships are reflected in the representation. See chapter 12.

**word2vec.** A family of methods that learns word vectors through predicting words from nearby context or vice versa. See chapter 12.

### Large language models (chapters 15 to 19)

**Agent.** A system that selects and carries out steps toward an objective, often combining a model with tools and feedback. See chapter 18.

**Alignment faking.** A model behaving well under training or evaluation while reasoning that it would behave differently unmonitored; demonstrated in 2024.

**Alignment.** Getting a system to do what its operators intend, and only that. An engineering discipline with unsolved hard cases.

**Attention.** A method of combining information using weights derived from relevance scores. See chapter 15.

**Attribution graph.** A representation of estimated influences among features or components in a computation, with limits set by the analysis method. See chapter 19.

**Base model.** A model after pretraining and before further adaptation for assistant behavior or a specialized role. See chapter 17.

**Benchmark contamination.** Evaluation content, or closely related answers, entering training or development in a way that compromises the test. See chapter 19.

**Benchmark saturation.** A stage at which scores leave little room to distinguish stronger systems on that benchmark. See chapter 19.

**Benchmark.** A specified collection of tasks and scoring rules used to compare systems. See chapter 19.

**Bradley–Terry model.** The formula for the probability that one of two options is preferred, given their scores; how a reward model is trained from human comparisons.

**Byte-pair encoding.** A tokenization approach that repeatedly merges frequent adjacent units to build a vocabulary. See chapter 15.

**Causal mask.** Preventing each position from attending to later positions, so next-token prediction is honest.

**Chain of thought.** A sequence of intermediate reasoning expressed in text; it need not faithfully reveal every internal computation. See chapter 17.

**Chinchilla.** A study of compute-efficient language-model training, emphasizing the balance between model size and training data. See chapter 16.

**Circuit.** A proposed set of model components and interactions that implements a behavior. See chapter 19.

**Constitutional AI.** Post-training guided by written principles and model-generated feedback.

**Construct validity.** Whether a test measures what it claims to; a bar exam measures the examinable part of lawyering.

**Context window.** The tokens the model can attend to at once: prompt, conversation, documents, output.

**DPO.** Direct preference optimization: RLHF's objective in one supervised step, without a reward model.

**Emergent abilities.** Capabilities appearing abruptly with scale; partly a measurement artifact of all-or-nothing metrics.

**Extraction attack.** Prompting a model to reproduce memorized training data, including personal information.

**Feedforward sublayer.** A transformation applied separately at each token position after or alongside information mixing through attention. See chapter 15.

**Few-shot prompting.** Providing a small number of demonstrations in the prompt to illustrate a task. See chapter 18.

**Goodhart's law.** When a measure becomes a target, it stops being a good measure. Why benchmarks decay and rewards get hacked.

**Grokking.** A network memorizing its training set, then, long after, abruptly discovering the general rule.

**Hallucination, confabulation.** Fluent, plausible, false output; a consequence of the training objective.

**In-context learning.** Adapting a response using information in the prompt without changing the model's weights. See chapter 18.

**Induction head.** An attention head that implements "if this token appeared before, copy what followed it"; the mechanism behind in-context learning.

**Inference-time compute.** Computation spent while answering, as when a reasoning model thinks; the newest axis of scaling.

**Instruction tuning.** A form of fine-tuning using examples of following instructions. See chapter 17.

**Interpretability.** The study of how a model produces its behavior and how its internal representations can be understood. See chapter 19.

**Interpretable feature.** A pattern or direction in model activations assigned a meaning through analysis; distinct from a supplied input feature. See chapter 19.

**Jailbreak.** An attempt to make a model bypass its intended behavioral restrictions. See chapter 18.

**KL penalty.** A term keeping the RLHF-tuned model from drifting far from the SFT model it started from.

**Legible reasoning.** A chain of thought a human can read and check; models trained hard on outcomes can drift toward compressed, unreadable reasoning.

**LoRA.** Low-rank adaptation; fine-tuning small low-rank updates while keeping the original weight matrices fixed. See chapter 17.

**Model card.** Documentation of a model's intended uses, evaluation, and limitations. See chapter 21.

**Multi-head attention.** Several attention operations in parallel with separate weights.

**Open weights.** A model whose trained parameters are downloadable.

**Perplexity.** $e^{\text{loss}}$: the effective number of choices per token.

**Positional encoding.** Vectors added to embeddings so attention knows word order.

**Post-training.** Further training after pretraining, such as instruction tuning or reinforcement learning, to shape behavior. See chapter 17.

**Pretraining.** Initial training on broad data to learn reusable capabilities. See chapter 17.

**Probe.** A trained readout used to test what information can be recovered from internal activations; recoverability alone does not prove the model uses it causally. See chapter 19.

**Prompt engineering.** Writing the input so that the desired output is the model's most likely continuation.

**Prompt injection.** Instructions in lower-trust material that try to redirect a system away from the authorized task. See chapter 18.

**Query, key, and value.** The vectors used to calculate relevance and carry information. Queries are compared with keys; the resulting weights combine values. See chapter 15.

**RAG.** Retrieval-augmented generation: retrieving relevant passages and putting them in the context.

**Reasoning model.** A model trained or configured to spend additional computation on intermediate problem solving before producing an answer. See chapter 17.

**Reward model.** A network trained to predict human preference, used as the reward in RLHF.

**RLVR.** Reinforcement learning with verifiable rewards; the checking procedure defines what success means and can itself be incomplete. See chapter 17.

**Scaling law.** An empirical relationship between performance and quantities such as parameters, data, or computation within a measured regime. See chapter 16.

**Self-attention.** Attention among positions in the same input representation. See chapter 15.

**Sparse autoencoder.** A model that reconstructs activations using a relatively small number of active learned features. See chapter 19.

**Stochastic parrot.** The claim that language models manipulate form without meaning; contested by interpretability evidence.

**Supervised fine-tuning (SFT).** Further training on supplied input–output demonstrations. See chapter 17.

**Sycophancy.** Telling users what they want to hear; a learned consequence of preference training.

**System card.** Documentation that also considers the surrounding system, its mitigations, and risks; conventions vary between organizations. See chapter 21.

**Temperature.** Sampling parameter; low picks the most probable token, high explores.

**Token.** A unit into which text or other data is divided for a model; not necessarily a whole word. See chapter 15.

**Tokenizer.** The procedure mapping input into tokens and, where supported, back into text. See chapter 15.

**Tool use.** Calling an external function or system to retrieve information, calculate, or take an action. See chapter 18.

**Training cutoff.** The date after which the model has seen no data.

**Transformer block.** A repeated unit containing attention and a feedforward sublayer, typically with normalization and residual connections. See chapter 15.

**Transformer.** A neural-network architecture built around attention and position-wise transformations. See chapter 15.

**Verifiable reward.** A reward based on an outcome that can be checked by a specified procedure, such as passing tests. See chapter 17.

**World model.** An internal representation of the state of the world that a system uses to predict and plan; whether language models have one is the substance of the understanding debate.

### In the world (chapters 20 to 22)

**Batching.** Processing several inputs together to use hardware more efficiently, with a possible latency trade-off. See chapter 20.

**Datasheet.** Documentation of a dataset's origin, contents, and exclusions.

**Differential privacy.** A formal guarantee limiting how much an analysis's output distribution can change when one person's contribution changes, under stated parameters. See chapter 21.

**Distillation.** Training a model to learn from another model's outputs or behavior. See chapter 20.

**Drift.** A deployed model's inputs or accuracy changing over time as the world moves away from its training data.

**Fairness metrics.** Equal error rates, equal calibration, and others across groups; they conflict mathematically.

**Feedback loop.** A model's predictions changing the data it is next trained on.

**Frontier model.** A model at or near the best available capability.

**Guardrails.** Filters, classifiers, limits, and human review outside the model.

**Jagged frontier.** Model competence that is uneven in ways hard to see in advance.

**LLM-as-judge.** Using a strong model to grade another's outputs.

**Machine unlearning.** Methods intended to remove the influence of selected training data from a model; the meaning and strength of removal guarantees vary. See chapter 21.

**Quantization.** Representing weights or activations with reduced numerical precision to save memory or computation. See chapter 20.

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
| Original transformer block (post-norm; chapter 15 also explains pre-norm) | $\mathbf{x} \leftarrow \text{LN}(\mathbf{x} + \text{Attn}(\mathbf{x}))$; $\mathbf{x} \leftarrow \text{LN}(\mathbf{x} + \text{FFN}(\mathbf{x}))$ |
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
