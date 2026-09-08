---
title: Voting Rules and Representation
subtitle: The same preferences can produce different winners because a rule decides how preferences are combined.
part: II · Organizing Collective Choice
---

## One electorate, several answers

Suppose 100 voters rank three proposals:

| Voters | First | Second | Third |
|---|---|---|---|
| 45 | A | B | C |
| 35 | B | C | A |
| 20 | C | A | B |

Under **plurality**, A wins with 45 first choices. Under an instant-runoff rule, C is eliminated and its 20 votes transfer to A, giving A 65. But pairwise comparisons reveal something interesting: A beats B by 65–35, B beats C by 80–20, and C beats A by 55–45.

This is a **Condorcet cycle**. Every voter's ranking is internally consistent, yet the group's majority comparisons cycle. There is no proposal here that defeats every other proposal head-to-head.

## What is the rule optimizing?

A Borda count awarding 2 points for first, 1 for second, and 0 for third gives A 110, B 115, and C 75. B wins. That is not an arithmetic contradiction. Different rules aggregate different aspects of the same preferences.

**Proportional representation** seeks some relationship between vote shares and seats, while single-member districts select separate winners. District boundaries, electoral thresholds, ballot design, turnout, and seat-allocation formulas influence the result. Even a proportional system needs a rule for allocating indivisible seats and deciding which votes enter the calculation.

## No magic rule

Social-choice results identify tensions among desirable properties under stated assumptions. Arrow's theorem concerns aggregating individual rankings into a social ranking with particular conditions. It does not say that all systems are equally good or that fair elections are impossible.[^1]

Evaluate a rule against explicit goals: majority responsiveness, proportionality, local accountability, simplicity, inclusion, resistance to manipulation, or ease of forming a government. A change may improve one while weakening another.

**Strategic voting** occurs when a person votes differently from a straightforward expression of preference to influence the outcome. Its incentives depend on the rule and information. The presence of strategy does not itself imply fraud; authorized strategic choices and violations of election procedures are different things.

:::try A majority winner?
Using the table, calculate the head-to-head result for C versus A. Why can A's plurality victory coexist with losing that comparison?

:::answer Show the reasoning
The 35 B-first voters prefer C to A, as do the 20 C-first voters, so C wins 55–45. Plurality counts only first choices; it does not require its winner to win every pairwise contest.
:::
:::

[^1]: Arrow (1951; second edition 1963). *Social Choice and Individual Values*. [Publisher edition](https://yalebooks.yale.edu/book/9780300179316/social-choice-and-individual-values/).
