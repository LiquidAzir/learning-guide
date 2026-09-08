---
title: Rates and Catalysis
subtitle: Why some reactions take a nanosecond and others take forever, and how a few grams of the right metal fed the world.
part: IV · Change
---

## Why do some reactions take seconds and others take years?

Free energy says whether a reaction can happen. It says nothing about when. Gasoline and oxygen can sit together for centuries; strike a spark and they are gone in a millisecond. **Kinetics** is the study of how fast reactions go and why, and its practical payoff, **catalysis**, is arguably the most economically important idea in chemistry.

## Measuring speed

The **rate** of a reaction is how fast a reactant disappears or a product appears, in moles per liter per second. Ludwig Wilhelmy made the first quantitative measurement in 1850, tracking how cane sugar breaks down in acid by watching the solution rotate polarized light, and found that the rate at every moment was proportional to how much sugar was left.[^1] That pattern turns out to be common, and it has a name.

A **rate law** states how the rate depends on concentrations. For a reaction whose rate is proportional to the concentration of one reactant, rate $= k[\mathrm{A}]$, the reaction is **first order**, and $k$, the **rate constant**, is a number that says how fast at a given temperature. Radioactive decay is first order; so is the breakdown of most drugs in the body, which is why doses are spaced by half-lives. If the rate depends on two concentrations, rate $= k[\mathrm{A}][\mathrm{B}]$, it is **second order**, the natural law for a reaction that needs two molecules to collide. Rate laws must be measured, not read off the balanced equation, because the equation is a summary and the rate depends on the actual mechanism.

A first-order reaction has a fixed **half-life**, $t_{1/2} = 0.693/k$, independent of how much you start with. This is the exponential decay of the toolkit chapter, and it is why carbon dating works and why a drug's blood level falls by the same fraction every few hours.

## Why temperature matters so much

Almost every reaction speeds up when heated, and by a lot: a rough rule is that the rate doubles for every 10 °C. Svante Arrhenius found the reason in 1889.[^2] For molecules to react they must collide with at least a certain minimum energy, the **activation energy** $E_a$, enough to start breaking the old bonds before the new ones form. At any temperature only a fraction of collisions are that energetic, and that fraction rises steeply with temperature.

:::math The Arrhenius equation
$$k = A\, e^{-E_a / RT}$$
$k$ is the rate constant. $A$ is a **pre-exponential factor** that reflects how often molecules collide and whether they are pointing the right way. $E_a$ is the activation energy in joules per mole; $R$ is the gas constant and $T$ the temperature, so $RT$ is, as always, the size of the thermal jostle. The exponential $e^{-E_a/RT}$ is the fraction of collisions with energy at least $E_a$. For a typical $E_a$ of 50 kJ/mol at room temperature ($RT = 2.5$ kJ/mol), that fraction is $e^{-20} \approx 2 \times 10^{-9}$: two collisions in a billion succeed. Raise the temperature by 10 °C and the fraction roughly doubles. Lower $E_a$ by 10 kJ/mol and the rate goes up fifty-fold. This equation is the reason fridges preserve food, why fevers are dangerous, and why catalysts work.
:::

The modern picture, worked out by Henry Eyring and by Meredith Evans and Michael Polanyi in 1935, is **transition state theory**.[^3] As reactants turn into products they pass through a fleeting arrangement of maximum energy, the **transition state**, in which old bonds are half broken and new ones half formed. It lives for about the time of one molecular vibration, $10^{-13}$ seconds. The activation energy is the height of that mountain pass above the starting valley.

{{fig:reaction-coordinate|An energy diagram for a reaction. Reactants must climb to the transition state before descending to products. The height of the climb is the activation energy, which sets the speed; the difference between the two valleys is the free energy change, which sets the direction. A catalyst offers a lower pass.}}

The diagram makes the thermodynamics–kinetics distinction visible. The difference in height between the two valleys is $\Delta G$: it decides whether the products are favored. The height of the pass is $E_a$: it decides how fast you get there. Diamond sits in a valley above graphite's, but the pass between them is enormous, so it stays put. A match head sits far above its combustion products, but the pass is high enough that only a spark or friction gets it over.

## Mechanisms

A **mechanism** is the sequence of elementary steps, individual collisions or bond-breakings, by which the overall reaction actually happens. Each step has its own transition state, and the short-lived species between steps are **intermediates**. The slowest step is the **rate-determining step**, the bottleneck, and the rate law of the whole reaction usually reflects it alone. Proposing a mechanism and testing it, by measuring the rate law, by looking for intermediates, by swapping an atom for a heavier isotope and seeing whether the rate changes, is a large part of what research chemists do. Chapter 12 shows mechanisms at work in organic chemistry, where they are the organizing principle of the whole field.

## Catalysis

A **catalyst** speeds up a reaction without being consumed. Jöns Berzelius coined the word in 1836 to name a puzzling class of observations: platinum makes hydrogen and oxygen combine at room temperature, acids speed the breakdown of starch, yeast turns sugar to alcohol, and in each case the helper comes out unchanged.[^4] Wilhelm Ostwald gave the modern definition in the 1890s and the key insight: a catalyst cannot change *where* a reaction ends (that is thermodynamics), only how fast it gets there. It works by offering a different mechanism with a lower pass.[^5]

Catalysts come in three broad kinds. **Homogeneous** catalysts are dissolved with the reactants, like the acid in Wilhelmy's sugar. **Heterogeneous** catalysts are solids on whose surface the reaction happens, like the platinum and rhodium in a car's catalytic converter, which turn exhaust carbon monoxide and nitrogen oxides into carbon dioxide and nitrogen. Irving Langmuir worked out in the 1910s how molecules stick to and rearrange on such surfaces, the physical picture heterogeneous catalysis still uses; he won the 1932 Nobel Prize for it.[^16] **Enzymes** are the protein catalysts of life, and they are in a class of their own.

:::story Feeding the world with iron
Nitrogen makes up 78% of the air and every protein and every DNA base needs it, but the N≡N triple bond (chapter 6) is so strong that almost nothing can break it. Until 1909 the only large sources of usable nitrogen were bacteria, lightning, guano, and the Chilean saltpetre beds, whose exhaustion chemists were openly predicting; two industrial routes existed, the cyanamide and electric-arc processes, but both burned far too much electricity to feed a continent. That year Fritz Haber showed that nitrogen and hydrogen would combine to ammonia over a metal catalyst at high pressure, and Carl Bosch at BASF spent four years scaling it from a tabletop to a plant, inventing high-pressure chemical engineering along the way; Alwin Mittasch tested some 2,500 catalyst formulations before settling on iron with traces of potassium and aluminium oxides.[^6] The **Haber–Bosch process** started production in 1913, fed Germany's munitions industry through the First World War, and now produces about 180 million tonnes of ammonia a year, most of it fertilizer. Roughly half the nitrogen atoms in your body have passed through a Haber–Bosch reactor, and about half the world's population could not be fed without it.[^7] It also uses one to two percent of the world's energy and emits over 1% of its carbon dioxide, which is why making ammonia with electricity instead of fossil fuels is a frontier problem (see Latest Research). Haber and Bosch each won a Nobel Prize; Haber also pioneered chlorine gas warfare, and his legacy remains as double-edged as any in science.
:::

Heterogeneous catalysis made the modern world in other ways too. The **Ziegler–Natta catalysts** of the 1950s (Nobel Prize 1963) let ethylene and propylene be linked into polyethylene and polypropylene at low pressure with control over the chain's shape, making cheap plastics possible.[^8] Catalytic cracking turns heavy crude oil into gasoline. Catalytic converters, mandated in cars since the 1970s, have removed most urban smog-forming exhaust. About 90% of all chemical manufacturing involves a catalyst somewhere.[^9]

Real catalysts do not last forever, which is the gap between a laboratory result and a plant. They are **poisoned** by impurities that stick to the active surface and never leave, and they **sinter**, their fine particles merging into coarser ones with less surface area. Chemists therefore report a catalyst's **turnover number**, how many molecules one catalytic site converts before it dies, alongside its speed. A catalyst that is fast for a hundred hours and then quits is a publication, not a process.

## Enzymes: the best catalysts there are

Life runs on thousands of reactions that, uncatalyzed, would take hours to millennia at body temperature. **Enzymes**, proteins folded into precise shapes, speed them to milliseconds. The best known, OMP decarboxylase, accelerates its reaction by a factor of $10^{17}$; uncatalyzed, that step would take 78 million years.[^10]

Emil Fischer proposed in 1894 that an enzyme fits its target molecule, the **substrate**, like a lock fits a key.[^11] Daniel Koshland refined it in 1958 to **induced fit**: the enzyme flexes around the substrate as it binds.[^12] Either way the mechanism is Arrhenius: the enzyme's **active site**, a pocket lined with exactly the right chemical groups, binds the transition state more tightly than it binds the substrate, which lowers the pass. Enzymes also give life its exquisite selectivity, distinguishing between molecules that differ by a single atom or by being mirror images. Chapter 13 has more, and the 2024 Nobel Prize in Chemistry went partly to the design of entirely new enzymes by computer.[^13]

Chemists have two ways to get an enzyme nature never made. Frances Arnold's is **directed evolution**: mutate a gene at random, test thousands of the resulting proteins for the reaction you want, keep the best, and repeat, breeding a catalyst rather than designing one. It works without understanding the mechanism at all, and by the 2010s it was producing enzymes that make bonds no living thing makes, including bonds between carbon and silicon. She won the 2018 Nobel Prize.[^17] The other way, designing the protein from first principles, is chapter 13's.

## Watching a reaction happen

For a century the transition state was inferred, never seen; it exists for about a hundred femtoseconds (a femtosecond is $10^{-15}$ seconds). In the late 1980s Ahmed Zewail used laser pulses of that duration to take snapshots of molecules in the act of breaking apart, resolving the motion of atoms as bonds stretched and snapped. He won the 1999 Nobel Prize for **femtochemistry**.[^14] Since then attosecond pulses (a thousand times shorter; Nobel Prize in Physics 2023) have begun to catch the electrons moving before the atoms do.

:::frontier
Catalysis research is where chemistry meets the energy transition. The targets: splitting water into hydrogen with cheap metals instead of iridium and platinum; making ammonia from air and electricity at room temperature instead of at Haber–Bosch pressures; turning captured carbon dioxide back into fuels; and replacing fossil feedstocks with plant matter. Two Nobel Prizes in this century have gone to catalysis that steers reactions toward one mirror-image form of a molecule, essential for drugs (2001, metal catalysts; 2021, small organic molecules with no metal at all).[^15] The Latest Research section tracks the water-splitting and ammonia results as they arrive.
:::

:::try Put the idea to work
A catalyst makes a reaction faster. Must it also make the equilibrium mixture contain more product?

:::answer Show the reasoning
No. A catalyst supplies a faster pathway for both directions and speeds the approach to equilibrium. It does not change the equilibrium constant at a fixed temperature. More product at an early sampling time can reflect faster arrival, not a different final equilibrium.
:::
:::

## Summary

- Rate laws, measured not assumed, tell how a reaction's speed depends on concentration; first-order reactions have fixed half-lives.
- Arrhenius: rate $\propto e^{-E_a/RT}$. Only collisions with energy above the activation energy react; heating raises that fraction steeply.
- Transition state theory pictures a mountain pass between reactant and product valleys. Pass height is kinetics; valley difference is thermodynamics.
- Reactions proceed by mechanisms of elementary steps; the slowest step sets the rate.
- Catalysts lower the pass without moving the valleys. Haber–Bosch iron feeds half the world; Ziegler–Natta made plastics; enzymes reach $10^{17}$-fold speedups.
- Femtosecond lasers have made the transition state visible.

[^1]: Wilhelmy, L. (1850). "Ueber das Gesetz, nach welchem die Einwirkung der Säuren auf den Rohrzucker stattfindet." *Annalen der Physik*, 157 (Poggendorff 81), 413–428, [doi:10.1002/andp.18501571106](https://doi.org/10.1002/andp.18501571106), and 499–526, [doi:10.1002/andp.18501571107](https://doi.org/10.1002/andp.18501571107)
[^2]: Arrhenius, S. (1889). "Über die Reaktionsgeschwindigkeit bei der Inversion von Rohrzucker durch Säuren." *Zeitschrift für Physikalische Chemie*, 4, 226–248. [doi:10.1515/zpch-1889-0416](https://doi.org/10.1515/zpch-1889-0416)
[^3]: Eyring, H. (1935). "The Activated Complex in Chemical Reactions." *Journal of Chemical Physics*, 3, 107–115. [doi:10.1063/1.1749604](https://doi.org/10.1063/1.1749604). Evans, M. G., Polanyi, M. (1935). "Some applications of the transition state method to the calculation of reaction velocities, especially in solution." *Transactions of the Faraday Society*, 31, 875–894. [doi:10.1039/TF9353100875](https://doi.org/10.1039/TF9353100875)
[^4]: Berzelius, J. J. (1836). "Einige Ideen über eine bei der Bildung organischer Verbindungen in der lebenden Natur wirksame, aber bisher nicht bemerkte Kraft." *Jahres-Bericht über die Fortschritte der physischen Wissenschaften*, 15, 237–245.
[^5]: Ostwald, W. (1894). Review of F. W. Ostwald's work on catalysis, *Zeitschrift für Physikalische Chemie*, 15, 705–706, where the modern definition is first stated; developed in his Nobel Lecture (1909), "On Catalysis." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1909/ostwald/lecture/)
[^6]: Haber, F. (1920). Nobel Lecture: "The Synthesis of Ammonia from Its Elements." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1918/haber/lecture/). Bosch, C. (1932). Nobel Lecture: "The Development of the Chemical High Pressure Method during the Establishment of the New Ammonia Industry." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1931/bosch/lecture/)
[^7]: Erisman, J. W., Sutton, M. A., Galloway, J., Klimont, Z., Winiwarter, W. (2008). "How a century of ammonia synthesis changed the world." *Nature Geoscience*, 1, 636–639. [doi:10.1038/ngeo325](https://doi.org/10.1038/ngeo325). Smil, V. (2001). *Enriching the Earth: Fritz Haber, Carl Bosch, and the Transformation of World Food Production*. MIT Press.
[^8]: The Nobel Prize in Chemistry 1963 (Karl Ziegler, Giulio Natta). [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1963/summary/)
[^9]: Armor, J. N. (2011). "A history of industrial catalysis." *Catalysis Today*, 163(1), 3–9. [doi:10.1016/j.cattod.2009.11.019](https://doi.org/10.1016/j.cattod.2009.11.019)
[^10]: Radzicka, A., Wolfenden, R. (1995). "A Proficient Enzyme." *Science*, 267, 90–93. [doi:10.1126/science.7809611](https://doi.org/10.1126/science.7809611)
[^11]: Fischer, E. (1894). "Einfluss der Configuration auf die Wirkung der Enzyme." *Berichte der deutschen chemischen Gesellschaft*, 27, 2985–2993. [doi:10.1002/cber.18940270364](https://doi.org/10.1002/cber.18940270364)
[^12]: Koshland, D. E. (1958). "Application of a Theory of Enzyme Specificity to Protein Synthesis." *Proceedings of the National Academy of Sciences*, 44(2), 98–104. [doi:10.1073/pnas.44.2.98](https://doi.org/10.1073/pnas.44.2.98)
[^13]: The Nobel Prize in Chemistry 2024. Press release, 9 October 2024. [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2024/press-release/)
[^14]: Zewail, A. H. (1999). Nobel Lecture: "Femtochemistry: Atomic-Scale Dynamics of the Chemical Bond Using Ultrafast Lasers." [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1999/zewail/lecture/)
[^15]: The Nobel Prize in Chemistry 2001 (Knowles, Noyori, Sharpless) and 2021 (List, MacMillan). [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2021/press-release/)
[^16]: Langmuir, I. (1918). "The Adsorption of Gases on Plane Surfaces of Glass, Mica and Platinum." *Journal of the American Chemical Society*, 40(9), 1361–1403. [doi:10.1021/ja02242a004](https://doi.org/10.1021/ja02242a004)
[^17]: The Nobel Prize in Chemistry 2018 (Frances H. Arnold, George P. Smith, Sir Gregory P. Winter). [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2018/press-release/). Arnold, F. H. (2018). "Directed Evolution: Bringing New Chemistry to Life." *Angewandte Chemie International Edition*, 57(16), 4143–4148. [doi:10.1002/anie.201708408](https://doi.org/10.1002/anie.201708408)
