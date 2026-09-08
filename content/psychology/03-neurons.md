---
title: Neurons, Synapses, and Plasticity
subtitle: How cells send signals, alter one another, and change with experience.
part: II · From Cells to Experience
---

## A signal that renews itself

A message travelling along an axon does not merely fade like a shout down a corridor. The membrane repeatedly regenerates an electrical event. Voltage-sensitive channels open and close, allowing ions to move down electrochemical gradients. Those currents change the voltage at neighboring membrane, recruiting more channels.

The resulting **action potential** is a brief spike. Its amplitude is approximately stereotyped within a given neuron; stronger input usually changes the probability and timing of spikes rather than making each spike proportionately taller. Pumps maintain ionic gradients over time. They do not directly push the spike along the axon.[^1]

Myelin changes how current spreads and concentrates regeneration at gaps called nodes. This improves speed and energy use. The details matter: a biological neuron is a living, adaptable cell with complex geometry, not simply the weighted sum used in an introductory artificial neural network.

## What crosses a synapse

At many synapses, an arriving spike opens calcium channels, triggering neurotransmitter release. Receptors on the receiving cell change its electrical behavior. Some inputs make a spike more likely; others suppress or reshape that likelihood. The effect depends on the receptor, the cell's state, and the timing and location of other inputs.

**Glia** help regulate the surrounding chemical environment, support metabolism, and form myelin. Describing them as passive packing misses essential contributions to circuit function.

An artificial example makes integration concrete. Suppose a simplified cell fires when its summed input exceeds 5 units. Two excitatory inputs contribute 4 and 3, while an inhibitory input contributes −4. Together they produce 3, below threshold. Remove the inhibition and the same excitatory inputs produce 7. In an actual cell, voltages, conductances, and timing make the calculation more complicated, but the example shows why a neuron cannot be understood by listing its excitatory connections alone.

## Learning changes the circuit

**Synaptic plasticity** is a lasting change in how effectively cells influence one another. Long-term potentiation and depression can strengthen and weaken transmission. The effect depends on activity patterns and biological conditions; “cells that fire together wire together” is a useful starting intuition, not a universal learning rule.[^2]

Plasticity also creates a stability problem. If every useful connection grew without restraint, activity could escalate. Inhibitory regulation and homeostatic processes help keep circuits within workable ranges. Learning therefore requires coordinated change, not unlimited strengthening.

:::deeper Follow a signal across two cells

### Electrical along the cell, chemical across the gap

Imagine a neuron receiving several inputs. Some synapses make its membrane voltage more likely to approach the conditions that trigger a spike; others reduce that likelihood. Their timing and location matter. Inputs arriving together can combine differently from the same inputs spread over a long interval.

An action potential is a regenerating change in voltage supported by voltage-dependent ion channels. It is not a small parcel of electricity slowly leaking along a wire. In a myelinated axon, insulation changes where current crosses the membrane, allowing the signal to propagate efficiently between exposed regions called nodes.

When a spike reaches many kinds of presynaptic terminal, calcium entry helps trigger release of neurotransmitter. Molecules cross a tiny gap and bind to receptors on the next cell. Receptor properties help determine the result; a transmitter's name alone does not tell you everything about its effect. Release is probabilistic, and synapses vary in strength.

### What could change with learning?

A familiar pathway can become more effective through changes in release, receptor response, or circuit organization. But “cells that fire together wire together” is a starting intuition, not a complete plasticity rule. Timing, neuromodulators, prior activity, and mechanisms that keep activity within workable bounds can matter.

Nor does a stronger synapse correspond neatly to a single stronger memory. The same cell can participate in several patterns, and a remembered episode draws on interacting systems. Explaining learning means connecting changes at the cell level to a measurable change in behavior. Observing either one alone leaves part of the explanation unfinished.

This distinction also helps with brain-inspired AI. An artificial unit that sums inputs and applies a function borrows a useful abstraction. It usually leaves out most of the chemistry, timing, shape, and ongoing regulation of a biological neuron.
:::

:::try Bigger spikes?
A louder sound increases firing from 20 to 50 spikes per second in a recorded neuron. Must each spike now have more than twice its previous voltage amplitude?

:::answer Show the reasoning
No. Spike rate changed. The amplitude of individual action potentials need not increase in proportion to stimulus strength. Information can be carried by rates, timing, and patterns across cells.
:::
:::

## The connection to behavior

These mechanisms make learning possible. Explaining a particular memory still requires identifying which circuits changed, how the change affected processing, and what the person or animal subsequently did.

[^1]: Hodgkin and Huxley (1952). A quantitative description of membrane current and its application to conduction and excitation in nerve. [doi:10.1113/jphysiol.1952.sp004764](https://doi.org/10.1113/jphysiol.1952.sp004764).
[^2]: Bliss and Lømo (1973). Long-lasting potentiation of synaptic transmission in the dentate area of the anaesthetized rabbit following stimulation of the perforant path. [doi:10.1113/jphysiol.1973.sp010273](https://doi.org/10.1113/jphysiol.1973.sp010273).
