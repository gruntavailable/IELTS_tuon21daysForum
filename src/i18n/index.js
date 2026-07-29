import { get, set } from "../js/store.js";
import { VI } from "./vi.js";
import { EN } from "./en.js";

/* Lớp ngôn ngữ giao diện: "vi" | "en".
   Chỉ phần chữ của ứng dụng đổi theo nút VI/EN. Ngữ liệu tiếng Anh trong bài
   (passage, câu hỏi, bài mẫu) luôn giữ nguyên vì đó chính là nội dung cần học. */

const TABLES = { vi: VI, en: EN };
const LANGS = ["vi", "en"];

let lang = LANGS.includes(get("__lang", null)) ? get("__lang", null) : "vi";
let langListeners = [];

export function currentLang(){ return lang; }

/* Tra một khoá. Thiếu ở bảng EN thì rơi về VI, thiếu cả hai thì trả lại chính khoá
   để lỗi hiện ra trên màn hình thay vì im lặng thành chuỗi rỗng. */
export function t(k, vars){
  const table = TABLES[lang] || VI;
  let s = table[k];
  if (s === undefined) s = VI[k];
  if (s === undefined) return k;
  if (vars){
    s = String(s).replace(/\{(\w+)\}/g, (m, name) =>
      vars[name] === undefined ? m : String(vars[name]));
  }
  return s;
}

/* Chọn một trong hai chuỗi đã có sẵn theo ngôn ngữ đang dùng. */
export function pick(viText, enText){
  return lang === "en" && enText !== undefined && enText !== null ? enText : viText;
}

export function onLangChange(fn){ langListeners.push(fn); }

export function setLang(next){
  if (!LANGS.includes(next) || next === lang) return;
  lang = next;
  set("__lang", lang);
  document.documentElement.setAttribute("lang", lang);
  applyStatic();
  langListeners.forEach(f => f(lang));
}

/* Dịch phần HTML tĩnh: mọi phần tử có data-i18n / data-i18n-title. */
export function applyStatic(root){
  const scope = root || document;
  scope.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  scope.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  scope.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  scope.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = t("app.title");
}

export function initI18n(){
  document.documentElement.setAttribute("lang", lang);
  applyStatic();

  const btn = document.getElementById("btnLang");
  if (!btn) return;
  const paint = () => {
    /* Nút hiện ngôn ngữ sẽ chuyển sang, không phải ngôn ngữ đang dùng. */
    btn.textContent = lang === "vi" ? "🌐  English" : "🌐  Tiếng Việt";
    btn.title = t("btn.lang.title");
  };
  btn.onclick = () => { setLang(lang === "vi" ? "en" : "vi"); paint(); };
  paint();
}
