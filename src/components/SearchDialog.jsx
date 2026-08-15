import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CornerDownLeft, FileText, ListChecks, Search as SearchIcon, X } from 'lucide-react';

import { cn } from '@/lib/cn';
import { buildIndex, highlight, search as runSearch } from '@/lib/search';
import { getTasks } from '@/lib/manifest';
import { useLanguage, useTranslate } from '@/i18n/language';

/**
 * The search dialog.
 *
 * Entirely client-side: the index is built in the browser from Markdown that is
 * already in the bundle. There is no endpoint, no network call, and the manual
 * searches identically when served from a memory stick.
 *
 * BUILT ON FIRST OPEN, not at startup, and cached per language afterwards.
 * Indexing every fragment of every article costs real milliseconds, and a reader
 * who came for one article should not pay them.
 *
 * ACCESSIBILITY. A hand-rolled modal, so the three things hand-rolled modals
 * usually get wrong are done explicitly: focus moves in on open and returns to
 * the trigger on close, Escape closes it, and the listbox is driven with
 * `aria-activedescendant` so the arrows move a selection while focus — and
 * therefore typing — stays in the text field.
 */

const indexCache = new Map();

function getIndex(language) {
  if (!indexCache.has(language)) indexCache.set(language, buildIndex(language));
  return indexCache.get(language);
}

/** Matched runs marked, unmatched runs plain. Data in, elements out. */
function Highlighted({ text, terms }) {
  return highlight(text, terms).map((part, index) =>
    part.match ? (
      <mark
        key={index}
        className="rounded-[2px] bg-important-surface px-0.5 text-inherit underline decoration-important-border decoration-1 underline-offset-2"
      >
        {part.text}
      </mark>
    ) : (
      <span key={index}>{part.text}</span>
    )
  );
}

export function SearchDialog({ open, onClose }) {
  const t = useTranslate();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [index, setIndex] = useState(null);

  const inputRef = useRef(null);
  const listRef = useRef(null);
  const restoreFocusTo = useRef(null);

  useEffect(() => {
    if (!open) return;
    setIndex(getIndex(language));
  }, [open, language]);

  useEffect(() => {
    if (open) return;
    setQuery('');
    setSelected(0);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    restoreFocusTo.current = document.activeElement;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      // Returning focus is what lets a reader dismiss without losing their
      // place: they land back on the control that opened the dialog.
      if (restoreFocusTo.current instanceof HTMLElement) restoreFocusTo.current.focus();
    };
  }, [open]);

  const results = useMemo(() => {
    if (!index) return [];
    return runSearch(index, query, { limit: 12 });
  }, [index, query]);

  /*
   * What to offer before anything has been typed.
   *
   * A blank panel makes the reader invent a query. Half a dozen real task
   * titles teach the vocabulary the manual uses AND double as a shortcut, which
   * is what most people wanted from search in the first place.
   */
  const suggestions = useMemo(() => (open ? getTasks(language).slice(0, 6) : []), [open, language]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const go = useCallback(
    (target) => {
      if (!target) return;
      navigate({
        pathname: target.route,
        hash: target.anchor ? `#${target.anchor}` : '',
      });
      onClose();
    },
    [navigate, onClose]
  );

  // Arrow keys walk whichever list is on screen.
  const navigable = query.trim().length < 2 ? suggestions : results;

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelected((current) => (navigable.length === 0 ? 0 : (current + 1) % navigable.length));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelected((current) =>
        navigable.length === 0 ? 0 : (current - 1 + navigable.length) % navigable.length
      );
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      go(navigable[selected]);
    }
  };

  useEffect(() => {
    const node = listRef.current?.querySelector('[data-selected="true"]');
    node?.scrollIntoView({ block: 'nearest' });
  }, [selected, results, suggestions]);

  if (!open) return null;

  const showingSuggestions = query.trim().length < 2;
  const activeId = navigable[selected] ? `search-result-${selected}` : undefined;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6">
      <div
        className="fixed inset-0 bg-neutral-950/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={t('search.label')}
        className="relative mt-[6vh] flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <SearchIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-activedescendant={activeId}
            aria-label={t('search.label')}
            autoComplete="off"
            spellCheck="false"
            placeholder={t('search.placeholder')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="h-12 w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t('search.close')}
            className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>

        {/* A live region, so the count is heard as it changes rather than found
            by arrowing into the list. */}
        <p aria-live="polite" className="sr-only">
          {showingSuggestions
            ? t('search.empty')
            : results.length === 1
              ? t('search.oneResult')
              : t('search.results', { count: results.length })}
        </p>

        <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto">
          {showingSuggestions ? (
            <div className="py-2">
              <p className="px-4 py-2 text-[0.6875rem] font-semibold tracking-wide text-muted-foreground uppercase">
                {t('landing.popularTasks')}
              </p>
              <ul id="search-results" role="listbox" aria-label={t('search.label')}>
                {suggestions.map((task, position) => {
                  const isSelected = position === selected;

                  return (
                    <li key={task.route}>
                      <button
                        type="button"
                        id={`search-result-${position}`}
                        role="option"
                        aria-selected={isSelected}
                        data-selected={isSelected}
                        onClick={() => go(task)}
                        onMouseEnter={() => setSelected(position)}
                        className={cn(
                          'flex w-full items-center gap-3 px-4 py-2 text-left text-sm',
                          isSelected ? 'bg-accent' : 'hover:bg-accent/60'
                        )}
                      >
                        <ListChecks
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-muted-foreground"
                        />
                        <span className="min-w-0 flex-1 truncate text-foreground">
                          {task.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="text-sm font-medium text-foreground">
                {t('search.noResults', { query })}
              </p>
              <p className="mx-auto mt-1.5 max-w-sm text-xs text-muted-foreground">
                {t('search.noResultsHint')}
              </p>
            </div>
          ) : (
            <ul id="search-results" role="listbox" aria-label={t('search.label')} className="py-2">
              {results.map((result, position) => {
                const isSelected = position === selected;

                return (
                  <li key={result.id}>
                    <button
                      type="button"
                      id={`search-result-${position}`}
                      role="option"
                      aria-selected={isSelected}
                      data-selected={isSelected}
                      onClick={() => go(result)}
                      onMouseEnter={() => setSelected(position)}
                      className={cn(
                        'flex w-full items-start gap-3 px-4 py-2.5 text-left',
                        isSelected ? 'bg-accent' : 'hover:bg-accent/60'
                      )}
                    >
                      {result.task ? (
                        <ListChecks
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        />
                      ) : (
                        <FileText
                          aria-hidden="true"
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                        />
                      )}

                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-sm font-medium text-foreground">
                            <Highlighted text={result.title} terms={result.terms} />
                          </span>
                          {result.heading ? (
                            <span className="text-xs text-muted-foreground">
                              › <Highlighted text={result.heading} terms={result.terms} />
                            </span>
                          ) : null}
                        </span>

                        {result.excerpt ? (
                          <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">
                            <Highlighted text={result.excerpt} terms={result.terms} />
                          </span>
                        ) : null}

                        <span className="mt-1 block text-[0.6875rem] tracking-wide text-muted-foreground uppercase">
                          {t('search.inSection', { section: result.section })}
                        </span>
                      </span>

                      {isSelected ? (
                        <CornerDownLeft
                          aria-hidden="true"
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground"
                        />
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Keyboard affordances, hidden from assistive tech: a screen-reader
            user already knows the arrows work, and does not need a legend. */}
        <div
          aria-hidden="true"
          className="flex items-center gap-4 border-t border-border bg-muted/40 px-4 py-2 text-[0.6875rem] text-muted-foreground"
        >
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-background px-1">↑</kbd>
            <kbd className="rounded border border-border bg-background px-1">↓</kbd>
            {t('search.keys.navigate')}
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-background px-1">↵</kbd>
            {t('search.keys.select')}
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-background px-1">esc</kbd>
            {t('search.keys.close')}
          </span>
        </div>
      </div>
    </div>
  );
}
