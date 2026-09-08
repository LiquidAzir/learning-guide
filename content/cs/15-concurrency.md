---
title: Concurrency and Distributed Systems
subtitle: What goes wrong when more than one thing happens at once, why there is no such thing as "now" across a network, and the impossibility result that shapes every distributed database.
part: III · Methods
---

## Why is shared state difficult when events overlap?

Chapter 8 explained why we have many cores instead of faster ones, which makes concurrency compulsory rather than optional. This chapter is about the consequences, first inside one machine and then across many, where the problems change character entirely because parts can fail independently.

## The fundamental problem

Two threads run this, on a shared counter that starts at 0:

```
read counter into a register    # both read 0
add 1 to the register           # both compute 1
write the register to counter   # both write 1
```

The counter ends at 1, not 2. This is a **race condition**: the result depends on the interleaving of operations, and the interleaving is not under your control. It is not a rare accident; it is the default behaviour, and it becomes visible only sometimes, which is what makes such bugs notorious.

The underlying issue is that "increment" is not **atomic**: it is three machine operations, and another thread can act between them. An atomic operation is one that no other thread can observe halfway through. Processors provide a few directly, most importantly **compare-and-swap**: "if this location still holds the value I last read, replace it; otherwise tell me it changed." Everything else is built on those.

## Locks, and what they cost

A **mutex** (mutual exclusion lock) lets one thread at a time into a critical section. Dijkstra posed and solved the problem in 1965 for software alone; today the hardware helps.[^1]

Locks introduce their own failures.

**Deadlock**: thread A holds lock 1 and wants lock 2, thread B holds lock 2 and wants lock 1, and both wait forever. Four conditions must all hold for deadlock, identified in 1971: mutual exclusion, holding while waiting, no preemption, and a circular wait. Break any one and deadlock is impossible; the usual choice in practice is to break the circular wait by requiring every thread to take locks in a fixed global order.[^2]

**Livelock**: threads keep acting politely and making no progress, like two people repeatedly stepping aside into each other's path.

**Priority inversion**: a low-priority thread holds a lock that a high-priority thread needs, and a medium-priority thread — which needs no lock at all — preempts the low one, so the high-priority thread waits on a thread that is not running.

:::story The Mars rover that kept rebooting
In July 1997 the Pathfinder lander was on Mars and repeatedly resetting itself, losing data each time. The cause was textbook priority inversion. A high-priority bus-management task needed a mutex held by a low-priority meteorological task; a medium-priority communications task kept preempting the low-priority one; the bus task's watchdog timer expired and reset the machine.

The engineers reproduced it on the ground in a replica, found it after several days of running with tracing on, and uploaded a one-line change enabling **priority inheritance**, in which a thread holding a lock temporarily inherits the priority of the highest-priority thread waiting for it. The fix was radioed to another planet and it worked. The debugging feature that made diagnosis possible had been left enabled only because a manager insisted, over objections that it cost performance.[^3]
:::

The deeper problem is that locks do not compose. Two individually correct locked components, used together, can deadlock, and there is no way to check this locally. That is the strongest argument for the alternatives.

## The alternatives

**Lock-free** structures use compare-and-swap in a retry loop and guarantee that *some* thread always makes progress. They are fast and famously hard to get right; the classic trap is the ABA problem, where a value changes to something else and back, so compare-and-swap succeeds although the world has moved on.

**Message passing.** Do not share memory; send copies. Threads or processes own their state and communicate through channels or mailboxes, so there is nothing to race on. This is the model of Erlang's actors, Go's channels, and every distributed system whether it wants to be or not.

**Async/await.** For work that is waiting on input and output rather than computing, one thread can juggle thousands of operations by suspending each at its waiting points. This is how modern servers handle many connections. It is concurrency without parallelism: things overlap, but only one thing runs at a time, so ordinary races are avoided.

**Immutability.** If data never changes, it can be shared freely (chapter 10).

:::warning Your program does not run in the order you wrote it
Both the compiler (chapter 11) and the processor (chapter 8) reorder memory operations to go faster, and each is required only to preserve the behaviour of a *single* thread. Another thread can therefore observe your writes in a different order than you issued them. This is not a bug; it is the **memory model**, and every language now specifies one. The practical rule: any variable touched by more than one thread without a lock must be declared atomic, which tells the compiler and processor which reorderings are forbidden. Ordinary variables shared across threads have no guarantees at all, and code that "works" this way is working by luck.
:::

## Across machines, everything changes

A distributed system differs from a concurrent program in one way that changes everything: **partial failure**. A single machine either runs or crashes. In a distributed system one node can be down, or slow, or reachable from some peers and not others, and — the crucial part — **from outside you cannot tell these apart**. A node that has not answered in ten seconds may be dead, or may be about to answer.

The consequences were collected as the fallacies of distributed computing, a list of assumptions everyone makes and that are all false: the network is reliable, latency is zero, bandwidth is infinite, the network is secure, topology does not change, there is one administrator, transport cost is zero, the network is homogeneous.

## There is no "now"

Physical clocks drift, and synchronizing them over a network has irreducible uncertainty, since a message's travel time cannot be measured exactly. So "which event happened first" is often not answerable.

Leslie Lamport's 1978 answer was to give up on real time and define an ordering from causality alone: event A **happens-before** event B if they are in the same process with A first, or if A is the sending of a message that B receives, plus transitivity. Events not related this way are **concurrent**, and no ordering between them is meaningful. Logical clocks implement this with counters; vector clocks extend it so that you can also tell when two events are genuinely concurrent.[^4] This is the foundation of essentially every distributed database and version control system.

Google's Spanner takes the other route and buys real time with hardware: atomic clocks and GPS receivers in every data centre, with an API that returns not a timestamp but an *interval* guaranteed to contain the true time, typically a few milliseconds wide. To commit a transaction the system simply waits out the uncertainty. It shows one way to make globally consistent transactions practical: pay for better clocks and account explicitly for their uncertainty.[^5]

## Agreeing on something

**Consensus** is the problem of getting a set of nodes to agree on one value, despite failures. It underlies leader election, replicated logs, distributed locks, and configuration.

The bad news came in 1985. Fischer, Lynch, and Paterson proved that in an **asynchronous** system — no bound on message delay — with even one node that may crash, no deterministic algorithm can guarantee consensus. Not "it is hard": it is impossible, because a slow node and a dead node are indistinguishable, so any protocol can be stalled forever.[^6]

Real systems live with it by weakening an assumption. They assume the network is *usually* timely, and use timeouts; they then guarantee **safety** always (never two different decisions) and **liveness** only when the network behaves. Paxos (1998) and Raft (2014) both work this way: elect a leader, replicate a log, and require a **quorum** — a majority — to accept each entry. Raft was explicitly designed to be understandable after a decade of engineers finding Paxos impenetrable, and it is now the more widely implemented of the two.[^7]

:::math Why quorums work
Split $N$ replicas into a write quorum $W$ and a read quorum $R$. If

$$R + W > N$$

then any read quorum and any write quorum must share at least one node, so a read always touches a replica that saw the latest write. With $N = 5$, $W = 3$ and $R = 3$ overlap in at least one node.

Majority quorums, $W = R = \lfloor N/2 \rfloor + 1$, also guarantee that two write quorums overlap, so two conflicting decisions cannot both be accepted. This is why replicated systems have odd numbers of nodes: five nodes tolerate two failures, and six also tolerate only two while costing more.
:::

## The CAP theorem, and what it actually says

The most quoted and most misquoted result in the area. Formally: no distributed data store can simultaneously guarantee **consistency** (every read sees the latest write), **availability** (every request gets a non-error response), and **partition tolerance** (the system keeps working when the network drops messages between nodes).[^8]

The misreading is "pick two." Partitions are not a design choice; networks partition whether or not you approve. The real statement is: *when a partition occurs*, you must choose between refusing service and returning possibly stale data. Most of the time there is no partition, and then you can have both, which is what the extended formulation called PACELC makes explicit: **if** partitioned, trade availability against consistency; **else**, trade latency against consistency.

That last trade is the one that dominates ordinary engineering. Strong consistency requires talking to a quorum, which costs a round trip, and a cross-continental round trip is 150 milliseconds (chapter 8). Systems that choose speed use **eventual consistency**, in which replicas converge given time; where conflicts are possible, **CRDTs** are data types with merge rules that guarantee convergence no matter what order updates arrive in, which is how collaborative editors let several people type in the same paragraph.[^9]

## What we still argue about

Whether "exactly once" delivery is achievable or a category error; the standard position is that you get at-least-once delivery plus idempotent operations, which produces exactly-once *effects*, and that promising more is marketing. Whether strong consistency is affordable enough, since Spanner's answer required custom hardware. Whether the industry's move to microservices distributed the problems of chapter 20 faster than it distributed the solutions. And how to test any of it, since the interleavings are astronomically many; deterministic simulation and fault injection are now standard, and formal specification with tools like TLA+ has found design bugs in production consensus protocols that years of testing did not.

:::try Put the idea to work
Two workers read a counter at 5, each adds 1, and each writes 6. Why is the final value wrong, and what operation needs protection?

:::answer Show the reasoning
The read-modify-write sequence was not atomic, so one update was lost. The intended combined result is 7. A suitable lock or atomic increment makes each logical update indivisible with respect to the competing updates; protecting only an individual read or write is insufficient.
:::
:::

## Summary

- Race conditions are the default when threads share mutable state, because operations that look atomic are several instructions.
- Locks give mutual exclusion and introduce deadlock, livelock, and priority inversion; deadlock needs four conditions and is usually prevented by a global lock order.
- Priority inversion nearly ended the Mars Pathfinder mission and was fixed remotely by enabling priority inheritance.
- Compilers and processors reorder memory operations, preserving only single-thread behaviour, so cross-thread variables must be explicitly atomic.
- Distributed systems differ by partial failure: a slow node and a dead node cannot be distinguished, so there is no global "now"; causality replaces time.
- Consensus is impossible in a fully asynchronous system with one faulty node, so real protocols guarantee safety always and progress only when the network cooperates, using majority quorums.
- CAP says that during a partition you choose between availability and consistency; the rest of the time the real trade is consistency against latency.

[^1]: Dijkstra, E. W. (1965). "Solution of a problem in concurrent programming control." *Communications of the ACM*, 8(9), 569. [doi:10.1145/365559.365617](https://doi.org/10.1145/365559.365617). Herlihy, M. (1991). "Wait-free synchronization." *ACM TOPLAS*, 13(1), 124–149. [doi:10.1145/114005.102808](https://doi.org/10.1145/114005.102808)
[^2]: Coffman, E. G., Elphick, M., Shoshani, A. (1971). "System Deadlocks." *ACM Computing Surveys*, 3(2), 67–78. [doi:10.1145/356586.356588](https://doi.org/10.1145/356586.356588)
[^3]: Reeves, G. E. (1997). "What really happened on Mars?" JPL Pathfinder flight software account, circulated with Mike Jones' summary of the RISKS Forum discussion. Archived: [microsoft.com/en-us/research](https://www.microsoft.com/en-us/research/people/mbj/blog/what-really-happened-on-mars/). Sha, L., Rajkumar, R., Lehoczky, J. P. (1990). "Priority inheritance protocols." *IEEE Transactions on Computers*, 39(9), 1175–1185. [doi:10.1109/12.57058](https://doi.org/10.1109/12.57058)
[^4]: Lamport, L. (1978). "Time, Clocks, and the Ordering of Events in a Distributed System." *Communications of the ACM*, 21(7), 558–565. [doi:10.1145/359545.359563](https://doi.org/10.1145/359545.359563)
[^5]: Corbett, J. C. et al. (2013). "Spanner: Google's Globally Distributed Database." *ACM Transactions on Computer Systems*, 31(3), 8. [doi:10.1145/2491245](https://doi.org/10.1145/2491245)
[^6]: Fischer, M. J., Lynch, N. A., Paterson, M. S. (1985). "Impossibility of Distributed Consensus with One Faulty Process." *Journal of the ACM*, 32(2), 374–382. [doi:10.1145/3149.214121](https://doi.org/10.1145/3149.214121)
[^7]: Lamport, L. (1998). "The Part-Time Parliament." *ACM Transactions on Computer Systems*, 16(2), 133–169. [doi:10.1145/279227.279229](https://doi.org/10.1145/279227.279229). Ongaro, D., Ousterhout, J. (2014). "In Search of an Understandable Consensus Algorithm." *USENIX ATC '14*, 305–319. [usenix.org](https://www.usenix.org/conference/atc14/technical-sessions/presentation/ongaro)
[^8]: Gilbert, S., Lynch, N. (2002). "Brewer's conjecture and the feasibility of consistent, available, partition-tolerant web services." *ACM SIGACT News*, 33(2), 51–59. [doi:10.1145/564585.564601](https://doi.org/10.1145/564585.564601). Brewer, E. (2012). "CAP Twelve Years Later: How the 'Rules' Have Changed." *Computer*, 45(2), 23–29. [doi:10.1109/MC.2012.37](https://doi.org/10.1109/MC.2012.37). Abadi, D. (2012). "Consistency Tradeoffs in Modern Distributed Database System Design." *Computer*, 45(2), 37–42. [doi:10.1109/MC.2012.33](https://doi.org/10.1109/MC.2012.33)
[^9]: Shapiro, M., Preguiça, N., Baquero, C., Zawirski, M. (2011). "Conflict-free Replicated Data Types." *Stabilization, Safety, and Security of Distributed Systems (SSS 2011)*, 386–400. [doi:10.1007/978-3-642-24550-3_29](https://doi.org/10.1007/978-3-642-24550-3_29). Herlihy, M. P., Wing, J. M. (1990). "Linearizability: a correctness condition for concurrent objects." *ACM TOPLAS*, 12(3), 463–492. [doi:10.1145/78969.78972](https://doi.org/10.1145/78969.78972)
