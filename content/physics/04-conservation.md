---
title: Energy, Momentum, and the Things That Never Change
subtitle: Conservation laws are physics' bookkeeping, and Emmy Noether's theorem explains why the books always balance.
part: II · The Classical World
---

## Recap

Newton gave us $\mathbf{F} = d\mathbf{p}/dt$: force is the rate of change of momentum. This chapter is about what happens when you ask the opposite question. Not "what changes?" but "what *can't*?"

## Why physicists love things that stay the same

A **conservation law** says some quantity, added up over an entire isolated system, never changes no matter what happens inside. Things can collide, explode, melt, or orbit; the total stays fixed. Conservation laws are the most powerful shortcuts in physics because they let you skip the details. You do not need to know how a car crash unfolded, millisecond by millisecond, to know that the total momentum before equals the total momentum after.

There are three great classical conservation laws: momentum, angular momentum, and energy. Then there is the theorem that explains all three at once.

## Momentum: the one that falls straight out of Newton

**Momentum** is mass times velocity, $\mathbf{p} = m\mathbf{v}$. It is a vector: a truck moving east has a different momentum from the same truck moving west.

Conservation of momentum follows directly from Newton's third law. When two objects push on each other, the forces are equal and opposite, so whatever momentum one gains the other loses. Add them up and the total does not budge. A rocket works this way: it hurls exhaust backward at high speed, and to keep the total momentum at zero, the rocket must move forward. No air to "push against" is needed, which is why rockets work in space, a fact many respectable people doubted until the 1920s.

:::math Collisions in one line
Two objects with masses $m_1$ and $m_2$ and velocities $v_1$ and $v_2$ collide. Conservation says
$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$
where the primed quantities are after the collision. Whatever happens in the crunch, that equation holds. Fire a bullet of mass $0.01$ kg at $500$ m/s into a stationary 2 kg block of wood, and the block-plus-bullet must move off at $(0.01 \times 500)/2.01 \approx 2.5$ m/s. No details of the impact needed.
:::

## Angular momentum: why skaters spin faster

Spinning things have their own conserved quantity. **Angular momentum** measures how much rotation an object has: for a small mass moving in a circle, it is the momentum times the distance from the center, $L = m v r$. For a rigid spinning body it is written $L = I\omega$, where $\omega$ (omega) is the spin rate and $I$, the **moment of inertia**, measures how spread out the mass is.

Angular momentum is conserved when no twisting force (a **torque**) acts. A figure skater spinning with arms out pulls them in: $I$ drops, so $\omega$ must rise to keep $L$ the same, and the skater speeds up. A collapsing star spins faster for the same reason; a **neutron star**, the crushed remnant of a supernova, can rotate hundreds of times per second because the enormous slow-spinning star that made it shrank to the size of a city.

Here is a satisfying connection. Kepler's second law, that planets sweep out equal areas in equal times, is nothing but conservation of angular momentum. Gravity pulls straight toward the Sun, so it exerts no torque, so $L = mvr$ stays constant, so when $r$ is small $v$ must be large. Kepler discovered a conservation law by staring at Mars.

## Energy: the one that took two centuries to get right

**Energy** is the hardest of the three to define, because it wears so many costumes. The working definition: energy is the capacity to do **work**, and work is force times the distance over which it acts, $W = Fd$. Push a box with 10 newtons for 2 meters and you have done 20 **joules** of work.

The costumes:

- **Kinetic energy** is energy of motion: $K = \tfrac{1}{2} m v^2$. Notice the square: double the speed, quadruple the energy. This is why a car crash at 60 mph is four times as destructive as one at 30.
- **Potential energy** is stored energy, due to position. Lift a mass $m$ by height $h$ against gravity $g$ and you store $U = mgh$. Drop it and the potential energy becomes kinetic. For gravity between two bodies at distance $r$, the potential energy is $U = -Gm_1 m_2 / r$, negative because you have to *add* energy to pull them apart.
- **Thermal energy** is the kinetic energy of atoms jiggling. (The next chapter is about this.)
- **Chemical, electrical, nuclear, radiant** energy: all forms that convert into the others at fixed exchange rates.

:::math Where ½mv² comes from
Why the one-half, and why squared? Push a mass $m$ from rest with constant force $F$ over distance $d$. Newton says $a = F/m$. From Galileo, a body accelerating from rest covers $d = \tfrac{1}{2}at^2$ and reaches speed $v = at$, so $d = v^2/(2a)$. The work done is
$$W = Fd = (ma)\cdot\frac{v^2}{2a} = \tfrac{1}{2}mv^2$$
The work you put in shows up as exactly $\tfrac{1}{2}mv^2$. That is the **work-energy theorem**, and it is where kinetic energy gets its formula. It is not an arbitrary definition; it is the quantity that work turns into.
:::

### The long fight over energy

Newton did not use energy. Leibniz argued in 1686 that the true "living force" of a moving body was $mv^2$, not the "quantity of motion" $mv$ favored by René Descartes and his followers; the two camps quarreled for decades, partly because they were describing two different conserved quantities without realizing it.[^1] In the 1740s Émilie du Châtelet, translating Newton into French, championed Leibniz's $mv^2$ and cited experiments by Willem 's Gravesande, who dropped brass balls into clay and found the dent depth scaled with the square of the speed.[^2]

The bigger problem was heat. When two objects rub together, motion disappears and warmth appears. Was energy destroyed? In the 1840s James Prescott Joule, a brewer's son with a private laboratory, spent years measuring how much a falling weight warmed water when it turned a paddle. He found a fixed exchange rate: about 4.2 joules of mechanical work per calorie of heat, always.[^3] Heat was energy in disguise. Julius Robert von Mayer reached the same conclusion from physiology, and in 1847 Hermann von Helmholtz stated the full principle: energy in all its forms is conserved.[^4] This is the **first law of thermodynamics**.

:::story
Joule was so obsessed that he took thermometers on his honeymoon in 1847 to measure whether waterfalls were warmer at the bottom than the top. (They are, very slightly. He could not detect it.)[^11] Physics was, for a while, a hobby for the wealthy and the stubborn.
:::

## Noether's theorem: why anything is conserved at all

For two centuries, conservation laws were facts you discovered. Then in 1918 Emmy Noether proved they are consequences of something deeper.[^5]

Recall from the toolkit chapter that a **symmetry** is a change that leaves the laws of physics unchanged. Noether's theorem states: **for every continuous symmetry of the laws, there is a conserved quantity.** Continuous means the change can be made by any amount, smoothly; sliding a lab three meters is continuous, flipping it in a mirror is not.

| If the laws don't care about... | ...then this is conserved |
|---|---|
| *When* you run the experiment (time translation) | Energy |
| *Where* you run it (space translation) | Momentum |
| *Which direction* you face (rotation) | Angular momentum |

This is why energy is conserved: not because of anything about energy, but because the laws of physics are the same today as yesterday. If the universe's rules drifted with time, energy would not be conserved. The theorem also runs in reverse. Every conservation law you find is a clue that some symmetry is hiding underneath. In the 20th century physicists found new conserved quantities in particle physics (electric charge, and stranger things) and used Noether's theorem to reverse-engineer the symmetries behind them. That reverse engineering is essentially how the Standard Model was built.

:::math How the theorem works, in outline
The proof lives in the Lagrangian formulation from the last chapter, where the physics is contained in a single function $\mathcal{L}$ and nature minimizes the action $S = \int \mathcal{L}\, dt$. Suppose you shift the time coordinate slightly, $t \to t + \epsilon$, and $\mathcal{L}$ does not change. Noether showed that this invariance forces a particular combination of positions and velocities, built from $\mathcal{L}$, to have zero time derivative. Work out that combination for ordinary mechanics and it is exactly $\tfrac{1}{2}mv^2 + U$: kinetic plus potential energy. The theorem does not just say *something* is conserved; it hands you the formula.
:::

:::people Emmy Noether
Noether (1882–1935) was one of the great mathematicians of the century and spent most of her career unpaid. Göttingen refused to make a woman a professor; David Hilbert, who had recruited her, reportedly retorted that the faculty was not a bathhouse. Her early courses were announced under Hilbert's name.[^12] The theorem came out of a specific puzzle: Hilbert and Felix Klein were troubled that energy conservation seemed to fail in Einstein's brand-new general relativity, and asked Noether to look. She found the general principle, and along the way explained why energy behaves oddly in curved spacetime (see the frontier note below). Einstein wrote to Hilbert that he was impressed "that one can view these things from such a general standpoint."[^6] Dismissed by the Nazis in 1933 for being Jewish, she moved to Bryn Mawr College in Pennsylvania and died after surgery two years later.
:::

## When conservation laws seem to fail, believe them anyway

The most productive move in twentieth-century physics was to trust a conservation law over the evidence.

In the 1920s, physicists studying **beta decay**, in which a nucleus spits out an electron, found that the electrons came out with a spread of energies rather than the single fixed value that energy conservation predicted. Niels Bohr was willing to abandon conservation of energy. Wolfgang Pauli was not. In a 1930 letter he proposed a "desperate remedy": an unseen, electrically neutral, nearly massless particle was carrying off the missing energy.[^7] He apologized for suggesting something that might never be detected. Enrico Fermi named it the **neutrino**, "little neutral one." It was detected in 1956, streaming out of a nuclear reactor.[^8] Trillions pass through your body every second. Conservation of energy was right, and it had predicted a new particle.

:::frontier Energy in an expanding universe
Noether's theorem has a catch: it requires the laws to be the same at all times. Chapter 13 will show that the universe is expanding, so the stage itself changes from one moment to the next, and total energy is *not* conserved in the simple sense; light crossing the expanding universe loses energy as its wavelength stretches, and that energy does not go anywhere.[^9] This is the theorem working exactly as stated, in a situation without the symmetry it needs. Locally, in any small region, energy is still conserved perfectly.
:::

## Mass is energy too

There is a postscript that belongs to the relativity chapter but deserves a preview here. In 1905 Einstein showed that mass itself is a form of energy, with the exchange rate $E = mc^2$.[^10] Because $c^2$ is enormous, a tiny mass is a vast energy: one gram fully converted would release the energy of about 20,000 tons of TNT. Energy conservation and mass conservation, which chemists had treated as two separate laws, became one law. The Sun shines by converting about four million tons of mass into light every second, and is still only a fraction of a percent lighter than when it formed.

## Summary

- Momentum ($m\mathbf{v}$), angular momentum ($L = mvr$ or $I\omega$), and energy ($\tfrac{1}{2}mv^2$, $mgh$, heat, and more) are each conserved in isolated systems.
- Energy conservation took two centuries to establish because heat looked like lost energy until Joule measured the exchange rate.
- Noether's theorem: each continuous symmetry of the laws produces a conserved quantity. Time symmetry gives energy, space symmetry gives momentum, rotation gives angular momentum.
- Trusting conservation laws over apparent evidence predicted the neutrino.
- In an expanding universe the time symmetry is absent, so global energy conservation genuinely does not hold. Mass is a form of energy: $E = mc^2$.

[^1]: Iltis, C. (1971). "Leibniz and the Vis Viva Controversy." *Isis*, 62(1), 21–35. [doi:10.1086/350705](https://doi.org/10.1086/350705)
[^2]: Du Châtelet, É. (1740). *Institutions de Physique*. Paris: Prault. Chapter 21 discusses 's Gravesande's experiments and the measure of "living force." Digitized at Gallica (Bibliothèque nationale de France). [gallica.bnf.fr](https://gallica.bnf.fr/ark:/12148/bpt6k75646k)
[^3]: Joule, J. P. (1850). "On the Mechanical Equivalent of Heat." *Philosophical Transactions of the Royal Society of London*, 140, 61–82. [doi:10.1098/rstl.1850.0004](https://doi.org/10.1098/rstl.1850.0004)
[^4]: Helmholtz, H. von (1847). *Über die Erhaltung der Kraft*. Berlin: G. Reimer. English translation in Tyndall and Francis (eds.), *Scientific Memoirs* (1853).
[^5]: Noether, E. (1918). "Invariante Variationsprobleme." *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen*, 235–257. English translation by M. A. Tavel (1971), *Transport Theory and Statistical Physics*, 1(3), 183–207. [arXiv:physics/0503066](https://arxiv.org/abs/physics/0503066)
[^6]: Einstein to Hilbert, 24 May 1918. *The Collected Papers of Albert Einstein*, Vol. 8, Doc. 548. Princeton University Press.
[^7]: Pauli, W. (1930). Letter to the participants of the Tübingen conference, 4 December 1930. Reproduced and translated in Brown, L. M. (1978), "The idea of the neutrino," *Physics Today*, 31(9), 23–28. [doi:10.1063/1.2995181](https://doi.org/10.1063/1.2995181)
[^8]: Cowan, C. L., Reines, F., Harrison, F. B., Kruse, H. W., McGuire, A. D. (1956). "Detection of the Free Neutrino: a Confirmation." *Science*, 124(3212), 103–104. [doi:10.1126/science.124.3212.103](https://doi.org/10.1126/science.124.3212.103)
[^9]: Carroll, S. (2010). "Energy Is Not Conserved." *Preposterous Universe* (blog), 22 February 2010; and Carroll, S. (2004), *Spacetime and Geometry*, Addison-Wesley, §4.4 on the absence of a global energy conservation law in general relativity. [preposterousuniverse.com](https://www.preposterousuniverse.com/blog/2010/02/22/energy-is-not-conserved/)
[^10]: Einstein, A. (1905). "Ist die Trägheit eines Körpers von seinem Energieinhalt abhängig?" *Annalen der Physik*, 18, 639–641. [doi:10.1002/andp.19053231314](https://doi.org/10.1002/andp.19053231314). English translation: "Does the Inertia of a Body Depend Upon Its Energy-Content?" in *The Principle of Relativity* (1923), Dover.
[^11]: Cardwell, D. S. L. (1989). *James Joule: A Biography*. Manchester University Press, pp. 81–83, drawing on William Thomson's recollection of meeting Joule at Chamonix.
[^12]: Dick, A. (1981). *Emmy Noether 1882–1935*. Boston: Birkhäuser. Translated by H. I. Blocher. [doi:10.1007/978-1-4684-0535-4](https://doi.org/10.1007/978-1-4684-0535-4)
