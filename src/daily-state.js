/* Daily reading is explicit reader state, separate from visits and chapter progress. */
function createDailyState(storage) {
  const list = value => Array.isArray(value) ? [...new Set(value.filter(x => typeof x === 'string'))] : [];
  let followed = list(storage.get('daily-subjects', []));
  let read = list(storage.get('research-read', []));
  let available = true;
  function refresh() {
    if (!available) return;
    followed = list(storage.get('daily-subjects', followed));
    read = list(storage.get('research-read', read));
  }
  return {
    refresh,
    get subjects() { return followed.slice(); },
    get available() { return available; },
    follows: id => followed.includes(id),
    isRead: key => read.includes(key),
    follow(ids) { followed = list(ids); available = storage.set('daily-subjects', followed) !== false; },
    toggleRead(key) {
      refresh();
      read = read.includes(key) ? read.filter(x => x !== key) : [...read, key];
      available = storage.set('research-read', read) !== false;
      return read.includes(key);
    },
  };
}

// Round-robin selection keeps a prolific subject from crowding out other interests.
// Old work remains eligible, but its age is made explicit in the view.
function dailySelection(items, followed, isRead, limit = 5) {
  const queues = followed.map(id => items.filter(i => i._s.id === id && !isRead(id + '/' + i.id))
    .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.id.localeCompare(b.id)));
  const chosen = [];
  while (chosen.length < limit && queues.some(q => q.length)) {
    for (const queue of queues) {
      if (queue.length && chosen.length < limit) chosen.push(queue.shift());
    }
  }
  return chosen;
}
