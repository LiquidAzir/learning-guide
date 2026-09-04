---
title: Finding Structure Without Labels
subtitle: Most data has no answers attached. Clustering, compressing, spotting the odd one out, and the recommendation engines that learned what you like from what everyone else clicked.
part: II · Learning from Data
---

## Recap

Every model so far was told the right answer for each training example. Most data in the world comes without answers: customer records with no "type" column, sensor logs with no "fault" flag, a million photographs with no captions. **Unsupervised learning** looks for structure in such data on its own: groups, directions of variation, oddities, and hidden factors. It is less glamorous than prediction and at least as useful, and its central idea, learning a compact **representation** of data, turned out to be the road to modern AI.

## Clustering: who goes with whom

**Clustering** partitions examples into groups so that members of a group resemble each other more than they resemble outsiders. Nobody tells the algorithm what the groups are or how many; it finds them. Marketers use it to segment customers, biologists to group genes by expression pattern, astronomers to classify galaxies, and every large company to make sense of data it has never looked at.

The workhorse is **k-means**, an algorithm so simple it was invented several times, most famously by Stuart Lloyd at Bell Labs in 1957.[^1] Choose $k$, the number of clusters. Place $k$ centers at random. Assign each example to its nearest center. Move each center to the average of the examples assigned to it. Repeat until nothing changes. The result is a division of feature space into $k$ regions, each around a center that is the prototype of its group.

:::howto Running k-means and choosing k
1. **Standardize the features** (subtract the mean, divide by the standard deviation). K-means uses Euclidean distance, so a feature measured in dollars will otherwise swamp one measured in years.
2. **Run for several values of k** (say 2 to 12), each several times from different random starts, keeping the best.
3. **Plot the total within-cluster distance against k.** It always falls as $k$ rises; look for the **elbow**, where adding a cluster stops helping much. Or compute the **silhouette score**, which measures how much closer each point is to its own cluster than the next nearest, and pick the $k$ that maximizes it.
4. **Look at the clusters.** Print each center's feature values and a few representative members. If the clusters do not mean anything to a person who knows the domain, they are not useful, whatever the score says.

*Example.* Retail customers described by annual spend, visits per year, and average basket. K-means with $k = 4$ finds: frequent small shoppers, rare big spenders, high-value regulars, and near-inactive accounts. Each gets a different marketing treatment. The clusters are not "true"; they are a useful simplification, and a different $k$ gives a different, also useful, one.
:::

K-means has known blind spots: it assumes clusters are round blobs of similar size, it is thrown by outliers, and it forces every point into some cluster. Alternatives fix each. **Hierarchical clustering** builds a tree of merges, from every point alone to one big cluster, and lets you cut at any level, which is the dendrogram biologists use for species. **DBSCAN** finds clusters of any shape as dense regions and labels sparse points as noise, so it handles outliers and does not need $k$. **Gaussian mixture models** give each point a probability of membership in each cluster rather than a hard assignment.[^2]

:::warning
Clustering always finds clusters, whether or not any exist. Run k-means with $k = 5$ on uniformly random data and you get five tidy groups. There is no ground truth to check against, which is the defining difficulty of unsupervised learning, so validation is by usefulness and stability: do the clusters persist when you resample the data, and do they help a downstream task? A clustering paper with no such check is describing the algorithm, not the data.
:::

## Dimensionality reduction: what actually varies

A dataset with 500 features per example is impossible to plot and hard to model. Often, though, the 500 numbers are not independent: they move together in a few underlying ways. **Dimensionality reduction** finds those few ways.

**Principal component analysis** (PCA) is the classical method and the mathematics guide's eigenvector chapter in action.[^3] It finds the direction in feature space along which the data vary most (the first **principal component**), then the direction, perpendicular to the first, along which they vary next most, and so on. Keeping the top two or three components gives a picture; keeping the top twenty of 500 often retains 95 percent of the variation and discards the noise. PCA on the survey responses of a thousand people typically finds that most of the variation lies along a handful of axes (a "liberal–conservative" component in political surveys, a "big five" in personality inventories). PCA on face images finds "eigenfaces," the ghostly average-face variations from which any face can be reconstructed as a weighted sum.[^4]

PCA finds straight-line structure. For curved structure, **t-SNE** (2008) and **UMAP** (2018) project high-dimensional data onto a plane so that nearby points stay nearby, producing the colorful cluster maps in every single-cell biology paper.[^5] They are for looking, not measuring: distances between clusters in those plots mean little, and the same data can give different pictures on different runs.

## Anomaly detection: the odd one out

Sometimes the question is not "what groups exist?" but "which of these does not belong?" A fraudulent transaction, a failing turbine, an intruder on a network, a tumor on a scan: **anomaly detection** finds examples that do not fit the pattern of the rest, without needing labeled examples of the anomaly, which by definition are rare or unseen.

The methods follow from the ideas above. Fit a model of normal data (a Gaussian, a mixture, a density estimate, or an **autoencoder**, a network that learns to compress and reconstruct normal examples) and flag anything the model finds improbable or reconstructs badly. **Isolation forests** use random trees: anomalies are isolated in few splits because they are far from everything.[^6] The practical difficulty is that "anomalous" is not "bad": a system flags every unusual thing, and a human must decide which unusual things matter, which is why fraud teams and security operations centers are full of analysts triaging alerts.

## Recommendation: what you will like

The most commercially consequential unsupervised method is the one that decides what you see. **Collaborative filtering** learns what you will like from what people like you have liked, with no understanding of the items at all.

The data is a giant, mostly empty table: users by items, with a rating or a click wherever a user touched an item. Netflix's 2006 prize challenged the public to predict the missing entries of such a table 10 percent better than Netflix's own system, offering a million dollars, and the winning methods, delivered in 2009, were **matrix factorization**: represent each user as a short list of numbers (a **vector** of, say, 50 **latent factors**) and each film as another, such that a user's predicted rating for a film is the dot product of the two.[^7] The factors are learned by gradient descent to reproduce the known ratings, and they turn out to correspond to things like "how much action," "how much romance," "how serious," without anyone naming them. This is a **learned representation**, or **embedding**, and the same idea, that entities can be represented as vectors whose geometry encodes meaning, is the central trick of modern AI, from word embeddings (chapter 12) to the internal states of language models.

:::math Matrix factorization
Let $R$ be the users-by-items table, with $r_{ui}$ the rating user $u$ gave item $i$ where known. Learn a vector $\mathbf{p}_u$ for each user and $\mathbf{q}_i$ for each item, both of length $k$, to minimize
$$\sum_{(u,i)\text{ known}} \big(r_{ui} - \mathbf{p}_u\cdot\mathbf{q}_i\big)^2 + \lambda\big(\lVert\mathbf{p}_u\rVert^2 + \lVert\mathbf{q}_i\rVert^2\big)$$
The first term is squared error on the known ratings; the second is ridge regularization (chapter 4), essential because most users have rated few items. A prediction for an unrated item is simply $\mathbf{p}_u\cdot\mathbf{q}_i$. With $k = 50$ and a million users and 20,000 films, the model has 51 million parameters and reproduces a table of 20 billion cells from the 100 million that are filled in.
:::

Modern recommenders (YouTube, TikTok, Spotify, Amazon) are deep networks that take collaborative signals plus content, context, and time, and optimize not for predicted rating but for engagement, which is a different objective with different consequences: a system that maximizes watch time tends to favor what is compulsive over what is good, and the gap between those is a live social problem (chapter 21).[^8]

## Representation: the bridge to deep learning

Step back and notice what these methods share. Clustering assigns each example a group; PCA assigns it coordinates on a few axes; matrix factorization assigns it a vector. Each replaces raw data with a **representation** that is smaller and captures what matters. The deep learning revolution can be described as the discovery that neural networks learn such representations automatically, layer by layer, from raw pixels or raw text, and that the representations are so good that the rest of the task becomes easy.[^9] The autoencoder above is the simplest case, and chapter 13 builds from it to image generators. When a language model is said to "understand" a word, what it has is a vector; when two words are similar, their vectors are close. Unsupervised learning is where that idea came from.

**Self-supervised learning**, the method behind the language models of Part IV, is unsupervised learning with a trick: invent a supervised task from the unlabeled data itself. Hide a word and predict it; hide a patch of an image and fill it in; predict the next frame. No human labels anything, yet the model gets a training signal from every byte, and the representations it learns to solve the invented task turn out to serve every real task. Chapter 16 shows how far that goes.

:::formulas
| Method | What it minimizes / finds |
|---|---|
| k-means | $\sum_{\text{clusters}}\sum_{x \in \text{cluster}} \lVert x - \mu_c\rVert^2$, with $\mu_c$ the cluster mean |
| PCA | directions of maximum variance: eigenvectors of the covariance matrix, ordered by eigenvalue |
| Variance kept | (sum of top-$m$ eigenvalues) / (sum of all eigenvalues) |
| Matrix factorization | $\sum (r_{ui} - \mathbf{p}_u\cdot\mathbf{q}_i)^2 + \lambda(\lVert\mathbf{p}_u\rVert^2 + \lVert\mathbf{q}_i\rVert^2)$ |
| Autoencoder | reconstruction error $\lVert x - \text{decode}(\text{encode}(x))\rVert^2$ |
:::

:::know
- Unsupervised learning finds structure without labels: clusters, directions, outliers, factors. There is no ground truth, so validate by stability and usefulness.
- K-means finds round clusters given $k$; standardize first and inspect the result. Clustering finds clusters in random data too.
- PCA finds the few directions that carry most of the variation; t-SNE and UMAP make pictures, not measurements.
- Anomaly detection models the normal and flags the improbable; deciding which anomalies matter is human work.
- Recommenders learn vectors for users and items whose dot product predicts preference; optimizing engagement is not optimizing for the user.
- Learned representations, vectors whose geometry encodes meaning, are the idea that connects all of this to deep learning.
:::

## Summary

- Clustering (k-means, hierarchical, DBSCAN, mixtures) groups similar examples; it needs standardization, a chosen $k$ or density threshold, and human validation, because it always finds something.
- Dimensionality reduction (PCA, t-SNE, UMAP) finds the few axes that explain most variation, for compression, denoising, and visualization.
- Anomaly detection fits the normal and flags departures, from fraud to machine faults.
- Collaborative filtering by matrix factorization learns latent vectors for users and items; modern recommenders extend it with deep networks and optimize engagement, with social consequences.
- All of these learn representations, and self-supervised learning, which manufactures labels from the data itself, carries the idea to the language models of Part IV.

[^1]: Lloyd, S. P. (1982). "Least squares quantization in PCM." *IEEE Transactions on Information Theory*, 28(2), 129–137 (Bell Labs technical report, 1957). [doi:10.1109/TIT.1982.1056489](https://doi.org/10.1109/TIT.1982.1056489). MacQueen, J. (1967). "Some methods for classification and analysis of multivariate observations." *Proceedings of the Fifth Berkeley Symposium*, 1, 281–297.
[^2]: Ester, M., Kriegel, H.-P., Sander, J., Xu, X. (1996). "A density-based algorithm for discovering clusters in large spatial databases with noise." *KDD-96*, 226–231. [aaai.org](https://aaai.org/papers/kdd96-037-a-density-based-algorithm-for-discovering-clusters-in-large-spatial-databases-with-noise/). Hastie, T., Tibshirani, R., Friedman, J. (2009). *The Elements of Statistical Learning*, 2nd ed. Springer, chapter 14.
[^3]: Pearson, K. (1901). "On Lines and Planes of Closest Fit to Systems of Points in Space." *Philosophical Magazine*, 2(11), 559–572. [doi:10.1080/14786440109462720](https://doi.org/10.1080/14786440109462720). Hotelling, H. (1933). "Analysis of a complex of statistical variables into principal components." *Journal of Educational Psychology*, 24(6), 417–441. [doi:10.1037/h0071325](https://doi.org/10.1037/h0071325)
[^4]: Turk, M., Pentland, A. (1991). "Eigenfaces for Recognition." *Journal of Cognitive Neuroscience*, 3(1), 71–86. [doi:10.1162/jocn.1991.3.1.71](https://doi.org/10.1162/jocn.1991.3.1.71)
[^5]: van der Maaten, L., Hinton, G. (2008). "Visualizing Data using t-SNE." *Journal of Machine Learning Research*, 9, 2579–2605. [jmlr.org](https://www.jmlr.org/papers/v9/vandermaaten08a.html). McInnes, L., Healy, J., Melville, J. (2018). "UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction." [arxiv.org/abs/1802.03426](https://arxiv.org/abs/1802.03426). On misreading such plots: Chari, T., Pachter, L. (2023). "The specious art of single-cell genomics." *PLoS Computational Biology*, 19(8), e1011288. [doi:10.1371/journal.pcbi.1011288](https://doi.org/10.1371/journal.pcbi.1011288)
[^6]: Liu, F. T., Ting, K. M., Zhou, Z.-H. (2008). "Isolation Forest." *IEEE ICDM 2008*, 413–422. [doi:10.1109/ICDM.2008.17](https://doi.org/10.1109/ICDM.2008.17). Chandola, V., Banerjee, A., Kumar, V. (2009). "Anomaly detection: A survey." *ACM Computing Surveys*, 41(3), 15. [doi:10.1145/1541880.1541882](https://doi.org/10.1145/1541880.1541882)
[^7]: Koren, Y., Bell, R., Volinsky, C. (2009). "Matrix Factorization Techniques for Recommender Systems." *Computer*, 42(8), 30–37. [doi:10.1109/MC.2009.263](https://doi.org/10.1109/MC.2009.263). Bell, R. M., Koren, Y. (2007). "Lessons from the Netflix Prize Challenge." *ACM SIGKDD Explorations*, 9(2), 75–79. [doi:10.1145/1345448.1345465](https://doi.org/10.1145/1345448.1345465)
[^8]: Covington, P., Adams, J., Sargin, E. (2016). "Deep Neural Networks for YouTube Recommendations." *RecSys '16*, 191–198. [doi:10.1145/2959100.2959190](https://doi.org/10.1145/2959100.2959190). Milli, S., Belli, L., Hardt, M. (2021). "From Optimizing Engagement to Measuring Value." *FAccT '21*, 714–722. [doi:10.1145/3442188.3445933](https://doi.org/10.1145/3442188.3445933)
[^9]: Bengio, Y., Courville, A., Vincent, P. (2013). "Representation Learning: A Review and New Perspectives." *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 35(8), 1798–1828. [doi:10.1109/TPAMI.2013.50](https://doi.org/10.1109/TPAMI.2013.50)
