---
title: Sentences Have Hidden Structure
subtitle: How grouping and dependency tell us who did what to whom.
part: II · Building Language
---

## Who has the binoculars?

“The ranger watched the visitor with binoculars.” Did the ranger use binoculars, or did the visitor have them? The words remain in the same order. The relationship of *with binoculars* to the rest of the sentence changes.

**Syntax** studies how words combine into larger structures. A sentence is a sequence, but sequence alone does not describe which pieces belong together. That is why replacing a vague word may fail to repair an ambiguous instruction: sometimes the problem is attachment.

## Build groups, then test them

A **constituent** is a unit in a structural analysis. In “The tired ranger watched the visitor,” *the tired ranger* forms a noun phrase. Its **head**, *ranger*, supplies the central category around which the phrase is organized. The phrase can be replaced by *she* or *he* in suitable contexts.

Replacement, movement, and coordination can provide evidence for constituency. No single test works perfectly for every construction. Pronouns have their own restrictions, and a movement can sound poor for reasons other than grouping. Use converging tests rather than treating one sentence as a mechanical verdict.

A **dependency** instead describes a relationship between a head and another word. A verb can connect to a subject and an object without requiring the same tree notation used in a constituency analysis. Different formalisms can capture some of the same generalizations while disagreeing elsewhere.

## Grammatical job and role in the event

In “The visitor opened the gate,” *the visitor* is the subject and the opener. In “The gate was opened by the visitor,” *the gate* is the subject, while the visitor remains the opener. **Subject** is a grammatical relation; **agent** names a participant's role in an event. They often align in simple examples, but they are not synonyms.

A verb's **arguments** are participants selected as part of its construction. *Give* invites a giver, something given, and a recipient, although context and grammar can leave some unexpressed. An optional description such as *after lunch* is often analyzed as an **adjunct**. The distinction helps explain why some missing pieces feel recoverable and others require changing the construction.

Word order is one way to signal relationships. Case marking and agreement provide others. Cross-language classifications such as SOV or SVO summarize dominant patterns in specified clause types; they do not describe every sentence. WALS explicitly distinguishes languages with a dominant order from those without one.[^1]

:::deeper Draw two structures for one sentence

### Make the ambiguity visible

Using simplified brackets for the binoculars sentence:

- Instrument reading: [The ranger] [watched [the visitor] [with binoculars]].
- Visitor-description reading: [The ranger] [watched [the visitor with binoculars]].

The bracket locations expose the different attachment. To force the instrument reading, write “Using binoculars, the ranger watched the visitor.” To force the other, write “The ranger watched the visitor who was carrying binoculars.” These revisions commit to different situations.

Now add another sentence: “The visitor whom the ranger watched waved.” The visitor is understood as the object of *watched* inside a relative clause and as the subject of *waved* in the larger clause. Linear proximity alone cannot identify both relationships. Hierarchical structure lets one phrase participate in an embedded description while retaining a role outside it.

Embedding can repeat, but human memory is finite. A grammatical rule that permits more nesting does not imply that readers will comfortably process a sentence with many nested dependencies. A model of possible structure and a model of processing difficulty answer related but distinct questions.
:::

## Why syntax matters for language models

A system can produce locally plausible word sequences while losing a long-distance relationship. To test structure, compare controlled alternatives: keep vocabulary similar while changing which noun governs agreement or which participant fills a role. Success on familiar templates might reflect repeated patterns; stronger tests use new vocabulary and structures held out of training where possible.

Recent research connects linguistic annotations with neuronal activity during speech, but such correspondence does not settle every debate about grammatical representation.[^2] Theories need predictions that separate them, not simply examples each can redescribe.

:::try Put the idea to work
In “The parcel was delivered by the courier,” identify the subject and the agent. Then rewrite it in the active voice while preserving those participants' event roles.

:::answer Show the reasoning
The subject is *the parcel*; the agent is *the courier*. “The courier delivered the parcel” makes the agent the subject. The change reorganizes grammatical relations and presentation, while preserving who delivered what.
:::
:::

## Summary

Sentences combine order with grouping and dependency. Keep grammatical relations separate from event roles, and keep possible structure separate from processing ease. Bracketing is a tool for explaining an ambiguity, not decoration added to a sentence.

[^1]: Dryer, M. S. Order of Subject, Object and Verb. WALS Online. [Definitions and cross-language data](https://wals.info/chapter/81).
[^2]: Cai, J. et al. (2026). Mapping the neuronal building blocks of human language with language models. Nature. [Primary study](https://www.nature.com/articles/s41586-026-10691-5).
