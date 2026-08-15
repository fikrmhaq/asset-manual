import { useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ExternalLink, Link as LinkIcon } from 'lucide-react';

import { cn } from '@/lib/cn';
import { extractHeadings } from '@/lib/headings';
import { useTranslate } from '@/i18n/language';
import { readAlertMarker } from '@/lib/calloutMarker';
import { Callout } from './Callout';
import { Mermaid } from './Mermaid';
import { PermissionBadge, StatusBadge } from './Badges';
import { Screenshot } from './Screenshot';

/**
 * Markdown → React. Not a parser: `react-markdown` (remark/rehype) does the
 * parsing, and everything below is presentation.
 *
 * Content stays PLAIN MARKDOWN — no MDX. Four conventions extend it, all of
 * which degrade to something readable in any other Markdown viewer:
 *
 *   > [!TIP] …                    a callout
 *   `perm:asset:create`           a permission badge
 *   `state:BORROWED`              a status badge
 *   ![alt](/screenshots/…)        a screenshot slot that tolerates a missing file
 *   ```mermaid                    a diagram
 *
 * That constraint is deliberate. The people most likely to correct this manual
 * are the people who operate the application, and they should be able to edit a
 * `.md` file without learning a component syntax.
 *
 * HEADING ANCHORS come from `extractHeadings`, keyed by source line, rather than
 * from `rehype-slug`. The "On this page" rail is built from the same call, so
 * the two cannot disagree about what `#steps-1` refers to.
 */

/** Splits `/assets/creating-an-asset#steps` into its route and its anchor. */
function splitTarget(href) {
  const [path, hash] = String(href).split('#');
  return { path, hash: hash ? `#${hash}` : '' };
}

function isExternal(href) {
  return /^(https?:)?\/\//i.test(href) || href.startsWith('mailto:');
}

export function Markdown({ body }) {
  const navigate = useNavigate();
  const location = useLocation();
  const t = useTranslate();

  // Recomputed only when the article changes. The map is line → anchor, which
  // is what makes duplicate heading text addressable.
  const { byLine } = useMemo(() => extractHeadings(body), [body]);

  /**
   * The anchor decided for the heading written on this source line.
   *
   * `undefined` when the heading is one the rail does not carry (an `h4`, or a
   * heading inside content the extractor skipped): the element then simply has
   * no id, which is correct — an id nothing links to is noise.
   */
  const anchorFor = (node) => {
    const line = node?.position?.start?.line;
    return line === undefined ? undefined : byLine.get(line);
  };

  /**
   * A heading that links to itself.
   *
   * The anchor icon is a real link with an accessible name, not a `¶` glyph
   * that reads as punctuation to a screen reader. It is revealed on hover for
   * sighted readers and always reachable by keyboard.
   */
  const heading = (Tag, className) =>
    function HeadingRenderer({ node, children }) {
      const id = anchorFor(node);

      return (
        <Tag id={id} className={cn('group scroll-mt-24', className)}>
          {children}
          {id ? (
            <a
              href={`#${id}`}
              aria-label={t('content.anchor')}
              onClick={(event) => {
                event.preventDefault();
                navigate({ pathname: location.pathname, hash: `#${id}` });
              }}
              className="ml-2 inline-flex opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
            >
              <LinkIcon aria-hidden="true" className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          ) : null}
        </Tag>
      );
    };

  const components = {
    h1: heading('h2', 'mt-10 mb-3 text-2xl font-semibold'),
    h2: heading('h2', 'mt-10 mb-3 border-b border-border pb-2 text-xl font-semibold'),
    h3: heading('h3', 'mt-8 mb-2 text-lg font-semibold'),
    h4: heading('h4', 'mt-6 mb-2 text-base font-semibold'),

    p: ({ children }) => <p className="my-4 leading-7">{children}</p>,

    ul: ({ children }) => (
      <ul className="my-4 list-disc space-y-2 pl-6 marker:text-border-strong">{children}</ul>
    ),

    /*
     * An ordered list in this manual is almost always a PROCEDURE, and a
     * procedure is read one step at a time. The numbers are therefore given
     * weight and colour rather than left as grey glyphs the eye slides past,
     * and the steps are spaced further apart than bullets so a reader can keep
     * their place while looking away at the actual screen.
     */
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-primary">
        {children}
      </ol>
    ),

    li: ({ children, className }) =>
      /* A GFM task list item carries its own class and must not get a marker. */
      className?.includes('task-list-item') ? (
        <li className="my-1 list-none leading-7 [&>input]:mr-2">{children}</li>
      ) : (
        <li className="leading-7 [&>ul]:my-2 [&>ol]:my-2">{children}</li>
      ),

    hr: () => <hr className="my-8 border-border" />,

    /*
     * A quotation, unless its first line carries an alert marker — in which
     * case it is a callout. Both are blockquotes in the source, which is what
     * keeps the Markdown portable.
     */
    blockquote: ({ children }) => {
      const alert = readAlertMarker(children);
      if (alert) return <Callout kind={alert.kind}>{alert.children}</Callout>;

      return (
        <blockquote className="my-5 border-l-4 border-border-strong pl-4 text-muted-foreground italic">
          {children}
        </blockquote>
      );
    },

    /*
     * Tables scroll INSIDE their own container. A field-reference table has
     * four columns and long descriptions; letting it widen the page would break
     * every other paragraph's measure on a phone.
     *
     * The wrapper is focusable and labelled so the scroll region is reachable
     * without a pointer.
     */
    table: ({ children }) => (
      <div
        tabIndex={0}
        role="region"
        aria-label={t('content.table')}
        className="my-6 overflow-x-auto rounded-lg border border-border bg-card"
      >
        <table className="w-full border-collapse text-left text-[0.875rem]">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-border bg-muted/70">{children}</thead>
    ),
    th: ({ children }) => (
      <th className="px-3.5 py-2.5 align-bottom text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3.5 py-2.5 align-top leading-6 [&_p]:my-0">{children}</td>
    ),
    /*
     * Zebra striping rather than a rule per row. A field-reference table is
     * scanned ACROSS — "which of these is required?" — and a tinted band is a
     * stronger guide for the eye across four columns than a hairline is.
     */
    tr: ({ children }) => (
      <tr className="border-b border-border last:border-b-0 even:bg-muted/25">{children}</tr>
    ),

    a: ({ href = '', children }) => {
      if (isExternal(href)) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1 text-link underline underline-offset-2 hover:text-primary-hover"
          >
            {children}
            <ExternalLink aria-hidden="true" className="h-3 w-3" />
          </a>
        );
      }

      // A bare `#anchor` is a jump within this article. It cannot be a plain
      // href: under a hash router the browser would treat it as a route change.
      if (href.startsWith('#')) {
        return (
          <a
            href={href}
            onClick={(event) => {
              event.preventDefault();
              navigate({ pathname: location.pathname, hash: href });
            }}
            className="text-link underline underline-offset-2 hover:text-primary-hover"
          >
            {children}
          </a>
        );
      }

      // Everything else is an article route. Content writes `/section/slug`,
      // and `section/slug` is accepted too so a frontmatter-style path works.
      const { path, hash } = splitTarget(href);
      const to = path.startsWith('/') ? path : `/${path}`;

      return (
        <Link
          to={{ pathname: to, hash }}
          className="text-link underline underline-offset-2 hover:text-primary-hover"
        >
          {children}
        </Link>
      );
    },

    img: ({ src, alt, title }) => <Screenshot src={src} alt={alt} caption={title} />,

    /*
     * `pre` renders nothing of its own. The `code` renderer below produces the
     * whole block — a diagram or a styled listing — and a wrapping `<pre>`
     * around either would be an extra box with its own margins.
     */
    pre: ({ children }) => <>{children}</>,

    code: ({ className, children }) => {
      const text = String(children ?? '').replace(/\n$/, '');
      const language = /language-(\w+)/.exec(className ?? '')?.[1];

      if (language === 'mermaid') return <Mermaid chart={text} />;

      if (language) {
        return (
          <pre className="my-5 overflow-x-auto rounded-lg border border-border bg-muted/60 p-4 text-[0.8125rem] leading-6">
            <code className="font-mono">{text}</code>
          </pre>
        );
      }

      // Inline. The two prefixed conventions become badges; everything else is
      // ordinary inline code — a field name, a value, a file name.
      if (text.startsWith('perm:')) return <PermissionBadge code={text.slice('perm:'.length)} />;
      if (text.startsWith('state:')) return <StatusBadge value={text.slice('state:'.length)} />;

      return (
        <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.85em]">
          {text}
        </code>
      );
    },

    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,

    input: ({ checked, type }) =>
      /* GFM task lists. Read-only: this is printed text, not a form. */
      type === 'checkbox' ? (
        <input type="checkbox" checked={Boolean(checked)} readOnly className="align-middle" />
      ) : null,
  };

  return (
    /*
     * 16px base at 1.7. Documentation is read for minutes at a time, not
     * glanced at like an application screen, so it takes the larger of the two
     * sizes the design system carries. The measure is capped by the article
     * column, not here.
     */
    <div className="text-base leading-7 text-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {body}
      </ReactMarkdown>
    </div>
  );
}
