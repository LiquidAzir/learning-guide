---
title: Glossary and Numbers
subtitle: Every bolded term in one place, the quantities worth memorizing, the formulas that recur, and the confusions this guide has tried to clear up.
part: V · The Edge
---

## How to use this

The glossary gives a one-line definition and the chapter where the term is introduced, by number. The numbers section is the part worth actually memorizing: knowing that main memory is about eighty nanoseconds away and a transatlantic round trip about 150 milliseconds lets you estimate the performance of a design before building it, which is a more useful skill than any single algorithm.

## Glossary

| Term | Meaning | Ch. |
|---|---|---|
| ACID | Atomicity, consistency, isolation, durability: the guarantees of a database transaction | 16 |
| Algorithm | A finite, unambiguous procedure that terminates with a correct answer on every legal input | 5 |
| Aliasing | False low frequencies produced by sampling below twice the highest frequency present | 4, 19 |
| Amortized cost | Average cost per operation over a sequence, allowing individual operations to be expensive | 12 |
| Amplitude | The complex number attached to each outcome of a quantum state; its squared size is a probability | 21 |
| Atomic operation | One that no other thread can observe partway through | 15 |
| Big-O | An upper bound on how cost grows with input size, ignoring constants | 12, 14 |
| Binary search | Halving the search range each step in sorted data; $O(\log n)$ | 13 |
| Bit | A thing with two states; the unit of information | 3, 4 |
| Block cipher | A keyed, reversible transformation of a fixed-size block of bits | 18 |
| Bloom filter | A compact set membership test that may say yes wrongly but never no wrongly | 12 |
| BQP | What a quantum computer can solve efficiently; believed not to contain NP-complete problems | 21 |
| B-tree | A tree whose nodes are the size of a storage block, so a billion keys sit three or four reads away | 12, 16 |
| Byte | Eight bits; 256 possible values | 3 |
| Cache | A small fast copy of recently used memory; works because programs have locality | 8 |
| Cache line | The unit memory moves in, usually 64 bytes | 8 |
| CAP | During a network partition, a system must choose availability or consistency | 15 |
| Church–Turing thesis | Every reasonable model of computation computes the same set of functions | 5 |
| Compiler | A program that translates a language into a lower-level one, usually machine code | 11 |
| Concurrency | Several activities in progress at once, not necessarily running simultaneously | 15 |
| Consensus | Getting distributed nodes to agree on one value despite failures | 15 |
| Context switch | Saving one process's state and loading another's; costs a few microseconds plus cold caches | 9 |
| CRDT | A data type whose merge rule guarantees replicas converge regardless of update order | 15 |
| Decidable | Some algorithm always halts with the correct yes or no | 6 |
| Deadlock | Threads each holding what another needs, all waiting forever | 15 |
| Dennard scaling | Smaller transistors also use proportionally less power; ended around 2005 | 2, 8 |
| Entropy | Average information per symbol, $-\sum p_i \log_2 p_i$; the floor on lossless compression | 4 |
| Fetch–decode–execute | The basic processor cycle | 8 |
| Finite automaton | A machine with states and no other memory; recognizes regular languages | 5 |
| Floating point | Sign, fraction, and biased exponent; approximates real numbers and cannot store most decimals exactly | 3 |
| Garbage collection | Automatic reclamation of memory no longer reachable | 10 |
| Halting problem | Deciding whether an arbitrary program stops; proved impossible in 1936 | 6 |
| Hash function | Maps arbitrary input to a fixed-size value; cryptographic ones are hard to invert or collide | 12, 18 |
| Hash table | Expected constant-time lookup by exact key; worst case linear | 12 |
| Homogeneous coordinates | Adding a fourth number to a 3D point so translation and perspective become matrix multiplication | 19 |
| Idempotent | Doing it twice has the same effect as doing it once | 15 |
| Index | An auxiliary structure that turns a table scan into a few block reads | 16 |
| Instruction set architecture | The contract between software and every processor implementing it | 8 |
| Interference | Amplitudes cancelling or reinforcing; the actual resource in quantum algorithms | 21 |
| Isolation level | How much concurrent transactions may see of each other; usually weaker than serializable by default | 16 |
| Journaling | Writing intent to a log before making a change, so a crash can be recovered | 9 |
| Kernel | The part of an operating system running in the privileged processor mode | 9 |
| Kolmogorov complexity | The length of the shortest program that outputs a given object; uncomputable | 4, 22 |
| Lambda calculus | Computation from variables, functions, and substitution; equivalent to Turing machines | 5 |
| Latency vs bandwidth | Time until the first byte arrives vs bytes per second thereafter; they improve at different rates | 8, 17 |
| Linearizability | Operations appear to take effect instantaneously, in some order consistent with real time | 15 |
| Locality | Programs reuse recent data and nearby data; the reason caches work | 8 |
| Lossless / lossy | Compression that reconstructs exactly / that discards what will not be noticed | 4 |
| LSM-tree | A write-optimized storage structure that buffers and merges sorted files | 16 |
| Memory model | The rules about which reorderings of memory operations other threads may observe | 15 |
| Microkernel | A kernel with only the minimum in privileged mode; drivers run as ordinary processes | 9 |
| Middlebox | A device that inspects traffic in transit; the reason protocols ossify | 17 |
| Modularity | Splitting a system so each part hides a decision likely to change | 20 |
| Moore's law | An economic observation from 1965 about component counts per chip doubling | 2, 8 |
| NAND | Not-and; a single gate type sufficient to build every Boolean function | 7 |
| NP | Problems whose proposed answers can be checked in polynomial time | 14 |
| NP-complete | In NP, and everything in NP reduces to it; SAT was the first | 14 |
| One-way function | Easy to compute, hard to invert; assumed to exist, never proved | 18, 22 |
| Out-of-order execution | Running later instructions early when their inputs are ready, committing in order | 8 |
| P | Problems solvable in polynomial time; the working definition of tractable | 14 |
| Packet switching | Chopping messages into independently routed pieces that share every link | 17 |
| Page | The unit of virtual memory mapping, usually 4 kilobytes | 9 |
| Pipelining | Overlapping the stages of successive instructions, like an assembly line | 8 |
| Post-quantum cryptography | Public-key schemes believed safe against quantum attack; standardized from 2024 | 18 |
| Priority inversion | A high-priority task blocked by a low-priority one holding a lock | 15 |
| Quorum | A subset large enough that any two of them overlap; usually a majority | 15 |
| Race condition | A result that depends on the unpredictable interleaving of concurrent operations | 15 |
| Rasterization | Finding which pixels a triangle covers and shading them; fast and locally blind | 19 |
| Reduction | Translating one problem into another; the tool for proving hardness | 14 |
| Register | The processor's own fastest storage, a few dozen words | 8 |
| Rendering equation | The integral defining the light leaving a point; all rendering approximates it | 19 |
| Rice's theorem | Every non-trivial property of a program's behaviour is undecidable | 6 |
| SAT | Deciding whether a Boolean formula can be made true; the first NP-complete problem | 14 |
| Semantics | What a program means, as opposed to how it is written | 10 |
| Serializability | Concurrent transactions produce the same result as some sequential order | 16 |
| Side channel | Leakage through timing, power, or cache state rather than through the interface | 8, 18 |
| Speculation | Guessing a branch's outcome and executing ahead; the basis of Spectre | 8 |
| SSA form | An intermediate representation where each variable is assigned exactly once | 11 |
| Static vs dynamic typing | Checking types before running vs while running | 10 |
| System call | The controlled entry point from a program into the kernel; costs about a microsecond | 9 |
| TCP | Turns unreliable packets into an ordered reliable byte stream, with congestion control | 17 |
| Threshold theorem | Below a certain physical error rate, more physical qubits drive logical error arbitrarily low | 21 |
| Transaction | A group of operations that happens entirely or not at all | 16 |
| Turing machine | States, a tape, a head, and a rule table; the standard definition of computation | 5 |
| Two's complement | Representing negatives by giving the top bit a negative weight, so one adder handles both signs | 3 |
| Undecidable | No algorithm can always answer correctly and terminate | 6 |
| Undefined behaviour | Situations a language says cannot occur, so optimizers may assume they do not | 11 |
| Universal machine | One fixed machine that simulates any other given its description; the stored-program idea | 5 |
| UTF-8 | Variable-length encoding of Unicode; identical to ASCII for the first 128 characters | 3 |
| Virtual memory | Per-process address maps giving isolation, sharing, and overcommitment | 9 |
| Write-ahead log | Record the intended change durably before making it | 16 |
| Z-buffer | A per-pixel depth store that resolves visibility regardless of drawing order | 19 |

## The numbers worth knowing

### Time, at every scale

| Operation | Time | Scaled up a billion times |
|---|---|---|
| One clock cycle at 3 GHz | 0.33 ns | a third of a second |
| L1 cache hit | ~1 ns | 1 second |
| Branch mispredict | ~5 ns | 5 seconds |
| L3 cache hit | ~15 ns | 15 seconds |
| Main memory access | ~80 ns | a minute and a half |
| System call | ~1 μs | 17 minutes |
| Context switch | 1–5 μs | up to an hour |
| SSD random read | ~100 μs | a day and a half |
| Same-datacentre round trip | ~0.5 ms | a week |
| Spinning disk seek | ~5 ms | two months |
| Round trip London to New York | ~70 ms | two years |
| Round trip across the Pacific | ~150 ms | five years |
| One frame at 60 Hz | 16.7 ms | six months |

### Sizes and limits

| Quantity | Value |
|---|---|
| Values in $n$ bits | $2^n$ |
| 8 / 16 / 32 / 64 bits | 256 / 65,536 / ~4.29 billion / ~$1.8\times10^{19}$ |
| Signed 32-bit range | −2,147,483,648 to 2,147,483,647 |
| Double precision | 1 sign + 11 exponent + 52 fraction bits; 15–17 decimal digits |
| Unicode 18.0 | 172,808 characters |
| Cache line | 64 bytes |
| Virtual memory page | 4 KiB (larger "huge pages" also common) |
| Ethernet payload | 1,500 bytes |
| IPv4 / IPv6 address | 32 bits / 128 bits |
| Transistors, large 2025-class chip | ~100–200 billion |
| Transistors in a NAND gate | 4 |
| Linux kernel source | over 40 million lines |
| Fastest supercomputer, June 2026 | 2.198 exaflops |
| Data centres, 2024 electricity | ~415 TWh, ~1.5% of world total |
| Landauer limit at 300 K | $2.9\times10^{-21}$ J per bit erased |
| $BB(5)$ | 47,176,870 |

### Prefixes, and the disagreement

| Prefix | Decimal | Binary prefix | Value |
|---|---|---|---|
| kilo (k) | $10^3$ | kibi (Ki) | $2^{10}$ = 1,024 |
| mega (M) | $10^6$ | mebi (Mi) | $2^{20}$ ≈ 1.049 million |
| giga (G) | $10^9$ | gibi (Gi) | $2^{30}$ ≈ 1.074 billion |
| tera (T) | $10^{12}$ | tebi (Ti) | $2^{40}$ ≈ 1.100 trillion |

Storage manufacturers use the decimal column and most operating systems report the binary one, which is why a drive sold as 2 TB shows as about 1.82 TiB. The binary prefixes were standardized in 1999 and almost nobody uses them in speech.

### How growth rates feel

| $n$ | $\log_2 n$ | $n \log_2 n$ | $n^2$ | $2^n$ |
|---|---|---|---|---|
| 10 | 3.3 | 33 | 100 | 1,024 |
| 100 | 6.6 | 664 | 10,000 | $1.3\times10^{30}$ |
| 1,000 | 10 | 9,966 | $10^6$ | $1.1\times10^{301}$ |
| 1,000,000 | 20 | $2\times10^7$ | $10^{12}$ | — |

## The formulas

:::formulas Everything with a symbol in it
| Formula | What it says | Ch. |
|---|---|---|
| $n = \sum_i b_i 2^i$ | Value of a binary number | 3 |
| $x = (-1)^s \times 1.f \times 2^{e-1023}$ | A double-precision float | 3 |
| $H = -\sum_i p_i \log_2 p_i$ | Entropy: average bits per symbol, and the compression floor | 4 |
| $C = B \log_2(1 + S/N)$ | Channel capacity; bandwidth beats power | 4 |
| $f_s > 2f_{\max}$ | Sampling rate needed to reconstruct a signal exactly | 4 |
| $\overline{A \cdot B} = \overline{A} + \overline{B}$ | De Morgan: not-both is either-not | 7 |
| $\delta : Q \times \Gamma \rightarrow Q \times \Gamma \times \{L,R\}$ | A Turing machine's rule table | 5 |
| $f(n) = O(g(n))$ if $f(n) \le c\,g(n)$ beyond some $n_0$ | Big-O, stated exactly | 14 |
| $\log_2(n!) \approx n\log_2 n - 1.44n$ | Lower bound on comparison sorting | 13 |
| $S = 1/((1-p) + p/n)$ | Amdahl's law: parallel speedup, capped at $1/(1-p)$ | 8 |
| $1 + 2 + 4 + \dots + n < 2n$ | Why doubling makes appends amortized constant | 12 |
| $w \leftarrow w+1$ per round trip; $w \leftarrow w/2$ on loss | TCP congestion control | 17 |
| $R + W > N$ | Quorum overlap in a replicated system | 15 |
| $g^{ab} \bmod p$ | The shared secret in Diffie–Hellman | 18 |
| $c = m^e \bmod n$, $m = c^d \bmod n$ | RSA encryption and decryption | 18 |
| $\lvert\alpha\rvert^2 + \lvert\beta\rvert^2 = 1$ | A qubit's amplitudes are normalized | 21 |
| $\sqrt{N}$ | Grover's search cost, and proved optimal | 21 |
| $L_o = L_e + \int_\Omega f_r L_i (\omega_i \cdot \mathbf{n})\, d\omega_i$ | The rendering equation | 19 |
| $E = k_B T \ln 2$ | Minimum energy to erase one bit | 22 |
:::

## Confusions this guide has tried to clear up

- **Undecidable is not the same as hard.** No procedure can be always-correct, always-terminating, and always-conclusive; for any particular case you may still know the answer (chapter 6).
- **NP does not mean "not polynomial."** It means non-deterministic polynomial, and it is the class of problems whose answers are easy to *check* (chapter 14).
- **NP-complete does not mean unsolvable in practice.** It is a worst-case statement, and solvers routinely handle industrial instances with millions of variables (chapter 14).
- **A quantum computer does not try all answers at once.** It arranges interference so that wrong answers cancel, which is why so few quantum algorithms exist (chapter 21).
- **Big-O is not a measurement.** Two $O(n)$ algorithms can differ by a factor of fifty because of cache behaviour (chapters 8 and 12).
- **Encryption is not authentication.** An attacker who cannot read your data may still be able to modify it unless the ciphertext is authenticated (chapter 18).
- **Availability and consistency are only in tension during a partition.** The rest of the time the real trade is against latency (chapter 15).
- **A container is not a security boundary of the same strength as a virtual machine** (chapter 9).
- **Compiled and interpreted are properties of implementations, not of languages** (chapter 10).
- **"Secure" is meaningless without naming the adversary and their powers** (chapter 18).

## Where to go next

The primary sources cited throughout are the best next step; most of the foundational papers are short, and several are extraordinary pieces of writing — Turing's 1936 paper, Shannon's 1948 paper, Codd's 1970 paper, and Thompson's 1984 lecture in particular. For textbooks, the ones cited most often here are Sipser on theory, Patterson and Hennessy on architecture, the free *Operating Systems: Three Easy Pieces*, Cormen and colleagues on algorithms, and Kleppmann on data systems. And the AI branch of the subject has [its own guide here](#/ai/start-here).
