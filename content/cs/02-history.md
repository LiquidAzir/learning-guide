---
title: Where the Ideas Came From
subtitle: Ninety years from a question about the foundations of mathematics to a machine in every pocket, and the two thousand before that which made the question askable.
part: I · Foundations
---

## How did an abstract idea become a machine on every desk?

Chapter 1 said that computer science is the study of computation rather than of computers. This chapter is the evidence: almost every idea in the field was worked out before, and often long before, the hardware that made it useful.

## Before the machines

An **algorithm** is a finite list of unambiguous steps that always terminates with an answer. People wrote them for four thousand years before anyone had a machine to run them. Babylonian clay tablets give step-by-step procedures for solving quadratic equations. Around 300 BC Euclid wrote down a method for finding the greatest common divisor of two numbers by repeated subtraction that is still taught, still used, and still, after twenty-three centuries, essentially the fastest known way to do it.[^1]

The word itself comes from a person. Muḥammad ibn Mūsā **al-Khwārizmī**, working in Baghdad around 820, wrote a book on calculating with the Hindu decimal numerals. Translated into Latin in the twelfth century, his name became *Algoritmi*, and "algorism" came to mean calculating with the new numerals rather than with an abacus. His other book, on *al-jabr*, gave us "algebra." He is the only person to have two branches of mathematics named after him, one of them by mistake.

Mechanical calculators followed slowly: Pascal's adding machine in 1642, Leibniz's stepped reckoner in 1673. Leibniz did something more important on paper. In 1703 he described **binary arithmetic**, counting with only 0 and 1, and observed that it would suit a machine, since a machine can easily distinguish two states and struggles with ten.

## The two people who saw it first

In 1837 Charles **Babbage** designed the **Analytical Engine**: a general-purpose mechanical computer with a "store" for numbers, a "mill" to do arithmetic on them, punched cards for instructions borrowed from the Jacquard weaving loom, and, crucially, the ability to branch, to take a different action depending on a computed result. It was never built. The engineering was at the edge of what Victorian machining could do and the funding ran out.

Between 1842 and 1843 **Ada Lovelace** translated an Italian account of the machine and added notes of her own that ran to more than twice the length of the original. The last of them, Note G, sets out a step-by-step procedure for the engine to compute a sequence of Bernoulli numbers, complete with a table of the machine's states: it is generally counted as the first published algorithm written for a machine. Her deeper point is in the prose around it. The engine, she wrote, might act on anything whose relations could be expressed in symbols, not only numbers, and could compose music if the relations of pitch were so expressed. She also insisted it could originate nothing, only follow what it was ordered to do, an objection Turing would answer directly a century later.[^2]

Then nothing much happened for ninety years, because the problem that would make computation urgent had not yet been asked.

## The question that started it

In the 1920s David Hilbert asked whether mathematics could be put on a fully mechanical footing. His **Entscheidungsproblem**, or decision problem, asked for a procedure that, given any statement in formal logic, would decide whether it followed from the axioms. Answering it required someone to say precisely what "a procedure" meant, and three people did so in the same two years, in three completely different ways.

**Alonzo Church** defined the **lambda calculus**, a notation in which everything is a function (chapter 5). **Alan Turing** defined his tape machine. **Emil Post** defined a third system. All three were then shown to compute exactly the same set of functions, and every later attempt to define computation, from recursive functions to modern programming languages, has landed on the same set. That coincidence is the **Church–Turing thesis**: the informal idea of "what can be computed by following a procedure" has one robust formal meaning.

And the answer to Hilbert was no. Turing showed that no procedure can decide, of an arbitrary program and input, whether the program will ever stop, and that the decision problem follows from this (chapter 6). The field's first great theorem was a proof of impossibility, and it arrived before the first machine.[^3]

:::history How we got here
It is worth noticing what the sequence was. The theory of computation was completed, in its essentials, in 1936. The first working electronic computer ran in 1943–44. The first stored-program machine ran in 1948. The transistor was demonstrated in December 1947. In other words the mathematics did not follow the machines; it preceded them by a decade, and the engineers who built the first computers had read the papers.
:::

## Logic becomes wire

In 1847, and more fully in 1854, George **Boole** published a system in which logical statements could be manipulated like algebra, with variables that take only the values true and false and operations *and*, *or*, and *not*. It was regarded as an elegant curiosity for eighty years.

In 1937 a twenty-one-year-old master's student at MIT named Claude **Shannon** noticed that the relay circuits used in telephone exchanges obeyed exactly Boole's algebra: a switch is open or closed, in series is *and*, in parallel is *or*. His thesis, published in 1938, showed that any Boolean expression could be built as a circuit and any circuit analyzed as an expression, which turned circuit design from an art into a calculation.[^4] It has a reasonable claim to being the most consequential master's thesis ever written. Chapter 7 is the direct descendant of it.

Eleven years later Shannon did it again, founding **information theory** and giving the word "bit" its meaning (chapter 4).

## The war and the first machines

Wartime need built the first electronic computers, and secrecy hid the best of them. At Bletchley Park in Britain, **Colossus**, designed by the telephone engineer Tommy **Flowers**, first ran at his laboratory in late 1943 and was working at Bletchley in early 1944; it used somewhere between 1,500 and 1,800 valves, depending on which account you follow, to break the German high command's Lorenz cipher; ten were built, most were destroyed after the war, and the machines stayed secret until the 1970s, which is why they are missing from older histories.[^5] In the United States, **ENIAC** was completed in 1945 and unveiled in 1946: 17,468 vacuum tubes, weighing 27 tons, programmed by physically rewiring it with plugboards, a job done largely by six women mathematicians whose names went unrecorded for decades.

The decisive idea came in June 1945, in a document circulated as the *First Draft of a Report on the EDVAC*. Instructions, it proposed, should be stored in the same memory as data, in the same form, so that a machine could be re-tasked by loading different numbers rather than by rewiring. This is the **stored-program computer**, and every machine you have used is one. The draft carried only John von Neumann's name, though it recorded the work of a group including Eckert and Mauchly; circulating it also placed the idea in the public domain and helped ensure nobody could patent it. The architecture is still called the **von Neumann architecture**, and the credit dispute has never been fully settled.[^6]

The first machine actually to run a stored program was the Manchester "Baby" on 21 June 1948. It ran for 52 minutes and found the highest proper factor of 262,144, which is 131,072.

## The components shrink

| Year | Step | Consequence |
|---|---|---|
| 1947 | The transistor, at Bell Labs | A switch with no moving parts, no heat of a filament, and a long life |
| 1958–59 | The integrated circuit, Kilby and Noyce | Many transistors made at once on one piece of silicon |
| 1965 | Moore's observation | Component counts per chip had been doubling yearly; he predicted it would continue |
| 1971 | The Intel 4004 | A whole processor, 2,300 transistors, on one chip |
| 1974 | Dennard scaling | Smaller transistors also use proportionally less power, so speed could rise for free |
| 2005 | Dennard scaling ends | Clock speeds stall near 3–4 GHz; the industry turns to multiple cores |
| 2025 | 2-nanometer-class production begins | Around 200 billion transistors on a large chip (chapter 8) |

Gordon Moore's 1965 paper is worth reading for what it actually says: it is an economic observation about the number of components at which cost per component is lowest, extrapolated over ten years, not a law of physics.[^7] It held for sixty years because an industry organized itself around making it hold.

## Software becomes a discipline

Machines needed to be told what to do in something other than numbers. **FORTRAN** (1957, John Backus's team at IBM) proved that a compiler could produce code fast enough to displace hand-written assembly, which almost nobody believed beforehand. **LISP** (1958, John McCarthy) brought the lambda calculus into practice and with it recursion, garbage collection, and treating programs as data. **COBOL** (1959) aimed at business, drawing on Grace Hopper's earlier work on compilers and English-like syntax. **ALGOL 60** contributed block structure and a formal grammar and became the language everyone described algorithms in, including this guide. **C** (1972, Dennis Ritchie) gave a portable language close enough to the machine to write an operating system in, and **Unix**, rewritten in it, made the system portable too, which is why its descendants run most of the world's servers and every Android phone (chapters 9 and 10).

Theory kept pace. Donald Knuth began *The Art of Computer Programming* in 1962 and made the analysis of algorithms rigorous. In 1971 Stephen **Cook** proved that a single problem, satisfiability, is as hard as everything in a large and important class, and in 1972 Richard **Karp** showed that twenty-one familiar problems were all equivalent to it. That is the beginning of chapter 14, and of the P versus NP question.

## The network and the personal machine

The ARPANET sent its first message on 29 October 1969, from UCLA to Stanford Research Institute: the operators typed "LOGIN," the receiving machine crashed after two letters, and the first thing ever sent over the ancestor of the internet was "LO." Robert Kahn and Vinton Cerf published the protocol that became TCP/IP in 1974, and on 1 January 1983 the network switched over to it in a single planned cutover; that is the internet's birthday if it has one (chapter 17). Ethernet, invented by Robert Metcalfe and David Boggs, was published in 1976 and won the local network.[^8]

Meanwhile Douglas Engelbart's 1968 demonstration in San Francisco showed, in ninety minutes, the mouse, windows, hypertext, video conferencing, and collaborative editing, to an audience that had never seen a computer respond to a person at all. Xerox PARC built the Alto in 1973; Apple and then Microsoft commercialized the ideas; the machine moved from the machine room to the desk to the pocket.

In March 1989 Tim Berners-Lee, at CERN, proposed a system of linked documents to keep track of the laboratory's information. His manager's note on the proposal read "vague but exciting." CERN placed the web in the public domain in 1993, and the decision not to charge for it is one of the more consequential things anyone has ever declined to do.

:::know Dates to hold onto
**1843** Lovelace's Note G. **1936** Turing's paper and the lambda calculus. **1938** Shannon wires up Boolean algebra. **1945** the stored-program idea. **1947** the transistor. **1948** Shannon's information theory. **1969** ARPANET and Unix. **1971** Cook on NP-completeness; the first microprocessor. **1976–78** public-key cryptography. **1983** the internet switches to TCP/IP. **1989–91** the web. **2005** the end of free speed increases.
:::

## What we still do not know

Whether the Church–Turing thesis is a fact about mathematics or about physics: quantum machines compute the same *set* of functions but plausibly not at the same *cost* (chapter 21). Whether the P versus NP question, posed in 1971, is answerable by any technique now known; several proof strategies have themselves been proved insufficient (chapter 14). And whether the industry can find another sixty-year trend after the one that just ended.

:::try Put the idea to work
Why did defining a universal machine matter before engineers could build a useful electronic computer?

:::answer Show the reasoning
It separated the general ability to follow a computation from the construction of a particular device. A machine could change jobs by reading a different program instead of being rebuilt for each task. The abstraction also made it possible to prove limits that apply across implementations.
:::
:::

## Summary

- Algorithms are four thousand years old; the word comes from al-Khwārizmī, working in Baghdad around 820.
- Babbage designed a general-purpose mechanical computer in 1837; Lovelace published the first machine algorithm in 1843 and saw that such a machine could manipulate symbols, not only numbers.
- Computation was defined precisely in 1936, three independent ways that turned out to agree, in order to answer a question in logic; the first result was that some things cannot be computed.
- Shannon connected Boolean algebra to switching circuits in 1937, making circuit design calculable.
- The stored-program architecture dates from 1945, the transistor from 1947, the integrated circuit from 1958, the microprocessor from 1971; Moore's 1965 observation was economic, not physical, and held for sixty years.
- The internet's protocols date from 1974 and its cutover from 1983; the web was proposed in 1989 and given away in 1993.

[^1]: Knuth, D. E. (1972). "Ancient Babylonian Algorithms." *Communications of the ACM*, 15(7), 671–677. [doi:10.1145/361454.361514](https://doi.org/10.1145/361454.361514). Euclid, *Elements*, Book VII, Propositions 1–2.
[^2]: Menabrea, L. F., with notes by A. A. Lovelace (1843). "Sketch of the Analytical Engine Invented by Charles Babbage." *Scientific Memoirs*, 3, 666–731. Full text: [fourmilab.ch](https://www.fourmilab.ch/babbage/sketch.html). Hollings, C., Martin, U., Rice, A. (2018). *Ada Lovelace: The Making of a Computer Scientist*. Oxford: Bodleian Library.
[^3]: Turing, A. M. (1936). "On Computable Numbers, with an Application to the Entscheidungsproblem." *Proceedings of the London Mathematical Society*, s2-42(1), 230–265. [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230). Church, A. (1936). "An Unsolvable Problem of Elementary Number Theory." *American Journal of Mathematics*, 58(2), 345–363. [doi:10.2307/2371045](https://doi.org/10.2307/2371045).
[^4]: Shannon, C. E. (1938). "A Symbolic Analysis of Relay and Switching Circuits." *Transactions of the AIEE*, 57(12), 713–723. [doi:10.1109/T-AIEE.1938.5057767](https://doi.org/10.1109/T-AIEE.1938.5057767). Boole, G. (1854). *An Investigation of the Laws of Thought*. London: Walton and Maberly.
[^5]: Copeland, B. J. (ed.) (2006). *Colossus: The Secrets of Bletchley Park's Codebreaking Computers*. Oxford University Press. The National Museum of Computing's rebuilt Colossus: [tnmoc.org](https://www.tnmoc.org/colossus).
[^6]: von Neumann, J. (1945). *First Draft of a Report on the EDVAC*. Moore School of Electrical Engineering, University of Pennsylvania. Reprinted in *IEEE Annals of the History of Computing*, 15(4), 27–75 (1993). [doi:10.1109/85.238389](https://doi.org/10.1109/85.238389). Haigh, T., Priestley, M., Rope, C. (2016). *ENIAC in Action*. Cambridge, MA: MIT Press.
[^7]: Moore, G. E. (1965). "Cramming more components onto integrated circuits." *Electronics*, 38(8), 114–117. Reprinted: [doi:10.1109/N-SSC.2006.4785860](https://doi.org/10.1109/N-SSC.2006.4785860). Dennard, R. H. et al. (1974). "Design of ion-implanted MOSFET's with very small physical dimensions." *IEEE Journal of Solid-State Circuits*, 9(5), 256–268. [doi:10.1109/JSSC.1974.1050511](https://doi.org/10.1109/JSSC.1974.1050511)
[^8]: Cerf, V., Kahn, R. (1974). "A Protocol for Packet Network Intercommunication." *IEEE Transactions on Communications*, 22(5), 637–648. [doi:10.1109/TCOM.1974.1092259](https://doi.org/10.1109/TCOM.1974.1092259). Metcalfe, R. M., Boggs, D. R. (1976). "Ethernet: Distributed Packet Switching for Local Computer Networks." *Communications of the ACM*, 19(7), 395–404. [doi:10.1145/360248.360253](https://doi.org/10.1145/360248.360253). Berners-Lee, T. (1989). *Information Management: A Proposal*. CERN. [w3.org](https://www.w3.org/History/1989/proposal.html)
