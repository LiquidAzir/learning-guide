---
title: How Software Is Actually Built
subtitle: Programming is making it work once. Engineering is keeping it working while ten people change it for ten years. What the evidence says, what has killed people, and what the tools now do.
part: IV · Systems in the World
---

## Recap

Everything so far has been about getting a computation right. This chapter is about the part that dominates cost and causes the failures that reach the news, and it is the part a computer science education usually treats last and least.

## The distinction

A useful definition: software engineering is programming integrated over time. A program written once, for yourself, to run today, has no need of tests, documentation, version control, review, or interfaces. The moment it must survive changing requirements, other people, and dependencies that move underneath it, all of those stop being overhead and become the work.

Fred Brooks, who managed IBM's OS/360, drew the other essential distinction in 1986. **Accidental complexity** comes from our tools and can be removed: assembly language, manual memory management, hand-rolled build systems. **Essential complexity** is in the problem itself — the tax code really does have that many cases, the business really does have those exceptions — and no tool removes it. His claim was that we had already taken most of the accidental complexity out, so no single innovation would give another tenfold improvement.[^1] Forty years of proposed silver bullets have mostly borne him out, and the current claim on the title is discussed at the end of this chapter.

His earlier and more famous observation is that adding people to a late project makes it later, because the communication paths grow as $n(n-1)/2$ while the work does not.

## The one structural idea

If there is a single technical idea in software engineering it is **modularity with information hiding**, stated by David Parnas in 1972. Split a system into parts, and let each part hide a decision that is likely to change, exposing only an interface that will not.[^2] Then a change to a hidden decision touches one module.

Everything since is a variation: encapsulation, layering, microservices, package interfaces, the layers of chapter 17. And the failure mode is always the same: the module boundaries were drawn around what the system does today rather than around what is likely to change, so every new requirement cuts across all of them.

## Version control and review

Git, written by Linus Torvalds in 2005 in about ten days after the Linux project lost access to its previous tool, is now nearly universal. Its model is a content-addressed graph of immutable snapshots, which is why branching and merging are cheap, and why history can be verified.

**Code review**, in which someone else reads a change before it merges, is the single most consistently supported practice in the field. Studies dating back to the 1970s find it catches a substantial share of defects, and the modern version is valued at least as much for spreading knowledge of the codebase as for finding bugs. The evidence favours small changes reviewed promptly; review effectiveness drops sharply beyond a few hundred lines.

## Testing, and what it cannot do

Tests come in a rough hierarchy: **unit** tests exercise one piece in isolation and run in milliseconds; **integration** tests check that pieces work together; **end-to-end** tests drive the whole system as a user would, and are slow and flaky. The usual advice is to have many of the first and few of the last, because the cost of diagnosing a failure rises with the scope of the test.

Dijkstra's warning stands: testing shows the presence of bugs, not their absence. Two techniques push past example-based testing.

**Property-based testing** states a property that should hold for all inputs — "encoding then decoding returns the original," "the output is sorted and a permutation of the input" — and generates hundreds of random inputs to attack it, shrinking any failure to a minimal case. It regularly finds edge cases nobody thought to write down.

**Fuzzing** throws malformed and random input at a program to make it crash, guided by coverage feedback so the generator learns which inputs reach new code. It is extraordinarily effective on parsers and anything handling untrusted input. Google's continuous fuzzing service for open-source projects has reported tens of thousands of bugs, a large fraction of them security-relevant, found by machines with no understanding of the code at all.[^3]

## Delivery

Continuous integration — every change built and tested automatically on merge — and continuous delivery — every passing change deployable — are now standard, and the multi-year research programme behind the DORA reports has consistently found four measures that predict both performance and reliability: how often you deploy, how long a change takes to reach production, how often deployments cause failures, and how quickly service is restored. The counterintuitive and repeatedly replicated finding is that speed and stability go together rather than trading off: teams deploying many times a day have *fewer* failures, because small changes are easier to review, to reason about, and to reverse.[^4]

## When it goes wrong

:::warning Four failures worth knowing
**Therac-25 (1985–87).** A radiation therapy machine gave massive overdoses to six patients, at least three of whom died. The causes were a race condition triggered when an operator typed quickly, an overflowing counter, the removal of the hardware interlocks that had covered for software faults in the previous model, and a company that repeatedly attributed reports to user error. It is the founding case study of software safety.[^5]

**Knight Capital (2012).** A deployment left old code on one of eight servers, where a repurposed flag activated a long-dead function. In 45 minutes the firm accumulated a $460 million loss and effectively ceased to exist. The proximate cause was an incomplete deployment; the real one was that nothing verified what was running where.[^6]

**Post Office Horizon (1999–2015 and after).** Accounting software produced shortfalls that were not the operators' doing. The Post Office prosecuted more than 700 sub-postmasters for theft and false accounting, some going to prison, while internally aware of bugs in the system and while asserting in court that the system was reliable. Convictions were quashed in bulk by legislation in 2024, and the public inquiry published its first volume, on human impact and redress, in July 2025, with the volumes on how it happened still to come. It is the worst known miscarriage of justice caused by software, and the failure was one of institutional trust in a system rather than of any single algorithm.[^7]

**CrowdStrike (2024).** A configuration update to security software crashed about 8.5 million Windows machines worldwide on 19 July, grounding flights and stopping hospitals and banks, with direct losses estimated in the billions. The content update bypassed the staged rollout used for code updates. The lesson repeated from all of the above: the thing you do not consider part of the software will be the thing that takes production down.[^8]
:::

The pattern across these is that the defect is usually small and known-in-principle, and the system around it — process, incentives, deployment, and the willingness to believe the machine over the people — turns it into a catastrophe.

## When correctness is worth proving

For most software, testing plus review is the right economic answer. For a narrow class it is not, and chapter 6's tools apply.

The seL4 microkernel carries a machine-checked proof of functional correctness (chapter 9); CompCert's verified core survived random testing that found hundreds of bugs in every other compiler (chapter 11). Between full proof and ordinary testing sits lightweight formal specification: Amazon's engineers have described using TLA+ to specify distributed protocols and finding design bugs — including ones requiring long, improbable sequences of events — that had survived deep testing, because a model checker explores state spaces no test suite reaches.[^9] The practical rule is to formalize the design, where errors are cheap to find and catastrophic to ship, rather than the whole implementation.

## The current argument

By 2026, most professional developers use AI assistants daily. The evidence about what that does is more mixed than either the marketing or the backlash suggests.

The most careful study to date is a randomized controlled trial run by METR in early 2025: sixteen experienced open-source maintainers, working on repositories they had contributed to for years, completed 246 real tasks with and without AI tools. They took **19 percent longer** with the tools — and believed they had been 20 percent faster. The authors are explicit about the limits: experienced developers on mature codebases they know intimately is the setting least favourable to an assistant, the tools were those of early 2025, and the sample is small; METR revised its experimental design in 2026 for exactly these reasons.[^10] The result should not be read as "AI does not help." It should be read as: the perception of speedup is unreliable, and the setting decides the answer.

The industry-scale survey work points the same way from a different angle. The 2025 DORA research found AI adoption near-universal and acting as an amplifier: it raises throughput, and in organizations without strong testing, review, and deployment practices it raises instability too, because the bottleneck was never typing.[^11] The benchmark numbers that circulate — models resolving 70 or 80 percent of issues in a standard suite — also need care: an independent audit of top leaderboard entries found that around a fifth of "solved" instances passed by coincidence or by exploiting the test harness rather than by producing correct code.

What is not in dispute is that the review burden has shifted. More code is produced, less of it is written by the person who submits it, and the practices in this chapter — small changes, tests that mean something, real review, staged deployment — become more load-bearing rather than less.

## What we still argue about

Whether the classic project-failure statistics that everyone quotes are sound; the best-known survey has been criticized for decades over its definitions and sampling, and the honest position is that we know large projects fail often and not how often. Whether estimation can be made reliable, after fifty years of evidence that it cannot. Whether formal methods will move beyond their niche. And whether AI assistance ends up as Brooks's silver bullet or as another tool that removes accidental complexity while leaving the essential kind untouched.

## Summary

- Software engineering is programming integrated over time; the practices that look like overhead exist because of change, other people, and duration.
- Brooks distinguished accidental from essential complexity and predicted no single tool would give another tenfold gain; adding people to a late project makes it later.
- Modularity with information hiding, from 1972, is the field's one structural idea, and modules fail when drawn around today's behaviour rather than around what will change.
- Code review is the best-supported practice; property-based testing and coverage-guided fuzzing find what example tests do not.
- Deploying frequently in small changes correlates with *fewer* failures, not more, a finding replicated over a decade of research.
- Therac-25, Knight Capital, Horizon, and CrowdStrike each turned a small defect into a catastrophe through the surrounding process, not the code alone.
- A 2025 randomized trial found experienced developers 19 percent slower with AI assistance while believing they were 20 percent faster; larger surveys find AI amplifies whatever engineering practices an organization already has.

[^1]: Brooks, F. P. (1987). "No Silver Bullet: Essence and Accidents of Software Engineering." *Computer*, 20(4), 10–19. [doi:10.1109/MC.1987.1663532](https://doi.org/10.1109/MC.1987.1663532). Brooks, F. P. (1975). *The Mythical Man-Month*. Reading, MA: Addison-Wesley.
[^2]: Parnas, D. L. (1972). "On the criteria to be used in decomposing systems into modules." *Communications of the ACM*, 15(12), 1053–1058. [doi:10.1145/361598.361623](https://doi.org/10.1145/361598.361623). Winters, T., Manshreck, T., Wright, H. (2020). *Software Engineering at Google*. Sebastopol: O'Reilly.
[^3]: Dijkstra, E. W. (1972). "The Humble Programmer" (1972 Turing Award lecture). *Communications of the ACM*, 15(10), 859–866. [doi:10.1145/355604.361591](https://doi.org/10.1145/355604.361591). Claessen, K., Hughes, J. (2000). "QuickCheck: a lightweight tool for random testing of Haskell programs." *ICFP '00*, 268–279. [doi:10.1145/351240.351266](https://doi.org/10.1145/351240.351266). Google OSS-Fuzz project statistics: [github.com/google/oss-fuzz](https://github.com/google/oss-fuzz)
[^4]: Forsgren, N., Humble, J., Kim, G. (2018). *Accelerate: The Science of Lean Software and DevOps*. Portland: IT Revolution. DORA research programme publications: [dora.dev/research/publications](https://dora.dev/research/publications/)
[^5]: Leveson, N. G., Turner, C. S. (1993). "An investigation of the Therac-25 accidents." *Computer*, 26(7), 18–41. [doi:10.1109/MC.1993.274940](https://doi.org/10.1109/MC.1993.274940)
[^6]: US Securities and Exchange Commission (2013). *In the Matter of Knight Capital Americas LLC*, Administrative Proceeding File No. 3-15570. [sec.gov](https://www.sec.gov/litigation/admin/2013/34-70694.pdf)
[^7]: Post Office (Horizon System) Offences Act 2024. [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2024/14/enacted). *Post Office Horizon IT Inquiry* (chaired by Sir Wyn Williams), published findings. [postofficehorizoninquiry.org.uk](https://www.postofficehorizoninquiry.org.uk/). *Bates v Post Office Ltd* (No. 6: Horizon Issues) [2019] EWHC 3408 (QB).
[^8]: CrowdStrike (2024). *External Technical Root Cause Analysis — Channel File 291*. [crowdstrike.com](https://www.crowdstrike.com/en-us/blog/channel-file-291-rca-available/). Microsoft's estimate of about 8.5 million affected Windows devices was published on 20 July 2024.
[^9]: Newcombe, C. et al. (2015). "How Amazon Web Services Uses Formal Methods." *Communications of the ACM*, 58(4), 66–73. [doi:10.1145/2699417](https://doi.org/10.1145/2699417)
[^10]: Becker, J. et al. (METR) (2025). "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." [arXiv:2507.09089](https://arxiv.org/abs/2507.09089), [metr.org](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). METR (2026). "We are changing our developer productivity experiment design," 24 February. [metr.org](https://metr.org/blog/2026-02-24-uplift-update/)
[^11]: DORA (2025). *State of AI-assisted Software Development*. Google Cloud. [dora.dev/dora-report-2025](https://dora.dev/dora-report-2025/). On benchmark inflation: Wang, Y. et al. (2025). "UTBoost: Rigorous Evaluation of Coding Agents on SWE-Bench." [arXiv:2506.09289](https://arxiv.org/abs/2506.09289)
