---
title: Start Here
subtitle: What computer science actually is, why it is not the same thing as programming, and how to read this guide.
part: I · Foundations
---

## One tap

You tap a link. Before the page appears, this happens.

Your phone asks the network what address the name belongs to, and gets an answer from a chain of servers that between them know every name on the internet. It opens a connection by sending one small packet and waiting for one back. It then negotiates a shared secret with a machine it has never met, over a wire anyone can listen to, using arithmetic on a curve, and neither side ever sends the secret. It requests the page. The request is chopped into packets that travel as pulses of infrared light down a glass fiber at about two-thirds the speed of light, are read and forwarded by perhaps fifteen routers, each deciding in under a microsecond where to send them next, and arrive at a building where a program searches an index of hundreds of billions of documents and returns the best matches. The reply comes back, is reassembled in order despite having taken several paths, is decrypted, is parsed into a tree of elements, is laid out, and is turned into a few million colored dots by a chip doing several trillion arithmetic operations per second. You see the page in about a fifth of a second, and you are annoyed if it takes longer.

Every step in that paragraph is a chapter in this guide. None of them is programming.

## What the subject actually is

**Computer science** is the study of computation: what can be computed, what it costs to compute it, and how to build machines, languages, and systems that compute reliably. The oldest joke in the field is that it is no more about computers than astronomy is about telescopes, and like most old jokes it is half true. Computers are the instruments. The subject is the phenomenon.[^1]

The founding move was to define computation without mentioning any machine. In 1936 Alan Turing, then twenty-three, described an imaginary device: an endless paper tape divided into squares, a head that can read and write one symbol at a time and move one square left or right, and a finite table of rules saying what to do for each combination of current state and current symbol. That is the whole machine. Turing then argued that anything a human being could calculate by following a fixed procedure, this device could calculate too, and he proved that some perfectly clear questions have no procedure at all.[^2] Nine years before any electronic computer ran a program, the limits of every computer that would ever be built had been established.

:::key
Three questions organize the whole subject, and this guide is arranged around them.

1. **What can be computed at all?** Some questions have no algorithm, and we can prove it (chapters 5 and 6).
2. **What can be computed cheaply?** Some questions have algorithms that would take longer than the universe has lasted, and whether that is unavoidable is the most famous open problem in the field (chapter 14).
3. **How do we build machines and programs that actually work?** Almost everything you touch is an answer to this one, and it is the part that fails most often (chapters 7 through 20).
:::

## Why it is not programming

Programming is to computer science roughly what writing is to literature: the medium, necessary, and not the point. You can be an excellent programmer without knowing why no program can decide whether another program will finish, and you can prove deep things about computation without writing code. Most of this guide assumes you will never write a line, and where code would explain something faster than prose, it appears as a few lines of the plainest possible pseudocode with every symbol named.

What the subject gives you instead is a set of instincts that transfer. That most problems have a cost curve, and that the difference between a good algorithm and a bad one grows with the size of the problem rather than staying fixed. That any layer of a system can be replaced by another with the same interface, which is why the internet survived the replacement of nearly all of its hardware. That the hard part of building anything large is not the parts but the joints. That a system fast enough for one user can be unusable for a thousand, for reasons that are predictable in advance.

## The map

| Part | Chapters | The question it answers |
|---|---|---|
| Foundations | 1–6 | What is information, what is an algorithm, what is impossible |
| The Machine | 7–11 | How a pile of switches ends up running a language |
| Methods | 12–16 | How to organize data and time, and what is hard |
| Systems in the World | 17–20 | Networks, secrets, pixels, and how software is really built |
| The Edge | 21–24 | Quantum machines, open problems, the people, the numbers |

The order is deliberate: each part is built on the one before it, and the machine is explained from the bottom up, so that by chapter 11 there is nothing left that is magic. If you want a single chapter to test whether this guide suits you, read chapter 14.

Artificial intelligence is a branch of computer science with a guide of its own here, and this one does not repeat it. Where a topic belongs there, you will find a link, like this one to [what a neural network is](#/ai/neural-networks). What this guide gives you that the AI guide assumes is the ground underneath: what a computation costs, why a GPU is shaped the way it is, and what "training" is actually doing to a machine.

## How to read this

Each chapter is built the same way.

- **Bold terms** are defined where they appear. Chapter 24 collects every one of them, along with the numbers worth memorizing.
- Colored boxes mark the interruptions: a **key idea** worth slowing down for, a **story** from the history, a **math box** that shows the real formula and explains every symbol in it, a **how to** with a procedure you can follow, a **who did this** portrait, a **common confusion**, and a **where it stands** note on what is unsettled.
- Every factual claim points to a numbered source at the foot of the chapter, and where the original paper is free to read, the link goes to it.
- The math is real but never decorative. Computer science has less of it than physics and more of it than most people expect, and almost all of it is counting: how many steps, how many bits, how many messages.

:::try Think about it
Before reading on, guess how many times a modern laptop can add two numbers in the time it takes light to cross a room, about ten nanoseconds. Then guess how many times it can read a random value out of its main memory in the same time. The two answers differ by a factor of several hundred, and chapter 8 is largely about what follows from that gap.
:::

## A word about honesty

Computer science has a marketing problem. It is a field where a working demonstration is worth more than a proof to most audiences, where the words "intelligent," "secure," and "quantum" are used to sell things, and where the distance between a laboratory result and a product is routinely misreported in both directions. This guide tries to be exact about which is which. Where a system is deployed and load-bearing, it says so. Where a result is a single paper not yet replicated, it says that. Where the field genuinely does not know, which is more often than the press suggests, it says that too, and chapter 22 collects the open questions in one place.

Two habits are worth adopting from the first page. When someone claims a speedup, ask "compared to what, on what size of input?" — the answer is usually where the trick is. And when someone claims a system is secure, ask "against whom, and assuming what?" — security is never a property of a thing, only of a thing against an attacker with stated powers.

The next chapter is the history: how a question about the foundations of mathematics turned, in ninety years, into the machine in your pocket.

[^1]: Denning, P. J. (2005). "Is computer science science?" *Communications of the ACM*, 48(4), 27–31. [doi:10.1145/1053291.1053309](https://doi.org/10.1145/1053291.1053309). The "no more about computers than astronomy is about telescopes" line is usually attributed to Edsger Dijkstra, but no source in his own writing has ever been produced; it is best treated as a piece of folklore.
[^2]: Turing, A. M. (1936). "On Computable Numbers, with an Application to the Entscheidungsproblem." *Proceedings of the London Mathematical Society*, s2-42(1), 230–265. [doi:10.1112/plms/s2-42.1.230](https://doi.org/10.1112/plms/s2-42.1.230). Free copy: [cs.virginia.edu](https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf).
