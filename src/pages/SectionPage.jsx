import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ListChecks } from 'lucide-react';

import { getSection } from '@/lib/manifest';
import { findSection } from '@/content/sections';
import { useLanguage, useTranslate } from '@/i18n/language';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Icon } from '@/components/Icon';
import { NotFoundPage } from './NotFoundPage';

/**
 * A section's index — every article in it, in reading order, with its own
 * one-line description.
 *
 * This is where the middle breadcrumb leads, and where a reader who knows
 * roughly which chapter they want lands. The descriptions do the work: fifteen
 * titles is a table of contents, fifteen titles with a sentence each is a way of
 * choosing.
 *
 * TASKS ARE SEPARATED from explanatory articles when a section holds both. "How
 * do I return a borrowed unit?" and "Understanding borrowing statuses" are
 * different kinds of need, and mixing them makes the reader read every line to
 * find out which is which.
 */
function ArticleCard({ article, task = false }) {
  return (
    <Link
      to={article.route}
      className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-border-strong hover:bg-accent"
    >
      {task ? (
        <ListChecks aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      ) : null}

      <span className="min-w-0 flex-1">
        <span className="block font-medium text-foreground group-hover:text-primary">
          {article.title}
        </span>
        {article.description ? (
          <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
            {article.description}
          </span>
        ) : null}
      </span>

      <ArrowRight
        aria-hidden="true"
        className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export function SectionPage() {
  const { section: sectionId } = useParams();
  const { language } = useLanguage();
  const t = useTranslate();

  /*
   * A section that is DECLARED but holds no articles yet is a different thing
   * from an address that means nothing.
   *
   * `getSection` reads the tree, which only contains sections that have content.
   * Falling back to the declaration lets a planned-but-unwritten chapter say so
   * — with its real name and its real description — instead of answering "page
   * not found" to someone who followed a perfectly good link.
   */
  const section = getSection(sectionId, language) ?? findSection(sectionId);
  if (!section) return <NotFoundPage />;

  const title = section.title[language] ?? section.title.en;
  const tagline = section.tagline?.[language] ?? section.tagline?.en;

  const all = section.articles ?? [];
  const tasks = all.filter((article) => article.task);
  const articles = all.filter((article) => !article.task);
  const split = tasks.length > 0 && articles.length > 0;

  return (
    <div className="max-w-3xl">
      <Breadcrumbs trail={[{ label: title }]} />

      <header className="mb-8">
        <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-primary">
          <Icon name={section.icon} className="h-5 w-5" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{title}</h1>
        {tagline ? (
          <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{tagline}</p>
        ) : null}
      </header>

      {tasks.length > 0 ? (
        <section aria-labelledby="tasks-heading" className="mb-8">
          {split ? (
            <h2 id="tasks-heading" className="mb-3 text-sm font-semibold text-foreground">
              {t('section.tasks')}
            </h2>
          ) : (
            <h2 id="tasks-heading" className="sr-only">
              {t('section.tasks')}
            </h2>
          )}

          <ul className="space-y-2">
            {tasks.map((article) => (
              <li key={article.route}>
                <ArticleCard article={article} task />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {all.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border-strong bg-muted/30 px-4 py-8 text-center text-sm text-muted-foreground">
          {t('section.empty')}
        </p>
      ) : null}

      {articles.length > 0 ? (
        <section aria-labelledby="articles-heading">
          <h2
            id="articles-heading"
            className={split ? 'mb-3 text-sm font-semibold text-foreground' : 'sr-only'}
          >
            {t('section.articles')}
          </h2>

          <ul className="space-y-2">
            {articles.map((article) => (
              <li key={article.route}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
