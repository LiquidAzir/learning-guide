---
title: Pipes, Pumps, and Flow
subtitle: Continuity, pressure, resistance, and why a narrow pipe can become an expensive choice.
part: III · Moving Energy Around
---

## The shower loses pressure

Someone opens another tap and your shower weakens. A network of pipes, restrictions, and a shared supply must now support a different flow. The answer involves both conservation of mass and the energy lost while fluid moves.[^1]

For steady incompressible flow through a single path, volumetric flow rate is $Q=Av$: cross-sectional area times mean velocity. If area halves while flow stays fixed, velocity doubles. The fluid has not disappeared; the same volume passes through a smaller opening each second.

## Pressure is energy per volume

The hydraulic power supplied by a pump is approximately:

$$P_h=\Delta p\,Q.$$

A pressure increase of 100,000 Pa acting on a flow of 0.002 cubic meters per second gives 200 W of hydraulic power. At 50% pump efficiency, the required input is 400 W. The calculation must use consistent units: two liters per second is 0.002 cubic meters per second, not 2.

Pressure can trade with elevation and speed. Bernoulli's equation expresses this along a streamline for an idealized steady, incompressible, inviscid flow. Real pipe calculations add pumps and losses rather than pretending viscosity vanished.

## Resistance depends on the regime

The **Reynolds number**, $Re=\rho vD/\mu$, compares inertial and viscous effects using density $\rho$, characteristic speed $v$, length $D$, and dynamic viscosity $\mu$. It helps identify relevant flow behavior; geometry and disturbances also matter.

For fully developed laminar flow of a Newtonian fluid in a straight circular pipe, resistance is strongly dependent on radius: at fixed pressure difference, flow scales with the fourth power of radius. That result does not carry unchanged into turbulent pipe flow. There, roughness and inertial losses require another model.

## The system chooses the operating point

A pump's available pressure rise generally changes with flow. The piping system's required pressure rise also changes with flow. Their intersection determines an operating point. Selecting a pump from a single headline power rating misses this interaction.

Valves, bends, filters, and entrances add losses. Rapid valve changes can cause pressure transients. Low local pressure can produce cavitation, with vapor bubbles that later collapse and may damage components. A steady-flow model will not answer every transient or phase-change question.

:::deeper Why a narrower pipe can demand a much larger pump

### Keep flow rate and velocity separate

For steady incompressible flow through a pipe, volume flow rate Q equals area A times mean velocity v. Halving the pipe's diameter quarters its area. Maintaining the same Q therefore requires four times the mean velocity.

Pressure loss depends on the flow regime. In fully developed laminar flow through a circular pipe, the pressure drop for a given volume flow scales as 1/r⁴ under the usual Newtonian-fluid assumptions. Halving the radius would require sixteen times the pressure drop for that idealized case. In turbulent flow, a different relation involving friction factor and velocity is needed; carrying the laminar formula into every pipe would be a mistake.

### The pump and the system meet at an operating point

A pump's delivered pressure rise generally depends on its flow rate. The connected pipe network also has a relationship between required pressure and flow. Their intersection determines an operating point. A pump rating without the system curve cannot tell you the actual delivered flow.

Valves, bends, filters, elevation changes, and outlet conditions all contribute. Closing a valve changes the system, so the flow and pump operating point move. Hydraulic power delivered to the fluid is pressure rise times volume flow. Electrical input must be higher once motor and pump losses are included.

### A pressure drop can change the fluid itself

If local pressure falls far enough, vapor cavities can form and later collapse: cavitation. It can cause noise, erosion, and loss of performance. A calculation based solely on average pipe pressure may miss the low-pressure region that initiates it.

The broader lesson is that “water flows through a pipe” hides several linked questions: how much flows, how fast it moves, where energy is lost, and whether the assumed single liquid phase remains valid. Choose the equation after identifying the regime.
:::

:::try Counting the liters
A pump supplies 3 liters per second through a pressure rise of 200 kPa. What is the hydraulic power before efficiency losses?

:::answer Show the reasoning
Convert to 0.003 cubic meters per second and 200,000 Pa. Their product is 600 W. Input power must be greater than this for a pump with efficiency below 100%.
:::
:::

[^1]: MIT OpenCourseWare. *Fluid Mechanics*, conservation laws and flow models. [Course materials](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/).
