---
title: Start Here
subtitle: A program nobody wrote the rules for. What machine learning is, why it works, why it took sixty years, and how to read this guide.
part: I · Foundations
---

## A small miracle in 1959

By 1959 an IBM engineer named Arthur Samuel had a program that played checkers. That was not the interesting part. The interesting part was that the program was better at checkers than he was, and he had not told it how to play well. He had told it the rules, given it a way to score positions, and then made it play thousands of games against itself, adjusting the score after each one toward whatever had led to winning. The machine learned. Samuel gave the field its name in that paper's title, **machine learning**, and his idea is usually summarized as giving computers the ability to learn without being explicitly programmed.[^1]

Sixty-three years later, in November 2022, a program was released that could write a sonnet about tax law, explain a bug in your code, translate Finnish, and hold a conversation about itself. These abilities were not programmed as separate rules. Pretraining on large collections of text taught it to predict the next token; further training on demonstrations and human feedback helped turn those abilities into a conversational assistant. That combination, and its surprising limits, is the story of this guide.[^2]

This guide is the story of how the first thing became the second: how a machine that learns to score checkers positions became a machine that learns to write. The path runs through statistics, through a forty-year argument about whether brains are a good model for computers, through two periods when the whole field was declared dead, and through a handful of ideas that turned out to matter enormously. It is one of the great intellectual stories of the last century, and unlike most such stories, it is not finished.

## What "learning" means here

Almost every program you used before this century was written by a person who knew how to do the task. A spreadsheet adds because someone wrote down how to add. A machine learning program is different: the programmer does not know how to do the task and does not try to. Instead they write a program that *adjusts itself* based on examples, and then feed it examples until it does the task.

That sounds like magic and is actually a very specific kind of mathematics. Here is the whole of it in one paragraph, which the rest of the guide unpacks. You have **data**: examples of inputs paired with the answers you want (photographs and the word "cat," emails and "spam," house features and sale prices). You have a **model**: a mathematical function with adjustable knobs, called **parameters**, that turns inputs into guesses. You have a **loss**: a number measuring how wrong the guesses are. And you have an **optimizer**: a procedure that turns the knobs to make the loss smaller. Run the optimizer on the data, and the model gets better at guessing. Then, and this is the step where the miracle lives, you show it inputs it has never seen, and it gets those right too. That last property is called **generalization**, and it is the reason the field exists.[^3]

:::key
Machine learning is fitting a function to data and hoping it works on new data. The "hoping" is not a joke: it is the central scientific question, and the answer, worked out over fifty years, is that it works under specific conditions and fails in specific, predictable ways. Knowing which is which is what this guide teaches. A linear regression with two parameters and a language model with two trillion are doing the same thing. The difference is scale, and scale turned out to change what was possible.
:::

## Why it took so long

The ideas are old. Least-squares fitting is from 1805; the first artificial neuron was proposed in 1943; the perceptron, a learning machine that adjusted its own weights, was demonstrated in 1958 and reported in the *New York Times*.[^4] Yet the systems that changed the world arrived only after 2012. Three things had to come together.

**Data.** A model with a million knobs needs millions of examples to set them. Until the internet, nobody had a million labeled photographs. ImageNet, begun in 2009 and grown by 2011 to fourteen million images labeled by crowd workers, was the fuel for the 2012 breakthrough (chapter 11).[^5]

**Compute.** The mathematics of training is mostly multiplying large grids of numbers, exactly the operation graphics cards were built to do for video games. When researchers realized in the late 2000s that a gaming GPU could train a network fifty times faster than a processor, the cost of an experiment fell by that factor overnight. Since 2010 the compute used to train frontier systems has grown by a factor of roughly ten billion.[^6]

**Ideas.** A small number of technical fixes, each explained in chapter 10, made deep networks trainable at all: better ways to initialize the knobs, better activation functions, tricks to keep gradients from vanishing, and in 2017 an architecture called the transformer that let the whole thing scale without limit (chapter 15).

None of these alone would have done it. The history chapter tells how they arrived, and why two generations of researchers who had the right ideas were told they were wrong.

## What this guide covers

The subject is usually taught as several subjects. Here it is one arc, because it is one arc.

| Part | What it covers | Chapters |
|---|---|---|
| **Learning from data** | The statistical core: regression, classification, trees, clustering, and how to tell whether a model is any good | 3 to 8 |
| **Neural networks** | Neurons, training by gradient descent, vision, sequences, generating images, learning by reward | 9 to 14 |
| **Large language models** | The transformer, scaling, alignment, how to use them, what they know | 15 to 19 |
| **In the world** | How practitioners build systems; jobs, safety, law, and power | 20 to 21 |
| **The edge** | What is happening now, who did what, every term and formula | 22 to 24 |

Chapter 2 tells the history from 1943 to now. Read it first if you like stories; skip it if you want the tools and come back.

:::howto A useful first pass
For a practical foundation, follow chapters 3 through 8: data, simple models, and evaluation. Those ideas remain useful when the models become neural networks and language models.

At the end of a core chapter, try the question before opening “Show the reasoning” or “One way to reason it through.” Explain your answer in a sentence or work the calculation; then compare the reasoning, not just the result. Reading-time estimates exclude time spent practicing.
:::

## The conventions

This guide follows the mathematics guide in being **practical first**. Each chapter has:

- **How to do it** boxes: step-by-step procedures with worked examples, from setting up a prediction problem to reading a loss curve to writing a prompt that works.
- **Key formulas** and **things to know** boxes for reference.
- **The math, explained**: the real equations, with every symbol named. There are fewer than you fear. Machine learning rests on about a dozen formulas, and this guide contains all of them.
- **Common confusion** boxes for the errors everyone makes, and **where it stands today** boxes for the arguments still running.

Key factual and historical claims point to a numbered source at the bottom of the chapter, with a link where the source is free to read, which in this field is nearly always, since the papers are on arXiv. A separate **Latest research** section, reachable from the subject's front page, tracks recent results with a plain-English summary and an honest status label: reported, preliminary, disputed, or retracted.

The mathematics used is the mathematics of that guide: functions and slopes (its chapters 6 and 7), a little probability and statistics (9 and 10), and vectors and matrices (11). Each is re-explained where it appears, so you need not have read them, but they help.

## Three warnings before you start

First, **the field moves fast and routinely fools itself**. Claims made in a press release in March are refuted by a paper in June and forgotten by September. This guide marks what is established, what is preliminary, and what is contested, and it errs toward the skeptical, because the record of confident predictions in AI, in both directions, is terrible.

Second, **"AI" is a marketing word**. It has meant symbolic logic (1960s), expert systems (1980s), support vector machines (2000s), deep learning (2010s), and now large language models. The techniques share almost nothing except the ambition. This guide uses the word sparingly and says which technique it means.

Third, **you already use this every day**. Your phone's camera, your email's spam filter, your bank's fraud alert, the route your map app chooses, the order of your feed, the price of your flight, and the autocomplete in your messages are all machine learning. Understanding it is understanding a large part of the world you live in, and one that is being decided, right now, by a small number of people. That is a good reason to know how it works.

:::try
Before going on, try to explain how your email program knows which messages are spam. Write down your guess. Then, after chapter 5, compare it with how the first spam filters actually worked, which was a 250-year-old formula applied to word counts, and how modern ones work, which is not so different.
:::

Let's begin with the story.

[^1]: Samuel, A. L. (1959). "Some Studies in Machine Learning Using the Game of Checkers." *IBM Journal of Research and Development*, 3(3), 210–229. [doi:10.1147/rd.33.0210](https://doi.org/10.1147/rd.33.0210). Samuel began the program in 1952; its celebrated win over a strong human player came in 1962. The "without being explicitly programmed" summary is a later paraphrase, not a sentence from the paper.
[^2]: OpenAI (2022). "Introducing ChatGPT." 30 November 2022. [openai.com](https://openai.com/index/chatgpt/). Brown, T. B. et al. (2020). "Language Models are Few-Shot Learners." *Advances in Neural Information Processing Systems*, 33. [arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165)
[^3]: Hastie, T., Tibshirani, R., Friedman, J. (2009). *The Elements of Statistical Learning*, 2nd ed. New York: Springer. Chapter 1. Free at [hastie.su.domains/ElemStatLearn](https://hastie.su.domains/ElemStatLearn/)
[^4]: McCulloch, W. S., Pitts, W. (1943). "A logical calculus of the ideas immanent in nervous activity." *Bulletin of Mathematical Biophysics*, 5, 115–133. [doi:10.1007/BF02478259](https://doi.org/10.1007/BF02478259). Rosenblatt, F. (1958). "The perceptron: A probabilistic model for information storage and organization in the brain." *Psychological Review*, 65(6), 386–408. [doi:10.1037/h0042519](https://doi.org/10.1037/h0042519). "New Navy Device Learns by Doing." *The New York Times*, 8 July 1958.
[^5]: Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., Fei-Fei, L. (2009). "ImageNet: A large-scale hierarchical image database." *IEEE CVPR 2009*, 248–255. [doi:10.1109/CVPR.2009.5206848](https://doi.org/10.1109/CVPR.2009.5206848)
[^6]: Sevilla, J., Heim, L., Ho, A., Besiroglu, T., Hobbhahn, M., Villalobos, P. (2022). "Compute Trends Across Three Eras of Machine Learning." *IJCNN 2022*. [arxiv.org/abs/2202.05924](https://arxiv.org/abs/2202.05924). Updated data: Epoch AI, *Notable AI Models*. [epoch.ai/data](https://epoch.ai/data/notable-ai-models). Raina, R., Madhavan, A., Ng, A. Y. (2009). "Large-scale deep unsupervised learning using graphics processors." *ICML 2009*. [doi:10.1145/1553374.1553486](https://doi.org/10.1145/1553374.1553486)
