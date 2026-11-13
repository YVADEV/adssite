import type { MetadataRoute } from "next";

import { blogPageCount, getAllPosts } from "@/lib/blog";
import { SERVICES, SITE_URL, STATIC_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1.0 : 0.7,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}${post.path}`,
    lastModified: new Date(post.dateModified || post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = Array.from({ length: Math.max(0, blogPageCount() - 1) }, (_, index) => ({
    url: `${SITE_URL}/blog/page/${index + 2}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const merged = [...staticEntries, ...serviceEntries, ...postEntries, ...blogPages];
  const seen = new Set<string>();
  return merged.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
