---
title: Geometry and Trigonometry
subtitle: Shapes, areas, volumes, angles, and the triangle trick that measures anything you cannot reach. Plus the discovery that Euclid's geometry is not the only one.
part: II · The Core Toolkit
---

## Recap

Chapter 3 described Euclid's *Elements*, the book that made geometry the model of proof. This chapter is about what geometry lets you *do*: compute the area of a floor, the volume of a tank, the height of a tree from its shadow, the distance across a river. Then it turns to trigonometry, the mathematics of triangles, which is the tool behind surveying, navigation, and every wave in physics. The chapter ends with the nineteenth-century discovery that changed what geometry means.

## Angles

An **angle** measures a turn. A full turn is 360 **degrees**, a convention inherited from Babylonian base-60 arithmetic; a right angle is 90°, a straight line 180°. Mathematicians also measure angles in **radians**, where a full turn is $2\pi$, so that a right angle is $\pi/2$ and 180° is $\pi$. A radian is the angle you get by walking one radius-length around a circle's edge, and it is the natural unit because it makes the formulas of calculus come out clean (chapter 7). To convert: multiply degrees by $\pi/180$ to get radians, or radians by $180/\pi$ to get degrees; one radian is about 57.3°. Every calculator has a mode switch between the two, and leaving it in the wrong mode is the commonest error in this chapter.

Three facts about angles do most of the work in elementary geometry. The angles of any triangle add to 180°. When two lines cross, opposite angles are equal. And when a line crosses two parallel lines, it makes the same angles with each. From these, Euclid derived hundreds of results, and so can you.

## Area and volume

**Area** measures flat extent, in square units; **volume** measures space, in cubic units. The basic formulas are worth knowing by heart, because everything else is built by cutting shapes into these pieces.

:::formulas
| Shape | Area | Notes |
|---|---|---|
| Rectangle | $lw$ | length times width |
| Triangle | $\tfrac{1}{2}bh$ | half base times *perpendicular* height |
| Parallelogram | $bh$ | |
| Trapezoid | $\tfrac{1}{2}(a + b)h$ | average of the parallel sides, times height |
| Circle | $\pi r^2$ | circumference $2\pi r$ |
| **Solid** | **Volume** | **Surface area** |
| Box | $lwh$ | $2(lw + lh + wh)$ |
| Cylinder | $\pi r^2 h$ | $2\pi r^2 + 2\pi r h$ |
| Sphere | $\tfrac{4}{3}\pi r^3$ | $4\pi r^2$ |
| Cone | $\tfrac{1}{3}\pi r^2 h$ | |
| Pyramid | $\tfrac{1}{3}(\text{base area})h$ | |
:::

The pattern in the table is not accidental. Every "pointed" solid (cone, pyramid) has one-third the volume of the box or cylinder that encloses it, and the sphere has two-thirds of its enclosing cylinder, the fact Archimedes wanted on his tomb.[^1] Where these formulas come from is chapter 8's business; that they *work* is enough for now.

:::howto Finding the area of an irregular shape
1. Cut it into rectangles, triangles, and parts of circles. Draw the cuts.
2. Measure or compute each piece.
3. Add. Subtract any holes.

*Example.* An L-shaped room 6 m by 8 m with a 2 m by 3 m corner missing: $6 \times 8 - 2 \times 3 = 48 - 6 = 42$ square meters. For flooring sold by the square meter, add 10 percent for cuts and waste: order 47.
:::

:::warning
Scaling a shape up by a factor $k$ multiplies its area by $k^2$ and its volume by $k^3$. A pizza twice the diameter has four times the pizza. A person twice as tall would weigh eight times as much and stand on feet with only four times the area, which is why giants cannot exist and elephants have thick legs.[^2] This **square-cube law** is one of the most useful and most often ignored facts in everyday reasoning.
:::

## Pythagoras

In a right triangle, the square on the longest side (the **hypotenuse**, opposite the right angle) equals the sum of the squares on the other two:

$$a^2 + b^2 = c^2$$

The Babylonians knew it, the Chinese knew it, and Euclid proved it as Proposition 47 of Book I.[^3] It is the most used theorem in mathematics because it turns any distance into a calculation. The distance between two points on a map with coordinates $(x_1, y_1)$ and $(x_2, y_2)$ is the hypotenuse of a triangle whose legs are the differences: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$. In three dimensions add a third squared difference. In a spreadsheet of a thousand dimensions, add a thousand, and that is how a recommendation engine measures how similar two people are (chapter 11).

:::howto Using Pythagoras
1. Identify the right angle and the hypotenuse (the side opposite it, always the longest).
2. If you want the hypotenuse: square the legs, add, take the root.
3. If you want a leg: square the hypotenuse, subtract the square of the known leg, take the root.

*Example.* A ladder 5 m long leans against a wall with its foot 1.5 m out. How high does it reach? $h = \sqrt{5^2 - 1.5^2} = \sqrt{25 - 2.25} = \sqrt{22.75} \approx 4.77$ m. And a TV advertised as 65 inches (the diagonal) with a 16:9 shape is about 56.7 inches wide and 31.9 high, found by setting width $= 16k$, height $= 9k$, and solving $(16k)^2 + (9k)^2 = 65^2$: $337k^2 = 4225$, so $k = 3.54$.
:::

Some triples of whole numbers satisfy the equation exactly: 3-4-5, 5-12-13, 8-15-17. Builders have used 3-4-5 to lay out right angles for four thousand years, with a knotted rope. Whether the equation $a^n + b^n = c^n$ has whole-number solutions for any power higher than 2 was Fermat's question of 1637; the answer, no, took until 1995 (chapter 16).

## Similar triangles

Two triangles are **similar** if they have the same angles; then they have the same shape at different sizes, and their sides are in proportion. This is the principle behind measuring what you cannot reach. Thales is said to have measured the Great Pyramid by comparing its shadow to a stick's; the ratio of shadow to height is the same for both because the Sun's rays hit both at the same angle.[^4]

:::howto Measuring a height from a shadow
1. Measure the shadow of the tall object and the shadow of something whose height you know (a meter stick, yourself).
2. The heights are in the same ratio as the shadows: $\dfrac{H}{h} = \dfrac{S}{s}$, so $H = h \times \dfrac{S}{s}$.

*Example.* A tree casts a 14 m shadow while a 1.8 m person casts a 2.1 m shadow. Tree height $= 1.8 \times 14 / 2.1 = 12$ m.
:::

## Trigonometry

Similar triangles say that a right triangle's *shape* is fixed by one of its angles. So for each angle there are fixed ratios between the sides, and those ratios are the **trigonometric functions**. For an angle $\theta$ (theta) in a right triangle, with the side opposite it, the side adjacent to it, and the hypotenuse:

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \qquad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \qquad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

Remember them as SOH-CAH-TOA. Their values were tabulated first in India and the Islamic world (chapter 3), and now live in every calculator. What they buy you is this: know one side and one angle of a right triangle and you know everything about it.

:::howto Solving a right triangle
1. Draw it. Label the known side and angle, and the side you want.
2. Pick the function that relates the two sides involved: opposite and hypotenuse means sine; adjacent and hypotenuse means cosine; opposite and adjacent means tangent.
3. Write the equation and rearrange (chapter 4). If you know two sides and want the angle, use the inverse function ($\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$, also written arcsin, arccos, arctan), which returns the angle whose ratio is the number.

*Example.* From 50 m away, the top of a building is at an angle of 32° above eye level. The height above eye level is the side *opposite* the angle, and 50 m is *adjacent*, so $\tan 32^\circ = h/50$ and $h = 50 \tan 32^\circ \approx 50 \times 0.625 = 31.2$ m. Add your eye height. *Example 2.* A wheelchair ramp rises 0.6 m over a horizontal run of 7.2 m: its angle is $\tan^{-1}(0.6/7.2) = \tan^{-1}(0.0833) \approx 4.8^\circ$. (Accessibility codes typically require a slope no steeper than 1 in 12, or about 4.8°, so this ramp is at the limit.)[^5]
:::

## The unit circle: trigonometry for any angle

Right triangles only give angles between 0° and 90°. To extend the functions to every angle, put the triangle inside a circle of radius 1 centered at the origin. A point on that circle at angle $\theta$ from the positive $x$-axis has coordinates $(\cos\theta, \sin\theta)$: cosine is the horizontal position, sine the vertical.

{{fig:unit-circle|The unit circle. A point at angle θ from the positive x-axis has coordinates (cos θ, sin θ). As θ increases, the point circles round and the sine traces a wave: this is why anything that rotates produces oscillation.}}

Now the angle can be anything. At 90° the point is straight up, so $\sin 90^\circ = 1$ and $\cos 90^\circ = 0$. At 180° it is at $(-1, 0)$: cosine is negative. Past 360° the point comes round again, so the functions **repeat** with period 360° (or $2\pi$ radians). Plot $\sin\theta$ against $\theta$ and you get a smooth wave rising to 1, falling to −1, and repeating forever. A few values are worth knowing without a calculator:

| Angle | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| $\sin$ | 0 | $\tfrac{1}{2}$ | $\tfrac{\sqrt2}{2} \approx 0.707$ | $\tfrac{\sqrt3}{2} \approx 0.866$ | 1 |
| $\cos$ | 1 | $\tfrac{\sqrt3}{2}$ | $\tfrac{\sqrt2}{2}$ | $\tfrac{1}{2}$ | 0 |
| $\tan$ | 0 | $\tfrac{1}{\sqrt3} \approx 0.577$ | 1 | $\sqrt3 \approx 1.732$ | undefined | Every periodic phenomenon, sound, light, tides, alternating current, the seasons, is described by sines and cosines, because every rotation seen from the side is a sine wave.[^6] Pythagoras applied to the unit circle gives the identity that every trigonometric fact descends from: $\sin^2\theta + \cos^2\theta = 1$.

## Any triangle

Most triangles are not right triangles. Two laws handle the rest. The **law of sines** says the ratio of each side to the sine of the opposite angle is the same for all three sides: $a/\sin A = b/\sin B = c/\sin C$. The **law of cosines** is Pythagoras with a correction term for the angle not being 90°: $c^2 = a^2 + b^2 - 2ab\cos C$. Surveyors have used these since the sixteenth century to map countries by **triangulation**: measure one baseline carefully, then measure only angles from its ends to distant landmarks, and every distance follows.[^7] GPS does the same thing with satellites and time delays instead of angles.

:::howto Finding a distance you cannot walk
You stand on a riverbank at point $A$; a tree on the far bank is at $C$. Walk 80 m along your bank to $B$. From $A$ the tree is at 90° to your path; from $B$ it is at 62°.
1. The triangle $ABC$ has a right angle at $A$, so $\tan 62° = AC / 80$ and $AC = 80 \tan 62° \approx 80 \times 1.881 = 150$ m. That is the river's width.
2. If the angle at $A$ were not a right angle, use the law of cosines. Two roads leave a junction at 40° to each other; you drive 3 km along one and a friend 5 km along the other. Distance between you: $d^2 = 3^2 + 5^2 - 2(3)(5)\cos 40° = 9 + 25 - 22.98 = 11.02$, so $d \approx 3.3$ km.
:::

## Coordinates, and the geometry of curves

Descartes's idea (chapter 3) was that a point is a pair of numbers and a curve is an equation. A circle of radius $r$ centered at the origin is every point with $x^2 + y^2 = r^2$, which is Pythagoras again. A straight line is $y = mx + b$, where $m$ is the **slope** (rise over run) and $b$ is where the line crosses the $y$-axis. Parallel lines have the same slope; perpendicular lines have slopes that multiply to −1. Chapter 6 takes this over and builds the theory of functions on it; chapter 7 asks what the slope of a *curve* is, which is calculus.

## The geometry that is not Euclid's

For two thousand years one of Euclid's five axioms bothered people: the **parallel postulate**, which in effect says that through a point not on a line, exactly one parallel line can be drawn. It seemed less obvious than the others, and mathematicians tried to prove it from them. All failed. In the 1820s Nikolai Lobachevsky in Russia and János Bolyai in Hungary independently did the unthinkable: they assumed it was *false*, that many parallels could pass through the point, and derived a geometry that was strange but perfectly consistent.[^8] Gauss had reached the same conclusion privately and not dared publish. In this **hyperbolic geometry**, the angles of a triangle add to *less* than 180°, and the deficit grows with the triangle's size. A second alternative, **spherical** geometry (or its refinement, elliptic geometry), has no parallels at all, and triangles' angles sum to *more* than 180°; navigators had used it on the globe for centuries without noticing it was a different geometry.

The discovery meant that Euclid's axioms were not truths about space but *choices*, and that which geometry describes the real universe is a question for measurement, not logic. Bernhard Riemann generalized all three in 1854 into a theory of curved spaces of any dimension; sixty years later Einstein used exactly Riemann's mathematics to describe gravity as the curvature of spacetime, and the physics guide tells that story.[^9] Every GPS fix uses it.

:::know
- Angles of a triangle sum to 180°; a full turn is 360° or $2\pi$ radians.
- Area scales with the square of size; volume with the cube. Double the size, eight times the weight.
- $a^2 + b^2 = c^2$ turns every distance into arithmetic, in any number of dimensions.
- Similar triangles have proportional sides; that is how you measure what you cannot reach.
- SOH-CAH-TOA: one side and one angle fix a right triangle. Inverse functions give the angle from the ratio. Check the calculator is in degree mode.
- $\sin^2\theta + \cos^2\theta = 1$. Rotation seen from the side is a sine wave.
- Euclid's geometry is one of several consistent ones. Which describes space is a question for experiment.
:::

## Summary

- Areas and volumes come from a dozen formulas; irregular shapes are cut into pieces. Scaling multiplies area by $k^2$ and volume by $k^3$.
- Pythagoras gives distance from coordinates in any dimension; similar triangles give heights from shadows.
- Trigonometric functions are the fixed side ratios of a right triangle; on the unit circle they extend to all angles and become the language of waves. The laws of sines and cosines handle any triangle and mapped the world by triangulation.
- Coordinates make curves into equations, the bridge to functions and calculus.
- In the 1820s Lobachevsky and Bolyai showed Euclid's parallel axiom could be denied without contradiction; Riemann generalized it; Einstein used it.

[^1]: Heath, T. L., ed. (1897). *The Works of Archimedes*. Cambridge University Press. *On the Sphere and Cylinder*, Book I, Proposition 34 and corollary. [archive.org](https://archive.org/details/worksofarchimede00arch)
[^2]: Haldane, J. B. S. (1926). "On Being the Right Size." *Harper's Magazine*, March 1926. Reprinted in *Possible Worlds and Other Essays* (1927). [harpers.org](https://harpers.org/archive/1926/03/on-being-the-right-size/)
[^3]: Euclid. *Elements*, Book I, Proposition 47. Edited by D. E. Joyce, Clark University. [mathcs.clarku.edu](https://mathcs.clarku.edu/~djoyce/elements/bookI/propI47.html). Maor, E. (2007). *The Pythagorean Theorem: A 4,000-Year History*. Princeton University Press.
[^4]: Diogenes Laërtius, *Lives of Eminent Philosophers*, I.27, reporting Hieronymus of Rhodes on Thales and the pyramid. Translated by R. D. Hicks (1925), Loeb Classical Library. [perseus.tufts.edu](http://www.perseus.tufts.edu/hopper/text?doc=Perseus:text:1999.01.0258:book=1:chapter=1)
[^5]: U.S. Access Board. *ADA Standards for Accessible Design*, §405.2: ramp running slope not steeper than 1:12. [access-board.gov](https://www.access-board.gov/ada/guides/chapter-4-ramps-and-curb-ramps/)
[^6]: OpenStax (2021). *Algebra and Trigonometry 2e*. Chapters 7–8, "The Unit Circle" and "Periodic Functions." [openstax.org](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-introduction-to-the-unit-circle-sine-and-cosine-functions)
[^7]: Alder, K. (2002). *The Measure of All Things: The Seven-Year Odyssey and Hidden Error That Transformed the World*. New York: Free Press. On the triangulation of the Paris meridian, 1792–1799, which defined the meter.
[^8]: Bonola, R. (1912). *Non-Euclidean Geometry: A Critical and Historical Study of Its Development*. Translated by H. S. Carslaw. Reprinted by Dover, 1955. Includes translations of Bolyai's *Appendix* (1832) and Lobachevsky's *Theory of Parallels* (1840). [archive.org](https://archive.org/details/noneuclideangeom00bono)
[^9]: Riemann, B. (1854). "Über die Hypothesen, welche der Geometrie zu Grunde liegen." Habilitation lecture, Göttingen; published 1868. English translation in Spivak, M. (1979), *A Comprehensive Introduction to Differential Geometry*, vol. 2. Einstein's use: Einstein, A. (1916). "Die Grundlage der allgemeinen Relativitätstheorie." *Annalen der Physik*, 354(7), 769–822. [doi:10.1002/andp.19163540702](https://doi.org/10.1002/andp.19163540702)
