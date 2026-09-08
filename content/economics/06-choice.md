---
title: How People Choose
subtitle: The rational model, why it works better than it should, and the forty years of experiments that mapped exactly where real people depart from it.
part: III · People and Strategy
---

## What does it mean to make a rational choice?

Supply and demand rest on a picture of the individual: someone with wants, a budget, and the sense to get the most from it. This chapter opens that picture up. The standard model of choice is stated first, because it is the benchmark against which everything else is measured, and then behavioral economics is brought in to show where and by how much people deviate, and what that does and does not change.

## The rational model

The workhorse of microeconomics assumes a person has **preferences** over bundles of goods that are complete (they can compare any two) and consistent (if they prefer A to B and B to C, they prefer A to C), and that they choose the bundle they like best among those they can afford. Economists summarize preferences with a **utility function**, a number assigned to each bundle so that better bundles get bigger numbers. The number itself means nothing; only the ranking matters. "Maximizing utility" is just a compact way of saying "choosing what you prefer."

:::math The consumer's problem
A shopper with income $I$ faces prices $p_x$ and $p_y$ for two goods and chooses quantities $x$ and $y$ to maximize utility $U(x, y)$ subject to the **budget constraint**
$$p_x x + p_y y \le I$$
The solution has a simple shape: buy each good until the extra satisfaction from the last dollar spent is the same for both. If the last dollar on coffee gives more pleasure than the last dollar on tea, shift a dollar from tea to coffee, and keep shifting until they balance. Formally, the ratio of **marginal utilities** equals the ratio of prices: $MU_x / MU_y = p_x / p_y$. Raise $p_x$ and the shopper buys less $x$. That is the demand curve of chapter 2, derived from a person rather than assumed.
:::

The model is often mocked as assuming people are calculating machines. It assumes nothing of the kind. It assumes only that choices are *consistent*, and a person who has never heard of a utility function will, if their choices are consistent, behave *as if* they were maximizing one. The model's predictions are about aggregates, and aggregates are forgiving: a market of a million shoppers, each a bit erratic, still produces a smooth downward-sloping demand curve, because the errors wash out. Where the model earns its keep is in predicting responses to *changes*: raise the price of cigarettes by 10 percent and smoking falls by about 4 percent, everywhere it has been tried.[^12]

## Choice under uncertainty

Most choices involve risk. John von Neumann and Oskar Morgenstern showed in 1944 that a person whose risky choices obey a few consistency rules behaves as if maximizing **expected utility**: the average of the utility of each outcome, weighted by its probability.[^1] Because most people are risk-averse, their utility rises with wealth but at a slowing rate; the second million matters less than the first. That curvature is what makes a sure \$50 preferable to a coin flip for \$100, what makes insurance worth buying at a premium, and what demands that risky assets pay more (chapter 15).

Expected utility was the standard model of risk for thirty-five years. Then two psychologists took it apart.

## Kahneman, Tversky, and prospect theory

Daniel Kahneman and Amos Tversky spent the 1970s running experiments in which people made choices that expected utility could not accommodate, and in 1979 they proposed a replacement.[^2] **Prospect theory** keeps the idea that people weigh outcomes, but changes what they weigh and how.

First, people evaluate outcomes as **gains and losses relative to a reference point**, usually the status quo, not as levels of total wealth. Whether you feel rich depends on whether you have more than yesterday, not on your bank balance.

Second, **losses loom larger than gains**. Losing \$100 hurts roughly twice as much as gaining \$100 pleases, a ratio Kahneman and Tversky measured at about 2.25 in 1992 and that later studies have put between 1.5 and 2.5.[^13] This **loss aversion** shows up everywhere: investors hold losing stocks too long to avoid realizing the loss; homeowners refuse to sell below what they paid; people demand far more to give up something they own than they would pay to acquire it (the **endowment effect**).

Third, people **overweight small probabilities** and underweight large ones, which is why lotteries and insurance can both be attractive to the same person.

{{fig:prospect-theory|Prospect theory's value function. Outcomes are judged as gains or losses from a reference point. The curve is steeper for losses than for gains (loss aversion) and flattens in both directions, so a second loss hurts less than the first.}}

Kahneman received the Nobel Prize in 2002 (Tversky had died in 1996), and prospect theory became the founding document of **behavioral economics**: the study of how actual human psychology changes economic predictions.

## The catalogue of departures

Forty years of experiments have produced a long list of systematic ways people deviate from the rational benchmark. The ones with the most economic consequence:

**Present bias.** People discount the near future far more steeply than the far future. Offered \$100 today or \$110 next week, many take the \$100; offered \$100 in a year or \$110 in a year and a week, almost everyone waits. The same week-long delay is treated differently depending on when it starts. Psychologists had documented the pattern, called **hyperbolic discounting**, since the 1970s; David Laibson brought it into mainstream economics in 1997, and it explains under-saving for retirement, procrastination, and the market for gym memberships that go unused.[^3]

**Anchoring.** Estimates are pulled toward whatever number was recently in mind, even an irrelevant one. In a classic demonstration, subjects who spun a wheel that landed on a high number then guessed a higher share of African nations in the UN.[^4] Real-estate list prices, opening bids, and "was \$200, now \$120" tags all exploit it.

**Framing.** The same choice presented as "90% survival" or "10% mortality" gets different answers from doctors and patients alike.

**Mental accounting.** People treat money differently depending on which mental pot it sits in, running a credit card balance at 20% while holding savings earning 2%.

**Social preferences.** In the **ultimatum game**, one player proposes how to split a sum and the other can accept or reject, with both getting nothing on rejection. If each player cares only about their own monetary payoff, the standard prediction is that the proposer offers the smallest positive amount and the responder accepts. In practice, offers below about 20% are rejected roughly half the time, and proposers know it and offer 40 to 50%.[^5] People care about fairness enough to pay for it, in every culture tested, though the amounts vary.

**Status and comparison.** People care about where they stand, not only what they have. Thorstein Veblen observed in 1899 that some goods are bought precisely because they are expensive and visible, which he called **conspicuous consumption**, and modern data confirm the broader point: people's reported satisfaction with life falls when their neighbors' incomes rise, holding their own income fixed.[^14]

Herbert Simon, who anticipated much of this in the 1950s, called the underlying idea **bounded rationality**: people have limited attention and computation, so they use rules of thumb, **heuristics**, that work well most of the time and predictably fail in specific situations.[^6] Heuristics are not stupidity. They are how a finite mind functions, and evolution installed them for good reasons.

## Nudges

If people predictably misjudge, the way choices are presented matters, and Richard Thaler and Cass Sunstein argued in 2008 that policy should use that deliberately.[^7] A **nudge** changes the presentation of a choice without changing the options or the incentives. The flagship example is the retirement default. Workers who must opt *in* to a pension plan join at rates around 40 to 60% in their early years; workers who are enrolled automatically and must opt *out* stay in at rates of 85 to 90%, with the same plan and the same freedom to choose. In the first study of the effect, participation among new hires at one large firm jumped from 37% to 86% when it switched the default.[^8] Thaler's **Save More Tomorrow** program, which lets workers commit now to raising contributions with future pay rises, exploits present bias in the saver's favor. Thaler received the Nobel Prize in 2017; dozens of governments have set up "nudge units."

Then the evidence caught up. A 2022 meta-analysis of over 200 nudge studies found a solid average effect; a re-analysis the same year, correcting for the tendency of successful studies to get published and unsuccessful ones to vanish, found the average effect indistinguishable from zero.[^9] More decisive was a study with access to the *complete* trial records of two US government nudge units, published and unpublished: real-world nudges raised take-up by about 1.4 percentage points on average, against about 8.7 points in the published academic literature.[^10] Nudges work. They work far less than the headlines suggested, and defaults work far better than most other nudges.

:::key
Behavioral economics did not overturn the rational model; it bounded it. Where stakes are high, choices are repeated, and feedback is quick, people learn and the rational model does well: professional traders, experienced firms, and repeat shoppers behave close to prediction. Where choices are rare, consequences are distant, and feedback is absent, retirement, health, mortgages, insurance, the departures are large and systematic. The lesson for policy is to know which regime you are in.
:::

## What survived and what did not

Two cautions round out the picture. First, behavioral economics has had its own replication problems: several celebrated effects, including some **priming** studies (in which an incidental cue such as a word or image seemed to change later behavior), have failed to replicate, and effect sizes across the field have shrunk on re-examination.[^11] Second, showing that people deviate from the model in a laboratory does not show that markets do. Markets have mechanisms that discipline individual error: competition, learning, professional intermediaries, and **arbitrage**, buying where something is cheap and selling where it is dear, which erases a mispricing whether or not the people who created it ever notice. Sometimes they amplify it instead, which is the subject of the finance chapter. Which happens is an empirical question, and the honest answer is that it depends on the market.

What behavioral economics has permanently changed is the default. Before 1979, an economist who found people acting against the model looked for the mistake in the data. After, the model itself is a hypothesis to be tested. That shift, more than any single finding, is the field's legacy.

:::try Put the idea to work
Someone rejects an unfair offer even though accepting would give them a little money. Does that alone prove their choice is irrational?

:::answer Show the reasoning
Only if the model assumes money is their sole objective. A person may also care about fairness, dignity, or punishing unfair behavior. State the preferences and constraints before assessing consistency. A narrow model's failed prediction is not automatically a diagnosis of the person.
:::
:::

## Summary

- The rational model assumes consistent preferences and a budget; it predicts demand curves and works well for aggregate responses to changes in price and income.
- Expected utility handles risk; risk aversion explains insurance and risk premiums.
- Prospect theory: people judge gains and losses from a reference point, feel losses about twice as strongly as gains, and misweight probabilities.
- Documented departures include present bias, anchoring, framing, mental accounting, fairness preferences, and concern for status. They are systematic, not random.
- Nudges, especially defaults, work; the published literature overstated them by a factor of six.
- The rational model holds where stakes are high and feedback fast, and fails where choices are rare and consequences distant. Knowing which regime applies is the skill.

[^1]: von Neumann, J., Morgenstern, O. (1944). *Theory of Games and Economic Behavior*. Princeton University Press. Chapter 3 and the Appendix give the expected utility axioms.
[^2]: Kahneman, D., Tversky, A. (1979). "Prospect Theory: An Analysis of Decision under Risk." *Econometrica*, 47(2), 263–291. [doi:10.2307/1914185](https://doi.org/10.2307/1914185)
[^3]: Laibson, D. (1997). "Golden Eggs and Hyperbolic Discounting." *Quarterly Journal of Economics*, 112(2), 443–478. [doi:10.1162/003355397555253](https://doi.org/10.1162/003355397555253). The earlier psychological literature: Ainslie, G. (1975). "Specious reward: A behavioral theory of impulsiveness and impulse control." *Psychological Bulletin*, 82(4), 463–496. [doi:10.1037/h0076860](https://doi.org/10.1037/h0076860)
[^4]: Tversky, A., Kahneman, D. (1974). "Judgment under Uncertainty: Heuristics and Biases." *Science*, 185, 1124–1131. [doi:10.1126/science.185.4157.1124](https://doi.org/10.1126/science.185.4157.1124)
[^5]: Güth, W., Schmittberger, R., Schwarze, B. (1982). "An experimental analysis of ultimatum bargaining." *Journal of Economic Behavior & Organization*, 3(4), 367–388. [doi:10.1016/0167-2681(82)90011-7](https://doi.org/10.1016/0167-2681(82)90011-7). Cross-cultural results: Henrich, J. et al. (2005), *Behavioral and Brain Sciences*, 28(6), 795–815. [doi:10.1017/S0140525X05000142](https://doi.org/10.1017/S0140525X05000142)
[^6]: Simon, H. A. (1955). "A Behavioral Model of Rational Choice." *Quarterly Journal of Economics*, 69(1), 99–118. [doi:10.2307/1884852](https://doi.org/10.2307/1884852)
[^7]: Thaler, R. H., Sunstein, C. R. (2008). *Nudge: Improving Decisions About Health, Wealth, and Happiness*. Yale University Press.
[^8]: Madrian, B. C., Shea, D. F. (2001). "The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior." *Quarterly Journal of Economics*, 116(4), 1149–1187. [doi:10.1162/003355301753265543](https://doi.org/10.1162/003355301753265543)
[^9]: Mertens, S., Herberz, M., Hahnel, U. J. J., Brosch, T. (2022). "The effectiveness of nudging: A meta-analysis of choice architecture interventions across behavioral domains." *PNAS*, 119(1), e2107346118. [doi:10.1073/pnas.2107346118](https://doi.org/10.1073/pnas.2107346118). Maier, M. et al. (2022). "No evidence for nudging after adjusting for publication bias." *PNAS*, 119(31), e2200300119. [doi:10.1073/pnas.2200300119](https://doi.org/10.1073/pnas.2200300119)
[^10]: DellaVigna, S., Linos, E. (2022). "RCTs to Scale: Comprehensive Evidence From Two Nudge Units." *Econometrica*, 90(1), 81–116. [doi:10.3982/ECTA18709](https://doi.org/10.3982/ECTA18709)
[^11]: Camerer, C. F. et al. (2016). "Evaluating replicability of laboratory experiments in economics." *Science*, 351, 1433–1436. [doi:10.1126/science.aaf0918](https://doi.org/10.1126/science.aaf0918)
[^12]: Gallet, C. A., List, J. A. (2003). "Cigarette demand: a meta-analysis of elasticities." *Health Economics*, 12(10), 821–835. [doi:10.1002/hec.765](https://doi.org/10.1002/hec.765)
[^13]: Tversky, A., Kahneman, D. (1992). "Advances in Prospect Theory: Cumulative Representation of Uncertainty." *Journal of Risk and Uncertainty*, 5(4), 297–323. [doi:10.1007/BF00122574](https://doi.org/10.1007/BF00122574). Brown, A. L. et al. (2024). "Meta-analysis of Empirical Estimates of Loss Aversion." *Journal of Economic Literature*, 62(2), 485–516. [doi:10.1257/jel.20221698](https://doi.org/10.1257/jel.20221698)
[^14]: Veblen, T. (1899). *The Theory of the Leisure Class*. New York: Macmillan. Luttmer, E. F. P. (2005). "Neighbors as Negatives: Relative Earnings and Well-Being." *Quarterly Journal of Economics*, 120(3), 963–1002. [doi:10.1093/qje/120.3.963](https://doi.org/10.1093/qje/120.3.963)
