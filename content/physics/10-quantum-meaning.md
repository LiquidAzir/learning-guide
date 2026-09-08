---
title: What Quantum Mechanics Means
subtitle: Einstein versus Bohr, Schrödinger's cat, Bell's theorem, and the experiments that ended the argument about whether reality is real.
part: III · The Two Revolutions
---

## What does a quantum prediction actually tell us?

Quantum mechanics works. Its predictions have been checked to twelve decimal places, and it underlies every transistor, laser, and MRI machine. The previous chapter gave you the machinery: wavefunctions, the Schrödinger equation, Born's probability rule. This chapter is about the question the machinery raises and does not answer: what is actually going on?

## The measurement problem

Here is the difficulty in one paragraph. The Schrödinger equation says a system evolves smoothly and deterministically, and can exist in a **superposition**: a combination of states, such as "electron here" plus "electron there," with definite mathematical weights. But when you measure, you never see a superposition. You see one outcome. The theory says the wavefunction "collapses" to that outcome, with probability given by Born's rule, but it does not say *when*, *how*, or *what counts as a measurement*. A detector is made of atoms obeying the Schrödinger equation too. Why doesn't the detector just join the superposition?

This is the **measurement problem**, and it has never been solved to everyone's satisfaction. It is important to be clear about what is and is not in dispute. Nobody disputes the predictions. Everybody agrees on what you will see in any experiment. The dispute is over what story to tell about the world between measurements, and whether that story is even physics.

## Copenhagen: don't ask

Niels Bohr and Werner Heisenberg developed what became the default position in the late 1920s, later called the **Copenhagen interpretation** after Bohr's institute.[^1] Roughly: the wavefunction is not a description of the electron but a summary of what we can predict about it. Asking where the electron "really is" between measurements is meaningless, like asking what is north of the North Pole. Physics is about the results of measurements, and the classical world of instruments and observers is simply assumed as a starting point.

This is pragmatic and it works. Generations of physicists were trained on the slogan "shut up and calculate."[^22] But it draws an arbitrary line between the quantum system and the classical measuring device without saying where that line is, and Einstein hated it.

## Einstein's objection and Schrödinger's cat

Einstein believed there had to be a deeper reality that the wavefunction only partially described, and that the probabilities of quantum mechanics reflected our ignorance of it, the way the probabilities in a coin toss reflect ignorance of the exact throw. This is the idea of **hidden variables**: properties the particle secretly has that determine the outcomes.

In 1935 Einstein, Boris Podolsky, and Nathan Rosen published a thought experiment designed to prove quantum mechanics incomplete.[^2] Prepare two particles together so their properties are correlated, then separate them by a great distance. Quantum mechanics says neither has a definite value of, say, spin until measured, but it also says that measuring one instantly determines the other's result. Einstein saw two possibilities. Either the far particle had its value all along (hidden variables, and quantum mechanics is incomplete), or measuring here instantly affected there, which he later called "spooky action at a distance" and considered absurd because relativity forbids faster-than-light influence.[^23] He chose the first.

Schrödinger, corresponding with Einstein that year, coined a word for the correlation, **entanglement** (*Verschränkung*), and produced the most famous thought experiment in physics.[^3] Put a cat in a box with a radioactive atom that has a 50% chance of decaying in an hour, wired so that decay releases poison. Quantum mechanics, applied literally, says that after an hour the atom is in a superposition of decayed and not-decayed, and therefore the cat is in a superposition of dead and alive, until someone opens the box. Schrödinger meant this as a *reductio ad absurdum*: obviously the cat is one or the other, so something is missing from the account. The cat was never meant to be a mystery to celebrate. It was an accusation.

## Bell turns philosophy into an experiment

For thirty years the argument stayed philosophical, because it seemed that hidden-variable theories and quantum mechanics made identical predictions. Then in 1964 John Stewart Bell, a physicist at CERN working on the problem in his spare time, proved they do not.[^4]

Bell considered any theory in which particles carry pre-set hidden values *and* no influence travels faster than light (**local hidden variables**, the position Einstein wanted). He showed that for certain measurements on entangled pairs, all such theories must obey a numerical limit on how strongly the results can be correlated. Quantum mechanics predicts correlations that *exceed* that limit. This is **Bell's inequality**, and it converts a metaphysical question into a number you can measure.

:::math The idea behind Bell's inequality
Two entangled particles fly apart to two detectors. Each detector can be set to one of a few angles, and each measurement gives a result of +1 or −1. If each particle secretly carried a list of answers for every possible angle, fixed at the source, then simple counting puts a ceiling on a particular combination of correlations:
$$|E(a,b) - E(a,b')| + |E(a',b) + E(a',b')| \leq 2$$
where $E(a,b)$ is the average product of results when the detectors are set to angles $a$ and $b$. This is the CHSH form of Bell's inequality.[^5] Quantum mechanics predicts that for the right choice of angles the left side reaches $2\sqrt{2} \approx 2.83$. No local hidden-variable theory can get above 2. The two are experimentally distinguishable: run the experiment and see whether you get 2 or 2.83.
:::

## The experiments

John Clauser performed the first test in 1972 and found the quantum value.[^6] Alain Aspect's experiments in 1982 closed a loophole by switching the detector settings while the photons were in flight, too fast for any light-speed signal between the detectors to coordinate the results.[^7] Anton Zeilinger's group extended entanglement to multiple particles and across 144 kilometers of open air between two of the Canary Islands.[^24] In 2015 three groups independently performed **loophole-free** tests that closed every remaining escape hatch at once.[^8] Every experiment, without exception, gives the quantum answer. Clauser, Aspect, and Zeilinger shared the 2022 Nobel Prize.[^9]

:::key
Bell's theorem plus the experiments proves that Einstein's preferred picture is wrong. Nature is not both local (no faster-than-light influence) and realistic (properties exist before measurement). At least one has to go. Most physicists give up "realism": particles genuinely do not have definite values before they are measured. A minority give up locality. Nobody gets to keep both. This is not an interpretation. It is a theorem confirmed by experiment.
:::

Two important clarifications. First, entanglement cannot send messages. The results at each detector look completely random on their own; the correlation only appears when you compare notes afterward, by ordinary means. Relativity's ban on faster-than-light *communication* survives intact. Second, entanglement is not rare or exotic. It is what happens whenever two quantum systems interact. The world is thoroughly entangled; what is hard is keeping entanglement clean enough to see.

## The interpretations

Given that the measurement problem is real and hidden variables of Einstein's kind are ruled out, what are the options? Here are the four with serious support. They all make the same predictions for any experiment yet devised, which is why the debate persists.

**Copenhagen and its descendants.** Measurement is a primitive notion; the wavefunction is a tool for prediction. Modern variants like **QBism** treat the wavefunction as an agent's personal degrees of belief, and the collapse as the agent updating them.[^10] Advantage: minimal. Disadvantage: it declines to say what happens when nobody is looking, and many find that a refusal rather than an answer.

**Many-worlds (Everett).** Hugh Everett proposed in 1957 that collapse never happens.[^11] The Schrödinger equation is the whole story. When you measure, you become entangled with the system, and the wavefunction now contains a version of you seeing each outcome. All outcomes occur, in branches that no longer interact. The cat is dead in one branch and alive in another, and so are you. Advantage: no extra rules, just the equation. Disadvantage: the branching is unobservable, and it is unclear how to recover Born's probabilities from a theory in which everything happens.

**Pilot-wave (de Broglie–Bohm).** Particles always have definite positions, guided by the wavefunction, which is a real physical field.[^12] Measurement just reveals where the particle was. This is a hidden-variable theory, and it survives Bell because it is explicitly nonlocal: the guiding wave connects distant particles instantly. Advantage: a clear picture of reality. Disadvantage: the nonlocality sits awkwardly with relativity, and the theory has resisted extension to quantum field theory.

**Objective collapse (GRW, Penrose).** Collapse is a real physical process, not yet observed, that happens spontaneously and rarely for single particles but almost instantly for large objects with many particles.[^13] Advantage: it makes new predictions and can in principle be tested. Disadvantage: it modifies quantum mechanics, and experiments have so far found no trace of the predicted deviations, steadily narrowing the room left for these theories.[^14]

## Decoherence: the part everyone agrees on

Whatever interpretation you prefer, a physical process discovered in the 1970s and 80s explains most of what "collapse" looks like in practice.[^15] A quantum system interacting with its environment, even a single stray photon or air molecule, becomes entangled with it. The interference between the system's superposed states leaks into the environment, where it is hopelessly scrambled among trillions of particles. The system then *behaves* as though it had collapsed to one classical alternative, although the full wavefunction of system-plus-environment is still a superposition.

This is **decoherence**, and it is why you never see a cat in superposition: a cat interacts with its environment about $10^{20}$ times per second. It also explains why quantum computers are so hard to build; they must be isolated from decoherence long enough to compute. Decoherence does not by itself solve the measurement problem, because it does not explain why one outcome is experienced rather than another. But it dissolves much of the apparent paradox, and it is measured routinely in the lab.

## Quantum information: the new view

Since the 1990s a different attitude has emerged. Instead of asking what the wavefunction "really is," physicists began asking what you can *do* with quantum states that you cannot do classically, and the answers reshaped the subject.

- **Quantum computing.** A **qubit** is any two-level quantum system. Describing the joint state of $n$ qubits takes $2^n$ numbers, and clever algorithms can exploit that richness, though you can never simply read all $2^n$ out. Peter Shor showed in 1994 that a quantum computer could factor large numbers exponentially faster than any known classical method, which would break most current encryption.[^16] Building such machines is now a global industry; in 2024 Google demonstrated decisively that error correction can make logical qubits *more* reliable as they grow, the key hurdle to scaling up.[^17]
- **Quantum cryptography.** Because measuring a quantum state disturbs it, an eavesdropper on a quantum channel can always be detected. Commercial systems exist.
- **Quantum teleportation.** Not of matter, but of quantum states: an unknown state can be transferred to a distant particle using entanglement plus a classical message, and was first demonstrated in 1997.[^18]

The information view also produced a striking reformulation: several groups have shown that quantum mechanics can be derived from a handful of principles about information, such as "information is finite" and "any two states can be connected by a continuous transformation," rather than from postulates about waves.[^19] Whether this means quantum mechanics is "really" about information remains, like everything in this chapter, debated.

:::frontier
The 2025 Nobel Prize in Physics went to John Clarke, Michel Devoret, and John Martinis for 1980s experiments showing that a superconducting electrical circuit (one with zero electrical resistance; chapter 12), a macroscopic object you can hold, exhibits quantum tunneling and discrete energy levels.[^20] There is no known size limit to quantum behavior; the only limit is how well you isolate the system. Meanwhile, tests of objective-collapse models and of "gravitationally induced" collapse continue, and experiments to entangle ever-larger objects, including mechanical oscillators visible to the naked eye, keep pushing the quantum-classical boundary outward.[^21] So far it has always moved.
:::

:::try Put the idea to work
Two interpretations give exactly the same probabilities for every experiment you can perform. Can a larger sample of those experiments choose between them?

:::answer Show the reasoning
No: identical predictions give the data no basis for preferring one over the other. Larger samples sharpen estimates of those shared predictions. A discriminating test would need a situation in which the interpretations make different observable predictions, if such a situation exists.
:::
:::

## Summary

- The measurement problem: the Schrödinger equation never collapses a wavefunction, but measurements always yield single outcomes, and the theory does not say where or why.
- Einstein wanted hidden variables; Schrödinger's cat was an argument that the standard story cannot be the whole truth.
- Bell's theorem (1964) made the question testable. Experiments from 1972 to 2015 confirm quantum mechanics: no theory that is both local and realistic can describe nature.
- Live interpretations: Copenhagen and QBism, many-worlds, pilot-wave, and objective collapse. All agree on every experiment so far.
- Decoherence explains why superpositions of large objects are never seen, without fully resolving what happens at measurement.
- Quantum information reframed the field: entanglement is a resource, and quantum computers are being built on it.

[^1]: Heisenberg, W. (1958). *Physics and Philosophy: The Revolution in Modern Science*. New York: Harper. Chapter 3 gives Heisenberg's account of the Copenhagen view.
[^2]: Einstein, A., Podolsky, B., Rosen, N. (1935). "Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?" *Physical Review*, 47, 777. [doi:10.1103/PhysRev.47.777](https://doi.org/10.1103/PhysRev.47.777)
[^3]: Schrödinger, E. (1935). "Die gegenwärtige Situation in der Quantenmechanik." *Naturwissenschaften*, 23, 807–812, 823–828, 844–849. English translation: Trimmer, J. D. (1980), *Proceedings of the American Philosophical Society*, 124(5), 323–338. [doi:10.1007/BF01491891](https://doi.org/10.1007/BF01491891)
[^4]: Bell, J. S. (1964). "On the Einstein Podolsky Rosen Paradox." *Physics Physique Fizika*, 1, 195–200. [doi:10.1103/PhysicsPhysiqueFizika.1.195](https://doi.org/10.1103/PhysicsPhysiqueFizika.1.195)
[^5]: Clauser, J. F., Horne, M. A., Shimony, A., Holt, R. A. (1969). "Proposed Experiment to Test Local Hidden-Variable Theories." *Physical Review Letters*, 23, 880. [doi:10.1103/PhysRevLett.23.880](https://doi.org/10.1103/PhysRevLett.23.880)
[^6]: Freedman, S. J., Clauser, J. F. (1972). "Experimental Test of Local Hidden-Variable Theories." *Physical Review Letters*, 28, 938. [doi:10.1103/PhysRevLett.28.938](https://doi.org/10.1103/PhysRevLett.28.938)
[^7]: Aspect, A., Dalibard, J., Roger, G. (1982). "Experimental Test of Bell's Inequalities Using Time-Varying Analyzers." *Physical Review Letters*, 49, 1804. [doi:10.1103/PhysRevLett.49.1804](https://doi.org/10.1103/PhysRevLett.49.1804)
[^8]: Hensen, B. et al. (2015). "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres." *Nature*, 526, 682–686. [doi:10.1038/nature15759](https://doi.org/10.1038/nature15759). Giustina, M. et al. (2015). *Physical Review Letters*, 115, 250401. Shalm, L. K. et al. (2015). *Physical Review Letters*, 115, 250402.
[^9]: The Nobel Prize in Physics 2022. Press release, 4 October 2022. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2022/press-release/)
[^10]: Fuchs, C. A., Mermin, N. D., Schack, R. (2014). "An introduction to QBism with an application to the locality of quantum mechanics." *American Journal of Physics*, 82, 749–754. [doi:10.1119/1.4874855](https://doi.org/10.1119/1.4874855)
[^11]: Everett, H. (1957). "'Relative State' Formulation of Quantum Mechanics." *Reviews of Modern Physics*, 29, 454. [doi:10.1103/RevModPhys.29.454](https://doi.org/10.1103/RevModPhys.29.454)
[^12]: Bohm, D. (1952). "A Suggested Interpretation of the Quantum Theory in Terms of 'Hidden' Variables. I." *Physical Review*, 85, 166. [doi:10.1103/PhysRev.85.166](https://doi.org/10.1103/PhysRev.85.166)
[^13]: Ghirardi, G. C., Rimini, A., Weber, T. (1986). "Unified dynamics for microscopic and macroscopic systems." *Physical Review D*, 34, 470. [doi:10.1103/PhysRevD.34.470](https://doi.org/10.1103/PhysRevD.34.470)
[^14]: Donadi, S. et al. (2021). "Underground test of gravity-related wave function collapse." *Nature Physics*, 17, 74–78. [doi:10.1038/s41567-020-1008-4](https://doi.org/10.1038/s41567-020-1008-4)
[^15]: Zurek, W. H. (2003). "Decoherence, einselection, and the quantum origins of the classical." *Reviews of Modern Physics*, 75, 715. [doi:10.1103/RevModPhys.75.715](https://doi.org/10.1103/RevModPhys.75.715)
[^16]: Shor, P. W. (1997). "Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer." *SIAM Journal on Computing*, 26(5), 1484–1509. [doi:10.1137/S0097539795293172](https://doi.org/10.1137/S0097539795293172)
[^17]: Google Quantum AI (2025). "Quantum error correction below the surface code threshold." *Nature*, 638, 920–926. [doi:10.1038/s41586-024-08449-y](https://doi.org/10.1038/s41586-024-08449-y)
[^18]: Bouwmeester, D. et al. (1997). "Experimental quantum teleportation." *Nature*, 390, 575–579. [doi:10.1038/37539](https://doi.org/10.1038/37539)
[^19]: Hardy, L. (2001). "Quantum Theory From Five Reasonable Axioms." [arXiv:quant-ph/0101012](https://arxiv.org/abs/quant-ph/0101012). Chiribella, G., D'Ariano, G. M., Perinotti, P. (2011). "Informational derivation of quantum theory." *Physical Review A*, 84, 012311. [doi:10.1103/PhysRevA.84.012311](https://doi.org/10.1103/PhysRevA.84.012311)
[^20]: The Nobel Prize in Physics 2025. Press release, 7 October 2025. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2025/press-release/)
[^21]: Kotler, S. et al. (2021). "Direct observation of deterministic macroscopic entanglement." *Science*, 372, 622–625. [doi:10.1126/science.abf2998](https://doi.org/10.1126/science.abf2998)
[^22]: Mermin, N. D. (1989). "What's Wrong with this Pillow?" *Physics Today*, 42(4), 9. [doi:10.1063/1.2810963](https://doi.org/10.1063/1.2810963). Mermin later established that the phrase was his own, not Feynman's.
[^23]: Einstein to Max Born, 3 March 1947. In Born, M. (ed.) (1971), *The Born–Einstein Letters*, Macmillan, p. 158.
[^24]: Ursin, R. et al. (2007). "Entanglement-based quantum communication over 144 km." *Nature Physics*, 3, 481–486. [doi:10.1038/nphys629](https://doi.org/10.1038/nphys629)
