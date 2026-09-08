---
title: Perception and Attention
subtitle: Why seeing is an inference, and why an obvious event can pass unnoticed.
part: II · From Cells to Experience
---

## The shadow on the stairs

In dim light, a folded coat looks like an animal. You move closer, and the animal becomes a coat. Nothing supernatural happened: the sensory evidence was initially compatible with several causes, and your interpretation changed as better evidence arrived.

**Perception** estimates what is happening in the world from incomplete, noisy measurements. Context helps resolve ambiguity. This usually makes perception more effective, but carefully designed illusions reveal the assumptions involved. Saying perception involves inference does not mean we can freely choose what to see.

## Evidence meets expectation

A Bayesian description makes the structure explicit:

$$P(H\mid E)\propto P(E\mid H)P(H).$$

Here $H$ is a possible cause, $E$ the evidence, $P(H)$ its prior probability, and $P(E\mid H)$ how well it predicts the evidence. The posterior combines them. This is a useful computational description; it does not prove that individual neurons literally perform the written arithmetic.

Suppose your prior odds favor coat over animal by 9 to 1. A rustling sound is three times as likely under the animal explanation. The posterior odds favor coat by only 3 to 1. Evidence shifted the interpretation without making the initially less likely explanation certain. Distinguish an updated estimate from a binary decision to approach or retreat.

## Attention allocates limited processing

**Selective attention** prioritizes information relevant to a task. Searching for a particular person makes some faces and features more important than others. This is useful precisely because processing everything equally would be costly.

Inattentional-blindness experiments show that people can miss an unexpected event while performing a demanding visual task.[^1] The lesson is not that their eyes failed. Task priorities can prevent information from reaching the kind of processing needed for later report. The size of such effects depends on the task and on whether the event was expected.

Attention and consciousness are related but not interchangeable. A change in report may reflect altered sensory processing, changed attention, memory loss before answering, or a different willingness to claim detection. Chapter 2 explains how experiments try to separate these.

:::deeper Why a coat becomes an animal in the dark

### Work through an inference

Suppose a shape could be either an animal or a coat. Before inspecting it, you assign a 10% chance to an animal and a 90% chance to a coat. An apparent twitch would occur in 60% of animal cases but also in 5% of coat cases—for example, because a draft moves the fabric. These are invented numbers for a reasoning exercise.

Across 1,000 such encounters, expect 100 animals and 900 coats. Of the animals, 60 produce the twitch; of the coats, 45 do. Among the 105 twitching shapes, 60 are animals. The updated probability is therefore about 57%, not 60% and not certainty.

The observation matters, but so does how common the alternatives were before it. If you are in a wildlife enclosure rather than a bedroom, the starting expectations should differ. This is the logic of Bayesian updating; it need not mean the brain explicitly writes down this arithmetic.

### Perception and action need different thresholds

You might step back at 57% because the cost of startling an animal exceeds the cost of briefly avoiding a coat. That action does not prove your visual experience was certain. A decision combines an estimate with the consequences of being wrong.

Attention can change which information is sampled and how effectively it is used. Looking again under better light supplies stronger evidence. Simply wanting the shape to be a coat does not. Asking people what they saw also adds a reporting decision, which is why experiments need to distinguish changes in perception from changes in response policy.

A useful everyday habit follows: when two people interpret an ambiguous event differently, ask what evidence each noticed and what alternatives each considered. Disagreement can arise before either person starts consciously arguing about the conclusion.
:::

:::try A warning that people miss
A control panel shows every alert in equally bright red. Operators begin missing urgent alarms. What change follows from the idea of selective attention?

:::answer Show the reasoning
Give urgent, actionable alarms a distinct and consistent priority, and reduce irrelevant competition. Making every element more prominent does not help people select the important one. Test detection and false alarms in realistic workloads, rather than assuming a new color solves the problem.
:::
:::

## The practical distinction

Perception estimates what is present; attention changes what receives priority; a decision determines what to do with the result. Many experimental mistakes come from treating these as a single step.

[^1]: Simons and Chabris (1999). Gorillas in our midst: sustained inattentional blindness for dynamic events. [doi:10.1068/p281059](https://doi.org/10.1068/p281059).
