/* Learning Guide — client app. Hash-routed, single file, no dependencies. */
(function () {
  'use strict';
  const DATA = JSON.parse(document.getElementById('data').textContent);
  const app = document.getElementById('app');
  const root = document.documentElement;

  // ---------- storage (always guarded: may be unavailable) ----------
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem('lg:' + k); if (v == null) return fallback; const p = JSON.parse(v); return p == null ? fallback : p; } catch { return fallback; } },
    set(k, v) { try { if (v == null) localStorage.removeItem('lg:' + k); else localStorage.setItem('lg:' + k, JSON.stringify(v)); return true; } catch { return false; } },
  };
  let progress = store.get('progress', {});
  // Progress keys gained a subject prefix when the guide grew past one subject.
  // Migrate any bare keys left from the single-subject build.
  (function migrateProgress() {
    const first = DATA.subjects[0];
    if (!first) return;
    const ids = new Set(first.chapters.map(c => c.id));
    let changed = false;
    for (const k of Object.keys(progress)) {
      if (!k.includes('/') && ids.has(k)) { progress[first.id + '/' + k] = progress[k]; delete progress[k]; changed = true; }
    }
    if (changed) store.set('progress', progress);
  })();
  const saveProgress = () => store.set('progress', progress);
  const researchState = createResearchState(store);

  // ---------- theme & type size ----------
  // The Artifact host stamps data-theme on the root element; remember it so "system" restores
  // that stamp rather than deleting it, and track the user's own choice separately.
  const hostTheme = root.getAttribute('data-theme');
  const savedTheme = store.get('theme', null);
  let themePref = (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : null;
  if (themePref) root.setAttribute('data-theme', themePref);
  const isDark = () => root.getAttribute('data-theme') === 'dark'
    || (!root.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
  const smoothOK = () => !matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SIZE_NAMES = ['small', 'normal', 'large', 'extra large'];
  let sizeLevel = Math.min(3, Math.max(0, store.get('size', 1)));
  const applySize = () => root.style.setProperty('--size-adjust', ((sizeLevel - 1) * 1.5) + 'px');
  applySize();

  // ---------- helpers ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const h = (strings, ...vals) => strings.reduce((out, s, i) => out + s + (i < vals.length ? vals[i] : ''), '');
  const subjectById = (id) => DATA.subjects.find(s => s.id === id);
  const chapterKey = (s, c) => s.id + '/' + c.id;
  const isDone = (s, c) => !!(progress[chapterKey(s, c)] && progress[chapterKey(s, c)].done);
  const pctOf = (s, c) => (progress[chapterKey(s, c)] && progress[chapterKey(s, c)].pct) || 0;
  const icons = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
    type: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3M9 20h6M12 4v16"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',
  };
  let toastTimer = null;
  function toast(msg) {
    let t = document.getElementById('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 1400);
  }

  // ---------- routing ----------
  function parseRoute() {
    const hash = location.hash.replace(/^#\/?/, '');
    const [path, query] = hash.split('?');
    const parts = path.split('/').filter(Boolean);
    return { parts, query: new URLSearchParams(query || '') };
  }
  const scrollMemory = {};

  // ---------- shell ----------
  function shell(subject, body, opts = {}) {
    const tabs = DATA.subjects.map(s => h`<a class="tab" href="#/${s.id}" ${subject && subject.id === s.id ? 'aria-current="page"' : ''}>${esc(s.navTitle || s.title)}</a>`).join('');
    return h`
      <a class="skip" href="#main">Skip to content</a>
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="#/" aria-label="Learning Guide home"><span class="brand-mark" aria-hidden="true">LG</span><span class="brand-text">Learning Guide</span></a>
          <nav class="tabs" aria-label="Subjects">${tabs}</nav>
          <div class="topbar-actions">
            <button class="icon-btn" id="btn-size" title="Text size" aria-label="Text size: ${SIZE_NAMES[sizeLevel]}. Click to change">${icons.type}</button>
            <button class="icon-btn" id="btn-theme" title="Light, dark, or system theme"></button>
            <button class="icon-btn" id="btn-search" title="Search (press /)" aria-label="Search">${icons.search}</button>
          </div>
        </div>
        ${opts.progressBar ? '<div class="reading-progress" id="reading-progress" aria-hidden="true"></div>' : ''}
      </header>
      <main id="main" class="page" tabindex="-1">${body}</main>
      <footer class="page footer" style="padding-top:0">
        <span>Learning Guide · content compiled ${esc(DATA.built)}</span>
        <span>Progress and settings are saved only on this device.</span>
      </footer>`;
  }

  function syncThemeButton() {
    const b = document.getElementById('btn-theme'); if (!b) return;
    b.innerHTML = isDark() ? icons.sun : icons.moon;
    b.setAttribute('aria-label', themePref ? `Theme: ${themePref}. Click to change` : 'Theme: system. Click to change');
  }
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', syncThemeButton);
  new MutationObserver(syncThemeButton).observe(root, { attributes: true, attributeFilter: ['data-theme'] });

  // ---------- views ----------
  function viewSubject(subject) {
    const chapters = subject.chapters.slice().sort((a, b) => a.order - b.order);
    const doneCount = chapters.filter(c => isDone(subject, c)).length;
    const totalMin = chapters.reduce((a, c) => a + c.minutes, 0);
    const next = chapters.find(c => !isDone(subject, c)) || chapters[0];
    const pct = Math.round(100 * doneCount / chapters.length);

    const parts = [];
    for (const c of chapters) {
      const name = c.part || 'Chapters';
      let p = parts.find(x => x.name === name);
      if (!p) { p = { name, chapters: [] }; parts.push(p); }
      p.chapters.push(c);
    }
    const partHtml = parts.map(p => h`
      <section class="part">
        <div class="part-head"><h2>${esc(p.name)}</h2></div>
        <div class="chapter-grid">
          ${p.chapters.map(c => h`
            <a class="chapter-card ${isDone(subject, c) ? 'done' : ''}" href="#/${subject.id}/${c.id}">
              <span class="chapter-num" aria-hidden="true">${isDone(subject, c) ? '✓' : String(c.order).padStart(2, '0')}</span>
              <span>
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.subtitle)}</p>
                <span class="meta"><span>${c.minutes} min</span>${c.sourceCount ? h`<span>${c.sourceCount} ${c.sourceCount === 1 ? 'source' : 'sources'}</span>` : ''}${isDone(subject, c) ? '<span class="done-tag">finished</span>' : (pctOf(subject, c) >= 10 ? h`<span>${pctOf(subject, c)}% read</span>` : '')}</span>
              </span>
            </a>`).join('')}
        </div>
      </section>`).join('');

    const research = subject.research && subject.research.items ? subject.research.items : [];
    const researchCard = research.length ? h`
      <section class="part">
        <div class="part-head"><h2>Keep current</h2></div>
        <div class="chapter-grid">
          <a class="chapter-card feature-card" href="#/${subject.id}/research">
            <span class="chapter-num" aria-hidden="true">↗</span>
            <span>
              <h3>Latest research</h3>
              <p>${research.length} research entries from ${Math.min(...research.map(r => r.year))} to ${Math.max(...research.map(r => r.year))}, with plain-English summaries. Updated ${esc(subject.research.updated || DATA.built)}.</p>
            </span>
          </a>
        </div>
      </section>` : '';

    return h`
      <section class="hero reveal">
        <span class="label">${esc(subject.icon)} Subject</span>
        <h1>${esc(subject.title)}</h1>
        <p class="tagline">${esc(subject.tagline)}</p>
        <p class="desc">${esc(subject.description)}</p>
        <div class="hero-meta">
          <span><strong>${chapters.length}</strong> chapters</span>
          <span><strong>${Math.round(totalMin / 60 * 10) / 10}</strong> hours of reading</span>
          <span><strong>${chapters.reduce((a, c) => a + c.sourceCount, 0)}</strong> cited sources</span>
        </div>
        <div class="hero-meta">
          <div class="progress-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Overall progress"><div class="progress-fill" style="width:${pct}%"></div></div>
          <span><strong>${doneCount}</strong> of ${chapters.length} finished</span>
        </div>
        <div><a class="btn" href="#/${subject.id}/${next.id}">${doneCount ? 'Continue: ' : 'Start: '}${esc(next.title)}</a></div>
      </section>
      <div class="parts">${partHtml}${researchCard}</div>`;
  }

  function viewChapter(subject, chapter) {
    const chapters = subject.chapters.slice().sort((a, b) => a.order - b.order);
    const idx = chapters.indexOf(chapter);
    const prev = chapters[idx - 1], next = chapters[idx + 1];
    const tocItems = chapter.toc.map(t => h`<li class="h${t.depth}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('');
    const done = isDone(subject, chapter);
    return h`
      <div class="reader">
        <article class="article reveal">
          <header class="article-head">
            <div class="eyebrow">
              <a class="label" href="#/${subject.id}">${esc(subject.title)}</a>
              <span class="label">·</span>
              <span class="label">${esc(chapter.part || '')}</span>
            </div>
            <h1>${esc(chapter.title)}</h1>
            <p class="subtitle">${esc(chapter.subtitle)}</p>
            <div class="meta"><span>Chapter ${chapter.order}</span><span>${chapter.minutes} min read</span>${chapter.sourceCount ? h`<span>${chapter.sourceCount} ${chapter.sourceCount === 1 ? 'source' : 'sources'}</span>` : ''}</div>
          </header>
          ${chapter.toc.length > 2 ? h`<details class="toc-mobile" id="toc-mobile"><summary>In this chapter</summary><ol>${tocItems}</ol></details>` : ''}
          <div class="prose" id="prose">${chapter.html}</div>
          <footer class="chapter-foot">
            <div class="finish">
              <button class="btn ${done ? 'secondary' : ''}" id="btn-finish">${done ? 'Mark as unread' : 'Mark chapter as finished'}</button>
              <span class="status" id="finish-status">${done ? 'Finished' : ''}</span>
            </div>
            <nav class="pager" aria-label="Chapter navigation">
              ${prev ? h`<a class="prev" href="#/${subject.id}/${prev.id}"><span class="label">← Previous</span><span class="title">${esc(prev.title)}</span></a>` : '<span></span>'}
              ${next ? h`<a class="next" href="#/${subject.id}/${next.id}"><span class="label">Next →</span><span class="title">${esc(next.title)}</span></a>`
                : (subject.research && subject.research.items && subject.research.items.length
                  ? h`<a class="next" href="#/${subject.id}/research"><span class="label">Next →</span><span class="title">Latest research</span></a>` : '<span></span>')}
            </nav>
            <p class="hint">Tip: use the ← and → keys to move between chapters.</p>
          </footer>
        </article>
        <aside class="toc" aria-label="Table of contents">
          <span class="label">In this chapter</span>
          <ol id="toc-list">${tocItems}</ol>
        </aside>
      </div>
      ${chapter.toc.length > 2 ? h`<button class="fab" id="fab-contents" hidden aria-label="Open chapter contents">${icons.list}<span>Contents</span></button>` : ''}`;
  }

  const TOPIC_LABELS = {
    'ai-work': 'AI and work', 'ai-computation': 'AI and computation', 'money-banking': 'money and banking',
    'market-power': 'market power', 'industrial-policy': 'industrial policy', 'condensed-matter': 'condensed matter',
    'gravitational-waves': 'gravitational waves', 'nuclear-atomic': 'nuclear and atomic', 'dark-matter': 'dark matter',
    'space-origins': 'space and origins', 'materials-energy': 'materials and energy',
    'ai-math': 'AI and mathematics', 'number-theory': 'number theory', 'applied': 'applied mathematics',
    'analysis': 'analysis (calculus)', 'benchmarks': 'AI benchmarks', 'formalization': 'formal proof',
    'macro': 'macroeconomics', 'fiscal': 'fiscal policy',
    'reinforcement-learning': 'reinforcement learning', 'weather-climate': 'weather and climate', 'bias-fairness': 'bias and fairness',
    'open-weights': 'open weights',
    'ancient-dna': 'ancient DNA', 'climate-history': 'climate and history', 'economic-history': 'economic history', 'early-modern': 'early modern', 'texts': 'texts and decipherment', 'prizes': 'prizes and awards', 'archives': 'archives',
    'gene-therapy': 'gene therapy', 'origin-of-life': 'origin of life', 'cell-biology': 'cell biology', 'protein-science': 'protein science', 'public-health': 'public health', 'climate-biology': 'climate and life', 'stem-cells': 'stem cells', 'biodiversity': 'biodiversity', 'conservation': 'conservation', 'microbiology': 'microbiology', 'immunology': 'immunology', 'physiology': 'physiology', 'pharmacology': 'pharmacology', 'vaccines': 'vaccines', 'aging': 'aging', 'development': 'development', 'genomics': 'genomics', 'evolution': 'evolution', 'ecology': 'ecology', 'plants': 'plants', 'medicine': 'medicine', 'neuroscience': 'neuroscience',
    'algorithms': 'algorithms', 'complexity-theory': 'complexity theory', 'cryptography': 'cryptography', 'quantum-computing': 'quantum computing', 'quantum-hardware': 'quantum hardware', 'computer-architecture': 'computer architecture', 'chips': 'chips and fabrication', 'operating-systems': 'operating systems', 'programming-languages': 'programming languages', 'formal-verification': 'formal verification', 'memory-safety': 'memory safety', 'distributed-systems': 'distributed systems', 'databases': 'databases', 'networking': 'networking', 'internet-measurement': 'internet measurement', 'security': 'security', 'software-engineering': 'software engineering', 'graphics': 'graphics', 'storage': 'storage', 'hci': 'human-computer interaction', 'post-quantum': 'post-quantum crypto', 'ai-for-code': 'AI for code', 'energy-computing': 'computing and energy',
  };
  const topicLabel = (t) => TOPIC_LABELS[t] || t.replace(/-/g, ' ');
  const STATUS_KEY = '<strong>Reported</strong> means the cited source reports the result or event. <strong>Preliminary</strong> flags early evidence; <strong>disputed</strong> flags a substantive challenge; <strong>retracted</strong> means the work was withdrawn. Source format is shown separately: publication or an official announcement does not establish independent replication. The summary explains the specific limits.';

  function researchItem(i, subject) {
    const key = subject.id + '/' + i.id;
    const saved = researchState.isSaved(key);
    return h`
      <li class="research-item">
        <div class="top"><span>${esc(i.date || i.year)}</span>${i._showSubject ? h`<span class="badge subject">${esc(subject.title)}</span>` : ''}<span class="badge topic">${esc(topicLabel(i.topic))}</span><span class="badge">${esc(i.sourceType || 'Source document')}</span><span class="badge ${esc(i.status)}">${esc(i.status)}</span></div>
        <h3><a href="${/^https?:/.test(i.url) ? esc(i.url) : '#'}" target="_blank" rel="noopener">${esc(i.headline || i.title)}</a></h3>
        <details class="research-source">
<summary>Source details</summary>
<p><strong>Original title:</strong> ${esc(i.title)}</p>
<p class="who">${esc(i.authors)} · ${esc(i.venue)}${i.year ? ", " + i.year : ""}</p>
${i.verified ? h`<p class="source-check">Source check recorded: ${esc(i.verified)}. This date records a source check, not independent confirmation of the finding.</p>` : ""}
${i.evidence ? h`<p><strong>Research question:</strong> ${esc(i.evidence.question)}</p><p><strong>Method:</strong> ${esc(i.evidence.method)}</p><p><strong>Limits:</strong> ${esc(i.evidence.limitations)}</p>` : ''}
</details>
        <p class="summary">${esc(i.summary)}</p>
        ${i.explainer ? h`<details class="research-explainer"><summary>What does this mean?</summary>${i.explainer.paragraphs.map(p => h`<p>${esc(p)}</p>`).join('')}<a href="${/^https?:/.test(i.explainer.source) ? esc(i.explainer.source) : '#'}" target="_blank" rel="noopener">Explainer source ↗</a></details>` : ''}
        <div class="links">
          <button type="button" class="research-save" data-save="${esc(key)}" aria-pressed="${saved}" aria-label="${saved ? 'Unsave' : 'Save'}: ${esc(i.headline || i.title)}">${saved ? 'Saved' : 'Save for later'}</button>
          ${researchState.isNew(key) ? '<span class="badge subject">New to the guide</span>' : ''}
          ${i.arxiv ? h`<a href="https://arxiv.org/abs/${esc(i.arxiv)}" target="_blank" rel="noopener">arXiv:${esc(i.arxiv)}</a>` : ''}
          ${i.doi ? h`<a href="https://doi.org/${esc(i.doi)}" target="_blank" rel="noopener">doi:${esc(i.doi)}</a>` : ''}
          ${i.chapter ? h`<a href="#/${subject.id}/${esc(i.chapter)}">Read the chapter →</a>` : ''}
        </div>
      </li>`;
  }

  function viewResearch(subject, query) {
    return researchFeed(subject, query);
  }

  function researchHref(subject, query, changes) {
    const params = new URLSearchParams(query);
    for (const [key, value] of Object.entries(changes)) {
      if (value) params.set(key, value); else params.delete(key);
    }
    return `#/${subject ? subject.id + '/' : ''}research${params.size ? '?' + params : ''}`;
  }

  function researchFeed(subject, query) {
    const all = DATA.subjects.flatMap(s => (s.research?.items || []).map(i => ({ ...i, _s: s, _showSubject: !subject })));
    researchState.visit(all.map(i => i._s.id + '/' + i.id));
    const items = all.filter(i => !subject || i._s.id === subject.id).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    const active = query.get(subject ? 'topic' : 'subject') || '';
    const mode = ['new', 'saved', 'week'].includes(query.get('view')) ? query.get('view') : '';
    const search = (query.get('q') || '').trim();
    const words = search.toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const today = new Date().toISOString().slice(0, 10);
    const weekStart = new Date(Date.parse(today) - 6 * 86400000).toISOString().slice(0, 10);
    const shown = items.filter(i => {
      const key = i._s.id + '/' + i.id;
      if (active && (subject ? i.topic : i._s.id) !== active) return false;
      if (mode === 'new' && !researchState.isNew(key)) return false;
      if (mode === 'saved' && !researchState.isSaved(key)) return false;
      if (mode === 'week' && (!i.date || i.date < weekStart || i.date > today)) return false;
      const text = [i.headline, i.title, i.summary, i.authors, i.venue, i.sourceType, i.status, i.doi, i.arxiv, topicLabel(i.topic), i._s.title, ...(i.explainer?.paragraphs || [])].join(' ').toLocaleLowerCase();
      return words.every(word => text.includes(word));
    });
    const counts = items.reduce((m, i) => (m[i.topic] = (m[i.topic] || 0) + 1, m), {});
    const topics = Object.keys(counts).sort((a, b) => counts[b] - counts[a] || a.localeCompare(b));
    const latest = subject ? subject.research.updated : DATA.subjects.map(s => s.research?.updated || '').sort().pop();
    const filters = subject ? topics.map(t => [t, topicLabel(t), counts[t]]) : DATA.subjects.map(s => [s.id, s.title, s.research?.items.length || 0]);
    const href = changes => esc(researchHref(subject, query, changes));
    const empty = mode === 'new' && !search && !active
      ? (researchState.hasPrevious ? 'You’re caught up. No entries have been added since your previous visit.' : 'This visit is your starting point. Newly added entries will appear here when you return.')
      : mode === 'saved' && !search && !active ? 'Your reading list is empty. Choose “Save for later” on any entry.'
      : 'No entries match these filters. Try a different search or browse all entries.';
    return h`
      <section class="research-head reveal">
        <a class="label" href="#/${subject ? subject.id : ''}">${esc(subject ? subject.title : 'Learning Guide')}</a>
        <h1 style="margin:10px 0 6px;letter-spacing:-.02em;text-wrap:balance">Latest research</h1>
        <p>${subject ? esc(subject.researchIntro || `Recent findings in ${subject.title.toLowerCase()}.`) : 'Recent results across every subject in the guide, checked against the original papers and reports, newest first.'}</p>
        <details class="research-source research-legend"><summary>What these labels mean</summary><p>${STATUS_KEY}</p></details>
        <p class="label">Collection updated ${esc(latest || DATA.built)} · ${items.length} entries${subject ? ' · <a href="#/research">all subjects →</a>' : ''}</p>
        <nav class="chips" aria-label="Filter by ${subject ? 'topic' : 'subject'}">
          <a class="chip" href="${href({ [subject ? 'topic' : 'subject']: '' })}" ${!active ? 'aria-current="true"' : ''}>All <span class="n">${items.length}</span></a>
          ${filters.map(([id, title, count]) => h`<a class="chip" href="${href({ [subject ? 'topic' : 'subject']: id })}" ${active === id ? 'aria-current="true"' : ''}>${esc(title)} <span class="n">${count}</span></a>`).join('')}
        </nav>
        <form id="research-search" role="search" aria-label="Search research">
          <label for="research-query">Search research</label>
          <div class="research-search-row"><input id="research-query" class="search-input" type="search" value="${esc(search)}" placeholder="Topic, author, title, or DOI…"><button class="chip" type="submit">Search</button>${search ? h`<a href="${href({ q: '' })}">Clear search</a>` : ''}</div>
        </form>
        <nav class="chips research-views" aria-label="Research view">
          ${[['', 'All entries'], ['new', 'New since your last visit'], ['week', 'Past week'], ['saved', 'Saved']].map(([value, label]) => h`<a class="chip" href="${href({ view: value })}" ${mode === value ? 'aria-current="true"' : ''}>${label}</a>`).join('')}
        </nav>
        <p class="research-note" id="research-storage">${researchState.available ? 'Bookmarks and visits are remembered in this browser only.' : 'Browser storage is unavailable. Bookmarks and visits last only while this page stays open.'}</p>
        ${mode === 'new' ? '<p class="research-note">New means added to the guide since your previous visit, regardless of the paper’s date. Short return visits count as the same visit.</p>' : mode === 'week' ? '<p class="research-note">Entries dated within the past seven days, including today.</p>' : ''}
      </section>
      <p id="research-count" class="research-note" role="status" tabindex="-1">${shown.length} ${shown.length === 1 ? 'entry' : 'entries'} shown${search ? h` for “${esc(search)}”` : ''}</p>
      <ol class="research-list">${shown.map(i => researchItem(i, i._s)).join('')}</ol>
      <p class="empty" id="research-empty" ${shown.length ? 'hidden' : ''}>${empty} <a href="${esc(researchHref(subject, new URLSearchParams(), {}))}">Browse all entries →</a></p>`;
  }

  function wireResearch() {
    const form = document.getElementById('research-search');
    if (!form) return;
    const { parts, query } = parseRoute();
    const subject = parts[0] === 'research' ? null : subjectById(parts[0]);
    form.addEventListener('submit', event => {
      event.preventDefault();
      location.hash = researchHref(subject, query, { q: document.getElementById('research-query').value.trim() });
    });
    app.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
      const saved = researchState.toggleSaved(button.dataset.save);
      button.textContent = saved ? 'Saved' : 'Save for later';
      button.setAttribute('aria-pressed', String(saved));
      button.setAttribute('aria-label', button.getAttribute('aria-label').replace(/^(Unsave|Save):/, saved ? 'Unsave:' : 'Save:'));
      if (!researchState.available) document.getElementById('research-storage').textContent = 'Browser storage is unavailable. Bookmarks and visits last only while this page stays open.';
      toast(saved ? 'Saved for later' : 'Removed from saved entries');
      if (!saved && query.get('view') === 'saved') {
        const card = button.closest('.research-item');
        const next = card.nextElementSibling || card.previousElementSibling;
        card.remove();
        const count = app.querySelectorAll('.research-item').length;
        document.getElementById('research-count').textContent = `${count} ${count === 1 ? 'entry' : 'entries'} shown`;
        document.getElementById('research-empty').hidden = !!count;
        (next?.querySelector('[data-save]') || document.getElementById('research-count')).focus({ preventScroll: true });
      }
    }));
  }

  /* Subject and combined routes share the same controls and state. */
  function viewResearchAll(query) {
    return researchFeed(null, query);
  }

  function viewHome() {
    const cards = DATA.subjects.map(s => {
      const chapters = s.chapters.slice().sort((a, b) => a.order - b.order);
      const done = chapters.filter(c => isDone(s, c)).length;
      const minutes = chapters.reduce((a, c) => a + c.minutes, 0);
      const pct = Math.round(100 * done / chapters.length);
      const next = chapters.find(c => !isDone(s, c));
      return h`
        <a class="subject-card" href="#/${s.id}">
          <span class="subject-icon" aria-hidden="true">${esc(s.icon)}</span>
          <span class="subject-body">
            <h2>${esc(s.title)}</h2>
            <p class="tagline">${esc(s.tagline)}</p>
            <span class="meta"><span>${chapters.length} chapters</span><span>${Math.round(minutes / 60 * 10) / 10} hours of reading</span><span>${chapters.reduce((a, c) => a + c.sourceCount, 0)} sources</span>${done ? h`<span class="done-tag">${done} finished</span>` : ''}</span>
            <span class="progress-track" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(s.title)} progress"><span class="progress-fill" style="width:${pct}%"></span></span>
            ${done && next ? h`<span class="continue">Continue: ${esc(next.title)}</span>` : ''}
          </span>
        </a>`;
    }).join('');
    const researchTotal = DATA.subjects.reduce((a, s) => a + ((s.research && s.research.items) ? s.research.items.length : 0), 0);
    return h`
      <section class="hero reveal">
        <span class="label">Learning Guide</span>
        <h1>Understand the ideas behind the world around you.</h1>
        <p class="tagline">Explore ${DATA.subjects.length} subjects through clear explanations, worked examples, the stories behind the discoveries, and questions you can try. Start with the foundations, or follow a question that interests you.</p>
      </section>
      <div class="subject-grid">${cards}</div>
      ${researchTotal ? h`
      <section class="part" style="margin-top:28px">
        <div class="part-head"><h2>Keep current</h2></div>
        <div class="chapter-grid">
          <a class="chapter-card feature-card" href="#/research">
            <span class="chapter-num" aria-hidden="true">↗</span>
            <span>
              <h3>Latest research across every subject</h3>
              <p>${researchTotal} research entries with readable summaries, source details, and cautions about the evidence, newest first.</p>
            </span>
          </a>
        </div>
      </section>` : ''}`;
  }

  function viewNotFound() {
    return '<div class="empty"><h1 style="font-size:1.3rem">That page does not exist.</h1><p><a href="#/">Back to the start</a></p></div>';
  }

  // ---------- render ----------
  let current = { subject: null, chapter: null };
  let scrollHandler = null;

  function render() {
    if (location.hash && !location.hash.startsWith('#/')) return; // a plain fragment, not a route
    const { parts, query } = parseRoute();
    if (scrollHandler) { removeEventListener('scroll', scrollHandler); removeEventListener('resize', scrollHandler); scrollHandler = null; }
    let subject = subjectById(parts[0]);
    if (!parts.length && DATA.subjects.length === 1) { location.replace('#/' + DATA.subjects[0].id); return; }
    let body, opts = {};
    current = { subject, chapter: null };
    if (!parts.length) body = viewHome();
    else if (parts[0] === 'research' && !parts[1]) body = viewResearchAll(query);
    else if (!subject) body = viewNotFound();
    else if (!parts[1]) body = viewSubject(subject);
    else if (parts[1] === 'research') body = viewResearch(subject, query);
    else {
      const chapter = subject.chapters.find(c => c.id === parts[1]);
      if (!chapter) body = viewNotFound();
      else { body = viewChapter(subject, chapter); opts.progressBar = true; current.chapter = chapter; }
    }

    if (closeSearch) closeSearch(false);
    app.innerHTML = shell(subject, body, opts);
    document.title = current.chapter ? `${current.chapter.title} · ${subject.title} · Learning Guide`
      : (subject ? (parts[1] === 'research' ? `Latest research · ${subject.title} · Learning Guide` : `${subject.title} · Learning Guide`)
        : (parts[0] === 'research' ? 'Latest research · Learning Guide' : 'Learning Guide'));
    wireShell();
    wireResearch();
    if (current.chapter) wireReader(subject, current.chapter, parts[2]);
    if (!parts[2]) {
      const y = scrollMemory[location.hash];
      if (y != null) instantScroll(y); else jumpTop();
    }
    const h1 = app.querySelector('main h1');
    if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  }

  function instantScroll(y) {
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, y);
    requestAnimationFrame(() => { root.style.scrollBehavior = prev; });
  }
  const jumpTop = () => instantScroll(0);

  function wireShell() {
    syncThemeButton();
    // keep the active subject tab visible when the strip overflows on phones
    const cur = document.querySelector('.tabs [aria-current]');
    if (cur) { const t = cur.parentElement; t.scrollLeft = Math.max(0, cur.offsetLeft - (t.clientWidth - cur.offsetWidth) / 2); }
    document.getElementById('btn-theme').addEventListener('click', () => {
      // light -> dark -> system (the host's stamp if there is one, else the OS preference)
      themePref = themePref === 'light' ? 'dark' : themePref === 'dark' ? null : 'light';
      store.set('theme', themePref);
      if (themePref) root.setAttribute('data-theme', themePref);
      else if (hostTheme) root.setAttribute('data-theme', hostTheme);
      else root.removeAttribute('data-theme');
      syncThemeButton();
      toast(themePref ? `${themePref[0].toUpperCase() + themePref.slice(1)} theme` : 'System theme');
    });
    document.getElementById('btn-size').addEventListener('click', (e) => {
      sizeLevel = (sizeLevel + 1) % SIZE_NAMES.length; store.set('size', sizeLevel); applySize();
      e.currentTarget.setAttribute('aria-label', `Text size: ${SIZE_NAMES[sizeLevel]}. Click to change`);
      toast(`Text size: ${SIZE_NAMES[sizeLevel]}`);
    });
    document.getElementById('btn-search').addEventListener('click', openSearch);
    app.querySelector('a.skip').addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.getElementById('main');
      main.focus(); main.scrollIntoView({ block: 'start' });
    });
  }

  function wireReader(subject, chapter, anchor) {
    const reader = document.querySelector('.reader');
    let programmaticUntil = 0;
    const jumpTo = (el, smooth) => {
      programmaticUntil = Date.now() + 2000;
      if (!smooth) { const prev = root.style.scrollBehavior; root.style.scrollBehavior = 'auto'; el.scrollIntoView({ block: 'start' }); requestAnimationFrame(() => { root.style.scrollBehavior = prev; }); }
      else el.scrollIntoView({ behavior: smoothOK() ? 'smooth' : 'auto', block: 'start' });
      if (el.matches('li')) { el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); }
    };
    // In-page anchors (TOC, footnotes) must not be treated as routes.
    reader.addEventListener('click', (e) => {
      const a = e.target && e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      if (href.startsWith('#/')) return; // real route
      const el = document.getElementById(href.slice(1));
      if (el) { e.preventDefault(); jumpTo(el, true); history.replaceState(null, '', `#/${subject.id}/${chapter.id}/${href.slice(1)}`); }
    });
    const prose = document.getElementById('prose');
    if (anchor) { const el = document.getElementById(anchor); if (el) setTimeout(() => jumpTo(el, false), 30); }
    else {
      const saved = pctOf(subject, chapter);
      if (saved > 5 && saved < 90 && !isDone(subject, chapter) && scrollMemory[location.hash] == null) {
        programmaticUntil = Date.now() + 2000;
        setTimeout(() => instantScroll(prose.offsetTop + (prose.offsetHeight * saved / 100) - innerHeight + 120), 30);
        toast(`Resumed at ${saved}%`);
      }
    }
    // finish button: toggle without re-rendering or moving the page
    const finishBtn = document.getElementById('btn-finish');
    finishBtn.addEventListener('click', () => {
      const k = chapterKey(subject, chapter);
      const wasDone = isDone(subject, chapter);
      progress[k] = { ...(progress[k] || {}), done: !wasDone, unread: wasDone };
      saveProgress();
      finishBtn.textContent = wasDone ? 'Mark chapter as finished' : 'Mark as unread';
      finishBtn.classList.toggle('secondary', !wasDone);
      document.getElementById('finish-status').textContent = wasDone ? '' : 'Finished';
      toast(wasDone ? 'Marked as unread' : 'Chapter finished');
    });
    // floating "Contents" button on phones
    const fab = document.getElementById('fab-contents');
    const tocMobile = document.getElementById('toc-mobile');
    if (fab && tocMobile) fab.addEventListener('click', () => { tocMobile.open = true; jumpTo(tocMobile, true); });
    // reading progress + toc highlight + save position
    const bar = document.getElementById('reading-progress');
    const tocLinks = [...document.querySelectorAll('#toc-list a')];
    const headings = chapter.toc.map(t => document.getElementById(t.id)).filter(Boolean);
    let ticking = false, lastSave = 0;
    scrollHandler = () => {
      if (ticking) return; ticking = true;
      // timer throttle rather than requestAnimationFrame: rAF is paused in hidden tabs
      setTimeout(() => {
        ticking = false;
        if (!document.getElementById('prose')) return;
        const r = prose.getBoundingClientRect();
        const readTo = Math.min(r.height, Math.max(0, innerHeight - r.top));
        const pct = r.height ? Math.round(100 * readTo / r.height) : 0;
        const atEnd = r.bottom <= innerHeight + 4;
        if (bar) bar.style.width = pct + '%';
        let activeIdx = -1;
        for (let i = 0; i < headings.length; i++) if (headings[i].getBoundingClientRect().top < 120) activeIdx = i;
        tocLinks.forEach((a, i) => a.classList.toggle('active', i === activeIdx));
        if (fab) fab.hidden = !(scrollY > 600 && innerWidth < 1100);
        const now = Date.now();
        if (now - lastSave > 1500 && now > programmaticUntil && scrollY > 0) {
          lastSave = now;
          const k = chapterKey(subject, chapter);
          const cur = progress[k] || {};
          let changed = false;
          if (pct > (cur.pct || 0)) { cur.pct = pct; changed = true; }
          if (atEnd && !cur.done && !cur.unread) { cur.done = true; changed = true; finishBtn.textContent = 'Mark as unread'; finishBtn.classList.add('secondary'); document.getElementById('finish-status').textContent = 'Finished'; }
          if (changed) { progress[k] = cur; saveProgress(); }
        }
      }, 120);
    };
    addEventListener('scroll', scrollHandler, { passive: true });
    addEventListener('resize', scrollHandler, { passive: true });
    scrollHandler();
  }

  // ---------- search (index built lazily from the rendered HTML) ----------
  let index = null;
  function buildIndex() {
    index = [];
    const parser = new DOMParser();
    for (const s of DATA.subjects) for (const c of s.chapters) {
      const doc = parser.parseFromString(c.html, 'text/html');
      doc.querySelectorAll('sup.fn, .sources, annotation').forEach(n => n.remove());
      let text = '', heads = [];
      const walk = (node) => {
        for (const ch of node.childNodes) {
          if (ch.nodeType === 3) text += ch.nodeValue;
          else if (ch.nodeType === 1) {
            if (/^H[23]$/.test(ch.tagName) && ch.id) heads.push({ at: text.length, id: ch.id });
            if (/^(P|LI|H[1-6]|DIV|TR|FIGCAPTION|ASIDE)$/.test(ch.tagName)) text += ' ';
            walk(ch);
          }
        }
      };
      walk(doc.body);
      text = text.replace(/\s+/g, ' ');
      index.push({ s, c, text, lower: text.toLowerCase(), heads });
    }
  }

  let searchOpen = false;
  let closeSearch = null; // set while the panel is open, so render() can dismiss it
  function openSearch() {
    if (searchOpen) return; searchOpen = true;
    if (!index) buildIndex();
    const opener = document.activeElement;
    const panel = document.createElement('div');
    panel.className = 'search-panel'; panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'true'); panel.setAttribute('aria-label', 'Search');
    panel.innerHTML = '<div class="search-inner"><label class="sr" for="q">Search</label><input class="search-input" id="q" type="search" placeholder="Search chapters, headings, and text…" autocomplete="off"><div class="sr" id="q-status" aria-live="polite"></div><ul class="search-results" id="results"></ul><p class="search-hint">Esc to close · ↑↓ to move · Enter to open</p></div>';
    document.body.appendChild(panel);
    const input = panel.querySelector('#q'), results = panel.querySelector('#results'), status = panel.querySelector('#q-status');
    input.focus();
    const close = (restoreFocus) => {
      panel.remove(); searchOpen = false; closeSearch = null;
      removeEventListener('keydown', onKey); document.removeEventListener('click', onOutside);
      if (restoreFocus !== false && opener && opener.isConnected && opener.focus) opener.focus();
    };
    closeSearch = close;
    const onKey = (e) => {
      if (e.key === 'Escape') { close(); return; }
      const items = [...results.querySelectorAll('a')];
      if (!items.length) return;
      const i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); (items[i + 1] || items[0]).focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); (i <= 0 ? input : items[i - 1]).focus(); }
    };
    const onOutside = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      if (!panel.contains(t) && !t.closest('#btn-search')) close();
    };
    addEventListener('keydown', onKey);
    document.addEventListener('click', onOutside);
    panel.addEventListener('click', (e) => { if (e.target && e.target.closest && e.target.closest('a')) close(); });
    input.addEventListener('input', () => {
      const q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.innerHTML = ''; status.textContent = ''; return; }
      // Collect per subject so one subject cannot crowd the others out of the result list.
      const bySubject = new Map(DATA.subjects.map(s => [s.id, []]));
      const seen = new Set();
      const add = (sid, r) => { if (seen.has(r.href)) return; seen.add(r.href); bySubject.get(sid).push(r); };
      for (const e of index) {
        const { s, c } = e;
        if (c.title.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q))
          add(s.id, { rank: 0, crumb: s.title, title: c.title, href: `#/${s.id}/${c.id}`, snippet: c.subtitle });
        for (const t of c.toc) if (t.text.toLowerCase().includes(q))
          add(s.id, { rank: 1, crumb: `${s.title} · ${c.title}`, title: t.text, href: `#/${s.id}/${c.id}/${t.id}` });
        for (const t of c.terms || []) if (t.text.toLowerCase().includes(q))
          add(s.id, { rank: 0, crumb: `${s.title} · ${c.title}`, title: t.text, href: `#/${s.id}/${c.id}/${t.id}` });
        let i = e.lower.indexOf(q), n = 0;
        while (i >= 0 && n < 3) {
          const head = e.heads.filter(hh => hh.at <= i).pop();
          add(s.id, { rank: 2, crumb: `${s.title} · ${c.title}`, title: c.title, href: `#/${s.id}/${c.id}${head ? '/' + head.id : ''}`, snippet: '…' + e.text.slice(Math.max(0, i - 70), i + 90) + '…' });
          i = e.lower.indexOf(q, i + q.length); n++;
        }
      }
      const queues = [...bySubject.values()].map(list => list.sort((a, b) => a.rank - b.rank));
      const out = [];
      outer: for (let round = 0; ; round++) {
        let any = false;
        for (const qd of queues) {
          if (!qd[round]) continue;
          out.push(qd[round]); any = true;
          if (out.length >= 30) break outer;
        }
        if (!any) break;
      }
      const safe = q.replace(/[&<>]/g, '');
      const mark = (t) => safe ? esc(t).replace(new RegExp(safe.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig'), m => `<mark>${m}</mark>`) : esc(t);
      results.innerHTML = out.length ? out.map(r => h`<li><a href="${r.href}"><span class="crumb">${esc(r.crumb)}</span>${mark(r.title)}${r.snippet ? h`<div class="snippet">${mark(r.snippet)}</div>` : ''}</a></li>`).join('') : '<li class="search-empty">No matches.</li>';
      status.textContent = out.length ? `${out.length} results` : 'No matches';
    });
  }

  // ---------- global keys ----------
  // Include worked answers in printouts, then restore the reader's choices.
  let printClosedAnswers = [];
  addEventListener('beforeprint', () => {
    printClosedAnswers = [...document.querySelectorAll('.callout-answer:not([open])')];
    printClosedAnswers.forEach(answer => { answer.open = true; });
  });
  addEventListener('afterprint', () => {
    printClosedAnswers.forEach(answer => { answer.open = false; });
    printClosedAnswers = [];
  });
  addEventListener('keydown', (e) => {
    const t = e.target;
    if ((t && t.matches && t.matches('input,textarea,[contenteditable]')) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === '/') { e.preventDefault(); openSearch(); return; }
    if (!current.chapter || searchOpen) return;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const a = document.activeElement; // a focused wide table or equation scrolls with these keys
      if (a && a.scrollWidth > a.clientWidth + 1) return;
      const chapters = current.subject.chapters.slice().sort((a, b) => a.order - b.order);
      const i = chapters.indexOf(current.chapter);
      const target = e.key === 'ArrowLeft' ? chapters[i - 1] : chapters[i + 1];
      if (target) location.hash = `#/${current.subject.id}/${target.id}`;
    }
  });

  addEventListener('hashchange', (e) => {
    try { scrollMemory[new URL(e.oldURL).hash] = scrollY; } catch { /* ignore */ }
    render();
  });
  render();
  // Warm the search index off the critical path so the first keystroke is not blocked.
  (window.requestIdleCallback || ((fn) => setTimeout(fn, 800)))(() => { if (!index) buildIndex(); });
})();
