---
title: Building One
subtitle: What practitioners actually do. The tools, a complete training run in fifty lines, the data work that takes most of the time, and how a model gets from a notebook to a product without falling over.
part: V · In the World
---

## Recap

Nineteen chapters of ideas. This one is about doing: the software, the workflow, the mistakes, and the unglamorous parts that determine whether a machine learning project produces anything. It is written for someone who wants to understand what the work is like, or to start doing it, and it assumes nothing beyond the previous chapters.

## The tools

Nearly all machine learning is done in **Python**, not because it is fast (it is slow) but because the libraries that do the fast part are written for it. **NumPy** handles arrays; **pandas** handles tables; **scikit-learn** implements every method in Part II with one consistent interface, so that switching from logistic regression to gradient boosting is one line; **XGBoost** and **LightGBM** are the boosting engines. For neural networks, **PyTorch** is the research and increasingly the production standard, and **JAX** is its main rival; both provide automatic differentiation (chapter 10) and run on GPUs. On top of PyTorch, the **Hugging Face** libraries provide pretrained models (hundreds of thousands of them, downloadable) and the tools to fine-tune and run them.[^1]

Hardware matters. A laptop trains the models of Part II in seconds and a small neural network in minutes. Fine-tuning a medium language model wants one GPU with 24 to 80 GB of memory, rented by the hour. Pretraining a frontier model wants tens of thousands of GPUs and is done by perhaps a dozen organizations on Earth. Most practitioners never train anything large; they use, adapt, and evaluate what those organizations release.

## A complete example

Here is the entire code to train a neural network classifier on handwritten digits, the standard first exercise (chapter 9). It is real, runnable PyTorch, and it contains every idea from chapters 3, 5, 9, and 10.

```python
import torch, torch.nn as nn
from torchvision import datasets, transforms

# 1. Data: 60,000 training images, 10,000 test images, 28x28 grayscale.
tf = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))])
train = datasets.MNIST(".", train=True, download=True, transform=tf)
test = datasets.MNIST(".", train=False, download=True, transform=tf)
train_loader = torch.utils.data.DataLoader(train, batch_size=64, shuffle=True)
test_loader = torch.utils.data.DataLoader(test, batch_size=1000)

# 2. Model: 784 inputs -> 128 -> 64 -> 10 classes. About 109,000 parameters.
model = nn.Sequential(
    nn.Flatten(), nn.Linear(784, 128), nn.ReLU(),
    nn.Linear(128, 64), nn.ReLU(), nn.Linear(64, 10))

# 3. Loss and optimizer: cross-entropy (softmax is inside it) and Adam.
loss_fn = nn.CrossEntropyLoss()
opt = torch.optim.Adam(model.parameters(), lr=1e-3)

# 4. Training loop: for each minibatch, forward, loss, backward, step.
for epoch in range(3):
    model.train()
    for x, y in train_loader:
        opt.zero_grad()            # clear old gradients
        loss = loss_fn(model(x), y)  # forward pass and loss
        loss.backward()            # backpropagation: gradients for every weight
        opt.step()                 # gradient descent step

    # 5. Evaluate on data the model has never seen.
    model.eval(); correct = 0
    with torch.no_grad():
        for x, y in test_loader:
            correct += (model(x).argmax(1) == y).sum().item()
    print(f"epoch {epoch+1}: test accuracy {correct / len(test):.3f}")
```

Three epochs take about a minute on a laptop and reach about 97.5 percent test accuracy. Every line maps to a chapter: the normalization is chapter 9's advice to standardize; `Linear` and `ReLU` are the layers and activation of chapter 9; `CrossEntropyLoss` is chapter 5; `Adam` and the four-line loop are chapter 10; the separate test set and `no_grad` evaluation are chapter 3. Swap `nn.Sequential` for a convolutional network (chapter 11) and accuracy passes 99 percent. Swap the dataset and the output size and the same loop trains a classifier for anything.[^2]

## Where the time goes

The code above is 5 percent of a real project. Surveys of practitioners consistently find that data work, collecting, loading, cleaning, labeling, and validating, takes roughly half to two-thirds of the time.[^3]

:::howto Getting the data right
1. **Look at it.** Open the raw data and read a hundred rows or view a hundred images. You will find problems no summary statistic shows: duplicated records, a column that changed meaning halfway through, labels from a different version of the task, timestamps in three time zones.
2. **Check the labels.** Label error rates in ten standard benchmark test sets average about 3 percent, from a fraction of a percent (handwritten digits) to 6 percent (ImageNet) and 10 percent (a sketch dataset), and in real business data are often higher. Have two people label a sample independently and measure their agreement; if humans disagree 15 percent of the time, no model can do better than that ceiling, and "accuracy" above it is fitting noise.[^4]
3. **Handle missing values deliberately.** Is a blank "unknown," "not applicable," or "zero"? Impute or flag, but never silently drop rows, which biases the sample toward complete records.
4. **Split before you look further.** Train, validation, test, respecting groups and time (chapter 8). Everything after this step uses only training data.
5. **Document the dataset**: where it came from, who is in it, who is not, what was excluded and why. This is a **datasheet**, and it is where the fairness problems of chapter 21 are caught early or never.[^5]
6. **Version it.** Data changes; a result you cannot reproduce because the data moved is not a result.
:::

## Fine-tuning a pretrained model

For most tasks involving images or text, nobody trains from scratch. The workflow is chapter 11's transfer learning, generalized.

:::howto Adapting a pretrained language model
1. **Try prompting first** (chapter 18). If a good prompt with retrieval solves the task, stop. Fine-tuning is for consistent format, a specialized domain, or lower latency and cost.
2. **Collect examples**: a few hundred to a few thousand (input, ideal output) pairs. Quality matters far more than quantity; a thousand excellent examples beat ten thousand mediocre ones.
3. **Choose a base**: an open-weight model of a size you can serve (1 to 14 billion parameters is typical for a single task).
4. **Use parameter-efficient fine-tuning.** **LoRA** freezes the model and trains small **low-rank** matrices added to each layer (each is the product of two thin matrices, so it has few parameters), about 1 percent of the total, so fine-tuning fits on one GPU and the result is a small file.[^6]
5. **Train briefly**: one to three epochs at a low learning rate (around $10^{-4}$ for LoRA). Watch validation loss; fine-tuning overfits fast.
6. **Evaluate against the prompting baseline** on held-out examples, with the same metric you will use in production. If the fine-tuned model is not clearly better, keep the prompt.
7. **Check what you broke.** Fine-tuning on a narrow task degrades general capabilities and can undo safety training. Test both.
:::

## Evaluation that means something

The metrics of chapters 5 and 8 apply; the practice adds three things. **A test set that resembles production**, including the hard, rare, and adversarial cases, weighted the way they will occur. **Error analysis**: read the model's mistakes, categorize them, and count. Fifty misread examples teach more than any aggregate score, and the categories become the next round's work. **A baseline you must beat**, which for a language-model application means a strong prompt, and for a classical problem means logistic regression or a single rule.

For generative systems, evaluation is unsolved and everyone improvises. Human raters are the gold standard and expensive. **LLM-as-judge**, using a strong model to grade a weaker one's outputs against a rubric, is standard practice and reasonably correlated with human judgment for many tasks, with known biases (judges prefer longer outputs and their own model family).[^7] Build a set of a few hundred representative test prompts with reference answers or rubrics, run every change against it, and treat regression on that set as a bug.

## Deployment, and what goes wrong after

A model in a notebook is an experiment. A model in production is software, and it fails like software plus in ways of its own.

**Training–serving skew.** The preprocessing in production differs slightly from training (a different library version, a different date format), and the model quietly degrades. One preprocessing function, used in both places, tested.

**Drift.** The world changes; the training data does not. Monitor the distribution of inputs and of predictions over time, and the accuracy where you can get ground truth later. Set alerts. Plan to retrain on a schedule or on a trigger.[^8]

**Feedback loops.** A model's predictions change the world it predicts. A fraud model that flags certain transactions means those are the ones investigated, so the next training set contains fraud only where the model looked. A recommender that shows what people click trains on what it showed. These loops entrench a model's early biases and are hard to see from inside.

**Latency and cost.** A model that takes two seconds per prediction cannot serve a web page. **Distillation** trains a small model to imitate a large one; **quantization** stores weights in 8 or 4 bits instead of 16, halving or quartering memory with little accuracy loss; **batching** amortizes GPU cost. Frontier language models are served with all three.[^9]

**Safety in the loop.** Any system that takes actions or shows content to the public needs guardrails outside the model: input filters, output classifiers, rate limits, human review for consequential decisions, and a way to turn it off. Chapter 17 explained why the model's own training cannot be relied on alone.

## What the job is

A working practitioner's week is mostly: talking to the people who own the problem to find out what actually matters; wrangling data; running experiments that mostly fail; reading error cases; and arguing about evaluation. The models are the smallest part. The people who are good at it share three habits: they establish a trivial baseline before anything else; they distrust any result that is too good; and they look at the data, the errors, and the outputs directly rather than through summary numbers. Everything in this guide is in service of those habits.

:::know
- Python plus scikit-learn, XGBoost, PyTorch, and Hugging Face covers nearly all practice; frontier pretraining is done by a dozen organizations, everyone else adapts.
- A complete training loop is: forward, loss, backward, step, on minibatches, evaluated on held-out data. Fifty lines.
- Data work is most of the job. Look at the raw data; measure label noise; split before looking further; write a datasheet.
- Fine-tune only when prompting fails; use LoRA; evaluate against the prompt; check what you broke.
- Evaluate on production-like data, read the errors, beat a baseline. For generative systems, build a test-prompt set and treat regressions as bugs.
- Deployed models fail through skew, drift, and feedback loops. Monitor, retrain, and keep guardrails and a human outside the model.
:::

## Summary

- The practical stack is Python with scikit-learn for classical methods and PyTorch for networks; a full training run is a short loop that instantiates the ideas of chapters 3, 5, 9, and 10.
- Data collection, cleaning, labeling, and documentation dominate the effort and determine the result; label noise sets a ceiling on achievable accuracy.
- Pretrained models are adapted by prompting first, then parameter-efficient fine-tuning when justified, always evaluated against the simpler alternative.
- Evaluation must resemble deployment, include error analysis, and beat a baseline; generative outputs are judged by humans or by rubric-guided models with known biases.
- Production adds skew, drift, feedback loops, cost, and safety concerns that require monitoring, retraining, compression, and guardrails outside the model.

[^1]: Paszke, A. et al. (2019). "PyTorch: An Imperative Style, High-Performance Deep Learning Library." *NeurIPS 32*. [arxiv.org/abs/1912.01703](https://arxiv.org/abs/1912.01703). Pedregosa, F. et al. (2011). "Scikit-learn: Machine Learning in Python." *Journal of Machine Learning Research*, 12, 2825–2830. [jmlr.org](https://jmlr.org/papers/v12/pedregosa11a.html). Wolf, T. et al. (2020). "Transformers: State-of-the-Art Natural Language Processing." *EMNLP 2020 Demos*. [doi:10.18653/v1/2020.emnlp-demos.6](https://doi.org/10.18653/v1/2020.emnlp-demos.6)
[^2]: PyTorch. *Basics tutorial: Build the Neural Network* and *Optimizing Model Parameters*. [pytorch.org/tutorials](https://pytorch.org/tutorials/beginner/basics/intro.html). Karpathy, A. *Neural Networks: Zero to Hero* (video course building the same pipeline from scratch). [karpathy.ai/zero-to-hero.html](https://karpathy.ai/zero-to-hero.html)
[^3]: Anaconda (2022). *State of Data Science 2022*: respondents report about 38 percent of time on data preparation and cleaning and further time on loading and visualization. [anaconda.com](https://www.anaconda.com/resources/whitepapers/state-of-data-science-report-2022). Sambasivan, N. et al. (2021). "'Everyone wants to do the model work, not the data work': Data Cascades in High-Stakes AI." *CHI 2021*. [doi:10.1145/3411764.3445518](https://doi.org/10.1145/3411764.3445518)
[^4]: Northcutt, C. G., Athalye, A., Mueller, J. (2021). "Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks." *NeurIPS 34 Datasets and Benchmarks*. [arxiv.org/abs/2103.14749](https://arxiv.org/abs/2103.14749)
[^5]: Gebru, T. et al. (2021). "Datasheets for Datasets." *Communications of the ACM*, 64(12), 86–92. [doi:10.1145/3458723](https://doi.org/10.1145/3458723). Mitchell, M. et al. (2019). "Model Cards for Model Reporting." *FAT\* '19*, 220–229. [doi:10.1145/3287560.3287596](https://doi.org/10.1145/3287560.3287596)
[^6]: Hu, E. J. et al. (2022). "LoRA: Low-Rank Adaptation of Large Language Models." *ICLR 2022*. [arxiv.org/abs/2106.09685](https://arxiv.org/abs/2106.09685). Dettmers, T., Pagnoni, A., Holtzman, A., Zettlemoyer, L. (2023). "QLoRA: Efficient Finetuning of Quantized LLMs." *NeurIPS 36*. [arxiv.org/abs/2305.14314](https://arxiv.org/abs/2305.14314)
[^7]: Zheng, L. et al. (2023). "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena." *NeurIPS 36 Datasets and Benchmarks*. [arxiv.org/abs/2306.05685](https://arxiv.org/abs/2306.05685)
[^8]: Sculley, D. et al. (2015). "Hidden Technical Debt in Machine Learning Systems." *NeurIPS 28*. [papers.nips.cc](https://papers.nips.cc/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html). Breck, E., Cai, S., Nielsen, E., Salib, M., Sculley, D. (2017). "The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction." *IEEE Big Data 2017*. [doi:10.1109/BigData.2017.8258038](https://doi.org/10.1109/BigData.2017.8258038)
[^9]: Hinton, G., Vinyals, O., Dean, J. (2015). "Distilling the Knowledge in a Neural Network." [arxiv.org/abs/1503.02531](https://arxiv.org/abs/1503.02531). Dettmers, T., Lewis, M., Belkada, Y., Zettlemoyer, L. (2022). "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale." *NeurIPS 35*. [arxiv.org/abs/2208.07339](https://arxiv.org/abs/2208.07339)
