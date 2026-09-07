---
title: What No Computer Can Do
subtitle: The halting problem, proved in four lines; why almost every function is uncomputable; and what practical tools do about it, since they cannot do the impossible.
part: I · Foundations
---

## Recap

Chapter 5 defined computation and showed that one universal machine can run any program. This chapter uses that fact against itself. The results here are not about today's computers being too slow. They hold for every machine that will ever be built, of any speed, running for any length of time.

## The question

Some programs finish. Some run forever. It would be extremely useful to know which is which: your compiler could warn you, your operating system could refuse to start a program that would hang, a marketplace could reject apps that lock up.

So: is there a program $H$ which, given any program $P$ and any input $x$, always answers correctly whether $P$ halts on $x$?

The answer is no, and the proof is short enough to follow line by line.

:::key The halting problem
Suppose such an $H$ exists. Since programs are just data (chapter 5), we can feed a program its own text as input, so $H(P, P)$ is a perfectly good question.

Now build a new program $D$, which takes one program $P$ as input and does this:

1. Run $H(P, P)$.
2. If $H$ says "$P$ halts on $P$", then deliberately loop forever.
3. If $H$ says "$P$ does not halt on $P$", then halt immediately.

$D$ is easy to write, assuming $H$ exists. Now ask the fatal question: **does $D$ halt when given $D$ as its input?**

- If $D$ halts on $D$, then $H(D, D)$ said "halts", so by step 2 $D$ loops forever. It does not halt. Contradiction.
- If $D$ does not halt on $D$, then $H(D, D)$ said "does not halt", so by step 3 $D$ halts immediately. Contradiction.

Every possibility is contradictory, so the assumption was wrong: no such $H$ exists. The **halting problem** is **undecidable**.[^1]
:::

Notice what the proof does not depend on. Not the speed of the machine, not the language, not the amount of memory. It is the same self-reference that powers Gödel's incompleteness theorem of 1931 and the ancient liar paradox, made precise. Turing's version is arguably the cleanest of the three, and he used it to settle Hilbert's decision problem in the negative: if you could decide which logical statements were provable, you could decide halting, and you cannot.

## Almost everything is uncomputable

There is a second, blunter argument, and it is worth seeing because it shows how thin the computable really is.

A program is a finite string of symbols. The set of all finite strings is **countable**: you can list them all, shortest first, alphabetically within each length, and every program appears somewhere on that list. So there are exactly as many programs as there are whole numbers.

Now consider functions that take a whole number and return 0 or 1. By Cantor's diagonal argument the set of these is **uncountable**: strictly bigger than the set of whole numbers, and therefore strictly bigger than the set of programs. There are not enough programs to go around. Almost every function, in the precise sense that the computable ones are a vanishingly small subset, cannot be computed by anything.[^2]

We rarely notice because the functions people care about are the describable ones, and describable is close to computable. But the ocean is uncomputable and the island is small.

## It gets worse: Rice's theorem

Halting is not a special case. In 1953 Henry Rice proved something far more sweeping: **every non-trivial property of what a program computes is undecidable**. "Non-trivial" means only that some programs have the property and some do not.

So there is no general procedure to decide whether a program ever outputs 7, whether two programs compute the same function, whether a program ever writes to a file it should not, or whether a program is a virus. Fred Cohen proved the last of these directly in 1987, which is why antivirus software works from signatures and heuristics rather than from analysis: perfect detection is not merely hard, it is impossible.[^3]

Undecidability is also not confined to questions about programs. Whether a set of polynomial equations has whole-number solutions, Hilbert's tenth problem, is undecidable, proved by Yuri Matiyasevich in 1970 completing two decades of work by Martin Davis, Hilary Putnam, and Julia Robinson.[^4] Whether a given set of tile shapes can cover the infinite plane is undecidable. Whether two context-free grammars generate the same language is undecidable. These are ordinary mathematical questions with no computers in them.

:::warning A common confusion
"Undecidable" does not mean "hard," and it does not mean nobody can ever tell. For any *particular* program you can often see immediately whether it halts. What is impossible is a single procedure that works for *all* of them, always terminating with the right answer. Nor does it mean the problem is unapproachable: it means every tool must give up one of three things — always terminating, always answering, or always being right.
:::

## What tools actually do

Given that, working systems make an explicit, principled retreat. There are three doors, and every real tool goes through one.

**Answer "don't know."** A **static analyser** examines code without running it and reports three verdicts: definitely fine, definitely broken, or cannot tell. Sound analysers never miss a real bug but raise false alarms; the fight in the field is over how many false alarms a developer will tolerate before ignoring the tool entirely.

**Restrict the language.** Undecidability applies to Turing-complete languages. Deliberately weaken the language and the questions become decidable: this is why some smart-contract and configuration languages forbid unbounded loops, why SQL's core is not a general-purpose language, and why hardware description languages are checkable in ways software is not. Total functional languages, in which every program provably terminates, buy decidability by giving up universality.

**Ask the human.** A **proof assistant** does not search for a proof of correctness; it checks one that a person supplies. This is how the seL4 microkernel was proved functionally correct against its specification, about 8,700 lines of C and 600 of assembler carrying an Isabelle/HOL proof, and how the CompCert C compiler carries a machine-checked proof that it preserves the meaning of the programs it compiles (chapter 20).

Model checkers occupy a middle ground: they exhaustively search a system's *finite* state space, which is decidable but can be astronomically large, and are used routinely on chips, protocols, and distributed algorithms.

## How far the cliff drops: the busy beaver

Here is a way to feel undecidability as a size rather than an argument. Among all Turing machines with $n$ states that eventually halt on a blank tape, let $BB(n)$ be the largest number of steps any of them takes. Tibor Radó defined this in 1962 and proved that $BB$ grows faster than any computable function: if you could compute it, you could solve the halting problem by running an $n$-state machine for $BB(n)$ steps and concluding it never stops.[^5]

The first few values are 1, 6, 21, and 107. The fifth resisted for decades: an internet collaboration of amateurs and professionals finished a proof in July 2024, formally checked in the Coq proof assistant, that $BB(5) = 47{,}176{,}870$.[^6] The sixth is out of reach in a way that is hard to convey; the best lower bound found in 2025 is a tower of exponents that cannot be written out in ordinary notation, and one of the machines standing in the way encodes an open question about Collatz-style sequences. Five states of a paper machine is roughly where mathematics currently runs out.

## Where this leaves us

The limits are real, and they are not the ones people fear. No computer can decide arbitrary questions about programs. But nothing here prevents useful analysis, verification of specific systems, or the automation of most of what people actually want. The undecidable barrier is closer to a coastline than a wall: you cannot cross it, and there is a great deal of land.

The next question is not what is possible but what is affordable, and that is chapter 14.

## What we still do not know

The exact value of $BB(6)$, and whether it is knowable within standard mathematics at all: $BB(748)$ has been shown to be independent of the usual axioms of set theory, so somewhere between 6 and 748 the function passes out of mathematics as we have it. Whether the many undecidable problems in verification admit restrictions broad enough to cover the code people actually write. And whether large learned models, which are pattern matchers rather than deciders, change the practical picture even though they change nothing about the theory.

## Summary

- No program can decide, for arbitrary programs and inputs, whether they halt; the proof builds a program that must do the opposite of whatever the decider predicts.
- There are countably many programs and uncountably many functions, so almost every function is uncomputable.
- Rice's theorem generalizes: every non-trivial property of a program's behaviour is undecidable, including "is this a virus."
- Undecidability is not about difficulty; it forbids one procedure that is always correct, always terminating, and always conclusive, so every real tool gives up exactly one of the three.
- Practical responses: analysers that answer "don't know," deliberately weakened languages, and proof assistants that check human-supplied proofs, as used for seL4 and CompCert.
- The busy beaver function grows faster than anything computable; $BB(5) = 47{,}176{,}870$ was settled and machine-checked in 2024, and $BB(6)$ is beyond ordinary notation.

[^1]: Turing, A. M. (1936). "On Computable Numbers, with an Application to the Entscheidungsproblem." *Proceedings of the London Mathematical Society*, s2-42(1), 230–265. [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230). Gödel, K. (1931). "Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I." *Monatshefte für Mathematik und Physik*, 38, 173–198. [doi:10.1007/BF01700692](https://doi.org/10.1007/BF01700692)
[^2]: Cantor, G. (1891). "Über eine elementare Frage der Mannigfaltigkeitslehre." *Jahresbericht der DMV*, 1, 75–78. Sipser, M. (2013). *Introduction to the Theory of Computation*, 3rd ed. Boston: Cengage, chapter 4.
[^3]: Rice, H. G. (1953). "Classes of Recursively Enumerable Sets and Their Decision Problems." *Transactions of the American Mathematical Society*, 74(2), 358–366. [doi:10.2307/1990888](https://doi.org/10.2307/1990888). Cohen, F. (1987). "Computer viruses: Theory and experiments." *Computers & Security*, 6(1), 22–35. [doi:10.1016/0167-4048(87)90122-2](https://doi.org/10.1016/0167-4048(87)90122-2)
[^4]: Davis, M. (1973). "Hilbert's Tenth Problem is Unsolvable." *The American Mathematical Monthly*, 80(3), 233–269. [doi:10.2307/2318447](https://doi.org/10.2307/2318447). Berger, R. (1966). "The Undecidability of the Domino Problem." *Memoirs of the AMS*, 66.
[^5]: Radó, T. (1962). "On Non-Computable Functions." *Bell System Technical Journal*, 41(3), 877–884. [doi:10.1002/j.1538-7305.1962.tb00480.x](https://doi.org/10.1002/j.1538-7305.1962.tb00480.x). Aaronson, S. (2020). "The Busy Beaver Frontier." *SIGACT News*, 51(3), 32–54. [doi:10.1145/3427361.3427369](https://doi.org/10.1145/3427361.3427369)
[^6]: The bbchallenge Collaboration (2024). "We have proved BB(5) = 47,176,870," with a proof formalized in Coq. [bbchallenge.org](https://bbchallenge.org/story) and [discuss.bbchallenge.org](https://discuss.bbchallenge.org/t/july-2nd-2024-we-have-proved-bb-5-47-176-870/237). Brubaker, B. (2024). "Amateur Mathematicians Find Fifth 'Busy Beaver' Turing Machine." *Quanta Magazine*, 2 July. [quantamagazine.org](https://www.quantamagazine.org/amateur-mathematicians-find-fifth-busy-beaver-turing-machine-20240702/)
