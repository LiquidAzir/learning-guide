---
title: Graphics and the GPU
subtitle: Turning a description of a world into eight million coloured dots, sixty times a second, with a budget of sixteen milliseconds — and the equation that says what the right answer would be.
part: IV · Systems in the World
---

## Recap

Chapter 8 mentioned that a GPU trades complex cores for thousands of simple ones. This chapter is what they were built to do, why the shape of the problem produced that shape of machine, and how the machine then escaped into everything else.

## The budget

A display running at 60 hertz gives you 16.7 milliseconds per frame, at 120 hertz 8.3, and virtual reality demands both a high rate and a total motion-to-photon latency under about 20 milliseconds or people feel ill. In that time, a modern frame at 4K resolution must produce 8.3 million pixels, each of which may be the result of hundreds of arithmetic operations. That is why graphics hardware is measured in trillions of operations per second, and why the field's history is a series of approximations chosen to fit a fixed time budget.

## Geometry is matrices

A scene is a list of triangles, each given by three points in space. Everything done to them — moving, rotating, scaling, viewing from a camera, projecting onto a screen — is a matrix multiplication, and the reason this is convenient is that a chain of such operations can be multiplied together into one matrix in advance.

:::math Why graphics uses four numbers for a three-dimensional point
Rotation and scaling are matrix multiplications, but translation — simply moving something — is an addition, and mixing the two prevents combining a chain into one matrix. The fix is **homogeneous coordinates**: write the point $(x, y, z)$ as $(x, y, z, 1)$ and use $4 \times 4$ matrices.

$$\begin{pmatrix} x' \\ y' \\ z' \\ 1 \end{pmatrix} = \begin{pmatrix} r_{11} & r_{12} & r_{13} & t_x \\ r_{21} & r_{22} & r_{23} & t_y \\ r_{31} & r_{32} & r_{33} & t_z \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \\ 1 \end{pmatrix}$$

The $r$ entries are the rotation and scaling; $t_x, t_y, t_z$ are the translation; the primed values are the result. Because the extra 1 multiplies the translation column, a move becomes part of the multiplication.

The fourth coordinate also delivers perspective. A projection matrix puts a value depending on $z$ into the bottom row, and dividing through by it at the end shrinks distant objects in exact proportion to their distance — which is what perspective is. One uniform mechanism does rigid motion, scaling, and the geometry of vision.
:::

## Rasterization: the fast approximation

The pipeline that has run real-time graphics for thirty years works forwards, from geometry to pixels.

1. **Vertex processing.** Transform each triangle's corners by the combined matrix into screen space.
2. **Clipping and culling.** Discard what is off-screen, behind the camera, or facing away.
3. **Rasterization.** For each triangle, find which pixels it covers, interpolating position, colour, and texture coordinates across it.
4. **Fragment shading.** For each covered pixel, compute a colour: look up textures, evaluate lighting.
5. **Depth test.** Keep the fragment only if it is nearer than what is already there, using a **z-buffer** that stores a depth per pixel. Ed Catmull's 1974 idea, and it is why objects can be drawn in any order and still occlude correctly.[^1]

This is fast because every stage is embarrassingly parallel — millions of pixels, each independent — which is exactly the workload a machine of thousands of simple cores is built for.

It is also fundamentally local. A rasterizer shades each fragment knowing about that surface and the light sources, but not about the rest of the scene, so it cannot natively produce shadows, reflections, or the light that bounces off a red wall and tints a white one. Every one of those has been faked with a specialized technique — shadow maps, environment maps, ambient occlusion, precomputed light probes — and a great deal of the craft of real-time graphics is knowing which approximation fails where.

## Ray tracing: the slow correct one

The other approach works backwards. For each pixel, send a ray out from the eye, find what it hits, and ask what light arrives there — recursively, since the answer involves rays sent from that point. Turner Whitted's 1980 paper made this practical for mirrors and glass; the cost is that rays go wherever the geometry sends them, which destroys the memory locality that makes rasterization fast (chapter 8).[^2]

In 1986 James Kajiya wrote down what all of these techniques are approximating.

:::math The rendering equation
$$L_o(\mathbf{x}, \omega_o) = L_e(\mathbf{x}, \omega_o) + \int_{\Omega} f_r(\mathbf{x}, \omega_i, \omega_o)\, L_i(\mathbf{x}, \omega_i) (\omega_i \cdot \mathbf{n})\, d\omega_i$$

$L_o$ is the light leaving point $\mathbf{x}$ in direction $\omega_o$ (omega). $L_e$ is light the surface emits itself, which is zero unless it is a lamp. The integral sign $\int$ means "add up over all of them," and $\Omega$ is the hemisphere of directions above the surface, so we are summing over every direction light could arrive from. $L_i$ is the light arriving from direction $\omega_i$. $f_r$ is the material: how much light from $\omega_i$ is reflected towards $\omega_o$, which is what makes chalk different from chrome. And $(\omega_i \cdot \mathbf{n})$ is the cosine of the angle to the surface normal $\mathbf{n}$, because light hitting at a glancing angle is spread over more area.

It is a recursive integral: $L_i$ arriving at this point is $L_o$ leaving some other point. Every rendering method ever written is an approximate solution to this one equation, and knowing that turned a bag of tricks into a field with a correct answer to compare against.[^3]
:::

Nobody solves it exactly. **Path tracing** estimates the integral by Monte Carlo sampling: fire random rays, average the results, and accept that the answer is noisy until enough have been fired. This is what film visual effects have used for two decades, at minutes to hours per frame. Since 2018, consumer graphics hardware has included units that accelerate ray-scene intersection, and real-time rendering has become a hybrid: rasterize the bulk, trace rays for the effects that need global knowledge, then use a denoiser — increasingly a neural network — to turn a handful of noisy samples per pixel into a clean image.

## Sampling, again

A pixel is a sample of a continuous image, so chapter 4's sampling theorem applies directly. Edges have unlimited detail, sampling them at pixel spacing is sampling below the Nyquist rate, and the result is **aliasing**: jagged edges, and textures that shimmer as the camera moves. The fixes are the ones signal processing prescribes — sample more often and average (supersampling), pre-filter the source (mipmaps, which store each texture at a series of halved resolutions and pick the level matching the on-screen size), and accumulate samples across frames.

This is a good place to notice how much of graphics is signal processing wearing different clothes.

## The machine that escaped

GPUs were fixed-function pipelines until around 2001, when the vertex and fragment stages became programmable: you supplied a small program, a **shader**, run once per vertex or per pixel across thousands of cores. Researchers immediately began encoding non-graphics problems as textures and shaders to borrow the throughput, and by 2007 the vendors had given up resisting and exposed the hardware directly for general computation.[^4]

The reason the hardware suits so much beyond graphics is that its native operation — apply the same instruction to thousands of independent data items, with high memory bandwidth and tolerance for latency — is also the shape of matrix multiplication, which is the shape of neural networks. The machine built to shade pixels became the machine that trains models ([the AI guide covers what it trains](#/ai/training)), and that is now the larger market.

## Neural rendering

The newest turn inverts the pipeline: instead of describing a scene and rendering it, learn a scene representation from photographs. **Neural radiance fields**, from 2020, train a small network to answer "what colour and density is at this point, seen from this direction," and render novel views by integrating along rays; the quality was startling and the speed was minutes per image.[^5] **3D Gaussian splatting**, in 2023, replaced the network with millions of small translucent blobs that can be rasterized directly, achieving comparable quality at real-time rates and displacing the earlier approach for most practical use.[^6] Alongside this, upscaling and frame generation now render at lower resolution and reconstruct the rest with a network, which has become the standard way to meet the frame budget.

## What we still argue about

Whether real-time rendering will converge fully on path tracing as hardware improves, or whether hybrids remain permanent. How to evaluate images that a network reconstructed rather than computed, since traditional error metrics do not match what looks right, and since generated frames can be confidently wrong. Whether the industry's dependence on one vendor's compute platform is healthy. And how much of the rendering pipeline survives at all if learned representations turn out to be better than geometry for most content.

## Summary

- A frame at 60 hertz must be finished in 16.7 milliseconds, which sets every design decision in real-time graphics.
- Homogeneous coordinates let rotation, scaling, translation, and perspective all be one $4\times4$ matrix multiplication.
- Rasterization transforms triangles, finds covered pixels, shades them, and resolves visibility with a z-buffer; it is fast, parallel, and blind to the rest of the scene, so shadows and reflections are approximations.
- The rendering equation states what the correct answer is: emitted light plus an integral over all incoming directions, weighted by the material and the angle.
- Path tracing samples that integral randomly; hardware ray acceleration since 2018 has made hybrid real-time rendering standard, with neural denoising.
- Aliasing in graphics is the sampling theorem of chapter 4, and mipmaps and supersampling are its standard remedies.
- Programmable shaders turned GPUs into general parallel machines, which is why they now train neural networks; neural rendering is now returning the favour.

[^1]: Catmull, E. (1974). *A Subdivision Algorithm for Computer Display of Curved Surfaces*. PhD thesis, University of Utah. Akenine-Möller, T., Haines, E., Hoffman, N. et al. (2018). *Real-Time Rendering*, 4th ed. Boca Raton: CRC Press.
[^2]: Whitted, T. (1980). "An improved illumination model for shaded display." *Communications of the ACM*, 23(6), 343–349. [doi:10.1145/358876.358882](https://doi.org/10.1145/358876.358882). Blinn, J. F. (1977). "Models of light reflection for computer synthesized pictures." *SIGGRAPH '77*, 192–198. [doi:10.1145/563858.563893](https://doi.org/10.1145/563858.563893)
[^3]: Kajiya, J. T. (1986). "The rendering equation." *SIGGRAPH '86*, 143–150. [doi:10.1145/15922.15902](https://doi.org/10.1145/15922.15902). Pharr, M., Jakob, W., Humphreys, G. (2023). *Physically Based Rendering: From Theory to Implementation*, 4th ed. Cambridge, MA: MIT Press. Free online: [pbr-book.org](https://pbr-book.org/)
[^4]: Owens, J. D. et al. (2008). "GPU Computing." *Proceedings of the IEEE*, 96(5), 879–899. [doi:10.1109/JPROC.2008.917757](https://doi.org/10.1109/JPROC.2008.917757). Nickolls, J. et al. (2008). "Scalable Parallel Programming with CUDA." *ACM Queue*, 6(2), 40–53. [doi:10.1145/1365490.1365500](https://doi.org/10.1145/1365490.1365500)
[^5]: Mildenhall, B. et al. (2020). "NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis." *ECCV 2020*, 405–421. [doi:10.1007/978-3-030-58452-8_24](https://doi.org/10.1007/978-3-030-58452-8_24), [arXiv:2003.08934](https://arxiv.org/abs/2003.08934)
[^6]: Kerbl, B., Kopanas, G., Leimkühler, T., Drettakis, G. (2023). "3D Gaussian Splatting for Real-Time Radiance Field Rendering." *ACM Transactions on Graphics*, 42(4), 139. [doi:10.1145/3592433](https://doi.org/10.1145/3592433)
