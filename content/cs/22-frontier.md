---
title: What Is Still Open
subtitle: The questions the field cannot answer, the physical limits it is approaching, and the parts of it that are being rebuilt right now.
part: V · The Edge
---

## Recap

Twenty-one chapters of settled material. This one collects what is not settled, separated into three kinds: mathematical questions nobody can answer, physical limits nobody can cross, and engineering transitions currently underway. The first kind may outlive everyone reading this; the third will look dated in five years, which is why it is dated explicitly.

## The mathematics

**P versus NP** (chapter 14) is the largest. Fifty-five years old, a million-dollar prize, and no proof in either direction; worse, three families of proof technique have themselves been proved incapable of settling it. What would count as progress is a genuinely new kind of argument, and nobody has one. A related and equally embarrassing gap: we cannot prove that any problem in NP requires more than about linear-sized circuits, which is nowhere near what would be needed.

**Time versus space** moved in 2025 for the first time in fifty years, when Ryan Williams showed that time $t$ can be simulated in about $\sqrt{t}$ space. Whether this can be pushed further, and whether it leads to separating P from PSPACE, is now an active question rather than a dormant one.

**How fast can you multiply matrices?** The exponent $\omega$ is the number such that multiplying two $n \times n$ matrices costs about $n^{\omega}$ operations. The schoolbook method gives 3; Strassen got 2.807 in 1969; the current record, set in August 2026 by a collaboration between the two research groups holding the previous records and DeepMind's AlphaEvolve system, is $\omega < 2.371177$.[^1] Nobody knows whether the true value is 2, which many suspect. Nor does it much matter in practice: every algorithm below about 2.77 has constant factors so large that no real computation uses them, a category the field calls **galactic**.

**Do one-way functions exist?** All of cryptography assumes there are functions easy to compute and hard to invert. Nobody has proved that even one exists; a proof would imply P ≠ NP. In 2020 Yanyi Liu and Rafael Pass showed the question is *equivalent* to a precise statement about the hardness of computing Kolmogorov complexity (chapter 4), which is the first characterization of this kind and a genuinely surprising bridge between two areas.[^2]

**Is randomness necessary?** Many problems have simple randomized algorithms and complicated deterministic ones. The prevailing belief is that randomness never helps asymptotically — that P = BPP — which is unusual in that most experts expect this equality while expecting P ≠ NP.

## The physics

Transistor scaling has slowed and the free lunch of chapter 8 ended in 2005. But there is a floor further down, and it is worth knowing where it is.

:::math The Landauer limit
Erasing one bit of information necessarily dissipates at least

$$E = k_B T \ln 2$$

$E$ is the minimum energy in joules. $k_B$ is Boltzmann's constant, $1.38 \times 10^{-23}$ joules per kelvin, which converts temperature into energy. $T$ is the absolute temperature in kelvin. $\ln 2$, about 0.693, is the natural logarithm of two, and appears because erasing a bit removes exactly one bit of entropy.

At room temperature, 300 kelvin, this is about $2.9 \times 10^{-21}$ joules per bit — three zeptojoules. A modern processor spends on the order of $10^{-15}$ joules on a simple operation, so we are roughly five to six orders of magnitude above the physical floor.

Landauer derived it in 1961 and it was measured experimentally in 2012. The escape hatch is that the limit applies only to *erasure*: a computation that never discards information can in principle be run at arbitrarily low energy, which is why reversible computing keeps being revisited. Quantum computation is reversible for exactly this reason.[^3]
:::

Five or six orders of magnitude sounds like a great deal of headroom, and at historical rates of improvement it is a few decades. What replaces plain shrinking, in the meantime: stacking chips in three dimensions and bonding them face to face; splitting a design into **chiplets** so that each piece can use the process that suits it; moving computation into the memory to avoid paying for the data movement, which now dominates the energy budget; optical interconnects; and specialized accelerators, which buy one or two orders of magnitude for one job at a time. Analogue and in-memory approaches, which compute with physical quantities rather than switching, promise more and have repeatedly failed to survive the requirements of precision and programmability.

The binding constraint above all of these is electricity. Data centres used roughly 415 terawatt-hours in 2024, about 1.5 percent of world consumption, and the projections diverge wildly depending on assumptions about efficiency gains that have historically been large.[^4]

## The engineering, as of 2026

**Memory safety migration.** Roughly 70 percent of severe vulnerabilities at large vendors come from memory errors in C and C++ (chapters 10 and 18). Rust became a permanent part of the Linux kernel in December 2025, safety-critical industries are writing new components in memory-safe languages, and national agencies have published timelines. The open question is not whether new code should be memory-safe but what to do about the billions of existing lines, where rewriting is infeasible and hardware-assisted protection is the main hope.

**Post-quantum cryptography.** Standards landed in 2024 and 2025, hybrid key agreement now covers more than half of the human web traffic at one large network, and signatures and long-lived infrastructure are the harder remaining half (chapter 18).

**Verification going mainstream, slowly.** seL4 and CompCert proved it is possible; specification-level tools have found real design bugs in production distributed protocols. The obstacle is cost, and the current interesting question is whether AI-assisted proof brings that cost down enough to change the economics.

**AI and the field itself.** Three distinct things are happening and are frequently confused. Machines are finding *small* algorithmic improvements: shorter sorting routines merged into standard libraries, better constants, the matrix multiplication record above. Machines are drafting a large share of production code, with evidence on productivity that is genuinely mixed (chapter 20). And machines are being used as proof and search assistants in mathematics. None of these has yet produced a conceptual advance of the kind humans produced in the shortest-path result of chapter 13, and whether they will is the most consequential open question about the practice of the field, as opposed to its content.

**Centralization.** The internet was designed so that no part was essential (chapter 17). A handful of cloud providers, content networks, resolvers, and certificate authorities now sit in front of most of it, and the outages of the past few years have repeatedly been single-provider failures with continent-wide effects. There is no technical obstacle to decentralization and a large economic one.

## The questions this guide could not answer

Reading back over twenty-two chapters, these are the places where the honest answer was "nobody knows."

- Whether finding is fundamentally harder than checking (chapter 14).
- Whether the Church–Turing thesis is a fact about physics or only about mathematics (chapter 5).
- Where between 6 and 748 the busy beaver function leaves the reach of standard mathematics (chapter 6).
- Whether speculation in processors can be made both fast and safe (chapter 8).
- Whether static types repay their cost, after fifty years of argument without decisive evidence (chapter 10).
- Whether useful quantum advantage arrives in this decade, and in which application (chapter 21).
- How much of software's failure rate is essential and how much is accidental (chapter 20).

That list is a fair summary of the field's edge. It is shorter than the list of things that were open in 1980, and the items on it are harder.

## Summary

- P versus NP remains open with all known proof techniques ruled out; we cannot even prove superlinear circuit lower bounds for NP problems.
- Time versus space moved in 2025 for the first time since 1975; the matrix multiplication exponent moved in 2026 to below 2.371177, with machine assistance, and remains far from the suspected value of 2.
- Whether one-way functions exist is unproved and is now known to be equivalent to a statement about Kolmogorov complexity.
- The Landauer limit puts a floor of about $3 \times 10^{-21}$ joules on erasing a bit; current hardware is five to six orders of magnitude above it, and only reversible computation escapes the bound.
- Current transitions: memory-safe languages, post-quantum cryptography, wider verification, machine-assisted algorithm discovery, and an uncomfortable degree of centralization in an architecture designed to avoid it.

[^1]: Dupont, E. et al. (2026). "Improving the matrix multiplication exponent with modern optimization and AlphaEvolve." [arXiv:2608.16884](https://arxiv.org/abs/2608.16884). It improves the previous bound of 2.371339. Strassen, V. (1969). "Gaussian elimination is not optimal." *Numerische Mathematik*, 13, 354–356. [doi:10.1007/BF02165411](https://doi.org/10.1007/BF02165411)
[^2]: Liu, Y., Pass, R. (2020). "On One-way Functions and Kolmogorov Complexity." *61st IEEE Symposium on Foundations of Computer Science (FOCS)*, 1243–1254. [doi:10.1109/FOCS46700.2020.00118](https://doi.org/10.1109/FOCS46700.2020.00118). Impagliazzo, R. (1995). "A personal view of average-case complexity." *Structure in Complexity Theory*, 134–147. [doi:10.1109/SCT.1995.514853](https://doi.org/10.1109/SCT.1995.514853)
[^3]: Landauer, R. (1961). "Irreversibility and Heat Generation in the Computing Process." *IBM Journal of Research and Development*, 5(3), 183–191. [doi:10.1147/rd.53.0183](https://doi.org/10.1147/rd.53.0183). Bérut, A. et al. (2012). "Experimental verification of Landauer's principle linking information and thermodynamics." *Nature*, 483, 187–189. [doi:10.1038/nature10872](https://doi.org/10.1038/nature10872). Bennett, C. H. (1973). "Logical Reversibility of Computation." *IBM Journal of Research and Development*, 17(6), 525–532. [doi:10.1147/rd.176.0525](https://doi.org/10.1147/rd.176.0525)
[^4]: International Energy Agency (2025). *Energy and AI*. [iea.org](https://www.iea.org/reports/energy-and-ai). Masanet, E. et al. (2020). "Recalibrating global data center energy-use estimates." *Science*, 367(6481), 984–986. [doi:10.1126/science.aba3758](https://doi.org/10.1126/science.aba3758), which found that a period of large predicted growth had been almost entirely offset by efficiency improvements.
