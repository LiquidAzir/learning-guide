---
title: Estimation and Computation
subtitle: How to get any number to within a factor of ten in your head, how computers actually do arithmetic and where they get it wrong, and how to check a result before you trust it.
part: V · Math in Use
---

## When should you estimate instead of calculate exactly?

Chapter 1 promised that estimation is the most useful single skill in the guide. This chapter delivers it, then turns to the machines that now do the exact arithmetic, because knowing what they do, and what they cannot, is the other half of numerical competence. The chapter ends with a habit: how to check any number before believing it.

## Fermi estimation

Enrico Fermi, the physicist, was famous for answering questions like "how many piano tuners are there in Chicago?" to within a factor of two or three, in a minute, with no data.[^1] The method is not cleverness but decomposition: break the unknown into pieces you can guess, guess each to the nearest power of ten, and multiply. Errors in the pieces tend to cancel, and the result is usually right to within a factor of ten, which is all most decisions need.

:::howto Fermi estimation
1. **Restate the question** as something you can decompose. "How many piano tuners in Chicago?" becomes "how many pianos, how often are they tuned, how many can one tuner do in a year?"
2. **Estimate each factor** to one significant figure. Chicago: about 3 million people, roughly 1 million households. Pianos: perhaps 1 in 20 households, so 50,000. Tunings: once a year each, 50,000 tunings. A tuner does perhaps 4 a day, 250 days a year, 1,000 a year.
3. **Multiply and divide**: $50{,}000 / 1{,}000 = 50$ tuners.
4. **Sanity-check against anything you know.** A phone directory in Fermi's day listed about 80. Within a factor of two.

*Example 2: how many seconds in a year?* $365 \times 24 \times 3600 \approx 400 \times 25 \times 3600 = 10{,}000 \times 3{,}600 = 3.6 \times 10^7$. Actual: $3.15 \times 10^7$. Handy to remember as $\pi \times 10^7$.

*Example 3: is a claim plausible?* The oft-quoted "the average American throws away 4.4 pounds of trash a day." Check: 330 million people × 4.4 lb × 365 days $\approx 5 \times 10^{11}$ lb, about 250 million tons a year. The EPA figure is about 290 million tons.[^2] Plausible.
:::

The tool that makes this work is **scientific notation** (chapter 2): write everything as a number between 1 and 10 times a power of ten, multiply the front numbers, add the exponents. Nobody can multiply 330,000,000 by 4.4 by 365 in their head; anyone can do $3 \times 4 \times 4 = 48$ and $8 + 0 + 2 = 10$, giving $5 \times 10^{11}$.

:::know
Some anchors worth memorizing, to one significant figure:
- World population 8 billion; United States 340 million; a large city 1 to 10 million.
- A year is $3 \times 10^7$ seconds; a human life about $2.5 \times 10^9$ seconds, or 30,000 days.
- Light travels $3 \times 10^8$ m/s; Earth's circumference is 40,000 km; the Sun is 150 million km away.
- A human body is about 70 kg and 60 percent water; a car is about 1,500 kg.
- US GDP is about \$29 trillion, roughly \$85,000 per person; the federal budget about \$7 trillion.
- A sheet of paper is 0.1 mm thick; a human hair 0.1 mm wide; a red blood cell 8 µm; an atom 0.1 nm.
- $2^{10} \approx 10^3$, so $2^{20} \approx 10^6$ and $2^{30} \approx 10^9$: kilo, mega, giga.
:::

## Orders of magnitude and the powers of ten

An **order of magnitude** is a factor of ten. Two numbers are "of the same order" if their ratio is less than 10. Thinking in orders of magnitude is what lets you tell a plausible claim from an impossible one without a calculator: a proposal to save \$10 million from a \$7 trillion budget is not a savings plan but a rounding error (it is 0.00014 percent); a "billion-dollar" scandal in a \$29 trillion economy is 0.003 percent of a year's output. Politicians and headlines exploit the fact that million, billion, and trillion sound similar. A million seconds is 12 days; a billion seconds is 32 years; a trillion seconds is 32,000 years, most of human history.

## How computers store numbers

A computer stores everything in **binary**, base 2: the digits are 0 and 1, and each place is worth twice the one to its right. The number 13 is $1101_2$ ($8 + 4 + 1$). Eight binary digits, a **byte**, hold 256 values; 32 bits hold about 4 billion; 64 bits about $1.8 \times 10^{19}$. Whole numbers stored this way are exact but bounded: a program counting in 32 bits fails at 2,147,483,647, which is why a 2014 YouTube video's view counter broke and why some systems will fail in the year 2038, when the seconds-since-1970 count overflows a 32-bit signed integer.[^3]

Fractions are harder. A computer's **floating-point** number is scientific notation in binary: a sign, a string of significant digits, and an exponent. The standard **double precision** format uses 64 bits and carries about 16 decimal digits of precision.[^4] That sounds like plenty, and for most purposes it is. But it means that most decimals cannot be stored exactly. One tenth in binary is $0.0001100110011\ldots$, repeating forever, like one third in decimal, so it is rounded, and $0.1 + 0.2$ in almost every programming language gives $0.30000000000000004$.[^5] This is not a bug; it is the nature of representing infinitely many numbers with finitely many bits.

:::warning
Never test two floating-point numbers for exact equality, and never do money in floating point: a bank that stores \$0.10 as a binary fraction accumulates cents of error across millions of transactions. Financial software uses integers (count the cents) or decimal types. The Vancouver Stock Exchange index lost about half its value between 1982 and 1983 not from any market fall but from truncating instead of rounding at each of about 3,000 daily updates; when recomputed correctly, the index jumped from 524 to 1,098 overnight.[^6]
:::

## Where computer arithmetic fails

Three failure modes account for most numerical disasters, and knowing their names is protective.

**Rounding error accumulation.** Each floating-point operation introduces an error of about one part in $10^{16}$. Do a billion of them and the errors can add up to one part in $10^7$, or worse if they compound. A Patriot missile battery in 1991 tracked time in tenths of a second stored in binary; after 100 hours of running, the accumulated error was a third of a second, the tracking gate was off by nearly 700 meters, and an incoming missile was missed; 28 soldiers died.[^7]

**Catastrophic cancellation.** Subtracting two nearly equal numbers destroys precision: $1.23456789 - 1.23456788 = 0.00000001$, and if both inputs were only known to 8 digits, the answer is known to none. Any formula that subtracts large similar quantities to get a small difference (the textbook quadratic formula is one, when $b^2 \gg 4ac$) must be rearranged before a computer runs it.[^8]

**Ill-conditioning.** Some problems amplify small input errors into large output errors regardless of how carefully they are computed. Solving a system of equations whose matrix is nearly singular (chapter 11), or extrapolating a polynomial fit far past the data, can turn a rounding error in the last digit into nonsense in the first. Numerical analysts measure this by the **condition number**, and a problem with a condition number of $10^{12}$ loses 12 of your 16 digits before you begin.[^9]

## How computers compute functions

A calculator has no table of sines. It computes $\sin x$, $e^x$, and $\ln x$ from scratch each time, and it is worth knowing how, because the methods are the algorithms of chapters 7 and 8.

**Series.** For $e^x$ and $\sin x$, add the first terms of the Taylor series (chapter 8) until the terms are smaller than the precision wanted. A dozen terms give 16 digits for moderate $x$; larger arguments are first reduced, using $e^{x} = (e^{x/2})^2$ or the periodicity of sine.

**Newton's method.** To find where a function is zero, guess, then slide down the tangent line to where *it* hits zero, and repeat. Each step roughly doubles the number of correct digits. For square roots, solving $x^2 - a = 0$ this way gives the rule $x_{\text{new}} = \tfrac{1}{2}(x + a/x)$: to find $\sqrt{50}$, start at 7, get $\tfrac{1}{2}(7 + 50/7) = 7.0714$, then 7.0710678, correct to 8 digits in two steps.[^10] Chapter 2's mental square-root trick is one step of this.

:::howto Newton's method for solving any equation
To solve $f(x) = 0$:
1. Start from a guess $x_0$ near the answer.
2. Compute $x_{\text{new}} = x - f(x)/f'(x)$, using the derivative from chapter 7.
3. Repeat until the answer stops changing.

*Example.* What interest rate turns \$1,000 into \$2,000 with 10 years of \$60 annual deposits plus the initial sum? The equation has no algebraic solution. Define $f(r) = 1000(1+r)^{10} + 60\frac{(1+r)^{10} - 1}{r} - 2000$; guess $r = 0.05$; Newton's method converges to $r \approx 0.028$, about 2.8 percent, in three or four steps. This is what a spreadsheet's RATE and IRR functions do.
:::

**Numerical integration and simulation.** Integrals with no formula (chapter 8) are done by Simpson's rule or its relatives. Differential equations, which describe weather, orbits, and epidemics, are solved by stepping forward in small time increments: compute the rate now, move a little, recompute. Weather models step a grid of a billion points forward every few simulated seconds; the accumulation of rounding and the sensitivity of the equations (chaos) is why forecasts beyond about ten days are no better than climatology, a limit that is mathematical, not a matter of better computers.[^11]

## Monte Carlo: computing with randomness

Some quantities are easiest to estimate by simulating random trials and counting. To find the probability that a complicated system fails, simulate it a million times with random inputs and count the failures. To compute an integral in a hundred dimensions, where the rectangles of chapter 8 would number $10^{100}$, sample random points instead; the error shrinks like $1/\sqrt{n}$ regardless of dimension, which is the central limit theorem of chapter 10 turned into an algorithm. Stanislaw Ulam conceived the method in 1946 while playing solitaire during recovery from an illness, and von Neumann implemented it for the hydrogen bomb; it is now how insurance is priced, how particle detectors are designed, and how AlphaGo chose its moves.[^12]

## Checking a result

:::howto Checking any calculated number
1. **Estimate first.** Before computing, write down what the answer should roughly be. If the exact answer disagrees by a factor of ten, one of them is wrong, and it is usually a slipped decimal point or a wrong unit.
2. **Check the units.** Dollars per year, not dollars. Square meters, not meters. If units do not work out, the formula is wrong (chapter 14).
3. **Check limiting cases.** Set a variable to zero or to something huge. Does the formula do what it should? A loan payment formula that gives a nonzero payment at zero principal is wrong.
4. **Check the sign and the direction.** Should this go up when that goes up? Does it?
5. **Compute it a second way.** A different formula, a different decomposition, a different tool. Agreement between two independent methods is strong evidence; agreement between a method and itself is none.
6. **Ask whether the precision is real.** A result of 1,234.5678 from inputs known to two digits should be reported as 1,200.
:::

:::formulas
| Idea | Formula |
|---|---|
| Scientific notation product | $(a \times 10^m)(b \times 10^n) = ab \times 10^{m+n}$ |
| Seconds in a year | $\approx \pi \times 10^7$ |
| Binary place values | $\ldots, 16, 8, 4, 2, 1$; $2^{10} \approx 10^3$ |
| Double precision | 64 bits, about 16 significant decimal digits, range to $\approx 10^{308}$ |
| Newton's method | $x_{\text{new}} = x - \dfrac{f(x)}{f'(x)}$ |
| Newton for square root | $x_{\text{new}} = \tfrac{1}{2}\left(x + \dfrac{a}{x}\right)$ |
| Monte Carlo error | $\propto \dfrac{1}{\sqrt{n}}$, independent of dimension |
:::

:::know
- Decompose, round each piece to one figure, multiply the powers of ten. Fermi estimates land within a factor of ten and catch most errors.
- Million, billion, trillion differ by factors of a thousand: 12 days, 32 years, 32,000 years in seconds.
- Computers store decimals approximately; $0.1 + 0.2 \ne 0.3$ in binary. Never use floating point for money or test it for equality.
- The three numerical failures: accumulated rounding, cancellation of nearly equal numbers, ill-conditioned problems.
- Calculators compute functions by series and Newton's method; simulations step differential equations forward; Monte Carlo estimates by random sampling.
- Estimate first, check units, check limits, compute a second way.
:::

:::try Put the idea to work
A calculation returns 12.437891 m from measurements recorded only to the nearest meter. What should make you suspicious of presenting all those digits?

:::answer Show the reasoning
The calculator's precision exceeds the precision of the inputs. Extra output digits do not create extra information about the measured object. Estimate the effect of input uncertainty and round accordingly; also check whether the model introduces a larger error than the measurements.
:::
:::

## Summary

- Fermi estimation decomposes a question into factors guessed to one significant figure and multiplies in scientific notation; it is accurate to a factor of ten and is the best defense against implausible numbers.
- Computers use binary integers, which are exact but bounded, and floating point, which is approximate; most decimals have no exact binary form.
- Rounding accumulation, catastrophic cancellation, and ill-conditioning are the three ways numerical computation fails, and each has caused real disasters.
- Functions are computed by series and Newton's method; integrals and differential equations by stepping; high-dimensional problems by Monte Carlo sampling.
- Every result deserves an estimate, a unit check, a limiting case, and a second method before it is believed.

[^1]: Von Baeyer, H. C. (1993). *The Fermi Solution: Essays on Science*. New York: Random House. Chapter 1. Weinstein, L., Adam, J. A. (2008). *Guesstimation: Solving the World's Problems on the Back of a Cocktail Napkin*. Princeton University Press.
[^2]: U.S. Environmental Protection Agency. *National Overview: Facts and Figures on Materials, Wastes and Recycling*: 292.4 million tons of municipal solid waste in 2018, 4.9 pounds per person per day. [epa.gov](https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/national-overview-facts-and-figures-materials)
[^3]: The Open Group (2018). *IEEE Std 1003.1-2017 (POSIX)*, on `time_t`. On the 2038 problem: Kuhn, M. "The Year 2038 problem." [cl.cam.ac.uk](https://www.cl.cam.ac.uk/~mgk25/time/c/). The 2014 YouTube "Gangnam Style" counter overflow was acknowledged by Google on 1 December 2014.
[^4]: IEEE Computer Society (2019). *IEEE Standard for Floating-Point Arithmetic*, IEEE Std 754-2019. [doi:10.1109/IEEESTD.2019.8766229](https://doi.org/10.1109/IEEESTD.2019.8766229)
[^5]: Goldberg, D. (1991). "What Every Computer Scientist Should Know About Floating-Point Arithmetic." *ACM Computing Surveys*, 23(1), 5–48. [doi:10.1145/103162.103163](https://doi.org/10.1145/103162.103163). Demonstration at [0.30000000000000004.com](https://0.30000000000000004.com/).
[^6]: Quinn, K. (1983). "Ever Had Problems Rounding Off Figures? This Stock Exchange Has." *The Wall Street Journal*, 8 November 1983. Discussed in Huckle, T., Neckel, T. (2019). *Bits and Bugs: A Scientific and Historical Review of Software Failures in Computational Science*. Philadelphia: SIAM, §2.2. [doi:10.1137/1.9781611975567](https://doi.org/10.1137/1.9781611975567)
[^7]: U.S. General Accounting Office (1992). *Patriot Missile Defense: Software Problem Led to System Failure at Dhahran, Saudi Arabia*. GAO/IMTEC-92-26. [gao.gov](https://www.gao.gov/products/imtec-92-26)
[^8]: Higham, N. J. (2002). *Accuracy and Stability of Numerical Algorithms*, 2nd ed. Philadelphia: SIAM. Chapter 1, §1.8 on cancellation and §1.20 on the quadratic formula. [doi:10.1137/1.9780898718027](https://doi.org/10.1137/1.9780898718027)
[^9]: Trefethen, L. N., Bau, D. (1997). *Numerical Linear Algebra*. Philadelphia: SIAM. Lecture 12, "Conditioning and Condition Numbers."
[^10]: OpenStax (2016). *Calculus Volume 1*. Section 4.9, "Newton's Method." [openstax.org](https://openstax.org/books/calculus-volume-1/pages/4-9-newtons-method). The square-root iteration is also the Babylonian method of chapter 3.
[^11]: Lorenz, E. N. (1963). "Deterministic Nonperiodic Flow." *Journal of the Atmospheric Sciences*, 20(2), 130–141. [doi:10.1175/1520-0469(1963)020<0130:DNF>2.0.CO;2](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2). Bauer, P., Thorpe, A., Brunet, G. (2015). "The quiet revolution of numerical weather prediction." *Nature*, 525, 47–55. [doi:10.1038/nature14956](https://doi.org/10.1038/nature14956)
[^12]: Metropolis, N. (1987). "The Beginning of the Monte Carlo Method." *Los Alamos Science*, 15, 125–130. [sgp.fas.org](https://sgp.fas.org/othergov/doe/lanl/pubs/00326866.pdf). Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529, 484–489. [doi:10.1038/nature16961](https://doi.org/10.1038/nature16961)
