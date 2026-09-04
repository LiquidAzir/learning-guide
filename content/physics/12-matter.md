---
title: Matter in Bulk
subtitle: Why a trillion trillion atoms together do things no single atom can, and why most physicists work here.
part: IV · Building Everything
---

## Recap

The Standard Model is the bottom of the ladder. But knowing the rules for one electron tells you surprisingly little about why copper conducts, glass is transparent, magnets stick, or a chip computes. Those are questions about matter in bulk, the field called **condensed matter physics**. By most counts it is the largest branch of physics, and it produces most of the technology you touch.[^21]

## More is different

In 1972 Philip Anderson published a short essay with that title.[^1] His argument: knowing the fundamental laws does not let you predict, or even easily understand, what large collections of particles do. At each level of size, new properties appear that are not present in the parts. A single water molecule is not wet. A single iron atom is not magnetic in the way a bar magnet is. A single copper atom does not conduct. **Emergence** is the word for this: collective behavior with its own laws, which are just as real and just as much "physics" as the Standard Model.

Anderson was pushing back against the idea that particle physics is the only fundamental physics and everything else is engineering. The subject has largely agreed with him. Some of the deepest ideas in modern physics, including the Higgs mechanism, came from thinking about metals and magnets first.

## Why solids are solid

Start with the simplest question. Why does matter have a definite size at all? Electrons are attracted to nuclei; why don't atoms shrink to nothing?

Two quantum facts prevent it. The **uncertainty principle** says confining an electron to a smaller region gives it more momentum and therefore more kinetic energy; squeezing costs energy. The **Pauli exclusion principle** says two electrons cannot occupy the same state, so in a solid with $10^{23}$ electrons, they must stack into progressively higher energy levels, like water filling a tank. The pressure this creates, called **degeneracy pressure**, is what holds your chair up. It is also what holds up a **white dwarf**, the collapsed core of a dead star, against gravity, until the star's mass exceeds about 1.4 Suns, the **Chandrasekhar limit**, at which point even degeneracy pressure fails and the star collapses further into a neutron star or black hole.[^2]

## Bands: conductors, insulators, and the invention of the transistor

In an isolated atom, electrons occupy sharp energy levels, Bohr's ladder. In a crystal with $10^{23}$ atoms packed close together, the levels smear into **bands**: ranges of allowed energies separated by **gaps** where no electron can be. This **band theory**, worked out by Felix Bloch and others around 1930, explains at a stroke the difference between the three kinds of solid.[^3]

- In a **metal**, the highest occupied band is only partly full. Electrons near the top can be nudged into slightly higher states by a tiny voltage, so they flow. Copper conducts.
- In an **insulator**, the highest occupied band is completely full and the next empty band is far above it, across a gap of several electron-volts. No available states, no flow. Glass does not conduct, and because visible light photons carry less energy than the gap, they cannot be absorbed, which is why glass is transparent.
- In a **semiconductor** such as silicon, the gap is small, about 1 eV. A few electrons hop across at room temperature, and, crucially, you can tune the conductivity enormously by adding trace impurities (**doping**) or applying a voltage.

That last property is the basis of the **transistor**, first built at Bell Labs in December 1947 by John Bardeen and Walter Brattain on a sliver of germanium, and redesigned by William Shockley the next year as a sandwich of doped semiconductor in which a small voltage on the middle layer controls a large current through the outer ones: an electrical switch with no moving parts.[^4] Silicon took over in the 1950s. Every chip is billions of transistors. The one in your phone contains more of them than there are people on Earth, each one a direct application of band theory and the Pauli principle.

## Phases and the idea of broken symmetry

Water is one substance in three forms: gas, liquid, solid. A **phase** is a state of matter with distinct collective properties, and a **phase transition** is the abrupt change between them. The fact that the change is abrupt is itself remarkable. Nothing about a single water molecule changes at 0 °C; only the collective arrangement does.

Lev Landau in the 1930s found the unifying idea.[^5] A phase transition typically involves **spontaneous symmetry breaking**: the laws are symmetric, but the state the system settles into is not. Liquid water looks the same in every direction; ice, a crystal, has preferred directions. The rules did not pick those directions; the system did, randomly, as it froze. A pencil balanced on its tip is symmetric; when it falls, it must fall *some* direction, and the symmetry is broken by the outcome, not the laws.

The same idea explains magnetism. Above about 770 °C, the atomic magnets in iron point every which way and cancel. Below, they spontaneously align, picking a direction. And the same idea, transplanted to particle physics, is exactly the Higgs mechanism: the laws of the Standard Model have a symmetry that the vacuum state breaks. Anderson had described the mechanism for superconductors in 1963, a year before Higgs.[^6] More is different, and sometimes more is *first*.

## Superconductivity

In 1911 Heike Kamerlingh Onnes cooled mercury to 4 kelvin and found its electrical resistance vanished, not to a small value but to exactly zero.[^7] A current started in a superconducting ring flows forever. Superconductors also expel magnetic fields entirely (the **Meissner effect**), which is why a magnet floats above one.

Explaining it took 46 years. The **BCS theory** of Bardeen, Leon Cooper, and Robert Schrieffer (1957) showed that at low temperature, electrons, which repel each other, can be very weakly bound into pairs by their interaction with the vibrating crystal lattice.[^8] These **Cooper pairs** are bosons, not fermions, so they escape the Pauli principle and condense into a single collective quantum state that fills the whole material. Scattering one electron would mean disturbing the entire condensate at once, which costs more energy than is available, so nothing scatters and resistance is zero. The whole wire behaves as one quantum object. This is where the 2025 Nobel Prize connects: a superconducting circuit is a macroscopic system in a single quantum state, and can therefore tunnel and show discrete energy levels like an atom.[^9]

BCS superconductors only work below about 30 K, requiring liquid helium. In 1986 Georg Bednorz and Alex Müller found a copper-oxide ceramic superconducting at 35 K, and within a year others pushed the record past 77 K, the boiling point of cheap liquid nitrogen.[^10] These **high-temperature superconductors** are used in demonstration power cables, record-breaking research magnets, and the magnets of a new generation of compact fusion reactors; ordinary MRI machines, though, still use conventional niobium alloys cooled by liquid helium. Their mechanism, after almost forty years, is still not fully understood; BCS theory does not explain them.

:::warning
Room-temperature superconductivity at ordinary pressure has never been achieved, despite headlines. A 2023 claim from the University of Rochester was retracted after other labs could not reproduce it.[^11] The 2023 "LK-99" claim collapsed within weeks when careful measurements showed the material was an insulator.[^12] Genuine progress is real but incremental: hydrogen-rich compounds superconduct near room temperature only under pressures of millions of atmospheres, and a new family of nickel-based superconductors discovered in 2023 has reached about 96 K under pressure.[^13]
:::

## Quantum matter that isn't about temperature

Since 1980 the field has been transformed by states of matter classified not by symmetry but by **topology**: properties that stay fixed under any smooth deformation, the way a doughnut's hole survives however you stretch it.

The **quantum Hall effect**, discovered by Klaus von Klitzing in 1980, showed that electrons confined to a two-dimensional sheet in a strong magnetic field conduct in steps whose values are fixed by fundamental constants to better than a part in a billion, regardless of the sample's shape, size, or impurities.[^14] Such robustness has a topological origin: the conductance is an integer that counts something about the collective wavefunction, and integers cannot change by a little bit.

Two years later Horst Störmer and Daniel Tsui found the **fractional** quantum Hall effect, in which the steps come at fractions like 1/3.[^15] Robert Laughlin explained it: the electrons form a collective state whose excitations carry one-third of an electron's charge.[^16] No fundamental particle has fractional charge. These **quasiparticles** exist only as collective motions of the whole, yet they behave as particles in every measurable way. Emergence at its most vivid.

The topological idea led to **topological insulators** (2005–2007), materials that insulate in their bulk but conduct unstoppably on their surfaces, and to the ongoing hunt for **anyons**, quasiparticles whose quantum state remembers how they have been moved around each other.[^17] Anyons could store quantum information in a way that is protected from noise by topology itself, which is why Microsoft and others are trying to build quantum computers from them. Whether they have succeeded is disputed; a 2025 Microsoft claim to have created the required states drew serious criticism from independent physicists.[^18]

## Emergence as a research program

Condensed matter today is as much about ideas as devices. Twisting two sheets of graphene (single-atom-thick carbon) by exactly 1.1 degrees produces a material that switches between insulator and superconductor with a knob, a discovery made in 2018 that spawned the field of "twistronics."[^19] Ultracold atoms trapped in laser lattices simulate materials that cannot be made, letting physicists test theories of high-temperature superconductivity in a controlled setting. And ideas flow back to fundamental physics: the concept of renormalization that saved quantum electrodynamics was reinterpreted by Kenneth Wilson in the 1970s using the physics of phase transitions, and the modern understanding of what a "fundamental" theory even means came from that work.[^20]

:::key
Condensed matter physics is the study of what emerges. Its deepest lesson, learned repeatedly, is that the collective can have properties (fractional charge, zero resistance, topological protection) that are not in any constituent, cannot be derived by brute force from the constituents, and are nonetheless exact, universal, and predictable from new laws at the collective level. Anderson's point in 1972 was that this makes emergence a fundamental fact about nature, not a shortcut.
:::

## Summary

- Bulk matter shows emergent properties absent from its parts; these are as fundamental as the particle-level laws.
- Matter is solid because of the uncertainty and exclusion principles; the same pressure holds up white dwarf stars.
- Band theory explains metals, insulators, and semiconductors, and therefore the transistor and all computing.
- Phase transitions are spontaneous symmetry breaking; the Higgs mechanism was borrowed from this idea.
- Superconductivity is a whole-material quantum state of paired electrons; the high-temperature version is still unexplained, and room-temperature claims have not held up.
- Topological states of matter host quasiparticles with fractional charge and may enable noise-protected quantum computing.

[^1]: Anderson, P. W. (1972). "More Is Different." *Science*, 177(4047), 393–396. [doi:10.1126/science.177.4047.393](https://doi.org/10.1126/science.177.4047.393)
[^2]: Chandrasekhar, S. (1931). "The Maximum Mass of Ideal White Dwarfs." *The Astrophysical Journal*, 74, 81. [doi:10.1086/143324](https://doi.org/10.1086/143324)
[^3]: Bloch, F. (1929). "Über die Quantenmechanik der Elektronen in Kristallgittern." *Zeitschrift für Physik*, 52, 555–600. [doi:10.1007/BF01339455](https://doi.org/10.1007/BF01339455)
[^4]: Bardeen, J., Brattain, W. H. (1948). "The Transistor, A Semi-Conductor Triode." *Physical Review*, 74, 230. [doi:10.1103/PhysRev.74.230](https://doi.org/10.1103/PhysRev.74.230)
[^5]: Landau, L. D. (1937). "On the theory of phase transitions." *Zhurnal Eksperimental'noi i Teoreticheskoi Fiziki*, 7, 19–32. Reprinted in *Collected Papers of L. D. Landau* (1965), Pergamon.
[^6]: Anderson, P. W. (1963). "Plasmons, Gauge Invariance, and Mass." *Physical Review*, 130, 439. [doi:10.1103/PhysRev.130.439](https://doi.org/10.1103/PhysRev.130.439)
[^7]: Kamerlingh Onnes, H. (1911). "Further experiments with liquid helium." *Communications from the Physical Laboratory of the University of Leiden*, 122b–124c.
[^8]: Bardeen, J., Cooper, L. N., Schrieffer, J. R. (1957). "Theory of Superconductivity." *Physical Review*, 108, 1175. [doi:10.1103/PhysRev.108.1175](https://doi.org/10.1103/PhysRev.108.1175)
[^9]: The Nobel Prize in Physics 2025. Press release, 7 October 2025. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2025/press-release/)
[^10]: Bednorz, J. G., Müller, K. A. (1986). "Possible high Tc superconductivity in the Ba−La−Cu−O system." *Zeitschrift für Physik B*, 64, 189–193. [doi:10.1007/BF01303701](https://doi.org/10.1007/BF01303701)
[^11]: Dasenbrock-Gammon, N. et al. (2023). "Evidence of near-ambient superconductivity in a N-doped lutetium hydride." *Nature*, 615, 244–250. Retracted 7 November 2023. [doi:10.1038/s41586-023-05742-0](https://doi.org/10.1038/s41586-023-05742-0)
[^12]: Puphal, P. et al. (2023). "Single crystal synthesis, structure, and magnetism of Pb10−xCux(PO4)6O." [arXiv:2308.06256](https://arxiv.org/abs/2308.06256)
[^13]: Sun, H. et al. (2023). "Signatures of superconductivity near 80 K in a nickelate under high pressure." *Nature*, 621, 493–498. [doi:10.1038/s41586-023-06408-7](https://doi.org/10.1038/s41586-023-06408-7). Li, F. et al. (2025). "Bulk superconductivity up to 96 K in pressurized nickelate single crystals." [arXiv:2501.14584](https://arxiv.org/abs/2501.14584)
[^14]: von Klitzing, K., Dorda, G., Pepper, M. (1980). "New Method for High-Accuracy Determination of the Fine-Structure Constant Based on Quantized Hall Resistance." *Physical Review Letters*, 45, 494. [doi:10.1103/PhysRevLett.45.494](https://doi.org/10.1103/PhysRevLett.45.494)
[^15]: Tsui, D. C., Stormer, H. L., Gossard, A. C. (1982). "Two-Dimensional Magnetotransport in the Extreme Quantum Limit." *Physical Review Letters*, 48, 1559. [doi:10.1103/PhysRevLett.48.1559](https://doi.org/10.1103/PhysRevLett.48.1559)
[^16]: Laughlin, R. B. (1983). "Anomalous Quantum Hall Effect: An Incompressible Quantum Fluid with Fractionally Charged Excitations." *Physical Review Letters*, 50, 1395. [doi:10.1103/PhysRevLett.50.1395](https://doi.org/10.1103/PhysRevLett.50.1395)
[^17]: Hasan, M. Z., Kane, C. L. (2010). "Colloquium: Topological insulators." *Reviews of Modern Physics*, 82, 3045. [doi:10.1103/RevModPhys.82.3045](https://doi.org/10.1103/RevModPhys.82.3045)
[^18]: Aghaee, M. et al. (Microsoft Quantum) (2025). "Interferometric single-shot parity measurement in InAs–Al hybrid devices." *Nature*, 638, 651–655. [doi:10.1038/s41586-024-08445-2](https://doi.org/10.1038/s41586-024-08445-2). Legg, H. F. (2025). "Comment on 'Interferometric single-shot parity measurement in InAs-Al hybrid devices'." [arXiv:2503.08944](https://arxiv.org/abs/2503.08944)
[^19]: Cao, Y. et al. (2018). "Unconventional superconductivity in magic-angle graphene superlattices." *Nature*, 556, 43–50. [doi:10.1038/nature26160](https://doi.org/10.1038/nature26160)
[^20]: Wilson, K. G. (1975). "The renormalization group: Critical phenomena and the Kondo problem." *Reviews of Modern Physics*, 47, 773. [doi:10.1103/RevModPhys.47.773](https://doi.org/10.1103/RevModPhys.47.773)
[^21]: The American Physical Society's Division of Condensed Matter Physics describes itself as the society's largest division. [engage.aps.org/dcmp](https://engage.aps.org/dcmp/home)
