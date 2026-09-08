---
title: Heat, Engines, and Refrigeration
subtitle: Why insulation slows heat flow, why engines reject heat, and how a heat pump can deliver more heat than its electrical input.
part: III · Moving Energy Around
---

## A refrigerator warms the room

Leave a refrigerator door open and it does not steadily cool a closed room. The device moves heat from one location to another and adds the energy used to operate it. Its warm coils reject both the extracted heat and the work supplied.

Heat moves by **conduction**, through interactions within material; **convection**, involving fluid motion and heat transfer; and **radiation**, carried by electromagnetic waves. A real object often uses all three routes.

## A wall as a thermal resistance

For one-dimensional steady conduction through a uniform flat layer:

$$\dot Q=\frac{kA\Delta T}{L}.$$

$k$ is thermal conductivity, $A$ area, $L$ thickness, and $\Delta T$ temperature difference. With $k=0.04$ W/(m·K), $A=10$ square meters, $L=0.1$ m, and $\Delta T=20$ K, the idealized heat flow is 80 W. Doubling thickness halves this part of the heat flow. It does not eliminate air leakage, thermal bridges, or surface heat transfer.

Thermal resistance networks combine paths much like electrical resistance networks. A metal fastener crossing an insulated wall can create a parallel path with much lower resistance. Improving the insulation alone eventually gives diminishing returns if other paths dominate.

## Efficiency and heat-pump performance

A heat engine converts part of incoming heat into work while rejecting the rest. For an ideal reversible engine between hot and cold reservoirs, the maximum efficiency is $1-T_c/T_h$, with absolute temperatures in kelvin. Using Celsius in that ratio gives nonsense.

A heat pump has a different purpose. Its heating **coefficient of performance** is heat delivered divided by work supplied. A COP of 3 means 1 kWh of input supports delivery of 3 kWh of heat, with approximately 2 kWh extracted from the other reservoir in a simple steady energy balance. Energy is conserved. COP is not an electricity-generation efficiency and varies with operating conditions.[^1]

Research into elastocaloric cooling uses stress-induced material changes to move heat. Its practical promise depends on complete systems: heat exchangers, actuators, fluid losses, fatigue, and cost.[^2]

:::try A 400°C engine
An ideal engine operates between 400°C and 20°C. Is its reversible maximum efficiency 95%?

:::answer Show the reasoning
No. Use kelvin: about 673 K and 293 K. The limit is $1-293/673\approx0.565$, or 56.5%. A real engine operating between those reservoirs achieves less.
:::
:::

[^1]: US Department of Energy. Heating and cooling performance metrics, including coefficient of performance. [Definitions and measurement context](https://www.energy.gov/cmei/femp/incorporate-minimum-efficiency-requirements-heating-and-cooling-products-federal).
[^2]: Zhou et al. (2025). Achieving kilowatt-scale elastocaloric cooling by a multi-cell architecture. [Study](https://www.nature.com/articles/s41586-024-08549-9).
