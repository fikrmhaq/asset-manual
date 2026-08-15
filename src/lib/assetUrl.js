/**
 * Makes a content-authored path base-aware.
 *
 * Markdown writes `/screenshots/…` because that is what an author expects to
 * work. The build sets `base: './'` so the manual can be served from a
 * sub-path, and an absolute path would escape it — a manual at `/manual/` would
 * ask the domain root for its images. This rewrites the leading slash onto
 * whatever base the bundle was built with.
 */
export function resolveAssetUrl(src, base = import.meta.env.BASE_URL) {
  if (!src) return src;
  if (/^(https?:)?\/\//i.test(src) || src.startsWith('data:')) return src;
  if (!src.startsWith('/')) return src;

  return `${String(base).replace(/\/$/, '')}/${src.slice(1)}`;
}
