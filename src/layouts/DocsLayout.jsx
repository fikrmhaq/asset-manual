import { useCallback, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

import { useTranslate } from '@/i18n/language';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { SearchDialog } from '@/components/SearchDialog';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ThemeToggle } from '@/components/ThemeToggle';

/**
 * The three-column shell: navigation, article, "on this page".
 *
 * On a phone the navigation becomes a drawer and the third column disappears
 * entirely — a table of contents that costs a third of a 375px viewport is worth
 * less than the prose it indexes. The article's own headings are still there to
 * scroll past, which is how a phone reader navigates anyway.
 *
 * The right column is rendered by the ARTICLE, not here, through a portal-free
 * slot: only an article has headings, and a section index has nothing to put
 * there. `DocsLayout` provides the grid; the page fills the cells it has.
 */
export function DocsLayout() {
  const t = useTranslate();
  const location = useLocation();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerCloseRef = useRef(null);
  const mainRef = useRef(null);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  /*
   * Ctrl/⌘-K opens search — the same shortcut the application itself binds for
   * its asset search, so the reflex transfers.
   *
   * `/` is deliberately NOT bound: it is a useful shortcut on a page with no
   * text fields and a trap on one with any.
   */
  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // The drawer closes on navigation; without this, following a link on a phone
  // leaves the reader looking at the menu they just used.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerCloseRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  /*
   * Scroll handling on navigation.
   *
   * A hash router gives the browser no real fragment to jump to, so both cases
   * are handled here — and they are handled DIFFERENTLY, which is the point:
   *
   *   an anchor      → glide, so the reader sees where they were taken
   *   a new article  → jump, instantly, to the top
   *
   * Arriving at a new page is not a movement within a document, and animating
   * it scrolls a screenful of unrelated text past the reader for no reason. It
   * is also fragile: a smooth scroll can be interrupted by anything that
   * touches the scroll position in the same frame, which leaves the reader
   * halfway down an article they have not started. `instant` cannot be
   * interrupted.
   *
   * Both paths respect `prefers-reduced-motion` — the CSS in `index.css` drops
   * `scroll-behavior: smooth` entirely, so `scrollIntoView` becomes a jump too.
   *
   * The frame delay lets the new article commit to the DOM before the target is
   * looked up.
   */
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) {
          target.scrollIntoView({ block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return (
    <div className="min-h-screen bg-canvas">
      {/* First tab stop on every page: past the navigation, into the article. */}
      <a href="#manual-content" className="skip-link">
        {t('skipToContent')}
      </a>

      <Header onOpenSearch={openSearch} onOpenMenu={() => setMenuOpen(true)} />

      <div className="mx-auto flex max-w-[100rem] px-4 sm:px-6">
        {/* Desktop rail. `aria-hidden` is not needed — it is simply not
            rendered below `lg`, so there is no duplicate navigation for a
            screen reader to walk twice. */}
        <div className="hidden w-sidebar shrink-0 lg:block">
          <div className="sticky top-header max-h-[calc(100vh-var(--spacing-header))] overflow-y-auto py-8 pr-4">
            <Sidebar />
          </div>
        </div>

        <main
          id="manual-content"
          ref={mainRef}
          tabIndex={-1}
          className="min-w-0 flex-1 py-8 lg:px-8"
        >
          <Outlet context={{ openSearch }} />
        </main>
      </div>

      {/* Mobile drawer */}
      {menuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-neutral-950/40"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t('mainNavigation')}
            className="fixed inset-y-0 left-0 flex w-[85vw] max-w-xs flex-col border-r border-border bg-background shadow-lg"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
              <button
                ref={drawerCloseRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t('closeMenu')}
                className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-2 py-4">
              <Sidebar onNavigate={() => setMenuOpen(false)} />
            </div>
          </div>
        </div>
      ) : null}

      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </div>
  );
}
