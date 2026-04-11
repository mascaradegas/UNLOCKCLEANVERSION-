import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const lessonModulesDir = path.join(repoRoot, 'apps/web/src/data/lessonModules');

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

function readPropertyName(src, startIndex) {
  const ch = src[startIndex];
  if (/[A-Za-z_$]/.test(ch)) {
    let end = startIndex + 1;
    while (end < src.length && /[A-Za-z0-9_$]/.test(src[end])) end += 1;
    return { name: src.slice(startIndex, end), end };
  }

  if (ch === '\'' || ch === '"') {
    let end = startIndex + 1;
    let escaped = false;
    while (end < src.length) {
      const current = src[end];
      if (!escaped && current === ch) break;
      escaped = !escaped && current === '\\';
      end += 1;
    }
    return { name: src.slice(startIndex + 1, end), end: end + 1 };
  }

  return null;
}

function findDuplicateTopLevelKeys(objectLiteral) {
  const counts = new Map();
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  for (let i = 0; i < objectLiteral.length; i += 1) {
    const ch = objectLiteral[i];
    const next = objectLiteral[i + 1];

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

    if (ch === '{' || ch === '[' || ch === '(') {
      depth += 1;
      continue;
    }

    if (ch === '}' || ch === ']' || ch === ')') {
      depth -= 1;
      continue;
    }

    if (depth !== 1) continue;
    if (!/[A-Za-z_$'"]/.test(ch)) continue;

    const property = readPropertyName(objectLiteral, i);
    if (!property) continue;

    let cursor = property.end;
    while (cursor < objectLiteral.length && /\s/.test(objectLiteral[cursor])) cursor += 1;

    if (objectLiteral[cursor] === ':') {
      counts.set(property.name, (counts.get(property.name) || 0) + 1);
      i = property.end - 1;
    }
  }

  return [...counts.entries()].filter(([, count]) => count > 1).map(([name]) => name);
}

function stripHtml(value) {
  return (value || '').replace(/<[^>]*>/g, '');
}

function getDisplayAnswer(value) {
  return stripHtml((value || '').split(/\s*\/\s*/)[0]).trim();
}

function addIssue(target, message) {
  target.push(message);
}

function getLessonModuleFiles() {
  if (!fs.existsSync(lessonModulesDir)) {
    throw new Error(`Lesson modules directory not found: ${lessonModulesDir}`);
  }

  return fs.readdirSync(lessonModulesDir)
    .filter((fileName) => /^module\d+\.ts$/.test(fileName))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

function loadLessonsFromModuleFile(fileName) {
  const filePath = path.join(lessonModulesDir, fileName);
  const src = fs.readFileSync(filePath, 'utf8');
  const exportMatch = src.match(/export const (\w+)\s*=/);

  if (!exportMatch) {
    throw new Error(`Could not find lesson export in ${path.relative(repoRoot, filePath)}`);
  }

  const lessonsLiteral = extractExportLiteral(src, exportMatch[1], '[', ']');
  const lessons = evaluateLiteral(lessonsLiteral);
  const lessonSources = splitTopLevelObjects(lessonsLiteral);

  if (!Array.isArray(lessons)) {
    throw new Error(`${path.relative(repoRoot, filePath)} did not evaluate to an array.`);
  }

  return { filePath, lessons, lessonSources };
}

function main() {
  const errors = [];
  const warnings = [];
  const moduleFiles = getLessonModuleFiles();
  const moduleResults = moduleFiles.map(loadLessonsFromModuleFile);
  const lessons = moduleResults.flatMap((result) => result.lessons);

  const seenIds = new Set();
  const seenModuleOrder = new Map();

  moduleResults.forEach(({ filePath, lessons: moduleLessons, lessonSources }) => {
    if (lessonSources.length !== moduleLessons.length) {
      addIssue(
        errors,
        `Could not map lesson source objects reliably in ${path.relative(repoRoot, filePath)}. Expected ${moduleLessons.length}, found ${lessonSources.length}.`,
      );
    }

    moduleLessons.forEach((lesson, index) => {
      const label = `${lesson.id || `index-${index}`}`;
      const rawObject = lessonSources[index] || '';
      const duplicateKeys = rawObject ? findDuplicateTopLevelKeys(rawObject) : [];

      for (const key of duplicateKeys) {
        addIssue(errors, `[${label}] duplicate top-level key "${key}"`);
      }

      for (const field of ['id', 'title', 'emoji', 'description']) {
        if (!lesson[field] || typeof lesson[field] !== 'string') {
          addIssue(errors, `[${label}] missing or invalid field "${field}"`);
        }
      }

      if (!Number.isInteger(lesson.module) || !Number.isInteger(lesson.order)) {
        addIssue(errors, `[${label}] invalid module/order`);
      }

      if (!Array.isArray(lesson.slides) || lesson.slides.length === 0) {
        addIssue(errors, `[${label}] missing slides`);
      }

      if (!Array.isArray(lesson.vocabulary) || lesson.vocabulary.length === 0) {
        addIssue(errors, `[${label}] missing vocabulary`);
      }

      if (seenIds.has(lesson.id)) {
        addIssue(errors, `[${label}] duplicate lesson id`);
      }
      seenIds.add(lesson.id);

      const moduleOrderKey = `${lesson.module}:${lesson.order}`;
      if (seenModuleOrder.has(moduleOrderKey)) {
        addIssue(warnings, `[${label}] duplicate module/order with ${seenModuleOrder.get(moduleOrderKey)}`);
      } else {
        seenModuleOrder.set(moduleOrderKey, label);
      }

      const displayAnswers = lesson.vocabulary.map(item => getDisplayAnswer(item.en)).filter(Boolean);
      const rawAnswers = lesson.vocabulary.map(item => stripHtml(item.en).trim()).filter(Boolean);
      const uniqueDisplay = new Set(displayAnswers);
      const uniqueRaw = new Set(rawAnswers);

      if (uniqueDisplay.size < 3) {
        addIssue(warnings, `[${label}] low game variety: only ${uniqueDisplay.size} unique display answers`);
      }

      if (uniqueDisplay.size !== displayAnswers.length) {
        addIssue(warnings, `[${label}] duplicate display answers collapse game pools (${displayAnswers.length - uniqueDisplay.size} collisions)`);
      }

      if (uniqueRaw.size !== rawAnswers.length) {
        addIssue(warnings, `[${label}] duplicate raw English answers (${rawAnswers.length - uniqueRaw.size} collisions)`);
      }

      lesson.vocabulary.forEach((item, vocabIndex) => {
        const vocabLabel = `[${label}#${vocabIndex + 1}]`;
        if (!item.emoji) addIssue(errors, `${vocabLabel} missing emoji`);
        if (!item.pt) addIssue(errors, `${vocabLabel} missing pt`);
        if (!item.en) addIssue(errors, `${vocabLabel} missing en`);
        if (item.level === undefined || item.level === null) {
          addIssue(warnings, `${vocabLabel} missing level`);
        }
      });
    });
  });

  console.log(`Validated ${lessons.length} lessons from ${moduleFiles.length} module files in ${path.relative(repoRoot, lessonModulesDir)}`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log('\nErrors');
    for (const error of errors) console.log(`- ${error}`);
  }

  if (warnings.length > 0) {
    console.log('\nWarnings');
    for (const warning of warnings.slice(0, 40)) console.log(`- ${warning}`);
    if (warnings.length > 40) {
      console.log(`- ...and ${warnings.length - 40} more warnings`);
    }
  }

  if (errors.length > 0) {
    process.exitCode = 1;
  }
}

main();
