---
title: Heat, Entropy, and the Arrow of Time
subtitle: Why hot things cool, why eggs don't unscramble, and how a count of possibilities became the most misunderstood idea in science.
part: II · The Classical World
---

## Recap

Energy is conserved. But conservation alone cannot explain the most obvious fact about the world: things run down. Coffee cools, batteries drain, and nobody has ever seen a shattered cup reassemble. Energy is not lost in any of these. Something else is going on, and figuring out what took the entire 19th century.

## What heat actually is

Until about 1850 most scientists believed heat was a substance: an invisible, weightless fluid called **caloric** that flowed from hot bodies to cold ones. It was a decent theory. It explained why heat flows downhill in temperature and why things expand when warmed (more fluid inside). Antoine Lavoisier listed caloric among the chemical elements.[^1]

The first serious blow came from a cannon factory. In 1798 Benjamin Thompson, Count Rumford, noticed that boring out brass cannon barrels produced heat indefinitely. If heat were a fluid inside the metal, it should eventually run out. It never did. Friction, he argued, could generate heat without limit, which made no sense for a conserved substance but perfect sense if heat were *motion*.[^2] Half a century later Joule's paddle-wheel experiments (previous chapter) pinned down the exchange rate between mechanical work and heat, and caloric was dead.

The modern picture is the **kinetic theory of heat**: matter is made of atoms in constant motion, and **temperature** measures the average kinetic energy of that motion. For a gas, the relation is exact:

$$\langle K \rangle = \tfrac{3}{2} k_B T$$

The angle brackets mean "average." $T$ is the temperature in kelvin, and $k_B$ is Boltzmann's constant, the tiny number from the toolkit that converts between energy and temperature. At room temperature, air molecules move at roughly 500 meters per second, colliding billions of times a second. Heat flowing from hot to cold is just fast molecules bumping into slow ones and sharing out the energy.

**Absolute zero**, 0 K or $-273.15\,°\text{C}$, is the temperature at which this motion is minimal. It cannot be reached, only approached; labs routinely get to within billionths of a degree, and have briefly reached trillionths.

James Clerk Maxwell worked out in 1860 exactly how the speeds are shared out in a gas at a given temperature: most molecules move near the average, a few crawl, a few streak, and the whole spread follows a single curve, the **Maxwell–Boltzmann distribution**, that depends only on the temperature and the molecular mass.[^15] It was the first time a law of physics was stated as a probability distribution rather than a certainty, and it works: the spread of speeds has been measured directly by timing molecules crossing a vacuum chamber. J. Willard Gibbs later (1902) built the general machinery, **statistical mechanics**, for deriving the bulk behavior of any system from the statistics of its parts.[^16] That machinery is what the rest of this chapter runs on.

## The laws of thermodynamics

**Thermodynamics** is the study of heat, work, and energy in bulk, worked out before anyone had proven atoms exist. Its laws are numbered awkwardly because the zeroth was noticed last.

**Zeroth law.** Two bodies in contact that have stopped exchanging heat are in **thermal equilibrium**. If A is in equilibrium with B, and B with C, then A is with C. This is what makes "temperature" a meaningful number at all.

**First law.** Energy is conserved. The change in a system's internal energy equals the heat added minus the work it does: $\Delta U = Q - W$.

**Second law.** Heat does not spontaneously flow from cold to hot. Equivalent statement: no engine can convert heat entirely into work. Equivalent statement, the deep one: the total **entropy** of an isolated system never decreases.

**Third law.** As temperature approaches absolute zero, entropy approaches a minimum constant. You can never reach absolute zero in a finite number of steps.

The second law is the one that matters, and it began with engines.

## Carnot and the limits of engines

In 1824 a 28-year-old French engineer, Sadi Carnot, asked how efficient a steam engine could possibly be.[^3] He imagined an idealized engine with no friction and found a hard ceiling that depends only on the temperatures of the hot source $T_h$ and the cold sink $T_c$:

$$\eta_{\max} = 1 - \frac{T_c}{T_h}$$

Here $\eta$ (eta) is the efficiency: the fraction of heat converted to useful work. A power plant running steam at 800 K and dumping heat into a river at 300 K can never beat $1 - 300/800 = 62\%$, and real ones manage about 40%. Nothing about clever engineering can change this. It is a law of nature, and it was the first hint that heat has a quality as well as a quantity: heat at high temperature is worth more than the same amount of heat at low temperature.

## Clausius invents entropy

Rudolf Clausius spent the 1850s and 1860s making Carnot's insight precise and in 1865 coined a word for the quantity of "used-up-ness."[^4] He defined the change in **entropy** $S$ when a small amount of heat $Q$ flows into a body at temperature $T$ as

$$dS = \frac{dQ}{T}$$

Move heat from a hot body (large $T$, small $dS$ lost) to a cold body (small $T$, large $dS$ gained) and the total entropy goes up. Clausius showed that in every real process, total entropy increases or, in the ideal limit, stays constant. He ended his paper with two sentences that are still quoted: "The energy of the universe is constant. The entropy of the universe tends to a maximum."

This is a strange law. Every other law of physics works equally well forwards and backwards in time. This one has a direction built in. Where does the direction come from?

## Boltzmann counts the possibilities

The answer came from Ludwig Boltzmann, and it is the intellectual center of this chapter.

Consider a box of gas with a partition down the middle, all the molecules on the left. Remove the partition. The gas spreads to fill the box. Why? Not because any force pushes it. Each molecule just bounces around randomly. The gas spreads because there are *overwhelmingly more* ways to arrange molecules throughout the box than to have them all on one side.

Make this precise. A **macrostate** is what you can measure: the pressure, temperature, and volume. A **microstate** is the exact position and velocity of every single molecule. Many microstates look identical from outside; they belong to the same macrostate. Boltzmann's insight, carved on his tombstone in Vienna, is that entropy is the logarithm of the number of microstates $W$ compatible with what you see:

$$S = k_B \ln W$$

:::math Reading Boltzmann's formula
Take 100 coins. The macrostate "50 heads" can be produced by about $10^{29}$ different arrangements of individual coins. The macrostate "all heads" can be produced by exactly one. If you shake the box, you will find roughly 50 heads not because of any rule about coins but because there are $10^{29}$ times more ways to get there. Now replace 100 coins with the $10^{23}$ molecules in a breath of air. The ratio between "spread out" and "all on the left" is not $10^{29}$ but roughly $10^{10^{22}}$: a number with more digits than there are atoms in a mountain. The gas does not spread out because it must. It spreads out because the alternative is so improbable that it will not happen in the lifetime of the universe.

The logarithm is there so that entropies add: two independent systems have $W_1 \times W_2$ microstates but $S_1 + S_2$ entropy. And $k_B$ is there only to make Boltzmann's $S$ match Clausius's $dQ/T$ in units.[^5]
:::

:::key
The second law is not a force. It is statistics. Entropy increases because high-entropy states are enormously more numerous than low-entropy ones, so a system wandering randomly through its possibilities almost always wanders toward them. "Disorder" is a loose translation; the precise word is *typicality*.
:::

## The arrow of time

Here is the puzzle Boltzmann's contemporaries threw at him. Newton's laws are perfectly reversible. Film any molecular collision and play it backwards, and the reversed film shows a collision that also obeys the laws. So if you take the spread-out gas and reverse every molecule's velocity exactly, it must un-spread back into the left half. Johann Loschmidt pointed this out in 1876. How can reversible laws produce irreversible behavior?[^6]

Boltzmann's answer, refined over the next century, is that they don't, quite. The laws are symmetric. The *initial conditions* are not. Almost every microstate of the box evolves toward higher entropy, in both time directions. The only reason we see entropy increase toward the future and not the past is that the past was, for some reason, a very low-entropy state. Trace this back and the question becomes cosmological: why did the universe begin in a state of such extraordinarily low entropy? Physicists call this the **past hypothesis**, and it is still open.[^7] The arrow of time you experience every day is, on this view, a leftover from the Big Bang.

:::story
Boltzmann fought for atoms his whole career against powerful colleagues, especially Ernst Mach, who considered atoms an unprovable fiction. Depressed and in poor health, he took his own life in 1906 while on holiday near Trieste. Within three years his side had won completely: Einstein's 1905 analysis of **Brownian motion**, the jitter of pollen grains in water, predicted exactly how atoms bombarding a grain should make it wander, and Jean Perrin confirmed the prediction in the lab in 1908, even counting the atoms.[^8] Perrin got the Nobel Prize. Boltzmann got the equation on his grave.
:::

## Maxwell's demon and the physics of information

In 1867 James Clerk Maxwell proposed a thought experiment that took 115 years to resolve.[^9] Imagine a tiny creature guarding a door between two halves of a gas-filled box. It opens the door only when a fast molecule approaches from the left or a slow one from the right. Without doing work, it sorts the gas hot and cold, decreasing entropy and violating the second law.

The resolution came in stages. Leo Szilard argued in 1929 that the demon must *measure* each molecule, and that measurement carries a cost.[^10] Rolf Landauer found the precise cost in 1961: not measuring, but *forgetting*. Erasing one bit of information unavoidably releases at least $k_B T \ln 2$ of heat into the surroundings.[^11] Charles Bennett showed in 1982 that this is exactly what saves the second law: the demon's memory fills up, and clearing it produces at least as much entropy as the sorting removed.[^12] The Landauer limit was measured directly in 2012.[^13]

The lesson is one of the deepest in physics: **information is physical**. Entropy in the physicist's sense and information in the computer scientist's sense are the same quantity, measured in different units. Your laptop warms your lap partly because it is forgetting things.

## Where the ideas went next

Statistical mechanics did more than explain steam engines. In 1900 Max Planck used Boltzmann's counting method, reluctantly, to explain the color of glowing objects, and in doing so accidentally started quantum mechanics (chapter 9). In the 1970s Jacob Bekenstein and Stephen Hawking showed that black holes (regions of space from which nothing can escape; chapter 8) have entropy proportional to their surface area, which forced the question of what microstates a black hole could possibly be counting, and that question drives much of the research on quantum gravity today (chapter 14).[^14]

:::frontier
Entropy has become a bridge between fields. In biology, life is understood as a local decrease in entropy paid for by a larger increase elsewhere: you are a low-entropy structure maintained by exporting disorder as heat and waste. In cosmology, the past hypothesis remains unexplained: no accepted theory says why the early universe had such low entropy. And in quantum gravity, the discovery that black hole entropy scales with *area* rather than *volume* suggests that the information content of any region of space is limited by its boundary, an idea called the **holographic principle** that reshaped theoretical physics after 1995.
:::

## Summary

- Heat is the kinetic energy of atoms; temperature is its average. Caloric, the heat-fluid theory, died when friction was shown to make heat without limit.
- The four laws of thermodynamics: temperature is well-defined; energy is conserved; entropy never decreases; absolute zero is unreachable.
- Carnot's efficiency limit $1 - T_c/T_h$ showed heat has quality as well as quantity. Clausius named that quality entropy, $dS = dQ/T$.
- Boltzmann explained entropy as $k_B \ln W$: a count of microscopic arrangements. The second law is statistics, not force.
- The arrow of time comes from the universe's low-entropy start, not from the laws themselves.
- Information is physical: erasing a bit costs $k_B T \ln 2$ of heat, and that is what defeats Maxwell's demon.

[^1]: Lavoisier, A. (1789). *Traité élémentaire de chimie*. Paris: Cuchet. Caloric ("calorique") appears in the table of simple substances.
[^2]: Thompson, B. (Count Rumford) (1798). "An Inquiry concerning the Source of the Heat which is excited by Friction." *Philosophical Transactions of the Royal Society*, 88, 80–102. [doi:10.1098/rstl.1798.0006](https://doi.org/10.1098/rstl.1798.0006)
[^3]: Carnot, S. (1824). *Réflexions sur la puissance motrice du feu*. Paris: Bachelier. English translation: *Reflections on the Motive Power of Fire* (1897), trans. R. H. Thurston. [archive.org](https://archive.org/details/reflectionsonmot00carn)
[^4]: Clausius, R. (1865). "Über verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie." *Annalen der Physik*, 201(7), 353–400. [doi:10.1002/andp.18652010702](https://doi.org/10.1002/andp.18652010702)
[^5]: Boltzmann, L. (1877). "Über die Beziehung zwischen dem zweiten Hauptsatze der mechanischen Wärmetheorie und der Wahrscheinlichkeitsrechnung." *Wiener Berichte*, 76, 373–435. English translation: Sharp, K. and Matschinsky, F. (2015), *Entropy*, 17(4), 1971–2009. [doi:10.3390/e17041971](https://doi.org/10.3390/e17041971)
[^6]: Loschmidt, J. (1876). "Über den Zustand des Wärmegleichgewichtes eines Systems von Körpern mit Rücksicht auf die Schwerkraft." *Wiener Berichte*, 73, 128–142.
[^7]: Albert, D. Z. (2000). *Time and Chance*. Harvard University Press. Chapter 4 introduces the term "past hypothesis." See also Carroll, S. (2010), *From Eternity to Here*, Dutton.
[^8]: Einstein, A. (1905). "Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden Flüssigkeiten suspendierten Teilchen." *Annalen der Physik*, 17, 549–560. [doi:10.1002/andp.19053220806](https://doi.org/10.1002/andp.19053220806). Perrin, J. (1909). "Mouvement brownien et réalité moléculaire." *Annales de Chimie et de Physique*, 18, 5–114.
[^9]: Maxwell, J. C. (1871). *Theory of Heat*. London: Longmans. Maxwell wrote of "a finite being"; William Thomson supplied the word "demon" in 1874. The idea was first described in a letter to P. G. Tait dated 11 December 1867 and appears in the chapter "Limitation of the Second Law."
[^10]: Szilard, L. (1929). "Über die Entropieverminderung in einem thermodynamischen System bei Eingriffen intelligenter Wesen." *Zeitschrift für Physik*, 53, 840–856. [doi:10.1007/BF01341281](https://doi.org/10.1007/BF01341281)
[^11]: Landauer, R. (1961). "Irreversibility and Heat Generation in the Computing Process." *IBM Journal of Research and Development*, 5(3), 183–191. [doi:10.1147/rd.53.0183](https://doi.org/10.1147/rd.53.0183)
[^12]: Bennett, C. H. (1982). "The thermodynamics of computation—a review." *International Journal of Theoretical Physics*, 21, 905–940. [doi:10.1007/BF02084158](https://doi.org/10.1007/BF02084158)
[^13]: Bérut, A., Arakelyan, A., Petrosyan, A., Ciliberto, S., Dillenschneider, R., Lutz, E. (2012). "Experimental verification of Landauer's principle linking information and thermodynamics." *Nature*, 483, 187–189. [doi:10.1038/nature10872](https://doi.org/10.1038/nature10872)
[^14]: Bekenstein, J. D. (1973). "Black Holes and Entropy." *Physical Review D*, 7, 2333. [doi:10.1103/PhysRevD.7.2333](https://doi.org/10.1103/PhysRevD.7.2333). Hawking, S. W. (1975). "Particle creation by black holes." *Communications in Mathematical Physics*, 43, 199–220. [doi:10.1007/BF02345020](https://doi.org/10.1007/BF02345020)
[^15]: Maxwell, J. C. (1860). "Illustrations of the Dynamical Theory of Gases. Part I." *Philosophical Magazine*, 19(124), 19–32. [doi:10.1080/14786446008642818](https://doi.org/10.1080/14786446008642818)
[^16]: Gibbs, J. W. (1902). *Elementary Principles in Statistical Mechanics*. New York: Charles Scribner's Sons. [archive.org](https://archive.org/details/elementaryprinci00gibbrich)
