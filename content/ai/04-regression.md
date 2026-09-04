---
title: Regression
subtitle: A line through a cloud of points is the oldest learning algorithm and still the most used. Least squares, what the coefficients mean, when to trust them, and the bend that turns a line into a classifier.
part: II · Learning from Data
---

## Recap

Chapter 3 set up the four ingredients. This chapter builds the simplest complete system from them: a linear model, a squared-error loss, and a solution you can write down. It was invented in 1805 to track comets, it predicts more of the world's decisions than any neural network, and every idea in it recurs, enlarged, in the chapters on deep learning.

## The line

You have a table of houses and prices. Plot floor area against price and the points form a cloud that rises to the right. **Linear regression** draws the best straight line through the cloud and uses it to predict: a house of 150 square meters is worth whatever the line says at 150.

The line is $\hat y = wx + b$: predicted price equals a weight times area plus a bias. With more features it becomes a **linear model** in several variables:

$$\hat y = w_1 x_1 + w_2 x_2 + \cdots + w_p x_p + b$$

Each feature gets its own weight, and the prediction is the weighted sum. This is the dot product of the mathematics guide's chapter 11: $\hat y = \mathbf{w}\cdot\mathbf{x} + b$. "Linear" means the features enter additively, each multiplied by a constant; a model can be linear in this sense while using curved features like $x^2$ or $\log x$, which is a trick used constantly.

## Least squares

Which line is best? Adrien-Marie Legendre and Carl Friedrich Gauss, independently around 1805, gave the answer that stuck: the line that makes the sum of the squared vertical distances from the points as small as possible.[^1] Squaring makes all errors positive, punishes big errors much more than small ones, and, crucially, makes the problem solvable with a formula.

:::math Ordinary least squares
The loss is the **mean squared error**,
$$L(w, b) = \frac{1}{n}\sum_{i=1}^{n}\big(w x_i + b - y_i\big)^2$$
where the sum runs over the $n$ training examples and each term is one house's squared prediction error. To minimize it, take the derivative with respect to $w$ and $b$ (mathematics guide, chapter 7), set both to zero, and solve. The result for one feature is
$$w = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2}, \qquad b = \bar y - w\bar x$$
where $\bar x$ and $\bar y$ are the means. The slope is the covariance of $x$ and $y$ divided by the variance of $x$; it equals the correlation coefficient $r$ times the ratio of the standard deviations, which is the formula in the mathematics guide's statistics chapter. (The two steps for $b$: the derivative of $L$ with respect to $b$ is $\frac{2}{n}\sum(wx_i + b - y_i)$; setting it to zero gives $b = \bar y - w\bar x$, which says the line passes through the point of means. Substituting that into the derivative with respect to $w$ and solving gives the slope formula.) With many features the same calculus gives one matrix equation, $\mathbf{w} = (X^\top X)^{-1}X^\top \mathbf{y}$, which a computer solves in a fraction of a second for thousands of features.[^2]
:::

That closed-form solution is why linear regression was the workhorse of every quantitative field for two centuries before computers. It is also one of the few common models that needs no optimizer: the answer is a formula. Everything from chapter 9 onward gives that up.

:::howto Fitting and reading a regression
Data: five apartments, area in m² and monthly rent in dollars: (40, 900), (55, 1150), (70, 1300), (85, 1600), (100, 1750).

1. Means: $\bar x = 70$, $\bar y = 1340$.
2. Deviations from the mean, $x_i - \bar x$: −30, −15, 0, 15, 30. And $y_i - \bar y$: −440, −190, −40, 260, 410.
3. Numerator: sum of products $= 13{,}200 + 2{,}850 + 0 + 3{,}900 + 12{,}300 = 32{,}250$. Denominator: sum of squared $x$ deviations $= 900 + 225 + 0 + 225 + 900 = 2{,}250$.
4. Slope $w = 32{,}250 / 2{,}250 = 14.33$ dollars per square meter. Intercept $b = 1340 - 14.33 \times 70 = 337$.
5. Model: rent $\approx 337 + 14.33 \times \text{area}$. A 60 m² apartment: about \$1,197.

*Reading it.* The slope says each extra square meter adds about \$14 a month, *holding nothing else constant* because nothing else is in the model. The intercept, \$337 for a zero-area apartment, is an extrapolation with no meaning; intercepts often are. In a spreadsheet, `=SLOPE(rents, areas)` and `=INTERCEPT(rents, areas)` give these numbers; `=FORECAST.LINEAR(60, rents, areas)` gives the prediction.
:::

## Reading coefficients, and the trap in them

With several features, each weight is the change in prediction per unit change in that feature, **holding the other features fixed**. That phrase does an enormous amount of work. If a model of salaries includes years of experience and age, the weight on age is the effect of being a year older *at the same experience*, which is a different quantity from the raw relationship between age and salary. Adding or removing a feature changes every other weight. This is why two studies of the same data can report opposite effects of the same variable: they controlled for different things.

Two more cautions. Weights are in the units of the feature, so a weight of 14 on area (in m²) and a weight of 5,000 on bedrooms does not mean bedrooms matter more; **standardizing** features (subtracting the mean, dividing by the standard deviation) puts them on a common scale. And a weight is a description of the training data, not a lever on the world. The model may find that houses near a highway sell for less; that does not mean removing the highway raises prices, since the highway may have been built where land was already cheap. Prediction is not causation, and chapter 8 returns to when a coefficient can be read causally.[^3]

## How good is the fit?

The standard summary is $R^2$, the fraction of the variance in $y$ that the model accounts for: 1 means perfect prediction, 0 means no better than guessing the mean. For the rents above, $R^2 \approx 0.99$. Two things to know about it. It always rises when you add features, even useless ones, so a high $R^2$ with many features proves little; **adjusted $R^2$** penalizes for that. And it is computed on the training data unless you compute it on test data, in which case it is what chapter 3 said to care about.

The more useful number for practical purposes is often the **root mean squared error**, the typical size of a prediction error in the units of $y$: for the rents, about \$30 a month (the five errors are −10, 25, −40, 45, and −20 dollars; square them, average, take the root). Its cousin the **mean absolute error**, here \$28, is less swayed by one large miss and is often the better summary when outliers are present. A model that predicts prices to within \$50 is useful; one that predicts to within \$500 may not be, whatever its $R^2$.

## When the line is wrong

A linear model assumes each feature's effect is constant and additive. Reality often disagrees, and the fixes are worth knowing because they are how linear models stay useful in a nonlinear world.

**Curvature.** If price rises faster than area, add $x^2$ as a feature: the model $\hat y = w_1 x + w_2 x^2 + b$ is still linear in its weights and still solved by the same formula, but it draws a parabola. Add enough powers and you can fit anything, which is exactly chapter 3's overfitting figure. **Interactions.** If the effect of a garden depends on the city, add a feature that is garden × city. **Transformations.** Predicting $\log(\text{price})$ instead of price turns multiplicative effects (each bedroom adds 10 percent) into additive ones and tames the long tail of expensive houses. Most real-world regressions predict a log.

**Outliers.** Because errors are squared, one wildly mispriced house can drag the whole line. Look at the data before fitting; robust alternatives (minimizing absolute rather than squared error) exist when the data are dirty.

## Regularization, made concrete

Chapter 3 introduced the idea of charging the model for complexity. In regression it has two standard forms, and both are one line added to the loss.

:::math Ridge and lasso
**Ridge regression** adds the sum of squared weights:
$$L = \frac{1}{n}\sum_i (\hat y_i - y_i)^2 + \lambda \sum_j w_j^2$$
The parameter $\lambda$ (lambda) sets the price: at $\lambda = 0$ this is ordinary least squares; as $\lambda$ grows, the weights shrink toward zero and the model becomes smoother and less sensitive to the training data. Ridge helps most when features are many and correlated, which makes the ordinary solution unstable.[^4]

**Lasso** adds the sum of absolute weights instead, $\lambda\sum_j |w_j|$. The absolute value has a corner at zero, and the effect is that lasso sets many weights to *exactly* zero, discarding those features entirely. It is a model and a feature-selection method in one, and it made high-dimensional regression practical: with 10,000 gene expression levels as features and 200 patients, ordinary least squares is meaningless and lasso finds the dozen genes that matter.[^5]

$\lambda$ is not learned from the training data (it would go to zero). It is chosen by trying values and picking the one that does best on validation data, a procedure called **cross-validation** that chapter 8 explains.
:::

## From regression to classification: the logistic bend

Now change the problem: instead of a price, predict whether a loan defaults, yes or no. Coding yes as 1 and no as 0 and fitting a line gives predictions like 1.3 and −0.2, which are not probabilities. The fix is to bend the line. Pass the linear combination through a function that squashes any number into the range 0 to 1:

$$p = \sigma(z) = \frac{1}{1 + e^{-z}}, \qquad z = \mathbf{w}\cdot\mathbf{x} + b$$

This S-shaped curve is the **sigmoid** or **logistic function** ($\sigma$ is sigma), and the model is **logistic regression**, which despite its name is a classifier. The output $p$ is read as the probability of the "yes" class; predict yes when $p > 0.5$, or at some other threshold when the costs of errors differ (chapter 5). The weights now change the *log-odds* of the outcome (the **odds** are $p/(1-p)$, the ratio of the chance of default to the chance of not; the model is linear in their logarithm): a weight of 0.7 on "missed a payment last year" means that feature multiplies the odds of default by $e^{0.7} \approx 2$.

Logistic regression has no closed-form solution, so it is fitted by gradient descent on a loss called **cross-entropy** or **log loss**, which punishes confident wrong predictions severely (chapter 5 gives the formula). It was given its modern form by the statistician David Cox in 1958, building on Joseph Berkson's "logit" of 1944; it is the default first model for any classification problem; and it is, exactly, a neural network with one neuron.[^6] Chapter 9 stacks them.

:::warning
"Linear" does not mean "simple" or "weak." Linear and logistic regression, with well-chosen features and regularization, remain competitive on a large share of real problems and win outright when data are scarce, when interpretability is required by law (credit decisions in many countries must be explainable), and when the relationship really is roughly linear. The first question a good practitioner asks of a deep learning result is: how much better than logistic regression?
:::

:::formulas
| Idea | Formula |
|---|---|
| Linear model | $\hat y = \mathbf{w}\cdot\mathbf{x} + b = \sum_j w_j x_j + b$ |
| Mean squared error | $L = \dfrac{1}{n}\sum_i (\hat y_i - y_i)^2$ |
| Least-squares slope (one feature) | $w = \dfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} = r\,\dfrac{s_y}{s_x}$ |
| Matrix form | $\mathbf{w} = (X^\top X)^{-1}X^\top\mathbf{y}$ |
| $R^2$ | $1 - \dfrac{\sum (y_i - \hat y_i)^2}{\sum (y_i - \bar y)^2}$ |
| Ridge penalty | $\lambda\sum_j w_j^2$; lasso penalty $\lambda\sum_j \lvert w_j\rvert$ |
| Sigmoid | $\sigma(z) = \dfrac{1}{1 + e^{-z}}$ |
| Logistic regression | $P(y = 1 \mid \mathbf{x}) = \sigma(\mathbf{w}\cdot\mathbf{x} + b)$; odds multiply by $e^{w_j}$ per unit of $x_j$ |
:::

:::know
- Linear regression finds the weights that minimize squared error; with one feature it is a formula, with many it is one matrix equation.
- A coefficient is the effect of a feature holding the others fixed, in the feature's units, in the training data. Not a causal lever.
- $R^2$ rises with every added feature; judge on held-out error in real units.
- Curves, interactions, and log transforms keep linear models useful for nonlinear problems.
- Ridge shrinks weights; lasso zeroes them. Both trade a little bias for a lot less variance.
- Logistic regression is linear regression with a sigmoid, predicts probabilities, and is a one-neuron neural network.
:::

## Summary

- Linear regression fits a weighted sum of features to a numeric target by minimizing mean squared error, with a closed-form solution known since 1805.
- Coefficients describe associations in the training data conditional on the other features; they change when features are added and are not causal without further argument.
- Fit quality is measured by $R^2$ or root mean squared error, on held-out data.
- Feature engineering (powers, interactions, logs) extends linear models to curved relationships; ridge and lasso regularization control overfitting and select features.
- Logistic regression bends the line through a sigmoid to output probabilities, making it the standard first classifier and the atom of neural networks.

[^1]: Legendre, A.-M. (1805). *Nouvelles méthodes pour la détermination des orbites des comètes*. Paris: Courcier. Stigler, S. M. (1981). "Gauss and the Invention of Least Squares." *Annals of Statistics*, 9(3), 465–474. [doi:10.1214/aos/1176345451](https://doi.org/10.1214/aos/1176345451)
[^2]: Hastie, T., Tibshirani, R., Friedman, J. (2009). *The Elements of Statistical Learning*, 2nd ed. New York: Springer. Chapter 3, "Linear Methods for Regression." [hastie.su.domains/ElemStatLearn](https://hastie.su.domains/ElemStatLearn/)
[^3]: Angrist, J. D., Pischke, J.-S. (2009). *Mostly Harmless Econometrics: An Empiricist's Companion*. Princeton University Press. Chapter 3 on regression and causality.
[^4]: Hoerl, A. E., Kennard, R. W. (1970). "Ridge Regression: Biased Estimation for Nonorthogonal Problems." *Technometrics*, 12(1), 55–67. [doi:10.1080/00401706.1970.10488634](https://doi.org/10.1080/00401706.1970.10488634)
[^5]: Tibshirani, R. (1996). "Regression Shrinkage and Selection via the Lasso." *Journal of the Royal Statistical Society, Series B*, 58(1), 267–288. [doi:10.1111/j.2517-6161.1996.tb02080.x](https://doi.org/10.1111/j.2517-6161.1996.tb02080.x)
[^6]: Cox, D. R. (1958). "The Regression Analysis of Binary Sequences." *Journal of the Royal Statistical Society, Series B*, 20(2), 215–232. [doi:10.1111/j.2517-6161.1958.tb00292.x](https://doi.org/10.1111/j.2517-6161.1958.tb00292.x). Berkson, J. (1944). "Application of the Logistic Function to Bio-Assay." *Journal of the American Statistical Association*, 39(227), 357–365. [doi:10.1080/01621459.1944.10500699](https://doi.org/10.1080/01621459.1944.10500699). James, G., Witten, D., Hastie, T., Tibshirani, R. (2021). *An Introduction to Statistical Learning*, 2nd ed. Springer, chapter 4. Free at [statlearning.com](https://www.statlearning.com/)
