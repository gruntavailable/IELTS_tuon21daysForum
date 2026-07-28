import { raw, replace } from "./store.js";

/* Xuất/nhập toàn bộ tiến độ ra file .json.
   Dữ liệu chỉ nằm trong localStorage của một trình duyệt, nên đây là cách
   duy nhất để mang bài làm sang máy khác hoặc phòng khi xoá nhầm cache. */

const FORMAT = "ielts-m21-progress";
const VERSION = 1;

const pad = n => String(n).padStart(2, "0");

function stamp(d){
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
       + `-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

/* Đếm những thứ người học thực sự tạo ra, để hiện trong hộp xác nhận.
   Khoá bắt đầu bằng "__" là thiết lập máy (giao diện, tốc độ đọc), không tính. */
export function summarise(db){
  let answers = 0, essays = 0, days = 0;
  Object.keys(db || {}).forEach(k => {
    if (/^d\d+b\d+q\d+$/.test(k)) answers++;
    else if (k.startsWith("w_")) { if (String(db[k]).trim()) essays++; }
    else if (/^trk\d+_done$/.test(k) && db[k]) days++;
  });
  const words = Array.isArray(db && db.vocabList) ? db.vocabList.length : 0;
  return { answers, essays, days, words };
}

function describe(s){
  return `• ${s.answers} câu đã làm\n`
       + `• ${s.essays} bài viết\n`
       + `• ${s.words} từ trong sổ từ vựng\n`
       + `• ${s.days}/21 ngày đã hoàn thành`;
}

export function exportProgress(){
  const db = raw();
  const payload = {
    format: FORMAT,
    version: VERSION,
    savedAt: new Date().toISOString(),
    summary: summarise(db),
    data: db
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)],
                        { type: "application/json;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `tien-do-ielts-21day-${stamp(new Date())}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* Nhận file người dùng chọn. Trả về true nếu đã ghi đè và cần tải lại trang. */
function applyFile(text){
  let payload;
  try {
    payload = JSON.parse(text);
  } catch (e) {
    alert("Không đọc được file. Hãy chọn đúng file .json đã xuất từ trang này.");
    return false;
  }

  if (!payload || payload.format !== FORMAT || typeof payload.data !== "object"
      || payload.data === null || Array.isArray(payload.data)) {
    alert("File này không phải bản sao tiến độ của IELTS Marathon 21 Day.");
    return false;
  }
  if (payload.version > VERSION) {
    alert("File được tạo bằng phiên bản mới hơn. Hãy tải lại trang rồi thử lại.");
    return false;
  }

  const incoming = summarise(payload.data);
  const current = summarise(raw());
  const when = payload.savedAt
    ? new Date(payload.savedAt).toLocaleString("vi-VN")
    : "không rõ thời điểm";

  const ok = confirm(
    `Nhập tiến độ đã lưu lúc ${when}:\n\n${describe(incoming)}\n\n`
    + `Bài làm hiện có trên máy này sẽ bị thay thế:\n\n${describe(current)}\n\n`
    + `Tiếp tục?`
  );
  if (!ok) return false;

  /* Giữ giao diện sáng/tối của máy đang dùng — thiết lập này thuộc về thiết bị,
     không phải tiến độ học. */
  const theme = raw().__theme;
  const next = Object.assign({}, payload.data);
  if (theme !== undefined) next.__theme = theme;

  replace(next);
  return true;
}

export function initBackup(){
  const btnOut = document.getElementById("btnExport");
  const btnIn = document.getElementById("btnImport");
  const file = document.getElementById("fileImport");
  if (!btnOut || !btnIn || !file) return;

  btnOut.onclick = exportProgress;
  btnIn.onclick = () => { file.value = ""; file.click(); };

  file.onchange = () => {
    const f = file.files && file.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      /* app.js giữ tham chiếu tới object store cũ, nên phải tải lại trang
         sau khi replace() — giống cách nút "Xoá toàn bộ bài làm" làm. */
      if (applyFile(String(reader.result))) location.reload();
    };
    reader.onerror = () => alert("Không đọc được file. Hãy thử lại.");
    reader.readAsText(f, "utf-8");
  };
}
