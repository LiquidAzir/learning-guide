---
title: The Toolkit
subtitle: The mole, formulas, balanced equations, and the handful of numbers and logarithms that make the rest of chemistry readable.
part: I · Foundations
---

## Why start with tools

Chemistry has its own compact language. Its nouns are formulas, its verbs are equations, and its unit of counting is a number so large it needs a name of its own. This chapter teaches the language. You will not need to do the arithmetic yourself, but you will see it done and every symbol explained, because the numbers are where chemistry keeps its meaning.

## The mole: counting atoms by weighing them

Atoms are absurdly small and absurdly numerous. You cannot count them, but you can weigh them, and the **mole** is the trick that converts one to the other.

A mole is simply a fixed number of things: $6.022 \times 10^{23}$ of them, a quantity called **Avogadro's number** and, since 2019, defined to be exactly $6.02214076 \times 10^{23}$.[^1] Why that number? Historically, because it was chosen so that one mole of atoms of a given element weighs, in grams, the number that the periodic table lists as that element's **atomic mass**. Since 2019 the count is simply fixed by definition, and the gram correspondence survives as a measured fact rather than a definition, accurate to about one part in a billion, which is far closer than any chemistry needs. Carbon's atomic mass is 12.01, so a mole of carbon atoms weighs 12.01 grams. Hydrogen's is 1.008, so a mole of hydrogen atoms weighs about a gram.

Add up the atoms in a molecule and you get its **molar mass**: the mass of one mole of that molecule. Water, H₂O, is two hydrogens and one oxygen (atomic mass 16.00), so its molar mass is $2(1.008) + 16.00 = 18.02$ grams per mole. A tablespoon of water is about 18 grams. It therefore contains about $6 \times 10^{23}$ molecules. That is the point of the mole: it lets you weigh out a spoonful and know, to good precision, how many molecules you are holding.

:::try
A glass of water is about 250 grams, which is $250 / 18 \approx 14$ moles, or about $8 \times 10^{24}$ molecules. The number of glasses of water in all the oceans is around $5 \times 10^{21}$. So there are more molecules in one glass than there are glasses in the sea, by a factor of a thousand. Take a drink and you have almost certainly swallowed a molecule that once passed through a dinosaur.
:::

## Formulas: the nouns

A **chemical formula** names a substance by listing its atoms. There are several kinds, each telling you more than the last.

- An **empirical formula** gives the simplest ratio of atoms: CH₂O for glucose. Many different substances share one.
- A **molecular formula** gives the actual count in one molecule: C₆H₁₂O₆ for glucose. The subscript after each element symbol is the number of atoms.
- A **structural formula** shows which atoms are bonded to which. This is the one that matters, because two molecules with identical molecular formulas but different connections, called **isomers**, can be as different as ethanol (the alcohol in wine) and dimethyl ether (an anesthetic gas). Both are C₂H₆O.

Chemists draw structural formulas as skeletons: lines for bonds, letters for atoms, and by convention carbon atoms at every unlabeled corner, with hydrogens left out because everyone knows carbon has four bonds and the missing ones must be hydrogens. Once you can read these drawings, chapter 12 opens up.

Charged particles get a superscript. Na⁺ is a sodium atom that has lost one electron; Cl⁻ is a chlorine atom that has gained one. These are **ions**, and the plus or minus counts the imbalance.

## Equations: the verbs

A **chemical equation** describes a change. Reactants on the left, an arrow, products on the right:

$$2\,\mathrm{H_2} + \mathrm{O_2} \rightarrow 2\,\mathrm{H_2O}$$

Read it as: two molecules of hydrogen plus one of oxygen become two molecules of water. The numbers in front, the **coefficients**, are there because of the oldest law in chemistry: atoms are neither created nor destroyed in a reaction, only rearranged. Count them. Left side: 4 hydrogens, 2 oxygens. Right side: 4 hydrogens, 2 oxygens. The equation **balances**. An equation that does not balance describes something that cannot happen.

Because the coefficients also count moles, the same equation says: 2 moles of hydrogen react with 1 mole of oxygen to give 2 moles of water. This is **stoichiometry**, the arithmetic of reactions, and it is how chemists decide how much of each ingredient to use.

:::math Limiting reagents
Suppose you have 10 moles of hydrogen and 3 moles of oxygen. The equation needs them in a 2:1 ratio, so 3 moles of oxygen can only consume 6 moles of hydrogen. Oxygen runs out first; it is the **limiting reagent**. You will get 6 moles of water, and 4 moles of hydrogen will be left over unreacted. The **theoretical yield** is 6 moles. In practice some product is always lost, and the **percent yield** is what you actually collect divided by the theoretical maximum. Real synthetic chemistry lives and dies by yields: a ten-step synthesis at 80% per step delivers only $0.8^{10} \approx 11\%$ of what you started with.

In grams, since that is what you weigh out: 10 moles of H₂ is 20 g, 3 moles of O₂ is 96 g, the 6 moles of water you get weigh 108 g, and the 4 leftover moles of hydrogen weigh 8 g. Note that $20 + 96 = 116 = 108 + 8$. Mass is conserved, as the next chapter will show Lavoisier proving.
:::

## Concentration

Most chemistry happens in solution, and **concentration** says how much is dissolved in how much. The standard measure is **molarity** (symbol M): moles of dissolved substance per liter of solution. Seawater is about 0.5 M in salt; your blood is about 0.14 M in sodium ions; a 1 M solution of hydrochloric acid will burn you. For trace amounts, chemists use **parts per million** (ppm). In a solution this usually means grams of substance per million grams of mixture; for gases it usually means molecules per million molecules, which is the same as parts per million by volume. Always check which is meant. Carbon dioxide in the atmosphere is about 430 ppm by volume and rising by roughly 2.5 ppm a year.[^4]

## Energy: the numbers to keep in mind

Chemistry is energy bookkeeping, and it uses the **kilojoule per mole** (kJ/mol): the energy involved when a mole's worth of something happens. Three benchmark numbers make the rest of the guide readable. In the second row, $R$ is the **gas constant**, 8.314 joules per mole per kelvin, and $T$ is the temperature in kelvin, so the product $RT$ is about 2.5 kJ/mol at room temperature. That combination appears in nearly every equation in chapters 9 through 11, always playing the same role: the size of the thermal jostle.[^5]

| Quantity | Approximate value | Meaning |
|---|---|---|
| A typical chemical bond | 200 to 500 kJ/mol | The energy needed to pull two bonded atoms apart |
| Thermal energy at room temperature ($RT$) | 2.5 kJ/mol | The typical jostle molecules get from heat |
| One electron-volt per molecule | 96.5 kJ/mol | The bridge to physics, which counts energy in electron-volts |

The comparison between the first two lines is the reason the world holds together. Bonds are a hundred times stronger than the thermal shaking at room temperature, so molecules do not fall apart on their own. Heat things to a few thousand degrees and the ratio narrows; that is why flames and stars are full of broken molecules and free atoms.

## Logarithms and pH

Chemistry deals with concentrations that span twenty powers of ten, so it uses logarithms to compress them. The best-known example is **pH**, defined in 1909 by Søren Sørensen as the negative logarithm of the hydrogen ion concentration:[^2]

$$\mathrm{pH} = -\log_{10}[\mathrm{H^+}]$$

The square brackets mean "concentration of, in moles per liter." Pure water has $[\mathrm{H^+}] = 10^{-7}$ M, so its pH is 7. Lemon juice, pH 2, has $10^{-2}$ M: a hundred thousand times more acidic than water. Each step of one pH unit is a factor of ten. The same "p" trick is used for other quantities: pK for equilibrium constants, pOH for hydroxide. Whenever you see a lowercase p in chemistry, read it as "minus the log of."

## The equilibrium constant, previewed

Many reactions do not go to completion; they stop at a balance point where forward and reverse reactions run at equal rates. The **equilibrium constant** $K$ measures where that balance sits. A very large $K$ (say $10^{10}$) means the reaction runs essentially to completion; a very small one ($10^{-10}$) means almost nothing reacts; $K$ near 1 means a real mixture. Chapter 11 develops this fully. For now, when you see $K$, read it as "how far the reaction goes."

## Reading the periodic table

The periodic table is chapter 4's subject, but you need its layout now. Each box is an element, with its **atomic number** (the number of protons, which defines the element) and its atomic mass. Rows are **periods**; columns are **groups**. Elements in the same group behave similarly, because, as chapter 5 explains, they have the same arrangement of outer electrons. The far-left column (lithium, sodium, potassium) are soft metals that react violently with water. The far-right column (helium, neon, argon) are gases that react with almost nothing. That regularity is the single most useful fact in chemistry.

**Isotopes** are atoms of the same element with different numbers of neutrons. Carbon-12 and carbon-14 are both carbon (six protons), but carbon-14 has two extra neutrons and is radioactive. The atomic mass printed on the table is the weighted average over the isotopes found in nature, which is why it is rarely a whole number.

## Estimation, uncertainty, and honesty

Chemists estimate constantly. How many molecules of air in one breath? A breath is about half a liter; at room temperature a mole of gas fills about 24 liters; so a breath is roughly $1/50$ of a mole, about $10^{22}$ molecules. The habit of getting the power of ten right before the details is as valuable here as in physics.

Every measurement has an uncertainty, and chemists report it through **significant figures**: writing 18.02 g/mol claims you know the value to about one part in two thousand; writing 18 claims much less. Purity is the chemist's other honesty problem. A "pure" reagent may be 99.9% what the label says, and the 0.1% has ruined many experiments. National laboratories such as NIST sell **certified reference materials**, samples of known composition, so that laboratories around the world can check their instruments against the same standard.[^3]

## Physics you will need

This guide assumes nothing, but four ideas from physics recur and each has a fuller treatment in the physics guide.

- **Charge and Coulomb's law.** Opposite charges attract, like charges repel, with a force that weakens as the square of the distance. Every chemical bond is, at bottom, positive nuclei and negative electrons attracting. See [electromagnetism in the physics guide](#/physics/light).
- **Energy is conserved** and comes in kinds that convert into one another. Chemical energy is potential energy stored in the arrangement of electrons. See [conservation laws](#/physics/conservation).
- **Entropy** measures the number of ways a state can be arranged, and total entropy never decreases. It decides whether reactions happen (chapter 9). See [heat and entropy](#/physics/heat).
- **Electrons are waves** confined to atoms in specific patterns called orbitals, and only two electrons can share one pattern. This one fact generates the whole periodic table (chapter 5). See [the quantum world](#/physics/quantum).

:::try Put the idea to work
You have 18 g of water. Using a molar mass of about 18 g/mol, how many moles is that? Why is it not 18 molecules?

:::answer Show the reasoning
Mass divided by molar mass gives 1 mol. A mole is a counting unit containing about 6.02 × 10²³ entities, so this sample contains about that many water molecules. Grams measure mass; moles count an enormous number of particles.
:::
:::

## Summary

- The mole ($6.022 \times 10^{23}$ things) converts between counting atoms and weighing grams; molar mass is the weight of a mole.
- Formulas name substances; structural formulas, which show connections, are the ones that matter, because isomers with the same atoms can be utterly different.
- Equations must balance because atoms are conserved; their coefficients give the recipe, and the limiting reagent sets the yield.
- Bonds are worth hundreds of kJ/mol; thermal jostle at room temperature is about 2.5 kJ/mol. That ratio is why matter is stable.
- pH and its cousins compress huge ranges with logarithms; $K$ measures how far a reaction goes.
- Groups in the periodic table behave alike; isotopes differ only in neutrons.

[^1]: Bureau International des Poids et Mesures (2019). *The International System of Units (SI)*, 9th edition, Section 2.3.1: definition of the mole. [bipm.org/en/publications/si-brochure](https://www.bipm.org/en/publications/si-brochure)
[^2]: Sørensen, S. P. L. (1909). "Enzymstudien. II. Über die Messung und die Bedeutung der Wasserstoffionenkonzentration bei enzymatischen Prozessen." *Biochemische Zeitschrift*, 21, 131–304.
[^3]: National Institute of Standards and Technology. "Standard Reference Materials." [nist.gov/srm](https://www.nist.gov/srm)
[^4]: NOAA Global Monitoring Laboratory. "Trends in Atmospheric Carbon Dioxide," Mauna Loa Observatory. [gml.noaa.gov/ccgg/trends](https://gml.noaa.gov/ccgg/trends/)
[^5]: Values of $R$, the electron-volt conversion, and the molar volume of an ideal gas (24.5 litres at 25 °C and 1 atmosphere) are the CODATA 2022 recommended values, tabulated by NIST. [physics.nist.gov/constants](https://physics.nist.gov/cuu/Constants/)
