---
title: Money and Central Banks
subtitle: What money actually is, how banks create it, why they collapse, and how a committee in Washington moves the price of everything by changing one number.
part: IV · The Economy as a Whole
---

## Recap

Prices coordinate the economy, and prices are quoted in money. This chapter is about the thing they are quoted in: where it comes from, why it can fail, and the institutions built over three centuries to keep it working. Much of what people believe about money is wrong in specific, correctable ways.

## What money is

**Money** is whatever a society generally accepts in payment. Economists define it by what it does: a **medium of exchange** (you can buy things with it), a **unit of account** (prices are quoted in it), and a **store of value** (it keeps its worth long enough to be spent later). Anything that does those three jobs is money, and a remarkable variety of things have: cattle, salt, cowrie shells, cigarettes in prison camps, and on the Pacific island of Yap, limestone discs too large to move, whose ownership was tracked by communal memory.[^1]

For most of history money was a commodity, usually gold or silver, valued in itself. Since 1971, when the United States ended the dollar's link to gold, every major currency has been **fiat money**: paper and electronic entries with no backing except the issuer's promise and the fact that everyone accepts it. This sounds precarious. It works for the same reason language works: a dollar is valuable because others will take it, and they will take it because you will. Fiat money is a self-sustaining convention backed by a state that demands taxes in it, and it has one great advantage over gold. Its supply can be managed, which is also its great danger.

## How money is created

Most people picture money as printed by the government. Coins and notes are, but they are a small fraction of the total. In the United Kingdom about 97 percent of the money supply is bank deposits; in the United States roughly four-fifths. Deposits are created by commercial banks when they lend.[^2]

Here is how. You take out a \$200,000 mortgage. The bank does not hand you \$200,000 that someone else deposited. It credits your account with a new \$200,000 deposit and records a \$200,000 loan as its asset. Money was created by a keystroke. When you repay, the deposit is extinguished and the money disappears. The banking system's total lending, not any printing press, determines the money supply, and the central bank steers it indirectly, by setting the interest rate at which banks borrow from each other and, since the 2008 crisis, mainly by regulating how much capital and liquid assets banks must hold; the old requirement to hold reserves against deposits was cut to zero in the United States in 2020.

:::key
Banks are not warehouses for money. They are money creators, constrained by their capital, by regulation, and by whether anyone wants to borrow at the going rate. This is why credit booms and busts are so central to macroeconomics: when banks lend freely, money and spending expand; when they pull back, both contract, whatever the central bank intends.
:::

## Bank runs

A bank borrows short and lends long: your deposit can be withdrawn tomorrow, but the mortgage it funded will not be repaid for thirty years. That mismatch is the source of banking's usefulness and its fragility. Douglas Diamond and Philip Dybvig showed in 1983 that it creates two equilibria.[^3] In one, depositors leave their money in, the bank funds long-term projects, and everyone gains. In the other, depositors fear the others will withdraw, so each rushes to get out first, the bank sells its long-term assets at fire-sale prices, and it fails even though it was solvent. A **bank run** is a self-fulfilling prophecy, and the trigger can be nothing more than a rumor.

The remedies are a lender of last resort and deposit insurance. Walter Bagehot argued in 1873 that a central bank should lend freely to solvent banks in a panic, at a penalty rate, so that depositors knew they could get their money and therefore did not all try at once.[^4] The United States adopted deposit insurance in 1933 after a wave of runs had closed a third of its banks; runs on insured deposits stopped almost entirely. But in March 2023 Silicon Valley Bank, whose depositors were mostly companies with balances far above the insured limit, lost \$42 billion in one day through electronic withdrawals and failed the next morning, at the time the second-largest bank failure in American history (First Republic, seven weeks later, pushed it to third).[^5] Diamond and Dybvig's mechanism had not changed; only the speed had. They shared the 2022 Nobel Prize with Ben Bernanke, whose 1983 work had shown that the bank failures of the 1930s were not a symptom of the Depression but a cause of its depth.[^6]

## Inflation and the quantity of money

Print too much money and prices rise. The relationship is one of the oldest in economics, formalized by Irving Fisher in 1911:

:::math The quantity equation
$$MV = PY$$
$M$ is the money supply. $V$ is the **velocity of money**, the number of times a dollar changes hands in a year. $P$ is the price level and $Y$ real output, so $PY$ is nominal GDP. The equation is an identity: total spending equals total money times how often it is spent. It becomes a theory when you assume $V$ is stable and $Y$ is set by the real economy, in which case an increase in $M$ must show up as a proportional increase in $P$. Milton Friedman built the **monetarist** case on it: "inflation is always and everywhere a monetary phenomenon."[^7]
:::

The theory is right in the long run and for large changes. Every hyperinflation in history, Germany in 1923, Hungary in 1946, Zimbabwe in 2008, Venezuela after 2016, was a government printing money to cover spending it could not tax or borrow for, and every one ended when the printing stopped.[^8] In the German case prices doubled every few days and workers were paid twice daily so they could spend before the money lost value. The theory is unreliable in the short run and for small changes, because velocity is not stable: after 2008 the Federal Reserve more than tripled the **monetary base** (currency plus the reserves banks hold at the Fed) and inflation did not budge, because banks sat on the new reserves rather than lending them on; broad money barely grew and $V$ collapsed. Monetarism as a policy rule was abandoned in the 1980s for this reason; its central insight, that sustained inflation requires monetary accommodation, was kept.

## Central banks

A **central bank** is the institution that issues a country's money, acts as banker to the banks and the government, and sets **monetary policy**: the management of interest rates and the money supply. The Bank of England dates from 1694, the Federal Reserve from 1913, the European Central Bank from 1998.

The main tool is a short-term interest rate. In the United States it is the **federal funds rate**, the rate at which banks lend reserves to each other overnight, which the Fed steers by paying interest on reserves and buying or selling government bonds. That one rate propagates through the system: banks price mortgages and business loans off it, and it moves the exchange rate and asset prices. Raising it makes borrowing dearer, slows spending, and cools inflation; cutting it does the reverse. When rates hit zero and cannot go lower, as they did in 2008 and 2020, central banks turned to **quantitative easing**: buying long-term bonds in enormous quantities to push down long-term rates directly.

:::math The Taylor rule
John Taylor observed in 1993 that the Fed's behavior could be summarized by a simple formula:[^9]
$$i = r^* + \pi + 0.5(\pi - \pi^*) + 0.5(y - y^*)$$
$i$ is the policy interest rate the central bank sets. $r^*$ is the **neutral real rate**, the rate that neither stimulates nor restrains the economy, estimated at around 0.5 to 1 percent today. $\pi$ is current inflation and $\pi^*$ the target, usually 2 percent. $(y - y^*)$ is the **output gap**, how far GDP is above or below its sustainable level, in percent ($y$ here is the logarithm of output, so the difference is a percentage gap rather than a dollar amount). Read it as: start from neutral, add inflation, then lean against deviations, raising rates half a point for every point inflation exceeds target and for every point output exceeds capacity. No central bank follows it mechanically, but every central bank's decisions can be compared to it, and large deviations, as in 2021 when it prescribed rates far above zero while the Fed held at zero, become the subject of argument.
:::

## The Phillips curve and its collapse

In 1958 A. W. Phillips plotted a century of British data and found that low unemployment went with rising wages and high unemployment with falling ones.[^10] The **Phillips curve** seemed to offer a menu: a government could buy lower unemployment with a little more inflation. In the 1960s several tried.

Milton Friedman and Edmund Phelps predicted in 1967 and 1968 that the menu would vanish.[^11] Workers care about real wages, not nominal ones. If inflation is expected, they build it into their demands, and unemployment returns to its natural rate at the higher inflation. Only *unexpected* inflation lowers unemployment, and it cannot stay unexpected. The 1970s confirmed them brutally: inflation and unemployment rose together, a combination the original curve said was impossible, and the word **stagflation** was coined for it. Robert Lucas generalized the point in 1976: any policy that works by fooling people stops working once they understand it, so economic relationships estimated under one policy cannot be relied on under another.[^12] The **Lucas critique** reshaped macroeconomics and is the reason modern models are built from people's decisions rather than from historical correlations.

The lesson for central banks was that **expectations** are the whole game. If people believe inflation will be 2 percent, they set wages and prices accordingly and it largely is. If they lose that belief, the cost of restoring it is a recession: Paul Volcker's Fed pushed interest rates above 19 percent in 1981 and unemployment above 10 percent to break the inflation of the 1970s.[^13] Since then the goal of policy has been to keep expectations **anchored**.

## Independence and targets

If expectations matter, credibility matters, and a central bank controlled by politicians who want low rates before an election is not credible. Finn Kydland and Edward Prescott showed in 1977 why: a government that promises low inflation has an incentive to renege once wages are set, everyone knows it, and so the promise is not believed.[^14] The fix is commitment (chapter 7): make the central bank independent, give it a mandate, and let it be judged on results. New Zealand adopted the first formal **inflation target** in 1990; most rich countries followed within a decade, and inflation in the targeting countries fell to about 2 percent and stayed there for thirty years.[^15] Whether the stability came from the targets or from a benign era is debated. What is not debated is that countries with politically controlled central banks, from Argentina to Turkey, have had far more inflation.

## The 2021 test

In 2021 and 2022 inflation in the United States rose to 9 percent, its highest in forty years, and central banks that had spent a decade worrying about inflation being too low were caught out. The postmortems are the best recent case study in how the field learns. Ben Bernanke and Olivier Blanchard concluded in 2023 that most of the initial surge came from supply: pandemic shortages and the energy spike after Russia's invasion of Ukraine, which the Fed could not have prevented.[^16] But demand mattered too: a very tight labor market and large fiscal transfers kept inflation from fading as the supply shocks did. The Fed raised rates by more than five points in eighteen months. Inflation fell back toward 3 percent without the deep recession many had predicted, an outcome nicknamed the "immaculate disinflation," partly because expectations had stayed anchored and partly because the labor market cooled through fewer job openings rather than layoffs.[^17] The Fed revised its policy framework in 2025 to remove language that had committed it to tolerating overshoots.[^18]

:::frontier
Two questions dominate. First, whether the neutral rate $r^*$, which fell for forty years and made the zero bound a chronic problem, has risen again with higher debt and investment demand; the answer determines whether the next recession can be fought with rate cuts at all. Second, what to do about money that is not bank deposits: **stablecoins**, digital tokens pegged to the dollar and backed by Treasury bills, were brought under federal regulation in 2025, and several central banks are piloting **digital currencies** of their own. Both revive Diamond and Dybvig's question in new clothes: what happens when everyone wants out at once? Bitcoin, by this chapter's own test, is not money: almost nothing is priced in it and its value swings too much to store value reliably. It is an asset, and chapter 15 treats it as one.
:::

## Summary

- Money is whatever is generally accepted in payment; fiat money is a convention backed by the state. Most of it is bank deposits, created when banks lend.
- Banks borrow short and lend long, which makes them useful and run-prone; deposit insurance and a lender of last resort are the remedies, and SVB showed the mechanism still works at electronic speed.
- $MV = PY$: sustained inflation requires money growth, and every hyperinflation was printing. In the short run velocity moves and the link is loose.
- Central banks steer a short-term rate that propagates everywhere; the Taylor rule summarizes how. Expectations are the whole game, which is why credibility and independence matter.
- The Phillips curve trade-off vanishes once expected; the Lucas critique says any exploited relationship breaks.
- The 2021 inflation was mostly supply with a demand component, and it fell without a deep recession because expectations held.

[^1]: Furness, W. H. (1910). *The Island of Stone Money: Uap of the Carolines*. Philadelphia: Lippincott. Friedman, M. (1991). "The Island of Stone Money." Hoover Institution Working Paper E-91-3. [hoover.org](https://www.hoover.org/research/island-stone-money)
[^2]: McLeay, M., Radia, A., Thomas, R. (2014). "Money creation in the modern economy." *Bank of England Quarterly Bulletin*, 2014 Q1, 14–27. [bankofengland.co.uk](https://www.bankofengland.co.uk/quarterly-bulletin/2014/q1/money-creation-in-the-modern-economy)
[^3]: Diamond, D. W., Dybvig, P. H. (1983). "Bank Runs, Deposit Insurance, and Liquidity." *Journal of Political Economy*, 91(3), 401–419. [doi:10.1086/261155](https://doi.org/10.1086/261155)
[^4]: Bagehot, W. (1873). *Lombard Street: A Description of the Money Market*. London: Henry S. King. [econlib.org](https://www.econlib.org/library/Bagehot/bagLom.html)
[^5]: Board of Governors of the Federal Reserve System (2023). *Review of the Federal Reserve's Supervision and Regulation of Silicon Valley Bank*. 28 April 2023. [federalreserve.gov](https://www.federalreserve.gov/publications/review-of-the-federal-reserves-supervision-and-regulation-of-silicon-valley-bank.htm)
[^6]: Bernanke, B. S. (1983). "Nonmonetary Effects of the Financial Crisis in the Propagation of the Great Depression." *American Economic Review*, 73(3), 257–276. [jstor.org/stable/1808111](https://www.jstor.org/stable/1808111). The Sveriges Riksbank Prize in Economic Sciences 2022. [nobelprize.org](https://www.nobelprize.org/prizes/economic-sciences/2022/press-release/)
[^7]: Fisher, I. (1911). *The Purchasing Power of Money*. New York: Macmillan. Friedman, M. (1970). *The Counter-Revolution in Monetary Theory*. Institute of Economic Affairs Occasional Paper 33, p. 24.
[^8]: Hanke, S. H., Krus, N. (2013). "World Hyperinflations." In *The Handbook of Major Events in Economic History*, ed. R. Parker and R. Whaples, Routledge. Cato Working Paper No. 8 (2012). [cato.org](https://www.cato.org/working-paper/world-hyperinflations)
[^9]: Taylor, J. B. (1993). "Discretion versus policy rules in practice." *Carnegie-Rochester Conference Series on Public Policy*, 39, 195–214. [doi:10.1016/0167-2231(93)90009-L](https://doi.org/10.1016/0167-2231(93)90009-L)
[^10]: Phillips, A. W. (1958). "The Relation Between Unemployment and the Rate of Change of Money Wage Rates in the United Kingdom, 1861–1957." *Economica*, 25(100), 283–299. [doi:10.1111/j.1468-0335.1958.tb00003.x](https://doi.org/10.1111/j.1468-0335.1958.tb00003.x)
[^11]: Friedman, M. (1968). "The Role of Monetary Policy." *American Economic Review*, 58(1), 1–17. [jstor.org/stable/1831652](https://www.jstor.org/stable/1831652). Phelps, E. S. (1967). "Phillips Curves, Expectations of Inflation and Optimal Unemployment over Time." *Economica*, 34(135), 254–281. [doi:10.2307/2552025](https://doi.org/10.2307/2552025)
[^12]: Lucas, R. E. (1976). "Econometric Policy Evaluation: A Critique." *Carnegie-Rochester Conference Series on Public Policy*, 1, 19–46. [doi:10.1016/S0167-2231(76)80003-6](https://doi.org/10.1016/S0167-2231(76)80003-6)
[^13]: Goodfriend, M., King, R. G. (2005). "The incredible Volcker disinflation." *Journal of Monetary Economics*, 52(5), 981–1015. [doi:10.1016/j.jmoneco.2005.07.001](https://doi.org/10.1016/j.jmoneco.2005.07.001)
[^14]: Kydland, F. E., Prescott, E. C. (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy*, 85(3), 473–491. [doi:10.1086/260580](https://doi.org/10.1086/260580)
[^15]: Bernanke, B. S., Laubach, T., Mishkin, F. S., Posen, A. S. (1999). *Inflation Targeting: Lessons from the International Experience*. Princeton University Press.
[^16]: Bernanke, B., Blanchard, O. (2025). "What Caused the US Pandemic-Era Inflation?" *American Economic Journal: Macroeconomics*, 17(3), 1–35. [doi:10.1257/mac.20230195](https://doi.org/10.1257/mac.20230195)
[^17]: Figura, A., Waller, C. J. (2022). "What does the Beveridge curve tell us about the likelihood of a soft landing?" FEDS Notes, Board of Governors of the Federal Reserve System, 29 July 2022. [doi:10.17016/2380-7172.3190](https://doi.org/10.17016/2380-7172.3190)
[^18]: Board of Governors of the Federal Reserve System (2025). "Federal Open Market Committee announces approval of updates to its Statement on Longer-Run Goals and Monetary Policy Strategy." Press release, 22 August 2025. [federalreserve.gov](https://www.federalreserve.gov/newsevents/pressreleases/monetary20250822a.htm)
