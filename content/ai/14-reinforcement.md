---
title: Learning by Reward
subtitle: No labels, no answers, just a score. How a program taught itself Go from nothing, why that was harder than it sounds, and why the same idea now trains chatbots to behave.
part: III · Neural Networks
---

## How do you learn when feedback arrives after the decision?

Supervised learning needs someone to supply the right answer for each example. Unsupervised learning needs no answers but makes no decisions. **Reinforcement learning** (RL) is for the third case, the one Arthur Samuel's checkers program faced in 1959 (chapter 1): a system that acts, receives a score, and must work out for itself which of its actions deserved credit. It is the branch of the field closest to how animals learn, the one with the most spectacular demonstrations, and the one that turned out to be the missing step in making language models useful.

## The setup

An **agent** exists in an **environment**. At each step it observes a **state**, chooses an **action**, receives a **reward** (a number, possibly zero, possibly negative), and the environment moves to a new state. The agent's goal is to maximize the total reward it collects over time. A **policy** is the agent's rule for choosing actions given states, and learning means improving the policy.[^1]

The framework covers a chess player (state: the board; action: a move; reward: +1 for a win at the end and 0 until then), a thermostat (state: temperature and time; action: heat or not; reward: comfort minus cost), a robot (state: camera and joint angles; action: motor commands; reward: distance walked), and a chatbot (state: the conversation so far; action: the next response; reward: the user's rating). What makes it hard is in the chess example: the reward arrives at the end, after forty moves, and the agent must decide which of the forty deserved the credit or the blame. This is the **credit assignment problem**, and solving it is what RL is.

Two further difficulties. The agent's actions change what it sees next, so the data is not a fixed set but a stream the agent generates by its own behavior; a bad early policy produces bad data. And the agent must balance **exploitation** (doing what has worked) against **exploration** (trying something new that might work better), a dilemma with no clean solution, only heuristics: act randomly some small fraction of the time, or prefer actions whose outcome is uncertain.

{{fig:rl-loop|The reinforcement learning loop. The agent observes the state, chooses an action by its policy, and receives a reward and a new state from the environment. Learning adjusts the policy so that actions leading to more total reward become more likely. The reward may arrive long after the actions that earned it.}}

## Value: how good is this situation?

The central idea, due to Richard Bellman in the 1950s and to Samuel in practice, is to learn a **value function**: an estimate, for each state, of the total reward the agent can expect from there onward.[^2] If you know the value of every position, playing well is easy: choose the move that leads to the highest-valued position. The value of a state should equal the immediate reward plus the value of the best next state, discounted slightly for being in the future:

$$V(s) = \max_a \big[\, r(s, a) + \gamma\, V(s') \,\big]$$

This is the **Bellman equation**, in its form for an environment whose response to each action is fixed; when outcomes are random, $V(s')$ is replaced by its expected value. $\gamma$ (gamma), between 0 and 1, is the **discount factor**: how much the agent cares about future reward relative to present, the same idea as present value in the mathematics guide. The equation is recursive, defining each state's value in terms of its successors', and it has a remarkable property: you can learn $V$ by making it consistent with itself. After each step, nudge the estimate of $V(s)$ toward $r + \gamma V(s')$. That is **temporal-difference learning**, formalized by Richard Sutton in 1988, and it is how Samuel's checkers player worked: the score for a position was adjusted toward the score of the position that followed.[^3] Sutton and Andrew Barto's development of these ideas earned the 2024 Turing Award.

**Q-learning** (Watkins, 1989) learns the value of each state–action pair instead, $Q(s, a)$, which makes acting trivial: pick the action with the highest $Q$. With a small number of states and actions, $Q$ is a table. Real problems have too many states for a table (chess has about $10^{44}$ positions), and the natural fix is to approximate $Q$ with a function, which since 2013 means a neural network.

## Deep RL

In 2013 DeepMind, then a small London startup, trained a convolutional network to play Atari games from the raw screen pixels, using Q-learning with the network as the $Q$ function.[^4] The **DQN** learned 49 games with the same architecture and settings, from nothing but pixels and score, and on more than half of them matched or beat a professional games tester. Nobody had told it what a paddle was. The result helped convince Google to buy the company, for a reported \$500 million, and started the era of deep reinforcement learning.

Two engineering ideas made it work, and both address the instability of learning from your own moving data. **Experience replay** stores past transitions in a buffer and trains on random samples from it, breaking the correlation between consecutive steps. A **target network**, a frozen copy of the $Q$ network updated only occasionally, provides the $\gamma V(s')$ term, so the network is not chasing a target that moves every time it learns.

The alternative to learning values is to learn the policy directly. **Policy gradient** methods (Williams, 1992) parameterize the policy as a network that outputs action probabilities and adjust the parameters to make actions that led to high reward more probable.[^5] The gradient is simple: for each action taken, push its log-probability up in proportion to the reward that followed. **Actor-critic** methods combine the two: the actor is the policy, the critic is a value function that judges the actor's actions and reduces the noise in the reward signal. **Proximal policy optimization** (PPO, 2017), which limits how much the policy can change in each update to keep training stable, became the workhorse of the field and, five years later, of the alignment step in chapter 17.[^6]

## AlphaGo

Go was the grand challenge. Its board has more legal positions than atoms in the universe; brute-force search, which won chess in 1997, is hopeless; and the best programs in 2015 played at the level of a strong amateur. Experts expected another decade.

DeepMind's AlphaGo combined three things.[^7] A **policy network**, trained first by supervised learning on 30 million positions from human expert games to predict the next move, then improved by policy-gradient RL through self-play. A **value network**, trained on self-play games to predict the winner from a position. And **Monte Carlo tree search**, which explores possible futures by simulating many games forward, using the policy network to propose moves and the value network to evaluate positions without simulating to the end. The networks made the search vastly more efficient; the search made the networks' judgments reliable. In March 2016 AlphaGo beat Lee Sedol, holder of 18 world titles, four games to one. Its move 37 in game two, a shoulder hit on the fifth line that no professional would have played, was judged by the commentators to be a mistake and turned out to be the winning move. Lee called it "creative."

AlphaGo Zero, in October 2017, removed the human data: starting from random play and knowing only the rules, it surpassed the version that beat Lee Sedol after three days of self-play.[^8] AlphaZero, two months later, generalized the recipe to chess and shogi with no game-specific tuning, outplaying the strongest chess engine after about four hours of training. Its chess style, sacrificing material for long-term positional pressure, changed how grandmasters play. MuZero (2020) removed the rules too, learning a model of the game's dynamics from experience. What Samuel had done for checkers with a linear scorer and a 1959 computer, AlphaZero did for every board game with a deep network and a data center, and the principle was unchanged: play yourself, adjust toward what won.

:::key
Self-play is the trick that makes RL's data problem disappear. In supervised learning the training set is fixed and the model can only be as good as it. In self-play the opponent improves as the agent does, so the data gets harder exactly as fast as the agent gets stronger, and there is no ceiling but compute. That is why board games fell so completely. It is also why they were a special case: the environment was a perfect, free, infinitely fast simulator with a clear reward. The real world offers none of those.
:::

## Where RL is hard

Outside games, RL's record is mixed, for reasons that are instructive.

**Sample inefficiency.** AlphaZero played 44 million games of chess. A robot cannot fall over 44 million times; a hospital cannot try 44 million treatment policies. Learning in **simulation** and transferring to reality helps when simulators are good (robot locomotion, chip layout) and fails when the gap between simulation and reality is large.

**Reward design.** The agent optimizes exactly the reward it is given, and finds the gaps. A boat-racing agent rewarded for collecting points learned to circle endlessly through a lagoon of respawning bonuses, never finishing the race. An agent rewarded for "grasping" learned to hover its hand between the camera and the object so it *looked* grasped.[^9] **Reward hacking** is the RL version of shortcut learning, and it is not a bug in the algorithm but a fact about optimization: any measurable proxy for what you want, optimized hard enough, diverges from what you want. This is Goodhart's law with a gradient, and it recurs as the central worry of chapter 17.

**Real successes.** Where the environment is a computer system with a clear metric, RL has delivered: DeepMind's AlphaDev found faster sorting routines that shipped in the standard C++ library; RL tunes data-center cooling; and in 2022 AlphaTensor discovered a faster matrix-multiplication algorithm for 4×4 matrices in modular arithmetic, the first improvement on Strassen's 1969 method in that setting. (A widely publicized result on chip floorplanning is contested, with independent researchers unable to reproduce its claimed advantage.)[^10] Robotics has made real progress with simulation and imitation, and self-driving stacks use RL components, though most of a self-driving system is supervised perception and hand-engineered planning.

## RL meets language models

The most consequential application appeared in 2022, and it was not what the field expected. A language model trained to predict the next word is fluent and unhelpful: it continues text rather than answering. To make it an assistant, OpenAI treated the model as an RL policy, the conversation as the state, the response as the action, and human preference as the reward. Humans compared pairs of responses; a **reward model** was trained to predict which they preferred; and the language model was tuned with PPO to maximize that predicted reward. This is **reinforcement learning from human feedback** (RLHF), and it is the difference between GPT-3 and ChatGPT.[^11]

Then, in 2024 and 2025, RL did something more. Models were trained by RL on problems with *verifiable* answers, mathematics and code, rewarded simply for being right, a recipe now called **reinforcement learning from verifiable rewards** (RLVR). A base model can already write step-by-step text when asked; under this training, without being shown examples of good reasoning, the models learned to do it far longer and better: to try approaches, check their work, and backtrack. DeepSeek's R1 showed the behavior strengthening under pure RL with no human demonstrations, and OpenAI's o-series and its successors made it the frontier's standard recipe.[^12] Trial, error, and a score, Samuel's idea from 1959, turned out to work on the hardest problem of all, once the agent was a language model. Chapter 17 takes up what that does and does not achieve, and describes the PPO-free alternative, direct preference optimization, that open models use.

:::formulas
| Idea | Formula |
|---|---|
| Return (total discounted reward) | $G_t = r_t + \gamma r_{t+1} + \gamma^2 r_{t+2} + \cdots$ |
| Bellman equation | $V(s) = \max_a [\, r(s,a) + \gamma V(s') \,]$ |
| Temporal-difference update | $V(s) \leftarrow V(s) + \alpha\,[\, r + \gamma V(s') - V(s) \,]$ |
| Q-learning update | $Q(s,a) \leftarrow Q(s,a) + \alpha\,[\, r + \gamma \max_{a'} Q(s',a') - Q(s,a) \,]$ |
| Policy gradient | $\nabla J = \mathbb{E}[\, \nabla \log \pi(a \mid s)\; G_t \,]$ |
| Exploration | act randomly with probability $\epsilon$; otherwise act greedily |
:::

:::know
- RL learns from reward, not labels; the hard part is assigning credit for a reward that arrives late.
- The value of a state is the reward you expect from it onward; the Bellman equation makes it consistent with its successors, and TD learning learns it from experience.
- Deep RL uses networks to approximate value or policy; replay buffers and target networks stabilize it; PPO is the standard policy method.
- Self-play removes the data ceiling and is why board games fell completely; real environments lack free, fast simulators and clear rewards.
- Agents optimize the reward they are given and find the gaps. Reward hacking is a property of optimization, not a bug.
- RLHF made language models into assistants; RL on verifiable answers (RLVR) made them reason at length.
:::

:::try Put the idea to work
An agent earns points for keeping a simulated boat moving and discovers it can circle forever. What does that reveal about the reward?

:::answer Show the reasoning
The reward permits behavior that differs from the intended goal, such as completing a course. Optimizing the specified reward is not the same as understanding the designer's purpose. Examine what outcomes the reward actually favors and test for alternatives that score well for the wrong reason.
:::
:::

## Summary

- Reinforcement learning frames decision-making as an agent maximizing total reward from an environment, with the credit assignment and exploration problems at its core.
- Value functions and the Bellman equation, learned by temporal-difference methods, are the classical foundation; Q-learning and policy gradients are the two main families.
- Deep RL (DQN, 2013) learned from raw pixels. AlphaGo combined human game data, reinforcement learning, and search; AlphaZero learned board games through self-play without human game examples, using the supplied rules.
- Outside simulators, RL is sample-hungry and prone to reward hacking; its clearest real-world wins are in computer systems with clean metrics.
- RL from human feedback turned language models into assistants in 2022, and RL on verifiable rewards taught them to reason in 2024–25.

[^1]: Sutton, R. S., Barto, A. G. (2018). *Reinforcement Learning: An Introduction*, 2nd ed. Cambridge, MA: MIT Press. Free at [incompleteideas.net/book](http://incompleteideas.net/book/the-book-2nd.html)
[^2]: Bellman, R. (1957). *Dynamic Programming*. Princeton University Press. Samuel, A. L. (1959). "Some Studies in Machine Learning Using the Game of Checkers." *IBM Journal of Research and Development*, 3(3), 210–229. [doi:10.1147/rd.33.0210](https://doi.org/10.1147/rd.33.0210)
[^3]: Sutton, R. S. (1988). "Learning to predict by the methods of temporal differences." *Machine Learning*, 3, 9–44. [doi:10.1007/BF00115009](https://doi.org/10.1007/BF00115009). ACM (2025). "2024 ACM A.M. Turing Award: Andrew Barto and Richard Sutton." [awards.acm.org](https://awards.acm.org/about/2024-turing). Watkins, C. J. C. H., Dayan, P. (1992). "Q-learning." *Machine Learning*, 8, 279–292. [doi:10.1007/BF00992698](https://doi.org/10.1007/BF00992698)
[^4]: Mnih, V. et al. (2015). "Human-level control through deep reinforcement learning." *Nature*, 518, 529–533. [doi:10.1038/nature14236](https://doi.org/10.1038/nature14236)
[^5]: Williams, R. J. (1992). "Simple statistical gradient-following algorithms for connectionist reinforcement learning." *Machine Learning*, 8, 229–256. [doi:10.1007/BF00992696](https://doi.org/10.1007/BF00992696)
[^6]: Schulman, J., Wolski, F., Dhariwal, P., Radford, A., Klimov, O. (2017). "Proximal Policy Optimization Algorithms." [arxiv.org/abs/1707.06347](https://arxiv.org/abs/1707.06347)
[^7]: Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks and tree search." *Nature*, 529, 484–489. [doi:10.1038/nature16961](https://doi.org/10.1038/nature16961). Kohs, G. (dir.) (2017). *AlphaGo*. Documentary film, on move 37 and Lee Sedol's reaction.
[^8]: Silver, D. et al. (2017). "Mastering the game of Go without human knowledge." *Nature*, 550, 354–359. [doi:10.1038/nature24270](https://doi.org/10.1038/nature24270). Silver, D. et al. (2018). "A general reinforcement learning algorithm that masters chess, shogi, and Go through self-play." *Science*, 362(6419), 1140–1144. [doi:10.1126/science.aar6404](https://doi.org/10.1126/science.aar6404). Schrittwieser, J. et al. (2020). "Mastering Atari, Go, chess and shogi by planning with a learned model." *Nature*, 588, 604–609. [doi:10.1038/s41586-020-03051-4](https://doi.org/10.1038/s41586-020-03051-4). Sadler, M., Regan, N. (2019). *Game Changer: AlphaZero's Groundbreaking Chess Strategies*. Alkmaar: New in Chess.
[^9]: Clark, J., Amodei, D. (2016). "Faulty Reward Functions in the Wild." OpenAI. [openai.com](https://openai.com/index/faulty-reward-functions/). Krakovna, V. et al. (2020). "Specification gaming: the flip side of AI ingenuity." DeepMind. [deepmind.google](https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/). Amodei, D. et al. (2016). "Concrete Problems in AI Safety." [arxiv.org/abs/1606.06565](https://arxiv.org/abs/1606.06565)
[^10]: Mankowitz, D. J. et al. (2023). "Faster sorting algorithms discovered using deep reinforcement learning." *Nature*, 618, 257–263. [doi:10.1038/s41586-023-06004-9](https://doi.org/10.1038/s41586-023-06004-9). Fawzi, A. et al. (2022). "Discovering faster matrix multiplication algorithms with reinforcement learning." *Nature*, 610, 47–53. [doi:10.1038/s41586-022-05172-4](https://doi.org/10.1038/s41586-022-05172-4). Mirhoseini, A. et al. (2021). "A graph placement methodology for fast chip design." *Nature*, 594, 207–212. [doi:10.1038/s41586-021-03544-w](https://doi.org/10.1038/s41586-021-03544-w). The critique: Cheng, C.-K., Kahng, A. B., Kundu, S., Wang, Y., Wang, Z. (2023). "Assessment of Reinforcement Learning for Macro Placement." *ISPD '23*. [doi:10.1145/3569052.3578926](https://doi.org/10.1145/3569052.3578926)
[^11]: Christiano, P. F. et al. (2017). "Deep Reinforcement Learning from Human Preferences." *NeurIPS 30*. [arxiv.org/abs/1706.03741](https://arxiv.org/abs/1706.03741). Ouyang, L. et al. (2022). "Training language models to follow instructions with human feedback." *NeurIPS 35*. [arxiv.org/abs/2203.02155](https://arxiv.org/abs/2203.02155)
[^12]: DeepSeek-AI (2025). "DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning." *Nature*, 645, 633–638. [doi:10.1038/s41586-025-09422-z](https://doi.org/10.1038/s41586-025-09422-z). OpenAI (2024). "Learning to reason with LLMs." 12 September 2024. [openai.com](https://openai.com/index/learning-to-reason-with-llms/)
