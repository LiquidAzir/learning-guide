---
title: Chemical Bonds
subtitle: Why atoms stick together, the three ways they do it, and how the shape of a molecule follows from where its electrons want to be.
part: III · Bonds and Structure
---

## Recap

Atoms have electrons in shells, and full shells are stable. Most atoms do not have full shells. Everything in this chapter is about what they do about it.

## Why atoms bond at all

Two atoms bond when the arrangement with them together has lower energy than the arrangement with them apart. That is the whole principle. The lower energy comes from electrostatics: electrons are attracted to nuclei, and a bond puts electrons where they can feel the pull of two nuclei at once, while the nuclei stay far enough apart not to repel too strongly. Everything else, the octets and the shapes and the three "types" of bond, is bookkeeping for this one fact.

There are three broad ways to lower the energy, and they blend into one another.

## Ionic bonds: give and take

If one atom holds its outer electrons loosely (a metal, low ionization energy) and another wants electrons badly (a nonmetal, high electronegativity), the simplest solution is transfer. Sodium hands its lone outer electron to chlorine. Both now have full shells, and both are ions: Na⁺ and Cl⁻. Opposite charges attract, and that attraction is the **ionic bond**.[^1]

An ionic bond is not a bond between two particular atoms. In solid salt, each Na⁺ is surrounded by six Cl⁻ and each Cl⁻ by six Na⁺, in an endless alternating lattice. The energy released in assembling that lattice from separated gas-phase ions, the **lattice energy**, is enormous: about 787 kJ/mol for sodium chloride.[^2] That is why ionic compounds are hard, brittle (shift one layer and like charges line up and repel), have high melting points, and conduct electricity only when melted or dissolved, when the ions are free to move.

:::math Where the energy comes from
The attraction between two ions is Coulomb's law: energy $E = -k\,q_1 q_2 / r$, where $q_1$ and $q_2$ are the charges, $r$ the distance between centers, and $k$ a constant. For Na⁺ and Cl⁻ at their separation in the crystal (0.28 nm), a single pair releases about 500 kJ/mol. The full lattice releases more (787 kJ/mol) because each ion has six neighbors, minus the repulsion from second-nearest neighbors of the same charge, and so on. Summing that infinite series gives a number, the Madelung constant, of about 1.75 for the salt structure. Ionic bonding is Coulomb's law done in bulk.
:::

## Covalent bonds: sharing

Two nonmetals both want electrons, and neither will give any up. The solution, proposed by Gilbert Lewis in 1916, is to share.[^3] Two hydrogen atoms each contribute one electron to a shared pair that sits between the nuclei, attracted to both. Each atom now "sees" two electrons, hydrogen's full shell. This shared pair is a **covalent bond**, and the molecule H₂ is held together by it.

Lewis noticed that atoms of the second row (carbon, nitrogen, oxygen, fluorine) form bonds until they are surrounded by eight electrons, shared or owned, the configuration of the next noble gas. This **octet rule** is the reason for the valences you may remember from school. Carbon has four outer electrons and needs four more, so it forms four bonds. Nitrogen has five and forms three. Oxygen has six and forms two. Fluorine has seven and forms one. **Lewis structures**, dot diagrams showing every outer electron, let you draw a plausible molecule for almost any formula, and generations of chemists have done exactly that.

Atoms can share more than one pair. A **double bond** (two shared pairs) is shorter and stronger than a single; a **triple bond** stronger still.

| Bond | Bond energy (kJ/mol) | Bond length (nm) |
|---|---|---|
| H–H | 436 | 0.074 |
| C–C | 347 | 0.154 |
| C=C | 614 | 0.134 |
| C≡C | 839 | 0.120 |
| C–H | 414 | 0.109 |
| O=O | 498 | 0.121 |
| N≡N | 945 | 0.110 |

The **bond energy** is what it costs to break the bond.[^4] Notice N≡N at the bottom: the nitrogen molecule's triple bond is one of the strongest in chemistry, which is why nitrogen gas, 78% of the air, is so inert, and why turning it into anything useful (fertilizer, explosives) is so hard (chapter 10).

:::math Bond energies predict heats of reaction
Burning methane: $\mathrm{CH_4 + 2\,O_2 \rightarrow CO_2 + 2\,H_2O}$. Bonds broken: four C–H ($4 \times 414 = 1656$) and two O=O ($2 \times 498 = 996$), total 2652 kJ/mol. Bonds formed: two C=O in CO₂ (about $2 \times 799 = 1598$) and four O–H in water ($4 \times 463 = 1852$), total 3450 kJ/mol. Net: $2652 - 3450 = -798$ kJ/mol. The reaction *releases* about 800 kJ per mole of methane, because the bonds it makes are stronger than the bonds it breaks. The measured value is $-802$ kJ/mol, so a table of averaged bond energies got it right to half a percent.[^13]

One caution about which measured number to compare against. Bond energies describe free molecules in the gas phase, so this calculation gives the heat when the water leaves as steam. Let that steam condense to liquid and another 44 kJ/mol per water molecule is released, which is where the $-890$ kJ/mol figure often quoted for methane's heat of combustion comes from. Same reaction, stopped at different points. Every fuel works this way: weak bonds in, strong bonds out, the difference as heat.
:::

## Polar bonds: the continuum

Ionic and covalent are the ends of a spectrum, not two boxes. When two *different* atoms share a pair, the more electronegative one pulls the pair toward itself. The bond is **polar**: one end slightly negative, the other slightly positive. In water the oxygen hogs the shared electrons, leaving the hydrogens with a partial positive charge, and that lopsidedness, water's **dipole**, is why water dissolves salt, why ice floats, and (chapter 13) why life is possible. Pauling's electronegativity scale (chapter 4) quantifies it: the bigger the difference between the two atoms, the more polar the bond, and past a difference of about 1.7 chemists usually call it ionic.[^5] Sodium chloride (difference 2.1) is ionic; hydrogen chloride (0.9) is a polar covalent gas; the C–H bond (0.4) is nearly nonpolar, which is why oils and fats do not mix with water.

## Shapes: where the electrons want to be

Molecules have shapes, and shapes decide almost everything about how they behave. The shapes follow from a simple idea worked out by Ronald Gillespie and Ronald Nyholm in 1957: the clouds of electrons around a central atom repel one another and get as far apart as they can.[^6] This is **VSEPR** (valence shell electron pair repulsion), and it predicts the geometry of most small molecules from a Lewis structure. One counting rule makes it work: count *groups*, not pairs. A single bond, a double bond, a triple bond, and an unshared pair each count as one group, because a double bond's two pairs point the same way and push as one.

- Two groups: opposite sides, a straight line. Carbon dioxide, O=C=O, has one group per oxygen and is **linear**, 180°.
- Three groups: a flat triangle, 120°. Boron trifluoride is **trigonal planar**.
- Four groups: a **tetrahedron**, 109.5°. Methane, CH₄, is the textbook case, and the tetrahedral carbon is the shape all of organic chemistry is built on.

{{fig:molecular-shapes|Four common shapes, predicted by counting electron pairs around the central atom.}}

Unshared pairs are groups too, and they take up slightly more room than bonding pairs. Ammonia, NH₃, has four pairs around nitrogen but only three bonds; the fourth pair pushes the hydrogens down into a **pyramid** at 107°. Water has two bonding pairs and two unshared, so it is **bent**, at 104.5°. That bend is why water has a dipole at all: a straight H–O–H would have its two polar bonds cancel. The most important property of the most important molecule on Earth comes down to two lone pairs demanding elbow room.

Shape also explains why oils and fats do not mix with water. Their C–H bonds are nearly nonpolar, so an oil molecule has no charged end for water to grip; chapter 7 explains what water does about that.

## Two theories of the covalent bond

Lewis's dots and VSEPR are rules. The explanation comes from quantum mechanics, in two flavors that chemists switch between as convenient.

**Valence bond theory** (Heitler and London 1927; Pauling 1931) pictures a bond as the overlap of two atomic orbitals, one from each atom, with the shared electron pair in the overlap region.[^7] To explain methane's four identical bonds pointing to the corners of a tetrahedron, Pauling introduced **hybridization**: carbon's one s and three p orbitals mix into four equivalent **sp³ hybrids** aimed at the tetrahedron's corners. Mix s with two p's and you get three sp² hybrids in a plane, the geometry of a double bond; mix with one p and you get two sp hybrids in a line, the geometry of a triple bond. Hybridization is a picture rather than a physical process, but it is the picture every organic chemist thinks in.

**Molecular orbital theory** (Hund and Mulliken, 1928) instead lets electrons spread over the whole molecule.[^8] Combine two atomic orbitals and you get two molecular orbitals: a **bonding orbital**, where the waves add and electron density piles up between the nuclei, lower in energy, and an **antibonding orbital**, where they cancel and leave a gap between the nuclei, higher in energy. Fill the orbitals from the bottom, two electrons each. H₂ puts both electrons in the bonding orbital: a bond. Helium, He₂, would put two in bonding and two in antibonding, canceling out: no bond, which is why helium is a gas of lone atoms.

Molecular orbital theory earned its keep with oxygen. Lewis's dots give O₂ a tidy double bond with all electrons paired. But liquid oxygen sticks to a magnet, which means it has unpaired electrons. Molecular orbital theory predicts exactly two unpaired electrons in O₂, in a pair of equal-energy antibonding orbitals, following Hund's rule.[^8] The dots were wrong and the orbitals were right. Both theories are used daily; molecular orbital theory is what computers calculate, and valence bond hybrids are what humans draw.

## Resonance: when one drawing is not enough

Some molecules cannot be drawn as a single Lewis structure. Benzene, C₆H₆, a flat ring of six carbons, was a puzzle from 1865, when August Kekulé proposed the ring with alternating single and double bonds.[^9] But all six bonds in benzene are the same length, between a single and a double. Pauling's answer was **resonance**: the real molecule is a blend of the two alternating structures, with the six extra electrons spread evenly around the ring.[^7] Molecular orbital theory says the same thing more naturally: the electrons occupy orbitals that circle the entire ring. This **delocalization** lowers the energy by about 150 kJ/mol,[^5] making benzene unusually stable and giving the family of ring compounds, the **aromatics**, its distinctive chemistry (chapter 12).

## Metallic bonds: the sea of electrons

Metals are the third case. Metal atoms hold their outer electrons loosely and have many empty orbitals nearby. Pack them together and the outer electrons stop belonging to any atom; they roam through the whole solid as a **sea of electrons** surrounding a lattice of positive ions.[^10] That mobile sea conducts electricity and heat, reflects light (which is why metals shine), and lets the ion lattice slide without breaking (which is why metals bend and ionic crystals shatter). The full quantum version is band theory, described in the [physics guide](#/physics/matter), where it also explains semiconductors.

## When the rules bend

The octet rule is a second-row rule. Boron trifluoride has only six electrons around boron and is happy. Sulfur in SF₆ has twelve, using its larger third shell. Nitric oxide, NO, has an odd number of electrons and cannot pair them all; molecules with unpaired electrons are **radicals**, usually highly reactive, and they are central to combustion, atmospheric chemistry, and aging. And in the heaviest elements, relativistic effects (chapter 4) rearrange the orbitals enough to break the simple pictures altogether.

:::frontier
The chemical bond is one of the most useful ideas in science and also one of the least precisely defined. Chemists agree on what bonds do; they argue about what a bond *is*, and quantum mechanics offers several inequivalent definitions.[^11] Meanwhile the pictures keep sharpening. Since 2009 atomic force microscopes have imaged the bonds in single molecules, showing which are shorter and stronger, essentially photographing a Lewis structure.[^12] And bonds no one expected keep turning up, from helium compounds stable under pressure to a quadruple bond between two carbon atoms in C₂, whose existence is still disputed.
:::

## Summary

- Atoms bond to lower their energy, placing electrons where they feel two nuclei at once.
- Ionic bonds transfer electrons and hold ions in a lattice by Coulomb attraction; covalent bonds share pairs; the two blend through polar bonds, graded by electronegativity difference.
- Lewis structures and the octet rule give valences; bond energies, in the hundreds of kJ/mol, predict heats of reaction.
- VSEPR gives shapes: electron pairs spread out, so CO₂ is linear, methane tetrahedral, water bent. Water's bend is why it has a dipole.
- Valence bond theory (hybridization) is the picture chemists draw; molecular orbital theory is what they compute, and it correctly predicts oxygen's magnetism.
- Resonance and delocalization stabilize benzene; metallic bonding is a shared electron sea. The octet rule has exceptions, and the definition of a bond is still debated.

[^1]: Kossel, W. (1916). "Über Molekülbildung als Frage des Atombaus." *Annalen der Physik*, 354(3), 229–362. [doi:10.1002/andp.19163540302](https://doi.org/10.1002/andp.19163540302)
[^2]: Born, M., Landé, A. (1918). "Über die Berechnung der Kompressibilität regulärer Kristalle aus der Gittertheorie." *Verhandlungen der Deutschen Physikalischen Gesellschaft*, 20, 210–216. Modern lattice-energy values from the CRC *Handbook of Chemistry and Physics*, 104th ed. (2023), Section 12.
[^3]: Lewis, G. N. (1916). "The Atom and the Molecule." *Journal of the American Chemical Society*, 38(4), 762–785. [doi:10.1021/ja02261a002](https://doi.org/10.1021/ja02261a002)
[^4]: Bond energies and lengths from Cottrell, T. L. (1958), *The Strengths of Chemical Bonds*, 2nd ed., Butterworths, and the CRC *Handbook of Chemistry and Physics*, 104th ed. (2023), Section 9.
[^5]: Pauling, L. (1939). *The Nature of the Chemical Bond*. Cornell University Press. Chapter 2 develops the electronegativity scale and the ionic–covalent continuum; Chapter 6 gives benzene's resonance energy.
[^6]: Gillespie, R. J., Nyholm, R. S. (1957). "Inorganic stereochemistry." *Quarterly Reviews, Chemical Society*, 11, 339–380. [doi:10.1039/QR9571100339](https://doi.org/10.1039/QR9571100339)
[^7]: Heitler, W., London, F. (1927). "Wechselwirkung neutraler Atome und homöopolare Bindung nach der Quantenmechanik." *Zeitschrift für Physik*, 44, 455–472. [doi:10.1007/BF01397394](https://doi.org/10.1007/BF01397394). Pauling, L. (1931). "The Nature of the Chemical Bond. Application of Results Obtained from the Quantum Mechanics and from a Theory of Paramagnetic Susceptibility to the Structure of Molecules." *Journal of the American Chemical Society*, 53(4), 1367–1400. [doi:10.1021/ja01355a027](https://doi.org/10.1021/ja01355a027)
[^8]: Mulliken, R. S. (1928). "The Assignment of Quantum Numbers for Electrons in Molecules. I." *Physical Review*, 32, 186. [doi:10.1103/PhysRev.32.186](https://doi.org/10.1103/PhysRev.32.186). Hund, F. (1928). "Zur Deutung der Molekelspektren. IV." *Zeitschrift für Physik*, 51, 759–795.
[^9]: Kekulé, A. (1865). "Sur la constitution des substances aromatiques." *Bulletin de la Société Chimique de Paris*, 3, 98–110.
[^10]: Drude, P. (1900). "Zur Elektronentheorie der Metalle." *Annalen der Physik*, 306(3), 566–613. [doi:10.1002/andp.19003060312](https://doi.org/10.1002/andp.19003060312)
[^11]: Ball, P. (2011). "Beyond the bond." *Nature*, 469, 26–28. [doi:10.1038/469026a](https://doi.org/10.1038/469026a)
[^12]: Gross, L. et al. (2012). "Bond-Order Discrimination by Atomic Force Microscopy." *Science*, 337, 1326–1329. [doi:10.1126/science.1225621](https://doi.org/10.1126/science.1225621)
[^13]: Computed from standard enthalpies of formation in the NIST Chemistry WebBook (SRD 69): CH₄(g) −74.6, CO₂(g) −393.5, H₂O(g) −241.8 kJ/mol, giving −802.3 kJ/mol with gaseous water and −890.3 with liquid. [webbook.nist.gov](https://webbook.nist.gov/chemistry/)
