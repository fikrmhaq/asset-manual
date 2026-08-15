import { createContext, useContext } from 'react';

/**
 * The theme context and its hook.
 *
 * Separated from the provider for the same reason as the language context: a
 * module exporting both a component and a hook cannot survive Fast Refresh as a
 * unit, and every consumer throws until a full reload. See `i18n/language.js`.
 */

export const ThemeContext = createContext(null);

/** Light, dark, or follow the system — three real states, not a boolean. */
export const THEME_CHOICES = ['light', 'dark', 'system'];

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside a ThemeProvider');
  return context;
}
