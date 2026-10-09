import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { planReviews } from './apply-reviewed-research.mjs';
import { checkLive } from './check-research-live.mjs';
const data = JSON.parse(fs.readFileSync('dist/data.json'));
const record = JSON.parse(fs.readFileSync('research/reviewed/2026-10-09-multiple-translation-teachers-2026.json'));
const fresh = () => {
  const d = structuredClone(data);
  d.subjects.find(s => s.id === record.subject).research.items =
    d.subjects.find(s => s.id === record.subject).research.items.filter(i => i.id !== record.item.id);
  return d;
};
test('review publication is idempotent and preserves source and first-added dates', () => {
  const first = planReviews(fresh(), [record], '2026-10-10');
  assert.equal(first.changes.length, 1);
  const second = planReviews(first.data, [record], '2026-10-11');
  assert.equal(second.changes.length, 0);
  assert.deepEqual(second.data, first.data);
  const correction = structuredClone(record);
  correction.item.summary += ' Clarification.';
  const third = planReviews(second.data, [correction], '2026-10-11');
  const item = third.data.subjects.find(s => s.id === record.subject).research.items.find(i => i.id === record.item.id);
  assert.equal(item.added, '2026-10-10');
  assert.equal(item.verified, record.review.checked);
  assert.equal(item.date, record.item.date);
});
test('invalid batches and cross-subject duplicates cannot partially mutate data', () => {
  const d = fresh(), snapshot = structuredClone(d), bad = structuredClone(record);
  bad.item.id = 'invalid-review'; bad.item.evidence = {};
  assert.throws(() => planReviews(d, [record, bad], '2026-10-10'));
  assert.deepEqual(d, snapshot);
  d.subjects.find(s => s.id !== record.subject).research.items.push(record.item);
  assert.throws(() => planReviews(d, [record], '2026-10-10'), /Duplicate/);
});
test('legacy addition dates stay unknown and older reviews cannot replace newer corrections', () => {
  const d = planReviews(fresh(), [record], '2026-10-10').data;
  const item = d.subjects.find(s => s.id === record.subject).research.items.find(i => i.id === record.item.id);
  delete item.added;
  assert.equal(planReviews(d, [record], '2026-10-11').changes.length, 0);
  item.editorialReview.checked = '2026-10-10'; item.summary = 'Newer correction';
  assert.equal(planReviews(d, [record], '2026-10-11').changes.length, 0);
});
test('live monitor detects missing subjects, stale reviews and unapplied corrections', () => {
  const d = planReviews(fresh(), [record], '2026-10-10').data;
  const latest = d.subjects.flatMap(s => s.research.items.map(i => i.editorialReview?.checked || '')).sort().at(-1);
  const weekLater = new Date(Date.parse(latest) + 7 * 86400000).toISOString().slice(0, 10);
  assert.deepEqual(checkLive(d, d, latest), []);
  assert.match(checkLive(d, d, weekLater).join(), /seven days/);
  const missing = structuredClone(d); missing.subjects.pop();
  assert.match(checkLive(d, missing, '2026-10-10').join(), /Missing live subject/);
  const stale = structuredClone(d); stale.subjects[0].research.items[0].summary = 'Old summary';
  assert.match(checkLive(d, stale, '2026-10-10').join(), /outdated/);
});
