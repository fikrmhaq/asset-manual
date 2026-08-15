import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { renderManual } from './render';
import { getAllArticles, getTree, LANGUAGES } from '@/lib/manifest';
import { SECTIONS } from '@/content/sections';

/**
 * ROUTE COVERAGE.
 *
 * "All routes work" is the one Phase 5 claim that cannot be spot-checked: a
 * manual with 82 articles has 82 ways to be broken, and opening a handful by
 * hand proves nothing about the rest. So every route is enumerated from the
 * manifest and rendered.
 *
 * These are generated from the content, not listed here — a new article is
 * covered the moment its file exists, and an article that disappears takes its
 * test with it rather than leaving a stale one passing.
 */

const articles = getAllArticles('en');
const sections = getTree();

describe('every article route renders', () => {
  it.each(articles.map((article) => [article.route, article.title]))(
    '%s',
    async (route, title) => {
      renderManual({ route });

      // The heading proves the ARTICLE rendered, not merely that the shell did:
      // a missing article would render the not-found page, whose heading differs.
      const heading = await screen.findByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent(title);
    }
  );
});

describe('every section index renders', () => {
  it.each(sections.map((section) => [`/${section.id}`, section.title.en]))(
    '%s',
    async (route, title) => {
      renderManual({ route });

      const heading = await screen.findByRole('heading', { level: 1 });
      expect(heading).toHaveTextContent(title);
    }
  );
});

describe('every article route renders in Indonesian', () => {
  /*
   * The Indonesian pass asserts only that the page RENDERS, not which title it
   * shows: an untranslated article legitimately falls back to English, and
   * pinning the title here would turn the designed fallback into a failure.
   * `shell.test.jsx` covers the fallback notice itself.
   */
  it.each(articles.map((article) => [article.route]))('%s', async (route) => {
    renderManual({ route, language: 'id' });

    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toBeVisible();
    expect(heading).not.toHaveTextContent(/page not found|halaman tidak ditemukan/i);
  });
});

describe('the route table itself', () => {
  it('covers the whole corpus', () => {
    // Guards the generators above: if the manifest ever returned nothing, every
    // `it.each` block would silently pass with zero cases.
    expect(articles.length).toBeGreaterThan(50);
    expect(sections.length).toBeGreaterThan(10);
  });

  it('renders the home page in both languages', async () => {
    for (const language of LANGUAGES) {
      const { unmount } = renderManual({ route: '/', language });
      expect(await screen.findByRole('heading', { level: 1 })).toBeVisible();
      unmount();
    }
  });

  it('shows every populated section in the sidebar', async () => {
    renderManual({ route: '/' });

    const sidebar = await screen.findByRole('navigation', { name: /manual sections/i });

    for (const section of sections) {
      expect(
        sidebar.textContent,
        `${section.id} is missing from the sidebar`
      ).toContain(section.title.en);
    }
  });

  it('declares no section that the tree cannot render', () => {
    // A section in `sections.js` with no articles is legal (it shows an empty
    // state), but a section in the TREE that is not declared is a bug.
    const declared = new Set(SECTIONS.map((section) => section.id));
    for (const section of sections) expect(declared).toContain(section.id);
  });
});
