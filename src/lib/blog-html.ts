function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function slugifyHeading(text: string, used: Set<string>): string {
  const base =
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 72) || "sectiune";
  let slug = base;
  let n = 2;
  while (used.has(slug)) {
    slug = `${base}-${n}`;
    n += 1;
  }
  used.add(slug);
  return slug;
}

function unwrapUselessSpans(html: string): string {
  let out = html;
  for (let i = 0; i < 6; i += 1) {
    const next = out.replace(/<span>([\s\S]*?)<\/span>/gi, "$1");
    if (next === out) break;
    out = next;
  }
  return out;
}

function unwrapHeadingChrome(html: string): string {
  return html.replace(/<(h[1-6])\b([^>]*)>([\s\S]*?)<\/\1>/gi, (_, tag: string, attrs: string, inner: string) => {
    const cleaned = inner
      .replace(/<\/?(?:b|strong|span|em|i)\b[^>]*>/gi, "")
      .trim();
    return `<${tag}${attrs}>${cleaned}</${tag}>`;
  });
}

function shiftHeadingsToStartAtH2(html: string): string {
  const levels = [...html.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  if (!levels.length) return html.replace(/<h1\b/gi, "<h2").replace(/<\/h1>/gi, "</h2>");

  let out = html.replace(/<h1\b/gi, "<h2").replace(/<\/h1>/gi, "</h2>");
  const nextLevels = [...out.matchAll(/<h([1-6])\b/gi)].map((match) => Number(match[1]));
  const min = Math.min(...nextLevels);
  if (min >= 3) {
    const delta = min - 2;
    out = out.replace(/<\/?h([1-6])\b([^>]*)>/gi, (full, level, attrs) => {
      const numeric = Number(level);
      const next = Math.min(4, Math.max(2, numeric - delta));
      const close = full.startsWith("</");
      return close ? `</h${next}>` : `<h${next}${attrs}>`;
    });
  }
  return out;
}

function injectHeadingIds(html: string): { html: string; headings: Array<{ id: string; text: string; level: 2 | 3 }> } {
  const used = new Set<string>();
  const headings: Array<{ id: string; text: string; level: 2 | 3 }> = [];
  const next = html.replace(/<(h[23])\b([^>]*)>([\s\S]*?)<\/\1>/gi, (full, tag: string, attrs: string, inner: string) => {
    const text = stripTags(inner);
    if (!text) return full;
    const existing = attrs.match(/\bid=["']([^"']+)["']/i)?.[1];
    const id = existing || slugifyHeading(text, used);
    if (existing) used.add(existing);
    const level = tag === "h2" ? 2 : 3;
    if (level === 2) headings.push({ id, text, level });
    const withoutId = attrs.replace(/\s*\bid=["'][^"']*["']/i, "");
    return `<${tag}${withoutId} id="${id}">${inner}</${tag}>`;
  });
  return { html: next, headings };
}

function wrapBareImages(html: string): string {
  return html
    .replace(/<p>\s*(<img\b[^>]*>)\s*<\/p>/gi, '<figure class="ads-blog-figure">$1</figure>')
    .replace(/<p>\s*(<a\b[^>]*>\s*<img\b[^>]*>\s*<\/a>)\s*<\/p>/gi, '<figure class="ads-blog-figure">$1</figure>');
}

function enhanceImages(html: string): string {
  return html.replace(/<img\b([^>]*)>/gi, (full, attrs: string) => {
    let next = attrs;
    if (!/\bloading=/.test(next)) next += ' loading="lazy"';
    if (!/\bdecoding=/.test(next)) next += ' decoding="async"';
    if (/\balt=["']\s*["']/.test(next) || !/\balt=/.test(next)) {
      next = next.replace(/\s*\balt=["'][^"']*["']/i, "");
      next += ' alt=""';
    }
    next = next.replace(/\s+/g, " ").trim();
    return `<img ${next}>`;
  });
}

function tidyListsAndEmpties(html: string): string {
  return html
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<li([^>]*)>\s*<p>/gi, "<li$1>")
    .replace(/<\/p>\s*<\/li>/gi, "</li>")
    .replace(/\s+target="_blank"/gi, (match, offset, whole: string) => {
      const slice = whole.slice(Math.max(0, offset - 180), offset);
      return /href="\//.test(slice) ? "" : match;
    });
}

export function formatBlogHtml(html: string): { html: string; headings: Array<{ id: string; text: string; level: 2 | 3 }> } {
  let out = unwrapUselessSpans(html);
  out = unwrapHeadingChrome(out);
  out = shiftHeadingsToStartAtH2(out);
  out = tidyListsAndEmpties(out);
  out = wrapBareImages(out);
  out = enhanceImages(out);
  return injectHeadingIds(out);
}

export function readingMinutes(html: string): number {
  const words = stripTags(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function visibleWordCount(html: string): number {
  return stripTags(html).split(/\s+/).filter(Boolean).length;
}
