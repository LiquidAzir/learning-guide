---
title: Energy and Why Reactions Go
subtitle: Heat is not the whole story. The quantity that decides whether a reaction happens is free energy, and Gibbs found it in 1876.
part: IV · Change
---

## What makes a reaction energetically favorable?

Reactions rearrange atoms and electrons. Some, like burning, release energy; others, like charging a battery, need energy put in. This chapter is about the accounting, and about the question the accounting was invented to answer: given a possible reaction, will it actually happen?

## Heat in and heat out

The energy change in a reaction at constant pressure is its **enthalpy change**, written $\Delta H$ (delta H; delta means "change in"). If $\Delta H$ is negative the reaction releases heat and is **exothermic**: combustion, rusting, mixing acid and water. If positive it absorbs heat and is **endothermic**: melting ice, dissolving the ammonium nitrate in a cold pack, photosynthesis. Chemists measure $\Delta H$ with a **calorimeter**, an insulated vessel in which the reaction's heat warms a known mass of water; Lavoisier and Laplace built one out of ice in 1780 and used it to measure the heat given off by a guinea pig, showing that breathing is slow combustion.[^1]

Enthalpy has a property that makes it enormously useful, found by Germain Hess in 1840: the total $\Delta H$ for a reaction is the same whatever path it takes.[^2] **Hess's law** means you can add up known reactions to get the heat of an unknown one, and it means a single table of **standard enthalpies of formation** (the heat to make each compound from its elements) lets you compute the heat of any reaction between them. It is conservation of energy applied to chemistry, and the bond-energy calculation in chapter 6 is one version of it.

## Heat is not what decides

For much of the 1800s chemists assumed that reactions happen because they release heat: exothermic reactions go, endothermic ones do not. Julius Thomsen proposed it in 1854 and Marcellin Berthelot restated it as the "principle of maximum work" in 1867.[^3] It is wrong, and the counterexamples are on your desk. Ice melts at room temperature though melting *absorbs* heat. Salt dissolves in water though the process is slightly endothermic. Ammonium nitrate dissolves and makes the water so cold that cold packs are built on it. Something other than heat is being paid out.

That something is **entropy**, the measure of disorder, or more precisely of the number of ways a state can be arranged, introduced in the [physics guide](#/physics/heat). Every process in the universe runs in the direction that increases *total* entropy, system plus surroundings. A reaction can absorb heat and still proceed if it creates enough disorder: a solid dissolving into freely wandering ions, a liquid becoming a gas, one molecule splitting into three.

For a chemical reaction the entropy change $\Delta S$ is roughly predictable. Making gas from liquids or solids increases entropy a lot. Dissolving usually increases it. Building large molecules from small ones, or ordering things into a crystal, decreases it. Entropy is measured in joules per kelvin per mole, and typical values are tens to hundreds.

## Gibbs puts the two together

In 1876 Josiah Willard Gibbs, working alone at Yale and publishing in an obscure Connecticut journal, found the quantity that combines heat and entropy into a single verdict.[^4] It is now called the **Gibbs free energy**, $G$, and for a reaction at constant temperature and pressure its change is

$$\Delta G = \Delta H - T\Delta S$$

:::math Reading the Gibbs equation
$\Delta H$ is the heat released or absorbed. $T$ is the absolute temperature. $\Delta S$ is the entropy change of the system, and $T\Delta S$ is the heat that entropy change is "worth" at that temperature. Subtracting one from the other gives $\Delta G$, and the rule is simple: **a reaction proceeds on its own only if $\Delta G$ is negative.** Negative $\Delta H$ helps (releasing heat). Positive $\Delta S$ helps (creating disorder), and helps more the hotter it is. A reaction that is endothermic can still have negative $\Delta G$ if its entropy gain is large enough; a reaction that releases heat can still fail to go if it creates too much order.

Why "free"? Because $\Delta G$ is the maximum energy from the reaction that is *available* to do useful work; the rest, $T\Delta S$, is paid as a tax to the second law of thermodynamics. It is also exactly the energy a battery built on the reaction can deliver: $\Delta G = -nFE$, where $n$ is the number of electrons transferred, $F$ the Faraday constant, and $E$ the cell voltage, all from chapter 8.
:::

Melting ice is the cleanest example. $\Delta H = +6.0$ kJ/mol (heat absorbed) and $\Delta S = +22$ J/mol·K (a liquid is more disordered than a crystal).[^8] At 263 K (−10 °C), $T\Delta S = 5.8$ kJ/mol, less than $\Delta H$, so $\Delta G$ is positive and ice does not melt. At 283 K (+10 °C), $T\Delta S = 6.2$ kJ/mol, more than $\Delta H$, so $\Delta G$ is negative and it does. The crossover, where $\Delta G = 0$, is $T = \Delta H / \Delta S = 6000 / 22 = 273$ K. The melting point of ice falls out of two numbers.

| $\Delta H$ | $\Delta S$ | Result |
|---|---|---|
| Negative (releases heat) | Positive (more disorder) | Always proceeds. Combustion. |
| Positive (absorbs heat) | Negative (more order) | Never proceeds on its own. The reverse of combustion. |
| Negative | Negative | Proceeds at low temperature, not at high. Freezing; condensing. |
| Positive | Positive | Proceeds at high temperature, not at low. Melting; boiling; dissolving. |

:::key
Heat flow is not what drives chemistry. Free energy is. A reaction runs downhill in $G$, and $G$ counts both the energy released and the disorder created, weighted by temperature. This is why heating changes what reactions do: it raises the value of the entropy term. And it is why living things, which build order, must constantly pay for it by releasing heat and disorder into their surroundings.
:::

## Free energy and how far a reaction goes

$\Delta G$ does more than say yes or no. Its size sets the **equilibrium constant** $K$ that the next two chapters use: the ratio of products to reactants when the reaction has run as far as it will go.

$$\Delta G^\circ = -RT \ln K$$

The little circle means "under standard conditions": every substance at 1 mole per liter or 1 bar of pressure, at 298 K. Read it as: a large negative free-energy change means a huge $K$ (the reaction essentially goes to completion), a large positive one means a tiny $K$ (essentially nothing happens), and a $\Delta G^\circ$ near zero means a real mixture. Because of the logarithm, the scale is compressed: every 5.7 kJ/mol of $\Delta G^\circ$ at room temperature changes $K$ by a factor of ten. A reaction with $\Delta G^\circ = -57$ kJ/mol, modest on the scale of bond energies, has $K = 10^{10}$.

## Coupling: how life pays for order

Living cells build proteins, DNA, and membranes, all processes with positive $\Delta G$ that would never happen on their own. They manage it by **coupling**: pairing an uphill reaction with a downhill one so the total $\Delta G$ is negative. The universal currency is **ATP** (adenosine triphosphate), a molecule whose breakdown to ADP releases about 30 kJ/mol under standard conditions.[^5] Inside a cell the figure is larger, around 50 kJ/mol, because cells hold ATP far above its equilibrium ratio with ADP: the same concentration dependence the Nernst equation captured for voltages in chapter 8. An enzyme links that breakdown to whatever needs building, so that the two happen as one reaction with a net negative $\Delta G$. Your body cycles its entire weight in ATP every day. Chapter 13 shows how the ATP is made, by coupling in the other direction to the downhill oxidation of food.

Erwin Schrödinger put it memorably in 1944: a living organism "feeds on negative entropy," maintaining its own order by exporting disorder to its surroundings.[^6] In Gibbs's terms, life is a device for coupling.

## What free energy does not tell you

$\Delta G$ says whether a reaction *can* proceed and how far. It says nothing about how *fast*. Diamond has a higher free energy than graphite and should turn into it; the process takes longer than the age of the universe at room temperature. Gasoline and oxygen have a hugely negative $\Delta G$ for burning; they sit together indefinitely until a spark. The distinction between **thermodynamics** (will it go, and how far) and **kinetics** (how fast) is the single most important distinction in practical chemistry, and confusing the two is the most common mistake in the subject. The next chapter is about the fast-or-slow half.

:::frontier
Gibbs's framework is complete for systems at equilibrium, but most interesting chemistry, above all in living cells, happens far from equilibrium, with energy constantly flowing through. Extending thermodynamics to such systems is an active field. Ilya Prigogine won the 1977 Nobel Prize for showing how order can arise spontaneously in driven systems, and the last twenty years have produced exact results, the fluctuation theorems, relating the work done on small systems to their entropy production, verified on single molecules pulled by laser tweezers.[^7] Whether there is a general principle that explains why life is so good at coupling remains open.
:::

:::try Put the idea to work
An exothermic reaction is possible on paper but barely proceeds at room temperature. Is there a contradiction?

:::answer Show the reasoning
No. The overall energy change and the activation barrier answer different questions. A reaction can release energy overall yet require a difficult initial rearrangement. Thermodynamics addresses favorability; kinetics addresses rate. Free energy, rather than heat release alone, determines favorability at specified temperature and pressure.
:::
:::

## Summary

- Enthalpy $\Delta H$ is the heat of a reaction; Hess's law lets you compute it by adding known reactions.
- Heat release does not decide whether a reaction goes; entropy matters too, and the two combine in the Gibbs free energy, $\Delta G = \Delta H - T\Delta S$. Negative $\Delta G$ means the reaction proceeds.
- Temperature sets the weight of the entropy term, which is why melting, boiling, and dissolving switch on when heated.
- $\Delta G^\circ = -RT\ln K$ links free energy to how far a reaction goes.
- Life builds order by coupling uphill reactions to the downhill breakdown of ATP.
- Free energy says nothing about speed. Thermodynamics versus kinetics is the essential distinction.

[^1]: Lavoisier, A.-L., Laplace, P.-S. (1780). "Mémoire sur la chaleur." *Mémoires de l'Académie Royale des Sciences*, 355–408. English translation by H. Guerlac (1982), *Memoir on Heat*, Neale Watson Academic Publications.
[^2]: Hess, G. H. (1840). "Recherches thermochimiques." *Bulletin scientifique de l'Académie impériale des sciences de St.-Pétersbourg*, 8, 257–272.
[^3]: Thomsen, J. (1854). "Die Grundzüge eines thermo-chemischen Systems." *Annalen der Physik*, 92, 34–57. Berthelot, M. (1879). *Essai de mécanique chimique fondée sur la thermochimie*. Paris: Dunod. The principle of maximum work is stated in Vol. 1.
[^4]: Gibbs, J. W. (1876–1878). "On the Equilibrium of Heterogeneous Substances." *Transactions of the Connecticut Academy of Arts and Sciences*, 3, 108–248 and 343–524. [archive.org](https://archive.org/details/Onequilibriumhe00Gibb)
[^5]: Rosing, J., Slater, E. C. (1972). "The value of ΔG° for the hydrolysis of ATP." *Biochimica et Biophysica Acta*, 267(2), 275–290. [doi:10.1016/0005-2728(72)90116-8](https://doi.org/10.1016/0005-2728(72)90116-8)
[^6]: Schrödinger, E. (1944). *What is Life? The Physical Aspect of the Living Cell*. Cambridge University Press. Chapter 6.
[^8]: Enthalpy and entropy of fusion for water (6.01 kJ/mol and 22.0 J/mol·K at 273.15 K) from the NIST Chemistry WebBook, SRD 69. [webbook.nist.gov](https://webbook.nist.gov/chemistry/)
[^7]: Jarzynski, C. (1997). "Nonequilibrium Equality for Free Energy Differences." *Physical Review Letters*, 78, 2690. [doi:10.1103/PhysRevLett.78.2690](https://doi.org/10.1103/PhysRevLett.78.2690). Liphardt, J. et al. (2002). "Equilibrium Information from Nonequilibrium Measurements in an Experimental Test of Jarzynski's Equality." *Science*, 296, 1832–1835. [doi:10.1126/science.1071152](https://doi.org/10.1126/science.1071152)
