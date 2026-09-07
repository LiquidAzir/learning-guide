---
title: What Is Hard, and P versus NP
subtitle: The difference between a problem nobody has solved and a problem nobody can solve. The most famous open question in the field, why three proof strategies have themselves been proved useless, and what practitioners do anyway.
part: III · Methods
---

## Recap

Chapter 6 drew a line between the computable and the uncomputable. This chapter draws a second line inside the computable, between what can be solved in a reasonable amount of time and what cannot, and it is a much harder line to place: the central question about it has been open since 1971 and carries a million-dollar prize.

## Measuring cost properly

:::math Big-O, stated exactly
$f(n) = O(g(n))$ means: there exist constants $c > 0$ and $n_0$ such that for every $n \ge n_0$,

$$f(n) \le c \cdot g(n)$$

In words: beyond some input size, $f$ is at most a constant multiple of $g$. It is an *upper bound*, it ignores constant factors, and it says nothing about small inputs.

Two companions: $\Omega(g(n))$ is the matching lower bound, $f(n) \ge c \cdot g(n)$ beyond some point, and $\Theta(g(n))$ means both at once, so the growth rate is pinned exactly.

Why ignore constants? Because they depend on the machine, the language, and the compiler, while the growth rate does not. An algorithm that is $100n$ beats one that is $n^2$ for every $n$ above 100, whatever hardware you run them on, and hardware improvements never fix a bad exponent: a machine a thousand times faster lets an $O(2^n)$ algorithm handle inputs about ten larger.
:::

| Growth | $n = 10$ | $n = 100$ | $n = 1{,}000$ | Typical example |
|---|---|---|---|---|
| $O(\log n)$ | 3 | 7 | 10 | binary search |
| $O(n)$ | 10 | 100 | 1,000 | scanning a list |
| $O(n \log n)$ | 33 | 664 | 9,966 | good sorting |
| $O(n^2)$ | 100 | 10,000 | 1,000,000 | comparing all pairs |
| $O(2^n)$ | 1,024 | $1.3 \times 10^{30}$ | beyond astronomical | trying all subsets |
| $O(n!)$ | 3,628,800 | $9.3 \times 10^{157}$ | — | trying all orderings |

The gap between the last two rows and the rest is the subject of this chapter. There are about $10^{80}$ atoms in the observable universe; the $2^{100}$ entry above exceeds the number of nanoseconds since the Big Bang by a wide margin.

## Two classes

**P** is the set of decision problems solvable in **polynomial time**: some algorithm settles them in $O(n^k)$ steps for a fixed $k$. Sorting, shortest paths, matching, linear programming, and primality testing are all in P. Polynomial is the field's working definition of "tractable", which is a deliberate idealization — an $n^{100}$ algorithm is useless — that holds up because natural problems in P almost always turn out to have small exponents.

**NP** is the set of problems whose *solutions can be checked* in polynomial time. Not found: checked. Given a proposed answer, a verifier confirms or rejects it quickly.

The distinction is the whole subject, and an example makes it concrete. A **Sudoku** puzzle of size $n \times n$ may take a long time to solve, but a filled grid can be checked in seconds. Given a set of numbers, finding a subset that sums exactly to zero may require examining exponentially many subsets; given a candidate subset, adding it up is trivial. Finding is hard; checking is easy.

Every problem in P is in NP, since if you can solve it quickly you can check an answer by solving it again. The question is whether the reverse holds.

{{fig:complexity-classes|The landscape as most researchers believe it to be, on the assumption that P ≠ NP. P sits inside NP; the NP-complete problems are the hardest members of NP, and everything in NP reduces to any one of them; NP-hard extends beyond NP to problems at least as hard but not necessarily checkable. If P = NP the whole inner structure collapses into a single circle. Nobody has proved which picture is right.}}

## The hardest problems in NP

In 1971 Stephen Cook proved something unexpected. Take **SAT**, the problem of deciding whether a Boolean formula (chapter 7) can be made true by some assignment of true and false to its variables. Cook showed that *every* problem in NP can be translated into SAT in polynomial time. Leonid Levin proved the same independently in the Soviet Union.[^1]

That translation is a **reduction**, and it is the field's basic tool: if problem A reduces to problem B, then a fast algorithm for B gives a fast algorithm for A, so B is at least as hard as A. A problem is **NP-complete** if it is in NP and everything in NP reduces to it. Solve one NP-complete problem quickly and you have solved them all.

The following year Richard Karp showed that this was not a curiosity about one artificial problem: he gave twenty-one reductions establishing that graph colouring, the travelling salesman problem, subset sum, clique, vertex cover, and knapsack are all NP-complete.[^2] Thousands more have been added since, from timetabling and protein folding to the puzzle in your newspaper. They are all the same problem in different clothes.

## The question

**Does P = NP?** Is every problem whose answers are easy to check also easy to solve?

Almost everyone believes not. In a 2019 poll of 124 theorists, roughly four in five said P ≠ NP, and among those who had worked on it seriously the answer was close to unanimous.[^3] Belief is not proof, and after fifty-five years there is no proof in either direction. It is one of the seven Millennium Prize Problems, carrying a million dollars from the Clay Mathematics Institute.

What would P = NP mean? Not merely faster software. Every problem whose solution can be recognized could be found about as fast, which means: essentially all modern cryptography fails at once (chapter 18), because breaking a cipher is checking a key; mathematics is largely automated, since a proof of bounded length is easy to check and would therefore be easy to find; and optimal scheduling, routing, design, and protein-structure prediction become routine. It would be the largest single change in the practical power of computation ever, and the reason most researchers doubt it is that a world in which finding is as easy as checking looks nothing like the one we are in.

:::frontier Why it is so hard to prove
Three major proof strategies have been ruled out, each by a theorem about proofs rather than about the problem.

**Relativization** (Baker, Gill, and Solovay, 1975). Give both classes access to a magic subroutine, an "oracle," that answers some fixed question in one step. There is an oracle under which P = NP and another under which P ≠ NP. Any proof technique that would work equally well with oracles attached therefore cannot settle the question, and that includes the standard diagonalization of chapter 6.

**Natural proofs** (Razborov and Rudich, 1994). The main technique for proving that circuits must be large has a property they called "natural." They showed that if such a proof existed for the classes in question, it could be turned into an algorithm breaking the cryptographic assumptions the field relies on. So either strong pseudorandom functions do not exist, or this whole family of arguments cannot work.

**Algebrization** (Aaronson and Wigderson, 2008). The clever techniques developed to get around the first barrier were shown to fall to an algebraic generalization of it.

The state of the art is therefore that we know quite precisely which arguments will not work. Any proof must use something genuinely new, and no one knows what.[^4]
:::

## The rest of the map

Complexity theory has hundreds of classes; five are worth carrying.

| Class | What it means | Example |
|---|---|---|
| **P** | solvable in polynomial time | sorting, shortest paths |
| **NP** | answers checkable in polynomial time | SAT, scheduling, TSP |
| **co-NP** | *refutations* checkable in polynomial time | proving a formula is never satisfiable |
| **PSPACE** | solvable in polynomial *memory*, any time | optimal play in many two-player games |
| **EXPTIME** | exponential time; proved strictly larger than P | some game and logic problems |

We know P ⊆ NP ⊆ PSPACE ⊆ EXPTIME and, by a counting argument, that P ≠ EXPTIME. Since the chain has to separate somewhere, at least one of those inclusions is strict, and we cannot say which. This is the field's standing embarrassment: a great deal is known about the structure of what we do not know.

The space side moved recently. In 2025 Ryan Williams proved that any computation taking time $t$ can be simulated using only about $\sqrt{t}$ space, dramatically improving a bound from 1975 that had stood for fifty years. It is the first real progress in decades on separating time from space, and it implies that some problems solvable in linear space genuinely need close to quadratic time.[^5]

## What practitioners actually do

Being told a problem is NP-complete is the beginning of the work, not the end. Real instances are not adversarial, and four responses cover most of practice.

**Solve it anyway with a good solver.** Modern **SAT solvers** routinely handle industrial instances with millions of variables, because real formulas have structure that the search can exploit, and the algorithms learn clauses from each failure. Chip verification, program analysis, and scheduling all run on them daily. NP-completeness is a statement about the worst case, and the worst case may not be your case.

**Approximate.** For many optimization problems there is an algorithm guaranteed to come within a fixed factor of the best answer in polynomial time; some problems admit an approximation as close as you like. But approximation has its own hard limits: the PCP theorem, one of the deepest results in the field, shows that for several problems even approximating well is itself NP-hard, so there is no free lunch in that direction either.[^6]

**Exploit a parameter.** Many instances are hard only in one dimension. Parameterized complexity isolates that dimension and gives algorithms exponential in it but polynomial in the rest, which is why problems that are hopeless in general are easy on graphs that are nearly trees.

**Change the problem.** Very often the requirement is "a good route" rather than "the optimal route," and the difference in cost is enormous.

:::key
The practical lesson is to recognize the shape. If a problem asks for the best arrangement, ordering, subset, or assignment subject to constraints, it is probably NP-hard, and the right response is to stop looking for an exact efficient algorithm and choose one of the four escapes above. Recognizing this early is one of the highest-value things a computer science education gives a working engineer.
:::

## What we still do not know

Whether P = NP, and whether the question is even provable within standard mathematics. Whether NP-complete problems have subexponential algorithms; the "exponential time hypothesis" says no, and much of modern fine-grained complexity is built on it. Whether the polynomial hierarchy above NP collapses. And what quantum computers change, which is less than the headlines suggest: they are not believed to solve NP-complete problems efficiently (chapter 21).

## Summary

- Big-O gives an upper bound on growth ignoring constants, because growth rate is a property of the algorithm and constants are properties of the machine.
- P is what can be solved in polynomial time; NP is what can be *checked* in polynomial time; every problem in NP reduces to any NP-complete problem, of which SAT was the first.
- P = NP would break cryptography and largely automate mathematics; about four in five theorists believe it is false, and there is no proof either way after fifty-five years.
- Three families of proof technique — relativizing, natural, and algebrizing — have each been proved incapable of settling it.
- A 2025 result showed time $t$ can be simulated in about $\sqrt{t}$ space, the first substantial progress on time versus space since 1975.
- NP-completeness describes the worst case; in practice, SAT solvers, approximation with proved ratios, parameterization, and relaxing the requirement handle most real instances.

[^1]: Cook, S. A. (1971). "The complexity of theorem-proving procedures." *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, 151–158. [doi:10.1145/800157.805047](https://doi.org/10.1145/800157.805047). Levin, L. A. (1973). "Universal sequential search problems." *Problems of Information Transmission*, 9(3), 265–266.
[^2]: Karp, R. M. (1972). "Reducibility Among Combinatorial Problems." In *Complexity of Computer Computations*, 85–103. New York: Plenum. [doi:10.1007/978-1-4684-2001-2_9](https://doi.org/10.1007/978-1-4684-2001-2_9). Garey, M. R., Johnson, D. S. (1979). *Computers and Intractability: A Guide to the Theory of NP-Completeness*. San Francisco: Freeman.
[^3]: Gasarch, W. (2019). "Guest Column: The Third P =? NP Poll." *ACM SIGACT News*, 50(1), 38–59. [doi:10.1145/3319627.3319636](https://doi.org/10.1145/3319627.3319636). Cook, S. (2000). *The P versus NP Problem*. Clay Mathematics Institute official problem description. [claymath.org](https://www.claymath.org/millennium/p-vs-np/)
[^4]: Baker, T., Gill, J., Solovay, R. (1975). "Relativizations of the P =? NP Question." *SIAM Journal on Computing*, 4(4), 431–442. [doi:10.1137/0204037](https://doi.org/10.1137/0204037). Razborov, A. A., Rudich, S. (1997). "Natural Proofs." *Journal of Computer and System Sciences*, 55(1), 24–35. [doi:10.1006/jcss.1997.1494](https://doi.org/10.1006/jcss.1997.1494). Aaronson, S., Wigderson, A. (2009). "Algebrization: A New Barrier in Complexity Theory." *ACM Transactions on Computation Theory*, 1(1), 2. [doi:10.1145/1490270.1490272](https://doi.org/10.1145/1490270.1490272)
[^5]: Williams, R. R. (2025). "Simulating Time With Square-Root Space." *Proceedings of the 57th Annual ACM Symposium on Theory of Computing (STOC 2025)*. [doi:10.1145/3717823.3718225](https://doi.org/10.1145/3717823.3718225). Author's copy: [people.csail.mit.edu](https://people.csail.mit.edu/rrw/time-vs-space.pdf). STOC 2025 Best Paper Award. It improves on Hopcroft, Paul, and Valiant (1975), which simulated time $t$ in space $O(t/\log t)$.
[^6]: Arora, S., Safra, S. (1998). "Probabilistic checking of proofs: a new characterization of NP." *Journal of the ACM*, 45(1), 70–122. [doi:10.1145/273865.273901](https://doi.org/10.1145/273865.273901). Håstad, J. (2001). "Some optimal inapproximability results." *Journal of the ACM*, 48(4), 798–859. [doi:10.1145/502090.502098](https://doi.org/10.1145/502090.502098)
