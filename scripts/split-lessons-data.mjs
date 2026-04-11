import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const lessonsPath = path.join(repoRoot, 'apps/web/src/data/lessons.ts');
const outputDir = path.join(repoRoot, 'apps/web/src/data/lessonModules');
const summariesPath = path.join(repoRoot, 'apps/web/src/data/lessonSummaries.ts');

function findLiteralBounds(src, startIndex, openChar, closeChar) {
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;
  let begin = -1;

  for (let i = startIndex; i < src.length; i += 1) {
    const ch = src[i];
    const next = src[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inSingle) {
      if (!escaped && ch === '\'') inSingle = false;
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
      i += 1;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i += 1;
      continue;
    }

    if (ch === '\'') {
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
      depth += 1;
      continue;
    }

    if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return [begin, i];
      continue;
    }
  }

  throw new Error(`Could not find matching literal bounds for ${openChar}${closeChar}`);
}

function extractExportLiteral(src, exportName, openChar, closeChar) {
  const marker = `export const ${exportName}`;
  const markerIndex = src.indexOf(marker);
  if (markerIndex === -1) throw new Error(`Export ${exportName} not found.`);

  const equalsIndex = src.indexOf('=', markerIndex + marker.length);
  if (equalsIndex === -1) throw new Error(`Assignment for ${exportName} not found.`);

  const openIndex = src.indexOf(openChar, equalsIndex + 1);
  if (openIndex === -1) throw new Error(`Opening ${openChar} for ${exportName} not found.`);

  const [begin, end] = findLiteralBounds(src, openIndex, openChar, closeChar);
  return src.slice(begin, end + 1);
}

function evaluateLiteral(literal) {
  const context = {};
  vm.createContext(context);
  new vm.Script(`globalThis.__result = (${literal});`).runInContext(context, { timeout: 1000 });
  return context.__result;
}

function splitTopLevelObjects(arrayLiteral) {
  const objects = [];
  let depth = 0;
  let objectStart = -1;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  for (let i = 0; i < arrayLiteral.length; i += 1) {
    const ch = arrayLiteral[i];
    const next = arrayLiteral[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i += 1;
      }
      continue;
    }

    if (inSingle) {
      if (!escaped && ch === '\'') inSingle = false;
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
      i += 1;
      continue;
    }

    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i += 1;
      continue;
    }

    if (ch === '\'') {
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

    if (ch === '{') {
      depth += 1;
      if (depth === 1) objectStart = i;
      continue;
    }

    if (ch === '}') {
      if (depth === 1 && objectStart >= 0) {
        objects.push(arrayLiteral.slice(objectStart, i + 1));
        objectStart = -1;
      }
      depth -= 1;
    }
  }

  return objects;
}

function writeModuleFile(moduleNumber, lessons) {
  const filePath = path.join(outputDir, `module${moduleNumber}.ts`);
  const objects = lessons.map((entry) => entry.source.trim());
  const content = `import type { Lesson } from '@unlock2026/shared';\n\nexport const module${moduleNumber}Lessons = [\n${objects.map((object) => `  ${object.replace(/\n/g, '\n  ')}`).join(',\n\n')}\n] as Lesson[];\n`;
  fs.writeFileSync(filePath, content);
}

function writeSummariesFile(lessons) {
  const summaries = lessons
    .map((lesson) => ({
      id: lesson.value.id,
      title: lesson.value.title,
      emoji: lesson.value.emoji,
      description: lesson.value.description,
      module: lesson.value.module,
      order: lesson.value.order,
      vocabularyCount: Array.isArray(lesson.value.vocabulary) ? lesson.value.vocabulary.length : 0,
    }))
    .sort((a, b) => a.module - b.module || a.order - b.order || a.title.localeCompare(b.title));

  const content = `import type { Lesson } from '@unlock2026/shared';\n\nexport type LessonSummary = Pick<Lesson, 'id' | 'title' | 'emoji' | 'description' | 'module' | 'order'> & {\n  vocabularyCount: number;\n};\n\nexport const LESSON_SUMMARIES: LessonSummary[] = ${JSON.stringify(summaries, null, 2)};\n`;
  fs.writeFileSync(summariesPath, content);
}

function main() {
  const src = fs.readFileSync(lessonsPath, 'utf8');
  const lessonsLiteral = extractExportLiteral(src, 'LESSONS', '[', ']');
  const lessonValues = evaluateLiteral(lessonsLiteral);
  const lessonSources = splitTopLevelObjects(lessonsLiteral);

  if (!Array.isArray(lessonValues) || lessonValues.length !== lessonSources.length) {
    throw new Error('Failed to align lesson source with evaluated lessons.');
  }

  const lessons = lessonValues.map((value, index) => ({ value, source: lessonSources[index] }));
  const moduleMap = new Map();

  for (const lesson of lessons) {
    const moduleNumber = lesson.value.module;
    if (!moduleMap.has(moduleNumber)) moduleMap.set(moduleNumber, []);
    moduleMap.get(moduleNumber).push(lesson);
  }

  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.mkdirSync(outputDir, { recursive: true });

  for (const moduleNumber of [...moduleMap.keys()].sort((a, b) => a - b)) {
    const moduleLessons = moduleMap.get(moduleNumber)
      .sort((a, b) => a.value.order - b.value.order || a.value.title.localeCompare(b.value.title));
    writeModuleFile(moduleNumber, moduleLessons);
  }

  writeSummariesFile(lessons);
  console.log(`Generated ${moduleMap.size} module files and lesson summaries.`);
}

main();
