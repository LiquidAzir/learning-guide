---
title: Reactions
subtitle: The kinds of change atoms undergo, the bookkeeping of electrons that underlies half of them, and how that bookkeeping became the battery in your pocket.
part: IV · Change
---

## What does a balanced equation let you predict?

Molecules are atoms held by bonds. A **chemical reaction** is a rearrangement: bonds break, atoms regroup, new bonds form, and the substances at the end are different from the ones at the start. The toolkit chapter showed how to write and balance one. This chapter is about what kinds there are and what is really happening in them.

## Five families of reaction

Chemists sort reactions by what the atoms do. The categories overlap, but they organize the subject.

**Synthesis and decomposition.** Two things become one ($\mathrm{2\,H_2 + O_2 \rightarrow 2\,H_2O}$) or one becomes two ($\mathrm{2\,H_2O_2 \rightarrow 2\,H_2O + O_2}$, hydrogen peroxide fizzing on a cut). Decomposition often needs heat or light; synthesis often releases it.

**Combustion.** A fuel reacts with oxygen, releasing heat and light. Methane, wood, gasoline, and glucose in your cells all end up as carbon dioxide and water; the difference between a fire and a metabolism is that the cell does it in controlled steps at body temperature (chapter 13).

**Precipitation.** Two dissolved substances swap partners and one combination is insoluble, so it falls out as a solid. Mix clear solutions of silver nitrate and sodium chloride and white silver chloride appears instantly. Precipitation is how photographic film worked, how water is treated, and how kidney stones form.

**Acid–base.** A proton (H⁺) moves from one molecule to another. So important that chapter 11 is devoted to it.

**Redox.** Electrons move from one atom to another. Rusting, burning, breathing, batteries, photosynthesis, bleaching, and the extraction of every metal from its ore are all redox reactions. The rest of this chapter is mostly about them.

## Oxidation states: following the electrons

**Redox** is short for reduction–oxidation. **Oxidation** is loss of electrons; **reduction** is gain. (The names are historical: oxidation originally meant combining with oxygen, which does strip electrons; reduction meant getting a metal back from its ore, which "reduced" the ore's bulk.) The two always happen together: whatever loses electrons, something else gains them. A useful mnemonic is OIL RIG: oxidation is loss, reduction is gain.

To track electrons chemists assign each atom an **oxidation state**, a number that says how many electrons it has lost (positive) or gained (negative) compared with the free element. The rules are simple bookkeeping. A free element is 0. A simple ion has its charge (Na⁺ is +1). In compounds, oxygen is usually −2 and hydrogen +1, and everything else is whatever makes the total add up to the molecule's charge.

Rust: $\mathrm{4\,Fe + 3\,O_2 \rightarrow 2\,Fe_2O_3}$. Iron goes from 0 to +3 (oxidized; it lost electrons). Oxygen goes from 0 to −2 (reduced; it gained them). Twelve electrons change hands per four iron atoms. The **reducing agent** is the thing that donates electrons (iron); the **oxidizing agent** is the thing that takes them (oxygen). Strong oxidizing agents (oxygen, chlorine, bleach, permanganate) are hungry for electrons; strong reducing agents (alkali metals, hydrogen, carbon at high temperature) give them up easily. The whole of metallurgy is picking a reducing agent strong enough to pull a metal out of its oxide: carbon (as coke) for iron since the Iron Age, electricity for aluminium since 1886.

:::key
Redox is the fundamental transaction of chemistry because electrons are what bonds are made of. Every energy-releasing process you rely on, from a gas flame to the mitochondria in your cells to the battery in your phone, is electrons moving from a place where they are held loosely to a place where they are held tightly, with the energy difference released along the way.
:::

## Electrochemistry: making the electrons take the long way round

Here is the idea that turned redox into technology. In an ordinary redox reaction the electrons jump directly from the reducing agent to the oxidizing agent. But if you separate the two halves and connect them with a wire, the electrons have to travel *through the wire* to get from one to the other. A current flows. That is a **battery**, more precisely a **galvanic cell**, and it is redox with the electron transfer stretched out so you can use it.

Alessandro Volta built the first in 1800 by stacking zinc and copper discs separated by brine-soaked cloth (chapter 3).[^11] John Daniell's 1836 cell made the chemistry explicit: a zinc rod in zinc sulfate solution, a copper rod in copper sulfate solution, joined by a porous barrier and a wire.[^1] Zinc is oxidized ($\mathrm{Zn \rightarrow Zn^{2+} + 2e^-}$) at the **anode**, the electrons flow through the wire, and copper ions are reduced ($\mathrm{Cu^{2+} + 2e^- \rightarrow Cu}$) at the **cathode**. Those two names are defined by the chemistry, not by the wiring: oxidation always happens at the anode and reduction always at the cathode, in a battery and in electrolysis alike. The zinc rod slowly dissolves; the copper rod slowly grows; the wire carries a current at about 1.1 volts.[^10]

Where does the voltage come from? Each half-reaction has a characteristic tendency to gain electrons, measured against a standard as its **reduction potential**. Chemists tabulate these for hundreds of half-reactions; the difference between two of them is the voltage of the cell they would make. Lithium sits at the bottom of the table (−3.04 V; it gives electrons up more readily than anything), fluorine at the top (+2.87 V; it takes them most greedily).[^10] The bigger the gap, the higher the voltage and the more energy per electron.

:::math The Nernst equation
The voltage also depends on concentrations, and Walther Nernst worked out how in 1889:[^2]
$$E = E^\circ - \frac{RT}{nF}\ln Q$$
$E$ is the cell voltage; $E^\circ$ is the standard voltage from the tables; $R$ and $T$ are the gas constant and temperature; $n$ is the number of electrons transferred per reaction; $F$ is the **Faraday constant**, the charge on a mole of electrons (96,485 coulombs); $\ln$ is the natural logarithm, the same compression trick as chapter 2's $\log_{10}$ but in base $e$; and $Q$, the **reaction quotient**, is the ratio of product to reactant concentrations at the moment you look. Read it as: the voltage falls as products build up and reactants deplete. That is why a battery's voltage sags as it drains, and why a voltmeter can measure a concentration, which is exactly what a pH meter does.
:::

Run the cell in reverse by pushing current in from outside and you drive the reaction backward: **electrolysis**. This is how a rechargeable battery recharges, how aluminium is extracted (the Hall–Héroult process of 1886 turned it from a precious metal into foil), how chlorine and sodium hydroxide are made from brine, and how water is split into hydrogen and oxygen.[^3] Faraday established in 1834 that the amount of substance produced is exactly proportional to the charge passed, one mole of electrons per mole of a singly charged ion, which is where his constant comes from.[^4]

## The battery in your pocket

The lithium-ion battery is the most consequential piece of electrochemistry since Volta, and it took three people and forty years.[^5] In the 1970s Stanley Whittingham showed that lithium ions could slip in and out of the layered crystal of titanium disulfide, a process called **intercalation**, storing charge without destroying the electrode; his cell used lithium metal, which tended to catch fire.[^6] In 1980 John Goodenough replaced the sulfide with cobalt oxide, doubling the voltage to about 4 V.[^7] In 1985 Akira Yoshino replaced the dangerous lithium metal anode with graphite, which lithium ions also intercalate into, producing a cell with no metallic lithium anywhere. Sony commercialized it in 1991. The three shared the 2019 Nobel Prize in Chemistry.

In a lithium-ion cell nothing is consumed. Lithium ions shuttle from graphite to cobalt oxide during discharge and back during charging, with electrons taking the external route each time. That reversibility is why it can cycle thousands of times. Its limits are chemical too: cobalt is scarce and grimly mined, capacity is capped by how many ions the crystals will hold, and the flammable liquid electrolyte is why phones occasionally catch fire. Solid electrolytes, silicon anodes, and sodium in place of lithium are the ways out; the Latest Research section tracks them.

## Fuel cells and corrosion

A **fuel cell** is a battery that is refueled rather than recharged: hydrogen is oxidized at one electrode, oxygen reduced at the other, water is the only product, and the current runs a motor. William Grove built one in 1839.[^8] They powered the Apollo spacecraft and now power some buses and forklifts; their cost lies mostly in the platinum catalyst needed to make the oxygen reaction fast (chapter 10).

**Corrosion** is electrochemistry you did not ask for. A drop of water on steel becomes a tiny galvanic cell: iron is oxidized where oxygen is scarce, oxygen is reduced where it is plentiful, and the dissolved ions meet and precipitate as rust. Salt makes the water conductive and speeds everything up, which is why cars rust faster in winter. The global cost has been estimated at about 3% of world economic output.[^9] The defenses are electrochemical too: zinc coating (galvanizing) sacrifices itself because zinc is oxidized more readily than iron, and ships and pipelines are protected by bolting on blocks of zinc or magnesium that corrode in the steel's place.

## Reactions do not happen all at once

An equation like $\mathrm{2\,H_2 + O_2 \rightarrow 2\,H_2O}$ describes the start and the end. It does not describe the path. Three hydrogen and oxygen molecules never meet simultaneously and rearrange in one step. Instead the reaction proceeds through a sequence of simpler collisions, a **mechanism**, involving short-lived **intermediates** such as free hydrogen atoms and OH radicals. Working out mechanisms, and using them to make reactions faster or slower or to steer them toward one product, is the subject of chapter 10. The point to carry forward is that a balanced equation is a summary, not a description.

:::try Put the idea to work
For 2H₂ + O₂ → 2H₂O, start with 3 mol H₂ and 2 mol O₂. Which reactant runs out, and how much water can form?

:::answer Show the reasoning
Hydrogen limits the reaction. Three moles of H₂ need 1.5 mol O₂ and can form 3 mol H₂O, leaving 0.5 mol O₂. Compare amounts using the equation's ratios; the reactant with the smaller raw mole count is not automatically the limiting one. This assumes complete reaction with no side products.
:::
:::

## Summary

- Reactions rearrange atoms; the main families are synthesis and decomposition, combustion, precipitation, acid–base, and redox.
- Redox means electron transfer; oxidation states track it; oxidation and reduction always occur together.
- Separating the two halves of a redox reaction and connecting them with a wire makes a battery. Reduction potentials give the voltage; the Nernst equation adds the effect of concentration.
- Electrolysis runs redox backward and makes aluminium, chlorine, hydrogen, and recharged batteries.
- Lithium-ion batteries shuttle ions between two intercalation electrodes and won the 2019 Nobel Prize; corrosion is a battery you did not want.
- A balanced equation is a summary; the actual path is a mechanism of simple steps.

[^1]: Daniell, J. F. (1836). "On Voltaic Combinations." *Philosophical Transactions of the Royal Society*, 126, 107–124. [doi:10.1098/rstl.1836.0012](https://doi.org/10.1098/rstl.1836.0012)
[^2]: Nernst, W. (1889). "Die elektromotorische Wirksamkeit der Jonen." *Zeitschrift für Physikalische Chemie*, 4, 129–181. [doi:10.1515/zpch-1889-0412](https://doi.org/10.1515/zpch-1889-0412)
[^3]: Hall, C. M. (1889). U.S. Patent 400,664, "Process of Reducing Aluminium from its Fluoride Salts by Electrolysis." Héroult, P. (1886). French Patent 175,711.
[^4]: Faraday, M. (1834). "Experimental Researches in Electricity. Seventh Series." *Philosophical Transactions of the Royal Society*, 124, 77–122. [doi:10.1098/rstl.1834.0008](https://doi.org/10.1098/rstl.1834.0008)
[^5]: The Nobel Prize in Chemistry 2019 (John B. Goodenough, M. Stanley Whittingham, Akira Yoshino). Press release, 9 October 2019. [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2019/press-release/)
[^6]: Whittingham, M. S. (1976). "Electrical Energy Storage and Intercalation Chemistry." *Science*, 192, 1126–1127. [doi:10.1126/science.192.4244.1126](https://doi.org/10.1126/science.192.4244.1126)
[^7]: Mizushima, K., Jones, P. C., Wiseman, P. J., Goodenough, J. B. (1980). "LiₓCoO₂ (0<x<1): A new cathode material for batteries of high energy density." *Materials Research Bulletin*, 15(6), 783–789. [doi:10.1016/0025-5408(80)90012-4](https://doi.org/10.1016/0025-5408(80)90012-4)
[^8]: Grove, W. R. (1839). "On Voltaic Series and the Combination of Gases by Platinum." *Philosophical Magazine*, 14(86–87), 127–130. [doi:10.1080/14786443908649684](https://doi.org/10.1080/14786443908649684)
[^9]: Koch, G. et al. (2016). *International Measures of Prevention, Application, and Economics of Corrosion Technologies Study*. NACE International. Estimated global cost US$2.5 trillion, about 3.4% of global GDP in 2013. [impact.nace.org](http://impact.nace.org/documents/Nace-International-Report.pdf)
[^10]: Standard reduction potentials and the Faraday constant are tabulated in the CRC *Handbook of Chemistry and Physics*, 104th ed. (2023), Section 5 ("Electrochemical Series"), and in the CODATA 2022 constants ($F$ = 96 485.332 12 C/mol exactly). [physics.nist.gov/constants](https://physics.nist.gov/cuu/Constants/)
[^11]: Volta, A. (1800). "On the Electricity excited by the mere Contact of conducting Substances of different kinds." *Philosophical Transactions of the Royal Society*, 90, 403–431. [doi:10.1098/rstl.1800.0018](https://doi.org/10.1098/rstl.1800.0018)
