import Image from "next/image";
import Link from "next/link";

import { authorInitials, formatBlogDate, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
      <Link href={post.path} className="relative block aspect-[16/10] overflow-hidden bg-black">
        {post.featuredImage ? (
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt || post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-end p-6">
            <p className="text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-white">{post.title}</p>
          </div>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">
          {post.categories[0] ?? "Blog"} · {formatBlogDate(post.datePublished)}
        </p>
        <h2 className="mt-3 text-[22px] font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-[24px]">
          <Link href={post.path} className="transition-opacity hover:opacity-80">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 line-clamp-3 text-[16px] leading-[1.6] text-white/75">{post.excerpt}</p>
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
