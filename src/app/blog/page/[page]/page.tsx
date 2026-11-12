import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { blogPageCount, getPostsPage } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  const count = blogPageCount();
  return Array.from({ length: Math.max(0, count - 1) }, (_, index) => ({ page: String(index + 2) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const current = Number(page);
  return pageMetadata({
    title: `Blog — pagina ${current}`,
    description: "Articole stomatologice Alverna Dental Studio.",
    path: `/blog/page/${current}/`,
  });
}

export default async function BlogPagedPage({ params }: Props) {
  const { page } = await params;
  const current = Number(page);
  const pageCount = blogPageCount();
  if (!Number.isInteger(current) || current < 2 || current > pageCount) notFound();

  const posts = getPostsPage(current);

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 text-white">
        <section className="mx-auto w-full max-w-[1680px] px-4 pb-10 pt-10 md:px-8 md:pt-14 lg:px-12">
          <h1 className="text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[56px]">
            Blog · pagina {current}
          </h1>
        </section>
        <section className="mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>
        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <BlogPagination page={current} pageCount={pageCount} />
        </div>
      </main>
    </PrototypeFrame>
  );
}
