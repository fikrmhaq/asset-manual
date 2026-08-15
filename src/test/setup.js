import '@testing-library/jest-dom/vitest';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

/**
 * jsdom gaps the manual actually depends on.
 *
 * `matchMedia` — the theme provider asks the system for its colour preference.
 * `IntersectionObserver` — the "on this page" rail observes headings.
 * `scrollTo` / `scrollIntoView` — the layout scrolls on navigation.
 *
 * None of these exist in jsdom. Stubbing them here rather than in each test file
 * keeps the tests about behaviour rather than about the environment.
 */

if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  });
}

if (!window.IntersectionObserver) {
  class IntersectionObserverStub {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }

  window.IntersectionObserver = IntersectionObserverStub;
  globalThis.IntersectionObserver = IntersectionObserverStub;
}

window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();

// jsdom implements neither, and the search dialog and layout both use them.
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback) => window.setTimeout(() => callback(Date.now()), 0);
  window.cancelAnimationFrame = (handle) => window.clearTimeout(handle);
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.className = '';
  document.documentElement.lang = 'en';
});
