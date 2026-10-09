import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { isDeepStrictEqual } from 'node:util';

export function checkLive(expected, live, today = new Date().toISOString().slice(0, 10)) {
  const errors = [];
  const verified = live.subjects.flatMap(s => s.research.items.map(i => i.editorialReview?.checked || '')).sort().at(-1);
  if (!verified || Date.parse(today) - Date.parse(verified) >= 7 * 86400000)
    errors.push('No published source review in the last seven days. Check the daily reviewer and publishing task; do not invent an update.');
  for (const subject of expected.subjects) {
    const actual = live.subjects.find(s => s.id === subject.id);
    if (!actual) { errors.push(`Missing live subject: ${subject.id}`); continue; }
    for (const item of subject.research.items) {
      const current = actual.research.items.find(i => i.id === item.id);
      if (!isDeepStrictEqual(current, item)) errors.push(`Missing or outdated live research: ${subject.id}/${item.id}`);
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const expected = JSON.parse(fs.readFileSync(new URL('../dist/data.json', import.meta.url)));
  const response = await fetch('https://learning-guide.onrender.com/data.json?check=' + Date.now(), {
    cache: 'no-store', signal: AbortSignal.timeout(30000)
  });
  if (!response.ok) throw new Error(`Live feed request failed: HTTP ${response.status}`);
  const live = await response.json();
  const errors = checkLive(expected, live);
  if (errors.length) throw new Error(errors.join('\n'));
  console.log(`Live research matches all ${expected.subjects.length} subjects and has a source review within seven days.`);
}
