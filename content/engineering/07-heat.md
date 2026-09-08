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

:::deeper Follow one circuit around a refrigerator

### Move heat by changing pressure and temperature

The refrigerant circulates through four main components. In the evaporator, it absorbs heat from the space being cooled, often while boiling at low pressure. A compressor then raises the vapor's pressure and temperature by supplying work. In the condenser, the hotter refrigerant gives heat to the surroundings and usually condenses. An expansion device drops its pressure before the next pass through the evaporator.

The pressure changes matter because a substance's boiling temperature depends on pressure. The cycle arranges for heat to flow into a colder refrigerant on one side and out of a hotter refrigerant on the other. It does not require heat to flow spontaneously from a colder body into a hotter one without an accompanying process and energy input.

### Write the energy balance

Suppose a simplified steady refrigerator removes 120 W from its interior while the compressor and associated input consume 60 W. Ignoring other transfers across the selected boundary, it rejects 180 W to the room. Its cooling coefficient of performance is 120/60 = 2. If the useful output were heating the room, the corresponding heating COP would be 180/60 = 3.

Cooling and heating COP therefore use different numerators. Neither is the percentage efficiency of converting input energy into output energy. The device transports energy as well as receiving work.

With the door open inside a closed room, the evaporator extracts heat from that room while the condenser returns the extracted heat plus the input work. The net effect is room heating. The cold surface remains real, but the system boundary determines the room-level result.

### Why colder weather can make heating harder

A heat pump working across a larger temperature difference generally faces a more demanding task. In a reversible idealization, heating COP is T_hot/(T_hot − T_cold), using absolute temperatures. With reservoirs at 300 K and 280 K, that expression gives 15; at 300 K and 260 K, it gives 7.5. These are theoretical limits for the specified reservoirs, not realistic product predictions.

Real equipment also has heat-exchanger temperature differences, pressure losses, compressor inefficiency, controls, and sometimes defrost cycles or supplementary heating. Seasonal performance therefore depends on the range of conditions and operating hours, not just a favorable laboratory point.

### A better heat exchanger is still a compromise

More surface area can help transfer heat with a smaller temperature difference. Fins and narrow passages can provide that area, but may add flow resistance, fan power, fouling, noise, cost, or size. The best component-level heat transfer does not necessarily minimize whole-system energy use.

Insulation and air leakage belong in the same story. Reducing the heat entering a refrigerator lowers the load the cycle must remove. But thick insulation can reduce useful interior volume for a fixed external size. Design choices involve performance and the purpose of the appliance together.

When reading a cooling breakthrough, ask what produced the temperature change, how heat was moved continuously, what work was counted, and whether pumps and controls were included. A material that changes temperature under stress is one part of a possible refrigerator; a complete cycle must transfer heat repeatedly while recovering or supplying mechanical work.
:::

:::try A 400°C engine
An ideal engine operates between 400°C and 20°C. Is its reversible maximum efficiency 95%?

:::answer Show the reasoning
No. Use kelvin: about 673 K and 293 K. The limit is $1-293/673\approx0.565$, or 56.5%. A real engine operating between those reservoirs achieves less.
:::
:::

[^1]: US Department of Energy. Heating and cooling performance metrics, including coefficient of performance. [Definitions and measurement context](https://www.energy.gov/cmei/femp/incorporate-minimum-efficiency-requirements-heating-and-cooling-products-federal).
[^2]: Zhou et al. (2025). Achieving kilowatt-scale elastocaloric cooling by a multi-cell architecture. [Study](https://www.nature.com/articles/s41586-024-08549-9).
