(() => {
 'use strict';
 const {categories,lessons} = window.BF_DATA;
 const currentCat = document.body.dataset.category || 'home';
 const progressKey='bestfit-python-lab-progress-v1';
 const draftPrefix='bestfit-python-lab-draft-v1-';
 const inputPrefix='bestfit-python-lab-input-v1-';
 const $=id=>document.getElementById(id);
 const safeGet = (key) => {try{return localStorage.getItem(key)}catch(_){return null}};
 const safeSet = (key,val) => {try{localStorage.setItem(key,val)}catch(_){}};
 let progress={};
 try{progress=JSON.parse(safeGet(progressKey)||'{}')||{}}catch(_){progress={}};
 const total=lessons.length;
 const html = s=>{const span=document.createElement('span');span.textContent=String(s);return span.innerHTML};
 const completed=()=>lessons.filter(l=>progress[l.id]).length;
 const buildProgress=()=>{
  $('progress-count').textContent=`${completed()} / ${total}`;
  $('progress-bar').style.width=completed()/total*100+'%';
 };
 const makeCategoryNav=()=>{
  $('categories').innerHTML=categories.map(c=>{
   const done=lessons.filter(l=>l.cat===c.id&&progress[l.id]).length;
   const count=lessons.filter(l=>l.cat===c.id).length;
   return `<a class="category" href="${c.file}" ${currentCat===c.id?'aria-current="page"':''}><span class="cat-num">STEP ${c.num} ・${done}/${count}問</span><strong>${html(c.name)}</strong><small>${html(c.goal)}</small></a>`;
  }).join('');
 };
 buildProgress();makeCategoryNav();
 if(currentCat==='home'){
  $('roadmap').innerHTML=categories.map(c=>{
   const each=lessons.filter(l=>l.cat===c.id),done=each.filter(l=>progress[l.id]).length;
   return `<a class="road" href="${c.file}"><div class="roadtop"><span class="num">STEP ${c.num}</span><span class="small-muted">${done}/${each.length}問クリア</span></div><h3>${html(c.name)}</h3><p>${html(c.subtitle)}</p><div class="roadbottom">到達目標：${html(c.goal)}　→</div></a>`;
  }).join('');
  return;
 }
 const cat=categories.find(c=>c.id===currentCat), items=lessons.filter(l=>l.cat===currentCat);
 if(!cat||!items.length)return;
 let at=0,runOk=false,quizOk=false,lastRun=false;
 let worker=null,workerReady=null,resolveReady=null,rejectReady=null,nextId=0,pending=new Map(),busy=false;
 function select(index,changeHash=true){
  if(index<0||index>=items.length)return;
  at=index;const l=items[at]; runOk=false; quizOk=l.quiz.length===0; lastRun=false;
  if(changeHash) history.replaceState(null,'','#'+l.id);
  $('lesson-chips').innerHTML=items.map((item,i)=>`<button class="lesson-chip ${i===at?'current':''}" data-at="${i}" type="button">${i+1}${progress[item.id]?'<span class="tick">✓</span>':''}${item.source.includes('問10')?' <span aria-label="ベストフィット">★</span>':''}</button>`).join('');
  for(const el of $('lesson-chips').querySelectorAll('button'))el.addEventListener('click',()=>select(Number(el.dataset.at)));
  $('task-title').textContent=l.title;$('task-goal').textContent=l.goal;$('task-do').textContent=l.do;
  $('source').textContent=l.source;$('level').textContent=l.level;
  $('goal-label').textContent=cat.name;
  $('hint-text').textContent=l.hint||'まず、実行結果を観察しよう。';
  $('hint-box').open=false;
  $('solution-text').textContent=l.why||'';$('solution-box').open=false;
  $('expected').style.display=l.conceal?'none':'block';
  $('expected-pre').textContent=l.expected??'（自由に実行してみよう）';
  $('trace').hidden=!l.trace.length;
  $('trace-list').innerHTML=l.trace.map(s=>`<li>${html(s)}</li>`).join('');
  $('code').value=safeGet(draftPrefix+l.id)??l.code;
  $('stdin').value=safeGet(inputPrefix+l.id)??l.stdin;
  $('stdin-box').hidden=!(l.code.includes('input(')||l.stdin);
  $('terminal').textContent='▶ 「Pythonで実行」を押すと、ここに結果が表示されます。';
  $('terminal').classList.remove('is-error');
  $('result').className='result';$('result').textContent='';
  $('quiz-box').hidden=l.quiz.length===0;
  $('quiz-feedback').className='feedback';$('quiz-feedback').hidden=true;
  $('quiz-list').innerHTML=l.quiz.map((q,i)=>{
   const id=`answer_${i}`;
   return `<div class="qgroup"><p class="qtitle">${html(q.question)}</p>${q.kind==='choice' ? q.options.map((opt,j)=>`<label class="option"><input type="radio" name="${id}" value="${html(opt)}"><span>${html(opt)}</span></label>`).join('') : `<input class="answer-input" id="${id}" type="text" inputmode="text" autocomplete="off" spellcheck="false" placeholder="ここに答えを入力">`}</div>`;
  }).join('');
  const nex=items[at+1];$('next').textContent=nex?'次の問題 →':'次の分野を見る →';
  $('status').textContent=progress[l.id]?'✓ この問題はクリア済みです。':'コードを実行して、必要なら理解チェックも回答しよう。';
  $('ready-state').textContent=worker?($('ready-state').textContent||'準備中'):'Python：初回実行時に読み込み';
 }
 const current=()=>items[at];
 $('code').addEventListener('input',()=>{safeSet(draftPrefix+current().id,$('code').value);runOk=false;lastRun=false;updatePass();});
 $('stdin').addEventListener('input',()=>{safeSet(inputPrefix+current().id,$('stdin').value);runOk=false;lastRun=false;updatePass();});
 $('code').addEventListener('keydown',e=>{
  if(e.key==='Tab'){e.preventDefault();insert('    ')}
  if(e.key==='Enter'){
   e.preventDefault();const box=$('code'),cursor=box.selectionStart,prior=box.value.slice(0,cursor);
   const ln=prior.split('\n').pop();const indent=ln.match(/^ */)?.[0]||'';
   insert('\n'+indent+(ln.trim().endsWith(':')?'    ':''));
  }
 });
 function insert(s){const field=$('code'),start=field.selectionStart,end=field.selectionEnd;field.setRangeText(s,start,end,'end');field.focus();field.dispatchEvent(new Event('input',{bubbles:true}));}
 for(const btn of $('keys').querySelectorAll('button'))btn.addEventListener('click',()=>insert(btn.dataset.key==='indent'?'    ':btn.dataset.key));
 $('reset').addEventListener('click',()=>{
  const l=current();$('code').value=l.code;$('stdin').value=l.stdin;
  safeSet(draftPrefix+l.id,l.code);safeSet(inputPrefix+l.id,l.stdin);
  runOk=false;lastRun=false;quizOk=l.quiz.length===0;select(at);
 });
 function boot(){
  if(worker)return workerReady;
  workerReady=new Promise((resolve,reject)=>{resolveReady=resolve;rejectReady=reject});
  worker=new Worker('./python-worker.mjs',{type:'module'});
  worker.addEventListener('message',e=>{
   const msg=e.data||{};
   if(msg.type==='ready'){$('ready-state').textContent='Python：準備完了';resolveReady();}
   else if(msg.type==='loadError'){$('ready-state').textContent='Python：読み込み失敗';rejectReady(new Error(msg.error));}
   else if(msg.type==='result'){
    const p=pending.get(msg.id);if(p){pending.delete(msg.id);p(msg);}
   }
  });
  worker.addEventListener('error',e=>{rejectReady?.(new Error(e.message||'Workerエラー'));$('ready-state').textContent='Python：エラー';});
  $('ready-state').textContent='Python：読み込み中…（初回は時間がかかります）';return workerReady;
 }
 function abortWorker(){
  if(worker)worker.terminate();worker=null;workerReady=null;
  for(const fn of pending.values()) fn({output:'',error:'Pythonを停止しました。'});
  pending.clear();$('ready-state').textContent='Python：停止（次回自動再起動）';
 }
 function runOnce(code,stdin){
  return new Promise(resolve=>{
   const id=++nextId;let finished=false;
   const timeout=setTimeout(()=>{
    if(finished)return;finished=true;pending.delete(id);abortWorker();resolve({output:'',error:'5秒以内に終了しなかったため停止しました。無限ループなどを確認してください。'});
   },5000);
   pending.set(id,msg=>{if(finished)return;finished=true;clearTimeout(timeout);resolve(msg);});
   worker.postMessage({type:'run',id,code,stdin});
  });
 }
 function normalize(x){return String(x??'').replace(/\r/g,'').trimEnd()}
 function updatePass(){
  const l=current();
  if(runOk&&quizOk&&!progress[l.id]){
   progress[l.id]=true;safeSet(progressKey,JSON.stringify(progress));buildProgress();makeCategoryNav();
   $('lesson-chips').querySelectorAll('button')[at].innerHTML+=` <span class="tick">✓</span>`;
  }
  if(progress[l.id])$('status').textContent='✓ クリア！ 次の問題に進めます。';
 }
 $('run').addEventListener('click',async()=>{
  if(location.protocol==='file:'){
   $('terminal').textContent='Pythonの実行には localhost または GitHub Pages が必要です。\nZIPをすべて展開し、Windowsでプレビュー開始.bat をダブルクリックしてください。';
   $('terminal').classList.add('is-error');
   return;
  }
  if(busy)return;
  busy=true;lastRun=false;runOk=false;
  const l=current(), selected=l.id,runBtn=$('run');
  const code=$('code').value,stdin=$('stdin').value;
  runBtn.disabled=true;$('terminal').textContent='Pythonを準備しています…';$('terminal').classList.remove('is-error');
  $('result').className='result';
  try{
   await Promise.race([boot(),new Promise((_,reject)=>setTimeout(()=>reject(new Error('Pythonの読み込みに60秒以上かかっています。ネット接続や学校のフィルタを確認してください。')),60000))]);
   if(current().id!==selected)return;
   $('terminal').textContent='実行しています…';
   const outcome=await runOnce(code,stdin);
   if(current().id!==selected)return;
   lastRun=true;
   $('terminal').textContent=(outcome.output||'(出力なし)')+(outcome.error?'\n⚠ '+outcome.error:'');
   $('terminal').classList.toggle('is-error',!!outcome.error);
   const validInput=(l.gradeInput??l.stdin).trim()===stdin.trim();
   runOk=!outcome.error&&validInput&&normalize(outcome.output)===normalize(l.expected);
   $('result').className='result visible '+(runOk?'ok':'no');
   $('result').textContent=outcome.error?'エラーが発生しました。コードを修正してもう一度実行しよう。':!validInput?'入力欄の値が課題の指定と異なります。自由実験としてはOK。正解判定は指定値で行います。':runOk?'✓ 指定された実行結果と一致しました！': '実行できました。目標の出力と見比べて、もう一度考えてみよう。';
   updatePass();
  }catch(err){
   if(current().id!==selected)return;
   $('terminal').classList.add('is-error');
   $('terminal').textContent='実行環境を読み込めませんでした。\n'+String(err.message||err)+'\n\nネット接続が必要です。CDN（cdn.jsdelivr.net）にアクセスできるか確認してください。';
   $('result').className='result visible no';$('result').textContent='授業前に学校の回線・タブレットで動作確認してください。';
  }finally{busy=false;runBtn.disabled=false;}
 });
 $('stop').addEventListener('click',()=>{abortWorker();$('terminal').textContent='実行環境を停止しました。もう一度「実行」を押すと再読み込みします。';busy=false;$('run').disabled=false;});
 $('check-quiz').addEventListener('click',()=>{
  const l=current(),answers=l.quiz.map((q,i)=>q.kind==='choice'?document.querySelector(`input[name="answer_${i}"]:checked`)?.value:($(`answer_${i}`)?.value||''));
  const correct=l.quiz.map((q,i)=>{
   const a=String(answers[i]||'').normalize('NFKC').trim().replace(/\s+/g,'');
   return a===String(q.answer).normalize('NFKC').trim().replace(/\s+/g,'');
  });
  quizOk=correct.every(Boolean);
  const fb=$('quiz-feedback');fb.hidden=false;fb.className='feedback '+(quizOk?'ok':'warn');
  fb.textContent=quizOk?'✓ 理解チェックは全問正解です！ 実行結果も一致すればクリア。':`正解は ${correct.filter(Boolean).length}/${l.quiz.length} 問。もう一度考えてみよう。必要なら「ヒント」を見てみてください。`;
  if(quizOk)updatePass();
 });
 $('next').addEventListener('click',()=>{
  if(at<items.length-1){select(at+1);$('lesson-chips').scrollIntoView({behavior:'smooth',block:'start'});}
  else{const idx=categories.findIndex(c=>c.id===currentCat);location.href=idx<categories.length-1?categories[idx+1].file:'index.html';}
 });
 addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1)),idx=items.findIndex(l=>l.id===id);if(idx>=0&&idx!==at)select(idx,false)});
 const first=items.findIndex(l=>l.id===decodeURIComponent(location.hash.slice(1)));
 select(first>=0?first:0,false);
})();
