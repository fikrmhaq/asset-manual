import MiniSearch from 'minisearch';

import { getAllArticles } from './manifest';
import { findSection } from '@/content/sections';

/**
 * Client-side search. There is no search API and there must not be one.
 *
 * WHAT IS INDEXED, and why it is indexed as SECTIONS rather than as articles:
 * a reader searching "record a return" wants the paragraph that explains it, not
 * a 2,000-word chapter they then have to scan. Every article is split at its
 * `##`/`###` headings and each fragment is indexed separately, carrying its own
 * anchor — so a result links to the exact heading.
 *
 * The article's own title, description, keywords and section name are folded
 * into every one of its fragments. That is what makes a natural-language query
 * work: "how do I move a laptop" hits the *Moving a unit* fragment through
 * "move", the frontmatter keyword "laptop", and the section word "Asset Units",
 * without the phrase appearing verbatim anywhere.
 *
 * `prefix` and a conservative `fuzzy` cover the half-typed word and the near
 * miss ("borrwing"). Fuzziness is scaled to term length so short words are
 * matched strictly — at distance 2, "unit" would match "audit".
 */

const FIELDS = ['title', 'heading', 'body', 'keywords', 'section'];

/**
 * Words carried by so many articles that matching them says nothing.
 *
 * Every task article in this manual is titled "How do I …?" / "Bagaimana cara
 * …?", so `how`, `do`, `bagaimana` and `cara` appear in most of the corpus.
 * Left in, a natural-language question spends most of its terms on words that
 * match everything, and the one word that carries the intent — "meminjam",
 * "borrow" — is outvoted.
 *
 * Both languages are listed together: the reader's query is not tagged with a
 * language, and an English word in an Indonesian query should be dropped just
 * the same.
 *
 * Deliberately short. Every entry here is a word a reader can no longer search
 * for, so it holds only words that genuinely cannot discriminate.
 */
const STOPWORDS = new Set([
  // English
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'for',
  'from', 'how', 'i', 'in', 'is', 'it', 'my', 'of', 'on', 'or', 'the', 'this',
  'to', 'what', 'when', 'where', 'why', 'with',
  // Indonesian
  'adalah', 'apa', 'atau', 'bagaimana', 'cara', 'dan', 'dari', 'di', 'ini',
  'itu', 'ke', 'kita', 'pada', 'saya', 'untuk', 'yang',
]);

/**
 * Applied at BOTH index and query time, which is why it is set on the
 * constructor rather than per-search: a term dropped from the index must be
 * dropped from the query too, or the query can never match.
 */
function processTerm(term) {
  const lowered = term.toLowerCase();
  return STOPWORDS.has(lowered) ? null : lowered;
}

/** Weighted so a title match beats a body mention of the same word. */
const BOOSTS = { title: 4, heading: 3, keywords: 3, section: 1.5, body: 1 };

/**
 * Markdown → plain words.
 *
 * Only what would otherwise pollute the index is stripped: fences, image
 * syntax, link URLs (the link TEXT is kept, it is real prose), table pipes,
 * emphasis and heading markers. This is not a Markdown parser and does not need
 * to be — an imperfect strip costs a slightly noisier index, nothing more.
 */
export function toPlainText(markdown) {
  return (
    String(markdown ?? '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/~~~[\s\S]*?~~~/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      /* Callout markers are syntax, not prose. Left in, `[!LIMITATION]` both
         pollutes the excerpt a reader sees and makes "limitation" match every
         callout of that kind rather than the articles actually about one. */
      .replace(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|LIMITATION)\]/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/^[|:\-\s]+$/gm, ' ')
      .replace(/[|>#*_`]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/**
 * Splits one article into indexable fragments: the lead (everything before the
 * first `##`) plus one per heading.
 */
export function toFragments(article, language) {
  const section = findSection(article.section);
  const sectionTitle = section?.title?.[language] ?? section?.title?.en ?? article.section;

  const lines = article.body.split(/\r?\n/);
  const boundaries = article.headings.map((heading) => heading.line);

  const sliceBetween = (from, to) =>
    toPlainText(lines.slice(from, to === undefined ? undefined : to - 1).join('\n'));

  const fragments = [];

  const leadEnd = boundaries[0];
  const lead = sliceBetween(0, leadEnd);

  fragments.push({
    id: `${article.id}#`,
    route: article.route,
    anchor: '',
    title: article.title,
    heading: '',
    section: sectionTitle,
    sectionId: article.section,
    keywords: [article.description, ...(article.keywords ?? [])].filter(Boolean).join(' '),
    body: [article.description, lead].filter(Boolean).join(' '),
    task: article.task,
    excerptSource: [article.description, lead].filter(Boolean).join(' '),
  });

  article.headings.forEach((heading, index) => {
    const next = article.headings[index + 1];
    const body = sliceBetween(heading.line, next ? next.line : undefined);

    fragments.push({
      id: `${article.id}#${heading.slug}`,
      route: article.route,
      anchor: heading.slug,
      title: article.title,
      heading: heading.text,
      section: sectionTitle,
      sectionId: article.section,
      keywords: (article.keywords ?? []).join(' '),
      body,
      task: article.task,
      excerptSource: body,
    });
  });

  return fragments;
}

/**
 * Builds the index for one language.
 *
 * Called lazily — the first time the reader opens search, not on page load. The
 * corpus is already in memory (the manifest inlines it), so this is CPU only,
 * and doing it up front would delay first paint for a feature most visits to a
 * single article never use.
 */
export function buildIndex(language) {
  const documents = getAllArticles(language).flatMap((article) => toFragments(article, language));

  const index = new MiniSearch({
    fields: FIELDS,
    storeFields: ['route', 'anchor', 'title', 'heading', 'section', 'sectionId', 'task', 'excerptSource'],
    idField: 'id',
    processTerm,
    searchOptions: {
      boost: BOOSTS,
      prefix: true,
      fuzzy: (term) => (term.length <= 4 ? 0 : 0.2),
      combineWith: 'AND',
    },
  });

  index.addAll(documents);
  return index;
}

/**
 * Query, then collapse.
 *
 * MiniSearch happily returns six fragments of one article for a common word.
 * A results list showing the same article six times is worse than useless, so
 * only the best-scoring fragment per article survives — except that the reader
 * still wants to see WHICH heading matched, which is why the anchor rides along.
 */
export function search(index, query, { limit = 20 } = {}) {
  const trimmed = String(query ?? '').trim();
  if (trimmed.length < 2) return [];

  let hits = index.search(trimmed);

  // Nothing matched with every term required — retry allowing any of them, so a
  // question phrased as a sentence still finds its article.
  if (hits.length === 0) hits = index.search(trimmed, { combineWith: 'OR' });

  const best = new Map();

  for (const hit of hits) {
    const existing = best.get(hit.route);
    if (!existing || hit.score > existing.score) best.set(hit.route, hit);
  }

  return [...best.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((hit) => ({
      id: hit.id,
      route: hit.route,
      anchor: hit.anchor,
      title: hit.title,
      heading: hit.heading,
      section: hit.section,
      sectionId: hit.sectionId,
      task: hit.task,
      excerpt: excerptFor(hit.excerptSource, hit.terms),
      terms: hit.terms,
      score: hit.score,
    }));
}

/**
 * Splits a string into matched and unmatched runs, so the result list can mark
 * why it matched without the component knowing anything about the query.
 *
 * Returns plain data (`[{text, match}]`) rather than markup: building HTML here
 * and injecting it would mean escaping user input by hand, and there is no
 * reason to accept that risk for a visual emphasis.
 */
export function highlight(text, terms = []) {
  const source = String(text ?? '');
  const cleaned = [...new Set(terms.map((term) => String(term).trim()).filter(Boolean))].sort(
    (a, b) => b.length - a.length
  );

  if (source === '' || cleaned.length === 0) return [{ text: source, match: false }];

  const escaped = cleaned.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const splitter = new RegExp(`(${escaped.join('|')})`, 'gi');

  // A separate, non-global regex to classify the pieces. Reusing the `g` one
  // would carry `lastIndex` between calls and mark alternate matches only.
  const isMatch = new RegExp(`^(?:${escaped.join('|')})$`, 'i');

  return source
    .split(splitter)
    .filter((part) => part !== '' && part !== undefined)
    .map((part) => ({ text: part, match: isMatch.test(part) }));
}

/**
 * A short window of text around the first matched term, so the reader can see
 * why a result matched before opening it.
 */
export function excerptFor(source, terms = [], { length = 165 } = {}) {
  const text = String(source ?? '').trim();
  if (!text) return '';
  if (text.length <= length) return text;

  const needle = terms
    .map((term) => text.toLowerCase().indexOf(String(term).toLowerCase()))
    .filter((position) => position >= 0)
    .sort((a, b) => a - b)[0];

  if (needle === undefined || needle < length / 2) return `${text.slice(0, length).trimEnd()}…`;

  const start = Math.max(0, needle - Math.floor(length / 3));
  return `…${text.slice(start, start + length).trim()}…`;
}
