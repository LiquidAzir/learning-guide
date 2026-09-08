import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';
const { createDailyState, dailySelection } = vm.runInNewContext(fs.readFileSync('src/daily-state.js', 'utf8') + '\n({createDailyState,dailySelection})');
const fixture = () => { const values = new Map([['progress', { 'physics/motion': { done: true } }], ['research-saved', ['physics/a']]]); return { values, storage: { get: (k, fallback) => values.get(k) ?? fallback, set: (k, v) => { values.set(k, structuredClone(v)); return true; } } }; };
test('daily choices survive reload without changing bookmarks or reading progress', () => {
  const f = fixture(), state = createDailyState(f.storage);
  state.follow(['physics', 'psychology']); state.toggleRead('physics/a');
  const reload = createDailyState(f.storage);
  assert(reload.follows('psychology')); assert(reload.isRead('physics/a')); assert(!reload.isRead('psychology/a'));
  assert.deepEqual(f.values.get('progress'), { 'physics/motion': { done: true } });
  assert.deepEqual(f.values.get('research-saved'), ['physics/a']);
  reload.follow([]); assert.equal(reload.subjects.length, 0);
});
test('two tabs preserve each other’s read entries', () => {
  const f = fixture(), a = createDailyState(f.storage), b = createDailyState(f.storage);
  a.toggleRead('physics/a'); b.toggleRead('psychology/b'); a.refresh();
  assert(a.isRead('psychology/b')); a.toggleRead('physics/a'); b.refresh();
  assert(!b.isRead('physics/a')); assert(b.isRead('psychology/b'));
});
test('malformed and unavailable storage keeps usable session choices', () => {
  const state = createDailyState({ get: () => ({ bad: true }), set: () => false });
  assert.equal(state.subjects.length, 0);
  state.follow(['physics']); state.toggleRead('physics/a'); state.refresh();
  assert(state.follows('physics')); assert(state.isRead('physics/a')); assert.equal(state.available, false);
});
test('a busy subject cannot crowd out another interest, and read items stay out', () => {
  const items = Array.from({ length: 10 }, (_, i) => ({ id: String(i), date: '2026-09-01', _s: { id: 'ai' } }));
  items.push({ id: 'only', date: '2021-01-01', _s: { id: 'politics' } });
  const picks = dailySelection(items, ['ai', 'politics'], key => key === 'ai/0');
  assert.equal(picks.length, 5); assert.equal(picks[1].id, 'only'); assert(!picks.some(i => i.id === '0'));
  assert.equal(dailySelection(items, [], () => false).length, 0);
  assert.equal(dailySelection(items, ['ai'], () => true).length, 0);
  assert.equal(items.length, 11, 'Selection does not mutate the archive');
});
