import { get, set } from "./store.js";
import { TRANS_RAW } from "../data/tr/index.js";
import { t } from "../i18n/index.js";

/* Dịch tại chỗ: bôi đen một đoạn tiếng Anh → bấm "Dịch" trên popup.
   Phần được dịch thay bằng tiếng Việt ngay trong dòng, phần còn lại giữ nguyên
   tiếng Anh. Bấm vào đoạn đã dịch để xem lại bản gốc.

   Bản dịch là bản viết sẵn, bám theo lập luận của chính bài học (không phải máy
   dịch), tra theo đơn vị câu. Vì vậy bôi nửa câu vẫn hiện trọn câu tiếng Việt.

   Ràng buộc quan trọng: chữ tiếng Anh KHÔNG bị gỡ khỏi DOM mà chỉ bị ẩn bằng
   CSS, còn tiếng Việt hiện qua ::after (không nằm trong DOM text). Nhờ vậy toạ độ
   ký tự mà highlight.js dùng để lưu vùng bôi màu vẫn giữ nguyên. */

/* ---------- tra cứu ---------- */
const TR_MAP = Object.create(null);
function trNorm(s){
  return String(s || "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
Object.keys(TRANS_RAW || {}).forEach(k => { TR_MAP[trNorm(k)] = TRANS_RAW[k]; });

function trLookup(text){
  const k = trNorm(text);
  if (!k) return null;
  return TR_MAP[k] || null;
}
export function translationCount(){ return Object.keys(TR_MAP).length; }

/* ---------- tách câu ---------- */
/* Không tách sau các dạng viết tắt thường gặp và sau một chữ cái hoa đơn lẻ
   (A. B. trong danh sách đoạn văn), vì đó không phải kết thúc câu. */
const TR_ABBR = /(?:^|\s)(?:e\.g|i\.e|etc|vs|cf|Mr|Mrs|Ms|Dr|Prof|St|approx|No|Fig|[A-Z])$/;
function trPush(out, text, start, end){
  let a = start, b = end;
  while (a < b && /\s/.test(text[a])) a++;              // bỏ khoảng trắng hai đầu để
  while (b > a && /\s/.test(text[b - 1])) b--;          // vùng bọc trùng khít câu
  if (b > a) out.push({ start: a, end: b, text: text.slice(a, b) });
}
/* Trong bài mẫu, câu tiếng Anh hay bị dán ngay sau một nhãn tiếng Việt:
   "Đoạn mẫu tham khảo (~200 từ): A complete ban could improve…".
   Cắt tại dấu hai chấm đó để phần tiếng Anh thành một câu tra cứu được. */
const TR_VI = /[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
function trSentences(text){
  const out = [];
  let start = 0;
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (c === ":" && /^\s/.test(text.slice(i + 1)) && TR_VI.test(text.slice(start, i))){
      trPush(out, text, start, i + 1);
      start = i + 1;
      continue;
    }
    if (c !== "." && c !== "!" && c !== "?") continue;
    let j = i + 1;
    while (j < text.length && /["'’”\)\]]/.test(text[j])) j++;      // dấu đóng ngoặc/ngoặc kép
    const after = text.slice(j);
    if (after && !/^\s/.test(after)) continue;                       // 3.5 · U.S.A
    if (TR_ABBR.test(text.slice(start, i))) continue;                // viết tắt
    trPush(out, text, start, j);
    while (j < text.length && /\s/.test(text[j])) j++;
    start = j;
    i = j - 1;
  }
  trPush(out, text, start, text.length);
  return out;
}

/* Nhãn đoạn (A, B, C…), số thứ tự câu hỏi và nhãn hộp mẫu không phải văn xuôi;
   nếu tính vào sẽ dính liền câu đầu tiên và làm hỏng việc tra cứu. */
const TR_SKIP = ".pl, .qn, .lb, .tag, .kbd";
/* Hai mục <li> liền nhau không có khoảng trắng ở giữa sẽ dính thành một chuỗi.
   Coi ranh giới khối là ranh giới câu để mỗi gạch đầu dòng, mỗi ô bảng là một
   đơn vị dịch riêng. */
const TR_BLOCK = "li,p,td,th,h1,h2,h3,h4,h5,div,blockquote,figcaption,section,article,ol,ul,table,tr";
function trBlockOf(node){
  return node.parentElement ? node.parentElement.closest(TR_BLOCK) : null;
}
function trHostText(host){
  const r = document.createRange();
  r.selectNodeContents(host);
  return r.toString();
}
/* Danh sách câu trong khối, tính theo toạ độ ký tự của cả khối. */
function trUnits(host){
  const full = trHostText(host);
  const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  const runs = [];
  let pos = 0, n, prevBlock, forceBreak = false;
  while ((n = walker.nextNode())){
    if (n.nodeType === 1){                       // <br> cũng ngắt một đơn vị dịch
      if (n.tagName === "BR") forceBreak = true;
      continue;
    }
    const len = n.nodeValue.length;
    const skip = !!(n.parentElement && n.parentElement.closest(TR_SKIP));
    if (!skip){
      const block = trBlockOf(n);
      const last = runs[runs.length - 1];
      if (last && last.end === pos && block === prevBlock && !forceBreak) last.end = pos + len;
      else runs.push({ start: pos, end: pos + len });
      prevBlock = block;
      forceBreak = false;
    }
    pos += len;
  }
  const out = [];
  runs.forEach(run => {
    trSentences(full.slice(run.start, run.end)).forEach(s =>
      out.push({ start: run.start + s.start, end: run.start + s.end }));
  });
  return out;
}

/* ---------- vị trí trong khối (khớp cách làm của highlight.js) ---------- */
let trRoot = null;
let trDayKey = null;
let trList = [];            // [{path, start, end, off}]

function trPathOf(node){
  const parts = [];
  let el = node;
  while (el && el !== trRoot){
    const parent = el.parentNode;
    if (!parent) return null;
    parts.unshift(Array.prototype.indexOf.call(parent.childNodes, el));
    el = parent;
  }
  return el === trRoot ? parts.join(".") : null;
}
function trNodeAt(path){
  let el = trRoot;
  for (const i of path.split(".").filter(s => s !== "")){
    el = el.childNodes[Number(i)];
    if (!el) return null;
  }
  return el;
}
function trAnchorFor(range){
  let el = range.commonAncestorContainer;
  if (el.nodeType === 3) el = el.parentNode;
  while (el && el !== trRoot && !el.classList?.contains("hl-host")) el = el.parentNode;
  return el && el !== trRoot ? el : null;
}
function trTextOffset(host, node, offset){
  const r = document.createRange();
  r.selectNodeContents(host);
  try { r.setEnd(node, offset); } catch(e){ return 0; }
  return r.toString().length;
}
function trRangeFromOffsets(host, start, end){
  let pos = 0, started = false;
  const r = document.createRange();
  const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())){
    const len = n.nodeValue.length;
    if (!started && pos + len >= start){
      r.setStart(n, Math.max(0, start - pos));
      started = true;
    }
    if (started && pos + len >= end){
      r.setEnd(n, Math.max(0, end - pos));
      return r;
    }
    pos += len;
  }
  return started ? r : null;
}

/* ---------- vẽ ---------- */
/* Bọc vùng câu thành <span class="tr on" data-vi="…"><span class="tr-src">EN</span></span>.
   Dùng extractContents để vùng chọn cắt ngang thẻ (<b>, <i>) vẫn bọc được. */
function trPaintOne(item){
  const host = trNodeAt(item.path);
  if (!host || host.nodeType !== 1) return false;
  const range = trRangeFromOffsets(host, item.start, item.end);
  if (!range || range.collapsed) return false;
  const vi = trLookup(range.toString());
  if (!vi) return false;
  try {
    const inner = document.createElement("span");
    inner.className = "tr-src";
    inner.appendChild(range.extractContents());
    const outer = document.createElement("span");
    outer.className = "tr" + (item.off ? "" : " on");
    outer.dataset.vi = vi;
    outer.dataset.id = item.id;
    outer.title = t("tr.mark.title");
    outer.appendChild(inner);
    range.insertNode(outer);
    return true;
  } catch(e){ return false; }
}
function trClearMarks(){
  if (!trRoot) return;
  trRoot.querySelectorAll("span.tr").forEach(sp => {
    const src = sp.querySelector(".tr-src") || sp;
    const parent = sp.parentNode;
    while (src.firstChild) parent.insertBefore(src.firstChild, sp);
    parent.removeChild(sp);
    parent.normalize();
  });
}
function trRepaint(){
  trClearMarks();
  /* Vẽ từ cuối lên đầu: bọc một vùng không đổi số ký tự nhưng đổi cấu trúc DOM,
     nên xử lý ngược chiều cho chắc. */
  trList.slice().sort((a, b) => b.start - a.start).forEach(trPaintOne);
}
function trPersist(){ if (trDayKey) set(trDayKey, trList); }

/* ---------- hành động ---------- */
/* Trả về {done, missing} để nơi gọi báo cho người học. */
export function translateSelection(){
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount || sel.isCollapsed) return { done: 0, missing: 0 };
  const range = sel.getRangeAt(0);
  const host = trAnchorFor(range);
  if (!host) return { done: 0, missing: 0 };
  const path = trPathOf(host);
  if (path === null) return { done: 0, missing: 0 };

  const selStart = trTextOffset(host, range.startContainer, range.startOffset);
  const selEnd   = trTextOffset(host, range.endContainer, range.endOffset);
  if (selEnd <= selStart) return { done: 0, missing: 0 };

  /* 1) đúng đoạn được bôi (ô từ vựng, tiêu đề, phương án trắc nghiệm…) */
  const targets = [];
  if (trLookup(range.toString())){
    targets.push({ start: selStart, end: selEnd });
  } else {
    /* 2) mở rộng ra trọn các câu mà vùng bôi chạm tới */
    trUnits(host).forEach(s => {
      if (s.end > selStart && s.start < selEnd) targets.push({ start: s.start, end: s.end });
    });
  }

  let done = 0, missing = 0;
  targets.forEach(tg => {
    const r = trRangeFromOffsets(host, tg.start, tg.end);
    if (!r) { missing++; return; }
    if (!trLookup(r.toString())) { missing++; return; }
    const dup = trList.some(x => x.path === path && x.start === tg.start && x.end === tg.end);
    if (dup) { done++; return; }
    trList.push({ id: "t" + Date.now() + Math.random().toString(36).slice(2, 6),
                  path, start: tg.start, end: tg.end, off: false });
    done++;
  });
  if (done) { trPersist(); trRepaint(); }
  return { done, missing };
}

/* Bấm vào đoạn đã dịch → lật qua lại giữa tiếng Việt và bản gốc. */
function trToggle(id){
  const it = trList.find(x => x.id === id);
  if (!it) return;
  it.off = !it.off;
  trPersist();
  const sp = trRoot.querySelector(`span.tr[data-id="${id}"]`);
  if (sp) sp.classList.toggle("on", !it.off);
}

export function translatedCount(){ return trList.length; }
export function clearDayTranslations(){
  trList = [];
  trPersist();
  trRepaint();
}

/* ---------- khởi tạo ---------- */
export function initTranslate(){
  trRoot = document.getElementById("main");
  /* Bắt ở pha capture và chặn lan xuống, nếu không click sẽ rơi vào trình xử lý
     xoá vùng bôi màu của highlight.js. */
  document.addEventListener("click", e => {
    const sp = e.target.closest && e.target.closest("span.tr");
    if (!sp || !sp.dataset.id) return;
    e.stopPropagation();
    e.preventDefault();
    trToggle(sp.dataset.id);
  }, true);
}

/* Gọi lại sau mỗi lần render trang mới. */
export function loadTranslationsFor(dayId){
  trDayKey = "tr_" + dayId;
  trList = get(trDayKey, []) || [];
  requestAnimationFrame(() => trRepaint());
}
