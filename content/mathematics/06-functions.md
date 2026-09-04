---
title: Functions and Graphs
subtitle: How one quantity depends on another. Reading a graph, recognizing linear from exponential growth, and the number e, which is the most important constant you were never properly introduced to.
part: II · The Core Toolkit
---

## Recap

Algebra (chapter 4) manipulates relationships; coordinates (chapter 5) draw them. A **function** is the idea that joins the two: a rule that takes an input and gives back exactly one output. Nearly every quantitative claim you meet, in news, at work, in science, is a claim about a function, and the most valuable skill this chapter teaches is recognizing *which kind* of function you are looking at, because the kinds behave in utterly different ways.

## What a function is

A function is a machine: put in a number, get out a number, always the same output for the same input. Write $f(x)$ for "the output of $f$ when the input is $x$." If $f(x) = 2x + 1$, then $f(3) = 7$ and $f(10) = 21$. The set of allowed inputs is the **domain**; the set of outputs is the **range**. The notation was Euler's, in 1734, and it is worth getting comfortable with: $f(x)$ is not "$f$ times $x$" but "$f$ applied to $x$."[^1]

The **graph** of a function plots each input on the horizontal axis against its output on the vertical. A curve is the graph of a function exactly when no vertical line crosses it twice, since each input must have one output. Reading a graph is reading the function: where it rises, the output grows with the input; where it is steep, it grows fast; where it flattens, growth has stopped.

:::howto Reading any graph
1. Read the axes first: what is plotted, in what units, and does the vertical axis start at zero? A bar chart whose axis starts at 90 makes a 2 percent difference look like a doubling.
2. Check the scale: is it linear (equal steps mean equal amounts) or **logarithmic** (equal steps mean equal *multiples*, so 10, 100, 1000 are evenly spaced)? Exponential growth looks like a straight line on a log scale, which is exactly why it is used.
3. Find the shape: straight line, curve bending up, curve bending down, curve leveling off, wave. Each is a different kind of function with a different story, below.
4. Ask what is *not* shown: the years left off, the second series that would give context, the uncertainty.
:::

## Linear functions: constant change

$$y = mx + b$$

The straight line. $m$ is the **slope**, how much $y$ changes for each unit of $x$ (rise over run); $b$ is the **intercept**, the value of $y$ when $x = 0$. A taxi that charges \$3 plus \$2 per mile is $y = 2x + 3$. A linear function adds the same amount each step. It is the simplest relationship and the default assumption in most people's heads, which is the source of most bad predictions about growth.

:::howto Finding the equation of a line from two points
1. Slope: $m = \dfrac{y_2 - y_1}{x_2 - x_1}$, the change in $y$ over the change in $x$.
2. Intercept: substitute one point into $y = mx + b$ and solve for $b$.

*Example.* A plant is 12 cm tall on day 4 and 21 cm on day 10. Slope: $(21 - 12)/(10 - 4) = 1.5$ cm per day. Intercept: $12 = 1.5(4) + b$, so $b = 6$. Height $= 1.5t + 6$; it was 6 cm when measurement began and will be 36 cm on day 20, *if* growth stays linear, which is the assumption to question.
:::

## Quadratics and polynomials: bending

$y = ax^2 + bx + c$ is a **parabola**: a U shape opening up if $a > 0$, down if $a < 0$. Its highest or lowest point, the **vertex**, is at $x = -b/2a$, which is the fastest way to find the maximum of anything quadratic: the price that maximizes revenue, the angle that maximizes range. A thrown ball follows a parabola; so does the cable of a suspension bridge under uniform load; so does the profit of a business that gains customers by cutting price but loses margin doing it. Higher powers give **polynomials**, which can wiggle more; a polynomial of degree $n$ can have up to $n - 1$ turns and crosses the axis at most $n$ times, which is the fundamental theorem of algebra of chapter 4 read as geometry.

## Exponential functions: constant *proportional* change

$$y = a \cdot b^x$$

The most important function in this guide. Where a linear function adds the same *amount* each step, an exponential function multiplies by the same *factor*. Money at 7 percent interest is multiplied by 1.07 each year. A population growing 2 percent a year is multiplied by 1.02. A virus whose cases double every three days is multiplied by 2 every three days. The base $b$ is the growth factor; if $b > 1$ the function grows, if $0 < b < 1$ it **decays**, as radioactive material, drug concentrations in the blood, and the value of a car all do.

{{fig:growth-types|Linear, quadratic, and exponential growth from the same start. For small inputs they are hard to tell apart; the exponential eventually outruns every polynomial, no matter how modest its rate. On a logarithmic vertical scale the exponential becomes a straight line.}}

Human intuition is linear and exponential growth defeats it every time. The classic illustration is the chessboard: one grain of rice on the first square, two on the second, doubling each square. The last square alone holds $2^{63}$ grains, about nine billion billion, more rice than has been grown in human history.[^2] Less whimsically: an economy growing at 2 percent doubles in 35 years and is about seven times larger in a century, while one growing at 1 percent merely doubles and a half; a pandemic with cases doubling weekly goes from 1,000 to a million in ten weeks; and a 30-year mortgage at 6 percent costs more in interest than the house (chapter 14).

:::howto Working with exponential growth
1. **Identify the growth factor** per period: a rate of $r$ percent means a factor of $1 + r/100$. Decay at $r$ percent means $1 - r/100$.
2. **After $n$ periods**, multiply the start by the factor $n$ times: $\text{final} = \text{start} \times (\text{factor})^n$.
3. **To find the number of periods** to reach a target, use logarithms (chapter 4): $n = \log(\text{target}/\text{start}) / \log(\text{factor})$. For the city below to reach a million: $n = \ln 2 / \ln 1.03 = 23.4$ years.
4. **Doubling time** at $r$ percent per period is about $70/r$ periods; **halving time** for decay at $r$ percent is the same number.

*Example.* A city of 500,000 grows 3 percent a year. In 25 years: $500{,}000 \times 1.03^{25} = 500{,}000 \times 2.094 \approx 1{,}047{,}000$. Doubling time $\approx 70/3 \approx 23$ years, consistent. *Example 2.* A drug leaves the body at 15 percent per hour. After 8 hours, $0.85^8 \approx 0.27$ of the dose remains; the half-life is about $70/15 \approx 4.7$ hours (exact: $\ln 0.5 / \ln 0.85 = 4.27$ hours; the rule of 70 is rough for large percentages).
:::

## The number e

There is one base that mathematics prefers, and it needs explaining, because it is introduced in most courses as an arbitrary decimal, $e \approx 2.71828$, with no reason given.

Here is the reason. Suppose a bank pays 100 percent interest a year. Paid once, \$1 becomes \$2. Paid in two installments of 50 percent, it becomes $1.5^2 = 2.25$. Paid monthly, $(1 + 1/12)^{12} = 2.613$. Paid every second, 2.71828…. Paid *continuously*, so that growth compounds at every instant, the limit is $e$. Jacob Bernoulli found this in 1683 while studying exactly this question about compound interest; Euler named it $e$ in 1731 and proved it irrational in 1737.[^3]

$$e = \lim_{n \to \infty}\left(1 + \frac{1}{n}\right)^n = 2.71828\ldots$$

What makes $e$ special is a property no other base has: the function $e^x$ grows at a rate *equal to its own value*. When $e^x$ is 5, it is growing at 5 per unit; when it is 100, at 100. That self-similarity is why it appears wherever growth depends on current size, which is everywhere: populations, interest, radioactive decay, cooling coffee, the spread of rumors and diseases. Chapter 7 makes this precise. For now: any exponential growth can be written as $y = a e^{kt}$, where $k$ is the **continuous growth rate**, because $b^t = e^{t\ln b}$, so $k = \ln b$. The natural logarithm $\ln$ is the logarithm to base $e$, the one that undoes $e^x$. Calculators and spreadsheets give both their own keys, LN and $e^x$ (often written EXP), for this reason.

## Logarithmic functions: growth that slows

$y = \log_b x$ is the exponential's mirror image: it grows forever but ever more slowly, gaining the same *amount* each time $x$ is *multiplied* by $b$. Human senses are roughly logarithmic: perceived loudness, brightness, and pitch each go up by about equal steps when the physical stimulus goes up by equal factors, which is why the decibel scale, star magnitudes, and musical octaves are all logarithmic.[^4] So is the sense of the value of money, roughly, which is why a \$100 loss hurts a poor person more than a rich one, and why the utility functions of the economics guide bend the way they do.

## Periodic functions: repetition

$y = A\sin(\omega t)$ repeats forever, swinging between $A$ and $-A$ with a period of $2\pi/\omega$. Chapter 5 introduced these through the unit circle; they describe everything that cycles. Any repeating pattern, however jagged, can be built by adding sines of different frequencies, which is Fourier's theorem of 1807 and the basis of every audio file, image compressor, and MRI scanner.[^5]

## Inverse functions and composition

Two operations tie functions together. **Composition** feeds one function's output into another: if $f$ converts Celsius to Fahrenheit and $g$ converts Fahrenheit to a comfort rating, then $g(f(x))$ rates a Celsius temperature. An **inverse function** undoes a function: if $f$ converts Celsius to Fahrenheit, $f^{-1}$ converts back. Squaring and square-rooting, $e^x$ and $\ln x$, $\sin$ and $\arcsin$ are inverse pairs. Solving an equation is applying inverse functions in the right order, which is what chapter 4's "undo everything" rule really says.

:::howto Deciding which kind of growth you are looking at
Given data at equal time steps:
1. Compute the **differences** between successive values. If they are roughly constant, the growth is linear.
2. If not, compute the **ratios** of successive values. If they are roughly constant, the growth is exponential; the ratio is the growth factor.
3. If the differences themselves change by a constant amount, it is quadratic.
4. If neither differences nor ratios settle, plot it: leveling off suggests a logarithmic or **saturating** curve (an S-shaped **logistic** curve is the typical shape for anything that grows exponentially until it runs out of room: populations, product adoption, epidemics).

*Example.* Values 100, 130, 169, 220, 286. Differences: 30, 39, 51, 66, not constant. Ratios: 1.30, 1.30, 1.30, 1.30. Exponential, growing 30 percent per step. The next value is about 372, not 352 as adding the last difference would give; ten steps on, the exponential reaches about 3,940 while the linear guess reaches only 946.
:::

:::formulas
| Function | Form | Behavior |
|---|---|---|
| Linear | $y = mx + b$ | adds $m$ per step; slope $m = \dfrac{\Delta y}{\Delta x}$ ($\Delta$, delta, means "change in") |
| Quadratic | $y = ax^2 + bx + c$ | parabola; vertex at $x = -\dfrac{b}{2a}$ |
| Exponential | $y = a\,b^x = a\,e^{kx}$ | multiplies by $b$ per step; $k = \ln b$ |
| Doubling time | $t_2 = \dfrac{\ln 2}{\ln b} \approx \dfrac{70}{r\%}$ | |
| Logarithmic | $y = \log_b x$ | inverse of exponential; grows ever slower |
| The number $e$ | $e = \lim_{n\to\infty}(1 + 1/n)^n \approx 2.71828$ | $e^x$ grows at rate equal to itself |
| Sine wave | $y = A\sin(\omega t + \phi)$ | amplitude $A$, period $2\pi/\omega$, phase $\phi$ |
:::

:::know
- Linear adds the same amount per step; exponential multiplies by the same factor. Confusing them is the most common quantitative error in public life.
- Anything growing by a fixed percentage doubles in about $70/r$ periods and is a straight line on a log scale.
- $e$ is the base of continuous growth. $e^x$ and $\ln x$ undo each other.
- Read the axes before the curve. A truncated axis or a log scale changes what the shape means.
- Exponential growth in the real world always becomes an S-curve. The question is when.
:::

## Summary

- A function assigns one output to each input; its graph is the picture of the dependence.
- Linear functions change by constant amounts; exponentials by constant factors, and they outrun every polynomial eventually.
- $e$ arises from continuous compounding and is the base at which growth rate equals size; $\ln$ is its logarithm.
- Logarithmic functions describe growth that slows and the way senses work; sines describe repetition, and by Fourier's theorem build every other periodic signal.
- Differences test for linear growth; ratios test for exponential. Do the test before you extrapolate.

[^1]: Euler, L. (1734/35, published 1740). "Additamentum ad dissertationem de infinitis curvis eiusdem generis." *Commentarii Academiae Scientiarum Petropolitanae*, 7, 184–200 (E45). On the history of the function concept: Kleiner, I. (1989). "Evolution of the Function Concept: A Brief Survey." *The College Mathematics Journal*, 20(4), 282–300. [doi:10.2307/2686848](https://doi.org/10.2307/2686848)
[^2]: World rice production is about 520 million tonnes of milled rice a year (FAO, 2024), roughly $2.6 \times 10^{16}$ grains at 20 mg each; $2^{63} \approx 9.2 \times 10^{18}$. FAO. *FAOSTAT: Crops and livestock products*. [fao.org/faostat](https://www.fao.org/faostat/en/#data/QCL)
[^3]: Maor, E. (1994). *e: The Story of a Number*. Princeton University Press. Bernoulli's 1683 compound-interest problem is in chapter 4; Euler's notation in chapter 13.
[^4]: Fechner, G. T. (1860). *Elemente der Psychophysik*. Leipzig: Breitkopf & Härtel (the Weber–Fechner law of logarithmic perception). The modern refinement is a power law: Stevens, S. S. (1957). "On the psychophysical law." *Psychological Review*, 64(3), 153–181. [doi:10.1037/h0046162](https://doi.org/10.1037/h0046162)
[^5]: Fourier, J. (1822). *Théorie analytique de la chaleur*. Paris: Firmin Didot. English translation by A. Freeman (1878), *The Analytical Theory of Heat*. [archive.org](https://archive.org/details/analyticaltheory00fourrich). Accessible account: Stein, E. M., Shakarchi, R. (2003). *Fourier Analysis: An Introduction*. Princeton University Press.
