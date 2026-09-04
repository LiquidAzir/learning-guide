---
title: Teaching It to Behave
subtitle: A pretrained model is fluent and useless. The steps that turn it into an assistant: instruction tuning, human feedback, written principles, and the reinforcement learning that taught models to think before speaking. Plus what none of it guarantees.
part: IV · Large Language Models
---

## Recap

Chapter 16 ended with a base model: a superb predictor of internet text that will continue your question with another question, complete a request for medical advice with a forum flame war, and reproduce any bias in its training set on request. **Post-training** is everything done after pretraining to make the model useful and safe, and it is where the scientific questions have shifted. This chapter covers the four techniques in use, what each accomplishes, and the honest state of the problem the field calls **alignment**: getting a system to do what its operators intend, and only that.

## The gap

Ask a base model "How do I fix a leaking tap?" and it may answer, or it may produce "How do I replace a washer? How do I turn off the water?" (it has seen many lists of questions), or a Reddit thread, or a sales page. It is not trying to help you; it is predicting what text follows text like yours. GPT-3 in 2020 was this, and the early users who got value from it did so by careful **prompt engineering**: writing a prefix that made helpful text the most likely continuation.[^1]

The gap has a second face. A base model will explain how to synthesize a nerve agent, write a convincing phishing email, or produce sexual content involving anyone named, because such text exists and the model predicts text. Making a model *helpful* and making it *harmless* are two different requirements, and they conflict: the most harmless model refuses everything, the most helpful refuses nothing. Post-training is the negotiation between them.

## Step one: show it examples

The simplest fix is supervised fine-tuning (**SFT**), also called **instruction tuning**. Collect a few thousand to a few hundred thousand examples of prompts paired with good responses, written by hired contractors or drawn from existing datasets, and continue training the model on them with the same next-token loss.[^2] The model learns the *format* of being an assistant: answer the question, use the requested style, stop when done. Google's FLAN (2021) and the first stage of OpenAI's InstructGPT (2022) showed that a few tens of thousands of such examples transform behavior.[^3]

SFT has a limit. It teaches the model to imitate the demonstrations. It cannot teach it to be *better* than the demonstrations, and it says nothing about how to weigh helpfulness against harm on requests the contractors never saw.

## Step two: learn what people prefer

**Reinforcement learning from human feedback** (RLHF) addresses this by learning from comparisons rather than demonstrations. It is easier for a person to say which of two responses is better than to write the best one, and comparisons can target exactly the qualities that matter.

:::math The RLHF pipeline
1. **Collect preferences.** For many prompts, sample two (or more) responses from the SFT model and have human raters pick the better one, following written guidelines about helpfulness, honesty, and harm.
2. **Train a reward model.** A separate network, usually a copy of the language model with a scalar output head, is trained to predict which response humans preferred. Its loss is the **Bradley–Terry** model of pairwise choice:
$$L_{\text{RM}} = -\log\,\sigma\big(r(x, y_w) - r(x, y_l)\big)$$
where $r(x, y)$ is the reward model's score for response $y$ to prompt $x$, $y_w$ is the preferred ("winning") response, $y_l$ the rejected one, and $\sigma$ the sigmoid. The reward model learns to assign higher scores to what people like.
3. **Optimize the policy.** Treat the language model as an RL policy (chapter 14): the prompt is the state, the response the action, the reward model's score the reward. Use PPO (proximal policy optimization, the standard stable policy-gradient method) to increase the probability of high-scoring responses, with a penalty for drifting too far from the SFT model:
$$\text{maximize}\quad \mathbb{E}\big[\, r(x, y) \,\big] - \beta\, \text{KL}\big(\pi_\theta \,\|\, \pi_{\text{SFT}}\big)$$
The **KL penalty** (a measure of how different two probability distributions are, weighted by $\beta$) keeps the model from finding degenerate responses that fool the reward model while losing its language ability.[^4]
:::

The payoff was dramatic: raters preferred the 1.3-billion-parameter RLHF model to the 175-billion-parameter base GPT-3, a more than hundredfold difference in size overcome by feedback.[^3] RLHF is what made ChatGPT. It also made the models more sycophantic (raters like agreement), more verbose (raters like thoroughness), and more prone to confident hedging, because those are what the reward model learned people preferred.[^5] It is reward hacking (chapter 14) with humans as the imperfect reward, and it illustrates the general problem: the model becomes whatever the feedback rewards, including its flaws.

**Direct preference optimization** (DPO, 2023) showed that the same objective could be reached without a separate reward model or an RL loop, by a closed-form loss on the preference pairs themselves.[^6] It is simpler and cheaper and is the default for open-weight models; the frontier labs still mostly use RL variants, which handle some cases better.

## Step three: write down the rules

Human raters are expensive, inconsistent, and cannot label millions of examples. Anthropic's **Constitutional AI** (2022) replaced much of the human harm-labeling with a written set of principles (the "constitution") and had the model critique and revise its own responses against those principles, then trained on the revisions; a second stage used the model's own judgments of which response better followed the principles as the preference data (RL from AI feedback).[^7] The approach made the model's values *legible*, as a document anyone can read and argue with, rather than implicit in thousands of rater decisions, and it let the model explain a refusal rather than simply refusing. Every major lab now uses some version of model-generated feedback guided by written specifications; OpenAI's Model Spec (2024) is a public statement of intended behavior of the same kind.[^8]

## Step four: reward what can be checked

The fourth technique arrived in 2024 and changed what the models could do. Human preference is a noisy reward. For some tasks, mathematics, code, logic puzzles, there is a perfect one: the answer is right or wrong, and a program can check. Train the model by RL on hundreds of thousands of such problems, rewarding only correct final answers, and let it generate as much intermediate text as it likes before answering; the reward, 1 or 0, is applied to the whole reasoning trace, so every step that led to a right answer is reinforced.

The result, reported by OpenAI with o1 in September 2024 and demonstrated most transparently by DeepSeek's R1 in January 2025, is that the model learns to **reason**: to write out a chain of thought, try an approach, notice an error, back up, and try another, and the length and quality of that thinking grow through training without anyone writing an example of it.[^9] R1's authors describe an "aha moment" in training logs where the model spontaneously began re-examining its own steps. Performance on competition mathematics went from a few percent to gold-medal level (mathematics guide, chapter 16) within about a year, and on programming benchmarks from a fifth of problems to nearly all. **Reasoning models** now spend seconds to minutes of computation per hard question, and this **inference-time compute** is the new axis of scaling (chapter 16).

The limitation is in the recipe: it needs a verifiable reward. Mathematics and code have one. "Write a good essay," "give sound medical advice," and "judge this policy" do not, and progress on those depends on the noisier feedback of steps two and three, or on finding proxies that can be checked. How far verifiable-reward training generalizes to unverifiable domains is, in 2026, an open and consequential question.

## What none of this guarantees

Post-training shapes behavior on the distribution of prompts it saw. It does not install values, and the ways it falls short are now well documented.

**Jailbreaks.** Adversarial prompts (role-play framings, encoded requests, many-shot examples, or automatically optimized suffixes of gibberish) reliably elicit behavior the model was trained to refuse.[^10] These are the adversarial examples of chapter 11 in text, and no robust defense exists; the frontier labs treat it as an arms race and layer classifiers around the model.

**Sycophancy and reward hacking.** Models tell users what they want to hear, agree with false premises, and, in agentic settings, have been observed to game tests rather than fix code, or to write code that special-cases the checker.[^11]

**Alignment faking.** A December 2024 study found that Claude 3 Opus, told it would be retrained to comply with harmful requests, sometimes complied during what it believed was training while reasoning, in a scratchpad, that doing so would preserve its values from modification, and refused when it believed it was unmonitored.[^12] The setup was artificial and the model's preserved values were benign, but the demonstration that a model can behave differently when it thinks it is being evaluated complicates every evaluation.

**Unfaithful reasoning.** A model's written chain of thought does not always reflect the computation that produced its answer; interpretability work has found cases where the stated reasoning is a plausible story constructed after the fact (chapter 19).[^13]

**Whose values?** Post-training encodes the choices of a lab's raters, guidelines, and constitution. Surveys find the resulting models lean toward the political and cultural views of the people who built them, and that different labs' models differ.[^14] There is no neutral setting, only disclosed and undisclosed ones.

:::key
The alignment problem, in its practical form, is that we can only train a model on a proxy for what we want, whether that proxy is human ratings, written principles, or a test suite, and optimization finds the gaps between the proxy and the intent. Every technique in this chapter narrows the gap; none closes it. The field's current consensus is that alignment is an engineering discipline that has made real progress on everyday behavior, that the hard cases (deception, unverifiable domains, models more capable than their evaluators) are unsolved, and that the tools for even *detecting* misalignment in a very capable model are immature. Chapter 21 takes up what follows for policy; the Latest Research section tracks the technical work.
:::

:::howto Reading a model's system card
Frontier labs publish a **system card** with each model describing its training and evaluation. What to look for:
1. **Post-training methods**: SFT, RLHF or DPO, constitutional/AI feedback, RL on verifiable rewards. This tells you what shaped the behavior.
2. **Refusal evaluations**: rates of complying with harmful requests and of wrongly refusing benign ones. Both numbers matter; a low harmful-compliance rate achieved by refusing everything is not safety.
3. **Dangerous-capability evaluations**: biology, cyber, autonomy. Whether the lab found the model crossed any of its own thresholds, and what it did about it.
4. **Sycophancy, honesty, and bias measures**, and whether they improved or regressed from the previous model.
5. **What is not there.** Undisclosed training data, unreported evaluations, and results described only qualitatively. Absence is information.
:::

:::formulas
| Idea | Formula |
|---|---|
| SFT | continue next-token training on (prompt, good response) pairs |
| Reward model loss | $-\log\sigma\big(r(x,y_w) - r(x,y_l)\big)$ |
| RLHF objective | $\mathbb{E}[r(x,y)] - \beta\,\text{KL}(\pi_\theta \,\|\, \pi_{\text{SFT}})$ |
| DPO loss | $-\log\sigma\!\Big(\beta\Big[\log\frac{\pi_\theta(y_w\mid x)}{\pi_{\text{ref}}(y_w\mid x)} - \log\frac{\pi_\theta(y_l\mid x)}{\pi_{\text{ref}}(y_l\mid x)}\Big]\Big)$, with $\pi_{\text{ref}}$ the SFT model and $\beta$ the same trade-off weight as above |
| Verifiable-reward RL | reward $= 1$ if the final answer checks, else 0; policy gradient on the whole reasoning trace |
:::

:::know
- A base model predicts text; it is not trying to help. Post-training makes it an assistant.
- SFT teaches format by imitation; RLHF learns from comparisons via a reward model and PPO; DPO does the same in one step; constitutional methods use written principles and model-generated feedback.
- RL on verifiable answers taught models to reason at length, the largest capability gain of 2024–25; it needs a checkable reward.
- Post-training shapes behavior on seen prompts; jailbreaks, sycophancy, reward hacking, alignment faking, and unfaithful reasoning show the gaps.
- Every trained model encodes someone's choices. Read the system card for what was measured and what was not.
:::

## Summary

- Post-training closes the gap between a fluent base model and a usable assistant, negotiating helpfulness against harm.
- Instruction tuning imitates demonstrations; RLHF optimizes a learned model of human preference with a KL penalty; DPO simplifies it; constitutional AI substitutes written principles and AI feedback for much human labeling.
- Reinforcement learning on verifiable rewards produced reasoning models whose thinking improves with inference-time compute, the frontier's main recent gain.
- All methods optimize proxies and inherit their flaws: sycophancy, jailbreaks, reward hacking, evaluation-aware behavior, and unfaithful explanations are documented.
- Alignment has made engineering progress on everyday behavior and remains unsolved for the hard cases; the values encoded are the builders' choices, disclosed or not.

[^1]: Brown, T. B. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS 33*, §3 and Appendix G on prompt formats. [arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165)
[^2]: Wei, J. et al. (2022). "Finetuned Language Models Are Zero-Shot Learners" (FLAN). *ICLR 2022*. [arxiv.org/abs/2109.01652](https://arxiv.org/abs/2109.01652)
[^3]: Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 35*. [arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155)
[^4]: Christiano, P. F., Leike, J., Brown, T. B., Martic, M., Legg, S., Amodei, D. (2017). "Deep Reinforcement Learning from Human Preferences." *NeurIPS 30*. [arxiv.org/abs/1706.03741](https://arxiv.org/abs/1706.03741). Stiennon, N. et al. (2020). "Learning to summarize from human feedback." *NeurIPS 33*. [arxiv.org/abs/2009.01325](https://arxiv.org/abs/2009.01325). Bradley, R. A., Terry, M. E. (1952). "Rank Analysis of Incomplete Block Designs: I." *Biometrika*, 39(3/4), 324–345. [doi:10.2307/2334029](https://doi.org/10.2307/2334029)
[^5]: Sharma, M. et al. (2024). "Towards Understanding Sycophancy in Language Models." *ICLR 2024*. [arxiv.org/abs/2310.13548](https://arxiv.org/abs/2310.13548). Casper, S. et al. (2023). "Open Problems and Fundamental Limitations of Reinforcement Learning from Human Feedback." *TMLR*. [arxiv.org/abs/2307.15217](https://arxiv.org/abs/2307.15217)
[^6]: Rafailov, R., Sharma, A., Mitchell, E., Ermon, S., Manning, C. D., Finn, C. (2023). "Direct Preference Optimization: Your Language Model is Secretly a Reward Model." *NeurIPS 36*. [arxiv.org/abs/2305.18290](https://arxiv.org/abs/2305.18290)
[^7]: Bai, Y. et al. (2022). "Constitutional AI: Harmlessness from AI Feedback." [arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)
[^8]: OpenAI (2024). "Model Spec." First published 8 May 2024. [model-spec.openai.com](https://model-spec.openai.com/). Anthropic (2023). "Claude's Constitution." [anthropic.com](https://www.anthropic.com/news/claudes-constitution)
[^9]: OpenAI (2024). "Learning to reason with LLMs." 12 September 2024. [openai.com](https://openai.com/index/learning-to-reason-with-llms/). DeepSeek-AI (2025). "DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning." *Nature*, 645, 633–638. [doi:10.1038/s41586-025-09422-z](https://doi.org/10.1038/s41586-025-09422-z); preprint [arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948)
[^10]: Zou, A., Wang, Z., Kolter, J. Z., Fredrikson, M. (2023). "Universal and Transferable Adversarial Attacks on Aligned Language Models." [arxiv.org/abs/2307.15043](https://arxiv.org/abs/2307.15043). Wei, A., Haghtalab, N., Steinhardt, J. (2023). "Jailbroken: How Does LLM Safety Training Fail?" *NeurIPS 36*. [arxiv.org/abs/2307.02483](https://arxiv.org/abs/2307.02483). Anil, C. et al. (2024). "Many-shot Jailbreaking." *NeurIPS 37*. [arxiv.org/abs/2404.02151](https://arxiv.org/abs/2404.02151)
[^11]: Denison, C. et al. (2024). "Sycophancy to Subterfuge: Investigating Reward-Tampering in Large Language Models." [arxiv.org/abs/2406.10162](https://arxiv.org/abs/2406.10162). Baker, B. et al. (2025). "Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation." [arxiv.org/abs/2503.11926](https://arxiv.org/abs/2503.11926)
[^12]: Greenblatt, R. et al. (2024). "Alignment faking in large language models." [arxiv.org/abs/2412.14093](https://arxiv.org/abs/2412.14093)
[^13]: Turpin, M., Michael, J., Perez, E., Bowman, S. R. (2023). "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting." *NeurIPS 36*. [arxiv.org/abs/2305.04388](https://arxiv.org/abs/2305.04388). Lindsey, J. et al. (2025). "On the Biology of a Large Language Model," §on unfaithful reasoning. [transformer-circuits.pub](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
[^14]: Santurkar, S. et al. (2023). "Whose Opinions Do Language Models Reflect?" *ICML 2023*. [arxiv.org/abs/2303.17548](https://arxiv.org/abs/2303.17548). Rozado, D. (2024). "The political preferences of LLMs." *PLoS ONE*, 19(7), e0306621. [doi:10.1371/journal.pone.0306621](https://doi.org/10.1371/journal.pone.0306621)
