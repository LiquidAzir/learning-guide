---
title: Equilibrium, Acids, and Bases
subtitle: Most reactions stop partway. Where they stop, how to push them, and the proton-passing chemistry that governs everything from your blood to the oceans.
part: IV · Change
---

## How can a reaction continue without the mixture changing?

Free energy sets how far a reaction goes ($\Delta G^\circ = -RT\ln K$) and kinetics sets how fast. This chapter looks closely at the "how far": the balance point most reactions settle into, the rules for shifting it, and the single most important class of equilibria, the exchange of protons between acids and bases.

## Reactions that stop in the middle

Write a reaction as $\mathrm{A + B \rightarrow C + D}$ and it sounds one-way. Most are not. Products C and D can react to give back A and B, and as products accumulate the reverse reaction speeds up while the forward reaction slows as reactants deplete. Eventually the two rates match. Nothing visible changes, but at the molecular level both reactions are running flat out, canceling. This is **dynamic equilibrium**, and it is written with a double arrow: $\mathrm{A + B \rightleftharpoons C + D}$.

Claude Berthollet noticed the clue in 1799 on Napoleon's expedition to Egypt: the salt lakes there were depositing sodium carbonate, the exact reverse of a reaction every chemist "knew" went only one way in the laboratory. The huge excess of salt in the lakes was pushing it backward.[^1] Concentrations, he realized, affect the direction. In 1864 the Norwegians Cato Guldberg and Peter Waage made it quantitative: at equilibrium, a specific ratio of concentrations is constant.[^2]

:::math The equilibrium constant
For $\mathrm{aA + bB \rightleftharpoons cC + dD}$, where the lowercase letters are the coefficients,
$$K = \frac{[\mathrm{C}]^c\,[\mathrm{D}]^d}{[\mathrm{A}]^a\,[\mathrm{B}]^b}$$
Square brackets mean concentration at equilibrium. Products on top, reactants below, each raised to its coefficient. $K$ depends only on temperature: change the amounts you start with and the system moves to a new set of concentrations with the *same* ratio. A huge $K$ means the reaction runs essentially to completion; a tiny one means it barely starts. Since $\Delta G^\circ = -RT\ln K$, this is just the free-energy verdict of chapter 9 written as a ratio.
:::

## Pushing an equilibrium around

If an equilibrium is a balance, you can tip it, and Henri Le Chatelier stated the rule in 1884: when a system at equilibrium is disturbed, it shifts in the direction that partly undoes the disturbance.[^3] Add more reactant and the system makes more product to use it up. Remove product as it forms and the reaction keeps making more. Raise the pressure on a gas reaction and it shifts toward the side with fewer molecules. Heat an endothermic reaction and it shifts forward, absorbing heat; heat an exothermic one and it shifts back.

**Le Chatelier's principle** is a rule of thumb rather than a law, but it is the basis of industrial chemistry, and the Haber–Bosch process is its textbook case.

:::key The Haber–Bosch compromise
$$\mathrm{N_2 + 3\,H_2 \rightleftharpoons 2\,NH_3}$$
Four molecules become two, so high pressure pushes toward ammonia. The reaction releases heat, so low temperature also favors ammonia. But at low temperature the rate, set by that enormous N≡N activation energy, is hopelessly slow even with iron catalyst. So the plant runs hot enough to be fast (400 to 500 °C), which cuts the equilibrium yield to about 15% per pass, and compensates with pressure (150 to 300 atmospheres) and with a trick Le Chatelier would approve: the ammonia is condensed out as it forms and the unreacted gases are recycled, so the reaction never reaches equilibrium and keeps running forward.[^9] Every reactor design in the chemical industry is some version of this three-way bargain between thermodynamics, kinetics, and engineering.
:::

## Acids and bases

The most pervasive equilibria in chemistry involve the smallest ion there is: the **proton**, H⁺, a hydrogen atom stripped of its electron. An **acid** gives protons away; a **base** takes them. That definition, from Johannes Brønsted and Thomas Lowry independently in 1923, replaced Svante Arrhenius's narrower 1880s version (acids release H⁺ in water, bases release OH⁻) and covers reactions with no water at all.[^4] Gilbert Lewis, the same year, offered a still broader one: an acid accepts an electron pair, a base donates one. Chemists use whichever fits.

In the Brønsted picture every acid–base reaction is a proton handoff, and every acid has a partner, its **conjugate base**, which is what remains after the proton leaves. Hydrochloric acid, HCl, hands a proton to water to give Cl⁻ (its conjugate base) and H₃O⁺, the **hydronium ion**, which is what "H⁺ in water" actually is. Ammonia, NH₃, takes a proton from water to give NH₄⁺ and OH⁻; water here is acting as the acid. Water can play either role; it is **amphoteric**, and it even reacts with itself:

$$\mathrm{2\,H_2O \rightleftharpoons H_3O^+ + OH^-} \qquad K_w = [\mathrm{H_3O^+}][\mathrm{OH^-}] = 10^{-14}$$

Here H₃O⁺ is the **hydronium ion**, and a substance like water that can act as either acid or base is **amphoteric**. That constant is the reason for the pH scale, and it holds at 25 °C; it rises with temperature, so neutral water at body heat sits slightly below pH 7. In pure water at room temperature the two ions are equal at $10^{-7}$ M each, so pH is 7. Add acid and $[\mathrm{H_3O^+}]$ rises, so $[\mathrm{OH^-}]$ must fall to keep the product at $10^{-14}$, and pH drops below 7. Add base and the reverse. At 25 °C, pH plus pOH always equals 14.

## Strong and weak

A **strong acid** hands over essentially every proton: HCl, sulfuric acid, nitric acid. Dissolve 0.1 mole per liter and you get 0.1 M H₃O⁺, pH 1. A **weak acid** gives up only a fraction, settling into an equilibrium:

$$\mathrm{CH_3COOH + H_2O \rightleftharpoons CH_3COO^- + H_3O^+} \qquad K_a = 1.8 \times 10^{-5}$$

Acetic acid, the acid in vinegar, has an **acid dissociation constant** $K_a$ of $1.8 \times 10^{-5}$: in a 0.1 M solution only about 1.3% of the molecules have given up a proton, and the pH is about 2.9 rather than 1. Chemists compress $K_a$ the same way they compress concentration: $\mathrm{p}K_a = -\log K_a$, so acetic acid's is 4.74. Lower p$K_a$ means stronger acid. Hydrochloric acid's is about −7; carbonic acid's (dissolved carbon dioxide) has an apparent value of 6.4; water's, treated as an acid on the convention used here, is 14, though you will also see 15.7 quoted on a different convention. A table of p$K_a$ values lets you predict which way any proton will move: from the lower p$K_a$ toward the higher.

:::math Buffers and the Henderson–Hasselbalch equation
Rearranging the $K_a$ expression and taking logarithms gives
$$\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\text{base}]}{[\text{acid}]}$$
where "acid" is the weak acid and "base" its conjugate base.[^5] Read it as: the pH of a mixture of a weak acid and its partner sits near the acid's p$K_a$, nudged up or down by the ratio of the two. A **buffer** is exactly such a mixture, and it resists pH change because added acid is soaked up by the base and added base by the acid, shifting the ratio a little but the logarithm of the ratio very little. Your blood is buffered at pH 7.4 mainly by carbonic acid and bicarbonate; drift by 0.3 either way is life-threatening, and your lungs and kidneys spend all day adjusting the ratio.

A buffer is not inexhaustible. Because the pH depends on the *ratio*, adding acid works only while there is conjugate base left to absorb it; once the ratio is badly lopsided, each further addition moves the logarithm sharply and the pH collapses. How much a buffer can absorb before that happens is its **buffer capacity**, and it is greatest when acid and base are present in equal amounts, that is, when the pH equals the p$K_a$.
:::

## Where acid–base chemistry shows up

**Titration.** Add base to an acid drop by drop, measuring pH; it stays low, then jumps sharply at the **equivalence point**, when the moles of base exactly match the moles of acid. A dye that changes color near that pH, an **indicator**, marks it. This is the classic way to measure how much acid is in anything.

**The oceans.** Seawater is a carbonate buffer at pH about 8.1. As it absorbs about a quarter of the carbon dioxide humans emit, the extra carbonic acid pushes the equilibrium and the pH has fallen by roughly 0.1 since preindustrial times. That sounds small; because pH is logarithmic it means about 30% more hydrogen ions, and it makes it harder for corals and shellfish to build calcium carbonate skeletons.[^6]

**Caves.** Rain picks up carbon dioxide, becomes weakly acidic, and dissolves limestone: $\mathrm{CaCO_3 + H_2CO_3 \rightleftharpoons Ca^{2+} + 2\,HCO_3^-}$. Where the water drips into an air-filled cave and loses its carbon dioxide, Le Chatelier pushes the reaction back and calcium carbonate redeposits as stalactites. The same equilibrium, run in your mouth by bacteria that make acid, dissolves tooth enamel; fluoride works by converting the enamel to a less soluble mineral.

**Solubility.** Dissolving a sparingly soluble salt is an equilibrium too, with its own constant, the **solubility product** $K_{sp}$. Adding an ion already present in the salt pushes the equilibrium back and precipitates it out, which is how kidney stones form and how water plants remove hardness.

:::frontier
The proton is the simplest ion and its behavior in water is still argued over. It does not exist as bare H⁺ or even simply as H₃O⁺, but shuttles through the hydrogen-bond network by a relay in which bonds rearrange faster than any molecule moves, a mechanism first proposed by Theodor von Grotthuss in 1806 and still being refined with femtosecond spectroscopy.[^7] At the other extreme, George Olah's **superacids**, billions of times stronger than sulfuric acid, protonate molecules nobody thought could accept a proton, including methane, and earned the 1994 Nobel Prize.[^8] And acid–base chemistry is now being run deliberately far from equilibrium in "pH-driven" molecular machines and in the acid–base gradients that power every cell (chapter 13).
:::

:::try Put the idea to work
At equilibrium, are reactant molecules no longer turning into product? Predict what happens immediately after extra reactant is added.

:::answer Show the reasoning
Forward and reverse reactions continue at equal rates. Adding reactant changes the reaction quotient and initially favors net movement toward products in the usual case. The mixture changes until the rates balance again; equilibrium is dynamic, not a molecular standstill.
:::
:::

## Summary

- Most reactions reach a dynamic equilibrium where forward and reverse rates match. The equilibrium constant $K$, a ratio of concentrations, says where; it depends only on temperature.
- Le Chatelier's principle: disturb an equilibrium and it shifts to partly undo the disturbance. Haber–Bosch is the industrial application.
- Acids donate protons, bases accept them (Brønsted–Lowry); every acid has a conjugate base. Water is both, and its self-ionization ($K_w = 10^{-14}$) defines the pH scale.
- Strong acids ionize completely; weak acids reach equilibrium, described by $K_a$ and p$K_a$. Protons flow from lower p$K_a$ to higher.
- Buffers, mixtures of a weak acid and its conjugate base, hold pH near the p$K_a$. Blood and seawater are buffered; ocean acidification is a shifting buffer.
- Titrations, caves, teeth, and kidney stones are all equilibrium chemistry.

[^1]: Berthollet, C. L. (1803). *Essai de statique chimique*. Paris: Firmin Didot. The Egyptian observations are described in the introduction.
[^2]: Guldberg, C. M., Waage, P. (1864). "Studier over Affiniteten." *Forhandlinger i Videnskabs-Selskabet i Christiania*, 35–45. Expanded in Guldberg, C. M., Waage, P. (1879). "Ueber die chemische Affinität." *Journal für Praktische Chemie*, 19, 69–114. [doi:10.1002/prac.18790190111](https://doi.org/10.1002/prac.18790190111)
[^3]: Le Chatelier, H. L. (1884). "Sur un énoncé général des lois des équilibres chimiques." *Comptes rendus de l'Académie des Sciences*, 99, 786–789.
[^4]: Brønsted, J. N. (1923). "Einige Bemerkungen über den Begriff der Säuren und Basen." *Recueil des Travaux Chimiques des Pays-Bas*, 42, 718–728. [doi:10.1002/recl.19230420815](https://doi.org/10.1002/recl.19230420815). Lowry, T. M. (1923). "The uniqueness of hydrogen." *Chemistry and Industry*, 42, 43–47. Lewis, G. N. (1923). *Valence and the Structure of Atoms and Molecules*. Chemical Catalog Company.
[^5]: Henderson, L. J. (1908). "Concerning the relationship between the strength of acids and their capacity to preserve neutrality." *American Journal of Physiology*, 21, 173–179. Hasselbalch, K. A. (1917). "Die Berechnung der Wasserstoffzahl des Blutes aus der freien und gebundenen Kohlensäure desselben." *Biochemische Zeitschrift*, 78, 112–144.
[^6]: Doney, S. C., Fabry, V. J., Feely, R. A., Kleypas, J. A. (2009). "Ocean Acidification: The Other CO₂ Problem." *Annual Review of Marine Science*, 1, 169–192. [doi:10.1146/annurev.marine.010908.163834](https://doi.org/10.1146/annurev.marine.010908.163834)
[^7]: de Grotthuss, C. J. T. (1806). "Sur la décomposition de l'eau et des corps qu'elle tient en dissolution à l'aide de l'électricité galvanique." *Annales de Chimie*, 58, 54–73. Modern picture: Marx, D., Tuckerman, M. E., Hutter, J., Parrinello, M. (1999). "The nature of the hydrated excess proton in water." *Nature*, 397, 601–604. [doi:10.1038/17579](https://doi.org/10.1038/17579)
[^8]: Olah, G. A. (1994). Nobel Lecture: "My Search for Carbocations and Their Role in Chemistry." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1994/olah/lecture/)
[^9]: Appl, M. (2011). "Ammonia, 2. Production Processes." In *Ullmann's Encyclopedia of Industrial Chemistry*. Wiley-VCH. [doi:10.1002/14356007.o02_o11](https://doi.org/10.1002/14356007.o02_o11)
