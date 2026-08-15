import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';

import { getSections, getTasks } from '@/lib/manifest';
import { useLanguage, useTranslate } from '@/i18n/language';
import { Icon } from '@/components/Icon';

/**
 * The landing page. Its only job is to get the reader off it quickly.
 *
 * Three routes out, in the order people actually use them: search, a common
 * task, or the right chapter. No hero image, no product pitch — whoever is here
 * already owns the software and has a job to finish.
 *
 * The search control is a button that opens the same dialog as the header's, not
 * a second search implementation.
 */
export function HomePage() {
  const { language } = useLanguage();
  const t = useTranslate();
  const { openSearch } = useOutletContext() ?? {};

  const sections = getSections(language).filter((section) => !section.secondary);
  const secondary = getSections(language).filter((section) => section.secondary);
  const tasks = getTasks(language).slice(0, 8);

  return (
    <div className="mx-auto max-w-4xl">
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {t('landing.heading')}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
          {t('landing.subheading')}
        </p>

        <button
          type="button"
          onClick={openSearch}
          /* One stated name, for the same reason as the header's control. */
          aria-label={t('search.label')}
          className="mx-auto mt-6 flex w-full max-w-xl items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-left text-muted-foreground shadow-xs transition-colors hover:border-border-strong hover:text-foreground"
        >
          <SearchIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span className="flex-1 text-sm">{t('search.placeholder')}</span>
        </button>
      </section>

      {tasks.length > 0 ? (
        <section aria-labelledby="tasks-heading" className="mb-10">
          <div className="mb-3 flex items-baseline justify-between gap-4">
            <h2 id="tasks-heading" className="text-sm font-semibold text-foreground">
              {t('landing.popularTasks')}
            </h2>
            <Link
              to="/how-do-i"
              className="text-sm text-link underline-offset-2 hover:underline"
            >
              {t('landing.allTasks')}
            </Link>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {tasks.map((task) => (
              <li key={task.route}>
                <Link
                  to={task.route}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-sm transition-colors hover:border-border-strong hover:bg-accent"
                >
                  <span className="min-w-0 flex-1 truncate font-medium text-foreground group-hover:text-primary">
                    {task.title}
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section aria-labelledby="browse-heading">
        <h2 id="browse-heading" className="mb-3 text-sm font-semibold text-foreground">
          {t('landing.browse')}
        </h2>

        <ul className="grid gap-3 sm:grid-cols-2">
          {sections.map((section) => {
            const count = section.articles.length;

            return (
              <li key={section.id}>
                <Link
                  to={`/${section.id}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-accent"
                >
                  <span className="mb-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-background text-primary">
                      <Icon name={section.icon} />
                    </span>
                    <span className="font-medium text-foreground group-hover:text-primary">
                      {section.title[language] ?? section.title.en}
                    </span>
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {section.tagline?.[language] ?? section.tagline?.en}
                  </span>
                  <span className="mt-2 text-xs text-muted-foreground">
                    {count === 1 ? t('landing.oneArticle') : t('landing.articles', { count })}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {secondary.length > 0 ? (
        <section className="mt-8 border-t border-border pt-6">
          <ul className="flex flex-wrap gap-3">
            {secondary.map((section) => (
              <li key={section.id}>
                <Link
                  to={`/${section.id}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <Icon name={section.icon} className="h-3.5 w-3.5" />
                  {section.title[language] ?? section.title.en}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
