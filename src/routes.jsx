import { createHashRouter, Navigate } from 'react-router-dom';

import { DocsLayout } from '@/layouts/DocsLayout';
import { ArticlePage } from '@/pages/ArticlePage';
import { HomePage } from '@/pages/HomePage';
import { SectionPage } from '@/pages/SectionPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/**
 * Routes. Two of them do all the work, because the manifest supplies the rest:
 * `/:section` is any section index and `/:section/:slug` is any article. Adding
 * a Markdown file adds a route.
 *
 * A HASH ROUTER, deliberately.
 *
 * This build has to be droppable onto Vercel, Netlify, Cloudflare Pages, GitHub
 * Pages, an Nginx directory or a network share, with nobody configuring
 * anything. A history router requires every one of those to rewrite unknown
 * paths to `index.html`; miss that step and every deep link a reader bookmarks
 * or shares returns 404 — a failure that shows up only after the manual is in
 * use, and only for the people who found it useful enough to bookmark.
 *
 * The cost is `#/` in the address bar. The benefit is that `dist/` works
 * unchanged everywhere, including opened straight off the filesystem.
 *
 * To switch: `createBrowserRouter` here, `base: '/'` in `vite.config.js`, and a
 * rewrite rule on the host. Nothing else in the application reads the router
 * type — heading anchors go through `navigate({ hash })` either way.
 */
export const routeDefinitions = [
  {
    path: '/',
    element: <DocsLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ':section', element: <SectionPage /> },
      { path: ':section/:slug', element: <ArticlePage /> },
      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
];

export function createManualRouter() {
  return createHashRouter(routeDefinitions);
}
