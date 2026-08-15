import { createContext, useContext } from 'react';

import { DEFAULT_LANGUAGE } from '@/lib/manifest';
import { STRINGS } from './strings';

/**
 * The language context and the hooks that read it.
 *
 * SEPARATED FROM THE PROVIDER on purpose. A module that exports both a
 * component and a hook cannot be hot-reloaded as a unit: React Fast Refresh
 * remounts the component, the context identity changes, and every consumer
 * throws "must be used inside a LanguageProvider" until a full page reload. The
 * lint rule that warns about mixed exports is warning about exactly that, and
 * this split is the fix rather than the suppression.
 *
 * No JSX here, so this file is never a refresh boundary.
 */

export const LanguageContext = createContext(null);

/** Resolves `a.b.c` against a strings tree, falling back to English. */
function lookup(language, path) {
  const walk = (tree) =>
    path
      .split('.')
      .reduce((node, key) => (node === null || node === undefined ? undefined : node[key]), tree);

  const value = walk(STRINGS[language]);
  if (typeof value === 'string') return value;

  const fallback = walk(STRINGS[DEFAULT_LANGUAGE]);
  return typeof fallback === 'string' ? fallback : path;
}

/**
 * `t('search.results', { count: 3 })` — interpolation only, no plural rules.
 *
 * Both languages form plurals in ways a naive rule would get wrong, so copy
 * needing a singular has its own key (`oneResult`) and the caller chooses.
 * Explicit beats clever for two strings.
 */
export function translator(language) {
  return function t(path, values) {
    const template = lookup(language, path);
    if (!values) return template;

    return template.replace(/\{\{(\w+)\}\}/g, (match, key) =>
      Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match
    );
  };
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside a LanguageProvider');
  return context;
}

/** The common case: a component that only needs to translate chrome copy. */
export function useTranslate() {
  return useLanguage().t;
}
