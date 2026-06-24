import { languages, defaultLanguage, type Language } from './ui';

export type { Language };
export { languages, defaultLanguage };

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  if (lang === 'zh') return 'zh';
  return defaultLanguage;
}

export function getPathBase(lang: Language): string {
  return `/${lang}`;
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Strip an existing /zh or /en prefix if present
  const stripped = path.replace(/^\/(zh|en)(?=\/|$)/, '') || '/';
  if (lang === defaultLanguage) {
    return stripped === '/' ? '/' : stripped;
  }
  return stripped === '/' ? `/${lang}/` : `/${lang}${stripped.startsWith('/') ? '' : '/'}${stripped}`;
}

export function getAlternateLanguage(lang: Language): Language {
  return lang === 'zh' ? 'en' : 'zh';
}