import { get, set } from "./store.js";

/* Sổ từ vựng cá nhân.
   Mỗi mục: { id, word, vi, ipa, sent, day, ts }
   - word : từ/cụm đã bôi đen
   - vi   : nghĩa tiếng Việt
   - ipa  : phiên âm
   - sent : câu mở rộng ở band 7
   Chỉ cột "Từ vựng" được điền sẵn khi bấm "Nhớ từ"; ba cột còn lại
   để trống cố ý — người học tự tra và tự gõ thì mới nhớ được. */

const VKEY = "vocabList";
let listeners = [];

export function allWords(){ return get(VKEY, []) || []; }

/* Bản cũ lưu cột "en" (nghĩa tiếng Anh) và tự điền sẵn từ từ điển.
   Chuyển sang cột "vi" một lần, giữ nguyên nội dung người học đã gõ. */
(function migrate(){
  const v = allWords();
  if (!v.some(x => x && x.vi === undefined)) return;
  v.forEach(x => { if (x.vi === undefined){ x.vi = x.en || ""; delete x.en; } });
  set(VKEY, v);
})();
function vPersist(v){ set(VKEY, v); listeners.forEach(f => f()); }
export function onVocabChange(fn){ listeners.push(fn); }
export function vocabCount(){ return allWords().length; }

export function hasWord(word){
  const k = (word || "").trim().toLowerCase();
  return allWords().some(v => v.word.trim().toLowerCase() === k);
}

/* Thêm một từ. Trả về "added" | "duplicate" | "empty"
   Ba cột nghĩa/phiên âm/câu để trống — người học tự điền. */
export function addWord(word, day){
  const w = (word || "").trim().replace(/\s+/g, " ");
  if (!w) return "empty";
  if (hasWord(w)) return "duplicate";
  const v = allWords();
  v.push({
    id: "v" + Date.now() + Math.random().toString(36).slice(2, 6),
    word: w,
    vi:   "",
    ipa:  "",
    sent: "",
    day:  day,
    ts:   Date.now()
  });
  vPersist(v);
  return "added";
}

export function updateWord(id, field, value){
  const v = allWords();
  const it = v.find(x => x.id === id);
  if (!it) return;
  it[field] = value;
  vPersist(v);
}
export function removeWord(id){
  vPersist(allWords().filter(x => x.id !== id));
}
export function clearWords(){ vPersist([]); }

/* Xuất ra CSV để mở bằng Excel / Google Sheets */
export function exportCSV(){
  const rows = [["Từ vựng","Nghĩa tiếng Việt","Phiên âm","Câu mở rộng band 7","Ngày"]];
  allWords().forEach(v => rows.push([v.word, v.vi ?? "", v.ipa, v.sent, v.day ?? ""]));
  const csv = "﻿" + rows.map(r =>
    r.map(c => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "so-tu-vung-ielts.csv";
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

const vEsc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

/* Bảng từ vựng — hiển thị ở cuối mỗi ngày và ở trang Sổ từ vựng.
   Bảng tự vẽ lại sau khi xoá một dòng, nên không cần người gọi làm gì thêm. */
export function renderVocabTable(mount, opts = {}){
  const only = opts.day;                       // chỉ hiện từ của một ngày
  const all  = allWords();
  const rows = only === undefined ? all : all.filter(v => v.day === only);
  const redraw = () => renderVocabTable(mount, opts);

  if (!rows.length){
    mount.innerHTML = `<p class="instr" style="margin:0">Chưa có từ nào. Bôi đen một từ hoặc cụm từ trong bài rồi bấm
      <b style="color:var(--tx)">📌 Nhớ từ</b> để thêm vào bảng này.</p>`;
    if (opts.onChange) opts.onChange();
    return;
  }

  mount.innerHTML = `
    <div class="tablewrap">
      <table class="vt vocab">
        <tr>
          <th style="width:34px"></th>
          <th>Từ vựng</th><th>Nghĩa tiếng Việt</th><th style="width:130px">Phiên âm</th>
          <th>Câu mở rộng ở band 7</th><th style="width:34px"></th>
        </tr>
        ${rows.map((v, i) => `
          <tr data-id="${v.id}">
            <td class="vn">${i + 1}</td>
            <td><div class="ed w" contenteditable="true" data-f="word">${vEsc(v.word)}</div>
                ${only === undefined && v.day ? `<span class="vday">Ngày ${v.day}</span>` : ""}</td>
            <td><div class="ed" contenteditable="true" data-f="vi" data-ph="nghĩa tiếng Việt…">${vEsc(v.vi)}</div></td>
            <td><div class="ed ipa" contenteditable="true" data-f="ipa" data-ph="/…/">${vEsc(v.ipa)}</div></td>
            <td><div class="ed" contenteditable="true" data-f="sent" data-ph="viết một câu band 7 dùng cụm này…">${vEsc(v.sent)}</div></td>
            <td><button class="vdel" type="button" title="Xoá từ này">✕</button></td>
          </tr>`).join("")}
      </table>
    </div>`;

  /* Khi bảng được vẽ lại, các ô cũ bị gỡ khỏi DOM vẫn có thể bắn "blur" một lần
     và ghi đè dữ liệu đã đổi. Cờ này chặn mọi ô của lượt vẽ cũ. */
  let stale = false;

  mount.querySelectorAll("tr[data-id]").forEach(tr => {
    const id = tr.dataset.id;
    tr.querySelectorAll(".ed").forEach(cell => {
      cell.addEventListener("blur", () => {
        if (stale) return;
        updateWord(id, cell.dataset.f, cell.textContent.trim());
        if (opts.onChange) opts.onChange();
      });
      cell.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.shiftKey){ e.preventDefault(); cell.blur(); }
      });
    });
    tr.querySelector(".vdel").addEventListener("click", () => {
      const it = allWords().find(x => x.id === id);
      if (!confirm(`Xoá “${it ? it.word : ""}” khỏi sổ từ vựng?`)) return;
      stale = true;                 // ô đang focus không được ghi đè sau khi xoá
      removeWord(id);
      redraw();
      if (opts.onChange) opts.onChange();
    });
  });
}
