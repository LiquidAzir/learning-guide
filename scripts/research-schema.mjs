export const explainerFields = ['finding', 'method', 'meaning', 'limits'];
export const text = value => typeof value === 'string' && value.trim().length > 0;
export const http = value => { try { return ['https:', 'http:'].includes(new URL(value).protocol); } catch { return false; } };
export function validDate(value, partial = false) {
  if (typeof value !== 'string' || !(partial ? /^\d{4}(-\d{2}){0,2}$/ : /^\d{4}-\d{2}-\d{2}$/).test(value)) return false;
  const full = value.length === 4 ? value + '-01-01' : value.length === 7 ? value + '-01' : value;
  const time = Date.parse(full);
  return Number.isFinite(time) && new Date(time).toISOString().slice(0, 10) === full;
}
export function validateExplainer(item, subjects, requireStructured = false) {
  const e = item.explainer;
  if (!e) { if (requireStructured) throw new Error(`Missing explainer: ${item.id}`); return; }
  if (!http(e.source)) throw new Error(`Invalid explainer source: ${item.id}`);
  const structured = explainerFields.some(k => k in e);
  if (structured || requireStructured) {
    if (!explainerFields.every(k => text(e[k]))) throw new Error(`Incomplete four-part explainer: ${item.id}`);
    if (!/^#\/[^/]+\/[^/]+(?:\/[^/]+)?$/.test(e.background || '')) throw new Error(`Missing background chapter: ${item.id}`);
    const [s, c, anchor] = e.background.slice(2).split('/');
    const chapter = subjects.find(x => x.id === s)?.chapters.find(x => x.id === c);
    if (!chapter || (anchor && !chapter.html.includes(`id="${anchor}"`))) throw new Error(`Broken explainer background: ${item.id}`);
  } else if (!Array.isArray(e.paragraphs) || !e.paragraphs.length || !e.paragraphs.every(text)) throw new Error(`Invalid legacy explainer: ${item.id}`);
}
export function validateReview(record, data, today) {
  const { review, item, subject } = record;
  const s = data.subjects.find(s => s.id === subject);
  if (!s || !item || !review) throw new Error('Subject, item, and review are required');
  if (review.decision !== 'include' || !text(review.reviewer) || !text(review.reason) || !http(review.sourceRead) || !validDate(review.checked) || review.checked > today) throw new Error('A completed source review with a valid check date is required');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id || '')) throw new Error('Invalid stable item ID');
  if (!['title', 'headline', 'authors', 'venue', 'topic', 'summary'].every(k => text(item[k])) || !http(item.url)) throw new Error('Missing bibliographic or summary fields');
  if (!validDate(item.date, true) || item.date > today || !Number.isInteger(item.year) || item.year < 1600 || item.year > Number(today.slice(0, 4)) + 1) throw new Error('Invalid publication date or year');
  if (!['reported', 'preliminary', 'disputed', 'retracted'].includes(item.status)) throw new Error('Invalid evidence status');
  if (!['Journal publication', 'Conference paper', 'Preprint or working paper', 'Technical report', 'Data or tracker'].includes(item.sourceType)) throw new Error('New research must use an eligible primary research format');
  if (!s.chapters.some(c => c.id === item.chapter)) throw new Error('Invalid chapter');
  if (!['question', 'method', 'limitations'].every(k => text(item.evidence?.[k]))) throw new Error('Question, method, and limitations are required');
  validateExplainer(item, data.subjects, true);
  return s;
}
