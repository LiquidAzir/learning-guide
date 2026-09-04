---
title: The Toolkit
subtitle: Opportunity cost, thinking at the margin, the supply-and-demand diagram, growth rates, discounting, and the difference between correlation and cause. Everything else is built from these.
part: I · Foundations
---

## Why start with tools

Economics has fewer equations than physics and more habits of mind. Most of its power comes from a handful of ideas applied relentlessly. This chapter teaches them, along with the small amount of math the rest of the guide uses. As before, you will not have to calculate anything yourself, but you will see the calculations done and every symbol explained.

## Opportunity cost: the price of anything is what you give up

The single most important idea in economics is that the true cost of any choice is the best alternative you forgo. Economists call this **opportunity cost**. Going to university costs tuition, but it also costs the four years of wages you did not earn, and for most students the second number is larger. A city that uses a block of downtown land for a parking lot pays, every year, the rent it could have collected from an office tower there. That rent is never invoiced, so people forget it. Economics is largely the discipline of remembering.

:::key
There is no such thing as a free lunch. Not because someone is always secretly charging you, but because the ingredients, the cook's time, and the room could have been used for something else. The question is never "does this cost anything?" It is always "compared to what?"
:::

## Thinking at the margin

Should you eat another slice of pizza? Not "is pizza good?" but "is *one more* slice worth it, given what you have already had?" That is **marginal** thinking: deciding by comparing the extra benefit of a little more against the extra cost of a little more, and stopping where they meet. The first slice is worth a lot; the sixth is not. Economists say **marginal benefit** falls, a pattern so common it has a name, **diminishing returns**.

Nearly every decision rule in this guide has the form "do it until the marginal benefit equals the marginal cost." A firm hires workers until the last one adds just enough revenue to cover their wage. A student studies until the last hour's improvement in the grade is worth less than the sleep it costs. A government should spend on a program up to the point where the last dollar does as much good there as it would anywhere else. The rule sounds obvious. It is violated constantly, because people think in totals and averages instead.

The margin's companion is the **sunk cost**: money or effort already spent that no decision can recover. Because it is gone whatever you do, it should not affect what you do next, yet it constantly does. People sit through films they dislike because they paid for the ticket, and firms keep pouring money into failing projects because so much has already been spent. The economist's rule is blunt: bygones are bygones. Only the costs and benefits still ahead of you count.

## Supply and demand

The most useful diagram in the social sciences was drawn in its modern form by Alfred Marshall in 1890.[^1] It answers one question, "what will the price be?", and the answer is where two curves cross.

The **demand curve** shows how much of something people want to buy at each price. It slopes down: the higher the price, the fewer buyers find it worth having, so quantity demanded falls. The **supply curve** shows how much sellers offer at each price. It slopes up: a higher price makes it worthwhile for more producers, or higher-cost producers, to sell.

{{fig:supply-demand|Supply and demand. The price settles where the two curves cross. Above that price, sellers offer more than buyers want and the surplus pushes the price down; below it, buyers want more than is offered and the shortage pushes it up.}}

Where the curves cross is the **equilibrium**: the one price at which the amount people want to buy equals the amount sellers want to sell. At any higher price there is a **surplus**, unsold goods, and sellers cut prices to move them. At any lower price there is a **shortage**, and buyers bid the price up. Nobody sets the equilibrium; it is where the pushing stops.

:::math Supply and demand as algebra
Suppose the quantity people want to buy is $Q_d = 100 - 2P$ (each dollar of price cuts demand by 2 units) and the quantity sellers offer is $Q_s = 10 + P$ (each dollar of price draws out 1 more unit). Equilibrium is where they are equal:
$$100 - 2P = 10 + P \quad\Rightarrow\quad 3P = 90 \quad\Rightarrow\quad P = 30,\ Q = 40$$
At a price of 30, forty units change hands. Now a frost destroys part of the crop, so supply becomes $Q_s = 1 + P$. Solve again: $100 - 2P = 1 + P$, so $P = 33$ and $Q = 34$. The price rises, the quantity falls, and the diagram has told you both directions and rough magnitudes without any knowledge of the product. That is the whole trick, and chapter 4 spends a chapter on what it can and cannot do.
:::

The diagram's power comes from separating two kinds of change. A change in price moves you *along* a curve. A change in anything else, incomes, tastes, technology, weather, the price of a related good, *shifts* the whole curve. Most confusions about markets come from mixing those two up.

Two kinds of related good matter. **Substitutes** are goods used in place of each other: when coffee gets dearer, demand for tea shifts up. **Complements** are goods used together: when petrol gets dearer, demand for large cars shifts down. And a rise in income shifts demand up for most goods (**normal goods**) but down for some (**inferior goods**, such as instant noodles, which people abandon as they can afford better). A price change itself has two effects folded together: it makes the good relatively dearer, so people substitute away from it (the **substitution effect**), and it makes them effectively poorer, so they buy less of most things (the **income effect**). For nearly every good both push the same way, which is why demand curves slope down.

## Elasticity: how much does it respond?

Slopes depend on units, so economists prefer a unit-free measure. **Elasticity** is the percentage change in one thing divided by the percentage change in another. For demand it is negative, since price and quantity move in opposite directions, and the convention is to compare its size to 1. The **price elasticity of demand** for gasoline is about $-0.1$ in the short run: a 10% price rise cuts consumption by only about 1%, because people still have to drive to work and cannot change cars overnight. Over several years, as they buy smaller cars and move closer to work, it rises to about $-0.3$.[^2] Demand is **inelastic** in both cases (size below 1), though much less so given time. For restaurant meals the elasticity is around $-2$: a 10% price rise cuts sales by about 20%.[^6] Demand is **elastic** (size above 1): there are many alternatives.

Elasticity decides who bears a tax, whether a price rise raises or lowers a seller's revenue, and how much a policy will change behavior. When you read that a carbon tax will cut emissions, the whole argument is an elasticity.

## Real versus nominal

A **nominal** quantity is measured in the money of its day. A **real** quantity has been corrected for inflation so that it measures actual goods and services. Average hourly pay for ordinary US workers rose from about \$3.40 in 1970 to about \$30 in 2024: a ninefold nominal rise. Consumer prices rose about eightfold over the same period, so the real wage rose only about 10%.[^3] (Correct with a different price index and the answer lands anywhere between 10% and 30%, which is why arguments about "stagnant wages" so often turn on which index was used.) Nearly every misleading economic statistic you will ever encounter involves quoting a nominal number as if it were real. The correction is simple: divide by a price index.

## Growth rates, compounding, and the rule of 70

Economies are described by rates of change, so a little arithmetic of growth goes a long way. Something growing at rate $g$ per year multiplies by $(1 + g)$ each year, and by $(1 + g)^t$ after $t$ years. That is **compounding**, and its consequences are wildly unintuitive. An economy growing at 2% a year doubles in about 35 years; at 7%, in about 10.

:::math The rule of 70
The time for a quantity to double at growth rate $g$ (in percent per year) is approximately
$$t_{\text{double}} \approx \frac{70}{g}$$
It comes from taking logarithms of $(1+g)^t = 2$ and using the fact that $\ln 2 \approx 0.69$. China grew at roughly 9% a year from 1980 to 2010, so its economy doubled about every 8 years and multiplied about 13 times in 30 years.[^4] The United States grew at about 3%, doubling every 23 years. Small differences in growth rates, sustained, produce enormous differences in wealth. Chapter 10 is about why.
:::

Because of compounding, economists plot long-run data on **logarithmic scales**, where each step up the axis is a multiplication rather than an addition. On a log scale, steady growth is a straight line, and a change in slope means a change in growth rate. Whenever a chart of GDP or prices over decades looks like a hockey stick, check the axis; on a log scale the stick may be a ruler.

## Discounting and present value

A dollar next year is worth less than a dollar today, because today's dollar can be invested and earn interest, and because you might prefer to have it now. **Discounting** converts future money into today's terms. If the interest rate is $r$, a payment of $X$ in $t$ years is worth $X / (1+r)^t$ today: its **present value**. At 5%, \$100 in ten years is worth about \$61 today. At 5%, \$100 in fifty years is worth about \$9.

That last number matters enormously, because it means the interest rate you choose decides how much you care about the far future. Climate policy turns on it (chapter 16): a damage of \$1 trillion in the year 2100 is worth \$25 billion today at a 5% discount rate and \$225 billion at 2%. Economists have argued about which rate is right for forty years and have not settled it, because the question is partly ethical.

## Expected value and risk

When outcomes are uncertain, economists weigh each by its probability. The **expected value** of a gamble is the sum of each outcome times its chance. A lottery ticket costing \$2 with a one-in-a-million chance of \$1 million has an expected value of \$1, so on average you lose a dollar per ticket, which is why lotteries fund governments.

People are not indifferent between a sure \$50 and a coin flip for \$100, even though the expected values match. Most prefer the sure thing: they are **risk-averse**. That preference is why insurance exists (people pay more than the expected loss to avoid the risk) and why risky investments must offer higher average returns to attract money (chapter 15). Chapter 6 examines how well the standard model of risk fits what people actually do.

## Measuring a whole economy

Two numbers recur in every discussion of the macroeconomy, and both are defined here so the later chapters can use them.

**Gross domestic product** (GDP) is the total market value of all final goods and services produced in a country in a year. "Final" means the bread counts but not the flour that went into it, to avoid double counting. GDP per person is the standard rough measure of a country's material living standard; chapter 9 explains how it is built and what it misses.

**Inflation** is the rate at which the general level of prices rises. It is measured by tracking the cost of a fixed basket of goods over time, producing a **price index** such as the consumer price index (CPI); the percentage change in the index is the inflation rate. A 3% inflation rate means the same basket costs 3% more than a year ago, so a dollar buys about 3% less.

## Correlation, causation, and the counterfactual

The hardest problem in economics is telling what causes what. Countries with more doctors are healthier; does that mean doctors cause health, or that rich countries can afford both? People who go to university earn more; is that the education, or were they already the kind of people who earn more?

The standard for a causal claim is the **counterfactual**: what would have happened otherwise. You cannot observe it directly, so economists look for situations that approximate a controlled experiment. Sometimes they run one, randomly assigning a program to some villages and not others (a **randomized controlled trial**). Sometimes nature or policy runs one for them: a minimum wage rises on one side of a state line and not the other, a lottery decides who gets a school place, a birthday cutoff decides who gets drafted. These **natural experiments** have transformed the field since the 1990s, and chapter 16 explains the main designs. For now, carry one rule: a correlation is a question, not an answer.

:::warning
The most common error in economic reasoning is the **fallacy of composition**: assuming what is true for one is true for all. If you save more, you get richer. If everyone saves more at once, spending collapses, incomes fall, and total saving may not rise at all. One farmer with a bumper crop gets rich; all farmers with bumper crops see prices crash. Macroeconomics exists largely because the whole does not behave like the sum of its parts.
:::

## Summary

- Opportunity cost: the cost of anything is the best alternative given up. Always ask "compared to what?"
- Decide at the margin: compare the extra benefit of a little more against the extra cost, and stop where they meet.
- Supply and demand cross at the equilibrium price; changes in price move along curves, everything else shifts them. Elasticity measures responsiveness in unit-free terms.
- Real quantities correct for inflation; nominal ones do not. Growth compounds, and the rule of 70 gives doubling times. Present value discounts the future at an interest rate that carries ethical weight.
- Expected value weighs outcomes by probability; most people are risk-averse.
- GDP measures output; inflation measures price rises. Correlation is a question; a causal answer needs a counterfactual.

[^1]: Marshall, A. (1890). *Principles of Economics*. London: Macmillan. Book V, Chapter III introduces the supply-and-demand diagram in its modern form. [econlib.org](https://www.econlib.org/library/Marshall/marP.html)
[^2]: Havranek, T., Irsova, Z., Janda, K. (2012). "Demand for gasoline is more price-inelastic than commonly thought." *Energy Economics*, 34(1), 201–207. [doi:10.1016/j.eneco.2011.09.003](https://doi.org/10.1016/j.eneco.2011.09.003)
[^3]: U.S. Bureau of Labor Statistics. Average hourly earnings of production and nonsupervisory employees (series CES0500000008) and Consumer Price Index for All Urban Consumers (CPI-U). [bls.gov](https://www.bls.gov/data/)
[^4]: World Bank, World Development Indicators: GDP growth (annual %), China and United States, 1980–2010. [data.worldbank.org](https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG)
[^6]: Andreyeva, T., Long, M. W., Brownell, K. D. (2010). "The Impact of Food Prices on Consumption: A Systematic Review of Research on the Price Elasticity of Demand for Food." *American Journal of Public Health*, 100(2), 216–222. [doi:10.2105/AJPH.2008.151415](https://doi.org/10.2105/AJPH.2008.151415). Food away from home is among the most elastic categories, around $-0.8$ in this review; single-restaurant demand, with close substitutes next door, is far more elastic still.
