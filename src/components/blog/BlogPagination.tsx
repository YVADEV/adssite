import Link from "next/link";

import { BLOG_INDEX_PATH } from "@/lib/blog";

export function BlogPagination({ page, pageCount }: { page: number; pageCount: number }) {
  if (pageCount <= 1) return null;

  const hrefFor = (value: number) => (value === 1 ? BLOG_INDEX_PATH : `/blog/page/${value}/`);

  return (
    <nav aria-label="Paginare blog" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        <Link href={hrefFor(page - 1)} className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 text-[15px] font-semibold text-white">
          Anterior
        </Link>
      ) : null}
      {Array.from({ length: pageCount }, (_, index) => index + 1).map((value) => {
        const current = value === page;
        return (
          <Link
            key={value}
            href={hrefFor(value)}
            aria-current={current ? "page" : undefined}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-3 text-[15px] font-semibold ${
              current ? "border-[color:var(--ads-accent)] bg-[color:var(--ads-accent)] text-black" : "border-white/20 text-white"
            }`}
          >
            {value}
          </Link>
        );
      })}
      {page < pageCount ? (
        <Link href={hrefFor(page + 1)} className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 text-[15px] font-semibold text-white">
          Următor
        </Link>
      ) : null}
    </nav>
  );
}
