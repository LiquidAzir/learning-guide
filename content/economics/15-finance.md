---
title: Finance
subtitle: What financial markets are for, how to price a promise, why nobody beats the market for long, and why it crashes anyway.
part: V · The World
---

## Why isn't a high average return the whole story?

Chapter 11 explained banks and chapter 12 showed what happens when finance fails. This chapter is about the rest of the financial system: the markets for stocks, bonds, and risk, what they do for the economy, the theories that describe them, and the evidence for and against those theories. It is also where economics meets the largest pile of data in the social sciences, prices recorded every second for a century.

## What finance is for

Financial markets do two things for an economy. They move resources across time: a household saves for retirement by lending, in effect, to a firm that wants to build a factory now and pay later. And they move risk to those best able to bear it: a farmer sells next year's harvest at a fixed price today, transferring the risk of a price collapse to a speculator who is paid to carry it. Every financial instrument, however exotic, is some combination of a promise of future payment and a transfer of risk.

The basic instruments are few. A **bond** is a loan: the buyer pays now and receives fixed payments later. A **stock** (or share) is a slice of ownership in a company: the buyer receives a share of whatever profits it pays out and owns a share of whatever it is worth. A **derivative** is a contract whose value depends on something else, such as the right to buy a stock at a set price (an **option**) or an agreement to exchange payments (a **swap**). Derivatives sound abstract and are ancient; Aristotle describes Thales buying options on olive presses.

## Pricing a promise

All of finance rests on one idea from the toolkit: money later is worth less than money now, and the exchange rate between them is the interest rate.

:::math Present value and bond prices
A bond promising \$100 in one year, when the interest rate is 5 percent, is worth \$100 divided by 1.05, or \$95.24, today, because \$95.24 invested at 5 percent grows to \$100. A bond paying \$5 a year for ten years and \$100 at the end is worth the sum of each payment's present value:
$$P = \sum_{t=1}^{10} \frac{5}{(1+r)^t} + \frac{100}{(1+r)^{10}}$$
At $r = 5\%$ this is exactly \$100. Raise $r$ to 6 percent and the same bond is worth \$92.64; the payments have not changed, but each is discounted more heavily. This is the most important fact about bonds: **when interest rates rise, bond prices fall**, and the longer the bond, the more they fall. Silicon Valley Bank failed in 2023 because it held long bonds bought when rates were near zero and rates rose four points (chapter 11).
:::

Stocks are priced the same way, in principle: a share is worth the present value of the dividends it will ever pay. In practice nobody knows those dividends, which is why stock prices move so much more than bond prices and why the rest of this chapter exists.

## Risk and return

Investors are risk-averse (chapter 6), so they demand a higher expected return for holding riskier assets. Over the last century US stocks have returned about 6 to 7 percent a year above inflation, and government bonds about 1 to 2; the gap, the **equity premium**, is the compensation for bearing the stock market's swings.[^1] It is larger than standard models of risk aversion predict, a puzzle that has generated forty years of papers.

Harry Markowitz showed in 1952 that risk is not simply added up.[^2] A portfolio of many assets that do not all move together is less risky than any one of them, because when one falls another may rise. **Diversification** is the one free lunch in finance: it reduces risk without reducing expected return. Its limit is that some risk cannot be diversified away, the risk that the whole market falls together, and William Sharpe's 1964 **capital asset pricing model** argued that only that undiversifiable risk should be rewarded.[^3] An asset's **beta** measures how much it moves with the market, and its expected return should rise with beta and nothing else. The model is elegant, Nobel-winning, and empirically shaky: assets with characteristics other than beta, such as small companies and cheap ones relative to their book value, have earned excess returns that it does not explain.[^4]

Options were the hardest instruments to price, because their payoff depends on where the underlying stock ends up. Fischer Black and Myron Scholes, with Robert Merton, solved it in 1973 with a formula that requires only the stock price, the option's terms, the interest rate, and the stock's volatility, and does not require knowing where the stock is going.[^5] The **Black–Scholes** model launched a derivatives industry whose notional size now exceeds world GDP many times over. Its assumptions, above all that price changes follow a smooth bell curve, fail exactly when it matters most, in crashes, which the formula treats as nearly impossible.

## Efficient markets

Here is the theory that organizes the field and enrages its critics. Eugene Fama's **efficient markets hypothesis**, stated in 1970, holds that prices already reflect all available information, so that no analysis of public information can reliably identify mispriced stocks.[^6] The logic is competitive: if a stock were known to be cheap, people would buy it until it was not. Prices move only on *new* information, which by definition is unpredictable, so prices follow a **random walk**.

The evidence for the modest version of this claim, that you cannot reliably beat the market, is overwhelming and practically important. Professional fund managers, as a group, do not beat the market after fees; the fraction that beats it in any decade is about what chance would produce, and past winners do not persist.[^7] This finding created the **index fund**, which simply holds every stock in a market at minimal cost, and which John Bogle launched in 1976 to ridicule and now holds a third of the American stock market once institutions that index privately are counted.[^8] For an ordinary saver, efficient markets theory reduces to advice: diversify, minimize fees, do not try to time the market. It is the most valuable advice economics has produced for households, and the evidence for it is strong.

## Behavioral finance

The ambitious version, that prices are always *right*, is another matter, and Robert Shiller spent a career showing they are not. Stock prices swing far more than any plausible change in future dividends could justify; the whole market's price relative to its earnings predicts returns over the following decade, high ratios preceding poor returns, which it should not if prices were always right.[^9] Shiller called the pattern **irrational exuberance** and applied it to the housing market in 2005, three years before the crash. He shared the 2013 Nobel Prize with Fama and the econometrician Lars Peter Hansen, an award that put the two sides of the argument on one stage.

The reconciliation is that markets are hard to beat and yet sometimes wrong. Mispricings exist, but exploiting them requires betting against the crowd and staying solvent until the crowd changes its mind, and as the fund LTCM discovered in 1998, the crowd can outlast your capital. Markets are efficient in the sense that matters for your retirement account and inefficient in the sense that matters for financial stability.

## Bubbles and crashes

A **bubble** is a rise in prices driven by the expectation of further rises rather than by anything the asset will produce. The Dutch bid tulip bulbs to the price of houses in 1637; the British bid South Sea Company stock up tenfold in 1720 and Isaac Newton lost a fortune; American investors bid technology stocks to the point where companies with no revenue were worth billions in 1999 and houses to the point where mortgages required no income documentation in 2006.[^10] Each ended the same way. Bubbles are hard to identify while they inflate, because every one comes with a story about why this time is different and some of those stories are true; the railways and the internet were real. What distinguishes a bubble in hindsight is usually **leverage**, borrowed money, which turns a fall in prices into forced selling and a fall into a crash.

That is the link to chapter 12. Finance becomes a macroeconomic problem when losses are concentrated in leveraged institutions whose failure stops credit flowing to the rest of the economy. The 2008 crisis was not a stock market crash; it was a run on institutions that had borrowed short to hold long, risky assets. The regulatory response, higher **capital requirements** so that banks fund more of their assets with their own money and can absorb losses, and stress tests to check that they can, has made banks safer. It has also pushed lending into **private credit**: funds that lend directly to companies, outside the banking system and its rules, and that have grown to rival the bond market in size while regulators are still working out what risks they carry.[^11]

## What finance does to the economy

Two open questions about the whole system are worth naming. First, whether finance has grown too large: the sector's share of US GDP nearly tripled from 1950 to 2007, from under 3 percent to about 8, and whether that reflected valuable services or rent extraction is debated, with the evidence suggesting some of each.[^12] Second, whether the rise of passive investing, now roughly a third of the market, weakens the price discovery that makes markets useful in the first place; if most money buys everything indiscriminately, less effort goes into figuring out what each company is worth.[^8]

:::frontier
The instruments keep changing and the questions do not. **Stablecoins**, digital tokens backed by Treasury bills and now federally regulated in the United States, are money-market funds in new clothes and carry the same run risk. **Private credit** is banking without the deposit insurance or the supervision. Bitcoin and its relatives are assets with no cash flows to discount, so their price rests entirely on what the next buyer will pay; that makes them the purest test yet of the bubble question, and one that fifteen years of trading has not settled either way. And the question of whether artificial intelligence trading makes markets more efficient or more prone to synchronized crashes is being answered in real time. The Latest Research section follows the regulators' reports.
:::

:::try Put the idea to work
Two hypothetical assets have the same average return. One tends to fall precisely when its owner loses income. Why might that asset be less attractive?

:::answer Show the reasoning
It performs badly when the owner most needs resources. Risk depends on how an asset interacts with other income and holdings, not just its standalone average or volatility. This illustrates the role of covariance and diversification without identifying a suitable investment for any particular person.
:::
:::

## Summary

- Finance moves resources across time and risk to those who can bear it; bonds, stocks, and derivatives are the instruments.
- Present value prices every promise; when rates rise, bond prices fall, and long bonds fall most.
- Risk is rewarded, diversification is the one free lunch, and beta was meant to be the only risk that pays; the data disagree.
- Markets are hard to beat (efficient markets, in the modest sense): index funds win, fees matter, timing fails. Markets are not always right (Shiller): prices swing more than fundamentals and predict their own reversal.
- Bubbles recur and become crashes through leverage; crashes become crises through leveraged institutions.
- Post-2008 regulation made banks safer and moved risk to private credit; passive investing and stablecoins raise the old questions again.

[^1]: Dimson, E., Marsh, P., Staunton, M. (2002). *Triumph of the Optimists: 101 Years of Global Investment Returns*. Princeton University Press. Updated annually in the *Credit Suisse/UBS Global Investment Returns Yearbook*.
[^2]: Markowitz, H. (1952). "Portfolio Selection." *Journal of Finance*, 7(1), 77–91. [doi:10.1111/j.1540-6261.1952.tb01525.x](https://doi.org/10.1111/j.1540-6261.1952.tb01525.x)
[^3]: Sharpe, W. F. (1964). "Capital Asset Prices: A Theory of Market Equilibrium under Conditions of Risk." *Journal of Finance*, 19(3), 425–442. [doi:10.1111/j.1540-6261.1964.tb02865.x](https://doi.org/10.1111/j.1540-6261.1964.tb02865.x)
[^4]: Fama, E. F., French, K. R. (1992). "The Cross-Section of Expected Stock Returns." *Journal of Finance*, 47(2), 427–465. [doi:10.1111/j.1540-6261.1992.tb04398.x](https://doi.org/10.1111/j.1540-6261.1992.tb04398.x)
[^5]: Black, F., Scholes, M. (1973). "The Pricing of Options and Corporate Liabilities." *Journal of Political Economy*, 81(3), 637–654. [doi:10.1086/260062](https://doi.org/10.1086/260062)
[^6]: Fama, E. F. (1970). "Efficient Capital Markets: A Review of Theory and Empirical Work." *Journal of Finance*, 25(2), 383–417. [doi:10.2307/2325486](https://doi.org/10.2307/2325486)
[^7]: Fama, E. F., French, K. R. (2010). "Luck versus Skill in the Cross-Section of Mutual Fund Returns." *Journal of Finance*, 65(5), 1915–1947. [doi:10.1111/j.1540-6261.2010.01598.x](https://doi.org/10.1111/j.1540-6261.2010.01598.x)
[^8]: Chinco, A., Sammon, M. (2024). "The passive ownership share is double what you think it is." *Journal of Financial Economics*, 157, 103860. [doi:10.1016/j.jfineco.2024.103860](https://doi.org/10.1016/j.jfineco.2024.103860)
[^9]: Shiller, R. J. (1981). "Do Stock Prices Move Too Much to be Justified by Subsequent Changes in Dividends?" *American Economic Review*, 71(3), 421–436. [jstor.org/stable/1802789](https://www.jstor.org/stable/1802789). Shiller, R. J. (2000). *Irrational Exuberance*. Princeton University Press.
[^10]: Kindleberger, C. P., Aliber, R. Z. (2011). *Manias, Panics, and Crashes: A History of Financial Crises*, 6th ed. Palgrave Macmillan.
[^11]: International Monetary Fund (2024). "The Rise and Risks of Private Credit." *Global Financial Stability Report*, April 2024, Chapter 2. [imf.org](https://www.imf.org/en/Publications/GFSR/Issues/2024/04/16/global-financial-stability-report-april-2024)
[^12]: Philippon, T. (2015). "Has the US Finance Industry Become Less Efficient? On the Theory and Measurement of Financial Intermediation." *American Economic Review*, 105(4), 1408–1438. [doi:10.1257/aer.20120578](https://doi.org/10.1257/aer.20120578)
