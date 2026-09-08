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

:::deeper Work the same election through three rules

### Check the ranked-ballot arithmetic

Return to the 100 voters in the chapter's table. The 45 voters ranking A first contribute 90 Borda points to A and 45 to B. The 35 B-first voters contribute 70 to B and 35 to C. The 20 C-first voters contribute 40 to C and 20 to A. Adding by proposal gives A = 110, B = 115, and C = 75.

Plurality ignores the lower rankings and selects A. Borda uses information from all ranking positions and selects B. Instant runoff first removes C, whose 20 ballots next prefer A, producing A's 65–35 final-round win over B. Each calculation follows its rule correctly.

The cycle reveals another issue: an agenda can matter. If a process first compares A with B, A wins; comparing that winner with C gives C the final victory. If it first compares B with C, B wins; comparing B with A gives A the final victory. The same preferences can produce different final choices depending on the sequence of pairwise decisions.

That does not show every real committee has a cycle. It shows why the person controlling which motions are compared, and in what order, can possess consequential institutional power.

### Allocating seats introduces another kind of rounding

Suppose three parties receive 50%, 30%, and 20% of votes for seven seats. Exact proportional shares would be 3.5, 2.1, and 1.4 seats. Seats cannot ordinarily be divided into tenths, so a rule must resolve the rounding.

Under a simple largest-remainder example, first assign the integer parts: three seats, two seats, and one seat. One remains. The fractional remainders are 0.5, 0.1, and 0.4, so the remaining seat goes to the first party. The result is four, two, and one.

This is an illustration of one allocation rule without thresholds or districts. Other methods can produce different allocations, especially when the seat count is small. Before comparing outcomes, identify which votes qualify, the number of seats, district structure, and the actual allocation formula.

### Representation has more than one meaning

A system can represent party vote shares proportionally while providing a different relationship between individual representatives and local constituencies. A single-member district can create an identifiable local representative while producing a national seat distribution that differs considerably from national vote shares.

District boundaries also change which votes are aggregated together. Two maps can produce different outcomes with the same individual preferences. Evaluating that difference requires explicit criteria, such as population equality, community representation, competitiveness, or proportionality. Those criteria can conflict; stating them is more useful than hiding the judgment inside the word “fair.”

### Ask about behavior after the rule changes

The worked examples hold preferences and ballots fixed to isolate the aggregation mechanism. Real voters and parties may change their behavior under a different system. A party may enter a coalition, withdraw a candidate, or encourage voters to rank strategically. Turnout may also change.

The arithmetic therefore answers “What does this rule do with these ballots?” It does not, alone, predict the ballots that would be cast under that rule. Institutional analysis needs both the formal mechanism and evidence about how people respond to it.
:::

:::try A majority winner?
Using the table, calculate the head-to-head result for C versus A. Why can A's plurality victory coexist with losing that comparison?

:::answer Show the reasoning
The 35 B-first voters prefer C to A, as do the 20 C-first voters, so C wins 55–45. Plurality counts only first choices; it does not require its winner to win every pairwise contest.
:::
:::

[^1]: Arrow (1951; second edition 1963). *Social Choice and Individual Values*. [Publisher edition](https://yalebooks.yale.edu/book/9780300179316/social-choice-and-individual-values/).
