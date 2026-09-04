---
title: Statistics
subtitle: Learning from data. Averages that lie, the bell curve, what a margin of error means, what "statistically significant" does and does not mean, and how to read a study before you believe it.
part: III · Change and Chance
---

## Recap

Probability (chapter 9) reasons forward, from known chances to likely outcomes. **Statistics** reasons backward, from observed outcomes to the chances and causes behind them. It is the branch of mathematics you meet most often, in every poll, study, and chart, and the one most often used to mislead. This chapter gives the tools to compute the basic quantities and, more importantly, to read them.

## Describing data: averages

There are three "averages," and which one you are shown matters.

The **mean** is the sum divided by the count. The **median** is the middle value when the data are sorted: half above, half below. The **mode** is the most common value. For symmetric data they agree. For skewed data they do not, and the gap is informative. US household income in 2023 had a mean of about \$114,000 and a median of about \$80,000, because a small number of very high incomes pull the mean up while leaving the median where the typical household is.[^1] Whenever someone quotes "the average" of something with a long tail (incomes, house prices, hospital stays), ask which average, and suspect that the choice was made to make a point.

:::howto Computing the mean, median, and standard deviation
Data: 4, 8, 6, 5, 3, 10, 6.

1. **Mean**: add (42) and divide by the count (7): $\bar x = 6$.
2. **Median**: sort (3, 4, 5, 6, 6, 8, 10) and take the middle: 6. With an even count, average the two middle values.
3. **Standard deviation**, the typical distance from the mean: subtract the mean from each value ($-2, 2, 0, -1, -3, 4, 0$), square each ($4, 4, 0, 1, 9, 16, 0$), average the squares (34/7 ≈ 4.86; for a *sample* rather than a whole population, divide by $n - 1 = 6$ instead, giving 5.67), and take the square root: $s \approx 2.4$. The squared version, before the root, is the **variance**.

Roughly: two-thirds of the data lie within one standard deviation of the mean, if the data are bell-shaped. Here that is 3.6 to 8.4, which holds for five of seven values.
:::

The **standard deviation** is the number that turns "average" into a description. Two cities can both have a mean temperature of 15°C; one ranges from 10 to 20 and the other from −20 to 45. Any report of an average without some measure of spread is half a fact. **Percentiles** are the other way to describe spread: the 90th percentile is the value below which 90 percent of the data fall, and the **interquartile range**, from the 25th to the 75th percentile, is the spread of the middle half, unaffected by extreme values.

## The normal distribution

Chapter 9 introduced the bell curve. Its formula is

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

where $\mu$ (mu) is the mean and $\sigma$ (sigma) the standard deviation; the constant in front just makes the total area 1. Nobody computes with the formula; what matters is the **68-95-99.7 rule**: about 68 percent of values lie within one standard deviation of the mean, 95 percent within two, 99.7 percent within three. A value's **z-score**, $(x - \mu)/\sigma$, says how many standard deviations from the mean it is, and it is the universal currency for comparing things on different scales: a z-score of 2 is unusual whether it is a height, a test result, or a stock return.

Why is the normal distribution everywhere? Because of the **central limit theorem**, the most important result in statistics: if you add up many independent random quantities, their sum is approximately normal *regardless of what distribution the individual quantities had*, provided each has a finite spread and none of them dominates the sum. Heights are normal because they are the sum of many small genetic and environmental effects. Measurement errors are normal because they are the sum of many small disturbances. And, crucially, the **average of a sample** is normal, because it is a sum, which is what makes polling and experiments possible.[^2] Abraham de Moivre found the bell curve as an approximation to coin tosses in 1733; Gauss used it for astronomical errors in 1809 (it is often called the Gaussian); Laplace proved the general theorem in 1810.[^3]

## From sample to population: the margin of error

A poll asks 1,000 people and finds 52 percent support a candidate. What does that say about the whole electorate? The sample average is a random quantity: a different 1,000 people would have given a slightly different answer. The central limit theorem says those possible answers are normally distributed around the true value, with a standard deviation, called the **standard error**, of

$$SE = \sqrt{\frac{p(1-p)}{n}}$$

for a proportion $p$ from a sample of $n$. For $p = 0.5$ and $n = 1000$, that is $\sqrt{0.25/1000} \approx 0.016$, or 1.6 percentage points. Since 95 percent of a normal distribution lies within two standard deviations, the poll's **95 percent confidence interval** is $52 \pm 3.2$ percent, roughly 49 to 55. That "plus or minus 3 points" is the **margin of error**, and it is where it comes from.[^4]

:::howto Computing and reading a margin of error
1. Margin of error (95 percent) for a proportion: $\approx 2\sqrt{p(1-p)/n}$; for a quick estimate at $p \approx 0.5$, use $1/\sqrt{n}$. A sample of 100 gives ±10 points; 400 gives ±5; 1,000 gives ±3; 10,000 gives ±1.
2. For a mean: $\approx 2s/\sqrt{n}$, where $s$ is the sample standard deviation.
3. Note that precision improves with the *square root* of the sample size: quadrupling the sample halves the margin. And the size of the *population* does not matter, only the sample; 1,000 people describe a country of 300 million as well as a city of 300,000, provided they are chosen at random.
4. Read it correctly: "52 ± 3" means that if the poll were repeated many times, 95 percent of the intervals so constructed would contain the true value. It does not mean there is a 95 percent chance the truth is in *this* interval; the distinction matters most when you have strong prior reason to expect a particular answer, which is chapter 9's base-rate lesson again. And a lead of 52 to 48 with a margin of ±3 is *not* a clear lead: the margin on the lead itself is about ±6, because a point taken from one candidate goes to the other.

*Example.* Two polls, each of 1,000 people, show a candidate at 47 and then at 50. Has support risen? The margin of error on each is ±3, and on the *difference* about ±4.2 (independent errors add as the square root of the sum of squares: $\sqrt{3^2 + 3^2}$). A 3-point move is within noise. Most reported "shifts" in polls are this.
:::

The margin of error captures only **sampling error**, the randomness of who happened to be asked. It says nothing about **bias**: a sample that is not random. The *Literary Digest* polled 2.4 million people in 1936 and predicted Landon would beat Roosevelt in a landslide; its sample came from telephone directories and car registrations, which in the Depression meant the well-off, and Roosevelt won 46 of 48 states.[^5] A huge biased sample is worse than a small random one, and every modern poll's real difficulty is not sample size but reaching a representative sample of people who increasingly do not answer the phone.

## Hypothesis testing and the p-value

The most used and most misused idea in statistics. You have a hypothesis, say that a new drug lowers blood pressure. You run a trial. The treated group's blood pressure fell 4 mmHg more than the control group's. Is that real, or could chance alone have produced it?

The standard procedure assumes the **null hypothesis**, that the drug does nothing and any difference is chance, and asks: if that were true, how likely is a difference at least as large as the one observed? That likelihood is the **p-value**. If it is small, conventionally below 0.05, the result is called **statistically significant**: chance alone would produce something this extreme less than one time in twenty, so the null hypothesis is rejected. Ronald Fisher proposed the procedure and the 0.05 convention in 1925; he meant the threshold as a rule of thumb, and it hardened into a law.[^6]

:::warning
The p-value is the probability of the data given no effect. It is *not* the probability of no effect given the data, which is the Bayes reversal of chapter 9, and it is not the probability that the finding is "true." A p-value of 0.04 does not mean a 96 percent chance the drug works. If the prior probability that a drug works is low, as it is for most drugs tested, a significant result is still more likely than not to be a false positive, exactly like the medical test in chapter 9.[^7] In 2016 the American Statistical Association issued a formal statement listing what p-values do not mean, and in 2019 its journal recommended abandoning the phrase "statistically significant" altogether.[^8]
:::

Two further problems make published statistics less reliable than they look. **Multiple comparisons**: test twenty hypotheses at the 0.05 level and, by chance, one will be "significant" even if all are false. A researcher who tries many analyses and reports the one that worked, a practice called **p-hacking**, produces significance from nothing, and the incentive to do so is built into publishing.[^9] **Publication bias**: studies that find effects get published; studies that find nothing sit in drawers; the literature as a whole therefore overstates every effect, which is the mechanism behind the nudge finding in the economics guide and the **replication crisis** across psychology and medicine, in which roughly half of celebrated results failed when independently redone.[^10]

The best correctives are reporting the **effect size** with a confidence interval rather than a bare p-value, since a tiny effect can be highly significant in a large sample and mean nothing; **pre-registration**, announcing the analysis before seeing the data; and replication.

## Correlation and regression

Two variables are **correlated** when they move together. The **correlation coefficient** $r$ runs from −1 (perfect opposite movement) through 0 (no linear relationship) to +1 (perfect together). Heights of parents and children correlate about 0.5; a nation's income and its life expectancy, about 0.8. Squaring it gives $r^2$, the fraction of one variable's variation that the other accounts for: $r = 0.5$ means 25 percent.

**Regression** fits a line through the data to predict one variable from another. The **least squares** line, found by Legendre and Gauss around 1805, minimizes the sum of squared vertical distances from the points, a calculus problem of exactly the kind in chapter 7; its slope says how much $y$ changes per unit of $x$ on average.[^11] Multiple regression uses several predictors at once and is the workhorse of every social science, medicine, and business analytics; the economics guide's chapter on methods is about how to use it to say something causal.

:::warning
Correlation is not causation, and the three ways it fails are worth naming. **Reverse causation**: countries with more doctors have more disease, because disease attracts doctors. **Confounding**: ice cream sales correlate with drownings because both rise in summer. **Chance**: with enough variables, some pair will correlate by accident; a website of spurious correlations shows US cheese consumption tracking deaths by bedsheet entanglement at $r = 0.95$.[^12] A fourth trap, **Simpson's paradox**, is a correlation that reverses when the data are split into groups: a university can admit a higher fraction of men than women overall while every department admits a higher fraction of women, if women apply mostly to the departments that admit few of anyone. Establishing cause needs an experiment, a natural experiment, or a careful argument about mechanism. A correlation alone is a question, not an answer.
:::

## Reading a study

:::howto Reading a statistical claim in the news
1. **What was measured, on whom, how many?** A study of 40 people is a pilot. Mice are not people.
2. **Compared to what?** A control group, randomly assigned? If not, confounding is likely.
3. **How big is the effect, in real units?** "Doubles the risk" from 1 in 10,000 to 2 in 10,000 is a different thing from 10 percent to 20. Insist on the **absolute** change, not just the relative one. The most useful single number in health news is the **number needed to treat**: 1 divided by the absolute risk reduction. A drug that cuts the risk of a heart attack from 4 percent to 3 percent has an absolute reduction of 1 percentage point, so 100 people must take it for one to benefit.
4. **What is the uncertainty?** A confidence interval that includes zero means the study could not tell whether there is an effect at all.
5. **Was this the hypothesis they started with?** Or one of many tested? Was it pre-registered?
6. **Has anyone replicated it?** One study is a claim. The Latest Research section of this guide marks each entry confirmed, preliminary, or disputed for exactly this reason.
7. **Who paid, and who benefits from the framing?**
:::

## A little history

Statistics began as "state-istics," the numbers governments collected about population and wealth; John Graunt's 1662 analysis of London's death records is often called its first work.[^13] The nineteenth century made it a science: Quetelet applied the normal curve to human measurements and invented the "average man" (and the body mass index); Galton discovered regression and correlation while studying heredity; Karl Pearson formalized them. The twentieth century made it mathematics: Fisher invented the randomized experiment, analysis of variance, and much of estimation theory while working at an agricultural station in the 1920s; Jerzy Neyman and Egon Pearson (Karl's son) built the formal theory of hypothesis testing; and the computer made regression on millions of records routine.[^14] Since about 2010 the field has been absorbing machine learning, which is statistics with fewer assumptions and more data, and re-examining its own foundations in the light of the replication crisis.

:::formulas
| Quantity | Formula |
|---|---|
| Mean | $\bar x = \dfrac{1}{n}\sum x_i$ |
| Variance (sample) | $s^2 = \dfrac{1}{n-1}\sum (x_i - \bar x)^2$; standard deviation $s = \sqrt{s^2}$ |
| z-score | $z = \dfrac{x - \mu}{\sigma}$ |
| Normal rule | 68% within $\pm1\sigma$, 95% within $\pm2\sigma$, 99.7% within $\pm3\sigma$ |
| Standard error (proportion) | $SE = \sqrt{p(1-p)/n}$ |
| Standard error (mean) | $SE = s/\sqrt{n}$ |
| 95% confidence interval | estimate $\pm\, 1.96 \times SE$ |
| Quick margin of error | $\approx 1/\sqrt{n}$ |
| Correlation | $r = \dfrac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2 \sum (y_i - \bar y)^2}}$ |
| Regression slope | $b = r\,\dfrac{s_y}{s_x}$ |
:::

:::know
- Mean, median, and mode differ for skewed data; ask which "average" and why.
- An average without a spread is half a fact. Standard deviation and percentiles are the other half.
- Sample averages are normal (central limit theorem); the margin of error is about $1/\sqrt{n}$, shrinks slowly, and ignores bias.
- A p-value is not the probability the finding is true. Significant is not the same as important, and most significant results in low-prior fields are false.
- Correlation is a question, not an answer: think reverse causation, confounding, chance.
- Ask for the absolute effect, the interval, the pre-registration, and the replication.
:::

## Summary

- Mean, median, mode, and standard deviation describe data; the choice of average can mislead, and spread is essential.
- The normal distribution arises whenever many small independent effects add, by the central limit theorem, and governs sample averages.
- The margin of error follows from the standard error, scales as $1/\sqrt{n}$, and ignores bias, which is the real threat to polls.
- Hypothesis tests and p-values measure surprise under the null hypothesis, not the probability of truth; multiple comparisons and publication bias inflate the literature.
- Correlation and regression measure and model association; causation requires more.
- Statistics grew from state records through Galton, Pearson, and Fisher into the language of every empirical science.

[^1]: U.S. Census Bureau (2024). *Income in the United States: 2023*. Current Population Reports P60-282. Table A-1 (median) and Table A-2 (mean household income). [census.gov](https://www.census.gov/library/publications/2024/demo/p60-282.html)
[^2]: OpenStax (2023). *Introductory Statistics 2e*. Chapter 7, "The Central Limit Theorem." [openstax.org](https://openstax.org/books/introductory-statistics-2e/pages/7-introduction)
[^3]: Stigler, S. M. (1986). *The History of Statistics: The Measurement of Uncertainty before 1900*. Cambridge, MA: Harvard University Press. Chapters 2–4 on de Moivre, Laplace, and Gauss.
[^4]: OpenStax (2023). *Introductory Statistics 2e*. Chapter 8, "Confidence Intervals." [openstax.org](https://openstax.org/books/introductory-statistics-2e/pages/8-introduction)
[^5]: Squire, P. (1988). "Why the 1936 *Literary Digest* Poll Failed." *Public Opinion Quarterly*, 52(1), 125–133. [doi:10.1086/269085](https://doi.org/10.1086/269085)
[^6]: Fisher, R. A. (1925). *Statistical Methods for Research Workers*. Edinburgh: Oliver and Boyd. Chapter III. [archive.org](https://archive.org/details/statisticalmethoe7fish)
[^7]: Ioannidis, J. P. A. (2005). "Why Most Published Research Findings Are False." *PLoS Medicine*, 2(8), e124. [doi:10.1371/journal.pmed.0020124](https://doi.org/10.1371/journal.pmed.0020124)
[^8]: Wasserstein, R. L., Lazar, N. A. (2016). "The ASA Statement on p-Values: Context, Process, and Purpose." *The American Statistician*, 70(2), 129–133. [doi:10.1080/00031305.2016.1154108](https://doi.org/10.1080/00031305.2016.1154108). Wasserstein, R. L., Schirm, A. L., Lazar, N. A. (2019). "Moving to a World Beyond 'p < 0.05'." *The American Statistician*, 73(sup1), 1–19. [doi:10.1080/00031305.2019.1583913](https://doi.org/10.1080/00031305.2019.1583913)
[^9]: Simmons, J. P., Nelson, L. D., Simonsohn, U. (2011). "False-Positive Psychology: Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant." *Psychological Science*, 22(11), 1359–1366. [doi:10.1177/0956797611417632](https://doi.org/10.1177/0956797611417632)
[^10]: Open Science Collaboration (2015). "Estimating the reproducibility of psychological science." *Science*, 349(6251), aac4716. [doi:10.1126/science.aac4716](https://doi.org/10.1126/science.aac4716). Silberzahn, R. et al. (2018). "Many Analysts, One Data Set." *Advances in Methods and Practices in Psychological Science*, 1(3), 337–356. [doi:10.1177/2515245917747646](https://doi.org/10.1177/2515245917747646)
[^11]: Legendre, A.-M. (1805). *Nouvelles méthodes pour la détermination des orbites des comètes*. Paris: Courcier. Appendix on least squares. Stigler (1986), chapter 1. Galton, F. (1886). "Regression Towards Mediocrity in Hereditary Stature." *Journal of the Anthropological Institute*, 15, 246–263. [doi:10.2307/2841583](https://doi.org/10.2307/2841583)
[^12]: Vigen, T. *Spurious Correlations*. [tylervigen.com/spurious-correlations](https://www.tylervigen.com/spurious-correlations)
[^13]: Graunt, J. (1662). *Natural and Political Observations Made upon the Bills of Mortality*. London. [archive.org](https://archive.org/details/naturalandpoliti00grau)
[^14]: Salsburg, D. (2001). *The Lady Tasting Tea: How Statistics Revolutionized Science in the Twentieth Century*. New York: W. H. Freeman. Stigler (1986) for Quetelet, Galton, and Pearson.
