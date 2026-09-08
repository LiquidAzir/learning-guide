---
title: The Operating System
subtitle: The program that lies to every other program, convincingly: that it has the machine to itself, that memory is infinite and private, and that a disk is a list of named files.
part: II · The Machine
---

## How can many programs share one machine safely?

Chapter 8 left us with a processor that executes one instruction stream and a physical memory shared by everything. Your laptop is running several hundred programs right now, none of which can see the others' data, on a machine with a handful of cores. The program that manages that fiction is the operating system, and it does two jobs: **abstraction** and **arbitration**.

## The two jobs

**Abstraction.** Raw hardware is intolerable to program against. A disk is a set of numbered blocks on rotating platters or in flash cells with wear-levelling; a network card is a ring of buffers and interrupt lines. The operating system offers instead a file with a name, a socket you can write to, a block of memory that is yours. These abstractions are so successful that most programmers never learn what is underneath, which is the point.

**Arbitration.** One processor, many programs; one network card, many connections. Somebody has to decide who runs next and stop them from reading each other's data. That requires the operating system to have powers no other program has.

## Two worlds, one door

Processors provide at least two privilege levels. In **user mode**, certain instructions are forbidden: talking directly to devices, changing the memory map, disabling interrupts. In **kernel mode** everything is permitted. The **kernel** is the part of the operating system that runs in the privileged mode.

A program that needs something privileged makes a **system call**: it puts a number in a register saying what it wants and executes a special instruction that traps into the kernel at a fixed, controlled entry point. The kernel checks the arguments, does the work, and returns. This is the only door, and its narrowness is the whole security model: a program cannot reach the hardware except through calls the kernel is willing to make on its behalf. Linux has roughly 350 system calls; a program that opens a file, reads it, and prints it makes about a dozen.

The transition is not free. A system call costs on the order of a microsecond, which by chapter 8's table is a thousand nanoseconds, or a very long time. This is why high-performance systems batch their calls, and why techniques that bypass the kernel for network and storage traffic have become standard in data centres.

## Processes: pretending to own the processor

A **process** is a running program plus everything it owns: its memory, its open files, its identity, its place in the instruction stream. The kernel keeps a table of them and performs a **context switch** to change which one is running: save the current process's registers, load another's, and jump. A switch costs a few microseconds, and rather more in practice because the new process arrives to find the caches full of the old one's data (chapter 8).

The **scheduler** decides who runs. A modern general-purpose scheduler tries to be fair over time, to favour processes that have recently been waiting for input so that interactive work feels responsive, and to keep processes on the core whose cache they last warmed. Linux's scheduler was replaced in 2023 by one based on a scheme called EEVDF, which tracks each task's "lag," the difference between the processor time it deserved and the time it got, and runs the one furthest behind. Real-time systems, where a missed deadline is a failure rather than a nuisance, use completely different schedulers with provable worst-case guarantees.

A **thread** is a stream of execution inside a process: several threads share one memory space, which makes communication between them free and makes their bugs the subject of chapter 15.

## Virtual memory: the best lie in computing

Every program you write uses addresses starting near zero and running up, as if the machine were empty and belonged to you. It is not, and it does not.

The kernel and the hardware maintain a **page table**: a map from the addresses a program uses (**virtual**) to the addresses in the physical memory chips (**physical**), in chunks called **pages**, usually 4 kilobytes. Every memory access goes through this translation, done by a piece of hardware called the memory management unit, with recent translations cached in a **translation lookaside buffer** so that the common case costs almost nothing.[^1]

What this buys is remarkable, and it is the reason essentially every operating system since the 1960s has it.

- **Isolation.** If a page is not in your table, you cannot name it. One program cannot read another's memory even by accident, because it has no way to express the address.
- **Placement freedom.** Your contiguous-looking memory can be scattered across physical chips, so memory need not be defragmented.
- **Overcommitment.** A page that is not being used can be written to disk and its physical frame given to somebody else; touching it again causes a **page fault**, and the kernel fetches it back while the program waits. That is why a machine can run programs whose total memory exceeds what it has, and why a machine that is doing too much of it grinds to a halt.
- **Sharing.** One copy of a shared library, mapped into forty processes' page tables, occupies memory once.
- **Copy-on-write.** Duplicating a process can map the same pages into both and mark them read-only, copying a page only when one side actually writes to it. Most programs never write most of their pages, so this is nearly free.

:::key
Virtual memory is the single most valuable abstraction in systems software. Every program is written as though it owned a private, contiguous, unlimited memory, and the hardware plus kernel maintain that illusion at a cost of a few nanoseconds per access. Isolation, sharing, swapping, and process creation are all consequences of the same table.
:::

## Files

A **file system** turns a device that stores numbered blocks into named, growable, hierarchical files. The classical Unix design stores each file's metadata (size, owner, timestamps, permissions) and the list of its data blocks in an **inode**, and a directory is simply a file listing names against inode numbers. Because names are separate from inodes, a file can have several names, and deleting one of them just decrements a counter.

The hard problem is not naming; it is crashing. If the machine loses power in the middle of an update, half-written metadata can leave the file system inconsistent in ways that lose far more than the file being written. The standard solution is **journaling**: write a description of the intended change to a log, flush it, then perform the change; after a crash, replay or discard the log. Modern designs go further with copy-on-write, never overwriting live data, so that the old version remains valid until the new one is complete.

Every file system also lies about writes, for speed: a write returns as soon as the data is in memory, and reaches the device later. Programs that need a guarantee must ask for one explicitly, and the number of production databases and applications that have lost data by not doing so, or by trusting hardware that lied in turn, is embarrassing.

## Kernel designs, and one settled argument

A **monolithic** kernel puts everything — scheduler, memory, file systems, network stack, drivers — in the privileged mode, communicating by ordinary function calls. It is fast, and any bug anywhere can corrupt anything. Linux is monolithic, weighs over forty million lines of source, and is the most-used kernel design in history by a wide margin.[^2]

A **microkernel** puts the minimum in privileged mode — address spaces, threads, and message passing — and runs drivers and file systems as ordinary isolated processes. A crashed driver takes down only itself. The cost is that every interaction becomes a message rather than a call. The argument raged in the 1990s, famously between Andrew Tanenbaum and Linus Torvalds, and monolithic kernels won the desktop and server. Microkernels won where isolation is worth more than throughput: they run in aircraft, cars, medical devices, and the security processors inside phones. The strongest evidence for the design is that seL4, a microkernel of about 10,000 lines, carries a machine-checked proof of functional correctness (chapters 6 and 20) — a thing no monolithic kernel could plausibly attempt.[^3]

## Virtual machines and containers

If the kernel can lie to programs, something can lie to kernels. A **hypervisor** presents virtual hardware, so an entire operating system runs as a guest, unaware. Modern processors support this directly, adding a second layer of address translation. This is what makes cloud computing possible: sell an hour of a virtual machine on hardware shared with strangers.[^4]

Virtual machines are heavy, since each carries a whole operating system. **Containers** are the lighter alternative: one kernel, but processes are given separate views of the file system, network, and process table, using kernel features called namespaces and control groups. A container is not a security boundary of the same strength as a virtual machine, because everything inside still talks to the one shared kernel, and a kernel bug is a way out. Most large deployments therefore use both: containers for packaging, virtual machines for isolation between tenants.

:::story The system that took over
Unix began in 1969 as a side project at Bell Labs after the company withdrew from the ambitious Multics effort. Ken Thompson wrote the first version in weeks on a cast-off machine; Dennis Ritchie invented C so it could be rewritten portably (chapter 10). Its design ideas — everything is a file, small tools composed by pipes, a hierarchical file system, a shell that is an ordinary program — were published in 1974 and spread through universities on cheap source licences.[^5] In 1991 a Finnish student, unable to afford a commercial Unix, announced a hobby kernel that would be "nothing big and professional." Today its descendants run essentially all of the top 500 supercomputers, the majority of web servers, every Android phone, and, in a different lineage from the same root, every Mac and iPhone.
:::

## What we still argue about

Whether the kernel should be rewritten in a memory-safe language: Rust support in Linux was declared no longer experimental at the December 2025 maintainers summit after five years of argument, on a policy of new code only, with no forced migration.[^6] Whether the system-call interface is the right boundary now that fast devices make its cost the dominant one. And whether containers can be made a strong enough isolation boundary to stop the industry running two layers of virtualization for one workload.

:::try Put the idea to work
Two programs both use the same numerical virtual address. Must they be reading the same physical memory?

:::answer Show the reasoning
No. Each process can have its own address space, with page tables mapping the same virtual address to different physical locations. The operating system and hardware enforce those mappings. Shared memory is possible, but it requires an intentional mapping rather than numerical address equality alone.
:::
:::

## Summary

- An operating system abstracts hardware into files, processes, and sockets, and arbitrates access to it; the kernel runs in a privileged processor mode.
- System calls are the only door between the two worlds, and cost around a microsecond, which is why fast systems batch or bypass them.
- Processes are isolated programs, threads share memory inside one; a context switch costs a few microseconds plus the cold caches it leaves behind.
- Virtual memory maps per-process addresses to physical pages, providing isolation, sharing, overcommitment, and cheap process creation from one mechanism.
- File systems make blocks into names, and their real difficulty is surviving crashes, handled by journaling or copy-on-write; writes are buffered unless you explicitly demand otherwise.
- Monolithic kernels won on performance, microkernels where isolation matters most, and seL4 shows what verification can do at 10,000 lines that is hopeless at forty million.

[^1]: Denning, P. J. (1970). "Virtual Memory." *ACM Computing Surveys*, 2(3), 153–189. [doi:10.1145/356571.356573](https://doi.org/10.1145/356571.356573). Arpaci-Dusseau, R. H., Arpaci-Dusseau, A. C. (2018). *Operating Systems: Three Easy Pieces*. Free online: [pages.cs.wisc.edu/~remzi/OSTEP](https://pages.cs.wisc.edu/~remzi/OSTEP/)
[^2]: Tanenbaum, A. S., Bos, H. (2022). *Modern Operating Systems*, 5th ed. Harlow: Pearson. Line counts from the kernel source tree: the mainline kernel passed 40 million lines during 2025 and continues to grow by roughly a million lines a year, most of it device drivers.
[^3]: Klein, G. et al. (2009). "seL4: Formal Verification of an OS Kernel." *SOSP '09*, 207–220. [doi:10.1145/1629575.1629596](https://doi.org/10.1145/1629575.1629596). The Tanenbaum–Torvalds debate is archived at [oreilly.com](https://www.oreilly.com/openbook/opensources/book/appa.html).
[^4]: Barham, P. et al. (2003). "Xen and the Art of Virtualization." *SOSP '03*, 164–177. [doi:10.1145/945445.945462](https://doi.org/10.1145/945445.945462). Popek, G. J., Goldberg, R. P. (1974). "Formal requirements for virtualizable third generation architectures." *Communications of the ACM*, 17(7), 412–421. [doi:10.1145/361011.361073](https://doi.org/10.1145/361011.361073)
[^5]: Ritchie, D. M., Thompson, K. (1974). "The UNIX Time-Sharing System." *Communications of the ACM*, 17(7), 365–375. [doi:10.1145/361011.361061](https://doi.org/10.1145/361011.361061). Torvalds' announcement of 25 August 1991 is preserved in the comp.os.minix archives.
[^6]: Corbet, J. (2025). "The (successful) end of the kernel Rust experiment." *LWN.net*, December. [lwn.net/Articles/1049831](https://lwn.net/Articles/1049831/); "rust: conclude the Rust experiment." [lwn.net/Articles/1050308](https://lwn.net/Articles/1050308/)
