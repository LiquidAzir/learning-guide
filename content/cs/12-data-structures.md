---
title: Data Structures
subtitle: How you arrange the data decides what is cheap and what is ruinous. Arrays, hash tables, trees, heaps, and the ones designed for a disk or for being slightly wrong on purpose.
part: III · Methods
---

## Recap

Part II built a machine. Part III is about using it well, and this chapter comes first because the choice of data structure usually determines the algorithm, rather than the other way round. A **data structure** is a way of arranging data so that certain operations are cheap, and every one of them is a trade: making one operation fast makes another slow.

## Notation, briefly

Costs are written with **big-O notation**, which describes how the work grows with the size of the input, $n$, ignoring constant factors. $O(1)$ means the cost does not depend on $n$; $O(\log n)$ means it grows like the number of times you can halve $n$, so a billion items cost about thirty steps; $O(n)$ is proportional; $O(n \log n)$ is a little worse; $O(n^2)$ means a hundredfold more data costs ten thousand times more work. Chapter 13 defines this properly. For now: the letter under the O is what matters at scale, and the constant that big-O throws away is what matters at small scale, which is why this chapter keeps mentioning the cache.

## The two ways to store a sequence

**Arrays** store elements in one contiguous block. Reaching element $i$ is arithmetic — start address plus $i$ times element size — so indexing is $O(1)$. Inserting in the middle means shifting everything after it: $O(n)$.

**Linked lists** store each element with a pointer to the next. Inserting takes $O(1)$ if you already hold a pointer to the place, but reaching element $i$ means walking $i$ links: $O(n)$.

The textbook conclusion is that each wins somewhere. The measured conclusion, on hardware built after about 1995, is that arrays win far more often than the notation suggests, because their elements sit next to each other in memory and arrive in the same cache line, while a list's nodes are scattered and each hop is a possible cache miss costing what chapter 8's table shows is roughly eighty times an arithmetic operation. Traversing a million-element list can be an order of magnitude slower than traversing a million-element array with identical asymptotic cost. When theory and stopwatch disagree, look for this.

Growable arrays are the everyday default in every language, and they hide a nice piece of analysis.

:::math Why doubling is free
A dynamic array that is full allocates a bigger block and copies. If it grew by one slot each time, $n$ insertions would cost $1 + 2 + \dots + n = n(n+1)/2$ copies, which is $O(n^2)$.

Instead it **doubles**. Starting from size 1, the copies over $n$ insertions total

$$1 + 2 + 4 + \dots + n < 2n$$

because each term is smaller than the next and the whole sum is bounded by twice the largest. So $n$ insertions cost fewer than $2n$ copies, an average of under 2 each. Any single insertion may be expensive; the *average over the sequence* is constant, which is called **amortized** $O(1)$. It is the reason you can append to a list a million times without thinking about it.
:::

## Hash tables

A **hash table** stores keys and values, and answers "what is stored under this key?" in expected $O(1)$ time regardless of how many items it holds. This is the most useful data structure in practical computing, and it is behind dictionaries, sets, database indexes, caches, symbol tables in compilers, and the routing of nearly everything.

A **hash function** turns a key into a number, which is reduced to a slot number. Good hash functions scatter similar keys to unrelated slots. Two keys can land in the same slot — a **collision** — which is not an edge case but a certainty: by the birthday argument, a table with a million slots sees its first collision after about 1,200 random insertions. Two repairs are standard: **chaining**, where each slot holds a small list, and **open addressing**, where a colliding item probes forward for the next free slot. Open addressing is usually faster now because probing forward stays inside a cache line.

Performance depends on the **load factor**, the ratio of items to slots. Below about 0.7 the expected number of probes is small and nearly constant; as it approaches 1, open addressing degrades sharply, so tables resize and rehash when they get too full.

:::warning Hash tables have a worst case, and attackers know it
Expected $O(1)$ assumes keys are spread out. If an attacker can choose the keys — form fields, HTTP headers, JSON object names — they can pick thousands that all hash to one slot, turning every lookup into a linear scan and each request into $O(n^2)$ work. This **algorithmic complexity attack**, demonstrated in 2003 and used against most web frameworks in a 2011 wave of disclosures, took servers down with a few hundred kilobytes of request. The fix is a keyed hash function with a per-process random key, so the attacker cannot predict where anything lands; SipHash, published in 2012, was designed for exactly this and is now the default in many language runtimes.[^1]
:::

## Trees

A **binary search tree** keeps keys ordered: everything smaller in the left subtree, larger in the right. Lookup, insert, and delete cost $O(\text{depth})$. If the tree is balanced, the depth is $O(\log n)$; if items arrive already sorted, a naive tree degenerates into a linked list of depth $n$, which is the classic way to lose all the benefit.

**Self-balancing** trees fix this by rotating subtrees as they go: AVL trees (1962, the first such structure) keep the two sides' heights within one of each other; red-black trees allow a looser balance for cheaper updates and are what most standard libraries' ordered maps use.

Trees keep data in order, which hash tables do not. That is the reason to pay for them: range queries ("all orders between these dates"), finding the nearest key, and iterating in sorted order are natural in a tree and impossible in a hash table.

**B-trees** are the version designed for storage. Since a disk or SSD reads a whole block anyway (chapter 8), a node is made the size of a block and holds hundreds of keys, so each node has hundreds of children. The depth of a tree over a billion keys with 500-way nodes is 4, meaning a lookup costs four block reads rather than thirty. This is why B-trees, published in 1972, are still the index structure of essentially every relational database and file system (chapter 16).[^2]

## Heaps and priority queues

A **priority queue** answers one question: what is the smallest (or largest) item? A **binary heap** implements it as an array in which the item at position $i$ has children at $2i+1$ and $2i+2$ and is smaller than both. Insert and remove-minimum are $O(\log n)$; reading the minimum is $O(1)$; and there is no wasted space or pointer chasing, which makes it fast in practice.

Priority queues drive scheduling (chapter 9), event simulation, Huffman coding (chapter 4), and Dijkstra's shortest-path algorithm (chapter 13).

## The specialists

**Tries** store strings by their characters along a path from the root, so a shared prefix is stored once. They give prefix search for free, which is autocomplete, and compressed forms are used in the routing tables that decide where every internet packet goes (chapter 17).

**Bloom filters** answer "have I seen this?" using a bit array and several hash functions, in a fixed amount of space no matter how many items go in. The catch is deliberate: they may say yes when the answer is no, but never no when the answer is yes. About 10 bits per item buys a false-positive rate near 1 percent. That is an extraordinary bargain when a false positive merely costs a slower check, which is why they sit in front of expensive lookups in databases, browsers' malicious-URL checks, and content networks.[^3]

**Persistent** structures return a modified copy while leaving the original intact, sharing everything unchanged, which is how functional languages (chapter 10) offer immutable collections without copying them.

| Structure | Lookup | Insert | Ordered? | Notes |
|---|---|---|---|---|
| Array | $O(1)$ by index, $O(n)$ by value | $O(n)$ | if kept so | best cache behaviour |
| Dynamic array | as array | $O(1)$ amortized at the end | | the everyday default |
| Linked list | $O(n)$ | $O(1)$ at a held position | | poor locality |
| Hash table | $O(1)$ expected | $O(1)$ expected | no | worst case $O(n)$; needs a keyed hash |
| Balanced tree | $O(\log n)$ | $O(\log n)$ | yes | range queries |
| B-tree | $O(\log_B n)$ block reads | same | yes | for disks; depth 3–4 at a billion keys |
| Binary heap | $O(1)$ for the minimum only | $O(\log n)$ | partially | priority queues |
| Bloom filter | $O(k)$, may be wrong | $O(k)$ | no | tiny; false positives only |

:::key
Choosing a data structure is choosing which operation you want to be cheap. Hash tables give you constant-time lookup by exact key and nothing else. Trees give you order at a logarithmic price. B-trees exist because storage devices charge per block, not per byte. Bloom filters give up exactness for space. And underneath all of it, on real hardware, contiguous memory beats pointer chasing by a factor that the notation does not show.
:::

## What we still argue about

How much the theoretical analysis is worth when cache behaviour dominates, and whether the standard cost model should be replaced by one that charges for memory hierarchy (cache-oblivious structures, which are asymptotically optimal at every level of a hierarchy without knowing its parameters, are the elegant answer and are not widely used). Whether learned index structures, which train a small model to predict where a key sits instead of navigating a tree, are a real advance or a special case. And how to make concurrent data structures, where several threads read and write at once, both correct and fast, which is chapter 15's problem.

## Summary

- Big-O describes growth and ignores constants; the constants are cache behaviour and often decide the winner.
- Arrays index in $O(1)$ and beat linked lists in practice far more often than the notation suggests; doubling makes appending amortized $O(1)$.
- Hash tables give expected constant-time lookup, degrade at high load factors, and have an $O(n)$ worst case that attackers can force unless the hash is keyed and randomized.
- Balanced trees cost $O(\log n)$ and buy ordering: ranges, neighbours, and sorted traversal.
- B-trees match node size to block size so that a billion keys are three or four device reads away, which is why databases and file systems use them.
- Heaps answer "what is smallest" cheaply; tries share prefixes; Bloom filters trade a small false-positive rate for a large space saving.

[^1]: Crosby, S. A., Wallach, D. S. (2003). "Denial of Service via Algorithmic Complexity Attacks." *12th USENIX Security Symposium*. [usenix.org](https://www.usenix.org/legacy/events/sec03/tech/crosby.html). Aumasson, J.-P., Bernstein, D. J. (2012). "SipHash: A Fast Short-Input PRF." *INDOCRYPT 2012*, 489–508. [doi:10.1007/978-3-642-34931-7_28](https://doi.org/10.1007/978-3-642-34931-7_28)
[^2]: Bayer, R., McCreight, E. (1972). "Organization and maintenance of large ordered indices." *Acta Informatica*, 1(3), 173–189. [doi:10.1007/BF00288683](https://doi.org/10.1007/BF00288683). Adelson-Velsky, G., Landis, E. (1962). "An algorithm for the organization of information." *Proceedings of the USSR Academy of Sciences*, 146, 263–266. Cormen, T. H., Leiserson, C. E., Rivest, R. L., Stein, C. (2022). *Introduction to Algorithms*, 4th ed. Cambridge, MA: MIT Press.
[^3]: Bloom, B. H. (1970). "Space/time trade-offs in hash coding with allowable errors." *Communications of the ACM*, 13(7), 422–426. [doi:10.1145/362686.362692](https://doi.org/10.1145/362686.362692). Broder, A., Mitzenmacher, M. (2004). "Network Applications of Bloom Filters: A Survey." *Internet Mathematics*, 1(4), 485–509. [doi:10.1080/15427951.2004.10129096](https://doi.org/10.1080/15427951.2004.10129096)
