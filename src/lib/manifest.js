import { SECTIONS, SECTION_IDS } from '@/content/sections';
import { parseFrontmatter } from './frontmatter';
import { extractHeadings } from './headings';

/**
 * THE MANIFEST — one derivation, five consumers.
 *
 * The sidebar, the breadcrumb trail, previous/next, the section index pages and
 * the search index all read this. That is the point: adding an article means
 * adding a Markdown file, and every one of those five updates itself. No React
 * file lists articles anywhere.
 *
 * Content lives at `src/content/<language>/<section>/<slug>.md`. The path IS the
 * routing information — `/assets/creating-an-asset` renders
 * `content/en/assets/creating-an-asset.md`, and switching language re-reads the
 * same route from `content/id/...`.
 *
 * `eager: true` inlines every article as a string at build time. That is what
 * makes the manual a static site with no fetches: a reader offline, or on a host
 * that serves nothing but `index.html` and a JS bundle, still has the whole
 * corpus. The prose is small enough that lazy-loading it would trade a real
 * guarantee for an imperceptible saving.
 *
 * ENGLISH IS THE SPINE. Navigation order, which articles exist, and which route
 * resolves are all decided by the English tree. An Indonesian file supplies a
 * translation of an article that already exists; it cannot introduce one that
 * does not, because a reader who switched language would then find a page that
 * vanishes when they switch back. A missing translation falls back to English
 * and says so.
 */

const RAW = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const LANGUAGES = ['en', 'id'];
export const DEFAULT_LANGUAGE = 'en';

/** `../content/en/assets/creating-an-asset.md` → its three meaningful parts. */
function parsePath(path) {
  const match = path.match(/\/content\/([^/]+)\/([^/]+)\/([^/]+)\.md$/);
  if (!match) return null;

  const [, language, section, slug] = match;
  return { language, section, slug };
}

/** Collected while building, surfaced by `getContentProblems()` for the tests. */
const problems = [];

function buildDocuments() {
  /** @type {Map<string, Map<string, object>>} route → language → document */
  const byRoute = new Map();

  for (const [path, source] of Object.entries(RAW)) {
    const parts = parsePath(path);

    if (!parts) {
      problems.push(`${path}: not in content/<language>/<section>/<slug>.md form`);
      continue;
    }

    const { language, section, slug } = parts;

    if (!LANGUAGES.includes(language)) {
      problems.push(`${path}: unknown language "${language}"`);
      continue;
    }
    if (!SECTION_IDS.includes(section)) {
      problems.push(`${path}: section "${section}" is not declared in content/sections.js`);
      continue;
    }

    const { data, body } = parseFrontmatter(source);

    if (!data.title) problems.push(`${path}: no title in frontmatter`);

    const { headings } = extractHeadings(body);
    const route = `/${section}/${slug}`;

    const document = {
      id: `${language}:${route}`,
      route,
      language,
      section,
      slug,
      title: data.title ?? slug,
      description: data.description ?? '',
      order: typeof data.order === 'number' ? data.order : 999,
      permissions: Array.isArray(data.permissions) ? data.permissions : [],
      related: Array.isArray(data.related) ? data.related : [],
      /* `task` marks an article that answers "how do I …?", wherever it lives.
         The How Do I index is built from the flag, not from the folder, so a
         task article can sit in its own module chapter and still be listed. */
      task: data.task === true,
      keywords: Array.isArray(data.keywords) ? data.keywords : [],
      headings,
      body,
    };

    if (!byRoute.has(route)) byRoute.set(route, new Map());
    byRoute.get(route).set(language, document);
  }

  return byRoute;
}

const DOCUMENTS = buildDocuments();

/**
 * The navigation tree: sections in shelf order, each holding its articles in
 * `order` then title order. Built from the English documents only.
 */
function buildTree() {
  const bySection = new Map();

  for (const languages of DOCUMENTS.values()) {
    const english = languages.get(DEFAULT_LANGUAGE);
    if (!english) {
      const other = [...languages.values()][0];
      problems.push(`${other.route}: exists in ${other.language} but not in ${DEFAULT_LANGUAGE}`);
      continue;
    }

    if (!bySection.has(english.section)) bySection.set(english.section, []);
    bySection.get(english.section).push(english);
  }

  return SECTIONS.map((section) => ({
    ...section,
    articles: (bySection.get(section.id) ?? []).sort(
      (a, b) => a.order - b.order || a.title.localeCompare(b.title)
    ),
  })).filter((section) => section.articles.length > 0);
}

const TREE = buildTree();

/** The reading order the previous/next controls walk. */
const ORDERED_ROUTES = TREE.flatMap((section) => section.articles.map((a) => a.route));

export function getTree() {
  return TREE;
}

export function getContentProblems() {
  return problems;
}

/**
 * One article in the requested language.
 *
 * @returns {{document: object, fallback: boolean} | null} `fallback` is true
 *   when the requested language had no file and English was used instead — the
 *   article renders, with a notice, rather than 404ing on a translation gap.
 */
export function getArticle(route, language = DEFAULT_LANGUAGE) {
  const languages = DOCUMENTS.get(route);
  if (!languages) return null;

  const requested = languages.get(language);
  if (requested) return { document: requested, fallback: false };

  const english = languages.get(DEFAULT_LANGUAGE);
  if (!english) return null;

  return { document: english, fallback: true };
}

/** Every document in one language, English-backfilled. Used by the indexer. */
export function getAllArticles(language = DEFAULT_LANGUAGE) {
  return ORDERED_ROUTES.map((route) => getArticle(route, language)?.document).filter(Boolean);
}

/** The section descriptor plus its articles in the requested language. */
export function getSection(id, language = DEFAULT_LANGUAGE) {
  const section = TREE.find((entry) => entry.id === id);
  if (!section) return null;

  return {
    ...section,
    articles: section.articles.map((article) => getArticle(article.route, language).document),
  };
}

export function getSections(language = DEFAULT_LANGUAGE) {
  return TREE.map((section) => getSection(section.id, language));
}

/** The previous and next articles in reading order, language-resolved. */
export function getNeighbours(route, language = DEFAULT_LANGUAGE) {
  const index = ORDERED_ROUTES.indexOf(route);
  if (index === -1) return { previous: null, next: null };

  const at = (position) => {
    const candidate = ORDERED_ROUTES[position];
    return candidate ? (getArticle(candidate, language)?.document ?? null) : null;
  };

  return { previous: at(index - 1), next: at(index + 1) };
}

/** Task articles across every section, for the How Do I index and the homepage. */
export function getTasks(language = DEFAULT_LANGUAGE) {
  return getAllArticles(language).filter((article) => article.task);
}

/**
 * Resolves a `related:` entry, which content writes as `section/slug` — the
 * route without its leading slash, so a frontmatter list stays readable.
 */
export function resolveRelated(entry, language = DEFAULT_LANGUAGE) {
  const route = entry.startsWith('/') ? entry : `/${entry}`;
  return getArticle(route, language)?.document ?? null;
}
