---
title: Brain Networks and the Tools That Reveal Them
subtitle: What recordings, scans, lesions, and wiring diagrams can—and cannot—tell us.
part: II · From Cells to Experience
---

## A bright patch is not a thought

A brain image shows a colored patch during a memory task. It is tempting to call that patch “the memory center.” But the color usually represents a statistical comparison, not a photograph of a mental process. Remembering also requires seeing the instructions, maintaining a goal, choosing an answer, and moving to report it.

Different tools answer different questions. **EEG** records voltage differences at the scalp, with fine timing but difficult source localization. **fMRI** commonly measures a blood-oxygenation signal related indirectly to neural activity; that response unfolds over seconds. Invasive electrodes can capture local signals more directly, but sample only the tissue accessible in a particular procedure.[^1]

| Method | Useful for | Main interpretive limit |
|---|---|---|
| EEG or MEG | When activity patterns change | Inferring their precise sources is difficult |
| fMRI | Where task-related signals differ | Blood-flow signals are indirect and relatively slow |
| Lesions | Functions disrupted after damage | Damage may affect connections and compensation |
| Stimulation | Testing effects of a perturbation | Effects spread and depend on current brain state |
| Connectomics | Mapping physical connections | Wiring alone does not specify ongoing computation |

## Regions participate in networks

The hippocampus is important for forming and relating many episodic memories. Basal ganglia participate in action selection and learning. The thalamus coordinates and relays signals within extensive loops. The cerebellum contributes to prediction and timing as well as movement. Each description identifies a role, not an exclusive job performed in isolation.

**Functional connectivity** means statistical dependence between measured signals. Two regions can covary because one influences the other, because both receive common input, or because an unmeasured variable changes both. It does not establish a physical connection or its direction.

The MICrONS dataset combines activity recordings with a detailed wiring reconstruction from mouse visual cortex. Linking function and structure creates opportunities that either measurement alone would miss. It remains a sample of one animal's nervous system, not a complete theory of vision or a map of human thought.[^2]

## Work backward carefully

If a region often participates in fear experiments, activation there does not prove that a person is afraid. This **reverse inference** requires knowing how selectively the activity predicts fear compared with other states. A smoke alarm may respond to fire, steam, or burnt toast; knowing that fires trigger alarms does not make every alarm a fire.

:::deeper Investigate a brain image before interpreting it

### What does the colored patch measure?

Suppose a brain scan shows a region responding more during a difficult memory task than during rest. The displayed color usually represents a statistical comparison, not a photograph of a thought. With fMRI, the measured signal depends on changes related to blood oxygenation. Those changes provide an indirect view of neural activity and unfold more slowly than individual spikes.

The choice of comparison changes the question. Memory versus rest includes differences in attention, visual input, effort, and button pressing. Memory versus a carefully matched task can remove some of those differences, although a comparison task is never cognitively empty. Subtracting two signals does not guarantee that exactly one mental process remains.

### Association, necessity, and timing

A region can be active during a task without being uniquely responsible for it. Damage associated with impaired performance gives another kind of evidence, but injuries may affect connecting fibers and wider networks as well as the most visible location. Stimulation can perturb processing, yet its effects depend on timing, intensity, and the network's state.

EEG can help establish when a change occurs, while locating the responsible sources requires assumptions because several internal source configurations can produce similar scalp measurements. Combining methods is useful precisely because their strengths and weaknesses differ.

Imagine investigating whether a network helps retrieve a memory or merely supports saying the answer. One useful comparison varies the response requirement while holding the remembered material similar. Another tests whether a perturbation at a particular time changes retrieval performance. Agreement among those results is more informative than a single bright patch.

The same care applies to a connectome. A road map tells you which routes exist; it does not tell you which routes carried traffic during a particular journey. Wiring, activity, intervention, and behavior answer connected but distinct questions.
:::

:::try Connections or coincidence?
Two regions' signals rise together whenever a loud scanner noise occurs. What should you investigate before concluding that one region drives the other?

:::answer Show the reasoning
The sound may drive both. Investigate common sensory input, physiological noise, timing, and the effect of a controlled perturbation. Correlation is a reason to test a connection, not proof of its direction.
:::
:::

[^1]: Logothetis (2008). What we can do and what we cannot do with fMRI. [doi:10.1038/nature06976](https://doi.org/10.1038/nature06976).
[^2]: MICrONS Consortium (2025). Functional connectomics spanning multiple areas of mouse visual cortex. [Study and data](https://www.nature.com/articles/s41586-025-08790-w).
