---
title: Power Grids, Batteries, and Solar Cells
subtitle: Match energy supply to demand across different places and times.
part: IV · Electricity and Control
---

## The lights turn on together

Thousands of people arrive home and switch on appliances. The electrical system must accommodate changing demand while maintaining operating limits. Installed generating capacity alone does not describe its ability to do this reliably.

**Power** is the rate of energy transfer; **energy** is the accumulated amount. A 2 kW load running for three hours uses 6 kWh. A battery rated at 10 kWh may store considerable energy yet have a power limit too low to start a particular machine. Its usable energy, state of charge, temperature, and conversion losses also matter.

## Why transmit at high voltage?

For a simplified fixed-power transfer, raising voltage reduces current. Resistive line losses are $I^2R$, so reducing current tenfold reduces these losses a hundredfold for the same resistance. Transformers make voltage conversion practical in AC systems; power electronics support other conversions, including high-voltage DC transmission.

AC grids coordinate voltage and frequency across interconnected equipment. Synchronous machines and inverter-based resources have different physical responses and control capabilities. Protection systems detect faults and isolate affected parts. Connections that improve sharing can also transmit disturbances, so reliability requires attention to the network as a whole.

## A battery has several report cards

Compare **specific energy** in Wh/kg, power capability, efficiency, cycle life, calendar life, temperature response, safety, materials, and cost. Improving one may worsen another. A laboratory electrode measurement is not automatically a full-cell result; a full-cell result is not automatically a complete-pack result.

For example, a 1 kg cell storing 200 Wh has a cell-level specific energy of 200 Wh/kg. Put it in a 0.5 kg enclosure with cooling and electronics, and the simple system-level value falls to about 133 Wh/kg before accounting for additional cells or constraints. Keep the measurement boundary attached to the number.

## Solar cells and scale

A photovoltaic cell converts some incoming light into electricity. Tandem cells combine absorbers suited to different parts of the spectrum. Research must address defects, interfaces, stability, uniformity, and manufacturing area, not only a record efficiency on a tiny device.[^1]

For a solar installation, annual energy also depends on sunlight, orientation, temperature, shading, and system losses. Nameplate power under test conditions is not annual energy production.

:::try Enough stored energy?
A load needs 500 W for four hours. A battery can deliver 1 kWh of usable energy. Does a 2 kW power rating make it sufficient?

:::answer Show the reasoning
No. The load needs 2 kWh. The battery's power rating is ample, but its usable energy is only half the requirement, even before any losses outside that quoted boundary.
:::
:::

[^1]: Artuk et al. (2025). 60 cm² perovskite-silicon tandem solar cells with an efficiency of 28.9% by homogeneous passivation. [Study](https://www.nature.com/articles/s41467-025-63673-y).
