---
title: Circuits, Sensors, and Signals
subtitle: Follow charge and energy through a circuit, then ask what a measurement means.
part: IV · Electricity and Control
---

## The wire is not a fuel pipe

Charge flows around a circuit; electrical energy is transferred into loads. A resistor does not use up the current flowing through it. In a steady series circuit, the same current passes through each element while voltage differences account for energy transferred per unit charge.

**Voltage** is potential-energy difference per charge. **Current** is rate of charge flow. For an ideal resistor, $V=IR$, and its dissipated power is $P=VI=I^2R$. A 12 V source across 6 ohms gives 2 A and 24 W. That heat has to go somewhere.

Kirchhoff's current law expresses charge conservation at a circuit node. Kirchhoff's voltage law, in ordinary lumped-circuit models with induced effects accounted for, constrains voltage changes around a loop. Together they turn a drawing into solvable equations.[^1]

## Components store and shape energy

A **capacitor** stores energy in an electric field and relates charge to voltage through $Q=CV$. An **inductor** stores energy in a magnetic field and resists changes in current. Their frequency-dependent behavior allows filtering and energy conversion. A transistor can control current and act as a switch or amplifier; it does not create the energy being amplified.

For a resistor and capacitor, the product $RC$ gives a characteristic time scale. With 10,000 ohms and 10 microfarads, it is 0.1 seconds. A circuit may smooth a rapidly changing signal while responding more slowly to a real change. Filtering is a trade-off, not free improvement.

## A sensor needs a chain of interpretation

A temperature sensor converts a physical condition into a signal. Electronics amplify and filter it; a converter samples it; software maps the number back to an estimated temperature. Calibration relates outputs to known reference conditions. Noise adds variation, while bias can shift every reading in the same direction.

**Resolution** is the size of a distinguishable step, not the same as accuracy. A display showing 0.001°C increments can still be wrong by 2°C. Sampling creates another limitation: signals changing too quickly for the sampling rate can appear as misleading slower patterns, called aliasing. Filtering before sampling is therefore part of measurement design.

:::deeper A sensor does not hand you the physical quantity directly

### Follow the measurement chain

Suppose a temperature-sensitive resistor forms one side of a voltage divider. The divider converts a change in resistance into a voltage. An analog-to-digital converter samples that voltage, and software uses a calibration relationship to estimate temperature. Every step contributes uncertainty or possible distortion.

A 12-bit converter divides its full-scale range into 4,096 code levels. Over an idealized 0–3.3 V range, one code step is about 0.806 mV. That is resolution, not overall accuracy. A precise-looking digital number can still be wrong because of reference-voltage error, sensor tolerance, electrical noise, loading, or an incorrect calibration curve.

### Let the circuit settle

A resistor and capacitor can form a simple low-pass network with time constant RC. For a voltage step in the ideal first-order circuit, the capacitor approaches its new value gradually: about 63% of the change occurs after one time constant and about 95% after three. Sampling too soon after switching channels can therefore measure part of a transition rather than the intended settled value.

Filtering suppresses some rapid variation, but also delays genuine changes. A smoothing filter that makes a graph look clean may hide the timing needed by a control system. Choose its behavior according to the signal and task.

### Sampling can invent a slower signal

If a signal changes faster than the sampling system can distinguish, different underlying signals can produce the same samples. This is aliasing. Once that information has been lost, plotting more decimal places or drawing a smoother line cannot recover it. Filtering before sampling helps constrain the signal to the intended bandwidth.

Calibration checks the relationship between readings and known references. Validation asks whether the complete measurement is suitable under the actual operating conditions. Both matter when a sensor reading becomes the input to a decision.
:::

:::try More decimal places
Two thermometers give repeatable readings of 22.000°C and 24°C in a 24°C reference bath. Which measurement issue does the first demonstrate?

:::answer Show the reasoning
It has fine displayed resolution and may be precise, but it is biased relative to the reference. Extra digits do not establish accuracy. Calibration and uncertainty matter more than the display format.
:::
:::

[^1]: MIT OpenCourseWare. *Circuits and Electronics*, circuit analysis and devices. [Course materials](https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/).
