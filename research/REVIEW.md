# Discover, read, review, then publish

Run `npm run research:discover` to collect a bounded sample from the journals in
`research/sources.json`. The daily Codex task runs the same command. Crossref is a
metadata index, not a quality filter. The selected journals are a starting set,
not an exhaustive survey of a subject. Twelve results per journal and a rolling
30-day window keep the queue manageable; the report records truncated queries.
An editor can supplement discovery with primary repositories and journal sites.

Candidates and the run report are in `.research/`, which is ignored by Git and
never read by the public build. A failed source check is recorded as a failure,
not a successful update. Other sources can still produce candidates. Existing
decisions and rejected records survive future discovery runs. There is no daily
publication quota. Metadata can contain incorrect dates, editorial articles,
corrections, and duplicates; read the source before deciding what belongs.

For each worthwhile candidate:

1. Open the primary paper or substantive report. Read the available methods,
   results, and limitations. An abstract or title alone cannot support details
   it does not contain. If access prevents a sound explanation, defer it.
2. Apply `RESEARCH_POLICY.md`, including the stricter political-science policy.
   Reject campaign material, punditry, opinion pieces, and unsupported claims.
   A contested finding can qualify; an agreeable conclusion is not evidence.
3. Write a draft record in `research/reviewed/NAME.json` using the format below.
   All four explainer answers must be grounded in the primary source. Include a
   concrete example and a link to a relevant chapter section. Check that a
   claimed replication or field outcome is actually what the source measures.
4. Run `node scripts/review-research.mjs research/reviewed/NAME.json` to validate the
   record without changing the feed. Inspect the wording and rendered context.
5. Apply completed reviews with `npm run research:apply`. The batch validates
   every record before writing feeds, rejects cross-subject duplicates, preserves
   source and first-added dates, and skips unchanged or superseded reviews.
6. Run `npm test` and `node scripts/check-editorial.mjs`; inspect the diff.
   Commit only the reviewed records and changed research feeds, then push to
   `origin/main`. Render deploys that commit. After deployment, build the same
   commit and run `npm run research:check-live` to compare the actual live items
   against the committed feeds. A successful push alone is not publication.

The owner authorized automatic publication of source-reviewed research on
October 9, 2026. The daily task now discovers, reads, validates, applies, commits,
pushes and verifies publication; it must not stop at a draft notification.
At most six new studies per daily run, with attention rotating across subjects.
Use a clean checkout based on current `origin/main` for releases when the main
workspace contains other work. Never include unrelated edits or force-push.
If there is nothing suitable, publish nothing; report a publication gap of seven
days so a stalled task cannot stay silent. The daily hosted Research freshness
workflow independently checks the deployed feed and fails on a seven-day gap.
It is a monitor, not a substitute for reading papers. The local reviewer needs
the computer and desktop app running; the GitHub monitor does not.

Each source date keeps its original precision.
`added` records first inclusion in the guide. Do not invent addition dates for
legacy records or change one when correcting a summary. `verified` records the
actual source check. Neither a discovery run nor a rebuild advances those dates.

```json
{
  "subject": "politics",
  "review": {
    "reviewer": "Name or agent identity",
    "checked": "YYYY-MM-DD",
    "sourceRead": "https://primary-source.example/paper",
    "decision": "include",
    "reason": "Why this teaches a transferable idea, and what evidence supports it."
  },
  "item": {
    "id": "stable-descriptive-id",
    "title": "Original paper title",
    "headline": "A clear description of the finding",
    "authors": "Authors",
    "venue": "Journal or repository",
    "year": 2026,
    "date": "YYYY-MM-DD",
    "url": "https://primary-source.example/paper",
    "doi": "10.example/identifier",
    "topic": "institutional-design",
    "chapter": "frontier",
    "summary": "Finding, context, and a material limit.",
    "sourceType": "Journal publication",
    "status": "reported",
    "evidence": { "question": "Research question", "method": "Actual study design", "limitations": "Material limits" },
    "explainer": {
      "finding": "What did they find?",
      "method": "How did they test it?",
      "meaning": "Why does it matter? Include a concrete example.",
      "limits": "What remains uncertain?",
      "source": "https://primary-source.example/paper",
      "background": "#/politics/frontier"
    }
  }
}
```

Discovery uses the [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/)
and its [publication-date filters](https://www.crossref.org/documentation/retrieve-metadata/rest-api/rest-api-filters/).
