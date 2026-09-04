---
title: The Toolkit
subtitle: Units, estimation, and the six pieces of math that carry the whole subject. Read this once and every later equation will make sense.
part: I · Foundations
---

## Why start with tools

Physics is written in a compact language. The words are units, the grammar is a small amount of math, and the accent is a habit of estimating before calculating. This chapter teaches all three. Nothing here requires you to compute anything by hand; the goal is to *read* equations the way you read sentences.

## Measuring: units and the constants of nature

A **unit** is an agreed-upon amount of something: a meter of length, a second of time, a kilogram of mass. Physics uses the **International System of Units** (SI), which has seven base units. Only four matter for most of this guide: the **meter** (m), **second** (s), **kilogram** (kg), and **kelvin** (K, for temperature, where 0 K is absolute zero and water freezes at 273.15 K).

Something remarkable happened to these units in 2019. They used to be defined by physical objects: the kilogram was literally a metal cylinder in a vault near Paris. Now every SI unit is defined by fixing the numerical value of a **constant of nature**, a number the universe supplies and we merely measure.[^1] The second is defined by the vibration frequency of a cesium atom. The meter is defined by declaring the speed of light to be exactly $299{,}792{,}458$ meters per second. The kilogram is defined through **Planck's constant**, a number from quantum mechanics you will meet in chapter 9.

:::key
The 2019 redefinition is a quiet triumph. It means the units of measurement are no longer human artifacts that could be scratched or stolen. They are properties of the universe itself, reproducible in any lab, on any planet.
:::

The constants you will see repeatedly:

| Symbol | Name | Value | Where it shows up |
|---|---|---|---|
| $c$ | Speed of light | $3.00 \times 10^{8}$ m/s | Relativity, electromagnetism |
| $G$ | Gravitational constant | $6.67 \times 10^{-11}$ m³ kg⁻¹ s⁻² | Gravity |
| $h$ | Planck's constant | $6.63 \times 10^{-34}$ J·s | Quantum mechanics |
| $k_B$ | Boltzmann's constant | $1.38 \times 10^{-23}$ J/K | Heat and entropy |
| $e$ | Charge of the electron | $1.60 \times 10^{-19}$ C | Electricity, atoms |

You do not need to memorize these. Notice instead how tiny $h$ and $G$ are. That smallness is *why* quantum effects and gravity are invisible in daily life, and why it took until the 20th century to notice them.

## Scientific notation and orders of magnitude

Physics spans numbers from $10^{-35}$ to $10^{27}$, so it writes numbers as a digit or two times a power of ten. $10^{8}$ means 1 followed by 8 zeros: 100,000,000. $10^{-3}$ means 0.001. An **order of magnitude** is one factor of ten. Saying two things differ by "three orders of magnitude" means one is roughly a thousand times the other.

Physicists lean on this constantly, and they lean on a related skill even harder: **estimation**. The great Italian physicist Enrico Fermi was famous for getting answers accurate to within a factor of ten using nothing but common sense and arithmetic. At the first atomic bomb test in 1945 he dropped scraps of paper as the blast wave passed and estimated the explosion's energy from how far they blew: about 10 kilotons of TNT. The instruments later said about 20. He was within a factor of two, using confetti.[^2]

:::try
Estimate how many heartbeats you will have in your life. Roughly 70 per minute, 60 minutes an hour, 24 hours a day, 365 days a year, 80 years. That is about $70 \times 60 \times 24 \times 365 \times 80 \approx 3 \times 10^{9}$: three billion. You just did a Fermi estimate. The habit of getting the power of ten right before worrying about the details is the single most useful skill in this guide.
:::

## Dimensional analysis: getting answers without solving anything

Every physical quantity has **dimensions**: it is some combination of length (L), time (T), and mass (M). Speed is L/T. Acceleration is L/T². Force is M·L/T². Both sides of any valid equation must have the same dimensions; you cannot have a length equal a time.

This sounds like bookkeeping. It is actually a superpower. Suppose you want to know how the swing time of a pendulum depends on its length $\ell$ and the strength of gravity $g$ (which has dimensions L/T²). The only way to combine $\ell$ and $g$ to get a time is $\sqrt{\ell / g}$. Check: $\sqrt{\text{L} / (\text{L}/\text{T}^2)} = \sqrt{\text{T}^2} = \text{T}$. So the period must be some pure number times $\sqrt{\ell/g}$, and it cannot depend on the mass of the pendulum at all. All that without a single law of motion. The full calculation gives the pure number as $2\pi$. Dimensional analysis got you the whole shape of the answer for free.

## The math: six ideas

### 1. Vectors: quantities with a direction

Some quantities are just a number: temperature, mass, energy. These are **scalars**. Others need a direction too: how fast *and which way*. These are **vectors**, drawn as arrows. Velocity, force, and acceleration are vectors. In writing, vectors are bold ($\mathbf{v}$) or have an arrow on top ($\vec{v}$); their length alone (the "how much") is written plain ($v$).

Vectors add tip-to-tail. Walk 3 blocks east and 4 blocks north and you end up 5 blocks from where you started, at an angle, because $3^2 + 4^2 = 5^2$. That is the Pythagorean theorem doing its ordinary job. When a physicist says "the forces cancel," they mean the arrows add to zero.

### 2. The derivative: how fast something is changing

Your position changes with time. **Velocity** is *how fast* it changes: the slope of the position-versus-time graph. If position is $x$ and time is $t$, velocity is written

$$v = \frac{dx}{dt}$$

Read this aloud as "the rate of change of $x$ with respect to $t$." The $d$ stands for "a tiny change in." The whole thing is a **derivative**. It is not a fraction you compute by dividing; it is the answer to the question "if I nudge $t$ forward by a hair, how much does $x$ move, per unit of nudge?"

Acceleration is the derivative of velocity: $a = dv/dt$. Since velocity is itself a derivative, acceleration is a **second derivative**, written $d^2x/dt^2$. That is why the number 2 keeps appearing in the laws of motion: they are statements about how the *rate of a rate* behaves.

:::math Reading a derivative
Throw a ball straight up. Its height rises, slows, pauses, then falls. Its velocity ($dx/dt$) starts positive, shrinks to zero at the top, then goes negative. Its acceleration ($d^2x/dt^2$) is constant the whole time: about $-9.8$ meters per second, per second, pointing down. The derivative turns the vague sentence "it slows, stops, and falls" into one number that never changes. That is the point of the tool.
:::

### 3. The integral: adding up tiny pieces

The **integral** is the derivative run backwards. If you know velocity at every moment, the total distance traveled is the *area under* the velocity-versus-time graph. It is written

$$x = \int v \, dt$$

Read it as "add up velocity times each tiny slice of time." The long S shape is literally a stretched letter S for "sum." Integrals turn local rules into global totals: from "how fast right now" to "how far in total," from "how much force at each point" to "how much energy overall." Newton and Gottfried Leibniz invented both tools in the 1660s–1670s, and then spent years fighting over who was first.[^3]

### 4. Exponentials and logarithms: growth, decay, and half-life

Many things change at a rate proportional to how much of them there is. Bacteria multiply faster when there are more bacteria. Radioactive atoms decay faster when there are more of them. The solution to "rate of change is proportional to the amount" is the **exponential function**:

$$N(t) = N_0 \, e^{-t/\tau}$$

Here $N_0$ is the starting amount, $\tau$ (the Greek letter tau) is the characteristic time, and $e \approx 2.718$ is a special number that makes the math clean. For decay, every time $\tau$ passes, the amount shrinks by the same *factor*. The related **half-life** is the time for half of it to go; the two are linked by $t_{1/2} = \tau \ln 2 \approx 0.69\,\tau$. Carbon-14 has a half-life of about 5,730 years, which is why it can date things a few tens of thousands of years old and nothing older: after ten half-lives, less than a thousandth remains.

The **logarithm** is the exponential run backwards: it answers "how many doublings (or factors of ten) does it take to get from here to there?" The decibel scale for sound and the Richter scale for earthquakes are logarithmic. So, you will see later, is entropy.

### 5. Waves: the shape that describes light, sound, and quantum particles

A **wave** is a disturbance that travels while the medium mostly stays put. Ocean waves move; the water does not travel with them. A wave has an **amplitude** (how tall), a **wavelength** $\lambda$ (distance between crests), and a **frequency** $f$ (crests passing per second). The three connect through the wave's speed $v$:

$$v = f \lambda$$

This one equation is used everywhere. For light, $v = c$, so higher-frequency light (blue, ultraviolet) has shorter wavelengths, and the equation converts between the two. The simplest wave shape is the **sine wave**, $y = A \sin(2\pi f t)$: the smooth up-and-down curve you have seen on oscilloscopes. Any repeating shape whatsoever can be built by adding sine waves of different frequencies, a fact asserted by Joseph Fourier in 1822 and proved rigorously a few years later, which underlies everything from MP3 compression to quantum mechanics.[^4]

When two waves overlap they **interfere**: crest on crest makes a bigger crest, crest on trough cancels to nothing. Interference is how physicists proved light was a wave in 1803, and how they later discovered that electrons are too.

### 6. Probability and uncertainty

No measurement is exact. Every experimental number comes with an **uncertainty**, and physicists report both: "the mass is $125.11 \pm 0.11$." The $\pm$ part is usually one **standard deviation** (written $\sigma$, sigma), a measure of how spread out repeated measurements are. About 68% of measurements land within one sigma of the true value; 95% within two; 99.7% within three.

This leads to one of the strictest conventions in science. To claim a new particle, physicists demand **five sigma**: the result must be so far from "nothing there" that random chance would produce it about once in 3.5 million tries.[^5] Three sigma (a one-in-740 chance) is called "evidence," not "discovery," and three-sigma bumps disappear with distressing regularity. When you read a news story about a "hint" of new physics, ask how many sigma. It is usually three or fewer.

## Two more ideas you will need later

**Fields.** A **field** is a quantity that has a value at every point in space. A weather map of temperatures is a scalar field: one number per location. A map of wind is a vector field: an arrow per location. Physics is largely the study of fields: the gravitational field, the electric and magnetic fields, and eventually the quantum fields whose vibrations *are* particles.

**Complex numbers.** Ordinary numbers cannot solve $x^2 = -1$. Mathematicians invented a number $i$ with $i^2 = -1$ and called numbers like $3 + 2i$ **complex**. That sounds like a game, but complex numbers turn out to be the natural language for anything that rotates or oscillates, because of a startling identity discovered by Leonhard Euler: $e^{i\theta} = \cos\theta + i\sin\theta$. A complex number is an arrow in a plane; multiplying by $e^{i\theta}$ rotates it by angle $\theta$. Quantum mechanics is written in complex numbers, and the probabilities you observe are the *squared lengths* of those arrows. Chapter 9 will make this concrete.

## Symmetry: the deepest tool of all

Say a law of physics "has a symmetry" when you can change something and the law does not notice. Do the experiment tomorrow instead of today, or in Tokyo instead of Toronto, or with the whole lab rotated: same result. In 1918 the mathematician Emmy Noether proved that every such symmetry hides a **conservation law**, a quantity that can never change.[^6] Chapter 4 is built around that result. For now, just keep the word in mind: when a physicist gets excited about symmetry, they are excited because a symmetry is a law in disguise.

## Summary

- Units are now defined by constants of nature, not objects.
- Powers of ten and rough estimates come before precision.
- Derivatives describe rates of change; integrals add up tiny pieces.
- Exponentials describe growth and decay; waves are described by amplitude, wavelength, and frequency, with $v = f\lambda$.
- Every measurement has an uncertainty; discovery needs five sigma.
- Fields fill space; complex numbers describe rotation; symmetry equals conservation.

You now have every tool the rest of this guide uses. On to how things move.

[^1]: Bureau International des Poids et Mesures (2019). *The International System of Units (SI)*, 9th edition. [bipm.org/en/publications/si-brochure](https://www.bipm.org/en/publications/si-brochure)
[^2]: Fermi, E. (1945). "My Observations During the Explosion at Trinity on July 16, 1945." Memorandum, U.S. National Archives; reproduced at [atomicarchive.com](https://www.atomicarchive.com/resources/documents/trinity/fermi.html)
[^3]: Hall, A. R. (1980). *Philosophers at War: The Quarrel between Newton and Leibniz*. Cambridge University Press. [doi:10.1017/CBO9780511524066](https://doi.org/10.1017/CBO9780511524066)
[^4]: Fourier, J. (1822). *Théorie analytique de la chaleur*. Paris: Firmin Didot. English translation: *The Analytical Theory of Heat* (1878), Cambridge University Press. [archive.org](https://archive.org/details/analyticaltheory00fourrich)
[^5]: Lyons, L. (2013). "Discovering the Significance of 5 sigma." [arXiv:1310.1284](https://arxiv.org/abs/1310.1284)
[^6]: Noether, E. (1918). "Invariante Variationsprobleme." *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen*, 235–257. English translation by M. A. Tavel (1971), *Transport Theory and Statistical Physics*, 1(3), 183–207. [arXiv:physics/0503066](https://arxiv.org/abs/physics/0503066)
