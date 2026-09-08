import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import vm from 'node:vm';

const create = vm.runInNewContext(fs.readFileSync('src/research-state.js', 'utf8') + '\ncreateResearchState;');
function fixture() {
  const values = new Map();
  let time = Date.UTC(2026, 8, 7, 12);
  const storage = {
    get: (key, fallback) => values.has(key) ? structuredClone(values.get(key)) : fallback,
    set(key, value) { values.set(key, structuredClone(value)); return true; },
  };
  return { values, storage, start: () => create(storage, () => time), later: () => { time += 31 * 60 * 1000; } };
}

test('first visit establishes a baseline without calling the existing archive new', () => {
  const f = fixture(), state = f.start();
  state.visit(['cs/paper', 'ai/paper']);
  assert.equal(state.hasPrevious, false);
  assert.equal(state.isNew('cs/paper'), false);
  state.visit(['cs/paper', 'ai/paper']);
  assert.equal(state.hasPrevious, false, 'Changing a filter is not a previous visit');
});

test('new entries survive filtering and reloads, then become known on the next visit', () => {
  const f = fixture();
  f.start().visit(['cs/original']);
  f.later();
  let state = f.start();
  // Identity, not publication date or edited summary, determines what was added.
  state.visit(['cs/original', 'history/older-paper-added-today']);
  assert.equal(state.hasPrevious, true);
  assert.equal(state.isNew('cs/original'), false);
  assert.equal(state.isNew('history/older-paper-added-today'), true);
  state.visit(['cs/original', 'history/older-paper-added-today']);
  state = f.start();
  state.visit(['cs/original', 'history/older-paper-added-today']);
  assert.equal(state.isNew('history/older-paper-added-today'), true);
  f.later();
  state.visit(['cs/original', 'history/older-paper-added-today']);
  assert.equal(state.isNew('history/older-paper-added-today'), false);
});

test('a stale offline collection cannot erase previously known entries', () => {
  const f = fixture();
  f.start().visit(['physics/a', 'physics/b']);
  f.later();
  f.start().visit(['physics/a']);
  f.later();
  const state = f.start();
  state.visit(['physics/a', 'physics/b']);
  assert.equal(state.isNew('physics/b'), false);
});

test('bookmarks persist independently of chapter progress and scope identical IDs by subject', () => {
  const f = fixture();
  f.values.set('progress', { 'cs/algorithms': { done: true } });
  let state = f.start();
  assert.equal(state.toggleSaved('cs/paper'), true);
  state = f.start();
  assert.equal(state.isSaved('cs/paper'), true);
  assert.equal(state.isSaved('ai/paper'), false);
  assert.equal(state.toggleSaved('cs/paper'), false);
  assert.equal(f.start().isSaved('cs/paper'), false);
  assert.deepEqual(f.values.get('progress'), { 'cs/algorithms': { done: true } });
});

test('malformed and unavailable storage fall back without breaking the feed', () => {
  const state = create({ get: () => ({ invalid: true }), set: () => false });
  state.visit(['cs/paper']);
  assert.equal(state.isNew('cs/paper'), false);
  assert.equal(state.available, false);
  state.toggleSaved('cs/paper');
  assert.equal(state.isSaved('cs/paper'), true, 'Bookmarks still work in memory');
});

test('saving in a second open tab preserves bookmarks from the first', () => {
  const f = fixture(), first = f.start(), second = f.start();
  first.toggleSaved('cs/first');
  second.toggleSaved('physics/second');
  first.visit(['cs/first', 'physics/second']);
  assert.equal(first.isSaved('physics/second'), true);
  first.toggleSaved('cs/first');
  const reopened = f.start();
  assert.equal(reopened.isSaved('physics/second'), true);
  assert.equal(reopened.isSaved('cs/first'), false);
});

test('research identities are unique and optional explainers have text and a source', () => {
  let explainers = 0;
  for (const dir of fs.readdirSync('content', { withFileTypes: true }).filter(d => d.isDirectory())) {
    const file = `content/${dir.name}/research.json`;
    if (!fs.existsSync(file)) continue;
    const ids = new Set();
    for (const item of JSON.parse(fs.readFileSync(file, 'utf8')).items) {
      assert(item.id && !ids.has(item.id), `Duplicate entry ID in ${file}: ${item.id}`);
      ids.add(item.id);
      if (!item.explainer) continue;
      assert(item.explainer.paragraphs.length >= 1);
      assert(item.explainer.paragraphs.every(p => typeof p === 'string' && p.trim()));
      assert(['http:', 'https:'].includes(new URL(item.explainer.source).protocol));
      explainers++;
    }
  }
  assert(explainers >= 5);
});
