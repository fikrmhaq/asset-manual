import { Link, useParams } from 'react-router-dom';

import { getArticle, getNeighbours, resolveRelated } from '@/lib/manifest';
import { findSection } from '@/content/sections';
import { useLanguage, useTranslate } from '@/i18n/language';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Callout } from '@/components/Callout';
import { Markdown } from '@/components/Markdown';
import { PermissionBadge } from '@/components/Badges';
import { PrevNext } from '@/components/PrevNext';
import { TableOfContents } from '@/components/TableOfContents';
import { NotFoundPage } from './NotFoundPage';

/**
 * One article.
 *
 * Everything on this page except the prose comes from the manifest: the
 * breadcrumb trail, the permission strip, the "on this page" rail, the related
 * links and the previous/next pair. Writing an article means writing Markdown.
 */
export function ArticlePage() {
  const { section: sectionId, slug } = useParams();
  const { language } = useLanguage();
  const t = useTranslate();

  const route = `/${sectionId}/${slug}`;
  const found = getArticle(route, language);

  if (!found) return <NotFoundPage />;

  const { document: article, fallback } = found;
  const section = findSection(article.section);
  const sectionTitle = section?.title?.[language] ?? section?.title?.en ?? article.section;

  const { previous, next } = getNeighbours(route, language);
  const related = article.related
    .map((entry) => resolveRelated(entry, language))
    .filter((entry) => entry && entry.route !== route);

  return (
    <div className="flex gap-8">
      <article className="min-w-0 max-w-3xl flex-1">
        <Breadcrumbs
          trail={[
            { label: sectionTitle, to: `/${article.section}` },
            { label: article.title },
          ]}
        />

        <header className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">{article.title}</h1>
          {article.description ? (
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
              {article.description}
            </p>
          ) : null}

          {/*
            The permissions a reader needs for the actions described below.
            Stated up front rather than buried in step 4: someone without them
            should be able to stop reading and go and ask for access.
          */}
          {article.permissions.length > 0 ? (
            <div className="mt-4 flex flex-wrap items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {t('article.permissions')}
              </span>
              {article.permissions.map((code) => (
                <PermissionBadge key={code} code={code} />
              ))}
              <span className="w-full text-xs text-muted-foreground">
                {t('article.permissionsHint')}
              </span>
            </div>
          ) : null}
        </header>

        {fallback ? (
          <Callout kind="note" title={t('language.fallbackTitle')}>
            <p>{t('language.fallbackBody')}</p>
          </Callout>
        ) : null}

        {/* The article's own headings live inside here, and their ids are what
            the rail on the right links to. */}
        <Markdown key={`${article.id}`} body={article.body} />

        {related.length > 0 ? (
          <section aria-labelledby="related-heading" className="mt-10">
            <h2 id="related-heading" className="mb-3 text-sm font-semibold text-foreground">
              {t('article.related')}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {related.map((entry) => (
                <li key={entry.route}>
                  <Link
                    to={entry.route}
                    className="block rounded-lg border border-border bg-card p-3 transition-colors hover:border-border-strong hover:bg-accent"
                  >
                    <span className="block text-sm font-medium text-foreground">{entry.title}</span>
                    {entry.description ? (
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {entry.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <PrevNext previous={previous} next={next} />
      </article>

      {/*
        Hidden below `xl` — see DocsLayout on why the phone does without it.

        A plain `div`, not an `aside`: `aside` is a complementary LANDMARK, and
        an unlabelled landmark wrapping a labelled `nav` gives a screen-reader
        user two entries in the landmark list for one thing. The `nav` inside is
        the landmark that earns its place.
      */}
      <div className="hidden w-toc shrink-0 xl:block">
        <div className="sticky top-header max-h-[calc(100vh-var(--spacing-header))] overflow-y-auto py-2">
          <TableOfContents headings={article.headings} />
        </div>
      </div>
    </div>
  );
}
