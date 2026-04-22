import type { Lesson } from '@unlock2026/shared';
import { loadLessonById } from '../lessons';
import { VIRAR_EUA_MODULES, getVirarLessonMeta } from './courseStructure';
import { getStubLesson } from './stubLessons';

export async function loadVirarLesson(id: string): Promise<Lesson | undefined> {
  const stub = getStubLesson(id);
  if (stub) return stub;
  return loadLessonById(id);
}

export async function loadVirarModule(moduleNumber: number): Promise<Lesson[]> {
  const mod = VIRAR_EUA_MODULES.find((m) => m.number === moduleNumber);
  if (!mod) return [];
  const lessons = await Promise.all(mod.lessons.map((l) => loadVirarLesson(l.id)));
  return lessons.filter((l): l is Lesson => l !== undefined);
}

export { VIRAR_EUA_MODULES, getVirarLessonMeta } from './courseStructure';
export { VIRAR_EUA_STUB_LESSONS } from './stubLessons';
