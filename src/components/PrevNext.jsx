import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { useTranslate } from '@/i18n/language';

/**
 * Previous / next, following the manual's reading order — the sections in shelf
 * order, and the articles within each in `order` order. That sequence comes from
 * the manifest, so it is the same sequence the sidebar shows; a reader who works
 * straight through the "Next" control sees every article exactly once.
 *
 * The pair is a `<nav>` with its own label. Announcing it as "Article
 * navigation" distinguishes it from the section navigation for a screen-reader
 * user landing on it out of context.
 */
export function PrevNext({ previous, next }) {
  const t = useTranslate();

  if (!previous && !next) return null;

  return (
    <nav
      aria-label={`${t('article.previous')} / ${t('article.next')}`}
      className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
    >
      {previous ? (
        <Link
          to={previous.route}
          rel="prev"
          className="group flex flex-col gap-1 rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-accent"
        >
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
            {t('article.previous')}
          </span>
          <span className="font-medium text-foreground group-hover:text-primary">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          to={next.route}
          rel="next"
          className="group flex flex-col gap-1 rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-border-strong hover:bg-accent sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs font-medium text-muted-foreground">
            {t('article.next')}
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
          <span className="font-medium text-foreground group-hover:text-primary">{next.title}</span>
        </Link>
      ) : null}
    </nav>
  );
}
