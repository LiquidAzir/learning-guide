---
title: Feedback, Stability, and Robots
subtitle: How a thermostat corrects an error, and why correcting too aggressively can make things worse.
part: IV · Electricity and Control
---

## The shower alternates hot and cold

You turn the handle toward hot. Nothing happens immediately, so you turn it farther. The hotter water finally reaches you, and you reverse the adjustment. Delay plus aggressive correction has created an oscillation.

A **feedback controller** compares a measured output with a desired value and changes an input. The system being controlled is the **plant**. A **disturbance** is an influence such as a cold draft or an external force. The **error** is desired minus measured output.

## Three useful responses

A proportional controller reacts to present error: $u=K_pe$. Increasing gain $K_p$ can improve correction but also amplify noise and destabilize a delayed system. Some plants retain a steady error because nonzero control effort requires nonzero proportional error.

Integral action accumulates error and can remove persistent offset. If an actuator reaches its limit while the integral continues growing, **integral windup** can produce a large overshoot when conditions change. Derivative action responds to the rate of change and can add damping, while also being sensitive to measurement noise. Practical PID controllers require filtering, limits, tuning, and a model of the application.[^1]

## Stability is a property of the loop

A component can be stable alone and unstable when connected to feedback. Sensor delay, computation time, actuator response, and plant dynamics all contribute. A simulation that omits those delays can produce a beautifully controlled system that does not exist.

Suppose a robot receives position measurements at 10 Hz. A new sample arrives every 0.1 seconds. If a disturbance changes the robot's motion substantially within that interval, simply increasing software gain cannot supply information that was never measured. The system may need faster sensing, a predictive model, slower operation, or mechanical changes.

## Learning does not remove the physical problem

A robot can learn a model or control policy from data. It still needs to act within torque, friction, sensing, and safety limits. Testing should include changed surfaces, damaged actuators, latency, and conditions outside the training distribution. Recent adaptive-control research studies recovery from unexpected disturbances; its reported success belongs to the tested conditions, not every possible failure.[^2]

:::try An unreachable target
A heater is at full power, but the room remains below its target. What problem can arise if an integral controller keeps accumulating error without a limit?

:::answer Show the reasoning
Integral windup. When the disturbance weakens or the room warms, accumulated error can keep commanding maximum heat and cause overshoot. An anti-windup scheme accounts for actuator saturation; more gain does not create extra heater capacity.
:::
:::

[^1]: Åström and Murray. *Feedback Systems*, freely readable control textbook. [Authors' materials](https://fbswiki.org/wiki/index.php/Main_Page).
[^2]: Getting robots back on track by reconstituting control in unexpected situations with online learning (2026). [Study](https://www.nature.com/articles/s41467-026-70256-y).
