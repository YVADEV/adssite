import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/BlogCard";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { ServiceFinalCTA } from "@/components/services/ServicePageParts";
import { authorInitials, formatBlogDate, getAllPosts, getPostBySlug, relatedPosts } from "@/lib/blog";
import { CLINIC } from "@/lib/contact";
import { pageMetadata, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const images = post.ogImage ? [post.ogImage.startsWith("http") ? post.ogImage : `${SITE_URL}${post.ogImage}`] : undefined;

  return pageMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: post.path,
    type: "article",
    images,
  });
}

function blogPostingLd(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  const url = `${SITE_URL}${post.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "ro-RO",
    mainEntityOfPage: url,
    url,
    image: post.ogImage ? `${SITE_URL}${post.ogImage}` : undefined,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}${post.path}`;
  const related = relatedPosts(post);
  const showToc = post.headings.length >= 3;

  return (
    <PrototypeFrame darkHeader>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog/` },
          { name: post.title, url },
        ])}
      />
      <JsonLd data={blogPostingLd(post)} />
      <main className="bg-black pb-20 text-white">
        <article className="mx-auto w-full max-w-[1680px] px-4 pt-8 md:px-8 md:pt-12 lg:px-12">
          <nav aria-label="Breadcrumb" className="text-[14px] text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Acasă
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog/" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white/80">{post.categories[0] ?? "Articol"}</li>
            </ol>
          </nav>

          <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">
            {post.categories[0] ?? "Blog"}
          </p>
          <h1 className="mt-3 max-w-[18ch] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] md:max-w-[22ch] md:text-[56px] md:leading-[1.02]">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3">
            {post.authorPhoto ? (
              <Image src={post.authorPhoto} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            ) : (
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-[13px] font-semibold">
                {authorInitials(post.authorName)}
              </span>
            )}
            <div>
              <p className="text-[16px] font-semibold text-white">{post.authorName}</p>
              <p className="text-[14px] text-white/60">
                <time dateTime={post.datePublished}>{formatBlogDate(post.datePublished)}</time>
              </p>
            </div>
          </div>

          {post.featuredImage ? (
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[24px] border border-white/10 bg-black">
              <Image
                src={post.featuredImage}
                alt={post.featuredImageAlt || post.title}
                fill
                priority
                sizes="(max-width: 1680px) 100vw, 1680px"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className={`mt-12 grid grid-cols-1 gap-10 ${showToc ? "lg:grid-cols-[minmax(0,1fr)_280px]" : ""}`}>
            <div className="ads-blog-prose max-w-[760px]" dangerouslySetInnerHTML={{ __html: post.html }} />
            {showToc ? (
              <aside className="hidden lg:block">
                <div className="sticky top-28 rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/50">În acest articol</p>
                  <ul className="mt-4 space-y-2">
                    {post.headings.map((heading) => (
                      <li key={heading.id}>
                        <a href={`#${heading.id}`} className="text-[15px] leading-[1.45] text-white/75 hover:text-white">
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            ) : null}
          </div>
        </article>

        {related.length ? (
          <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <h2 className="text-[32px] font-semibold tracking-[-0.03em] md:text-[40px]">Articole asemănătoare</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </section>
        ) : null}

        <ServiceFinalCTA
          href={CLINIC.formPageHref}
          title="Vrei o evaluare pentru cazul tău?"
          body="Programează o consultație. Îți explicăm opțiunile și pașii următori, fără presiune."
        />
      </main>
    </PrototypeFrame>
  );
}
