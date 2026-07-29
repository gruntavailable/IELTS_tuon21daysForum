import { get, set } from "./store.js";
import { t } from "../i18n/index.js";

/* Bảng theo dõi 21 ngày — Section 2 của sách.
   Mỗi dòng: Ngày · Sản phẩm chính · Hoàn thành · Lỗi lớn nhất · Kiểm tra lại
   Sản phẩm và nhãn giai đoạn tra theo khoá nên đổi ngôn ngữ được ngay. */
export const PRODUCTS = Array.from({ length: 21 }, (_, i) => `product.${i + 1}`);

const PHASES = [
  { at: 1,  label: "phase.1" },
  { at: 8,  label: "phase.2" },
  { at: 15, label: "phase.3" }
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
    if (ph) rows.push(`<tr class="phase-lbl"><td colspan="5">${esc(t(ph.label))}</td></tr>`);

    const isDone = get(`trk${d}_done`, false);
    const err    = get(`trk${d}_err`, "");
    const recheck= get(`trk${d}_re`, "");
    const star   = MILESTONES.includes(d) ? " ★" : "";
    rows.push(`
      <tr data-d="${d}" class="${isDone ? "done" : ""}">
        <td class="day">${d}${star}</td>
        <td class="prod">${esc(t(prod))}</td>
        <td class="chk"><input type="checkbox" data-f="done" ${isDone ? "checked" : ""} aria-label="${esc(t("tracker.done.aria", { n: d }))}"></td>
        <td><input type="text" data-f="err" value="${esc(err)}" placeholder="${esc(t("tracker.err.ph"))}"></td>
        <td><input type="date" data-f="re" value="${esc(recheck)}"></td>
      </tr>`);
  });

  mount.innerHTML = `
    <div class="tablewrap">
      <table class="vt trk">
        <tr>
          <th>${t("tracker.th.day")}</th><th>${t("tracker.th.product")}</th><th>${t("tracker.th.done")}</th>
          <th>${t("tracker.th.error")}</th><th>${t("tracker.th.recheck")}</th>
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

/* ---- Quy trình một buổi học (Section 1.4) ----
   Mỗi bước gồm ba khoá: tên · việc cần làm · dấu hiệu đã xong. */
export const STEPS = [1, 2, 3, 4, 5].map(n =>
  [`steps.${n}.name`, `steps.${n}.what`, `steps.${n}.sign`]);

/* ---- Tiêu chí hoàn thành (Section 1.13) ---- */
export const CRITERIA = [1, 2, 3, 4].map(n => `criteria.${n}`);

export function renderDayChecklist(mount, day){
  const stepHtml = STEPS.map((s, i) => {
    const k = `ck${day}s${i}`;
    const on = get(k, false);
    return `<li class="step ${on ? "on" : ""}" data-k="${k}">
      <input type="checkbox" ${on ? "checked" : ""} aria-label="${esc(t(s[0]))}">
      <div class="stx"><b>${i + 1}. ${esc(t(s[0]))}</b><span>${esc(t(s[1]))} — <i>${esc(t("steps.doneSign"))}: ${esc(t(s[2]))}</i></span></div>
    </li>`;
  }).join("");

  const critHtml = CRITERIA.map((c, i) => {
    const k = `cr${day}c${i}`;
    const on = get(k, false);
    return `<li class="step ${on ? "on" : ""}" data-k="${k}">
      <input type="checkbox" ${on ? "checked" : ""} aria-label="${esc(t(c))}">
      <div class="stx"><b style="font-weight:600">${esc(t(c))}</b></div>
    </li>`;
  }).join("");

  mount.innerHTML = `
    <p class="instr">${t("steps.intro")}</p>
    <ul class="steps">${stepHtml}</ul>
    <p class="instr" style="margin:16px 0 8px"><b style="color:var(--tx)">${t("criteria.heading")}</b> ${t("criteria.note")}</p>
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
    ? `<span class="donebadge">${t("criteria.met")}</span>
       ${marked ? `<span class="donebadge" style="margin-left:6px">${t("criteria.marked")}</span>`
                : `<button class="btn sm acc" id="btnMarkDay" style="margin-left:8px">${t("criteria.markDay", { n: day })}</button>`}`
    : `<span class="donebadge no">${t("criteria.notMet")}</span>`;

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
      <textarea data-k="${k}" placeholder="${esc(t("err.ph"))}">${esc(get(k, ""))}</textarea>
    </div>`;
  }).join("");

  const examples = [1, 2, 3, 4].map(n =>
    `<tr><td class="ex">${t(`err.ex${n}.vague`)}</td><td>${t(`err.ex${n}.usable`)}</td></tr>`).join("");

  mount.innerHTML = `
    <p class="instr">${t("err.intro")}</p>
    ${rows}
    <div class="tablewrap" style="margin-top:12px">
      <table class="vt">
        <tr><th>${t("err.th.vague")}</th><th>${t("err.th.usable")}</th></tr>
        ${examples}
      </table>
    </div>`;

  mount.querySelectorAll("textarea[data-k]").forEach(ta => {
    ta.addEventListener("input", () => set(ta.dataset.k, ta.value));
  });
}
