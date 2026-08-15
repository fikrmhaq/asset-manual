import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { LanguageProvider } from '@/i18n/LanguageProvider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { routeDefinitions } from '@/routes';

/**
 * Renders the real application at a given route.
 *
 * A MEMORY router rather than the hash router the application ships. The routes,
 * the layout, the providers and every component under test are the real ones —
 * only the history implementation differs, because driving `location.hash` in
 * jsdom tests the browser's URL parsing rather than the manual's behaviour.
 *
 * `initialLanguage` and `initialTheme` are passed explicitly so a test states
 * what it is testing instead of depending on leftover `localStorage`.
 */
export function renderManual({ route = '/', language = 'en', theme = 'light' } = {}) {
  const router = createMemoryRouter(routeDefinitions, { initialEntries: [route] });

  const result = render(
    <ThemeProvider initialChoice={theme}>
      <LanguageProvider initialLanguage={language}>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  );

  return { ...result, router };
}
