import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { LanguageProvider } from '@/i18n/LanguageProvider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { createManualRouter } from '@/routes';

/**
 * Entry point.
 *
 * Nothing is fetched, nothing is authenticated, and there is no client for an
 * API — the manual's entire corpus is compiled into the bundle. This file
 * mounts three things: the theme, the language, and the router.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={createManualRouter()} />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
