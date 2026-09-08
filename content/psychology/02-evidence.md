---
title: Measuring a Mind
subtitle: Experiments, effect sizes, replication, and the difference between detecting a signal and deciding to report it.
part: I · Asking Better Questions
---

## Did you see it, or decide to say yes?

A faint flash appears on a screen. You press “seen.” On the next trial, nothing appears, but you press the same button. A perception experiment has become a decision experiment too: your answer depends on sensory evidence and on how much evidence you require.

An **operational definition** states how a concept will be measured. Attention might be measured through response time; memory through recall; conscious perception through a report. None is the concept itself. Slow responses can reflect caution, fatigue, difficulty moving, or difficulty seeing.

**Signal detection theory** separates sensitivity from a **decision criterion**, the threshold for reporting a signal. Rewarding hits heavily may make someone say yes more often. Hits then increase, but so do false alarms. Calling that better perception would confuse a changed policy with a changed ability. Recent consciousness research explicitly investigates this problem.[^1]

## Build the comparison

Suppose a study tests whether practice with feedback improves detection. Randomly assign participants to feedback and comparison conditions, keep display conditions equal, and define the main outcome before inspecting results. Random assignment helps balance unmeasured differences in expectation; it does not prevent dropouts or guarantee that a small sample is balanced in fact.

In a **within-person** experiment, each person experiences both conditions. This reduces variation due to differences between people, but introduces order and carryover effects. Counterbalance the order and consider whether the first condition permanently changes performance in the second.

If the feedback group improves by 12 percentage points and the comparison group by 5, the estimated improvement beyond that comparison is 7 points. Report uncertainty around that estimate. A small p-value addresses compatibility with a specified statistical model; it is not the probability that the theory is true or a measure of practical importance.

## An effect is not yet an explanation

Imagine a memory improvement that disappears when the comparison group receives equally interesting practice. Engagement, rather than the advertised technique, may explain the first result. Strong studies make alternatives compete. **Preregistration** reduces flexibility to choose a pleasing analysis after seeing the data. **Replication** asks whether a finding survives another test; it requires attention to methods and populations, not just whether two p-values fall on opposite sides of a threshold.[^2]

:::deeper Work through it: the detector that seems almost perfect

### Count the mistakes that accuracy hides

Imagine 1,000 trials in which a faint light appears 100 times. A participant reports seeing it on 80 of those trials, but also on 90 of the 900 blank trials. There are four outcomes:

| Actual trial | Says “light” | Says “no light” |
|---|---:|---:|
| Light present | 80 hits | 20 misses |
| Light absent | 90 false alarms | 810 correct rejections |

Overall accuracy is 890/1,000, or 89%. A participant who always answers “no light” would score 90%. That does not make the always-no participant a better detector. It shows why a single accuracy score can reward ignoring an uncommon event.

The hit rate is 80%, and the false-alarm rate is 10%. Signal detection theory treats those together to distinguish sensitivity from a willingness to say yes. Making false alarms expensive might reduce both rates without changing the sensory information available. Making the light brighter could improve the separation between light and blank trials. Those are different interventions.

### From a score to an explanation

Now compare a quiet condition with a distracting sound. Randomly assigning the order helps prevent practice from being mistaken for an effect of quiet. Using the same participants reduces variation due to stable individual differences, but introduces possible carryover: one condition can change how a person approaches the next. Counterbalancing order helps assess that problem.

Specify the outcome before collecting data. If researchers inspect accuracy, reaction time, confidence, pupil size, and many subgroups, then report only the most favorable difference, the apparent evidence will be too strong. A preregistered analysis constrains those choices; exploratory findings can still be useful when labeled as such.

An interval around the estimated effect describes uncertainty under an analysis and its assumptions. It does not automatically capture selection bias, an unreliable instrument, or an unrepresentative sample. The useful question is therefore more demanding than “Was it significant?” Ask how large the effect was, how precisely it was estimated, and what alternative explanation the design actually excludes.
:::

:::try A better detector?
A participant's hit rate rises from 60% to 80%, while their false-alarm rate rises from 10% to 40%. Can you conclude that their sensory sensitivity improved?

:::answer Show the reasoning
No. The participant may simply have lowered the threshold for saying “seen.” Both rates are needed to estimate sensitivity under a signal-detection model. The change in hits alone cannot separate perception from response policy.
:::
:::

## Keep the measurement attached to the claim

Ask what changed, compared with what, by how much, and in whom. A persuasive explanation must account for the behavior and survive plausible alternatives.

[^1]: Sánchez-Fuenzalida et al. (2026). The act of detecting a stimulus contaminates measures of conscious experience with decision biases. [Study](https://www.nature.com/articles/s41467-026-72567-6).
[^2]: Open Science Collaboration (2015). Estimating the reproducibility of psychological science. [doi:10.1126/science.aac4716](https://doi.org/10.1126/science.aac4716).
