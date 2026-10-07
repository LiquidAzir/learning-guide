(() => {
  'use strict';
  const catalog = JSON.parse(document.getElementById('catalog').textContent);
  const app = document.getElementById('app');
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem('lg:glasses:' + key)) ?? fallback; } catch { return fallback; } };
  let storageOK = true;
  const save = (key, value) => { try { localStorage.setItem('lg:glasses:' + key, JSON.stringify(value)); } catch { storageOK = false; } };
  let size = [26,30,34].includes(read('size', 30)) ? read('size', 30) : 30;
  document.documentElement.style.setProperty('--text', size + 'px');
  let screen = 'menu', serial = 0, current = null, pages = [], page = 0;
  let menuBack = home, menuActions = [], units = [];
  const memory = new Map();

  function menu(title, entries, back = home, eyebrow = 'LEARNING GUIDE') {
    serial++;
    app.removeAttribute('aria-busy');
    screen = 'menu'; menuBack = back; menuActions = entries.map(e => e.action);
    app.innerHTML = `<header><p class="eyebrow">${esc(eyebrow)}</p><h1>${esc(title)}</h1></header><div class="menu">${entries.map((e,i) => `<button data-index="${i}">${esc(e.label)}${e.detail ? `<small>${esc(e.detail)}</small>` : ''}</button>`).join('')}</div><p class="hint">↑ ↓ Choose · Pinch / Enter Select · ← Back</p>`;
    app.querySelector('button')?.focus({preventScroll:true});
  }
  function home() {
    const last = read('last', null);
    const s = catalog.find(s => s.id === last?.subject);
    const c = s?.chapters.find(c => c.id === last?.chapter);
    const entries = [];
    if (c) entries.push({label:'Continue reading', detail:s.shortTitle + ' · ' + c.title, action:() => chapter(s,c)});
    entries.push({label:'Browse subjects',detail:`${catalog.length} subjects · complete chapters`,action:subjects});
    entries.push({label:'Keep current',detail:'Published research & explainers',action:researchSubjects});
    entries.push({label:'Text & controls',action:() => settings(home)});
    menu('One idea at a time.', entries, home, 'LEARNING GUIDE / GLASSES');
  }
  function subjects() { menu('Choose a subject', catalog.map(s => ({label:s.shortTitle,detail:`${s.chapters.length} chapters`,action:() => chapters(s)})),home); }
  function chapters(s) { menu(s.shortTitle, [{label:'Back to subjects',action:subjects},...s.chapters.map(c=>({label:c.order + '. ' + c.title,action:()=>chapter(s,c)}))],subjects,'CHAPTERS'); }
  function settings(back) {
    menu('Make it comfortable', [
      ...[26,30,34].map((n,i)=>({label:['Comfortable','Large','Extra large'][i] + (n===size?' · selected':''),action:async()=>{size=n;save('size',n);document.documentElement.style.setProperty('--text',n+'px'); if(current && back===readerMenu){await paginate(current.anchor);readerMenu();}else settings(back);}})),
      {label:'How to read',detail:'← → turn pages. ↑ ↓ choose controls. Pinch / Enter selects.',action:()=>settings(back)},
      {label:'Back',action:back}
    ],back,'TEXT & CONTROLS');
  }
  async function getJSON(url) {
    if (memory.has(url)) return memory.get(url);
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(),20000);
    try {
      const response = await fetch(url,{signal:controller.signal});
      if(!response.ok) throw new Error('HTTP '+response.status);
      const data = await response.json();
      // Bound memory on the glasses instead of retaining the entire guide.
      if(memory.size>=4) memory.delete(memory.keys().next().value);
      memory.set(url,data); return data;
    } finally { clearTimeout(timeout); }
  }
  function loading(label, back) { menu(label,[{label:'Back',action:back}],back,'LOADING'); return serial; }
  function failure(retry, back) { menu('Could not load this', [{label:'Try again',detail:'Check your connection, then retry.',action:retry},{label:'Back',action:back}],back); }
  async function chapter(s,c) {
    const token=loading(c.title,()=>chapters(s));
    try {
      const data=await getJSON(s.id+'/'+c.id+'.json');
      if(token!==serial)return;
      current={subject:s,chapter:c,title:c.title,key:s.id+'/'+c.id,original:'/#/'+s.id+'/'+c.id};
      units=extract(data.html,c.title);
      save('last',{subject:s.id,chapter:c.id});
      await paginate(read(current.key,null));
    } catch { if(token===serial) failure(()=>chapter(s,c),()=>chapters(s)); }
  }
  function researchSubjects() { menu('Keep current',catalog.map(s=>({label:s.shortTitle,detail:s.researchCount+' published entries',action:()=>research(s)})),home); }
  async function research(s) {
    const token=loading(s.shortTitle,researchSubjects);
    try {
      const data=await getJSON(s.id+'/research.json');if(token!==serial)return;
      const items=[...data.items].sort((a,b)=>(b.date||String(b.year)).localeCompare(a.date||String(a.year)));
      menu(s.shortTitle,[{label:'Back to subjects',action:researchSubjects},...items.map(i=>({label:i.headline||i.title,detail:(i.date||i.year)+' · '+(i.status||i.sourceType||'Research'),action:()=>article(s,i)}))],researchSubjects,'KEEP CURRENT');
    }catch{if(token===serial)failure(()=>research(s),researchSubjects);}
  }
  async function article(s,i) {
    current={subject:s,title:i.headline||i.title,key:s.id+'/research/'+i.id,original:'/#/'+s.id+'/research',item:i};
    const sections=[['Source',`${i.title}. ${i.authors}. ${i.venue}, ${i.date||i.year}. ${i.sourceType||''}. Status: ${i.status||'reported'}.`],['In brief',i.summary]];
    for(const [key,label] of [['question','Research question'],['method','Study method'],['limitations','Study limits']])if(i.evidence?.[key])sections.push([label,i.evidence[key]]);
    for(const [key,label] of [['finding','What did they find?'],['method','How did they test it?'],['meaning','Why does it matter?'],['limits','What remains uncertain?']])if(i.explainer?.[key])sections.push([label,i.explainer[key]]);
    if(!i.explainer)sections.push(['About this entry','A plain-language explainer has not yet been reviewed for this entry. The summary above is the published guide text.']);
    sections.push(['Primary source',i.url]);
    units=extract(sections.map(([title,text])=>`<h2>${esc(title)}</h2><p>${esc(text)}</p>`).join(''),current.title);
    await paginate(read(current.key,null));
  }

  // Flatten structural containers, retaining prose, notes, code, MathML and figures.
  // Tables become labelled rows so every cell remains available without sideways scrolling.
  function extract(html, initialTitle) {
    const doc=new DOMParser().parseFromString(html,'text/html');
    doc.querySelectorAll('script,style,.backref').forEach(n=>n.remove());
    doc.querySelectorAll('a').forEach(a=>{a.removeAttribute('href');a.removeAttribute('target');a.removeAttribute('tabindex');});
    doc.querySelectorAll('[tabindex]').forEach(n=>n.removeAttribute('tabindex'));
    const result=[];let title=initialTitle;
    function add(n){if(n.textContent.trim()||n.querySelector?.('svg,img,math'))result.push({title,node:n.cloneNode(true)});}
    function walk(n){
      if(n.nodeType===3){if(n.textContent.trim()){const p=doc.createElement('p');p.textContent=n.textContent;add(p);}return;}
      if(n.nodeType!==1)return;
      if(n.matches('h1,h2,h3,h4,h5,h6,summary,.callout-title')){title=n.textContent.trim();return;}
      if(n.matches('table')){
        const headers=[...n.querySelectorAll('thead th')];
        for(const row of n.querySelectorAll('tr')){
          if(row.closest('thead'))continue;
          const p=doc.createElement('p');
          [...row.children].forEach((cell,i)=>{if(i)p.append(doc.createTextNode(' · '));if(headers[i]){for(const child of headers[i].childNodes)p.append(child.cloneNode(true));p.append(doc.createTextNode(': '));}for(const child of cell.childNodes)p.append(child.cloneNode(true));});add(p);
        }return;
      }
      if(n.matches('figure')){for(const child of n.children)walk(child);return;}
      if(n.matches('svg,img')){const p=doc.createElement('figure');p.append(n.cloneNode(true));add(p);return;}
      if(n.matches('li')){
        const p=doc.createElement('p');
        const prefix=n.parentElement.tagName==='OL'?`${[...n.parentElement.children].indexOf(n)+1}. `:'• ';
        p.append(doc.createTextNode(prefix));
        for(const child of n.childNodes)if(!(child.nodeType===1&&child.matches('ul,ol')))p.append(child.cloneNode(true));
        add(p);for(const list of n.children)if(list.matches('ul,ol'))walk(list);return;
      }
      if(n.matches('p,pre,figcaption,.math-display')){add(n);return;}
      for(const child of n.childNodes)walk(child);
    }
    for(const n of doc.body.childNodes)walk(n);
    return result;
  }
  function boundaries(node) {
    const ends=[];
    function walk(n){
      if(n.nodeType===3){for(const m of n.textContent.matchAll(/\S+\s*|\s+/g))ends.push([n,m.index+m[0].length]);}
      else if(n.nodeType===1&&n.matches('math,svg,img,br'))ends.push([n.parentNode,[...n.parentNode.childNodes].indexOf(n)+1]);
      else for(const child of n.childNodes)walk(child);
    }
    walk(node);return [[node,0],...ends];
  }
  function fragment(node,edges,start,end){
    const range=document.createRange();range.setStart(...edges[start]);range.setEnd(...edges[end]);
    const el=node.cloneNode(false);el.append(range.cloneContents());return el;
  }
  function fitMath(host){
    for(const figure of host.querySelectorAll('svg,img'))figure.style.maxHeight=Math.min(230,host.clientHeight)+'px';
    for(const math of host.querySelectorAll('math')){
      const bounds=math.getBoundingClientRect();
      const ratio=Math.min(1,host.clientWidth/bounds.width,host.clientHeight/bounds.height);
      if(ratio<1)math.style.fontSize=(parseFloat(getComputedStyle(math).fontSize)*ratio*.97)+'px';
    }
  }
  function readerShell(){
    screen='reader';
    app.innerHTML=`<header><p class="eyebrow">${esc(current.subject.shortTitle)}</p><p class="reader-title">${esc(current.title)}</p></header><h1 class="section-title"></h1><article class="passage" aria-label="Reading passage"></article><div class="status"><span id="position"></span><span id="saved"></span></div><nav class="controls" aria-label="Reading controls"><button data-command="previous">← Back</button><button data-command="menu">Menu</button><button data-command="next">Next →</button></nav><p class="hint">← → Page · ↑ ↓ Choose · Pinch / Enter Select</p>`;
  }
  async function paginate(anchor){
    const token=++serial; readerShell();pages=[];
    screen='loading';
    app.querySelector('#position').textContent='Preparing pages…';
    app.querySelector('[data-command="previous"]').disabled=true;
    app.querySelector('[data-command="next"]').disabled=true;
    const host=app.querySelector('.passage');
    const title=app.querySelector('.section-title');
    host.style.visibility='hidden';
    title.style.visibility='hidden';
    app.setAttribute('aria-busy','true');
    // Reserve the same title height on every page, avoiding size-dependent clipping.
    title.style.height='54px';title.style.flex='none';
    for(let u=0;u<units.length;u++){
      const unit=units[u], edges=boundaries(unit.node);let start=0;
      title.textContent=unit.title;
      while(start<edges.length-1){
        let low=start+1,high=edges.length-1,best=start;
        while(low<=high){
          const mid=Math.floor((low+high)/2);host.replaceChildren(fragment(unit.node,edges,start,mid));fitMath(host);
          if(host.scrollHeight<=host.clientHeight+1 && host.scrollWidth<=host.clientWidth+1){best=mid;low=mid+1;}else high=mid-1;
        }
        if(best===start)best=start+1;
        // Prefer a sentence ending; do not leave a few trailing words alone.
        if(best<edges.length-1){
          if(edges.length-1-best<8)best=Math.min(best,start+Math.ceil((edges.length-1-start)/2));
          const minimum=start+Math.max(5,Math.floor((best-start)*.65));
          for(let end=best;end>=minimum;end--){
            const [node,offset]=edges[end];
            if(node.nodeType===3&&/[.!?;:]["'”’)]?\s*$/.test(node.textContent.slice(0,offset))){best=end;break;}
          }
        }
        const el=fragment(unit.node,edges,start,best);
        pages.push({title:unit.title,html:el.outerHTML,unit:u,token:start});start=best;
      }
      if(u%12===0){await new Promise(requestAnimationFrame);if(token!==serial)return;}
    }
    if(!pages.length)pages=[{title:'No text available',html:'<p>Return to the chapter list to choose another chapter.</p>',unit:0,token:0}];
    page=0;
    if(anchor&&Number.isInteger(anchor.unit)&&Number.isInteger(anchor.token))for(let i=0;i<pages.length;i++)if(pages[i].unit<anchor.unit||(pages[i].unit===anchor.unit&&pages[i].token<=anchor.token))page=i;
    screen='reader';
    host.style.visibility='';title.style.visibility='';app.removeAttribute('aria-busy');
    app.querySelector('[data-command="next"]').disabled=false;
    showPage();
  }
  function showPage(){
    if(!pages.length)return;
    const entry=pages[page];
    app.querySelector('.section-title').textContent=entry.title;
    const host=app.querySelector('.passage');host.innerHTML=entry.html;fitMath(host);
    current.anchor={unit:entry.unit,token:entry.token};save(current.key,current.anchor);
    app.querySelector('#position').textContent=`${page+1} / ${pages.length}`;
    app.querySelector('#saved').textContent=storageOK?'Place saved':'Storage unavailable';
    app.querySelector('[data-command="previous"]').disabled=page===0;
    app.querySelector('[data-command="next"]').textContent=page===pages.length-1?'Done ✓':'Next →';
    app.querySelector('[data-command="next"]').focus({preventScroll:true});
  }
  function readerMenu(){
    const back=()=>paginate(current.anchor);
    menu('Reading menu',[
      {label:'Continue',action:back},
      {label:'Jump to section',action:()=>sections(back)},
      {label:'Text size',action:()=>settings(readerMenu)},
      {label:current.chapter?'Chapter list':'Research list',action:()=>current.chapter?chapters(current.subject):research(current.subject)},
      {label:'All subjects',action:subjects},
      {label:'Home',action:home}
    ],back);
  }
  function sections(back){
    const entries=[];let previous='';
    pages.forEach((p,i)=>{if(p.title!==previous){entries.push({label:p.title,action:async()=>{await paginate({unit:p.unit,token:p.token});}});previous=p.title;}});
    menu('Jump to a section',[{label:'Back to reading',action:back},...entries],back);
  }
  function command(cmd){if(cmd==='menu'){if(screen==='loading')home();else readerMenu();}else if(screen==='reader'&&cmd==='previous'&&page>0){page--;showPage();}else if(screen==='reader'&&cmd==='next'){if(page<pages.length-1){page++;showPage();}else readerMenu();}}
  app.addEventListener('click',e=>{const button=e.target.closest('button');if(!button||button.disabled)return;if(button.dataset.index!==undefined)menuActions[+button.dataset.index]?.();else command(button.dataset.command);});
  document.addEventListener('keydown',e=>{
    if(e.altKey||e.ctrlKey||e.metaKey)return;
    if(screen==='loading')return;
    if(e.key==='Escape'||e.key==='Backspace'){e.preventDefault();if(screen==='reader')readerMenu();else menuBack();return;}
    if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;
    e.preventDefault();
    if(screen==='reader'&&['ArrowLeft','ArrowRight'].includes(e.key)){command(e.key==='ArrowLeft'?'previous':'next');return;}
    if(screen==='menu'&&e.key==='ArrowLeft'){menuBack();return;}
    const buttons=[...app.querySelectorAll('button:not(:disabled)')];
    const index=buttons.indexOf(document.activeElement);
    const delta=['ArrowUp','ArrowLeft'].includes(e.key)?-1:1;
    buttons[Math.max(0,Math.min(buttons.length-1,index+delta))]?.focus({preventScroll:true});
    document.activeElement?.scrollIntoView({block:'nearest'});
  });
  let resizeTimer;
  addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(screen==='reader'&&current)paginate(current.anchor);},180);});
  home();
})();
