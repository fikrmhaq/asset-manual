import { useCallback, useEffect, useMemo, useState } from 'react';

import { LANGUAGES, DEFAULT_LANGUAGE } from '@/lib/manifest';
import { LanguageContext, translator } from './language';

/**
 * Language, held entirely in the browser.
 *
 * The choice is NOT in the URL. A route names an article —
 * `/assets/creating-an-asset` — and the language decides which translation of
 * it renders. Putting the language in the path would mean every link in every
 * Markdown file had to know the current language, and a link copied between
 * languages would drag the wrong one along. This way a shared link opens in the
 * reader's own preference.
 *
 * Persistence is `localStorage`, matching the theme. There is no backend to ask
 * and no cookie to set.
 *
 * The context and hooks live in `language.js` — see the note there on why this
 * file exports the component and nothing else.
 */

const STORAGE_KEY = 'manual.language';

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    /* Storage unavailable (private mode, blocked cookies) — fall through. */
  }

  // No stored preference: follow the browser, but only into a language the
  // manual actually has. `navigator.language` of `id-ID` counts as `id`.
  try {
    const preferred = (navigator.languages ?? [navigator.language]).filter(Boolean);
    for (const tag of preferred) {
      const base = String(tag).toLowerCase().split('-')[0];
      if (LANGUAGES.includes(base)) return base;
    }
  } catch {
    /* No navigator (a bare test environment) — the default is fine. */
  }

  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children, initialLanguage }) {
  const [language, setLanguageState] = useState(() => initialLanguage ?? readStoredLanguage());

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* Nothing to do — the choice simply will not survive a reload. */
    }
  }, [language]);

  const setLanguage = useCallback((next) => {
    if (LANGUAGES.includes(next)) setLanguageState(next);
  }, []);

  const t = useMemo(() => translator(language), [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t, languages: LANGUAGES }),
    [language, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
