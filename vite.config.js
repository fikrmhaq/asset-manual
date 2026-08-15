import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * The manual is a STATIC SITE. Nothing here proxies, and nothing here talks to
 * `apps/api` — `npm run build` must produce a `dist/` that any file server can
 * hand out unchanged.
 *
 * `base: './'` is deliberate: relative asset URLs mean the same build works at a
 * domain root (Vercel, Netlify, Cloudflare Pages) and under a sub-path
 * (GitHub Pages, an Nginx `location /manual/`) without a rebuild.
 *
 * Mermaid is the one heavy dependency and is dynamically imported, so Rollup
 * gives it its own chunk that only a page containing a diagram ever downloads.
 */
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5175,
    host: true,
  },
  preview: {
    port: 4175,
  },
  build: {
    /*
     * The bilingual markdown corpus — ~465 kB of prose, roughly half of it the
     * language a given reader is not using — is inlined into the main chunk by
     * `manifest.js`, which is what makes the manual work with no fetches at all.
     *
     * The threshold is raised to acknowledge that deliberately rather than to
     * hide it. Splitting the two languages into chunks fetched on demand would
     * cut roughly 220 kB from first load, but it makes article lookup
     * asynchronous, which changes the manifest's contract and every consumer of
     * it. That is a considered change, not a build-flag change.
     */
    chunkSizeWarningLimit: 1100,
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: false,
    restoreMocks: true,
    include: ['src/**/*.test.{js,jsx}'],
  },
});
