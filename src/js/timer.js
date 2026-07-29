import { get, set } from "./store.js";
import { t, onLangChange } from "../i18n/index.js";

/* Nhịp học theo Section 1.5 của sách: 60 / 90 / 150 phút.
   Phần mô tả tra theo khoá nên đổi được ngôn ngữ ngay tại chỗ. */
export const PACES = [
  { min: 60,  label: "60′",  desc: "pace.60.desc" },
  { min: 90,  label: "90′",  desc: "pace.90.desc" },
  { min: 150, label: "150′", desc: "pace.150.desc" }
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
      ? t("timer.over", { used: Math.floor(used / 60) })
      : t("timer.sub", { min: paceMin, used: Math.floor(used / 60) });
  }

  const btn = $("tmrToggle");
  if (btn) btn.textContent = running ? t("timer.pause")
                                     : (used > 0 ? t("timer.resume") : t("timer.start"));
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

/* Phần chữ cố định của hộp đồng hồ — gọi lại khi đổi ngôn ngữ. */
function paintLabels(){
  const head = $("tmrHead");
  if (head) head.textContent = t("timer.heading");
  const rst = $("tmrReset");
  if (rst) rst.title = t("timer.reset.title");
  document.querySelectorAll("#tmrPaces .btn").forEach(b => {
    const p = PACES.find(x => x.min === Number(b.dataset.min));
    if (p) b.title = t(p.desc);
  });
}

export function initTimer(){
  const box = $("timerBox");
  if (!box) return;

  box.innerHTML = `
    <div id="tmrHead" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--tx2);font-weight:700;margin-bottom:6px"></div>
    <div class="tmr-paces" id="tmrPaces">
      ${PACES.map(p => `<button class="btn sm" data-min="${p.min}">${p.label}</button>`).join("")}
    </div>
    <div class="tmr-face" id="tmrFace">00:00</div>
    <div class="tmr-sub" id="tmrSub"></div>
    <div class="tmr-prog"><i id="tmrBarI"></i></div>
    <div class="tmr-ctl">
      <button class="btn sm acc" id="tmrToggle"></button>
      <button class="btn sm" id="tmrReset">↺</button>
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
    if (totalElapsed() > 0 && !confirm(t("timer.reset.confirm"))) return;
    reset();
  };

  onLangChange(() => { paintLabels(); paint(); });
  paintLabels();

  // keep the stored value fresh if the tab closes mid-run
  window.addEventListener("beforeunload", () => { if (running) tmrPersist(); });

  paintPaces();
  paint();
}
