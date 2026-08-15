import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import { useTranslate } from '@/i18n/language';

/**
 * Home › Section › Article.
 *
 * A real `<nav>` with an ordered list, because the order is the meaning. The
 * last crumb is the current page and is NOT a link — a link to where you already
 * are is a keyboard stop that leads nowhere.
 */
export function Breadcrumbs({ trail }) {
  const t = useTranslate();

  return (
    <nav aria-label={t('breadcrumb')} className="mb-4 text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
        <li>
          <Link to="/" className="rounded hover:text-foreground hover:underline">
            {t('home')}
          </Link>
        </li>

        {trail.map((crumb, index) => {
          const last = index === trail.length - 1;

          return (
            <Fragment key={crumb.to ?? crumb.label}>
              <li aria-hidden="true" className="text-border-strong">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                {last || !crumb.to ? (
                  <span aria-current="page" className="font-medium text-foreground">
                    {crumb.label}
                  </span>
                ) : (
                  <Link to={crumb.to} className="rounded hover:text-foreground hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
