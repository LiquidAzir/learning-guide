---
title: Databases
subtitle: A fifty-five-year-old idea that will not be displaced: describe what you want, not how to get it. Transactions, indexes, the isolation level your system is probably running at, and why NoSQL grew a query language.
part: III · Methods
---

## Recap

Chapter 12 gave the structures and chapter 15 the difficulty of sharing state. A database is what you get when data must be shared, durable, queried in ways nobody anticipated, and updated by many parties at once without going wrong. Almost every application is, underneath, a user interface bolted to one.

## Codd's argument

Before 1970, data was stored in hierarchies and networks of records with explicit pointers, and a program navigated them by hand. Change the storage layout and every program broke.

Edgar Codd, a mathematician at IBM, proposed in 1970 that data should be held as **relations** — tables of rows, with no pointers and no order — and queried by an algebra over them. The user says which rows are wanted; the system decides how to find them. His term for the property was **data independence**: the physical layout can change completely without touching a single query.[^1]

IBM was unenthusiastic, having just sold a great deal of hierarchical database software, and the idea took a decade to arrive commercially. Every mainstream database since is either an implementation of it or a reaction to it.

**Normalization** is its discipline: store each fact exactly once. If a customer's address appears in every one of their orders, then changing it means finding every copy, and missing one produces a database that disagrees with itself. So the address lives in a customer table and orders refer to the customer. The rules for this were formalized as a series of "normal forms," and the practical summary of the first three is: every fact should depend on the key, the whole key, and nothing but the key.

## SQL

SQL, from IBM's System R project in the mid-1970s, is the language for saying what you want.

```sql
SELECT c.country, COUNT(*) AS orders, SUM(o.total) AS revenue
FROM orders o JOIN customers c ON o.customer_id = c.id
WHERE o.placed_at >= '2026-01-01'
GROUP BY c.country
HAVING SUM(o.total) > 10000
ORDER BY revenue DESC;
```

Nothing in that says how to do it: whether to read the orders or the customers first, whether to use an index, whether to sort or hash for the grouping. A **query optimizer** decides, by enumerating plans, estimating each one's cost from statistics about the data, and picking the cheapest. Those estimates are the weak point — the number of rows a filter will leave is guessed from summaries, and errors multiply through joins — which is why a query can be fast for months and then choose a catastrophic plan after the data shifts.

SQL has outlived every attempt to replace it, and its declarative core has been adopted by systems that started out rejecting it. Being fifty years old, it also has real faults: three-valued logic with NULL is a persistent source of surprises, and the standard is loose enough that dialects differ everywhere it matters.

## Indexes

Without an index, finding matching rows means reading every one: a **full scan**.

:::math What an index buys
A table of 100 million rows at 200 bytes each is 20 GB. A full scan on a device delivering 2 GB/s takes about 10 seconds.

A B-tree index (chapter 12) over that table with 500-way nodes has depth $\lceil \log_{500}(10^8) \rceil = 3$, since $500^3$ is 125 million. Looking up one key is three block reads, roughly 300 microseconds on flash storage.

That is a factor of about 30,000. It is why the difference between a fast and an unusable application is often one missing index, and why the first question about a slow query is which index it used.
:::

Indexes are not free: each one must be updated on every insert, update, and delete, so a table with ten indexes is slow to write. And an index helps only the queries whose filters or sort orders it matches, so index design is a direct trade of write speed for read speed on chosen access patterns.

## Transactions

A **transaction** is a group of operations that must happen as a unit. The canonical example is a transfer: subtract from one account, add to another, and never do one without the other. The guarantees are traditionally abbreviated **ACID**.

:::know What ACID actually promises
**Atomicity.** All of the transaction happens or none of it does. A crash halfway leaves no half-transfer.

**Consistency.** The database's declared rules — uniqueness, foreign keys, checks — hold before and after. This is the weakest letter; it is really a property of your schema, and it is the "C" that is not the "C" in the CAP theorem of chapter 15.

**Isolation.** Concurrent transactions do not see each other's partial work. In full strength, the outcome is as if they had run one after another in some order.

**Durability.** Once committed, it survives a crash. In practice this means it reached persistent storage, or a quorum of replicas, before the commit was acknowledged.
:::

Atomicity and durability come from the **write-ahead log**: before changing anything, append a record of the intended change to a sequential log and force it to storage; then modify the data at leisure. After a crash, replay the log to finish committed work and undo uncommitted work. The canonical design, ARIES, dates from 1992 and is still the basis of most systems.[^2]

## The isolation level you are probably using

Here is the thing that surprises working engineers most. Full isolation, called **serializability**, is expensive, so databases offer weaker levels that permit specific anomalies in exchange for speed — and most of them do not default to the strongest.

| Level | Permits | Typical use |
|---|---|---|
| Read uncommitted | reading another transaction's uncommitted writes | almost never |
| Read committed | a row's value changing between two reads in one transaction | the default in many major systems |
| Repeatable read / snapshot | write skew: two transactions each read, then act on stale assumptions | the default in others |
| Serializable | nothing; as if run one at a time | must usually be requested explicitly |

The classic failure is **write skew**. Two doctors are on call; each may go off duty provided at least one other remains. Both check simultaneously, both see the other still on, both go off, and the hospital has nobody on call. Every individual transaction obeyed the rule; the pair did not. Snapshot isolation permits this, and the 1995 critique of the ANSI standard that named the problem also showed that the standard's own definitions did not describe what real systems do.[^3]

The practical advice: find out what your database defaults to, and if money or safety depends on an invariant across rows, either request serializable isolation or take explicit locks.

**Multi-version concurrency control** is how modern systems get most of the benefit cheaply: keep old versions of each row, give each transaction a consistent snapshot as of its start, and let readers never block writers nor writers readers. It is the reason a long analytical query no longer freezes an application, and the reason databases need periodic cleanup of old versions.

## Storage: two shapes

**B-trees** update in place and are read-optimized: the shape of nearly every relational database.

**Log-structured merge trees** buffer writes in memory, write them out as sorted files, and merge those files in the background. Writes become sequential and fast; reads may have to check several files, mitigated by Bloom filters (chapter 12). This is the engine underneath most systems built for heavy write loads, and it is a direct consequence of storage devices that are far faster at sequential than at random writes.[^4]

## Scaling out, and the round trip

**Replication** copies data to several nodes for durability and read capacity, and immediately raises chapter 15's question of what a reader may see. **Sharding** splits the data by some key across nodes, which works beautifully until a query needs to join across shards or a transaction must span them, at which point you need distributed commit and its costs.

The 2000s **NoSQL** wave abandoned the relational model and often transactions too, in exchange for horizontal scale, driven by companies whose working sets no longer fit one machine. Amazon's Dynamo paper in 2007 is the landmark: eventual consistency, no joins, no transactions, and always accept a write.[^5] The wave delivered real scale and, over the following decade, learned that applications need transactions and ad-hoc queries after all. The current generation of distributed databases offers SQL, distributed transactions, and horizontal scale together, at the cost of the round trips that consensus requires (chapter 15); Google's Spanner showed it was possible and everyone else has been implementing versions of it since.

## Analytics is a different machine

Transactional workloads touch a few rows of many columns; analytical ones touch a few columns of billions of rows. Storing data by **column** rather than by row means an analytical query reads only the columns it needs, and a column of similar values compresses extremely well (chapter 4), often tenfold. That is why analytical systems are built as column stores and why the two workloads are usually run on separate systems fed by a pipeline.[^6]

The newest addition is the **vector index**, which stores the numeric embeddings produced by machine-learning models and answers "find the nearest ones" approximately, since exact nearest-neighbour search in high dimensions is prohibitive. It is the retrieval half of retrieval-augmented generation ([see the AI guide](#/ai/using-llms)), and after a period as separate products, it is now a feature in the mainstream databases.

## What we still argue about

Whether serializable isolation should be the default, given that the weaker defaults are a standing source of subtle corruption. Whether one system can serve transactions and analytics well, or whether the separation is fundamental. How much of the SQL standard's semantics — NULL above all — is worth preserving. And whether the durability guarantees people rely on hold, given repeated findings that layers beneath the database, from file systems to drive firmware, have lied about when data reached the medium.

## Summary

- The relational model separates what data means from how it is stored, so queries survive changes in layout; normalization stores each fact once.
- SQL is declarative, and an optimizer chooses the plan from cost estimates that can go badly wrong when the data shifts.
- An index turns a scan of a large table into three or four block reads, at the cost of slower writes.
- ACID means atomic, consistent, isolated, durable; atomicity and durability come from a write-ahead log.
- Most databases default to less than serializable isolation and therefore permit anomalies such as write skew; if an invariant spans rows, you must ask for more.
- B-trees suit reads, log-structured merge trees suit writes; row storage suits transactions and column storage suits analytics.
- NoSQL bought scale by dropping the model and transactions, and the industry has spent the last decade adding both back.

[^1]: Codd, E. F. (1970). "A Relational Model of Data for Large Shared Data Banks." *Communications of the ACM*, 13(6), 377–387. [doi:10.1145/362384.362685](https://doi.org/10.1145/362384.362685). Chamberlin, D. D., Boyce, R. F. (1974). "SEQUEL: A structured English query language." *Proceedings of the 1974 ACM SIGFIDET Workshop*, 249–264. [doi:10.1145/800296.811515](https://doi.org/10.1145/800296.811515)
[^2]: Mohan, C. et al. (1992). "ARIES: A Transaction Recovery Method Supporting Fine-Granularity Locking and Partial Rollbacks Using Write-Ahead Logging." *ACM Transactions on Database Systems*, 17(1), 94–162. [doi:10.1145/128765.128770](https://doi.org/10.1145/128765.128770). Gray, J., Reuter, A. (1992). *Transaction Processing: Concepts and Techniques*. San Mateo: Morgan Kaufmann.
[^3]: Berenson, H. et al. (1995). "A Critique of ANSI SQL Isolation Levels." *SIGMOD '95*, 1–10. [doi:10.1145/223784.223785](https://doi.org/10.1145/223784.223785). Kleppmann, M. (2017). *Designing Data-Intensive Applications*. Sebastopol: O'Reilly, chapter 7.
[^4]: O'Neil, P. et al. (1996). "The log-structured merge-tree (LSM-tree)." *Acta Informatica*, 33(4), 351–385. [doi:10.1007/s002360050048](https://doi.org/10.1007/s002360050048)
[^5]: DeCandia, G. et al. (2007). "Dynamo: Amazon's Highly Available Key-value Store." *SOSP '07*, 205–220. [doi:10.1145/1294261.1294281](https://doi.org/10.1145/1294261.1294281)
[^6]: Stonebraker, M. et al. (2005). "C-Store: A Column-oriented DBMS." *VLDB '05*, 553–564. [vldb.org](https://www.vldb.org/archives/website/2005/program/paper/thu/p553-stonebraker.pdf). Abadi, D. J., Madden, S. R., Hachem, N. (2008). "Column-stores vs. row-stores: how different are they really?" *SIGMOD '08*, 967–980. [doi:10.1145/1376616.1376712](https://doi.org/10.1145/1376616.1376712)
