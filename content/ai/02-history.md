---
title: Seasons of AI
subtitle: From a 1943 paper about neurons to the transformer. Two booms, two winters, one forty-year argument, and the moment in 2012 when the losing side won.
part: I · Foundations
---

## Why did AI progress through both breakthroughs and false starts?

Chapter 1 said the ideas were old and the results were new. This chapter tells how that happened: who had the ideas, why they were dismissed, and what changed. The history matters because the field keeps re-fighting its old arguments, and because the people who were wrong were usually wrong for good reasons.

## 1943–1956: neurons, logic, and a summer workshop

The story begins with a paper by a neurophysiologist and a homeless teenage logician. Warren McCulloch and Walter Pitts showed in 1943 that a simplified neuron, one that fires when enough of its inputs fire, could compute any logical function, so that a network of such neurons could in principle do anything a computer could.[^1] Brains, they argued, were logic machines. Alan Turing, who had defined computation in 1936, asked in 1950 whether a machine could think and proposed a test: if a judge conversing by text cannot tell the machine from a person, the question is settled.[^2] He predicted machines would pass it by 2000. He was off by about twenty years, and, arguably, the passing turned out to matter less than he thought.

In the summer of 1956 a young mathematician named John McCarthy gathered ten researchers at Dartmouth College for a workshop and coined a name for what they were doing: **artificial intelligence**. The proposal claimed that "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it," and that significant progress could be made in a summer.[^3] The optimism set the tone for a decade. Herbert Simon and Allen Newell predicted in 1957 that a computer would be world chess champion within ten years; it took forty.[^23]

## 1958–1969: the perceptron and its execution

Two approaches emerged, and their rivalry is the spine of the whole history.

The first was **symbolic**: intelligence is reasoning with symbols and rules, so program the rules. This camp built theorem provers, chess programs, and language systems, and it dominated the universities.

The second was **connectionist**: intelligence emerges from many simple units learning connections, so build a network and train it. Its champion was Frank Rosenblatt, a psychologist at Cornell, whose **perceptron** of 1958 was a McCulloch–Pitts neuron with a learning rule: show it an example, and if it gets the answer wrong, nudge its weights toward the right one.[^4] Rosenblatt proved the rule would always find a solution if one existed and, by 1960, built the machine in hardware. The Navy funded it, and at the Navy's 1958 press briefing reporters were told it would one day walk, talk, see, and reproduce itself; the *New York Times* printed the claims.

Then, in 1969, Marvin Minsky and Seymour Papert, leaders of the symbolic camp at MIT, published *Perceptrons*, a mathematically rigorous book proving what a single-layer perceptron could not do.[^5] It could not, for instance, learn the XOR function (true if exactly one of two inputs is true), because no straight line separates the cases. More layers could in principle fix this, but nobody knew how to train more layers, Minsky and Papert doubted it would help, and the book was read as showing the approach was a dead end. Funding for neural networks vanished for fifteen years. Rosenblatt died in a boating accident in 1971, at 43.

## 1970–1990: the first winter, expert systems, and a quiet revival

The symbolic approach had its own reckoning. Programs that worked on toy problems failed when scaled. A 1973 British report concluded that AI had delivered almost nothing it had promised and cut funding; the American agencies followed.[^6] This was the first **AI winter**, a term the field coined for itself.

Spring came in the 1980s with **expert systems**: programs encoding the rules a human expert used, in the form "if the patient has fever and a stiff neck, consider meningitis." MYCIN recommended antibiotic treatments as well as infectious-disease specialists did in a blinded evaluation; XCON configured computers for Digital Equipment Corporation and saved it tens of millions a year.[^7] Companies built a billion-dollar industry. Then the systems proved brittle (they knew nothing outside their rules), expensive to maintain (every rule was hand-written), and unable to learn. By 1990 the industry had collapsed. Second winter.

Meanwhile, quietly, the connectionists had solved their problem. The fix for training multiple layers is called **backpropagation**: compute how much each weight contributed to the error by applying the chain rule of calculus backward through the network, then adjust every weight a little. Versions had been found several times (Linnainmaa 1970, Werbos 1974), but the 1986 paper by David Rumelhart, Geoffrey Hinton, and Ronald Williams showed it working, and it revived the field.[^8] Yann LeCun used it in 1989 to read handwritten zip codes, the ancestor of the check-reading networks that by the early 2000s read roughly a tenth of all checks written in the United States.[^9] Hinton, LeCun, and Yoshua Bengio spent the next twenty years being told they were working on a dead technology.

## 1990–2010: the statistical turn

While neural networks were unfashionable, machine learning as a field was born, and it was born from statistics. The problems of the 1990s were spam, credit scoring, handwriting, speech, and web search, and the tools that won were statistical: **decision trees** and their ensembles, **support vector machines** (which found the best separating boundary with elegant mathematics), **Bayesian networks**, and the humble but effective **logistic regression** (chapters 4 to 6).[^10] Vladimir Vapnik's theory of statistical learning gave the field its first rigorous account of when learning generalizes (chapter 8). Judea Pearl gave it a theory of causation. The word "AI" was avoided; researchers said "machine learning" or "data mining" to sound respectable.

Two symbolic triumphs closed the era. IBM's Deep Blue beat Garry Kasparov at chess in 1997, by searching two hundred million positions a second with hand-tuned evaluation, an approach that many in the field felt taught little about intelligence.[^11] IBM's Watson won *Jeopardy!* in 2011 with a hybrid of statistical language processing and knowledge retrieval, then failed commercially in medicine.[^24]

## 2012: the moment

Every year since 2010, the ImageNet competition asked programs to label a million photographs into a thousand categories. The best systems, built on hand-designed features and statistical classifiers, got about 26 percent of images wrong, and improved by a point or two a year.

In 2012 a team from Hinton's lab, Alex Krizhevsky and Ilya Sutskever, entered a deep neural network trained on two gaming GPUs. It got 15.3 percent wrong. The runner-up was at 26.2.[^12] Nothing in the history of the competition, or of the field, had moved like that. Within two years every entry was a neural network; within five, the networks beat humans at the task. The technique had not changed since 1989. The data (ImageNet) and the compute (GPUs) had. Hinton's thirty-year bet was vindicated, and the phrase "deep learning," which he and his colleagues had adopted around 2006 partly to escape the stigma of "neural network," became the name of the era.

:::story The bet
In 2012 Hinton, Krizhevsky, and Sutskever formed a company with no product and auctioned it. Google, Microsoft, Baidu, and DeepMind bid; Google won, at \$44 million.[^13] Hinton was 65 and had been at the University of Toronto since 1987 because it was one of the few places that had kept funding him. Within a decade the three of them, and the students of the students who had stayed loyal to the approach through two winters, ran the research labs of every major technology company. Sutskever co-founded OpenAI in 2015. Hinton shared the Turing Award in 2018 and the Nobel Prize in Physics in 2024, and resigned from Google in 2023 so that he could warn freely about what he had helped build.[^14]
:::

## 2012–2017: deep learning everywhere

The five years after ImageNet saw the technique conquer one field after another. Speech recognition error rates halved. Machine translation switched to neural networks in 2016 and improved more in a year than in the previous decade. **Generative adversarial networks** (2014) produced the first convincing fake faces; **word embeddings** (2013) showed that meaning could be arithmetic, with king − man + woman ≈ queen (chapter 12).[^15] And in March 2016 DeepMind's AlphaGo beat Lee Sedol, one of the strongest Go players alive, at a game whose search space is too large for Deep Blue's brute force, by combining deep networks with reinforcement learning and self-play, Samuel's checkers idea at planetary scale (chapter 14).[^16] By DeepMind's count, more than two hundred million people watched.[^25] The following year's AlphaZero learned Go, chess, and shogi from nothing but the rules, in hours, and beat every program ever written.

## 2017–2022: the transformer and the scaling hypothesis

In 2017 eight researchers at Google published "Attention Is All You Need," proposing an architecture for processing sequences that dispensed with the recurrent networks used since the 1990s in favor of a mechanism called **attention**, which lets every word in a sentence look at every other word directly.[^17] The **transformer** was faster to train, scaled better, and within two or three years was the basis of nearly every language system (chapter 15).

OpenAI then made a bet as consequential as Hinton's. The hypothesis was that a transformer trained simply to predict the next word, on enough text with enough compute, would acquire general abilities that nobody trained it for. GPT-2 (2019, 1.5 billion parameters) wrote coherent paragraphs. GPT-3 (2020, 175 billion) could be given a task in plain English and do it, without any training for the task, a capability called **in-context learning** that had not been a design goal of the first GPTs.[^18] The **scaling laws** paper of the same year showed that performance improved as a smooth, predictable function of model size, data, and compute, with no sign of stopping (chapter 16).[^19] Meanwhile AlphaFold 2 solved the fifty-year-old problem of predicting protein structures from their sequences, work that won a Nobel Prize in Chemistry in 2024 (chapter 14).[^20]

## 2022–now: the chat era

GPT-3 was powerful and hard to use. In 2022 OpenAI added a step: after pretraining, humans ranked the model's responses, and a second round of training taught it to produce responses humans preferred (chapter 17). The result, released as ChatGPT on 30 November 2022, reached a hundred million users in two months, then the fastest adoption of any consumer product in history (Threads beat the record seven months later).[^21] Within eighteen months every major technology company had a competing model; open-weight models (Meta's Llama, Mistral, and in January 2025 China's DeepSeek, which matched the frontier at a fraction of the reported cost) put the technology in anyone's hands; and models could process images, audio, and video, write and run code, and, by late 2024, "reason," spending minutes thinking before answering and thereby solving mathematics and programming problems that had defeated them.[^22]

What comes next is chapter 22's subject. What this history shows is a pattern. The field has believed at least four times that it had found the key, and been wrong three times. The idea that won, learning from data with many-layered networks, was declared dead in 1969 and again in the 1990s, and the people who kept working on it were marginal figures for most of that time. That is worth remembering when reading confident claims, in either direction, about what comes next.

:::try Put the idea to work
A system beats people at a board game. What extra evidence would you need before calling it generally intelligent?

:::answer Show the reasoning
You would need performance across substantially different tasks, adaptation to unfamiliar conditions, and evidence about the resources and supervision required. A board-game result can be remarkable while remaining specific to a precisely defined environment. The historical mistake is expanding the claim faster than the tests.
:::
:::

## Summary

- Two approaches competed from the start: symbolic (program the rules) and connectionist (learn the connections). The symbolic approach dominated until 2012.
- The perceptron (1958) was killed by Minsky and Papert's 1969 critique; backpropagation (1986) revived multilayer networks but they stayed unfashionable for twenty years.
- Two AI winters followed overpromising: the 1970s after early symbolic AI, the late 1980s after expert systems.
- The 1990s made machine learning a statistical discipline; its tools (trees, SVMs, logistic regression) still run much of the world.
- 2012: a deep network trained on GPUs and ImageNet cut the error rate by two-fifths, and deep learning took over. Data and compute, not new ideas, made the difference.
- The transformer (2017), the scaling hypothesis (2020), and human-feedback training (2022) produced large language models; ChatGPT made them a consumer product.

[^1]: McCulloch, W. S., Pitts, W. (1943). "A logical calculus of the ideas immanent in nervous activity." *Bulletin of Mathematical Biophysics*, 5, 115–133. [doi:10.1007/BF02478259](https://doi.org/10.1007/BF02478259)
[^2]: Turing, A. M. (1950). "Computing Machinery and Intelligence." *Mind*, 59(236), 433–460. [doi:10.1093/mind/LIX.236.433](https://doi.org/10.1093/mind/LIX.236.433)
[^3]: McCarthy, J., Minsky, M. L., Rochester, N., Shannon, C. E. (1955). "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence." 31 August 1955. Reprinted in *AI Magazine*, 27(4), 2006, 12–14. [doi:10.1609/aimag.v27i4.1904](https://doi.org/10.1609/aimag.v27i4.1904)
[^4]: Rosenblatt, F. (1958). "The perceptron: A probabilistic model for information storage and organization in the brain." *Psychological Review*, 65(6), 386–408. [doi:10.1037/h0042519](https://doi.org/10.1037/h0042519)
[^5]: Minsky, M., Papert, S. (1969). *Perceptrons: An Introduction to Computational Geometry*. Cambridge, MA: MIT Press. Expanded edition 1988. Olazaran, M. (1996). "A Sociological Study of the Official History of the Perceptrons Controversy." *Social Studies of Science*, 26(3), 611–659. [doi:10.1177/030631296026003005](https://doi.org/10.1177/030631296026003005)
[^6]: Lighthill, J. (1973). "Artificial Intelligence: A General Survey." In *Artificial Intelligence: A Paper Symposium*. London: Science Research Council. [chilton-computing.org.uk](http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm)
[^7]: Buchanan, B. G., Shortliffe, E. H., eds. (1984). *Rule-Based Expert Systems: The MYCIN Experiments of the Stanford Heuristic Programming Project*. Reading, MA: Addison-Wesley. [shortliffe.net](https://www.shortliffe.net/Buchanan-Shortliffe-1984/MYCIN%20Book.htm). The blinded evaluation: Yu, V. L. et al. (1979). "Antimicrobial Selection by a Computer: A Blinded Evaluation by Infectious Diseases Experts." *JAMA*, 242(12), 1279–1282. [doi:10.1001/jama.1979.03300120037025](https://doi.org/10.1001/jama.1979.03300120037025). Crevier, D. (1993). *AI: The Tumultuous History of the Search for Artificial Intelligence*. New York: Basic Books, chapters 8–9.
[^8]: Rumelhart, D. E., Hinton, G. E., Williams, R. J. (1986). "Learning representations by back-propagating errors." *Nature*, 323, 533–536. [doi:10.1038/323533a0](https://doi.org/10.1038/323533a0). Earlier: Werbos, P. (1974). *Beyond Regression*. PhD thesis, Harvard. Linnainmaa, S. (1970). Master's thesis, University of Helsinki. Schmidhuber, J. (2015). "Deep learning in neural networks: An overview." *Neural Networks*, 61, 85–117. [doi:10.1016/j.neunet.2014.09.003](https://doi.org/10.1016/j.neunet.2014.09.003)
[^9]: LeCun, Y., Boser, B., Denker, J. S., Henderson, D., Howard, R. E., Hubbard, W., Jackel, L. D. (1989). "Backpropagation Applied to Handwritten Zip Code Recognition." *Neural Computation*, 1(4), 541–551. [doi:10.1162/neco.1989.1.4.541](https://doi.org/10.1162/neco.1989.1.4.541). LeCun, Y., Bottou, L., Bengio, Y., Haffner, P. (1998). "Gradient-based learning applied to document recognition." *Proceedings of the IEEE*, 86(11), 2278–2324, on the deployed check readers. [doi:10.1109/5.726791](https://doi.org/10.1109/5.726791)
[^10]: Cortes, C., Vapnik, V. (1995). "Support-vector networks." *Machine Learning*, 20, 273–297. [doi:10.1007/BF00994018](https://doi.org/10.1007/BF00994018). Breiman, L. (2001). "Statistical Modeling: The Two Cultures." *Statistical Science*, 16(3), 199–231. [doi:10.1214/ss/1009213726](https://doi.org/10.1214/ss/1009213726)
[^11]: Campbell, M., Hoane, A. J., Hsu, F.-h. (2002). "Deep Blue." *Artificial Intelligence*, 134(1–2), 57–83. [doi:10.1016/S0004-3702(01)00129-1](https://doi.org/10.1016/S0004-3702(01)00129-1)
[^12]: Krizhevsky, A., Sutskever, I., Hinton, G. E. (2012). "ImageNet Classification with Deep Convolutional Neural Networks." *Advances in Neural Information Processing Systems*, 25. [papers.nips.cc](https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html). Russakovsky, O. et al. (2015). "ImageNet Large Scale Visual Recognition Challenge." *International Journal of Computer Vision*, 115, 211–252. [doi:10.1007/s11263-015-0816-y](https://doi.org/10.1007/s11263-015-0816-y)
[^13]: Metz, C. (2021). *Genius Makers: The Mavericks Who Brought AI to Google, Facebook, and the World*. New York: Dutton. Chapter 1 describes the December 2012 auction.
[^14]: ACM (2019). "Fathers of the Deep Learning Revolution Receive ACM A.M. Turing Award." [awards.acm.org](https://awards.acm.org/about/2018-turing). The Nobel Prize in Physics 2024. [nobelprize.org](https://www.nobelprize.org/prizes/physics/2024/press-release/). Metz, C. (2023). "'The Godfather of A.I.' Leaves Google and Warns of Danger Ahead." *The New York Times*, 1 May 2023.
[^15]: Goodfellow, I. et al. (2014). "Generative Adversarial Nets." *NeurIPS 27*. [arxiv.org/abs/1406.2661](https://arxiv.org/abs/1406.2661). Mikolov, T., Chen, K., Corrado, G., Dean, J. (2013). "Efficient Estimation of Word Representations in Vector Space." [arxiv.org/abs/1301.3781](https://arxiv.org/abs/1301.3781). Wu, Y. et al. (2016). "Google's Neural Machine Translation System." [arxiv.org/abs/1609.08144](https://arxiv.org/abs/1609.08144)
[^16]: Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529, 484–489. [doi:10.1038/nature16961](https://doi.org/10.1038/nature16961). Silver, D. et al. (2018). "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play." *Science*, 362(6419), 1140–1144. [doi:10.1126/science.aar6404](https://doi.org/10.1126/science.aar6404)
[^17]: Vaswani, A. et al. (2017). "Attention Is All You Need." *NeurIPS 30*. [arxiv.org/abs/1706.03762](https://arxiv.org/abs/1706.03762)
[^18]: Radford, A. et al. (2019). "Language Models are Unsupervised Multitask Learners." OpenAI. Brown, T. B. et al. (2020). "Language Models are Few-Shot Learners." *NeurIPS 33*. [arxiv.org/abs/2005.14165](https://arxiv.org/abs/2005.14165)
[^19]: Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." [arxiv.org/abs/2001.08361](https://arxiv.org/abs/2001.08361)
[^20]: Jumper, J. et al. (2021). "Highly accurate protein structure prediction with AlphaFold." *Nature*, 596, 583–589. [doi:10.1038/s41586-021-03819-2](https://doi.org/10.1038/s41586-021-03819-2). The Nobel Prize in Chemistry 2024. [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/2024/press-release/)
[^21]: Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 35*. [arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155). Hu, K. (2023). "ChatGPT sets record for fastest-growing user base." *Reuters*, 2 February 2023.
[^22]: DeepSeek-AI (2025). "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning." [arxiv.org/abs/2501.12948](https://arxiv.org/abs/2501.12948). OpenAI (2024). "Learning to reason with LLMs." 12 September 2024. [openai.com](https://openai.com/index/learning-to-reason-with-llms/)
[^23]: Simon, H. A., Newell, A. (1958). "Heuristic Problem Solving: The Next Advance in Operations Research." *Operations Research*, 6(1), 1–10. [doi:10.1287/opre.6.1.1](https://doi.org/10.1287/opre.6.1.1)
[^24]: Ferrucci, D. et al. (2010). "Building Watson: An Overview of the DeepQA Project." *AI Magazine*, 31(3), 59–79. [doi:10.1609/aimag.v31i3.2303](https://doi.org/10.1609/aimag.v31i3.2303). Strickland, E. (2019). "How IBM Watson Overpromised and Underdelivered on AI Health Care." *IEEE Spectrum*, 2 April 2019. [spectrum.ieee.org](https://spectrum.ieee.org/how-ibm-watson-overpromised-and-underdelivered-on-ai-health-care)
[^25]: Google DeepMind. "AlphaGo." Research page: "over 200 million people watched online." [deepmind.google](https://deepmind.google/research/breakthroughs/alphago/)
