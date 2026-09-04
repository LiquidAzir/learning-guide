---
title: Motion and Force
subtitle: Two thousand years of being reasonably wrong, then Galileo, then Newton, and the clockwork universe that followed.
part: II · The Classical World
---

## The question that started everything

Why do things move? Why do they stop? Why does a rock fall but smoke rise? For most of human history the best answer came from Aristotle, and it was wrong in an extremely instructive way.

## Aristotle's world, and why it made sense

Aristotle (384–322 BCE) taught that every object has a **natural place** and moves toward it. Earth and water belong down, so rocks fall and rain falls. Air and fire belong up, so smoke rises. Motion toward your natural place is **natural motion** and needs no explanation. Any other motion, such as a thrown spear, is **violent motion** and needs a cause: something must keep pushing. Take away the push and the object stops.[^1]

He also claimed that heavier objects fall faster, in proportion to their weight.

Before laughing, notice that this matches what you see. Push a box across the floor and it stops when you stop pushing. Drop a feather and a stone and the stone lands first. Aristotle was doing what a good scientist does: summarizing observation. His mistake was subtle. He treated **friction** and **air resistance**, forces that happen to be everywhere on Earth, as if they were fundamental features of motion. He built a physics of a world full of drag and mistook it for a physics of the universe.

This system ruled for roughly nineteen centuries. It was elaborated by medieval scholars who noticed problems. In the 1300s Jean Buridan proposed that a thrown object carries an internal "impetus" that gradually runs out, an early hint of what became inertia and momentum.[^2] Nicole Oresme drew the first graphs of speed against time. But nobody yet did the decisive thing: measure.

## The sky refuses to cooperate

The first crack came from astronomy. In 1543 Nicolaus Copernicus published a model in which the Earth circles the Sun rather than the reverse.[^3] It was not obviously better at predicting planet positions than the old Earth-centered model, but it was simpler, and it raised a devastating question: if the Earth is hurtling through space, why don't we feel it? Aristotle's physics had no answer.

Then came data. The Danish astronomer Tycho Brahe spent twenty years measuring planetary positions with unprecedented precision, using giant naked-eye instruments. His assistant Johannes Kepler inherited the numbers and spent years trying to fit the orbit of Mars to circles. It would not fit. In 1609 he gave up on circles and found that Mars moves on an **ellipse**, a stretched circle, with the Sun at one **focus** (one of the two special points inside an ellipse).[^4] He eventually found three laws:

1. Planets move in ellipses with the Sun at one focus.
2. A line from the Sun to the planet sweeps out equal areas in equal times. (The planet moves faster when closer to the Sun.)
3. The square of the orbital period is proportional to the cube of the orbit's size: $T^2 \propto a^3$.[^5]

Kepler had no idea *why* these were true. He was describing, not explaining. But the description was exact, and it was waiting for someone to explain it.

## Galileo: the first person to measure motion

Galileo Galilei (1564–1642) did what Aristotle never did. He timed things.

Falling objects move too fast to time with a water clock, so Galileo slowed gravity down by rolling balls along gently sloped grooves. He found that the distance traveled grows with the *square* of the time: a ball goes 1 unit in the first second, 4 units by the second second, 9 by the third.[^6] That is the signature of constant acceleration:

$$d = \tfrac{1}{2} a t^2$$

He found the acceleration did not depend on the ball's weight. Heavy and light balls rolled identically once you accounted for air. (The famous Leaning Tower of Pisa drop may or may not have happened; the inclined-plane experiments definitely did.) In 1971 the Apollo 15 commander dropped a hammer and a feather on the airless Moon. They landed together.[^7]

Galileo also saw what Aristotle missed about pushing. A ball rolling down one slope and up another climbs to nearly its starting height. Make the second slope shallower and it rolls farther to reach that height. Make it flat, and the ball should roll forever. Motion does not need a cause. *Changes* in motion do. This is **inertia**, and it dissolves the Copernican puzzle: we do not feel the Earth moving for the same reason you do not feel a smooth train moving. Galileo made this vivid with a thought experiment about a ship: below deck, with no windows, no experiment can tell you whether the ship is moving steadily or sitting in port.[^6] Hold onto that idea. In 1905 Einstein will build a theory out of it.

:::story
In 1609 Galileo heard about a Dutch spyglass, built a better one, and pointed it at the sky. Within months he had seen mountains on the Moon, four moons circling Jupiter, and the phases of Venus, which only make sense if Venus orbits the Sun.[^8] Jupiter's moons were the killer: here were bodies visibly orbiting something other than the Earth. His 1632 book defending the Sun-centered view got him convicted of "vehement suspicion of heresy" and confined to his house for the rest of his life. He wrote his masterpiece on motion under house arrest and published it abroad in 1638.
:::

## Newton: one set of rules for Earth and sky

Isaac Newton (1643–1727) took Galileo's inertia, Kepler's ellipses, and his own new mathematics, and in 1687 published *Philosophiæ Naturalis Principia Mathematica*, usually just called the *Principia*.[^9] It is arguably the most important scientific book ever written. It contains three laws of motion and a law of gravity.

### The three laws

**First law.** An object keeps its velocity (its speed *and* direction) unless a net force acts on it. This is Galileo's inertia, stated cleanly. "At rest" is just a velocity of zero; there is nothing special about it.

**Second law.** A net force changes velocity, and the change is proportional to the force and inversely proportional to the mass:

$$\mathbf{F} = m\mathbf{a}$$

Read it as: force equals mass times acceleration. A force of 1 **newton** (N) gives a 1 kg mass an acceleration of 1 m/s². Push twice as hard, get twice the acceleration. Push something twice as heavy, get half. Here **mass** is finally defined properly: it is an object's resistance to being accelerated. It is not weight. Weight is the force gravity exerts on a mass, and it changes on the Moon; mass does not.

**Third law.** Forces come in pairs. When A pushes on B, B pushes back on A with equal force in the opposite direction. You push the Earth down; the Earth pushes you up. A rocket throws exhaust backward; the exhaust throws the rocket forward. There is no such thing as a lone force.

:::math The second law, properly
Newton actually wrote his second law in terms of **momentum**, the product of mass and velocity, $\mathbf{p} = m\mathbf{v}$:
$$\mathbf{F} = \frac{d\mathbf{p}}{dt}$$
"Force is the rate of change of momentum." When mass is constant this reduces to $F = ma$, because $d(mv)/dt = m \, dv/dt = ma$. The momentum form is the deeper one. It survives into relativity and quantum mechanics after $F = ma$ has broken down, and it makes conservation of momentum (next chapter) almost obvious: if no force acts, $d\mathbf{p}/dt = 0$, so momentum stays constant.
:::

### Universal gravitation

Newton then proposed that every mass in the universe attracts every other mass, with a force that weakens with the square of the distance between them:

$$F = G \frac{m_1 m_2}{r^2}$$

$m_1$ and $m_2$ are the two masses, $r$ is the distance between their centers, and $G$ is the gravitational constant from the toolkit chapter, a very small number that makes gravity feeble unless at least one mass is planet-sized.

The word *universal* is the revolution. The same force that pulls an apple to the ground holds the Moon in orbit. Newton checked this with a calculation you can follow. The Moon is about 60 Earth radii away. If gravity weakens as $1/r^2$, the Moon should feel $1/3600$ of the gravity you feel: an acceleration of $9.8 / 3600 \approx 0.0027$ m/s². Independently, from the Moon's known orbit (a circle of radius 384,000 km every 27.3 days), its acceleration toward Earth is $v^2/r \approx 0.0027$ m/s². The numbers match.[^9] The heavens and the Earth obey one law.

:::math Kepler's third law, derived
Here is the payoff. For a body of mass $m$ in a circular orbit of radius $r$ around a much heavier mass $M$, gravity supplies the inward force needed to keep it turning. The inward acceleration for circular motion is $v^2/r$. So Newton's second law reads
$$G\frac{Mm}{r^2} = m\frac{v^2}{r} \quad\Rightarrow\quad v^2 = \frac{GM}{r}$$
The orbital period is the circumference divided by speed, $T = 2\pi r / v$. Square it and substitute:
$$T^2 = \frac{4\pi^2 r^2}{v^2} = \frac{4\pi^2}{GM}\, r^3$$
That is $T^2 \propto r^3$: Kepler's third law, which Kepler found by staring at Tycho's numbers for a decade, falls out of two lines of algebra. This is what "explaining" means in physics. Bonus: measure $T$ and $r$ for any moon or satellite and you can weigh the planet it orbits. This is how we know the Sun's mass.
:::

Newton's gravity also explained the tides (the Moon pulls harder on the near side of the Earth's oceans than on the far side), the slight bulge of the Earth at the equator, and the slow 26,000-year wobble of the Earth's axis. Edmond Halley used it to predict that a comet seen in 1682 would return in 1758. It did, sixteen years after Halley's death.[^10]

## The clockwork universe, and what it meant

Newton's laws are **deterministic**: if you know the position and velocity of every particle now, the equations tell you their positions and velocities forever, forward and backward. In 1814 Pierre-Simon Laplace drew the conclusion. An intellect that knew all the forces and positions at one instant, he wrote, "would embrace in a single formula the movements of the greatest bodies of the universe and those of the tiniest atom; for such an intellect nothing would be uncertain and the future just like the past would be present before its eyes."[^11] This imagined intellect is now called **Laplace's demon**. For two centuries physicists broadly believed the universe worked this way. Quantum mechanics would later say otherwise, and so, in a different way, would Newton's own equations.

:::frontier Determinism is not predictability
Laplace's dream has a catch that took a century to notice. In the 1890s Henri Poincaré, studying three bodies orbiting one another under gravity, found that tiny differences in the starting conditions grow exponentially, so that after a while no finite measurement is precise enough to predict the outcome.[^15] In 1963 the meteorologist Edward Lorenz rediscovered this in a simplified weather model on an early computer: re-entering a number rounded from six decimal places to three produced a completely different forecast.[^16] This is **chaos**: behavior that is fully determined by the laws yet unpredictable in practice, because prediction would require infinitely precise knowledge. The equations are Newton's; the demon is out of a job anyway. Weather forecasts lose their reliability after about two weeks for exactly this reason.
:::

Newton's world also assumed **absolute space and time**: a fixed stage on which events happen, with one universal clock ticking for everyone. Einstein would demolish this.

And Newton himself was uneasy about one thing. His gravity acts instantly across empty space, with nothing carrying it. This **action at a distance** struck him as absurd, and he said so: he refused to speculate on gravity's mechanism, writing "I frame no hypotheses."[^9] The field concept, and eventually Einstein's curved spacetime, would resolve his discomfort two centuries later.

## Two triumphs and one crack

**Triumph one: Neptune.** By the 1840s the planet Uranus was not quite where Newton's laws said it should be. Urbain Le Verrier assumed the laws were right and calculated where an unseen planet would have to be to cause the discrepancy. He mailed the prediction to the Berlin Observatory, where Johann Galle found Neptune within one degree of the predicted spot on his first night of looking, September 23, 1846.[^12] A planet discovered with a pen.

**Triumph two: everything since.** Newton's mechanics put humans on the Moon, keeps satellites in orbit, and designs every bridge and engine. When engineers slingshot a probe past Jupiter to reach Saturn, they are using the *Principia*.

**The crack: Mercury.** Le Verrier tried the Neptune trick again in 1859. Mercury's orbit slowly rotates (its closest point to the Sun, the **perihelion**, drifts around), and after accounting for the pull of every other planet, there was a leftover drift he put at 38 arcseconds per century, roughly a hundredth of a degree (an **arcsecond** is 1/3600 of a degree). Simon Newcomb's more careful analysis in 1882 made it 43.[^13] Le Verrier proposed another hidden planet, "Vulcan," inside Mercury's orbit. Astronomers hunted it for fifty years. It does not exist. The 43 arcseconds were the first observed failure of Newton's gravity, and in 1915 they became the first triumph of Einstein's.

## A more elegant formulation

One more thing happened to mechanics before the twentieth century, and it matters enormously later. In 1788 Joseph-Louis Lagrange, and in the 1830s William Rowan Hamilton, rewrote Newton's laws in a new form.[^14] Instead of tracking forces, you write down a single quantity for the system, the **Lagrangian** (kinetic energy minus potential energy), and demand that nature choose the path between two points that makes the total of this quantity over time, called the **action**, as small as possible (strictly, *stationary*: a minimum in almost every case you will meet). This is the **principle of least action**.

It sounds mystical: how does a ball "know" which path minimizes the action? It is not mystical; it is mathematically equivalent to Newton's laws. But the new form is far more powerful. It works in any coordinates, it makes symmetries visible (Noether's theorem lives here), and it turned out to be the form that survives into quantum mechanics and quantum field theory, where forces stop making sense but action still does. When physicists today propose a new theory, they write down its Lagrangian. That habit began here.

## Matter that flows

Newton's laws are stated for point-like objects, but most of the world is fluid: air, water, the hot gas inside stars. **Fluid mechanics** applies the same laws to a continuous substance by tracking how pressure, density, and velocity vary from place to place. Archimedes found in the third century BCE that a submerged body is pushed up by the weight of fluid it displaces. Daniel Bernoulli showed in 1738 that where a fluid speeds up, its pressure drops, which is part of why a wing lifts.[^17] In the 1820s–1840s Claude-Louis Navier and George Stokes wrote down the full equations of fluid motion: Newton's second law applied to every small parcel of fluid, including the fluid's internal friction, its **viscosity**.[^18]

The **Navier–Stokes equations** govern weather, blood flow, ocean currents, and the air over a wing. They are also famously hard. Whether smooth solutions always exist is one of the Clay Mathematics Institute's million-dollar prize problems.[^19] And **turbulence**, the chaotic swirling that appears when a fluid moves fast enough (the threshold is set by the **Reynolds number**, roughly the ratio of a flow's momentum to its viscosity), still has no complete theory. Richard Feynman called it the central problem that classical physics never solved.[^20] The equations have been known for 180 years; what they imply is still being worked out.

## Summary

- Aristotle described a world of friction and mistook it for the laws of motion. It matched experience, which is why it lasted.
- Kepler found that planets move on ellipses, obeying three precise rules, but could not say why.
- Galileo measured falling and found constant acceleration, independent of weight, and identified inertia: motion needs no cause, only changes in motion do.
- Newton unified Earth and sky with three laws of motion and universal gravitation, and derived Kepler's laws from them.
- The result was a deterministic universe with absolute space and time. It predicted Neptune and stumbled, slightly, on Mercury.
- Lagrange and Hamilton rewrote it all as a single principle of least action, the form later physics would keep.
- Newton's own equations turned out to allow chaos: determined but unpredictable. Applied to fluids they become the Navier–Stokes equations, whose consequences, above all turbulence, are still not fully understood.

[^1]: Aristotle, *Physics*, Books IV and VIII; *On the Heavens*, Book I. English translations at the Internet Classics Archive, MIT. [classics.mit.edu/Aristotle/physics.html](http://classics.mit.edu/Aristotle/physics.html)
[^2]: Clagett, M. (1959). *The Science of Mechanics in the Middle Ages*. University of Wisconsin Press. Chapter 8 discusses Buridan's impetus theory.
[^3]: Copernicus, N. (1543). *De revolutionibus orbium coelestium*. Nuremberg: Johannes Petreius. English translation by E. Rosen (1978), Johns Hopkins University Press.
[^4]: Kepler, J. (1609). *Astronomia Nova*. Heidelberg. The first two laws appear here.
[^5]: Kepler, J. (1619). *Harmonices Mundi*. Linz. Book V states the third (harmonic) law.
[^6]: Galilei, G. (1638). *Discorsi e dimostrazioni matematiche intorno a due nuove scienze* (Two New Sciences). Leiden: Elzevir. English translation by Crew and de Salvio (1914) at archive.org. [archive.org](https://archive.org/details/dialoguesconcern00galiuoft)
[^7]: NASA (1971). "The Apollo 15 Hammer-Feather Drop." Mission film and transcript. [science.nasa.gov](https://science.nasa.gov/resource/the-apollo-15-hammer-feather-drop/)
[^8]: Galilei, G. (1610). *Sidereus Nuncius*. Venice. English translation by A. Van Helden (1989), University of Chicago Press.
[^9]: Newton, I. (1687). *Philosophiæ Naturalis Principia Mathematica*. London: Royal Society. The Moon test is in Book III, Proposition IV; "Hypotheses non fingo" is in the General Scholium added to the 1713 second edition. Digitized at the Cambridge Digital Library. [cudl.lib.cam.ac.uk](https://cudl.lib.cam.ac.uk/view/PR-ADV-B-00039-00001/)
[^10]: Halley, E. (1705). *A Synopsis of the Astronomy of Comets*. London. The comet returned in December 1758, first sighted by Johann Palitzsch.
[^11]: Laplace, P.-S. (1814). *Essai philosophique sur les probabilités*. Paris. English translation: *A Philosophical Essay on Probabilities* (1902), trans. Truscott and Emory, p. 4. [archive.org](https://archive.org/details/philosophicaless00lapliala)
[^12]: Galle, J. G. (1846). "Account of the discovery of Le Verrier's planet Neptune, at Berlin, Sept. 23, 1846." *Monthly Notices of the Royal Astronomical Society*, 7, 153. [doi:10.1093/mnras/7.9.153](https://doi.org/10.1093/mnras/7.9.153)
[^13]: Le Verrier, U. J. (1859). "Lettre de M. Le Verrier à M. Faye sur la théorie de Mercure et sur le mouvement du périhélie de cette planète." *Comptes rendus de l'Académie des Sciences*, 49, 379–383. Newcomb, S. (1882). "Discussion and Results of Observations on Transits of Mercury from 1677 to 1881." *Astronomical Papers of the American Ephemeris*, 1, 363–487.
[^14]: Lagrange, J.-L. (1788). *Mécanique analytique*. Paris. Hamilton, W. R. (1834). "On a General Method in Dynamics." *Philosophical Transactions of the Royal Society*, 124, 247–308. [doi:10.1098/rstl.1834.0017](https://doi.org/10.1098/rstl.1834.0017)
[^15]: Poincaré, H. (1890). "Sur le problème des trois corps et les équations de la dynamique." *Acta Mathematica*, 13, 1–270. [doi:10.1007/BF02392506](https://doi.org/10.1007/BF02392506)
[^16]: Lorenz, E. N. (1963). "Deterministic Nonperiodic Flow." *Journal of the Atmospheric Sciences*, 20(2), 130–141. [doi:10.1175/1520-0469(1963)020<0130:DNF>2.0.CO;2](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2)
[^17]: Bernoulli, D. (1738). *Hydrodynamica*. Strasbourg: Dulsecker. English translation by T. Carmody and H. Kobus (1968), Dover.
[^18]: Stokes, G. G. (1845). "On the Theories of the Internal Friction of Fluids in Motion." *Transactions of the Cambridge Philosophical Society*, 8, 287–319. Navier, C.-L. (1823). "Mémoire sur les lois du mouvement des fluides." *Mémoires de l'Académie Royale des Sciences*, 6, 389–440.
[^19]: Clay Mathematics Institute. "Navier–Stokes Equation." Millennium Prize Problems. [claymath.org](https://www.claymath.org/millennium/navier-stokes-equation/)
[^20]: Feynman, R. P., Leighton, R. B., Sands, M. (1963). *The Feynman Lectures on Physics*, Vol. I, Section 3-7, where turbulence is called "the central problem" that classical physics has not solved. [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu/I_03.html)
