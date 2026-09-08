---
title: Everyday and Money Math
subtitle: Interest, loans, mortgages, inflation, tips, discounts, conversions, and the arithmetic of a lifetime. The chapter most likely to pay for itself.
part: V · Math in Use
---

## How do time and uncertainty change the value of money?

Chapters 2, 4, and 6 gave percentages, exponents, and exponential growth. This chapter puts them to the use most people meet most often: money. Nothing here is beyond arithmetic and one formula, but the results surprise almost everyone the first time, and the surprise is worth a great deal over a lifetime.

## Simple and compound interest

**Interest** is the price of using someone's money. **Simple interest** pays a fixed percentage of the original amount each period: \$1,000 at 5 percent simple earns \$50 a year, forever, and after 20 years you have \$2,000. **Compound interest** pays interest on the interest: the 5 percent is applied to the growing balance, so year two earns \$52.50, year three \$55.13, and after 20 years you have \$2,653. After 40 years, simple gives \$3,000 and compound \$7,040. The gap is the exponential of chapter 6 against a straight line, and over a working life it is enormous.

:::math The compound interest formula
$$A = P\left(1 + \frac{r}{n}\right)^{nt}$$
$A$ is the final amount, $P$ the **principal** (starting amount), $r$ the annual rate as a decimal (5 percent is 0.05), $n$ the number of compounding periods per year, and $t$ the number of years. For annual compounding $n = 1$ and the formula is just $P(1 + r)^t$. Compounding more often helps slightly, and in the limit of continuous compounding it becomes $A = Pe^{rt}$, which is where $e$ came from (chapter 6). Monthly versus annual compounding at 5 percent over 20 years: \$2,712 versus \$2,653. The frequency matters less than the rate and the time.[^1]
:::

:::howto Compound growth calculations
1. **Future value**: multiply the starting amount by $(1 + r)^t$. \$10,000 at 7 percent for 30 years: $10{,}000 \times 1.07^{30} = 10{,}000 \times 7.612 = \$76{,}123$.
2. **Doubling time**: about $72/r$ years for $r$ in percent (72 is used rather than 70 for money because it divides nicely by common rates). At 6 percent, 12 years; at 8 percent, 9 years; at 1 percent, 72 years.
3. **Required rate**: to turn $P$ into $A$ in $t$ years, $r = (A/P)^{1/t} - 1$. To triple in 15 years: $3^{1/15} - 1 = 0.076$, about 7.6 percent.
4. **Present value**: what a future sum is worth today, $PV = A/(1 + r)^t$. \$100,000 in 20 years, if you could earn 5 percent, is worth $100{,}000 / 1.05^{20} = \$37{,}689$ now. This is the single most important idea in finance: money later is worth less than money now, and the rate sets the exchange.

*Example, the cost of waiting.* Two people save \$300 a month at 7 percent until 65. One starts at 25, the other at 35. The first accumulates about \$787,000; the second about \$366,000. Ten years of contributions (\$36,000) cost \$420,000 of outcome, because the early money compounds for longest.[^2]
:::

:::math Saving a fixed amount each period
A regular deposit of $C$ per period, earning rate $i$ per period, grows after $N$ periods to
$$FV = C\,\frac{(1 + i)^N - 1}{i}$$
This is the **future value of an annuity**; it comes from adding a geometric series (chapter 8), because each deposit compounds for a different length of time. For \$300 a month at 7 percent for 40 years: $i = 0.07/12$, $N = 480$, $FV = 300 \times (1.005833^{480} - 1)/0.005833 \approx \$787{,}000$. In a spreadsheet this is `=FV(0.07/12, 480, -300)`.
:::

## APR, APY, and the fine print

Two rates appear on financial documents and they differ. The **APR** (annual percentage rate) is the nominal yearly rate, usually the monthly rate times 12. The **APY** (annual percentage yield, or **effective rate**) is what you actually earn or pay after compounding: $(1 + r/n)^n - 1$. A credit card at 24 percent APR compounded monthly has an APY of $(1.02)^{12} - 1 = 26.8$ percent. Lenders advertise APR when they want the number to look small and APY when they want it to look large; the law in most countries requires disclosing the APR on loans and the APY on savings, which is not a coincidence.[^3]

## Loans and mortgages

A loan is compound interest run backward: you receive the principal now and repay it in installments that cover both interest and part of the balance. The monthly payment on a fixed-rate loan is the one formula in this chapter worth keeping.

:::math The loan payment formula
For principal $P$, monthly interest rate $i$ (annual rate divided by 12), and $N$ monthly payments,
$$M = P\,\frac{i(1 + i)^N}{(1 + i)^N - 1}$$
This is derived from the geometric series of chapter 8: the payments, each discounted back to the present, must add up to the principal. When $i$ is tiny, $M \approx P/N$ (just paying back the principal); when $i$ is large, $M \approx Pi$ (just paying the interest, never the principal).

*Example.* A \$300,000 mortgage at 6 percent for 30 years: $i = 0.005$, $N = 360$, $(1.005)^{360} = 6.023$, so $M = 300{,}000 \times 0.005 \times 6.023 / 5.023 = \$1{,}799$. Total paid over 30 years: $1{,}799 \times 360 = \$647{,}600$, of which \$347,600 is interest. The interest exceeds the house.[^4] In a spreadsheet, `=PMT(0.06/12, 360, -300000)` gives 1,798.65; the same formula is behind every online mortgage calculator.
:::

:::howto Comparing loans and understanding amortization
1. **Compute the monthly payment** for each option with the formula, or a spreadsheet's PMT function, which is the same formula.
2. **Compute total cost**: payment times number of payments. Compare totals, not just monthly payments; a longer term lowers the payment and raises the total.
3. **Early payments are mostly interest.** In month one of the mortgage above, interest is $300{,}000 \times 0.005 = \$1{,}500$ and only \$299 reduces the balance. By year 20, most of each payment is principal. This **amortization** schedule is why paying extra early has outsized effect and why selling after five years leaves you with little equity.
4. **Rate matters more than it looks.** The same loan at 7 percent costs \$1,996 a month and \$718,500 total; one percentage point is \$71,000 over the life of the loan.
5. **Extra payments**: paying \$200 more a month on the 6 percent loan clears it in about 23 years instead of 30 and saves about \$91,000 in interest. The formula, rearranged for $N$ using logarithms (chapter 4), gives the new term: $N = -\ln(1 - Pi/M)/\ln(1 + i)$; with $M = 1{,}999$ that is 278 months. In a spreadsheet, `=NPER(0.06/12, -1999, 300000)`.
:::

:::warning
**Minimum payments** on credit cards are designed so that the balance barely falls. A \$5,000 balance at 24 percent APR, paying only the typical minimum (that month's interest plus 1 percent of the balance, with a \$25 floor), takes about 20 years to pay off and costs nearly \$9,000 in interest. The card statement is legally required to say so in the United States, in a box most people do not read.[^5] Paying a fixed \$150 a month, which is the first month's minimum, clears it in under 5 years and costs about \$3,300 in interest. Compound interest is the same force whether it is working for you or against you; the only difference is which side of the equation you are on.
:::

## Annuities, pensions, and "how long will it last"

An **annuity** is a stream of equal payments. The loan formula, read the other way, tells you what a stream of payments is worth today, or how long a pot of money lasts if you draw from it. A retirement fund of \$500,000 earning 4 percent, drawn at \$3,000 a month, lasts about 20 years; drawn at \$2,500, about 28 years; drawn at \$1,667 a month (4 percent of the pot a year), it lasts forever in expectation, because the withdrawals equal the growth. That is the origin of the "4 percent rule" for retirement spending, whose real-world validity depends on returns being steady, which they are not.[^6]

## Inflation and real value

**Inflation** is the general rise in prices; at 3 percent a year, a dollar buys 3 percent less each year, and after 24 years half as much. Everything in money over time must be corrected for it. The **real** return on an investment is roughly the nominal return minus inflation: a savings account paying 4 percent when inflation is 3 percent is growing your purchasing power at about 1 percent. Exactly, $(1 + \text{nominal})/(1 + \text{inflation}) - 1$, but the subtraction is close enough for small rates.

:::howto Correcting for inflation
1. Find the price index for both years (in the US, the Consumer Price Index; the Bureau of Labor Statistics publishes it monthly and offers a calculator).[^7]
2. Multiply the old amount by (new index / old index).

*Example.* A salary of \$30,000 in 1990 (CPI about 130.7) equals $30{,}000 \times 320 / 130.7 \approx \$73{,}500$ in 2025 dollars (CPI about 320). Someone earning \$60,000 in 2025 is *poorer* in real terms than they were on \$30,000 in 1990, despite the nominal doubling. Any comparison of prices, wages, or budgets across more than a few years without this correction is meaningless, and "record high" in nominal dollars almost always is.
:::

## Everyday percentages

:::howto Tips, discounts, taxes, and splits, in your head
1. **Tip**: 10 percent is the decimal point moved one place; 20 percent is double that; 15 percent is 10 percent plus half of it. On \$64: 10% is 6.40, 20% is 12.80, 15% is 9.60.
2. **Discount**: 25 percent off is three-quarters of the price; 30 percent off is 0.7 times; "buy one get one half off" is 25 percent off the pair.
3. **Stacked discounts don't add**: 20 percent off then 10 percent off is $0.8 \times 0.9 = 0.72$, or 28 percent off, not 30.
4. **Sales tax**: multiply by $(1 + \text{rate})$. To back it out, divide, do not subtract (chapter 2).
5. **Splitting a bill with tip**: total the bill, multiply by 1.18 or so, divide by the number of people. \$147 among 4 with 18 percent: $147 \times 1.18 = 173.5$, divided by 4 is \$43.40 each.
6. **Unit price**: divide price by quantity and compare per unit. 500 g for \$3.20 is 64 cents per 100 g; 750 g for \$4.50 is 60 cents. Larger packs are not always cheaper, and shelf labels showing unit price exist because they often are not.
:::

## Tax brackets and the budget

Income tax in most countries is **progressive**: income is taxed in slices, or **brackets**, and each slice at its own rate. The rate on the top slice is the **marginal rate**; the total tax divided by total income is the **average rate**, and it is always lower. Confusing the two is the source of the most persistent money myth in circulation.

:::howto Marginal versus average tax
Suppose the first \$20,000 of income is taxed at 10 percent and everything above it at 30 percent.
1. On \$50,000: the first \$20,000 owes \$2,000; the remaining \$30,000 owes \$9,000; total \$11,000. Marginal rate 30 percent; average rate $11{,}000 / 50{,}000 = 22$ percent.
2. A raise from \$50,000 to \$55,000 is taxed at the marginal rate: you keep \$3,500 of the \$5,000. Only the *new* dollars are taxed at 30 percent; the old ones are not re-taxed. A raise can never leave you with less take-home pay, whatever the office folklore says.
3. To compare a deduction with a credit: a **deduction** of \$1,000 reduces taxable income and saves you \$1,000 times your marginal rate (\$300 here); a **credit** of \$1,000 reduces tax owed and saves the full \$1,000.
:::

Lenders and budgeters use one more ratio. The **debt-to-income ratio** is total monthly debt payments divided by gross monthly income; mortgage lenders in the United States typically want it under about 43 percent, and a common budgeting rule keeps essentials near half of take-home pay, wants near 30 percent, and saving or debt repayment near 20 percent. The arithmetic is the percentage skill of chapter 2; the discipline is looking at every payment as a share of income rather than as a number on its own.[^9]

## Units and conversion

Most conversion errors come from doing them in the wrong direction. The reliable method is to multiply by a fraction equal to 1, arranged so the unwanted unit cancels.

:::howto Converting units
1. Write the quantity with its unit: 65 miles/hour.
2. Multiply by conversion fractions equal to 1, with the unit you want to remove on the opposite side: $65 \dfrac{\text{mi}}{\text{h}} \times \dfrac{1.609 \text{ km}}{1 \text{ mi}} = 104.6 \dfrac{\text{km}}{\text{h}}$.
3. Check that the units cancel to what you want. If they do not, you have a fraction upside down.

| Quantity | Conversion |
|---|---|
| Length | 1 inch = 2.54 cm; 1 foot = 30.48 cm; 1 mile = 1.609 km; 1 m = 3.281 ft |
| Mass | 1 kg = 2.205 lb; 1 oz = 28.35 g |
| Volume | 1 US gallon = 3.785 L; 1 liter = 1.057 US quarts; 1 cup = 237 mL |
| Temperature | °F = °C × 1.8 + 32; °C = (°F − 32) / 1.8. Quick: double °C and add 30. |
| Area | 1 acre = 4,047 m² = 0.405 ha; 1 hectare = 2.471 acres |
| Speed | 1 m/s = 3.6 km/h = 2.237 mph |
| Fuel | mpg to L/100 km: divide 235.2 by the mpg |
| Energy | 1 kWh = 3.6 MJ; 1 food calorie (kcal) = 4.184 kJ |

*Temperature is the exception*: it has an offset, so you cannot convert by a single multiplication, and a temperature *difference* of 10°C is 18°F, not 50°F. NASA lost a \$125 million Mars orbiter in 1999 because one team used pound-seconds and another newton-seconds.[^8]
:::

## Estimation with money

Three habits protect against most financial mistakes. **Convert to a yearly figure**: \$5 a day is \$1,825 a year, which is a different decision than "just five dollars." **Convert to hours of work**: a \$1,200 purchase on a \$30-an-hour wage (about \$22 after tax) is about 55 hours, more than a week. **Ask what the money would become**: \$1,200 invested at 7 percent for 30 years is \$9,100; that is the true price of the purchase, and while you should sometimes pay it, you should know it. Chapter 15 makes estimation systematic.

:::formulas
| Quantity | Formula |
|---|---|
| Compound interest | $A = P\left(1 + \dfrac{r}{n}\right)^{nt}$ |
| Continuous compounding | $A = Pe^{rt}$ |
| Rule of 72 | doubling time $\approx 72 / r\%$ |
| Present value | $PV = \dfrac{A}{(1 + r)^t}$ |
| Effective rate (APY) | $(1 + r/n)^n - 1$ |
| Loan payment | $M = P\,\dfrac{i(1+i)^N}{(1+i)^N - 1}$ |
| Loan term from payment | $N = -\dfrac{\ln(1 - Pi/M)}{\ln(1 + i)}$ |
| Future value of regular saving | $FV = C\,\dfrac{(1+i)^N - 1}{i}$ |
| Average tax rate | total tax ÷ total income (always below the marginal rate) |
| Real return | $\dfrac{1 + \text{nominal}}{1 + \text{inflation}} - 1 \approx \text{nominal} - \text{inflation}$ |
| Inflation adjustment | $\text{value}_{\text{new}} = \text{value}_{\text{old}} \times \dfrac{\text{CPI}_{\text{new}}}{\text{CPI}_{\text{old}}}$ |
| Stacked discounts | multiply the factors: 20% then 10% off is $0.8 \times 0.9 = 0.72$ |
:::

:::know
- Compound interest doubles money every $72/r$ years; starting ten years earlier can double the outcome.
- Money later is worth less than money now; present value is the exchange rate.
- On a 30-year mortgage at 6 percent, interest exceeds principal. Early payments are almost all interest; extra payments early are disproportionately effective.
- APR understates what you pay; APY is the true rate. Minimum payments are designed to last decades.
- Only the dollars above a bracket threshold are taxed at the higher rate. A raise never reduces take-home pay.
- Always correct for inflation before comparing money across years.
- Stacked percentages multiply. Convert units by multiplying by fractions equal to 1 and checking that units cancel.
:::

:::try Put the idea to work
An amount grows by 5 percent a year for two years. Is the total growth 10 percent? Use 100 as a starting amount.

:::answer Show the reasoning
It becomes 105 after one year and 110.25 after two: growth of 10.25 percent. The second year's increase applies to the first year's gain too. The factor is 1.05². This is an arithmetic illustration with a fixed rate, not a forecast of an investment return.
:::
:::

## Summary

- Compound interest is exponential growth; time and rate dominate, and starting early is the largest single lever a saver has.
- One formula gives loan payments; from it follow total cost, amortization, the effect of rate and term, and the cost of minimum payments.
- Annuities and drawdown are the same formula read backward; inflation must be stripped out of every comparison over time.
- Everyday percentages, unit prices, and conversions are mental arithmetic with a few reliable methods.
- The most valuable habit is translating every sum into what it would become, what it costs in hours, and what it is per year.

[^1]: OpenStax (2023). *Contemporary Mathematics*. Chapter 6, "Money Management," sections 6.3–6.4 on simple and compound interest. [openstax.org](https://openstax.org/books/contemporary-mathematics/pages/6-3-simple-interest)
[^2]: Calculated with the future value of an annuity formula, $FV = C\,\frac{(1+i)^N - 1}{i}$, with $C = 300$ at $i = 0.07/12$ for 480 and 360 months, giving \$787,000 and \$366,000 (annual compounding of \$3,600 a year gives \$719,000 and \$340,000). U.S. Securities and Exchange Commission. *Compound Interest Calculator*. [investor.gov](https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator)
[^3]: Truth in Lending Act, 15 U.S.C. §1601 et seq., implemented as Regulation Z (12 CFR Part 1026), requires APR disclosure on consumer credit; the Truth in Savings Act (Regulation DD, 12 CFR Part 1030) requires APY on deposit accounts. Consumer Financial Protection Bureau. [consumerfinance.gov](https://www.consumerfinance.gov/rules-policy/regulations/1026/)
[^4]: Consumer Financial Protection Bureau. "What is amortization and how could it affect my auto loan?" and the CFPB mortgage explainer series. [consumerfinance.gov](https://www.consumerfinance.gov/ask-cfpb/what-is-amortization-and-how-could-it-affect-my-auto-loan-en-761/). Formula derivation: OpenStax, *Contemporary Mathematics*, section 6.6, "Loans."
[^5]: Credit Card Accountability Responsibility and Disclosure Act of 2009, §201, requiring the minimum-payment warning on statements. Consumer Financial Protection Bureau (2023). *The Consumer Credit Card Market*. [consumerfinance.gov](https://www.consumerfinance.gov/data-research/research-reports/the-consumer-credit-card-market-2023/)
[^6]: Bengen, W. P. (1994). "Determining Withdrawal Rates Using Historical Data." *Journal of Financial Planning*, 7(4), 171–180. [financialplanningassociation.org](https://www.financialplanningassociation.org/sites/default/files/2020-05/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf). Its limits: Pfau, W. D. (2010). "An International Perspective on Safe Withdrawal Rates." *Journal of Financial Planning*, 23(12), 52–61.
[^7]: U.S. Bureau of Labor Statistics. *CPI Inflation Calculator* and CPI-U all-items index (annual averages: 1990 = 130.7; 2024 = 313.7, with 2025 near 320). [bls.gov/data/inflation_calculator.htm](https://www.bls.gov/data/inflation_calculator.htm)
[^8]: NASA (1999). *Mars Climate Orbiter Mishap Investigation Board Phase I Report*, 10 November 1999. [llis.nasa.gov](https://llis.nasa.gov/llis_lib/pdf/1009464main1_0641-mr.pdf). Conversion factors: NIST Special Publication 811 (2008), *Guide for the Use of the International System of Units*, Appendix B. [nist.gov](https://www.nist.gov/pml/special-publication-811)
[^9]: Consumer Financial Protection Bureau. "What is a debt-to-income ratio?" (the 43 percent threshold for qualified mortgages). [consumerfinance.gov](https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/). The 50/30/20 rule: Warren, E., Tyagi, A. W. (2005). *All Your Worth: The Ultimate Lifetime Money Plan*. New York: Free Press. Marginal versus average rates: Internal Revenue Service, *Publication 17*, tax rate schedules. [irs.gov](https://www.irs.gov/publications/p17)
