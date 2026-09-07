---
title: The People
subtitle: Who worked out what, in one place, with pointers to the chapter where the idea lives. Including the ones whose names took decades to attach to their work.
part: V · The Edge
---

## How credit works in this field

Three things distort the record, and it is worth naming them before the list.

**Secrecy.** The first programmable electronic computer, Colossus, was classified until the 1970s, so histories written before then start with ENIAC. Public-key cryptography was discovered at GCHQ years before its academic rediscovery and declassified only in 1997 (chapter 18). Whole careers were spent on work that could not be claimed.

**Teams.** The stored-program report of 1945 carries one name and records a group's work (chapter 2). Modern results routinely have dozens of authors, and the hardware and systems chapters describe artefacts built by hundreds of people, almost none of whom are named anywhere.

**Whose work counted as work.** The six mathematicians who programmed ENIAC — Kathleen McNulty, Jean Jennings, Betty Snyder, Marlyn Wescoff, Frances Bilas, and Ruth Lichterman — were classified as "operators," were not invited to the 1946 unveiling dinner, and were long assumed by later viewers of the photographs to be models posing with the machine. Historians recovered the record in the 1980s and 1990s.[^1] The pattern repeats often enough in what follows to be a fact about the field rather than a series of accidents.

The field's highest honour is the **ACM A.M. Turing Award**, given annually since 1966 and now carrying a million dollars. It is noted below where relevant.

## The theory

- **Ada Lovelace** (1815–1852). The first published algorithm written for a machine, 1843, and the observation that such a machine could operate on symbols rather than only numbers. Chapter 2.
- **Charles Babbage** (1791–1871). Designed the Analytical Engine, 1837: store, mill, punched-card instructions, conditional branching. Never built it. Chapter 2.
- **George Boole** (1815–1864). An algebra of true and false, 1847 and 1854. Chapters 2 and 7.
- **David Hilbert** (1862–1943). Asked whether mathematics could be mechanized, which forced everyone else to say what a procedure is. Chapter 2.
- **Kurt Gödel** (1906–1978). Incompleteness, 1931: any consistent system rich enough for arithmetic contains truths it cannot prove. Chapter 6.
- **Alan Turing** (1912–1954). Defined computation, built the universal machine on paper, and proved the halting problem undecidable, all in 1936, at 23. Broke naval Enigma at Bletchley Park. Prosecuted in 1952 for homosexuality and chemically castrated; died two years later. Chapters 2, 5, and 6.
- **Alonzo Church** (1903–1995). The lambda calculus, 1936, and independently the unsolvability of the decision problem. Turing's doctoral supervisor. Chapters 2 and 5.
- **Emil Post** (1897–1954) and **Stephen Kleene** (1909–1994). Two further definitions of computation, which turned out to describe the same set. Chapter 5.
- **Noam Chomsky** (b. 1928). The hierarchy of formal languages, 1956, which is the map of what each class of machine can parse. Chapter 5.
- **Henry Rice** (1920–1991). Every non-trivial property of a program's behaviour is undecidable, 1953. Chapter 6.
- **Tibor Radó** (1895–1965). The busy beaver function, 1962: a concrete function that grows faster than anything computable. Chapter 6.

## Information

- **Claude Shannon** (1916–2001). Boolean algebra as circuits, 1937; information theory, entropy, and channel capacity, 1948; the sampling theorem, 1949. Chapters 2, 4, and 7.
- **Richard Hamming** (1915–1998). The first error-correcting code, 1950, out of irritation at a machine that stopped on weekends. Turing Award 1968. Chapter 4.
- **David Huffman** (1925–1999). Optimal prefix codes, 1952, found as a student while avoiding an exam. Chapter 4.
- **Jacob Ziv** (1931–2023) and **Abraham Lempel** (1936–2023). The compression method underneath ZIP, PNG, and the compressed web, 1977. Chapter 4.
- **Andrey Kolmogorov** (1903–1987). Complexity as the length of the shortest program that outputs a thing, 1965. Chapters 4 and 22.
- **Robert Gallager** (b. 1931), **Claude Berrou** (b. 1951), **Erdal Arıkan** (b. 1958). Codes that reach within a fraction of a decibel of Shannon's limit and now run 5G and Wi-Fi. Chapter 4.

## The machines

- **John von Neumann** (1903–1957), **J. Presper Eckert** (1919–1995), **John Mauchly** (1907–1980). ENIAC and the stored-program architecture, 1945. Chapter 2.
- **Tommy Flowers** (1905–1998). Built Colossus, 1943–44, partly with his own money, and was ordered to destroy most of the machines and stay silent for thirty years. Chapter 2.
- **Gordon Moore** (1929–2023) and **Robert Dennard** (1932–2024). The two scaling observations that governed the industry, 1965 and 1974, and both of which have now expired. Chapters 2 and 8.
- **Jack Kilby** (1923–2005) and **Robert Noyce** (1927–1990). The integrated circuit, 1958–59. Chapter 2.
- **Gene Amdahl** (1922–2015). The law that caps what parallelism can buy, 1967. Chapter 8.
- **John Hennessy** (b. 1952) and **David Patterson** (b. 1947). RISC architecture and the quantitative approach to computer design. Turing Award 2017. Chapter 8.
- **Ed Catmull** (b. 1945). The z-buffer and texture mapping, 1974; later co-founded Pixar. Chapter 19.

## Languages and compilers

- **Grace Hopper** (1906–1992). Built early compilers and argued that programs could be written in something close to English, against a consensus that this was pointless. Chapter 2.
- **John Backus** (1924–2007). Led FORTRAN, 1957, proving a compiler could beat hand-written assembly; later argued the whole style was a mistake. Turing Award 1977. Chapters 2 and 10.
- **John McCarthy** (1927–2011). LISP, 1958, and with it recursion, garbage collection, and code as data. Turing Award 1971. Chapters 2 and 10.
- **Dennis Ritchie** (1941–2011) and **Ken Thompson** (b. 1943). Unix and C, 1969–73, and in Thompson's case the 1984 lecture showing a compiler can hide a backdoor no source review will find. Turing Award 1983. Chapters 2, 9, and 11.
- **Tony Hoare** (b. 1934). Quicksort, 1961; the logic for reasoning about programs, 1969; and the null reference, which he called his billion-dollar mistake. Turing Award 1980. Chapters 10 and 13.
- **Robin Milner** (1934–2010). Type inference and ML, 1978; a calculus for concurrent processes. Turing Award 1991. Chapter 10.
- **Donald Knuth** (b. 1938). *The Art of Computer Programming*, from 1962, which made the analysis of algorithms rigorous; LR parsing, 1965; TeX. Turing Award 1974. Chapters 2, 11, and 13.
- **Barbara Liskov** (b. 1939). Abstract data types and the substitution principle, which is why interfaces work. Turing Award 2008.
- **Chris Lattner** (b. 1978). LLVM, which now compiles a large fraction of the world's code. Chapter 11.
- **Xavier Leroy** (b. 1968). CompCert, a C compiler with a machine-checked proof of correctness. Chapters 11 and 20.

## Algorithms and complexity

- **Edsger Dijkstra** (1930–2002). Shortest paths, 1956; mutual exclusion, 1965; structured programming and a lifetime of unwelcome and largely correct opinions. Turing Award 1972. Chapters 13, 15, and 20.
- **Richard Bellman** (1920–1984). Dynamic programming, and the name chosen to sound unobjectionable to a defence secretary. Chapter 13.
- **Stephen Cook** (b. 1939) and **Leonid Levin** (b. 1948). NP-completeness, independently, 1971 and 1973. Cook: Turing Award 1982. Chapter 14.
- **Richard Karp** (b. 1935). Twenty-one problems shown NP-complete, 1972, which made the theory a working tool. Turing Award 1985. Chapter 14.
- **Alexander Razborov** (b. 1963) and **Steven Rudich** (b. 1961). Proved that the main technique for circuit lower bounds cannot settle P versus NP, 1994. Chapter 14.
- **Avi Wigderson** (b. 1956). Randomness and computation, across four decades. Turing Award 2023. Chapter 14.
- **Ryan Williams** (b. 1979). Simulating time in square-root space, 2025, the first movement on that question in fifty years. Chapters 14 and 22.
- **Ran Duan, Jiayi Mao, Xiao Mao, Xinkai Shu, Longhui Yin.** Broke the sorting barrier for shortest paths, 2025, showing Dijkstra's algorithm is not optimal. Chapter 13.
- **Rudolf Bayer** and **Edward McCreight**. B-trees, 1972, which every database and file system still uses. Chapter 12.
- **Burton Bloom.** The filter that is allowed to be wrong in one direction only, 1970. Chapter 12.

## Systems, networks, and data

- **Edgar Codd** (1923–2003). The relational model, 1970, against his own employer's commercial interest. Turing Award 1981. Chapter 16.
- **Jim Gray** (1944–2012). Transactions and the ACID properties. Turing Award 1998. Lost at sea in 2007. Chapter 16.
- **Michael Stonebraker** (b. 1943). Ingres, Postgres, column stores, and a career of building the next database. Turing Award 2014. Chapter 16.
- **Paul Baran** (1926–2011) and **Donald Davies** (1924–2000). Packet switching, independently, in the early 1960s. Chapter 17.
- **Vinton Cerf** (b. 1943) and **Robert Kahn** (b. 1938). TCP/IP, 1974. Turing Award 2004. Chapters 2 and 17.
- **Van Jacobson** (b. 1950). Congestion control, 1988, after the network collapsed. Chapter 17.
- **Paul Mockapetris** (b. 1948). The Domain Name System, 1983. Chapter 17.
- **Radia Perlman** (b. 1951). The spanning-tree protocol, which is why bridged networks do not loop, and much of the design of routing that survives failures.
- **Tim Berners-Lee** (b. 1955). The web, proposed 1989, and the decision to give it away. Turing Award 2016. Chapter 2.
- **Leslie Lamport** (b. 1941). Happens-before and logical clocks, 1978; Paxos, 1998; TLA+; also LaTeX. Turing Award 2013. Chapters 15 and 20.
- **Nancy Lynch** (b. 1948), **Michael Fischer**, **Michael Paterson**. The impossibility of asynchronous consensus, 1985. Chapter 15.
- **Peter Denning** (b. 1942). Virtual memory and the working-set model. Chapter 9.
- **Linus Torvalds** (b. 1969). Linux, 1991, and Git, 2005. Chapters 9 and 20.
- **Gerwin Klein** and the seL4 team. The first machine-checked proof of correctness for a general-purpose OS kernel, 2009. Chapters 6, 9, and 20.

## Security

- **Auguste Kerckhoffs** (1835–1903). Only the key may be secret, 1883. Chapter 18.
- **Whitfield Diffie** (b. 1944) and **Martin Hellman** (b. 1945). Public key exchange, 1976. Turing Award 2015. Chapter 18.
- **Ron Rivest** (b. 1947), **Adi Shamir** (b. 1952), **Leonard Adleman** (b. 1945). RSA, 1978. Turing Award 2002. Chapter 18.
- **James Ellis** (1924–1997), **Clifford Cocks** (b. 1950), **Malcolm Williamson** (1950–2015). The same ideas at GCHQ, 1970–74, classified until 1997. Chapter 18.
- **Shafi Goldwasser** (b. 1958) and **Silvio Micali** (b. 1954). Zero-knowledge proofs and the rigorous definitions modern cryptography rests on. Turing Award 2012.
- **Peter Shor** (b. 1959). Quantum factoring, 1994, which set a deadline on all of the above. Chapters 18 and 21.
- **Charles Bennett** (b. 1943) and **Gilles Brassard** (b. 1955). Quantum key distribution, 1984, and the foundations of quantum information. Turing Award 2025, announced March 2026. Chapters 18 and 21.

## The practice

- **Margaret Hamilton** (b. 1936). Led the Apollo flight software, whose priority-management design saved the Moon landing when the guidance computer was overloaded during descent; she also popularized the term "software engineering," at a time when it was used to insist that the work was engineering at all.
- **Fred Brooks** (1931–2022). *The Mythical Man-Month*, 1975, and *No Silver Bullet*, 1986. Turing Award 1999. Chapter 20.
- **David Parnas** (b. 1941). Information hiding, 1972: the one structural idea in software design. Chapter 20.
- **Nancy Leveson** (b. 1948). Software safety as a discipline, built on the Therac-25 investigation. Chapter 20.
- **Frances Allen** (1932–2020). Compiler optimization; the first woman to receive the Turing Award, in 2006, forty years after it was established.

## What this list leaves out

Nearly everyone. The hardware in chapter 8 is the work of tens of thousands of engineers whose names appear on patents and nowhere else; the internet of chapter 17 was built by a standards community that deliberately avoided personal credit; and the largest software systems in the world were written by people no history will record. A list of names is a convenient fiction about how a field advances, and the fiction is most misleading for the most recent work, which is the most collaborative.

## Summary

- Secrecy, teamwork, and whose labour counted as intellectual work all distort the record; Colossus, GCHQ's cryptography, and the ENIAC programmers are the standard examples.
- The theory was built between 1936 and 1972 by a small number of people; the systems were built by very large numbers of people.
- The Turing Award, given since 1966, is the field's main marker of credit, and its early gaps are as informative as its entries.

[^1]: Light, J. S. (1999). "When Computers Were Women." *Technology and Culture*, 40(3), 455–483. [doi:10.1353/tech.1999.0128](https://doi.org/10.1353/tech.1999.0128). Fritz, W. B. (1996). "The Women of ENIAC." *IEEE Annals of the History of Computing*, 18(3), 13–28. [doi:10.1109/85.511940](https://doi.org/10.1109/85.511940). ACM A.M. Turing Award laureates: [amturing.acm.org](https://amturing.acm.org/)
