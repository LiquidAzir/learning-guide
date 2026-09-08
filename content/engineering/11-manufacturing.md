---
title: Manufacturing, Tolerances, and Quality
subtitle: Why making the thousandth part correctly is a different achievement from making the first.
part: V · From Prototype to System
---

## Two good parts that do not fit

A shaft and its hole are each “close enough” to the drawing. Yet the shaft jams. The problem may be that each drawing allowed variation without considering how the two variations combine.

A **tolerance** is permitted variation in a dimension or property. It must relate to function. Unnecessarily tight tolerances increase manufacturing and inspection cost; loose tolerances can prevent assembly or create excessive vibration, leakage, and wear.

For a simple clearance example, a hole ranges from 10.00 to 10.04 mm and a shaft from 9.97 to 10.01 mm. The worst case is 10.00 minus 10.01, or −0.01 mm: interference rather than clearance. Average dimensions do not guarantee that every pair will fit.

## The process changes the material

Casting, forming, machining, joining, and additive manufacturing create different microstructures, surfaces, residual stresses, and defects. A printed metal part is not necessarily equivalent to a machined part of nominally the same alloy. Layer orientation, thermal history, porosity, and post-processing can affect performance.

**Design for manufacture** asks how the process will reliably produce the geometry and properties. **Design for assembly** considers how parts are positioned, joined, checked, and replaced. Both belong early in design, before a beautiful geometry commits the project to an impractical process.

## Quality is a process, not a final glance

Inspection detects some defects in some locations at some resolution. It does not establish that every unobserved property is acceptable. A useful quality system combines controlled inputs, process monitoring, calibration, traceability, and appropriate final testing.

Statistical process control distinguishes ordinary variation from signs that a process has changed. A stable process can still be consistently outside the specification: **control limits**, estimated from process behavior, are different from **specification limits**, defined by requirements.

A NIST report on metal additive manufacturing examines how in-process monitoring and non-destructive evaluation can contribute to qualification. Its central engineering question is the link between a measured signal, an actual defect, and the performance of the finished part.[^1]

:::deeper When individually acceptable parts do not fit together

### Add the tolerances, not just the nominal sizes

Imagine three spacers, each specified as 10.0 ± 0.1 mm. Their nominal total length is 30.0 mm. In a worst-case calculation, the total can range from 29.7 to 30.3 mm. If the available cavity is 30.2 ± 0.1 mm, the minimum cavity is 30.1 mm, so individually conforming parts can still produce interference.

A statistical tolerance calculation may predict a narrower distribution than the worst case if errors are appropriately centered and independent. Those assumptions need evidence. Parts from the same worn tool or batch can share a systematic error, so independence cannot simply be presumed because it gives a more favorable answer.

### Measure the process as well as the part

A measurement tool has its own repeatability and calibration limits. If its variation is large relative to the tolerance, an apparent pass/fail distinction may be unreliable. Repeated measurements, reference standards, and comparisons across operators help characterize the measurement system.

Process control asks whether variation is stable and understood. Final inspection asks whether measured parts meet specified acceptance criteria. Inspection can detect some defects, but does not by itself remove the process that creates them. Nor can an external measurement reveal every internal defect.

### A new manufacturing method changes the qualification task

Additive manufacturing can make shapes difficult to produce by other methods, but layer history, thermal gradients, orientation, and defects affect the resulting part. A sensor trace during printing is useful only if its relationship to relevant part properties is established.

The design must therefore consider how the part will be made, measured, assembled, and maintained. A geometrically elegant drawing that cannot be produced consistently within the required limits is an unfinished engineering solution.
:::

:::try Every average is right
A production batch has the correct mean diameter, but its spread is much wider than the permitted tolerance. Has the process met the dimensional requirement?

:::answer Show the reasoning
No. A correct average can conceal many unacceptable individual parts. Examine the distribution, measurement uncertainty, and tolerance limits, then identify the sources of excessive variation.
:::
:::

[^1]: NIST (2024). In-process monitoring and non-destructive evaluation for metal additive manufacturing processes. [NIST IR 8538](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8538.pdf).
