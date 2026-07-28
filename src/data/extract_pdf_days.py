#!/usr/bin/env python3
"""Extract Student Book sections for Days 7-21 into native app data.

This is a deterministic source conversion: it removes only running headers, printed
page numbers and line wrapping introduced by PDF layout. It does not summarise or
rewrite lesson content.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

import fitz
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[2]
PDF = ROOT / "Huy_Forum_IELTS_Marathon_21_Day_Companion_Student_Book.pdf"
ASSET_DIR = ROOT / "src" / "assets" / "pdf"

# PDF page numbers, not the printed page numbers in the Student Book.
DAYS = [
    (7,  "Đánh giá cuối tuần 1", 10, 87, 94),
    (8,  "Phát triển ý trong Task 2", 12, 96, 104),
    (9,  "Chức năng đoạn văn", 13, 105, 113),
    (10, "Ngân hàng câu chuyện", 14, 114, 122),
    (11, "Ngữ pháp trong lập luận", 15, 123, 131),
    (12, "Độ chính xác trong Task 1", 16, 132, 141),
    (13, "Góc nhìn rộng trong Part 3", 17, 142, 152),
    (14, "Đánh giá có bấm giờ", 18, 153, 161),
    (15, "Reading có bấm giờ", 20, 164, 173),
    (16, "Writing có bấm giờ", 21, 174, 181),
    (17, "Thi thử Speaking", 22, 182, 189),
    (18, "Luyện tập theo lỗi ưu tiên", 23, 190, 197),
    (19, "Một chủ đề, ba kỹ năng", 24, 198, 211),
    (20, "Thi thử IELTS", 25, 212, 227),
    (21, "Đánh giá cuối lộ trình", 26, 228, 238),
]

# Vector charts/maps do not appear in extracted text. Crop them from the original
# PDF so the native lesson keeps the exact visual information from the book.
FIGURES = [
    ("10.5", 91,  (105, 115, 490, 315), "day07-library-visits.png", "Residents visiting a public library monthly"),
    ("16.6", 135, (105, 195, 490, 395), "day12-hybrid-work.png", "Employees working remotely by sector"),
    ("16.7", 136, (100, 90,  495, 300), "day12-rivergate-map.png", "Maps of Rivergate centre in 2010 and 2026"),
    ("16.8", 136, (95,  610, 500, 735), "day12-glass-process.png", "Glass recycling process"),
    ("18.6", 157, (105, 500, 490, 705), "day14-screen-time.png", "Average daily screen time by purpose"),
    ("25.18",223, (105, 180, 490, 380), "day20-eastford-commuting.png", "Main commuting method in Eastford"),
]

LIGATURES = str.maketrans({
    "ﬀ": "ff", "ﬁ": "fi", "ﬂ": "fl", "ﬃ": "ffi", "ﬄ": "ffl",
})


def clean_page(text: str, section: int) -> str:
    lines = []
    for raw in text.translate(LIGATURES).splitlines():
        line = raw.strip()
        if not line:
            lines.append("")
            continue
        if re.fullmatch(r"\d+", line):
            continue
        if re.match(rf"SECTION\s+{section}:.*The Forum Center$", line, re.I):
            continue
        if re.match(rf"SECTION\s+{section}\s+Ngày\s+\d+", line, re.I):
            continue
        lines.append(line)
    return "\n".join(lines)


def join_pdf_wraps(text: str) -> str:
    """Join layout wraps while preserving lists, choices, labels and headings."""
    source = text.splitlines()
    out: list[str] = []
    structural = re.compile(
        r"^(?:\d+\.\d+\s|[A-G]\s+[A-Z]|[A-D]\s|\d+\s|[•✓□]|Part\s+\d|"
        r"Figure\s+[A-Z]|Task\s+\d|Lựa chọn\s+[A-Z]|Bộ\s+[A-Z]|Mức\s|Giai đoạn\s|"
        r"Câu hỏi\s|Questions?\s|You should say:|Người học\s|Nhịp học\s|Sản phẩm\s|"
        r"Mục tiêu$|Lưu ý$|Thang tự đánh giá:|Ba ưu tiên$)"
    )
    sentence_end = re.compile(r"[.!?:;”’)]$")
    for line in source:
        if not line:
            if out and out[-1] != "":
                out.append("")
            continue
        if not out or out[-1] == "" or structural.match(line):
            out.append(line)
            continue
        prev = out[-1]
        # Keep tabular/list rows separate; otherwise repair PDF line wrapping.
        if prev.endswith("-") and line[:1].islower():
            # PDF line-wrap hyphen (e.g. "evi-" + "dence").
            out[-1] = prev[:-1] + line
        elif structural.match(prev) or sentence_end.search(prev):
            out.append(line)
        else:
            out[-1] = prev + " " + line
    return "\n".join(out).strip()


def split_sections(text: str, section: int) -> list[dict[str, str]]:
    pattern = re.compile(rf"(?m)^({section}\.\d+)\s+([^\n]+)$")
    matches = list(pattern.finditer(text))
    result = []
    for idx, match in enumerate(matches):
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        body = join_pdf_wraps(text[match.end():end].strip())
        result.append({"n": match.group(1), "title": match.group(2).strip(), "text": body})
    return result


def focus_from(sections: list[dict[str, str]]) -> str:
    if not sections:
        return ""
    text = sections[0]["text"]
    chunks = [x.strip() for x in re.split(r"\n\s*\n", text) if x.strip()]
    first = re.sub(r"\s+", " ", chunks[0] if chunks else text)
    # The page header in Days 1-6 is a short focus line. Reuse the first complete
    # sentence verbatim; the full orientation remains in the first native block.
    sentence = re.match(r"^.*?[.!?](?:\s|$)", first)
    return sentence.group(0).strip() if sentence else first


def main() -> None:
    reader = PdfReader(str(PDF))
    visual_pdf = fitz.open(str(PDF))
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    figure_map: dict[str, list[dict[str, str]]] = {}
    for section_no, page_no, crop, filename, alt in FIGURES:
        pix = visual_pdf[page_no - 1].get_pixmap(
            matrix=fitz.Matrix(2.5, 2.5), clip=fitz.Rect(*crop), alpha=False)
        pix.save(str(ASSET_DIR / filename))
        figure_map.setdefault(section_no, []).append({
            "src": f"src/assets/pdf/{filename}", "alt": alt,
        })

    lessons = []
    for day, title, section, first, last in DAYS:
        pages = [clean_page(reader.pages[p - 1].extract_text() or "", section)
                 for p in range(first, last + 1)]
        sections = split_sections("\n".join(pages), section)
        if not sections:
            raise RuntimeError(f"No sections extracted for Day {day}")
        for item in sections:
            if item["n"] in figure_map:
                item["figures"] = figure_map[item["n"]]
        lesson = {
            "id": day,
            "title": f"Ngày {day:02d} — {title}",
            "focus": focus_from(sections),
            "blocks": [{"t": "source", **item, "day": day} for item in sections],
        }
        lessons.append(lesson)
        payload = json.dumps(lesson, ensure_ascii=False, indent=2)
        source = (
            "/* AUTO-GENERATED from Huy_Forum_IELTS_Marathon_21_Day_Companion_Student_Book.pdf\n"
            "   by src/data/extract_pdf_days.py. Do not hand-edit extracted lesson text. */\n"
            f"export default\n{payload}\n;\n"
        )
        Path(__file__).with_name(f"day{day}.js").write_text(source, encoding="utf-8")

    print(f"Generated day7.js-day21.js: {len(lessons)} days, "
          f"{sum(len(x['blocks']) for x in lessons)} sections, {len(FIGURES)} figures")


if __name__ == "__main__":
    main()
