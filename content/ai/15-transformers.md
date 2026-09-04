---
title: The Transformer
subtitle: The 2017 paper that every modern AI system is built on. Self-attention, explained completely; why it beat recurrence; and what actually happens inside one when it predicts a word.
part: IV · Large Language Models
---

## Recap

Chapter 12 ended with attention grafted onto recurrent networks. In 2017 a team at Google asked what would happen if the recurrence were removed and attention did all the work. The resulting architecture, the **transformer**, is the basis of every large language model, of modern vision and speech systems, of AlphaFold, and of the image generators' text encoders. This chapter explains it fully. There are equations, and every symbol is named; if you follow this chapter you will understand what a language model is doing at the level of arithmetic, which is the only level at which it can be understood.

## The problem with reading in order

A recurrent network reads a sentence one word at a time, carrying a summary forward. This has two costs. It is **sequential**: word 50 cannot be processed until words 1 through 49 have been, so training cannot use the thousands of parallel processors in a GPU. And information from word 1 must survive 49 updates to influence word 50, which even an LSTM does imperfectly.

The transformer's proposal: process every word at once, and let each word look directly at every other word to decide what it means in context. The word "bank" in "the bank of the river" should look at "river"; in "the bank raised rates" it should look at "rates." The mechanism that does the looking is **self-attention**, and because every word attends to every other word in one step, the whole sentence is processed in parallel and no information has to survive a chain of updates.[^1]

## Self-attention, step by step

Start with a sentence of $n$ tokens, each already converted to a vector (an embedding, chapter 12) of dimension $d$, typically 512 to 12,288. Stack them as rows of a matrix $X$, $n$ rows by $d$ columns. Self-attention produces a new matrix of the same shape in which each row has been updated with information from the other rows. It does so with three learned weight matrices, $W_Q$, $W_K$, $W_V$, each $d$ by $d_k$.

:::math Scaled dot-product attention
1. **Make three versions of every token.** For each token vector $\mathbf{x}_i$, compute a **query** $\mathbf{q}_i = \mathbf{x}_i W_Q$, a **key** $\mathbf{k}_i = \mathbf{x}_i W_K$, and a **value** $\mathbf{v}_i = \mathbf{x}_i W_V$. Think of the query as "what am I looking for," the key as "what do I have to offer," and the value as "what I will pass on if chosen." In matrix form, $Q = XW_Q$, $K = XW_K$, $V = XW_V$.

2. **Score every pair.** The relevance of token $j$ to token $i$ is the dot product of $i$'s query with $j$'s key, $\mathbf{q}_i\cdot\mathbf{k}_j$: large when they point the same way. All $n^2$ scores at once are the matrix $QK^\top$. Divide by $\sqrt{d_k}$ so the scores do not grow with the vector size and saturate the softmax.

3. **Turn scores into weights.** Apply softmax (chapter 9) across each row, so that for each token $i$ the weights over all $j$ are positive and sum to 1. These are the **attention weights**: how much token $i$ attends to each other token.

4. **Mix the values.** Token $i$'s new representation is the weighted sum of all the value vectors, using its attention weights.

All four steps in one line:
$$\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)V$$

*What it does.* "Bank" produces a query. "River" produces a key that matches it (the weights learned that river-like keys answer bank-like queries) and a value that says "water, edge, geography." After attention, the "bank" row contains a blend weighted toward river's value. The word has been disambiguated by its context, in one parallel step, for every word in the sentence simultaneously.[^1]
:::

Three refinements complete the mechanism. **Multi-head attention** runs several attention operations in parallel (8 to 128 **heads**), each with its own $W_Q, W_K, W_V$ of width $d_k = d/h$ for $h$ heads, so that one head can track syntax (which noun does this verb agree with), another coreference (what does "it" refer to), another position (what came just before); their outputs are concatenated and passed through one more learned matrix, the output projection $W_O$.

A tiny worked case makes the arithmetic concrete. Three tokens, $d_k = 2$; the query for token 3 is $\mathbf{q} = (1, 0)$ and the keys are $\mathbf{k}_1 = (1, 0)$, $\mathbf{k}_2 = (0, 1)$, $\mathbf{k}_3 = (0.5, 0.5)$. Dot products: $1, 0, 0.5$; divided by $\sqrt 2$: $0.71, 0, 0.35$; softmax: $e^{0.71}, e^{0}, e^{0.35} = 2.03, 1, 1.42$, summing to $4.45$, so the weights are $0.46, 0.22, 0.32$. Token 3's new vector is $0.46\mathbf{v}_1 + 0.22\mathbf{v}_2 + 0.32\mathbf{v}_3$. Every number in a real model is exactly this, at $d_k = 128$ and with thousands of tokens. **Positional encoding** adds to each token's embedding a vector that depends on its position, because attention on its own has no idea of order; without it, "dog bites man" and "man bites dog" would be identical. Modern models use **rotary** encodings that make attention scores depend on relative distance.[^2] And a **causal mask** for language modeling sets to $-\infty$ the scores from each token to tokens that come *after* it, so that when the model predicts word 10 it can see words 1 through 9 and nothing more, which is what makes training on next-word prediction honest.

{{fig:attention|Self-attention for one token. The query for "bank" is compared with every token's key; the scores are softmaxed into weights (shown as line thickness), and the output is the weighted sum of the value vectors. Every token does this simultaneously, and multiple heads do it with different learned weights.}}

## The block, and the stack

Attention alone only mixes information between positions. Each transformer **block** (or layer) adds a second component that processes each position on its own: a small **feedforward network** (chapter 9), two dense layers with a nonlinearity, applied identically to every token, and typically holding two-thirds of the block's parameters. If attention is where tokens talk to each other, the feedforward layer is where each token thinks about what it heard. Interpretability research suggests it is also where much of the model's factual knowledge is stored, as key–value associations in the weights.[^3]

Each of the two components is wrapped in a **residual connection** and a **layer normalization** (chapter 10): the block's output is its input plus the component's output. The 2017 paper normalized after the addition; models since GPT-2 normalize the *input* to each component instead, $\mathbf{x} \leftarrow \mathbf{x} + \text{Attn}(\text{LN}(\mathbf{x}))$, and it is this **pre-normalization** that lets transformers stack to a hundred layers or more without the training instability the original design showed at depth.[^9] Modern blocks differ in other details too: a gated feedforward layer (SwiGLU) with three matrices rather than two, and attention heads that share keys and values in groups to save memory, so the parameter arithmetic below is approximate for them. A **transformer** is an embedding layer, then $L$ identical blocks, then an output layer, which for a language model is a linear map to a score for every token in the vocabulary followed by a softmax.

{{fig:transformer-block|A decoder-only transformer. Tokens are embedded and given positional information, then pass through L identical blocks, each containing masked multi-head self-attention and a feedforward network, both with residual connections and normalization. The final layer produces a probability over the vocabulary for the next token.}}

:::math Counting parameters
For a model with embedding dimension $d$, $L$ layers, and a vocabulary of $V$ tokens, each block has roughly $4d^2$ parameters in attention ($W_Q, W_K, W_V$, and an output projection) and $8d^2$ in the feedforward layer (two matrices of size $d \times 4d$), so about $12d^2$ per block and $12Ld^2$ for the stack, plus $Vd$ for the embeddings. GPT-3 has $d = 12{,}288$ and $L = 96$: $12 \times 96 \times 12{,}288^2 \approx 174$ billion, plus embeddings, giving the quoted 175 billion.[^4] Nearly all of a language model is these two kinds of matrix, repeated.
:::

## The 2017 paper and what followed

"Attention Is All You Need" was written for machine translation, with an **encoder** that read the source sentence and a **decoder** that generated the target, attending to the encoder's output.[^1] It trained in a fraction of the time of the recurrent systems it replaced and translated better. The three families that followed each kept one part. **BERT** (2018) kept the encoder, trained it to fill in masked words, and produced representations that swept the language-understanding benchmarks; it powers Google Search.[^5] **GPT** (2018 onward) kept the decoder, trained it on next-word prediction, and became the basis of generative language models.[^6] T5 and others kept both. Since 2020 the decoder-only design has dominated, because a model that can generate can be asked to do anything, including understanding.

The transformer's victory over recurrence had less to do with representational power than with hardware. Every operation in a transformer is a large matrix multiplication over all positions at once, which is precisely what GPUs and their successors do fastest; an LSTM spends most of its time waiting for the previous step. When the bottleneck is compute, the architecture that uses compute most efficiently wins, and the transformer let researchers spend the entire compute budget on scale (chapter 16). Its one weakness is the $n^2$ cost of attending every token to every other: a sequence twice as long costs four times as much. Engineering (FlashAttention, sparse and sliding-window attention) and alternatives (state-space models such as Mamba) attack this; by 2025 frontier models handled contexts of a million tokens, roughly ten novels.[^7]

## What happens when a model predicts a word

Put it together. The text so far, say 500 tokens, is embedded. Each of the 96 blocks lets every token gather information from the tokens before it (attention) and process it (feedforward). By the last block, the final token's vector encodes what the model has computed about what should come next. The output layer converts that vector to 50,000 scores, softmax turns them into probabilities, and a token is **sampled**: usually not the single most probable one (that produces repetitive text) but a draw weighted by probability, with a **temperature** setting that controls how adventurous the draw is. The chosen token is appended and the process repeats.[^8]

That is all a language model does at inference time: a few hundred matrix multiplications per token, then a weighted coin flip. Everything remarkable about the behavior comes from what those matrices learned, which is the subject of the next chapter, and everything unreliable about it (a wrong fact is just a token that got a high score) follows from the fact that the model is choosing plausible continuations, not consulting a database.

Two engineering facts shape the cost. The keys and values of every earlier token are stored, in the **KV cache**, rather than recomputed, so each new token costs one pass through the model; but the cache grows with the context, which is why long contexts consume memory and money and why providers charge more for them. And many recent models are **mixture-of-experts**: each block holds several feedforward networks and a small learned router sends each token to one or two of them, so a model with 400 billion parameters in total may use only 40 billion for any given token. Quoted parameter counts for such models overstate their per-token cost by that ratio, and the "20 tokens per parameter" rule of the next chapter applies to the active count. A further trick, **speculative decoding**, has a small model draft several tokens that the large model then checks in one pass, which speeds generation without changing the output.[^10]

:::howto Reading a model card's architecture line
When a model is described as "a 70B decoder-only transformer, 80 layers, $d = 8192$, 64 heads, 128k context, 128k vocabulary":
1. **70B**: about 70 billion parameters, mostly the attention and feedforward matrices. At 2 bytes each, 140 GB of weights; this is why it needs several GPUs or aggressive compression (**quantization** to 4 bits cuts it to 35 GB).
2. **Decoder-only**: GPT-style, trained on next-token prediction, generates left to right.
3. **80 layers, $d = 8192$**: check with $12 \times 80 \times 8192^2 \approx 64$ billion; the rest is embeddings and the modern-block details above (a gated feedforward layer adds parameters, grouped attention removes some, and for this model they roughly cancel).
4. **64 heads**: each attention layer runs 64 parallel attention patterns of dimension $8192/64 = 128$.
5. **128k context**: it can attend over 128,000 tokens (about 300 pages). The cost of attention grows with the square of this, so long contexts are expensive.
6. **128k vocabulary**: the tokenizer (chapter 16) splits text into pieces from a list of 128,000; a typical English word is about 1.3 tokens.
:::

:::formulas
| Component | Formula |
|---|---|
| Queries, keys, values | $Q = XW_Q$, $K = XW_K$, $V = XW_V$ |
| Attention | $\text{softmax}\!\left(\dfrac{QK^\top}{\sqrt{d_k}}\right)V$ |
| Multi-head | concatenate $h$ heads, each with its own $W_Q, W_K, W_V$, then project |
| Causal mask | scores from position $i$ to $j > i$ set to $-\infty$ before softmax |
| Feedforward | $\text{FFN}(\mathbf{x}) = W_2\,g(W_1\mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2$ |
| Block (pre-norm, modern) | $\mathbf{x} \leftarrow \mathbf{x} + \text{Attn}(\text{LN}(\mathbf{x}))$; $\mathbf{x} \leftarrow \mathbf{x} + \text{FFN}(\text{LN}(\mathbf{x}))$ |
| Head width | $d_k = d/h$ for $h$ heads |
| Parameters | $\approx 12Ld^2 + Vd$ |
| Attention cost | $O(n^2 d)$ for context length $n$ |
| Sampling with temperature $T$ | $p_k \propto e^{z_k / T}$; $T \to 0$ picks the top token |
:::

:::know
- Self-attention lets every token gather information from every other in one parallel step, weighted by learned query–key matches.
- Multiple heads track different relationships; positional encodings supply word order; a causal mask keeps next-word prediction honest.
- A block is attention (tokens talk) plus a feedforward layer (each token thinks), with residual connections; a model is that block stacked.
- Parameters are almost entirely two kinds of matrix, about $12d^2$ per layer.
- The transformer won because it turns the whole computation into big matrix multiplications that GPUs do fast, so all the budget goes to scale.
- Generation is a few hundred matrix multiplications per token and a weighted random draw. The model picks plausible continuations; it does not look things up.
:::

## Summary

- The transformer replaces recurrence with self-attention: each token's representation becomes a weighted mix of all tokens' values, with weights from query–key dot products, computed in parallel.
- Multi-head attention, positional encoding, causal masking, feedforward layers, residual connections, and layer normalization complete the block, which is stacked dozens of times.
- Encoder (BERT), decoder (GPT), and encoder–decoder variants followed the 2017 paper; decoder-only models now dominate.
- The architecture's decisive advantage is efficient use of parallel hardware, at the cost of attention that grows with the square of the context length.
- A language model generates by computing a probability over its vocabulary for the next token and sampling; its knowledge lives in the learned matrices.

[^1]: Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., Polosukhin, I. (2017). "Attention Is All You Need." *NeurIPS 30*. [arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762). Accessible walkthrough: Alammar, J. (2018). "The Illustrated Transformer." [jalammar.github.io](https://jalammar.github.io/illustrated-transformer/)
[^2]: Su, J., Lu, Y., Pan, S., Murtadha, A., Wen, B., Liu, Y. (2024). "RoFormer: Enhanced transformer with Rotary Position Embedding." *Neurocomputing*, 568, 127063. [doi:10.1016/j.neucom.2023.127063](https://doi.org/10.1016/j.neucom.2023.127063)
[^3]: Geva, M., Schuster, R., Berant, J., Levy, O. (2021). "Transformer Feed-Forward Layers Are Key-Value Memories." *EMNLP 2021*. [arxiv.org/abs/2012.14913](https://arxiv.org/abs/2012.14913). Meng, K., Bau, D., Andonian, A., Belinkov, Y. (2022). "Locating and Editing Factual Associations in GPT." *NeurIPS 35*. [arxiv.org/abs/2202.05262](https://arxiv.org/abs/2202.05262)
[^4]: Brown, T. B. et al. (2020). "Language Models are Few-Shot Learners." Table 2.1. [arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165). Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." §2.1 gives $N \approx 12 n_{\text{layer}} d_{\text{model}}^2$. [arxiv.org/abs/2001.08361](https://arxiv.org/abs/2001.08361)
[^5]: Devlin, J., Chang, M.-W., Lee, K., Toutanova, K. (2019). "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding." *NAACL 2019*. [arxiv.org/abs/1810.04805](https://arxiv.org/abs/1810.04805). Nayak, P. (2019). "Understanding searches better than ever before." Google. [blog.google](https://blog.google/products/search/search-language-understanding-bert/)
[^6]: Radford, A., Narasimhan, K., Salimans, T., Sutskever, I. (2018). "Improving Language Understanding by Generative Pre-Training." OpenAI. [cdn.openai.com](https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf)
[^7]: Dao, T., Fu, D. Y., Ermon, S., Rudra, A., Ré, C. (2022). "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness." *NeurIPS 35*. [arxiv.org/abs/2205.14135](https://arxiv.org/abs/2205.14135). Gu, A., Dao, T. (2023). "Mamba: Linear-Time Sequence Modeling with Selective State Spaces." [arxiv.org/abs/2312.00752](https://arxiv.org/abs/2312.00752). Gemini Team (2024). "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context." [arxiv.org/abs/2403.05530](https://arxiv.org/abs/2403.05530)
[^8]: Holtzman, A., Buys, J., Du, L., Forbes, M., Choi, Y. (2020). "The Curious Case of Neural Text Degeneration." *ICLR 2020*. [arxiv.org/abs/1904.09751](https://arxiv.org/abs/1904.09751)
[^9]: Xiong, R. et al. (2020). "On Layer Normalization in the Transformer Architecture." *ICML 2020*. [arxiv.org/abs/2002.04745](https://arxiv.org/abs/2002.04745). Shazeer, N. (2020). "GLU Variants Improve Transformer." [arxiv.org/abs/2002.05202](https://arxiv.org/abs/2002.05202). Ainslie, J. et al. (2023). "GQA: Training Generalized Multi-Query Transformer Models from Multi-Head Checkpoints." *EMNLP 2023*. [arxiv.org/abs/2305.13245](https://arxiv.org/abs/2305.13245)
[^10]: Pope, R. et al. (2023). "Efficiently Scaling Transformer Inference." *MLSys 2023*. [arxiv.org/abs/2211.05102](https://arxiv.org/abs/2211.05102). Fedus, W., Zoph, B., Shazeer, N. (2022). "Switch Transformers: Scaling to Trillion Parameter Models with Simple and Efficient Sparsity." *JMLR*, 23(120), 1–39. [jmlr.org](https://jmlr.org/papers/v23/21-0998.html). Leviathan, Y., Kalman, M., Matias, Y. (2023). "Fast Inference from Transformers via Speculative Decoding." *ICML 2023*. [arxiv.org/abs/2211.17192](https://arxiv.org/abs/2211.17192)
