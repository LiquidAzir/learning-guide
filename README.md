# Learning Guide

A general-purpose learning web app. Each subject is a set of Markdown chapters compiled into one self-contained HTML page that works on phones and desktops, offline, with no server.

Six subjects so far, each with its own chapters, cited sources, and a separately maintained feed of recent research:

| Subject | Chapters | Words | Sources | Research entries |
|---|---|---|---|---|
| Physics | 16 | ~35,700 | 244 | 51 |
| Chemistry | 18 | ~34,700 | 201 | 45 |
| Economics | 18 | ~39,400 | 227 | 48 |
| Mathematics | 18 | ~39,200 | 168 | 43 |
| Artificial Intelligence | 24 | ~50,000 | 241 | 55 |
| History | 40 | ~82,000 | 412 | 54 |

## Quick start

```bash
npm install
npm run build
```

Then open `dist/index.html` in any browser. That single file is the whole app, every subject included. Copy it to a phone, host it anywhere static (GitHub Pages, Netlify, Cloudflare Pages), or publish it as an Artifact.

`npm run dev` builds and serves `dist/` at http://localhost:5173.

## Layout

```
content/
  subjects.json            list of subjects shown as tabs
  physics/
    01-start-here.md       chapters, numbered for reading order
    02-toolkit.md
    ...
    research.json          "Latest research" feed, updated over time
    figures/*.svg          inline diagrams, referenced from chapters
  chemistry/               same layout, 18 chapters
  economics/               same layout, 18 chapters
  mathematics/             same layout, 18 chapters (practical: howto/formulas/know boxes, formula sheet)
  ai/                      same layout, 24 chapters (statistical learning → ML → neural networks → LLMs)
  history/                 same layout, 40 chapters in sections (parts): Ancient, European, East Asian, plus frontier/people/glossary
src/
  styles.css               all styling (light and dark themes)
  app.js                   router, reader, progress, search, research view
build.js                   compiles content + src into dist/
dist/
  index.html               standalone page (open directly)
  artifact.html            same page as a body fragment for Artifact publishing
  data.json                compiled content, if you want to consume it elsewhere
```

## Writing chapters

A chapter is a Markdown file with a frontmatter block:

```markdown
---
title: Motion and Force
subtitle: One sentence shown under the title and on the chapter card.
part: II · The Classical World
---
```

The filename's number prefix sets the order; the rest is the chapter's slug (used in URLs and in `research.json`).

Supported inside chapters:

- **Math**: `$...$` inline, `$$...$$` display. Rendered at build time to MathML, so no runtime library is needed.
- **Citations**: `[^3]` in the text, and a line `[^3]: Author (Year). Title. Journal. [doi:...](https://doi.org/...)` anywhere in the file. The build collects these into a Sources section with back-links.
- **Callouts**: a block starting with `:::key` (or `history`, `math`, `try`, `people`, `frontier`, `warning`, `story`, and for practical subjects `howto` for a step-by-step procedure with a worked example, `formulas` for a key-formula table, `know` for a things-to-know list) and ending with `:::`. Add a custom title after the type: `:::math Reading a derivative`. Callouts may nest; `:::` inside fenced code blocks is left alone.
- **Chapter cross-references**: writing `chapter 9` (lowercase) in prose automatically links to chapter 9 *of the same subject*. Code spans, existing links, and raw anchors are left alone. To link across subjects, write the link yourself: `[heat and entropy](#/physics/heat)`.
- **Dollar signs in prose**: `$` followed by a digit (like `$10,000`) is left as text. To be safe with other cases, write `\$`.
- **Figures**: `{{fig:name|Caption}}` inlines `figures/name.svg`. Use the CSS classes `ink`, `muted`, `accent`, `amber`, `line`, `soft-fill`, `amber-soft-fill` on SVG elements so diagrams follow the theme.
- Tables, lists, bold, italics, links: standard GitHub-flavored Markdown.

## Updating the research feed

Edit `content/<subject>/research.json`. Each item:

```json
{
  "id": "unique-kebab-id",
  "title": "Exact paper title",
  "authors": "First author et al. or Collaboration",
  "venue": "Journal volume, page (year) or 'arXiv preprint' or 'press release'",
  "year": 2025,
  "date": "2025-03-19",
  "url": "https://arxiv.org/abs/...",
  "arxiv": "2503.14738",
  "doi": "10.1103/...",
  "topic": "cosmology",
  "chapter": "cosmos",
  "summary": "Two or three plain-English sentences. Define any technical term.",
  "status": "confirmed | preliminary | disputed | retracted",
  "verified": "2026-09-01"
}
```

`chapter` must match a chapter slug in the same subject (the filename without its number prefix). The build prints a warning for unknown slugs. Update the top-level `"updated"` date when you add items, then rebuild.

## Adding a subject

1. Add an entry to `content/subjects.json`: `id`, `title`, `tagline`, `icon`, `description`, and a `researchIntro` sentence used as the research feed's opening line.
2. Create `content/<id>/` with numbered chapter files, optionally `research.json` and `figures/`.
3. Rebuild. The subject appears as a tab.

## Reader features

Reading progress is tracked per chapter and per subject, and a chapter counts as finished when you reach the end of its text or mark it yourself. The theme cycles light, dark, and system; text size has four steps. All of this lives in the browser's localStorage on the device, so it never leaves the machine. Press `/` to search titles, headings, and body text across every subject; results are interleaved so one subject cannot crowd out another. `#/research` shows the research feeds of every subject merged, newest first. Arrow keys move between chapters within a subject, and there is a print stylesheet.

## Install as an app, use offline

The site is a progressive web app. Open it once in a browser and it keeps working with no connection.

- **iPhone / iPad (Safari):** tap Share, then **Add to Home Screen**.
- **Android (Chrome):** tap the menu, then **Install app** (or **Add to Home screen**).
- **Desktop (Chrome / Edge):** click the install icon in the address bar.

How it works: `public/sw.js` is a service worker that caches the single HTML file, the icons, and the web fonts on first load, serves them from cache afterwards, and refreshes the cache in the background when a new build is deployed. `public/manifest.webmanifest` supplies the name, colors, and icons; `build.js` copies `public/` into `dist/` and stamps the worker with a build id so every deploy invalidates the old cache.

## Deploy on Render (free)

`render.yaml` describes a free static site: Render runs `npm ci && npm run build` and serves `dist/`. To deploy your own copy:

1. Fork or push this repository to GitHub.
2. In the Render dashboard choose **New → Blueprint**, pick the repository, and accept the defaults. Render reads `render.yaml`.
3. Every push to the default branch rebuilds and redeploys.

The blueprint rewrites all paths to `index.html` (the app uses hash routing) and sets no-cache headers on the HTML, manifest, and service worker so updates reach installed apps promptly.
