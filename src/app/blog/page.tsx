import type { Metadata } from "next";

import { BlogListing } from "@/components/blog/BlogListing";
import { BLOG_INDEX_DESCRIPTION, BLOG_INDEX_TITLE, blogPageCount, getPostsPage } from "@/lib/blog";
import { publicPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: BLOG_INDEX_TITLE,
    description: BLOG_INDEX_DESCRIPTION,
    path: "/blog/",
  });
}

export default function BlogIndexPage() {
  return <BlogListing posts={getPostsPage(1)} page={1} pageCount={blogPageCount()} />;
}
