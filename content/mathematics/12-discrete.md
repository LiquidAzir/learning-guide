---
title: Logic, Proof, and Discrete Mathematics
subtitle: How to count arrangements, how a proof actually works, what a graph is and why it routes your packages, and the 1931 theorem that showed mathematics can never be finished.
part: IV · Structure
---

## Recap

Calculus is about the continuous: quantities that vary smoothly. **Discrete mathematics** is about things that come in whole units: people, arrangements, network connections, steps in a program, statements that are true or false. It is the mathematics that computers are made of, and it includes the study of proof itself, which is what makes mathematics different from every other subject.

## Sets

A **set** is a collection of things: the set of even numbers, the set of customers who bought both bread and milk. Sets **union** ($A \cup B$, everything in either), **intersect** ($A \cap B$, everything in both), and **complement** (everything not in $A$). These are the AND, OR, and NOT of every database query and search engine: "shoes AND NOT sandals" is a set operation. The **inclusion-exclusion** rule counts a union without double counting: $|A \cup B| = |A| + |B| - |A \cap B|$, the same formula as the probability "or" rule of chapter 9, because probability is measuring sets. Venn drew the diagrams in 1880; Cantor built the theory in the 1870s and discovered, to general disbelief, that infinite sets come in different sizes: there are more real numbers than whole numbers, though there are exactly as many even numbers as whole numbers.[^1]

## Logic

A **proposition** is a statement that is either true or false. Logic combines them with **and**, **or**, **not**, and **if-then**, and the rules are mechanical. The one that trips people is **if-then**: "if it rains, the ground is wet" is true whenever it is *not* the case that it rained and the ground stayed dry. It says nothing about what happens when it does not rain. Its **converse**, "if the ground is wet, it rained," is a different statement and may be false (sprinklers). Its **contrapositive**, "if the ground is not wet, it did not rain," is logically identical to the original and is often the easier thing to prove.

:::warning
Confusing a statement with its converse is the commonest logical error in everyday argument. "All the successful people I know work hard" does not give "if you work hard you will be successful." "Every terrorist attack was preceded by a warning sign" does not give "every warning sign precedes an attack," which is why screening for rare events produces so many false alarms (chapter 9). Ask, every time: is this the statement or its converse?
:::

George Boole showed in 1854 that logic could be done as algebra, with true as 1, false as 0, AND as multiplication, and OR as a kind of addition.[^2] Eighty years later Claude Shannon noticed in his master's thesis that switching circuits obey Boole's algebra, and that any logical function could be built from switches.[^3] Every computer is Boolean algebra made physical: billions of transistors computing AND, OR, and NOT.

## Proof

A **proof** is an argument that establishes a statement beyond any possible doubt, by a chain of steps each of which follows from accepted axioms or previously proved results. It is what distinguishes mathematics from science: a physical law is confirmed by experiment and can be overturned by the next one; a theorem, once proved, stays proved. Four methods cover nearly everything.

:::howto The four ways to prove something
1. **Direct proof.** Start from what is given, apply definitions and known results, arrive at the conclusion. *The sum of two even numbers is even*: if $a = 2m$ and $b = 2n$, then $a + b = 2(m + n)$, which is even.
2. **Proof by contrapositive.** To prove "if P then Q," prove "if not Q then not P" instead. *If $n^2$ is even, $n$ is even*: suppose $n$ is odd, $n = 2k + 1$; then $n^2 = 4k^2 + 4k + 1$, which is odd. Done.
3. **Proof by contradiction.** Assume the statement is false and derive an impossibility. *There are infinitely many primes* (Euclid): suppose there are finitely many, $p_1, \ldots, p_n$. Multiply them all and add 1. The result is not divisible by any $p_i$ (it leaves remainder 1), so either it is a new prime or it has a prime factor not on the list. Either way the list was incomplete. This was Hardy's example of a proof "as fresh and significant as when it was discovered."[^4]
4. **Proof by induction.** To prove a statement for every whole number $n$: show it for $n = 1$ (the **base case**), then show that *if* it holds for some $n$ it holds for $n + 1$ (the **inductive step**). Like dominoes: knock over the first, and each knocks over the next. *$1 + 2 + \cdots + n = n(n+1)/2$*: true for $n = 1$ (both sides are 1). If true for $n$, then adding $n + 1$ to both sides gives $n(n+1)/2 + (n+1) = (n+1)(n+2)/2$, which is the formula for $n + 1$. Done, for all $n$.
:::

A **counterexample** disproves a general claim with a single case. "All primes are odd" is refuted by 2. One counterexample is enough to kill a conjecture; a million confirming examples are not enough to prove it, which is a discipline the rest of life would benefit from. The conjecture that $n^2 + n + 41$ is always prime holds for $n = 0$ through 39 and fails at 40.

## Counting

**Combinatorics** is the art of counting without listing, and it rests on a single principle: if one choice can be made in $m$ ways and a second in $n$ ways, the pair can be made in $m \times n$ ways. A menu with 4 starters, 6 mains, and 3 desserts offers $4 \times 6 \times 3 = 72$ meals.

:::howto Counting arrangements and selections
Ask two questions: *does order matter?* and *can items repeat?*

1. **Order matters, repetition allowed**: $n^k$. A 4-digit PIN: $10^4 = 10{,}000$. An 8-character password from 62 characters: $62^8 \approx 2 \times 10^{14}$, which a modern cracking rig can exhaust in hours; 12 characters gives $3 \times 10^{21}$, which it cannot.[^5]
2. **Order matters, no repetition** (permutations): $\dfrac{n!}{(n-k)!}$. Gold, silver, bronze among 8 runners: $8 \times 7 \times 6 = 336$.
3. **Order does not matter, no repetition** (combinations): $\dbinom{n}{k} = \dfrac{n!}{k!(n-k)!}$. A committee of 3 from 8: $\binom{8}{3} = 56$. The division by $k!$ removes the orderings that permutations counted separately.
4. **Order does not matter, repetition allowed** (the rare case, "stars and bars"): $\dbinom{n + k - 1}{k}$. Ways to buy 6 donuts from 4 kinds: $\binom{9}{6} = 84$.

*Example.* A team of 11 from a squad of 16, with a captain chosen from the 11: $\binom{16}{11} \times 11 = 4368 \times 11 = 48{,}048$. Or: choose the captain first (16 ways), then 10 more from the remaining 15: $16 \times \binom{15}{10} = 16 \times 3003 = 48{,}048$. Getting the same answer two ways is the standard check in combinatorics.
:::

The **pigeonhole principle** is counting's simplest weapon: if more than $n$ items go into $n$ boxes, some box has at least two. Among any 13 people, two share a birth month. In any group of 6 people, either 3 are mutual acquaintances or 3 are mutual strangers, a fact that starts **Ramsey theory**, the study of the order that must appear in any sufficiently large structure; the analogous number for groups of 5 is unknown and lies between 43 and 46, and the Latest Research section records the first exponential improvement in 90 years on the general bound.[^6]

## Graphs and networks

A **graph**, in this sense, is not a plot but a set of points (**vertices**, or nodes) joined by lines (**edges**). Cities and roads, people and friendships, web pages and links, tasks and dependencies: any network is a graph, and graph theory is the mathematics of networks.

It began in 1736 with a puzzle. Königsberg had seven bridges; could one walk a route crossing each exactly once? Euler abstracted the map to four vertices and seven edges and proved it impossible: such a walk exists only if every vertex, or all but two, has an even number of edges.[^7] The argument, which ignored everything about the bridges except their connections, is usually considered the first theorem of topology.

The practical problems are about paths and flows. The **shortest path** between two vertices, when edges have lengths or costs, is what every mapping app computes, by Dijkstra's algorithm of 1956, which spreads out from the start, always extending the cheapest frontier; a 2025 result showed it can be beaten on sparse networks, ending a barrier long assumed fundamental (Latest Research).[^8] The **minimum spanning tree** connects all vertices with the least total edge length, which is how utilities lay cable. **Maximum flow** asks how much can move through a network of pipes with capacities, and its solution also solves matching problems: assigning jobs to applicants, organs to patients, and students to schools in the mechanisms of the economics guide. **Graph coloring**, assigning colors so no adjacent vertices match, schedules exams so no student has two at once; the **four color theorem**, that any map needs at most four colors, was conjectured in 1852 and proved in 1976 only with a computer checking nearly two thousand cases, the first major theorem so proved and a controversy at the time.[^9]

One problem stands apart. The **traveling salesman problem** asks for the shortest route visiting every one of $n$ cities once. Checking all routes takes about $n!$ steps, which for 20 cities is about $2 \times 10^{18}$, some 77 years at a billion routes a second, and for 25 cities exceeds the age of the universe in microseconds. Nobody knows an efficient method, and whether one exists is the P versus NP question of chapter 16, the most important open problem in computer science. In practice, methods that find routes within a percent or two of optimal handle millions of cities, and every delivery fleet uses them.[^10]

## Recursion and algorithms

An **algorithm** is a precise procedure for solving a problem: long division, Gaussian elimination, the rules for a card game. The word is al-Khwarizmi's name (chapter 3). **Recursion** is an algorithm that calls itself on a smaller version of the problem: to sort a list, split it in half, sort each half (by the same method), and merge; the halves get smaller until they are single items, which are already sorted. **Merge sort**, invented by von Neumann in 1945, sorts a million items in about 20 million steps, where the obvious method takes a trillion.[^11]

That gap is what **computational complexity** measures. An algorithm's cost is described by how it grows with the input size $n$: $n$ steps is **linear**, $n^2$ **quadratic**, $2^n$ **exponential**, $\log n$ **logarithmic**. Looking up a word in a sorted dictionary by repeatedly halving is logarithmic: 20 steps for a million words, 30 for a billion. The difference between a polynomial algorithm and an exponential one is the difference between feasible and forever, and it does not go away with faster hardware: doubling computer speed adds one to the size of exponential problem you can handle.

## The limits of proof

Finally, the result that changed what mathematics knows about itself. In the 1920s David Hilbert, building on the problems he had posed in 1900, set out a program to put all of mathematics on a secure footing: find a complete set of axioms and prove them consistent, so that every true statement would be provable and no contradiction could arise. In 1931 Kurt Gödel, aged 24, proved this impossible. His **incompleteness theorems** show that any consistent system of axioms rich enough to include arithmetic contains true statements it cannot prove, and cannot prove its own consistency.[^12] The proof works by building a statement that says, in effect, "this statement is unprovable," encoded in arithmetic; if it were provable it would be false, so it is unprovable, and therefore true. Mathematics can never be finished by any fixed set of rules.

Five years later Alan Turing, attacking a related question of Hilbert's, defined precisely what a "mechanical procedure" is, the **Turing machine**, and proved that no algorithm can decide, for every program, whether it will eventually halt.[^13] The **halting problem** is undecidable; some questions have no algorithmic answer. In defining the machine, Turing had described the modern computer a decade before one was built. The Busy Beaver function of the Latest Research section, which asks how long a small program can run before halting, sits exactly at this boundary, and its fifth value was established only in 2024 after a two-year online collaboration.

:::key
Gödel and Turing set limits on formal reasoning, but the limits are the reason the subject is alive. If a fixed set of axioms could settle everything, mathematics would be a lookup table. Instead it is open-ended by proof, and every open problem in chapter 16 is a question about which the axioms may or may not have anything to say. The Continuum Hypothesis, about the sizes of infinity Cantor discovered, was proved in 1963 to be undecidable from the standard axioms: neither it nor its negation can be derived. Some questions in mathematics have answers that depend on what you choose to assume.[^14]
:::

:::formulas
| Rule | Formula |
|---|---|
| Inclusion–exclusion | $\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$ |
| Sequences with repetition | $n^k$ |
| Permutations | $P(n,k) = \dfrac{n!}{(n-k)!}$ |
| Combinations | $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$ |
| Sum of first $n$ integers | $1 + 2 + \cdots + n = \dfrac{n(n+1)}{2}$ |
| Contrapositive | $P \Rightarrow Q$ is equivalent to $\lnot Q \Rightarrow \lnot P$ |
| Euler paths | in a connected graph, exist iff 0 or 2 vertices have odd degree |
| Growth classes | $\log n \ll n \ll n\log n \ll n^2 \ll 2^n \ll n!$ |
:::

:::know
- Sets and Boolean logic are the same algebra, and every database query and circuit runs on it.
- A statement and its converse are different claims; the contrapositive is the same claim.
- Direct, contrapositive, contradiction, induction: four methods cover nearly every proof. One counterexample refutes; a million examples do not prove.
- Counting: ask whether order matters and whether repetition is allowed, then pick the formula. Check by counting a second way.
- A network is a graph; shortest paths, spanning trees, flows, and colorings solve routing, wiring, matching, and scheduling.
- Exponential algorithms are infeasible regardless of hardware; whether hard problems have fast algorithms is the P vs NP question.
- Gödel: any consistent system containing arithmetic has true statements it cannot prove. Turing: some questions have no algorithm.
:::

## Summary

- Sets and logic provide the algebra of AND, OR, NOT that runs databases and computers; Boole formalized it and Shannon built it into circuits.
- Proof is what makes mathematics permanent; the four standard methods are direct, contrapositive, contradiction, and induction.
- Combinatorics counts arrangements by asking about order and repetition; the pigeonhole principle and Ramsey theory find forced structure.
- Graph theory, begun by Euler's bridges, models every network; shortest paths, flows, and colorings are the practical algorithms, and the traveling salesman problem marks the boundary of the feasible.
- Algorithms are judged by how their cost grows; Gödel and Turing proved that mathematics is incomplete and some problems undecidable, and in doing so described the computer.

[^1]: Cantor, G. (1874). "Ueber eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen." *Journal für die reine und angewandte Mathematik*, 77, 258–262. [doi:10.1515/crll.1874.77.258](https://doi.org/10.1515/crll.1874.77.258). Dauben, J. W. (1979). *Georg Cantor: His Mathematics and Philosophy of the Infinite*. Harvard University Press.
[^2]: Boole, G. (1854). *An Investigation of the Laws of Thought*. London: Walton and Maberly. [gutenberg.org](https://www.gutenberg.org/ebooks/15114)
[^3]: Shannon, C. E. (1938). "A Symbolic Analysis of Relay and Switching Circuits." *Transactions of the American Institute of Electrical Engineers*, 57(12), 713–723. [doi:10.1109/T-AIEE.1938.5057767](https://doi.org/10.1109/T-AIEE.1938.5057767)
[^4]: Hardy, G. H. (1940). *A Mathematician's Apology*. Cambridge University Press. §12. Euclid, *Elements*, Book IX, Proposition 20. [mathcs.clarku.edu](https://mathcs.clarku.edu/~djoyce/elements/bookIX/propIX20.html)
[^5]: National Institute of Standards and Technology (2025). *Digital Identity Guidelines: Authentication and Authenticator Management*, SP 800-63B-4, §3.1.1.2 on password length. [pages.nist.gov/800-63-4](https://pages.nist.gov/800-63-4/sp800-63b.html)
[^6]: Radziszowski, S. (2024). "Small Ramsey Numbers." *Electronic Journal of Combinatorics*, Dynamic Survey DS1, revision 17. [doi:10.37236/21](https://doi.org/10.37236/21). The upper bound of 46: Angeltveit, V., McKay, B. D. (2024). "$R(5,5) \le 46$." [arxiv.org/abs/2409.15709](https://arxiv.org/abs/2409.15709). Campos, M., Griffiths, S., Morris, R., Sahasrabudhe, J. (2023). "An exponential improvement for diagonal Ramsey." [arxiv.org/abs/2303.09521](https://arxiv.org/abs/2303.09521)
[^7]: Euler, L. (1741). "Solutio problematis ad geometriam situs pertinentis." *Commentarii Academiae Scientiarum Petropolitanae*, 8, 128–140 (E53). English translation in Biggs, N. L., Lloyd, E. K., Wilson, R. J. (1976). *Graph Theory 1736–1936*. Oxford University Press. [scholarlycommons.pacific.edu](https://scholarlycommons.pacific.edu/euler-works/53/)
[^8]: Dijkstra, E. W. (1959). "A note on two problems in connexion with graphs." *Numerische Mathematik*, 1, 269–271. [doi:10.1007/BF01386390](https://doi.org/10.1007/BF01386390). Duan, R., Mao, J., Mao, X., Shu, X., Yin, L. (2025). "Breaking the Sorting Barrier for Directed Single-Source Shortest Paths." *STOC 2025*. [arxiv.org/abs/2504.17033](https://arxiv.org/abs/2504.17033)
[^9]: Appel, K., Haken, W. (1977). "Every planar map is four colorable. Part I: Discharging." *Illinois Journal of Mathematics*, 21(3), 429–490. [doi:10.1215/ijm/1256049011](https://doi.org/10.1215/ijm/1256049011). Wilson, R. (2002). *Four Colors Suffice: How the Map Problem Was Solved*. Princeton University Press.
[^10]: Cook, W. J. (2012). *In Pursuit of the Traveling Salesman: Mathematics at the Limits of Computation*. Princeton University Press. Applegate, D. L., Bixby, R. E., Chvátal, V., Cook, W. J. (2006). *The Traveling Salesman Problem: A Computational Study*. Princeton University Press.
[^11]: Knuth, D. E. (1998). *The Art of Computer Programming, Volume 3: Sorting and Searching*, 2nd ed. Reading, MA: Addison-Wesley. §5.2.4 on merge sort and its history.
[^12]: Gödel, K. (1931). "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I." *Monatshefte für Mathematik und Physik*, 38, 173–198. [doi:10.1007/BF01700692](https://doi.org/10.1007/BF01700692). Accessible account: Nagel, E., Newman, J. R. (1958). *Gödel's Proof*. New York University Press; revised edition edited by D. R. Hofstadter, 2001.
[^13]: Turing, A. M. (1937). "On Computable Numbers, with an Application to the Entscheidungsproblem." *Proceedings of the London Mathematical Society*, s2-42(1), 230–265. [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230)
[^14]: Cohen, P. J. (1963). "The Independence of the Continuum Hypothesis." *Proceedings of the National Academy of Sciences*, 50(6), 1143–1148. [doi:10.1073/pnas.50.6.1143](https://doi.org/10.1073/pnas.50.6.1143). Gödel had proved the other half, that the hypothesis cannot be refuted, in 1940.
