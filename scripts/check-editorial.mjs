import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import vm from 'node:vm';

// Build first so these checks exercise the actual Markdown-to-HTML pipeline.
execFileSync(process.execPath, ['build.js'], { stdio: 'inherit' });
const data = JSON.parse(fs.readFileSync('dist/data.json', 'utf8'));
let answers = 0, entries = 0, terms = 0;
for (const subject of data.subjects) {
  for (const chapter of subject.chapters) {
    const html = chapter.html;
    assert(!html.includes('math-error'), `Math rendering failed: ${subject.id}/${chapter.id}`);
    assert(!/MATHTOKEN\d+END/.test(html), `Unrestored math: ${subject.id}/${chapter.id}`);
    const count = (html.match(/<details class="callout callout-answer">/g) || []).length;
    assert.equal(count, (html.match(/<\/details>/g) || []).length, `Answer closure: ${subject.id}/${chapter.id}`);
    if (chapter.order > 1 && chapter.order < subject.chapters.length - 1) {
      assert.equal(count, 1, `Missing chapter practice: ${subject.id}/${chapter.id}`);
    }
    answers += count;
    const ids = new Set();
    for (const term of chapter.terms || []) {
      assert(term.text && !ids.has(term.id), `Duplicate or empty glossary target: ${term.id}`);
      assert(html.includes(`id="${term.id}"`), `Missing glossary anchor: ${term.id}`);
      ids.add(term.id);
      terms++;
    }
  }
  for (const item of subject.research.items) {
    assert(item.headline && item.title && item.sourceType, `Incomplete source presentation: ${item.id}`);
    assert(['reported', 'preliminary', 'disputed', 'retracted'].includes(item.status), `Invalid claim label: ${item.id}`);
    assert(!item.chapter || subject.chapters.some(c => c.id === item.chapter), `Broken research chapter: ${item.id}`);
    entries++;
  }
}
assert.equal(answers, 155);
assert.equal(entries, 399);
const math = data.subjects.find(s => s.id === 'mathematics');
assert(math.chapters.find(c => c.id === 'geometry').html.includes('A point moving around a circle at constant speed'), 'The paragraph after the trigonometry table must survive Markdown rendering');
const cs = data.subjects.find(s => s.id === 'cs');
assert(cs.chapters.find(c => c.id === 'databases').html.includes('<td>11,000</td>'), 'The worked SQL result must render as a table');
assert(data.subjects.find(s => s.id === 'history').chapters.find(c => c.id === 'glossary').terms.some(t => t.text === 'Shang'), 'Dynasty names need individual search targets');
const normalizeNavigation = vm.runInNewContext(
  fs.readFileSync('public/sw.js', 'utf8') + '\nnavigationResponse;',
  { self: { addEventListener() {} }, Response });
const redirected = new Response('<h1>Guide</h1>', { headers: { 'Content-Type': 'text/html' } });
Object.defineProperty(redirected, 'redirected', { value: true });
const normalized = normalizeNavigation(redirected);
assert.equal(normalized.redirected, false, 'Cached redirects must be safe to return for navigation');
assert.equal(normalized.headers.get('Content-Type'), 'text/html');
assert.equal(await normalized.text(), '<h1>Guide</h1>');
console.log(`Editorial checks passed: ${answers} answers, ${entries} research entries, ${terms} glossary targets.`);
