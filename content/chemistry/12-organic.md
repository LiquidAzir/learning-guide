---
title: Carbon
subtitle: One element makes more compounds than all the others combined. Organic chemistry is the study of why, and of how to build them on purpose.
part: V · The Elements at Work
---

## Recap

You now have bonding, shapes, energy, rates, and equilibrium. **Organic chemistry**, the chemistry of carbon compounds, is where all of them are applied at once to the largest family of molecules there is: the great majority of known compounds contain carbon, and nearly everything in a living cell, a pharmacy, or a plastics factory is organic.[^15]

## Why carbon

Carbon has four valence electrons and wants four more, so it makes four bonds. That is the first reason. The second is that its bonds to itself are strong (347 kJ/mol for a single bond, chapter 6) and so are its bonds to hydrogen, oxygen, and nitrogen, all of roughly similar strength, so carbon skeletons are stable and can be decorated with other atoms without falling apart. The third is size: carbon is small enough that its atoms can form double and triple bonds, giving rings, flat sheets, and rigid rods as well as chains. Silicon, directly below carbon, also makes four bonds, but its self-bonds are weaker and it bonds to oxygen so eagerly that silicon chemistry in nature is almost entirely rock. Carbon-based life is not a coincidence; carbon is the only element that can build molecules of arbitrary size and complexity that are stable in water at ordinary temperatures.

## The death of vitalism

Until 1828 chemists divided substances into mineral and organic, and most believed the organic ones, the products of living things, could only be made by a "vital force" in living tissue. That year Friedrich Wöhler, trying to make ammonium cyanate from two inorganic salts, found instead white crystals of urea, a compound previously obtained only from urine.[^1] "I must tell you," he wrote to his teacher Berzelius, "that I can make urea without the use of kidneys, either man or dog." Hermann Kolbe's synthesis of acetic acid from carbon disulfide in 1845 and Marcellin Berthelot's systematic syntheses in the 1850s finished the job.[^2] The molecules of life obey the same rules as everything else, and organic chemistry became a field: the chemistry of carbon compounds, wherever they come from.

## Structure: how atoms are connected

In 1858 August Kekulé and Archibald Couper independently proposed that carbon is tetravalent and that carbon atoms link to one another in chains.[^3] Alexander Butlerov named the idea **chemical structure** in 1861: a molecule's properties depend on which atoms are bonded to which, and a formula should show the connections. Kekulé's benzene ring followed in 1865 (chapter 6). With structural formulas, organic chemistry stopped being a catalogue and became a logic.

The final piece came in 1874, when Jacobus van 't Hoff (aged 22) and Joseph Le Bel independently proposed that carbon's four bonds point to the corners of a tetrahedron.[^4] That has a startling consequence. A carbon bonded to four *different* groups can be assembled two ways that are mirror images of each other and cannot be superimposed, like a left and right hand. Such a molecule is **chiral**, and the two forms are **enantiomers**. Louis Pasteur had found the phenomenon in 1848, sorting crystals of a tartaric acid salt by hand into two mirror-image piles that rotated polarized light in opposite directions, without knowing why.[^5] Van 't Hoff's tetrahedron was the why.

:::warning
Enantiomers have identical melting points, solubilities, and reactivity toward ordinary reagents. They differ only toward other chiral things, and life is chiral: your proteins are built from left-handed amino acids and your sugars are right-handed. So the two enantiomers of a drug can act completely differently in the body. Thalidomide, sold in the late 1950s as a sedative for morning sickness, caused thousands of birth defects; one enantiomer is the sedative and the other is the teratogen, though the two interconvert in the body, so separating them would not have saved the drug.[^6] Regulators now require every chiral drug to be evaluated as its separate enantiomers, and making a single enantiomer on purpose (**asymmetric synthesis**) has won two Nobel Prizes.
:::

## Functional groups: the parts list

Carbon skeletons are inert scaffolding. What makes an organic molecule *do* something is its **functional groups**: small, recurring arrangements of atoms that behave the same way whatever skeleton they are attached to. Learn a dozen and you can predict the chemistry of a molecule you have never seen.

| Group | Structure | Example | What it does |
|---|---|---|---|
| Alkane | C–C and C–H only | Methane, octane | Inert; burns. Fuels and waxes. |
| Alkene | C=C | Ethylene | Reactive double bond; adds things across it; polymerizes. |
| Aromatic ring | Benzene ring | Benzene, toluene | Unusually stable; flat; found in dyes and drugs. |
| Alcohol | –OH | Ethanol | Hydrogen bonds; water-soluble; oxidizes to aldehydes and acids. |
| Ether | C–O–C | Diethyl ether | Unreactive solvent. |
| Aldehyde / ketone | C=O at end / in middle | Formaldehyde, acetone | Reactive carbonyl; the workhorse of synthesis. |
| Carboxylic acid | –COOH | Acetic acid | Weak acid (p$K_a$ about 4 to 5). |
| Ester | –COO–C | Ethyl acetate, fats | Fruity smells; fats and oils; polyester. |
| Amine | –NH₂ | Amphetamine | Weak base; most drugs contain one. |
| Amide | –CONH– | Proteins, nylon | Very stable; the link in every protein. |
| Halide | C–F, C–Cl | Teflon, CFCs | Often unreactive; C–F is the strongest single bond to carbon. |

The naming system you may remember, with prefixes like *meth-*, *eth-*, *prop-* for chain length and suffixes like *-ol*, *-one*, *-oic acid* for the group, is the descendant of Lavoisier's project and is maintained by IUPAC.

## Isomers: same atoms, different molecules

The same collection of atoms can be a different substance in three ways. **Structural isomers** connect the atoms differently (ethanol and dimethyl ether). **Geometric isomers** have the same connections but a different arrangement around a rigid double bond or ring. Natural fats are almost all the *cis* form; the *trans* forms produced when vegetable oil is partly hydrogenated raise heart-disease risk enough that most countries have now banned them from food. **Enantiomers** are the mirror images above. As molecules grow, the number of possible isomers explodes: the formula C₂₀H₄₂ has 366,319 structural isomers,[^16] and a drug-sized molecule with a few chiral centers has dozens of stereoisomers of which usually one is wanted.

## Mechanisms: how organic reactions actually happen

Organic chemists explain every reaction with a mechanism drawn in **curved arrows**, each arrow showing a pair of electrons moving from where they are to where they are going. Two words organize the whole subject. A **nucleophile** ("nucleus-lover") is an electron-rich atom or molecule looking for a positive center to attack: hydroxide, ammonia, the negative end of a polar bond. An **electrophile** ("electron-lover") is electron-poor and gets attacked: a carbon attached to a highly electronegative atom, a positively charged carbon, the carbon of a carbonyl group. Nearly every organic reaction is a nucleophile finding an electrophile.

:::math Two ways to swap a group
Consider replacing the bromine in a bromoalkane with hydroxide. Christopher Ingold and Edward Hughes showed in the 1930s that there are two distinct mechanisms, distinguished by their rate laws.[^7]

**SN2** (substitution, nucleophilic, bimolecular): the hydroxide attacks the carbon from the side opposite the bromine while the bromine is leaving, in one step through a single transition state. Rate $= k[\mathrm{RBr}][\mathrm{OH^-}]$, second order. Because the attack comes from behind, a chiral carbon is inverted, like an umbrella flipping in the wind. Works best on small, unhindered carbons.

**SN1** (unimolecular): the bromine leaves first, all by itself, creating a flat, positively charged **carbocation** intermediate; then the hydroxide attacks it from either face. Rate $= k[\mathrm{RBr}]$, first order, independent of how much hydroxide is present, because the slow step does not involve it. A chiral carbon comes out as a mixture of both enantiomers. Works best on crowded carbons that stabilize the positive charge.

Measure the rate law and you know the mechanism. This is kinetics (chapter 10) doing detective work, and it is how the field established that mechanisms are real and knowable.
:::

Beyond substitution, the other great reaction types are **addition** (two groups add across a double bond, as when hydrogen is added to vegetable oil to make margarine), **elimination** (the reverse, forming a double bond by removing two groups), and **oxidation and reduction** (alcohol to aldehyde to acid, or back). Each has its mechanisms, its rules for which product forms, and its exceptions.

## Polymers

Link thousands of small molecules (**monomers**) into a chain and you have a **polymer**. Hermann Staudinger proposed in 1920 that rubber, cellulose, and the new synthetic materials were genuinely giant molecules, held by ordinary covalent bonds; established chemists ridiculed the idea for a decade, and he won the Nobel Prize in 1953.[^8]

**Addition polymers** form by opening double bonds and linking the carbons: ethylene becomes polyethylene, vinyl chloride becomes PVC, styrene becomes polystyrene, tetrafluoroethylene becomes Teflon. **Condensation polymers** form by joining monomers with the loss of a small molecule, usually water, as in Wallace Carothers's nylon (1935), the first fully synthetic fiber, and polyester.[^9] Proteins and DNA are condensation polymers too. Leo Baekeland's Bakelite (1907), the first synthetic plastic, was a cross-linked network that could not be remelted, the ancestor of every thermoset resin. The Ziegler–Natta catalysts (chapter 10) then made it possible to control the geometry of the chain and turn cheap gas into strong, cheap solids. The world now makes over 400 million tonnes of plastic a year, and what to do with it afterward is a frontier problem (chapter 16).[^17]

## Synthesis: building molecules on purpose

In 1856 an 18-year-old student, William Perkin, trying to make the antimalarial quinine, got a purple sludge instead. He noticed it dyed silk, patented it as mauve, and founded the synthetic dye industry, the first chemical industry based on deliberate synthesis.[^10] From dyes came drugs (aspirin, 1897), explosives, and eventually the modern pharmaceutical industry.

**Total synthesis**, building a complex natural molecule from simple starting materials, became the field's proving ground. Robert Woodward synthesized quinine (1944), cholesterol, chlorophyll, and vitamin B₁₂ (1972, with Albert Eschenmoser, over eleven years and about a hundred steps), winning the 1965 Nobel Prize.[^11] Elias J. Corey systematized the planning with **retrosynthetic analysis**: start from the target, mentally break bonds to find simpler precursors, and repeat until you reach available materials (Nobel Prize 1990).[^12] The approach is now taught to every organic chemist and, since the 2010s, to computers.

The field's recent turn is toward reactions that are reliable, simple, and selective rather than heroic. **Click chemistry**, proposed by Barry Sharpless in 2001, means reactions that join two building blocks quickly, in high yield, in water, with no side products; Morten Meldal and Sharpless found the archetype, and Carolyn Bertozzi made versions that run inside living cells without disturbing them. The three shared the 2022 Nobel Prize.[^13] **C–H activation** replaces one specific hydrogen on an inert carbon skeleton, and **skeletal editing**, from about 2021, changes a molecule's core by deleting or swapping a single atom, letting drug chemists modify a finished molecule instead of rebuilding it (see Latest Research).

:::frontier
The number of possible small drug-like molecules has been estimated at $10^{60}$; all of chemistry has made perhaps $10^{8}$.[^14] Exploring that space is now partly automated: robots run reactions around the clock, machine-learning models propose syntheses, and language-model agents have planned and executed real experiments. What has not been automated is deciding which molecules are worth making. Meanwhile the field's biggest open problem is arguably its oldest product: hundreds of millions of tonnes a year of plastics that were designed to be durable and are, with chemical recycling and plastic-eating enzymes among the responses.
:::

## Summary

- Carbon makes four strong bonds to itself and to other light atoms, so it alone builds stable molecules of unlimited complexity.
- Wöhler's urea (1828) ended vitalism; Kekulé's structures and van 't Hoff's tetrahedron made organic chemistry a logic and explained chirality, which is why enantiomers of a drug can differ in effect.
- Functional groups determine reactivity; a dozen of them cover most of the subject. Isomers make the same atoms into different substances.
- Mechanisms are drawn with curved arrows; nucleophiles attack electrophiles; SN1 and SN2 show how rate laws reveal mechanisms.
- Polymers are chains of monomers; Staudinger was mocked for saying so. Plastics, nylon, proteins, and DNA are all polymers.
- Synthesis went from Perkin's accidental mauve to Woodward's B₁₂ to Corey's retrosynthesis to click chemistry and skeletal editing.

[^1]: Wöhler, F. (1828). "Ueber künstliche Bildung des Harnstoffs." *Annalen der Physik und Chemie*, 88(2), 253–256. [doi:10.1002/andp.18280880206](https://doi.org/10.1002/andp.18280880206). The letter to Berzelius is dated 22 February 1828.
[^2]: Kolbe, H. (1845). "Beiträge zur Kenntniss der gepaarten Verbindungen." *Annalen der Chemie und Pharmacie*, 54, 145–188. [doi:10.1002/jlac.18450540202](https://doi.org/10.1002/jlac.18450540202). Berthelot, M. (1860). *Chimie organique fondée sur la synthèse*, 2 vols. Paris: Mallet-Bachelier.
[^3]: Kekulé, A. (1858). "Ueber die Constitution und die Metamorphosen der chemischen Verbindungen und über die chemische Natur des Kohlenstoffs." *Annalen der Chemie und Pharmacie*, 106, 129–159. [doi:10.1002/jlac.18581060202](https://doi.org/10.1002/jlac.18581060202). Couper, A. S. (1858). "On a New Chemical Theory." *Philosophical Magazine*, 16, 104–116.
[^4]: van 't Hoff, J. H. (1874). "Sur les formules de structure dans l'espace." *Archives Néerlandaises des Sciences Exactes et Naturelles*, 9, 445–454. Le Bel, J. A. (1874). "Sur les relations qui existent entre les formules atomiques des corps organiques et le pouvoir rotatoire de leurs dissolutions." *Bulletin de la Société Chimique de Paris*, 22, 337–347.
[^5]: Pasteur, L. (1848). "Mémoire sur la relation qui peut exister entre la forme cristalline et la composition chimique, et sur la cause de la polarisation rotatoire." *Comptes rendus de l'Académie des Sciences*, 26, 535–538.
[^6]: Eriksson, T., Björkman, S., Roth, B., Fyge, Å., Höglund, P. (1995). "Stereospecific determination, chiral inversion in vitro and pharmacokinetics in humans of the enantiomers of thalidomide." *Chirality*, 7(1), 44–52. [doi:10.1002/chir.530070109](https://doi.org/10.1002/chir.530070109)
[^7]: Hughes, E. D., Ingold, C. K. (1935). "Mechanism of substitution at a saturated carbon atom. Part IV." *Journal of the Chemical Society*, 244–255. [doi:10.1039/JR9350000244](https://doi.org/10.1039/JR9350000244). Ingold, C. K. (1953). *Structure and Mechanism in Organic Chemistry*. Cornell University Press.
[^8]: Staudinger, H. (1920). "Über Polymerisation." *Berichte der deutschen chemischen Gesellschaft*, 53(6), 1073–1085. [doi:10.1002/cber.19200530627](https://doi.org/10.1002/cber.19200530627)
[^9]: Carothers, W. H. (1938). U.S. Patent 2,130,948, "Synthetic Fiber." Filed 1937. Baekeland, L. H. (1909). "The Synthesis, Constitution, and Uses of Bakelite." *Journal of Industrial and Engineering Chemistry*, 1(3), 149–161. [doi:10.1021/ie50003a004](https://doi.org/10.1021/ie50003a004)
[^10]: Perkin, W. H. (1856). British Patent 1984, "Producing a New Coloring Matter for Dyeing with a Lilac or Purple Color Stuffs of Silk, Cotton, Wool, or other Materials." Garfield, S. (2000). *Mauve: How One Man Invented a Colour That Changed the World*. Faber.
[^11]: Woodward, R. B., Doering, W. E. (1944). "The Total Synthesis of Quinine." *Journal of the American Chemical Society*, 66(5), 849. [doi:10.1021/ja01233a516](https://doi.org/10.1021/ja01233a516). Woodward, R. B. (1973). "The total synthesis of vitamin B₁₂." *Pure and Applied Chemistry*, 33(1), 145–178. [doi:10.1351/pac197333010145](https://doi.org/10.1351/pac197333010145)
[^12]: Corey, E. J. (1990). Nobel Lecture: "The Logic of Chemical Synthesis." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1990/corey/lecture/)
[^13]: Kolb, H. C., Finn, M. G., Sharpless, K. B. (2001). "Click Chemistry: Diverse Chemical Function from a Few Good Reactions." *Angewandte Chemie International Edition*, 40(11), 2004–2021. [doi:10.1002/1521-3773(20010601)40:11<2004::AID-ANIE2004>3.0.CO;2-5](https://doi.org/10.1002/1521-3773(20010601)40:11%3C2004::AID-ANIE2004%3E3.0.CO;2-5). The Nobel Prize in Chemistry 2022. [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2022/press-release/)
[^15]: Chemical Abstracts Service. "CAS REGISTRY." The registry's organic substances outnumber its inorganic ones by roughly an order of magnitude. [cas.org/cas-data/cas-registry](https://www.cas.org/cas-data/cas-registry)
[^16]: On-Line Encyclopedia of Integer Sequences, sequence A000602, "Number of n-node unrooted quartic trees": the count of structural isomers of the alkane CₙH₂ₙ₊₂. [oeis.org/A000602](https://oeis.org/A000602)
[^17]: OECD (2022). *Global Plastics Outlook: Economic Drivers, Environmental Impacts and Policy Options*. OECD Publishing, Paris. [doi:10.1787/de747aef-en](https://doi.org/10.1787/de747aef-en)
[^14]: Bohacek, R. S., McMartin, C., Guida, W. C. (1996). "The art and practice of structure-based drug design: A molecular modeling perspective." *Medicinal Research Reviews*, 16(1), 3–50. [doi:10.1002/(SICI)1098-1128(199601)16:1<3::AID-MED1>3.0.CO;2-6](https://doi.org/10.1002/(SICI)1098-1128(199601)16:1%3C3::AID-MED1%3E3.0.CO;2-6)
