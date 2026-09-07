---
title: How a Processor Works
subtitle: Fetch, decode, execute; the pipeline and its speculations; and the memory hierarchy, which is the single most important thing to understand about the speed of any program.
part: II · The Machine
---

## Recap

Chapter 7 built an adder and a register out of gates. This chapter assembles them into a processor, and then explains why the processor spends most of its life waiting.

## The contract

A processor's **instruction set architecture** (ISA) is the list of operations it understands, the registers it has, and how memory is addressed. It is a contract: software written to it will run on any chip that implements it, including chips designed decades later by other companies. That contract is why a program compiled in 1995 still runs, and why the x86 instruction set, designed in 1978, is still being extended.

**Registers** are the processor's own small store, typically 16 to 32 of them, each 64 bits, built from the flip-flops of chapter 7. They are the only memory the arithmetic unit can reach directly and quickly. Everything else, in a sense this chapter will make precise, is far away.

A machine instruction is a number (chapter 3), and it says roughly: take the values in these registers, do this operation, put the result in that register. A short sequence, in RISC-V assembly with each line explained:

```
lw   t0, 0(a0)    # load a 64-bit word from the address in a0 into register t0
lw   t1, 8(a0)    # load the next word into t1
add  t2, t0, t1   # add them, result in t2
sw   t2, 16(a0)   # store t2 back to memory, 16 bytes past a0
```

Note the shape: memory is touched only by explicit load and store instructions, and arithmetic happens only between registers. That discipline is the defining choice of **RISC** (reduced instruction set computer) designs, against **CISC** designs like x86 where a single instruction may read memory, compute, and write back. The argument ran for thirty years and ended in a draw that looks like a RISC victory: x86 chips today decode their complicated instructions into simple internal operations and execute those, so the RISC machine is inside, wearing a CISC coat. ARM, which powers essentially every phone, and RISC-V, an open standard anyone may implement without a licence, are RISC designs; RISC-V's growth since 2015 is the first serious challenge to the licensing model that both ARM and Intel are built on.[^1]

## The cycle, and then the pipeline

The basic loop is: **fetch** the next instruction from memory, **decode** what it means, **execute** it, access memory if needed, and **write back** the result. Done strictly one at a time, each instruction would take five clock ticks and four fifths of the hardware would idle at any moment.

So processors **pipeline**: like an assembly line, they start fetching instruction 2 while instruction 1 is being decoded. Five stages in flight means roughly five times the throughput at the same clock speed. Modern designs have fifteen to twenty stages.

Pipelines have a problem: branches. When the machine reaches `if`, it does not yet know which way to go, and the pipeline needs the answer several ticks before it will have it. The solution is to guess. A **branch predictor** watches the history of each branch and predicts its direction, and modern predictors are right well over 95 percent of the time. On a correct guess, nothing is lost. On a wrong one, the pipeline is flushed and fifteen or so ticks are wasted.

Two further tricks extract more: **superscalar** execution issues several instructions per tick to duplicated units, and **out-of-order** execution runs later instructions early if their inputs are ready, tracking dependencies and committing results in the original order so the program cannot tell. A modern core can have hundreds of instructions in flight.

:::warning Speculation leaks
In January 2018 two families of attacks, **Meltdown** and **Spectre**, showed that speculation is not invisible after all. The processor discards the *results* of mis-speculated work but not its *effects on the caches*, and an attacker who can time memory accesses precisely can read out what was speculatively touched, extracting data from other programs or the kernel. These were not implementation bugs in one chip; they were consequences of an optimization present in nearly every high-performance processor built since the mid-1990s. Mitigations cost real performance, new variants have kept appearing since, and the episode permanently changed how architects think about what a "correct" processor is.[^2]
:::

## The thing that actually determines speed

Here is the fact that governs the performance of most real programs. Processors got much faster than memory, decade after decade, and the gap is now enormous.

{{fig:memory-hierarchy|Latency on a logarithmic axis, so each gridline is a thousandfold. The distance from a register to main memory is large; the distance from main memory to storage and the network is very much larger. A processor that waits on main memory for every operation runs at a small fraction of its rated speed, and one that waits on the network is not really computing at all.}}

| Level | Typical size | Typical latency | If one cycle were one second |
|---|---|---|---|
| Register | ~1 KB | 0 cycles | now |
| L1 cache | 32–64 KB | ~1 ns | 1 second |
| L2 cache | 0.5–2 MB | ~4 ns | 4 seconds |
| L3 cache | 8–64 MB | ~15 ns | 15 seconds |
| Main memory (DRAM) | 8–128 GB | ~80 ns | a minute and a half |
| Solid-state drive | 0.5–8 TB | ~100 μs | a day and a half |
| Same-datacentre network round trip | — | ~0.5 ms | a week |
| Spinning disk seek | — | ~5 ms | two months |
| Round trip across an ocean | — | ~150 ms | five years |

These are order-of-magnitude figures and vary by hardware, but the *ratios* are stable and are what you should remember.[^3]

**Caches** exist to hide this. A cache is a small fast copy of recently used memory, and it works only because real programs exhibit **locality**: they reuse the same data soon (temporal locality) and use data next to what they just used (spatial locality). Memory is moved in **cache lines** of 64 bytes, not single bytes, precisely to exploit the second kind.

The practical consequence is large and often invisible in the source code. Walking a large two-dimensional array along rows, which follows how it is laid out in memory, can be several times faster than walking the identical array down columns, which touches a new cache line on every step. Same operations, same count, same code apart from the order of two loops. A linked list of a million items scattered across memory can be an order of magnitude slower to traverse than an array holding the same million items, even though textbooks give both the same complexity (chapter 12). When the theory of chapter 13 says two algorithms are equivalent and measurement says otherwise, this is usually why.

## Many cores, and the ceiling on what they buy

Around 2005 the free lunch ended. **Dennard scaling**, the property that smaller transistors also drew proportionally less power, broke down: leakage current stopped shrinking, so pushing clocks higher meant power densities approaching those of a rocket nozzle. Clock speeds have sat between roughly 3 and 6 GHz ever since. The industry turned sideways, putting multiple **cores** on a chip and leaving programmers to find the parallelism.

How much does that buy? Less than you would hope.

:::math Amdahl's law
$$S = \frac{1}{(1-p) + \dfrac{p}{n}}$$

$S$ is the overall speedup. $p$ is the fraction of the work that can be done in parallel, between 0 and 1, so $1-p$ is the stubbornly serial fraction. $n$ is the number of processors.

If 95 percent of a program parallelizes perfectly and you have 1,000 cores, $S = 1/(0.05 + 0.00095) \approx 19.6$. A thousandfold increase in hardware buys a twentyfold speedup, and adding more cores cannot ever take it past 20, because $1/(1-p) = 20$ is the ceiling. Gene Amdahl made this argument in 1967 against the enthusiasts of his day, and it has held up.[^4]
:::

The escape from Amdahl's law is to make the problem bigger rather than the same problem faster, which is what graphics, simulation, and machine learning do. That is the case for **GPUs**: instead of a few complex cores optimized for finishing one instruction stream quickly, thousands of simple ones optimized for total throughput, all executing the same instruction on different data. A GPU is a poor choice for running your operating system and an excellent one for multiplying large matrices, which is why it ended up at the centre of modern AI ([how models are trained](#/ai/training)).

## Where the hardware is in 2026

Transistors are still shrinking, more slowly and far more expensively. Volume production at the 2-nanometer class began at the end of 2025, using gate-all-around transistors in which the channel is wrapped by the gate on all sides; the "2 nanometer" name is marketing rather than a measured dimension, as no feature on the chip is that size.[^5] A large data-centre accelerator now carries on the order of 200 billion transistors, made as two dies bonded together because a single die has hit the size limit of the lithography equipment. The fastest measured supercomputer, as of the June 2026 list, sustains 2.198 exaflops, meaning $2.198 \times 10^{18}$ floating-point operations per second.[^6]

The binding constraint has shifted from transistors to energy. Data centres consumed roughly 415 terawatt-hours in 2024, about 1.5 percent of world electricity, and the projections for the rest of this decade are steep and contested.[^7] Chip designers now optimize operations per joule rather than operations per second, which is also why specialized accelerators keep appearing: a circuit built for exactly one job beats a general-purpose one by one or two orders of magnitude in energy, and the cost is that it can only do that job.

## What we still argue about

Whether general-purpose processors will keep being displaced by accelerators, and how much of computing can tolerate hardware that must be replaced when the workload changes. Whether speculation can be made secure without giving up its performance. Whether RISC-V's open licensing displaces the incumbents or fragments into incompatible dialects. And how long an industry can keep planning around a scaling curve that stopped delivering free speed twenty years ago.

## Summary

- The instruction set is a contract between software and every chip that implements it; RISC designs won the argument technically, and x86 now translates its instructions into RISC-like operations internally.
- Pipelining overlaps instructions and needs to guess at branches; superscalar and out-of-order execution keep hundreds of instructions in flight.
- Speculation leaves traces in the cache, which is what Spectre and Meltdown exploited; the problem is architectural, not a bug in one product.
- Memory is the bottleneck: L1 cache is about one nanosecond away and main memory about eighty, so caches and locality often matter more than the choice of algorithm.
- Dennard scaling ended around 2005, clocks stalled, and parallelism took over; Amdahl's law caps what that buys at $1/(1-p)$.
- In 2026: 2-nanometer-class production, roughly 200 billion transistors on a large accelerator, 2.2 exaflops at the top of the supercomputer list, and energy as the binding constraint.

[^1]: Patterson, D. A., Hennessy, J. L. (2020). *Computer Organization and Design: RISC-V Edition*, 2nd ed. Cambridge, MA: Morgan Kaufmann. Hennessy, J. L., Patterson, D. A. (2019). "A New Golden Age for Computer Architecture." *Communications of the ACM*, 62(2), 48–60. [doi:10.1145/3282307](https://doi.org/10.1145/3282307)
[^2]: Kocher, P. et al. (2019). "Spectre Attacks: Exploiting Speculative Execution." *IEEE Symposium on Security and Privacy*, 1–19. [doi:10.1109/SP.2019.00002](https://doi.org/10.1109/SP.2019.00002). Lipp, M. et al. (2018). "Meltdown: Reading Kernel Memory from User Space." *27th USENIX Security Symposium*, 973–990. [usenix.org](https://www.usenix.org/conference/usenixsecurity18/presentation/lipp)
[^3]: Bryant, R. E., O'Hallaron, D. R. (2015). *Computer Systems: A Programmer's Perspective*, 3rd ed. Boston: Pearson, chapter 6. Latency figures cross-checked against Colin Scott's "Latency Numbers Every Programmer Should Know" interactive chart. [colin-scott.github.io](https://colin-scott.github.io/personal_website/research/interactive_latency.html)
[^4]: Amdahl, G. M. (1967). "Validity of the single processor approach to achieving large scale computing capabilities." *AFIPS Spring Joint Computer Conference*, 483–485. [doi:10.1145/1465482.1465560](https://doi.org/10.1145/1465482.1465560). Esmaeilzadeh, H. et al. (2011). "Dark silicon and the end of multicore scaling." *ISCA '11*, 365–376. [doi:10.1145/2000064.2000108](https://doi.org/10.1145/2000064.2000108)
[^5]: TSMC, "2nm Technology" (N2), volume production from the fourth quarter of 2025. [tsmc.com](https://www.tsmc.com/english/dedicatedFoundry/technology/logic/l_2nm). On node names as marketing rather than measurement: Moore, S. K. (2020). "A Better Way to Measure Progress in Semiconductors." *IEEE Spectrum*. [spectrum.ieee.org](https://spectrum.ieee.org/a-better-way-to-measure-progress-in-semiconductors)
[^6]: TOP500 list, June 2026 (67th edition). [top500.org](https://www.top500.org/lists/top500/2026/06/). NVIDIA Blackwell architecture: two reticle-limited dies of about 104 billion transistors each. [nvidia.com](https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/)
[^7]: International Energy Agency (2025). *Energy and AI*. Paris: IEA. [iea.org](https://www.iea.org/reports/energy-and-ai). The 2024 baseline is about 415 TWh, roughly 1.5 percent of global electricity demand.
