---
title: The Frontier
subtitle: What happened after 1800, what is still unsolved, what was solved recently, and what artificial intelligence is actually doing to mathematics, without the hype in either direction.
part: VI · The Edge
---

## Recap

Chapter 3 stopped at 1700 with the tools in hand. This chapter tells, briefly, what the last two centuries did with them, then walks the edge: the great open problems, the recent breakthroughs, the changing nature of proof, and the arrival of machines that prove theorems. The Latest Research section, reachable from the subject's front page, tracks the specific results.

## 1800 to now, in six moves

**Rigor (1820–1900).** Cauchy, Weierstrass, and Dedekind rebuilt calculus on precise definitions of limit and real number, answering Berkeley's objection of chapter 7 after a century. Cantor discovered that infinite sets come in different sizes. Mathematics turned inward to examine its own foundations, and the examination found them shakier than anyone had assumed.

**Abstraction (1830–1930).** Galois, at twenty, showed that whether a polynomial equation can be solved by a formula depends on the *symmetries* of its roots, and invented **group theory**, the mathematics of symmetry, to say so; the quintic, unlike the cubic and quartic of chapter 3, has no formula, and his theory explains why.[^1] Groups, rings, fields, and vector spaces became objects of study in their own right, and by 1930 Emmy Noether and her school had rebuilt algebra around them. Her theorem connecting symmetries to conservation laws is the backbone of modern physics.[^2]

**Geometry unbound (1820–1920).** Non-Euclidean geometry (chapter 5) and Riemann's curved spaces led to topology, the study of properties unchanged by stretching, and gave Einstein the mathematics of general relativity. Poincaré founded topology and asked, in 1904, whether every closed three-dimensional space without holes is a sphere; the question took a century.

**Foundations and their limits (1900–1940).** Hilbert's program to secure all of mathematics met Gödel's incompleteness and Turing's undecidability (chapter 12). The byproduct was the computer.

**The computer (1945–).** Machines did the arithmetic, then the algebra, then began to check proofs. The four color theorem (1976) and the Kepler conjecture (1998, formally verified 2014) were proved with computer assistance too large for a human to check by hand, forcing the question of what a proof is for.

**Unification (1960–).** Grothendieck rebuilt algebraic geometry from the ground up; the Langlands program, proposed in 1967, conjectured deep bridges between number theory and analysis; Wiles's proof of Fermat's Last Theorem in 1995 was a piece of it; and in 2024 the geometric version was proved in a thousand pages by a team of nine.[^3] Modern mathematics is increasingly a web of correspondences between fields that looked unrelated.

## The great open problems

In 1900 David Hilbert listed 23 problems that shaped the century; in 2000 the Clay Mathematics Institute offered a million dollars for each of seven **Millennium Prize Problems**.[^4] One has been solved. The others, in rough order of how easy they are to state:

**The Riemann Hypothesis** (chapter 13): do all the nontrivial zeros of the zeta function lie on one line? If yes, the primes are as orderly as possible. The most important open problem in mathematics, unproved since 1859.

**P versus NP** (chapter 12): if a solution to a problem can be *checked* quickly, can it always be *found* quickly? Almost everyone believes not, because if so, every code could be broken and every optimization solved; nobody can prove it. It is the central question of computer science, formulated in 1971.[^5]

**Navier–Stokes existence and smoothness**: do the equations that describe fluid flow always have smooth solutions, or can a fluid, mathematically, develop infinite velocity in finite time? Engineers solve the equations numerically every day; whether they always make sense is unknown. A 2025 preprint derived them rigorously from the motion of colliding particles, resolving a version of Hilbert's sixth problem (Latest Research).

**The Birch and Swinnerton-Dyer conjecture** and **the Hodge conjecture** concern the deep structure of equations and shapes and cannot be stated without a chapter of definitions. **Yang–Mills existence and mass gap** asks for a rigorous foundation for the quantum field theory that describes the strong nuclear force.

**The Poincaré conjecture** was proved by Grigori Perelman in three papers posted online in 2002 and 2003, without journal submission. He was awarded the Fields Medal in 2006 and the Clay prize in 2010, and declined both.[^6]

Beyond the seven: the **twin prime** and **Goldbach** conjectures (chapter 13); whether there are infinitely many **Mersenne primes**; the **Collatz problem**; and whether **odd perfect numbers** exist, a question open since Euclid.

## Recent breakthroughs

Mathematics has had a remarkable decade, and a few results stand for the whole.

**The einstein.** Whether a single shape exists that tiles the plane but only without ever repeating was open for sixty years. In late 2022 David Smith, a retired print technician in Yorkshire experimenting with shapes as a hobby, found a 13-sided "hat" that does it, and in 2023 three mathematicians proved it.[^7] The discovery needed no advanced machinery, only persistence and a good eye, and it is a reminder that the frontier is not always far away.

**Sphere packing.** How densely can identical spheres be packed? In three dimensions the grocer's pyramid is best, proved by Hales in 1998 with 250 pages and thousands of computer hours. In 2016 Maryna Viazovska solved the problem in dimension 8, and with collaborators dimension 24, in a proof of 23 pages of unexpected elegance; she received the Fields Medal in 2022.[^8]

**Additive combinatorics.** How large can a set of numbers be without containing three evenly spaced ones? Kelley and Meka's 2023 answer was so much better than the previous best that it settled a question from 1936 in something close to its final form. The same year Gowers, Green, Manners, and Tao proved Marton's conjecture, the central problem of the field, and within three weeks a volunteer team had verified the entire proof in the Lean proof assistant, the first time a new research result was machine-checked as soon as it appeared.[^9]

**Ramsey numbers.** How large a party guarantees either $k$ mutual friends or $k$ mutual strangers? The upper bound of $4^k$ had stood since 1935; in 2023 Campos, Griffiths, Morris, and Sahasrabudhe reduced the base for the first time.[^10]

**The Kakeya conjecture.** A needle can be turned to point in every direction within a region of zero area; the conjecture says such regions cannot be "thin" in a subtler sense. Hong Wang and Joshua Zahl proved the three-dimensional case in 2025, and Wang received the 2026 Fields Medal.[^11]

**The fifth Busy Beaver.** How long can a five-state Turing machine run before halting? An online collaboration of hobbyists and researchers proved in 2024 that the answer is 47,176,870 steps, checking 180 million machines with the proof verified in Coq. The sixth value is known to exceed a number too large to write in ordinary notation and is probably beyond reach forever.[^12]

## What a proof is becoming

Two developments are changing what it means to have proved something.

**Formalization.** A **proof assistant** is software that checks every step of a proof against the axioms, admitting no gaps and no appeals to intuition. The Lean system and its shared library, mathlib, now contain over a million lines of verified mathematics covering most of an undergraduate degree and increasing amounts of research. Peter Scholze, a Fields medalist, asked the Lean community in 2020 to verify a theorem of his because he was not sure of his own proof; they did, in eighteen months, and found no error but also found the argument could be simplified.[^13] Formalization does not replace understanding; it replaces *trust*. A formal proof cannot be wrong in the way that Wiles's first proof was, or the way that some published proofs turn out to be years later.

**Collaboration at scale.** Terence Tao's Equational Theories Project (2024–25) settled 22 million implications between algebraic laws, every one machine-verified, through an open online collaboration of dozens of people who mostly never met.[^14] The Busy Beaver project worked the same way. Mathematics done by strangers on the internet, with a computer as referee, is a new mode of the subject.

## Artificial intelligence and mathematics

This is the question of the decade, and it deserves a careful answer, because both the enthusiasts and the skeptics have overstated their case.

**What has happened.** In July 2024 two DeepMind systems, one of them writing proofs in Lean, solved four of six problems from the International Mathematical Olympiad, the world's hardest high-school competition, at the level of a silver medal, though with human help translating the problems and with days rather than hours on some of them.[^15] In July 2025 a version of Google's Gemini, working in ordinary English with no formal system and no human translation, scored a gold-medal 35 of 42 within the time limit, graded by the competition's own coordinators; OpenAI reported the same score for an unreleased model, graded less officially.[^16] Separately, DeepMind's FunSearch (2023) and AlphaEvolve (2025) used language models to search for constructions and algorithms, finding new record-size cap sets and, in 2025, a way to multiply 4 by 4 matrices in 48 multiplications rather than the 49 that had stood since 1969.[^17] In January 2026 a problem from Paul Erdős's list of open questions was resolved by an AI system with the proof machine-verified, the first such case accepted as genuine.[^18]

**What has not.** Olympiad problems have known answers and are designed to be solvable in hours; research problems have neither property. The FrontierMath benchmark of research-level problems, on which the best models scored under 2 percent at launch in late 2024, had by summer 2026 seen scores of roughly 80 percent on its hardest tier, but with the caveats that the tier has only about fifty problems, so a handful swing the score several points; that the benchmark's funder had access to most of its problems; that more than a hundred problems were found to contain errors and had to be corrected; and that answering a set problem is not the same as finding a problem worth answering.[^19] The first announcements that AI had "solved" open Erdős problems, in late 2025, turned out to be cases where the model had found existing solutions in old papers the problem list had missed, and a systematic sweep by Google researchers found that most "open" problems their system cracked had in fact been solved in obscure papers.[^18] Then the results got harder to dismiss. In May 2026 an OpenAI reasoning model disproved Erdős's unit-distance conjecture, a question from 1946 about how many pairs of points among $n$ can be exactly one unit apart, by constructing arrangements that beat the conjectured limit using tools from algebraic number theory; Timothy Gowers, a Fields medalist, called it "a milestone in AI mathematics," and by August several dozen Erdős problems had fallen to AI systems.[^21] Caveats remain. None of the famous named problems has fallen. Each result consumed enormous computation. Several AI proofs were found to have fixable gaps when humans read them, and many are never read by a human at all. And Tao's assessment has moved from "lowest-hanging fruit" to "problems a strong graduate student might solve given time," which is a real change and not yet a revolution.

**What it means.** The honest summary in September 2026 is that AI has become a genuine collaborator on well-posed problems: it can search literature, check proofs, propose constructions, and now resolve open questions of moderate depth, and formal verification means its outputs can be trusted where they can be checked. Whether it will ever do the thing mathematicians most value, seeing that a question is worth asking and finding the idea that answers it, is unknown, and the people best placed to judge are divided. What is not in doubt is that the combination of language models and proof assistants has changed the daily practice of the subject faster than anything since the computer, and that the change is continuing.[^20]

:::frontier
Three things to watch. Whether an AI system contributes an idea, not just a verification or a search result, to a proof that mathematicians consider significant. Whether formal verification becomes standard for publication, as some journals are beginning to require for computer-assisted results. And whether the open problems that have resisted a century of human effort, above all the Riemann Hypothesis, are the kind of problem that more computation helps with, or the kind that needs a new idea from somewhere nobody has thought to look. The Latest Research section marks each claim confirmed, preliminary, or disputed as the field sorts it out.
:::

## How to read a mathematics headline

1. **"Solved" by whom, and checked by whom?** A preprint is a claim; a peer-reviewed or formally verified proof is a result. Perelman's proof took four years to confirm; Wiles's had a gap; announced proofs of the Riemann Hypothesis appear yearly and are wrong.
2. **"AI proves" what?** A competition problem with a known answer, a rediscovered result, or something new? Was a human in the loop? Was it formally verified?
3. **Is the result an improvement in a bound or a resolution?** "Progress on" a problem usually means a slightly better bound, which can be deep or routine.
4. **Is "useless" mathematics being called useless?** Number theory was useless for two thousand years and now runs the internet. The record of predicting which mathematics will matter is poor in both directions.

## Summary

- The nineteenth century made mathematics rigorous and abstract; the twentieth found the limits of proof and built the computer from them; the present is unifying fields and checking proofs by machine.
- Six Millennium Prize problems remain open, led by the Riemann Hypothesis and P versus NP; the Poincaré conjecture was solved in 2003.
- The last decade has settled the einstein tile, sphere packing in 8 and 24 dimensions, Marton's conjecture, the first Ramsey improvement in 90 years, the Kakeya conjecture in three dimensions, and the fifth Busy Beaver number.
- Proof assistants and large online collaborations are changing what it means to prove something, replacing trust with verification.
- AI systems reached Olympiad gold in 2025, and in 2026 resolved dozens of Erdős problems including the unit-distance conjecture, with proofs machine-checked; none of the famous named problems has fallen, and every result so far is one specialists judge within reach of a strong graduate student. Both the hype and the dismissal are premature.

[^1]: Galois, É. (1846). "Mémoire sur les conditions de résolubilité des équations par radicaux." *Journal de Mathématiques Pures et Appliquées*, 11, 417–433 (written 1831). Stewart, I. (2015). *Galois Theory*, 4th ed. Boca Raton: CRC Press.
[^2]: Noether, E. (1918). "Invariante Variationsprobleme." *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen*, 235–257. English translation: [arxiv.org/abs/physics/0503066](https://arxiv.org/abs/physics/0503066). Kosmann-Schwarzbach, Y. (2011). *The Noether Theorems*. New York: Springer.
[^3]: Gaitsgory, D., Raskin, S. (2024). "Proof of the geometric Langlands conjecture I: construction of the functor." [arxiv.org/abs/2405.03599](https://arxiv.org/abs/2405.03599). Wiles, A. (1995). "Modular elliptic curves and Fermat's Last Theorem." *Annals of Mathematics*, 141(3), 443–551. [doi:10.2307/2118559](https://doi.org/10.2307/2118559)
[^4]: Clay Mathematics Institute. *The Millennium Prize Problems*. [claymath.org/millennium-problems](https://www.claymath.org/millennium-problems/). Hilbert, D. (1902). "Mathematical Problems." *Bulletin of the American Mathematical Society*, 8(10), 437–479. [doi:10.1090/S0002-9904-1902-00923-3](https://doi.org/10.1090/S0002-9904-1902-00923-3)
[^5]: Cook, S. A. (1971). "The complexity of theorem-proving procedures." *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, 151–158. [doi:10.1145/800157.805047](https://doi.org/10.1145/800157.805047). Fortnow, L. (2013). *The Golden Ticket: P, NP, and the Search for the Impossible*. Princeton University Press.
[^6]: Perelman, G. (2002). "The entropy formula for the Ricci flow and its geometric applications." [arxiv.org/abs/math/0211159](https://arxiv.org/abs/math/0211159). Clay Mathematics Institute (2010). "First Clay Mathematics Institute Millennium Prize Announced." [claymath.org](https://www.claymath.org/millennium/poincare-conjecture/)
[^7]: Smith, D., Myers, J. S., Kaplan, C. S., Goodman-Strauss, C. (2024). "An aperiodic monotile." *Combinatorial Theory*, 4(1). [doi:10.5070/C64163843](https://doi.org/10.5070/C64163843)
[^8]: Viazovska, M. (2017). "The sphere packing problem in dimension 8." *Annals of Mathematics*, 185(3), 991–1015. [doi:10.4007/annals.2017.185.3.7](https://doi.org/10.4007/annals.2017.185.3.7). Cohn, H., Kumar, A., Miller, S. D., Radchenko, D., Viazovska, M. (2017). "The sphere packing problem in dimension 24." *Annals of Mathematics*, 185(3), 1017–1033. [doi:10.4007/annals.2017.185.3.8](https://doi.org/10.4007/annals.2017.185.3.8)
[^9]: Kelley, Z., Meka, R. (2023). "Strong Bounds for 3-Progressions." *FOCS 2023*. [arxiv.org/abs/2302.05537](https://arxiv.org/abs/2302.05537). Gowers, W. T., Green, B., Manners, F., Tao, T. (2025). "On a conjecture of Marton." *Annals of Mathematics*, 201(2). [doi:10.4007/annals.2025.201.2.5](https://doi.org/10.4007/annals.2025.201.2.5). Formalization: [github.com/teorth/pfr](https://github.com/teorth/pfr)
[^10]: Campos, M., Griffiths, S., Morris, R., Sahasrabudhe, J. (2026). "An exponential improvement for diagonal Ramsey." *Annals of Mathematics*, 203(3). [doi:10.4007/annals.2026.203.3.4](https://doi.org/10.4007/annals.2026.203.3.4)
[^11]: Wang, H., Zahl, J. (2025). "Volume estimates for unions of convex sets, and the Kakeya set conjecture in three dimensions." [arxiv.org/abs/2502.17655](https://arxiv.org/abs/2502.17655). International Mathematical Union. *Fields Medals 2026*. [mathunion.org](https://www.mathunion.org/imu-awards/fields-medal/fields-medals-2026)
[^12]: The bbchallenge Collaboration (2025). "Determination of the fifth Busy Beaver value." [arxiv.org/abs/2509.12337](https://arxiv.org/abs/2509.12337). Announcement, 2 July 2024: [discuss.bbchallenge.org](https://discuss.bbchallenge.org/t/july-2nd-2024-we-have-proved-bb-5-47-176-870/237)
[^13]: Commelin, J. (2022). "Completion of the Liquid Tensor Experiment." Lean community blog, 14 July 2022. [leanprover-community.github.io](https://leanprover-community.github.io/blog/posts/lte-final/). Scholze, P. (2021). "Half a year of the Liquid Tensor Experiment: Amazing developments." Xena blog, 5 June 2021. [xenaproject.wordpress.com](https://xenaproject.wordpress.com/2021/06/05/half-a-year-of-the-liquid-tensor-experiment-amazing-developments/)
[^14]: Bolan, M., Breitner, J., et al. (2025). "The Equational Theories Project: Advancing Collaborative Mathematical Research at Scale." [arxiv.org/abs/2512.07087](https://arxiv.org/abs/2512.07087)
[^15]: Google DeepMind (2024). "AI achieves silver-medal standard solving International Mathematical Olympiad problems." 25 July 2024. [deepmind.google](https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/). Hubert, T., Mehta, R., Sartran, L. et al. (2025). "Olympiad-level formal mathematical reasoning with reinforcement learning." *Nature*. [doi:10.1038/s41586-025-09833-y](https://doi.org/10.1038/s41586-025-09833-y)
[^16]: Google DeepMind (2025). "Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad." 21 July 2025. [deepmind.google](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)
[^17]: Romera-Paredes, B. et al. (2024). "Mathematical discoveries from program search with large language models." *Nature*, 625, 468–475. [doi:10.1038/s41586-023-06924-6](https://doi.org/10.1038/s41586-023-06924-6). Novikov, A. et al. (2025). "AlphaEvolve: A coding agent for scientific and algorithmic discovery." [arxiv.org/abs/2506.13131](https://arxiv.org/abs/2506.13131)
[^18]: Sothanaphan, N. (2026). "Resolution of Erdős Problem #728: a writeup of Aristotle's Lean proof." [arxiv.org/abs/2601.07421](https://arxiv.org/abs/2601.07421). Tao, T. et al. *AI contributions to Erdős problems*, GitHub wiki. [github.com/teorth/erdosproblems/wiki](https://github.com/teorth/erdosproblems/wiki/AI-contributions-to-Erd%C5%91s-problems)
[^19]: Glazer, E. et al. (2024). "FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI." [arxiv.org/abs/2411.04872](https://arxiv.org/abs/2411.04872). Epoch AI. *FrontierMath benchmark hub*. [epoch.ai/frontiermath](https://epoch.ai/frontiermath)
[^20]: Tao, T. (2025). "Machine-Assisted Proof." *Notices of the American Mathematical Society*, 72(1), 6–13. [doi:10.1090/noti3041](https://doi.org/10.1090/noti3041). Avigad, J. (2024). "Mathematics and the formal turn." *Bulletin of the American Mathematical Society*, 61(2), 225–240. [doi:10.1090/bull/1832](https://doi.org/10.1090/bull/1832)
[^21]: OpenAI (2026). "An OpenAI model has disproved a central conjecture in discrete geometry." 20 May 2026. [openai.com](https://openai.com/index/model-disproves-discrete-geometry-conjecture/). Klarreich, E. (2026). "Why the Legendary Erdős Problems Are Falling to AI." *Quanta Magazine*, 3 August 2026. [quantamagazine.org](https://www.quantamagazine.org/why-the-legendary-erdos-problems-are-falling-to-ai-20260803/). The construction as a preprint: "An explicit lower bound for the unit distance problem." [arxiv.org/abs/2605.20579](https://arxiv.org/abs/2605.20579)
