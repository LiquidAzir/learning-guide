// Build script: compiles content/**.md + JSON into a single self-contained page.
// Usage: node build.js  -> dist/index.html (standalone), dist/artifact.html (body fragment), dist/data.json
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import katex from 'katex';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = path.join(ROOT, 'content');
const SRC = path.join(ROOT, 'src');
const DIST = path.join(ROOT, 'dist');

// ---------- helpers ----------
const read = (p) => fs.readFileSync(p, 'utf8');
const slugify = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '')
  .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').slice(0, 60);
const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decodeEntities = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^"|"$/g, '');
  }
  return { meta, body: text.slice(m[0].length) };
}

// ---------- per-chapter context shared with the marked renderer ----------
const ctx = { slug: '', toc: [], store: [], ids: {} };

// Protect math from the Markdown parser; render with KaTeX -> MathML (no CSS or fonts needed).
function extractMath(src) {
  const store = [];
  const put = (tex, display) => {
    let html;
    try {
      html = katex.renderToString(tex.trim(), { output: 'mathml', displayMode: display, throwOnError: true, strict: 'ignore' });
    } catch (e) {
      console.warn('KaTeX error:', e.message.split('\n')[0], '\n  in:', tex.slice(0, 80));
      html = `<code class="math-error">${escapeHtml(tex)}</code>`;
    }
    // Trim what MathML-in-HTML does not need: the TeX annotation (the TOC uses `tex` below),
    // the semantics wrapper, the katex span, and the redundant namespace. ~8% of the page.
    html = html.replace(/<annotation[\s\S]*?<\/annotation>/g, '').replace(/<\/?semantics>/g, '')
      .replace(/^<span class="katex">([\s\S]*)<\/span>$/, '$1').replace(/ xmlns="http:\/\/www\.w3\.org\/1998\/Math\/MathML"/, '')
      // <math> is an inferred <mrow>, so the single outer wrapper KaTeX emits is redundant.
      .replace(/^(<math(?: display="block")?>)<mrow>([\s\S]*)<\/mrow><\/math>$/, '$1$2</math>');
    if (display) html = `<div class="math-display" tabindex="0">${html}</div>`;
    store.push({ html, tex: tex.trim() });
    return `MATHTOKEN${store.length - 1}END`;
  };
  let out = src.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => `\n\n${put(tex, true)}\n\n`);
  // `\$` inside a span is an escaped dollar sign (KaTeX renders it), not a delimiter.
  out = out.replace(/(^|[^\\$])\$((?:\\\$|[^$\n])+?)\$(?!\d)/g, (m, pre, tex) => pre + put(tex, false));
  return { text: out, store };
}
const restoreMath = (html, store) => html.replace(/MATHTOKEN(\d+)END/g, (_, i) => store[+i].html);
const mathToTex = (s, store) => s.replace(/MATHTOKEN(\d+)END/g, (_, i) => store[+i].tex);

// Inline SVG figures: {{fig:name|Caption text}}
function figures(src, subjectDir) {
  return src.replace(/\{\{fig:([\w-]+)(?:\|([^}]*))?\}\}/g, (_, name, caption) => {
    const p = path.join(subjectDir, 'figures', `${name}.svg`);
    if (!fs.existsSync(p)) { console.warn('Missing figure', name); return ''; }
    // Collapse to one line: a blank line inside the SVG would end the Markdown HTML block
    // and turn the remainder into an indented code block.
    const svg = read(p).replace(/<\?xml[^>]*\?>\s*/, '').replace(/<!--[\s\S]*?-->/g, '').replace(/\r?\n\s*/g, ' ').trim();
    const cap = caption ? `<figcaption>${marked.parseInline(caption)}</figcaption>` : '';
    return `\n\n<figure class="fig">${svg}${cap}</figure>\n\n`;
  });
}

// Callouts:  :::type Optional title \n ... \n :::   (line-based; supports nesting; ignores fenced code)
const CALLOUT_LABELS = {
  key: 'Key idea', history: 'How we got here', math: 'The math, explained', try: 'Think about it',
  people: 'Who did this', frontier: 'Where it stands today', warning: 'Common confusion', story: 'The story',
  howto: 'How to do it', formulas: 'Key formulas', know: 'Things to know', answer: 'Show the reasoning',
};
function callouts(src) {
  const out = [], stack = []; let inFence = false;
  for (const line of src.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; out.push(line); continue; }
    const open = !inFence && line.match(/^:::(\w+)(?:[ \t]+(.*))?$/);
    if (open) {
      stack.push(open[1]);
      const label = (open[2] || '').trim() || CALLOUT_LABELS[open[1]] || open[1];
      const heading = marked.parseInline(label);
      out.push('', open[1] === 'answer'
        ? `<details class="callout callout-answer"><summary class="callout-title">${heading}</summary>`
        : `<aside class="callout callout-${open[1]}"><div class="callout-title">${heading}</div>`, '<div class="callout-body">', '');
      continue;
    }
    if (!inFence && /^:::\s*$/.test(line) && stack.length) {
      const type = stack.pop();
      out.push('', type === 'answer' ? '</div></details>' : '</div></aside>', '');
      continue;
    }
    out.push(line);
  }
  if (stack.length) console.warn('Unclosed callout in', ctx.slug);
  return out.join('\n');
}

// Footnote-style sources: [^3] in text; "[^3]: Author, Title..." definition lines.
function sources(src, slug) {
  const defs = [];
  let out = src.replace(/^\[\^([\w-]+)\]:[ \t]*(.+)$/gm, (_, id, text) => { defs.push({ id, text }); return ''; });
  const seen = {};
  out = out.replace(/\[\^([\w-]+)\](?!:)/g, (_, id) => {
    const n = (seen[id] = (seen[id] || 0) + 1);
    const rid = n === 1 ? `${slug}-ref-${id}` : `${slug}-ref-${id}-${n}`;
    return `<sup class="fn"><a href="#${slug}-src-${id}" id="${rid}" aria-label="Source ${id}">${id}</a></sup>`;
  });
  let html = '';
  if (defs.length) {
    defs.sort((a, b) => (+a.id || 0) - (+b.id || 0));
    html = `<section class="sources"><h2 id="${slug}-sources">Sources</h2><ol class="sources-list">` +
      defs.map(d => `<li id="${slug}-src-${d.id}">${marked.parseInline(d.text)} <a class="backref" href="#${slug}-ref-${d.id}" aria-label="Back to text">&#8617;</a></li>`).join('') +
      `</ol></section>`;
  }
  return { text: out, html, count: defs.length };
}

// Cross-references like "chapter 9" become links to that chapter.
// Only plain prose is rewritten: code spans and fences, existing links (inline, reference,
// image), raw anchors and HTML tags are skipped, so this can never nest an anchor and never
// depends on what appears later in the file.
const LINK_SKIP = /(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]*`|<a\b[^>]*>[\s\S]*?<\/a>|!?\[[^\]]*\]\((?:[^()]|\([^)]*\))*\)|!?\[[^\]]*\]\[[^\]]*\]|<[^>]+>)/g;
function chapterLinks(src, orderToSlug, subjectId) {
  const linkify = (s) => s.replace(/\b(chapter (\d+))\b/g, (m, text, n) => {
    const slug = orderToSlug[+n];
    return slug ? `[${text}](#/${subjectId}/${slug})` : m;
  });
  let out = '', last = 0, m;
  LINK_SKIP.lastIndex = 0;
  while ((m = LINK_SKIP.exec(src))) { out += linkify(src.slice(last, m.index)) + m[0]; last = m.index + m[0].length; }
  return out + linkify(src.slice(last));
}

// One global renderer: heading ids + TOC (math restored), external links, scrollable tables.
const renderer = new marked.Renderer();
renderer.heading = function ({ tokens, depth }) {
  const raw = this.parser.parseInline(tokens);
  const html = restoreMath(raw, ctx.store);
  const plain = decodeEntities(mathToTex(raw, ctx.store).replace(/<[^>]+>/g, ''));
  let id = `${ctx.slug}-${slugify(plain)}`;
  if (ctx.ids[id]) id += `-${++ctx.ids[id]}`; else ctx.ids[id] = 1;
  if (depth === 2 || depth === 3) ctx.toc.push({ depth, id, text: plain });
  return `<h${depth} id="${id}">${html}</h${depth}>\n`;
};
renderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const ext = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
  return `<a href="${href}"${title ? ` title="${escapeHtml(title)}"` : ''}${ext}>${text}</a>`;
};
renderer.table = function (token) {
  const out = marked.Renderer.prototype.table.call(this, token);
  return `<div class="table-wrap" tabindex="0" role="region" aria-label="Table">${out}</div>`;
};
marked.use({ gfm: true, breaks: false, renderer });

function compileChapter(file, subjectDir, subjectId, orderToSlug) {
  const raw = read(file);
  const { meta, body } = parseFrontmatter(raw);
  const base = path.basename(file, '.md');
  const slug = base.replace(/^\d+-/, '');
  const order = parseInt(base, 10) || 0;
  ctx.slug = slug; ctx.toc = []; ctx.ids = {};

  // Give glossary definitions stable search targets without filling the chapter TOC.
  const terms = [], termIds = {};
  const anchorTerm = (name) => {
    const text = name.replace(/\*|\.$/g, '').trim();
    const base = `${slug}-term-${slugify(text)}`;
    const id = termIds[base] ? `${base}-${++termIds[base]}` : (termIds[base] = 1, base);
    terms.push({ text, id });
    return `<span id="${id}" class="glossary-anchor"></span>`;
  };
  let linkedBody = body;
  if (slug === 'glossary') {
    linkedBody = linkedBody.replace(/^(\*\*([^*]+)\*\*.*)$/gm, (_, line, name) => `${anchorTerm(name)}${line}`);
    // Reference tables also need direct targets and links to their explanations.
    linkedBody = linkedBody.replace(/(\| (?:Term \| Meaning \| Ch\.|Dynasty \| Dates \| Follow the story) \|\r?\n[^\n]+\r?\n)((?:\|[^\n]+(?:\r?\n|$))+)/g,
      (_, header, rows) => header + rows.replace(/\| (\d+) \|\s*$/gm, '| chapter $1 |').replace(/^(\|\s*)([^|]+)(\|)/gm,
        (_row, prefix, name, suffix) => `${prefix}${anchorTerm(name)}${name}${suffix}`));
    linkedBody = linkedBody.replace(/\(ch\. ([\d,– -]+)\)/g, (_, numbers) =>
      '(' + numbers.replace(/\d+/g, n => orderToSlug[+n] ? `[chapter ${n}](#/${subjectId}/${orderToSlug[+n]})` : n) + ')');
  }
  const t1 = figures(linkedBody, subjectDir);
  const { text: t2, store } = extractMath(t1);
  ctx.store = store;
  const { text: t3, html: srcHtml, count } = sources(t2, slug);
  const t4 = callouts(chapterLinks(t3, orderToSlug, subjectId));
  let html = restoreMath(marked.parse(t4), store);
  const sourcesHtml = restoreMath(srcHtml, store); // footnote text can contain math too

  // Word count from the math-tokenised, source-stripped text (a lone "$" in prose can't break it).
  // Inlined figure SVGs carry label text; drop them so captions aren't counted as prose.
  const prose = t3.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/MATHTOKEN\d+END/g, ' ')
    .replace(/^:::.*$/gm, '').replace(/<[^>]+>/g, ' ').replace(/\{\{fig:[^}]*\}\}/g, '');
  const wordCount = prose.split(/\s+/).filter(Boolean).length;
  return {
    id: slug, order, subject: subjectId,
    title: meta.title || slug, subtitle: meta.subtitle || '', part: meta.part || '',
    minutes: Math.max(2, Math.round(wordCount / 220)), words: wordCount, sourceCount: count,
    toc: ctx.toc, terms, html: html + sourcesHtml,
  };
}

// ---------- build ----------
const subjects = JSON.parse(read(path.join(CONTENT, 'subjects.json')));
const data = { subjects: [], built: new Date().toISOString().slice(0, 10) };
for (const s of subjects) {
  const dir = path.join(CONTENT, s.id);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
  const orderToSlug = {};
  for (const f of files) { const b = path.basename(f, '.md'); orderToSlug[parseInt(b, 10)] = b.replace(/^\d+-/, ''); }
  const chapters = files.map(f => compileChapter(path.join(dir, f), dir, s.id, orderToSlug));
  const researchPath = path.join(dir, 'research.json');
  const research = fs.existsSync(researchPath) ? JSON.parse(read(researchPath)) : { updated: null, items: [] };
  const slugs = new Set(chapters.map(c => c.id));
  for (const item of research.items) if (item.chapter && !slugs.has(item.chapter)) console.warn(`research.json: unknown chapter "${item.chapter}" in ${item.id}`);
  data.subjects.push({ ...s, chapters, research });
  const words = chapters.reduce((a, c) => a + c.words, 0);
  const srcs = chapters.reduce((a, c) => a + c.sourceCount, 0);
  console.log(`${s.title}: ${chapters.length} chapters, ${words} words, ${srcs} sources, ${research.items.length} research items`);
}

const css = read(path.join(SRC, 'styles.css'));
const js = read(path.join(SRC, 'app.js'));
// "\/" is a valid JSON escape; "\!" is not, so use the unicode escape for the comment opener.
const json = JSON.stringify(data).replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\u0021--');
const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
  + '<link href="https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,400;0,7..72,500;0,7..72,600;1,7..72,400&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">';

const fragment = `<title>Learning Guide</title>
${fonts}
<style>${css}</style>
<div id="app" class="app"></div>
<script id="data" type="application/json">${json}</script>
<script>${js}</script>`;

const BUILD = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
const PUBLIC = path.join(ROOT, 'public');
const pwaHead = [
  '<meta name="theme-color" media="(prefers-color-scheme: light)" content="#2A4BA0">',
  '<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0E121A">',
  '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
  '<link rel="icon" href="/icons/icon-192.png" type="image/png" sizes="192x192">',
  '<link rel="apple-touch-icon" href="/icons/apple-touch-icon.png">',
  '<link rel="manifest" href="/manifest.webmanifest">',
  '<meta name="apple-mobile-web-app-capable" content="yes">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<meta name="apple-mobile-web-app-status-bar-style" content="default">',
  '<meta name="apple-mobile-web-app-title" content="Learning Guide">',
].join('\n');
const swRegister = `<script>if ('serviceWorker' in navigator && location.protocol !== 'file:') { addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {})); }</script>`;
const standalone = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="light dark">
<meta name="description" content="A general-purpose learning guide: deep, readable, fully cited overviews of whole subjects.">
${pwaHead}
${fragment.replace('<div id="app"', '</head>\n<body>\n<div id="app"')}
${swRegister}
</body>
</html>`;

fs.mkdirSync(DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'index.html'), standalone);
fs.writeFileSync(path.join(DIST, 'artifact.html'), fragment);
fs.writeFileSync(path.join(DIST, 'data.json'), json);
// PWA assets: manifest, icons, favicon, and the service worker (stamped so each build refreshes the cache).
fs.cpSync(PUBLIC, DIST, { recursive: true });
fs.writeFileSync(path.join(DIST, 'sw.js'), read(path.join(PUBLIC, 'sw.js')).replaceAll('__BUILD__', BUILD));
console.log(`Wrote dist/index.html (${(standalone.length / 1024).toFixed(0)} KB)`);
