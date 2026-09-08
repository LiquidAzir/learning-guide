---
title: The Molecules of Life
subtitle: Water, four kinds of big molecule, and the enzymes that make chemistry happen a million times faster than it should. Everything a cell does is done by these.
part: II · The Cell and Its Chemistry
---

## How do a few kinds of molecule do so many jobs?

Chapter 3 gave the cell's architecture. This chapter is about the stuff: what the cell is made of and how its chemistry runs at body temperature at speeds that would otherwise take centuries. It leans on the chemistry guide for what atoms and bonds are; here the question is what biology does with them.

## Six elements and a solvent

By mass, a cell is about 70 percent water, and nearly all the rest is carbon, hydrogen, oxygen, nitrogen, phosphorus, and sulfur, with traces of a couple of dozen other elements, of which sodium, potassium, calcium, magnesium, chlorine, and iron matter most.[^1] **Water** is the medium because of one property: its molecules are polar, with a slight positive charge on the hydrogens and negative on the oxygen, so they stick to each other and to anything else charged or polar, and repel anything that is not. That single fact makes water an excellent solvent for salts and sugars, makes fats cluster together away from it (which is why membranes form on their own), makes proteins fold (their oily parts hide inside, their charged parts face out), and gives water the high heat capacity that keeps a body's temperature stable.

**Carbon** is the backbone because it forms four stable bonds and chains and rings of any length, which no other element does as well. Life's big molecules are all carbon skeletons decorated with a small set of chemical groups: hydroxyl (-OH), amino (-NH₂), carboxyl (-COOH), phosphate (-PO₄), and a few others, each with a predictable behavior.

## The four big molecules

Almost everything in a cell that is not water or small ions belongs to one of four families, and three of them are **polymers**: long chains of repeated units, built by joining units with the removal of a water molecule and broken by adding one back.

**Carbohydrates** are sugars and their chains. **Glucose**, a six-carbon ring, is the universal fuel; every cell on Earth can burn it. Chained together it becomes **starch** and **glycogen** (how plants and animals store it), **cellulose** (the tough wall of plant cells, the most abundant organic molecule on Earth, which humans cannot digest), and **chitin** (insect shells, fungal walls). Sugars also decorate proteins and mark cell surfaces; your blood type is a sugar pattern.

**Lipids** are the oily ones: fats, oils, phospholipids, and steroids like cholesterol. They are not polymers but they cluster because water excludes them. A **fat** is three fatty-acid chains on a glycerol backbone and stores energy at about twice the density of carbohydrate, which is why bodies store it. **Phospholipids** make the membranes (chapter 3). **Cholesterol** stiffens membranes and is the starting material for steroid hormones (testosterone, estrogen, cortisol) and vitamin D. Saturated fats have no double bonds in their chains and pack tightly (solid butter); unsaturated fats have kinks and stay liquid (oil).

**Proteins** do almost everything else, and the rest of this chapter is mostly about them. A protein is a chain of **amino acids**, of which life uses twenty, each with the same backbone and a different side group: some oily, some charged, some bulky, some tiny. A typical protein is 300 to 500 amino acids long; the chain folds, driven mainly by hiding its oily side groups from water, into a specific three-dimensional shape, and the shape is the function. Enzymes, antibodies, receptors, the fibers of muscle and hair, the channels in membranes, the motors that haul cargo, hemoglobin: all proteins. The human genome encodes about 20,000 kinds; any one cell makes perhaps half of them, in many modified versions.[^2]

**Nucleic acids**, DNA and RNA, are chains of **nucleotides**, each a sugar, a phosphate, and one of four bases. They store and carry information, and chapter 6 is about them. One nucleotide, **ATP** (adenosine triphosphate), doubles as the cell's energy currency: cells use energy to make ATP and couple its hydrolysis to processes that need energy. The release is the net free-energy change of the whole reaction, including interactions with water; breaking a bond alone costs energy. You turn over your own body weight in ATP every day.[^3]

:::key
Life is built from about six elements in water, arranged into four kinds of molecule: sugars for fuel and structure, lipids for membranes and storage, proteins for doing, and nucleic acids for information. Proteins are chains of twenty amino acids that fold into shapes, and the shape is the function. The variety of life at the molecular level comes not from many kinds of parts but from many arrangements of a few.
:::

## Why proteins fold

A protein's sequence determines its shape, and the shape determines what it does. Christian Anfinsen showed in the 1960s that a protein unfolded by chemicals refolds itself correctly when the chemicals are removed: the information for the fold is in the sequence.[^4] Predicting the fold from the sequence was then one of biology's great unsolved problems for fifty years, because a chain of 300 amino acids can in principle adopt more shapes than there are atoms in the universe and yet finds its one correct fold in milliseconds (Levinthal's paradox, resolved by the understanding that folding is funneled: partly folded states are more stable than unfolded ones, so the chain slides downhill).

In 2020 the problem was, for practical purposes, solved by artificial intelligence. **AlphaFold**, a neural network trained on the 170,000 protein structures that had been solved by X-ray crystallography and electron microscopy over sixty years, predicted structures from sequence with accuracy comparable to experiment, and by 2022 had predicted the shape of essentially every protein known, some 200 million.[^5] Its 2024 successor predicts how proteins bind DNA, RNA, small molecules, and each other. The 2024 Nobel Prize in Chemistry went to its creators and to David Baker, who designs proteins that have never existed. The AI guide's chapter on neural networks explains how; what matters here is that biology now has the shape of nearly every part.

When folding goes wrong, the results are diseases: misfolded proteins that clump are the cause of Alzheimer's (amyloid-beta and tau), Parkinson's (alpha-synuclein), Huntington's, and the prion diseases, in which a misfolded protein converts normal copies to its own shape and spreads like an infection with no genes at all.[^6]

## Enzymes: chemistry at body temperature

Most of the reactions a cell needs would, left alone, take years to centuries. Sugar does not burn in a glass of water. Yet a cell burns it in seconds, at 37°C, because of **enzymes**: proteins that bind specific molecules (their **substrates**) in a pocket (the **active site**) shaped to fit them, hold them in the orientation that lets the reaction happen, strain their bonds, and release the products, unchanged themselves and ready for the next round. A single enzyme molecule can process thousands to millions of substrate molecules per second; catalase, which destroys hydrogen peroxide, is among the fastest, at about 40 million per second. The largest accelerations belong to other enzymes: orotidine-5'-phosphate decarboxylase speeds up a reaction that would otherwise take 78 million years, an enhancement of about 10^17.[^7]

Enzymes are why life can be specific. Each catalyzes one reaction or a narrow family, so a cell with a few thousand enzymes runs a few thousand reactions, in parallel, without their interfering. Nearly all enzyme names end in *-ase*: lactase breaks down lactose, DNA polymerase builds DNA, ATP synthase makes ATP.

:::math How fast an enzyme goes
An enzyme's speed depends on how much substrate is around, and the relationship, worked out by Leonor Michaelis and Maud Menten in 1913 and put in its modern steady-state form by Briggs and Haldane in 1925, is the most used equation in biochemistry:

$$v = \frac{V_{\max}\,[S]}{K_M + [S]}$$

Here $v$ is the reaction rate (product made per second), $[S]$ is the substrate concentration, $V_{\max}$ is the top speed, reached when every enzyme molecule is busy all the time, and $K_M$ is the substrate concentration at which the enzyme runs at half its top speed. When substrate is scarce ($[S]$ much smaller than $K_M$) the rate is roughly proportional to $[S]$: double the substrate, double the speed. When substrate is abundant ($[S]$ much larger than $K_M$) the rate flattens at $V_{\max}$, because the enzyme is saturated and adding more substrate does nothing. A low $K_M$ means the enzyme grabs its substrate even when it is rare.

*Why it matters.* Alcohol is broken down by an enzyme with a low $K_M$ and a low $V_{\max}$: it is saturated after about one drink, so the body clears alcohol at a fixed rate (roughly one standard drink per hour) regardless of how much you have had. Drinking faster does not clear it faster; it only raises the peak.[^8]
:::

Enzymes are controlled, not just present. Many are switched on or off by small molecules binding at a second site, often the end product of the pathway they start, so the pathway shuts itself off when there is enough (**feedback inhibition**). Others are switched by having a phosphate attached or removed. Most drugs are enzyme inhibitors or receptor binders: aspirin blocks the enzyme that makes prostaglandins; statins block the enzyme that makes cholesterol; penicillin blocks a bacterial enzyme that builds cell walls; most antivirals block the enzymes a virus uses to copy itself.

## pH, salt, and why the details matter

A cell's chemistry works only within narrow limits. Blood pH is held between 7.35 and 7.45; a shift of 0.3 in either direction is a medical emergency, because enzymes' active sites depend on the charge of their amino acids, and charge depends on pH. Salt concentrations are held within a few percent because water follows salt across membranes (**osmosis**), and a cell in the wrong salt concentration swells and bursts or shrivels. Temperature matters for the same reason: a fever of 41°C disrupts enzyme kinetics and membranes faster than the body can compensate; 43°C is usually fatal. **Homeostasis**, the body's maintenance of these constants, is the subject of chapter 12, and its point is chemical: the enzymes only work in one narrow world, so the body builds that world and keeps it.

:::story The chemistry of a hangover
Ethanol is oxidized in the liver, by the enzyme alcohol dehydrogenase, to acetaldehyde, which is toxic and causes flushing, nausea, and headache; acetaldehyde is then oxidized by a second enzyme, aldehyde dehydrogenase, to harmless acetate. About 40 percent of East Asians carry a variant of the second enzyme that works at a fraction of the normal rate, so acetaldehyde accumulates after even one drink, producing flushing and discomfort within minutes.[^9] The variant is a single letter change in one gene, producing a single amino-acid change (glutamate to lysine at position 504 of the precursor protein, often numbered 487 in the mature enzyme) in a protein of 517 amino acids, and it is enough to alter the behavior of hundreds of millions of people toward alcohol. Carriers have much lower rates of alcoholism, and higher rates of esophageal cancer if they drink anyway. Almost everything in this guide about how genes affect people works like this: one letter, one amino acid, one enzyme's speed, one visible consequence.
:::

:::try Put the idea to work
Two proteins contain the same kinds and numbers of amino acids, arranged in different orders. Must they perform the same job?

:::answer Show the reasoning
No. Sequence influences folding and the positions of interacting chemical groups. Different sequences can produce different shapes, binding surfaces, and activities. Composition alone does not specify a protein's structure or function, just as a letter count does not specify a sentence.
:::
:::

## Summary

- Cells are 70 percent water and otherwise mostly carbon, hydrogen, oxygen, nitrogen, phosphorus, and sulfur; water's polarity drives membrane formation and protein folding.
- The four big molecules: carbohydrates (fuel, structure), lipids (membranes, storage, hormones), proteins (twenty amino acids folded into shapes that do the work), and nucleic acids (information, and ATP as energy currency).
- A protein's shape is set by its sequence; AlphaFold predicted the shapes of essentially all known proteins in 2020–2022; misfolding causes Alzheimer's, Parkinson's, and prion diseases.
- Enzymes speed reactions by factors up to about 10^17 by binding substrates in shaped pockets; the Michaelis–Menten equation gives their speed, and saturation is why alcohol clears at a fixed rate.
- Enzymes work only within narrow pH, salt, and temperature limits, which is why the body maintains them.

[^1]: Alberts et al. (2022), chapter 2. Milo and Phillips (2015), *Cell Biology by the Numbers*, "What is the elemental composition of a cell?" Sterner, R. W., Elser, J. J. (2002). *Ecological Stoichiometry*. Princeton University Press.
[^2]: Berg, J. M. et al. (2019). *Biochemistry*, 9th ed. New York: W. H. Freeman, chapters 2–3, 11. Nurk, S. et al. (2022). "The complete sequence of a human genome." *Science*, 376(6588), 44–53. [doi:10.1126/science.abj6987](https://doi.org/10.1126/science.abj6987) (19,969 protein-coding genes).
[^3]: Berg et al. (2019), chapter 15. Milo and Phillips (2015), "How much energy is released in ATP hydrolysis?" and "What is the power consumption of a cell?" Törnroth-Horsefield, S., Neutze, R. (2008). "Opening and closing the metabolite gate." *PNAS*, 105(50), 19565–19566. [doi:10.1073/pnas.0810654106](https://doi.org/10.1073/pnas.0810654106) (the body-weight-per-day figure).
[^4]: Anfinsen, C. B. (1973). "Principles that Govern the Folding of Protein Chains." *Science*, 181(4096), 223–230. [doi:10.1126/science.181.4096.223](https://doi.org/10.1126/science.181.4096.223). Levinthal, C. (1969). "How to fold graciously," in *Mössbauer Spectroscopy in Biological Systems*. Dill, K. A., MacCallum, J. L. (2012). "The Protein-Folding Problem, 50 Years On." *Science*, 338(6110), 1042–1046. [doi:10.1126/science.1219021](https://doi.org/10.1126/science.1219021)
[^5]: Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589. [doi:10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2). Varadi, M. et al. (2022). "AlphaFold Protein Structure Database." *Nucleic Acids Research*, 50(D1), D439–D444. [doi:10.1093/nar/gkab1061](https://doi.org/10.1093/nar/gkab1061). Abramson, J. et al. (2024). "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature*, 630, 493–500. [doi:10.1038/s41586-024-07487-w](https://doi.org/10.1038/s41586-024-07487-w). Nobel Prize in Chemistry 2024. [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2024/summary/)
[^6]: Chiti, F., Dobson, C. M. (2017). "Protein Misfolding, Amyloid Formation, and Human Disease: A Summary of Progress Over the Last Decade." *Annual Review of Biochemistry*, 86, 27–68. [doi:10.1146/annurev-biochem-061516-045115](https://doi.org/10.1146/annurev-biochem-061516-045115). Prusiner, S. B. (1998). "Prions." *PNAS*, 95(23), 13363–13383. [doi:10.1073/pnas.95.23.13363](https://doi.org/10.1073/pnas.95.23.13363)
[^7]: Berg et al. (2019), chapter 8. Wolfenden, R., Snider, M. J. (2001). "The Depth of Chemical Time and the Power of Enzymes as Catalysts." *Accounts of Chemical Research*, 34(12), 938–945. [doi:10.1021/ar000058i](https://doi.org/10.1021/ar000058i). Bar-Even, A. et al. (2011). "The Moderately Efficient Enzyme: Evolutionary and Physicochemical Trends Shaping Enzyme Parameters." *Biochemistry*, 50(21), 4402–4410. [doi:10.1021/bi2002289](https://doi.org/10.1021/bi2002289)
[^8]: Michaelis, L., Menten, M. L. (1913). "Die Kinetik der Invertinwirkung." *Biochemische Zeitschrift*, 49, 333–369. English translation and commentary: Johnson, K. A., Goody, R. S. (2011). *Biochemistry*, 50(39), 8264–8269. [doi:10.1021/bi201284u](https://doi.org/10.1021/bi201284u). Cederbaum, A. I. (2012). "Alcohol Metabolism." *Clinics in Liver Disease*, 16(4), 667–685. [doi:10.1016/j.cld.2012.08.002](https://doi.org/10.1016/j.cld.2012.08.002)
[^9]: Brooks, P. J. et al. (2009). "The Alcohol Flushing Response: An Unrecognized Risk Factor for Esophageal Cancer from Alcohol Consumption." *PLoS Medicine*, 6(3), e1000050. [doi:10.1371/journal.pmed.1000050](https://doi.org/10.1371/journal.pmed.1000050). Edenberg, H. J. (2007). "The Genetics of Alcohol Metabolism: Role of Alcohol Dehydrogenase and Aldehyde Dehydrogenase Variants." *Alcohol Research & Health*, 30(1), 5–13.
