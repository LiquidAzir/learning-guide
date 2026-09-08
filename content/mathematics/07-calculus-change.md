---
title: Calculus I · Rates of Change
subtitle: The derivative. What speed really means, why the top of a hill is where the slope is zero, and how that one fact finds the best of anything.
part: III · Change and Chance
---

## How do you measure change at an instant?

Chapter 6 asked what kind of function you are looking at. Calculus asks how fast it is changing at a given instant, and that question, which sounds simple, took two thousand years to answer properly. Once answered, it made physics possible, and it now sits inside every optimization, from a delivery route to the training of a neural network. This chapter is the first half of calculus; chapter 8 is the second half and the surprise that connects them.

## The problem of the instant

A car travels 120 kilometers in two hours: its average speed is 60 km/h. But what is its speed *at* 1:30 exactly? At a single instant, no distance is covered and no time passes, so "distance over time" is zero over zero, which is meaningless. Yet the speedometer shows a number. The Greeks saw the paradox; Zeno's arrow, which at each instant is motionless and therefore, he argued, never moves, is this problem stated as a puzzle.[^1]

The resolution is the idea of a **limit**. Measure the average speed over a smaller and smaller interval around 1:30: one minute, one second, a millisecond. The averages settle toward a definite value. That value, the number the averages approach as the interval shrinks to nothing without ever being nothing, is the speed at that instant. Newton and Leibniz used the idea intuitively; it was made rigorous by Cauchy and Weierstrass in the nineteenth century, after 150 years of philosophers complaining, fairly, that nobody could say what an "infinitely small quantity" was.[^2]

## The derivative

Draw the graph of a function. Its **derivative** at a point is the slope of the curve there: the slope of the straight line that just touches the curve at that point, the **tangent line**. A steep curve has a large derivative; a flat one has zero; a falling one has a negative derivative. If the function is position, the derivative is velocity. If it is money in an account, the derivative is the rate of earning. If it is temperature over the day, the derivative is how fast it is warming.

{{fig:derivative-slope|The derivative as slope. The average rate of change between two points is the slope of the line joining them. As the second point slides toward the first, that line approaches the tangent, and its slope approaches the derivative at the point.}}

:::math The definition
The derivative of $f$ at $x$ is the limit of the average rate of change over an interval of width $h$, as $h$ shrinks to zero:
$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$
The fraction is rise over run: how much $f$ changed, divided by how far $x$ moved. Leibniz wrote it as $\dfrac{dy}{dx}$, "an infinitesimal change in $y$ per infinitesimal change in $x$," and his notation is still used because it makes the rules below look like ordinary fractions, which is not quite true but is usually safe.[^3]

*Example.* For $f(x) = x^2$: $f(x + h) - f(x) = (x + h)^2 - x^2 = 2xh + h^2$. Divide by $h$: $2x + h$. As $h \to 0$ this becomes $2x$. So the slope of the parabola $y = x^2$ at any point is twice the $x$-coordinate: 0 at the bottom, 4 at $x = 2$, −6 at $x = -3$.
:::

The word **differentiate** means "find the derivative," and the process is **differentiation**. You almost never use the definition directly. You use rules, each of which was derived from the definition once and for all.

:::howto Differentiating: the rules
Write $f'$ for the derivative of $f$.

1. **Powers**: the derivative of $x^n$ is $nx^{n-1}$. Bring the exponent down as a multiplier and reduce it by one. So $x^3 \to 3x^2$, $x \to 1$, $\sqrt{x} = x^{1/2} \to \tfrac{1}{2}x^{-1/2}$, and $1/x = x^{-1} \to -x^{-2}$. A constant has derivative 0: it does not change.
2. **Constant multiples and sums**: differentiate term by term, leaving multipliers alone. $5x^3 - 2x + 7 \to 15x^2 - 2$.
3. **Exponentials and logs**: $e^x \to e^x$ (the defining property of $e$, chapter 6); $e^{kx} \to ke^{kx}$; $\ln x \to 1/x$; $b^x \to (\ln b)\, b^x$.
4. **Sine and cosine**: $\sin x \to \cos x$ and $\cos x \to -\sin x$, when $x$ is in radians. (This is why radians exist.)
5. **Product rule**: $(fg)' = f'g + fg'$. Derivative of the first times the second, plus the first times derivative of the second.
6. **Quotient rule**: $(f/g)' = (f'g - fg')/g^2$.
7. **Chain rule**: for a function inside a function, $f(g(x))$, the derivative is $f'(g(x)) \cdot g'(x)$: differentiate the outside, leaving the inside alone, then multiply by the derivative of the inside. So $(3x + 1)^5 \to 5(3x + 1)^4 \cdot 3$, and $e^{-x^2} \to e^{-x^2} \cdot (-2x)$.

*Example.* A company's revenue from selling $q$ units at a price that falls as $q$ rises is $R(q) = 100q - 0.5q^2$. Marginal revenue, the extra revenue from one more unit, is $R'(q) = 100 - q$. At $q = 40$ each extra unit brings in about \$60; at $q = 100$ it brings nothing, and beyond that selling more *reduces* revenue. This is exactly the "marginal" reasoning of the economics guide, and the derivative is what "marginal" means.
:::

## Finding the best of anything

Here is the payoff, and it is the reason calculus is taught to millions who will never compute a limit. At the top of a hill the ground is level. At the bottom of a valley it is level. Wherever a smooth function reaches a maximum or minimum, its derivative is zero, because if the slope were positive you could go higher by moving right, and if negative by moving left. So to find the best value of anything that can be written as a function, differentiate, set the result to zero, and solve.

:::howto Optimizing
1. Write the quantity you want to maximize or minimize as a function of one variable. If it depends on two, use a constraint to eliminate one.
2. Differentiate and set the derivative equal to zero. Solve for the variable. These are the **critical points**.
3. Decide which critical point is the maximum or minimum: check values on either side, or use the **second derivative** (the derivative of the derivative, which measures curvature): negative means a peak, positive a trough. A zero derivative is a candidate, not a guarantee: $y = x^3$ is flat at $x = 0$ but has no peak or trough there, which is why this step exists.
4. Check the endpoints of the allowed range, which can beat any interior point.

*Example.* You have 100 m of fence for a rectangular pen against a barn wall (so only three sides need fencing). Width $w$, length $l$, with $2w + l = 100$, so $l = 100 - 2w$. Area $A = wl = w(100 - 2w) = 100w - 2w^2$. Then $A' = 100 - 4w = 0$ gives $w = 25$, $l = 50$, area 1,250 m². The second derivative is $-4$, negative, so it is a maximum. Any other split, say 20 by 60, gives less (1,200).

*Example 2.* A can must hold 500 ml. What proportions use the least metal? Volume $\pi r^2 h = 500$ gives $h = 500/\pi r^2$. Surface $S = 2\pi r^2 + 2\pi r h = 2\pi r^2 + 1000/r$. Then $S' = 4\pi r - 1000/r^2 = 0$; multiply through by $r^2$ to get $r^3 = 1000/4\pi$, so $r \approx 4.30$ cm. Since $r^3 = 250/\pi$, we have $500 = 2\pi r^3$. Substituting into the volume equation gives $h = 500/(\pi r^2) = 2\pi r^3/(\pi r^2) = 2r \approx 8.60$ cm: height equals diameter. Real cans are taller because the top and bottom are thicker metal, and because that shape is easier to hold, which is a reminder that the mathematics optimizes what you told it to.
:::

This procedure is the engine inside a staggering range of things: the shape of a soap bubble, the route a light ray takes, the price that maximizes profit, the design of a wing, and the training of every neural network, which is nothing but finding the minimum of an error function of billions of variables by walking downhill along the derivative, a method called **gradient descent** that chapter 11 describes.[^4]

## Rates that depend on the quantity: differential equations

The most important use of the derivative is not computing it but *writing equations with it*. A **differential equation** relates a quantity to its own rate of change, and most of the laws of nature take this form, because nature specifies how things *change*, not what they are.

The simplest says a quantity grows at a rate proportional to its size: $\dfrac{dy}{dt} = ky$. Money earning interest grows in proportion to how much there is; bacteria reproduce in proportion to how many there are; radioactive atoms decay in proportion to how many remain. The solution is the exponential function $y = y_0 e^{kt}$, where $y_0$ is the starting amount, and this is *why* exponentials are everywhere: they are what you get whenever a rate is proportional to a quantity, and that is the commonest relationship in the world.[^5] Newton's second law, force equals mass times acceleration, is a differential equation, since acceleration is the derivative of velocity, which is the derivative of position; solve it for gravity and you get the orbits of the planets, which is what Newton invented calculus to do.

:::warning
A derivative tells you the rate *now*. Extrapolating it assumes the rate stays the same, which is the linear assumption of chapter 6 in disguise. "Cases rose by 500 today, so in a month there will be 15,000 more" ignores that the rate itself is changing. The second derivative, the rate of change of the rate, is often the number that matters: whether growth is speeding up or slowing down. When epidemiologists talk about "bending the curve," they mean making the second derivative negative.
:::

## A little history

Newton, in 1665–66, and Leibniz, in 1675, each discovered the rules above, and each discovered the far deeper fact of chapter 8, that differentiation and its opposite, finding areas, are inverse operations.[^6] Newton called derivatives "fluxions" and used them to derive Kepler's planetary laws from gravity in the *Principia* of 1687, though he presented the results in classical geometry because he did not trust readers to accept the new method. Leibniz published first, in 1684, and gave the subject its notation: $dy/dx$ and $\int$. The two men and their followers spent thirty years accusing each other of plagiarism; the modern verdict is independent discovery, with Newton first in time and Leibniz first in print.[^7] English mathematics, loyal to Newton's clumsier notation, fell behind the Continent for a century.

The Bishop of Cloyne, George Berkeley, objected in 1734 that the whole method rested on quantities that were treated as nonzero when dividing and then as zero when simplifying, "the ghosts of departed quantities," and he was right.[^8] It took until the 1820s (Cauchy) and 1860s (Weierstrass) to define the limit precisely enough to answer him. Calculus worked for 150 years before anyone could say exactly why, which is a useful thing to remember about how mathematics actually develops.

:::formulas
| Rule | Formula |
|---|---|
| Definition | $f'(x) = \lim_{h\to0} \dfrac{f(x+h) - f(x)}{h}$ |
| Power | $(x^n)' = nx^{n-1}$ |
| Exponential, log | $(e^{kx})' = ke^{kx},\quad (\ln x)' = 1/x$ |
| Trig (radians) | $(\sin x)' = \cos x,\quad (\cos x)' = -\sin x$ |
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $(f/g)' = \dfrac{f'g - fg'}{g^2}$ |
| Chain | $[f(g(x))]' = f'(g(x))\,g'(x)$ |
| Optimum | set $f'(x) = 0$; $f'' < 0$ peak, $f'' > 0$ trough |
| Proportional growth | $\dfrac{dy}{dt} = ky \;\Rightarrow\; y = y_0 e^{kt}$ |
:::

:::know
- The derivative is the slope of the curve at a point: the instantaneous rate of change. Velocity is the derivative of position; "marginal" anything is a derivative.
- To find a maximum or minimum, set the derivative to zero and check the second derivative. This one procedure underlies most of optimization.
- The chain rule handles functions inside functions and is the rule people forget.
- A differential equation says how a quantity changes; exponentials are the solution whenever the rate is proportional to the amount.
- The derivative tells you the rate now, not later. Watch the second derivative.
:::

:::try Put the idea to work
For f(x) = x², the derivative at x = 3 is 6. Use it to estimate 3.1², then compare with the exact result. Why are they different?

:::answer Show the reasoning
The change in x is 0.1, so the tangent estimate is 9 + 6 × 0.1 = 9.6. The exact square is 9.61. The derivative gives the local linear change; curvature contributes the extra 0.01. A derivative is not a promise that the tangent line stays exact away from the point.
:::
:::

## Summary

- The instantaneous rate of change is defined by a limit of average rates over shrinking intervals; this resolved Zeno's paradox and made "speed at an instant" meaningful.
- The derivative is the slope of the tangent; a handful of rules (power, exponential, trig, product, quotient, chain) compute it for any formula.
- Maxima and minima occur where the derivative is zero; this is the method behind optimization everywhere, including machine learning.
- Differential equations express laws of change; proportional growth gives exponentials.
- Newton and Leibniz discovered calculus independently in the 1660s–70s; its logical foundations were not secured until the nineteenth century.

[^1]: Aristotle, *Physics*, Book VI, chapter 9 (239b), reporting Zeno's paradoxes. Translated by R. P. Hardie and R. K. Gaye. [classics.mit.edu](http://classics.mit.edu/Aristotle/physics.6.vi.html). Huggett, N. (2024). "Zeno's Paradoxes." *Stanford Encyclopedia of Philosophy*. [plato.stanford.edu](https://plato.stanford.edu/entries/paradox-zeno/)
[^2]: Grabiner, J. V. (1981). *The Origins of Cauchy's Rigorous Calculus*. Cambridge, MA: MIT Press. Reprinted by Dover, 2005.
[^3]: OpenStax (2016). *Calculus Volume 1*. Chapter 3, "Derivatives." [openstax.org](https://openstax.org/books/calculus-volume-1/pages/3-introduction)
[^4]: Goodfellow, I., Bengio, Y., Courville, A. (2016). *Deep Learning*. Cambridge, MA: MIT Press. Chapter 4, "Numerical Computation," and chapter 6 on backpropagation as the chain rule. [deeplearningbook.org](https://www.deeplearningbook.org/)
[^5]: Strogatz, S. H. (2019). *Infinite Powers: How Calculus Reveals the Secrets of the Universe*. Boston: Houghton Mifflin Harcourt. Chapter 8 on exponential growth and differential equations.
[^6]: Newton, I. (1687). *Philosophiæ Naturalis Principia Mathematica*. London: Royal Society. Translated by I. B. Cohen and A. Whitman (1999), University of California Press. Leibniz, G. W. (1684). "Nova methodus pro maximis et minimis." *Acta Eruditorum*, 467–473.
[^7]: Hall, A. R. (1980). *Philosophers at War: The Quarrel between Newton and Leibniz*. Cambridge University Press. [doi:10.1017/CBO9780511524066](https://doi.org/10.1017/CBO9780511524066)
[^8]: Berkeley, G. (1734). *The Analyst; or, a Discourse Addressed to an Infidel Mathematician*. London: J. Tonson. Section 35 has the "ghosts of departed quantities." [maths.tcd.ie](https://www.maths.tcd.ie/pub/HistMath/People/Berkeley/Analyst/Analyst.html)
