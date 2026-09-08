---
title: Algebra
subtitle: Letters standing for numbers. How to solve for an unknown, rearrange any formula, handle exponents and logarithms, and why the square root of minus one turned out to be real.
part: II · The Core Toolkit
---

## How does an equation turn a problem into something solvable?

Chapter 3 told how al-Khwarizmi's recipes became Descartes's symbols. Algebra is what those symbols let you do: state a relationship once, for every number at once, and then manipulate it to find what you want to know. It is the grammar of every later chapter, and it is where most people's mathematics stopped making sense. This chapter is built to fix that.

## What a letter means

In $2x + 3 = 11$, the letter $x$ stands for a number we do not yet know. The equation is a sentence, "twice something, plus three, is eleven," and solving it means finding the something. In the formula $A = \pi r^2$, the letters stand for *any* radius and the area that goes with it: the formula is true for every circle at once, which is what letters are for.

An **expression** is a mathematical phrase ($2x + 3$); an **equation** says two expressions are equal ($2x + 3 = 11$). A **variable** is a letter whose value can change or is unknown; a **constant** is a fixed number. A **term** is a piece separated by plus or minus signs; the number multiplying a variable in a term is its **coefficient** (the 2 in $2x$). **Like terms** have the same variable part and can be combined: $3x + 5x = 8x$, but $3x + 5x^2$ cannot be simplified, because $x$ and $x^2$ are different things, like meters and square meters.

## The one rule of solving equations

An equation is a balance. Whatever you do to one side, do to the other, and it stays balanced. That is the entire theory. Solving means doing things to both sides until the unknown stands alone.

:::howto Solving a linear equation
1. Simplify each side: expand brackets, combine like terms.
2. Get all terms with the unknown on one side and all constants on the other, by adding or subtracting the same thing from both sides.
3. Divide both sides by the unknown's coefficient.
4. Check by substituting back.

*Example.* $3(x - 2) + 5 = 2x + 9$. Expand: $3x - 6 + 5 = 2x + 9$, so $3x - 1 = 2x + 9$. Subtract $2x$ from both sides: $x - 1 = 9$. Add 1: $x = 10$. Check: $3(8) + 5 = 29$ and $2(10) + 9 = 29$.
:::

The same idea rearranges formulas, which is the most practically useful skill in the chapter. Every formula in this guide can be solved for any letter in it.

:::howto Rearranging a formula
1. Identify the letter you want alone. Treat every other letter as if it were a number.
2. Undo, in reverse order, whatever is being done to it: undo addition with subtraction, multiplication with division, squaring with a square root, and so on, always to both sides.

*Example.* The compound-interest formula $A = P(1 + r)^t$ gives the amount $A$ from principal $P$, rate $r$, and years $t$. To find the rate you need to turn \$1,000 into \$2,000 in 10 years: divide both sides by $P$, giving $A/P = (1 + r)^t$; take the $t$-th root (on a calculator, raise to the power $1/t$), giving $(A/P)^{1/t} = 1 + r$; subtract 1: $r = (A/P)^{1/t} - 1 = 2^{0.1} - 1 \approx 0.072$, about 7.2 percent a year.
:::

## Exponents

An exponent counts repeated multiplication, and every rule for exponents follows from that one fact. This is the box the chapter is for.

:::howto Working with exponents
Write out what each side means and the rule appears.

1. **Multiplying powers of the same base: add the exponents.** $x^3 \times x^2 = (x \cdot x \cdot x)(x \cdot x) = x^5$. So $x^a x^b = x^{a+b}$. Note: the bases must match; $2^3 \times 5^2$ cannot be combined this way.
2. **Dividing: subtract the exponents.** $x^5 / x^2 = x^3$, because two of the five $x$'s cancel. So $x^a / x^b = x^{a-b}$.
3. **A power of a power: multiply the exponents.** $(x^2)^3 = x^2 \cdot x^2 \cdot x^2 = x^6$. So $(x^a)^b = x^{ab}$.
4. **A power of a product distributes.** $(xy)^3 = x^3 y^3$. But a power of a *sum* does not: $(x + y)^2$ is $x^2 + 2xy + y^2$, not $x^2 + y^2$. This is the most common error in algebra.
5. **Zero exponent is 1.** $x^3 / x^3 = 1$, and by rule 2 it is also $x^0$. So $x^0 = 1$ for any $x \ne 0$.
6. **Negative exponent means reciprocal.** $x^2 / x^5 = 1/x^3$, and by rule 2 it is $x^{-3}$. So $x^{-n} = 1/x^n$. A negative exponent is not a negative number; $2^{-3} = 1/8$.
7. **Fractional exponent means root.** $(x^{1/2})^2 = x^1 = x$ by rule 3, so $x^{1/2}$ is the square root. In general $x^{1/n} = \sqrt[n]{x}$ and $x^{m/n} = (\sqrt[n]{x})^m$. So $8^{2/3} = (\sqrt[3]{8})^2 = 2^2 = 4$.

*Example, scientific notation.* $(3 \times 10^8) \times (4 \times 10^{-5}) = 12 \times 10^{3} = 1.2 \times 10^4$. Multiply the front numbers, add the exponents, then tidy so the front number is between 1 and 10. To divide, divide the fronts and subtract the exponents. To add or subtract, first rewrite so the exponents match: $3 \times 10^8 + 4 \times 10^7 = 3 \times 10^8 + 0.4 \times 10^8 = 3.4 \times 10^8$.
:::

:::know Calculators and spreadsheets
- **Powers**: the `^` key (or `x^y`). $2^{0.1}$ is `2^0.1`. In a spreadsheet, `=1.07^10`.
- **Scientific notation**: `E` or `EE` means "times ten to the"; `1E-5` is $10^{-5}$. Spreadsheets display `1.2E+04` for $1.2 \times 10^4$.
- **Logarithms**: `LOG` is base 10; `LN` is base $e$. Spreadsheets also have `LOG(x, b)` for any base.
- **Angles** (chapter 5): check the mode is `DEG` when working in degrees. A calculator left in radians gives $\sin 30 = -0.988$ instead of 0.5, the most common error in trigonometry.
- **Order of operations**: a calculator applies the standard order, so type parentheses around anything you mean as a unit: `(1+0.07)^10`, not `1+0.07^10`.
:::

:::warning
$x^2 \times x^3$ is $x^5$, not $x^6$. You add exponents when multiplying powers; you multiply them when raising a power to a power. And $2^3 \times 2^4 = 2^7 = 128$, not $4^7$: the base stays the same.
:::

## Logarithms

A **logarithm** asks the reverse question of an exponent. Where $10^3 = 1000$ answers "what is ten cubed?", $\log_{10} 1000 = 3$ answers "what power of ten gives a thousand?" The logarithm of a number is the exponent you need. That is all it is.

Three bases matter. **Base 10** ($\log_{10}$, often just $\log$) is for orders of magnitude: the Richter scale, decibels, and pH are all base-10 logs, which is why a magnitude 7 earthquake has ten times the ground-motion amplitude, and releases about 32 times the energy, of a magnitude 6.[^1] **Base 2** ($\log_2$) is for anything that doubles: a quantity that doubles 10 times has grown by $2^{10} = 1024$, and $\log_2$ of a number tells you how many doublings it took. **Base $e$**, the **natural logarithm** $\ln$, uses the constant $e \approx 2.71828$, which chapter 6 explains; it is the base that makes calculus tidy, and calculators and spreadsheets give it its own key, LN (their LOG key is base 10).

:::howto Using the logarithm rules
Each rule is an exponent rule read backward.

1. **Log of a product is the sum of the logs.** $\log(ab) = \log a + \log b$, because multiplying powers adds exponents. This is what made Napier's tables work: to multiply two large numbers, look up their logs, add, and look up the result.
2. **Log of a quotient is the difference.** $\log(a/b) = \log a - \log b$.
3. **Log of a power pulls the exponent out front.** $\log(a^n) = n \log a$. This is the rule that solves for an unknown exponent.
4. **Change of base.** $\log_b x = \ln x / \ln b$, so any log can be computed from the natural log on a calculator.

*Example: how long to double?* Money grows by 7 percent a year: after $t$ years it is multiplied by $1.07^t$. Doubling means $1.07^t = 2$. Take logs of both sides: $t \ln 1.07 = \ln 2$, so $t = \ln 2 / \ln 1.07 = 0.693 / 0.0677 \approx 10.2$ years. The **rule of 70** (chapter 14) is this calculation approximated: doubling time is about $70 / (\text{percent rate})$, because $\ln 2 \approx 0.69$.
:::

## Expanding and factoring

**Expanding** multiplies brackets out; **factoring** puts them back. They are inverse skills, and factoring is the harder one because it requires recognizing a pattern rather than following a procedure.

To expand $(a + b)(c + d)$, multiply every term in the first bracket by every term in the second: $ac + ad + bc + bd$. Three special cases are worth memorizing because they appear everywhere:

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$
$$(a + b)(a - b) = a^2 - b^2$$

The third, the **difference of squares**, is behind the mental-arithmetic trick in chapter 2: $19 \times 21 = (20 - 1)(20 + 1) = 400 - 1$.

:::howto Factoring a quadratic
To factor $x^2 + bx + c$ into $(x + p)(x + q)$, you need two numbers $p$ and $q$ that *multiply* to $c$ and *add* to $b$.

1. List the factor pairs of $c$ (including negative pairs if $c$ is positive and $b$ is negative, or mixed signs if $c$ is negative).
2. Find the pair that sums to $b$.
3. Write the factors and check by expanding.

*Example.* $x^2 + 5x + 6$: pairs for 6 are (1, 6) and (2, 3); 2 + 3 = 5, so it is $(x + 2)(x + 3)$. And $x^2 - x - 12$: pairs for −12 include (3, −4), which sum to −1, so it is $(x + 3)(x - 4)$. If no integer pair works, use the quadratic formula below.
:::

## Quadratic equations

A **quadratic** equation has an $x^2$ and nothing higher: $ax^2 + bx + c = 0$. It describes a thrown ball, a profit that rises then falls, an area given a perimeter, and it has been solved for four thousand years, first by Babylonian recipe and then, in the form below, by a formula that every student memorizes and few are told the reason for.

:::math The quadratic formula
For $ax^2 + bx + c = 0$ with $a \ne 0$,
$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
The $\pm$ means there are two answers, one with plus and one with minus. The quantity under the root, $b^2 - 4ac$, is the **discriminant**, and it tells you how many real answers exist: two if it is positive, one if it is zero, none if it is negative (the ball never reaches that height).

*Where it comes from.* Divide by $a$, move the constant across, and then add $\left(\frac{b}{2a}\right)^2$ to both sides so the left side becomes a perfect square: $\left(x + \frac{b}{2a}\right)^2 = \frac{b^2}{4a^2} - \frac{c}{a}$. Take square roots and solve. This is **completing the square**, and it is exactly al-Khwarizmi's method with symbols instead of sentences.[^2]

*Example.* A ball thrown upward at 20 m/s from a height of 2 m has height $h = 2 + 20t - 4.9t^2$ after $t$ seconds (the 4.9 is half of gravity's acceleration, 9.8 m/s²). When does it land? Set $h = 0$: $-4.9t^2 + 20t + 2 = 0$, so $a = -4.9$, $b = 20$, $c = 2$. Then $t = (-20 \pm \sqrt{400 + 39.2}) / (-9.8)$. The root is $\sqrt{439.2} \approx 20.96$; the positive answer is $t = (-20 - 20.96)/(-9.8) \approx 4.18$ seconds. The other root, $(-20 + 20.96)/(-9.8) \approx -0.10$ seconds, is before the throw and is discarded.
:::

## Inequalities

An **inequality** says one thing is bigger than another: $2x + 3 > 11$. Solve it like an equation, with one exception: multiplying or dividing both sides by a *negative* number flips the direction. From $-2x > 6$, dividing by −2 gives $x < -3$. (Check: $x = -4$ gives $-2(-4) = 8 > 6$, correct.) Inequalities describe budgets, safety limits, and every optimization constraint in chapter 11.

## Systems of equations

Two unknowns need two equations. If tickets cost \$8 for adults and \$5 for children, and 100 tickets brought in \$650, then $a + c = 100$ and $8a + 5c = 650$. From the first, $c = 100 - a$; substitute into the second: $8a + 5(100 - a) = 650$, so $3a = 150$ and $a = 50$. Fifty of each. This **substitution** method works for any two linear equations; **elimination** (adding or subtracting the equations to cancel a variable) is often faster; and chapter 11 shows how matrices solve a hundred equations at once by the same idea.

## Imaginary numbers

The discriminant can be negative, and then the quadratic formula asks for the square root of a negative number, which no real number is. For three centuries mathematicians treated such answers as meaning "no solution." Then, in Cardano's cubic formula (chapter 3), square roots of negatives appeared *in the middle* of calculations whose final answers were perfectly real. Bombelli found in 1572 that if you simply followed the rules of algebra with a symbol for $\sqrt{-1}$, the impossible parts cancelled and the right answer emerged.[^3]

That symbol is $i$, defined by $i^2 = -1$. A **complex number** is $a + bi$: a real part and an imaginary part. They add and multiply by ordinary algebra, replacing $i^2$ with $-1$ wherever it appears: $(2 + 3i)(1 - i) = 2 - 2i + 3i - 3i^2 = 2 + i + 3 = 5 + i$. The name "imaginary," Descartes's sneer, stuck, and it is a bad name. Complex numbers are as real as negatives, and they turned out to be the natural language for anything that rotates or oscillates: alternating current, radio, quantum mechanics, and the signal processing inside every phone.[^4] Gauss gave the first widely accepted proof in 1799 (a gap was filled later) that every polynomial equation has exactly as many complex solutions as its degree, counting repeated solutions, the **fundamental theorem of algebra**. (A **polynomial** is a sum of powers of $x$ with coefficients; its **degree** is the highest power.) With $i$ the number system is finally complete: no equation ever again forces a new kind of number.[^5]

:::formulas
| Rule | Formula |
|---|---|
| Multiply powers | $x^a x^b = x^{a+b}$ |
| Divide powers | $x^a / x^b = x^{a-b}$ |
| Power of a power | $(x^a)^b = x^{ab}$ |
| Zero, negative, fractional exponents | $x^0 = 1,\quad x^{-n} = 1/x^n,\quad x^{1/n} = \sqrt[n]{x}$ |
| Log rules | $\log(ab) = \log a + \log b,\quad \log(a/b) = \log a - \log b,\quad \log(a^n) = n\log a$ |
| Change of base | $\log_b x = \ln x / \ln b$ |
| Square of a sum | $(a+b)^2 = a^2 + 2ab + b^2$ |
| Difference of squares | $a^2 - b^2 = (a+b)(a-b)$ |
| Quadratic formula | $x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| Imaginary unit | $i^2 = -1$ |
:::

:::know
- Whatever you do to one side of an equation, do to the other. That is the whole method.
- Exponents add when you multiply powers, multiply when you raise a power to a power. $(x+y)^2 \ne x^2 + y^2$.
- A logarithm is an exponent: $\log_b x$ is the power of $b$ that gives $x$. Logs turn multiplication into addition and pull exponents down to where you can solve for them.
- Doubling time at $r$ percent is about $70/r$ periods.
- Dividing an inequality by a negative flips it.
- Complex numbers complete the number system and describe anything that rotates.
:::

:::try Put the idea to work
A taxi charges 4 to start and 2 per kilometer. You pay 18. Write an equation, solve it, and check the answer in the original situation.

:::answer Show the reasoning
Let x be the kilometers: 4 + 2x = 18. Subtract 4 and divide by 2 to get x = 7. Seven kilometers cost 14 plus the starting charge of 4, giving 18. Naming the unknown and checking its units are part of the solution.
:::
:::

## Summary

- Letters stand for unknown or arbitrary numbers; an equation is a balance, and solving means undoing operations on both sides until the unknown is alone. The same skill rearranges any formula.
- Exponent rules all follow from "repeated multiplication"; logarithms are exponents in reverse and solve for unknown powers.
- Expanding multiplies brackets out; factoring reverses it; three special products recur everywhere.
- The quadratic formula is completing the square, al-Khwarizmi's method in symbols.
- Imaginary numbers appeared as a nuisance in the cubic formula and became the language of rotation and oscillation; with them, algebra is complete.

[^1]: U.S. Geological Survey. "Earthquake Magnitude, Energy Release, and Shaking Intensity." [usgs.gov](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity)
[^2]: OpenStax (2021). *Algebra and Trigonometry 2e*. Section 2.5, "Quadratic Equations," derives the formula by completing the square. [openstax.org](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-5-quadratic-equations)
[^3]: Bombelli, R. (1572). *L'Algebra*. Bologna. Discussed in Katz, V. J. (2009), *A History of Mathematics*, 3rd ed., chapter 12.
[^4]: Nahin, P. J. (1998). *An Imaginary Tale: The Story of √−1*. Princeton University Press.
[^5]: Gauss, C. F. (1799). *Demonstratio nova theorematis omnem functionem algebraicam rationalem integram unius variabilis in factores reales primi vel secundi gradus resolvi posse*. Doctoral dissertation, Helmstedt. Discussed in Fine, B., Rosenberger, G. (1997). *The Fundamental Theorem of Algebra*. New York: Springer. [doi:10.1007/978-1-4612-1928-6](https://doi.org/10.1007/978-1-4612-1928-6)
