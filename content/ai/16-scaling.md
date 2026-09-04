---
title: Scale
subtitle: Predict the next word, on the whole internet, with a network the size of a city's electricity bill. What pretraining is, why bigger kept getting better, the laws that describe it, and the argument about whether abilities "emerge."
part: IV · Large Language Models
---

## Recap

Chapter 15 gave the architecture. This chapter gives it data and compute, and describes the most consequential empirical discovery of the last decade: that a transformer trained on nothing but next-word prediction improves smoothly and predictably as it grows, with no ceiling yet found, and appears to acquire abilities nobody trained it for.

## Tokens

A language model does not read words. It reads **tokens**: pieces of text from a fixed vocabulary of 30,000 to 200,000 entries, learned by a **tokenizer** that repeatedly merges the most frequent adjacent character pairs in the training text (**byte-pair encoding**).[^1] Common words are single tokens ("the," "cat"); rarer words split ("un-believ-able"); numbers and code split into fragments; and text in languages underrepresented in training takes two to five times as many tokens per word, which makes the model slower and worse at them. A useful rule for English: about 0.75 words per token, so 1,000 tokens is roughly 750 words or three pages.

Tokenization is why models are oddly bad at spelling and counting letters (they never see letters, only tokens), why several 2024 models insisted "strawberry" has two r's (the model sees "straw" and "berry" as opaque units and never counts letters, a likely though unproven explanation), and why arithmetic on large numbers is unreliable (a number is a sequence of arbitrary chunks).[^2] Images and audio enter the same way: an image is cut into patches and each patch becomes a token (chapter 11's Vision Transformer), and sound is compressed into a sequence of codes, so one transformer can read text, pictures, and speech as one stream of tokens. These are not reasoning failures; they are consequences of what the model perceives.

## Pretraining

**Pretraining** is the first and by far the most expensive stage of building a language model. Take a transformer with random weights. Take a corpus of text: web pages, books, code, papers, transcripts, totaling trillions of tokens. For each position in each document, have the model predict the next token; compute the cross-entropy loss (chapter 5) between its predicted distribution and the actual next token; backpropagate; step. Repeat over the entire corpus, usually once.

That is all. The objective is the autoregressive factorization of chapter 13: maximize the probability the model assigns to the text that actually exists. It is self-supervised (chapter 7): the labels are the text itself, so every byte of writing humans have produced is training data. The resulting **base model** is a probability distribution over text. Given any prefix, it produces a distribution over what comes next that reflects, in enormous statistical detail, how humans write.

:::key
Why does predicting the next word produce something that can translate, summarize, code, and answer questions? Because predicting text well *requires* those abilities. To predict the next word of "The capital of Australia is," the model must know it is Canberra. To predict the next line of a Python function, it must understand the function. To predict a character's next line in a novel, it must model the character's beliefs. The training objective is trivial to state; achieving low loss on it demands a compressed model of everything in the text, including the world the text is about. Prediction is a proxy for understanding, and at scale the proxy became good enough to be useful.[^3]
:::

The cost is staggering. A frontier pretraining run in 2025 used on the order of $10^{26}$ floating-point operations, tens of thousands of GPUs running for months, tens of trillions of tokens, and, by public estimates, hundreds of millions of dollars in compute alone; the electricity for one run rivals a small city's annual use.[^4] Chapter 21 takes up what that concentration of resources means.

## The scaling laws

Here is the discovery. In 2020, Jared Kaplan and colleagues at OpenAI trained transformers of many sizes on many amounts of data and plotted the test loss against parameters, data, and compute. Each relationship was a straight line on a log-log plot over seven orders of magnitude: a **power law**.[^5]

$$L(N) \approx \left(\frac{N_c}{N}\right)^{\alpha_N}, \qquad L(D) \approx \left(\frac{D_c}{D}\right)^{\alpha_D}, \qquad L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha_C}$$

$L$ is the loss (cross-entropy per token in natural-log units, how surprised the model is by real text; $e^L$ is the **perplexity**, the effective number of choices the model is hesitating between). $N$ is the number of parameters, $D$ the number of training tokens, $C$ the compute, each with a fitted constant ($N_c$ and so on) and exponent ($\alpha$). The exponents are small, around 0.05 to 0.1: a tenfold increase in compute cuts the loss by a fixed fraction, every time, with no sign of a floor within the tested range. In practice the fit needs one more term, an **irreducible loss** $E$ of roughly 1.7 nats per token that no model can beat because text is genuinely unpredictable; the power law describes how fast the excess over $E$ shrinks, which is why gains flatten in absolute terms even as the law holds.[^7] The laws were so regular that a lab could predict the loss of a model a hundred times larger than any it had trained, and be right. GPT-4's developers report that they predicted its final loss from models trained with a ten-thousandth of its compute.[^6]

{{fig:scaling-law|Loss falls as a power law in compute: a straight line on log-log axes across many orders of magnitude. Each point is a trained model. The line has continued to hold through 2025, though the exponent is small, so each constant improvement costs ten times the compute of the last.}}

Two years later, DeepMind's Chinchilla paper corrected a detail with large consequences.[^7] Kaplan's fits had implied that model size should grow much faster than data. Chinchilla's more careful experiments showed the two should grow in proportion: for a given compute budget, the optimal model has about 20 training tokens per parameter. GPT-3, at 175 billion parameters and 300 billion tokens, was far too big for its data; a 70-billion-parameter model trained on 1.4 trillion tokens matched it at well under half the inference cost. Every model since has been trained on far more data per parameter, and since data, not parameters, is the binding constraint, labs are projected to exhaust the stock of high-quality human text before 2030 and have turned to code, transcripts, synthetic data, and more passes over the same text.[^8] Which text goes in matters as much as how much: frontier labs deduplicate, filter for quality, and, imperfectly, try to remove benchmark test questions so that later evaluations mean something (chapter 19).

:::howto Using scaling laws to plan a model
Suppose you have a compute budget $C$ (in floating-point operations) and want the best model.
1. **Compute per token**: training a transformer costs about $6N$ operations per token (a forward pass is $2N$, backward $4N$). So $C \approx 6ND$.
2. **Chinchilla ratio**: set $D \approx 20N$. Then $C \approx 120N^2$, so $N \approx \sqrt{C/120}$ and $D = 20N$.
3. **Example**: $C = 10^{24}$ operations (roughly a thousand top GPUs for a few weeks in 2024). $N \approx \sqrt{10^{24}/120} \approx 9 \times 10^{10}$: about 90 billion parameters, trained on about 1.8 trillion tokens.
4. **Adjust for use**: if the model will serve billions of requests, inference cost dominates, and it pays to train a *smaller* model on *more* data than Chinchilla suggests (Llama 3 trained 8 billion parameters on 15 trillion tokens, nearly 2,000 per parameter). Small models trained long are the 2024–25 norm.
5. **Predict the loss** from the fitted power law before spending the budget, and check the run against the prediction as it trains. Deviation means a bug.
:::

## What scale bought

Loss is a number. What the field cares about is what the model can *do*, and here the story is more complicated and more contested.

The GPT-3 paper's headline finding was **in-context learning**: give the model a few examples of a task in its prompt ("English: cat, French: chat; English: dog, French: …") and it performs the task, with no gradient update, as if it had been trained for it.[^9] Smaller models could not do this. The capability appeared with scale, and it is what made a single general model a substitute for thousands of task-specific ones. **Chain-of-thought** prompting (2022) found that asking a large model to "think step by step" before answering dramatically improved its arithmetic and logic, again only above a certain size.[^10]

Papers began reporting **emergent abilities**: skills near zero in small models that jumped to high performance at some scale, with no gradual improvement between. Modular arithmetic, word unscrambling, multi-step reasoning. A 2022 survey catalogued dozens.[^11] The framing suggested that scale produced qualitative leaps, unpredictable in advance, and both the excitement and the alarm about large models drew on it.

Then, in 2023, Schaeffer, Miranda, and Koyejo argued that the leaps were largely an artifact of measurement.[^12] The abilities were scored with all-or-nothing metrics: exact-match accuracy, in which a five-digit sum is either entirely right or wrong. Underneath, the model's per-token accuracy improved smoothly with scale; it was only when all five digits were likely to be right simultaneously that the exact-match score flipped from near zero to high. Score the same models with a continuous metric and the emergence disappears into a smooth curve. The paper won a NeurIPS outstanding paper award and did not end the debate: some abilities still look discontinuous under any metric, and whether a smoothly improving competence that crosses a threshold of usefulness counts as "emergent" is partly a question of words. What is not in dispute is that the *loss* is predictable and the *capabilities* are much less so, which is the core problem for anyone trying to say in advance what the next model will do.

## Has it stopped?

Since 2023 the pretraining scaling curve has been debated under the heading "hitting a wall." Three facts are reasonably established. The power law in compute has continued to hold where it has been tested. The supply of new high-quality human text is finite and is being exhausted, so continuing the curve requires synthetic data or new modalities (video, code execution, robotics). And the largest gains of 2024 and 2025 came not from bigger pretraining runs but from a new axis: spending compute at *inference* time, letting the model think longer, trained by reinforcement learning on verifiable problems (chapter 17). Whether that is a new scaling law or a one-time gain is, as of this writing, the central empirical question of the field, and the Latest Research section tracks it.[^13]

:::warning
The scaling laws describe loss on the training distribution. They do not say the model becomes truthful, or safe, or aligned with anyone's intentions, or good at things not represented in the text. A model that predicts internet text extremely well predicts its falsehoods, its biases, and its fiction along with its facts. Everything that makes a pretrained model *usable* rather than merely fluent is added afterward, in the post-training of chapter 17, and the gap between "predicts text well" and "does what you want" is where most of the difficulty now lies.
:::

:::formulas
| Idea | Formula |
|---|---|
| Pretraining objective | minimize $-\sum_t \log P_\theta(w_t \mid w_{<t})$ over the corpus |
| Power-law scaling | $L(C) \approx (C_c / C)^{\alpha_C}$, with $\alpha_C \approx 0.05$ |
| Training compute | $C \approx 6ND$ (parameters × tokens × 6) |
| Chinchilla-optimal | $D \approx 20N$, so $N \approx \sqrt{C/120}$ |
| Tokens per word (English) | about 1.3 |
| Perplexity | $e^{L}$ for $L$ in nats: the effective number of choices the model is "hesitating between" per token |
| With irreducible loss | $L = E + A/N^\alpha + B/D^\beta$, $E \approx 1.7$ nats |
:::

:::know
- Models read tokens, not words or letters; tokenization explains spelling, counting, and arithmetic quirks and the cost of non-English text.
- Pretraining is next-token prediction on trillions of tokens with cross-entropy loss. Low loss requires modeling the world the text describes.
- Loss falls as a power law in parameters, data, and compute, predictably over many orders of magnitude; Chinchilla says data and parameters should grow together, about 20 tokens per parameter.
- In-context learning and chain-of-thought appeared with scale; whether abilities "emerge" discontinuously or improve smoothly under coarse metrics is debated.
- Pretraining data is running out; the newest gains come from inference-time compute and reinforcement learning, not bigger pretraining alone.
- Scaling improves prediction, not truthfulness or alignment. Those are added after.
:::

## Summary

- Language models operate on tokens from a learned vocabulary and are pretrained by next-token prediction on trillions of tokens, a self-supervised objective whose difficulty forces a model of the text's world.
- Loss follows power laws in model size, data, and compute (Kaplan 2020); Chinchilla (2022) showed data and parameters should scale together, and later models trained small models on far more data for inference efficiency.
- Scale produced in-context learning and chain-of-thought reasoning; the "emergent abilities" narrative was partly a measurement artifact, but capabilities remain far less predictable than loss.
- Human text is finite; the frontier has shifted toward synthetic data and inference-time compute, and whether pretraining scaling has a wall is an open question.
- Pretraining yields fluency, not reliability; the behaviors users depend on are added in post-training.

[^1]: Sennrich, R., Haddow, B., Birch, A. (2016). "Neural Machine Translation of Rare Words with Subword Units." *ACL 2016*. [arxiv.org/abs/1508.07909](https://arxiv.org/abs/1508.07909). Gage, P. (1994). "A New Algorithm for Data Compression." *The C Users Journal*, 12(2), 23–38.
[^2]: Petrov, A., La Malfa, E., Torr, P., Bibi, A. (2023). "Language Model Tokenizers Introduce Unfairness Between Languages." *NeurIPS 36*. [arxiv.org/abs/2305.15425](https://arxiv.org/abs/2305.15425). On letter counting: Fu, T. et al. (2024). "Why Do Large Language Models Struggle with Character-Level Tasks? Tokenization and Beyond." [arxiv.org/abs/2410.20151](https://arxiv.org/abs/2410.20151). Press coverage of the "strawberry" failure: Edwards, B. (2024). "Why AI language models choke on too much text." *Ars Technica*; Dickson, B. (2024). "Why can't ChatGPT count the R's in strawberry?" *TechCrunch*, 27 August 2024.
[^3]: Sutskever, I. (2023). "A Conversation with Ilya Sutskever." NVIDIA GTC 2023, session S52092, on prediction as compression of the underlying process. [nvidia.com](https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s52092/). Delétang, G. et al. (2024). "Language Modeling Is Compression." *ICLR 2024*. [arxiv.org/abs/2309.10668](https://arxiv.org/abs/2309.10668)
[^4]: Epoch AI. *Trends in AI: Training compute of frontier models*. [epoch.ai/trends](https://epoch.ai/trends). Cottier, B. et al. (2024). "The rising costs of training frontier AI models." [arxiv.org/abs/2405.21015](https://arxiv.org/abs/2405.21015). Grattafiori, A. et al. (2024). "The Llama 3 Herd of Models," §3 (16,000 GPUs, 15 trillion tokens). [arxiv.org/abs/2407.21783](https://arxiv.org/abs/2407.21783)
[^5]: Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." [arxiv.org/abs/2001.08361](https://arxiv.org/abs/2001.08361). Hestness, J. et al. (2017). "Deep Learning Scaling is Predictable, Empirically." [arxiv.org/abs/1712.00409](https://arxiv.org/abs/1712.00409)
[^6]: OpenAI (2023). "GPT-4 Technical Report," §3, "Predictable Scaling." [arxiv.org/abs/2303.08774](https://arxiv.org/abs/2303.08774)
[^7]: Hoffmann, J. et al. (2022). "Training Compute-Optimal Large Language Models." *NeurIPS 35*. [arxiv.org/abs/2203.15556](https://arxiv.org/abs/2203.15556)
[^8]: Villalobos, P. et al. (2024). "Will we run out of data? Limits of LLM scaling based on human-generated data." *ICML 2024*. [arxiv.org/abs/2211.04325](https://arxiv.org/abs/2211.04325). Muennighoff, N. et al. (2023). "Scaling Data-Constrained Language Models." *NeurIPS 36*. [arxiv.org/abs/2305.16264](https://arxiv.org/abs/2305.16264)
[^9]: Brown, T. B. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS 33*. [arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165)
[^10]: Wei, J. et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." *NeurIPS 35*. [arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)
[^11]: Wei, J. et al. (2022). "Emergent Abilities of Large Language Models." *Transactions on Machine Learning Research*. [arxiv.org/abs/2206.07682](https://arxiv.org/abs/2206.07682)
[^12]: Schaeffer, R., Miranda, B., Koyejo, S. (2023). "Are Emergent Abilities of Large Language Models a Mirage?" *NeurIPS 36*, Outstanding Paper. [arxiv.org/abs/2304.15004](https://arxiv.org/abs/2304.15004)
[^13]: Snell, C., Lee, J., Xu, K., Kumar, A. (2024). "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters." [arxiv.org/abs/2408.03314](https://arxiv.org/abs/2408.03314). OpenAI (2024). "Learning to reason with LLMs." [openai.com](https://openai.com/index/learning-to-reason-with-llms/). Epoch AI (2026). *Trends*, "Training compute" and "Algorithmic progress." [epoch.ai/trends](https://epoch.ai/trends)
