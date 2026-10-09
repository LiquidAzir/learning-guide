import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { isDeepStrictEqual } from 'node:util';
import { validateReview } from './research-schema.mjs';
import { doiKey } from './discover-research.mjs';

// Pure planning: validate the complete batch before touching any feed.
export function planReviews(data, records, today) {
  const next = structuredClone(data);
  const changes = [];
  for (const record of records) {
    const subject = validateReview(record, next, today);
    const existing = subject.research.items.find(i => i.id === record.item.id);
    const duplicate = next.subjects.flatMap(s => s.research.items.map(i => ({ subject: s.id, item: i })))
      .find(({ subject: s, item: i }) => !(s === subject.id && i.id === record.item.id) &&
        ((record.item.doi && doiKey(i.doi) === doiKey(record.item.doi)) || i.url === record.item.url));
    if (duplicate) throw new Error(`Duplicate research: ${subject.id}/${record.item.id} already in ${duplicate.subject}/${duplicate.item.id}`);
    // Do not let archived drafts overwrite a later editorial correction.
    if (existing?.editorialReview?.checked > record.review.checked) continue;
    const item = { ...structuredClone(record.item), verified: record.review.checked, editorialReview: structuredClone(record.review) };
    delete item.added;
    if (!existing) item.added = today;
    else if (existing.added) item.added = existing.added;
    if (isDeepStrictEqual(existing, item)) continue;
    if (existing) subject.research.items[subject.research.items.indexOf(existing)] = item;
    else subject.research.items.push(item);
    subject.research.updated = today;
    changes.push({ subject: subject.id, id: item.id, action: existing ? 'updated' : 'added' });
  }
  return { data: next, changes };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = fileURLToPath(new URL('..', import.meta.url));
  execFileSync(process.execPath, ['build.js'], { cwd: root, stdio: 'pipe' });
  const data = JSON.parse(fs.readFileSync(path.join(root, 'dist/data.json')));
  const dir = path.join(root, 'research/reviewed');
  const records = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort()
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f))));
  const { data: next, changes } = planReviews(data, records, new Date().toISOString().slice(0, 10));
  if (process.argv.includes('--apply')) {
    for (const id of new Set(changes.map(c => c.subject))) {
      const target = path.join(root, 'content', id, 'research.json');
      fs.writeFileSync(target + '.tmp', JSON.stringify(next.subjects.find(s => s.id === id).research, null, 2) + '\n');
      fs.renameSync(target + '.tmp', target);
    }
  }
  console.log(JSON.stringify({ applied: process.argv.includes('--apply'), changes }, null, 2));
}
