---
title: Probability
subtitle: Reasoning about what you do not know. How to compute odds, why a positive medical test usually means less than it seems, why coincidences are common, and what a gambler's question in 1654 started.
part: III · Change and Chance
---

## How should new evidence change your estimate?

Everything so far has been certain: a triangle's angles, a curve's slope. Most of life is not. **Probability** is the mathematics of uncertainty, and it is the branch most people use most and understand least. Its rules are few and simple; its results are routinely counterintuitive; and getting it wrong has put innocent people in prison and healthy people through unnecessary surgery. This chapter gives the rules, the traps, and the reasoning that avoids them.

## What a probability is

A probability is a number between 0 and 1 (or 0 and 100 percent) measuring how likely something is. Zero means impossible, one means certain. There are two ways to think about what the number *means*, and both are useful. The **frequency** view: the probability of heads is 0.5 because in a long run of tosses about half come up heads. The **degree-of-belief** view: the probability that it rains tomorrow is 0.3 because that is how confident you are, and you would take a bet at those odds. (**Odds** are the same information in a different form: the ratio of the chance for to the chance against. A probability of 0.25 is odds of 1 to 3; "3-to-1 against" means a 25 percent chance.) The frequency view works for repeatable events; the belief view is needed for one-off ones, and it turns out to obey exactly the same rules.[^1]

If all outcomes are equally likely, probability is simply counting: the number of outcomes you want divided by the total. A die has six faces; three are even; the probability of an even roll is $3/6 = 1/2$.

## The rules

There are only three, and everything else follows.

:::howto Combining probabilities
1. **Not.** The probability something does *not* happen is 1 minus the probability it does. $P(\text{not } A) = 1 - P(A)$. Often the easiest route: the chance of *at least one* six in four rolls is 1 minus the chance of *no* sixes, which is $1 - (5/6)^4 \approx 0.52$.
2. **And, for independent events: multiply.** If two events do not affect each other, the chance of both is the product. Two heads in a row: $\tfrac{1}{2} \times \tfrac{1}{2} = \tfrac{1}{4}$. Independence is the assumption to check; it fails constantly in the real world (two houses in the same street flooding are not independent), and assuming it when it does not hold was a cause of the 2008 financial crisis.[^2]
3. **Or, for mutually exclusive events: add.** If two events cannot both happen, the chance of either is the sum. Rolling a 1 or a 2: $\tfrac{1}{6} + \tfrac{1}{6} = \tfrac{1}{3}$. If they *can* both happen, subtract the overlap: $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$. The chance a card is a heart or a king is $\tfrac{13}{52} + \tfrac{4}{52} - \tfrac{1}{52}$, since the king of hearts was counted twice.

*Example.* A system has two independent backups, each failing with probability 0.05. Both fail: $0.05 \times 0.05 = 0.0025$, one chance in 400. But if a single cause, say a power cut, can take out both, they are not independent and the true risk may be twenty times higher. Redundancy only helps against independent failures.
:::

## Counting

Many probability problems are counting problems, and two counting formulas do most of the work. The number of ways to *arrange* $n$ things in order is $n! = n \times (n-1) \times \cdots \times 1$; five books on a shelf can be arranged in $5! = 120$ ways. The number of ways to *choose* $k$ things from $n$, when order does not matter, is

$$\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$$

read "n choose k." A lottery that draws 6 numbers from 49 has $\binom{49}{6} = 13{,}983{,}816$ possible draws, so a ticket wins the jackpot with probability one in fourteen million, or about as likely as being killed by lightning in the coming year.[^3] These **binomial coefficients** are the numbers in Pascal's triangle and the coefficients when you expand $(a + b)^n$, which is why Pascal was studying them.

## Conditional probability and Bayes

The probability of an event often depends on what else you know. The probability that a randomly chosen American man is over six feet tall is about 15 percent; the probability *given that* they play in the NBA is nearly 100 percent. Write $P(A \mid B)$ for "the probability of $A$ given $B$." Then the general multiplication rule is $P(A \text{ and } B) = P(A \mid B)\,P(B)$, and two events are independent exactly when knowing one changes nothing: $P(A \mid B) = P(A)$.

The single most important result in the chapter tells you how to *reverse* a conditional probability: how to get from "the probability of the evidence given the hypothesis" to "the probability of the hypothesis given the evidence," which is almost always the direction you want.

:::math Bayes' theorem
$$P(H \mid E) = \frac{P(E \mid H)\,P(H)}{P(E)}$$
$H$ is a hypothesis (the patient has the disease), $E$ is evidence (the test came back positive). $P(H)$ is the **prior**, how likely the hypothesis was before the evidence. $P(E \mid H)$ is how likely the evidence is if the hypothesis is true. $P(E)$ is how likely the evidence is overall, counting both the cases where $H$ is true and where it is false: $P(E) = P(E \mid H)P(H) + P(E \mid \text{not } H)P(\text{not } H)$. The result, $P(H \mid E)$, is the **posterior**: the updated probability. Thomas Bayes, a Presbyterian minister, proved it around 1750; it was published after his death in 1763 and rediscovered and generalized by Laplace.[^4]
:::

The formula is easiest to use with actual numbers of people rather than probabilities, which is the method below, and it produces the most consequential surprise in probability.

:::howto Interpreting a medical test (or any positive result)
Given: the condition affects 1 percent of people tested; the test detects 90 percent of cases (its **sensitivity**); it gives a false positive for 5 percent of healthy people (a 95 percent **specificity**). You test positive. What is the chance you have it?

1. Imagine 1,000 people tested.
2. **Have the condition**: 1 percent, so 10 people. Of these, 90 percent test positive: 9 true positives.
3. **Do not have it**: 990 people. Of these, 5 percent test positive: about 50 false positives.
4. **Total positives**: 9 + 50 = 59. **Of these, true**: 9.
5. Your chance of having the condition is $9/59 \approx 15$ percent, not 90 percent.

The same numbers as a table, and then in the formula:

| | Test positive | Test negative | Total |
|---|---|---|---|
| Have it | 9 | 1 | 10 |
| Do not | 50 | 940 | 990 |
| Total | 59 | 941 | 1,000 |

$P(\text{sick} \mid \text{positive}) = \dfrac{0.90 \times 0.01}{0.90 \times 0.01 + 0.05 \times 0.99} = \dfrac{0.009}{0.009 + 0.0495} = 0.154$.

The test has **90 percent sensitivity**, not “90 percent accuracy” in every sense. In this example, a positive result still leaves a roughly 15 percent probability of the condition: false positives from the large healthy group outnumber true positives from the small affected group. The calculation depends on the stated prevalence and test performance. It illustrates why the **base rate**, $P(H)$, matters when interpreting evidence, a distinction that has proved difficult even for trained professionals in studies of statistical reasoning.[^5]
:::

:::warning
**The prosecutor's fallacy** is the same error in court. "The chance that an innocent person's DNA would match is one in a million" is $P(E \mid \text{innocent})$. It is not $P(\text{innocent} \mid E)$, the chance the defendant is innocent given the match, which depends on how many people could have been the source: in a city of ten million, about ten innocent people match, and without other evidence the defendant is one of eleven. In the 1999 case of Sally Clark, a British mother convicted of murdering two infants, an expert testified that the chance of two cot deaths (sudden infant deaths) in one family was 1 in 73 million; the figure both assumed independence wrongly and committed this fallacy, and the conviction was overturned after she had served three years.[^6]
:::

## Expected value

The **expected value** of an uncertain quantity is its long-run average: each possible outcome multiplied by its probability, added up. A lottery ticket that costs \$2 and pays \$1,000,000 with probability one in a million has expected value $\$1{,}000{,}000 \times 10^{-6} - \$2 = -\$1$: on average you lose a dollar per ticket, which is how lotteries fund governments. Insurance has negative expected value for the buyer too, and buying it is still rational, because the point is not to win on average but to avoid the outcome you cannot survive (the economics guide's chapter on choice explains why). Expected value is the right guide for decisions you will face many times; for one-off decisions with catastrophic downsides, it is not enough.

:::howto Deciding under uncertainty with expected value
1. List the possible outcomes of each option.
2. Assign each a probability and a value (money, time, or a score). Probabilities for each option must sum to 1.
3. Multiply and add to get each option's expected value. Compare.
4. Then ask about the worst case. If one option's worst case is unsurvivable, expected value is not the right criterion.

*Example.* Pay \$120 for a phone warranty? The phone costs \$800; suppose the chance it breaks in the covered period is 10 percent. Expected repair cost without warranty: $0.10 \times 800 = \$80$. The warranty costs \$120 to cover an expected \$80 loss. Decline it, unless \$800 is a loss you genuinely could not absorb. This is the same calculation the seller made, and it is why extended warranties are so profitable.
:::

## Distributions

A **probability distribution** lists every possible value of a quantity and how likely each is. Three appear everywhere.

The **binomial** distribution counts successes in $n$ independent tries, each with probability $p$. The chance of exactly $k$ successes is $\binom{n}{k}p^k(1-p)^{n-k}$. Ten coin flips, exactly seven heads: $\binom{10}{7}(0.5)^{10} = 120/1024 \approx 12$ percent. It has mean $np$ and standard deviation $\sqrt{np(1-p)}$ (chapter 10 defines these), and it is the model for polls, defect counts, and free-throw percentages.

The **Poisson** distribution counts rare events in a fixed interval when you know only the average rate: calls to a help line per hour, decays of a radioactive sample per second, deaths by horse kick per Prussian army corps per year, which was the 1898 example that made it famous.[^7] If the average is $\lambda$ (lambda), the chance of exactly $k$ events is $e^{-\lambda}\lambda^k/k!$. It is why a hospital that averages two births a night should plan for four or five on some nights: with $\lambda = 2$, the chance of exactly four is $e^{-2} \cdot 16/24 \approx 0.09$, and the chance of four or more is about 0.14, roughly one night in seven.

The **normal** distribution, the bell curve, is the shape that emerges when many small independent influences add together, which is why heights, measurement errors, and the averages of almost anything follow it. It is the subject of the next chapter, where it becomes the foundation of statistics.

{{fig:normal-curve|The normal distribution. About 68 percent of values fall within one standard deviation of the mean, 95 percent within two, and 99.7 percent within three. Almost every "margin of error" in a poll and every "significance" claim in a study is a statement about this curve.}}

## Why coincidences are common

Human intuition is bad at probability in specific, predictable ways, and knowing them is protective. **The birthday problem**: in a room of 23 people, the chance that two share a birthday is over 50 percent, because there are $\binom{23}{2} = 253$ *pairs* and each pair has a 1 in 365 chance.[^8] People compute the chance that someone shares *their* birthday, which is much smaller. **The law of truly large numbers**: with enough opportunities, one-in-a-million events happen constantly; in a country of 330 million, a one-in-a-million coincidence happens to about 330 people a day. **The gambler's fallacy**: a roulette wheel that has come up red five times is not "due" for black; the wheel has no memory, and each spin is independent. **Regression to the mean**: an extreme result is usually followed by a less extreme one, not because of any force but because extremes are partly luck and luck does not persist; this is why the sports star on the magazine cover has a worse next season and why a treatment given to the sickest patients seems to work.[^9]

## A little history

Probability is the youngest of the classical branches. Dice are ancient, but nobody wrote down the mathematics until Cardano in the 1560s (unpublished until 1663) and, decisively, Pascal and Fermat in their 1654 correspondence about how to split the stakes of an interrupted game.[^10] Jacob Bernoulli proved the **law of large numbers** in 1713, that averages settle toward expected values as trials increase, which made the frequency view rigorous. Laplace's *Théorie analytique* of 1812 turned the subject into a tool for astronomy and social statistics, and its popular introduction, the *Essai philosophique* of 1814, stated its philosophy: probability is "common sense reduced to calculation."[^11] Andrey Kolmogorov gave it modern axiomatic foundations in 1933, and from there it grew into the language of statistical mechanics, genetics, quantum theory, finance, and machine learning.

:::formulas
| Rule | Formula |
|---|---|
| Complement | $P(\text{not } A) = 1 - P(A)$ |
| Independent and | $P(A \text{ and } B) = P(A)\,P(B)$ |
| General and | $P(A \text{ and } B) = P(A \mid B)\,P(B)$ |
| Or | $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$ |
| Bayes | $P(H \mid E) = \dfrac{P(E \mid H)\,P(H)}{P(E)}$ |
| Choose | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |
| Expected value | $E[X] = \sum x_i\,p_i$ |
| Binomial | $P(k) = \dbinom{n}{k}p^k(1-p)^{n-k}$, mean $np$ |
| Poisson | $P(k) = \dfrac{e^{-\lambda}\lambda^k}{k!}$, mean $\lambda$ |
:::

:::know
- Multiply for "and" only when events are independent. Real-world risks are usually correlated.
- "At least one" is easiest as 1 minus "none."
- A positive test for a rare condition is usually a false positive. Compute with 1,000 imaginary people, not with percentages.
- $P(\text{evidence} \mid \text{innocent})$ is not $P(\text{innocent} \mid \text{evidence})$. Ask how many others fit.
- Expected value guides repeated decisions; the worst case guides one-off ones.
- Coincidences are expected; streaks do not predict; extremes regress toward average.
:::

:::try Put the idea to work
Out of 1,000 items, 10 are defective. A test catches 9 of those and falsely flags 99 good items. Of the flagged items, what fraction are actually defective?

:::answer Show the reasoning
There are 108 flags, of which 9 are true positives: 9/108, about 8.3 percent. Catching 90 percent of defects does not mean 90 percent of flags are defects. The base rate and the false positives determine how convincing a positive result is.
:::
:::

## Summary

- Probability measures likelihood on a 0-to-1 scale, as long-run frequency or degree of belief; both obey the same three rules: complement, multiply for independent "and," add for exclusive "or."
- Counting (factorials, binomial coefficients) solves equal-likelihood problems.
- Conditional probability handles dependence, and Bayes' theorem reverses it: the base rate makes most positive tests for rare conditions false alarms, and the same error convicts the innocent.
- Expected value is the long-run average and the guide to repeated decisions; distributions (binomial, Poisson, normal) describe the shape of chance.
- Intuition fails on coincidence, streaks, and regression; the mathematics dates from 1654 and was axiomatized in 1933.

[^1]: Hacking, I. (2001). *An Introduction to Probability and Inductive Logic*. Cambridge University Press. Chapters 11–13 on the frequency and belief interpretations.
[^2]: Salmon, F. (2009). "Recipe for Disaster: The Formula That Killed Wall Street." *Wired*, 23 February 2009, on the Gaussian copula and the assumption of independence in mortgage defaults. [wired.com](https://www.wired.com/2009/02/wp-quant/)
[^3]: OpenStax (2023). *Introductory Statistics 2e*. Chapter 3, "Probability Topics." [openstax.org](https://openstax.org/books/introductory-statistics-2e/pages/3-introduction). Lightning: U.S. National Weather Service, about 27 lightning deaths a year in the United States (2009–2018 average), roughly 1 in 12 million per person per year. [weather.gov](https://www.weather.gov/safety/lightning-odds)
[^4]: Bayes, T. (1763). "An Essay towards solving a Problem in the Doctrine of Chances." *Philosophical Transactions of the Royal Society*, 53, 370–418. [doi:10.1098/rstl.1763.0053](https://doi.org/10.1098/rstl.1763.0053). McGrayne, S. B. (2011). *The Theory That Would Not Die*. Yale University Press.
[^5]: Gigerenzer, G., Gaissmaier, W., Kurz-Milcke, E., Schwartz, L. M., Woloshin, S. (2007). "Helping Doctors and Patients Make Sense of Health Statistics." *Psychological Science in the Public Interest*, 8(2), 53–96. [doi:10.1111/j.1539-6053.2008.00033.x](https://doi.org/10.1111/j.1539-6053.2008.00033.x)
[^6]: Royal Statistical Society (2001). "Royal Statistical Society concerned by issues raised in Sally Clark case." Press statement, 23 October 2001. Dawid, A. P. (2005). "Statistics on Trial." *Significance*, 2(1), 6–8. [doi:10.1111/j.1740-9713.2005.00075.x](https://doi.org/10.1111/j.1740-9713.2005.00075.x)
[^7]: von Bortkiewicz, L. (1898). *Das Gesetz der kleinen Zahlen*. Leipzig: Teubner. The horse-kick data are analyzed in most probability texts; see Feller, W. (1968), *An Introduction to Probability Theory and Its Applications*, vol. 1, 3rd ed. New York: Wiley, chapter VI.
[^8]: Feller, W. (1968). *An Introduction to Probability Theory and Its Applications*, vol. 1, 3rd ed. New York: Wiley. Chapter II, §3, the birthday problem.
[^9]: Kahneman, D. (2011). *Thinking, Fast and Slow*. New York: Farrar, Straus and Giroux. Chapter 17, "Regression to the Mean." Diaconis, P., Mosteller, F. (1989). "Methods for Studying Coincidences." *Journal of the American Statistical Association*, 84(408), 853–861. [doi:10.1080/01621459.1989.10478847](https://doi.org/10.1080/01621459.1989.10478847)
[^10]: Devlin, K. (2008). *The Unfinished Game: Pascal, Fermat, and the Seventeenth-Century Letter that Made the World Modern*. New York: Basic Books. Cardano, G. *Liber de ludo aleae* (written c. 1564, published 1663).
[^11]: Laplace, P.-S. (1814). *Essai philosophique sur les probabilités*. Paris. Translated by F. W. Truscott and F. L. Emory (1902) as *A Philosophical Essay on Probabilities*. [archive.org](https://archive.org/details/philosophicaless00lapliala). Bernoulli, J. (1713). *Ars Conjectandi*. Basel. Kolmogorov, A. N. (1933). *Grundbegriffe der Wahrscheinlichkeitsrechnung*. Berlin: Springer.
