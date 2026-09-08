---
title: Structures and Load Paths
subtitle: Why shape, supports, and stiffness matter as much as the amount of material.
part: II · Forces and Failure
---

## A ruler turns into a beam

Support a ruler at both ends and press its center. Now rotate the ruler onto its thin edge and repeat gently. The material and mass are unchanged, but its resistance to bending changes dramatically. Structural performance depends on where material sits relative to the load.[^1]

A **load path** traces forces through members and connections into supports. Start by drawing the structure apart from its surroundings and representing the forces acting on it: a **free-body diagram**. For static equilibrium, net force and net torque are zero. These equations constrain what the supports must carry.

## A simple bridge

For an ideal simply supported beam with a centered downward load $P$, symmetry gives an upward reaction $P/2$ at each support. Its maximum bending moment is $PL/4$, where $L$ is span. With $P=1{,}000$ N and $L=2$ m, that moment is 500 N·m.

One side of the beam is stretched while the other is compressed. In elementary elastic beam theory:

$$\sigma=\frac{My}{I}.$$

$M$ is bending moment, $y$ distance from the neutral axis, and $I$ the second moment of area. For a rectangular section, $I=bh^3/12$. Increasing depth $h$ strongly increases resistance to bending. This is why beams often put material far from the neutral axis rather than filling every available space.

The formula assumes an appropriate slender-beam, small-deformation, linear-elastic model. It does not handle every connection, load, or material behavior.

## Strength is not stiffness

**Strength** concerns resistance to failure. **Stiffness** concerns deformation under load. A structure may remain unbroken while deflecting enough to become unusable. A slender compressed member can also buckle before its material reaches its nominal crushing strength.

Trusses use arrangements of members that, in an ideal pin-jointed model, primarily carry axial tension or compression. Real joints, eccentric loads, and out-of-plane behavior complicate that model. Bridges also face moving loads, wind, temperature changes, corrosion, and fatigue—not merely a person standing motionless at the center.

:::deeper Why a shelf sags before it breaks

### Follow the load to the supports

Consider an ideal simply supported beam with a central downward load P and span L. With symmetric loading, each support carries P/2. The bending moment is largest at the center, where it equals PL/4. These conclusions depend on the support model; a firmly clamped beam has different reactions and moments.

For a rectangular cross-section, the second moment of area is I = bh³/12, where b is width and h is depth in the bending direction. Bending stress at a distance y from the neutral axis is My/I within the linear elastic beam model. At the outer surface, y = h/2, so maximum stress varies as 1/h² if the moment and width stay fixed.

The central deflection in this same idealized case is PL³/(48EI). Doubling depth increases I eightfold and reduces deflection to one eighth. Doubling width only doubles I and halves deflection. This explains why putting a ruler on edge makes it much harder to bend in that direction.

### Stiffness and strength answer different questions

A shelf may remain well below its material's failure stress and still sag enough to be unusable. Conversely, a stiff-looking brittle part may fracture with little visible deformation. A design needs limits on both deformation and relevant failure modes.

Real shelves introduce further complications: joints can slip, brackets can rotate, wood properties depend on direction and moisture, and a heavy object may sit off center. Thin members can buckle or twist, and local stresses near fasteners can dominate a simple average-stress calculation.

The beam model is useful because it predicts how changes in span, section, and stiffness should affect behavior. It becomes dangerous only when its assumptions disappear from the explanation. Trace the load through the shelf, brackets, fasteners, and supporting wall; every part of that path needs an appropriate model.
:::

:::try A longer span
Under the same centered load, what happens to the maximum bending moment when the ideal beam's span doubles? Does that alone tell you whether deflection remains acceptable?

:::answer Show the reasoning
The moment doubles because it is $PL/4$. That does not settle deflection, which has a stronger dependence on span in this model, or other failures such as buckling. Strength and serviceability need separate checks.
:::
:::

[^1]: MIT OpenCourseWare. *Mechanics and Materials I*, equilibrium, beams, and deformation. [Course materials](https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/).
