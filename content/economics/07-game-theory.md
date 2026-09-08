---
title: Game Theory
subtitle: What happens when my best choice depends on yours. From the prisoner's dilemma to the auctions that sell radio spectrum and the algorithms that match kidneys.
part: III · People and Strategy
---

## How does your best choice depend on someone else's?

Supply and demand assumes each buyer and seller is too small to matter, so nobody thinks about anyone else's reaction. Most interesting situations are not like that. When two airlines set fares, when nations set tariffs, when a firm decides whether to enter a market, each side's best move depends on what the other will do. **Game theory** is the mathematics of that interdependence, and since 1950 it has rebuilt large parts of economics around itself.

## The prisoner's dilemma

Two suspects are held separately. Each can stay silent or confess. If both stay silent, each gets one year on a minor charge. If one confesses and the other stays silent, the confessor walks free and the silent one gets ten years. If both confess, each gets five.

|  | B stays silent | B confesses |
|---|---|---|
| **A stays silent** | A: 1 year, B: 1 year | A: 10 years, B: free |
| **A confesses** | A: free, B: 10 years | A: 5 years, B: 5 years |

Look at it from A's side. If B stays silent, A does better by confessing (free versus one year). If B confesses, A also does better by confessing (five versus ten). Confessing is better *whatever B does*: it is a **dominant strategy**. The same is true for B. So both confess and both get five years, when both staying silent would have given each one year. Individual rationality produces a collectively terrible result, and neither can fix it alone, because whoever stays silent while the other confesses is destroyed.

The **prisoner's dilemma** is the most important two-by-two table in social science because so many situations have its shape. Two firms would both profit from high prices, but each is tempted to undercut. Two countries would both gain from low tariffs, but each is tempted to protect. Every fisherman would benefit from restraint, but each does better by catching more. Chapter 5's tragedy of the commons is a prisoner's dilemma with many players. So is an arms race. So is doping in sport.

## Nash equilibrium

John Nash, in a 1950 doctoral thesis of under thirty pages, defined the concept that made the field general.[^1] A **Nash equilibrium** is a set of choices, one per player, such that no player can do better by changing their own choice alone, given what the others are doing. It is a resting point: nobody has a reason to move.

Both confessing is the Nash equilibrium of the prisoner's dilemma. It is stable and it is bad. Nash's insight was that such an equilibrium exists for every game with finitely many players and moves, provided players are allowed to randomize. That meant any strategic situation could, in principle, be analyzed the same way, and economists spent the next forty years doing so. Nash shared the 1994 Nobel Prize; his life was the subject of a film.

:::warning
A Nash equilibrium is not a prediction that people will reach it, nor a claim that it is good. It says only that once there, nobody wants to leave. Many games have several equilibria, and which one is reached depends on history, expectations, and coordination. Driving on the right and driving on the left are both equilibria; the theory does not say which a country ends up with, only that once it has one, nobody switches alone.
:::

## Cooperation and repetition

The prisoner's dilemma looks hopeless, and in a single encounter between strangers it mostly is. But most interactions repeat. If two firms will compete every quarter for years, undercutting today invites retaliation tomorrow, and the threat of retaliation can sustain cooperation that would collapse in a single play.

Robert Axelrod ran the test in 1980 by inviting game theorists to submit computer strategies for a repeated prisoner's dilemma tournament.[^2] The winner was the simplest entry: **tit-for-tat**, which cooperates on the first move and thereafter copies whatever the opponent did last. It never wins against any individual opponent, but it does well against everyone, because it is nice (never defects first), retaliatory (punishes defection immediately), forgiving (returns to cooperation as soon as the other does), and clear (opponents learn quickly what it will do). The result, formalized as the **folk theorem** of repeated games, is that cooperation is sustainable when players are patient and the future matters enough. It explains why cartels hold together for a while, why reputation matters in business, and why cooperation breaks down at the end: the last round of a finite game is a one-shot dilemma, and knowing that, players unravel it backward.

## Commitment and credibility

Thomas Schelling added the strategy of *limiting your own options*.[^3] A general who burns the bridges behind his army cannot retreat, so the enemy knows he will fight, and may not attack. A firm that builds a huge factory before a rival enters has committed to producing a lot, making entry unprofitable. A threat only works if it is **credible**, and credibility sometimes requires making yourself unable to back down. Schelling's ideas shaped nuclear deterrence, labor negotiation, and the design of central banks, whose independence exists so that a promise to fight inflation cannot be revoked when fighting it becomes painful (chapter 11). He shared the 2005 Nobel Prize.

## Auctions

An auction is a game with rules you get to design, and getting the rules right has been worth hundreds of billions of dollars.

William Vickrey showed in 1961 that a sealed-bid auction in which the winner pays the *second-highest* bid, not their own, has a remarkable property: every bidder's best strategy is to bid exactly what the item is worth to them.[^4] Bidding higher risks paying more than it is worth; bidding lower risks losing to someone who values it less; neither helps. The **Vickrey auction** extracts honest valuations, and its logic underlies the advertising auctions that fund the internet, which run billions of times a day. Facebook's ad auction uses a direct generalization of Vickrey's rule; Google's uses a close relative, the **generalized second-price auction**, in which each winner pays the bid of the advertiser ranked just below it, and which, unlike Vickrey's, does not quite induce honest bidding but works well in practice.[^11]

The test case came in 1994, when the US government decided to sell radio spectrum licenses instead of giving them away by lottery. The licenses were worth more in combinations, so a simple auction would fail: a bidder wanting Los Angeles and San Diego together might win one and be stuck. Paul Milgrom and Robert Wilson, with Preston McAfee, designed a **simultaneous ascending auction** in which all licenses were bid on at once over many rounds, so bidders could assemble packages as prices revealed themselves.[^5] The first major auction, for mobile-phone spectrum in 1994 and 1995, raised \$7.7 billion, far more than most forecasts, and the format has since been used worldwide, raising more than \$200 billion. Milgrom and Wilson received the 2020 Nobel Prize.

## Matching without prices

Some things society refuses to allocate by price: school places, medical residencies, kidneys. Game theory has designed the alternatives.

In 1962 David Gale and Lloyd Shapley asked how to pair, say, students with schools when each side has preferences, so that no student and school would both prefer each other to their assigned match.[^6] Their **deferred acceptance algorithm** does it: each student applies to their top choice, each school tentatively holds its best applicants and rejects the rest, rejected students apply to their next choice, and so on until nobody is rejected. The result is **stable**: no pair would jointly defect. The same algorithm, it turned out, had been independently invented in 1952 by the doctors' match that assigns medical graduates to hospitals, and it is now used by New York and Boston to assign students to public schools.

Alvin Roth extended the idea to kidneys.[^7] Many patients have a willing donor who is incompatible with them. Roth's exchange finds swaps between pairs and, since 2007, longer chains started by a donor with no particular recipient: that donor gives to A, A's donor gives to B, B's donor to C, and so on, so that every patient in the chain receives a compatible kidney. In the United States alone these exchanges now produce over a thousand transplants a year that would not otherwise have happened.[^12] Roth and Shapley shared the 2012 Nobel Prize for a branch of economics that uses no money at all.

## Mechanism design

Auctions and matching are examples of **mechanism design**: given people with private information and their own interests, construct rules that lead them to reveal the information and produce the outcome you want. It is game theory run backward, starting from the desired result and working out the game that yields it. Leonid Hurwicz, Eric Maskin, and Roger Myerson received the 2007 Nobel Prize for the general theory.[^8] Its results are often about impossibility: Myerson and Satterthwaite proved that no mechanism can guarantee an efficient trade between a buyer and seller who each know only their own valuation, which is why haggling wastes so much and why some good deals never happen.[^9] Knowing what cannot be done is part of the toolkit.

## Where the theory meets the evidence

Game theory's predictions have been tested in laboratories and in the field, with mixed results that map onto chapter 6's lesson. Experienced players in high-stakes repeated settings, such as firms bidding in spectrum auctions or professionals playing poker, behave close to theory. Untrained subjects in one-shot laboratory games cooperate more than theory predicts in prisoner's dilemmas, reject unfair offers in ultimatum games, and fail to reason more than a step or two ahead.[^10] The **level-k** and **quantal response** models, which assume players reason a limited number of steps and make occasional mistakes, fit the laboratory data better than Nash equilibrium does.

That does not make the theory useless. Where the rules are designed by game theorists, as in auctions and matching markets, the theory has been spectacularly practical, because the designers can build in robustness to mistakes. And where the players are institutions with time to learn, the equilibria the theory identifies are usually where they end up. OPEC's periodic collapses into overproduction, the price wars that follow a new entrant, the tacit coordination among a few large firms, are all prisoner's dilemmas and repeated games playing out as predicted.

:::frontier
Game theory's newest players are algorithms. Pricing software used by competing landlords, airlines, and online sellers can learn to coordinate on high prices without any explicit agreement, which is collusion in effect but not in law; regulators in several countries are working out what to do about it. Large language models are being studied as strategic agents, and early results show them behaving more cooperatively than Nash equilibrium predicts, much as humans do. And the design of mechanisms for allocating vaccines, refugee placements, and carbon permits continues to draw directly on the tools in this chapter.
:::

:::try Put the idea to work
Two competing firms would both profit from charging more, but each can gain by cutting its own price while the other keeps prices high. Why might the jointly preferred outcome fail to persist?

:::answer Show the reasoning
Each has an incentive to deviate from the high-price arrangement. A Nash equilibrium requires each choice to be a best response to the other, not merely a good outcome for the pair. Repeated interaction can change incentives, but the one-shot situation does not enforce cooperation.
:::
:::

## Summary

- When choices depend on others' choices, the supply-and-demand picture breaks down and game theory takes over.
- The prisoner's dilemma shows individually rational choices producing collectively bad outcomes; it is the shape of cartels, arms races, tariffs, and the commons.
- Nash equilibrium: a set of choices from which nobody wants to deviate alone. Every finite game has one; it is neither a prediction nor an endorsement.
- Repetition can sustain cooperation through reciprocity (tit-for-tat); commitment can make threats credible.
- Auction design (Vickrey, Milgrom, Wilson) and matching algorithms (Gale, Shapley, Roth) have raised hundreds of billions and saved thousands of lives. Mechanism design builds the game to get the result.
- Real people reason a few steps ahead and value fairness; the theory works best where stakes are high, play repeats, or the rules were designed with human limits in mind.

[^1]: Nash, J. F. (1950). "Equilibrium points in n-person games." *Proceedings of the National Academy of Sciences*, 36(1), 48–49. [doi:10.1073/pnas.36.1.48](https://doi.org/10.1073/pnas.36.1.48). Nash, J. (1951). "Non-Cooperative Games." *Annals of Mathematics*, 54(2), 286–295. [doi:10.2307/1969529](https://doi.org/10.2307/1969529)
[^2]: Axelrod, R. (1984). *The Evolution of Cooperation*. New York: Basic Books. The tournaments were first reported in Axelrod, R. (1980), *Journal of Conflict Resolution*, 24(1), 3–25. [doi:10.1177/002200278002400101](https://doi.org/10.1177/002200278002400101)
[^3]: Schelling, T. C. (1960). *The Strategy of Conflict*. Harvard University Press.
[^4]: Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders." *Journal of Finance*, 16(1), 8–37. [doi:10.1111/j.1540-6261.1961.tb02789.x](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x)
[^5]: Milgrom, P. (2004). *Putting Auction Theory to Work*. Cambridge University Press. [doi:10.1017/CBO9780511813825](https://doi.org/10.1017/CBO9780511813825). The Sveriges Riksbank Prize in Economic Sciences 2020, Scientific Background. [nobelprize.org](https://www.nobelprize.org/prizes/economic-sciences/2020/press-release/)
[^6]: Gale, D., Shapley, L. S. (1962). "College Admissions and the Stability of Marriage." *American Mathematical Monthly*, 69(1), 9–15. [doi:10.2307/2312726](https://doi.org/10.2307/2312726)
[^7]: Roth, A. E., Sönmez, T., Ünver, M. U. (2004). "Kidney Exchange." *Quarterly Journal of Economics*, 119(2), 457–488. [doi:10.1162/0033553041382157](https://doi.org/10.1162/0033553041382157)
[^8]: The Sveriges Riksbank Prize in Economic Sciences 2007 (Hurwicz, Maskin, Myerson). [nobelprize.org](https://www.nobelprize.org/prizes/economic-sciences/2007/press-release/)
[^9]: Myerson, R. B., Satterthwaite, M. A. (1983). "Efficient mechanisms for bilateral trading." *Journal of Economic Theory*, 29(2), 265–281. [doi:10.1016/0022-0531(83)90048-0](https://doi.org/10.1016/0022-0531(83)90048-0)
[^10]: Camerer, C. F. (2003). *Behavioral Game Theory: Experiments in Strategic Interaction*. Princeton University Press. Chapters 2 and 5 survey the ultimatum and beauty-contest evidence.
[^11]: Edelman, B., Ostrovsky, M., Schwarz, M. (2007). "Internet Advertising and the Generalized Second-Price Auction: Selling Billions of Dollars Worth of Keywords." *American Economic Review*, 97(1), 242–259. [doi:10.1257/aer.97.1.242](https://doi.org/10.1257/aer.97.1.242). Varian, H. R., Harris, C. (2014). "The VCG Auction in Theory and Practice." *American Economic Review*, 104(5), 442–445. [doi:10.1257/aer.104.5.442](https://doi.org/10.1257/aer.104.5.442)
[^12]: Rees, M. A. et al. (2009). "A Nonsimultaneous, Extended, Altruistic-Donor Chain." *New England Journal of Medicine*, 360, 1096–1101. [doi:10.1056/NEJMoa0803645](https://doi.org/10.1056/NEJMoa0803645). Organ Procurement and Transplantation Network, national data: kidney paired donation transplants by year. [optn.transplant.hrsa.gov](https://optn.transplant.hrsa.gov/data/view-data-reports/national-data/)
