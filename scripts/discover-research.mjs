// Metadata discovery only. Nothing in .research is included by build.js.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { validDate } from './research-schema.mjs';
const root = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
export const doiKey = value => String(value || '').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '').trim().toLowerCase();
export function publicationDate(work) {
  // Online publication can precede a journal issue. Preserve partial precision.
  const dates = ['published-online', 'published-print', 'published', 'issued'].map(k => work[k]?.['date-parts']?.[0])
    .filter(p => Array.isArray(p) && Number.isInteger(p[0]) && p[0] > 1600 && p[0] < 3000)
    .map(p => p.slice(0, 3).map((n, i) => i ? String(n).padStart(2, '0') : String(n)).join('-'));
  return dates.sort()[0] || null;
}
export function candidate(work, source, today) {
  const doi = doiKey(work.DOI), date = publicationDate(work);
  if (!doi || !validDate(date, true) || date > today || work.type !== 'journal-article' || !work.title?.[0]) return null;
  return { id: source.subject + '/' + doi, subject: source.subject, doi, title: work.title[0],
    authors: (work.author || []).map(a => [a.given, a.family].filter(Boolean).join(' ') || a.name).filter(Boolean).join(', '),
    venue: work['container-title']?.[0] || source.name, date, url: 'https://doi.org/' + doi,
    source: source.name, issn: source.issn, discovered: today, status: 'pending',
    notice: 'Unreviewed metadata. Open the primary source; inclusion here does not establish relevance or quality.' };
}
export function mergeCandidates(existing, incoming, published) {
  const map = new Map(existing.map(i => [i.id, published.has(i.subject + '/' + doiKey(i.doi)) ? { ...i, status: 'included' } : i]));
  for (const item of incoming) {
    if (published.has(item.subject + '/' + doiKey(item.doi))) continue;
    // Keep reviewer decisions, notes, and the first discovery date across runs.
    if (!map.has(item.id)) map.set(item.id, item);
  }
  return [...map.values()];
}
export async function discover({ fetcher = fetch, now = new Date() } = {}) {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'research/sources.json'), 'utf8'));
  const today = now.toISOString().slice(0, 10);
  const since = new Date(now.getTime() - config.lookbackDays * 86400000).toISOString().slice(0, 10);
  const dir = path.join(root, '.research'); fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, 'candidates.json');
  const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : [];
  const subjects = JSON.parse(fs.readFileSync(path.join(root, 'content/subjects.json'), 'utf8'));
  const published = new Set(subjects.flatMap(s => JSON.parse(fs.readFileSync(path.join(root, 'content', s.id, 'research.json'), 'utf8')).items.map(i => s.id + '/' + doiKey(i.doi))));
  const incoming = [], checks = [];
  for (const source of config.sources) {
    const url = new URL(`https://api.crossref.org/journals/${source.issn}/works`);
    url.search = new URLSearchParams({ filter: `from-pub-date:${since},until-pub-date:${today},type:journal-article`, sort: 'published', order: 'desc', rows: String(config.rowsPerSource) });
    try {
      const response = await fetcher(url, { headers: { 'User-Agent': 'LearningGuideResearch/1.0 (https://github.com/LiquidAzir/learning-guide)' }, signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json();
      if (!Array.isArray(body.message?.items)) throw new Error('Unexpected response shape');
      const found = body.message.items.map(w => candidate(w, source, today)).filter(Boolean);
      incoming.push(...found);
      checks.push({ ...source, ok: true, candidates: found.length, truncated: body.message['total-results'] > config.rowsPerSource });
    } catch (error) { checks.push({ ...source, ok: false, error: error.message }); }
  }
  const merged = mergeCandidates(existing, incoming, published);
  fs.writeFileSync(file + '.tmp', JSON.stringify(merged, null, 2) + '\n'); fs.renameSync(file + '.tmp', file);
  const report = { checked: now.toISOString(), since, added: merged.length - existing.length, pending: merged.filter(i => i.status === 'pending').length, checks };
  fs.writeFileSync(path.join(dir, 'discovery-report.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
  if (checks.some(s => !s.ok)) process.exitCode = 1;
  return report;
}
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) await discover();
