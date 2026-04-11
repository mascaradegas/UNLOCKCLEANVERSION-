#!/usr/bin/env python3

from __future__ import annotations

import json
import re
import subprocess
import zipfile
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape


REPO_ROOT = Path(__file__).resolve().parents[1]
LESSON_MODULES_DIR = REPO_ROOT / "apps/web/src/data/lessonModules"
CONSTANTS_TS = REPO_ROOT / "packages/shared/src/constants.ts"
OUTPUT_DIR = REPO_ROOT / "docs"
OUTPUT_DOCX = OUTPUT_DIR / "word-bank-games-report.docx"


NODE_EXTRACTOR = r"""
const fs = require('fs');
const vm = require('vm');

function findLiteralBounds(src, startIndex, openChar, closeChar) {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;
  let begin = -1;

  for (let i = startIndex; i < src.length; i++) {
    const ch = src[i];
    const next = src[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (inSingle) {
      if (!escaped && ch === "'") inSingle = false;
      escaped = !escaped && ch === '\\';
      continue;
    }

    if (inDouble) {
      if (!escaped && ch === '"') inDouble = false;
      escaped = !escaped && ch === '\\';
      continue;
    }

    if (inTemplate) {
      if (!escaped && ch === '`') inTemplate = false;
      escaped = !escaped && ch === '\\';
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      i++;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i++;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      escaped = false;
      continue;
    }

    if (ch === '"') {
      inDouble = true;
      escaped = false;
      continue;
    }

    if (ch === '`') {
      inTemplate = true;
      escaped = false;
      continue;
    }

    if (ch === openChar) {
      if (depth === 0) begin = i;
      depth++;
      continue;
    }

    if (ch === closeChar) {
      depth--;
      if (depth === 0) {
        return [begin, i];
      }
      continue;
    }
  }

  throw new Error('Could not find matching literal bounds.');
}

function extractExportLiteral(filePath, exportName, openChar, closeChar) {
  const src = fs.readFileSync(filePath, 'utf8');
  const marker = `export const ${exportName}`;
  const markerIndex = src.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error(`Export ${exportName} not found in ${filePath}`);
  }

  const equalsIndex = src.indexOf('=', markerIndex + marker.length);
  if (equalsIndex === -1) {
    throw new Error(`Assignment for ${exportName} not found.`);
  }

  const searchStart = equalsIndex + 1;
  const openIndex = src.indexOf(openChar, searchStart);
  if (openIndex === -1) {
    throw new Error(`Opening ${openChar} for ${exportName} not found.`);
  }

  const [begin, end] = findLiteralBounds(src, openIndex, openChar, closeChar);
  const literal = src.slice(begin, end + 1);
  const context = {};
  vm.createContext(context);
  new vm.Script(`globalThis.__result = (${literal});`).runInContext(context, { timeout: 1000 });
  process.stdout.write(JSON.stringify(context.__result));
}

const filePath = process.argv[1];
const exportName = process.argv[2];
const openChar = process.argv[3];
const closeChar = process.argv[4];
extractExportLiteral(filePath, exportName, openChar, closeChar);
"""


def extract_export_literal(file_path: Path, export_name: str, open_char: str, close_char: str):
    result = subprocess.run(
        [
            "node",
            "-e",
            NODE_EXTRACTOR,
            str(file_path),
            export_name,
            open_char,
            close_char,
        ],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    return json.loads(result.stdout)


def load_lessons() -> list[dict]:
    module_files = sorted(
        LESSON_MODULES_DIR.glob("module*.ts"),
        key=lambda path: int(re.search(r"(\d+)", path.stem).group(1)),
    )

    lessons: list[dict] = []
    for module_file in module_files:
        export_name = f"{module_file.stem}Lessons"
        lessons.extend(extract_export_literal(module_file, export_name, "[", "]"))

    lessons.sort(key=lambda lesson: (lesson.get("module", 0), lesson.get("order", 0), lesson.get("title", "")))
    return lessons


def strip_html(value: str) -> str:
    return re.sub(r"<[^>]*>", "", value or "")


def get_display_answer(value: str) -> str:
    return strip_html((value or "").split("/")[0]).strip()


def split_answers(value: str) -> list[str]:
    return [strip_html(part).strip() for part in re.split(r"\s*/\s*", value or "") if strip_html(part).strip()]


def normalize_answer(value: str) -> str:
    value = strip_html(value or "")
    value = value.lower().strip()
    value = re.sub(r"[?.!,;:'\"…\-–—()]", "", value)
    value = re.sub(r"\s+", " ", value)
    return value


def get_stack_tokens(value: str) -> list[str]:
    return [token for token in get_display_answer(value).lower().split() if token]


def lesson_duplicate_groups(lesson: dict, key: str) -> dict[str, list[int]]:
    groups: dict[str, list[int]] = defaultdict(list)
    for index, item in enumerate(lesson.get("vocabulary", []), start=1):
        if key == "display":
            group_key = get_display_answer(item.get("en", ""))
        elif key == "en":
            group_key = strip_html(item.get("en", "")).strip()
        else:
            raise ValueError(f"Unsupported duplicate group key: {key}")
        if group_key:
            groups[group_key].append(index)
    return {group_key: indexes for group_key, indexes in groups.items() if len(indexes) > 1}


def format_level_distribution(vocab: list[dict]) -> str:
    level_counts = Counter(item.get("level") for item in vocab)
    numeric_levels = sorted(level for level in level_counts if isinstance(level, (int, float)))
    parts = [f"L{level}={level_counts[level]}" for level in numeric_levels]
    missing = level_counts.get(None, 0)
    if missing:
        parts.append(f"missing={missing}")
    return " | ".join(parts) if parts else "no level data"


def format_duplicate_group_text(groups: dict[str, list[int]], limit: int = 6) -> str:
    if not groups:
        return "none"
    preview = []
    for key, indexes in list(sorted(groups.items(), key=lambda item: (-len(item[1]), item[0])))[:limit]:
        preview.append(f"{key} [items {', '.join(str(index) for index in indexes)}]")
    if len(groups) > limit:
        preview.append(f"+{len(groups) - limit} more groups")
    return " | ".join(preview)


def build_item_flags(item: dict, display_answer: str, display_groups: dict[str, list[int]]) -> list[str]:
    flags = []
    raw_en = item.get("en", "")
    answers = split_answers(raw_en)
    if len(answers) > 1:
        flags.append("multi-answer")
    if raw_en != strip_html(raw_en):
        flags.append("html")
    if display_answer and display_answer in display_groups:
        flags.append("duplicate-display")
    if not item.get("emoji"):
        flags.append("missing-emoji")
    if item.get("level") is None:
        flags.append("missing-level")
    if len(get_stack_tokens(raw_en)) >= 4:
        flags.append("long-stack-phrase")
    return flags


def make_run(text: str, *, bold: bool = False, size: int | None = None, color: str | None = None) -> str:
    text = escape(text)
    rpr = []
    if bold:
      rpr.append("<w:b/>")
    if size is not None:
      rpr.append(f'<w:sz w:val="{size}"/><w:szCs w:val="{size}"/>')
    if color:
      rpr.append(f'<w:color w:val="{color}"/>')
    rpr_xml = f"<w:rPr>{''.join(rpr)}</w:rPr>" if rpr else ""
    return f'<w:r>{rpr_xml}<w:t xml:space="preserve">{text}</w:t></w:r>'


def make_paragraph(
    text: str,
    *,
    bold: bool = False,
    size: int | None = None,
    color: str | None = None,
    spacing_before: int | None = None,
    spacing_after: int | None = 120,
    page_break_before: bool = False,
    center: bool = False,
) -> str:
    ppr = []
    if spacing_before is not None or spacing_after is not None:
        before = spacing_before if spacing_before is not None else 0
        after = spacing_after if spacing_after is not None else 0
        ppr.append(f'<w:spacing w:before="{before}" w:after="{after}"/>')
    if center:
        ppr.append('<w:jc w:val="center"/>')
    if page_break_before:
        ppr.append("<w:pageBreakBefore/>")
    ppr_xml = f"<w:pPr>{''.join(ppr)}</w:pPr>" if ppr else ""
    return f"<w:p>{ppr_xml}{make_run(text, bold=bold, size=size, color=color)}</w:p>"


def make_page_break() -> str:
    return "<w:p><w:r><w:br w:type=\"page\"/></w:r></w:p>"


def build_document_xml(paragraphs: list[str]) -> str:
    body = "".join(paragraphs) + (
        "<w:sectPr>"
        "<w:pgSz w:w=\"12240\" w:h=\"15840\"/>"
        "<w:pgMar w:top=\"1080\" w:right=\"1080\" w:bottom=\"1080\" w:left=\"1080\" w:header=\"720\" w:footer=\"720\" w:gutter=\"0\"/>"
        "</w:sectPr>"
    )
    return (
        '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'
        '<w:document '
        'xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" '
        'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
        'xmlns:o="urn:schemas-microsoft-com:office:office" '
        'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
        'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" '
        'xmlns:v="urn:schemas-microsoft-com:vml" '
        'xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" '
        'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
        'xmlns:w10="urn:schemas-microsoft-com:office:word" '
        'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
        'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
        'xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" '
        'xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" '
        'xmlns:wne="http://schemas.microsoft.com/office/2006/wordml" '
        'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" '
        'mc:Ignorable="w14 wp14">'
        f"<w:body>{body}</w:body>"
        "</w:document>"
    )


def write_docx(document_xml: str, output_path: Path) -> None:
    created = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>
"""
    root_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>
"""
    document_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>
"""
    core_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>UNLOCK 2026 Word Bank Games Report</dc:title>
  <dc:creator>Codex</dc:creator>
  <cp:lastModifiedBy>Codex</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">{created}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">{created}</dcterms:modified>
</cp:coreProperties>
"""
    app_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>Codex</Application>
</Properties>
"""

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr("[Content_Types].xml", content_types)
        zf.writestr("_rels/.rels", root_rels)
        zf.writestr("word/document.xml", document_xml)
        zf.writestr("word/_rels/document.xml.rels", document_rels)
        zf.writestr("docProps/core.xml", core_xml)
        zf.writestr("docProps/app.xml", app_xml)


def lesson_warning_parts(lesson: dict) -> list[str]:
    vocab = lesson.get("vocabulary", [])
    missing_level = sum(1 for item in vocab if item.get("level") is None)
    missing_emoji = sum(1 for item in vocab if not item.get("emoji"))
    en_values = [item.get("en", "").strip() for item in vocab if item.get("en")]
    display_values = [get_display_answer(item.get("en", "")) for item in vocab if item.get("en")]
    duplicate_en = len(en_values) - len(set(en_values))
    duplicate_display = len(display_values) - len(set(display_values))

    warnings = []
    if duplicate_en:
        warnings.append(f"duplicate en: {duplicate_en}")
    if duplicate_display:
        warnings.append(f"duplicate display answer: {duplicate_display}")
    if missing_level:
        warnings.append(f"missing level: {missing_level}")
    if missing_emoji:
        warnings.append(f"missing emoji: {missing_emoji}")
    return warnings


def build_report(lessons: list[dict], module_names: dict[str, str]) -> str:
    lessons = sorted(lessons, key=lambda item: (item.get("module", 999), item.get("order", 999), item.get("title", "")))
    total_vocab = sum(len(lesson.get("vocabulary", [])) for lesson in lessons)
    lessons_with_word_drop_risk = 0
    lessons_with_missing_level = 0
    lessons_with_duplicate_display = 0
    total_multi_answer_entries = 0
    total_html_entries = 0
    total_missing_emoji = 0
    total_display_duplicates = 0
    module_lesson_map: dict[int, list[dict]] = defaultdict(list)
    global_display_groups: dict[str, list[str]] = defaultdict(list)
    global_item_rows: list[dict] = []

    lesson_metrics: dict[str, dict] = {}
    for lesson in lessons:
        vocab = lesson.get("vocabulary", [])
        display_groups = lesson_duplicate_groups(lesson, "display")
        raw_en_groups = lesson_duplicate_groups(lesson, "en")
        unique_en = len({strip_html(item.get("en", "")).strip() for item in vocab if item.get("en")})
        unique_display = len({get_display_answer(item.get("en", "")) for item in vocab if item.get("en")})
        missing_level = sum(1 for item in vocab if item.get("level") is None)
        missing_emoji = sum(1 for item in vocab if not item.get("emoji"))
        multi_answer = sum(1 for item in vocab if len(split_answers(item.get("en", ""))) > 1)
        html_entries = sum(1 for item in vocab if item.get("en", "") != strip_html(item.get("en", "")))
        token_lengths = [len(get_stack_tokens(item.get("en", ""))) for item in vocab if get_display_answer(item.get("en", ""))]
        one_word = sum(1 for length in token_lengths if length == 1)
        two_word = sum(1 for length in token_lengths if length == 2)
        long_phrase = sum(1 for length in token_lengths if length >= 3)
        duplicate_display = len(vocab) - unique_display
        duplicate_en = len(vocab) - unique_en
        if unique_display < 3:
            lessons_with_word_drop_risk += 1
        if missing_level:
            lessons_with_missing_level += 1
        if duplicate_display:
            lessons_with_duplicate_display += 1
        total_multi_answer_entries += multi_answer
        total_html_entries += html_entries
        total_missing_emoji += missing_emoji
        total_display_duplicates += duplicate_display
        module_lesson_map[int(lesson.get("module", 0))].append(lesson)
        lesson_metrics[lesson["id"]] = {
            "vocab_count": len(vocab),
            "unique_en": unique_en,
            "unique_display": unique_display,
            "missing_level": missing_level,
            "missing_emoji": missing_emoji,
            "multi_answer": multi_answer,
            "html_entries": html_entries,
            "duplicate_en": duplicate_en,
            "duplicate_display": duplicate_display,
            "one_word": one_word,
            "two_word": two_word,
            "long_phrase": long_phrase,
            "level_distribution": format_level_distribution(vocab),
            "display_groups": display_groups,
            "raw_en_groups": raw_en_groups,
            "word_drop_ready": unique_display >= 3,
            "word_match_pairs": min(5, unique_display),
            "word_stack_usable": min(10, len(vocab)),
        }

        for index, item in enumerate(vocab, start=1):
            display_answer = get_display_answer(item.get("en", ""))
            global_display_groups[display_answer].append(f"{lesson.get('id')}#{index}")
            global_item_rows.append({
                "lesson_id": lesson.get("id"),
                "lesson_title": lesson.get("title", ""),
                "module": lesson.get("module", 0),
                "order": lesson.get("order", 0),
                "index": index,
                "emoji": item.get("emoji", ""),
                "pt": item.get("pt", ""),
                "en": item.get("en", ""),
                "display": display_answer,
                "tokens": get_stack_tokens(item.get("en", "")),
            })

    global_display_collision_groups = {
        key: refs for key, refs in global_display_groups.items() if key and len(refs) > 1
    }

    paragraphs: list[str] = []
    paragraphs.append(make_paragraph("UNLOCK 2026 - Word Bank Games Report", bold=True, size=34, color="1F4E79", spacing_after=220, center=True))
    paragraphs.append(make_paragraph(
        f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} | Lessons: {len(lessons)} | Vocabulary entries: {total_vocab}",
        size=20,
        color="555555",
        spacing_after=220,
        center=True,
    ))

    paragraphs.append(make_paragraph("Vocabulary Schema", bold=True, size=28, color="1F4E79", spacing_before=120, spacing_after=120))
    paragraphs.append(make_paragraph("Shared type: emoji (string), pt (Portuguese prompt), en (English answer string), level (optional difficulty hint).", size=20))
    paragraphs.append(make_paragraph("Normalization rule used by the games: getDisplayAnswer(en) strips HTML and keeps only the first slash-separated English variant.", size=20))

    paragraphs.append(make_paragraph("Game Property Usage", bold=True, size=28, color="1F4E79", spacing_before=180, spacing_after=120))
    paragraphs.append(make_paragraph("Word Drop: uses emoji on the falling block, pt in the block label and translation box, en for answer matching and option generation, and ignores level for gameplay logic.", size=20))
    paragraphs.append(make_paragraph("Word Match: uses pt on the left side, getDisplayAnswer(en) on the right side, emoji as a left-side visual cue, caps each wave to 5 pairs, and ignores level.", size=20))
    paragraphs.append(make_paragraph("Word Stack: uses pt as the prompt, tokenizes getDisplayAnswer(en) into the word pool, uses emoji only for tracked stats, caps the run to 10 vocabulary items, and ignores level.", size=20))

    paragraphs.append(make_paragraph("Dataset Summary", bold=True, size=28, color="1F4E79", spacing_before=180, spacing_after=120))
    paragraphs.append(make_paragraph(f"Lessons with Word Drop risk (< 3 unique display answers): {lessons_with_word_drop_risk}", size=20))
    paragraphs.append(make_paragraph(f"Lessons with duplicate display answers after normalization: {lessons_with_duplicate_display}", size=20))
    paragraphs.append(make_paragraph(f"Lessons with missing level values: {lessons_with_missing_level}", size=20))
    paragraphs.append(make_paragraph(f"Vocabulary entries with multiple valid answers (slash variants): {total_multi_answer_entries}", size=20))
    paragraphs.append(make_paragraph(f"Vocabulary entries containing HTML in EN: {total_html_entries}", size=20))
    paragraphs.append(make_paragraph(f"Vocabulary entries missing emoji: {total_missing_emoji}", size=20))
    paragraphs.append(make_paragraph(f"Collapsed display-answer duplicates removed from game pools: {total_display_duplicates}", size=20))
    paragraphs.append(make_paragraph("Interpretation: duplicate display answers reduce the effective pair count for Word Match and the wrong-option pool for Word Drop.", size=20))
    paragraphs.append(make_paragraph("Interpretation: Word Stack uses the display answer tokens exactly as shown, so punctuation and phrase length directly affect tap complexity.", size=20))

    paragraphs.append(make_paragraph("Global Collision Index", bold=True, size=28, color="1F4E79", spacing_before=180, spacing_after=120))
    paragraphs.append(make_paragraph(
        f"Display answers reused across multiple vocabulary items: {len(global_display_collision_groups)} groups",
        size=20,
    ))
    paragraphs.append(make_paragraph(
        format_duplicate_group_text(global_display_collision_groups, limit=12),
        size=18,
        color="555555",
    ))

    current_module = None
    for lesson in lessons:
        module_number = lesson.get("module", 0)
        if module_number != current_module:
            current_module = module_number
            if paragraphs:
                paragraphs.append(make_page_break())
            module_label = module_names.get(str(module_number), f"Module {module_number}")
            paragraphs.append(make_paragraph(f"Module {module_number} - {module_label}", bold=True, size=30, color="1F4E79", spacing_after=140))
            module_lessons = module_lesson_map[module_number]
            module_vocab = sum(len(item.get("vocabulary", [])) for item in module_lessons)
            module_word_drop_risk = sum(1 for item in module_lessons if not lesson_metrics[item["id"]]["word_drop_ready"])
            module_multi_answer = sum(lesson_metrics[item["id"]]["multi_answer"] for item in module_lessons)
            module_duplicate_display = sum(lesson_metrics[item["id"]]["duplicate_display"] for item in module_lessons)
            paragraphs.append(make_paragraph(
                f"Module summary: lessons={len(module_lessons)} | vocab={module_vocab} | Word Drop risk lessons={module_word_drop_risk} | multi-answer entries={module_multi_answer} | collapsed display duplicates={module_duplicate_display}",
                size=20,
                color="555555",
                spacing_after=120,
            ))

        metrics = lesson_metrics[lesson["id"]]
        warnings = lesson_warning_parts(lesson)
        warning_text = ", ".join(warnings) if warnings else "none"

        paragraphs.append(make_paragraph(
            f"Lesson {lesson.get('order', '-')}: {lesson.get('title', '')}",
            bold=True,
            size=24,
            color="333333",
            spacing_before=120,
            spacing_after=60,
        ))
        paragraphs.append(make_paragraph(
            f"ID: {lesson.get('id')} | Description: {lesson.get('description', '')}",
            size=20,
            color="555555",
        ))
        paragraphs.append(make_paragraph(
            "Vocabulary stats: "
            f"count={metrics['vocab_count']} | unique en={metrics['unique_en']} | "
            f"unique display={metrics['unique_display']} | missing level={metrics['missing_level']} | "
            f"missing emoji={metrics['missing_emoji']}",
            size=20,
        ))
        paragraphs.append(make_paragraph(
            "Answer shape: "
            f"multi-answer={metrics['multi_answer']} | html in en={metrics['html_entries']} | "
            f"duplicate raw en={metrics['duplicate_en']} | duplicate display={metrics['duplicate_display']} | "
            f"1-word display={metrics['one_word']} | 2-word display={metrics['two_word']} | 3+-word display={metrics['long_phrase']}",
            size=20,
        ))
        paragraphs.append(make_paragraph(
            f"Level distribution: {metrics['level_distribution']}",
            size=20,
        ))
        paragraphs.append(make_paragraph(
            "Game fit: "
            f"Word Drop ready={'yes' if metrics['word_drop_ready'] else 'no'} | "
            f"Word Match usable pairs={metrics['word_match_pairs']} | "
            f"Word Stack usable items={metrics['word_stack_usable']} | "
            f"Warnings={warning_text}",
            size=20,
        ))
        paragraphs.append(make_paragraph(
            f"Duplicate display groups: {format_duplicate_group_text(metrics['display_groups'])}",
            size=18,
            color="555555",
        ))
        paragraphs.append(make_paragraph(
            f"Duplicate raw EN groups: {format_duplicate_group_text(metrics['raw_en_groups'])}",
            size=18,
            color="555555",
        ))
        paragraphs.append(make_paragraph("Expanded word bank:", bold=True, size=20, spacing_after=60))

        for index, item in enumerate(lesson.get("vocabulary", []), start=1):
            emoji = item.get("emoji", "")
            pt = item.get("pt", "")
            en = item.get("en", "")
            level = item.get("level", "n/a")
            display_answer = get_display_answer(en)
            answers = split_answers(en)
            normalized_answers = [normalize_answer(answer) for answer in answers]
            stack_tokens = get_stack_tokens(en)
            item_flags = build_item_flags(item, display_answer, metrics["display_groups"])
            global_refs = global_display_collision_groups.get(display_answer, [])
            same_display_elsewhere = [ref for ref in global_refs if ref != f"{lesson.get('id')}#{index}"]

            paragraphs.append(make_paragraph(
                f"{index:02d}. {emoji} | PT: {pt} | EN raw: {en} | level: {level}",
                size=18,
                spacing_after=40,
            ))
            paragraphs.append(make_paragraph(
                f"Display answer used in games: {display_answer or '[empty]'} | valid answers={len(answers)} | Word Stack tokens={len(stack_tokens)}",
                size=18,
                color="555555",
                spacing_after=20,
            ))
            paragraphs.append(make_paragraph(
                f"Variants: {' | '.join(answers) if answers else '[none]'}",
                size=18,
                color="555555",
                spacing_after=20,
            ))
            paragraphs.append(make_paragraph(
                f"Normalized variants for matching: {' | '.join(normalized_answers) if normalized_answers else '[none]'}",
                size=18,
                color="555555",
                spacing_after=20,
            ))
            paragraphs.append(make_paragraph(
                f"Word Stack token pool: {' | '.join(stack_tokens) if stack_tokens else '[none]'}",
                size=18,
                color="555555",
                spacing_after=20,
            ))
            paragraphs.append(make_paragraph(
                "Game surfaces: "
                f"Word Drop option='{display_answer or '[empty]'}' | "
                f"Word Match right-card='{display_answer or '[empty]'}' | "
                f"Word Stack target='{display_answer or '[empty]'}'",
                size=18,
                color="555555",
                spacing_after=20,
            ))
            paragraphs.append(make_paragraph(
                f"Flags: {', '.join(item_flags) if item_flags else 'none'} | reused display elsewhere: {', '.join(same_display_elsewhere) if same_display_elsewhere else 'no'}",
                size=18,
                color="555555",
                spacing_after=40,
            ))

    return build_document_xml(paragraphs)


def main() -> None:
    lessons = load_lessons()
    module_names = extract_export_literal(CONSTANTS_TS, "MODULE_NAMES", "{", "}")
    document_xml = build_report(lessons, module_names)
    write_docx(document_xml, OUTPUT_DOCX)
    print(OUTPUT_DOCX)


if __name__ == "__main__":
    main()
