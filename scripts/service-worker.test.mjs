import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
async function navigate(fetcher) {
  const listeners = {};
  let stored, response;
  const cache = { match: async () => new Response('old feed'), put: async (key, res) => { stored = await res.text(); } };
  vm.runInNewContext(fs.readFileSync('public/sw.js', 'utf8'), {
    self: { addEventListener: (type, fn) => { listeners[type] = fn; }, location: { origin: 'https://guide.test' } },
    caches: { open: async () => cache }, fetch: fetcher, URL, Response, AbortController, setTimeout, clearTimeout
  });
  listeners.fetch({
    request: { url: 'https://guide.test/', method: 'GET', mode: 'navigate' },
    respondWith: promise => { response = promise; }
  });
  return { text: await (await response).text(), stored };
}
test('online navigation replaces a stale feed immediately', async () => {
  const result = await navigate(async (url, options) => {
    assert.equal(url, '/index.html'); assert.equal(options.cache, 'no-cache');
    return new Response('new feed');
  });
  assert.equal(result.text, 'new feed'); assert.equal(result.stored, 'new feed');
});
test('offline and failed deployments retain the saved guide', async () => {
  assert.equal((await navigate(async () => { throw new Error('offline'); })).text, 'old feed');
  assert.equal((await navigate(async () => new Response('error', { status: 503 }))).text, 'old feed');
});
