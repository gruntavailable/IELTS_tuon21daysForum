import { get, set } from "./store.js";

/* Theme: "dark" | "light". Defaults to the OS preference on first visit. */
function systemTheme(){
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light" : "dark";
}

let theme = get("__theme", null) || systemTheme();

function apply(){
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("btnTheme");
  if (btn) btn.textContent = theme === "dark" ? "☀️  Chế độ sáng" : "🌙  Chế độ tối";
}

export function initTheme(){
  apply();
  const btn = document.getElementById("btnTheme");
  if (btn) btn.onclick = () => {
    theme = theme === "dark" ? "light" : "dark";
    set("__theme", theme);
    apply();
  };
}
