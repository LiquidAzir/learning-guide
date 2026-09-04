---
title: Learning from Data
subtitle: The one idea under everything. Data, a model with knobs, a score for wrongness, and a way to turn the knobs. Plus the trap that catches every beginner and most experts.
part: II · Learning from Data
---

## Recap

Chapter 1 compressed machine learning into a paragraph. This chapter expands it into the framework every later chapter uses, with the vocabulary you need and the one failure mode, **overfitting**, that you must understand before anything else makes sense. There is very little mathematics here and a great deal of the thinking that separates people who use these tools well from people who get fooled by them.

## The setup

Suppose you want to predict the price a house will sell for. You have records of 5,000 past sales: for each, the floor area, the number of bedrooms, the age, the postcode, and the price it fetched. You want a rule that takes the first four and produces a good guess at the fifth for a house not yet sold.

In the language of the field: each house is an **example** (or **instance**, or **sample**). Its floor area, bedrooms, age, and postcode are **features** (or **inputs**, or **variables**, written $x$). The price is the **label** (or **target**, or **output**, written $y$). The 5,000 records are the **training data**. The rule you want is a **model**, a function $f$ with $f(x) \approx y$. Because the labels are known for the training data, this is **supervised learning**: the data supervise the model by telling it the right answers. When labels are absent, and the task is to find structure in the inputs alone, it is **unsupervised learning** (chapter 7). When the model learns by acting and being rewarded, it is **reinforcement learning** (chapter 14). Nearly everything in the next five chapters is supervised.

Two kinds of supervised problem cover most cases. If the label is a number (price, temperature, time to failure), the problem is **regression**. If the label is a category (spam or not, cat or dog, which of a thousand objects), it is **classification**. The tools differ slightly; the logic is identical.

## The four ingredients

:::key
Every machine learning system, from a two-parameter line to a trillion-parameter language model, is built from the same four parts.

1. **A model with parameters.** A family of functions, indexed by numbers you can adjust. A straight line $f(x) = wx + b$ has two parameters, $w$ (the slope, called a **weight**) and $b$ (the intercept, called a **bias**). A neural network has millions or billions, but they are still just numbers that select one function from a family.
2. **A loss function.** A formula that takes the model's guesses and the true labels and returns one number measuring how bad the guesses are. For regression the standard is the average of the squared errors. For classification it is a measure of how much probability the model put on the wrong answers. The loss is what "learning" minimizes.
3. **An optimizer.** A procedure for changing the parameters to reduce the loss. Almost always it is some form of **gradient descent**: think of the loss as a landscape over the parameters, feel which way is downhill (the slope, or **gradient**, from calculus), take a small step that way, and repeat until you reach a valley. The size of each step is the **learning rate**. Chapter 10 gives the details; the picture is enough until then.
4. **Data.** Enough examples that the parameters which minimize the loss on the training data also work on new data.

Pick a model, pick a loss, run the optimizer on the data. That is training. Everything else is detail, and the details are where the decade of progress lives.
:::

:::howto Setting up a prediction problem
Before touching any tool, answer these on paper. Most failed projects failed here.

1. **What exactly is being predicted, for whom, and when?** "Predict churn" is not a problem. "Predict, on the first of each month, which subscribers will cancel within 30 days, using only information available on that date" is. The "only information available on that date" clause is where leakage (below) hides.
2. **Is it regression or classification?** Predicting *how many* days until cancellation is regression; predicting *whether* they cancel this month is classification. The business question decides.
3. **What is the baseline?** What accuracy do you get by always predicting the most common answer, or last month's value, or the average? If 95 percent of subscribers stay, a model that predicts "stays" for everyone is 95 percent accurate and useless. Every result must beat the baseline, not zero.
4. **What would a wrong prediction cost, in each direction?** Missing a cancellation may cost a customer; flagging a loyal one may cost an unnecessary discount. The costs are rarely symmetric, and they determine how the model should be tuned (chapter 5).
5. **Is there enough data, and is it the right data?** A rule of thumb from experience: at least ten examples per parameter for simple models, far more for complex ones, and the training examples must come from the same world the model will be used in. A model trained on one city's houses does not know another's.
6. **How will you know it worked?** Decide the evaluation, on held-out data, before you build anything.
:::

## The trap: overfitting

Here is the fact that organizes the entire field. A model that fits the training data perfectly is usually a bad model.

Return to the houses. With 5,000 examples and a model flexible enough, you can find a function that predicts every training price exactly: it has memorized the answers. Show it a new house and it produces nonsense, because it learned the accidents of the training set (this particular house sold in a hurry; that one had a famous previous owner) along with the real patterns. This is **overfitting**: the model has learned the noise as well as the signal. Its opposite, **underfitting**, is a model too simple to capture the real pattern: predicting every house at the average price. The art is the space between.

{{fig:overfitting|Three fits to the same noisy data. Left: a straight line underfits, missing the curve in the data. Middle: a gentle curve captures the pattern and will predict new points well. Right: a wiggly curve passes through every training point and will predict new points badly, because it has learned the noise. The training error falls from left to right; the error on new data is lowest in the middle.}}

The only honest test is data the model has never seen. So practitioners split their data before doing anything: a **training set** to fit the model, and a **test set**, held back and untouched, to measure how it does on new examples. Often a third **validation set** is carved out for choosing between models, so that the test set is used exactly once, at the end, and cannot be tuned against. The gap between training performance and test performance is the direct measure of overfitting. A model with 2 percent training error and 20 percent test error has memorized; one with 8 percent and 9 percent has learned what it can. The gap diagnoses overfitting; the test number itself says whether the model is any good.

:::warning
**Never evaluate on data you trained on.** It is the most common error in the field and the easiest to make by accident, because so many subtle routes exist for information to travel from test to training. The general name is **data leakage**: the model has access, during training, to information it will not have when used. Examples that have fooled experienced teams: a fraud model trained on records that included a field filled in only after fraud was confirmed; time-series models trained on shuffled data so that they saw the future; and, a close cousin, a pneumonia model that learned to recognize *which hospital* an X-ray came from, since one hospital's patients had pneumonia thirty times as often as another's and the images themselves, down to the portable machines used on the sickest patients, gave the hospital away. Strictly that last case is a **confounder** rather than leakage, since the cue is still present at deployment; it fails the same way, with a result too good to be true that collapses on new hospitals. If a result seems too good, look for leakage first.[^1]
:::

## Bias and variance

There is a precise way to think about the trade-off. For squared-error loss, a model's expected error on new data decomposes into three parts. **Bias** is systematic error from the model being too simple: a straight line fitted to curved data is wrong in the same direction everywhere. **Variance** is error from the model being too sensitive to the particular training set: a wiggly curve would come out completely different if you had sampled 5,000 different houses. **Noise** is the irreducible randomness in the labels themselves, which no model can predict.

$$\text{Expected error} = \text{Bias}^2 + \text{Variance} + \text{Noise}$$

Simple models have high bias and low variance; flexible models have low bias and high variance. Classical statistics taught that the best model sits at the sweet spot between them, and that adding flexibility past that point always hurts.[^2] That was the received wisdom for fifty years, and chapter 8 describes the discovery, around 2019, that very large neural networks violate it: past a certain size, adding parameters helps again. Nobody fully understands why, and it is one of the field's open problems. But for every model in the next four chapters, and for every project with limited data, the classical picture is right.

## Regularization: paying for complexity

If flexible models overfit, one remedy is to punish flexibility. **Regularization** adds a term to the loss that grows with the size of the parameters, so that the optimizer is charged for every bit of wiggle it uses. The model then fits the data only as closely as the fit is worth paying for. Chapter 4 gives the formulas; the idea recurs in every chapter after it, under names like weight decay, dropout, early stopping, and pruning. All of them are ways of saying: prefer the simpler explanation. It is Occam's razor with a knob.

## No free lunch

One more piece of humility. In 1996 David Wolpert proved that no learning algorithm is better than any other averaged over all possible problems; any method that does well on some problems must do badly on others.[^3] Learning works only because real problems are not arbitrary: they have structure (smoothness, locality, hierarchy, repetition), and a good model has **inductive biases**, built-in assumptions that match that structure. A convolutional network assumes that a cat in the corner of a photo is still a cat (chapter 11). A linear model assumes effects add up. When the assumptions match the world, the model learns from few examples; when they do not, no amount of data saves it. Choosing a model is choosing what to assume, and the biggest recent shift in the field has been toward models that assume less and learn the structure from vastly more data.

## The pipeline, in practice

What a working practitioner actually does, in order, and the share of time each typically takes:

1. **Define the problem and the evaluation** (10 percent, but decisive).
2. **Get and clean the data** (50 to 80 percent). Real data has missing values, typos, duplicates, inconsistent units, and labels that are wrong. This is where projects live or die, and chapter 20 is about it.
3. **Engineer features** (variable). Turning raw inputs into forms the model can use: a date into day-of-week, a text into word counts, an address into coordinates. Deep learning reduced this work by learning features itself, but did not eliminate it.
4. **Choose and train models** (10 percent). Usually several, compared on the validation set.
5. **Evaluate on the test set** once.
6. **Deploy and monitor.** Models decay: the world changes and the training data does not. A model of consumer behavior trained in 2019 was wrong by April 2020.

The glamorous part is step 4. The competent part is steps 1, 2, and 6.

:::formulas
| Idea | Formula |
|---|---|
| A model | $\hat y = f(x; \theta)$, where $\theta$ (theta) is the vector of all parameters and $\hat y$ ("y-hat") the prediction |
| Training | find $\theta$ that minimizes the loss $L(\theta) = \dfrac{1}{n}\displaystyle\sum_{i=1}^{n} \ell\big(f(x_i;\theta),\, y_i\big)$ over $n$ examples |
| Squared error loss | $\ell(\hat y, y) = (\hat y - y)^2$ |
| Bias–variance | $\mathbb{E}[\text{error}] = \text{Bias}^2 + \text{Variance} + \text{Noise}$ |
| Regularized loss | $L(\theta) + \lambda\,\Omega(\theta)$, with $\Omega$ a penalty on parameter size and $\lambda$ (lambda) its strength |
| Generalization gap | test error $-$ training error; large means overfitting |
:::

:::know
- Supervised learning fits a function from labeled examples; regression predicts numbers, classification predicts categories.
- Every system is model plus loss plus optimizer plus data. Training is minimizing the loss.
- A model is judged only on data it did not train on. Split first; touch the test set once.
- Overfitting is learning the noise. Its symptom is a gap between training and test performance. Its remedies are more data, simpler models, and regularization.
- Leakage, information from the future or the answer sneaking into the inputs, is the most common cause of results that are too good to be true.
- Always beat a baseline. A 95 percent accurate model can be worthless.
- Most of the work is data, not modeling.
:::

## Summary

- Machine learning frames a task as predicting labels from features, using a model whose parameters are set by minimizing a loss on training data.
- The central risk is overfitting: fitting the training data's noise. It is diagnosed by held-out test data and managed by the bias–variance trade-off and regularization.
- Data leakage produces spectacular fake results and is the first thing to suspect.
- No method works for every problem; models succeed by assuming structure that real problems have.
- In practice, defining the problem, cleaning the data, and monitoring the deployed model take most of the time and determine most of the outcome.

[^1]: Kaufman, S., Rosset, S., Perlich, C., Stitelman, O. (2012). "Leakage in data mining: Formulation, detection, and avoidance." *ACM Transactions on Knowledge Discovery from Data*, 6(4), 15. [doi:10.1145/2382577.2382579](https://doi.org/10.1145/2382577.2382579). The X-ray example: Zech, J. R. et al. (2018). "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs: A cross-sectional study." *PLoS Medicine*, 15(11), e1002683. [doi:10.1371/journal.pmed.1002683](https://doi.org/10.1371/journal.pmed.1002683)
[^2]: Geman, S., Bienenstock, E., Doursat, R. (1992). "Neural Networks and the Bias/Variance Dilemma." *Neural Computation*, 4(1), 1–58. [doi:10.1162/neco.1992.4.1.1](https://doi.org/10.1162/neco.1992.4.1.1). Hastie, T., Tibshirani, R., Friedman, J. (2009). *The Elements of Statistical Learning*, 2nd ed. Springer, §7.3. [hastie.su.domains/ElemStatLearn](https://hastie.su.domains/ElemStatLearn/)
[^3]: Wolpert, D. H. (1996). "The Lack of A Priori Distinctions Between Learning Algorithms." *Neural Computation*, 8(7), 1341–1390. [doi:10.1162/neco.1996.8.7.1341](https://doi.org/10.1162/neco.1996.8.7.1341)
