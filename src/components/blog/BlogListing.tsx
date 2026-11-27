import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPagination } from "@/components/blog/BlogPagination";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { BLOG_INDEX_DESCRIPTION, BLOG_INDEX_TITLE, type BlogPost } from "@/lib/blog";

export function BlogListing({
  posts,
  page,
  pageCount,
}: {
  posts: BlogPost[];
  page: number;
  pageCount: number;
}) {
  const featured = page === 1 ? (posts.find((post) => post.featuredImage) ?? null) : null;
  const rest = featured ? posts.filter((post) => post.slug !== featured.slug) : posts;

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 text-white">
        <header className="mx-auto w-full max-w-[1680px] px-4 pb-10 pt-10 md:px-8 md:pt-16 lg:px-12">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/50">Jurnal clinic</p>
          <h1 className="mt-3 max-w-[12ch] text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] md:text-[64px]">
            {BLOG_INDEX_TITLE}
          </h1>
          {page > 1 ? (
            <p className="mt-3 text-[15px] text-white/55">
              Pagina {page} din {pageCount}
            </p>
          ) : null}
          <p className="mt-5 max-w-[720px] text-[16px] leading-[1.6] text-white/80 md:text-[21px] md:leading-[1.65]">
            {BLOG_INDEX_DESCRIPTION}
          </p>
        </header>

        {featured ? (
          <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12" aria-label="Articol evidențiat">
            <BlogCard post={featured} variant="featured" headingLevel="h2" />
          </section>
        ) : null}

        <section className="mx-auto mt-12 w-full max-w-[1680px] px-4 md:px-8 lg:px-12" aria-labelledby="articole-recente">
          <h2 id="articole-recente" className="text-[28px] font-semibold tracking-[-0.03em] md:text-[36px]">
            {page === 1 ? "Articole recente" : "Articole"}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} headingLevel="h3" />
            ))}
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <BlogPagination page={page} pageCount={pageCount} />
        </div>
      </main>
    </PrototypeFrame>
  );
}
