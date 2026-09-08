---
title: Using Them Well
subtitle: Why language models make things up, how to reduce errors and check answers, and how context, retrieval, and tools change what they can do. Where these systems help, and where they can quietly hurt.
part: IV · Large Language Models
---

## How do you make a language model useful without trusting it blindly?

Chapters 15 to 17 explained what a language model is and how it was shaped. This is the practical chapter: how to get good work out of one, how to recognize when it is failing, and what the studies of real use have found. It is the chapter most people will use most, and it rests on one idea from chapter 15 that is worth repeating. The model is producing plausible continuations of its context. Everything about using it well follows from that.

## Why it makes things up

Ask a model for the five most cited papers on a topic and it will give you five, with authors, years, and journals, and two of them may not exist. This is **hallucination** (the field's word; **confabulation** is more accurate), and it is not a bug that will be patched. It is what the training objective produces. The model was trained to make text that looks like real text; a citation that has the form of a real citation scores well on that objective whether or not the paper exists. The model has no separate faculty for checking; it has a probability distribution over tokens, and "Smith et al., 2019" is a high-probability token sequence after "as shown by."[^1]

Post-training reduces the rate (models learn to say "I don't know," and reasoning models check themselves) but cannot eliminate it, because the model cannot distinguish knowledge it has from patterns it has absorbed. Hallucination is worst for specific, verifiable details that are rare in training data: exact numbers, quotations, citations, names of minor people, events after the training cutoff, and anything about you. It is least likely for widely repeated general knowledge. The practical rule: the model is a fluent generalist with an unreliable memory for specifics, and every specific it produces that matters should be checked.

## The context window

Everything the model knows about your task is in its **context window**: the prompt, the conversation so far, any documents you have pasted, and its own previous responses, up to a limit of tens of thousands to a million tokens depending on the model. Nothing else. The model does not remember previous conversations unless the application stores them and re-inserts them. It does not know what you did not tell it. It cannot see your screen, your files, or the internet unless the application gives it tools to (below). And its knowledge of the world ends at its **training cutoff**, typically six months to a year before release.[^2]

Two facts about the context matter for use. First, more relevant context produces better output, almost without exception: a request with the source document attached beats one without; a request with an example of the desired output beats one with a description. Second, models attend unevenly to long contexts, tending to weight the beginning and end and lose things in the middle, so the important material should be placed prominently and referred to explicitly.[^3]

:::howto Writing a prompt that works
The model is completing a document. Make the document one whose natural continuation is what you want.
1. **State the task, the audience, and the format.** "Summarize this contract's termination clauses for a non-lawyer, as a bulleted list, under 150 words." Every clause narrows the space of plausible continuations.
2. **Provide the material.** Paste the text, data, or code. Do not ask the model to recall a document it might have seen in training; it will reconstruct an approximation.
3. **Give an example** of the output you want when format matters. One good example beats a paragraph of description (this is the in-context learning of chapter 16).
4. **Ask it to think first** on anything requiring reasoning: "Work through the calculation step by step, then give the answer." For reasoning models this happens automatically; for others it still helps.
5. **Ask for uncertainty and sources.** "Say if you are not sure. Quote the passage you are relying on." Models hedge more honestly when asked to.
6. **Constrain what it must not do** only when needed, and positively where possible ("respond only with the JSON" works better than "don't add commentary").
7. **Iterate.** Read the output critically, point to what is wrong, and ask again. The second response, with the first in context, is usually much better.
8. **Verify specifics.** Every number, quote, citation, name, date, and legal or medical claim that you will rely on.

*Bad*: "Tell me about the risks of this investment." *Better*: "Here is the prospectus [pasted]. List the risk factors it discloses, in the document's own words with page references, then separately note any common risks for this asset class that it does not mention. Flag anything you are inferring rather than reading."
:::

## Retrieval: giving it the right documents

Putting relevant source material in the context can reduce unsupported claims about specifics, though it does not guarantee a faithful answer. **Retrieval-augmented generation** (RAG) automates this: the user's question is embedded (chapter 12), the most similar passages are retrieved from a document store, and they are inserted into the prompt with an instruction to answer from them and cite them.[^4] The model now grounds its answer in real text rather than reconstructed memory, its knowledge can be updated by updating the store rather than retraining, and its answers can be checked against the passages it cites.

RAG is how every enterprise chatbot answers questions about a company's own documents, how AI search engines work, and how models are kept current past their training cutoff. Its failure modes are retrieval failures (the right passage was not found, so the model answers from memory or says it cannot), the model ignoring the retrieved text in favor of its priors, and **prompt injection**: a retrieved document that contains instructions ("ignore your previous instructions and…") which the model may follow, because it cannot reliably distinguish content from commands in its context. Prompt injection is unsolved and is the main security problem for any system that feeds a model untrusted text.[^5]

## Tools and agents

A model that can only produce text is limited to what text can do. Give it **tools**, functions it can call by emitting a structured request that the application executes, and it can search the web, run code, query a database, send an email, or operate a browser. Chapter 14's agent loop applies: observe (the tool's result), act (the next call), repeat. A model doing this over many steps toward a goal is an **agent**.[^6]

Tool use fixes several weaknesses at once. Arithmetic and dates go to a calculator or code interpreter, where the model's tokenization problems (chapter 16) do not apply. Facts go to search or a database. Long tasks are broken into steps with intermediate results checked. By 2025, agents wrote and tested substantial software, conducted multi-hour research tasks, and operated computers through their graphical interfaces; METR's measurements found the length of task frontier models could complete with 50 percent reliability doubling roughly every seven months, from seconds in 2019 to about an hour in early 2025 and, on a revised task suite with wide error bars, to something like a working day by early 2026.[^7]

The weaknesses compound too. An agent that hallucinates a fact takes real actions on it. An agent exposed to prompt injection can be hijacked to act against its user. Errors accumulate over long tasks, so a 95 percent per-step success rate gives 60 percent over ten steps and 36 percent over twenty, which is why reliability, not raw capability, is the binding constraint on deployment. The practical advice for agents is the same as for a new employee with excellent skills and no judgment: give them tools, watch what they do, keep them away from anything irreversible, and check the work.

## What the studies show

The evidence on whether these systems help is now substantial, and it is more interesting than either enthusiasts or skeptics suggest.

**Where they help most.** In a study of 5,000 customer-support agents, an AI assistant raised productivity by 15 percent on average (14 percent in the earlier working-paper version), with about a third more output for the newest and least-skilled agents and almost nothing for the most experienced, who also lost slightly in quality.[^8] In a trial with 758 consultants, those using GPT-4 completed 12 percent more tasks, 25 percent faster, at higher rated quality, on tasks inside the model's competence.[^9] Writing and coding tasks show gains of 40 to 55 percent in speed in controlled studies, largest for the less skilled.[^13] The consistent pattern is **compression of the skill gap**: the tool raises the floor more than the ceiling.

**Where they hurt.** The same consultant study included a task designed to look easy but require judgment the model lacked; consultants with the AI were 19 percentage points *more* likely to get it wrong, because they trusted it.[^9] A 2025 randomized trial of experienced open-source developers found that those using AI coding tools took 19 percent *longer* to complete real tasks on their own large codebases, even as they believed they had been 20 percent faster; the time went to reviewing and fixing generated code that was subtly wrong for a codebase the developers knew better than the model did.[^10] A field experiment with a thousand high-school students found that unrestricted access to a chatbot during practice raised practice scores 48 percent and *lowered* exam scores 17 percent: the students had let it do the work and learned less. A version that gave hints instead of answers erased the harm.[^11]

**The jagged frontier.** Dell'Acqua and colleagues' phrase for the pattern: model competence is uneven in ways that are hard to see from outside. A system that writes a working web application may miscount the letters in a word; one that passes the bar exam may fail a puzzle a child solves. The skill of using these systems is largely the skill of learning where the frontier is for the task in front of you, and it cannot be read off from a benchmark score.[^9]

:::warning
The largest documented harm from using language models is not the dramatic failure but the quiet one: accepting output that is wrong in a way you would have caught if you had done the work, and, over time, losing the ability to catch it. The studies that find gains are studies of tasks where the output is checked; the studies that find harm are ones where it is trusted. Use the model for what it is good at, generating drafts, options, code to test, explanations to verify, and reserve for yourself the judgment about whether the result is right. Chapter 21 takes up what happens when whole organizations stop doing that.
:::

:::howto Evaluating a vendor's AI claim
Whether you are buying a product or reading a pitch, the same questions apply.
1. **Evaluated on what, against whom?** Ask for the test set's description, the base rate of the thing being detected, and the human baseline (experts or crowd workers?). A 95 percent figure with no base rate is noise.
2. **At what error costs?** Ask for false-positive and false-negative rates separately, at the threshold that will be deployed, and who bears each kind of error.
3. **Was the evaluation independent?** Vendor-run benchmarks are claims. Pilot on your own data before signing.
4. **What happens to my data?** Retention, training use, and who can see prompts and outputs.
5. **What is the failure plan?** How are hallucinations caught, who is liable, how is prompt injection handled if the system reads untrusted text, and is there a human in the loop for consequential decisions?
6. **What does it cost at volume?** Per-token pricing, context lengths, and reasoning-model overhead can multiply a pilot's cost by ten in production.
:::

## Choosing and paying

Models are sold by the token, in and out, with prices that fell more than a hundredfold from late 2022 to late 2024 for a fixed level of capability; reasoning models cost more because they generate many tokens of thinking per answer.[^12] Open-weight models (Llama, Mistral, Qwen, DeepSeek, Gemma) can be run on your own hardware, which matters for privacy, cost at volume, and customization, at the price of trailing the frontier by six to twelve months. **Fine-tuning** a model on your own examples (chapter 17's SFT, applied by you) is cheaper than it sounds and worth it when you need a consistent style or a specialized task; for most purposes, good prompting plus retrieval reaches the same result with less effort. Chapter 20 gives the engineering picture.

:::howto Deciding whether to trust an output
1. **Is it a specific, checkable fact?** Numbers, names, dates, quotes, citations, legal and medical claims: verify against a source. Assume a nontrivial error rate.
2. **Is it something you could judge if you tried?** Then judge it. Read the code; test it. Read the summary against the source.
3. **Is it outside your competence?** Then you cannot tell a confident right answer from a confident wrong one, and the model's fluency is not evidence. Get a human expert or a second, independent method.
4. **Did the model have the information?** If the answer depends on facts not in the context and not general knowledge, it is reconstructing. Give it the document.
5. **Did you want this answer?** Sycophancy means the model tends to agree with you. Ask it to argue the other side.
:::

:::formulas
| Idea | Formula |
|---|---|
| Multi-step reliability | $p^{n}$ for $n$ steps at per-step success $p$: $0.95^{10} = 0.60$, $0.95^{20} = 0.36$ |
| Context budget | tokens in prompt + retrieved passages + conversation + output ≤ context window |
| Tokens to words (English) | tokens $\approx 1.3 \times$ words, because common words are one token and rarer ones split (chapter 16) |
| RAG | answer $= \text{LLM}(\text{question} + \text{top-}k\text{ retrieved passages})$ |
:::

:::know
- Hallucination is the training objective working as designed; check every specific that matters.
- The model knows only what is in its context window and what it absorbed before its training cutoff. Give it the document.
- State task, audience, format; provide material and an example; ask for reasoning, uncertainty, and sources; iterate; verify.
- Retrieval grounds answers in real text and keeps them current; prompt injection is its unsolved security problem.
- Tools and agents extend reach; errors compound over steps, so reliability, not capability, limits deployment.
- The evidence: large gains for less-skilled workers on tasks within the model's competence; harm when output is trusted on tasks outside it, and to learning when it does the work for you.
:::

:::try Put the idea to work
A retrieval system finds a relevant document and the model cites it. What still needs checking before relying on the answer?

:::answer Show the reasoning
Check whether the document is authoritative and current for the question, whether the cited passage supports the specific claim, and whether other relevant passages were missed. Retrieval supplies evidence to use; it does not ensure that the model interprets or cites it faithfully.
:::
:::

## Summary

- Language models generate plausible continuations, which is why they confabulate specifics and why every checkable detail should be checked.
- Good use means filling the context window with the right material and instructions, asking for stepwise reasoning and uncertainty, and iterating.
- Retrieval-augmented generation grounds answers in documents and updates knowledge without retraining; tool use and agents extend models to actions, at the cost of compounding errors and prompt-injection risk.
- Controlled studies find large productivity gains, concentrated among the less experienced and on tasks within the model's jagged frontier, and real harms where output is trusted beyond it or substitutes for learning.
- The user's job is judgment: knowing where the frontier lies for the task at hand and keeping the checking for themselves.

[^1]: Ji, Z. et al. (2023). "Survey of Hallucination in Natural Language Generation." *ACM Computing Surveys*, 55(12), 248. [doi:10.1145/3571730](https://doi.org/10.1145/3571730). Kalai, A. T., Vempala, S. S. (2024). "Calibrated Language Models Must Hallucinate." *STOC 2024*. [arxiv.org/abs/2311.14648](https://arxiv.org/abs/2311.14648)
[^2]: Gemini Team (2024). "Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context." [arxiv.org/abs/2403.05530](https://arxiv.org/abs/2403.05530)
[^3]: Liu, N. F. et al. (2024). "Lost in the Middle: How Language Models Use Long Contexts." *Transactions of the ACL*, 12, 157–173. [doi:10.1162/tacl_a_00638](https://doi.org/10.1162/tacl_a_00638)
[^4]: Lewis, P. et al. (2020). "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." *NeurIPS 33*. [arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)
[^5]: Greshake, K. et al. (2023). "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection." *AISec '23*. [arxiv.org/abs/2302.12173](https://arxiv.org/abs/2302.12173). OWASP (2025). *Top 10 for LLM Applications 2025*, LLM01: Prompt Injection. [owasp.org](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
[^6]: Schick, T. et al. (2023). "Toolformer: Language Models Can Teach Themselves to Use Tools." *NeurIPS 36*. [arxiv.org/abs/2302.04761](https://arxiv.org/abs/2302.04761). Yao, S. et al. (2023). "ReAct: Synergizing Reasoning and Acting in Language Models." *ICLR 2023*. [arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)
[^7]: Kwa, T. et al. (2025). "Measuring AI Ability to Complete Long Tasks." METR. [arxiv.org/abs/2503.14499](https://arxiv.org/abs/2503.14499). METR (2026). "Time Horizon 1.1," 29 January 2026. [metr.org](https://metr.org/blog/2026-1-29-time-horizon-1-1/)
[^8]: Brynjolfsson, E., Li, D., Raymond, L. (2025). "Generative AI at Work." *Quarterly Journal of Economics*, 140(2), 889–942. [doi:10.1093/qje/qjae044](https://doi.org/10.1093/qje/qjae044)
[^9]: Dell'Acqua, F. et al. (2026). "Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality." *Organization Science*, 37(2). [doi:10.1287/orsc.2025.21838](https://doi.org/10.1287/orsc.2025.21838). Working paper version 2023, Harvard Business School 24-013.
[^10]: Becker, J., Rush, N., Barnes, E., Rein, D. (2025). "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." METR. [arxiv.org/abs/2507.09089](https://arxiv.org/abs/2507.09089)
[^11]: Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., Mariman, R. (2025). "Generative AI without guardrails can harm learning: Evidence from high school mathematics." *PNAS*, 122(26). [doi:10.1073/pnas.2422633122](https://doi.org/10.1073/pnas.2422633122)
[^12]: Epoch AI (2025). "LLM inference prices have fallen rapidly but unequally across tasks." [epoch.ai](https://epoch.ai/data-insights/llm-inference-price-trends). Stanford HAI (2025). *The 2025 AI Index Report*: the cost of GPT-3.5-level performance fell about 280-fold between November 2022 and October 2024. [hai.stanford.edu](https://hai.stanford.edu/ai-index/2025-ai-index-report)
[^13]: Noy, S., Zhang, W. (2023). "Experimental evidence on the productivity effects of generative artificial intelligence." *Science*, 381(6654), 187–192 (writing tasks 40 percent faster). [doi:10.1126/science.adh2586](https://doi.org/10.1126/science.adh2586). Peng, S., Kalliamvakou, E., Cihon, P., Demirer, M. (2023). "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot" (a coding task 55.8 percent faster). [arxiv.org/abs/2302.06590](https://arxiv.org/abs/2302.06590)
