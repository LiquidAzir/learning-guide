---
title: Making Things Up
subtitle: How a network learns to paint. Autoencoders, the forger-and-detective game that produced the first fake faces, and the diffusion models behind every image generator, explained as what they are: learning to remove noise.
part: III · Neural Networks
---

## Recap

Every model so far took an input and produced a label, a number, or a translation. **Generative models** do the reverse: they learn what data looks like and produce new examples of it. A photograph of a face that has never existed; a paragraph in the style of a newspaper; a protein that folds; a song. The technical shift is from modeling $P(\text{label} \mid \text{input})$ to modeling $P(\text{data})$ itself, and this chapter tells how three quite different ideas did it, ending with the one that won.

## Compress, then decompress

Start with the simplest generative idea. An **autoencoder** is a network trained to output its own input, through a bottleneck: an **encoder** compresses a 784-pixel image to, say, 32 numbers (the **latent code**), and a **decoder** reconstructs the image from those 32. The loss is reconstruction error. Because the bottleneck is narrow, the network cannot memorize; it must learn the regularities of the data, the few dimensions along which faces or digits actually vary, and discard the rest.[^1] Chapter 7 met this as dimensionality reduction; here the interesting half is the decoder. Feed it a latent code it has never seen and it produces an image that never existed.

The catch is that most random codes decode to garbage, because the encoder has scattered the real data's codes irregularly through latent space. The **variational autoencoder** (VAE, 2013) fixes this by forcing the codes to be normally distributed around the origin, so that any point sampled from a standard Gaussian decodes to something plausible.[^2] VAEs generate recognizable but blurry images, because their loss averages over uncertainty. They matter for the idea, which survives inside the diffusion models below: generate in a compressed latent space, not in pixels.

## The forger and the detective

In 2014 Ian Goodfellow, then a graduate student, proposed a different game.[^3] Train two networks against each other. The **generator** turns random noise into an image. The **discriminator** looks at an image and guesses whether it came from the training set or from the generator. The discriminator is trained to guess correctly; the generator is trained to fool it. As the detective gets better at spotting forgeries, the forger gets better at forging, and at equilibrium the generator's images are indistinguishable from real ones.

**Generative adversarial networks** (GANs) produced the first photorealistic synthetic images. By early 2019, NVIDIA's StyleGAN generated faces at high resolution that most people could not tell from photographs, and the website "This Person Does Not Exist" showed a new one on every reload.[^4] GANs also gave the world **deepfakes**, face swaps in video, and the first wave of concern about synthetic media (chapter 21).

Their limitation was the game itself. Two networks chasing each other is unstable: training oscillates, and the generator often collapses to producing a few images the discriminator finds hard, ignoring the rest of the data's variety (**mode collapse**). GANs never scaled cleanly to the diversity of "any image described by any caption." That needed a different idea.

## Learning to remove noise

Take a photograph. Add a little Gaussian noise. Add a little more. Repeat a thousand times and you have pure static. That direction is easy and requires no learning. The **diffusion model** learns to run it backward.[^5]

Train a network on one task: given a noisy image and the noise level, predict the noise that was added. That is a supervised regression problem (chapter 4) with unlimited training data, because you can noise any image any amount. Once the network can predict noise, generation is: start from pure static, predict the noise, subtract a little of it, repeat a few dozen to a few hundred times. Each step makes the image slightly less noisy and slightly more like something from the training distribution. Out of static, a face assembles.

{{fig:diffusion|A diffusion model. Forward (top): a training image is progressively destroyed by adding noise, which needs no learning. Reverse (bottom): a network trained to predict the added noise runs the process backward, starting from pure static and removing noise step by step until an image emerges. Conditioning on a text caption at each step steers what emerges.}}

:::math The denoising objective
The forward process adds noise: $\mathbf{x}_t = \sqrt{\alpha_t}\,\mathbf{x}_0 + \sqrt{1 - \alpha_t}\,\boldsymbol{\epsilon}$, where $\mathbf{x}_0$ is the clean image, $\boldsymbol{\epsilon}$ (epsilon) is a sample of Gaussian noise, and $\alpha_t$ (alpha; written $\bar\alpha_t$ in the original paper) falls from 1 to 0 as the step $t$ runs from 0 to $T$: at $t = 0$ the image is clean, at $t = T$ it is pure noise. The network $\boldsymbol{\epsilon}_\theta$ is trained to predict the noise from the noisy image and the step:
$$L = \mathbb{E}\big\lVert \boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)\big\rVert^2$$
just squared error between the true noise and the predicted noise, averaged over images, steps, and noise samples. Ho, Jain, and Abbeel showed in 2020 that this simple objective, a simplification of a more complicated one derived from probability theory, produces state-of-the-art images. Sampling reverses the process: from $\mathbf{x}_T \sim \mathcal{N}(0, I)$, repeatedly compute $\mathbf{x}_{t-1}$ from $\mathbf{x}_t$ by subtracting a scaled version of the predicted noise and adding a small amount of fresh noise, for $t = T$ down to 1.
:::

Why does this beat GANs? The training is stable, because it is ordinary regression with a fixed target. It covers the whole data distribution, because every training image is used at every noise level. And it scales: bigger networks and more data give better images, predictably, with none of the adversarial game's fragility. Within two years of the 2020 paper, diffusion had displaced GANs from large-scale image generation, though adversarial losses live on inside many systems' components.[^6]

## Steering: text to image

A diffusion model trained on faces makes faces. To make "a watercolor of a fox reading a newspaper," the model needs to be told, and the telling uses the embeddings of chapter 12. Encode the caption with a text encoder (CLIP, from chapter 11, was the first choice) into a vector; feed that vector into the denoising network at every step, through attention layers that let each image region attend to each word. The network learns, from millions of captioned images, what noise to remove to make the image match the caption.[^7] A trick called **classifier-free guidance** sharpens this: run the denoiser twice, with and without the caption, and push the result further in the direction the caption indicates than the model would go on its own, at the cost of some diversity.

Two engineering decisions made it practical. **Latent diffusion** (2022) runs the whole process not on pixels but in the compressed latent space of a pretrained autoencoder, 48 times smaller, so that a model like Stable Diffusion could train on a few hundred GPUs and run on a consumer graphics card.[^8] And releasing Stable Diffusion's weights openly in August 2022 put image generation in millions of hands within weeks, with consequences for artists, for misinformation, and for copyright law that chapter 21 takes up. DALL-E 2 (April 2022), Midjourney, and Imagen were the other systems of that year; by 2024 the same recipe generated video (Sora, Veo), audio, and 3D shapes, and in 2024 AlphaFold 3 used a diffusion model to generate the atomic coordinates of protein complexes.[^9] The newest image systems use a close relative called **flow matching**, which learns a straight path from noise to image rather than a curved one, and in 2025 the first diffusion-style *text* generators appeared, so the line between the two families is blurring.

:::howto Writing a prompt that an image model can use
Diffusion models respond to captions that resemble the captions they were trained on: descriptive, specific, and concrete.
1. **Subject first, then setting, then style**: "a red fox reading a newspaper on a park bench, autumn leaves, soft morning light, watercolor illustration."
2. **Name the medium and the look**: photograph, oil painting, pencil sketch, isometric render, 35 mm film, studio lighting. These words were in the training captions and steer strongly.
3. **Say what you mean, not what you don't**: models handle negation badly ("no hat" often produces a hat). Use the negative-prompt field if the tool has one.
4. **Expect failures on text, hands, counting, and spatial relations**: "three cups to the left of a bowl" frequently comes out wrong, because captions rarely describe such things precisely. Newer models are better; none is reliable.
5. **Iterate**: generate several, pick the closest, and refine the prompt or use inpainting (regenerate only a masked region) to fix parts.

The same principles, minus the visual vocabulary, apply to prompting language models, which chapter 18 covers.
:::

## Generating language

A language model is a generative model too: it learns $P(\text{text})$ and samples from it. But text is discrete, and the diffusion recipe, which relies on adding continuous noise, does not transfer directly (research on discrete diffusion continues). Instead language models use the oldest generative trick: **autoregression**. Factor the probability of a sequence as a product of conditionals, one word at a time,

$$P(w_1, w_2, \ldots, w_n) = P(w_1)\,P(w_2 \mid w_1)\,P(w_3 \mid w_1, w_2)\cdots$$

train a network to predict each next word from the words before it, and generate by sampling a word, appending it, and predicting the next. This is the "guess the next word" of chapter 1, and it is the entire training objective of GPT. Chapter 15 gives the network that does it; chapter 16 shows what happens when it is scaled.

## What generative models are for

Beyond pictures and prose, generative models serve as **simulators** (weather, molecules, traffic), as **data augmenters** (synthetic training data where real data is scarce or private), as **compressors** (a good generative model is, by information theory, a good compressor, and a language model compresses text better than any standard tool if you do not count the size of the model itself), and as **priors** for solving inverse problems: a diffusion model of natural images can fill in missing pixels, remove blur, or reconstruct a medical scan from fewer measurements, because it knows what images look like.[^10] The line between "generating" and "understanding" turns out to be thin: to produce a plausible photograph of a kitchen, the model has to have learned that cups sit on tables and shadows fall away from windows.

:::warning
A generative model produces samples from what it learned, not truths about the world. A photorealistic image of an event is evidence of nothing. A fluent paragraph of prose can be entirely fabricated, complete with citations that do not exist, which language models do routinely (chapter 18 calls this **hallucination** and explains why). The same property that makes these systems useful, producing plausible things, makes them unreliable as sources, and the skill of using them is knowing which of those two you are looking at.
:::

:::formulas
| Idea | Formula |
|---|---|
| Autoencoder loss | $\lVert \mathbf{x} - \text{dec}(\text{enc}(\mathbf{x}))\rVert^2$ |
| GAN objective | $\min_G \max_D\; \mathbb{E}[\log D(\mathbf{x})] + \mathbb{E}[\log(1 - D(G(\mathbf{z})))]$ |
| Forward diffusion | $\mathbf{x}_t = \sqrt{\alpha_t}\,\mathbf{x}_0 + \sqrt{1-\alpha_t}\,\boldsymbol{\epsilon}$ |
| Denoising loss | $\mathbb{E}\lVert \boldsymbol{\epsilon} - \boldsymbol{\epsilon}_\theta(\mathbf{x}_t, t)\rVert^2$ |
| Autoregressive factorization | $P(w_{1:n}) = \prod_t P(w_t \mid w_{<t})$ |
:::

:::know
- A generative model learns the distribution of the data and samples new examples from it.
- Autoencoders compress through a bottleneck; the decoder can generate; VAEs make the latent space samplable.
- GANs pit a generator against a discriminator; they made the first realistic fakes and were unstable to train.
- Diffusion models learn to predict added noise, then remove it step by step from static. Stable training, full coverage, and scaling made them the standard for images, video, audio, and molecules.
- Text conditioning through embeddings and attention turns a diffusion model into a text-to-image system; latent diffusion made it cheap.
- Language models generate autoregressively, one token at a time. Plausible is not true.
:::

## Summary

- Generative modeling learns $P(\text{data})$; autoencoders and VAEs do it by compression, GANs by an adversarial game, diffusion by learning to reverse the addition of noise.
- Diffusion won because its objective is stable supervised regression that covers the whole distribution and scales; since 2022 it underlies image, video, audio, and molecular generation.
- Text-to-image systems condition the denoiser on caption embeddings; latent diffusion and open weights made them ubiquitous in 2022.
- Language is generated autoregressively, one token conditioned on all previous ones, which is the training objective of large language models.
- Generative models simulate, augment, compress, and solve inverse problems; their outputs are plausible samples, not facts.

[^1]: Hinton, G. E., Salakhutdinov, R. R. (2006). "Reducing the Dimensionality of Data with Neural Networks." *Science*, 313(5786), 504–507. [doi:10.1126/science.1127647](https://doi.org/10.1126/science.1127647)
[^2]: Kingma, D. P., Welling, M. (2014). "Auto-Encoding Variational Bayes." *ICLR 2014*. [arxiv.org/abs/1312.6114](https://arxiv.org/abs/1312.6114)
[^3]: Goodfellow, I. et al. (2014). "Generative Adversarial Nets." *NeurIPS 27*. [arxiv.org/abs/1406.2661](https://arxiv.org/abs/1406.2661). Republished as *Communications of the ACM*, 63(11), 139–144 (2020). [doi:10.1145/3422622](https://doi.org/10.1145/3422622)
[^4]: Karras, T., Laine, S., Aila, T. (2019). "A Style-Based Generator Architecture for Generative Adversarial Networks." *CVPR 2019*. [arxiv.org/abs/1812.04948](https://arxiv.org/abs/1812.04948)
[^5]: Sohl-Dickstein, J., Weiss, E., Maheswaranathan, N., Ganguli, S. (2015). "Deep Unsupervised Learning using Nonequilibrium Thermodynamics." *ICML 2015*. [arxiv.org/abs/1503.03585](https://arxiv.org/abs/1503.03585). Ho, J., Jain, A., Abbeel, P. (2020). "Denoising Diffusion Probabilistic Models." *NeurIPS 33*. [arxiv.org/abs/2006.11239](https://arxiv.org/abs/2006.11239)
[^6]: Dhariwal, P., Nichol, A. (2021). "Diffusion Models Beat GANs on Image Synthesis." *NeurIPS 34*. [arxiv.org/abs/2105.05233](https://arxiv.org/abs/2105.05233)
[^7]: Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., Chen, M. (2022). "Hierarchical Text-Conditional Image Generation with CLIP Latents" (DALL-E 2). [arxiv.org/abs/2204.06125](https://arxiv.org/abs/2204.06125). Ho, J., Salimans, T. (2022). "Classifier-Free Diffusion Guidance." [arxiv.org/abs/2207.12598](https://arxiv.org/abs/2207.12598)
[^8]: Rombach, R., Blattmann, A., Lorenz, D., Esser, P., Ommer, B. (2022). "High-Resolution Image Synthesis with Latent Diffusion Models." *CVPR 2022*. [arxiv.org/abs/2112.10752](https://arxiv.org/abs/2112.10752)
[^9]: Abramson, J. et al. (2024). "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature*, 630, 493–500. [doi:10.1038/s41586-024-07487-w](https://doi.org/10.1038/s41586-024-07487-w). Saharia, C. et al. (2022). "Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding" (Imagen). *NeurIPS 35*. [arxiv.org/abs/2205.11487](https://arxiv.org/abs/2205.11487)
[^10]: Delétang, G. et al. (2024). "Language Modeling Is Compression." *ICLR 2024*. [arxiv.org/abs/2309.10668](https://arxiv.org/abs/2309.10668). Song, Y., Shen, L., Xing, L., Ermon, S. (2022). "Solving Inverse Problems in Medical Imaging with Score-Based Generative Models." *ICLR 2022*. [arxiv.org/abs/2111.08005](https://arxiv.org/abs/2111.08005)
