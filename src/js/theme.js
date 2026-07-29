import { get, set } from "./store.js";
import { t, onLangChange } from "../i18n/index.js";

/* Theme: "dark" | "light". Defaults to the OS preference on first visit. */
function systemTheme(){
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light" : "dark";
}

let theme = get("__theme", null) || systemTheme();

function apply(){
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("btnTheme");
  /* the button offers the theme you would switch TO, not the one in use */
  if (btn) btn.textContent = theme === "dark" ? t("btn.theme.toLight") : t("btn.theme.toDark");
}

export function initTheme(){
  apply();
  onLangChange(apply);
  const btn = document.getElementById("btnTheme");
  if (btn) btn.onclick = () => {
    theme = theme === "dark" ? "light" : "dark";
    set("__theme", theme);
    apply();
  };
}
