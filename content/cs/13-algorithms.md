---
title: Algorithms
subtitle: Sorting, searching, graphs, and the four design patterns that cover most of the rest. Including a 2025 result that did something to Dijkstra's algorithm nobody had managed in sixty-six years.
part: III · Methods
---

## Recap

Chapter 12 arranged data. This chapter does things to it. An algorithm is judged on two axes: whether it is correct on every legal input, and what it costs in time and space as the input grows. Almost everything below is a way of buying one with the other.

## Sorting, and a proof about all possible sorts

Sorting is the standard first example because it is easy to state, has many solutions with genuinely different characters, and is the subroutine inside a large fraction of everything else.

**Insertion sort** takes each element and slides it back into position among the already-sorted ones. It costs $O(n^2)$, and it is nevertheless the right choice for small inputs and for nearly-sorted data, where it approaches $O(n)$ and beats everything with a fancier name because its inner loop is three instructions.

**Merge sort** splits the input in half, sorts each half, and merges the two sorted halves in one pass. Its cost is $O(n \log n)$ always, and it is **stable**, meaning that equal elements keep their original relative order, which matters when you sort by one field then another. It needs extra memory for the merge.

**Quicksort**, published by Tony Hoare in 1962, picks a **pivot**, partitions the array into smaller and larger, and recurses. Average cost $O(n \log n)$, worst case $O(n^2)$ if the pivots are chosen badly, sorts in place, and has the best constant factor of the three, so it usually wins in practice. Choosing the pivot at random makes the bad case require improbable luck rather than merely unlucky input.[^1]

Can anything do better than $n \log n$? For any algorithm that works by comparing pairs of elements, no.

:::math The comparison lower bound
Think of a sorting algorithm as a decision tree: each internal node is a comparison, each branch a possible answer, and each leaf a final ordering. To be correct, the tree must have a distinct leaf for every possible input ordering, and there are $n!$ of them. A binary tree with $L$ leaves has depth at least $\log_2 L$, so the worst-case number of comparisons is at least

$$\log_2(n!) \approx n \log_2 n - 1.44n$$

using Stirling's approximation for $n!$. So $\Omega(n \log n)$ comparisons are necessary — $\Omega$ is the lower-bound counterpart of $O$ — and merge sort's $O(n \log n)$ is optimal up to constants.

The escape is to stop comparing. **Counting sort** and **radix sort** look at the digits of the keys rather than comparing them, and sort in $O(n)$ when the keys are drawn from a bounded range. The lower bound is not violated; it simply never applied, because the assumption it rests on was dropped.
:::

Real library sorts are hybrids that exploit all of this: they use an introspective quicksort that switches to heapsort if the recursion goes too deep, and drop to insertion sort on small partitions, or use Timsort, which finds runs already in order and merges them, because real data is very often partly sorted.

:::story A bug found by proving
Timsort, written by Tim Peters in 2002, is the standard sort in Python, Java, Android, and elsewhere. In 2015 a group at Karlsruhe tried to verify it with a proof tool, failed, and discovered why: the invariant governing its merge stack was not strong enough, so for arrays over about 67 million elements the stack could overflow and crash. It had been in production for over a decade and everyone's tests passed. They reported it, proved a corrected bound, and it was fixed.[^2] It is the cleanest small illustration of why the field bothers with proof (chapters 6 and 20): the bug was not rare because it was subtle, it was rare because it needed an input larger than anyone had tried.
:::

## Searching

**Linear search** looks at everything: $O(n)$, and unavoidable if the data is unordered. **Binary search** on sorted data halves the remaining range each step: $O(\log n)$, so a billion items take 30 steps.

Binary search is also the standard example of how hard correct code is. Jon Bentley noted that only about ten percent of professional programmers could write it correctly given two hours. Worse, the version published in his own book, and the one in the Java standard library, contained a bug that survived for twenty years: computing the midpoint as `(low + high) / 2` overflows (chapter 3) once the array exceeds about a billion entries, producing a negative index. It was fixed in 2006, and the correct form is `low + (high - low) / 2`.[^3]

## Graphs

A **graph** is a set of nodes and edges, and an enormous number of real problems are graph problems: road networks, social connections, dependencies between tasks, states of a puzzle, links between pages.

- **Breadth-first search** explores outward in rings from a start node, and finds shortest paths when every edge costs the same. $O(V + E)$ for $V$ nodes and $E$ edges.
- **Depth-first search** follows one path as far as it goes before backtracking. It is the basis of cycle detection, topological ordering (which is how build systems and package managers decide what to do first), and finding connected components.
- **Dijkstra's algorithm** (1956, published 1959) finds shortest paths when edges have different non-negative costs, by repeatedly settling the nearest unsettled node using a priority queue (chapter 12). With the right queue it runs in $O(E + V \log V)$. Edsger Dijkstra designed it in twenty minutes in a café, without pencil and paper, to demonstrate a new computer.[^4]
- **A\*** adds a heuristic estimate of the remaining distance, which lets it skip large parts of the graph; it is what routes your journey and moves units in games.
- **Bellman–Ford** is slower but handles negative edge costs, which matters in currency arbitrage and in network routing.

:::frontier Dijkstra was not optimal after all
For sixty-six years the $O(E + V\log V)$ bound stood, and there was a good reason to think it final: the algorithm settles nodes in increasing order of distance, which effectively sorts them, and sorting takes $n \log n$. That reasoning is the "sorting barrier."

In 2025 Ran Duan, Jiayi Mao, Xiao Mao, Xinkai Shu, and Longhui Yin broke it, with a deterministic algorithm running in $O(E \log^{2/3} V)$ on directed graphs with non-negative weights. The trick is to avoid producing a full sorted order at all: the algorithm recursively partitions the frontier and finds, for each part, a small set of nodes that can serve as sources, so it never needs to know the exact ordering. It won the best paper award at STOC 2025.[^5] The practical effect is at present nil — the constants are large and no router uses it — but the theoretical statement is clean: Dijkstra's algorithm is not optimal, and a barrier that looked structural was not.
:::

## Four ways to design one

**Divide and conquer.** Split, solve the parts, combine. Merge sort, binary search, the fast Fourier transform (1965, which turned signal processing from $O(n^2)$ into $O(n \log n)$ and made digital audio, radar, and MRI practical), and Karatsuba's 1962 multiplication, which beats the schoolbook method by turning four multiplications of half-size numbers into three.

**Dynamic programming.** When a problem's subproblems overlap, solve each once and store the answer. Richard Bellman's example is the shortest path; the everyday one is **edit distance**, the number of single-character insertions, deletions, or substitutions needed to turn one string into another, which is computed by filling a table where each cell depends on three neighbours. That is the machinery behind spell-checkers, `diff`, and DNA sequence alignment. Bellman later said he chose the name "dynamic programming" partly because it sounded impressive to a defence secretary who disliked research.[^7]

**Greedy.** Always take the locally best option. This is wrong in general and provably right for a specific family of problems: Huffman coding (chapter 4), and the minimum spanning tree algorithms of Kruskal and Prim, which connect a set of points with the least total edge length and are the reason your phone's mesh network and many circuit layouts look the way they do.

**Randomization.** Flip a coin inside the algorithm. Random pivots make quicksort's bad case improbable rather than merely uncommon; randomized primality tests (chapter 18) decide whether a 2,048-bit number is prime in milliseconds with an error probability you choose; randomized data structures like skip lists get balanced-tree performance with much simpler code.

:::howto Choosing and checking an algorithm
1. **Bound the input.** For $n$ under a few thousand, almost anything works; write the simplest correct thing. The question only matters when $n$ is large or the operation is repeated constantly.
2. **Identify the operation you repeat most**, and choose the data structure that makes it cheap (chapter 12). The algorithm usually follows.
3. **Check the worst case, not just the average**, and ask whether an adversary chooses the input. This is the difference between a slow page and an outage.
4. **Use the library.** The standard sort, hash table, and search in any mature language have absorbed decades of tuning that you will not reproduce.
5. **Measure before optimizing, and measure the whole system.** The bottleneck is very often a database round trip or a network call, in which case a better sort saves nothing.
6. **Test against a slow, obviously correct version** on random inputs. This catches more than reasoning does, and is how the compiler bugs of chapter 11 were found.
:::

## When the machine finds the algorithm

In 2023 a reinforcement-learning system called AlphaDev, treating instruction selection as a game, found sorting routines for very short sequences that were a few instructions shorter than the human-written ones in the C++ standard library, and the results were merged upstream.[^6] In 2026 a related system contributed to a new record upper bound on the exponent of matrix multiplication, working with the researchers who had set the two previous records (chapter 22). The honest summary is that these are real but narrow: they improve constants and search spaces that humans had already framed, and no machine has yet produced anything like the conceptual move in the shortest-path result above.

## What we still do not know

Whether $O(E \log^{2/3} V)$ is the end of the shortest-path story or a first crack. Whether matrix multiplication can be done in essentially $O(n^2)$ time, which is where the exponent has been creeping for fifty years. Whether the enormous gap between the best proved bounds and the best implementations will ever close, since many "galactic" algorithms with better asymptotics are slower than the naive method for any input that fits in the universe.

## Summary

- Insertion sort wins on small and nearly-sorted data, merge sort is stable and always $O(n \log n)$, quicksort is fastest in practice with a bad worst case that randomization makes improbable.
- Any comparison-based sort needs $\Omega(n \log n)$ comparisons, because the decision tree must have $n!$ leaves; counting and radix sorts beat it by not comparing.
- Binary search costs $O(\log n)$ and is notoriously hard to write correctly; the standard midpoint formula overflowed for twenty years in published code.
- Breadth-first, depth-first, Dijkstra, A\*, and Bellman–Ford cover most graph work; a 2025 result broke Dijkstra's long-assumed optimality with an $O(E \log^{2/3} V)$ algorithm.
- The four design patterns are divide and conquer, dynamic programming, greedy, and randomization; each is right for a recognizable shape of problem.
- Machine-found algorithms have improved real constants in library code, but not yet produced a conceptual advance.

[^1]: Hoare, C. A. R. (1962). "Quicksort." *The Computer Journal*, 5(1), 10–16. [doi:10.1093/comjnl/5.1.10](https://doi.org/10.1093/comjnl/5.1.10). Knuth, D. E. (1998). *The Art of Computer Programming, Volume 3: Sorting and Searching*, 2nd ed. Boston: Addison-Wesley.
[^2]: de Gouw, S. et al. (2015). "OpenJDK's java.utils.Collection.sort() is broken: The good, the bad and the worst case." *Computer Aided Verification (CAV 2015)*, 273–289. [doi:10.1007/978-3-319-21690-4_16](https://doi.org/10.1007/978-3-319-21690-4_16)
[^3]: Bloch, J. (2006). "Extra, Extra — Read All About It: Nearly All Binary Searches and Mergesorts are Broken." Google Research blog, 2 June. [research.google](https://research.google/blog/extra-extra-read-all-about-it-nearly-all-binary-searches-and-mergesorts-are-broken/). Bentley, J. (2000). *Programming Pearls*, 2nd ed. Boston: Addison-Wesley.
[^4]: Dijkstra, E. W. (1959). "A note on two problems in connexion with graphs." *Numerische Mathematik*, 1, 269–271. [doi:10.1007/BF01386390](https://doi.org/10.1007/BF01386390). Hart, P. E., Nilsson, N. J., Raphael, B. (1968). "A Formal Basis for the Heuristic Determination of Minimum Cost Paths." *IEEE Transactions on Systems Science and Cybernetics*, 4(2), 100–107. [doi:10.1109/TSSC.1968.300136](https://doi.org/10.1109/TSSC.1968.300136)
[^5]: Duan, R., Mao, J., Mao, X., Shu, X., Yin, L. (2025). "Breaking the Sorting Barrier for Directed Single-Source Shortest Paths." *Proceedings of the 57th Annual ACM Symposium on Theory of Computing (STOC 2025)*. [doi:10.1145/3717823.3718179](https://doi.org/10.1145/3717823.3718179), [arXiv:2504.17033](https://arxiv.org/abs/2504.17033). STOC 2025 Best Paper Award.
[^7]: Bellman, R. (1984). *Eye of the Hurricane: An Autobiography*. Singapore: World Scientific, 159. Bellman, R. (1957). *Dynamic Programming*. Princeton University Press. Wagner, R. A., Fischer, M. J. (1974). "The String-to-String Correction Problem." *Journal of the ACM*, 21(1), 168–173. [doi:10.1145/321796.321811](https://doi.org/10.1145/321796.321811)
[^6]: Mankowitz, D. J. et al. (2023). "Faster sorting algorithms discovered using deep reinforcement learning." *Nature*, 618, 257–263. [doi:10.1038/s41586-023-06004-9](https://doi.org/10.1038/s41586-023-06004-9). Cooley, J. W., Tukey, J. W. (1965). "An Algorithm for the Machine Calculation of Complex Fourier Series." *Mathematics of Computation*, 19(90), 297–301. [doi:10.1090/S0025-5718-1965-0178586-1](https://doi.org/10.1090/S0025-5718-1965-0178586-1)
