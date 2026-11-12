import type { Metadata } from "next";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { blogPageCount, getPostsPage } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Specialiștii Alverna Dental Studio vin în întâmpinarea dvs. cu cele mai noi informații despre tratamentele și procedurile stomatologice.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = getPostsPage(1);
  const pageCount = blogPageCount();
  const featured = posts.find((post) => post.featuredImage) ?? null;
  const rest = featured ? posts.filter((post) => post.slug !== featured.slug) : posts;

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 text-white">
        <section className="mx-auto w-full max-w-[1680px] px-4 pb-10 pt-10 md:px-8 md:pt-14 lg:px-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/50">Jurnal clinic</p>
          <h1 className="mt-3 max-w-[18ch] text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[64px]">
            Blog
          </h1>
          <p className="mt-5 max-w-[720px] text-[16px] leading-[1.6] text-white/80 md:text-[21px] md:leading-[1.65]">
            Specialiștii Alverna Dental Studio vin în întâmpinarea dvs. cu cele mai noi informații despre tratamentele și procedurile stomatologice.
          </p>
        </section>

        {featured ? (
          <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <BlogCard post={featured} />
          </section>
        ) : null}

        <section className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-6 px-4 md:mt-12 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-12">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </section>

        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <BlogPagination page={1} pageCount={pageCount} />
        </div>
      </main>
    </PrototypeFrame>
  );
}
