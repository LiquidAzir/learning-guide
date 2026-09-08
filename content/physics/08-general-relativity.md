---
title: General Relativity
subtitle: Gravity is not a force. It is the shape of spacetime, and the shape is made by what's in it.
part: III · The Two Revolutions
---

## What does it mean for gravity to be geometry?

Special relativity fused space and time and set $c$ as a universal speed limit. But Newton's gravity acts instantly across any distance, which the speed limit forbids. Einstein needed a new theory of gravity that respected relativity. It took him from 1907 to 1915. It began with an insight he later called the happiest thought of his life, and it ended with what is widely regarded as the most beautiful physical theory ever constructed.

## The happiest thought

In 1907, still at the patent office, Einstein noticed something Galileo had known and nobody had taken seriously enough. All objects fall at the same rate. A hammer and a feather, in vacuum, hit the ground together. In Newton's theory this is a coincidence: the mass that resists acceleration (in $F = ma$) happens to be exactly equal to the mass that gravity pulls on (in $F = GMm/r^2$), so the two cancel and everything accelerates identically. Newton's theory has no reason why these two masses should be equal. They just are, to at least one part in $10^{15}$, as modern experiments confirm.[^1]

Einstein's realization: a person falling freely does not feel gravity at all. Inside a falling elevator, or an orbiting space station, objects float. Let go of a ball and it hangs beside you. Locally, free fall is indistinguishable from floating in deep space with no gravity anywhere. And the reverse: standing in a rocket accelerating at 9.8 m/s² in empty space, you would feel your weight on the floor exactly as on Earth, and a dropped ball would "fall" to the floor at 9.8 m/s². No experiment done inside a small enough sealed room can tell gravity from acceleration.

This is the **equivalence principle**, and Einstein built the whole theory on it.[^2] Its immediate consequence is startling. Shine a light beam across the accelerating rocket: because the rocket speeds up while the light crosses, the beam hits the far wall slightly lower than it was aimed. It curves. If acceleration and gravity are indistinguishable, then gravity must bend light too. But light has no mass, so Newton's gravity has nothing to pull on. Something other than force is at work.

## Gravity as geometry

The answer Einstein reached, with heavy mathematical help from his friend Marcel Grossmann, is that gravity is not a force at all. Mass and energy **curve spacetime**, and objects move along the straightest possible paths through the curved geometry. Those straightest paths, called **geodesics**, look curved to us. The Earth is not being pulled toward the Sun. It is coasting in a straight line through a spacetime the Sun has bent.

The standard picture is a bowling ball on a trampoline, with marbles rolling around it. The picture is useful but misleading in one way: it shows curved *space*. Most of the gravity you feel on Earth comes from curvature in *time*. Clocks tick slightly slower closer to the Earth's center. An object left to itself follows the path along which its own clock ticks off the most time (its **proper time**), and because clocks run faster higher up, that path bends it downward. Falling is what "going straight" looks like when time runs at different rates at different heights.

:::key
Newton: mass tells gravity how to pull, and gravity tells mass how to move. Einstein, in the physicist John Wheeler's summary: spacetime tells matter how to move, and matter tells spacetime how to curve.[^3] The middleman, force, is gone. This also fixes Newton's action at a distance: curvature spreads through spacetime at the speed of light, no faster.
:::

## The field equations

Einstein presented the completed theory to the Prussian Academy in November 1915.[^4] Its heart is a single equation relating curvature to matter:

$$G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}\, T_{\mu\nu}$$

:::math Reading the Einstein field equations
Each symbol with subscripts $\mu\nu$ is a **tensor**: a 4×4 table of numbers at every point in spacetime (the indices run over time and the three space directions). The equation is really ten equations at once, one for each independent entry in the table.

The **left side is geometry.** $G_{\mu\nu}$, the Einstein tensor, describes how spacetime is curved at each point: how the notion of distance and time changes from place to place. $g_{\mu\nu}$, the **metric**, is the object that defines distances in the first place; it is the generalization of Minkowski's interval from the last chapter. $\Lambda$ (Lambda) is the **cosmological constant**, a term Einstein added in 1917 and later regretted; it turned out to be essential (chapter 13).

The **right side is stuff.** $T_{\mu\nu}$, the stress-energy tensor, describes how much energy, momentum, pressure, and stress there is at each point. Mass counts, because $E = mc^2$, but so does light, so does pressure, so does motion.

The constant $8\pi G/c^4$ is the exchange rate, and it is tiny: about $2 \times 10^{-43}$ in SI units. Spacetime is extremely stiff. It takes a planet's worth of energy to bend it noticeably. This is why you can walk around without noticing that the geometry of the universe is warped.

Read as a sentence: *the curvature of spacetime here equals a fixed constant times the energy and momentum here.* Solving the equation for a given arrangement of matter tells you the geometry; the geometry tells you how everything moves.
:::

Newton's law reappears as the approximation for weak gravity and slow speeds, exactly as the correspondence principle requires. The differences show up only where gravity is strong or precision is high.

## Three tests, immediately

Einstein proposed three checks in his 1916 review paper.[^5]

**Mercury's orbit.** Recall from chapter 3 the 43 arcseconds per century of unexplained drift in Mercury's perihelion. Einstein computed the extra drift his theory predicted for the innermost planet, where the Sun's curvature is strongest. He got 43 arcseconds. He later said the result gave him heart palpitations.[^18]

**Bending of starlight.** The theory predicts that light grazing the Sun's edge is deflected by 1.75 arcseconds, twice what a naive Newtonian calculation gives. This can be checked only during a total solar eclipse, when stars near the Sun become visible. Frank Dyson, the Astronomer Royal, organized two expeditions for the eclipse of 29 May 1919: Arthur Eddington to the island of Príncipe off West Africa, and Andrew Crommelin and Charles Davidson to Sobral in Brazil. Both reported deflections matching Einstein's value.[^6] The announcement in November 1919 made Einstein a global celebrity overnight; the *Times* of London headline read "Revolution in Science."[^19]

**Gravitational redshift.** Clocks deep in a gravitational well run slow, so light climbing out of one should be stretched to longer, redder wavelengths. This was the hardest to measure and was not cleanly confirmed until 1959, when Robert Pound and Glen Rebka detected the frequency shift of gamma rays traveling up a 22-meter tower at Harvard.[^7]

The tests have never stopped. In 1964 Irwin Shapiro predicted, and then measured with radar bounced off Venus and Mercury, that signals passing near the Sun arrive late because they travel through curved spacetime.[^21] In 2023 the ALPHA experiment at CERN showed that atoms of antimatter fall downward under gravity just as ordinary matter does, as the equivalence principle requires.[^24] No experiment has yet found a deviation.

## Predictions the theory made that nobody wanted

General relativity kept predicting things its own author found hard to believe.

**Black holes.** Within weeks of the field equations, Karl Schwarzschild, serving on the Russian front, found the exact solution for the spacetime around a single spherical mass.[^8] It contained a radius, now the **Schwarzschild radius** $r_s = 2GM/c^2$, at which something strange happens: time slows to a stop as seen from outside, and nothing inside, not even light, can escape. The surface at that radius is the **event horizon**, the boundary of no return. For the Sun this radius is about 3 km; for the Earth, 9 mm. For decades this was regarded as a mathematical artifact that real matter would never reach. In 1939 Robert Oppenheimer and Hartland Snyder showed a sufficiently massive collapsing star does reach it,[^9] and in 1965 Roger Penrose proved that once a horizon forms, a singularity inside is unavoidable, work that earned him a share of the 2020 Nobel Prize.[^20] The name "black hole" appeared in print in 1964 and was picked up and popularized by John Wheeler from 1967.[^23] The first image of one, a glowing ring of hot gas around the dark shadow of the 6.5-billion-solar-mass object at the center of galaxy M87, was published in 2019.[^10]

**An expanding universe.** Apply the field equations to the universe as a whole and they refuse to sit still: the cosmos must either expand or contract. Einstein added the $\Lambda$ term specifically to force a static solution, and abandoned it when Edwin Hubble showed in 1929 that the universe is expanding (chapter 13). Alexander Friedmann in 1922 and Georges Lemaître in 1927 had already found the expanding solutions and been largely ignored.[^11]

**Gravitational waves.** Shake a mass and the curvature around it ripples outward at the speed of light, stretching and squeezing space as it passes. Einstein predicted these in 1916, doubted them in 1936, and never expected them to be detectable; the effect of a typical astronomical source on a kilometer-long detector is a change in length smaller than a proton's width.[^12] The first evidence was indirect. In 1974 Russell Hulse and Joseph Taylor found a pair of neutron stars orbiting each other, one of them a **pulsar** (a spinning neutron star whose radio beam sweeps past Earth like a lighthouse, giving a clock of extraordinary regularity). The orbit was shrinking at exactly the rate general relativity predicts if the pair is radiating energy as gravitational waves.[^22] That won the 1993 Nobel Prize. Direct detection took another generation. On 14 September 2015 the two LIGO detectors in Louisiana and Washington recorded exactly such a ripple, from two black holes of about 36 and 29 solar masses spiraling together 1.3 billion light-years away.[^13] The waveform matched the theory's prediction in detail. Three solar masses of energy had been converted into gravitational waves in a fraction of a second, briefly outshining every star in the observable universe combined. The 2017 Nobel Prize went to Rainer Weiss, Barry Barish, and Kip Thorne.

## Relativity in your pocket

GPS satellites are the daily-life proof. Their clocks run *slow* by 7 microseconds per day because they move fast (special relativity) and *fast* by 45 microseconds per day because they are higher up in Earth's gravitational well, where time runs quicker (general relativity). The net 38 microseconds per day would, if uncorrected, produce position errors of about 10 kilometers per day.[^14] The system's engineers build both corrections in. Every time your phone finds itself on a map, both of Einstein's theories are being confirmed.

## What general relativity does not do

The theory has passed every test for 110 years, from millimeter-precision lunar ranging to pulsar timing to the black hole images. It has two known limits.

First, inside a black hole and at the Big Bang the equations predict a **singularity**: a point of infinite curvature. Infinities in physics mean the theory has left its domain of validity. Something else, presumably quantum, takes over there, and we do not know what (chapter 14).

Second, general relativity is a classical theory. It describes a smooth, definite spacetime. Quantum mechanics, the subject of the next chapter, says nothing at small scales is smooth or definite. The two theories are each triumphant in their own territory and have never been made compatible. That incompatibility is the central unsolved problem of fundamental physics.

:::frontier
Gravitational-wave astronomy has become routine: the LIGO-Virgo-KAGRA network has catalogued hundreds of mergers, including in 2025 the heaviest black hole merger yet seen, with a combined mass above 225 Suns.[^15] In 2023 teams timing dozens of pulsars for fifteen years detected a background hum of very-long-wavelength gravitational waves, probably from pairs of supermassive black holes across the universe.[^16] The Event Horizon Telescope imaged the black hole at the center of our own galaxy in 2022.[^17] Meanwhile the search continues for any deviation from Einstein's predictions that might point toward quantum gravity. None has been found. See the Latest Research section for the running list.
:::

:::try Put the idea to work
An astronaut in orbit floats even though Earth's gravity remains strong there. Explain why floating does not show that gravity has disappeared.

:::answer Show the reasoning
The astronaut and spacecraft are falling together. Their sideways motion carries them around Earth as they fall, and there is no floor pushing steadily against the astronaut. Floating reflects the absence of that support force, not the absence of gravity.
:::
:::

## Summary

- The equivalence principle: gravity and acceleration are locally indistinguishable, so gravity must bend light and slow clocks.
- Gravity is curvature. Mass-energy curves spacetime; objects follow the straightest paths through it. Most everyday gravity is curvature of time.
- The Einstein field equations relate geometry (left) to energy and momentum (right), with an exchange rate so small that spacetime is nearly rigid.
- Confirmed by Mercury's orbit, starlight bending (1919), gravitational redshift (1959), radar delays, GPS, the shrinking orbit of a binary pulsar (1974), and directly detected gravitational waves (2015).
- Predicted black holes and an expanding universe, both reluctantly, both confirmed.
- Breaks down at singularities and has never been reconciled with quantum mechanics.

[^1]: Touboul, P. et al. (MICROSCOPE Collaboration) (2022). "MICROSCOPE Mission: Final Results of the Test of the Equivalence Principle." *Physical Review Letters*, 129, 121102. [doi:10.1103/PhysRevLett.129.121102](https://doi.org/10.1103/PhysRevLett.129.121102)
[^2]: Einstein, A. (1907). "Über das Relativitätsprinzip und die aus demselben gezogenen Folgerungen." *Jahrbuch der Radioaktivität und Elektronik*, 4, 411–462. Section V introduces the equivalence of gravitation and acceleration. Reprinted in *The Collected Papers of Albert Einstein*, Vol. 2, Doc. 47.
[^3]: Wheeler, J. A., with Ford, K. (1998). *Geons, Black Holes, and Quantum Foam*. W. W. Norton, p. 235: "Spacetime tells matter how to move; matter tells spacetime how to curve."
[^4]: Einstein, A. (1915). "Die Feldgleichungen der Gravitation." *Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften*, 844–847. Reprinted in *The Collected Papers of Albert Einstein*, Vol. 6, Doc. 25.
[^5]: Einstein, A. (1916). "Die Grundlage der allgemeinen Relativitätstheorie." *Annalen der Physik*, 49, 769–822. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702)
[^6]: Dyson, F. W., Eddington, A. S., Davidson, C. (1920). "A Determination of the Deflection of Light by the Sun's Gravitational Field, from Observations made at the Total Eclipse of May 29, 1919." *Philosophical Transactions of the Royal Society A*, 220, 291–333. [doi:10.1098/rsta.1920.0009](https://doi.org/10.1098/rsta.1920.0009)
[^7]: Pound, R. V., Rebka, G. A. (1960). "Apparent Weight of Photons." *Physical Review Letters*, 4, 337. [doi:10.1103/PhysRevLett.4.337](https://doi.org/10.1103/PhysRevLett.4.337)
[^8]: Schwarzschild, K. (1916). "Über das Gravitationsfeld eines Massenpunktes nach der Einsteinschen Theorie." *Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften*, 189–196. English translation: [arXiv:physics/9905030](https://arxiv.org/abs/physics/9905030)
[^9]: Oppenheimer, J. R., Snyder, H. (1939). "On Continued Gravitational Contraction." *Physical Review*, 56, 455. [doi:10.1103/PhysRev.56.455](https://doi.org/10.1103/PhysRev.56.455)
[^10]: Event Horizon Telescope Collaboration (2019). "First M87 Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole." *The Astrophysical Journal Letters*, 875, L1. [doi:10.3847/2041-8213/ab0ec7](https://doi.org/10.3847/2041-8213/ab0ec7)
[^11]: Friedmann, A. (1922). "Über die Krümmung des Raumes." *Zeitschrift für Physik*, 10, 377–386. [doi:10.1007/BF01332580](https://doi.org/10.1007/BF01332580). Lemaître, G. (1927). "Un Univers homogène de masse constante et de rayon croissant." *Annales de la Société Scientifique de Bruxelles*, A47, 49–59.
[^12]: Einstein, A. (1916). "Näherungsweise Integration der Feldgleichungen der Gravitation." *Sitzungsberichte der Königlich Preußischen Akademie der Wissenschaften*, 688–696. Reprinted in *The Collected Papers of Albert Einstein*, Vol. 6, Doc. 32.
[^13]: Abbott, B. P. et al. (LIGO Scientific Collaboration and Virgo Collaboration) (2016). "Observation of Gravitational Waves from a Binary Black Hole Merger." *Physical Review Letters*, 116, 061102. [doi:10.1103/PhysRevLett.116.061102](https://doi.org/10.1103/PhysRevLett.116.061102)
[^14]: Ashby, N. (2003). "Relativity in the Global Positioning System." *Living Reviews in Relativity*, 6, 1. [doi:10.12942/lrr-2003-1](https://doi.org/10.12942/lrr-2003-1)
[^15]: LIGO Scientific Collaboration, Virgo Collaboration, KAGRA Collaboration (2025). "GW231123: a Binary Black Hole Merger with Total Mass 190–265 Solar Masses." *The Astrophysical Journal Letters*, 993, L25. [arXiv:2507.08219](https://arxiv.org/abs/2507.08219)
[^16]: Agazie, G. et al. (NANOGrav Collaboration) (2023). "The NANOGrav 15 yr Data Set: Evidence for a Gravitational-wave Background." *The Astrophysical Journal Letters*, 951, L8. [doi:10.3847/2041-8213/acdac6](https://doi.org/10.3847/2041-8213/acdac6)
[^17]: Event Horizon Telescope Collaboration (2022). "First Sagittarius A* Event Horizon Telescope Results. I. The Shadow of the Supermassive Black Hole in the Center of the Milky Way." *The Astrophysical Journal Letters*, 930, L12. [doi:10.3847/2041-8213/ac6674](https://doi.org/10.3847/2041-8213/ac6674)
[^18]: Pais, A. (1982). *Subtle is the Lord: The Science and the Life of Albert Einstein*. Oxford University Press, p. 253, quoting Einstein's letter to Paul Ehrenfest of January 1916.
[^19]: "Revolution in Science. New Theory of the Universe. Newtonian Ideas Overthrown." *The Times* (London), 7 November 1919, p. 12.
[^20]: Penrose, R. (1965). "Gravitational Collapse and Space-Time Singularities." *Physical Review Letters*, 14, 57. [doi:10.1103/PhysRevLett.14.57](https://doi.org/10.1103/PhysRevLett.14.57)
[^21]: Shapiro, I. I. (1964). "Fourth Test of General Relativity." *Physical Review Letters*, 13, 789. [doi:10.1103/PhysRevLett.13.789](https://doi.org/10.1103/PhysRevLett.13.789)
[^22]: Hulse, R. A., Taylor, J. H. (1975). "Discovery of a pulsar in a binary system." *The Astrophysical Journal*, 195, L51–L53. [doi:10.1086/181708](https://doi.org/10.1086/181708). Taylor, J. H., Weisberg, J. M. (1982). "A new test of general relativity: Gravitational radiation and the binary pulsar PSR 1913+16." *The Astrophysical Journal*, 253, 908–920. [doi:10.1086/159690](https://doi.org/10.1086/159690)
[^23]: Ewing, A. (1964). "'Black Holes' in Space." *Science News Letter*, 85(3), 39, 18 January 1964. [doi:10.2307/3947428](https://doi.org/10.2307/3947428)
[^24]: Anderson, E. K. et al. (ALPHA Collaboration) (2023). "Observation of the effect of gravity on the motion of antimatter." *Nature*, 621, 716–722. [doi:10.1038/s41586-023-06527-1](https://doi.org/10.1038/s41586-023-06527-1)
