---
title: Glossary and Formula Checks
subtitle: Keep the units, assumptions, and system boundary alongside the calculation.
part: VI · Reference
---

## Design and mechanics

**Requirement.** A measurable outcome or constraint a design must satisfy.

**Validation.** Checking whether the system meets its intended need in use.

**Verification.** Checking whether a specified requirement has been satisfied.

**Load path.** The route by which forces pass through a structure and its connections to supports.

**Stress.** Force per area, measured in pascals; local values may differ greatly from a nominal average.

**Strain.** Relative deformation; it is dimensionless.

**Stiffness.** Resistance to deformation, distinct from resistance to failure.

**Fatigue.** Damage associated with repeated loading.

**Creep.** Time-dependent deformation under sustained loading.

**Fracture toughness.** Resistance to crack extension under specified test and modeling conditions.

**Torque.** Turning effect of force, measured in N·m.

## Energy and flow

**Power.** Energy transferred per time; 1 W is 1 J/s. A kWh is energy, not power.

**Efficiency.** Useful output divided by input for a defined energy conversion and boundary.

**Coefficient of performance.** Heating or cooling delivered divided by input work. It measures heat movement and can exceed one.

**Reynolds number.** A dimensionless comparison of inertial and viscous effects in a fluid flow.

**Specific energy.** Stored energy per mass; specify whether the mass is electrode, cell, or complete system.

## Measurement and systems

**Calibration.** Relating an instrument's output to reference quantities, with uncertainty attached.

**Resolution.** The smallest distinguishable measurement step; not a statement of accuracy.

**Feedback.** Using measured system behavior to adjust an input toward a goal.

**Stability.** A property of how a system responds over time to disturbances and initial conditions; it must be defined for the model in use.

**Tolerance.** Permitted variation specified to preserve a part's function.

**Common-cause failure.** A shared cause that defeats multiple components or backup paths.

## Formula reference

| Relationship | Check before using |
|---|---|
| $Q=mc\Delta T$ | No unaccounted phase change; use suitable heat capacity |
| $P=\tau\omega$ | Angular speed in radians per second |
| $P_h=\Delta pQ$ | Flow in cubic meters per second; add pump losses |
| $P=VI$ | Use the appropriate electrical model; AC power needs phase considerations |
| $\dot Q=kA\Delta T/L$ | Steady, one-dimensional conduction through a uniform layer |
| $\eta_{max}=1-T_c/T_h$ | Reversible heat engine, absolute temperatures |
| $R_{series}=\prod_iR_i$ | Required components and independent failures over the same mission |
