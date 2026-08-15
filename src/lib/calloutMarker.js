/**
 * Reads a `[!TIP]` marker off a rendered blockquote.
 *
 * Content writes callouts as GitHub-style alerts, which keeps the Markdown
 * portable. `react-markdown` hands the blockquote its ALREADY-RENDERED React
 * children, so the marker has to be recognised in the rendered tree rather than
 * in the source text. Only the first text node of the first paragraph is
 * inspected, and the marker is removed from it — everything else passes
 * through untouched.
 *
 * Lives outside the component file so `Callout.jsx` exports a component and
 * nothing else; see `i18n/language.js` for why that matters.
 */

export const CALLOUT_KINDS = ['note', 'tip', 'important', 'warning', 'caution', 'limitation'];

const MARKER = /^\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|LIMITATION)\]\s*\n?/i;

/**
 * @returns {{kind: string, children: unknown} | null} null when this blockquote
 *   is an ordinary quotation and should render as one.
 */
export function readAlertMarker(children) {
  const nodes = Array.isArray(children) ? children : [children];
  const first = nodes.find((node) => node && typeof node === 'object' && node.props);

  if (!first) return null;

  const inner = first.props.children;
  const parts = Array.isArray(inner) ? inner : [inner];
  const head = parts[0];

  if (typeof head !== 'string') return null;

  const match = head.match(MARKER);
  if (!match) return null;

  const kind = match[1].toLowerCase();
  const remainder = head.slice(match[0].length).replace(/^\s+/, '');

  // Rebuild the first paragraph without the marker, dropping it entirely when
  // the marker was the whole line (the usual case).
  const rebuiltParts = [remainder, ...parts.slice(1)].filter(
    (part) => part !== '' && part !== undefined && part !== null
  );

  const rebuiltFirst =
    rebuiltParts.length > 0 ? { ...first, props: { ...first.props, children: rebuiltParts } } : null;

  const rest = nodes.slice(nodes.indexOf(first) + 1);

  return { kind, children: [rebuiltFirst, ...rest].filter(Boolean) };
}
