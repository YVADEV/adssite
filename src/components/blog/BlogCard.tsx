import Image from "next/image";
import Link from "next/link";

import { authorInitials, formatBlogDate, type BlogPost } from "@/lib/blog";

export function BlogCard({
  post,
  variant = "default",
  headingLevel = "h2",
}: {
  post: BlogPost;
  variant?: "default" | "featured";
  headingLevel?: "h2" | "h3";
}) {
  const TitleTag = headingLevel;
  const featured = variant === "featured";

  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] md:grid-cols-2"
          : "group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]"
      }
    >
      <Link
        href={post.path}
        className={
          featured
            ? "relative block min-h-[240px] overflow-hidden bg-black md:min-h-[420px]"
            : "relative block aspect-[16/10] overflow-hidden bg-black"
        }
      >
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            fill
            sizes={
              featured
                ? "(max-width: 768px) 100vw, 840px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            }
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
            priority={featured}
          />
        ) : (
          <div className="flex h-full min-h-[220px] items-end p-6">
            <p className="text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">{post.title}</p>
          </div>
        )}
      </Link>
      <div className={`flex flex-1 flex-col ${featured ? "justify-center p-7 md:p-12" : "p-6"}`}>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">
          {post.categories[0] ?? "Blog"} · {formatBlogDate(post.datePublished)}
        </p>
        <TitleTag
          className={
            featured
              ? "mt-4 text-[28px] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:text-[40px]"
              : "mt-3 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[24px]"
          }
        >
          <Link href={post.path} className="transition-opacity hover:opacity-80">
            {post.title}
          </Link>
        </TitleTag>
        <p className={`mt-3 text-white/75 ${featured ? "text-[17px] leading-[1.65] md:text-[19px]" : "line-clamp-3 text-[16px] leading-[1.6]"}`}>
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-3 pt-6">
          {post.authorPhoto ? (
            <Image
              src={post.authorPhoto}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[12px] font-semibold text-white">
              {authorInitials(post.authorName)}
            </span>
          )}
          <p className="text-[15px] font-semibold text-white">{post.authorName}</p>
        </div>
      </div>
    </article>
  );
}
