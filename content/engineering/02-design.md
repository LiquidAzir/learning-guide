---
title: Requirements, Models, and Useful Estimates
subtitle: Turn “make it better” into something measurable, then check whether the answer is even plausible.
part: I · Designing Something That Works
---

## Better in which way?

“Build a better kettle” is an aspiration. “Heat one kilogram of water from 20°C to 100°C within four minutes using a specified electrical supply” is a testable performance requirement. It is still incomplete: safety, durability, accessibility, and cost also matter.

A **requirement** states an outcome or constraint. A **design variable** is something the designer can choose, such as heater power or wall thickness. An **objective** ranks otherwise acceptable choices. Keeping these separate prevents an attractive prototype from redefining success after the fact.

## Estimate before simulating

For a first estimate, the heat needed is:

$$Q=mc\Delta T.$$

Here mass $m=1$ kg, water's approximate specific heat $c=4{,}180$ J/(kg·K), and temperature rise $\Delta T=80$ K. The required heat is about 334,000 J. A 2,000 W heater supplies 2,000 J each second, giving an ideal heating time of roughly 167 seconds.

If 85% of electrical input reaches the water during heating, the estimate becomes $334{,}000/(0.85\times2{,}000)\approx196$ seconds. The remaining energy may heat the container or escape to the surroundings. This calculation ignores evaporation and changing heat losses, and boiling temperature depends on pressure. It is an order-of-magnitude check, not a product certificate.

## Dimensions catch mistakes

Energy divided by power gives time: joules divided by joules per second yields seconds. An answer in seconds obtained by multiplying energy and power has failed before you examine its numerical value.

**Dimensional analysis** checks the kinds of quantities in an equation. **Sensitivity analysis** asks how much the answer changes when an input changes. In this simple model, doubling the water mass doubles heating time if power and efficiency remain fixed. That implication is easy to test.

## Verification and validation

**Verification** asks whether the design or calculation meets its specified requirements. **Validation** asks whether those requirements and the resulting system meet the actual need.[^1] A perfectly verified kettle that nobody can comfortably lift has a validation problem.

Testing should target uncertainties and failure modes, not only the expected operating point. Separate measured quantities from assumed ones and record uncertainty where it could affect the decision.

:::deeper Design the kettle before choosing its heater

### Turn a wish into requirements

“Make it boil quickly” leaves too much unspecified. How much water, from what starting temperature, at what ambient pressure, using what supply? A requirement such as heating one kilogram of water through an 80 K rise in four minutes can be calculated and tested. It still needs tolerances and a definition of the test conditions.

Using a specific heat of roughly 4,180 J/(kg·K), the water needs about 334,400 J. Dividing by 240 seconds gives approximately 1,393 W delivered to the water. If an illustrative overall transfer efficiency is 85%, electrical input would need to average about 1,639 W. That efficiency is an assumed design estimate, not a guarantee for every kettle.

The vessel also warms up, and heat escapes to the room. Some losses vary during the cycle. A prototype measurement can reveal whether the simple estimate is adequate or whether a more detailed transient model is needed.

### Requirements can conflict

A larger heater can reduce heating time while increasing current, heat density, and demands on connectors. More insulation reduces losses but may complicate construction, cleaning, or recycling. A large handle can improve grip while increasing size. Engineering judgment involves tracking those tradeoffs against the intended use.

Verification asks whether the built device meets specified requirements. Validation asks whether those requirements produced something useful for its intended users. A kettle can pass the heating-time test and still be awkward to fill or pour.

Keep assumptions beside the calculation. If a later measurement shows lower efficiency, revise the power estimate rather than quietly retaining a favorable input. A good design record makes it possible for another engineer to reconstruct why a choice was made and which observation would require changing it.
:::

:::try A suspicious estimate
A calculation predicts that a 1 kW heater delivers 600 kJ in one minute. Find the error.

:::answer Show the reasoning
1 kW is 1 kJ per second. In 60 seconds it delivers 60 kJ, not 600 kJ. Delivering 600 kJ in one minute would require 10 kW before losses.
:::
:::

[^1]: NASA. *Systems Engineering Handbook*, systems design and verification/validation guidance. [Handbook](https://www.nasa.gov/reference/systems-engineering-handbook/).
