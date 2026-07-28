import { DATA } from "../data/index.js";
import { raw, save, key, replace } from "./store.js";
import { initTheme } from "./theme.js";
import { initTimer } from "./timer.js";
import { renderTracker, renderDayChecklist, renderErrorLog, trackerStats } from "./tracker.js";
import { initHighlight, loadHighlightsFor, clearDayHighlights, highlightCount } from "./highlight.js";
import { addWord, renderVocabTable, vocabCount, onVocabChange, exportCSV, clearWords, allWords } from "./vocab.js";
import { initBackup } from "./backup.js";

/* ================= ENGINE ================= */
const norm = s => (s||"").toLowerCase().replace(/[.,;:!?"'’“”()]/g,"").replace(/\s+/g," ").trim();
const store = raw();
const linkedDay=Number(new URLSearchParams(window.location.search).get("day"));
let cur = DATA.some(d=>d.id===linkedDay) ? linkedDay : (store.__day || 1); // hỗ trợ mở thẳng ?day=7

/* ---- nav ---- */
const navEl = document.getElementById("nav");
function initLearnerName(){
  const side=document.getElementById("side");
  const row=el("label","learner-name");
  row.appendChild(el("span",null,"Tên người làm bài"));
  const input=document.createElement("input");
  input.type="text"; input.autocomplete="name";
  input.placeholder="Nhập họ và tên…";
  input.value=store.__learnerName||"";
  input.addEventListener("input",()=>{ store.__learnerName=input.value; save(); });
  row.appendChild(input);
  side.insertBefore(row,navEl);
}
function renderNav(){
  navEl.innerHTML = "";
  DATA.forEach(d=>{
    const b=document.createElement("button");
    b.className="navday"+(d.id===cur?" on":"");
    b.innerHTML = `Ngày ${String(d.id).padStart(2,"0")}<small>${d.title.split("— ")[1]}</small>`;
    b.onclick=()=>go(d.id);
    navEl.appendChild(b);
  });
  const t=document.createElement("button");
  const st=trackerStats();
  t.className="navday"+(cur==="tracker"?" on":"");
  t.style.marginTop="8px";
  t.innerHTML=`📋 Bảng theo dõi 21 ngày<small>${st.done}/${st.total} ngày đã hoàn thành</small>`;
  t.onclick=()=>go("tracker");
  navEl.appendChild(t);

  const v=document.createElement("button");
  v.className="navday"+(cur==="vocab"?" on":"");
  v.innerHTML=`📒 Sổ từ vựng<small>${vocabCount()} từ đã lưu</small>`;
  v.onclick=()=>go("vocab");
  navEl.appendChild(v);
}
function go(target){
  cur=target; store.__day=cur; save();
  renderNav(); renderDay(); window.scrollTo(0,0);
}
document.addEventListener("tracker:changed",()=>{ renderNav(); });

/* ---- helpers ---- */
function el(tag,cls,html){ const e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e; }
function expBox(it){
  let h="";
  if(it.ev) h+=`<div class="ev">📍 ${it.ev}</div>`;
  if(it.exp) h+=`<div style="margin-top:${it.ev?"6px":"0"}">${it.exp}</div>`;
  return h?el("div","exp",h):null;
}

/* ---- renderers ---- */
function rNote(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||"Ghi chú"}</span>`));
  w.appendChild(el("div",null,b.html));
  return w;
}
function rPassage(b){
  const w=el("div","block");
  const h=el("h3",null,`${b.title} <span class="tag">Passage</span>`);
  w.appendChild(h);
  if(b.subtitle) w.appendChild(el("p","instr",`<b style="color:var(--tx);font-size:15px">${b.subtitle}</b>`));
  const p=el("div","passage");
  b.paras.forEach(([l,t])=> p.appendChild(el("p",null,`<span class="pl">${l}</span>${t}`)));
  w.appendChild(p);
  const tg=el("button","btn sm pcollapse","Thu gọn bài đọc");
  tg.style.marginTop="8px";
  tg.onclick=()=>{ p.classList.toggle("collapsed"); tg.textContent = p.classList.contains("collapsed")?"Mở rộng bài đọc":"Thu gọn bài đọc"; };
  w.appendChild(tg);
  return w;
}
function rQuiz(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||""}</span>`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  b.items.forEach((it,ii)=>{
    const k=key(d,bi,ii);
    const q=el("div","q");
    const num = b.start!==undefined ? (b.start+ii) : (ii+1);
    const head=el("div","qh");
    const nEl=el("div","qn",String(num));
    head.appendChild(nEl); head.appendChild(el("div","qt",it.q));
    q.appendChild(head);
    const opts = it.opts || b.shared;
    const ow=el("div","opts"+(b.col?" col":""));
    const btns=[];
    opts.forEach((o,oi)=>{
      const btn=el("button","opt",o);
      btn.onclick=()=>{ store[k]=oi; save(); paint(); updBar(); };
      btns.push(btn); ow.appendChild(btn);
    });
    q.appendChild(ow);
    const ex=expBox(it);
    if(ex){ ex.classList.add("hidden"); q.appendChild(ex); }
    const editRow=el("div");
    editRow.style.marginLeft="33px"; editRow.style.marginTop="6px";
    const editBtn=el("button","btn sm","✏️ Sửa đáp án");
    editRow.appendChild(editBtn);
    editRow.classList.add("hidden");
    q.appendChild(editRow);
    editBtn.onclick=()=>{ store[k]=undefined; delete store[k]; save(); paint(); updBar(); };
    function paint(){
      const pick=store[k];
      if(pick===undefined){
        nEl.className="qn";
        btns.forEach(x=>{x.disabled=false;x.className="opt";});
        if(ex)ex.classList.add("hidden");
        editRow.classList.add("hidden");
        return;
      }
      const ok = pick===it.a;
      nEl.className="qn "+(ok?"ok":"bad");
      btns.forEach((x,oi)=>{
        x.disabled=true; x.className="opt";
        if(oi===pick) x.classList.add(ok?"pick-ok":"pick-bad");
        else if(oi===it.a) x.classList.add("reveal");
      });
      if(ex) ex.classList.remove("hidden");
      editRow.classList.remove("hidden");
    }
    paint();
    q._paint=paint; q._meta={k,a:it.a,type:"choice"};
    w.appendChild(q);
  });
  return w;
}
function rGap(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||""}</span>`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  b.items.forEach((it,ii)=>{
    const k=key(d,bi,ii);
    const q=el("div","q");
    const num=b.start!==undefined?(b.start+ii):(ii+1);
    const head=el("div","qh");
    const nEl=el("div","qn",String(num));
    head.appendChild(nEl); head.appendChild(el("div","qt",it.q));
    q.appendChild(head);
    const row=el("div","gaprow");
    const inp=el("input","gap"); inp.type="text"; inp.placeholder="Nhập đáp án…";
    const chk=el("button","btn sm","Kiểm tra");
    const editBtn=el("button","btn sm","✏️ Sửa đáp án"); editBtn.classList.add("hidden");
    row.appendChild(inp); row.appendChild(chk); row.appendChild(editBtn); q.appendChild(row);
    const ex=el("div","exp"); ex.classList.add("hidden"); q.appendChild(ex);
    function grade(){
      const v=norm(inp.value);
      if(!v) return;
      const ok = it.a.some(a=>norm(a)===v);
      store[k]= ok?1:0; store[k+"_v"]=inp.value; save();
      paint(); updBar();
    }
    chk.onclick=grade;
    inp.addEventListener("keydown",e=>{ if(e.key==="Enter") grade(); });
    editBtn.onclick=()=>{
      delete store[k]; delete store[k+"_v"]; save();
      paint(); updBar();
      inp.focus();
    };
    function paint(){
      const st=store[k];
      if(st===undefined){
        nEl.className="qn"; inp.className="gap"; inp.value=""; inp.disabled=false; chk.disabled=false;
        chk.classList.remove("hidden"); editBtn.classList.add("hidden");
        ex.classList.add("hidden"); return;
      }
      inp.value = store[k+"_v"]||"";
      inp.disabled=true; chk.disabled=true;
      chk.classList.add("hidden"); editBtn.classList.remove("hidden");
      const ok = st===1;
      nEl.className="qn "+(ok?"ok":"bad");
      inp.className="gap "+(ok?"ok":"bad");
      ex.innerHTML = `<b>Đáp án:</b> ${it.a[0]}${it.a.length>1?` <span style="color:var(--tx2)">(cũng chấp nhận: ${it.a.slice(1).join(" / ")})</span>`:""}`
        + (it.ev?`<div class="ev" style="margin-top:6px">📍 ${it.ev}</div>`:"")
        + (it.exp?`<div style="margin-top:6px">${it.exp}</div>`:"");
      ex.classList.remove("hidden");
    }
    paint();
    q._meta={k,type:"gap",reveal:()=>{ if(store[k]===undefined){ store[k]=0; store[k+"_v"]=""; save(); paint(); } }};
    w.appendChild(q);
  });
  return w;
}
function rFree(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||"Tự luận"}</span>`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  b.items.forEach((it,ii)=>{
    const k=key(d,bi,ii)+"_t";
    const q=el("div","q");
    const head=el("div","qh");
    head.appendChild(el("div","qn",String(ii+1)));
    head.appendChild(el("div","qt",`<b>${it.q}</b>`));
    q.appendChild(head);
    const ta=el("textarea","free"); ta.placeholder="Viết câu của bạn…"; ta.value=store[k]||"";
    ta.addEventListener("input",()=>{ store[k]=ta.value; save(); });
    q.appendChild(ta);
    const bt=el("button","btn sm","Xem đáp án gợi ý"); bt.style.marginTop="8px";
    const md=el("div","model hidden",`<span class="lb">Gợi ý</span>${it.model}${it.exp?`<div style="margin-top:7px;color:var(--tx2)">${it.exp}</div>`:""}`);
    bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent = md.classList.contains("hidden")?"Xem đáp án gợi ý":"Ẩn đáp án"; };
    q.appendChild(bt); q.appendChild(md);
    q._meta={type:"free",reveal:()=>{ md.classList.remove("hidden"); bt.textContent="Ẩn đáp án"; }};
    w.appendChild(q);
  });
  return w;
}
function rVocab(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||"Vocabulary"}</span>`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  const t=el("table","vt");
  t.innerHTML="<tr><th>Cụm từ</th><th>Nghĩa / cấu trúc</th><th>Câu ví dụ</th></tr>"+
    b.items.map(r=>`<tr><td class="ph">${r[0]}</td><td>${r[1]}</td><td class="ex">${r[2]}</td></tr>`).join("");
  const tw=el("div","tablewrap"); tw.appendChild(t);
  w.appendChild(tw);
  /* quiz */
  const qw=el("div"); qw.style.marginTop="14px";
  const start=el("button","btn sm","▶ Luyện nhanh 8 câu (nghĩa → cụm từ)");
  qw.appendChild(start); w.appendChild(qw);
  start.onclick=()=>{
    start.remove();
    const pool=b.items.slice();
    const pick=[]; while(pick.length<Math.min(8,pool.length)) pick.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
    pick.forEach((it,ii)=>{
      const q=el("div","q");
      const head=el("div","qh");
      const nEl=el("div","qn",String(ii+1));
      head.appendChild(nEl); head.appendChild(el("div","qt",`Cụm nào mang nghĩa: <b>${it[1]}</b>?`));
      q.appendChild(head);
      const wrong=b.items.filter(x=>x!==it).sort(()=>Math.random()-.5).slice(0,3);
      const opts=[it,...wrong].sort(()=>Math.random()-.5);
      const ow=el("div","opts"); const btns=[];
      let expEl=null;
      const editBtn=el("button","btn sm","✏️ Sửa đáp án"); editBtn.classList.add("hidden");
      editBtn.style.marginLeft="33px"; editBtn.style.marginTop="6px";
      function reset(){
        btns.forEach(x=>{x.disabled=false;x.className="opt";});
        nEl.className="qn";
        if(expEl){ expEl.remove(); expEl=null; }
        editBtn.classList.add("hidden");
      }
      opts.forEach(o=>{
        const btn=el("button","opt",o[0]);
        btn.onclick=()=>{
          btns.forEach(x=>{x.disabled=true;});
          const ok=o===it; nEl.className="qn "+(ok?"ok":"bad");
          btn.classList.add(ok?"pick-ok":"pick-bad");
          if(!ok) btns[opts.indexOf(it)].classList.add("reveal");
          expEl=el("div","exp",`<b>${it[0]}</b> — ${it[1]}<div class="ev" style="margin-top:5px">${it[2]}</div>`);
          q.insertBefore(expEl, editBtn);
          editBtn.classList.remove("hidden");
        };
        btns.push(btn); ow.appendChild(btn);
      });
      editBtn.onclick=reset;
      q.appendChild(ow); q.appendChild(editBtn); qw.appendChild(q);
    });
  };
  return w;
}
function sourceEsc(s){
  return String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
}
function sourceTag(title){
  if(/^(questions?|câu hỏi)\b/i.test(title)) return "Reading";
  if(/reading|bài đọc|paraphrase/i.test(title)) return "Reading";
  if(/writing|task 1|task 2|đoạn văn/i.test(title)) return "Writing";
  if(/speaking|part 1|part 2|part 3|phát âm|bản chép lời/i.test(title)) return "Speaking";
  if(/cụm từ|từ vựng|collocation|ngôn ngữ/i.test(title)) return "Vocabulary";
  if(/ngữ pháp|dấu câu|diễn đạt/i.test(title)) return "Grammar";
  if(/sản phẩm|tiêu chí|checklist/i.test(title)) return "Checklist";
  return "Student Book";
}
function sourceNeedsWork(title){
  if(/^(bài đọc\s*\d*(?:\s*-.*)?|ngữ liệu reading)$/i.test(title.trim())) return false;
  return /(bài|questions?|câu hỏi|writing|speaking|kiểm tra|phiếu|bảng|sơ đồ|tự chấm|tự nhớ|vận dụng|luyện|đánh giá)/i.test(title);
}
function sourceWorkKey(b){ return `src_${b.day}_${b.n.replace(".","_")}`; }
function sourceHtml(text){
  const lines=String(text||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
  let html="",inList=false;
  const closeList=()=>{ if(inList){ html+="</ul>"; inList=false; } };
  lines.forEach(line=>{
    const safe=sourceEsc(line);
    if(/^[•✓□]\s*/.test(line)){
      if(!inList){ html+='<ul class="tips">'; inList=true; }
      html+=`<li>${sourceEsc(line.replace(/^[•✓□]\s*/,""))}</li>`;
      return;
    }
    closeList();
    let m=line.match(/^([A-G])\s+(.+)/);
    if(m){ html+=`<p class="src-passage"><span class="pl">${m[1]}</span>${sourceEsc(m[2])}</p>`; return; }
    m=line.match(/^(\d+)\s+(.+)/);
    if(m){ html+=`<div class="srcq"><span class="qn">${m[1]}</span><div>${sourceEsc(m[2])}</div></div>`; return; }
    m=line.match(/^([A-D])\s+(.+)/);
    if(m){ html+=`<div class="srcopt"><b>${m[1]}</b> ${sourceEsc(m[2])}</div>`; return; }
    if(/^(Part\s+\d|Task\s+\d|Lựa chọn\s+[A-Z]|Bộ\s+[A-Z]|Figure\s+[A-Z]|Câu hỏi\s|Questions?\s|Mục tiêu$|Lưu ý$|Ba ưu tiên$)/i.test(line)){
      html+=`<h4>${safe}</h4>`; return;
    }
    html+=`<p>${safe}</p>`;
  });
  closeList();
  return html;
}
function rSource(b){
  const box=el("div","block sourceblock");
  const tag=sourceTag(b.title);
  box.appendChild(el("h3",null,`${b.n} ${b.title} <span class="tag">${tag}</span>`));
  if(b.figures){
    const gallery=el("div","sourcefigures");
    b.figures.forEach(fig=>{
      const f=document.createElement("figure");
      const img=document.createElement("img");
      img.src=fig.src; img.alt=fig.alt; img.loading="lazy";
      const cap=document.createElement("figcaption"); cap.textContent=fig.alt;
      f.append(img,cap); gallery.appendChild(f);
    });
    box.appendChild(gallery);
  }
  const marker=b.text.search(/(?:^|\n)(?:Câu hỏi|Questions?)\s/i);
  const isReading=tag==="Reading" && marker>0;
  let workHost=box;
  if(isReading){
    const split=el("div","source-split");
    const left=el("div","source-pane source-reading",sourceHtml(b.text.slice(0,marker)));
    const right=el("div","source-pane source-questions",sourceHtml(b.text.slice(marker)));
    split.append(left,right); box.appendChild(split); workHost=right;
  }else{
    box.appendChild(el("div","source-text",sourceHtml(b.text)));
  }

  const needsWork=sourceNeedsWork(b.title);
  if(needsWork){
    const ta=el("textarea","free srcwork");
    ta.placeholder=tag==="Writing" ? "Viết bài của bạn ở đây…" :
      tag==="Speaking" ? "Ghi dàn ý, bản chép lời hoặc phần tự đánh giá ở đây…" :
      "Ghi đáp án và phần làm bài của bạn ở đây…";
    const sk=sourceWorkKey(b);
    ta.value=store[sk]||"";
    ta.addEventListener("input",()=>{ store[sk]=ta.value; save(); updBar(); });
    workHost.appendChild(ta);
  }
  return box;
}
function rWriting(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||"Writing"}</span>`));
  w.appendChild(el("div","model",`<span class="lb">Đề bài</span>${b.prompt}`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  const ta=el("textarea","free"); ta.style.minHeight="200px"; ta.placeholder="Viết bài của bạn ở đây…";
  const kk="w_"+b.title.replace(/\W/g,"");
  ta.value=store[kk]||"";
  const cnt=el("p","instr","");
  const upd=()=>{ const n=(ta.value.trim().match(/\S+/g)||[]).length; cnt.innerHTML=`Số từ: <b style="color:var(--tx)">${n}</b>`; };
  ta.addEventListener("input",()=>{ store[kk]=ta.value; save(); upd(); }); upd();
  w.appendChild(ta); w.appendChild(cnt);
  if(b.check){
    w.appendChild(el("p","instr","<b style='color:var(--tx)'>Tự kiểm tra trước khi kết thúc</b>"));
    w.appendChild(el("ul","tips checklist",b.check.map(c=>`<li>${c}</li>`).join("")));
  }
  const bt=el("button","btn sm","Xem bài mẫu");
  const md=el("div","model hidden",`<span class="lb">Bài mẫu tham khảo</span>${b.model}`);
  bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent=md.classList.contains("hidden")?"Xem bài mẫu":"Ẩn bài mẫu"; };
  w.appendChild(bt); w.appendChild(md);
  w._reveal=()=>{ md.classList.remove("hidden"); bt.textContent="Ẩn bài mẫu"; };
  return w;
}
function rSpeaking(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${b.title} <span class="tag">${b.tag||"Speaking"}</span>`));
  if(b.instr) w.appendChild(el("p","instr",b.instr));
  b.parts.forEach(p=>{
    w.appendChild(el("p",null,`<b style="color:var(--acc)">${p.label}</b>`));
    p.qs.forEach((qa,i)=>{
      const q=el("div","q");
      const head=el("div","qh");
      head.appendChild(el("div","qn",String(i+1)));
      head.appendChild(el("div","qt",qa[0]));
      q.appendChild(head);
      const bt=el("button","btn sm","Xem câu trả lời mẫu"); bt.style.marginLeft="33px";
      const md=el("div","model hidden",`<span class="lb">Model answer</span>${qa[1]}`);
      md.style.marginLeft="33px";
      bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent=md.classList.contains("hidden")?"Xem câu trả lời mẫu":"Ẩn"; };
      q.appendChild(bt); q.appendChild(md);
      q._meta={type:"free",reveal:()=>{ md.classList.remove("hidden"); bt.textContent="Ẩn"; }};
      w.appendChild(q);
    });
  });
  return w;
}

/* ---- day render ---- */
const mainEl=document.getElementById("main");
let dayNodes=[];
let dayVocabMount=null;   // bảng từ vựng của ngày đang mở, để cập nhật tại chỗ

function renderBlock(b,day,bi){
  if(b.t==="note") return rNote(b);
  if(b.t==="source") return rSource(b);
  if(b.t==="passage") return rPassage(b);
  if(b.t==="quiz") return (b.kind==="free") ? rFree(b,day,bi) : rQuiz(b,day,bi);
  if(b.t==="gap") return rGap(b,day,bi);
  if(b.t==="vocab") return rVocab(b,day,bi);
  if(b.t==="writing") return rWriting(b);
  if(b.t==="speaking") return rSpeaking(b);
  return null;
}
/* Khối câu hỏi thuộc về bài đọc: quiz/gap có tag "Reading".
   Quiz Grammar, Dịch… tuy đứng sau nhưng không liên quan bài đọc nên bị loại. */
function isReadingQ(b){
  return (b.t==="quiz" || b.t==="gap") && b.tag==="Reading";
}
function isSourceReadingPassage(b){
  return b.t==="source" && /^(bài đọc\s*\d*|ngữ liệu reading|bài reading|bài thi thử academic reading)/i.test(b.title);
}
function isSourceReadingQ(b){
  return b.t==="source" && /^(questions?|câu hỏi)\b/i.test(b.title);
}
/* Bật/tắt chế độ rộng cho #main và thanh thống kê dưới cùng. */
function setWide(on){
  mainEl.classList.toggle("haswide",on);
  const bin=document.getElementById("barIn");
  if(bin) bin.classList.toggle("haswide",on);
}
/* Dựng khung hai cột. Trả về phần tử để gắn vào #main. */
function buildSplit(passageNode,qNodes){
  const wrap=el("div","split");
  const left=el("div","split-l");
  const right=el("div","split-r");
  left.appendChild(passageNode);
  qNodes.forEach(n=>right.appendChild(n));
  wrap.appendChild(left); wrap.appendChild(right);
  return wrap;
}
function renderDay(){
  if(cur==="tracker"){ renderTrackerView(); return; }
  if(cur==="vocab"){ renderVocabView(); return; }
  const d=DATA.find(x=>x.id===cur);
  mainEl.innerHTML="";
  dayNodes=[];
  mainEl.appendChild(el("h2","daytitle",d.title));
  mainEl.appendChild(el("p","dayfocus",d.focus));

  /* Quy trình buổi học + tiêu chí hoàn thành (sách, mục 1.4 & 1.13) */
  const ckBlock=el("div","block");
  ckBlock.appendChild(el("h3",null,`Quy trình buổi học <span class="tag">Checklist</span>`));
  const ckMount=el("div");
  ckBlock.appendChild(ckMount);
  mainEl.appendChild(ckBlock);
  renderDayChecklist(ckMount,d.id);

  /* Bài đọc và các câu hỏi Reading đi kèm được xếp thành hai cột song song:
     bài đọc bên trái (dính khi cuộn), câu hỏi bên phải. Các khối khác giữ nguyên
     một cột như cũ. Màn hình hẹp sẽ tự xếp lại thành trên–dưới (xem CSS .split). */
  for(let bi=0; bi<d.blocks.length; bi++){
    const b=d.blocks[bi];
    const node=renderBlock(b,d.id,bi);
    if(!node) continue;

    if(b.t==="passage" || isSourceReadingPassage(b)){
      /* gom mọi khối Reading nằm ngay sau bài đọc vào cột phải */
      const qNodes=[];
      let j=bi+1;
      const isQ=b.t==="passage" ? isReadingQ : isSourceReadingQ;
      while(j<d.blocks.length && isQ(d.blocks[j])){
        const qn=renderBlock(d.blocks[j],d.id,j);
        if(qn){ qNodes.push(qn); dayNodes.push(qn); }
        j++;
      }
      if(qNodes.length){
        mainEl.appendChild(buildSplit(node,qNodes));
        dayNodes.push(node);
        bi=j-1;                     // đã xử lý xong các khối câu hỏi ở trên
        continue;
      }
    }
    mainEl.appendChild(node);
    dayNodes.push(node);
  }
  /* Ngày có khung hai cột thì nới rộng vùng nội dung và thanh dưới cho khớp. */
  setWide(!!mainEl.querySelector(".split,.source-split"));

  /* Từ vựng đã nhớ trong ngày này */
  const vBlock=el("div","block");
  vBlock.appendChild(el("h3",null,`Từ vựng đã nhớ hôm nay <span class="tag">Sổ từ</span>`));
  vBlock.appendChild(el("p","instr","Bôi đen một từ hoặc cụm từ bất kỳ trong bài rồi bấm <b style=\"color:var(--tx)\">📌 Nhớ từ</b>. Nghĩa tiếng Việt, phiên âm và câu band 7 bạn tự tra và tự gõ — đó chính là bước học."));
  const vMount=el("div");
  vBlock.appendChild(vMount);
  mainEl.appendChild(vBlock);
  renderVocabTable(vMount,{day:d.id,onChange:updBar});
  dayVocabMount=vMount;

  /* Ba lỗi ưu tiên của ngày (sách, mục 1.8) */
  const errBlock=el("div","block");
  errBlock.appendChild(el("h3",null,`Ba lỗi ưu tiên hôm nay <span class="tag">Phiếu lỗi</span>`));
  const errMount=el("div");
  errBlock.appendChild(errMount);
  mainEl.appendChild(errBlock);
  renderErrorLog(errMount,d.id);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor(d.id);
  updBar();
}
/* Mỗi khối là một "neo" để lưu vị trí vùng bôi màu. */
function markHighlightHosts(){
  mainEl.querySelectorAll(".block").forEach(b=>b.classList.add("hl-host"));
}
/* Bảng nào chưa có khung cuộn thì bọc lại, tránh tràn ngang trên màn hình hẹp. */
function wrapTables(){
  mainEl.querySelectorAll("table.vt").forEach(t=>{
    if(t.parentElement && t.parentElement.classList.contains("tablewrap")) return;
    const w=el("div","tablewrap");
    t.parentNode.insertBefore(w,t);
    w.appendChild(t);
  });
}
function renderVocabView(){
  mainEl.innerHTML="";
  dayNodes=[]; dayVocabMount=null; setWide(false);
  mainEl.appendChild(el("h2","daytitle","Sổ từ vựng"));
  mainEl.appendChild(el("p","dayfocus","Toàn bộ từ và cụm từ bạn đã bấm “Nhớ từ” trong 21 ngày học. Bấm vào bất kỳ ô nào để sửa; nội dung tự lưu khi bạn bấm ra ngoài."));

  const box=el("div","block");
  const head=el("h3",null,`Danh sách từ <span class="tag">${vocabCount()} từ</span>`);
  box.appendChild(head);
  const bar=el("div");
  bar.style.cssText="display:flex;gap:6px;margin-bottom:12px";
  const bExp=el("button","btn sm","⬇  Xuất CSV");
  const bClr=el("button","btn sm","🗑  Xoá hết");
  bar.appendChild(bExp); bar.appendChild(bClr);
  box.appendChild(bar);
  const mount=el("div");
  box.appendChild(mount);
  mainEl.appendChild(box);
  /* Xoá một dòng thì bảng tự vẽ lại; onChange chỉ để đồng bộ tiêu đề và thanh dưới. */
  const syncVocabHead=()=>{
    head.innerHTML=`Danh sách từ <span class="tag">${vocabCount()} từ</span>`;
    updBar();
  };
  renderVocabTable(mount,{onChange:syncVocabHead});
  bExp.onclick=()=>{ if(!vocabCount()){ alert("Sổ từ vựng đang trống."); return; } exportCSV(); };
  bClr.onclick=()=>{
    if(!vocabCount()){ alert("Sổ từ vựng đang trống."); return; }
    if(confirm(`Xoá toàn bộ ${vocabCount()} từ trong sổ?`)){ clearWords(); renderVocabView(); }
  };

  const tip=el("div","block");
  tip.innerHTML=`<h3>Cách dùng sổ từ <span class="tag">Gợi ý</span></h3>
    <ul class="tips">
      <li>Ba cột nghĩa, phiên âm và câu đều để trống cố ý: <b>tự tra và tự gõ</b> thì từ mới vào được trí nhớ dài hạn.</li>
      <li>Một cụm chỉ được coi là đã học khi bạn <b>tự viết được câu của mình</b> — cột cuối để làm việc đó.</li>
      <li>Ôn cách quãng: xem lại từ của Ngày 1 vào Ngày 3, rồi vào Ngày 7 — đúng nhịp kiểm tra lại ở mục 2.2.</li>
      <li>Xuất CSV để mở bằng Excel hoặc nạp vào Anki khi muốn ôn bằng thẻ ghi nhớ.</li>
    </ul>`;
  mainEl.appendChild(tip);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor("vocab");
  updBar();
}
function renderTrackerView(){
  mainEl.innerHTML="";
  dayNodes=[]; dayVocabMount=null; setWide(false);
  mainEl.appendChild(el("h2","daytitle","Bảng theo dõi 21 ngày"));
  mainEl.appendChild(el("p","dayfocus","Mỗi dòng là một ngày và một sản phẩm chính. Chỉ đánh dấu hoàn thành khi sản phẩm đã được lưu, lỗi quan trọng nhất đã được gọi tên và ngày kiểm tra lại đã được xác định."));

  const rule=el("div","block");
  rule.innerHTML=`<h3>Quy tắc đánh dấu <span class="tag">Hướng dẫn</span></h3>
    <div class="model"><span class="lb">Dấu hoàn thành</span>
    Xác nhận một chu trình đã khép lại: bản làm đầu, bước đối chiếu và ít nhất một thao tác sửa.
    Không cần kết quả hoàn hảo, nhưng phải lưu được bằng chứng về lỗi và cách sửa.</div>
    <p class="instr" style="margin:12px 0 0">Cột <b style="color:var(--tx)">Lỗi lớn nhất</b> chỉ ghi một lỗi có ảnh hưởng rõ nhất, đủ cụ thể để biết phải làm gì ở lần sau.
    Cột <b style="color:var(--tx)">Kiểm tra lại</b> ghi ngày sẽ làm lại câu hỏi, viết lại đoạn hoặc ghi âm lần hai. ★ = mốc đánh giá (Ngày 7, 14, 21).</p>`;
  mainEl.appendChild(rule);

  const tb=el("div","block");
  tb.appendChild(el("h3",null,`Tiến độ <span class="tag">21 ngày</span>`));
  const mount=el("div");
  tb.appendChild(mount);
  mainEl.appendChild(tb);
  renderTracker(mount);

  const rhythm=el("div","block");
  rhythm.innerHTML=`<h3>Nhịp kiểm tra lại <span class="tag">Mục 2.2</span></h3>
    <div class="tablewrap"><table class="vt">
      <tr><th>Mốc kiểm tra</th><th>Nội dung cần xem lại</th><th>Cách ghi nhận</th></tr>
      <tr><td class="ph">Cuối mỗi ngày</td><td>Một lỗi chính và sản phẩm sau khi sửa</td><td>Ghi lỗi ở dòng tương ứng, lưu bản trước và sau khi sửa</td></tr>
      <tr><td class="ph">Ngày 7</td><td>Các lỗi xuất hiện trong Ngày 1–6</td><td>Xác định lỗi đã giảm, lỗi còn lặp và kỹ năng cần ưu tiên ở Tuần 2</td></tr>
      <tr><td class="ph">Ngày 14</td><td>Khả năng duy trì quy trình khi bị giới hạn thời gian</td><td>Tách lỗi kiến thức, lỗi kỹ thuật, lỗi thời gian và lỗi do thiếu tập trung</td></tr>
      <tr><td class="ph">Ngày 21</td><td>Thay đổi giữa sản phẩm đầu vào và sản phẩm cuối</td><td>Đặt hai sản phẩm cạnh nhau và lập kế hoạch luyện tiếp trong 30 ngày</td></tr>
    </table></div>`;
  mainEl.appendChild(rhythm);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor("tracker");
  updBar();
}
function updBar(){
  const d=DATA.find(x=>x.id===cur);
  const quizStats=document.getElementById("bQuiz");
  const trkStats=document.getElementById("bTrk");
  const vocStats=document.getElementById("bVoc");
  if(!d){
    quizStats.classList.add("hidden");
    document.getElementById("btnRevealAll").classList.add("hidden");
    document.getElementById("bDay").textContent="–";
    if(cur==="vocab"){
      trkStats.classList.add("hidden");
      vocStats.classList.remove("hidden");
      const words=allWords();
      const full=words.filter(v=>v.sent && v.sent.trim()).length;
      document.getElementById("bVocTot").textContent=words.length;
      document.getElementById("bVocDone").textContent=full;
      return;
    }
    const st=trackerStats();
    vocStats.classList.add("hidden");
    trkStats.classList.remove("hidden");
    document.getElementById("bTrkDone").textContent=st.done;
    document.getElementById("bTrkTot").textContent=st.total;
    document.getElementById("bTrkPct").textContent=Math.round(st.done/st.total*100)+"%";
    return;
  }
  quizStats.classList.remove("hidden");
  trkStats.classList.add("hidden");
  vocStats.classList.add("hidden");
  const sourceMode=d.blocks.length>0 && d.blocks.every(b=>b.t==="source");
  quizStats.classList.toggle("source-progress",sourceMode);
  document.getElementById("btnRevealAll").classList.toggle("hidden",sourceMode);
  if(sourceMode){
    const works=d.blocks.filter(b=>sourceNeedsWork(b.title));
    const done=works.filter(b=>(store[sourceWorkKey(b)]||"").trim()).length;
    document.getElementById("bDay").textContent=d.id;
    document.getElementById("bTot").textContent=works.length;
    document.getElementById("bDone").textContent=done;
    document.getElementById("bOk").textContent=0;
    document.getElementById("bBad").textContent=0;
    document.getElementById("bPct").textContent="–";
    return;
  }
  let tot=0, done=0, ok=0;
  d.blocks.forEach((b,bi)=>{
    if((b.t==="quiz" && b.kind!=="free") || b.t==="gap"){
      b.items.forEach((it,ii)=>{
        const k=key(d.id,bi,ii); tot++;
        const st=store[k];
        if(st!==undefined){ done++; const good = b.t==="gap" ? st===1 : st===it.a; if(good) ok++; }
      });
    }
  });
  document.getElementById("bDay").textContent=d.id;
  document.getElementById("bTot").textContent=tot;
  document.getElementById("bDone").textContent=done;
  document.getElementById("bOk").textContent=ok;
  document.getElementById("bBad").textContent=done-ok;
  document.getElementById("bPct").textContent= done? Math.round(ok/done*100)+"%" : "–";
}
document.getElementById("btnRevealAll").onclick=()=>{
  const d=DATA.find(x=>x.id===cur);
  if(!d) return;
  d.blocks.forEach((b,bi)=>{
    if(b.t==="quiz" && b.kind!=="free"){ b.items.forEach((it,ii)=>{ const k=key(d.id,bi,ii); if(store[k]===undefined) store[k]=-1; }); }
    if(b.t==="gap"){ b.items.forEach((it,ii)=>{ const k=key(d.id,bi,ii); if(store[k]===undefined){ store[k]=0; store[k+"_v"]=""; } }); }
  });
  save(); renderDay();
  dayNodes.forEach(n=>{
    if(n._reveal) n._reveal();
    n.querySelectorAll(".q").forEach(q=>{ if(q._meta&&q._meta.reveal) q._meta.reveal(); });
  });
};
document.getElementById("btnReset").onclick=()=>{
  if(!confirm("Xoá toàn bộ bài làm, bảng theo dõi và bài viết đã lưu?")) return;
  replace({__day:cur, __theme:store.__theme, __pace:store.__pace,
    __learnerName:store.__learnerName});
  location.reload();
};

document.getElementById("btnClearHl").onclick=()=>{
  if(!highlightCount()){ alert("Trang này chưa có nội dung nào được bôi màu."); return; }
  if(!confirm(`Xoá ${highlightCount()} vùng bôi màu ở trang này?`)) return;
  clearDayHighlights();
};

/* Bấm "Nhớ từ" trên popup bôi đen → lưu vào sổ từ vựng. */
function saveWordFromSelection(text){
  const w=(text||"").trim();
  if(!w){ toast("Chưa chọn từ nào."); return; }
  if(w.split(/\s+/).length>12){ toast("Đoạn quá dài — hãy chọn một từ hoặc cụm ngắn."); return; }
  const day = typeof cur==="number" ? cur : undefined;
  const r=addWord(w,day);
  if(r==="duplicate"){ toast(`“${w}” đã có trong sổ từ vựng.`); return; }
  toast(`Đã thêm “${w}” vào sổ từ vựng.`);
  if(dayVocabMount) renderVocabTable(dayVocabMount,{day,onChange:updBar});
  renderNav();
}
let toastEl=null, toastT=null;
function toast(msg){
  if(!toastEl){
    toastEl=el("div","toast");
    document.body.appendChild(toastEl);
  }
  toastEl.textContent=msg;
  toastEl.classList.add("on");
  clearTimeout(toastT);
  toastT=setTimeout(()=>toastEl.classList.remove("on"),2200);
}

initTheme();
initTimer();
initBackup();
initHighlight({onSaveWord:saveWordFromSelection});
initLearnerName();
document.title="IELTS Marathon 21 Day — Luyện đề Ngày 1–21";
const sideSub=document.querySelector("#side .sub");
if(sideSub) sideSub.textContent="Companion — Luyện đề Ngày 1–21";
onVocabChange(()=>renderNav());
renderNav();
renderDay();
