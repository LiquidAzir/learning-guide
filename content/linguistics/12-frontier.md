---
title: Translation, Language Models, and the Research Frontier
subtitle: Test what a system does without letting fluent output answer every question for it.
part: IV · Language Across Time and Media
---

## A perfect sentence can carry the wrong message

Imagine a translation system turns “The replacement part may arrive Friday” into a fluent sentence promising Friday delivery. Grammar and style can be excellent while a small change in uncertainty alters the commitment.

Language technology makes the distinctions from this guide operational. Sound recognition, word segmentation, sentence structure, reference, implied meaning, and interaction all create different failure modes. “It works well” becomes useful only after specifying a task, a population, and an outcome.

## Prediction is a powerful training objective

A language model assigns probabilities to sequences of **tokens**, the units used by its tokenizer. Tokens can be whole words, word fragments, characters, or other units. They are not automatically the morphemes or phonemes recognized in a linguistic analysis.

Training to predict the next token can reward learning grammatical and semantic regularities because those regularities help prediction. It does not supply a separate guarantee that a statement is true or a user instruction is satisfied. Systems can add retrieval, tools, and other training objectives; each addition needs evaluation of its own.

**Surprisal** measures how unexpected an event is under a model. For a token with conditional probability $p$, its surprisal in bits is $-\log_2 p$. An event assigned probability 1/2 has 1 bit of surprisal; one assigned 1/8 has 3 bits. The number describes that model's expectation. It is not the token's intrinsic difficulty for every human reader.

Researchers can test whether model-derived quantities predict reading behavior or brain signals. Even a useful prediction does not establish that the brain uses the same architecture, training data, or algorithm. A model is a scientific instrument only when its assumptions and comparison baselines are visible.

## Translation must preserve consequential distinctions

A good translation retains who did what, negation, quantities, time, uncertainty, and the intended relationship with the audience. Some choices require context the source sentence omits. A system should expose or resolve that uncertainty instead of silently inventing a detail.

Automatic metrics can compare output with reference translations or predict human judgments. A reference is one acceptable solution, not the only possible sentence. Conversely, resemblance to a reference can conceal a dangerous change to a number or a negation. Inspect errors by type and have relevant speakers assess meaning and usability.

For **low-resource languages**, limited digital data, tools, and evaluation coverage constrain what developers can demonstrate. The label describes technological resources, not a language's complexity or its speakers' capabilities. A 2025 study across 20 underrepresented languages found that adaptation results depended on language and script coverage as well as the method used.[^1]

:::deeper One score can conceal two very different systems

### Keep consequential errors visible

In an invented evaluation of 100 translations, system A has 90 fully correct outputs and 10 with an incorrect quantity or negation. System B has 90 fully correct outputs and 10 with a minor awkward phrase but preserved meaning. Under a crude “perfect or imperfect” measure, both score 90%.

That equality is real for the chosen metric and inadequate for many uses. A better report separates accuracy of key facts, meaning-changing errors, readability, and whether a speaker can complete the task. Report the denominators for each language and setting; an overall average can conceal a poorly served group.

Keep evaluation material independent of development where possible. If a team repeatedly tunes against the same examples, the final score measures adaptation to those examples as well as general capability. Fresh tests, documented model versions, and human review of sampled errors make a result more interpretable.

For your own checks, preserve the original sentence alongside the output. Mark names, numbers, negations, conditions, and uncertainty before judging how polished it sounds.
:::

## Questions that remain open

How much linguistic structure follows from pressures on memory and communication, and how much requires additional learning biases? Recent simulations link one information constraint with word-like and phrase-like organization, then compare real corpora with baselines. Such a model is an explanatory proposal with assumptions, including limits on its treatment of ambiguity.[^2]

How do humans connect language to perception, action, and shared experience? How do models generalize across languages with different structures and amounts of training data? Which experimental successes survive natural conversation? These questions become tractable when a study specifies the comparison that could make its preferred account fail.

The [AI guide](#/ai) explains model construction in greater depth. Linguistics supplies complementary tools for asking what the outputs preserve, how humans interpret them, and what the test actually establishes.

:::try Put the idea to work
A model matches human answers on a grammar test built from familiar sentence templates. What additional test would better assess generalization?

:::answer Show the reasoning
Use new vocabulary and systematically changed structures, including cases where a superficial cue predicts the wrong answer. Keep those examples separate from development and check performance by construction. Success would strengthen a claim about the tested generalization, not establish every aspect of human language understanding.
:::
:::

## Summary

Fluency, predictive accuracy, faithful translation, and successful interaction are different achievements. Use linguistic distinctions to design tests, inspect consequential errors, and identify the limits of a research claim.

[^1]: Li, Y., Zhao, Z. & Scarton, C. (2025). It's All About In-Context Learning! Teaching Extremely Low-Resource Languages to LLMs. EMNLP. [Paper, methods, and limitations](https://aclanthology.org/2025.emnlp-main.1502/).
[^2]: Futrell, R. & Hahn, M. (2025, first online). Linguistic structure from a bottleneck on sequential information processing. Nature Human Behaviour. [Primary study](https://www.nature.com/articles/s41562-025-02336-w).
