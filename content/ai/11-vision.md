---
title: Seeing
subtitle: How a network learns to recognize a cat. Convolutions, the 2012 result that started everything, what the layers actually detect, and the stickers that make a stop sign invisible.
part: III · Neural Networks
---

## Why does an image model need more than a list of pixels?

Chapter 9 said networks learn hierarchies of features; chapter 10 said how they are trained. This chapter is where the two first paid off at scale, in computer vision, and it introduces the architectural idea that made it possible: building into the network the fact that a cat is a cat wherever it appears in the picture.

## Why pixels are hard

A photograph is a grid of numbers: for a 224-by-224 color image, about 150,000 of them. Feed those to the fully connected network of chapter 9 and the first layer alone needs 150,000 weights *per neuron*; with a thousand neurons, 150 million parameters, before anything useful has happened. Worse, the network has no idea that pixel (10, 10) is next to pixel (10, 11), or that a cat in the top-left corner is the same cat as one in the bottom-right. It would have to learn, separately, to recognize a cat at every position. There is not enough data in the world.

The fix is to build the structure of images into the architecture, an inductive bias in the sense of chapter 3. Images have two properties a network should assume. **Locality**: a pixel's meaning depends mostly on its neighbors. **Translation invariance**: an edge, a texture, a whisker, is the same thing wherever it appears. A **convolutional neural network** (CNN) assumes both, and the assumption cuts the parameter count by a factor of thousands.

## Convolutions

A **convolution** slides a small grid of weights, a **filter** or **kernel** (typically 3×3 or 5×5), across the image. At each position it computes the dot product of the filter with the patch of pixels beneath it and writes the result to the corresponding position in an output grid, the **feature map**. A filter with negative weights on the left and positive on the right responds strongly wherever the image has a vertical edge with dark on the left and light on the right. Slide it everywhere and the feature map lights up at every such edge in the picture.

The same nine weights are used at every position. That is **weight sharing**, and it is what makes convolution efficient and translation-invariant: an edge detector is an edge detector everywhere, learned once. A convolutional layer learns dozens of such filters, each producing its own feature map; a 3×3 layer with 64 filters on a 3-channel color image has $3 \times 3 \times 3 \times 64 + 64 = 1{,}792$ parameters, against the 150 million above.

A color image has three **channels** (red, green, blue), so a first-layer filter is really 3×3×3, and each layer's stack of feature maps becomes the channels of the next. Between convolutions, **pooling** layers shrink the feature maps by taking the maximum (or average) over each small window, discarding exact position in favor of "this feature is present around here." Stacking convolution, nonlinearity, and pooling a dozen times gives a network whose early layers see small patches (a small **receptive field**) and detect edges and colors, whose middle layers see larger regions and detect textures and parts, and whose late layers see the whole image and detect objects.[^1]

:::math A convolution
For an image $I$ and a $3\times3$ filter $K$, the output at position $(i, j)$ is
$$(I * K)_{ij} = \sum_{a=-1}^{1}\sum_{b=-1}^{1} I_{i+a,\,j+b}\,K_{a,b}$$
a weighted sum of the nine pixels around $(i, j)$ with the filter's weights. (Mathematicians call this cross-correlation and reserve "convolution" for the version with the filter flipped; deep learning uses the word loosely, and since the filter is learned the distinction does not matter.) The filter values are learned by backpropagation like any other weights; the only difference from a dense layer is that the same weights are reused at every position, and each output depends only on a local patch. A filter such as
$$K = \begin{pmatrix} -1 & 0 & 1 \\ -2 & 0 & 2 \\ -1 & 0 & 1 \end{pmatrix}$$
is a classical vertical-edge detector (the Sobel filter), and trained networks reliably rediscover filters like it in their first layer.
:::

## From zip codes to ImageNet

The architecture was worked out by Yann LeCun in 1989 for reading handwritten digits, inspired by Fukushima's 1980 "neocognitron" and by Hubel and Wiesel's discovery of edge-detecting cells in the cat's visual cortex.[^2] LeNet read zip codes for the US Postal Service and, in a system NCR deployed from 1996, checks for banks; by LeCun's own estimate it was reading 10 to 20 percent of all checks written in the United States around 2000. Then the field moved on, to support vector machines and hand-designed features, because CNNs were slow to train and did not scale to larger images with the hardware of the time.

The return was AlexNet, in 2012 (chapter 2). It was LeNet, made deeper (eight layers), trained on two GPUs, with ReLU activations, dropout, and heavy data augmentation, on the 1.2 million images of ImageNet. The error rate fell from 26 to 15 percent.[^3] What followed was three years of rapid architectural progress: VGG (2014) showed that stacking many small 3×3 filters beat fewer large ones; GoogLeNet (2014) ran filters of several sizes in parallel; and ResNet (2015), with its skip connections (chapter 10), reached 152 layers and 3.6 percent error, below the roughly 5 percent of a careful human.[^4] By 2017 the ImageNet competition was retired because the benchmark was solved.

{{fig:cnn-hierarchy|What the layers of a trained convolutional network respond to. Early layers detect edges and color blobs at particular orientations; middle layers detect textures and simple parts; late layers detect object parts and whole objects. The hierarchy is learned from data, not designed, and it appears in every trained vision network.}}

## Looking inside

Because a CNN's early filters operate on pixels, you can see what they detect: the first layer of every trained network contains edge detectors at various angles and color-opponent blobs, the same primitives found in the primary visual cortex.[^5] Deeper layers are harder to read directly, but a technique called **feature visualization**, which optimizes an input image to maximally excite a chosen neuron, shows middle layers responding to textures (fur, honeycomb, brick) and late layers to parts and objects (eyes, wheels, dog faces).[^6] This was the first time a learned system's internal representations could be inspected and found to be sensible, and it is the ancestor of the interpretability work on language models in chapter 19.

The same tools also revealed the flaw. Networks learn *whatever* separates the classes in the training data, and that is often not what a human would use. A network trained to tell huskies from wolves learned to detect snow, because the wolf photographs had snowy backgrounds. A skin-lesion classifier learned to detect rulers. **Shortcut learning** is the general name, and it is why a network's test accuracy on data resembling its training set overstates its competence on the world.[^7]

## Adversarial examples

In 2013 Szegedy and colleagues found something stranger. Take an image the network classifies correctly and search for the smallest change to its pixels that flips the answer; one exists, and a human cannot see it. Goodfellow, Shlens, and Szegedy then showed that a single gradient step suffices: backpropagate the loss to the *pixels* instead of the weights, nudge every pixel a hair in the direction that increases the loss, and the network reclassifies a panda as a gibbon with 99 percent confidence.[^8] These **adversarial examples** transfer between networks, can be printed and photographed, and have been realized as stickers that make a stop sign read as a speed limit sign to the kind of road-sign classifier a self-driving system uses.[^9]

The phenomenon says something deep about what networks learn. In the enormous space of possible images, the natural ones form a thin sliver; the network's decision boundaries elsewhere are arbitrary, and adversarial examples exploit directions a human would never look along. A decade of defenses has produced **adversarial training**, which adds adversarial examples to the training set and makes networks more robust at some cost in accuracy, but no general solution, and the problem recurs in language models as **jailbreaks** (chapter 17).

## Beyond classification

The same backbones do more than label images. **Object detection** (finding and boxing every object: YOLO, Faster R-CNN) drives autonomous vehicles and retail analytics. **Segmentation** labels every pixel: the U-Net architecture of 2015, designed for microscopy, is now standard in medical imaging, and Segment Anything (2023) segments arbitrary objects on request.[^10] **Pose estimation** finds skeletons in video. **Face recognition** matches identities at scale, with the accuracy disparities across skin tones documented in chapter 5 and the surveillance implications of chapter 21.

Medical imaging is the application with the strongest evidence and the most cautionary tales. Retrospective studies claiming radiologist-level performance have often failed to replicate or to transfer between hospitals. The gold standard is a randomized trial, and the first large one, MASAI in Sweden with 105,000 women, found that AI-supported screening detected 29 percent more cancers and cut radiologist reading workload by 44 percent (reported 2025), and then, on the endpoint that matters most, that 12 percent fewer cancers surfaced between screens, with no rise in false positives (reported 2026; see the Latest Research section).[^11]

## Transformers arrive

In 2020 researchers at Google asked whether the convolutional assumptions were still needed. The **Vision Transformer** cuts an image into 16×16 patches, treats each as a "word," and feeds the sequence to a standard transformer (chapter 15), with no convolutions at all. Trained on small datasets it loses to CNNs, because it has to learn locality from scratch; trained on hundreds of millions of images it matches or beats them.[^12] This is the pattern of chapter 3's "no free lunch" and chapter 8's double descent playing out in architecture: built-in assumptions help when data is scarce and become a ceiling when it is abundant. Modern vision systems use transformers, CNNs, or hybrids, and the distinction matters less than it did.

CLIP (2021) took the next step: train an image encoder and a text encoder together on 400 million image–caption pairs from the web, so that matching pairs land near each other in a shared vector space. The result can classify images into categories it was never trained on, by comparing the image's vector with the vectors of candidate captions, and it is the bridge that lets text-to-image generators (chapter 13) and multimodal language models (chapter 22) connect what they see with what they say.[^13]

:::howto Building an image classifier with transfer learning
Almost nobody trains a vision network from scratch. **Transfer learning** reuses a network pretrained on ImageNet or a larger dataset.
1. **Get a pretrained backbone** (a ResNet, EfficientNet, or Vision Transformer) from a model library. Its layers already detect edges, textures, and parts.
2. **Replace the final layer** with one sized for your classes (say, 5 kinds of plant disease), randomly initialized.
3. **Freeze the backbone and train only the new layer** for a few epochs. With a few hundred images per class, this already works well, because the features transfer.
4. **Unfreeze and fine-tune the whole network** at a low learning rate (a tenth of the usual) if you have more data and want the last few points of accuracy.
5. **Augment**: random crops, flips, and color jitter. For most real datasets this matters more than the architecture.
6. **Check for shortcuts**: look at the images the model gets right and wrong; if all photos of one class share a background, the model has learned the background. Use a saliency method (which pixels drove the prediction) to see where it is looking.

Two settings appear in every convolution layer's description. **Stride** is how far the filter moves between positions (a stride of 2 halves the output size); **padding** adds a border of zeros so the output can be the same size as the input.

A few hundred labeled images and an afternoon on a laptop now suffice for a classifier that would have been a PhD thesis in 2010.
:::

:::formulas
| Idea | Formula |
|---|---|
| Convolution | $(I * K)_{ij} = \sum_{a,b} I_{i+a,\,j+b}\,K_{a,b}$ |
| Conv layer parameters | $k \times k \times C_{\text{in}} \times C_{\text{out}} + C_{\text{out}}$ |
| Output size (no padding) | $(n - k)/s + 1$ for input $n$, filter $k$, stride $s$ |
| Max pooling | output = max over each window |
| Adversarial perturbation | $x' = x + \epsilon\,\text{sign}(\nabla_x L)$ |
:::

:::know
- Fully connected layers cannot afford images; convolutions share weights across positions, cutting parameters by thousands and building in translation invariance.
- Layers learn a hierarchy: edges, textures, parts, objects. The first layer rediscovers the edge detectors of the visual cortex.
- AlexNet (2012) was LeNet (1989) plus GPUs, ReLU, dropout, and ImageNet. ResNet (2015) passed human accuracy.
- Networks learn shortcuts (snow for wolves) and are fooled by invisible adversarial perturbations. Test accuracy overstates real competence.
- With enough data, transformers match CNNs on images; assumptions help when data is scarce and limit when it is not.
- Transfer learning from a pretrained backbone is how vision is done in practice. Few hundred images, one afternoon.
:::

:::try Put the idea to work
Why can a convolutional filter detect an edge in several image locations without learning a separate set of weights for each location?

:::answer Show the reasoning
The same filter weights are reused as it slides across the image. That weight sharing encodes an assumption that a useful local pattern can matter in multiple positions. Later processing and the full architecture still determine how well the system handles translations and larger changes.
:::
:::

## Summary

- Convolutional networks encode locality and translation invariance through small shared filters, making image learning tractable and producing a learned feature hierarchy from edges to objects.
- LeCun's 1989 architecture, scaled by GPUs and ImageNet in 2012 and deepened by residual connections in 2015, surpassed human accuracy on image classification.
- Interpretability tools showed networks learn sensible features and also shortcuts; adversarial examples showed their decision boundaries are brittle in ways humans cannot see.
- The same backbones power detection, segmentation, and medical imaging, where randomized trials are only now confirming benefits.
- Vision Transformers and CLIP showed that with enough data the convolutional assumptions can be dropped and that images and text can share one representation.

[^1]: Goodfellow, I., Bengio, Y., Courville, A. (2016). *Deep Learning*. MIT Press. Chapter 9, "Convolutional Networks." [deeplearningbook.org](https://www.deeplearningbook.org/)
[^2]: LeCun, Y., Boser, B., Denker, J. S., et al. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." *Neural Computation*, 1(4), 541–551. [doi:10.1162/neco.1989.1.4.541](https://doi.org/10.1162/neco.1989.1.4.541). LeCun, Y., Bottou, L., Bengio, Y., Haffner, P. (1998). "Gradient-based learning applied to document recognition." *Proceedings of the IEEE*, 86(11), 2278–2324. [doi:10.1109/5.726791](https://doi.org/10.1109/5.726791). The check-reading share is LeCun's own estimate: LeCun, Y. (2019). ACM A.M. Turing Award Lecture, "The Deep Learning Revolution." [acm.org](https://amturing.acm.org/award_winners/lecun_6017366.cfm). Fukushima, K. (1980). "Neocognitron." *Biological Cybernetics*, 36, 193–202. [doi:10.1007/BF00344251](https://doi.org/10.1007/BF00344251)
[^3]: Krizhevsky, A., Sutskever, I., Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *NeurIPS 25*. Republished as *Communications of the ACM*, 60(6), 84–90 (2017). [doi:10.1145/3065386](https://doi.org/10.1145/3065386)
[^4]: Simonyan, K., Zisserman, A. (2015). "Very Deep Convolutional Networks for Large-Scale Image Recognition." *ICLR 2015*. [arxiv.org/abs/1409.1556](https://arxiv.org/abs/1409.1556). He, K., Zhang, X., Ren, S., Sun, J. (2016). "Deep Residual Learning for Image Recognition." *CVPR 2016*. [arxiv.org/abs/1512.03385](https://arxiv.org/abs/1512.03385). Russakovsky, O. et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *IJCV*, 115, 211–252, §6.4 on human performance. [doi:10.1007/s11263-015-0816-y](https://doi.org/10.1007/s11263-015-0816-y)
[^5]: Yosinski, J., Clune, J., Bengio, Y., Lipson, H. (2014). "How transferable are features in deep neural networks?" *NeurIPS 27*. [arxiv.org/abs/1411.1792](https://arxiv.org/abs/1411.1792)
[^6]: Olah, C., Mordvintsev, A., Schubert, L. (2017). "Feature Visualization." *Distill*. [doi:10.23915/distill.00007](https://doi.org/10.23915/distill.00007). Zeiler, M. D., Fergus, R. (2014). "Visualizing and Understanding Convolutional Networks." *ECCV 2014*. [arxiv.org/abs/1311.2901](https://arxiv.org/abs/1311.2901)
[^7]: Ribeiro, M. T., Singh, S., Guestrin, C. (2016). "'Why Should I Trust You?': Explaining the Predictions of Any Classifier." *KDD '16*, 1135–1144 (the husky/wolf example). [doi:10.1145/2939672.2939778](https://doi.org/10.1145/2939672.2939778). Geirhos, R. et al. (2020). "Shortcut learning in deep neural networks." *Nature Machine Intelligence*, 2, 665–673. [doi:10.1038/s42256-020-00257-z](https://doi.org/10.1038/s42256-020-00257-z)
[^8]: Szegedy, C. et al. (2014). "Intriguing properties of neural networks." *ICLR 2014*. [arxiv.org/abs/1312.6199](https://arxiv.org/abs/1312.6199). Goodfellow, I. J., Shlens, J., Szegedy, C. (2015). "Explaining and Harnessing Adversarial Examples." *ICLR 2015*. [arxiv.org/abs/1412.6572](https://arxiv.org/abs/1412.6572)
[^9]: Eykholt, K. et al. (2018). "Robust Physical-World Attacks on Deep Learning Visual Classification." *CVPR 2018*. [arxiv.org/abs/1707.08945](https://arxiv.org/abs/1707.08945)
[^10]: Ronneberger, O., Fischer, P., Brox, T. (2015). "U-Net: Convolutional Networks for Biomedical Image Segmentation." *MICCAI 2015*. [arxiv.org/abs/1505.04597](https://arxiv.org/abs/1505.04597). Kirillov, A. et al. (2023). "Segment Anything." *ICCV 2023*. [arxiv.org/abs/2304.02643](https://arxiv.org/abs/2304.02643). Redmon, J., Divvala, S., Girshick, R., Farhadi, A. (2016). "You Only Look Once." *CVPR 2016*. [arxiv.org/abs/1506.02640](https://arxiv.org/abs/1506.02640)
[^11]: Gommers, J., Hernström, V., Josefsson, V., Sartor, H., et al. (2026). "Interval cancer, sensitivity, and specificity comparing AI-supported mammography screening with standard double reading without AI in the MASAI study." *The Lancet*, 407, 505–514. [doi:10.1016/S0140-6736(25)02464-X](https://doi.org/10.1016/S0140-6736(25)02464-X). The detection and workload results: Hernström, V. et al. (2025). "Screening performance and characteristics of breast cancer detected in the Mammography Screening with Artificial Intelligence trial (MASAI)." *The Lancet Digital Health*, 7(3), e175–e183. [doi:10.1016/S2589-7500(24)00267-X](https://doi.org/10.1016/S2589-7500(24)00267-X). On non-replication: Haibe-Kains, B. et al. (2020). "Transparency and reproducibility in artificial intelligence." *Nature*, 586, E14–E16. [doi:10.1038/s41586-020-2766-y](https://doi.org/10.1038/s41586-020-2766-y)
[^12]: Dosovitskiy, A. et al. (2021). "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale." *ICLR 2021*. [arxiv.org/abs/2010.11929](https://arxiv.org/abs/2010.11929)
[^13]: Radford, A. et al. (2021). "Learning Transferable Visual Models From Natural Language Supervision." *ICML 2021*. [arxiv.org/abs/2103.00020](https://arxiv.org/abs/2103.00020)
