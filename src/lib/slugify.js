/**
 * Heading anchors.
 *
 * The same function produces the id on the rendered `<h2>` and the `href` in the
 * "On this page" list, so a table-of-contents link can never point at an anchor
 * that does not exist. That is the whole reason this is one exported function
 * rather than two similar ones in two files.
 *
 * Diacritics are folded before stripping, so an accented or borrowed heading
 * produces a readable ASCII anchor rather than losing the character entirely.
 * The range is written as escapes on purpose: literal combining marks in a
 * source file do not survive every editor round-trip.
 */
const COMBINING_MARKS = /[̀-ͯ]/g;

export function slugify(text) {
  return String(text ?? '')
    .normalize('NFKD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * A slug generator that keeps a document's anchors unique.
 *
 * Two sections both called "Steps" must not both be `#steps`, or the second is
 * unreachable. The second becomes `#steps-1`, which is what every established
 * documentation toolchain does.
 */
export function createSlugger() {
  const seen = new Map();

  return function next(text) {
    const base = slugify(text) || 'section';
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count === 0 ? base : `${base}-${count}`;
  };
}
