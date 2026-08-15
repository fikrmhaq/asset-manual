import { createSlugger } from './slugify';

/**
 * The headings of one article, for the "On this page" rail and the search index.
 *
 * WHY LINE NUMBERS. `react-markdown` renders a heading without telling the
 * component which heading it is — only its text. Two sections called "Steps"
 * would then compute the same anchor, and the second would be unreachable. What
 * remark DOES give every node is its source position, so the anchor is decided
 * once here, keyed by the line it was written on, and the renderer looks it up.
 * The rail and the document therefore agree by construction, not by both running
 * the same slug function and hoping.
 *
 * Fenced code is skipped: `# not a heading` inside a shell example is a comment.
 * Setext headings (`===` underlines) are not supported and are not used.
 *
 * Only `##` and `###` are collected. `#` is the article title, rendered from
 * frontmatter above the body, and `####` is too fine to navigate by.
 */
export function extractHeadings(body) {
  const lines = String(body ?? '').split(/\r?\n/);
  const slugFor = createSlugger();
  const headings = [];
  const byLine = new Map();

  let fence = null;

  lines.forEach((line, index) => {
    const fenceMatch = line.match(/^\s{0,3}(```+|~~~+)/);
    if (fenceMatch) {
      const marker = fenceMatch[1][0];
      if (fence === null) fence = marker;
      else if (fence === marker) fence = null;
      return;
    }
    if (fence !== null) return;

    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!heading) return;

    const depth = heading[1].length;
    // Strip the inline markup a heading may carry, so the rail shows words.
    const text = heading[2]
      .replace(/`([^`]+)`/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .trim();

    // Line numbers are 1-based in remark's positions.
    const lineNumber = index + 1;

    if (depth === 1) {
      byLine.set(lineNumber, slugFor(text));
      return;
    }
    if (depth > 3) return;

    const slug = slugFor(text);
    byLine.set(lineNumber, slug);
    headings.push({ depth, text, slug, line: lineNumber });
  });

  return { headings, byLine };
}
