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

// Like getLocalizedPath, but never returns the SSR-redirect page "/" when the
// target language is the default. This avoids a 302 redirect hop in
// client-side navigations (e.g. the language switcher), which the
// Astro view-transitions router fetches and follows, making the transition
// feel like a full reload.
export function getLanguageSwitchPath(path: string, lang: Language): string {
  const stripped = path.replace(/^\/(zh|en)(?=\/|$)/, '') || '/';
  if (lang === defaultLanguage) {
    if (stripped === '/') return `/${defaultLanguage}/`;
    return stripped.startsWith('/') ? stripped : `/${stripped}`;
  }
  return stripped === '/' ? `/${lang}/` : `/${lang}${stripped.startsWith('/') ? '' : '/'}${stripped}`;
}

export function getAlternateLanguage(lang: Language): Language {
  return lang === 'zh' ? 'en' : 'zh';
}