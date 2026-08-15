import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { cn } from '@/lib/cn';
import { useTranslate } from '@/i18n/language';

/**
 * "On this page" — built from the same heading extraction that produced the
 * anchors in the article, so a link here always lands somewhere.
 *
 * The active entry is tracked with an `IntersectionObserver` rather than a
 * scroll handler: the browser does the work off the main thread, and a scroll
 * listener recomputing offsets on every frame is exactly the kind of thing that
 * makes a documentation page feel heavy.
 *
 * Headings are observed against a band near the top of the viewport, so the
 * highlighted entry is the section you are READING, not the one just entering
 * from the bottom.
 */
export function TableOfContents({ headings }) {
  const t = useTranslate();
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (headings.length === 0) return undefined;
    if (typeof IntersectionObserver !== 'function') return undefined;

    const elements = headings
      .map((heading) => document.getElementById(heading.slug))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }

        // The first heading in document order that is currently in the band.
        const current = headings.find((heading) => visible.has(heading.slug));
        if (current) setActive(current.slug);
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-labelledby="toc-heading" className="text-sm">
      <h2
        id="toc-heading"
        className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
      >
        {t('onThisPage')}
      </h2>

      <ul className="space-y-0.5 border-l border-border">
        {headings.map((heading) => {
          const isActive = active === heading.slug;

          return (
            <li key={heading.slug}>
              <a
                href={`#${heading.slug}`}
                aria-current={isActive ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  navigate({ pathname: location.pathname, hash: `#${heading.slug}` });
                }}
                className={cn(
                  '-ml-px block border-l-2 py-1 pr-2 leading-snug transition-colors',
                  heading.depth === 3 ? 'pl-6' : 'pl-3',
                  isActive
                    ? 'border-brand font-medium text-foreground'
                    : 'border-transparent text-muted-foreground hover:border-border-strong hover:text-foreground'
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
