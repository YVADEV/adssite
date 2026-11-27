import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogListing } from "@/components/blog/BlogListing";
import { BLOG_INDEX_DESCRIPTION, blogPageCount, getPostsPage } from "@/lib/blog";
import { publicPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  const count = blogPageCount();
  return Array.from({ length: Math.max(0, count - 1) }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const current = Number(page);
  return publicPageMetadata({
    title: `Blog — pagina ${current}`,
    description: BLOG_INDEX_DESCRIPTION,
    path: `/blog/page/${current}/`,
  });
}

export default async function BlogPagedPage({ params }: Props) {
  const { page } = await params;
  const current = Number(page);
  const pageCount = blogPageCount();
  if (!Number.isInteger(current) || current < 2 || current > pageCount) notFound();

  return <BlogListing posts={getPostsPage(current)} page={current} pageCount={pageCount} />;
}
