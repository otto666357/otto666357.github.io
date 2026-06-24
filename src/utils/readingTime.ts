// Reading time estimation.
// zh: 200 chars/min; en: 250 words/min.
const ZH_CPM = 200;
const EN_WPM = 250;

// CJK Unified Ideographs: basic (U+4E00..U+9FFF) + ext-A (U+3400..U+4DBF)
const CJK_REGEX_SOURCE = '[\\u3400-\\u4dbf\\u4e00-\\u9fff]';
const CJK_REGEX = new RegExp(CJK_REGEX_SOURCE, 'g');

import type { CollectionEntry } from 'astro:content';

// `glob({ base: './src/content' })` gives `post.id` as `<lang>/<filename>.mdx`.
// Strip both so we can build clean URLs like `/en/posts/hello-world/`.
export function postSlug(post: CollectionEntry<'posts'>): string {
  return post.id.replace(/^[^/]+\//, '').replace(/\.(md|mdx)$/, '');
}

export function readingTime(text: string, lang: 'zh' | 'en' = 'en'): number {
  const trimmed = text.trim();
  if (!trimmed) return 1;

  if (lang === 'zh') {
    const cnChars = (trimmed.match(CJK_REGEX) || []).length;
    const otherWords = trimmed
      .replace(CJK_REGEX, ' ')
      .split(/\s+/)
      .filter(Boolean).length;
    const total = cnChars / ZH_CPM + otherWords / EN_WPM;
    return Math.max(1, Math.round(total));
  }

  const words = trimmed.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / EN_WPM));
}

export function wordCount(text: string, lang: 'zh' | 'en' = 'en'): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  if (lang === 'zh') {
    return (trimmed.match(CJK_REGEX) || []).length;
  }
  return trimmed.split(/\s+/).filter(Boolean).length;
}
