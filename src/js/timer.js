import { get, set } from "./store.js";

/* Nhịp học theo Section 1.5 của sách: 60 / 90 / 150 phút. */
export const PACES = [
  { min: 60,  label: "60′",  desc: "Một phần Reading rút gọn, một sản phẩm chính và một lượt sửa. Giữ bản đầu, ghi tối đa ba lỗi." },
  { min: 90,  label: "90′",  desc: "Nhịp mặc định: tiếp nhận, tạo sản phẩm và vận dụng lại. Hoàn thành sản phẩm chính và phiếu tự kiểm tra." },
  { min: 150, label: "150′", desc: "Toàn bộ bài, nhiệm vụ mở rộng và lượt rà soát chi tiết. Cần bản viết lại hoặc lần thực hiện thứ hai." }
];

const two = n => String(n).padStart(2, "0");
function fmt(sec){
  const s = Math.abs(sec);
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  const body = h > 0 ? `${h}:${two(m)}:${two(ss)}` : `${two(m)}:${two(ss)}`;
  return (sec < 0 ? "+" : "") + body;
}

let paceMin   = get("__pace", 90);
let running   = false;
let startedAt = null;   // epoch ms of the current run segment
let elapsed   = get("__tmrElapsed", 0);  // seconds accumulated before current segment
let tick      = null;

const $ = id => document.getElementById(id);

function totalElapsed(){
  return elapsed + (running && startedAt ? Math.floor((Date.now() - startedAt) / 1000) : 0);
}

function paint(){
  const face = $("tmrFace");
  if (!face) return;
  const total = paceMin * 60;
  const used  = totalElapsed();
  const left  = total - used;

  face.textContent = fmt(left);
  face.classList.toggle("warn", left <= 300 && left > 0);
  face.classList.toggle("over", left <= 0);

  const pct = Math.min(100, (used / total) * 100);
  const barI = $("tmrBarI");
  if (barI){
    barI.style.width = pct + "%";
    barI.classList.toggle("warn", left <= 300 && left > 0);
    barI.classList.toggle("over", left <= 0);
  }

  const sub = $("tmrSub");
  if (sub){
    sub.textContent = left <= 0
      ? `Đã quá giờ · đã học ${Math.floor(used / 60)} phút`
      : `Nhịp ${paceMin} phút · đã học ${Math.floor(used / 60)} phút`;
  }

  const btn = $("tmrToggle");
  if (btn) btn.textContent = running ? "⏸  Tạm dừng" : (used > 0 ? "▶  Tiếp tục" : "▶  Bắt đầu");
}

function tmrPersist(){
  set("__tmrElapsed", totalElapsed());
}

function start(){
  if (running) return;
  running = true;
  startedAt = Date.now();
  tick = setInterval(paint, 1000);
  paint();
}
function pause(){
  if (!running) return;
  elapsed = totalElapsed();
  running = false;
  startedAt = null;
  clearInterval(tick); tick = null;
  tmrPersist();
  paint();
}
function reset(){
  running = false;
  startedAt = null;
  elapsed = 0;
  clearInterval(tick); tick = null;
  set("__tmrElapsed", 0);
  paint();
}

function paintPaces(){
  document.querySelectorAll("#tmrPaces .btn").forEach(b => {
    b.classList.toggle("on", Number(b.dataset.min) === paceMin);
  });
}

export function initTimer(){
  const box = $("timerBox");
  if (!box) return;

  box.innerHTML = `
    <div style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--tx2);font-weight:700;margin-bottom:6px">Đồng hồ bấm giờ</div>
    <div class="tmr-paces" id="tmrPaces">
      ${PACES.map(p => `<button class="btn sm" data-min="${p.min}" title="${p.desc.replace(/"/g,"&quot;")}">${p.label}</button>`).join("")}
    </div>
    <div class="tmr-face" id="tmrFace">00:00</div>
    <div class="tmr-sub" id="tmrSub"></div>
    <div class="tmr-prog"><i id="tmrBarI"></i></div>
    <div class="tmr-ctl">
      <button class="btn sm acc" id="tmrToggle">▶  Bắt đầu</button>
      <button class="btn sm" id="tmrReset" title="Đặt lại về 00:00">↺</button>
    </div>
  `;

  document.querySelectorAll("#tmrPaces .btn").forEach(b => {
    b.onclick = () => {
      paceMin = Number(b.dataset.min);
      set("__pace", paceMin);
      paintPaces();
      paint();
    };
  });
  $("tmrToggle").onclick = () => running ? pause() : start();
  $("tmrReset").onclick  = () => {
    if (totalElapsed() > 0 && !confirm("Đặt lại đồng hồ về 00:00?")) return;
    reset();
  };

  // keep the stored value fresh if the tab closes mid-run
  window.addEventListener("beforeunload", () => { if (running) tmrPersist(); });

  paintPaces();
  paint();
}
