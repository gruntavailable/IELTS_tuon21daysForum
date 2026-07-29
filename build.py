#!/usr/bin/env python3
"""Gộp bản module (index.html + src/) thành một file HTML chạy độc lập: rourcegoc.html

    python build.py

Chạy lại sau mỗi lần sửa trong src/ để hai bản luôn khớp nhau.
Yêu cầu: tên biến/hàm ở cấp cao nhất của các file trong src/js phải không trùng nhau,
vì khi gộp chúng nằm chung một phạm vi. Script sẽ báo lỗi nếu phát hiện trùng.
"""
import base64, mimetypes, re, sys, os

ROOT = os.path.dirname(os.path.abspath(__file__))
# Thu tu quan trong: cac bang chu va i18n/index.js phai dung truoc moi module goi t().
JS_FILES = [
    "src/js/store.js",
    "src/i18n/vi.js",
    "src/i18n/en.js",
    "src/i18n/days-en.js",
    "src/i18n/instr-en.js",
    "src/i18n/index.js",
    "src/data/dictionary.js",
    "src/js/theme.js",
    "src/js/timer.js",
    "src/js/tracker.js",
    "src/js/vocab.js",
    "src/js/backup.js",
    "src/js/highlight.js",
    "src/js/app.js",
]

def read(p):
    with open(os.path.join(ROOT, p), encoding="utf-8") as f:
        return f.read()

def strip_module_syntax(src):
    src = re.sub(r"^\s*import .*?;\s*$", "", src, flags=re.M)
    src = re.sub(r"^export (function|const|let|class)", r"\1", src, flags=re.M)
    src = re.sub(r"^export \{[^}]*\};?\s*$", "", src, flags=re.M)
    return src

def check_collisions(sources):
    seen, dupes = {}, {}
    for path, src in sources:
        names = set(re.findall(
            r"^(?:export\s+)?(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)", src, re.M))
        for n in names:
            if n in seen:
                dupes.setdefault(n, [seen[n]]).append(path)
            else:
                seen[n] = path
    return dupes

def inline_assets(src):
    """Embed generated lesson figures so rourcegoc.html remains standalone."""
    def repl(match):
        rel = match.group(1)
        path = os.path.join(ROOT, rel.replace("/", os.sep))
        with open(path, "rb") as f:
            encoded = base64.b64encode(f.read()).decode("ascii")
        mime = mimetypes.guess_type(path)[0] or "application/octet-stream"
        return f'"data:{mime};base64,{encoded}"'
    return re.sub(r'"(src/assets/pdf/[^"\n]+)"', repl, src)

def build():
    css = read("src/css/styles.css")

    # Moi day{i}.js co the khai bao vai hang dung chung (TF, YN, HEADINGS, ...)
    # truoc "export default". Chung phai duoc keo ra ngoai mang DATA, neu khong
    # se nam giua hai phan tu cua mang va lam hong cu phap.
    days, preamble, seen_decl = [], [], {}
    for i in range(1, 22):
        src = read(f"src/data/day{i}.js")
        cut = src.find("export default")
        if cut < 0:
            sys.exit(f"day{i}.js: khong tim thay 'export default'")
        head, body = src[:cut], src[cut:]

        for m in re.finditer(
                r"^(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=.*?;\s*$", head, re.M | re.S):
            name, text = m.group(1), m.group(0).rstrip()
            if seen_decl.get(name) == text:
                continue                      # da co ban giong het, dung lai
            if name in seen_decl:
                # Cung ten nhung khac noi dung: doi ten rieng cho ngay nay va
                # thay moi cho dung ten do trong than du lieu cua chinh ngay ay.
                alias = f"{name}_d{i}"
                text = re.sub(rf"^((?:const|let|var)\s+){re.escape(name)}\b",
                              rf"\1{alias}", text)
                body = re.sub(rf"\b{re.escape(name)}\b", alias, body)
                name = alias
            seen_decl[name] = text
            preamble.append(text)

        body = body.replace("export default\n", "", 1).rstrip()
        if not body.endswith(";"):
            sys.exit(f"day{i}.js: khong ket thuc bang dau ';'")
        days.append(body[:-1].rstrip())

    data_js = ("\n".join(preamble) + "\n\nconst DATA = [\n"
               + ",\n\n".join(days) + "\n];\n")
    data_js = inline_assets(data_js)

    raw = [(p, read(p)) for p in JS_FILES]
    dupes = check_collisions(raw)
    if dupes:
        print("LOI: trung ten o pham vi top-level, khong the gop:")
        for n, fs in sorted(dupes.items()):
            print(f"  {n}: {', '.join(fs)}")
        sys.exit(1)

    engine = "\n".join(strip_module_syntax(s) for _, s in raw)

    html = read("index.html")
    body = html.split("<body>", 1)[1].split('<script type="module"', 1)[0]
    head_script = html.split("<script>", 1)[1].split("</script>", 1)[0]

    out = f"""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>IELTS Marathon 21 Day — Luyện đề Ngày 1–21</title>
<style>
{css}
</style>
<script>{head_script}</script>
</head>
<body>
{body}
<script>
{data_js}
{engine}
</script>
</body>
</html>
"""
    with open(os.path.join(ROOT, "rourcegoc.html"), "w", encoding="utf-8") as f:
        f.write(out)
    print(f"Da tao rourcegoc.html ({len(out):,} bytes)")

if __name__ == "__main__":
    build()
