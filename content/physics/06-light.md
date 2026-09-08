---
title: Light, Electricity, and Magnetism
subtitle: Three unrelated curiosities turn out to be one thing, and the equations that unite them contain a speed nobody asked for.
part: II · The Classical World
---

## How can one theory explain light, electricity, and magnetism?

So far the physics has been about matter: things with mass that push and pull and heat up. This chapter is about the other half of the world, the part that has no mass at all, and about the moment in 1865 when a Scottish mathematician wrote down four equations and light fell out of them.

## Three curiosities

For most of history, electricity, magnetism, and light were three separate topics with nothing to do with each other.

**Electricity** was the crackle when you rubbed amber with fur. The Greek word for amber, *elektron*, gave the phenomenon its name. In 1600 William Gilbert distinguished this from magnetism and coined "electric."[^1] Charles du Fay showed in 1733 that there are two kinds of electric **charge**, which attract when opposite and repel when alike; Benjamin Franklin in the 1740s reinterpreted them as a surplus or deficit of a single "electric fire" and gave them the names positive and negative, which stuck.[^16] In 1785 Charles-Augustin de Coulomb measured the force between charges and found it followed the same shape as Newton's gravity:

$$F = k \frac{q_1 q_2}{r^2}$$

with $q_1$ and $q_2$ the charges, $r$ the distance, and $k$ a constant.[^2] The inverse square again. But unlike gravity, electricity can repel, and it is fantastically strong: the electric force between two protons is about $10^{36}$ times their gravitational attraction. The only reason you do not notice is that ordinary matter has almost exactly equal amounts of positive and negative charge, which cancel.

Static sparks were a curiosity; steady electricity became a science in 1800, when Alessandro Volta stacked discs of zinc and copper separated by brine-soaked cloth and produced the first battery: a device that keeps charge flowing continuously.[^17] Two words from that era will recur. **Current** is the rate at which charge flows through a wire, measured in amperes. **Voltage** is the push that drives it, the energy given to each unit of charge, measured in volts. Georg Ohm found in 1827 that in most materials the two are proportional, current equals voltage divided by the material's **resistance**, a rule engineers still use every day.[^18]

**Magnetism** was the mystery of the lodestone, a natural magnet, and the compass needle. Magnets always have two poles, north and south, and no one has ever isolated one on its own.

**Light** was the deepest puzzle, and the one with the longest history. Willebrord Snell found the exact rule for how light bends when it enters water or glass (**refraction**) in 1621. Newton showed with a prism in 1666 that white sunlight is a mixture of all the colors, and argued in his *Opticks* (1704) that light is a stream of tiny particles; his prestige made this the standard view for a century.[^3] Christiaan Huygens argued in 1690 that light is a wave, spreading from every point on a wavefront like ripples on a pond.[^4] Between 1801 and 1803 Thomas Young settled it, or seemed to. He passed light through two narrow slits and saw on the far wall not two bright stripes but a pattern of many alternating bright and dark bands.[^5] That is **interference**, the signature of waves (recall the toolkit chapter: crest-on-crest brightens, crest-on-trough cancels). Particles cannot do that.

{{fig:double-slit|Young's experiment. Waves from the two slits arrive in step at some points on the screen (bright) and out of step at others (dark). The spacing of the bands gives the wavelength directly.}}

The decisive blow came in 1818. Augustin Fresnel's wave theory predicted something absurd: a small round obstacle should cast a shadow with a bright spot at its exact center, where waves bending around every edge arrive in step. Siméon Poisson raised this as a fatal objection. François Arago went and looked, and the spot was there.[^19] Fresnel also explained **polarization**, the fact that a light wave vibrates in a particular direction across its path, which is why polarized sunglasses cut glare from horizontal surfaces. Light was a wave. (Hold this thought; quantum mechanics will complicate it.)

The speed of light had been known roughly since 1676, when Ole Rømer noticed that eclipses of Jupiter's moon Io ran late when Earth was far from Jupiter, because the light had farther to travel.[^6] By the 1850s laboratory measurements had it near 300,000 kilometers per second.

## The connections appear

In 1820 the Danish physicist Hans Christian Ørsted was lecturing with a battery and a compass on the table and noticed the needle twitch when he switched the current on.[^7] An electric current makes a magnetic field. Within weeks André-Marie Ampère had worked out the mathematics, and by 1824 William Sturgeon had wrapped wire around an iron horseshoe and built the first electromagnet.

Michael Faraday, a bookbinder's apprentice with no mathematical training who became the finest experimentalist of the century, then asked the reverse question: can magnetism make electricity? In 1831 he found that a *changing* magnetic field induces a current in a nearby wire.[^8] A steady magnet does nothing; move it, and electricity flows. This is **electromagnetic induction**, and it is the principle behind every electrical generator on Earth. Spin a magnet near a coil and you have a power station.

Faraday also introduced a way of thinking that turned out to be more important than any single discovery. He imagined space around a magnet as filled with **lines of force**, curves along which a compass would align, and treated these lines as real physical things. This is the origin of the **field** concept: the idea that a charge or magnet modifies the space around it, and that other objects respond to the modified space rather than to the distant source directly. Newton's uncomfortable action at a distance was being replaced by something local.

In 1845 Faraday found that a magnetic field could rotate the polarization of light passing through glass, twisting the direction in which the light wave vibrates.[^9] Light and magnetism were connected too.

## Maxwell writes it all down

James Clerk Maxwell took Faraday's pictures and turned them into mathematics. Between 1861 and 1865 he assembled everything known about electricity and magnetism into a set of equations.[^10] In modern notation there are four, and they are worth looking at even if the symbols are unfamiliar, because the story is in their shape.

:::math Maxwell's equations, read as sentences
$$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$
*Electric field lines begin and end on charges.* ($\rho$, rho, is charge density. $\varepsilon_0$ and, below, $\mu_0$ are two measured constants that say how readily empty space carries electric and magnetic fields; both had been pinned down in tabletop experiments with charged plates and coils of wire.)

$$\nabla \cdot \mathbf{B} = 0$$
*Magnetic field lines never begin or end; there are no magnetic charges.* This is why you cannot isolate a north pole.

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$
*A changing magnetic field creates a circulating electric field.* This is Faraday's induction.

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$
*Electric currents ($\mathbf{J}$) create circulating magnetic fields, and so does a changing electric field.*

The symbol $\nabla \cdot$ ("divergence") measures how much a field spreads out from a point; $\nabla \times$ ("curl") measures how much it circulates around a point. $\partial/\partial t$ is a rate of change in time, the derivative from the toolkit chapter. $\mathbf{E}$ and $\mathbf{B}$ are the electric and magnetic fields.
:::

The last term of the last equation is Maxwell's own addition, and it changed the world. Everyone knew currents make magnetic fields. Maxwell realized, on grounds of mathematical consistency, that a *changing electric field* must also make a magnetic field, even in empty space with no current at all. He called it the **displacement current**.

Now look at what the last two equations do together. A changing magnetic field makes an electric field. A changing electric field makes a magnetic field. So a changing electric field makes a changing magnetic field, which makes a changing electric field, and so on forever. The two fields can sustain each other, rippling through empty space with nothing to carry them. Maxwell worked out how fast such a ripple would travel. The speed came out as a combination of the two constants in the equations:

$$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 3.0 \times 10^{8}\ \text{m/s}$$

That is the speed of light. Maxwell wrote in 1862, with visible restraint, that "we can scarcely avoid the inference that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena."[^10] Three years later he set out the whole theory in its final form.[^20] Light is an electromagnetic wave. The three curiosities were one.

:::key
Nobody set out to explain light. Maxwell was tidying up the theory of electricity and magnetism, and the speed of light appeared uninvited from the constants of electrical experiments. When a theory predicts something it was never designed for, physicists take it very seriously. This is the pattern to watch for throughout the rest of this guide.
:::

## Consequences

Maxwell's equations predicted electromagnetic waves of *any* wavelength, not just the visible ones. Heinrich Hertz generated and detected the first radio waves in 1887, confirming the prediction; he saw no practical use for them.[^11] Within twenty years Marconi was sending radio across the Atlantic. The full **electromagnetic spectrum** runs from radio waves kilometers long to gamma rays smaller than an atomic nucleus, and it is all the same phenomenon at different frequencies.

| Band | Wavelength | Where you meet it |
|---|---|---|
| Radio | 1 mm to 100 km | Broadcasting, Wi-Fi, radio astronomy |
| Microwave | 1 mm to 30 cm | Ovens, radar, the cosmic microwave background |
| Infrared | 700 nm to 1 mm | Heat, remote controls, JWST |
| Visible | 400 to 700 nm | Eyes |
| Ultraviolet | 10 to 400 nm | Sunburn, sterilization |
| X-ray | 0.01 to 10 nm | Medical imaging, crystallography |
| Gamma | under 0.01 nm | Nuclear decay, the most violent events in the universe |

The equations also unified technology. Electric motors (a current in a magnetic field feels a force), generators (Faraday's induction), transformers, radio, radar, fiber optics, and every antenna in every phone are direct applications. Richard Feynman once remarked that, from the long view of history, the American Civil War would pale into insignificance next to Maxwell's discovery of the laws of electrodynamics in the same decade.[^12]

## The problem hiding in the equations

There was one thing wrong, and it was fatal to the 19th-century worldview.

Every wave anyone had ever encountered was a disturbance *in something*: sound in air, ripples in water. So light had to be a wave in some medium filling all of space. Physicists called it the **luminiferous ether** and set out to detect it. The Earth moves around the Sun at 30 km/s, so we should be moving through the ether, and light should travel at slightly different speeds in different directions, like a swimmer going with or against a current.

In 1887 Albert Michelson and Edward Morley built an instrument sensitive enough to detect the effect, splitting a beam of light, sending the halves along perpendicular paths, and recombining them to look for interference shifts as the apparatus rotated.[^13] They found nothing. The speed of light was the same in every direction, to within their precision, as if the Earth were not moving through the ether at all. Repeated with better equipment, the result held. It remains one of the most important null results in the history of science.

There was a second, subtler problem. Maxwell's equations give the speed of light as a fixed number, $c$, with no mention of who is measuring. But Galileo had taught that velocities add: a ball thrown forward from a moving train travels faster relative to the ground. Light from the headlight of a moving train should too. Maxwell's equations said it does not. Either the equations were wrong, or Galileo's rule for adding velocities was. Hendrik Lorentz found a mathematical patch in the 1890s, a set of formulas that made the equations work in moving frames, but nobody understood what the formulas meant.[^14]

In 1905 a 26-year-old patent clerk decided the equations were right. The next chapter is about what that cost.

:::frontier
Maxwell's theory, upgraded with quantum mechanics, became **quantum electrodynamics** in the 1940s, the most precisely tested theory in all of science; chapter 11 tells that story.[^15]
:::

:::try Put the idea to work
A wave's frequency doubles while its speed in the same medium stays fixed. What happens to its wavelength? Would louder sound be the same kind of change?

:::answer Show the reasoning
From speed = frequency × wavelength, the wavelength halves. Loudness is associated mainly with wave amplitude, a different property. Keeping speed, frequency, and amplitude separate prevents the common mistake of treating a “bigger” wave as automatically faster or higher in frequency.
:::
:::

## Summary

- Light was shown to be a wave by Young's interference bands (1803) and Fresnel's predicted bright spot (1818). Volta's battery (1800) turned electricity from sparks into steady current.
- Electricity, magnetism, and light were separate subjects until 1820, when Ørsted showed currents make magnetic fields and Faraday showed changing magnetic fields make currents.
- Faraday's lines of force became the field concept: space itself carries the influence.
- Maxwell's four equations unified electricity and magnetism and predicted self-sustaining waves traveling at exactly the speed of light. Light is an electromagnetic wave; so are radio, X-rays, and everything between.
- The equations say light's speed is fixed regardless of the observer, contradicting Galileo's velocity addition, and the Michelson–Morley experiment found no trace of the ether light was supposed to travel through. Something had to give.

[^1]: Gilbert, W. (1600). *De Magnete*. London: Peter Short. English translation by P. F. Mottelay (1893). [archive.org](https://archive.org/details/williamgilbertof00gilb)
[^2]: Coulomb, C.-A. (1785). "Premier mémoire sur l'électricité et le magnétisme." *Histoire de l'Académie Royale des Sciences*, 569–577.
[^3]: Newton, I. (1704). *Opticks*. London: Smith and Walford. [archive.org](https://archive.org/details/opticksortreatis1704newt)
[^4]: Huygens, C. (1690). *Traité de la lumière*. Leiden: Pierre van der Aa. English translation by S. P. Thompson (1912). [gutenberg.org](https://www.gutenberg.org/ebooks/14725)
[^5]: Young, T. (1804). "The Bakerian Lecture: Experiments and Calculations Relative to Physical Optics." *Philosophical Transactions of the Royal Society*, 94, 1–16. [doi:10.1098/rstl.1804.0001](https://doi.org/10.1098/rstl.1804.0001)
[^6]: Rømer, O. (1676). "Démonstration touchant le mouvement de la lumière." *Journal des Sçavans*, 7 December 1676, 233–236.
[^7]: Ørsted, H. C. (1820). "Experimenta circa effectum conflictus electrici in acum magneticam." Copenhagen, 21 July 1820. English translation in *Annals of Philosophy*, 16, 273–276 (1820).
[^8]: Faraday, M. (1832). "Experimental Researches in Electricity." *Philosophical Transactions of the Royal Society*, 122, 125–162. [doi:10.1098/rstl.1832.0006](https://doi.org/10.1098/rstl.1832.0006)
[^9]: Faraday, M. (1846). "Experimental Researches in Electricity. Nineteenth Series." *Philosophical Transactions of the Royal Society*, 136, 1–20. [doi:10.1098/rstl.1846.0001](https://doi.org/10.1098/rstl.1846.0001)
[^10]: Maxwell, J. C. (1862). "On Physical Lines of Force. Part III." *Philosophical Magazine*, 23(151), 12–24. [doi:10.1080/14786446208643207](https://doi.org/10.1080/14786446208643207)
[^11]: Hertz, H. (1889). "Ueber Strahlen electrischer Kraft." *Annalen der Physik*, 272(4), 769–783. Text of a lecture delivered 13 December 1888. [doi:10.1002/andp.18892720402](https://doi.org/10.1002/andp.18892720402)
[^12]: Feynman, R. P., Leighton, R. B., Sands, M. (1964). *The Feynman Lectures on Physics*, Vol. II, Chapter 1, Section 1-6. Free online edition: [feynmanlectures.caltech.edu](https://www.feynmanlectures.caltech.edu/II_01.html)
[^13]: Michelson, A. A., Morley, E. W. (1887). "On the Relative Motion of the Earth and the Luminiferous Ether." *American Journal of Science*, 34(203), 333–345. [doi:10.2475/ajs.s3-34.203.333](https://doi.org/10.2475/ajs.s3-34.203.333)
[^14]: Lorentz, H. A. (1904). "Electromagnetic phenomena in a system moving with any velocity smaller than that of light." *Proceedings of the Royal Netherlands Academy of Arts and Sciences*, 6, 809–831.
[^15]: Fan, X., Myers, T. G., Sukra, B. A. D., Gabrielse, G. (2023). "Measurement of the Electron Magnetic Moment." *Physical Review Letters*, 130, 071801. [doi:10.1103/PhysRevLett.130.071801](https://doi.org/10.1103/PhysRevLett.130.071801)
[^16]: Du Fay, C. F. (1733). "A Letter concerning Electricity." *Philosophical Transactions of the Royal Society*, 38, 258–266. [doi:10.1098/rstl.1733.0040](https://doi.org/10.1098/rstl.1733.0040). Franklin, B. (1751). *Experiments and Observations on Electricity*. London: E. Cave.
[^17]: Volta, A. (1800). "On the Electricity excited by the mere Contact of conducting Substances of different kinds." *Philosophical Transactions of the Royal Society*, 90, 403–431. [doi:10.1098/rstl.1800.0018](https://doi.org/10.1098/rstl.1800.0018)
[^18]: Ohm, G. S. (1827). *Die galvanische Kette, mathematisch bearbeitet*. Berlin: T. H. Riemann. English translation: *The Galvanic Circuit Investigated Mathematically* (1891), Van Nostrand.
[^19]: Fresnel, A. (1819). "Mémoire sur la diffraction de la lumière." *Mémoires de l'Académie des Sciences*, 5, 339–475. Arago's report on the bright spot is appended to the memoir.
[^20]: Maxwell, J. C. (1865). "A Dynamical Theory of the Electromagnetic Field." *Philosophical Transactions of the Royal Society*, 155, 459–512. [doi:10.1098/rstl.1865.0008](https://doi.org/10.1098/rstl.1865.0008)
