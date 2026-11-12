/**
 * One-shot importer: WordPress REST + Yoast sitemap → local JSON + images.
 * Does not rewrite medical copy. Run from alverna-dental-studio/.
 */
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_JSON = path.join(ROOT, "content/blog/posts.json");
const OUT_AUTHORS = path.join(ROOT, "content/blog/authors.json");
const IMG_DIR = path.join(ROOT, "public/blog");
const WP = "https://alvernadental.com";

const INTERNAL_PATH_MAP = {
  "/": "/",
  "/blog/": "/blog/",
  "/contact/": "/contact/",
  "/echipa/": "/echipa/",
  "/tarife/": "/tarife/",
  "/testimoniale/": "/testimoniale/",
  "/turism-dentar/": "/turism-dentar/",
  "/studii-de-caz/": "/cazuri/",
  "/cazuri/": "/cazuri/",
  "/servicii/": "/servicii/",
  "/servicii/chirurgie-dentara/": "/servicii/chirurgie-dentara/",
  "/servicii/protetica/": "/servicii/protetica/",
  "/servicii/stomatologie-copii/": "/servicii/pedodontie/",
  "/servicii/fatete-dentare/": "/servicii/fatete-dentare/",
  "/servicii/ortodontie/": "/servicii/ortodontie/",
  "/servicii/endodontie/": "/servicii/endodontie/",
  "/servicii/aparat-dentar/": "/servicii/aparat-dentar/",
  "/servicii/aparat-dentar/spark/": "/servicii/aparat-dentar/spark/",
  "/servicii/aparat-dentar/gutiera-de-contentie/": "/servicii/aparat-dentar/gutiera-de-contentie/",
  "/servicii/urgente-stomatologice/": "/urgente-stomatologice-cluj/",
  "/servicii/odontologie/": "/servicii/odontologie/",
  "/servicii/coroana-dentara/": "/servicii/coroana-dentara/",
  "/servicii/augmentarea-osoasa/": "/servicii/augmentarea-osoasa/",
  "/servicii/estetica-dentara/": "/servicii/estetica-dentara/",
  "/servicii/profilaxie/": "/servicii/profilaxie/",
  "/servicii/implant-dentar/": "/servicii/implant-dentar/",
  "/servicii/dentist-cluj/": "/servicii/dentist-cluj/",
  "/echipa/radu-nichimis/": "/echipa/radu-nichimis/",
  "/echipa/parvu-andreea/": "/echipa/andreea-parvu/",
  "/echipa/andreea-parvu/": "/echipa/andreea-parvu/",
  "/echipa/laura-grigorean/": "/echipa/laura-grigorean/",
  "/echipa/corina-holici/": "/echipa/corina-holici/",
};

const TEAM_FALLBACK = new Set([
  "/echipa/raul-muresan/",
  "/echipa/rares-harmath-3/",
  "/echipa/valentina-nichimis/",
  "/echipa/ruxandra-darabantiu/",
  "/echipa/bogdan-holici/",
  "/echipa/manuela-bolboaca-3/",
  "/echipa/andreea-crisan/",
]);

function decodeHtml(value) {
  return String(value ?? "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&hellip;/g, "…");
}

function stripTags(html) {
  return decodeHtml(String(html ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function withSlash(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function normalizeWpPath(href) {
  try {
    const url = new URL(href, WP);
    if (!url.hostname.replace(/^www\./, "").endsWith("alvernadental.com")) return null;
    return withSlash(url.pathname);
  } catch {
    return null;
  }
}

function mapInternalPath(pathname, postSlugs) {
  const p = withSlash(pathname);
  if (INTERNAL_PATH_MAP[p]) return { href: INTERNAL_PATH_MAP[p], status: "mapped" };
  if (TEAM_FALLBACK.has(p)) return { href: "/echipa/", status: "mapped-team-index" };
  const slug = p.replace(/^\/|\/$/g, "");
  if (postSlugs.has(slug)) return { href: `/${slug}/`, status: "mapped-post" };
  if (p.startsWith("/author/")) return { href: "/blog/", status: "mapped-author-index" };
  if (p.startsWith("/category/") || p.startsWith("/tag/")) return { href: "/blog/", status: "mapped-taxonomy" };
  if (p.startsWith("/blog/page/")) return { href: p, status: "mapped-pagination" };
  return { href: p, status: "unresolved" };
}

function collectUrls(html) {
  const found = [];
  const re = /\b(?:src|href|srcset|data-src|data-lazy-src)=["']([^"']+)["']/gi;
  let match;
  while ((match = re.exec(html))) found.push(match[1]);
  return found;
}

function extractSrcsetUrls(srcset) {
  return srcset
    .split(",")
    .map((part) => part.trim().split(/\s+/)[0])
    .filter(Boolean);
}

function isMediaUrl(href) {
  try {
    const url = new URL(href, WP);
    return /\/wp-content\/uploads\//.test(url.pathname) || /\/wp-content\/uploads\//.test(href);
  } catch {
    return /\/wp-content\/uploads\//.test(href);
  }
}

function extFromUrl(href) {
  try {
    const ext = path.extname(new URL(href, WP).pathname).toLowerCase();
    if ([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"].includes(ext)) return ext;
  } catch {
    /* ignore */
  }
  return ".jpg";
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { Accept: "application/xml,text/html" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

async function download(url, destRel) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`image ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(ROOT, "public", destRel);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  return { destRel: `/${destRel.replace(/\\/g, "/")}`, bytes: buf.length };
}

function sanitizeHtml(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "")
    .replace(/\s(on\w+|style)=["'][^"']*["']/gi, "")
    .trim();
}

function rewriteHtml(html, rewriteHref, rewriteSrc) {
  let out = html;
  out = out.replace(/\bsrcset=["']([^"']+)["']/gi, (_, set) => {
    const next = extractSrcsetUrls(set)
      .map((u) => {
        const mapped = rewriteSrc(u);
        return mapped;
      })
      .filter(Boolean)
      .join(", ");
    return next ? `src="${rewriteSrc(extractSrcsetUrls(set)[0])}"` : "";
  });
  out = out.replace(/\b(?:data-src|data-lazy-src)=["']([^"']+)["']/gi, "");
  out = out.replace(/\bsrc=["']([^"']+)["']/gi, (all, u) => {
    const mapped = rewriteSrc(u);
    return mapped ? `src="${mapped}"` : all;
  });
  out = out.replace(/<img\b([^>]*)>/gi, (tag, attrs) => {
    const srcs = [...attrs.matchAll(/\bsrc=["']([^"']+)["']/g)].map((m) => m[1]);
    if (srcs.length <= 1) return tag;
    const cleaned = attrs.replace(/\bsrc=["'][^"']+["']/g, "").trim();
    return `<img src="${srcs[srcs.length - 1]}" ${cleaned}>`;
  });
  out = out.replace(/\bhref=["']([^"']+)["']/gi, (all, u) => {
    const mapped = rewriteHref(u);
    return mapped ? `href="${mapped.href}"` : all;
  });
  return out;
}

function extractHeadings(html) {
  const headings = [];
  const re = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  let i = 0;
  while ((match = re.exec(html))) {
    const text = stripTags(match[1]);
    if (!text) continue;
    i += 1;
    headings.push({ id: `sectiune-${i}`, text });
  }
  return headings;
}

function injectHeadingIds(html, headings) {
  let i = 0;
  return html.replace(/<h2\b([^>]*)>/gi, (full, attrs) => {
    if (/\bid=/.test(attrs)) return full;
    const heading = headings[i];
    i += 1;
    if (!heading) return full;
    return `<h2${attrs} id="${heading.id}">`;
  });
}

async function main() {
  await mkdir(path.join(ROOT, "content/blog"), { recursive: true });
  await mkdir(IMG_DIR, { recursive: true });

  const sitemapXml = await fetchText(`${WP}/post-sitemap.xml`);
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const listingHtml = await fetchText(`${WP}/blog/`);
  const listingPage2 = await fetchText(`${WP}/blog/page/2/`);
  const listingHrefs = [
    ...listingHtml.matchAll(/href="(https:\/\/alvernadental\.com\/[^"]+\/)"/g),
    ...listingPage2.matchAll(/href="(https:\/\/alvernadental\.com\/[^"]+\/)"/g),
  ].map((m) => m[1]);

  const posts = await fetchJson(`${WP}/wp-json/wp/v2/posts?per_page=100&page=1&_embed=1`);
  const users = await fetchJson(`${WP}/wp-json/wp/v2/users?per_page=100`);
  const categories = await fetchJson(`${WP}/wp-json/wp/v2/categories?per_page=100`);
  const tags = await fetchJson(`${WP}/wp-json/wp/v2/tags?per_page=100`);

  const catById = Object.fromEntries(categories.map((c) => [c.id, c]));
  const tagById = Object.fromEntries(tags.map((t) => [t.id, t]));
  const userById = Object.fromEntries(users.map((u) => [u.id, u]));
  const postSlugs = new Set(posts.map((p) => p.slug));

  const imageCache = new Map();
  const imageFailures = [];
  const linkAudit = [];

  async function localImage(url, kind) {
    if (!url) return null;
    const abs = new URL(url, WP).toString();
    if (imageCache.has(abs)) return imageCache.get(abs);
    const hash = createHash("sha1").update(abs).digest("hex").slice(0, 10);
    const destRel = `blog/${kind}/${hash}${extFromUrl(abs)}`;
    const existing = path.join(ROOT, "public", destRel);
    if (existsSync(existing)) {
      const rec = { local: `/${destRel.replace(/\\/g, "/")}`, source: abs, bytes: 0 };
      imageCache.set(abs, rec);
      return rec;
    }
    try {
      const saved = await download(abs, destRel);
      const rec = { local: saved.destRel, source: abs, bytes: saved.bytes };
      imageCache.set(abs, rec);
      return rec;
    } catch (error) {
      imageFailures.push({ url: abs, error: String(error) });
      imageCache.set(abs, null);
      return null;
    }
  }

  const authorsOut = [];
  for (const user of users) {
    const avatar =
      user.avatar_urls?.["96"] || user.avatar_urls?.["48"] || Object.values(user.avatar_urls ?? {})[0] || "";
    const photo = avatar ? await localImage(avatar, "authors") : null;
    authorsOut.push({
      id: user.id,
      slug: user.slug,
      name: user.name,
      description: stripTags(user.description || ""),
      sourceUrl: user.link,
      photo: photo?.local ?? null,
      photoSource: photo?.source ?? null,
    });
  }

  const articles = [];
  for (const post of posts) {
    const yoast = post.yoast_head_json ?? {};
    const embeddedAuthor = post._embedded?.author?.[0];
    const author = userById[post.author] || embeddedAuthor || {};
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const featuredUrl =
      media?.source_url ||
      yoast.og_image?.[0]?.url ||
      "";
    const featured = featuredUrl ? await localImage(featuredUrl, "featured") : null;
    const authorRecord = authorsOut.find((a) => a.id === post.author);

    const rawHtml = post.content?.rendered ?? "";
    const mediaInContent = new Set();
    for (const raw of collectUrls(rawHtml)) {
      for (const piece of raw.includes(",") ? extractSrcsetUrls(raw) : [raw]) {
        if (isMediaUrl(piece)) mediaInContent.add(new URL(piece, WP).toString());
      }
    }
    const inlineImages = [];
    for (const url of mediaInContent) {
      const saved = await localImage(url, "inline");
      if (saved) inlineImages.push(saved);
    }

    const rewriteSrc = (href) => {
      try {
        const abs = new URL(href, WP).toString();
        return imageCache.get(abs)?.local || href;
      } catch {
        return href;
      }
    };

    const rewriteHref = (href) => {
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
        return { href, kind: "special", status: "kept" };
      }
      let abs;
      try {
        abs = new URL(href, post.link);
      } catch {
        return { href, kind: "invalid", status: "invalid" };
      }
      if (isMediaUrl(abs.toString())) {
        const local = rewriteSrc(abs.toString());
        return { href: local, kind: "media", status: local.startsWith("/blog/") ? "mapped-media" : "unresolved-media" };
      }
      const host = abs.hostname.replace(/^www\./, "");
      if (host !== "alvernadental.com") {
        const rec = { href: abs.toString(), kind: "external", status: "kept", original: href };
        linkAudit.push({ article: post.slug, ...rec, anchor: "" });
        return rec;
      }
      const mapped = mapInternalPath(abs.pathname, postSlugs);
      const rec = {
        href: mapped.href,
        kind: "internal",
        status: mapped.status,
        original: abs.toString(),
      };
      linkAudit.push({ article: post.slug, ...rec, anchor: "" });
      return rec;
    };

    let html = sanitizeHtml(rawHtml);
    html = rewriteHtml(html, rewriteHref, rewriteSrc);
    const headings = extractHeadings(html);
    html = injectHeadingIds(html, headings);

    const ogImage = yoast.og_image?.[0]?.url
      ? (await localImage(yoast.og_image[0].url, "featured"))?.local
      : featured?.local;

    articles.push({
      id: post.id,
      slug: post.slug,
      path: `/${post.slug}/`,
      sourceUrl: post.link,
      title: decodeHtml(stripTags(post.title?.rendered ?? "")),
      excerpt: stripTags(post.excerpt?.rendered ?? ""),
      html,
      headings,
      datePublished: post.date,
      dateModified: post.modified,
      authorId: post.author,
      authorName: author.name || authorRecord?.name || "",
      authorSlug: author.slug || authorRecord?.slug || "",
      authorPhoto: authorRecord?.photo ?? null,
      authorSourceUrl: author.link || authorRecord?.sourceUrl || "",
      categories: (post.categories ?? []).map((id) => catById[id]?.name).filter(Boolean),
      tags: (post.tags ?? []).map((id) => tagById[id]?.name).filter(Boolean),
      featuredImage: featured?.local ?? null,
      featuredImageAlt: media?.alt_text || yoast.og_image?.[0]?.alt || "",
      featuredImageSource: featured?.source ?? null,
      inlineImages: inlineImages.map((img) => img.local),
      seoTitle: decodeHtml(yoast.title || yoast.og_title || stripTags(post.title?.rendered ?? "")),
      seoDescription: decodeHtml(yoast.description || yoast.og_description || stripTags(post.excerpt?.rendered ?? "")),
      canonical: yoast.canonical || `${WP}/${post.slug}/`,
      ogTitle: decodeHtml(yoast.og_title || yoast.title || ""),
      ogDescription: decodeHtml(yoast.og_description || yoast.description || ""),
      ogImage: ogImage || featured?.local || null,
      twitterTitle: decodeHtml(yoast.twitter_title || ""),
      twitterDescription: decodeHtml(yoast.twitter_description || ""),
      sourceCharCount: stripTags(rawHtml).length,
      migratedCharCount: stripTags(html).length,
      status: html.trim() ? "migrated" : "incomplete",
    });
  }

  const inventory = {
    generatedAt: new Date().toISOString(),
    source: WP,
    sitemapPostCount: sitemapUrls.length,
    wpRestCount: posts.length,
    listingSampleCount: new Set(listingHrefs).size,
    sitemapUrls,
    missingFromRest: sitemapUrls.filter((url) => {
      const slug = new URL(url).pathname.replace(/^\/|\/$/g, "");
      return !postSlugs.has(slug);
    }),
    extraInRest: posts
      .map((p) => p.link)
      .filter((link) => !sitemapUrls.includes(link) && !sitemapUrls.includes(link.replace(/\/$/, "") + "/")),
    imageFailures,
    imageCount: [...imageCache.values()].filter(Boolean).length,
  };

  await writeFile(OUT_JSON, JSON.stringify({ inventory, posts: articles, linkAudit }, null, 2));
  await writeFile(OUT_AUTHORS, JSON.stringify(authorsOut, null, 2));
  console.log(
    JSON.stringify(
      {
        posts: articles.length,
        authors: authorsOut.length,
        images: inventory.imageCount,
        imageFailures: imageFailures.length,
        sitemap: sitemapUrls.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
