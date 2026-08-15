/**
 * Frontmatter reader for the manual's Markdown files.
 *
 * This is NOT a YAML implementation and is not trying to be one. It reads the
 * five shapes the content actually uses — a scalar, a quoted scalar, a number, a
 * boolean, and a dash list of scalars — and nothing else. `gray-matter` would
 * pull js-yaml and a Buffer polyfill into a static bundle to parse six keys.
 *
 * Note the division of labour: this parses METADATA. The Markdown body is handed
 * to `react-markdown` untouched — nothing here attempts to parse Markdown.
 *
 * An unrecognised construct is skipped rather than guessed at, and the file
 * still renders; `manifest.js` reports what a missing `title` cost.
 */

const DELIMITER = /^---\r?\n/;

/** `"quoted"` / `'quoted'` → bare, and only when the quotes actually wrap. */
function unquote(value) {
  const trimmed = value.trim();
  const first = trimmed[0];
  const last = trimmed[trimmed.length - 1];

  if (trimmed.length >= 2 && (first === '"' || first === "'") && last === first) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

/** Scalars keep their type: `order: 10` must sort as a number, not as "10". */
function coerce(raw) {
  const value = unquote(raw);

  if (value === '') return '';
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'null' || value === '~') return null;

  // Only a plain integer or decimal. A classification code such as `202010500200`
  // stays a string when quoted, which is why `unquote` runs first.
  if (/^-?\d+(\.\d+)?$/.test(value) && raw.trim() === value) return Number(value);

  return value;
}

/**
 * @param {string} source raw file contents
 * @returns {{data: Record<string, unknown>, body: string}}
 */
export function parseFrontmatter(source) {
  const text = String(source ?? '').replace(/^\uFEFF/, '');

  if (!DELIMITER.test(text)) return { data: {}, body: text };

  const afterOpening = text.replace(DELIMITER, '');
  const closing = afterOpening.search(/^---\s*$/m);

  // An unterminated block is a content bug, not a reason to lose the article.
  if (closing === -1) return { data: {}, body: text };

  const block = afterOpening.slice(0, closing);
  const body = afterOpening.slice(closing).replace(/^---\s*\r?\n?/, '');

  const data = {};
  let listKey = null;

  for (const line of block.split(/\r?\n/)) {
    if (line.trim() === '' || line.trimStart().startsWith('#')) continue;

    // A list item belongs to the key that opened the list above it.
    const item = line.match(/^\s*-\s+(.*)$/);
    if (item && listKey) {
      data[listKey].push(coerce(item[1]));
      continue;
    }

    const pair = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!pair) continue;

    const [, key, rest] = pair;

    if (rest.trim() === '') {
      // `key:` with nothing after it opens a list. If no items follow, it stays
      // an empty array, which reads the same everywhere downstream.
      listKey = key;
      data[key] = [];
      continue;
    }

    // Inline arrays: `permissions: [asset:read, asset:create]`.
    const inline = rest.trim().match(/^\[(.*)\]$/);
    if (inline) {
      data[key] = inline[1]
        .split(',')
        .map((entry) => coerce(entry))
        .filter((entry) => entry !== '');
      listKey = null;
      continue;
    }

    data[key] = coerce(rest);
    listKey = null;
  }

  return { data, body };
}
