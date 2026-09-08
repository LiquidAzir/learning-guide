---
title: Calculus II · Accumulation
subtitle: The integral. How to add up infinitely many infinitely small pieces, why that is the reverse of finding a slope, and what it lets you compute: areas, totals, averages, and the shape of every curve in the world.
part: III · Change and Chance
---

## How do tiny contributions add up to a total?

Chapter 7 took a function apart to find how fast it changes at each instant. This chapter does the opposite: given the rate at each instant, it puts the total back together. The two operations turn out to be inverses, a fact so surprising and useful that it is called the fundamental theorem of calculus. Together they are the most powerful computational idea humans have had.

## The problem of area

Rectangles are easy: length times width. Triangles are half a rectangle. But what is the area under a curve, say the region between the parabola $y = x^2$ and the $x$-axis from 0 to 1? No formula from chapter 5 applies, because one edge is curved.

Archimedes solved problems like this around 250 BCE by **exhaustion**: fill the region with thin rectangles, add their areas, and notice that as the rectangles get thinner the total closes in on a definite number.[^1] That is the integral, and the only thing the seventeenth century added was a systematic way to compute the number without adding a million rectangles.

{{fig:integral-area|The integral as area. Approximate the region under a curve by rectangles; the sum of their areas approaches the exact area as the rectangles get thinner. The fundamental theorem says that exact area equals F(b) − F(a), where F is any function whose derivative is the curve.}}

:::math The definite integral
Split the interval from $a$ to $b$ into $n$ strips of width $\Delta x$. On each strip, draw a rectangle up to the curve; its area is height times width, $f(x_i)\,\Delta x$. Add them and take the limit as $n \to \infty$:
$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i)\,\Delta x$$
On the right, $\sum$ (capital sigma) means "add up," $x_i$ is a point in the $i$-th strip, and $\Delta x = (b - a)/n$ is the strip width. On the left, the symbol $\int$ is an elongated S for "sum" (Leibniz, 1675); $f(x)\,dx$ is one infinitely thin rectangle, height $f(x)$ and width $dx$; $a$ and $b$ are the **limits of integration**. Read the whole thing as "the total of $f$ from $a$ to $b$." Regions below the axis count as negative, so the integral is *signed* area, which is what makes it measure net change rather than just extent.[^2]
:::

## The fundamental theorem

Here is the surprise. Suppose $F$ is a function whose derivative is $f$: $F' = f$. Then

$$\int_a^b f(x)\,dx = F(b) - F(a)$$

The area under $f$ from $a$ to $b$ is just the change in $F$ between the two ends. Adding up rates gives total change; that is the whole content of the theorem, and once said it is almost obvious. If $f$ is your speed at each moment, $F$ is your position, and the total distance covered between two times is the difference in position. If $f$ is the rate water flows into a tank, $F$ is the volume in it. The theorem was known in pieces to Newton's teacher Isaac Barrow and to James Gregory, and Newton and Leibniz each saw its full generality: to compute any area, you need only find a function whose slope is the curve.[^3]

$F$ is called an **antiderivative** of $f$, and finding one is **integration**. It reverses the derivative rules of chapter 7, read backward. Since the derivative of $x^3$ is $3x^2$, an antiderivative of $3x^2$ is $x^3$. (Any constant can be added, because constants have zero derivative; the constant cancels in $F(b) - F(a)$, which is why the definite integral has one answer.)

:::howto Integrating: the rules
Read each derivative rule right to left. $C$ is an arbitrary constant.

1. **Powers**: $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C$ for $n \ne -1$. Raise the exponent by one and divide by the new exponent. So $\int x^2\,dx = x^3/3$, $\int 1\,dx = x$, $\int \sqrt{x}\,dx = \tfrac{2}{3}x^{3/2}$.
2. **The exception**: $\displaystyle\int \frac{1}{x}\,dx = \ln|x| + C$, since $(\ln x)' = 1/x$. ($|x|$ is $x$ with its sign removed, so the rule works for negative $x$ too.)
3. **Exponentials and trig**: $\int e^{kx}\,dx = e^{kx}/k$ for $k \ne 0$; $\int \sin x\,dx = -\cos x$; $\int \cos x\,dx = \sin x$.
4. **Sums and multiples**: term by term, constants carried along.
5. **Substitution** (the chain rule backward): if the integrand contains a function and its derivative, let $u$ be the inner function. For $\int 2x\,e^{x^2}\,dx$, set $u = x^2$, $du = 2x\,dx$, giving $\int e^u\,du = e^u = e^{x^2}$.
6. **Integration by parts** (the product rule backward): $\int u\,dv = uv - \int v\,du$. For $\int x e^x\,dx$, take $u = x$ and $dv = e^x\,dx$, so $du = dx$ and $v = e^x$: the result is $xe^x - \int e^x\,dx = xe^x - e^x + C$.
7. **When nothing works**, integrate numerically (below). Most integrals that arise in practice have no formula, and that is fine.

*Example.* Area under $y = x^2$ from 0 to 1: an antiderivative is $x^3/3$, so the area is $1^3/3 - 0^3/3 = 1/3$. Archimedes got this answer for the parabola by exhaustion; it took him a treatise.[^1]
:::

## What integrals compute

Anything that is a total of a rate, or a sum of pieces, is an integral. A few that come up:

**Distance from speed.** A car's speed in m/s is $v(t) = 3t$ for the first 10 seconds. Distance $= \int_0^{10} 3t\,dt = \tfrac{3}{2}t^2 \big|_0^{10} = 150$ m. (The vertical bar notation means "evaluate at the top limit, subtract the value at the bottom.")

**Total from a rate.** A well produces oil at a rate that declines as $r(t) = 1000 e^{-0.1t}$ barrels per year. Total production over 20 years $= \int_0^{20} 1000e^{-0.1t}\,dt = -10{,}000 e^{-0.1t}\big|_0^{20} = 10{,}000(1 - e^{-2}) \approx 8{,}647$ barrels (the $-10{,}000$ is $1000/k$ with $k = -0.1$, from the exponential rule). Over all time, the total approaches 10,000: a declining rate can have a finite total, which is the fact behind every "how much is left" question.

**Average value.** The average of a function over an interval is its integral divided by the length of the interval: $\bar f = \dfrac{1}{b-a}\int_a^b f(x)\,dx$. The average temperature over a day is the integral of temperature divided by 24 hours. This is what a mean is, when the thing being averaged varies continuously.

**Volume.** Slice a solid into thin disks; each has volume $\pi r(x)^2\,dx$; integrate. A sphere of radius $R$ is disks of radius $\sqrt{R^2 - x^2}$ from $-R$ to $R$: $\int_{-R}^{R} \pi(R^2 - x^2)\,dx = \tfrac{4}{3}\pi R^3$. Every formula in chapter 5's volume table is an integral of this kind, which is why they all involve the same $\tfrac{1}{3}$ and $\tfrac{4}{3}$.

**Probability.** A continuous probability distribution is a curve whose total area is 1, and the probability of a value falling between $a$ and $b$ is the area between them. Chapter 9 builds on this, and the famous bell curve is the integral nobody can do by formula.

## Numerical integration

Most functions have no antiderivative expressible in terms of the familiar functions; $e^{-x^2}$, the bell curve, is the famous case. That does not matter, because a computer can do what Archimedes did: add up rectangles. Better, add up trapezoids, or fit parabolas through triples of points (**Simpson's rule**), which converges much faster. Every spreadsheet, every physics simulation, and every finance model that "integrates" is doing this.[^4]

:::howto Estimating an integral by hand: the trapezoid rule
1. Divide the interval into $n$ equal strips of width $h$.
2. Evaluate the function at each boundary: $f_0, f_1, \ldots, f_n$.
3. The area is approximately $h \left(\tfrac{1}{2}f_0 + f_1 + f_2 + \cdots + f_{n-1} + \tfrac{1}{2}f_n\right)$: each interior point counted once, the ends counted half.

*Example.* Distance from a speedometer read every 10 seconds: 0, 8, 15, 20, 22 m/s. Then $h = 10$ and distance $\approx 10(0 + 8 + 15 + 20 + 11) = 540$ m. With readings every second it would be more accurate; with a smooth formula, exact. This is how GPS apps compute the distance you ran.
:::

## Differential equations, solved

Chapter 7 wrote the growth equation $dy/dt = ky$ and stated its solution. Integration is how solutions are found. The most important beyond exponential growth is the **logistic equation**, which adds the fact that growth slows as a limit is approached:

$$\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)$$

$P$ is the population (or number of adopters, or infected people), $r$ the growth rate when the population is small, and $K$ the **carrying capacity**, the maximum the environment supports. When $P$ is small the bracket is nearly 1 and growth is exponential; as $P$ approaches $K$ the bracket approaches zero and growth stops. Separating the variables and integrating gives the solution,
$$P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right)e^{-rt}}$$
where $P_0$ is the starting population: the S-shaped **logistic curve** of chapter 6. It fits the spread of everything from bacteria in a dish to smartphones in a country.[^5] Pierre Verhulst wrote it down in 1838 as a correction to Malthus, and it is why Malthus's prediction of exponential population growth into catastrophe was wrong in form as well as in fact.

## Infinite series

The integral is one kind of infinite sum; another is the **series**, an infinite sum of terms. The geometric series $1 + \tfrac{1}{2} + \tfrac{1}{4} + \tfrac{1}{8} + \cdots$ adds up to exactly 2, which is how Zeno's runner, who must first cover half the distance, then half the remainder, and so on forever, does reach the wall. In general $1 + x + x^2 + x^3 + \cdots = \dfrac{1}{1 - x}$ when $|x| < 1$, a formula that prices every annuity and mortgage in chapter 14.

The deepest use is **Taylor series**: many of the functions that matter, including every one in this chapter, can be written near a chosen point as an infinite polynomial whose coefficients come from the function's derivatives there. (Not every smooth function can; those that can are called *analytic*.) Three you will see:

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots, \qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots, \qquad \cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$$

($n!$, "n factorial," is $n \times (n-1) \times \cdots \times 1$.) These are, in essence, how calculators compute $e^x$ and $\sin x$: reduce the argument to a small range, then add the first dozen terms of a series like these. Madhava in Kerala had the sine series around 1400; Newton, Gregory, and Taylor rediscovered and generalized it.[^6] And putting $x = i\theta$ into the exponential series and comparing with the other two gives Euler's formula, $e^{i\theta} = \cos\theta + i\sin\theta$, which unites exponentials, trigonometry, and complex numbers in one line and, at $\theta = \pi$, yields $e^{i\pi} + 1 = 0$, often called the most beautiful equation in mathematics.[^7]

:::warning
An infinite sum does not always have a finite total. $1 + \tfrac{1}{2} + \tfrac{1}{3} + \tfrac{1}{4} + \cdots$ grows without bound, though so slowly that the first billion terms sum to only about 21. Whether a series **converges** has to be checked, not assumed, and a good deal of nineteenth-century mathematics was spent cleaning up eighteenth-century results that had assumed it.
:::

## Beyond one variable

Everything above extends. A function of two variables is a surface; its **partial derivatives** are the slopes in each direction; its **gradient** is the vector pointing uphill, and following it downhill is how machine learning trains (chapter 11). A double integral is a volume under a surface. Maxwell's equations, the Navier–Stokes equations of fluid flow, the heat equation, the Schrödinger equation, and the Black–Scholes equation of the economics guide are all **partial differential equations**, relating rates of change in several directions at once, and solving them, mostly numerically, is a large part of what supercomputers do.[^8]

:::formulas
| Rule | Formula |
|---|---|
| Fundamental theorem | $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$ where $F' = f$ |
| Power | $\displaystyle\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)$ |
| Reciprocal | $\displaystyle\int \frac{dx}{x} = \ln|x| + C$ |
| Exponential | $\displaystyle\int e^{kx}\,dx = \frac{e^{kx}}{k} + C$ |
| Average value | $\bar f = \dfrac{1}{b-a}\displaystyle\int_a^b f(x)\,dx$ |
| Trapezoid rule | $h\left(\tfrac{1}{2}f_0 + f_1 + \cdots + f_{n-1} + \tfrac{1}{2}f_n\right)$ |
| Geometric series | $1 + x + x^2 + \cdots = \dfrac{1}{1-x}$ for $\lvert x \rvert < 1$ |
| Logistic growth | $\dfrac{dP}{dt} = rP\left(1 - \dfrac{P}{K}\right)$ |
| Euler's formula | $e^{i\theta} = \cos\theta + i\sin\theta$ |
:::

:::know
- The integral is a total: area under a curve, distance from speed, volume from slices. It is signed, so it measures net change.
- Integration reverses differentiation. To find an area, find a function whose derivative is the curve and take the difference of its values at the ends.
- Most integrals have no formula. Numerical methods (trapezoids, Simpson's rule) handle them, and that is what software does.
- A declining rate can have a finite total. A slowly declining series may not.
- Exponential growth in a limited world becomes logistic: an S-curve.
- Calculators compute $e^x$, $\sin x$, and friends by adding the first few terms of their Taylor series.
:::

:::try Put the idea to work
Water enters a tank at 2 liters per minute for 3 minutes, then 5 liters per minute for 2 minutes. How much enters, and what would the area under a rate graph mean?

:::answer Show the reasoning
The first interval contributes 2 × 3 = 6 liters and the second 5 × 2 = 10 liters, for 16 liters. Each rectangle has units (liters/minute) × minutes = liters. Integration extends that rate-times-duration idea to rates that change continuously.
:::
:::

## Summary

- The definite integral is the limit of a sum of thin rectangles: the area under a curve, or the total of a rate.
- The fundamental theorem of calculus says the integral of $f$ from $a$ to $b$ equals $F(b) - F(a)$ for any antiderivative $F$; adding up rates gives total change.
- Integration rules are derivative rules read backward; substitution and parts undo the chain and product rules; numerical methods handle the rest.
- Integrals compute distances, totals, averages, volumes, and probabilities. The logistic equation describes growth toward a limit.
- Series express functions as infinite polynomials; Euler's formula ties exponentials to rotation.

[^1]: Archimedes. *Quadrature of the Parabola* and *The Method*. In Heath, T. L., ed. (1897). *The Works of Archimedes*. Cambridge University Press. [archive.org](https://archive.org/details/worksofarchimede00arch)
[^2]: OpenStax (2016). *Calculus Volume 1*. Chapter 5, "Integration." [openstax.org](https://openstax.org/books/calculus-volume-1/pages/5-introduction)
[^3]: Boyer, C. B. (1949). *The History of the Calculus and Its Conceptual Development*. Reprinted by Dover, 1959. Chapter V on Barrow, Gregory, Newton, and Leibniz.
[^4]: Press, W. H., Teukolsky, S. A., Vetterling, W. T., Flannery, B. P. (2007). *Numerical Recipes: The Art of Scientific Computing*, 3rd ed. Cambridge University Press. Chapter 4, "Integration of Functions."
[^5]: Verhulst, P.-F. (1838). "Notice sur la loi que la population suit dans son accroissement." *Correspondance mathématique et physique*, 10, 113–121. Modern treatment: Murray, J. D. (2002). *Mathematical Biology I: An Introduction*, 3rd ed. New York: Springer, chapter 1. [doi:10.1007/b98868](https://doi.org/10.1007/b98868)
[^6]: Joseph, G. G. (2011). *The Crest of the Peacock: Non-European Roots of Mathematics*, 3rd ed. Princeton University Press. Chapter 10. Taylor, B. (1715). *Methodus Incrementorum Directa et Inversa*. London.
[^7]: Euler, L. (1748). *Introductio in analysin infinitorum*. Lausanne: Bousquet. Chapter VIII, §138. English translation by J. D. Blanton (1988), *Introduction to Analysis of the Infinite*, Book I. New York: Springer. Nahin, P. J. (2006). *Dr. Euler's Fabulous Formula*. Princeton University Press.
[^8]: Strogatz, S. H. (2019). *Infinite Powers: How Calculus Reveals the Secrets of the Universe*. Boston: Houghton Mifflin Harcourt. Chapters 10–11 on partial differential equations and their applications.
