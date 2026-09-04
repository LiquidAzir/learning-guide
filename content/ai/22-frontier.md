---
title: The Frontier
subtitle: What is happening now, in September 2026: agents, reasoning, science, robots, the compute race, and the questions nobody can answer yet. Written to be wrong in the details and right about how to think.
part: VI · The Edge
---

## Recap

The rest of this guide describes what is established. This chapter describes what is moving, which means it will age faster than any other. It is organized around six directions, for each the state in 2026, the open question, and what would count as evidence. The Latest Research section, reachable from the subject's front page, is where the specifics are kept current.

## Agents

The dominant direction of 2025 and 2026 is the move from models that answer to systems that **act**: chapter 18's agent loop, run for hours over hundreds of steps, writing and testing code, conducting research, operating a browser, coordinating other agents. METR's measurements found the length of task that frontier systems complete with 50 percent reliability doubling roughly every seven months, from a few seconds in 2019 to about an hour in early 2025 and, on a revised task suite with wide error bars, to something like a working day by early 2026.[^1] Software engineering is the leading application: agents resolve about 90 percent of the human-verified subset of the SWE-bench benchmark of real GitHub issues, a task on which the best model scored under 5 percent in late 2023, and Google reported in 2025 that around 30 percent of its new code was model-generated and human-reviewed.[^2]

**The open question** is reliability over long horizons. Errors compound; an agent that is 98 percent reliable per step fails a fifty-step task more often than it succeeds. The 50 percent success horizon is a measure of where things break, not of what can be delegated, and the gap between "impressive demo" and "left running unsupervised" is where the field is working. Watch for the 80 and 95 percent reliability horizons, not the 50, and for deployments in which no human checks the output.

## Reasoning and inference-time compute

Chapter 17 described the 2024 discovery that reinforcement learning on verifiable problems produces models that think before answering, and chapter 16 described this as a new axis of scaling. In 2025 and 2026 it delivered gold-medal performance at the International Mathematical Olympiad, the resolution of several dozen open problems from Erdős's list including the disproof of an eighty-year-old conjecture, and near-saturation of every programming benchmark (mathematics guide, chapter 16).[^3] The Erdős story carries its own warning: the first announcements, in late 2025, that AI had "solved" several of the problems turned out to be cases where the model had found existing solutions in old papers the problem list had missed, and it took mathematicians weeks to sort the genuine results from the retrievals.

**The open question** is whether it transfers. The recipe needs a verifiable reward. Mathematics and code have one. Writing, judgment, science, and strategy do not, and the evidence that reasoning trained on verifiable tasks improves performance on unverifiable ones is positive but modest. Whether labs find checkable proxies for open-ended quality, or whether reasoning models remain brilliant at puzzles and ordinary at essays, is the question that determines how much of knowledge work this reaches. A related question is whether chains of thought remain **legible**: models trained hard enough on outcomes have begun to reason in compressed, non-human forms, and if the thinking becomes unreadable, one of the few windows into what the model is doing closes.[^4]

## Multimodality and the world

Frontier models now take in and produce text, images, audio, and video in one system; a phone camera pointed at a broken appliance gets a spoken diagnosis. Video generation reached photorealism in 2024 and coherent multi-minute sequences in 2025 and 2026. **Robotics** has been the laggard: the "vision-language-action" recipe of 2023 (a language model that outputs motor commands) works in demonstrations and remains far from industrial reliability, because the physical world offers neither the free simulator nor the billion examples that text and games did.[^5] Self-driving, the oldest application, reached genuine deployment: driverless taxi services in several US cities, with crash rates that the operators' own data, and increasingly independent data, put well below human drivers' on the roads served.[^6]

**The open question** is whether models that learn from video and interaction acquire the physical common sense that text-trained models lack, and whether the data problem in robotics is solved by simulation, by fleets of robots learning together, or not at all in this decade.

## Science

The clearest wins of the last five years are in science. AlphaFold solved protein structure prediction and won a Nobel Prize; its successors predict how proteins bind to drugs and design new proteins from scratch.[^7] Learned weather models beat the best physics-based forecasts, and learned ensembles now give better probabilistic forecasts of extreme weather than the operational systems that took fifty years to build.[^8] Language models search the literature, propose hypotheses, and write analysis code, and the first papers with a model as a substantive contributor have appeared, alongside the first retractions of model-generated nonsense.

**The open question** is whether these systems can do what the mathematics results hint at: not just accelerate the parts of science that are search and computation, but produce the idea that a human would not have had. The materials-discovery episode is the cautionary case: a 2023 paper announcing two million new stable crystals was found, on inspection by chemists, to contain almost nothing simultaneously novel, credible, and useful.[^9] Speed at generating candidates is not discovery; the bottleneck moved to verification, where it is likely to stay.

## The compute race

Training compute for frontier models has grown about fivefold a year since 2020; the largest data centers under construction in 2026 are planned at gigawatt scale, drawing as much power as a city; a single training run is estimated in the hundreds of millions to billions of dollars.[^10] The chips come overwhelmingly from one designer and one foundry, export controls have made them an instrument of geopolitics, and the January 2025 release of DeepSeek's models, matching Western frontier performance at a reported fraction of the cost, showed that algorithmic efficiency (which Epoch AI estimates improves about threefold a year) can substitute for some of the compute.[^11]

**The open questions** are whether the power-law returns to scale continue (the evidence says yes where tested, but pretraining data is running out and the gains have shifted to inference-time compute), whether the economics close (revenue from AI services was rising fast in 2026 but well below the capital being deployed), and what the concentration of this much capability in this few hands means, which is chapter 21's subject.

## Understanding and control

Interpretability (chapter 19) moved from single neurons to million-feature dictionaries and attribution graphs in five years, and can now trace specific behaviors in production models. Alignment (chapter 17) has made everyday assistants reliably helpful and mostly harmless. And the same period produced the first empirical demonstrations of the failure modes long theorized: reward hacking in agents, alignment faking under evaluation, unfaithful reasoning, and models that behave differently when they infer they are being tested.[^12]

**The open question** is the central one. Can a system be verified to be doing what its operators intend, when it is more capable than they are at the task, when its reasoning may not be legible, and when it may know it is being evaluated? The tools do not yet exist at frontier scale. The 2026 International AI Safety Report's summary was that capabilities are advancing faster than the science of assessing them, and that is the consensus of people who disagree about everything else.[^13]

## What to watch

:::know
Signals that would mean the picture has changed, in either direction:
- **Agents**: an unsupervised deployment completing multi-day tasks at 95 percent reliability; or a plateau in the task-horizon doubling.
- **Reasoning**: a verifiable-reward recipe for an unverifiable domain (writing, science), or clear evidence that transfer is small.
- **Science**: a result the field agrees a human would not have found, independently verified; or another materials-style retraction.
- **Scaling**: a frontier lab publishing that returns to pretraining compute have flattened; or a new axis with its own power law.
- **Safety**: an interpretability audit that catches deceptive behavior in a frontier model before deployment; or a deployed system causing harm that its evaluations missed.
- **Economics**: AI revenue covering AI capital spending; or the first large write-downs.
- **Governance**: a binding international agreement on frontier evaluations; or a serious incident with no governance response.
:::

## How to read the news about this

1. **Demos are not deployments.** Every capability arrives first as a video; the question is whether it works unsupervised, at scale, on the messy version of the task.
2. **Benchmarks saturate and leak** (chapter 19). A new record on a two-year-old benchmark means little.
3. **Company claims are claims.** Training costs, capability thresholds, and safety evaluations reported by the lab that built the model should be read as press releases until reproduced.
4. **Predictions have a record.** People confidently predicting either imminent transformation or imminent collapse have been wrong repeatedly since 1956. Weight the forecaster's track record, and prefer people who say what would change their mind.
5. **The interesting question is rarely "can it."** It is "how reliably, at what cost, compared with the alternative, and who bears the errors."

:::frontier
This guide was finished in September 2026. If you are reading it much later, assume the specific numbers are stale and the questions are probably still open in some form. The record of this field is that its capabilities have consistently outrun forecasts in some directions (language, mathematics, coding) and lagged them in others (robotics, driving, general reliability), that its false starts have been as instructive as its successes, and that the people who understood it best were the ones who looked at what the systems actually did rather than at what anyone said about them. That habit is the only part of this chapter that will not age.
:::

## Summary

- Agents completing hours-long tasks are the leading development; reliability over long horizons, not raw capability, limits deployment.
- Reinforcement learning on verifiable rewards produced reasoning models that reached the top of mathematics and programming; whether it transfers to domains without a checkable answer is the decisive open question.
- Multimodal models are mature; robotics lags for want of data; self-driving reached real deployment.
- AI has transformed structural biology and weather forecasting; its ability to originate rather than accelerate discovery is unproven, and verification is the bottleneck.
- Compute, capital, and capability are concentrating; efficiency gains partly offset scale; the economics are unresolved.
- Interpretability and alignment have advanced and remain behind capability; no tool yet verifies a frontier model's intent.

[^1]: Kwa, T. et al. (2025). "Measuring AI Ability to Complete Long Tasks." METR. [arxiv.org/abs/2503.14499](https://arxiv.org/abs/2503.14499). METR (2026). "Time Horizon 1.1," 29 January 2026. [metr.org](https://metr.org/blog/2026-1-29-time-horizon-1-1/)
[^2]: Jimenez, C. E. et al. (2024). "SWE-bench." *ICLR 2024*. [arxiv.org/abs/2310.06770](https://arxiv.org/abs/2310.06770). Stanford HAI (2026). *The 2026 AI Index Report*, technical performance chapter (SWE-bench Verified). [hai.stanford.edu](https://hai.stanford.edu/ai-index/2026-ai-index-report). Alphabet Inc., Q3 2025 earnings call, on the share of new code generated by AI. [abc.xyz/investor](https://abc.xyz/investor/)
[^3]: Google DeepMind (2025). "Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad." [deepmind.google](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/). OpenAI (2026). "An OpenAI model has disproved a central conjecture in discrete geometry." 20 May 2026. [openai.com](https://openai.com/index/model-disproves-discrete-geometry-conjecture/)
[^4]: Baker, B. et al. (2025). "Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation." [arxiv.org/abs/2503.11926](https://arxiv.org/abs/2503.11926). Korbak, T. et al. (2025). "Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety." [arxiv.org/abs/2507.11473](https://arxiv.org/abs/2507.11473)
[^5]: Brohan, A. et al. (2023). "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control." *CoRL 2023*. [arxiv.org/abs/2307.15818](https://arxiv.org/abs/2307.15818). Black, K. et al. (2024). "π0: A Vision-Language-Action Flow Model for General Robot Control." [arxiv.org/abs/2410.24164](https://arxiv.org/abs/2410.24164)
[^6]: Kusano, K. D. et al. (2024). "Comparison of Waymo rider-only crash data to human benchmarks at 7.1 million miles." *Traffic Injury Prevention*. [doi:10.1080/15389588.2024.2380786](https://doi.org/10.1080/15389588.2024.2380786). Waymo and Swiss Re (2024). *Do Autonomous Vehicles Outperform Latest-Generation Human-Driven Vehicles? A Comparison to Waymo's Auto Liability Insurance Claims at 25 Million Miles*. [waymo.com](https://waymo.com/safety/impact/)
[^7]: Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589. [doi:10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2). Abramson, J. et al. (2024). "Accurate structure prediction of biomolecular interactions with AlphaFold 3." *Nature*, 630, 493–500. [doi:10.1038/s41586-024-07487-w](https://doi.org/10.1038/s41586-024-07487-w). Hayes, T. et al. (2025). "Simulating 500 million years of evolution with a language model." *Science*, 387, 850–858. [doi:10.1126/science.ads0018](https://doi.org/10.1126/science.ads0018)
[^8]: Lam, R. et al. (2023). "Learning skillful medium-range global weather forecasting." *Science*, 382(6677), 1416–1421. [doi:10.1126/science.adi2336](https://doi.org/10.1126/science.adi2336). Price, I. et al. (2025). "Probabilistic weather forecasting with machine learning." *Nature*, 637, 84–90. [doi:10.1038/s41586-024-08252-9](https://doi.org/10.1038/s41586-024-08252-9)
[^9]: Merchant, A. et al. (2023). "Scaling deep learning for materials discovery." *Nature*, 624, 80–85. [doi:10.1038/s41586-023-06735-9](https://doi.org/10.1038/s41586-023-06735-9). Cheetham, A. K., Seshadri, R. (2024). "Artificial Intelligence Driving Materials Discovery? Perspective on the Article: Scaling Deep Learning for Materials Discovery." *Chemistry of Materials*, 36(8), 3490–3495. [doi:10.1021/acs.chemmater.4c00643](https://doi.org/10.1021/acs.chemmater.4c00643)
[^10]: Epoch AI (2026). *Trends in Artificial Intelligence*. [epoch.ai/trends](https://epoch.ai/trends). Cottier, B. et al. (2024). "The rising costs of training frontier AI models." [arxiv.org/abs/2405.21015](https://arxiv.org/abs/2405.21015). International Energy Agency (2025). *Energy and AI*. [iea.org](https://www.iea.org/reports/energy-and-ai)
[^11]: DeepSeek-AI (2025). "DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning." *Nature*, 645, 633–638. [doi:10.1038/s41586-025-09422-z](https://doi.org/10.1038/s41586-025-09422-z). Ho, A. et al. (2024). "Algorithmic progress in language models." [arxiv.org/abs/2403.05812](https://arxiv.org/abs/2403.05812)
[^12]: Greenblatt, R. et al. (2024). "Alignment faking in large language models." [arxiv.org/abs/2412.14093](https://arxiv.org/abs/2412.14093). Lindsey, J. et al. (2025). "On the Biology of a Large Language Model." [transformer-circuits.pub](https://transformer-circuits.pub/2025/attribution-graphs/biology.html). Templeton, A. et al. (2024). "Scaling Monosemanticity." [transformer-circuits.pub](https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html)
[^13]: Bengio, Y. et al. (2026). *International AI Safety Report 2026*. [arxiv.org/abs/2602.21012](https://arxiv.org/abs/2602.21012)
