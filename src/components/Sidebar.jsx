import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/cn';
import { getSections } from '@/lib/manifest';
import { useLanguage, useTranslate } from '@/i18n/language';
import { Icon } from './Icon';

/**
 * The section navigation.
 *
 * Built entirely from the manifest — there is no list of articles in this file,
 * and adding a Markdown file makes it appear here with no code change. That is
 * the property the whole content architecture exists to provide.
 *
 * EXPANDED BY DEFAULT. For a manual, discoverability beats brevity: a reader who
 * does not yet know the vocabulary cannot guess which collapsed group holds what
 * they need. Groups can still be collapsed, and the choice is remembered, so
 * someone who lives in two chapters can shrink the other thirteen.
 *
 * The active article is scrolled into view on load. Landing on a deep link from
 * search and finding the sidebar scrolled to the top — with no indication of
 * where you are in a fifteen-section manual — is disorienting.
 */

const STORAGE_KEY = 'manual.sidebar.collapsed';

function readCollapsed() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(stored) ? new Set(stored) : new Set();
  } catch {
    return new Set();
  }
}

export function Sidebar({ onNavigate, className }) {
  const { language } = useLanguage();
  const t = useTranslate();
  const location = useLocation();
  const sections = getSections(language);

  const [collapsed, setCollapsed] = useState(readCollapsed);
  const activeRef = useRef(null);
  const scrolledFor = useRef(null);

  const toggle = useCallback((id) => {
    setCollapsed((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        /* The collapse still applies for this visit, it just is not remembered. */
      }
      return next;
    });
  }, []);

  // Once per destination, not on every render: re-running this on a re-render
  // would yank the sidebar back while the reader was scrolling it by hand.
  useEffect(() => {
    if (scrolledFor.current === location.pathname) return;
    scrolledFor.current = location.pathname;
    activeRef.current?.scrollIntoView({ block: 'nearest' });
  }, [location.pathname]);

  return (
    <nav aria-label={t('mainNavigation')} className={cn('pb-12', className)}>
      {sections.map((section) => {
        const isCollapsed = collapsed.has(section.id);
        const title = section.title[language] ?? section.title.en;
        const listId = `sidebar-${section.id}`;
        const holdsActive = section.articles.some(
          (article) => article.route === location.pathname
        );

        return (
          <div key={section.id} className="mb-1">
            <div className="flex items-center gap-1 pr-1">
              {/*
                The heading is a LINK to the section index, not a disclosure.
                Two behaviours on one control is how a reader ends up collapsing
                a group when they meant to open it — so the chevron is its own
                button, with its own accessible name.
              */}
              <Link
                to={`/${section.id}`}
                onClick={onNavigate}
                className={cn(
                  'flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors',
                  holdsActive || location.pathname === `/${section.id}`
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon name={section.icon} className="h-3.5 w-3.5" />
                <span className="truncate">{title}</span>
              </Link>

              <button
                type="button"
                onClick={() => toggle(section.id)}
                aria-expanded={!isCollapsed}
                aria-controls={listId}
                aria-label={title}
                className="rounded p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'h-3.5 w-3.5 transition-transform',
                    isCollapsed && '-rotate-90'
                  )}
                />
              </button>
            </div>

            {/* Hidden rather than unmounted: an `aria-controls` pointing at a
                node that does not exist is a broken relationship, and browser
                find-in-page should not surface a collapsed item either. */}
            <ul id={listId} hidden={isCollapsed} className="mt-0.5 mb-3 space-y-px pl-2.5">
              {section.articles.map((article) => {
                const isActive = article.route === location.pathname;

                return (
                  <li key={article.route}>
                    <NavLink
                      to={article.route}
                      onClick={onNavigate}
                      ref={isActive ? activeRef : undefined}
                      className={({ isActive: active }) =>
                        cn(
                          'block border-l py-1.5 pr-2 pl-3.5 text-[0.8125rem] leading-snug transition-colors',
                          active
                            ? 'border-brand bg-accent/60 font-medium text-foreground'
                            : 'border-border text-muted-foreground hover:border-border-strong hover:bg-accent/40 hover:text-foreground'
                        )
                      }
                    >
                      {/* React Router sets `aria-current="page"` on the active
                          NavLink, so the highlight and the announcement cannot
                          diverge. */}
                      {article.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
