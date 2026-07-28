import { get, set } from "./store.js";

/* Bôi màu nội dung: bôi đen bằng chuột → chọn màu ở popup.
   Vùng bôi được lưu theo (đường dẫn tới khối, vị trí ký tự đầu, vị trí ký tự cuối)
   nên vẫn khôi phục đúng sau khi tải lại trang. */

export const COLORS = [
  { id: "y", name: "Vàng",  dark: "rgba(240,169,46,.38)",  light: "rgba(255,214,102,.75)" },
  { id: "g", name: "Xanh lá", dark: "rgba(47,191,113,.34)", light: "rgba(126,231,170,.72)" },
  { id: "b", name: "Xanh dương", dark: "rgba(91,140,255,.36)", light: "rgba(150,186,255,.72)" },
  { id: "p", name: "Hồng",  dark: "rgba(226,112,224,.34)",  light: "rgba(247,168,246,.72)" },
  { id: "r", name: "Đỏ",    dark: "rgba(242,85,90,.32)",    light: "rgba(255,158,161,.72)" }
];

let dayKey = null;          // "hl_d1" | "hl_tracker"
let list = [];              // [{path, start, end, color, text}]
let popup = null;
let root = null;
let onSaveWord = null;      // callback khi bấm "Nhớ từ"

/* ---------- vị trí khối: chỉ số con đường từ #main ---------- */
function pathOf(node){
  const parts = [];
  let el = node;
  while (el && el !== root){
    const parent = el.parentNode;
    if (!parent) return null;
    parts.unshift(Array.prototype.indexOf.call(parent.childNodes, el));
    el = parent;
  }
  return el === root ? parts.join(".") : null;
}
function nodeAt(path){
  let el = root;
  for (const i of path.split(".").filter(s => s !== "")){
    el = el.childNodes[Number(i)];
    if (!el) return null;
  }
  return el;
}

/* Khối "neo" của một vùng chọn: phần tử cha gần nhất có thể định vị lại được. */
function anchorFor(range){
  let el = range.commonAncestorContainer;
  if (el.nodeType === 3) el = el.parentNode;
  while (el && el !== root && !el.classList?.contains("hl-host")) el = el.parentNode;
  return el && el !== root ? el : null;
}

/* Đếm ký tự trong một phần tử, bỏ qua thẻ — để lưu vị trí ổn định.
   `node` có thể là text node (offset = số ký tự) hoặc element (offset = chỉ số con). */
function textOffset(host, node, offset){
  // Quy về một mốc text node để việc đếm luôn nhất quán.
  const r = document.createRange();
  r.selectNodeContents(host);
  try { r.setEnd(node, offset); } catch(e){ return 0; }
  return r.toString().length;
}
function rangeFromOffsets(host, start, end){
  let pos = 0, r = document.createRange(), started = false;
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
function paintOne(h){
  const host = nodeAt(h.path);
  if (!host || host.nodeType !== 1) return false;
  const range = rangeFromOffsets(host, h.start, h.end);
  if (!range || range.collapsed) return false;
  try {
    // Bọc từng đoạn text riêng lẻ để vùng chọn qua nhiều thẻ vẫn bôi được.
    const texts = [];
    const cac = range.commonAncestorContainer;
    if (cac.nodeType === 3){
      texts.push(cac);                       // vùng chọn nằm gọn trong một text node
    } else {
      const walker = document.createTreeWalker(cac, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) if (range.intersectsNode(n)) texts.push(n);
    }
    if (!texts.length) return false;

    texts.forEach(tn => {
      let from = 0, to = tn.nodeValue.length;
      if (tn === range.startContainer) from = range.startOffset;
      if (tn === range.endContainer) to = range.endOffset;
      if (to <= from) return;
      if (tn.parentNode.classList?.contains("hl")) return;   // đã bôi rồi
      const sub = document.createRange();
      sub.setStart(tn, from); sub.setEnd(tn, to);
      const mark = document.createElement("mark");
      mark.className = "hl hl-" + h.color;
      mark.dataset.id = h.id;
      mark.title = "Bấm để xoá màu";
      try { sub.surroundContents(mark); } catch(e){}
    });
    return true;
  } catch(e){ return false; }
}

function repaint(){
  clearMarks();
  list.forEach(paintOne);
}
function clearMarks(){
  if (!root) return;
  root.querySelectorAll("mark.hl").forEach(m => {
    const parent = m.parentNode;
    while (m.firstChild) parent.insertBefore(m.firstChild, m);
    parent.removeChild(m);
    parent.normalize();
  });
}

/* ---------- lưu ---------- */
function hlPersist(){ if (dayKey) set(dayKey, list); }

function add(range, color){
  const host = anchorFor(range);
  if (!host) return;
  const path = pathOf(host);
  if (path === null) return;
  const start = textOffset(host, range.startContainer, range.startOffset);
  const end   = textOffset(host, range.endContainer, range.endOffset);
  if (end <= start) return;
  const h = { id: "h" + Date.now() + Math.random().toString(36).slice(2,6),
              path, start, end, color, text: range.toString().slice(0,80) };
  list.push(h);
  hlPersist();
  repaint();
}

function remove(id){
  list = list.filter(h => h.id !== id);
  hlPersist();
  repaint();
}

export function clearDayHighlights(){
  list = [];
  hlPersist();
  repaint();
}
export function highlightCount(){ return list.length; }

/* ---------- popup chọn màu ---------- */
function buildPopup(){
  popup = document.createElement("div");
  popup.id = "hlPop";
  popup.className = "hidden";
  popup.innerHTML = COLORS.map(c =>
      `<button class="hl-sw hl-${c.id}" data-c="${c.id}" title="${c.name}"></button>`).join("")
    + `<button class="hl-sw hl-x" data-c="x" title="Bỏ chọn">✕</button>`
    + `<span class="hl-sep"></span>`
    + `<button class="hl-vocab" id="hlVocab" title="Lưu vào sổ từ vựng">📌 Nhớ từ</button>`;
  document.body.appendChild(popup);

  popup.addEventListener("mousedown", e => e.preventDefault());  // giữ vùng chọn
  popup.addEventListener("click", e => {
    // nút nhớ từ
    if (e.target.closest("#hlVocab")){
      const sel = window.getSelection();
      const text = sel ? sel.toString() : "";
      if (onSaveWord) onSaveWord(text);
      sel && sel.removeAllRanges();
      hidePopup();
      return;
    }
    const b = e.target.closest("[data-c]");
    if (!b) return;
    const sel = window.getSelection();
    if (b.dataset.c !== "x" && sel && sel.rangeCount && !sel.isCollapsed){
      add(sel.getRangeAt(0), b.dataset.c);
    }
    sel && sel.removeAllRanges();
    hidePopup();
  });
}
function showPopup(rect){
  popup.classList.remove("hidden");
  const pw = popup.offsetWidth || 190, ph = popup.offsetHeight || 34;
  let left = rect.left + window.scrollX + rect.width / 2 - pw / 2;
  let top  = rect.top + window.scrollY - ph - 8;
  left = Math.max(8, Math.min(left, window.innerWidth - pw - 8));
  if (top < window.scrollY + 4) top = rect.bottom + window.scrollY + 8;  // lật xuống dưới
  popup.style.left = left + "px";
  popup.style.top  = top + "px";
}
function hidePopup(){ popup && popup.classList.add("hidden"); }

/* ---------- khởi tạo ---------- */
export function initHighlight(opts = {}){
  root = document.getElementById("main");
  onSaveWord = opts.onSaveWord || null;
  buildPopup();

  document.addEventListener("mouseup", e => {
    if (e.target.closest && e.target.closest("#hlPop")) return;
    setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { hidePopup(); return; }
      const range = sel.getRangeAt(0);
      if (!root.contains(range.commonAncestorContainer)) { hidePopup(); return; }
      if (!range.toString().trim()) { hidePopup(); return; }
      // không cho bôi trong ô nhập liệu
      const t = e.target;
      if (t.closest && t.closest("input,textarea,button")) { hidePopup(); return; }
      showPopup(range.getBoundingClientRect());
    }, 10);
  });

  document.addEventListener("mousedown", e => {
    if (!e.target.closest("#hlPop")) hidePopup();
  });

  // bấm vào một vùng đã bôi để xoá
  document.addEventListener("click", e => {
    const m = e.target.closest("mark.hl");
    if (m && m.dataset.id) remove(m.dataset.id);
  });

  window.addEventListener("resize", hidePopup);
}

/* Gọi lại sau mỗi lần render trang mới. */
export function loadHighlightsFor(dayId){
  dayKey = "hl_" + dayId;
  list = get(dayKey, []) || [];
  // Nút "Nhớ từ" chỉ có nghĩa ở trang bài học, không hiện ở Bảng theo dõi / Sổ từ vựng.
  const vb = document.getElementById("hlVocab");
  const sep = popup && popup.querySelector(".hl-sep");
  const show = typeof dayId === "number";
  if (vb)  vb.classList.toggle("hidden", !show);
  if (sep) sep.classList.toggle("hidden", !show);
  // vẽ sau khi DOM của ngày đã dựng xong
  requestAnimationFrame(() => repaint());
}
