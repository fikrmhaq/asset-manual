import { Link } from 'react-router-dom';
import { Menu, Search as SearchIcon } from 'lucide-react';

import { useTranslate } from '@/i18n/language';
import { BrandMark } from './BrandMark';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';

/**
 * The top bar: identity, search, language, theme, and the mobile menu button.
 *
 * IDENTITY IS TWO THINGS. The supplied lockup says which institution; the words
 * beside it say which of its systems, and that this is the manual rather than
 * the application. A reader arriving from a bookmark needs both — the logo alone
 * would not tell them they are not in the product.
 *
 * The search control is a BUTTON that opens the dialog, not an input pretending
 * to be one. An input here would need its own focus handling, results popover
 * and keyboard model, all duplicating the dialog's, and on a phone it would eat
 * half the bar.
 *
 * Language and theme move into the drawer below `sm`. Two segmented controls,
 * the brand and search do not fit a 375px bar without one of them becoming a
 * tap target too small to hit.
 */
export function Header({ onOpenSearch, onOpenMenu }) {
  const t = useTranslate();

  const isMac =
    typeof navigator !== 'undefined' &&
    /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent || '');

  return (
    <header className="sticky top-0 z-30 h-header border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-full max-w-[100rem] items-center gap-2 px-3 sm:gap-3 sm:px-6">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label={t('openMenu')}
          className="-ml-1 rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground lg:hidden"
        >
          <Menu aria-hidden="true" className="h-5 w-5" />
        </button>

        <Link
          to="/"
          className="flex min-w-0 items-center gap-2.5 rounded-md py-1 sm:gap-3"
          /* The link's accessible name is the lockup's alt text plus this; a
             bare logo link announces only the institution, not where it goes. */
          aria-label={`SMK AL-MUFTI — ${t('appName')} ${t('manual')}`}
        >
          <BrandMark />
          <span className="hidden min-w-0 border-l border-border pl-3 sm:block">
            <span className="block truncate text-[0.8125rem] leading-tight font-semibold text-foreground">
              {t('appName')}
            </span>
            <span className="block truncate text-[0.6875rem] leading-tight text-muted-foreground">
              {t('manual')}
            </span>
          </span>
        </Link>

        <div className="flex-1" />

        <button
          type="button"
          onClick={onOpenSearch}
          /*
             An explicit label rather than a visually hidden span. The visible
             text, the shortcut hint and a `sr-only` caption would concatenate
             into "Search Search the manual" — an accessible name assembled by
             accident. This states it once.
          */
          aria-label={t('search.label')}
          className="flex items-center gap-2 rounded-md border border-border bg-muted/40 px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:bg-muted hover:text-foreground md:w-64"
        >
          <SearchIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
          <span className="hidden md:inline">{t('search.short')}</span>
          {/* Decoration for a pointer user, noise for a screen reader, which has
              no use for a key hint. */}
          <kbd
            aria-hidden="true"
            className="ml-auto hidden rounded border border-border bg-background px-1.5 py-0.5 font-sans text-[0.6875rem] text-muted-foreground md:inline"
          >
            {isMac ? t('search.shortcutMac') : t('search.shortcut')}
          </kbd>
        </button>

        <div className="hidden items-center gap-2 sm:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
