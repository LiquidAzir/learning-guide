---
title: The Quantum World
subtitle: Light comes in lumps, matter comes in waves, and certainty runs out at the bottom. Here is what the equations actually say.
part: III · The Two Revolutions
---

## Why do tiny things require a different set of rules?

By 1900 physics looked nearly finished. Newton handled motion, Maxwell handled light, thermodynamics handled heat. A few odd experimental results remained. One of them, about the color of hot objects, brought the whole edifice down.

## The color of hot things

Heat a piece of iron and it glows: first dull red, then orange, then yellow-white. Every object emits light according to its temperature, and the pattern is universal: it does not depend on what the object is made of. Physicists idealized this as **blackbody radiation** (a "black body" absorbs all light that hits it and emits purely by temperature) and tried to predict the spectrum, meaning how much light comes out at each wavelength.

Classical physics failed catastrophically. Treating light as Maxwell's waves and applying Boltzmann's statistics predicted that a hot object should emit *infinite* energy at short wavelengths. Your oven should blast you with X-rays. This absurdity was named the **ultraviolet catastrophe**, and it meant that Maxwell and Boltzmann, both individually triumphant, could not both be applied to light.

In December 1900 Max Planck found a formula that fit the data perfectly.[^1] To derive it he had to assume something he considered a mathematical trick to be removed later: that the energy of light of frequency $f$ could only be emitted or absorbed in discrete lumps, each of size

$$E = hf$$

where $h$ is a new constant of nature, now **Planck's constant**, $6.63 \times 10^{-34}$ joule-seconds. High-frequency light comes in big lumps, and a warm object simply cannot afford to emit many of them, which kills the catastrophe. Planck spent years trying to get rid of the lumps. He never could.

## Einstein takes the lumps seriously

In 1905, the same year as relativity, Einstein argued that Planck's lumps were not a bookkeeping trick but real: light *is* a stream of particles, later named **photons**, each carrying energy $hf$.[^2] He used this to explain the **photoelectric effect**, in which light shining on metal knocks electrons out. The puzzle was that dim blue light ejects electrons but bright red light does not, however intense. Waves cannot explain that; a bright enough wave should eventually shake electrons loose. Photons explain it instantly: each electron is hit by one photon, and a red photon simply does not carry enough energy ($hf$ is too small) to free it, no matter how many there are. Robert Millikan, who spent a decade trying to disprove this, confirmed it precisely in 1916 and Einstein received his Nobel Prize for it, not for relativity.[^3] In 1923 Arthur Compton removed the last doubt: X-rays bouncing off electrons lose energy and change wavelength exactly as if they were particles colliding like billiard balls, each carrying momentum $h/\lambda$.[^16]

So light, which Young's double-slit experiment had shown to be a wave, was also a particle. This was not a contradiction physicists were prepared to hold in their heads.

## Atoms have a ladder

Meanwhile atoms were misbehaving. When you heat a gas of a single element, it does not glow with all colors but with a few sharp, specific ones: a **spectrum** of lines, unique to each element, like a barcode. Hydrogen's lines followed a simple numerical pattern found by a Swiss schoolteacher, Johann Balmer, in 1885, and nobody knew why.

By then the atom's basic layout was known. J. J. Thomson had found the **electron** in 1897, a negatively charged particle far lighter than any atom. In 1911 Ernest Rutherford showed that almost all of an atom's mass and all of its positive charge sit in a tiny central **nucleus**, one hundred-thousandth the size of the atom, with the electrons somewhere around it. (The nucleus was later found to be built of positively charged **protons** and neutral **neutrons**; chapter 11 tells that story.) The trouble was that an electron orbiting a nucleus, according to Maxwell, must radiate light continuously, lose energy, and spiral into the nucleus in about $10^{-11}$ seconds. Atoms should not exist.

In 1913 Niels Bohr proposed a fix as bold as Planck's.[^4] Electrons can only occupy certain allowed orbits, a discrete ladder of energy levels, and they do not radiate while sitting in one. Light is emitted only when an electron jumps from a higher rung to a lower one, and the photon carries exactly the energy difference: $hf = E_{\text{high}} - E_{\text{low}}$. With one assumption about which orbits are allowed, Bohr reproduced the *form* of Balmer's formula exactly and got its numerical constant right to within about six percent, as well as the values of $h$ and the electron's charge then allowed. When the spectroscopist Alfred Fowler objected that the model got the lines of ionized helium slightly wrong, Bohr accounted for the tiny motion of the nucleus itself and matched Fowler's measurement to five significant figures; the doubters went quiet. Every line in a spectrum is a jump between rungs.

Bohr's model was a triumph and a mess. It worked for hydrogen and failed for everything else, and it gave no reason *why* orbits should be quantized. It was a rule, not a theory.

## Matter is a wave too

The reason came from an unexpected direction. In his 1924 doctoral thesis, Louis de Broglie proposed that if light waves act like particles, then particles should act like waves.[^5] Every object with momentum $p$ has a wavelength

$$\lambda = \frac{h}{p}$$

For a baseball, this wavelength is around $10^{-34}$ meters, utterly unobservable. For an electron in an atom it is comparable to the size of the atom itself, and that explains Bohr's orbits: only orbits whose circumference fits a whole number of electron wavelengths can exist, exactly as a guitar string can only vibrate at frequencies whose waves fit its length. Quantization is a wave fitting into a box.

In 1927 Clinton Davisson and Lester Germer fired electrons at a nickel crystal and saw a **diffraction pattern**, the same kind of interference bands that X-rays make when they scatter off the regularly spaced atoms of a crystal: the fingerprint of waves.[^6] Electrons interfere. Since then the double-slit experiment has been performed with electrons, atoms, and molecules of up to about 2,000 atoms, all of which produce interference bands.[^7] Matter is waves. What kind of waves took two years to figure out.

## The equation

In 1925 and 1926 two theories appeared that looked completely different and turned out to be the same. Werner Heisenberg, aged 23, built a theory out of tables of numbers (**matrices**) representing observable quantities like energy and position.[^8] Erwin Schrödinger, working over Christmas 1925 in the Alps, wrote a wave equation for de Broglie's matter waves.[^9] Schrödinger's version is the one most people learn first:

$$i\hbar \frac{\partial \Psi}{\partial t} = \hat{H}\Psi$$

:::math Reading the Schrödinger equation
$\Psi$ (capital psi) is the **wavefunction**: a wave of complex numbers (recall $i$ from the toolkit) spread through space, one value at each point. It contains everything that can be known about the system.

$\hbar$ ("h-bar") is Planck's constant divided by $2\pi$, a convenience.

$\partial\Psi/\partial t$ is the rate at which the wavefunction changes with time.

$\hat{H}$, the **Hamiltonian**, is an operation you perform on $\Psi$ that encodes the system's energy: its kinetic energy (how sharply the wave curves in space) plus its potential energy (what forces it feels). Different physical situations, an electron in an atom, a particle in a box, mean different $\hat{H}$.

Read as a sentence: *the way the wavefunction changes in time is determined by the energy of the system.* It plays the role of $F = ma$: given the wavefunction now, it tells you the wavefunction at any later time, exactly and deterministically. Feed it the hydrogen atom and it produces Bohr's ladder of energy levels, with no extra assumptions, and most of what Bohr's model got wrong; the finest details had to wait for Dirac.
:::

Schrödinger showed within months that his waves and Heisenberg's matrices were two notations for one theory. Paul Dirac then found a more general formulation embracing both.[^10] The theory was called **quantum mechanics**, and by 1927 it was essentially complete. It has never failed an experiment.

## What the wavefunction means

Here is the difficult part, and physicists still argue about it. Schrödinger hoped $\Psi$ was a real physical wave, an electron smeared out in space. That does not work: when you detect an electron, you always find a whole electron at one spot, never a fraction of one spread out.

In 1926 Max Born proposed the interpretation that stuck.[^11] The wavefunction does not tell you where the particle *is*. Its squared magnitude tells you the **probability** of finding the particle at each place if you look:

$$P(x) = |\Psi(x)|^2$$

This is the **Born rule**. The wavefunction is a wave of probability-amplitudes. It evolves smoothly and deterministically according to Schrödinger's equation, and then when you measure, you get one definite outcome, with the odds given by $|\Psi|^2$. Before the measurement the electron did not have a definite position; the theory does not merely fail to tell you the position, it insists there was none to tell.

This resolves the double slit. The wavefunction passes through both slits, the two parts interfere, and the interference pattern in $|\Psi|^2$ determines where electrons are likely to land. Each electron lands at one spot; thousands of them build up the bands. Block one slit and the interference vanishes, because there is nothing for the wave to interfere with. Try to detect *which* slit the electron went through and the interference also vanishes, because the detection changes the wavefunction. You can know the path or see the pattern, never both.

:::key
Quantum mechanics is deterministic and probabilistic at once. The wavefunction evolves with perfect determinism; Schrödinger's equation has no randomness in it. Randomness enters only at measurement, when one outcome is realized from the possibilities the wavefunction allows. Laplace's demon, who could predict everything from present conditions, is defeated: even with perfect knowledge of $\Psi$, you can predict only probabilities. This is not ignorance. It is, as far as anyone can tell, how the world is.
:::

## The uncertainty principle

In 1927 Heisenberg derived a consequence that has been misquoted ever since.[^12] Certain pairs of quantities cannot both be sharply defined at the same time. For position $x$ and momentum $p$:

$$\Delta x \, \Delta p \geq \frac{\hbar}{2}$$

$\Delta x$ is the spread in position, $\Delta p$ the spread in momentum. Squeeze one toward zero and the other must grow. This is not about clumsy measurement disturbing the particle, though Heisenberg first explained it that way. It is a property of waves. A wave with a single sharp wavelength (definite momentum, by de Broglie) extends forever and has no location. A wave confined to a tiny region must be built from many wavelengths (Fourier's theorem from the toolkit) and so has no definite momentum. A particle simply does not possess a sharp position and a sharp momentum simultaneously, any more than a musical note can be both instantaneous and of definite pitch.

A related relation, $\Delta E\,\Delta t \gtrsim \hbar$, says that a state which exists only briefly does not have a sharply defined energy; it is behind the fleeting **virtual particles** of quantum field theory (chapter 11). Closely linked is **tunneling**: a particle passing through a barrier it lacks the energy to climb. Tunneling is not energy "borrowing," despite a popular picture. It is simply what the wave equation predicts: the wavefunction does not stop dead at a wall but leaks into it, fading exponentially, and if the wall is thin enough some of the wave emerges on the far side. Tunneling is why the Sun can fuse hydrogen at a temperature that classical physics says is far too cold, and why flash memory works.

## Spin, and why matter is solid

Electrons turned out to carry an intrinsic angular momentum, **spin**, that has no classical analogue; it comes in exactly two values, "up" and "down," and nothing in between. The first sign of it came in 1922, when Otto Stern and Walther Gerlach fired a beam of silver atoms through an uneven magnetic field and found it split cleanly into two beams rather than smearing out, as a spinning classical object pointing in random directions would.[^17] Wolfgang Pauli found in 1925 that no two electrons in an atom can share the same state, including spin.[^13] This **exclusion principle** is why electrons stack into shells rather than all collapsing into the lowest orbit, which is why the periodic table has the structure it does, which is all of chemistry. It is also why you do not fall through the floor: the electrons in your feet cannot occupy the same states as the electrons in the ground.

Particles come in two families. **Fermions** (electrons, protons, neutrons, quarks) obey the exclusion principle and make up matter. **Bosons** (photons, and the force-carrying particles) do not, and can pile into the same state without limit.

:::story Two things bosons can do
A **laser** is trillions of photons in one identical state. Einstein worked out the principle in 1917: an atom already excited can be tipped into emitting a photon by a passing photon of the right energy, and the new photon comes out as an exact copy of the one that triggered it, in step and in the same direction.[^18] Set up a mirror-lined tube of excited atoms and the copying runs away. It took until 1960 for Theodore Maiman to build one, from a ruby crystal and a flash lamp.[^18] Whole atoms can do the same trick if they are bosons and cold enough. In 1995 Eric Cornell and Carl Wieman cooled a few thousand rubidium atoms to 170 billionths of a degree above absolute zero and watched them collapse into a single quantum state, a **Bose–Einstein condensate**, predicted by Einstein seventy years earlier.[^19] The atoms lose their individual identities and behave as one giant matter wave you can photograph.
:::

## Dirac joins quantum mechanics to relativity

Schrödinger's equation ignores relativity. In 1928 Paul Dirac found an equation that respected it, and it did three things he had not asked for.[^14] It predicted electron spin, previously a bolt-on. It gave the electron's magnetism correctly. And it had solutions with negative energy, which Dirac eventually interpreted as a new kind of particle: identical to the electron but with opposite charge. Carl Anderson found this **positron** in cosmic rays in 1932.[^15] **Antimatter** exists because the equations demanded it. Every particle has an antiparticle, and when the two meet they annihilate into pure energy, $E = mc^2$ running in reverse.

:::try Put the idea to work
An electron can tunnel through a barrier it could not cross classically. Must it emerge with extra energy borrowed from somewhere?

:::answer Show the reasoning
No. For a stationary barrier, a state can extend into and through the barrier while retaining the same total energy. Tunneling changes the probability of finding the electron on the other side; it does not require a temporary exemption from energy conservation.
:::
:::

## Summary

- Planck's lumps of light energy ($E = hf$) cured the ultraviolet catastrophe; Einstein showed the lumps, photons, are real.
- Bohr's quantized orbits explained atomic spectra without explaining themselves; de Broglie's matter waves ($\lambda = h/p$) supplied the reason.
- Schrödinger's equation governs the wavefunction $\Psi$ deterministically; Born's rule says $|\Psi|^2$ gives the probability of each measurement outcome.
- Heisenberg's uncertainty ($\Delta x \Delta p \geq \hbar/2$) is a property of waves, not of clumsy instruments.
- Pauli's exclusion principle builds the periodic table and makes matter solid.
- Dirac's relativistic equation predicted spin and antimatter.

What all this *means*, and the arguments it started between Einstein and Bohr, is the next chapter.

[^1]: Planck, M. (1901). "Ueber das Gesetz der Energieverteilung im Normalspectrum." *Annalen der Physik*, 309(3), 553–563. [doi:10.1002/andp.19013090310](https://doi.org/10.1002/andp.19013090310). First presented 14 December 1900.
[^2]: Einstein, A. (1905). "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt." *Annalen der Physik*, 17, 132–148. [doi:10.1002/andp.19053220607](https://doi.org/10.1002/andp.19053220607)
[^3]: Millikan, R. A. (1916). "A Direct Photoelectric Determination of Planck's h." *Physical Review*, 7, 355. [doi:10.1103/PhysRev.7.355](https://doi.org/10.1103/PhysRev.7.355)
[^4]: Bohr, N. (1913). "On the Constitution of Atoms and Molecules." *Philosophical Magazine*, 26(151), 1–25. [doi:10.1080/14786441308634955](https://doi.org/10.1080/14786441308634955)
[^5]: de Broglie, L. (1925). "Recherches sur la théorie des quanta." *Annales de Physique*, 10(3), 22–128. Doctoral thesis, Paris, 1924. [doi:10.1051/anphys/192510030022](https://doi.org/10.1051/anphys/192510030022)
[^6]: Davisson, C., Germer, L. H. (1927). "Diffraction of Electrons by a Crystal of Nickel." *Physical Review*, 30, 705. [doi:10.1103/PhysRev.30.705](https://doi.org/10.1103/PhysRev.30.705)
[^7]: Fein, Y. Y. et al. (2019). "Quantum superposition of molecules beyond 25 kDa." *Nature Physics*, 15, 1242–1245. [doi:10.1038/s41567-019-0663-9](https://doi.org/10.1038/s41567-019-0663-9)
[^8]: Heisenberg, W. (1925). "Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen." *Zeitschrift für Physik*, 33, 879–893. [doi:10.1007/BF01328377](https://doi.org/10.1007/BF01328377)
[^9]: Schrödinger, E. (1926). "Quantisierung als Eigenwertproblem." *Annalen der Physik*, 384(4), 361–376. [doi:10.1002/andp.19263840404](https://doi.org/10.1002/andp.19263840404)
[^10]: Dirac, P. A. M. (1930). *The Principles of Quantum Mechanics*. Oxford: Clarendon Press.
[^11]: Born, M. (1926). "Zur Quantenmechanik der Stoßvorgänge." *Zeitschrift für Physik*, 37, 863–867. [doi:10.1007/BF01397477](https://doi.org/10.1007/BF01397477)
[^12]: Heisenberg, W. (1927). "Über den anschaulichen Inhalt der quantentheoretischen Kinematik und Mechanik." *Zeitschrift für Physik*, 43, 172–198. [doi:10.1007/BF01397280](https://doi.org/10.1007/BF01397280)
[^13]: Pauli, W. (1925). "Über den Zusammenhang des Abschlusses der Elektronengruppen im Atom mit der Komplexstruktur der Spektren." *Zeitschrift für Physik*, 31, 765–783. [doi:10.1007/BF02980631](https://doi.org/10.1007/BF02980631)
[^14]: Dirac, P. A. M. (1928). "The Quantum Theory of the Electron." *Proceedings of the Royal Society A*, 117, 610–624. [doi:10.1098/rspa.1928.0023](https://doi.org/10.1098/rspa.1928.0023)
[^15]: Anderson, C. D. (1932). "The Apparent Existence of Easily Deflectable Positives." *Science*, 76, 238–239. [doi:10.1126/science.76.1967.238](https://doi.org/10.1126/science.76.1967.238). Anderson, C. D. (1933). "The Positive Electron." *Physical Review*, 43, 491. [doi:10.1103/PhysRev.43.491](https://doi.org/10.1103/PhysRev.43.491)
[^16]: Compton, A. H. (1923). "A Quantum Theory of the Scattering of X-rays by Light Elements." *Physical Review*, 21, 483. [doi:10.1103/PhysRev.21.483](https://doi.org/10.1103/PhysRev.21.483)
[^17]: Gerlach, W., Stern, O. (1922). "Der experimentelle Nachweis der Richtungsquantelung im Magnetfeld." *Zeitschrift für Physik*, 9, 349–352. [doi:10.1007/BF01326983](https://doi.org/10.1007/BF01326983)
[^18]: Einstein, A. (1917). "Zur Quantentheorie der Strahlung." *Physikalische Zeitschrift*, 18, 121–128. Maiman, T. H. (1960). "Stimulated Optical Radiation in Ruby." *Nature*, 187, 493–494. [doi:10.1038/187493a0](https://doi.org/10.1038/187493a0)
[^19]: Anderson, M. H., Ensher, J. R., Matthews, M. R., Wieman, C. E., Cornell, E. A. (1995). "Observation of Bose-Einstein Condensation in a Dilute Atomic Vapor." *Science*, 269, 198–201. [doi:10.1126/science.269.5221.198](https://doi.org/10.1126/science.269.5221.198)
