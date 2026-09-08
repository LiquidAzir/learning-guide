# Editorial implementation

Implemented September 7, 2026, against repository revision `10b8509`. The original recommendations are preserved in `EDITORIAL_REVIEW.md`; `EDITORIAL_STYLE.md` records the conventions for future work.

## What changed

The pass covers all eight subjects. It preserves the substantive explanations, historical material, equations, source lists, and original research summaries while improving the route into them.

- Replaced topic-list recap headings with chapter-specific questions where those recaps existed. Kept useful historical scenes and existing question-led openings.
- Added a practical reading route to each introduction and removed promises that one reading guarantees understanding.
- Added 155 application questions, one per core chapter, with expandable reasoning. The questions test calculations, predictions, model limits, causal reasoning, or source interpretation. Introductions, people chapters, and glossaries retain their reference or orientation roles.
- Reworked the SQL example with sample input and output tables, the neural-network example with training/validation/test separation, the matrix explanation with a recurring triangle, and analytical chemistry with a sample that connects the instruments.
- Corrected contradictions and misleading shorthand, including shell capacities versus period lengths, energy borrowing during tunneling, bounded counting, the age boundary in De Morgan's law, the can optimization, trade arithmetic, genome-copy counts, lung-area estimates, historical attribution, population decline, and sensitive historical judgments.
- Split dense passages on public debt, AI mathematics, and Japanese unification. Gave the classification checklist a practical decision-making role distinct from its summary.
- Separated easily confused glossary concepts, paired dynasty names with dates in a table, expanded chapter links, and added 1,321 direct glossary search targets. Genuine synonyms can still share an entry.
- Wrote accessible headlines for all 399 research entries while retaining their original titles, summaries, links, and source-check dates. Source format is displayed separately from claim status. “Reported” replaces the inconsistent “confirmed” category without inventing evidence of replication.
- Revised home-page and subject descriptions to explain what readers can learn and do. Added keyboard-accessible disclosures and print behavior that includes worked answers.

The lung-area correction follows the study's reported mean of 143 m², rounded to about 140 m² and explicitly tied to its sample and measurement conditions, rather than presenting 70 or 130 m² as a universal body constant. The study abstract is reproduced in the [EPA reference record](https://hero.epa.gov/reference/3418/); the existing chapter citation remains.

## Verification

`node scripts/check-editorial.mjs` builds the actual guide and checks answer coverage and closure, math rendering, glossary targets, research metadata and chapter destinations, and regressions for the trigonometry paragraph and SQL result. It also checks normalization of redirected cached navigation responses.

The browser DOM audit covered all 179 compiled chapters: 155 answer disclosures, 1,321 glossary targets, more than 3,200 MathML expressions, and internal chapter links, with no reported errors. Browser interaction checks covered answer disclosure by keyboard, search-to-definition navigation, source details, print expansion and restoration, desktop and 390-pixel phone layouts, and offline navigation after the service worker took control.

The phone check found a long inline geometry calculation that overflowed the page; it is now two readable calculation steps. Reopening the guide exposed an existing service-worker issue when the static server redirects `/index.html` to `/`; redirected cached responses are now normalized before being returned for navigation. Online reopening and offline chapter navigation passed afterward in a fresh browser session.

The SQL query was executed in SQLite against the displayed sample rows and returned Canada, 2 orders, 11,000 revenue. The cylinder proportions and revised trade allocation were independently checked arithmetically. The Python training example compiles, uses validation inside the training loop, and reserves test evaluation for afterward. A full MNIST training run was not performed because PyTorch and torchvision are not installed in the available Python environment.

This was an editorial and internal-consistency pass, not an independent re-verification of all research publications. Existing source-check dates were preserved. Testing with actual intended readers remains a separate activity: no human comprehension study is claimed. The style guide supplies a concrete protocol for that next stage.

The editorial pass was completed and validated locally before publication.
