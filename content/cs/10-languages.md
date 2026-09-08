---
title: Programming Languages
subtitle: Why there are thousands of them, what a type system is really for, who cleans up the memory, and why the same argument has now been running for fifty years.
part: II · The Machine
---

## What does a programming language make easier to express or harder to get wrong?

Chapters 7 to 9 built a machine that runs numbered instructions. Nobody writes those by hand any more. A programming language is a notation for saying what a computation should do, chosen so that people can read it and a machine can be made to run it, and the tension between those two goals produced everything in this chapter.

## Three things a language is

**Syntax** is the form: which sequences of characters are legal. **Semantics** is the meaning: what a legal program does. **Pragmatics** is everything else that decides whether anyone uses it — tooling, libraries, error messages, hiring, and how it behaves at three in the morning.

Beginners argue about syntax, which is the least interesting of the three. Semantics is where the real design happens, and pragmatics is where languages actually live and die: several of the most-used languages in the world are, by the standards of language design, mediocre, and they won on ecosystem and timing.

## The ladder of abstraction

At the bottom is **machine code**: the numbers of chapter 8. Above it, **assembly language**, one line per machine instruction with names instead of numbers. Above that, **high-level languages**, where one line may become dozens of instructions and the machine's registers are not mentioned at all.

The gain is not only convenience. A high-level program says *what* to compute rather than *how*, which leaves the compiler free to choose a "how" that suits a processor the author never saw. FORTRAN's 1957 achievement was to prove that a compiler could do this well enough to displace hand-written assembly; nobody believed it beforehand, and the project was sold internally as a way to reduce the cost of programming rather than as a way to make faster programs.

## Four ways to say the same thing

The paradigms are not rival religions, though they are often discussed as if they were. Each is a default answer to the question "what is a program made of?"

**Imperative**: a sequence of commands that change state. "Set total to 0. For each item, add its price to total." This matches the hardware, which is one reason it dominates.

**Object-oriented**: state and the operations on it are bundled into objects that hide their internals and communicate by messages. The insight, due to Simula in the 1960s and Smalltalk in the 1970s, is that large programs are easier to change when each part's internals are private, so a caller cannot depend on them. The insight is right; the elaborate inheritance hierarchies built on it in the 1990s mostly were not, and modern practice favours composition.

**Functional**: a program is an expression to be evaluated, built of functions that map inputs to outputs and, in the strict form, never modify anything. This is the lambda calculus of chapter 5 grown up. Its advantage is that a function whose result depends only on its arguments can be understood, tested, cached, and parallelized in isolation. Its ideas — first-class functions, immutability, map and filter over collections, pattern matching, algebraic data types — have been absorbed into nearly every mainstream language over the last fifteen years, which is the quiet victory of the field.

**Declarative**: state the properties of the answer and let the system find it. SQL (chapter 16) says which rows you want, not how to fetch them. A build system states dependencies, not an order. Constraint and logic languages state relations. This is the most powerful style when it applies, and it applies less often than its advocates hope.

Most working languages are now multi-paradigm, and the useful question about a language is not which camp it is in but which style it makes *easy* and which it merely permits.

## Types

A **type** is a claim about what a value is and what may be done with it. A **type system** checks such claims. This is more profound than it sounds: a type checker is an automated proof system, and the proofs it finds are proofs that certain errors cannot happen at run time.

:::math How a type rule is written
Type systems are specified with rules of this shape:

$$\frac{\Gamma \vdash f : A \rightarrow B \qquad \Gamma \vdash x : A}{\Gamma \vdash f(x) : B}$$

Everything above the line is what you must already know; below the line is what you may then conclude. $\Gamma$ (gamma) is the **context**: the set of assumptions about what types the variables have. The turnstile $\vdash$ reads "proves" or "entails." $f : A \rightarrow B$ means "$f$ is a function taking an $A$ and returning a $B$." So the rule says: if in this context $f$ takes an $A$ and returns a $B$, and $x$ is an $A$, then $f(x)$ is a $B$. That is the rule for function application, and a whole language's type system is a page or two of such rules.

The remarkable fact, the **Curry–Howard correspondence**, is that these rules are the rules of logic under another name: types are propositions, and programs are proofs of them. That correspondence is why proof assistants are built on typed lambda calculi (chapters 6 and 20).[^1]
:::

The recurring argument is **static** versus **dynamic** checking. Static typing checks before running, catching whole classes of error at compile time and providing the information that makes editors and refactoring tools work; dynamic typing checks as it runs, and buys flexibility and terser code. The empirical evidence about which produces fewer defects has always been weaker than the strength of opinion about it. What is not in doubt is the industry's revealed preference: the large dynamically typed languages have all acquired optional static types, and the traffic is entirely in that direction.

Type inference reduces the cost of the static side. Since Robin Milner's 1978 algorithm, a compiler can work out most types itself, so that a language can be fully statically typed while looking almost as light as a dynamic one.[^2]

## Who cleans up

A program allocates memory and must eventually release it. Three answers exist.

**Manual.** The programmer frees it. This is C. Forget, and the program leaks; free twice, or use memory after freeing it, and behaviour becomes undefined, which in practice means exploitable. Around 70 percent of the serious security vulnerabilities at both Microsoft and in Chromium have been memory-safety errors of this family, a proportion that has been stable for years and has made the topic a matter of national-security policy in several countries.[^3]

**Garbage collection.** A runtime traces which objects are still reachable and frees the rest. This is Java, Go, C#, JavaScript, and Python. It eliminates the entire class of errors above at the cost of some memory overhead and of pauses, which modern collectors have pushed down to well under a millisecond but not to zero. For most software this is the right trade and has been since the 1990s.

**Ownership.** Rust's answer: the compiler tracks, statically, which part of the program owns each value and when it goes out of scope, and enforces that either one writer or many readers may hold a reference at a time. The result is memory safety and data-race freedom with no collector and no run-time cost — the checks happen at compile time, which is why the language is famous both for its safety and for the difficulty of its learning curve. The core of these guarantees has been proved sound rather than merely asserted.[^4] Rust's arrival in the Linux kernel (chapter 9) and in Windows components is the first serious movement in systems-language practice in thirty years.

:::warning The billion-dollar mistake
Tony Hoare introduced the null reference into ALGOL W in 1965 because it was easy to implement, and later called it his billion-dollar mistake. The problem is that null is silently a member of every type: a value declared to be a string might be a string, or might be nothing at all, and the type system says nothing. Newer languages fix it by making absence an explicit type — an `Option` or `Maybe` that the compiler forces you to unwrap — which converts a run-time crash into a compile-time error. Several older languages have retrofitted the same idea, and the retrofits are visibly harder to use than the designs that had it from the start.
:::

## How a program actually runs

**Compiled** languages translate the whole program to machine code ahead of time: fast, and errors surface before shipping. **Interpreted** languages have another program read and execute the source directly: slow, but immediate and flexible. In between sits **just-in-time compilation**, which starts by interpreting, watches which code is hot, and compiles that to machine code at run time using knowledge no ahead-of-time compiler could have, such as the actual types flowing through a function. This is why JavaScript, a language designed in ten days in 1995 and intended for small page effects, now runs within a small factor of C on numeric code.

The categories are properties of implementations rather than of languages. There are C interpreters and Python compilers.

## Why some languages win

Not by merit alone. The pattern in every case is a killer application plus a large sponsor plus arriving at the moment a need appeared: C had Unix, Java had the enterprise server and a promise of portability, JavaScript had the only seat in the browser, Python had scientific computing and then machine learning, Swift and Kotlin had platform owners who made them the default. Languages with better designs and no such vehicle stay small and influential, exporting their ideas into the winners a decade later. Garbage collection, first-class functions, generics, pattern matching, and now ownership all took that route.

## What we still argue about

Whether static types repay their cost, which has been argued since the 1970s without a decisive empirical answer. Whether ownership will spread beyond systems programming or stay a specialist tool. Whether the memory-unsafe languages holding up most of the world's infrastructure can be incrementally hardened rather than replaced, which is now a policy question as much as a technical one. And what happens to language design when most code is drafted by models trained on the code that already exists, which weights the future towards whatever was popular in the past ([how those models are trained](#/ai/training)).

:::try Put the idea to work
A language rejects a program before it runs because a number was used where text was expected. Does this prove that accepted programs have no bugs?

:::answer Show the reasoning
No. A type checker rules out the classes of misuse its type system can express and check. A well-typed program can still compute the wrong amount, use a mistaken condition, or implement the wrong requirements. A guarantee is useful when its scope is stated accurately.
:::
:::

## Summary

- A language is syntax, semantics, and pragmatics; the last decides adoption and the second is where the design lives.
- The paradigms are defaults for "what is a program made of," and modern languages mix them; the functional ideas have quietly been absorbed everywhere.
- A type system is an automated proof system; by the Curry–Howard correspondence, types are propositions and programs are their proofs.
- Memory is managed manually, by garbage collection, or by compile-time ownership; manual management accounts for roughly 70 percent of serious vulnerabilities at large vendors.
- Null was a 1965 convenience that made every type silently include "nothing"; explicit optional types are the fix.
- Compilation, interpretation, and just-in-time compilation are implementation choices, not language properties.

[^1]: Wadler, P. (2015). "Propositions as Types." *Communications of the ACM*, 58(12), 75–84. [doi:10.1145/2699407](https://doi.org/10.1145/2699407). Pierce, B. C. (2002). *Types and Programming Languages*. Cambridge, MA: MIT Press.
[^2]: Milner, R. (1978). "A theory of type polymorphism in programming." *Journal of Computer and System Sciences*, 17(3), 348–375. [doi:10.1016/0022-0000(78)90014-4](https://doi.org/10.1016/0022-0000(78)90014-4). Backus, J. (1978). "Can Programming Be Liberated from the von Neumann Style?" *Communications of the ACM*, 21(8), 613–641. [doi:10.1145/359576.359579](https://doi.org/10.1145/359576.359579)
[^3]: US Cybersecurity and Infrastructure Security Agency and National Security Agency (2025). *Memory Safe Languages: Reducing Vulnerabilities in Modern Software Development*. [cisa.gov](https://www.cisa.gov/resources-tools/resources/memory-safe-languages-reducing-vulnerabilities-modern-software-development). The ~70 percent figures are Microsoft's own (MSRC, 2019) and the Chromium project's (2020), and have been reported consistently since.
[^4]: Jung, R. et al. (2018). "RustBelt: Securing the Foundations of the Rust Programming Language." *Proceedings of the ACM on Programming Languages*, 2(POPL), 66. [doi:10.1145/3158154](https://doi.org/10.1145/3158154). McCarthy, J. (1960). "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I." *Communications of the ACM*, 3(4), 184–195. [doi:10.1145/367177.367199](https://doi.org/10.1145/367177.367199)
