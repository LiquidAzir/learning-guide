import fs from 'node:fs';
import path from 'node:path';

// Reuse the compiled, published guide. Review-queue drafts are never inputs.
export function buildGlasses(data, root) {
  const src = path.join(root, 'src/glasses');
  const out = path.join(root, 'dist/glasses');
  fs.mkdirSync(out, { recursive: true });
  const catalog = data.subjects.map(s => ({
    id: s.id, title: s.title, shortTitle: s.navTitle || s.title,
    chapters: s.chapters.map(({ id, title, order }) => ({ id, title, order })),
    researchCount: s.research.items.length,
  }));
  for (const s of data.subjects) {
    const dir = path.join(out, s.id);
    fs.mkdirSync(dir, { recursive: true });
    for (const c of s.chapters) fs.writeFileSync(path.join(dir, c.id + '.json'), JSON.stringify(c));
    fs.writeFileSync(path.join(dir, 'research.json'), JSON.stringify(s.research));
  }
  const json = JSON.stringify(catalog).replace(/</g, '\\u003c');
  const html = fs.readFileSync(path.join(src, 'index.html'), 'utf8')
    .replace('/* STYLES */', fs.readFileSync(path.join(src, 'styles.css'), 'utf8'))
    .replace('/* CATALOG */', json)
    .replace('/* APP */', fs.readFileSync(path.join(src, 'app.js'), 'utf8'));
  fs.writeFileSync(path.join(out, 'index.html'), html);
  fs.copyFileSync(path.join(src, 'setup.html'), path.join(out, 'setup.html'));
  console.log(`Glasses reader: ${catalog.length} subjects; ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB startup HTML`);
}
