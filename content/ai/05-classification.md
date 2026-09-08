---
title: Classification and Its Scorecard
subtitle: Spam or not, cat or dog, sick or well. The first spam filter used a formula from 1763; the hard part was never the model but knowing whether it works. Accuracy lies, and here is what to read instead.
part: II · Learning from Data
---

## When is a confident classification still a bad decision?

Chapter 4 ended with logistic regression, a classifier built from a line. This chapter widens the view to classification in general: two more classic methods, the loss that trains them, and, most importantly, how to evaluate a classifier. Every misleading claim about a medical AI, a fraud detector, or a facial recognition system exploits the gap between "accuracy" and what actually matters, and closing that gap is a skill worth more than any algorithm.

## The first spam filter

In 1998 a group at Microsoft Research and, independently, the programmer Paul Graham in 2002 attacked spam with a method from the eighteenth century. Each word in an email is evidence. "Viagra" appears in 60 percent of spam and 0.1 percent of legitimate mail; "meeting" the reverse. Bayes' theorem (mathematics guide, chapter 9) says how to combine evidence into a probability, and if you make the simplifying assumption that words occur independently given the class, the combination is a product of per-word ratios, which you can compute from a few thousand labeled emails in seconds. This is the **naive Bayes** classifier, "naive" for the independence assumption, which is false and does not matter much.[^1] Graham's filter caught 99.5 percent of spam with almost no false positives, and within two years every mail client had one.

Naive Bayes is fast, needs little data, handles thousands of features, and is hard to overfit (its one classic failure, assigning zero probability to any class that never saw a given word in training, is fixed by adding a small count to every tally). It is still a strong baseline for text. Its limitation is that it cannot learn interactions: "free" and "money" together are much stronger evidence than the product of their separate weights suggests, and naive Bayes cannot know that.

## Nearest neighbors

A second classic method has no training at all. To classify a new example, find the $k$ most similar training examples and take a vote. Similarity is distance in feature space, usually Euclidean (mathematics guide, chapter 5). This is **k-nearest neighbors**, and it embodies an assumption that is often right: things near each other in feature space tend to share labels.[^2]

Its virtues are simplicity and flexibility: it draws boundaries of any shape. Its vices are instructive. It is slow at prediction time, since every new example must be compared with every training example (indexing tricks help). It is sensitive to irrelevant features and to feature scale, so features must be standardized. And it suffers from the **curse of dimensionality**: in a space of a thousand features, everything is far from everything, and the nearest neighbor is barely nearer than the farthest. That curse is why raw pixels make bad features and why the learned representations of chapter 11 mattered so much.

The choice of $k$ is a bias–variance dial. $k = 1$ memorizes the training data (high variance); $k = n$ predicts the majority class for everything (high bias). Validation picks the middle.

## The loss for classification

Regression minimized squared error. Classification could too, but a better loss exists. If a model says there is a 90 percent chance an email is spam and it is, that is good; if it says 90 percent and the email is legitimate, that is very bad, and worse than saying 60 percent. **Cross-entropy**, also called **log loss**, captures this:

$$\ell = -\big[\,y \log p + (1 - y)\log(1 - p)\,\big]$$

Here $y$ is 1 or 0 for the true class and $p$ the model's predicted probability of class 1. When $y = 1$, the loss is $-\log p$: zero if $p = 1$, and climbing to infinity as $p$ approaches 0. The model is punished without limit for being confidently wrong. Summed over the data, this is the negative log-likelihood of the labels under the model, so minimizing it is maximum likelihood estimation, the statistician's standard (chapter 8). For many classes, the model outputs a probability for each via the **softmax** function, which turns any list of scores into probabilities that sum to 1, and the loss is $-\log$ of the probability assigned to the correct class.[^3] Every neural network classifier in the guide, up to and including the language models, is trained on exactly this loss.

## Why accuracy lies

A classifier's **accuracy** is the fraction of predictions it gets right. It is the number everyone quotes and the one that misleads most often.

Consider a test for a disease that affects 1 percent of people. A "model" that says "healthy" to everyone is 99 percent accurate and worthless. Consider a fraud detector where 0.1 percent of transactions are fraudulent: 99.9 percent accuracy is the do-nothing baseline. Whenever classes are **imbalanced**, which is nearly always in the problems that matter, accuracy measures mostly how imbalanced they are.

The remedy is to look at the four kinds of outcome separately.

:::howto Reading a confusion matrix
Lay out predictions against truth:

| | Predicted positive | Predicted negative |
|---|---|---|
| **Actually positive** | True positive (TP) | False negative (FN) |
| **Actually negative** | False positive (FP) | True negative (TN) |

From these four counts, compute:
1. **Precision** $= \dfrac{TP}{TP + FP}$: of the cases the model flagged, what fraction were real? The measure that matters when a false alarm is costly (a fraud team investigating, a patient told they have cancer).
2. **Recall** (also **sensitivity**, or **true positive rate**) $= \dfrac{TP}{TP + FN}$: of the real cases, what fraction did the model catch? The measure that matters when a miss is costly (a tumor undetected, a fraud let through).
3. **Specificity** $= \dfrac{TN}{TN + FP}$: of the negatives, what fraction were correctly cleared.
4. **F1 score** $= \dfrac{2 \cdot \text{precision} \cdot \text{recall}}{\text{precision} + \text{recall}}$: the harmonic mean of precision and recall, one number when you must have one.

*Example.* A cancer screening model on 10,000 people, 100 of whom have cancer. It flags 300, of whom 80 are real. Then TP = 80, FP = 220, FN = 20, TN = 9,680. Accuracy = 97.6 percent, which sounds excellent. Precision = 80/300 = 27 percent: nearly three of four people flagged are told they may have cancer and do not. Recall = 80 percent: one in five cancers is missed. F1 = $2 \times 0.267 \times 0.8 / (0.267 + 0.8) = 0.40$. Whether this is a good model depends entirely on what a follow-up test costs and what a missed cancer costs, and accuracy told you none of it. This is the medical-test arithmetic of the mathematics guide's chapter 9, and it is why base rates matter.
:::

When the rare class is the one that matters, three further tools help. **Class weights** tell the loss to count each rare example several times, so the model cannot ignore them. **Resampling** duplicates rare examples or discards common ones in the training set (never the test set). And when a threshold is being tuned, the **precision-recall curve** below shows the trade-off more honestly than accuracy ever can. One warning: resampling distorts the model's probabilities, so a model trained on a balanced sample will overstate the rare class's likelihood and must be recalibrated (see below) before its outputs are read as probabilities.

## The threshold, and the curve behind it

A model like logistic regression outputs a probability, and *you* decide the cutoff. Lower the threshold from 0.5 to 0.2 and you flag more cases: recall rises, precision falls. Raise it and the reverse. There is no free lunch; there is only a choice about which error you prefer, and it should be made by whoever bears the costs, not by the default setting of a software library.

The whole trade-off at once is drawn as the **ROC curve** (receiver operating characteristic, a name from radar operators in the Second World War): plot true positive rate against false positive rate at every threshold. A useless model traces the diagonal; a perfect one hugs the top-left corner. The **area under the curve** (AUC) summarizes it: 0.5 is chance, 1.0 is perfect, and it equals the probability that the model ranks a random positive above a random negative.[^4] AUC is threshold-free and class-balance-free, which makes it the standard way to compare models, and it hides the operating point, which makes it a bad way to describe what a deployed system does. For rare-event problems the **precision-recall curve** is more informative, since a low false positive *rate* can still mean a flood of false positives when negatives are numerous.

{{fig:roc-curve|An ROC curve. Each point is one threshold; moving along the curve trades false alarms for catches. The diagonal is a model that guesses at random; the area between the curve and the diagonal measures how much better than guessing the model ranks positives above negatives.}}

## Calibration

A model that says "70 percent" should be right about 70 percent of the time when it says that. That property is **calibration**, and it is separate from accuracy: a model can rank cases perfectly and still be systematically overconfident. Logistic regression is naturally well calibrated; many other methods, including most neural networks, are not, and are corrected afterward by fitting a small adjustment on validation data.[^5] Calibration matters whenever the probability is used as a probability: to decide whether a 30 percent chance of rain justifies an umbrella, or whether a 5 percent chance of default justifies a loan.

## Multiple classes

Most of the above extends directly to many classes: the confusion matrix becomes a grid, precision and recall are computed per class, and softmax replaces the sigmoid. One subtlety is worth knowing. With a thousand classes, as in ImageNet, "top-1 accuracy" (the model's first guess is right) and "top-5 accuracy" (the right answer is among its five best guesses) can differ enormously, and headline numbers often quote the second without saying so.

:::warning
The most common way to make a classifier look good is to evaluate it on a test set that does not resemble its deployment. A skin-cancer model trained on images where malignant lesions happened to have a ruler in the frame learned to detect rulers.[^6] A pneumonia model learned which hospital the X-ray came from. A facial recognition system with 99 percent accuracy on a benchmark of mostly light-skinned men had error rates up to 35 percent on dark-skinned women.[^7] Always ask: accuracy on *whom*, measured *how*, against *what baseline*, at *which threshold*, with *what error costs*?
:::

## Which classifier?

For a new tabular problem in 2026 the practical answer, established by two decades of competitions and benchmarks, is: try logistic regression as a baseline, then gradient-boosted trees (chapter 6), which win most of the time; use neural networks when the inputs are images, audio, or text, where learned features are decisive (chapters 11 to 15); use naive Bayes when you have text and almost no data or compute; use nearest neighbors when you need a boundary of arbitrary shape and have few features. And whatever you use, report precision, recall, and the confusion matrix on a realistic test set, at the threshold you will actually deploy.

:::formulas
| Quantity | Formula |
|---|---|
| Cross-entropy (binary) | $\ell = -[\,y\log p + (1-y)\log(1-p)\,]$ |
| Softmax | $p_k = \dfrac{e^{z_k}}{\sum_j e^{z_j}}$; cross-entropy $\ell = -\log p_{\text{true class}}$ |
| Naive Bayes | $P(c \mid \mathbf{x}) \propto P(c)\prod_j P(x_j \mid c)$ |
| Accuracy | $\dfrac{TP + TN}{TP + TN + FP + FN}$ |
| Precision, recall | $\dfrac{TP}{TP + FP}$, $\quad \dfrac{TP}{TP + FN}$ |
| Specificity | $\dfrac{TN}{TN + FP}$ |
| F1 | $\dfrac{2PR}{P + R}$ |
| AUC | probability a random positive is ranked above a random negative; 0.5 = chance |
:::

:::know Before using a classifier
- **Define the decision.** Who will act on the output, and what happens after a false alarm or a miss?
- **Choose the threshold.** Compare precision and recall at thresholds that could actually be used, given the base rate and the costs of mistakes.
- **Check the setting.** Evaluate on the people, time period, and conditions the system will face. Check calibration if a score will be treated as a probability.
:::

:::try Put the idea to work
Only 1 percent of transactions are fraudulent. A classifier calls every transaction legitimate and reports 99 percent accuracy. What has it achieved for fraud detection?

:::answer Show the reasoning
It has detected no fraud: recall for fraud is zero. The high accuracy comes entirely from the common class. Inspect the confusion matrix, false-alarm cost, and the value of catching fraud before choosing a threshold or declaring a model useful.
:::
:::

## Summary

- Naive Bayes combines per-feature evidence with Bayes' theorem and built the first spam filters; k-nearest neighbors classifies by similarity and suffers in high dimensions.
- Classifiers are trained on cross-entropy, which is maximum likelihood and punishes confident mistakes.
- Accuracy is misleading under class imbalance; precision, recall, specificity, F1, the ROC curve, and AUC describe what a classifier actually does.
- The decision threshold trades false alarms against misses and should be set by the costs of each.
- Calibration is separate from accuracy and needed whenever outputs are used as probabilities.
- Evaluation must be on data resembling deployment; shortcut features and unrepresentative benchmarks have fooled experts repeatedly.

[^1]: Sahami, M., Dumais, S., Heckerman, D., Horvitz, E. (1998). "A Bayesian Approach to Filtering Junk E-Mail." *AAAI Workshop on Learning for Text Categorization*, Technical Report WS-98-05. [cdn.aaai.org](https://cdn.aaai.org/Workshops/1998/WS-98-05/WS98-05-009.pdf). Graham, P. (2002). "A Plan for Spam." [paulgraham.com/spam.html](http://www.paulgraham.com/spam.html)
[^2]: Cover, T., Hart, P. (1967). "Nearest neighbor pattern classification." *IEEE Transactions on Information Theory*, 13(1), 21–27. [doi:10.1109/TIT.1967.1053964](https://doi.org/10.1109/TIT.1967.1053964)
[^3]: Goodfellow, I., Bengio, Y., Courville, A. (2016). *Deep Learning*. MIT Press. §6.2.2 on cross-entropy and softmax. [deeplearningbook.org](https://www.deeplearningbook.org/)
[^4]: Fawcett, T. (2006). "An introduction to ROC analysis." *Pattern Recognition Letters*, 27(8), 861–874. [doi:10.1016/j.patrec.2005.10.010](https://doi.org/10.1016/j.patrec.2005.10.010). Saito, T., Rehmsmeier, M. (2015). "The Precision-Recall Plot Is More Informative than the ROC Plot When Evaluating Binary Classifiers on Imbalanced Datasets." *PLoS ONE*, 10(3), e0118432. [doi:10.1371/journal.pone.0118432](https://doi.org/10.1371/journal.pone.0118432)
[^5]: Guo, C., Pleiss, G., Sun, Y., Weinberger, K. Q. (2017). "On Calibration of Modern Neural Networks." *ICML 2017*. [arxiv.org/abs/1706.04599](https://arxiv.org/abs/1706.04599)
[^6]: Narla, A., Kuprel, B., Sarin, K., Novoa, R., Ko, J. (2018). "Automated Classification of Skin Lesions: From Pixels to Practice." *Journal of Investigative Dermatology*, 138(10), 2108–2110. [doi:10.1016/j.jid.2018.06.175](https://doi.org/10.1016/j.jid.2018.06.175). Geirhos, R. et al. (2020). "Shortcut learning in deep neural networks." *Nature Machine Intelligence*, 2, 665–673. [doi:10.1038/s42256-020-00257-z](https://doi.org/10.1038/s42256-020-00257-z)
[^7]: Buolamwini, J., Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." *Proceedings of Machine Learning Research*, 81, 77–91. [proceedings.mlr.press](https://proceedings.mlr.press/v81/buolamwini18a.html)
