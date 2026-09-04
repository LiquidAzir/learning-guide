---
title: Words as Numbers
subtitle: How to feed language to a machine. Word vectors and the arithmetic of meaning, recurrent networks and their memory problem, and the idea of attention that would replace them.
part: III · Neural Networks
---

## Recap

Images are grids of numbers, and chapter 11 built networks that assume grid structure. Language is a sequence of symbols, with no numbers in sight and a structure, order and long-range dependency, that grids lack. This chapter is about the two ideas that made language tractable: turning words into vectors, and building networks that read one word at a time and remember. The second idea's limitations lead directly to the transformer of chapter 15.

## The problem with words

A network takes numbers. A word is a symbol. The naive encoding is **one-hot**: with a vocabulary of 50,000 words, represent each as a vector of 50,000 zeros and a single 1. This works and is useless, because every word is exactly as far from every other. "Cat" and "kitten" are as unrelated as "cat" and "carburetor." The network must learn everything about every word from scratch, and a word seen twice in training is a word it knows nothing about.

The insight that fixed it is old. The linguist J. R. Firth wrote in 1957 that "you shall know a word by the company it keeps": words that appear in similar contexts have similar meanings.[^1] Count which words appear near "cat" across a billion sentences (sat, purred, fur, feline, kitten) and near "dog" (sat, barked, fur, canine, puppy) and the two contexts overlap heavily, while "carburetor" shares almost nothing with either. Meaning, or a workable proxy for it, is in the statistics of co-occurrence.

## Word vectors

In 2013 Tomas Mikolov and colleagues at Google turned this into an algorithm cheap enough to run on all of Wikipedia. **word2vec** trains a tiny network on a fake task: given a word, predict the words around it (or the reverse). The network's hidden layer has, say, 300 units, so each word is forced through a 300-number bottleneck, and the numbers it learns for each word are the word's **embedding**: a vector in a 300-dimensional space, positioned so that words with similar contexts are near each other.[^2] The task is self-supervised (chapter 7): no human labels anything, and the training signal comes from the text itself.

The result was startling. Distances made sense: the nearest neighbors of "France" were Spain, Belgium, Netherlands, Italy. And directions made sense: the vector from "man" to "woman" was nearly parallel to the vector from "king" to "queen," so that

$$\text{king} - \text{man} + \text{woman} \approx \text{queen}$$

and likewise Paris − France + Italy ≈ Rome, and walked − walk + swim ≈ swam. The embedding space had learned gender, capital-city, and verb-tense as *directions*, from nothing but co-occurrence counts.[^3] Every word had become a point, and relationships had become arithmetic. This is the representation-learning idea of chapter 7 applied to language, and it is the foundation on which every subsequent language system stands: a modern language model's first layer is an embedding table, mapping each token to a vector, and its output layer maps a vector back to a distribution over tokens.

:::warning
Embeddings learn what is in the text, including what should not be there. The same arithmetic that gives king − man + woman ≈ queen gives doctor − man + woman ≈ nurse, and computer programmer − man + woman ≈ homemaker, in embeddings trained on news text.[^4] The model has learned the statistical associations of a society's writing, and a downstream system trained on those embeddings (a résumé screener, say) will reproduce them unless something is done. A caution in the other direction: the analogy demonstration is weaker than it looks. Standard analogy code forbids returning any of the three input words, and when that restriction is lifted, man is to doctor as woman is to *doctor*.[^4] The associations are real, and show up in more careful tests, but the tidy arithmetic overstates them. Chapter 21 returns to this; the point here is that "learned from data" means "learned from what people wrote," with everything that implies.
:::

:::howto Using embeddings for search and similarity
Embeddings are the working tool behind semantic search, deduplication, clustering of documents, and the retrieval step of chapter 18. The procedure is the same for words, sentences, or documents:
1. **Embed** each item with a pretrained embedding model (modern ones embed whole sentences or paragraphs, not just words, into 384 to 3,072 dimensions).
2. **Store** the vectors in an index (a **vector database**) built for fast nearest-neighbor search.
3. **To search**, embed the query and return the stored items whose vectors have the highest **cosine similarity** (mathematics guide, chapter 11) to it.

*Example.* A support team embeds 40,000 past tickets. A new ticket, "app crashes when I rotate my phone," retrieves past tickets about "orientation change closes the application," which share no words with the query. Keyword search would have missed them; embedding search finds them because the sentences are close in meaning-space.
:::

## Reading in order: recurrent networks

Word vectors represent words. A sentence is a sequence of them, of variable length, in which order carries meaning: "dog bites man" and "man bites dog" contain the same vectors. The classical solution was the **recurrent neural network** (RNN), a network that reads one word at a time and carries a **hidden state**, a vector summarizing everything read so far, forward to the next step.

$$\mathbf{h}_t = g(W_h\mathbf{h}_{t-1} + W_x\mathbf{x}_t + \mathbf{b})$$

The state at time $t$ is a function of the previous state and the current input. The same weights $W_h, W_x$ are used at every step (weight sharing across time, as convolutions share across space), so the network can process a sequence of any length. At the end, or at every step, the state can be read out to produce a prediction: the next word, the sentiment, a translation.

RNNs were the standard from the early 1990s through 2017, and they worked, up to a point. The point was memory. Unroll an RNN over a fifty-word sentence and it is a fifty-layer network with the same weights at every layer, so training it means backpropagating through time, multiplying the gradient by $W_h$ at every step, and over long sequences the gradient vanishes or explodes exactly as in deep networks (chapter 10). An RNN reading a paragraph has effectively forgotten its beginning by the end. Sepp Hochreiter identified the problem in his 1991 thesis and, with Jürgen Schmidhuber in 1997, proposed the fix.[^5]

## LSTM: learning to remember

The **long short-term memory** (LSTM) network adds to the recurrent unit a separate **cell state**, a conveyor belt of information that passes through time unchanged unless the network decides otherwise, and three **gates**, small learned sigmoid units that decide at each step how much to forget from the cell, how much of the new input to write to it, and how much of it to output. Because the cell state passes forward by addition rather than multiplication, gradients flow back through it without vanishing. The network learns *what to remember and for how long*.[^6]

LSTMs and their streamlined cousin the GRU (2014) ran the world's speech recognition, machine translation, and text prediction from about 2014 to 2018. Google Translate switched to LSTM-based **sequence-to-sequence** models in 2016, in which an **encoder** RNN reads the source sentence into a vector and a **decoder** RNN generates the target sentence from it, and by Google's own measurement translation quality jumped more in a year than in the previous decade.[^7]

## The bottleneck, and attention

The sequence-to-sequence design had a flaw. Everything the encoder knew about a fifty-word sentence had to be squeezed into a single fixed-size vector before the decoder saw any of it. Long sentences translated badly, because the vector could not hold them.

In 2014 Dzmitry Bahdanau, Kyunghyun Cho, and Yoshua Bengio proposed letting the decoder look back.[^8] At each step of generating the output, the decoder computes a score for every position in the input, converts the scores to weights with a softmax, and takes a weighted average of the encoder's states at those positions. When producing the French word for "bank," it can attend to the English "bank" *and* to the nearby "river," and resolve the ambiguity. This is **attention**: a learned, differentiable lookup that lets each output position gather information from whichever input positions are relevant.

$$\text{attention}(\mathbf{q}, \{\mathbf{k}_i, \mathbf{v}_i\}) = \sum_i \frac{e^{\mathbf{q}\cdot\mathbf{k}_i}}{\sum_j e^{\mathbf{q}\cdot\mathbf{k}_j}}\,\mathbf{v}_i$$

A **query** vector $\mathbf{q}$ (what am I looking for) is compared by dot product with **key** vectors $\mathbf{k}_i$ (what does each position offer), the results are softmaxed into weights, and the weights average the **value** vectors $\mathbf{v}_i$ (what each position contains). The names come from database retrieval. (This is attention in its simplest, later form; Bahdanau's original scored each pair with a small learned network rather than a dot product.) Attention fixed translation, and the attention weights could be plotted, showing which source words each target word had looked at, an interpretability gift.

Then, in 2017, a team at Google asked what would happen if you kept the attention and threw away the recurrence entirely. The answer is chapter 15.

:::key
Three ideas from this chapter carry forward into everything that follows. **Embeddings**: symbols become vectors, and similarity becomes distance. **Self-supervision**: the training signal comes from the data itself, by predicting hidden parts of it, so there is no limit to the training set but the size of the internet. **Attention**: a position in a sequence can gather information from any other position by a learned, differentiable weighting. The transformer is these three ideas and almost nothing else.
:::

## Sequences beyond language

The same machinery reads any sequence. Speech recognition treats audio as a sequence of spectral frames; the 2012 switch to deep networks cut error rates by up to a third, and the 2016 introduction of end-to-end sequence models removed most of the hand-engineered pipeline.[^9] Time series (sales, sensors, prices) are sequences, though in practice gradient-boosted trees on hand-made lag features (chapter 6) often beat neural sequence models on them, a fact worth knowing before reaching for the fancier tool. DNA is a sequence of four letters, and protein sequences of twenty; the language-model recipe applied to proteins produced the structure predictors and designers of chapter 22.

:::formulas
| Idea | Formula |
|---|---|
| One-hot | vector of length $V$ with a single 1 |
| Embedding lookup | $\mathbf{e}_w = E[w]$, row $w$ of a $V \times d$ matrix $E$ |
| Cosine similarity | $\dfrac{\mathbf{a}\cdot\mathbf{b}}{\lVert\mathbf{a}\rVert\lVert\mathbf{b}\rVert}$ |
| RNN step | $\mathbf{h}_t = g(W_h\mathbf{h}_{t-1} + W_x\mathbf{x}_t + \mathbf{b})$ |
| LSTM cell update | $\mathbf{c}_t = \mathbf{f}_t \odot \mathbf{c}_{t-1} + \mathbf{i}_t \odot \tilde{\mathbf{c}}_t$ (forget gate × old cell + input gate × candidate) |
| Attention | $\sum_i \text{softmax}_i(\mathbf{q}\cdot\mathbf{k}_i)\,\mathbf{v}_i$ |
:::

:::know
- Words become vectors by predicting their neighbors; the geometry of the resulting space encodes meaning, including relationships as directions and society's biases.
- Embeddings of sentences and documents are the basis of semantic search and of retrieval for language models.
- Recurrent networks read sequences with a carried state and share weights across time; they forget over long ranges because gradients vanish.
- LSTMs add a gated memory cell that gradients flow through, and ran language technology from 2014 to 2018.
- Attention lets an output position take a weighted average of input positions, with learned weights; it fixed translation and became the core of the transformer.
:::

## Summary

- One-hot encoding makes every word equally unrelated; word2vec's self-supervised prediction of context produces embeddings in which similar words are near and relationships are directions.
- Embeddings encode the statistics of the training text, including stereotypes, and power semantic search through nearest-neighbor lookup.
- Recurrent networks process sequences with a hidden state but suffer vanishing gradients over long spans; LSTMs solved it with gated memory and dominated until 2017.
- Encoder–decoder models translated through a single vector bottleneck; attention removed the bottleneck by letting the decoder query the encoder's states.
- Embeddings, self-supervision, and attention are the three components the transformer assembles.

[^1]: Firth, J. R. (1957). "A synopsis of linguistic theory 1930–1955." In *Studies in Linguistic Analysis*, 1–32. Oxford: Blackwell. Harris, Z. S. (1954). "Distributional Structure." *Word*, 10(2–3), 146–162. [doi:10.1080/00437956.1954.11659520](https://doi.org/10.1080/00437956.1954.11659520)
[^2]: Mikolov, T., Chen, K., Corrado, G., Dean, J. (2013). "Efficient Estimation of Word Representations in Vector Space." [arxiv.org/abs/1301.3781](https://arxiv.org/abs/1301.3781). Mikolov, T., Sutskever, I., Chen, K., Corrado, G., Dean, J. (2013). "Distributed Representations of Words and Phrases and their Compositionality." *NeurIPS 26*. [arxiv.org/abs/1310.4546](https://arxiv.org/abs/1310.4546)
[^3]: Mikolov, T., Yih, W.-t., Zweig, G. (2013). "Linguistic Regularities in Continuous Space Word Representations." *NAACL-HLT 2013*, 746–751. [aclanthology.org](https://aclanthology.org/N13-1090/). Pennington, J., Socher, R., Manning, C. D. (2014). "GloVe: Global Vectors for Word Representation." *EMNLP 2014*. [doi:10.3115/v1/D14-1162](https://doi.org/10.3115/v1/D14-1162)
[^4]: Bolukbasi, T., Chang, K.-W., Zou, J., Saligrama, V., Kalai, A. (2016). "Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings." *NeurIPS 29*. [arxiv.org/abs/1607.06520](https://arxiv.org/abs/1607.06520). Caliskan, A., Bryson, J. J., Narayanan, A. (2017). "Semantics derived automatically from language corpora contain human-like biases." *Science*, 356(6334), 183–186. [doi:10.1126/science.aal4230](https://doi.org/10.1126/science.aal4230). The caution: Nissim, M., van Noord, R., van der Goot, R. (2020). "Fair Is Better than Sensational: Man Is to Doctor as Woman Is to Doctor." *Computational Linguistics*, 46(2), 487–497. [doi:10.1162/coli_a_00379](https://doi.org/10.1162/coli_a_00379)
[^5]: Elman, J. L. (1990). "Finding Structure in Time." *Cognitive Science*, 14(2), 179–211. [doi:10.1207/s15516709cog1402_1](https://doi.org/10.1207/s15516709cog1402_1). Bengio, Y., Simard, P., Frasconi, P. (1994). "Learning long-term dependencies with gradient descent is difficult." *IEEE Transactions on Neural Networks*, 5(2), 157–166. [doi:10.1109/72.279181](https://doi.org/10.1109/72.279181)
[^6]: Hochreiter, S., Schmidhuber, J. (1997). "Long Short-Term Memory." *Neural Computation*, 9(8), 1735–1780. [doi:10.1162/neco.1997.9.8.1735](https://doi.org/10.1162/neco.1997.9.8.1735). Cho, K. et al. (2014). "Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation." *EMNLP 2014*. [arxiv.org/abs/1406.1078](https://arxiv.org/abs/1406.1078)
[^7]: Sutskever, I., Vinyals, O., Le, Q. V. (2014). "Sequence to Sequence Learning with Neural Networks." *NeurIPS 27*. [arxiv.org/abs/1409.3215](https://arxiv.org/abs/1409.3215). Wu, Y. et al. (2016). "Google's Neural Machine Translation System: Bridging the Gap between Human and Machine Translation." [arxiv.org/abs/1609.08144](https://arxiv.org/abs/1609.08144)
[^8]: Bahdanau, D., Cho, K., Bengio, Y. (2015). "Neural Machine Translation by Jointly Learning to Align and Translate." *ICLR 2015*. [arxiv.org/abs/1409.0473](https://arxiv.org/abs/1409.0473)
[^9]: Hinton, G. et al. (2012). "Deep Neural Networks for Acoustic Modeling in Speech Recognition." *IEEE Signal Processing Magazine*, 29(6), 82–97. [doi:10.1109/MSP.2012.2205597](https://doi.org/10.1109/MSP.2012.2205597). Graves, A., Jaitly, N. (2014). "Towards End-to-End Speech Recognition with Recurrent Neural Networks." *ICML 2014*. [proceedings.mlr.press](https://proceedings.mlr.press/v32/graves14.html)
