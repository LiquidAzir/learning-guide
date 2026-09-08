import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import { candidate, mergeCandidates, publicationDate, doiKey } from './discover-research.mjs';
import { validateReview, validateExplainer, validDate } from './research-schema.mjs';
const source = { subject: 'politics', name: 'Research Journal', issn: '0000-0000' };
const work = { DOI: '10.1000/ABC', type: 'journal-article', title: ['A paper'], 'published-online': { 'date-parts': [[2026, 8, 10]] }, 'published-print': { 'date-parts': [[2027, 1]] } };
test('discovery preserves first publication and partial dates; excludes future or invalid dates', () => {
  assert.equal(publicationDate(work), '2026-08-10');
  assert.equal(publicationDate({ issued: { 'date-parts': [[2025, 6]] } }), '2025-06');
  assert.equal(candidate(work, source, '2026-08-01'), null);
  assert.equal(candidate({ ...work, 'published-online': { 'date-parts': [[2026, 2, 30]] } }, source, '2026-09-08'), null);
  assert.equal(candidate({ ...work, type: 'book-review' }, source, '2026-09-08'), null);
  assert(!validDate('2026-02-30')); assert(validDate('2024-02-29')); assert(!validDate('2026-13', true));
});
test('deduplication preserves decisions and never requeues already included work', () => {
  const incoming = candidate(work, source, '2026-09-08');
  const existing = { ...incoming, status: 'rejected', reason: 'Editorial opinion, not the primary study', discovered: '2026-08-11' };
  const merged = mergeCandidates([existing], [incoming, incoming], new Set());
  assert.equal(merged.length, 1); assert.equal(merged[0].status, 'rejected'); assert.equal(merged[0].discovered, '2026-08-11');
  assert.equal(mergeCandidates([], [incoming], new Set(['politics/10.1000/abc'])).length, 0);
  assert.equal(mergeCandidates([incoming], [], new Set(['politics/10.1000/abc']))[0].status, 'included');
  assert.equal(doiKey('https://doi.org/10.1000/ABC'), '10.1000/abc');
});
test('review gate rejects incomplete methods, future checks, bad URLs, and broken background links', () => {
  const data = JSON.parse(fs.readFileSync('dist/data.json', 'utf8'));
  const record = JSON.parse(fs.readFileSync('research/reviewed/2026-09-08-battery-variation.json', 'utf8'));
  validateReview(record, data, '2026-09-08');
  for (const mutate of [r => r.review.decision = 'pending', r => r.review.checked = '2027-01-01', r => r.item.explainer.method = '', r => r.item.explainer.background = '#/engineering/missing', r => r.item.explainer.source = 'javascript:alert(1)', r => r.item.evidence = {}, r => r.item.date = '2026-02-30']) {
    const copy = structuredClone(record); mutate(copy); assert.throws(() => validateReview(copy, data, '2026-09-08'));
  }
  const bad = structuredClone(record.item); bad.explainer.background += '/missing'; assert.throws(() => validateExplainer(bad, data.subjects));
});
test('every subject has a selected discovery source and unreviewed files never enter the build', () => {
  const data = JSON.parse(fs.readFileSync('dist/data.json', 'utf8'));
  const sources = JSON.parse(fs.readFileSync('research/sources.json', 'utf8')).sources;
  for (const subject of data.subjects) assert(sources.some(s => s.subject === subject.id));
  assert(!fs.readFileSync('dist/index.html', 'utf8').includes('Unreviewed metadata. Open the primary source'));
});
