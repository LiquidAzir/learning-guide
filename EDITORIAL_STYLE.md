# Writing for the Learning Guide

Write for a curious adult who wants a real explanation and is willing to think. Keep the mechanisms, mathematics, history, and uncertainty. Make them easier to follow through concrete examples and careful sequencing.

## Give the reader a reason to care

Open a core chapter with a question, problem, observation, or historical scene that the chapter can explain. Prefer a specific puzzle to a list of topics. A recap should connect a useful earlier idea to the new problem; it should not repeat the previous chapter's entire summary.

Use a running example when several tools solve successive parts of one problem. Return to it at the transition that makes the next tool necessary. Examples must illustrate the actual claim: check quantities, assumptions, and results together.

## Explain without flattening

- Give a paragraph one main job. Separate the mechanism, example, and qualification when all three compete for attention.
- Define a term when it becomes useful. Explain an equation's quantities, units, assumptions, and practical meaning before asking the reader to use it.
- Keep detailed derivations and reference facts available. Explain which tools a reader needs now and which can wait until a later chapter.
- Use a concrete verb and a familiar example before an abstract label. Keep humor or surprise when it reveals something; remove it when it substitutes for an explanation.
- Avoid promises such as “read this once,” “every equation will make sense,” or “this cures hallucination.” Describe the help the guide provides and the practice it requires.
- Preserve legitimate universal statements in mathematics and definitions. Qualify empirical claims according to their actual scope, rather than weakening every sentence mechanically.

## Let readers use the ideas

Each core chapter has a short application, prediction, comparison, or calculation near the end. It should test a consequential distinction rather than a name or a date already printed nearby. Reference and introduction chapters do not need the same exercise format.

Use a nested answer callout so the reader chooses when to see the reasoning:

```markdown
:::try Put the idea to work
State a concrete question with enough information to answer it.

:::answer Show the reasoning
Explain the result and the step that makes it follow. Include assumptions or a plausible alternative when they matter.
:::
:::
```

For historical interpretation, “One way to reason it through” acknowledges that a well-supported answer need not use exactly the same words. Distinguish observation from inference and identify evidence that could change the interpretation.

## Make the ending useful

The summary retrieves the chapter's main explanatory ideas. A nearby practical checklist should instead help the reader make a decision or avoid a mistake. A formula table is a reference; it does not need to repeat every summary bullet. Remove duplicated duties before removing substantive detail.

Split distinct glossary concepts into separate definitions; keep genuine synonyms together. Define acronyms, associate numbers with their conditions, and link to the chapter that explains the idea. The build gives glossary entries direct search targets; keep the term at the beginning of a bold-led paragraph or in the supported term table.

## Be exact about evidence and people

Attribute judgments to the people or sources that made them. Explain a historical actor's motives without assuming that material interest excludes sincere belief. Avoid treating any region as merely “the rest,” or a society as a timeless personality.

For research entries, write a short plain-language `headline` and retain the original bibliographic `title`. The summary should explain what was found or announced, why it matters, and what the evidence does not establish. Define specialist language needed to understand the finding.

`sourceType` describes the source's format. `status` describes the claim's recorded treatment: `reported`, `preliminary`, `disputed`, or `retracted`. A journal publication, conference paper, award, or official announcement does not by itself establish independent replication. The `verified` date records the source check already made; do not advance it merely for a wording change.

Research explainers use four plain-text fields: `finding`, `method`, `meaning`, and `limits`, displayed as “What did they find?”, “How did they test it?”, “Why does it matter?”, and “What remains uncertain?”. Include `source` (the primary source used to check the explanation) and `background` (a `#/subject/chapter/section` link). Aim for 80–150 words, allowing shorter explanations when that is enough. Include a concrete example without turning it into an invented study result. For formal proofs, reports, and announcements, explain the actual form of evidence rather than implying an experiment occurred. Legacy `paragraphs` explainers remain supported. Keep the existing detailed summary and bibliographic fields. These are stored explanations, not generated on demand. Read the source before adding or revising one. New reviewed research requires the four-part format.

Use `:::deeper Descriptive title` for an optional worked section after a concise core explanation. Name the puzzle or mechanism in its title, preserve equations and assumptions, and use ordinary headings inside it. Contents and search links open the section automatically; printouts include it. A hypothetical example must be recognizable as an example, with arithmetic checked independently.

Keep research item IDs stable: bookmarks and the new-since-last-visit view use the subject ID plus item ID. Editing an existing entry must not give it a new identity. The browser compares collection snapshots; a newly added older paper can be new to the reader without changing its publication date. Entries already present on the reader's first visit establish the baseline. Visits separated by less than 30 minutes of inactivity share a baseline, including reloads. Research preferences use separate browser storage keys from chapter progress; they do not sync between devices. The public collection is compiled with the site. Scheduled discovery collects private candidates; source review and publication remain separate steps. See research/REVIEW.md.

## Check before shipping

For new research entries, also follow [the research selection policy](RESEARCH_POLICY.md). Political-science entries require a primary research source, eligible source format, and explicit question, method, and limitations. Editorial review must assess learning value and evidentiary quality; metadata validation alone cannot do that.

Check worked arithmetic and code examples, summary/body consistency, dates and attribution, cross-references, table rendering, math rendering, answer disclosure, glossary search, and narrow-screen layout. Keep original sources and substantive caveats when simplifying language.

A browser check can establish that the guide works. It cannot establish that a newcomer understands it. For reader testing, give someone a chapter, ask them to explain its main idea and attempt its question, then revise the point where their reasoning stalls. Record actual observations rather than predicting a reader's experience on their behalf.
