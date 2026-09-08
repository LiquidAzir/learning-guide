---
title: Special Relativity
subtitle: Einstein takes Maxwell's equations at their word, and space and time stop being separate things.
part: III · The Two Revolutions
---

## What must change if everyone measures the same speed of light?

Maxwell's equations say light always travels at $c$, no matter who measures it. Galileo's common-sense rule says velocities add, so light from a moving source should travel faster. Michelson and Morley looked for the ether and found nothing. Something in the foundations of physics was broken, and in 1905 Albert Einstein, working at the Swiss patent office in Bern, identified what.

## Two postulates

Einstein's paper, "On the Electrodynamics of Moving Bodies," starts not with equations but with two assumptions.[^1]

**First postulate (the principle of relativity).** The laws of physics are the same in every **inertial frame**: every viewpoint that is moving at constant velocity, without accelerating. This is Galileo's ship, upgraded. No experiment, mechanical *or electromagnetic*, can tell you whether you are "really" moving. There is no absolute rest, and therefore no ether to be at rest in.

**Second postulate.** The speed of light in empty space is the same, $c$, for every inertial observer, regardless of the motion of the source or the observer.

The second postulate sounds insane. If you chase a beam of light at 99% of $c$, it still recedes from you at exactly $c$. If you run toward it, it approaches at exactly $c$. Einstein's move was to accept this, because Maxwell's equations demand it and experiment confirms it, and then work out what it *implies*. What it implies is that space and time are not what you think they are.

## Simultaneity is relative

Start with the simplest consequence. Two lightning bolts strike the front and back of a moving train. A person standing exactly midway on the platform sees both flashes at the same moment and concludes the strikes were simultaneous. A person sitting exactly midway inside the train is moving toward the front flash and away from the back one; since light travels at the same $c$ for her, she sees the front flash first and concludes the front strike happened first.

Who is right? Both. There is no fact of the matter about whether two distant events are simultaneous. Different observers slice spacetime into "now" differently, and there is no privileged slice. This is the first thing to absorb: Newton's universal clock, ticking the same for everyone, does not exist.

## Time dilation: moving clocks run slow

Build a clock from light. Bounce a pulse between two mirrors a distance $L$ apart; each round trip is one tick, taking $2L/c$. Now watch that clock fly past you at speed $v$. From your viewpoint the pulse travels a diagonal zigzag, a longer path, but at the same speed $c$. So each tick takes longer. The moving clock runs slow, by a factor

$$\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$$

This is the **Lorentz factor**, and it appears in every formula of relativity. At everyday speeds it is indistinguishable from 1. At half the speed of light it is 1.15. At 99% it is 7. At 99.99% it is 71. As $v$ approaches $c$ it goes to infinity, which is one way of seeing that nothing with mass can reach $c$.

:::math Deriving time dilation with a triangle
In the clock's own frame a tick takes $\Delta t_0 = 2L/c$. In your frame the clock moves $v\Delta t$ sideways during a tick of duration $\Delta t$, so the light travels along two hypotenuses each of length $\sqrt{L^2 + (v\Delta t/2)^2}$, at speed $c$:
$$c\,\Delta t = 2\sqrt{L^2 + (v\Delta t/2)^2}$$
Square both sides, solve for $\Delta t$, and you get $\Delta t = \gamma\,\Delta t_0$. The whole of time dilation is Pythagoras plus the constancy of $c$. There is no trick and no hidden machinery. If light's speed is the same for everyone, moving clocks *must* tick slowly.
:::

This is not an illusion or a defect in clocks. It is what time *is*. And it is measured routinely:

- **Muons** are unstable particles created when **cosmic rays**, fast protons and nuclei arriving from space, hit the upper atmosphere. They decay in about 2.2 microseconds, in which time they could travel only about 660 meters even at nearly $c$. Yet they reach the ground 15 kilometers below in huge numbers, because from our frame their internal clocks run slow by a factor of 10 or more.[^2]
- In 1971 Joseph Hafele and Richard Keating flew atomic clocks around the world on commercial airliners and compared them to clocks left behind. The eastbound clocks came back 59 nanoseconds behind and the westbound clocks 273 nanoseconds ahead, matching the combined predictions of special and general relativity within the errors.[^3]
- **GPS** satellite clocks run slow by about 7 microseconds per day from this effect alone; the next chapter adds gravity's larger, opposite correction.[^4]

## Length contraction

The same reasoning shows that moving objects are shortened along their direction of motion by the same factor: a rod of rest length $L_0$ has length $L_0/\gamma$ when it flies past. The muon story can be told this way too: from the muon's own viewpoint, its clock ticks normally, but the atmosphere rushing past is contracted to a few hundred meters, so it easily makes it through. Time dilation and length contraction are two descriptions of one fact, seen from two frames.

## Adding velocities, correctly

Galileo's rule $u = u' + v$ is replaced by

$$u = \frac{u' + v}{1 + u'v/c^2}$$

Try it: fire a light beam ($u' = c$) from a train moving at $v$. The result is $u = (c + v)/(1 + v/c) = c$. Light always comes out at $c$, as required. Try two ordinary speeds and the correction term $u'v/c^2$ is so small you would never notice, which is why Galileo seemed right for three centuries.

## $E = mc^2$

In a short follow-up paper later in 1905, Einstein drew out the consequence for energy.[^5] Because $\gamma$ grows without bound as $v \to c$, the kinetic energy of an object also grows without bound; you can pump energy into it forever and it never reaches light speed. The full expression for a moving object's energy is $E = \gamma m c^2$, and when the object is at rest ($\gamma = 1$) there is still energy left over:

$$E_0 = mc^2$$

Mass is a form of energy; a body at rest contains energy $mc^2$ simply by having mass. Because $c^2$ is about $9 \times 10^{16}$, tiny masses correspond to enormous energies. This is why nuclear reactions release millions of times more energy than chemical ones: they convert a measurable fraction of the mass into energy. It is also why the Sun has been shining for four billion years. The equation was confirmed directly in 1932, when John Cockcroft and Ernest Walton split lithium nuclei and found the energy released matched the mass lost.[^6]

:::warning
$E = mc^2$ does not say mass "turns into" energy in a magical sense. It says mass *is* energy, measured in different units, in the same way that Joule found heat is energy. A hot cup of coffee is very slightly heavier than a cold one. A compressed spring weighs more than a relaxed one. The effects are far too small to weigh, but they are real.
:::

## Spacetime: Minkowski's picture

In 1908 Einstein's former mathematics teacher Hermann Minkowski showed that all of this becomes simple if you stop thinking of space and time separately. "Henceforth space by itself, and time by itself, are doomed to fade away into mere shadows," he announced, "and only a kind of union of the two will preserve an independent reality."[^7] That union is **spacetime**: a four-dimensional arena in which an event is specified by three space coordinates and one time coordinate.

In ordinary space, different observers may disagree about the $x$ and $y$ coordinates of a point but agree on the distance between two points, $\sqrt{\Delta x^2 + \Delta y^2}$. In spacetime, observers disagree about both distances and time intervals, but agree on a single combined quantity, the **spacetime interval**:

$$\Delta s^2 = c^2\Delta t^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$$

The minus signs are the whole point. Time enters with the opposite sign from space, and that one difference generates all of relativity. Time dilation, length contraction, and the relativity of simultaneity are just the different ways observers in relative motion carve the same invariant interval into "time" and "space" parts. It is exactly like two people facing different directions who disagree about what is "in front" and what is "to the left" while agreeing about how far away everything is.

{{fig:lightcone|A spacetime diagram. Time runs upward, one direction of space runs sideways. Light travels along the 45° lines. Everything an event can influence lies inside its future light cone; everything that could have influenced it lies in its past light cone. Events outside both cones are neither before nor after it in any absolute sense.}}

Because light travels at 45° in these diagrams (one light-second per second), it draws a **light cone** around every event. Nothing can travel faster than light, so cause and effect can only connect events inside each other's cones. Events outside the cone are "elsewhere": their time order depends on who is looking, which is fine, because they cannot affect each other anyway. Causality is preserved precisely because $c$ is a speed limit.

:::key
Special relativity is not primarily about fast things being weird. It is the discovery that space and time are one geometric object with a slightly unusual notion of distance. Everything else follows from that geometry, and the geometry is forced on us by the single fact that light's speed is the same for everyone.
:::

## What "special" means, and what it left out

The theory is called *special* because it only covers the special case of observers moving at constant velocity. It says nothing about acceleration, and nothing about gravity. Worse, Newton's gravity acts instantaneously, which is now forbidden: no signal, gravitational or otherwise, can outrun light. Newton's law and Einstein's relativity could not both be right. Einstein spent the next ten years fixing this, and the result is the next chapter.

:::people Einstein in 1905
Einstein was 26, had been unable to get an academic job, and worked as a patent examiner (third class). In one year he published four papers that each would have justified a career: the light-quantum paper that helped start quantum mechanics, the Brownian motion paper that proved atoms exist, special relativity, and $E = mc^2$. Physicists call it the *annus mirabilis*, the miracle year. Hendrik Lorentz and Henri Poincaré had found most of the mathematics before him; Einstein's contribution was to see that the mathematics was not a patch on the ether theory but a statement about the nature of time.[^8]
:::

:::try Put the idea to work
A spaceship passes Earth at high speed. People on each say the other's clocks run slow. Why is that not, by itself, a contradiction?

:::answer Show the reasoning
They compare distant clocks using different definitions of simultaneity. The statements do not refer to the same pair of time comparisons in one shared universal “now.” To compare elapsed time when clocks reunite, specify their complete paths through spacetime; that is a different experiment.
:::
:::

## Summary

- Two postulates: physics is the same in every uniformly moving frame, and light's speed is the same for everyone.
- Consequences, all confirmed: simultaneity is relative; moving clocks run slow and moving objects shrink by the factor $\gamma = 1/\sqrt{1 - v^2/c^2}$; velocities add so that nothing exceeds $c$; mass is energy, $E = mc^2$.
- Minkowski's spacetime unifies it all: observers disagree about space and time separately but agree on the interval $c^2\Delta t^2 - \Delta x^2$. Light cones enforce cause and effect.
- The theory excludes gravity and acceleration. Fixing that required a new theory of gravity itself.

[^1]: Einstein, A. (1905). "Zur Elektrodynamik bewegter Körper." *Annalen der Physik*, 17, 891–921. [doi:10.1002/andp.19053221004](https://doi.org/10.1002/andp.19053221004). English translation: "On the Electrodynamics of Moving Bodies," in *The Principle of Relativity* (1923), Dover.
[^2]: Rossi, B., Hall, D. B. (1941). "Variation of the Rate of Decay of Mesotrons with Momentum." *Physical Review*, 59, 223. [doi:10.1103/PhysRev.59.223](https://doi.org/10.1103/PhysRev.59.223)
[^3]: Hafele, J. C., Keating, R. E. (1972). "Around-the-World Atomic Clocks: Observed Relativistic Time Gains." *Science*, 177(4044), 168–170. [doi:10.1126/science.177.4044.168](https://doi.org/10.1126/science.177.4044.168)
[^4]: Ashby, N. (2003). "Relativity in the Global Positioning System." *Living Reviews in Relativity*, 6, 1. [doi:10.12942/lrr-2003-1](https://doi.org/10.12942/lrr-2003-1)
[^5]: Einstein, A. (1905). "Ist die Trägheit eines Körpers von seinem Energieinhalt abhängig?" *Annalen der Physik*, 18, 639–641. [doi:10.1002/andp.19053231314](https://doi.org/10.1002/andp.19053231314)
[^6]: Cockcroft, J. D., Walton, E. T. S. (1932). "Experiments with High Velocity Positive Ions. II. The Disintegration of Elements by High Velocity Protons." *Proceedings of the Royal Society A*, 137, 229–242. [doi:10.1098/rspa.1932.0133](https://doi.org/10.1098/rspa.1932.0133)
[^7]: Minkowski, H. (1909). "Raum und Zeit." *Physikalische Zeitschrift*, 10, 104–111. Address delivered at Cologne, 21 September 1908. English translation in *The Principle of Relativity* (1923), Dover.
[^8]: Pais, A. (1982). *Subtle is the Lord: The Science and the Life of Albert Einstein*. Oxford University Press. Chapters 6–8 cover the 1905 papers and the contributions of Lorentz and Poincaré.
