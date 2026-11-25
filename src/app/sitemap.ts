import type { MetadataRoute } from "next";

import { CASE_STUDIES } from "@/config/cases";
import { blogPageCount, getAllPosts } from "@/lib/blog";
import { SERVICES, STATIC_ROUTES } from "@/lib/seo";
import { requestPublicOrigin } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = await requestPublicOrigin();
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${origin}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1.0 : 0.7,
  }));

  const serviceEntries = SERVICES.map((service) => ({
    url: `${origin}${service.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${origin}${post.path}`,
    lastModified: new Date(post.dateModified || post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = Array.from({ length: Math.max(0, blogPageCount() - 1) }, (_, index) => ({
    url: `${origin}/blog/page/${index + 2}/`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const caseEntries = Object.values(CASE_STUDIES).map((caz) => ({
    url: `${origin}${caz.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const merged = [...staticEntries, ...serviceEntries, ...postEntries, ...blogPages, ...caseEntries];
  const seen = new Set<string>();
  return merged.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
