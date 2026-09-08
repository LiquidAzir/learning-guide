---
title: Compilers
subtitle: How text becomes instructions: five stages, one intermediate form, a hundred optimizations, and a 1984 lecture that shows why you cannot fully trust any of it.
part: II · The Machine
---

## How can a compiler change code without changing its meaning?

Chapter 10 described languages. This chapter describes the program that translates one into another, usually into the machine code of chapter 8. Compilers are worth understanding even if you never write one, because they explain why your code runs faster or slower than it looks, and because the same structure — read text, build a tree, check it, transform it, emit something — is the shape of an enormous amount of software that has nothing to do with programming languages.

## The pipeline

A compiler is a sequence of translations, each one from a representation into a slightly lower-level one.

**1. Lexing.** Split the character stream into **tokens**: `total`, `=`, `price`, `*`, `1.2`. This is exactly the finite automaton of chapter 5, which is why lexers are written as regular expressions and run at hundreds of megabytes a second.

**2. Parsing.** Turn the flat token stream into a tree that reflects the structure: that the multiplication belongs to the right-hand side, that this block belongs to that `if`. The grammar is context-free, so the machine required is the pushdown automaton of chapter 5. Two techniques dominate: **recursive descent**, in which each grammatical rule becomes a function that calls the others, chosen for readable error messages, and **LR parsing**, generated automatically from a grammar by an algorithm Donald Knuth published in 1965.[^1] The output is an **abstract syntax tree**, with the punctuation thrown away.

**3. Semantic analysis.** Resolve names to declarations, check types (chapter 10), and enforce whatever rules cannot be expressed in the grammar. Most of the error messages you have ever read come from here.

**4. Optimization.** Rewrite the program into a faster one that computes the same thing. This is where nearly all of a modern compiler's code lives.

**5. Code generation.** Choose machine instructions, assign values to the machine's few registers, and schedule the instructions to suit the pipeline of chapter 8.

## The middle form

Compilers do not optimize the syntax tree, and they do not optimize the machine code. They translate into an **intermediate representation** designed for analysis, and do the work there. The payoff is combinatorial: $m$ languages and $n$ processors need $m + n$ pieces of compiler rather than $m \times n$. That is the whole design of LLVM, released in 2003, which is now the back end for C, C++, Rust, Swift, Julia, and many others, targeting every processor that matters.[^2]

The dominant form is **static single assignment**: every variable is assigned exactly once, and where control flow merges, an explicit marker says which incoming version to use. That single restriction makes it trivial to answer "where did this value come from," which is the question nearly every optimization needs to ask, and it turned a set of ad-hoc techniques into a systematic discipline after 1991.[^3]

## What the optimizer actually does

A partial list, in rough order of value:

- **Constant folding and propagation.** Compute at compile time what does not depend on input.
- **Dead code elimination.** Delete what cannot affect the result. Together with the previous item this removes an astonishing amount of real code, especially after inlining.
- **Inlining.** Replace a call with the body of the function. Valuable less for the saved call than because it exposes the caller's and callee's code to every other optimization at once. It is the enabling transformation, and choosing where to apply it is largely heuristic.
- **Loop transformations.** Hoist invariant work out, unroll to reduce branch overhead, interchange loops to improve locality (chapter 8), and **vectorize** so that one instruction processes eight values at once.
- **Register allocation.** Decide which values live in the machine's dozen-odd registers and which spill to memory. Modelled as colouring a graph in which two values that are live at the same moment must get different colours — a problem that is NP-hard in general (chapter 14), so compilers use fast heuristics that are usually near-optimal.[^4]

The results are large: optimized code is commonly two to five times faster than unoptimized on ordinary programs, and far more on numeric code that vectorizes well.

:::warning Undefined behaviour
C and C++ leave certain situations **undefined**: signed integer overflow, reading uninitialized memory, dereferencing a null pointer, indexing past the end of an array. The standard does not say these produce garbage; it says the compiler may assume they never happen.

An optimizer takes that literally. If your code checks `if (p == NULL)` *after* dereferencing `p`, the compiler may reason that the dereference proves `p` is not null, and delete your check as dead code. Security-critical checks have been silently removed from real kernels this way. The behaviour is legal, the intent is speed, and the effect is that some programs change meaning when the optimizer is turned on.[^5] It is the strongest single argument for the languages of chapter 10 that define everything.
:::

## Linking

Compiling produces object files with holes: this file calls `printf`, whose address is not yet known. The **linker** resolves them into an executable. **Static** linking copies the library code in, producing a large self-contained file that will still run in ten years. **Dynamic** linking leaves a reference to be resolved at load time, so one copy of a library serves every program on the machine and a security fix updates all of them at once. The cost is the class of failures in which a program works on one machine and not another because a library moved, which is a large part of why containers (chapter 9) exist.

## Do compilers get it right?

Mostly, and not entirely. In 2011 a research group built a tool that generated random but well-defined C programs and compared what different compilers produced. It found and reported 325 bugs in production compilers, including in every commercial one tested — cases where correct source code was compiled into a program that did the wrong thing.[^6] The exercise measurably improved the compilers, and it is now standard practice.

The alternative to testing is proof. **CompCert** is a C compiler carrying a machine-checked proof, in the Coq proof assistant, that the machine code it emits behaves exactly as the source's semantics say it should. It is slower to compile and produces somewhat slower code than the aggressive optimizers, and the random-testing tool above found zero bugs in its verified core, which is the strongest evidence available that verification does what it claims.[^7] It is used in aviation and nuclear software, where the certification cost of the alternative is higher.

:::story Reflections on trusting trust
In his 1984 Turing Award lecture Ken Thompson described an attack. Modify a compiler so that when it compiles the login program, it silently inserts a backdoor. Anyone reading the login source sees nothing wrong. Then go further: also modify the compiler so that when it compiles *the compiler's own source*, it reinserts both modifications. Now remove the changes from the compiler source entirely. The source of the compiler and of login are both clean; every future compiler, built from clean source by the previous compiler, carries the backdoor; and no amount of source review will ever find it.

His conclusion was that you cannot trust code you did not write yourself, and cannot fully trust that either, since you did not write your compiler. The practical answer, developed decades later, is **reproducible builds** and **diverse double-compiling**: if independent parties compiling the same source with different compilers on different machines all produce byte-identical output, the attack becomes very hard to hide. Several major operating systems now build reproducibly for exactly this reason.[^8]
:::

## What we still argue about

Whether the freedom that undefined behaviour gives optimizers is worth the surprises, an argument that has grown sharper as the security consequences accumulated. Whether machine learning should choose the optimization heuristics, where early results are promising and the failure modes are unfamiliar. Whether verified compilation can be made competitive with aggressive optimization rather than a trade against it. And how to compile for hardware that is increasingly heterogeneous, where the target is not one instruction set but a processor, a vector unit, and an accelerator that must be scheduled together.

:::try Put the idea to work
Why can't a compiler always reorder two operations that look independent in a small excerpt of a program?

:::answer Show the reasoning
They may access overlapping memory, affect visible output, throw errors, or depend on shared state elsewhere. An optimization needs to preserve the language's observable behavior under its rules. Local appearance is not enough; the compiler must establish the relevant dependencies or use explicit assumptions.
:::
:::

## Summary

- A compiler lexes with a finite automaton, parses with a pushdown automaton into a syntax tree, checks types, optimizes, and generates code.
- Work happens on an intermediate representation, which turns $m \times n$ language-target pairs into $m + n$ pieces; static single assignment made optimization systematic.
- Inlining is the enabling optimization; register allocation is graph colouring, an NP-hard problem solved by good heuristics.
- Undefined behaviour lets optimizers assume errors never occur, which has silently deleted real security checks.
- Random testing found 325 bugs in production C compilers; CompCert's verified core had none, at some cost in compile time and code speed.
- Thompson's 1984 attack shows a compiler can hide a backdoor that appears in no source code; reproducible builds are the practical defence.

[^1]: Knuth, D. E. (1965). "On the translation of languages from left to right." *Information and Control*, 8(6), 607–639. [doi:10.1016/S0019-9958(65)90426-2](https://doi.org/10.1016/S0019-9958(65)90426-2). Aho, A. V., Lam, M. S., Sethi, R., Ullman, J. D. (2006). *Compilers: Principles, Techniques, and Tools*, 2nd ed. Boston: Addison-Wesley.
[^2]: Lattner, C., Adve, V. (2004). "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation." *International Symposium on Code Generation and Optimization*, 75–86. [doi:10.1109/CGO.2004.1281665](https://doi.org/10.1109/CGO.2004.1281665)
[^3]: Cytron, R. et al. (1991). "Efficiently computing static single assignment form and the control dependence graph." *ACM Transactions on Programming Languages and Systems*, 13(4), 451–490. [doi:10.1145/115372.115320](https://doi.org/10.1145/115372.115320)
[^4]: Chaitin, G. J. (1982). "Register allocation & spilling via graph coloring." *Proceedings of the SIGPLAN '82 Symposium on Compiler Construction*, 98–105. [doi:10.1145/800230.806984](https://doi.org/10.1145/800230.806984)
[^5]: Wang, X. et al. (2012). "Undefined behavior: what happened to my code?" *Proceedings of the Asia-Pacific Workshop on Systems (APSys '12)*, article 9. [doi:10.1145/2349896.2349905](https://doi.org/10.1145/2349896.2349905)
[^6]: Yang, X., Chen, Y., Eide, E., Regehr, J. (2011). "Finding and understanding bugs in C compilers." *PLDI '11*, 283–294. [doi:10.1145/1993498.1993532](https://doi.org/10.1145/1993498.1993532)
[^7]: Leroy, X. (2009). "Formal verification of a realistic compiler." *Communications of the ACM*, 52(7), 107–115. [doi:10.1145/1538788.1538814](https://doi.org/10.1145/1538788.1538814)
[^8]: Thompson, K. (1984). "Reflections on Trusting Trust." *Communications of the ACM*, 27(8), 761–763. [doi:10.1145/358198.358210](https://doi.org/10.1145/358198.358210). Wheeler, D. A. (2009). *Fully Countering Trusting Trust through Diverse Double-Compiling*. PhD thesis, George Mason University. [dwheeler.com](https://dwheeler.com/trusting-trust/). The Reproducible Builds project: [reproducible-builds.org](https://reproducible-builds.org/)
