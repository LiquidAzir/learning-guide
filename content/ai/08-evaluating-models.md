---
title: Is the Model Any Good?
subtitle: Cross-validation, the statistics under the loss functions, the difference between predicting and explaining, and the 2019 discovery that broke a rule everyone had been taught.
part: II · Learning from Data
---

## Recap

Chapters 3 to 7 built the toolkit. This chapter is about trust: how to know, before deployment, whether a model will work, whether its confidence means anything, whether it has learned the world or an accident of the data, and whether it can tell you *why*. It also closes Part II with the most surprising finding in recent machine learning theory, which explains why the enormous models of Parts III and IV work at all.

## Cross-validation

Chapter 3 said to hold out a test set. With a small dataset, holding out a fifth of it wastes a fifth of the training data and gives a test estimate that depends on which fifth you chose. **Cross-validation** fixes both: split the data into $k$ equal folds (usually 5 or 10), train on $k - 1$ folds and test on the remaining one, rotate through all $k$ choices, and average the $k$ test scores. Every example is used for testing exactly once and for training $k - 1$ times, and the spread of the $k$ scores tells you how uncertain the estimate is.[^1] Suppose five folds give accuracies of 0.81, 0.85, 0.79, 0.84, and 0.83: the mean is 0.824 and the standard deviation about 0.024, so the **standard error** of the mean (the standard deviation divided by $\sqrt 5$) is about 0.011. A rival model scoring 0.83 on the same folds is not distinguishable from this one; a model scoring 0.87 probably is. Comparing two models without that spread is the most common way to mistake noise for progress.

Cross-validation is also how the knobs that are not learned from the data get set. The regularization strength $\lambda$, the number of trees, the depth, the learning rate, and $k$ in nearest neighbors are **hyperparameters**: choices about the model rather than parameters within it. Choose them by cross-validated score. But then the cross-validated score of the winner is optimistic, because you chose it *for* that score; the honest final number comes from a test set the selection never saw. Kaggle competitions enforce this with a hidden leaderboard, and the leaders on the public leaderboard routinely fall on the private one, because they tuned to it.

:::howto Cross-validation done right
1. Set aside a final **test set** now. Do not look at it again until the end.
2. On the rest, split into $k$ folds. If classes are imbalanced, **stratify** so each fold has the same class mix. If examples are grouped (several records per patient, per store, per day), keep each group entirely in one fold, or the model will be tested on patients it trained on.
3. For **time series**, never shuffle. Train on the past, test on the future, rolling forward. A model that can see next week's data will predict this week perfectly and fail in production.
4. Do all preprocessing (scaling, imputing missing values, selecting features) *inside* each fold, fitted on the training part only. Fitting a scaler on the whole dataset before splitting leaks the test distribution into training.
5. Choose hyperparameters by average validation score. Prefer the simplest model within one standard error of the best.
6. Retrain the chosen model on all non-test data, evaluate once on the test set, and report that number with its uncertainty.

*The most common mistake:* selecting features on the full dataset, then cross-validating the model on those features. With 10,000 candidate features and 100 examples, this produces beautiful cross-validated accuracy and a model that is pure noise. It has appeared in published genomics papers.[^2]
:::

## The statistics underneath

The losses of the earlier chapters were not arbitrary. Each is a statistical principle in disguise, and knowing which one tells you what the model is assuming.

**Squared error is maximum likelihood with Gaussian noise.** If the true value is the model's prediction plus normally distributed noise, the parameters that make the observed data most probable are exactly the ones that minimize squared error. That is why least squares is so sensitive to outliers: the Gaussian says extreme errors are nearly impossible, so the model bends to avoid them. Absolute error corresponds to a heavier-tailed noise assumption and tolerates outliers.

**Cross-entropy is maximum likelihood for categories.** Minimizing log loss is choosing the parameters under which the observed labels were most probable. So a classifier trained on cross-entropy is a probability model, which is why it can be calibrated and why its outputs can be combined with Bayes' rule.

**Regularization is a prior.** Adding $\lambda\sum w^2$ to the loss is equivalent to assuming, before seeing data, that the weights are probably small (normally distributed around zero), and finding the most probable weights given both the prior and the data. Lasso corresponds to a prior that puts weight exactly at zero. The **Bayesian** view makes all of this explicit: rather than one best set of parameters, compute a probability distribution over parameters given the data, and predict by averaging over it.[^3] Full Bayesian inference is expensive for large models, but the perspective explains what regularization is doing and provides the tools, such as uncertainty estimates, that point predictions lack.

:::key
Every loss function encodes an assumption about how the data were generated, and every regularizer encodes an assumption about what a plausible model looks like. Machine learning is statistics with a bigger computer and a narrower question. When a model fails, the assumption behind its loss is often why: squared error on data with outliers, cross-entropy on labels that are themselves noisy, a Gaussian prior on weights that should be sparse.
:::

## Predicting is not explaining

A model that predicts well has learned that certain features co-occur with certain outcomes. It has not learned why, and the difference is not academic.

Leo Breiman, who invented random forests, wrote in 2001 about "two cultures" in statistics: one that builds models of the data-generating mechanism and cares about interpretable parameters, and one that builds black boxes and cares about prediction.[^4] Machine learning is the second culture, and for prediction it wins decisively. But most decisions are not predictions. "Which customers will churn?" is a prediction. "Will offering a discount stop them?" is a **causal** question, and a model trained on historical data cannot answer it, because in the historical data the customers who got discounts were not chosen at random. Perhaps they were the ones already complaining. A model will faithfully learn that discounts predict churn.

The tools for causal questions are those of the economics guide's methods chapter: randomized experiments (which every large technology company now runs continuously as **A/B tests**), natural experiments, and the explicit causal modeling developed by Judea Pearl and others.[^5] Machine learning contributes to them (models estimate the effects better) but does not replace them. The practical rule: a predictive model tells you *who* to act on; only an experiment tells you *whether the action works*.

**Distribution shift** is the other face of the same issue. A predictive model assumes the future resembles the training past. When the world changes (a pandemic, a new competitor, a policy the model's own predictions caused), the correlations it learned break. Models of consumer behavior trained through 2019 failed in 2020; models of credit risk trained in a boom fail in a bust. Monitoring for shift, by watching whether the distribution of inputs and the accuracy of predictions drift over time, is a permanent job (chapter 20).

## The reproducibility problem

Machine learning research has its own version of the replication crisis. A 2018 survey of 400 papers at two top conferences found that only a fifth to a third of the details needed to reproduce them were documented; a 2019 analysis of recommendation-systems research found that most claimed improvements over baselines vanished when the baselines were properly tuned; and a 2021 review of 62 papers applying deep learning to COVID-19 chest imaging found none suitable for clinical use, mostly because of leakage, biased datasets, and evaluation on the wrong data.[^6] The causes are the same as in psychology: pressure to publish positive results, many tuning choices that can be made after seeing the test score, and benchmarks that models overfit to across the whole community. The fixes are also the same: preregistered evaluation, held-out test sets that nobody sees, and the habit, when a result seems too good, of looking for the leak.

## The rule that broke

Chapter 3 gave the classical picture: as models get more flexible, test error falls, then rises, in a U shape; the best model is at the bottom. Everyone was taught this. It is in every textbook. And it is wrong for the models that now matter.

In 2018 and 2019 several groups showed that if you keep increasing a model's size past the point where it can fit the training data perfectly, test error, after rising, *falls again*, often to below its earlier minimum.[^7] Belkin and colleagues called the shape **double descent**. (The peak at the threshold had been seen in the statistical physics of learning in the early 1990s and forgotten, which the field's own history chapter would have predicted.) Nakkiran and colleagues showed it in convolutional networks, residual networks, and transformers, and showed the same shape as a function of training time and, disturbingly, of dataset size: there are regimes where more data makes a model worse. The point where the model just barely fits the data, the **interpolation threshold**, is the worst place to be; far past it, in the wildly **overparameterized** regime where parameters outnumber examples by orders of magnitude, is often the best.

{{fig:double-descent|The classical U-shaped test error (dashed) and the double-descent curve actually observed for modern models (solid). Test error rises toward the interpolation threshold, where the model can just fit every training point, then falls again as the model grows far larger than the data. Training error (dotted) falls to zero and stays there.}}

Why? The leading explanation is that when a model has far more parameters than needed, there are many ways to fit the training data exactly, and gradient descent finds the one with the smallest, smoothest weights, an **implicit regularization** that no one put in the loss. Bartlett and colleagues proved this rigorously for the simplest case, linear regression with more features than examples: interpolating the noise is harmless when there are enough "extra" directions to absorb it.[^8] For deep networks the theory is incomplete. The practical consequence, so far, is the one that organizes the rest of this guide: **past the threshold, bigger models trained on more data have kept getting better**, and the classical fear of overfitting, still correct for small models and small data, turned out to be the wrong instinct at scale. "So far" is doing real work in that sentence: the same experiments found regimes where more data hurt, large models still memorize, and nobody has a theory that says where the trend stops. That is why chapters 9 to 19 are about ever larger networks, and why the bet described in chapter 2 paid off.

:::frontier
The theory of why large networks generalize is one of the field's central open problems. Candidates include implicit regularization by gradient descent, the geometry of the loss landscape (flat minima generalize better than sharp ones), the network's inductive bias toward simple functions, and the observation that networks fit clean signal before noise. Grokking, in which a network memorizes its training set and then, thousands of steps later, abruptly generalizes, shows that the picture is stranger still. The Latest Research section tracks the work.
:::

:::formulas
| Idea | Formula |
|---|---|
| k-fold CV estimate | $\dfrac{1}{k}\sum_{j=1}^{k} \text{error}_j$, with standard error from the spread of the $k$ scores |
| Squared error as likelihood | minimizing $\sum (y_i - \hat y_i)^2$ = maximizing likelihood under $y = f(x) + \mathcal{N}(0, \sigma^2)$ |
| Cross-entropy as likelihood | minimizing $-\sum \log p(y_i \mid x_i)$ = maximum likelihood for categorical labels |
| Regularization as prior | $\lambda\lVert\mathbf{w}\rVert^2$ penalty = Gaussian prior on weights; $\lambda\lVert\mathbf{w}\rVert_1$ = Laplace prior (lasso) |
| Bayes' rule for parameters | $P(\theta \mid \text{data}) \propto P(\text{data} \mid \theta)\,P(\theta)$ |
| Interpolation threshold | where training error first reaches zero (roughly parameters $\approx$ examples for linear models): the double-descent peak |
:::

:::know
- Cross-validation uses every example for both training and testing; do preprocessing inside the folds, respect groups and time, and keep a final untouched test set.
- Hyperparameters are chosen by validation; the winner's validation score is optimistic.
- Losses are likelihoods and regularizers are priors. Know what your loss assumes.
- Prediction is not causation. A model says who to act on; only an experiment says whether the action works.
- Models decay under distribution shift. Monitor them.
- Published results are often not reproducible; leakage and tuned baselines are the usual reasons.
- Past the interpolation threshold, bigger models generalize *better*. The classical overfitting picture is right for small models and wrong at scale.
:::

## Summary

- Cross-validation estimates generalization from limited data and selects hyperparameters; its pitfalls are leakage through preprocessing, grouped data, and time.
- The standard losses are maximum likelihood under specific noise assumptions, and regularizers are priors; the Bayesian view makes both explicit and adds uncertainty.
- Predictive models learn correlations, not causes; causal questions need experiments or causal inference, and models fail when the world shifts.
- The field has a reproducibility problem with familiar causes and familiar remedies.
- Double descent overturned the classical bias–variance picture for large models: past the interpolation threshold, more parameters help, which is the theoretical license for the scale of modern AI.

[^1]: Stone, M. (1974). "Cross-Validatory Choice and Assessment of Statistical Predictions." *Journal of the Royal Statistical Society, Series B*, 36(2), 111–147 (with discussion). [doi:10.1111/j.2517-6161.1974.tb00994.x](https://doi.org/10.1111/j.2517-6161.1974.tb00994.x). Hastie, T., Tibshirani, R., Friedman, J. (2009). *The Elements of Statistical Learning*, 2nd ed. Springer, §7.10.
[^2]: Ambroise, C., McLachlan, G. J. (2002). "Selection bias in gene extraction on the basis of microarray gene-expression data." *PNAS*, 99(10), 6562–6566. [doi:10.1073/pnas.102102699](https://doi.org/10.1073/pnas.102102699)
[^3]: Murphy, K. P. (2022). *Probabilistic Machine Learning: An Introduction*. MIT Press. Chapters 4 and 11. Free at [probml.github.io/pml-book](https://probml.github.io/pml-book/book1.html). Bishop, C. M. (2006). *Pattern Recognition and Machine Learning*. Springer, chapter 3.
[^4]: Breiman, L. (2001). "Statistical Modeling: The Two Cultures." *Statistical Science*, 16(3), 199–231. [doi:10.1214/ss/1009213726](https://doi.org/10.1214/ss/1009213726)
[^5]: Pearl, J. (2009). *Causality: Models, Reasoning, and Inference*, 2nd ed. Cambridge University Press. Pearl, J., Mackenzie, D. (2018). *The Book of Why*. New York: Basic Books. Kohavi, R., Tang, D., Xu, Y. (2020). *Trustworthy Online Controlled Experiments: A Practical Guide to A/B Testing*. Cambridge University Press.
[^6]: Gundersen, O. E., Kjensmo, S. (2018). "State of the Art: Reproducibility in Artificial Intelligence." *AAAI-18*, 1644–1651. [doi:10.1609/aaai.v32i1.11503](https://doi.org/10.1609/aaai.v32i1.11503). Dacrema, M. F., Cremonesi, P., Jannach, D. (2019). "Are We Really Making Much Progress? A Worrying Analysis of Recent Neural Recommendation Approaches." *RecSys '19*, 101–109. [doi:10.1145/3298689.3347058](https://doi.org/10.1145/3298689.3347058). Roberts, M. et al. (2021). "Common pitfalls and recommendations for using machine learning to detect and prognosticate for COVID-19 using chest radiographs and CT scans." *Nature Machine Intelligence*, 3, 199–217. [doi:10.1038/s42256-021-00307-0](https://doi.org/10.1038/s42256-021-00307-0)
[^7]: Belkin, M., Hsu, D., Ma, S., Mandal, S. (2019). "Reconciling modern machine-learning practice and the classical bias–variance trade-off." *PNAS*, 116(32), 15849–15854. [doi:10.1073/pnas.1903070116](https://doi.org/10.1073/pnas.1903070116). Nakkiran, P., Kaplun, G., Bansal, Y., Yang, T., Barak, B., Sutskever, I. (2021). "Deep double descent: where bigger models and more data hurt." *Journal of Statistical Mechanics*, 2021, 124003 (first presented at ICLR 2020; arXiv December 2019). [doi:10.1088/1742-5468/ac3a74](https://doi.org/10.1088/1742-5468/ac3a74). Earlier observations of the peak: Opper, M. (1995). "Statistical Mechanics of Learning: Generalization." In *The Handbook of Brain Theory and Neural Networks*, 922–925. MIT Press.
[^8]: Bartlett, P. L., Long, P. M., Lugosi, G., Tsigler, A. (2020). "Benign overfitting in linear regression." *PNAS*, 117(48), 30063–30070. [doi:10.1073/pnas.1907378117](https://doi.org/10.1073/pnas.1907378117). Zhang, C., Bengio, S., Hardt, M., Recht, B., Vinyals, O. (2017). "Understanding deep learning requires rethinking generalization." *ICLR 2017*. [arxiv.org/abs/1611.03530](https://arxiv.org/abs/1611.03530). Power, A. et al. (2022). "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets." [arxiv.org/abs/2201.02177](https://arxiv.org/abs/2201.02177)
