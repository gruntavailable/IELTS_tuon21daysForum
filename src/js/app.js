import { DATA } from "../data/index.js";
import { raw, save, key, replace } from "./store.js";
import { initTheme } from "./theme.js";
import { initTimer } from "./timer.js";
import { renderTracker, renderDayChecklist, renderErrorLog, trackerStats } from "./tracker.js";
import { initHighlight, loadHighlightsFor, clearDayHighlights, highlightCount } from "./highlight.js";
import { initTranslate, loadTranslationsFor, translateSelection } from "./translate.js";
import { addWord, renderVocabTable, vocabCount, onVocabChange, exportCSV, clearWords, allWords } from "./vocab.js";
import { initBackup } from "./backup.js";
import { t, initI18n, onLangChange, applyStatic } from "../i18n/index.js";
import { dayTitleEN, blockTitleEN, blockTagEN, DAY_FOCUS_EN } from "../i18n/days-en.js";
import { instrEN } from "../i18n/instr-en.js";

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
  const label=el("span",null,t("learner.label"));
  label.dataset.i18n="learner.label";
  row.appendChild(label);
  const input=document.createElement("input");
  input.type="text"; input.autocomplete="name";
  input.placeholder=t("learner.ph");
  input.dataset.i18nPh="learner.ph";
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
    b.innerHTML = `${t("nav.day",{n:String(d.id).padStart(2,"0")})}<small>${daySubtitle(d)}</small>`;
    b.onclick=()=>go(d.id);
    navEl.appendChild(b);
  });
  const trk=document.createElement("button");
  const st=trackerStats();
  trk.className="navday"+(cur==="tracker"?" on":"");
  trk.style.marginTop="8px";
  trk.innerHTML=`${t("nav.tracker")}<small>${t("nav.tracker.sub",{done:st.done,total:st.total})}</small>`;
  trk.onclick=()=>go("tracker");
  navEl.appendChild(trk);

  const v=document.createElement("button");
  v.className="navday"+(cur==="vocab"?" on":"");
  v.innerHTML=`${t("nav.vocab")}<small>${t("nav.vocab.sub",{n:vocabCount()})}</small>`;
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

/* Chỉ phần tiêu đề, nhãn và hướng dẫn của bài học được dịch. Ngữ liệu tiếng Anh
   (passage, câu hỏi, bài mẫu) và phần giải thích giữ nguyên như trong sách. */
const isEN = () => document.documentElement.getAttribute("lang")==="en";
function bTitle(s){ return isEN() ? blockTitleEN(s) : s; }
function bTag(s){ return isEN() ? blockTagEN(s) : s; }
function bInstr(s){ return isEN() ? instrEN(s) : s; }
function dTitle(d){ return isEN() ? dayTitleEN(d.title) : d.title; }
function dFocus(d){ return isEN() ? (DAY_FOCUS_EN[d.id] || d.focus) : d.focus; }
/* Nhãn ngắn trong tiêu đề khối: "Ngày 07" ở cột điều hướng cần đổi theo ngôn ngữ. */
function daySubtitle(d){
  const src = dTitle(d);
  const parts = src.split("— ");
  return parts.length > 1 ? parts.slice(1).join("— ") : src;
}
function expBox(it){
  let h="";
  if(it.ev) h+=`<div class="ev">📍 ${it.ev}</div>`;
  if(it.exp) h+=`<div style="margin-top:${it.ev?"6px":"0"}">${it.exp}</div>`;
  return h?el("div","exp",h):null;
}

/* ---- renderers ---- */
function rNote(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):t("tag.note")}</span>`));
  w.appendChild(el("div",null,b.html));
  return w;
}
function rPassage(b){
  const w=el("div","block");
  const h=el("h3",null,`${bTitle(b.title)} <span class="tag">${t("tag.passage")}</span>`);
  w.appendChild(h);
  if(b.subtitle) w.appendChild(el("p","instr",`<b style="color:var(--tx);font-size:15px">${b.subtitle}</b>`));
  const p=el("div","passage");
  b.paras.forEach(([l,txt])=> p.appendChild(el("p",null,`<span class="pl">${l}</span>${txt}`)));
  w.appendChild(p);
  const tg=el("button","btn sm pcollapse",t("passage.collapse"));
  tg.style.marginTop="8px";
  tg.onclick=()=>{ p.classList.toggle("collapsed"); tg.textContent = p.classList.contains("collapsed")?t("passage.expand"):t("passage.collapse"); };
  w.appendChild(tg);
  return w;
}
function rQuiz(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):""}</span>`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
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
    const editBtn=el("button","btn sm",t("q.edit"));
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
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):""}</span>`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
  b.items.forEach((it,ii)=>{
    const k=key(d,bi,ii);
    const q=el("div","q");
    const num=b.start!==undefined?(b.start+ii):(ii+1);
    const head=el("div","qh");
    const nEl=el("div","qn",String(num));
    head.appendChild(nEl); head.appendChild(el("div","qt",it.q));
    q.appendChild(head);
    const row=el("div","gaprow");
    const inp=el("input","gap"); inp.type="text"; inp.placeholder=t("q.gap.ph");
    const chk=el("button","btn sm",t("q.gap.check"));
    const editBtn=el("button","btn sm",t("q.edit")); editBtn.classList.add("hidden");
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
      ex.innerHTML = `<b>${t("q.gap.answer")}</b> ${it.a[0]}${it.a.length>1?` <span style="color:var(--tx2)">${t("q.gap.alsoAccepted",{list:it.a.slice(1).join(" / ")})}</span>`:""}`
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
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):t("tag.free")}</span>`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
  b.items.forEach((it,ii)=>{
    const k=key(d,bi,ii)+"_t";
    const q=el("div","q");
    const head=el("div","qh");
    head.appendChild(el("div","qn",String(ii+1)));
    head.appendChild(el("div","qt",`<b>${it.q}</b>`));
    q.appendChild(head);
    const ta=el("textarea","free"); ta.placeholder=t("q.free.ph"); ta.value=store[k]||"";
    ta.addEventListener("input",()=>{ store[k]=ta.value; save(); });
    q.appendChild(ta);
    const bt=el("button","btn sm",t("q.free.show")); bt.style.marginTop="8px";
    const md=el("div","model hidden",`<span class="lb">${t("q.free.label")}</span>${it.model}${it.exp?`<div style="margin-top:7px;color:var(--tx2)">${it.exp}</div>`:""}`);
    bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent = md.classList.contains("hidden")?t("q.free.show"):t("q.free.hide"); };
    q.appendChild(bt); q.appendChild(md);
    q._meta={type:"free",reveal:()=>{ md.classList.remove("hidden"); bt.textContent=t("q.free.hide"); }};
    w.appendChild(q);
  });
  return w;
}
function rVocab(b,d,bi){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):t("tag.vocabulary")}</span>`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
  const tbl=el("table","vt");
  tbl.innerHTML=`<tr><th>${t("vocabBlock.th.phrase")}</th><th>${t("vocabBlock.th.meaning")}</th><th>${t("vocabBlock.th.example")}</th></tr>`+
    b.items.map(r=>`<tr><td class="ph">${r[0]}</td><td>${r[1]}</td><td class="ex">${r[2]}</td></tr>`).join("");
  const tw=el("div","tablewrap"); tw.appendChild(tbl);
  w.appendChild(tw);
  /* quiz */
  const qw=el("div"); qw.style.marginTop="14px";
  const start=el("button","btn sm",t("vocabBlock.quizStart"));
  qw.appendChild(start); w.appendChild(qw);
  start.onclick=()=>{
    start.remove();
    const pool=b.items.slice();
    const pick=[]; while(pick.length<Math.min(8,pool.length)) pick.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);
    pick.forEach((it,ii)=>{
      const q=el("div","q");
      const head=el("div","qh");
      const nEl=el("div","qn",String(ii+1));
      head.appendChild(nEl); head.appendChild(el("div","qt",t("vocabBlock.quizQ",{meaning:it[1]})));
      q.appendChild(head);
      const wrong=b.items.filter(x=>x!==it).sort(()=>Math.random()-.5).slice(0,3);
      const opts=[it,...wrong].sort(()=>Math.random()-.5);
      const ow=el("div","opts"); const btns=[];
      let expEl=null;
      const editBtn=el("button","btn sm",t("q.edit")); editBtn.classList.add("hidden");
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
  box.appendChild(el("h3",null,`${b.n} ${bTitle(b.title)} <span class="tag">${bTag(tag)}</span>`));
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
    ta.placeholder=tag==="Writing" ? t("source.ph.writing") :
      tag==="Speaking" ? t("source.ph.speaking") :
      t("source.ph.default");
    const sk=sourceWorkKey(b);
    ta.value=store[sk]||"";
    ta.addEventListener("input",()=>{ store[sk]=ta.value; save(); updBar(); });
    workHost.appendChild(ta);
  }
  return box;
}
function rWriting(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):t("tag.writing")}</span>`));
  w.appendChild(el("div","model",`<span class="lb">${t("writing.prompt")}</span>${b.prompt}`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
  const ta=el("textarea","free"); ta.style.minHeight="200px"; ta.placeholder=t("writing.ph");
  /* khoá lưu bám theo tiêu đề gốc tiếng Việt để bài đã viết không mất khi đổi ngôn ngữ */
  const kk="w_"+b.title.replace(/\W/g,"");
  ta.value=store[kk]||"";
  const cnt=el("p","instr","");
  const upd=()=>{ const n=(ta.value.trim().match(/\S+/g)||[]).length; cnt.innerHTML=t("writing.wordCount",{n}); };
  ta.addEventListener("input",()=>{ store[kk]=ta.value; save(); upd(); }); upd();
  w.appendChild(ta); w.appendChild(cnt);
  if(b.check){
    w.appendChild(el("p","instr",`<b style='color:var(--tx)'>${t("writing.selfCheck")}</b>`));
    w.appendChild(el("ul","tips checklist",b.check.map(c=>`<li>${c}</li>`).join("")));
  }
  const bt=el("button","btn sm",t("writing.showModel"));
  const md=el("div","model hidden",`<span class="lb">${t("writing.modelLabel")}</span>${b.model}`);
  bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent=md.classList.contains("hidden")?t("writing.showModel"):t("writing.hideModel"); };
  w.appendChild(bt); w.appendChild(md);
  w._reveal=()=>{ md.classList.remove("hidden"); bt.textContent=t("writing.hideModel"); };
  return w;
}
function rSpeaking(b){
  const w=el("div","block");
  w.appendChild(el("h3",null,`${bTitle(b.title)} <span class="tag">${b.tag?bTag(b.tag):t("tag.speaking")}</span>`));
  if(b.instr) w.appendChild(el("p","instr",bInstr(b.instr)));
  b.parts.forEach(p=>{
    w.appendChild(el("p",null,`<b style="color:var(--acc)">${p.label}</b>`));
    p.qs.forEach((qa,i)=>{
      const q=el("div","q");
      const head=el("div","qh");
      head.appendChild(el("div","qn",String(i+1)));
      head.appendChild(el("div","qt",qa[0]));
      q.appendChild(head);
      const bt=el("button","btn sm",t("speaking.showModel")); bt.style.marginLeft="33px";
      const md=el("div","model hidden",`<span class="lb">${t("speaking.modelLabel")}</span>${qa[1]}`);
      md.style.marginLeft="33px";
      bt.onclick=()=>{ md.classList.toggle("hidden"); bt.textContent=md.classList.contains("hidden")?t("speaking.showModel"):t("speaking.hideModel"); };
      q.appendChild(bt); q.appendChild(md);
      q._meta={type:"free",reveal:()=>{ md.classList.remove("hidden"); bt.textContent=t("speaking.hideModel"); }};
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
  mainEl.appendChild(el("h2","daytitle",dTitle(d)));
  mainEl.appendChild(el("p","dayfocus",dFocus(d)));

  /* Quy trình buổi học + tiêu chí hoàn thành (sách, mục 1.4 & 1.13) */
  const ckBlock=el("div","block");
  ckBlock.appendChild(el("h3",null,`${t("day.process")} <span class="tag">${t("tag.checklist")}</span>`));
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
  vBlock.appendChild(el("h3",null,`${t("day.vocabToday")} <span class="tag">${t("tag.vocabBook")}</span>`));
  vBlock.appendChild(el("p","instr",t("day.vocabToday.hint")));
  const vMount=el("div");
  vBlock.appendChild(vMount);
  mainEl.appendChild(vBlock);
  renderVocabTable(vMount,{day:d.id,onChange:updBar});
  dayVocabMount=vMount;

  /* Ba lỗi ưu tiên của ngày (sách, mục 1.8) */
  const errBlock=el("div","block");
  errBlock.appendChild(el("h3",null,`${t("day.topErrors")} <span class="tag">${t("tag.errorSheet")}</span>`));
  const errMount=el("div");
  errBlock.appendChild(errMount);
  mainEl.appendChild(errBlock);
  renderErrorLog(errMount,d.id);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor(d.id);
  loadTranslationsFor(d.id);
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
  mainEl.appendChild(el("h2","daytitle",t("vocab.title")));
  mainEl.appendChild(el("p","dayfocus",t("vocab.intro")));

  const box=el("div","block");
  const head=el("h3",null,`${t("vocab.listTitle")} <span class="tag">${t("vocab.count",{n:vocabCount()})}</span>`);
  box.appendChild(head);
  const bar=el("div");
  bar.style.cssText="display:flex;gap:6px;margin-bottom:12px";
  const bExp=el("button","btn sm",t("vocab.exportCSV"));
  const bClr=el("button","btn sm",t("vocab.clearAll"));
  bar.appendChild(bExp); bar.appendChild(bClr);
  box.appendChild(bar);
  const mount=el("div");
  box.appendChild(mount);
  mainEl.appendChild(box);
  /* Xoá một dòng thì bảng tự vẽ lại; onChange chỉ để đồng bộ tiêu đề và thanh dưới. */
  const syncVocabHead=()=>{
    head.innerHTML=`${t("vocab.listTitle")} <span class="tag">${t("vocab.count",{n:vocabCount()})}</span>`;
    updBar();
  };
  renderVocabTable(mount,{onChange:syncVocabHead});
  bExp.onclick=()=>{ if(!vocabCount()){ alert(t("vocab.empty")); return; } exportCSV(); };
  bClr.onclick=()=>{
    if(!vocabCount()){ alert(t("vocab.empty")); return; }
    if(confirm(t("vocab.clearConfirm",{n:vocabCount()}))){ clearWords(); renderVocabView(); }
  };

  const tip=el("div","block");
  tip.innerHTML=`<h3>${t("vocab.howto.title")} <span class="tag">${t("tag.hint")}</span></h3>
    <ul class="tips">
      <li>${t("vocab.howto.1")}</li>
      <li>${t("vocab.howto.2")}</li>
      <li>${t("vocab.howto.3")}</li>
      <li>${t("vocab.howto.4")}</li>
    </ul>`;
  mainEl.appendChild(tip);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor("vocab");
  loadTranslationsFor("vocab");
  updBar();
}
function renderTrackerView(){
  mainEl.innerHTML="";
  dayNodes=[]; dayVocabMount=null; setWide(false);
  mainEl.appendChild(el("h2","daytitle",t("tracker.title")));
  mainEl.appendChild(el("p","dayfocus",t("tracker.intro")));

  const rule=el("div","block");
  rule.innerHTML=`<h3>${t("tracker.rule.title")} <span class="tag">${t("tag.guide")}</span></h3>
    <div class="model"><span class="lb">${t("tracker.rule.label")}</span>
    ${t("tracker.rule.body")}</div>
    <p class="instr" style="margin:12px 0 0">${t("tracker.rule.note")}</p>`;
  mainEl.appendChild(rule);

  const tb=el("div","block");
  tb.appendChild(el("h3",null,`${t("tracker.progress")} <span class="tag">${t("tracker.progress.tag")}</span>`));
  const mount=el("div");
  tb.appendChild(mount);
  mainEl.appendChild(tb);
  renderTracker(mount);

  const rhythm=el("div","block");
  const rhythmRows=[1,2,3,4].map(n=>
    `<tr><td class="ph">${t(`rhythm.r${n}.when`)}</td><td>${t(`rhythm.r${n}.what`)}</td><td>${t(`rhythm.r${n}.how`)}</td></tr>`).join("");
  rhythm.innerHTML=`<h3>${t("rhythm.title")} <span class="tag">${t("rhythm.tag")}</span></h3>
    <div class="tablewrap"><table class="vt">
      <tr><th>${t("rhythm.th.when")}</th><th>${t("rhythm.th.what")}</th><th>${t("rhythm.th.how")}</th></tr>
      ${rhythmRows}
    </table></div>`;
  mainEl.appendChild(rhythm);

  wrapTables();
  markHighlightHosts();
  loadHighlightsFor("tracker");
  loadTranslationsFor("tracker");
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
  if(!confirm(t("reset.confirm"))) return;
  /* ngôn ngữ giao diện thuộc về máy đang dùng, không phải tiến độ học */
  replace({__day:cur, __theme:store.__theme, __pace:store.__pace,
    __lang:store.__lang, __learnerName:store.__learnerName});
  location.reload();
};

document.getElementById("btnClearHl").onclick=()=>{
  if(!highlightCount()){ alert(t("hl.none")); return; }
  if(!confirm(t("hl.clearConfirm",{n:highlightCount()}))) return;
  clearDayHighlights();
};

/* Bấm "Nhớ từ" trên popup bôi đen → lưu vào sổ từ vựng. */
function saveWordFromSelection(text){
  const w=(text||"").trim();
  if(!w){ toast(t("word.none")); return; }
  if(w.split(/\s+/).length>12){ toast(t("word.tooLong")); return; }
  const day = typeof cur==="number" ? cur : undefined;
  const r=addWord(w,day);
  if(r==="duplicate"){ toast(t("word.duplicate",{word:w})); return; }
  toast(t("word.added",{word:w}));
  if(dayVocabMount) renderVocabTable(dayVocabMount,{day,onChange:updBar});
  renderNav();
}
/* Bấm "Dịch" trên popup bôi đen → thay đoạn tiếng Anh bằng bản dịch viết sẵn. */
function translateFromSelection(){
  const r=translateSelection();
  if(r.done && r.missing) toast(t("tr.partial",{n:r.done,m:r.missing}));
  else if(r.done)         toast(t("tr.done",{n:r.done}));
  else                    toast(t("tr.none"));
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

initI18n();
initTheme();
initTimer();
initBackup();
initHighlight({onSaveWord:saveWordFromSelection, onTranslate:translateFromSelection});
initTranslate();
initLearnerName();
applyStatic();          // nhãn do initLearnerName() vừa thêm cũng cần được dịch
onVocabChange(()=>renderNav());

/* Đổi ngôn ngữ thì dựng lại toàn bộ trang: chữ trong #main do JS sinh ra,
   không gắn được data-i18n như phần HTML tĩnh. */
onLangChange(()=>{ renderNav(); renderDay(); });

renderNav();
renderDay();
