---
title: Inside the Atom
subtitle: Electrons are waves trapped around a nucleus, they come in shapes, and only two fit in each shape. That one sentence is the periodic table.
part: II · From Alchemy to Atoms
---

## How do electrons determine an atom's behavior?

The periodic table works because elements in a column have the same arrangement of outer electrons. This chapter explains where that arrangement comes from. It is the one place in the guide where the physics gets close to the surface, and it is worth the effort: everything in the chapters on bonding follows from it.

## What an atom is

Chapter 3 left the atom looking like this: a tiny, dense, positively charged **nucleus** of protons and neutrons, which chemistry mostly treats as a single lump, surrounded by electrons that are negatively charged, almost weightless, and spread through a region a hundred thousand times wider than the nucleus. The number of protons is the atomic number and defines the element. A neutral atom has as many electrons as protons. All of chemistry is about those electrons; the nucleus just sits there supplying the charge that holds them.

The old picture of electrons orbiting like planets is wrong in a specific way. Electrons are not tiny balls following paths. They are waves, confined by the attraction of the nucleus, and a confined wave can only vibrate in certain patterns, the way a guitar string can only sound certain notes. The [physics guide's quantum chapter](#/physics/quantum) explains why. Here we take the result and use it.

## Bohr's ladder

The first success was Niels Bohr's 1913 model of hydrogen, the simplest atom: one proton, one electron.[^1] Bohr proposed that the electron could only have certain energies, a ladder of rungs labeled by a whole number $n = 1, 2, 3, \dots$:

$$E_n = -\frac{13.6\ \text{eV}}{n^2}$$

:::math Reading Bohr's formula
$E_n$ is the energy of the electron on rung $n$. The energies are negative because the electron is bound: you would have to *add* 13.6 electron-volts to the lowest rung ($n = 1$) to free the electron entirely, and that is exactly hydrogen's measured ionization energy. The rungs get closer together as $n$ grows: $-13.6, -3.4, -1.5, -0.85\ldots$ eV. When the electron drops from a higher rung to a lower one it emits a photon carrying the difference, and those differences reproduce every line in hydrogen's spectrum. The red line in a hydrogen lamp is the drop from $n = 3$ to $n = 2$: $-1.5 - (-3.4) = 1.9$ eV, which is red light.
:::

Bohr's model worked only for hydrogen and gave no reason for its rules. The reason came in 1926.

## Orbitals: the shapes electrons make

Erwin Schrödinger's wave equation, applied to an electron around a nucleus, has solutions only for certain standing-wave patterns.[^2] Each pattern is an **orbital**: a three-dimensional region where the electron wave is concentrated. It is not a path. If you could photograph the electron's position many times, the orbital is the cloud of dots you would see. Chemists draw an orbital as the surface enclosing about 90% of that cloud.

Each orbital is labeled by three whole numbers.

- $n$, the **principal quantum number** (1, 2, 3, ...), sets the orbital's size and, mostly, its energy. Bohr's rungs are these. Orbitals with the same $n$ form a **shell**.
- $l$, the **angular momentum quantum number** (0 up to $n - 1$), sets the shape. Chemists use letters: $l = 0$ is an **s orbital**, $l = 1$ is **p**, $l = 2$ is **d**, $l = 3$ is **f**. (The letters are leftovers from spectroscopy: sharp, principal, diffuse, fundamental.) Orbitals with the same $n$ and $l$ form a **subshell**.
- $m_l$, the **magnetic quantum number** ($-l$ to $+l$), sets the orientation. There is one s orbital per shell, three p orbitals (pointing along x, y, z), five d, and seven f.

{{fig:orbitals|The shapes of s, p, and d orbitals. An s orbital is a sphere; the three p orbitals are dumbbells along three axes; d orbitals are mostly four-leaf clovers. Darker means the electron is more likely to be found there.}}

A fourth number, the **spin** $m_s$, can be $+\tfrac{1}{2}$ or $-\tfrac{1}{2}$: the electron's intrinsic two-valued property, pictured as spinning up or down. And here is the rule that builds the table. Wolfgang Pauli's **exclusion principle** (1925) says no two electrons in an atom can have all four quantum numbers the same.[^3] Since each orbital allows only two spin values, **each orbital holds at most two electrons, with opposite spins.**

Count the capacity. Shell $n = 1$ has one s orbital: 2 electrons. Shell 2 has one s and three p orbitals: 8. Shell 3 adds five d: 18. Shell 4 adds seven f: 32. The rows of the periodic table are 2, 8, 8, 18, 18, 32, 32: the same numbers, but several of them used twice, because, as the next section explains, a shell's d and f subshells fill a row or two later than its s and p. The table's shape is the multiplication table of the quantum numbers, run slightly out of order.

## Filling the shells

To find an atom's **electron configuration**, its arrangement of electrons, you add electrons one at a time into the lowest-energy orbitals available. This is the **aufbau principle** (German for "building up"). Two refinements matter.

First, orbital energies do not simply climb with $n$. In atoms with many electrons, the inner electrons partially shield the outer ones from the nucleus, and orbitals of different shapes feel that shielding differently. An s orbital reaches in close to the nucleus, so it is held more tightly than a d orbital of the same shell. The result is that the 4s orbital fills *before* 3d, and 5s before 4d. This is why the transition metals appear where they do: after the s block of each row, the d subshell of the *previous* shell fills in.

Second, when several orbitals have equal energy, electrons spread out one per orbital, all spinning the same way, before any orbital gets a second. This is **Hund's rule**, and it happens because electrons repel each other and prefer separate rooms.[^4]

Here are three configurations, written in the standard shorthand (subshell, then superscript count):

| Element | Configuration | Outer electrons | Behavior |
|---|---|---|---|
| Sodium (11) | 1s² 2s² 2p⁶ 3s¹ | one 3s | Loses it easily: an alkali metal |
| Chlorine (17) | 1s² 2s² 2p⁶ 3s² 3p⁵ | seven in shell 3 | One short of eight: grabs an electron |
| Argon (18) | 1s² 2s² 2p⁶ 3s² 3p⁶ | eight in shell 3 | Full: inert |

The electrons in the outermost shell are the **valence electrons**, and they are what chemistry sees. Sodium and potassium behave alike because both have one valence electron in an s orbital. Chlorine and bromine behave alike because both have seven. Whenever you meet a new element, find its column and you know its valence configuration.

:::key
The periodic table is a picture of orbital filling. The s block (two columns) is the s subshell filling; the p block (six columns) is the p subshell; the d block (ten) and f block (fourteen) are the d and f subshells. Every column shares a valence configuration, and valence electrons are what bond. That is the whole reason Mendeleev's table works.
:::

## Why the trends trend

The last chapter listed three periodic trends. Now they can be explained with one idea: **effective nuclear charge**, the net positive pull an outer electron feels after the inner electrons have partly screened the nucleus.

Across a row, each step adds a proton to the nucleus and an electron to the *same* shell. Electrons in the same shell shield each other poorly, so the effective charge on the outer electrons rises steadily. They are pulled in tighter (smaller radius) and are harder to remove (higher ionization energy) and pull harder on shared electrons (higher electronegativity).

Down a column, each step adds a whole new shell. The outer electron is farther out and screened by a complete inner shell, so the effective charge it feels stays roughly constant while its distance grows. Larger radius, lower ionization energy, lower electronegativity.

Noble gases have the highest ionization energies in their rows because their shells are full and the effective charge is at its peak. Alkali metals have the lowest because their lone outer electron sits in a new shell, far out and well screened. Everything in chapter 4's trends section is this one idea applied twice.

## Ions and the pull toward full shells

Atoms gain or lose electrons to reach the configuration of the nearest noble gas, because a full shell is a particularly low-energy, stable arrangement. Sodium loses one electron to become Na⁺, which has neon's configuration; chlorine gains one to become Cl⁻, which has argon's. A positive ion is a **cation**; a negative one is an **anion**. When you dissolve table salt, Na⁺ and Cl⁻ separate and wander off; the "molecule" NaCl exists only as a crystal of alternating ions. Chapter 6 shows how the drive toward full shells produces every kind of chemical bond.

## Reading atoms by their light

Each element's ladder of energy levels is unique, so each element emits and absorbs light at its own set of wavelengths: a **spectrum** that acts as a fingerprint. Sprinkle salt into a flame and it glows yellow-orange, the 589-nanometer line of sodium's outer electron dropping from 3p to 3s;[^9] that is also why sodium streetlights are that color. Copper compounds flame green, potassium violet, strontium red (fireworks).

The fingerprint works at any distance. In 1868 astronomers observing the Sun's atmosphere during an eclipse found a yellow spectral line matching no known element. Norman Lockyer proposed a new one and named it after the Sun: **helium**. It was not found on Earth until 1895, when Ramsay extracted it from a uranium mineral.[^5] Today the spectra of stars and galaxies tell chemists what the universe is made of, and the same technique, in the laboratory, is how chemists identify almost everything (chapter 15).

:::frontier
Orbitals were long considered a mathematical convenience that could never be seen. Since 2009 scanning-probe microscopes have imaged the electron clouds of individual molecules in enough detail to make out the bonds.[^6] The 2023 Nobel Prize in Physics went to methods that produce light pulses lasting attoseconds (billionths of a billionth of a second), short enough to catch electrons in the act of moving between orbitals during a reaction.[^7] And in the heaviest elements, relativistic corrections to the orbitals are large enough that theorists are not sure the aufbau order survives; chemists have begun to measure the chemistry of elements like flerovium (114) one atom at a time to find out.[^8]
:::

:::try Put the idea to work
A shell can hold 18 electrons. Does that require the corresponding row of the periodic table to contain 18 elements?

:::answer Show the reasoning
No. Shell capacity counts the available orbitals in that shell. Period lengths follow the energy order in which subshells fill, and that order interleaves different shells. Keep “how many states exist?” separate from “which states fill next?”
:::
:::

## Summary

- Electrons are confined waves; the allowed patterns are orbitals, labeled by quantum numbers for size ($n$), shape ($l$: s, p, d, f), and orientation ($m_l$).
- Each orbital holds two electrons of opposite spin (Pauli). Shell capacities are 2, 8, 18, 32; periodic-table rows have different lengths because subshells from different shells overlap in energy and fill in that energy order.
- Electrons fill orbitals from lowest energy up (aufbau), one per equal-energy orbital before pairing (Hund), with 4s filling before 3d because of shielding.
- Valence electrons, the outermost, determine chemistry; elements in a column share a valence configuration.
- Effective nuclear charge explains why atoms shrink and grip harder across a row and grow and loosen down a column.
- Atoms seek full shells, forming ions; each element's energy ladder gives it a spectral fingerprint, which found helium in the Sun before it was found on Earth.

[^1]: Bohr, N. (1913). "On the Constitution of Atoms and Molecules." *Philosophical Magazine*, 26(151), 1–25. [doi:10.1080/14786441308634955](https://doi.org/10.1080/14786441308634955)
[^2]: Schrödinger, E. (1926). "Quantisierung als Eigenwertproblem (Erste Mitteilung)." *Annalen der Physik*, 384(4), 361–376. [doi:10.1002/andp.19263840404](https://doi.org/10.1002/andp.19263840404)
[^3]: Pauli, W. (1925). "Über den Zusammenhang des Abschlusses der Elektronengruppen im Atom mit der Komplexstruktur der Spektren." *Zeitschrift für Physik*, 31, 765–783. [doi:10.1007/BF02980631](https://doi.org/10.1007/BF02980631)
[^4]: Hund, F. (1925). "Zur Deutung verwickelter Spektren, insbesondere der Elemente Scandium bis Nickel." *Zeitschrift für Physik*, 33, 345–371. [doi:10.1007/BF01328319](https://doi.org/10.1007/BF01328319)
[^5]: Lockyer, J. N. (1868). "Notice of an Observation of the Spectrum of a Solar Prominence." *Proceedings of the Royal Society*, 17, 91–92. Ramsay, W. (1895). "On a Gas Showing the Spectrum of Helium, the Reputed Cause of D₃, One of the Lines in the Coronal Spectrum." *Proceedings of the Royal Society*, 58, 65–67. [doi:10.1098/rspl.1895.0006](https://doi.org/10.1098/rspl.1895.0006)
[^6]: Gross, L., Mohn, F., Moll, N., Liljeroth, P., Meyer, G. (2009). "The Chemical Structure of a Molecule Resolved by Atomic Force Microscopy." *Science*, 325, 1110–1114. [doi:10.1126/science.1176210](https://doi.org/10.1126/science.1176210)
[^7]: The Nobel Prize in Physics 2023 (Pierre Agostini, Ferenc Krausz, Anne L'Huillier). Press release, 3 October 2023. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2023/press-release/)
[^8]: Yakushev, A. et al. (2014). "Superheavy Element Flerovium (Element 114) Is a Volatile Metal." *Inorganic Chemistry*, 53(3), 1624–1629. [doi:10.1021/ic4026766](https://doi.org/10.1021/ic4026766)
[^9]: National Institute of Standards and Technology, Atomic Spectra Database. The sodium D lines are at 588.995 and 589.592 nm. [physics.nist.gov/asd](https://physics.nist.gov/PhysRefData/ASD/lines_form.html)
