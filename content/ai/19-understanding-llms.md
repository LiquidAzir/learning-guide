---
title: What Is Going On in There?
subtitle: Stochastic parrot or world model? What interpretability has actually found inside a language model, what benchmarks can and cannot tell you, and the argument about understanding that the field has not settled.
part: IV · Large Language Models
---

## What would count as understanding inside a language model?

A language model is a few hundred matrix multiplications and a coin flip (chapter 15), trained to predict text (chapter 16), shaped by feedback (chapter 17). It writes working code, passes professional exams, and explains jokes. It also tells you a paper exists that does not. What is it, and does it understand anything? This chapter gives the evidence on both sides, the tools that let researchers look inside, and the reasons the question is harder than it sounds. It is the most contested chapter in the guide and it tries to be fair to everyone.

## The argument

In 2021 Emily Bender, Timnit Gebru, and colleagues called language models **stochastic parrots**: systems that stitch together sequences of linguistic forms according to probabilistic information about how they combine, without any reference to meaning.[^1] The phrase stuck. On this view, fluency is being mistaken for understanding; the model has learned the statistics of text about the world, not the world, and its apparent competence is a reflection of the text it saw, including its errors, biases, and fictions.

The opposing view holds that predicting text well enough *requires* modeling what the text is about (chapter 16's key idea), and that the models have, in fact, built internal representations of the world, causal structure, and other minds, because that was the only way to get the loss down. On this view the models understand in the functional sense that matters: their internal states track features of the world and are used to make correct inferences about it.

Both camps agree on the facts about behavior. The disagreement is partly about what "understand" means, which is a question philosophers have not settled for humans either, and partly about what is happening inside, which is an empirical question that the field has begun to answer.

## What behavior shows

**For the parrot.** Models fail in ways that suggest pattern-matching rather than modeling. Their performance on a reasoning problem changes when irrelevant details are changed or the numbers are swapped; they solve a puzzle in its famous form and fail a trivial variant; their accuracy on arithmetic tracks how often the specific numbers appear in training text.[^2] They confabulate fluently, which a system tracking truth would not. Adversarial prompts flip their answers. And a 2023 study found that when the training set was searched, a substantial share of "reasoning" benchmark items had near-duplicates in it: **contamination**, the model having seen the test.[^3]

**Against the parrot.** Models generalize to tasks that cannot have been in training data: novel code in combinations of libraries that did not coexist, chess positions never played, made-up languages taught in the prompt. In-context learning itself, picking up a new task from three examples, is not retrieval. Reasoning models solve competition problems written after their training cutoff, at the level of the best human students (mathematics guide, chapter 16). And scaling produced these capabilities, which the parrot framing did not anticipate, although its authors would reply that behavior, however impressive, was never their test of understanding.[^4]

A careful position is that both are true of the same system: it pattern-matches where it can and models where it must, its competence is jagged in ways that follow the training distribution, and neither "it understands" nor "it is only autocomplete" describes the object well.

## What is inside

The behavioral argument stalls because behavior is consistent with many internal stories. **Mechanistic interpretability** tries to read the mechanism directly, treating the network's weights and activations the way a biologist treats a cell, and since 2020 it has found things.

**Probes.** Train a small classifier on a model's internal activations to predict some property of the input. If a *linear* probe, the simplest possible readout, can recover from the activations alone the state of a board game the model was only ever shown as move notation, then the model has an explicit representation of the board, not merely information a powerful decoder could dig out.[^5] Such probes have found representations of board states in game-playing transformers, of geographic coordinates for place names, of the truth value of statements, and of the model's own uncertainty, none of which were training targets.

**Circuits.** Trace how specific behaviors are computed. Anthropic and others found **induction heads**, attention heads that implement "if this token appeared before, copy what followed it," the mechanism behind in-context learning, and mapped the circuit that lets GPT-2 complete "When Mary and John went to the store, John gave a drink to" with "Mary."[^6]

**Features.** Individual neurons are **polysemantic**, responding to many unrelated things, which is why they were hard to read. In 2023 and 2024 researchers trained **sparse autoencoders** on a model's activations to decompose them into millions of **features**, directions in activation space that each respond to one interpretable thing: the Golden Gate Bridge, code with a security bug, a person lying, the concept of inner conflict. Turning a feature up or down changed the model's behavior accordingly; a version of Claude with the Golden Gate feature amplified mentioned the bridge in every response, including when asked how to spend ten dollars.[^7]

**Attribution graphs.** In 2025 Anthropic traced, for individual prompts, which features caused which through the layers of a production model. The case studies showed the model planning a rhyme several words before reaching it; computing "Dallas → Texas → Austin" as two explicit steps to answer "the capital of the state containing Dallas"; using a shared, language-independent representation when the same question was asked in English, French, and Chinese; and, in some cases, producing a chain of thought that did not match the computation that actually produced the answer.[^8]

:::key
The interpretability results, as of 2026, support neither extreme. The models contain genuine internal representations of things in the world, computed by identifiable mechanisms, and use them to reason in ways that are more than lookup: that part of the parrot story is wrong. The representations are also partial, entangled, and jagged; the mechanisms include shortcuts and heuristics; the stated reasoning is sometimes a story; and the fraction of a frontier model's computation that anyone can currently explain is small. The honest summary is that we have opened the box and found a mechanism that is neither a database nor a mind, and we do not yet have a good word for it. One more caution: most of the production-model evidence comes from lab reports by the model builders themselves, chiefly Anthropic, published outside peer review; probes and induction heads have been independently replicated, the frontier-model feature and circuit results less so.
:::

## What benchmarks measure

Claims about model capability rest on **benchmarks**: fixed sets of questions with known answers. They are indispensable and easy to misread.

**Saturation.** A benchmark on which models score 95 percent no longer measures anything; the remaining 5 percent is often mislabeled items. Benchmarks that were hard in 2018 (GLUE, SQuAD) were saturated by 2020; those hard in 2023 (MMLU, HumanEval) by 2025; the software-engineering benchmark SWE-bench went from under 5 percent in late 2023 to about 90 percent on its human-verified subset by early 2026.[^9] The field responds by building harder ones, which age as fast.

**Contamination.** Benchmark questions leak into training data through the web. A model that has seen the test is not being tested. Private, held-out benchmarks (such as FrontierMath, kept off the internet) exist for this reason, and even those have had problems with funder access and item errors.[^10]

**Construct validity.** Passing the bar exam does not make a model a lawyer, because the exam measures the part of lawyering that can be examined. A model can score in the 90th percentile on medical licensing questions and fail to notice that a patient has stopped answering. Benchmarks measure what is measurable, and the jagged frontier (chapter 18) means the measurable part predicts the rest poorly.

**Goodhart.** Goodhart's law says that when a measure becomes a target, it stops being a good measure. Once a benchmark is the target, it is optimized for, honestly (training on similar data) and otherwise. Leaderboard positions are marketing.

:::howto Reading a capability claim
1. **Which benchmark, and when was it made?** Older than two years means probably saturated or contaminated.
2. **What was the human baseline, and who were the humans?** "Human-level" often means the average of crowd workers, not experts.
3. **How was the model prompted?** Few-shot, chain-of-thought, majority vote over many samples, and tool use can each add 10 to 30 points. Compare like with like.
4. **Was the test set public?** If so, assume some contamination.
5. **Who ran the evaluation?** The lab that built the model, or an independent party?
6. **What does the benchmark not cover?** Reliability over long tasks, behavior under adversarial input, and calibration are rarely on the leaderboard and usually matter more.
:::

## Memorization versus generalization

Large models memorize some of their training data verbatim: given the first lines of a famous poem or a widely copied license text, they reproduce it, and **extraction attacks** have recovered hundreds, and later thousands, of training examples, including personal information, from deployed models.[^11] Memorization scales with model size and with how often a passage appeared. It coexists with generalization: the same model that recites a Wikipedia paragraph also solves a problem it has never seen. **Grokking** experiments (chapter 8) show the transition in miniature: a small network memorizes its training set, then, long after, abruptly discovers the general rule and its test accuracy jumps. Which mode a model is in for a given query is not visible from outside, which is one reason its confidence is not a guide to its reliability.

## Limits that are structural

Some limitations follow from the architecture and will not be fixed by scale alone. A single forward pass does a fixed amount of computation per token, so problems that require more steps than the network has layers cannot be solved in one pass, which is why chain-of-thought (writing out intermediate steps, using the output as scratch memory) helps so much: it converts depth into length.[^12] The model has no persistent memory across conversations unless one is built around it. It cannot learn from a conversation; its weights are frozen after training, and what looks like learning is the context window. And it has no access to ground truth: it cannot check a fact except by consulting a tool or its own unreliable recall.

Whether these are fundamental or engineering problems is the frontier's question (chapter 22). Tools, memory systems, and retrieval address several from outside; whether the core system can be made reliably truthful, or whether reliability will always come from the scaffolding around it, is not known.

:::frontier
Interpretability's practical goal is an audit: to check, from the inside, whether a model is deceiving, whether its reasoning is what it says, whether a dangerous capability is present. Progress has been fast (from single neurons in 2020 to million-feature dictionaries and attribution graphs by 2025) and the gap to the goal remains large: features explain a fraction of a model's behavior, methods do not yet scale to the largest models routinely, and the field is racing capability growth. The theoretical question underneath, what it would even mean for a computation like this to "understand," has moved from philosophy seminars to engineering meetings, and neither discipline has an answer. The Latest Research section tracks both.
:::

:::know
- "Stochastic parrot" and "world model" are both partly right; the system pattern-matches where it can and models where it must, and neither phrase describes it well.
- Probes, circuits, sparse-autoencoder features, and attribution graphs have found real internal representations and mechanisms, including planning ahead and multi-step reasoning, and also unfaithful reasoning and shortcuts.
- Benchmarks saturate, get contaminated, and measure the measurable. Read the date, the baseline, the prompting, and who ran it.
- Models both memorize and generalize, and you cannot tell which from outside.
- Fixed computation per token, no persistent memory, no learning after training, no ground truth: structural limits addressed today by scaffolding.
:::

:::try Put the idea to work
A model answers a familiar question correctly, then fails a small variation. What does that tell you, and what does it leave uncertain?

:::answer Show the reasoning
The success did not establish robust generalization across those cases. It may rely on a shortcut, memorized pattern, or fragile representation. The pair of outputs constrains what the model can do; it does not by itself settle every claim about its internal understanding.
:::
:::

## Summary

- The debate over whether language models understand divides on the definition of understanding and on what is happening inside; behavioral evidence supports both pattern-matching and genuine modeling.
- Interpretability has found linear representations of world state, identifiable circuits for in-context learning and factual recall, millions of monosemantic features that causally steer behavior, and attribution graphs showing planning and multi-step inference, alongside unfaithful explanations.
- Benchmarks are indispensable and misleading: saturation, contamination, construct validity, and Goodhart effects mean scores must be read with the date, baseline, prompting, and evaluator in mind.
- Memorization and generalization coexist in the same model; structural limits of fixed per-token computation, frozen weights, and no ground truth are handled by external scaffolding.
- The audit of a model's internals is interpretability's goal and is not yet achievable at frontier scale.

[^1]: Bender, E. M., Gebru, T., McMillan-Major, A., Shmitchell, S. (2021). "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *FAccT '21*, 610–623. [doi:10.1145/3442188.3445922](https://doi.org/10.1145/3442188.3445922)
[^2]: Mirzadeh, I. et al. (2024). "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in Large Language Models." [arxiv.org/abs/2410.05229](https://arxiv.org/abs/2410.05229). Razeghi, Y., Logan IV, R. L., Gardner, M., Singh, S. (2022). "Impact of Pretraining Term Frequencies on Few-Shot Reasoning." *EMNLP 2022 Findings*. [arxiv.org/abs/2202.07206](https://arxiv.org/abs/2202.07206). McCoy, R. T., Yao, S., Friedman, D., Hardy, M., Griffiths, T. L. (2024). "Embers of autoregression show how large language models are shaped by the problem they are trained to solve." *PNAS*, 121(41). [doi:10.1073/pnas.2322420121](https://doi.org/10.1073/pnas.2322420121)
[^3]: Sainz, O. et al. (2023). "NLP Evaluation in trouble: On the Need to Measure LLM Data Contamination for each Benchmark." *EMNLP 2023 Findings*. [arxiv.org/abs/2310.18018](https://arxiv.org/abs/2310.18018). Deng, C. et al. (2024). "Investigating Data Contamination in Modern Benchmarks for Large Language Models." *NAACL 2024*. [arxiv.org/abs/2311.09783](https://arxiv.org/abs/2311.09783)
[^4]: Bubeck, S. et al. (2023). "Sparks of Artificial General Intelligence: Early experiments with GPT-4." [arxiv.org/abs/2303.12712](https://arxiv.org/abs/2303.12712). Wei, J. et al. (2022). "Emergent Abilities of Large Language Models." *TMLR*. [arxiv.org/abs/2206.07682](https://arxiv.org/abs/2206.07682). For a balanced review: Mitchell, M., Krakauer, D. C. (2023). "The debate over understanding in AI's large language models." *PNAS*, 120(13). [doi:10.1073/pnas.2215907120](https://doi.org/10.1073/pnas.2215907120)
[^5]: Li, K. et al. (2023). "Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task." *ICLR 2023*. [arxiv.org/abs/2210.13382](https://arxiv.org/abs/2210.13382). Gurnee, W., Tegmark, M. (2024). "Language Models Represent Space and Time." *ICLR 2024*. [arxiv.org/abs/2310.02207](https://arxiv.org/abs/2310.02207). Marks, S., Tegmark, M. (2024). "The Geometry of Truth." *COLM 2024*. [arxiv.org/abs/2310.06824](https://arxiv.org/abs/2310.06824)
[^6]: Olsson, C. et al. (2022). "In-context Learning and Induction Heads." *Transformer Circuits Thread*. [transformer-circuits.pub](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html). Wang, K. et al. (2023). "Interpretability in the Wild: a Circuit for Indirect Object Identification in GPT-2 small." *ICLR 2023*. [arxiv.org/abs/2211.00593](https://arxiv.org/abs/2211.00593)
[^7]: Bricken, T. et al. (2023). "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning." *Transformer Circuits Thread*. [transformer-circuits.pub](https://transformer-circuits.pub/2023/monosemantic-features/index.html). Templeton, A. et al. (2024). "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet." [transformer-circuits.pub](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)
[^8]: Lindsey, J. et al. (2025). "On the Biology of a Large Language Model." *Transformer Circuits Thread*. [transformer-circuits.pub](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
[^9]: Hendrycks, D. et al. (2021). "Measuring Massive Multitask Language Understanding." *ICLR 2021*. [arxiv.org/abs/2009.03300](https://arxiv.org/abs/2009.03300). Jimenez, C. E. et al. (2024). "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" *ICLR 2024* (4.8 percent for the best model on the full set with oracle retrieval in October 2023). [arxiv.org/abs/2310.06770](https://arxiv.org/abs/2310.06770). The later figures are on SWE-bench Verified, a 500-problem human-checked subset released by OpenAI in August 2024. Stanford HAI (2026). *The 2026 AI Index Report*, technical performance chapter. [hai.stanford.edu](https://hai.stanford.edu/ai-index/2026-ai-index-report)
[^10]: Glazer, E. et al. (2024). "FrontierMath: A Benchmark for Evaluating Advanced Mathematical Reasoning in AI." [arxiv.org/abs/2411.04872](https://arxiv.org/abs/2411.04872). Epoch AI. *FrontierMath*. [epoch.ai/frontiermath](https://epoch.ai/frontiermath)
[^11]: Carlini, N. et al. (2021). "Extracting Training Data from Large Language Models." *USENIX Security 2021*. [arxiv.org/abs/2012.07805](https://arxiv.org/abs/2012.07805). Carlini, N. et al. (2023). "Quantifying Memorization Across Neural Language Models." *ICLR 2023*. [arxiv.org/abs/2202.07646](https://arxiv.org/abs/2202.07646). Nasr, M. et al. (2023). "Scalable Extraction of Training Data from (Production) Language Models." [arxiv.org/abs/2311.17035](https://arxiv.org/abs/2311.17035)
[^12]: Merrill, W., Sabharwal, A. (2023). "The Parallelism Tradeoff: Limitations of Log-Precision Transformers." *Transactions of the ACL*, 11, 531–545. [doi:10.1162/tacl_a_00562](https://doi.org/10.1162/tacl_a_00562). Feng, G. et al. (2023). "Towards Revealing the Mystery behind Chain of Thought: A Theoretical Perspective." *NeurIPS 36*. [arxiv.org/abs/2305.15408](https://arxiv.org/abs/2305.15408)
