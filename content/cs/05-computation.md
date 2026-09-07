---
title: What a Computation Is
subtitle: A machine made of paper: states, a tape, and a table of rules. Why three unrelated definitions of "procedure" turned out to describe the same thing, and why one machine can be all machines.
part: I · Foundations
---

## Recap

Chapter 4 measured information. Now we need to be exact about processing it. This chapter defines computation without reference to any hardware, which is what lets chapter 6 prove that certain things are impossible for every computer that will ever exist.

## What an algorithm has to be

An **algorithm** is a procedure with four properties. It is **finite**: the description has an end. It is **unambiguous**: each step is fully determined, with nothing left to judgement. It **terminates**: for any legal input it eventually stops. And it is **correct**: when it stops, the answer is right, for every legal input, not merely the ones that were tried.

That last pair is stricter than it sounds. "It worked on my test cases" is not correctness, and much of chapters 13 and 20 is about the distance between the two. A recipe that says "season to taste" is not an algorithm. A procedure that loops forever on some inputs is not an algorithm either, though it may still be a perfectly good program.

## The machine made of paper

Turing's 1936 definition strips a human calculator down to the minimum. Imagine a mathematician working with pencil, eraser, and an endless strip of squared paper. At any moment they are looking at one square, they are in one of a finite number of states of mind, and what they do next depends only on those two things: they write a symbol, possibly move one square left or right, and take up a new state of mind.

That is the entire model. A **Turing machine** is:

- a finite set of **states**, including a start state and one or more halting states;
- an infinite **tape** divided into squares, each holding one symbol from a finite alphabet, initially containing the input and otherwise blank;
- a **head** positioned over one square;
- a **transition function**, which is just a lookup table.

:::math The transition function
$$\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \{L, R\}$$

Read it as "delta maps a pair to a triple." $\delta$ (delta) is the rule table. $Q$ is the set of states and $\Gamma$ (capital gamma) the tape alphabet; the $\times$ means "paired with," so the left side is every combination of a current state and a currently scanned symbol. The right side says what happens: a new state, a symbol to write, and a direction to move, either $L$ for left or $R$ for right. The arrow means every input pair has exactly one output triple, which is what makes the machine deterministic.

A table with a few dozen rows is enough to add, multiply, sort, or decide whether a word is a palindrome. Nothing else is available: no random access, no arithmetic built in, no memory beyond the tape.
:::

The model is deliberately, almost perversely, weak. That is the point. If some task is impossible for a device this simple, one can object that a better machine might manage it. Turing's second move removes the objection.

## One machine to run them all

The transition table of any Turing machine is a finite object, so it can be written down as a string of symbols. And a string of symbols can be put on a tape.

Turing therefore constructed a **universal Turing machine**: a single fixed machine which, given on its tape a description of any machine $M$ followed by an input $w$, simulates $M$ running on $w$, step for step, and produces whatever $M$ would produce. One machine, with one fixed rule table, does what all of them do.[^1]

:::key
The universal machine is the most consequential idea in the subject, and it is worth pausing on. Before it, a calculating device was built to perform a particular calculation; changing the task meant changing the machine. After it, there is one machine and the task is data. That is exactly the stored-program architecture of 1945 (chapter 2), an interpreter running a program, a virtual machine, a browser running a page, and an emulator running a console from 1990. All of them are the same theorem, cashed out in hardware.
:::

## The same idea, written twice more

At almost the same moment, Alonzo Church defined computation in a way with no machine, no tape, and no states at all. In the **lambda calculus** there are only three kinds of expression: a variable, $x$; a function, written $\lambda x.M$, meaning "the function that takes $x$ and returns the expression $M$"; and an application, $(M\ N)$, meaning "apply the function $M$ to the argument $N$." Computation is one rule, **beta reduction**: to apply $\lambda x.M$ to $N$, substitute $N$ for every $x$ in $M$, and repeat until nothing more can be substituted.

That is all of it, and it is enough for everything. Numbers are not built in, so Church encoded them as functions: the number 3 is the function that applies another function three times. Booleans, pairs, lists, and recursion all fall out of the same three rules. Church proved his system computed exactly the functions Turing's machines did; Kleene's recursive functions, defined a third way, turned out to be the same set again.[^2]

That convergence is the **Church–Turing thesis**. It is not a theorem, because "what a person could compute by following a procedure" is an informal notion, and you cannot prove a theorem about an informal notion. It is an extremely well-tested claim: in ninety years, every proposed model of computation, including quantum computers, has turned out to compute the same set of functions.

The lambda calculus is not a curiosity. It is the direct ancestor of LISP, and of the functions, closures, and higher-order functions in every modern language (chapter 10); its type systems are the basis of the proof assistants used to verify software (chapter 20).

## Computation is easy to find

Once you know what to look for, universality turns up in unlikely places. **Cellular automata** are grids of cells that update in lockstep by a simple local rule; John Conway's Game of Life, with three rules about how many neighbours a cell has, is universal, and so is the one-dimensional "rule 110," proved in work published in 2004.[^3] Universality has been demonstrated in Magic: The Gathering, in Minecraft's redstone, in Excel formulas, and in the PowerPoint animation system. The bar is low: roughly, if a system can store unbounded state and make a decision based on it, it can compute anything computable.

The corollary matters for security. Any sufficiently expressive input format is a programming language, and a parser for it is an interpreter, which is why file formats and configuration languages keep turning out to be exploitable (chapter 18).

## Weaker machines, and why they are useful

Full universality is often more than you want, because weaker models are analysable. Restrict a Turing machine by removing the tape and you get a **finite automaton**: finitely many states and no memory beyond which state it is in. A turnstile is one. So is a vending machine, a traffic light, and the pattern matcher behind regular expressions. What can a finite automaton not do? It cannot check that a string has equally many opening and closing brackets, because that requires counting without bound, and it has nowhere to count.

Add a single stack and you get a **pushdown automaton**, which can match brackets and therefore parse the nested structure of programming languages (chapter 11). Add a full tape and you are back to a Turing machine. Noam Chomsky set out this ladder in 1956, in a paper about human language, and it became the organizing map of formal languages.[^4]

| Model | Memory | Recognizes | Used for |
|---|---|---|---|
| Finite automaton | states only | regular languages | regular expressions, protocol states, lexing |
| Pushdown automaton | one stack | context-free languages | parsing nested syntax |
| Turing machine | unbounded tape | recursively enumerable languages | everything computable |

:::try Think about it
Design a finite automaton for a turnstile that takes a coin: it has two states, locked and unlocked, and two inputs, coin and push. Write out all four transitions. Then try to add "let the third person through free," and notice that you need a new state for every count, which is the exact reason finite automata cannot count without a bound.
:::

## What "computable" means

A function is **computable** if there exists a Turing machine that, for every input, halts with the correct output. A yes-or-no problem is **decidable** if the machine always halts and says yes or no correctly. A weaker property, **recognizable** (or semi-decidable), means the machine says yes when the answer is yes but may run forever when the answer is no.

That gap between deciding and recognizing looks like a technicality. Chapter 6 shows it is the fault line along which computation breaks.

## What we still argue about

Whether the Church–Turing thesis holds as a claim about *physics*, that no physically constructible device can compute a non-computable function; proposed counterexamples all require infinite precision, infinite time, or exotic spacetimes. Whether the model's charge of one step per operation, which ignores that real memory access costs more the further away it is, distorts the theory of what is efficient (chapter 8 shows the gap is a factor of hundreds in practice). And whether analogue and biological systems compute in a sense the model misses, or merely compute the same things with different engineering.

## Summary

- An algorithm is finite, unambiguous, terminating, and correct on every legal input, not merely the tested ones.
- A Turing machine is states, a tape, a head, and a transition table $\delta$; it is deliberately weak so that impossibility results about it are strong.
- A universal machine reads another machine's description as data and simulates it: this is why one computer can run any program, and it is the 1936 origin of the stored-program computer.
- The lambda calculus defines computation with three constructs and one substitution rule and computes exactly the same functions; so does every other model tried since, which is the Church–Turing thesis.
- Universality is common and cheap; anything that stores unbounded state and branches on it is a computer, including many file formats, which is a security problem.
- Restricting memory gives the useful weaker models: finite automata for regular expressions, pushdown automata for parsing.

[^1]: Turing, A. M. (1936). "On Computable Numbers, with an Application to the Entscheidungsproblem." *Proceedings of the London Mathematical Society*, s2-42(1), 230–265. [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230). Sipser, M. (2013). *Introduction to the Theory of Computation*, 3rd ed. Boston: Cengage, chapter 3.
[^2]: Church, A. (1936). "An Unsolvable Problem of Elementary Number Theory." *American Journal of Mathematics*, 58(2), 345–363. [doi:10.2307/2371045](https://doi.org/10.2307/2371045). Kleene, S. C. (1936). "General recursive functions of natural numbers." *Mathematische Annalen*, 112, 727–742. [doi:10.1007/BF01565439](https://doi.org/10.1007/BF01565439). Turing, A. M. (1937). "Computability and λ-Definability." *Journal of Symbolic Logic*, 2(4), 153–163. [doi:10.2307/2268280](https://doi.org/10.2307/2268280)
[^3]: Cook, M. (2004). "Universality in Elementary Cellular Automata." *Complex Systems*, 15(1), 1–40. [complex-systems.com](https://www.complex-systems.com/abstracts/v15_i01_a01/). Berlekamp, E., Conway, J., Guy, R. (1982). *Winning Ways for Your Mathematical Plays*, vol. 2. London: Academic Press (universality of Life).
[^4]: Chomsky, N. (1956). "Three models for the description of language." *IRE Transactions on Information Theory*, 2(3), 113–124. [doi:10.1109/TIT.1956.1056813](https://doi.org/10.1109/TIT.1956.1056813). Hopcroft, J. E., Motwani, R., Ullman, J. D. (2006). *Introduction to Automata Theory, Languages, and Computation*, 3rd ed. Boston: Addison-Wesley.
