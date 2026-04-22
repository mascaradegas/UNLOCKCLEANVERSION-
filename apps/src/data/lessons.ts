import { MODULE_NAMES } from '@unlock2026/shared';
import type { Lesson, VocabularyItem } from '@unlock2026/shared';
import { LESSON_SUMMARIES, type LessonSummary } from './lessonSummaries';

type ModuleSummary = {
  number: number;
  name: string;
  lessons: LessonSummary[];
};

const moduleLoaders: Record<number, () => Promise<Lesson[]>> = {
  1: () => import('./lessonModules/module1').then((module) => module.module1Lessons),
  2: () => import('./lessonModules/module2').then((module) => module.module2Lessons),
  3: () => import('./lessonModules/module3').then((module) => module.module3Lessons),
  4: () => import('./lessonModules/module4').then((module) => module.module4Lessons),
  5: () => import('./lessonModules/module5').then((module) => module.module5Lessons),
  6: () => import('./lessonModules/module6').then((module) => module.module6Lessons),
  7: () => import('./lessonModules/module7').then((module) => module.module7Lessons),
  8: () => import('./lessonModules/module8').then((module) => module.module8Lessons),
  9: () => import('./lessonModules/module9').then((module) => module.module9Lessons),
  // Curso: Mínimo para se Virar nos EUA (módulos 11–20)
  11: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 11)),
  12: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 12)),
  13: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 13)),
  14: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 14)),
  15: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 15)),
  16: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 16)),
  17: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 17)),
  18: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 18)),
  19: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 19)),
  20: () => import('./virarEUA/stubLessons').then((m) => m.VIRAR_EUA_STUB_LESSONS.filter((l) => l.module === 20)),
};

const moduleCache = new Map<number, Lesson[]>();
const lessonCache = new Map<string, Lesson>();

function sortByOrder<T extends { order: number; title: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

function cacheModule(moduleNumber: number, lessons: Lesson[]): Lesson[] {
  const sorted = sortByOrder(lessons);
  moduleCache.set(moduleNumber, sorted);
  sorted.forEach((lesson) => lessonCache.set(lesson.id, lesson));
  return sorted;
}

export const LESSONS = LESSON_SUMMARIES;

export function getLessonSummaryById(id: string): LessonSummary | undefined {
  return LESSON_SUMMARIES.find((lesson) => lesson.id === id);
}

export function getLessonsByModule(module: number): LessonSummary[] {
  return sortByOrder(LESSON_SUMMARIES.filter((lesson) => lesson.module === module));
}

export function getModules(): ModuleSummary[] {
  const moduleNumbers = [...new Set(LESSON_SUMMARIES.map((lesson) => lesson.module))].sort((a, b) => a - b);
  return moduleNumbers.map((number) => ({
    number,
    name: MODULE_NAMES[number as keyof typeof MODULE_NAMES] || `Module ${number}`,
    lessons: getLessonsByModule(number),
  }));
}

export async function loadLessonsByModule(module: number): Promise<Lesson[]> {
  const cached = moduleCache.get(module);
  if (cached) return cached;

  const loader = moduleLoaders[module];
  if (!loader) return [];

  return cacheModule(module, await loader());
}

export async function loadAllLessons(): Promise<Lesson[]> {
  const moduleNumbers = Object.keys(moduleLoaders).map(Number).sort((a, b) => a - b);
  const all = await Promise.all(moduleNumbers.map((moduleNumber) => loadLessonsByModule(moduleNumber)));
  return sortByOrder(all.flat());
}

export async function loadLessonById(id: string): Promise<Lesson | undefined> {
  const cached = lessonCache.get(id);
  if (cached) return cached;

  const summary = getLessonSummaryById(id);
  if (!summary) return undefined;

  const lessons = await loadLessonsByModule(summary.module);
  return lessons.find((lesson) => lesson.id === id);
}

export async function loadLessonVocabulary(id: string): Promise<VocabularyItem[]> {
  const lesson = await loadLessonById(id);
  return lesson ? lesson.vocabulary : [];
}

export async function loadNextLesson(currentLessonId: string): Promise<Lesson | undefined> {
  const currentLesson = getLessonSummaryById(currentLessonId);
  if (!currentLesson) return undefined;

  const moduleLessons = getLessonsByModule(currentLesson.module);
  const currentIndex = moduleLessons.findIndex((lesson) => lesson.id === currentLessonId);

  if (currentIndex >= 0 && currentIndex < moduleLessons.length - 1) {
    return loadLessonById(moduleLessons[currentIndex + 1].id);
  }

  const nextModuleNumbers = [...new Set(LESSON_SUMMARIES.map((lesson) => lesson.module))]
    .filter((moduleNumber) => moduleNumber > currentLesson.module)
    .sort((a, b) => a - b);

  for (const moduleNumber of nextModuleNumbers) {
    const firstLesson = getLessonsByModule(moduleNumber)[0];
    if (firstLesson) {
      return loadLessonById(firstLesson.id);
    }
  }

  return undefined;
}

export function getCourseStats() {
  const totalLessons = LESSON_SUMMARIES.length;
  const totalVocab = LESSON_SUMMARIES.reduce((sum, lesson) => sum + lesson.vocabularyCount, 0);
  const moduleCounts: Record<number, number> = {};

  LESSON_SUMMARIES.forEach((lesson) => {
    moduleCounts[lesson.module] = (moduleCounts[lesson.module] || 0) + 1;
  });

  return {
    totalLessons,
    totalVocabulary: totalVocab,
    moduleCounts,
    modules: Object.keys(MODULE_NAMES).length,
  };
}

export type { LessonSummary, ModuleSummary };
