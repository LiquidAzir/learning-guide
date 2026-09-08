---
title: Start Here
subtitle: What physics actually is, why it works at all, and how to read this guide without getting lost.
part: I · Foundations
---

## The whole subject in one sentence

Physics is the attempt to find the smallest set of rules that explains the largest number of things.

That sounds modest. It is not. The same handful of rules that tell you why a dropped phone accelerates toward the floor also tell you why the Sun shines, why your GPS needs to correct for the warping of time, and why a hard drive can hold anything at all. Physics is arguably the most successful idea humans have ever had, and it is successful in a way nobody fully understands. In 1960 the physicist Eugene Wigner wrote a famous essay about this, calling it "the unreasonable effectiveness of mathematics in the natural sciences."[^1] Why should the universe obey equations a person can write on a napkin? Nobody knows. It just does.

:::key
Physics does not ask *why* the universe exists. It asks *how it behaves*, and then insists on checking the answer against reality. Established theories earn their place by surviving tests. Open proposals are marked as such, and the frontier chapters explain where evidence is still incomplete.
:::

## How physics actually makes progress

Here is the most important thing to understand before reading anything else: physics rarely proves old ideas *wrong*. It proves them *limited*.

Isaac Newton's laws of motion, written down in 1687, are still used to steer spacecraft today. They were never "overturned." What Albert Einstein showed in 1905 and 1915 was that Newton's laws are a superb approximation that quietly breaks down when things move near the speed of light or sit near enormous masses. Einstein's theory contains Newton's as a special case. In the same way, quantum mechanics contains ordinary mechanics as the special case of large objects. Physicists call this the **correspondence principle**: a new theory must reproduce the old one wherever the old one was already known to work.[^2]

So the history of physics is not a graveyard of mistakes. It is a series of ever-wider maps, each one including the previous map as a small region. This guide will keep showing you the edges of each map, because that is where the interesting things happen.

:::warning
"Theory" in everyday speech means a guess. In physics it means the opposite: a framework that has been tested so thoroughly that it organizes an entire field. The theory of gravity, quantum theory, and the theory of evolution are all "theories" in this second sense. A physicist's word for a guess is **hypothesis**.
:::

## The map of the territory

Modern physics rests on five great pillars, built in roughly this order. Each will get its own chapters.

| Pillar | What it explains | Built mostly by | Century |
|---|---|---|---|
| **Mechanics** | How things move when pushed, and gravity | Galileo, Newton | 1600s |
| **Thermodynamics and statistical mechanics** | Heat, energy, disorder, why time seems to run one way | Carnot, Clausius, Boltzmann, Maxwell | 1800s |
| **Electromagnetism** | Electricity, magnetism, and light as one phenomenon | Faraday, Maxwell | 1800s |
| **Relativity** | Space, time, and gravity at high speed and large mass | Einstein, Lorentz, Minkowski | 1905–1915 |
| **Quantum mechanics** | Everything small: atoms, light, chemistry, materials | Planck, Bohr, Heisenberg, Schrödinger, Dirac | 1900–1930 |

Two of these were later fused. Quantum mechanics plus special relativity became **quantum field theory**, the language of particle physics, which culminated in the **Standard Model** of the 1970s: our current best description of all known matter and three of the four forces. The fourth force, gravity, is described by general relativity, and it has so far refused to merge with quantum theory. That missing merger, **quantum gravity**, is the biggest open problem in the subject, and it sits at the end of this guide.

{{fig:map|How the pillars connect. Each arrow means "contains the earlier theory as a special case." The dashed link is the unsolved problem.}}

## The scales physics covers

Part of what makes the subject thrilling is its range. The table below is worth a slow read. Each row is several powers of ten bigger than the one above it.

| Scale | Size (meters) | What lives here |
|---|---|---|
| Planck length | $10^{-35}$ | Where our theories of space itself are expected to fail |
| Proton | $10^{-15}$ | Nuclear physics, quarks |
| Atom | $10^{-10}$ | Chemistry, quantum mechanics |
| Virus, transistor | $10^{-7}$ | Where quantum effects still matter for engineering |
| Human | $10^{0}$ | Newton's world |
| Earth | $10^{7}$ | Gravity, weather, geophysics |
| Sun to Earth | $10^{11}$ | Orbits, light taking 8 minutes to arrive |
| Milky Way | $10^{21}$ | Dark matter first noticed here |
| Observable universe | $10^{27}$ | Cosmology, dark energy, the Big Bang |

That is 62 powers of ten. Physics has a tested theory for almost all of it. The gaps, at the very top and very bottom of the table, are where research is happening now.

## Who does physics, and how

Physics splits into two overlapping crafts. **Theorists** build mathematical models and work out what they predict. **Experimentalists** design apparatus to test those predictions, and often find things nobody predicted. Neither is the "real" physics; the subject advances when the two argue productively. Some of the most famous names were both: Newton cast and polished his own telescope mirrors, Enrico Fermi built the first nuclear reactor and also did foundational theory.

Over the last century the work has also become collaborative on a scale that would astonish Newton. The 2012 discovery of the Higgs boson was announced in papers with roughly 3,000 authors each.[^3] The 2015 detection of gravitational waves involved about a thousand scientists.[^4] The chapter on people in this guide names the individuals whose ideas mattered most, but keep in mind that modern discoveries are made by crowds.

:::howto A useful first pass
Start with units and estimation in chapter 2, then try motion in chapter 3. Return to derivatives, fields, and complex numbers when a later chapter needs them.

At the end of a core chapter, try the question before opening “Show the reasoning” or “One way to reason it through.” Explain your answer in a sentence or work the calculation; then compare the reasoning, not just the result. Reading-time estimates exclude time spent practicing.
:::

## How to read this guide

Each chapter is built the same way, so you can settle into a rhythm.

- **Bold terms** are being defined right where they appear. If you forget one, the glossary chapter collects them all.
- Colored boxes mark seven kinds of interruption: a **key idea** you should not skim, a **story** from the history, a **math box** that shows the actual equation and explains every symbol, a **think about it** prompt, a **who did this** portrait, a **common confusion** to avoid, and a **where it stands today** note on what is unsettled.
- Key factual claims point to a numbered source at the bottom of the chapter. Where the original paper is free to read, the link goes to it.
- The math is real but never decorative. When an equation appears, it is because the idea is genuinely easier to grasp with it than without it. You do not need to compute anything; you need to read the equation as a sentence.

:::try
Before reading on, write down three things you believe about how the physical world works that you have never personally tested. (Examples: heavier objects fall faster. Nothing can be in two places at once. Time passes at the same rate for everyone.) By the end of this guide, each of those three will have been either confirmed or overturned by an experiment you can name.
:::

## A word about honesty

A guide like this has to make a choice. It can flatter you by leaving out the hard parts, or it can trust you with them. This one trusts you. Where physicists disagree, you will see the disagreement. Where a beautiful idea is unproven, it will be labeled unproven. Where a famous result was later retracted, it will say so. The "Latest research" section is maintained separately for exactly this reason: the frontier moves, and a static textbook cannot follow it.

One habit is worth adopting from the first page. Whenever a result is announced, ask two questions: how strong is the statistical evidence (chapter 2 explains the "five sigma" rule), and has anyone else reproduced it? Most physics headlines that later evaporate fail one of those two tests. Chapter 14 turns this into a checklist.

Read in order if you can. Each chapter assumes the previous ones, but each also opens with a short recap so you can dip in anywhere.

Let's begin with the tools.

[^1]: Wigner, E. P. (1960). "The Unreasonable Effectiveness of Mathematics in the Natural Sciences." *Communications on Pure and Applied Mathematics*, 13(1), 1–14. [doi:10.1002/cpa.3160130102](https://doi.org/10.1002/cpa.3160130102)
[^2]: Bohr, N. (1920). "Über die Serienspektra der Elemente." *Zeitschrift für Physik*, 2, 423–469. The correspondence principle was introduced here as a requirement that quantum results match classical ones for large quantum numbers. [doi:10.1007/BF01329978](https://doi.org/10.1007/BF01329978)
[^3]: ATLAS Collaboration (2012). "Observation of a new particle in the search for the Standard Model Higgs boson with the ATLAS detector at the LHC." *Physics Letters B*, 716(1), 1–29. [doi:10.1016/j.physletb.2012.08.020](https://doi.org/10.1016/j.physletb.2012.08.020); CMS Collaboration (2012). "Observation of a new boson at a mass of 125 GeV with the CMS experiment at the LHC." *Physics Letters B*, 716(1), 30–61. [doi:10.1016/j.physletb.2012.08.021](https://doi.org/10.1016/j.physletb.2012.08.021)
[^4]: Abbott, B. P. et al. (LIGO Scientific Collaboration and Virgo Collaboration) (2016). "Observation of Gravitational Waves from a Binary Black Hole Merger." *Physical Review Letters*, 116, 061102. [doi:10.1103/PhysRevLett.116.061102](https://doi.org/10.1103/PhysRevLett.116.061102)
