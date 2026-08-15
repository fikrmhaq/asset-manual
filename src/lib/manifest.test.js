import { describe, expect, it } from 'vitest';

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  getAllArticles,
  getArticle,
  getContentProblems,
  getNeighbours,
  getSections,
  getTree,
  resolveRelated,
} from './manifest';
import { parseFrontmatter } from './frontmatter';
import { extractHeadings } from './headings';
import { createSlugger, slugify } from './slugify';

/**
 * The manifest is the one derivation the whole manual depends on — navigation,
 * breadcrumbs, prev/next, related links and search all read it. These tests
 * guard the derivation itself and, just as importantly, the CONTENT: a broken
 * frontmatter key or a `related:` pointing at an article that was renamed is a
 * defect a reader meets, and it should fail here rather than there.
 */

describe('frontmatter', () => {
  it('reads scalars, numbers, booleans and dash lists', () => {
    const { data, body } = parseFrontmatter(
      [
        '---',
        'title: Creating an asset',
        'order: 10',
        'task: true',
        'permissions:',
        '  - asset:create',
        '  - asset:read',
        '---',
        '',
        'Body text.',
      ].join('\n')
    );

    expect(data).toMatchObject({
      title: 'Creating an asset',
      order: 10,
      task: true,
      permissions: ['asset:create', 'asset:read'],
    });
    expect(body.trim()).toBe('Body text.');
  });

  it('keeps a quoted numeric string a string', () => {
    // A classification code is twelve digits and is not a number.
    const { data } = parseFrontmatter('---\ncode: "202010500200"\n---\n');
    expect(data.code).toBe('202010500200');
  });

  it('returns the whole file as body when there is no frontmatter', () => {
    const { data, body } = parseFrontmatter('# Just a heading\n');
    expect(data).toEqual({});
    expect(body).toBe('# Just a heading\n');
  });

  it('does not lose the article when the block is unterminated', () => {
    const { body } = parseFrontmatter('---\ntitle: Broken\n\nSome text.');
    expect(body).toContain('Some text.');
  });
});

describe('heading anchors', () => {
  it('gives duplicate headings distinct anchors', () => {
    const slug = createSlugger();
    expect([slug('Steps'), slug('Steps')]).toEqual(['steps', 'steps-1']);
  });

  it('folds punctuation and case', () => {
    expect(slugify('What happens next?')).toBe('what-happens-next');
  });

  it('ignores headings inside fenced code', () => {
    const { headings } = extractHeadings(
      ['## Real heading', '', '```bash', '# not a heading', '```', '', '### Another'].join('\n')
    );

    expect(headings.map((heading) => heading.text)).toEqual(['Real heading', 'Another']);
  });

  it('maps each heading to the source line the renderer will see', () => {
    const { headings, byLine } = extractHeadings('intro\n\n## Steps\n\ntext\n\n## Steps\n');
    expect(headings.map((h) => h.slug)).toEqual(['steps', 'steps-1']);
    expect(byLine.get(3)).toBe('steps');
    expect(byLine.get(7)).toBe('steps-1');
  });
});

describe('the content corpus', () => {
  it('has no structural problems', () => {
    // Unknown section folder, missing title, a translation with no English
    // original — all of which would degrade the reader's experience silently.
    expect(getContentProblems()).toEqual([]);
  });

  it('places every article in a declared section', () => {
    expect(getTree().length).toBeGreaterThan(0);

    for (const section of getTree()) {
      expect(section.articles.length).toBeGreaterThan(0);
      for (const article of section.articles) {
        expect(article.route).toBe(`/${section.id}/${article.slug}`);
      }
    }
  });

  it('gives every article a title and a description', () => {
    for (const article of getAllArticles(DEFAULT_LANGUAGE)) {
      expect(article.title, article.route).toBeTruthy();
      expect(article.description, article.route).toBeTruthy();
    }
  });

  /*
   * Both link checks REPORT EVERY BREAKAGE, rather than throwing on the first.
   *
   * While the corpus is being written a bare `expect` inside the loop hides the
   * other nineteen dead links behind the one it happened to reach first, so the
   * author fixes them one test run at a time. Collecting first turns the suite
   * into a work list.
   */
  it('resolves every related: entry to a real article', () => {
    const broken = [];

    for (const article of getAllArticles(DEFAULT_LANGUAGE)) {
      for (const entry of article.related) {
        if (!resolveRelated(entry)) broken.push(`${article.route} → related: ${entry}`);
      }
    }

    expect(broken).toEqual([]);
  });

  it('links only to routes that exist', () => {
    const routes = new Set(getAllArticles(DEFAULT_LANGUAGE).map((article) => article.route));
    const sections = new Set(getTree().map((section) => `/${section.id}`));
    const broken = [];

    for (const language of LANGUAGES) {
      for (const article of getAllArticles(language)) {
        // Internal Markdown links: `](/section/slug)` and `](/section/slug#anchor)`.
        const links = [...article.body.matchAll(/\]\((\/[^)\s#]+)(#[^)\s]*)?\)/g)].map(
          (match) => match[1]
        );

        for (const link of links) {
          if (link.startsWith('/screenshots/')) continue;
          if (routes.has(link) || sections.has(link)) continue;
          broken.push(`${article.language}:${article.route} → ${link}`);
        }
      }
    }

    expect([...new Set(broken)]).toEqual([]);
  });
});

describe('reading order', () => {
  it('walks every article exactly once through next', () => {
    const all = getAllArticles(DEFAULT_LANGUAGE);
    const first = all[0];

    const visited = [];
    let current = first;

    while (current && visited.length <= all.length) {
      visited.push(current.route);
      current = getNeighbours(current.route, DEFAULT_LANGUAGE).next;
    }

    expect(visited).toHaveLength(all.length);
    expect(new Set(visited).size).toBe(all.length);
  });

  it('has no previous on the first article and no next on the last', () => {
    const all = getAllArticles(DEFAULT_LANGUAGE);

    expect(getNeighbours(all[0].route).previous).toBeNull();
    expect(getNeighbours(all[all.length - 1].route).next).toBeNull();
  });
});

describe('translations', () => {
  it('falls back to English, flagged, when a translation is missing', () => {
    const untranslated = getAllArticles(DEFAULT_LANGUAGE).find(
      (article) => getArticle(article.route, 'id').fallback
    );

    // Not an assertion that gaps exist — only that they behave when they do.
    if (untranslated) {
      const found = getArticle(untranslated.route, 'id');
      expect(found.fallback).toBe(true);
      expect(found.document.language).toBe('en');
    }
  });

  it('keeps routes and section placement identical across languages', () => {
    for (const language of ['en', 'id']) {
      const english = getSections('en');
      const other = getSections(language);

      expect(other.map((section) => section.id)).toEqual(english.map((section) => section.id));

      other.forEach((section, index) => {
        expect(section.articles.map((article) => article.route)).toEqual(
          english[index].articles.map((article) => article.route)
        );
      });
    }
  });

  it('never translates a permission code', () => {
    for (const article of getAllArticles('id')) {
      for (const code of article.permissions) {
        expect(code).toMatch(/^[a-z-]+:[a-z-]+$/);
      }
    }
  });
});
