---
title: Linear Algebra
subtitle: Many quantities at once. Vectors, matrices, how to solve a hundred equations together, and why this is the mathematics inside every image, search engine, and neural network.
part: IV · Structure
---

## Recap

Chapter 4 solved two equations in two unknowns by substitution. Real problems have thousands of unknowns: the stresses in every beam of a bridge, the price of every good in an economy, the brightness of every pixel in an image, the weight on every connection in a neural network. **Linear algebra** is the mathematics of handling many quantities as a single object, and since the arrival of computers it has become, by volume of use, the most important branch of mathematics in the world.

## Vectors

A **vector** is a list of numbers treated as one thing. The position of a drone is three numbers (east, north, up); a color on a screen is three (red, green, blue); a customer's profile at a retailer might be a thousand (spending in each category). Geometrically, a vector is an arrow from the origin to the point with those coordinates, and the two pictures, list and arrow, are interchangeable.

Vectors add component by component: $(1, 2) + (3, 1) = (4, 3)$, which is putting one arrow after another. Multiplying by a number stretches: $2 \times (1, 2) = (2, 4)$. The **length** of a vector is Pythagoras: $\lVert(3, 4)\rVert = \sqrt{9 + 16} = 5$, and in a thousand dimensions the same formula with a thousand terms.

The one operation that is not obvious is the **dot product**: multiply matching components and add. $(1, 2, 3) \cdot (4, 5, 6) = 4 + 10 + 18 = 32$. It measures how much two vectors point the same way: it is $\lVert a \rVert\lVert b \rVert\cos\theta$, where $\theta$ is the angle between them, so it is large and positive for aligned vectors, zero for perpendicular ones, negative for opposed ones. A search engine finds documents whose word-count vectors have a large dot product with your query's; a streaming service recommends films whose vectors align with your history's; and the **cosine similarity**, the dot product divided by the lengths, is the standard measure of how alike two things are when each is a long list of numbers.[^1]

:::howto Using vectors for the everyday
1. **Total cost**: prices $(2.50, 4.00, 1.20)$ and quantities $(3, 1, 5)$; the bill is their dot product: $7.50 + 4.00 + 6.00 = \$17.50$. Every invoice is a dot product.
2. **Weighted average**: grades $(85, 92, 78)$ with weights $(0.3, 0.5, 0.2)$; final grade $= 25.5 + 46 + 15.6 = 87.1$. Weights that sum to 1, dotted with values, is what "weighted average" means.
3. **Distance between two profiles**: subtract the vectors, then take the length. Two customers at $(100, 20, 0)$ and $(90, 25, 10)$ are $\sqrt{100 + 25 + 100} = 15$ apart in "spending space."
:::

## Matrices

A **matrix** is a rectangular grid of numbers, and it is two things at once: a table of data, and a *transformation* that turns one vector into another. Both readings matter.

As a table, a matrix with 1,000 rows (customers) and 50 columns (products) holds a store's purchase history; a 1,920 by 1,080 matrix holds a grayscale photograph. As a transformation, a matrix acts on a vector by taking dot products with each row:

$$\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 2x \\ 3y \end{pmatrix}$$

This one stretches everything by 2 horizontally and 3 vertically. Another rotates by an angle $\theta$:

$$\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

Apply it to the point $(1, 0)$ and you get $(\cos\theta, \sin\theta)$, the unit-circle point of chapter 5; apply it to $(0, 1)$ and you get $(-\sin\theta, \cos\theta)$, the same point turned a further quarter-turn. Every rotation, reflection, stretch, shear, and projection in computer graphics is a matrix, and applying them one after another is **matrix multiplication**: the product $AB$ is the transformation "first $B$, then $A$." A video game applies a few such matrices to millions of points sixty times a second, which is what a graphics card is built to do.[^2]

:::math Multiplying matrices
To multiply $A$ (with $m$ rows and $n$ columns) by $B$ (with $n$ rows and $p$ columns): the entry in row $i$, column $j$ of the product is the dot product of row $i$ of $A$ with column $j$ of $B$. The inner dimensions must match; the result is $m$ by $p$.
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\cdot5 + 2\cdot7 & 1\cdot6 + 2\cdot8 \\ 3\cdot5 + 4\cdot7 & 3\cdot6 + 4\cdot8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$
Unlike ordinary numbers, order matters: $AB \ne BA$ in general, because rotating then stretching is not the same as stretching then rotating. The **identity matrix** $I$, with 1s on the diagonal and 0s elsewhere, changes nothing, and the **inverse** $A^{-1}$ undoes $A$: $A^{-1}A = I$. Not every matrix has an inverse; one that squashes the plane onto a line cannot be undone, and its **determinant** (a single number measuring how much the matrix scales area) is zero.
:::

## Solving many equations at once

Here is the practical core. A system of linear equations,

$$\begin{aligned} 2x + y - z &= 8 \\ -3x - y + 2z &= -11 \\ -2x + y + 2z &= -3 \end{aligned}$$

is one matrix equation, $A\mathbf{x} = \mathbf{b}$, where $A$ holds the coefficients, $\mathbf{x}$ the unknowns, and $\mathbf{b}$ the right-hand sides. The solution is, formally, $\mathbf{x} = A^{-1}\mathbf{b}$. In practice nobody computes the inverse; they use **elimination**, the method in the Chinese *Nine Chapters* two thousand years ago and named for Gauss, who used it to fit orbits.[^3]

:::howto Gaussian elimination
1. Write the system as an **augmented matrix**: coefficients on the left, constants on the right.
2. Use the first row to eliminate $x$ from every row below it: subtract a suitable multiple of row 1 from each. (Adding a multiple of one equation to another does not change the solution.)
3. Use the new second row to eliminate $y$ from every row below it. Continue until the matrix is triangular: zeros below the diagonal.
4. **Back-substitute**: the last row now has one unknown; solve it, substitute up into the row above, and so on.

*Example*, the system above. Row 2 plus 1.5 × row 1: $0.5y + 0.5z = 1$. Row 3 plus row 1: $2y + z = 5$. Now eliminate $y$ from the third using the second: row 3 minus 4 × row 2 gives $-z = 1$, so $z = -1$. Back up: $0.5y - 0.5 = 1$ gives $y = 3$. Then $2x + 3 + 1 = 8$ gives $x = 2$. A computer does this for a million unknowns in the time it takes to read this sentence, when, as is usual, most of the coefficients are zero; it is how every structural engineering program, weather model, and circuit simulator spends most of its time.[^4]
:::

Three things can happen. One solution, when the equations are independent and as numerous as the unknowns. No solution, when they contradict (parallel lines). Infinitely many, when some equations are redundant (the same line twice). The determinant tells you which: nonzero means exactly one solution. With more equations than unknowns, as in fitting a line to a hundred data points, there is usually no exact solution, and the **least squares** answer of chapter 10 is the closest one, found by solving a related square system.

## Eigenvectors: what a matrix does simply

Most vectors, when a matrix acts on them, change direction. A few special ones do not: the matrix merely stretches them. Those are the **eigenvectors**, and the stretch factors are the **eigenvalues**, from the German *eigen*, "own" or "characteristic." For the stretch matrix above, the eigenvectors point along the axes, with eigenvalues 2 and 3. For a rotation (other than a half-turn), there are none in the plane; in three dimensions the axis of rotation is one.

Eigenvectors matter because they reveal what a transformation *does* in its simplest terms, and because repeated application of a matrix is dominated by its largest eigenvalue. That fact is behind three things you use daily. **Google's PageRank** treats the web as a huge matrix of links and ranks pages by the eigenvector with the largest eigenvalue, which is the steady state of a random surfer clicking links forever.[^5] **Principal component analysis** finds the eigenvectors of a dataset's covariance matrix, which are the directions in which the data vary most; it compresses a thousand-dimensional customer profile to the ten dimensions that matter and is the standard first step in data analysis. And in quantum mechanics, the possible outcomes of a measurement *are* the eigenvalues of a matrix, which is why the word appears throughout the physics guide.

## Where the computation goes

Linear algebra is where mathematics meets the machine, and two facts about that meeting matter.

First, **matrix multiplication is the bottleneck**. Training a large neural network is almost entirely matrix multiplications: each layer multiplies its input vector by a weight matrix, applies a simple function, and passes the result on; learning adjusts the weights by **gradient descent**, moving each weight a small step in the direction that reduces the error, a direction computed by the chain rule of chapter 7 applied backward through the layers.[^6] A frontier model in 2025 performs on the order of $10^{25}$ multiplications during training. Naive multiplication of two $n \times n$ matrices takes $n^3$ steps; Strassen showed in 1969 it can be done in about $n^{2.81}$, and the theoretical exponent has been pushed to about 2.371, though those algorithms are impractical.[^7] In 2025 an AI system found a way to multiply 4 by 4 complex matrices in 48 multiplications rather than 49, the first improvement in that case since Strassen (see the Latest Research section).

Second, **most real matrices are sparse**: almost all entries are zero, because most web pages do not link to most others and most customers have not bought most products. Algorithms that skip the zeros make problems with billions of unknowns tractable, and a good deal of modern applied mathematics is about exploiting that structure, increasingly with randomized methods that sketch a huge matrix with a small random one and lose almost nothing.[^8]

:::warning
A matrix is not "a table of numbers" any more than a function is "a formula." It is a transformation, and thinking of it that way is what makes eigenvectors, inverses, and determinants meaningful rather than arbitrary. If a linear algebra fact seems unmotivated, ask what it says about the transformation: the determinant is how much it scales volume, the inverse is how to undo it, the eigenvectors are the directions it leaves alone.
:::

:::formulas
| Operation | Formula |
|---|---|
| Vector length | $\lVert \mathbf{v} \rVert = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}$ |
| Dot product | $\mathbf{a}\cdot\mathbf{b} = \sum a_i b_i = \lVert\mathbf{a}\rVert\lVert\mathbf{b}\rVert\cos\theta$ |
| Cosine similarity | $\dfrac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\lVert\mathbf{b}\rVert}$ |
| Matrix product | $(AB)_{ij} = \sum_k A_{ik}B_{kj}$ |
| 2×2 determinant | $\det\begin{pmatrix} a & b \\ c & d\end{pmatrix} = ad - bc$ |
| 2×2 inverse | $\dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a\end{pmatrix}$ |
| Rotation by $\theta$ | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$ |
| Eigenvector | $A\mathbf{v} = \lambda\mathbf{v}$ |
| Linear system | $A\mathbf{x} = \mathbf{b} \Rightarrow \mathbf{x} = A^{-1}\mathbf{b}$ (solve by elimination) |
:::

:::know
- A vector is a list of numbers and an arrow; the dot product measures alignment and is behind every bill, weighted average, and similarity score.
- A matrix is a transformation. Multiplication composes transformations and is not commutative.
- Systems of linear equations are solved by elimination, the same method for 3 unknowns or 3 million.
- Eigenvectors are the directions a matrix only stretches; the largest eigenvalue dominates repeated application (PageRank, PCA).
- Neural networks are matrix multiplications plus simple functions, trained by gradient descent. Matrix multiplication is the world's most-run computation.
:::

## Summary

- Vectors package many quantities into one object; the dot product measures how aligned two are and underlies cost totals, weighted averages, and recommendation systems.
- Matrices are both data tables and transformations; their multiplication composes transformations and order matters.
- Gaussian elimination solves systems of any size and is the computational core of engineering and science software.
- Eigenvectors and eigenvalues reveal a matrix's characteristic directions and drive PageRank, principal component analysis, and quantum mechanics.
- Modern computation, above all machine learning, is dominated by matrix multiplication; sparsity and randomization make the enormous cases feasible.

[^1]: Manning, C. D., Raghavan, P., Schütze, H. (2008). *Introduction to Information Retrieval*. Cambridge University Press. Chapter 6, "Scoring, term weighting and the vector space model." [nlp.stanford.edu/IR-book](https://nlp.stanford.edu/IR-book/)
[^2]: Strang, G. (2016). *Introduction to Linear Algebra*, 5th ed. Wellesley, MA: Wellesley-Cambridge Press. Chapters 1–2. Lecture videos: MIT OpenCourseWare 18.06. [ocw.mit.edu](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
[^3]: Shen, K., Crossley, J. N., Lun, A. W.-C., trans. (1999). *The Nine Chapters on the Mathematical Art: Companion and Commentary*. Oxford University Press. Chapter 8, "Rectangular Arrays." Grcar, J. F. (2011). "How ordinary elimination became Gaussian elimination." *Historia Mathematica*, 38(2), 163–218. [doi:10.1016/j.hm.2010.06.003](https://doi.org/10.1016/j.hm.2010.06.003)
[^4]: Trefethen, L. N., Bau, D. (1997). *Numerical Linear Algebra*. Philadelphia: SIAM. Lectures 20–21 on Gaussian elimination and its cost.
[^5]: Brin, S., Page, L. (1998). "The anatomy of a large-scale hypertextual Web search engine." *Computer Networks and ISDN Systems*, 30(1–7), 107–117. [doi:10.1016/S0169-7552(98)00110-X](https://doi.org/10.1016/S0169-7552(98)00110-X). Bryan, K., Leise, T. (2006). "The \$25,000,000,000 Eigenvector: The Linear Algebra behind Google." *SIAM Review*, 48(3), 569–581. [doi:10.1137/050623280](https://doi.org/10.1137/050623280)
[^6]: Goodfellow, I., Bengio, Y., Courville, A. (2016). *Deep Learning*. Cambridge, MA: MIT Press. Chapters 2 and 6. [deeplearningbook.org](https://www.deeplearningbook.org/)
[^7]: Strassen, V. (1969). "Gaussian elimination is not optimal." *Numerische Mathematik*, 13, 354–356. [doi:10.1007/BF02165411](https://doi.org/10.1007/BF02165411). Williams, V. V., Xu, Y., Xu, Z., Zhou, R. (2024). "New Bounds for Matrix Multiplication: from Alpha to Omega." *Proceedings of SODA 2024*. [arxiv.org/abs/2307.07970](https://arxiv.org/abs/2307.07970)
[^8]: Martinsson, P.-G., Tropp, J. A. (2020). "Randomized numerical linear algebra: Foundations and algorithms." *Acta Numerica*, 29, 403–572. [doi:10.1017/S0962492920000021](https://doi.org/10.1017/S0962492920000021)
