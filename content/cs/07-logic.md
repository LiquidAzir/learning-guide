---
title: Logic, Gates, and Adding
subtitle: How a switch becomes arithmetic. Four gates, one universal building block, an adder built from scratch, and the trick that lets a circuit remember.
part: II · The Machine
---

## How do logical rules become working circuits?

Part I was about computation in the abstract. Part II builds a machine, from the bottom, in five chapters: gates here, a processor in chapter 8, an operating system in chapter 9, a language in chapter 10, and the compiler that connects them in chapter 11. By the end there is nothing left unexplained between a transistor and a running program.

## Two values, three operations

Boolean algebra (chapter 2) has variables that take only two values, written 0 and 1 or false and true, and three basic operations.

| $A$ | $B$ | $A$ AND $B$ | $A$ OR $B$ | NOT $A$ | $A$ XOR $B$ |
|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

**AND** is 1 only when both inputs are; **OR** when at least one is; **NOT** flips its single input; **XOR**, exclusive or, is 1 when the inputs *differ*. That last one is the workhorse of arithmetic and cryptography, and it is worth remembering as "is there exactly an odd number of 1s here."

A table like this defines the operation completely, which is the useful thing about having only two values: a function of $n$ inputs is fully specified by $2^n$ rows, so you can always check exhaustively. This is why hardware can be verified in ways software cannot (chapter 6).

:::math The laws worth knowing
Boolean algebra obeys most of the rules of ordinary algebra, and two that are peculiar to it.

$$A \cdot A = A \qquad A + A = A$$

Using $\cdot$ for AND and $+$ for OR: repeating an input changes nothing. There is no "2" to arrive at.

$$\overline{A \cdot B} = \overline{A} + \overline{B} \qquad \overline{A + B} = \overline{A} \cdot \overline{B}$$

These are **De Morgan's laws**, where the bar means NOT. In words: "not (both)" is the same as "either not"; "not (either)" is the same as "both not." They matter practically because they let any circuit be rewritten using different gates, and because they are the most common source of bugs in written conditions: the opposite of "over 18 and a resident" is "18 or younger **or** not a resident." Someone who is exactly 18 fails the original condition too. Replacing AND with OR is only half the job: you must also negate each condition correctly.
:::

## Gates, and why one of them is enough

A **gate** is a circuit that computes one of these operations on voltages: near zero volts is 0, near the supply voltage is 1. In modern **CMOS** technology each gate is built from complementary pairs of transistors, one type that conducts when its control input is high and one that conducts when it is low, wired so that in a settled state there is never a path from the supply to ground. That is why a chip draws power mainly when it is *switching*, a fact that governs everything in chapter 8. An inverter, the NOT gate, is two transistors; a NAND gate is four.[^1]

**NAND** is AND followed by NOT. It has a remarkable property, proved by Henry Sheffer in 1913 before anyone had a use for it: NAND alone is enough to build everything.[^2] NOT is a NAND with both inputs tied together. AND is a NAND followed by that NOT. OR, by De Morgan, is a NAND of two inverted inputs. Once you have AND, OR, and NOT you have every Boolean function whatsoever, because you can always read a function off its truth table as an OR of ANDs.

That is the whole reduction: **any computation you can specify as a table of outputs can be built from one kind of gate**, and that gate is four transistors. A chip with 200 billion transistors is that idea repeated.

## Adding

Take two bits, $A$ and $B$, and add them. The result can be 0, 1, or 2, so it needs two output bits: a **sum** and a **carry**.

Sum is 1 when the inputs differ, which is XOR. Carry is 1 only when both are 1, which is AND. Two gates, and you have a **half adder**.

To add multi-bit numbers you need to accept a carry coming in from the column to the right, so a **full adder** takes three inputs, $A$, $B$, and carry-in, and produces a sum and a carry-out. It is two half adders and an OR gate.

{{fig:full-adder|A full adder: two XOR gates compute the sum bit, two AND gates and an OR compute the carry out. Chain 64 of these, each one's carry-out feeding the next one's carry-in, and you have the circuit that adds the numbers in a 64-bit processor. The dashed boxes are the two half adders.}}

Wire 64 full adders in a row, each passing its carry to the next, and you can add any two 64-bit numbers. Because two's complement (chapter 3) makes subtraction into addition of a negated value, the same circuit subtracts. Multiplication is repeated shifted addition, division is harder and slower, and a handful of these plus the logic operations make an **arithmetic logic unit**, the part of a processor that actually computes.

The naive chain has a problem: the top bit cannot settle until the carry has rippled through all 64 stages, so the delay grows with the width. Real processors use **carry-lookahead**, which computes in parallel, for each position, whether that position will generate a carry or merely propagate one, turning a delay proportional to $n$ into one proportional to $\log n$. This is the first appearance in this guide of a pattern that recurs everywhere: trade more hardware, or more space, for less time.

## Remembering

Everything so far is **combinational**: outputs depend only on current inputs, and the circuit has no past. A computer needs to remember, and the trick for that is feedback.

Cross-couple two NOR gates, so each one's output feeds the other's input, and the pair has two stable configurations, which can be read as storing a 0 or a 1. Pulses on the two inputs set or reset it. That is a **latch**. Refine it so that it captures its input only at the instant a **clock** signal rises, and you have a **flip-flop**, the standard one-bit memory. A row of flip-flops is a **register**.

A machine built of combinational logic between banks of flip-flops is a **sequential circuit**, and it works in ticks. On each tick, every register hands its contents to the logic; the logic settles; on the next tick the results are captured. The clock period must be at least as long as the slowest path through the logic between two registers, which is why a processor's frequency is set by its worst path, and why chip designers spend their lives hunting for it.

:::key
Three ideas build a computer. A gate computes a Boolean function of its inputs. NAND alone suffices for all of them, so the whole machine is one part repeated. And a cross-coupled pair of gates holds a bit, which turns a calculator into something with a memory and therefore a state. Every processor is these three ideas plus sixty years of optimization.
:::

## From drawings to chips

Nobody has drawn gates by hand since the 1980s. A designer writes in a **hardware description language**, Verilog or VHDL, which looks like code but describes structure and timing rather than a sequence of actions. A **synthesis** tool converts that into a network of gates, minimizing it as it goes; **place and route** decides where each gate physically sits and how the wires run; then timing analysis checks that every path settles within the clock period, across expected variations in temperature, voltage, and manufacturing.

Two constraints dominate the result, and they are the opposite of the intuitive ones. Wires, not gates, dominate delay and power at modern sizes, because a signal crossing a large chip takes longer than a gate takes to switch. And the design must be correct before it is built: a fabricated chip cannot be patched, a mask set costs tens of millions of dollars, and a respin costs months. This is why the hardware industry adopted formal verification decades before the software industry took it seriously, an attitude change usually dated to Intel's 1994 floating-point division bug, which was found in the field, cost about $475 million to recall, and could have been caught by exhaustive checking of a lookup table.[^3]

## The numbers

| Thing | Scale |
|---|---|
| Transistors in a NAND gate | 4 |
| Transistors on a large 2025-class processor | ~100–200 billion |
| Switching delay of one gate | a few picoseconds ($10^{-12}$ s) |
| Clock period at 4 GHz | 250 picoseconds |
| Logic depth between registers, typically | 10–20 gates |
| Cost of a modern mask set | tens of millions of dollars |

## What we still argue about

Whether to keep pushing the clock or spend the transistors on width; the industry chose width in 2005 and has not gone back (chapter 8). Whether asynchronous designs, with no global clock at all, will ever repay their difficulty. And how to handle the fact that as devices shrink, individual transistors become measurably unreliable, so that error tolerance is migrating from the outside of the system towards its centre.

:::try Put the idea to work
An application admits someone only if they are over 18 AND a resident. Write the rejection condition, including the boundary age.

:::answer Show the reasoning
Reject if the person is 18 or younger OR is not a resident. De Morgan's law changes AND to OR while negating both parts. Someone exactly 18 is an important check: “under 18” would wrongly leave that boundary case out.
:::
:::

## Summary

- Boolean algebra has two values and three operations, and a function of $n$ inputs is fully described by $2^n$ rows, so hardware can be checked exhaustively.
- De Morgan's laws let any circuit be rebuilt with other gates, and explain the most common mistake in negating a condition.
- A CMOS gate burns power mainly while switching; a NAND is four transistors, and NAND alone can build every Boolean function.
- XOR gives the sum bit and AND the carry: two gates make a half adder, two half adders and an OR make a full adder, and 64 of those make a machine's adder.
- Carry-lookahead trades hardware for time, turning a delay proportional to width into one proportional to its logarithm.
- Cross-coupled gates store a bit; clocked flip-flops and combinational logic between them make a sequential machine, whose clock speed is set by its slowest path.

[^1]: Weste, N., Harris, D. (2010). *CMOS VLSI Design: A Circuits and Systems Perspective*, 4th ed. Boston: Addison-Wesley. Wanlass, F., Sah, C. T. (1963). "Nanowatt logic using field-effect metal-oxide semiconductor triodes." *IEEE International Solid-State Circuits Conference*, 32–33. [doi:10.1109/ISSCC.1963.1157450](https://doi.org/10.1109/ISSCC.1963.1157450)
[^2]: Sheffer, H. M. (1913). "A set of five independent postulates for Boolean algebras, with application to logical constants." *Transactions of the American Mathematical Society*, 14(4), 481–488. [doi:10.2307/1988701](https://doi.org/10.2307/1988701). Nisan, N., Schocken, S. (2021). *The Elements of Computing Systems*, 2nd ed. Cambridge, MA: MIT Press, chapters 1–3.
[^3]: Harris, D. M., Harris, S. L. (2021). *Digital Design and Computer Architecture: RISC-V Edition*. Cambridge, MA: Morgan Kaufmann. On the Pentium FDIV bug and its effect on verification practice: Bryant, R. E. (1996). "Bit-level analysis of an SRT divider circuit." *Proceedings of the 33rd Design Automation Conference*, 661–665. [doi:10.1145/240518.240641](https://doi.org/10.1145/240518.240641); Intel's own charge for the recall was $475 million against fourth-quarter 1994 earnings.
