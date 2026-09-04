---
title: Trees and Forests
subtitle: Twenty questions as a learning algorithm. Decision trees, why one tree is bad and a thousand are excellent, and the method that has won most data competitions for a decade.
part: II · Learning from Data
---

## Recap

The models so far draw straight lines and bend them. This chapter takes a completely different approach, one that asks yes-or-no questions, and arrives at the family of methods that, for the tabular data most businesses actually have, still beats deep learning. It also introduces the most important practical idea in classical machine learning: that combining many mediocre models produces an excellent one.

## Twenty questions

A **decision tree** classifies by asking a sequence of questions about the features. Is income above \$40,000? If not, has the applicant defaulted before? If so, is the loan larger than \$20,000? Each question splits the data; each leaf of the tree holds the examples that answered the same way, and the prediction for a new example is the majority label (or the average value, for regression) in the leaf it lands in.

The tree is learned greedily. At the root, try every feature and every threshold, and pick the split that best separates the classes: the one that makes the two resulting groups as **pure** as possible, measured by a formula such as **Gini impurity** or **entropy** (the same information measure as chapter 5's cross-entropy). Then repeat inside each group, recursively, until the groups are pure or too small to split. The algorithm dates from the 1980s in two versions, Breiman's CART and Quinlan's ID3, and it has not changed much since.[^1]

:::math Choosing a split
For a node containing a fraction $p_k$ of each class $k$, the Gini impurity is
$$G = 1 - \sum_k p_k^2$$
which is 0 when the node is pure (all one class) and largest when classes are evenly mixed. A candidate split divides the node into two children; its quality is the weighted average of the children's impurities, weighted by how many examples fall in each. Pick the split with the lowest weighted impurity. That is all: the tree is built by repeatedly asking "which single question reduces the mixing most?"

*Example.* A node has 40 defaulters and 60 payers: $G = 1 - (0.4^2 + 0.6^2) = 0.48$. Splitting on "prior default" gives one child with 30 defaulters and 10 payers ($G = 0.375$) and another with 10 and 50 ($G = 0.278$). Weighted: $0.4 \times 0.375 + 0.6 \times 0.278 = 0.317$. The split cut the impurity by a third, and it would be chosen if no other feature did better.
:::

Trees have real virtues. They handle numbers and categories together without scaling. They ignore irrelevant features (those are never chosen for a split). They capture interactions and thresholds naturally: "high income *and* no prior default" is one path. And they are **interpretable**: you can print the tree and read the rules, which regulators, doctors, and skeptical managers appreciate.

They have one crippling vice. A single tree, grown until its leaves are pure, memorizes the training data; it is the wiggly curve of chapter 3 in a different costume. Prune it back and it underfits. And it is **unstable**: change a few training examples and the top split may change, which changes everything below. Trees have low bias and enormous variance. That vice turned out to be a virtue, once someone thought of growing a thousand of them.

## The wisdom of crowds, for models

Here is a fact from statistics that became the most useful idea in applied machine learning. If you average many noisy estimates that are *independent*, the noise cancels and the average is far more accurate than any single one. Francis Galton found in 1907 that the median of 787 fairgoers' guesses of an ox's weight was within one percent of the truth.[^2] The same works for models: average many overfitted, high-variance models and the variance averages away, leaving the low bias.

The catch is independence. Train the same tree on the same data a thousand times and you get the same tree. Leo Breiman's solution, in 1996 and 2001, was to inject randomness twice.[^3] **Bagging** (bootstrap aggregating) trains each tree on a different random resample of the training data, drawn with replacement so that each resample omits about a third of the examples and duplicates others. **Random feature selection** lets each split consider only a random subset of the features, so that different trees are forced to use different questions. The result is a **random forest**: hundreds of decorrelated trees, each overfitting differently, voting. It is nearly impossible to overfit by adding trees, needs almost no tuning, gives a free estimate of test error from the examples each tree never saw, and ranks features by how much they reduce impurity across the forest. For a decade it was the default answer to "what model should I try first?"

{{fig:decision-tree|A small decision tree for loan default and, beside it, the idea of an ensemble: many trees trained on different resamples of the data, each imperfect, voting on the answer. The vote is more accurate than any single tree because their errors are largely independent.}}

## Boosting: learning from mistakes

A forest builds its trees in parallel and treats them equally. **Boosting** builds them in sequence, each one trained to fix what the previous ones got wrong.

Start with a very simple model, say a tree with one split (a **stump**). Look at its errors. Train a second stump that focuses on the examples the first got wrong, by weighting them more heavily or by fitting the residuals. Add it to the first with a small weight. Repeat, hundreds or thousands of times. Each model is weak; the sum is strong. Freund and Schapire's AdaBoost of 1995 was the first practical version and won the Gödel Prize; Friedman showed in 2001 that boosting is gradient descent in the space of functions, adding at each step the tree that most reduces the loss, and **gradient boosting** was born.[^4]

:::math Gradient boosting in one line
The model after $m$ rounds is a sum of small trees,
$$F_m(x) = F_{m-1}(x) + \eta\, h_m(x)$$
where $h_m$ is a tree fitted to the **residuals**, the current errors $y_i - F_{m-1}(x_i)$ (or, for a general loss, to its negative gradient), and $\eta$ (eta) is a **learning rate** between about 0.01 and 0.3 that shrinks each step. A small $\eta$ with many rounds generalizes better than a large one with few. The number of rounds is chosen by watching validation error and stopping when it turns up: **early stopping**, the same idea neural networks use.
:::

The modern implementations, **XGBoost** (2016), **LightGBM** (2017), and **CatBoost** (2018), add engineering: regularization terms, clever handling of missing values, histogram-based splitting for speed, and categorical features handled natively.[^5] Since about 2015, gradient-boosted trees have been the most common winning method in competitions on tabular data (rows and columns, as in a spreadsheet or database), and a careful 2022 benchmark of 45 small-to-medium datasets found that they still beat tuned neural networks on such data, for reasons the authors traced to trees' indifference to irrelevant features and their ability to fit irregular, non-smooth functions.[^6] On very large tables and with newer table-specific networks the gap has narrowed, so treat this as the state of play in 2026 rather than a law. If your data is a table, this is still the model to beat.

:::howto Fitting a gradient-boosted model, in practice
1. **Baseline first**: logistic or linear regression, and a single decision tree. Record their validation scores.
2. **Split off validation data** (or use cross-validation, chapter 8) and never touch the test set until the end.
3. **Start with defaults**: a few hundred trees, depth 4 to 8, learning rate 0.1. Modern libraries' defaults are good.
4. **Enable early stopping** on the validation set so that the number of trees is chosen automatically.
5. **Tune the few knobs that matter**, in order: learning rate (lower is better but slower), tree depth (deeper captures more interactions and overfits more), the fraction of rows and features sampled per tree (lower is more regularized), and the minimum leaf size.
6. **Read the feature importances** and the **partial dependence plots** (how the prediction changes as one feature varies, averaging over the others). If the top feature is something that should not be there (an ID number, a field filled in after the outcome), you have leakage.
7. **Compare with the baseline.** If boosting beats logistic regression by a hair, prefer the simpler model.

*Example of reading the result.* A churn model's top importances are "days since last login," "number of support tickets," and "plan type." Partial dependence shows risk rising sharply after 30 days without login. That is actionable: contact people at day 25. A model whose top feature is "customer ID" has learned nothing but memorized the training rows.
:::

## Interpretability, and its limits

A single tree can be read. A forest of 500 trees or a boosted sum of 2,000 cannot, and the field has built tools to look inside anyway. **Feature importance** ranks inputs by their total contribution to splits. **SHAP values**, from cooperative game theory, attribute each individual prediction to the features that produced it, so that a loan denial can be explained as "income contributed −0.3, prior default −0.5, age +0.1."[^7] These explanations are approximations and can mislead when features are correlated, but they are far better than nothing, and in regulated domains they are increasingly required.

:::warning
Feature importance is not causation, and it is not even "what matters." A feature can be important to the model because it proxies for something the model was not given (zip code standing in for race, in a credit model, which is illegal in the United States and common). Two correlated features split the importance between them, so each looks less important than it is. And a feature can be important because of leakage. Importance tells you what the model is *using*; whether it should be using it is your job.
:::

## Support vector machines, briefly

One more classical method deserves a paragraph, because it dominated the decade before deep learning and its central idea recurs. A **support vector machine** draws the separating line (or plane) that leaves the widest possible margin between the classes, which Vapnik showed gives a generalization guarantee that depends on the margin rather than on the number of features.[^8] Its trick was the **kernel**: a way to compute similarities as if the data had been mapped into a vastly higher-dimensional space, where a straight boundary becomes a curved one in the original space, without ever computing the mapping. SVMs were the best classifiers available from about 1995 to 2010, are still excellent for small, clean datasets, and lost to trees on tables and to neural networks on everything else. The kernel idea lives on in Gaussian processes and, in a sense, inside the attention mechanism of chapter 15.

:::formulas
| Idea | Formula |
|---|---|
| Gini impurity | $G = 1 - \sum_k p_k^2$ |
| Entropy | $H = -\sum_k p_k \log_2 p_k$ |
| Bagging | average (regression) or vote (classification) over $B$ trees, each trained on a bootstrap resample |
| Variance of an average of $B$ independent estimates | $\sigma^2 / B$ |
| Gradient boosting update | $F_m = F_{m-1} + \eta\, h_m$, with $h_m$ fit to the residuals or negative gradient |
| SVM margin | maximize $2/\lVert\mathbf{w}\rVert$ subject to correct classification |
:::

:::know
- A decision tree asks the question that most reduces class mixing, recursively. One tree overfits and is unstable.
- Averaging many independently overfitted models cancels their variance. Random forests get independence from bootstrap resampling and random feature subsets.
- Boosting builds trees in sequence, each fitting the previous errors; it is gradient descent over functions. Small learning rate, many rounds, early stopping.
- On tabular data, gradient-boosted trees are the model to beat in 2026. On images, audio, and text, they are not.
- Feature importance shows what the model uses, not what causes the outcome, and not what it should use.
:::

## Summary

- Decision trees learn a sequence of yes/no questions by greedily choosing splits that purify the classes; they are interpretable, need no feature scaling, and overfit badly alone.
- Ensembles fix the overfitting: random forests average many decorrelated trees; gradient boosting adds trees that correct residual errors, which amounts to gradient descent in function space.
- Gradient-boosted trees (XGBoost, LightGBM, CatBoost) remain the strongest general method for tabular data and win most competitions on it.
- Ensembles trade interpretability for accuracy; feature importance and SHAP values recover some of it, with caveats about correlation, proxies, and leakage.
- Support vector machines, with the kernel trick, ruled the 2000s and remain excellent on small clean data.

[^1]: Breiman, L., Friedman, J. H., Olshen, R. A., Stone, C. J. (1984). *Classification and Regression Trees*. Belmont, CA: Wadsworth. Quinlan, J. R. (1986). "Induction of decision trees." *Machine Learning*, 1, 81–106. [doi:10.1007/BF00116251](https://doi.org/10.1007/BF00116251)
[^2]: Galton, F. (1907). "Vox Populi." *Nature*, 75, 450–451. [doi:10.1038/075450a0](https://doi.org/10.1038/075450a0)
[^3]: Breiman, L. (1996). "Bagging predictors." *Machine Learning*, 24, 123–140. [doi:10.1007/BF00058655](https://doi.org/10.1007/BF00058655). Breiman, L. (2001). "Random Forests." *Machine Learning*, 45, 5–32. [doi:10.1023/A:1010933404324](https://doi.org/10.1023/A:1010933404324)
[^4]: Freund, Y., Schapire, R. E. (1997). "A Decision-Theoretic Generalization of On-Line Learning and an Application to Boosting." *Journal of Computer and System Sciences*, 55(1), 119–139. [doi:10.1006/jcss.1997.1504](https://doi.org/10.1006/jcss.1997.1504). Friedman, J. H. (2001). "Greedy Function Approximation: A Gradient Boosting Machine." *Annals of Statistics*, 29(5), 1189–1232. [doi:10.1214/aos/1013203451](https://doi.org/10.1214/aos/1013203451)
[^5]: Chen, T., Guestrin, C. (2016). "XGBoost: A Scalable Tree Boosting System." *KDD '16*, 785–794. [doi:10.1145/2939672.2939785](https://doi.org/10.1145/2939672.2939785). Ke, G. et al. (2017). "LightGBM: A Highly Efficient Gradient Boosting Decision Tree." *NeurIPS 30*. Prokhorenkova, L. et al. (2018). "CatBoost: unbiased boosting with categorical features." *NeurIPS 31*. [arxiv.org/abs/1706.09516](https://arxiv.org/abs/1706.09516)
[^6]: Grinsztajn, L., Oyallon, E., Varoquaux, G. (2022). "Why do tree-based models still outperform deep learning on typical tabular data?" *NeurIPS 35, Datasets and Benchmarks*. [arxiv.org/abs/2207.08815](https://arxiv.org/abs/2207.08815). Competition usage: Kaggle (2021). *State of Data Science and Machine Learning 2021*, on the prevalence of gradient boosting among practitioners. [kaggle.com/kaggle-survey-2021](https://www.kaggle.com/kaggle-survey-2021). Bojer, C. S., Meldgaard, J. P. (2021). "Kaggle forecasting competitions: An overlooked learning opportunity." *International Journal of Forecasting*, 37(2), 587–603. [doi:10.1016/j.ijforecast.2020.07.007](https://doi.org/10.1016/j.ijforecast.2020.07.007)
[^7]: Lundberg, S. M., Lee, S.-I. (2017). "A Unified Approach to Interpreting Model Predictions." *NeurIPS 30*. [arxiv.org/abs/1705.07874](https://arxiv.org/abs/1705.07874). Molnar, C. (2022). *Interpretable Machine Learning*, 2nd ed. Free at [christophm.github.io/interpretable-ml-book](https://christophm.github.io/interpretable-ml-book/)
[^8]: Cortes, C., Vapnik, V. (1995). "Support-vector networks." *Machine Learning*, 20, 273–297. [doi:10.1007/BF00994018](https://doi.org/10.1007/BF00994018). Boser, B. E., Guyon, I. M., Vapnik, V. N. (1992). "A training algorithm for optimal margin classifiers." *COLT '92*, 144–152. [doi:10.1145/130385.130401](https://doi.org/10.1145/130385.130401)
