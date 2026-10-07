import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

test('glasses catalog includes every compiled subject and complete chapter bodies', () => {
  const data=JSON.parse(fs.readFileSync('dist/data.json'));
  const html=fs.readFileSync('dist/glasses/index.html','utf8');
  const catalog=JSON.parse(html.match(/id="catalog" type="application\/json">([\s\S]*?)<\/script>/)[1]);
  assert.deepEqual(catalog.map(s=>s.id),data.subjects.map(s=>s.id));
  assert.ok(Buffer.byteLength(html)<100*1024,'startup must stay below 100 KB uncompressed');
  for(const s of data.subjects){
    assert.equal(catalog.find(c=>c.id===s.id).chapters.length,s.chapters.length);
    for(const c of s.chapters)assert.deepEqual(JSON.parse(fs.readFileSync(`dist/glasses/${s.id}/${c.id}.json`)),c);
    assert.deepEqual(JSON.parse(fs.readFileSync(`dist/glasses/${s.id}/research.json`)),s.research);
  }
});

test('regular service worker does not replace glasses pages or fetch the large guide', () => {
  const listeners={};let intercepted=false;
  const self={addEventListener:(type,fn)=>listeners[type]=fn,location:{origin:'https://example.test'}};
  vm.runInNewContext(fs.readFileSync('public/sw.js','utf8'),{self,URL});
  for(const p of ['/glasses','/glasses/','/glasses/setup.html','/glasses/physics/motion.json']){
    listeners.fetch({request:{method:'GET',url:'https://example.test'+p,mode:'navigate'},respondWith:()=>{intercepted=true;}});
    assert.equal(intercepted,false,p);
  }
});
