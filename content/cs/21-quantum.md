---
title: Quantum Computing
subtitle: Not a machine that tries every answer at once. What a qubit really is, which problems actually get faster, and an honest account of where the hardware has got to.
part: V · The Edge
---

## What could a quantum computer do differently?

Chapter 5 said every model of computation tried so far computes the same set of functions. Quantum computing does not break that: it computes the same set. What it plausibly changes is the *cost* of some of them, which would matter enormously for chapter 18 and hardly at all for chapter 14.

## What a qubit is

A classical bit is 0 or 1. A **qubit** is described by two numbers, called **amplitudes**, one attached to the outcome 0 and one to the outcome 1.

:::math The state of a qubit
$$\lvert \psi \rangle = \alpha \lvert 0 \rangle + \beta \lvert 1 \rangle \qquad \text{with} \qquad \lvert\alpha\rvert^2 + \lvert\beta\rvert^2 = 1$$

$\lvert \psi \rangle$ (psi) is the state, written in the standard notation for quantum states. $\lvert 0 \rangle$ and $\lvert 1 \rangle$ are the two definite outcomes. $\alpha$ and $\beta$ (alpha and beta) are complex numbers — they have a size and a *phase*, an angle — and the phase is where all the power lives. When measured, the qubit gives 0 with probability $\lvert\alpha\rvert^2$ and 1 with probability $\lvert\beta\rvert^2$, which is why those must add to 1.

$n$ qubits are described by $2^n$ amplitudes. Fifty qubits need $2^{50}$, about a quadrillion complex numbers, which is why simulating them classically becomes impossible quickly. But a measurement of $n$ qubits yields only $n$ bits. The amplitudes are not readable data; they are the machinery.
:::

## The correction everyone needs

The popular description — "it tries all possibilities simultaneously" — is wrong in the way that matters. Yes, a register can be in a superposition of all $2^n$ inputs, and yes, you can apply a function to all of them at once. But measuring collapses it to *one* random outcome, so you get one answer chosen at random, which is no better than guessing.

The actual resource is **interference**. Amplitudes are numbers that can be negative, or complex, so contributions to a wrong answer can cancel while contributions to the right answer reinforce. A quantum algorithm is an arrangement of operations that makes the wrong answers destroy each other before you measure. This is a delicate and rare thing to arrange, which is precisely why we have so few quantum algorithms: after forty years, the list of problems with a proved large speedup is short.

**Entanglement** is the second ingredient: qubits whose states cannot be described separately, so that measuring one instantly constrains the other. It is a correlation stronger than anything classical, demonstrated experimentally beyond reasonable doubt, and it does not permit sending information faster than light.

## What actually gets faster

| Problem | Best classical | Quantum | Speedup |
|---|---|---|---|
| Factoring an integer | sub-exponential | polynomial (Shor) | **exponential** |
| Discrete logarithms | sub-exponential | polynomial (Shor) | **exponential** |
| Simulating quantum systems | exponential | polynomial | **exponential** |
| Unstructured search of $N$ items | $N$ | $\sqrt{N}$ (Grover) | quadratic, and proved optimal |
| NP-complete problems | exponential | not known to be efficient | none expected |
| Most everyday computing | — | — | none |

**Shor's algorithm** (1994) factors integers and computes discrete logarithms in polynomial time, which breaks the public-key cryptography of chapter 18. It works by turning factoring into a problem of finding the period of a function, and periods are exactly what interference is good at extracting.[^1]

**Grover's algorithm** (1996) searches an unstructured space of $N$ candidates in about $\sqrt{N}$ steps rather than $N$. That is real but modest: it takes $2^{128}$ down to $2^{64}$, which is why post-quantum guidance is to double symmetric key lengths rather than to panic. It is also proved optimal — no quantum algorithm can do unstructured search faster — which is the main technical reason to doubt that quantum machines will crack NP-complete problems.[^2]

**Simulating quantum systems** is the application Richard Feynman proposed the whole idea for in 1982, and it remains the most credible one: chemistry, catalysis, materials, and superconductivity are quantum problems that classical machines approximate expensively.[^3] If quantum computing pays off commercially, most physicists expect this rather than cryptography to be why.

The complexity class is **BQP**, what a quantum computer can do efficiently. It contains P, is believed not to contain NP, and is not believed to contain the NP-complete problems. Quantum computers are not general-purpose accelerators; they are specialized machines for a narrow and valuable set of structured problems.

## The hard part: errors

A qubit is destroyed by essentially any interaction with its environment. Real devices hold coherence for microseconds to milliseconds, and every operation introduces error at a rate around one in a thousand — compared with roughly one in $10^{17}$ for a classical logic gate.

Quantum error correction is harder than the classical kind of chapter 4 because you cannot copy an unknown quantum state (the **no-cloning theorem**) and cannot look at a qubit to check it without collapsing it. The resolution, worked out in the 1990s, is to spread one **logical qubit** across many **physical** ones and measure only joint properties that reveal errors without revealing the data. The **threshold theorem** then says: if the physical error rate is below some threshold, adding more physical qubits per logical qubit drives the logical error rate down as far as you like.

For the leading approach, the surface code, the threshold is around one error in a thousand operations — which is roughly where hardware now sits, and that is why the last few years have been a turning point.

:::frontier Where the hardware actually is, in 2026
**Below threshold, demonstrated.** In December 2024 Google's 105-qubit Willow chip showed that enlarging the error-correcting code *reduces* the logical error rate, roughly halving it at each step up in code size. That is the qualitative behaviour the whole field is built on, observed rather than assumed.[^4]

**Logical qubits are being counted in tens.** Neutral-atom and trapped-ion platforms have demonstrated tens of logical qubits and error-corrected operations on them; the current published records are in the dozens, against the thousands that useful applications require.

**A verifiable advantage claim.** In October 2025 Google reported in *Nature* an algorithm it calls Quantum Echoes, measuring an out-of-time-order correlator, run on Willow in about two hours and estimated to take roughly 13,000 times longer on a leading classical supercomputer. The significant word is *verifiable*: unlike the 2019 sampling experiment, whose output was a distribution that was hard to check and whose classical cost estimates were repeatedly cut by better simulation algorithms, this produces a physical quantity that another quantum computer can reproduce.[^5] The estimate is still an estimate, and the history of this field is that classical algorithms improve when challenged.

**Roadmaps.** IBM has published a path to a fault-tolerant machine of around 200 logical qubits by 2029, using codes that cut the physical-qubit overhead substantially, with intermediate processors along the way. Roadmaps are statements of intent, and this one has so far been met on schedule.

**What has not happened.** No quantum computer has yet solved a commercially valuable problem faster or cheaper than a classical machine. Nothing has been factored that mattered; the public demonstrations of factoring have used numbers small enough to do in your head, dressed up in various ways. Anyone claiming otherwise is selling something.
:::

## What it would take to break RSA

The most-watched number in the field is how big a machine would be needed to factor a 2,048-bit RSA key. In 2019 the estimate was about 20 million noisy physical qubits running for eight hours. In 2025 the same researcher brought it under a million qubits and under a week, through better arithmetic, cheaper idle storage, and cheaper preparation of the special states that error-corrected computation consumes.[^6]

Two conclusions follow, and they point in opposite directions. The requirement is falling fast, by a factor of twenty in six years, largely from algorithmic improvement rather than hardware. And a million physical qubits is still about three orders of magnitude beyond what exists. The honest position is that nobody credible predicts a cryptographically relevant machine this decade, and that the migration described in chapter 18 is nonetheless the right thing to be doing now, because data recorded today can be decrypted later.

## What we still do not know

Whether the engineering scales: every platform faces a different wall, from wiring and refrigeration in superconducting systems to laser control in atomic ones. Whether useful quantum advantage arrives first in simulation, optimization, or something unanticipated, and whether the optimization claims — the most heavily marketed — survive contact with better classical algorithms, which so far they mostly have not. Whether more algorithms with exponential speedups exist, or whether the shortness of the list after forty years is telling us something. And whether the error-correction overhead, currently on the order of a thousand physical qubits per logical one, can be cut enough to make the machines buildable at the required scale.

:::try Put the idea to work
A quantum computer has a state involving many basis states. Why can't you simply measure it and read every represented value at once?

:::answer Show the reasoning
Measurement returns a limited classical outcome, not a list of every amplitude. A useful algorithm arranges interference so that measurement is likely to reveal information about the desired answer. A large state space is a resource; extracting useful results from it requires an algorithm.
:::
:::

## Summary

- A qubit's state is two complex amplitudes; $n$ qubits need $2^n$ of them, but measurement yields only $n$ bits, so the amplitudes are machinery rather than readable data.
- Quantum computers do not try all answers at once; they arrange interference so wrong answers cancel, which is rare and hard, and explains the short list of algorithms.
- Shor's algorithm gives an exponential speedup for factoring and discrete logarithms, breaking deployed public-key cryptography; Grover gives only a quadratic one and is provably optimal.
- Quantum simulation of chemistry and materials is the most credible application; NP-complete problems are not expected to yield.
- Error correction spreads a logical qubit over many physical ones; below-threshold operation was demonstrated in 2024, and logical qubits are currently counted in tens against the thousands needed.
- A verifiable advantage was reported in 2025 at an estimated 13,000-fold over classical simulation; no quantum machine has yet done anything commercially useful faster than a classical one.
- Factoring RSA-2048 is now estimated at under a million noisy qubits, twenty times less than in 2019 and still about a thousand times more than exists.

[^1]: Shor, P. W. (1997). "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer." *SIAM Journal on Computing*, 26(5), 1484–1509. [doi:10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172). Nielsen, M. A., Chuang, I. L. (2010). *Quantum Computation and Quantum Information*, 10th anniversary ed. Cambridge University Press.
[^2]: Grover, L. K. (1996). "A fast quantum mechanical algorithm for database search." *STOC '96*, 212–219. [doi:10.1145/237814.237866](https://doi.org/10.1145/237814.237866). Bennett, C. H., Bernstein, E., Brassard, G., Vazirani, U. (1997). "Strengths and Weaknesses of Quantum Computing." *SIAM Journal on Computing*, 26(5), 1510–1523. [doi:10.1137/S0097539796300933](https://doi.org/10.1137/S0097539796300933)
[^3]: Feynman, R. P. (1982). "Simulating physics with computers." *International Journal of Theoretical Physics*, 21, 467–488. [doi:10.1007/BF02650179](https://doi.org/10.1007/BF02650179). Preskill, J. (2018). "Quantum Computing in the NISQ era and beyond." *Quantum*, 2, 79. [doi:10.22331/q-2018-08-06-79](https://doi.org/10.22331/q-2018-08-06-79)
[^4]: Google Quantum AI (2025). "Quantum error correction below the surface code threshold." *Nature*, 638, 920–926. [doi:10.1038/s41586-024-08449-y](https://doi.org/10.1038/s41586-024-08449-y)
[^5]: Google Quantum AI and collaborators (2025). "Observation of constructive interference at the edge of quantum ergodicity." *Nature*, published 22 October. [doi:10.1038/s41586-025-09526-6](https://doi.org/10.1038/s41586-025-09526-6). Google Research summary: [research.google](https://research.google/blog/a-verifiable-quantum-advantage/). On the contested 2019 claim: Arute, F. et al. (2019). "Quantum supremacy using a programmable superconducting processor." *Nature*, 574, 505–510. [doi:10.1038/s41586-019-1666-5](https://doi.org/10.1038/s41586-019-1666-5), and the subsequent classical-simulation results that reduced its estimated advantage.
[^6]: Gidney, C. (2025). "How to factor 2048 bit RSA integers with less than a million noisy qubits." [arXiv:2505.15917](https://arxiv.org/abs/2505.15917). Gidney, C., Ekerå, M. (2021). "How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits." *Quantum*, 5, 433. [doi:10.22331/q-2021-04-15-433](https://doi.org/10.22331/q-2021-04-15-433). IBM Quantum roadmap: [ibm.com/roadmaps/quantum](https://www.ibm.com/roadmaps/quantum)
