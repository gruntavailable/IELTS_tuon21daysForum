/* Liệt kê các câu tiếng Anh của một ngày, dùng ĐÚNG bộ tách câu của
   src/js/translate.js. Kết quả là các khoá cần dùng trong src/data/tr/day{N}.js.

     node tools/dump-sentences.mjs 3            # cả ngày 3, chỉ câu tiếng Anh
     node tools/dump-sentences.mjs 3 passage    # chỉ bài đọc
     node tools/dump-sentences.mjs 3 all --todo # chỉ những câu CHƯA có bản dịch

   Mỗi dòng in ra là một chuỗi JSON đã escape sẵn, chép thẳng làm khoá được. */
import { readFileSync } from "node:fs";

const n     = process.argv[2] || "1";
const scope = (process.argv[3] || "all").replace(/^--/, "");
const todoOnly = process.argv.includes("--todo");
const root = new URL("../", import.meta.url);

const day = (await import(new URL(`src/data/day${n}.js`, root))).default;

/* Giữ khớp với TR_ABBR / TR_VI / trSentences trong src/js/translate.js */
const ABBR = /(?:^|\s)(?:e\.g|i\.e|etc|vs|cf|Mr|Mrs|Ms|Dr|Prof|St|approx|No|Fig|[A-Z])$/;
const VI_CHARS = /[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
function sentences(text){
  const out = [];
  const push = (a, b) => {
    while (a < b && /\s/.test(text[a])) a++;
    while (b > a && /\s/.test(text[b - 1])) b--;
    if (b > a) out.push(text.slice(a, b));
  };
  let start = 0;
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (c === ":" && /^\s/.test(text.slice(i + 1)) && VI_CHARS.test(text.slice(start, i))){
      push(start, i + 1);
      start = i + 1;
      continue;
    }
    if (c !== "." && c !== "!" && c !== "?") continue;
    let j = i + 1;
    while (j < text.length && /["'’”\)\]]/.test(text[j])) j++;
    const after = text.slice(j);
    if (after && !/^\s/.test(after)) continue;
    if (ABBR.test(text.slice(start, i))) continue;
    push(start, j);
    while (j < text.length && /\s/.test(text[j])) j++;
    start = j;
    i = j - 1;
  }
  push(start, text.length);
  return out;
}

/* Ranh giới khối = ranh giới đơn vị dịch (khớp TR_BLOCK trong translate.js):
   hai <li> liền nhau không được dính thành một chuỗi. */
const BLOCK_TAG = /<\/?(?:li|p|td|th|h[1-5]|div|blockquote|figcaption|section|article|ol|ul|table|tr|br)[^>]*>/gi;
const blocks = h => String(h)
  .replace(BLOCK_TAG, "\n")
  .replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .split("\n")
  .map(s => s.replace(/\s+/g, " ").trim())
  .filter(Boolean);
const strip = h => String(h)
  .replace(/<[^>]+>/g, "")
  .replace(/&nbsp;/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/\s+/g, " ")
  .trim();

/* Câu đã là tiếng Việt thì không cần dịch. Nhưng bài học có những câu tiếng Anh
   trích từ tiếng Việt làm ví dụ ("pressure means áp lực"), nên chỉ coi là tiếng
   Việt khi KHÔNG có đủ từ chức năng tiếng Anh. */
const VI_MARK = /[ăâđêôơưàáảãạằắẳẵặầấẩẫậèéẻẽẹềếểễệìíỉĩịòóỏõọồốổỗộờớởỡợùúủũụừứửữựỳýỷỹỵ]/i;
/* Đếm tỉ lệ từ mang dấu tiếng Việt. Không dùng \b để dò từ tiếng Anh được, vì
   trong JS chữ có dấu tính là ranh giới từ nên "toàn" sẽ khớp nhầm thành "to". */
const words = s => String(s).split(/[^\p{L}\p{N}']+/u).filter(Boolean);
const isVietnamese = s => {
  if (!VI_MARK.test(s)) return false;
  const w = words(s);
  if (!w.length) return true;
  if (w.filter(x => VI_MARK.test(x)).length / w.length >= 0.5) return true;
  /* Chuỗi lẫn hai thứ tiếng: chỉ đáng dịch khi phần tiếng Anh đủ dài. Nhãn kiểu
     "Đề 2 — University:" hay "12 câu trong 25–30 phút" thì bỏ qua. */
  return w.filter(x => /^[A-Za-z']{2,}$/.test(x)).length < 5;
};
const VI = { test: isVietnamese };

/* Các bản dịch đã có, để lọc --todo */
const done = new Set();
if (todoOnly){
  const src = readFileSync(new URL(`src/data/tr/day${n}.js`, root), "utf8");
  for (const m of src.matchAll(/^"((?:[^"\\]|\\.)*)"\s*:/gm)) done.add(JSON.parse(`"${m[1]}"`).trim());
}

const seen = new Set();
const emit = s => {
  s = String(s).trim();
  if (!s || seen.has(s)) return;
  if (VI.test(s)) return;                       // đã là tiếng Việt
  if (!/[A-Za-z]/.test(s)) return;              // số / ký hiệu
  if (/^\[[A-Z]{1,3}\]$/.test(s)) return;       // ký hiệu chép lời: [P] [R] [PR]
  if (s.length < 4 && !s.includes(" ")) return; // nhãn một ký tự / mã ngắn
  if (done.has(s)) return;
  seen.add(s);
  console.log(JSON.stringify(s));
};
/* Tách theo khối trước, rồi mới tách câu — khớp trUnits() trong translate.js. */
const emitSent = txt => blocks(txt).forEach(chunk => sentences(chunk).forEach(emit));

for (const b of day.blocks){
  if (b.t === "passage"){ if (b.subtitle) emit(strip(b.subtitle)); b.paras.forEach(([, txt]) => emitSent(txt)); }
  if (scope === "passage") continue;
  if (b.t === "quiz" || b.t === "gap"){
    (b.shared || []).forEach(o => emit(strip(o)));
    (b.items || []).forEach(it => {
      emitSent(it.q);
      (it.opts || []).forEach(o => emit(strip(o)));
      (it.a || []).forEach && Array.isArray(it.a) && it.a.forEach(a => emit(strip(a)));
      if (it.model) emitSent(it.model);
    });
  }
  if (b.t === "vocab") (b.items || []).forEach(r => { emit(strip(r[0])); emitSent(r[2]); });
  if (b.t === "writing"){ emitSent(b.prompt); emitSent(b.model); }
  if (b.t === "speaking") (b.parts || []).forEach(p => (p.qs || []).forEach(qa => { emitSent(qa[0]); emitSent(qa[1]); }));
  if (b.t === "note") emitSent(b.html);
}
console.error(`day${n} · ${scope}${todoOnly ? " · chưa dịch" : ""}: ${seen.size} câu`);
