/* Browser-local research preferences. Kept independent of the DOM for testing. */
function createResearchState(storage, now = () => Date.now()) {
  const strings = value => Array.isArray(value) && value.every(k => typeof k === 'string');
  const savedValue = storage.get('research-saved', []);
  const saved = new Set(strings(savedValue) ? savedValue : []);
  let record = storage.get('research-visit', null);
  if (!record || !strings(record.known) || !strings(record.baseline) || !Number.isFinite(record.at)) record = null;
  let baseline = new Set();
  let available = true;
  let hasPrevious = !!record;
  function refreshSaved() {
    if (!available) return;
    const latest = storage.get('research-saved', null);
    if (!strings(latest)) return;
    saved.clear();
    latest.forEach(key => saved.add(key));
  }
  // Reloads and filter changes within 30 minutes belong to the same visit.
  const visitGap = 30 * 60 * 1000;
  return {
    visit(keys) {
      refreshSaved();
      const time = now();
      hasPrevious = !!record && (record.returning === true || time - record.at >= visitGap);
      baseline = new Set(!record ? keys : time - record.at >= visitGap ? record.known : record.baseline);
      const known = [...new Set([...(record ? record.known : []), ...keys])];
      record = { known, baseline: [...baseline], at: time, returning: hasPrevious };
      available = storage.set('research-visit', record) !== false;
    },
    isNew: key => !baseline.has(key),
    isSaved: key => saved.has(key),
    toggleSaved(key) {
      refreshSaved();
      if (saved.has(key)) saved.delete(key); else saved.add(key);
      available = storage.set('research-saved', [...saved]) !== false;
      return saved.has(key);
    },
    get available() { return available; },
    get hasPrevious() { return hasPrevious; },
  };
}
