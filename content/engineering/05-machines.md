---
title: Machines, Motion, and Mechanical Advantage
subtitle: Gears trade speed for torque; they do not manufacture energy.
part: III · Moving Energy Around
---

## Why a bicycle has gears

On a steep hill, a lower gear lets you turn the pedals more times for each wheel revolution. You trade wheel speed for greater wheel torque at a given pedal torque. The hill's energy requirement remains.[^1]

**Torque** is the turning effect of a force. A perpendicular 100 N force applied 0.2 m from a shaft produces 20 N·m. **Work** is energy transferred through motion. **Power** is its rate. For a rotating shaft:

$$P=\tau\omega,$$

where torque $\tau$ is in N·m and angular speed $\omega$ in radians per second.

## A gearbox calculation

An ideal reduction gearbox takes an input at 100 radians per second with 2 N·m torque. Input power is 200 W. With a 5:1 speed reduction, output speed is 20 radians per second and output torque is 10 N·m. If efficiency is 90%, output power is 180 W and output torque at that speed is 9 N·m.

The missing 20 W becomes heat and other losses. Lubrication, bearing choice, alignment, and tooth geometry influence those losses and the system's durability. A real motor also has a torque–speed relationship; it cannot necessarily provide the same torque at every operating speed.

## Motion creates dynamic loads

Static equilibrium is not enough when parts accelerate. Inertia resists changes in motion. A heavier rotating part may smooth speed variation by storing kinetic energy, while also requiring more torque to start and stop.

A mass and spring have a natural frequency. Periodic forcing near a system's natural frequency can produce large oscillations, depending on damping and forcing. **Resonance** is not simply “any vibration.” It is a relationship between excitation and the system's response.

**Damping** dissipates mechanical energy. Adding it can reduce oscillation but may introduce heat and alter response speed. Good design asks what disturbance the machine must tolerate and what motion is acceptable, not merely how to make every part heavier.

:::try More torque for free?
A proposed gearbox claims to double torque while keeping rotational speed unchanged and requiring no extra power. Can an ordinary passive gearbox do this continuously?

:::answer Show the reasoning
No. Doubling torque at the same speed doubles output power. A passive gearbox can trade speed for torque, with losses, but cannot provide sustained extra power without another energy source.
:::
:::

[^1]: OpenStax. *University Physics, Volume 1*, work, rotation, and oscillations. [Open textbook](https://openstax.org/details/books/university-physics-volume-1).
