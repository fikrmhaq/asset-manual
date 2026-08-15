import { describe, expect, it } from 'vitest';
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderManual } from './render';
import { getAllArticles, getArticle, getTasks, getTree } from '@/lib/manifest';
import { SECTIONS } from '@/content/sections';
import { resolveAssetUrl } from '@/lib/assetUrl';

/**
 * The header's search control.
 *
 * Scoped to the banner landmark on purpose: the home page offers a second
 * button that opens the same dialog, and two controls for one action is the
 * intended design — the ambiguity is the test's to resolve, not the UI's.
 */
async function openSearchFromHeader() {
  const banner = await screen.findByRole('banner');
  // Either language: the control is labelled from the strings catalogue, so a
  // test that hardcoded the English name would only ever pass in English.
  return within(banner).getByRole('button', { name: /search the manual|cari di panduan/i });
}

/**
 * The application shell, exercised the way a reader uses it.
 *
 * These tests drive the REAL routes, layout and components — see `render.jsx` —
 * so they fail when navigation, rendering or the providers break, not merely
 * when a component's internals change.
 */

describe('the home page', () => {
  it('offers search, common tasks and every populated section', async () => {
    renderManual();

    expect(await screen.findByRole('heading', { level: 1, name: /how can we help/i })).toBeVisible();

    // The task list is derived from `task: true`, not hard-coded.
    const tasks = getTasks('en');
    expect(tasks.length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: tasks[0].title })[0]).toBeVisible();

    expect(screen.getByRole('heading', { name: /browse the manual/i })).toBeVisible();
  });

  it('opens the search dialog from the page search control', async () => {
    const user = userEvent.setup();
    renderManual();

    await user.click(await openSearchFromHeader());

    expect(await screen.findByRole('dialog', { name: /search the manual/i })).toBeVisible();
  });
});

describe('navigating', () => {
  it('renders an article from its route, with breadcrumbs and a heading', async () => {
    renderManual({ route: '/concepts/asset-vs-asset-unit' });

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Asset vs Asset Unit' })
    ).toBeVisible();

    const crumbs = screen.getByRole('navigation', { name: /breadcrumb/i });
    expect(within(crumbs).getByRole('link', { name: 'Home' })).toBeVisible();
    expect(within(crumbs).getByRole('link', { name: 'Concepts' })).toBeVisible();
    // The current page is text, not a link.
    expect(within(crumbs).getByText('Asset vs Asset Unit')).toBeVisible();
  });

  it('moves between articles through the sidebar', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/concepts/asset-vs-asset-unit' });

    const sidebar = await screen.findByRole('navigation', { name: /manual sections/i });
    await user.click(within(sidebar).getByRole('link', { name: 'How do I create an asset?' }));

    expect(
      await screen.findByRole('heading', { level: 1, name: 'How do I create an asset?' })
    ).toBeVisible();
  });

  it('marks the current article in the sidebar', async () => {
    renderManual({ route: '/concepts/asset-vs-asset-unit' });

    const sidebar = await screen.findByRole('navigation', { name: /manual sections/i });
    const current = within(sidebar).getByRole('link', { current: 'page' });
    expect(current).toHaveTextContent('Asset vs Asset Unit');
  });

  it('walks forward with the next control', async () => {
    const user = userEvent.setup();
    const all = getAllArticles('en');
    const first = all[0];

    renderManual({ route: first.route });

    const nav = await screen.findByRole('navigation', { name: /previous \/ next/i });
    await user.click(within(nav).getByRole('link', { name: new RegExp(all[1].title, 'i') }));

    expect(await screen.findByRole('heading', { level: 1, name: all[1].title })).toBeVisible();
  });

  it('shows a section index that lists its articles', async () => {
    renderManual({ route: '/how-do-i' });

    expect(await screen.findByRole('heading', { level: 1, name: /how do i/i })).toBeVisible();

    /*
     * Scoped to the content area — the sidebar lists the same articles, and
     * that duplication is the design.
     *
     * Anchored at the start rather than matched exactly: a card's accessible
     * name is its title AND its description. Anchoring still separates
     * "How do I view an asset?" from "How do I view an asset unit?", because
     * the question mark is part of the title.
     */
    const main = screen.getByRole('main');
    for (const task of getTasks('en').filter((t) => t.section === 'how-do-i')) {
      const atStart = new RegExp(`^${task.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`);
      expect(within(main).getByRole('link', { name: atStart })).toBeVisible();
    }
  });

  it('says an address means nothing rather than rendering an empty page', async () => {
    renderManual({ route: '/concepts/no-such-article' });

    expect(await screen.findByRole('heading', { name: /page not found/i })).toBeVisible();
  });

  /*
   * A section declared in `sections.js` with no articles yet must show its own
   * name and an empty state, not "page not found" — someone following a link to
   * a planned chapter should be told it is empty, not that it does not exist.
   *
   * The section under test is DISCOVERED rather than named, because which
   * sections are empty changes as the corpus grows. Once every declared section
   * has content the assertion inverts into the stronger claim, which is the
   * outcome actually wanted.
   */
  it('names a declared but unwritten section instead of 404ing', async () => {
    const populated = new Set(getTree().map((section) => section.id));
    const empty = SECTIONS.find((section) => !populated.has(section.id));

    if (!empty) {
      expect(SECTIONS.map((section) => section.id).sort()).toEqual([...populated].sort());
      return;
    }

    renderManual({ route: `/${empty.id}` });

    expect(
      await screen.findByRole('heading', { level: 1, name: empty.title.en })
    ).toBeVisible();
    expect(screen.getByText(/no articles have been published/i)).toBeVisible();
  });
});

describe('markdown rendering', () => {
  it('renders headings, tables, lists and links as real elements', async () => {
    renderManual({ route: '/how-do-i/create-an-asset' });

    await screen.findByRole('heading', { level: 1 });

    expect(screen.getByRole('heading', { level: 2, name: /steps/i })).toBeVisible();
    expect(screen.getByRole('table')).toBeVisible();
    expect(screen.getAllByRole('list').length).toBeGreaterThan(0);
    // An internal link resolves to a route, not an external href.
    expect(screen.getAllByRole('link', { name: /asset vs asset unit/i })[0]).toHaveAttribute(
      'href',
      expect.stringContaining('/concepts/asset-vs-asset-unit')
    );
  });

  it('gives every heading an anchor that the table of contents points at', async () => {
    const { container } = renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    const ids = [...container.querySelectorAll('article h2[id], article h3[id]')].map((h) => h.id);
    expect(ids.length).toBeGreaterThan(0);

    const toc = screen.getByRole('navigation', { name: /on this page/i });
    const targets = within(toc)
      .getAllByRole('link')
      .map((link) => link.getAttribute('href').replace('#', ''));

    expect(targets.length).toBeGreaterThan(0);
    for (const target of targets) expect(ids).toContain(target);
  });

  it('turns an alert blockquote into a callout', async () => {
    renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    // `> [!NOTE]` in the source, not a quotation.
    const note = screen.getByRole('note', { name: /^note$/i });
    expect(note).toBeVisible();
    expect(note).not.toHaveTextContent('[!NOTE]');
  });

  it('renders a permission strip from frontmatter', async () => {
    renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    expect(screen.getByText('Requires permission')).toBeVisible();
    expect(screen.getByText('asset:create')).toBeVisible();
  });

  it('renders a status badge with its label and its stored value', async () => {
    renderManual({ route: '/how-do-i/add-an-asset-unit' });
    await screen.findByRole('heading', { level: 1 });

    // `state:REGISTERED` → the label the application shows, plus the raw value.
    expect(screen.getAllByText('Registered').length).toBeGreaterThan(0);
    expect(screen.getAllByText('REGISTERED').length).toBeGreaterThan(0);
  });

  it('renders a screenshot slot pointing at the authored path', async () => {
    const { container } = renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    const image = container.querySelector('article figure img');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toMatch(/screenshots\/assets\/create-asset\.png$/);
  });

  it('rewrites an authored path onto the build base, so a sub-path deploy works', () => {
    // The build ships `base: './'`; a host serving the manual under `/manual/`
    // must not have its images requested from the domain root.
    expect(resolveAssetUrl('/screenshots/a.png', '/manual/')).toBe('/manual/screenshots/a.png');
    expect(resolveAssetUrl('/screenshots/a.png', '/')).toBe('/screenshots/a.png');
    // Absolute and data URLs are left exactly as written.
    expect(resolveAssetUrl('https://example.test/a.png', '/manual/')).toBe(
      'https://example.test/a.png'
    );
  });

  it('shows a placeholder when the screenshot file is not there', async () => {
    const { container } = renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    const image = container.querySelector('article figure img');

    // jsdom does not fetch images, so the failure a browser reports for a
    // missing file is raised here directly.
    fireEvent.error(image);

    await waitFor(() =>
      expect(screen.getByText(/the written steps above are complete/i)).toBeVisible()
    );
    expect(container.querySelector('article figure img')).toBeNull();
    // The caption survives as the placeholder's label, so the reader still
    // knows which screen the missing picture was of.
    expect(screen.getByText('The New asset form')).toBeVisible();
  });
});

describe('search', () => {
  it('finds an article by a phrase that is not in it verbatim', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    await user.type(within(dialog).getByRole('combobox'), 'move a laptop');

    await waitFor(() => expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(0));
  });

  it('navigates to the chosen result', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    await user.type(within(dialog).getByRole('combobox'), 'borrowing status');
    await waitFor(() => expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(0));

    await user.click(within(dialog).getAllByRole('option')[0]);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(await screen.findByRole('heading', { level: 1 })).toBeVisible();
  });

  it('is keyboard-driven: arrows select, Enter opens, Escape closes', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');
    const input = within(dialog).getByRole('combobox');

    await user.type(input, 'asset');
    await waitFor(() => expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(1));

    // Focus stays in the field; the selection moves via aria-activedescendant.
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveFocus();
    expect(input.getAttribute('aria-activedescendant')).toBe('search-result-1');

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('says so when nothing matches, without clearing what was typed', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    await user.type(within(dialog).getByRole('combobox'), 'zzzzqqqq');

    expect(await within(dialog).findByText(/nothing matches/i)).toBeVisible();
    expect(within(dialog).getByRole('combobox')).toHaveValue('zzzzqqqq');
  });

  /*
   * The queries below are the ones a reader actually types — a whole question,
   * in either language, using the word they know rather than the word the
   * application uses. Each asserts the FIRST result, because a manual's search
   * is judged on its top hit.
   */
  it.each([
    ['how do I move a laptop', /move an asset unit/i],
    ['who changed this', /audit/i],
    ['forgot password', /signing in|create a user/i],
    ['cara meminjam aset', /membuat peminjaman/i],
    ['cara mengembalikan aset', /pengembalian peminjaman/i],
    ['apa itu unit aset', /aset vs unit aset|unit aset/i],
    ['cara membuat lokasi', /membuat lokasi/i],
  ])('answers %j with the right article first', async (query, expected) => {
    const user = userEvent.setup();
    const language = /^(cara|apa|bagaimana|kenapa)/.test(query) ? 'id' : 'en';
    renderManual({ route: '/', language });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    await user.type(within(dialog).getByRole('combobox'), query);
    await waitFor(() => expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(0));

    expect(within(dialog).getAllByRole('option')[0]).toHaveTextContent(expected);
  });

  it('drops question words that match almost every article', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/', language: 'id' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    // "cara" prefixes nearly every task title in Indonesian, so on its own it
    // carries no information and is treated as a stopword.
    await user.type(within(dialog).getByRole('combobox'), 'cara');

    await waitFor(() => expect(within(dialog).getByText(/tidak ada yang cocok/i)).toBeVisible());
  });

  it('keeps callout markers out of the excerpt a reader sees', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    await user.type(within(dialog).getByRole('combobox'), 'password');
    await waitFor(() => expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(0));

    // `> [!LIMITATION]` is syntax; it must not surface as text in a result.
    expect(dialog.textContent).not.toMatch(/\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|LIMITATION)\]/);
  });

  it('suggests tasks before anything is typed', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });

    await user.click(await openSearchFromHeader());
    const dialog = await screen.findByRole('dialog');

    expect(within(dialog).getAllByRole('option').length).toBeGreaterThan(0);
  });
});

describe('theme', () => {
  it('applies the class the dark variant is keyed to, and remembers the choice', async () => {
    const user = userEvent.setup();
    renderManual({ theme: 'light' });

    expect(document.documentElement).not.toHaveClass('dark');

    await user.click((await screen.findAllByRole('radio', { name: 'Dark' }))[0]);

    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('manual.theme')).toBe('dark');
  });

  it('offers system as a real third choice', async () => {
    const user = userEvent.setup();
    renderManual({ theme: 'dark' });

    await user.click((await screen.findAllByRole('radio', { name: 'System' }))[0]);

    expect(localStorage.getItem('manual.theme')).toBe('system');
    // The stub reports a light system preference.
    expect(document.documentElement).not.toHaveClass('dark');
  });
});

describe('language', () => {
  it('switches the chrome and the article together', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/concepts/asset-vs-asset-unit', language: 'en' });

    expect(await screen.findByRole('heading', { level: 1, name: 'Asset vs Asset Unit' })).toBeVisible();

    await user.click((await screen.findAllByRole('radio', { name: 'Bahasa Indonesia' }))[0]);

    expect(await screen.findByRole('heading', { level: 1, name: 'Aset vs Unit Aset' })).toBeVisible();
    expect(screen.getByRole('navigation', { name: /remah roti/i })).toBeVisible();
    expect(document.documentElement.lang).toBe('id');
    expect(localStorage.getItem('manual.language')).toBe('id');
  });

  /*
   * The article under test is DISCOVERED, not named: translation coverage grows,
   * and naming a file here means the test breaks the day someone translates it.
   * If the corpus is ever fully translated the assertion inverts into the
   * stronger claim, which is the outcome actually wanted.
   */
  it('falls back to English with a notice when a translation is missing', async () => {
    const untranslated = getAllArticles('en').find(
      (article) => getArticle(article.route, 'id')?.fallback
    );

    if (!untranslated) {
      expect(getAllArticles('en').map((a) => getArticle(a.route, 'id').fallback)).not.toContain(
        true
      );
      return;
    }

    renderManual({ route: untranslated.route, language: 'id' });

    // The English title renders, because the English article is what is shown.
    expect(
      await screen.findByRole('heading', { level: 1, name: untranslated.title })
    ).toBeVisible();
    // And the reader is told why it is in English.
    expect(screen.getByRole('note', { name: /belum diterjemahkan/i })).toBeVisible();
  });

  it('keeps the route stable across a language change', async () => {
    const user = userEvent.setup();
    const { router } = renderManual({ route: '/concepts/asset-vs-asset-unit' });

    await user.click((await screen.findAllByRole('radio', { name: 'Bahasa Indonesia' }))[0]);

    expect(router.state.location.pathname).toBe('/concepts/asset-vs-asset-unit');
  });
});

describe('accessibility basics', () => {
  it('starts with a skip link that targets the main landmark', async () => {
    const { container } = renderManual({ route: '/concepts/asset-vs-asset-unit' });
    await screen.findByRole('heading', { level: 1 });

    const skip = screen.getByRole('link', { name: /skip to content/i });
    expect(skip).toHaveAttribute('href', '#manual-content');
    expect(container.querySelector('#manual-content')).toBe(screen.getByRole('main'));
  });

  it('puts the skip link first in the tab order', async () => {
    const { container } = renderManual({ route: '/concepts/asset-vs-asset-unit' });
    await screen.findByRole('heading', { level: 1 });

    /*
     * A skip link that is not the FIRST tab stop is decoration: its whole
     * purpose is to be reachable before the navigation it skips.
     */
    const focusable = container.querySelectorAll(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    expect(focusable[0]).toHaveClass('skip-link');
    expect(focusable[0]).toHaveAttribute('href', '#manual-content');
  });

  it('moves focus through the header in a sensible order', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/' });
    await screen.findByRole('heading', { level: 1 });

    await user.tab();
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveFocus();

    /*
     * Then the header, before any content. Which control comes first differs by
     * viewport — the menu button only exists below `lg` — and jsdom applies no
     * media queries, so the assertion is that focus stays in the banner rather
     * than that a particular element has it.
     */
    const banner = screen.getByRole('banner');
    for (let stop = 0; stop < 3; stop += 1) {
      await user.tab();
      expect(banner.contains(document.activeElement)).toBe(true);
    }
  });

  it('labels every landmark that appears more than once', async () => {
    renderManual({ route: '/concepts/asset-vs-asset-unit' });
    await screen.findByRole('heading', { level: 1 });

    const navs = screen.getAllByRole('navigation');
    expect(navs.length).toBeGreaterThan(1);
    for (const nav of navs) {
      const labelled =
        nav.getAttribute('aria-label') ?? nav.getAttribute('aria-labelledby');
      expect(labelled, nav.outerHTML.slice(0, 80)).toBeTruthy();
    }
  });

  it('has exactly one first-level heading per page', async () => {
    renderManual({ route: '/how-do-i/assign-a-location' });
    await screen.findByRole('heading', { level: 1 });

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('does not skip heading levels', async () => {
    const { container } = renderManual({ route: '/how-do-i/register-an-asset-from-a-contract' });
    await screen.findByRole('heading', { level: 1 });

    const levels = [...container.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
      Number(h.tagName[1])
    );

    levels.forEach((level, index) => {
      if (index === 0) return;
      expect(level).toBeLessThanOrEqual(levels[index - 1] + 1);
    });
  });

  it('puts wide tables in a focusable, labelled scroll region', async () => {
    renderManual({ route: '/how-do-i/create-an-asset' });
    await screen.findByRole('heading', { level: 1 });

    const region = screen.getByRole('region', { name: 'Table' });
    expect(region).toHaveAttribute('tabindex', '0');
    expect(within(region).getByRole('table')).toBeVisible();
  });
});

describe('the mobile drawer', () => {
  it('opens as a modal, closes on Escape, and closes after navigating', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/concepts/asset-vs-asset-unit' });

    await user.click(await screen.findByRole('button', { name: /open the navigation menu/i }));

    const drawer = await screen.findByRole('dialog', { name: /manual sections/i });
    expect(drawer).toHaveAttribute('aria-modal', 'true');
    // Focus is moved into the drawer, not left behind on the page.
    expect(within(drawer).getByRole('button', { name: /close the navigation menu/i })).toHaveFocus();

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog', { name: /manual sections/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /open the navigation menu/i }));
    const reopened = await screen.findByRole('dialog', { name: /manual sections/i });
    await user.click(
      within(reopened).getByRole('link', { name: 'How do I create an asset?' })
    );

    expect(screen.queryByRole('dialog', { name: /manual sections/i })).not.toBeInTheDocument();
    expect(
      await screen.findByRole('heading', { level: 1, name: 'How do I create an asset?' })
    ).toBeVisible();
  });

  it('carries the language and theme controls, which the bar hides on a phone', async () => {
    const user = userEvent.setup();
    renderManual();

    await user.click(await screen.findByRole('button', { name: /open the navigation menu/i }));
    const drawer = await screen.findByRole('dialog', { name: /manual sections/i });

    expect(within(drawer).getByRole('radiogroup', { name: /change language/i })).toBeVisible();
    expect(within(drawer).getByRole('radiogroup', { name: /theme/i })).toBeVisible();
  });
});

describe('the sidebar', () => {
  it('collapses a section and remembers it', async () => {
    const user = userEvent.setup();
    renderManual({ route: '/concepts/asset-vs-asset-unit' });

    const sidebar = await screen.findByRole('navigation', { name: /manual sections/i });
    const toggle = within(sidebar).getByRole('button', { name: 'Getting Started' });

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    expect(JSON.parse(localStorage.getItem('manual.sidebar.collapsed'))).toContain(
      'getting-started'
    );
  });

  it('links each section heading to its index page', async () => {
    renderManual();

    const sidebar = await screen.findByRole('navigation', { name: /manual sections/i });
    expect(within(sidebar).getByRole('link', { name: /concepts/i })).toHaveAttribute(
      'href',
      expect.stringContaining('/concepts')
    );
  });
});
