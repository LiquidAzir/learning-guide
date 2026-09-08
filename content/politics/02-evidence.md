---
title: How We Know What Institutions Do
subtitle: Comparison, causal inference, measurement, and the problem of the missing counterfactual.
part: I · Power, Evidence, and Rules
---

## A reform followed by improvement

A city changes its procurement rules. Costs fall the following year. Did the reform work? Perhaps. But input prices may also have fallen, projects may have become simpler, or an unusually expensive year may have ended. Before-and-after is a starting observation, not a complete causal design.

The **counterfactual** is what would have happened without the reform. We cannot observe both outcomes for the same city at the same time. Research designs construct comparisons that make the missing outcome more credible.

## Different designs, different assumptions

**Randomized experiments** assign an intervention by chance. With successful implementation, they support causal comparison within the study. Noncompliance, attrition, and spillovers still require attention. Random assignment is not the same as a representative sample.

**Difference-in-differences** compares changes in treated and comparison groups. If costs fell by 12 units in the reform cities and by 7 in comparable untreated cities, the estimated relative change is −5. A key assumption is that, without treatment, their trends would have evolved comparably. Pre-reform trends can inform that assumption but cannot prove it for the future.

**Regression discontinuity** compares cases close to an assignment threshold. It can be useful when crossing a cutoff changes treatment, provided other relevant factors vary smoothly and sorting around the threshold is addressed. The resulting effect is often local to cases near the cutoff.

**Comparative and historical research** can reconstruct mechanisms using documents, sequences, and contrasts. It must also examine alternative explanations and how cases were selected. A small number of cases is not automatically weak, and a large spreadsheet is not automatically causal.[^1]

## Measurement is a political-science problem

An index of democracy, corruption, or state capacity combines choices about concepts, indicators, and aggregation. Inspect those choices before treating the score as a natural unit. More recorded corruption cases might indicate more corruption, stronger detection, or both.

External validity asks whether a finding transfers to other institutions, populations, and periods. A field experiment in one administrative setting can be valuable without answering what every government should do.

:::deeper Did the new rule actually reduce waiting times?

### A before-and-after comparison leaves a missing case

Suppose a city introduces an appointment system and average waiting time falls from 40 to 25 minutes. That is an observed improvement of 15 minutes. It is not yet an estimate of the system's causal effect: demand might have fallen, staffing might have increased, or the definition of waiting time might have changed.

A similar city without the new system goes from 35 to 30 minutes over the same period. A difference-in-differences calculation subtracts that five-minute improvement from the treated city's fifteen-minute improvement, producing an estimated ten-minute reduction attributable to the intervention under the required assumptions.

The key assumption is about the unobserved path: without the appointment system, would the treated city have experienced a comparable change? Similar trends before the intervention make that more plausible, but do not prove it. A staffing change unique to the treated city would still threaten the interpretation.

### Look for changes in who gets counted

What if the appointment system discourages people without reliable internet from applying? Waiting time among those served could fall while access becomes worse for some residents. Report attendance, unsuccessful applications, and who leaves the process as well as the headline waiting-time average.

A randomized rollout can strengthen causal inference, but its unit matters. Randomizing individual applicants differs from randomizing offices. If one office's new system redirects traffic to another, outcomes spill across assignment groups. The design and analysis need to account for that interference.

### Keep the claim proportional to the design

The useful conclusion might be that the system reduced measured waiting times in the tested offices during the study period. Whether it would work in a larger jurisdiction depends on staff capacity, demand, access, and implementation. Calling an evaluation successful should identify the outcome that improved, the uncertainty around it, and any outcome the study did not measure.
:::

:::try A misleading decline
Complaints fall after a city replaces in-person reporting with a complicated online form. Name two competing explanations and a measurement that could help distinguish them.

:::answer Show the reasoning
Service quality may have improved, or reporting may have become harder. An independently sampled resident survey, accessibility checks, and measures of unresolved problems could help. Complaint counts alone mix the underlying problem with the reporting process.
:::
:::

[^1]: Angrist and Pischke (2009). *Mostly Harmless Econometrics*, a reference on identification and research design. [Publisher](https://press.princeton.edu/books/paperback/9780691120355/mostly-harmless-econometrics).
