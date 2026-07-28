import { get, set } from "./store.js";

/* Bảng theo dõi 21 ngày — Section 2 của sách.
   Mỗi dòng: Ngày · Sản phẩm chính · Hoàn thành · Lỗi lớn nhất · Kiểm tra lại */
export const PRODUCTS = [
  "Bộ bài đầu vào và ba lỗi ưu tiên",
  "Năm câu thesis và một đoạn viết lại",
  "Phiếu ghi bằng chứng Reading",
  "Bản ghi âm và bản chép lời đã sửa",
  "Sửa lỗi dịch + ngân hàng cụm từ",
  "Bộ câu Overview và một bài Task 1",
  "Bài đánh giá Tuần 1",
  "Ba chuỗi phát triển ý và một đoạn văn",
  "Sơ đồ chức năng đoạn",
  "Sơ đồ ngân hàng câu chuyện",
  "Bảng nâng cấp ngữ pháp",
  "Bản Task 1 có bấm giờ và bản viết lại",
  "Bản ghi âm Part 3 và bản chép lời",
  "Phiếu theo dõi áp lực thời gian",
  "Bài Reading có bấm giờ và bảng phân loại lỗi",
  "Bài Writing có bấm giờ và bản viết lại",
  "Bài thi thử Speaking và lần thực hiện thứ hai",
  "Bộ bài sửa lỗi ưu tiên",
  "Hồ sơ một chủ đề qua ba kỹ năng",
  "Bộ bài thi thử hoàn chỉnh",
  "Hồ sơ cuối lộ trình và kế hoạch 30 ngày"
];

const PHASES = [
  { at: 1,  label: "Giai đoạn 1 · Ngày 1–7 — Xác định lỗi, đọc dựa trên bằng chứng, ghi âm trung thực" },
  { at: 8,  label: "Giai đoạn 2 · Ngày 8–14 — Phát triển ý, chức năng đoạn, kiểm soát dưới áp lực" },
  { at: 15, label: "Giai đoạn 3 · Ngày 15–21 — Bài có bấm giờ, sửa lỗi ưu tiên, đánh giá thay đổi" }
];
const MILESTONES = [7, 14, 21];

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));

export function trackerStats(){
  let done = 0;
  for (let d = 1; d <= 21; d++) if (get(`trk${d}_done`, false)) done++;
  return { done, total: 21 };
}

export function renderTracker(mount){
  const rows = [];
  PRODUCTS.forEach((prod, i) => {
    const d = i + 1;
    const ph = PHASES.find(p => p.at === d);
    if (ph) rows.push(`<tr class="phase-lbl"><td colspan="5">${ph.label}</td></tr>`);

    const isDone = get(`trk${d}_done`, false);
    const err    = get(`trk${d}_err`, "");
    const recheck= get(`trk${d}_re`, "");
    const star   = MILESTONES.includes(d) ? " ★" : "";
    rows.push(`
      <tr data-d="${d}" class="${isDone ? "done" : ""}">
        <td class="day">${d}${star}</td>
        <td class="prod">${esc(prod)}</td>
        <td class="chk"><input type="checkbox" data-f="done" ${isDone ? "checked" : ""} aria-label="Hoàn thành ngày ${d}"></td>
        <td><input type="text" data-f="err" value="${esc(err)}" placeholder="vd: nhầm Not Given do suy luận ngoài bài"></td>
        <td><input type="date" data-f="re" value="${esc(recheck)}"></td>
      </tr>`);
  });

  mount.innerHTML = `
    <div class="tablewrap">
      <table class="vt trk">
        <tr>
          <th>Ngày</th><th>Sản phẩm chính</th><th>Hoàn thành</th>
          <th>Lỗi lớn nhất</th><th>Kiểm tra lại</th>
        </tr>
        ${rows.join("")}
      </table>
    </div>`;

  mount.querySelectorAll("tr[data-d]").forEach(tr => {
    const d = tr.dataset.d;
    tr.querySelectorAll("[data-f]").forEach(inp => {
      const f = inp.dataset.f;
      const evt = inp.type === "checkbox" ? "change" : "input";
      inp.addEventListener(evt, () => {
        if (f === "done"){
          set(`trk${d}_done`, inp.checked);
          tr.classList.toggle("done", inp.checked);
          document.dispatchEvent(new CustomEvent("tracker:changed"));
        } else {
          set(`trk${d}_${f}`, inp.value);
        }
      });
    });
  });
}

/* ---- Quy trình một buổi học (Section 1.4) ---- */
export const STEPS = [
  ["Chuẩn bị",  "Chọn nhịp học, mở đúng ngày, chuẩn bị đồng hồ và nơi lưu sản phẩm", "Đã biết rõ sản phẩm chính và thời gian dành cho từng phần"],
  ["Làm bài",   "Làm độc lập, bấm giờ và đánh dấu chỗ chưa chắc chắn", "Có bản đầu nguyên vẹn, chưa xem đáp án"],
  ["Đối chiếu", "Kiểm tra đáp án, bằng chứng, bài mẫu hoặc bản ghi âm", "Mỗi lỗi được gắn với một nguyên nhân cụ thể"],
  ["Sửa lỗi",   "Sửa câu, viết lại đoạn hoặc ghi âm lần hai", "Có sản phẩm sau khi sửa để đặt cạnh bản đầu"],
  ["Vận dụng",  "Dùng lại cụm từ, cấu trúc hoặc cách phát triển ý trong nhiệm vụ mới", "Phần đã sửa xuất hiện đúng trong một ngữ cảnh khác"]
];

/* ---- Tiêu chí hoàn thành (Section 1.13) ---- */
export const CRITERIA = [
  "Sản phẩm chính đã hoàn thành",
  "Bản đầu vẫn được giữ nguyên",
  "Lỗi ưu tiên đã được ghi cụ thể",
  "Ít nhất một lỗi đã được sửa hoặc vận dụng lại"
];

export function renderDayChecklist(mount, day){
  const stepHtml = STEPS.map((s, i) => {
    const k = `ck${day}s${i}`;
    const on = get(k, false);
    return `<li class="step ${on ? "on" : ""}" data-k="${k}">
      <input type="checkbox" ${on ? "checked" : ""} aria-label="${esc(s[0])}">
      <div class="stx"><b>${i + 1}. ${esc(s[0])}</b><span>${esc(s[1])} — <i>dấu hiệu hoàn thành: ${esc(s[2])}</i></span></div>
    </li>`;
  }).join("");

  const critHtml = CRITERIA.map((c, i) => {
    const k = `cr${day}c${i}`;
    const on = get(k, false);
    return `<li class="step ${on ? "on" : ""}" data-k="${k}">
      <input type="checkbox" ${on ? "checked" : ""} aria-label="${esc(c)}">
      <div class="stx"><b style="font-weight:600">${esc(c)}</b></div>
    </li>`;
  }).join("");

  mount.innerHTML = `
    <p class="instr">Năm bước của một buổi học. Đánh dấu khi bước đó đã khép lại — không phải khi đã đọc qua.</p>
    <ul class="steps">${stepHtml}</ul>
    <p class="instr" style="margin:16px 0 8px"><b style="color:var(--tx)">Tiêu chí hoàn thành ngày học</b> — đủ bốn ý mới đánh dấu ngày này trong Bảng theo dõi.</p>
    <ul class="steps">${critHtml}</ul>
    <div id="dayDoneWrap" style="margin-top:14px"></div>`;

  mount.querySelectorAll(".step").forEach(li => {
    const cb = li.querySelector("input");
    cb.addEventListener("change", () => {
      set(li.dataset.k, cb.checked);
      li.classList.toggle("on", cb.checked);
      paintDayDone(mount, day);
    });
  });
  paintDayDone(mount, day);
}

function paintDayDone(mount, day){
  const wrap = mount.querySelector("#dayDoneWrap");
  if (!wrap) return;
  const allCrit = CRITERIA.every((_, i) => get(`cr${day}c${i}`, false));
  const marked  = get(`trk${day}_done`, false);
  wrap.innerHTML = allCrit
    ? `<span class="donebadge">Đủ tiêu chí hoàn thành</span>
       ${marked ? `<span class="donebadge" style="margin-left:6px">Đã đánh dấu ở Bảng theo dõi</span>`
                : `<button class="btn sm acc" id="btnMarkDay" style="margin-left:8px">Đánh dấu Ngày ${day} hoàn thành</button>`}`
    : `<span class="donebadge no">Chưa đủ bốn tiêu chí — ngày học chưa hoàn thành</span>`;

  const b = wrap.querySelector("#btnMarkDay");
  if (b) b.onclick = () => {
    set(`trk${day}_done`, true);
    document.dispatchEvent(new CustomEvent("tracker:changed"));
    paintDayDone(mount, day);
  };
}

/* ---- Ba lỗi ưu tiên (Section 1.8) ---- */
export function renderErrorLog(mount, day){
  const rows = [0, 1, 2].map(i => {
    const k = `err${day}_${i}`;
    return `<div class="errrow">
      <div class="en">${i + 1}</div>
      <textarea data-k="${k}" placeholder="Gọi tên lỗi đủ cụ thể để luyện lại được…">${esc(get(k, ""))}</textarea>
    </div>`;
  }).join("");

  mount.innerHTML = `
    <p class="instr">Mỗi ngày chỉ chọn <b style="color:var(--tx)">tối đa ba lỗi</b>, và lỗi phải xuất hiện trong sản phẩm của chính ngày học.</p>
    ${rows}
    <div class="tablewrap" style="margin-top:12px">
      <table class="vt">
        <tr><th>Ghi lỗi còn mơ hồ</th><th>Ghi lỗi có thể luyện lại</th></tr>
        <tr><td class="ex">Reading chậm</td><td>Dành quá lâu để tìm lại thông tin vì chưa khoanh từ định vị</td></tr>
        <tr><td class="ex">Writing thiếu ý</td><td>Đoạn thân bài có luận điểm và ví dụ nhưng thiếu phần giải thích cơ chế</td></tr>
        <tr><td class="ex">Speaking chưa tự nhiên</td><td>Lặp <i>I think</i> nhiều lần và ngừng quá bốn giây trước khi nêu lí do</td></tr>
        <tr><td class="ex">Grammar yếu</td><td>Sai hòa hợp chủ ngữ – động từ khi chủ ngữ là cụm danh từ dài</td></tr>
      </table>
    </div>`;

  mount.querySelectorAll("textarea[data-k]").forEach(ta => {
    ta.addEventListener("input", () => set(ta.dataset.k, ta.value));
  });
}
