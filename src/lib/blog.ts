import blogFile from "../../content/blog/posts.json";
import authorsFile from "../../content/blog/authors.json";

export const BLOG_PAGE_SIZE = 9;
export const BLOG_INDEX_PATH = "/blog/";

export type BlogPost = {
  id: number;
  slug: string;
  path: string;
  sourceUrl: string;
  title: string;
  excerpt: string;
  html: string;
  headings: Array<{ id: string; text: string }>;
  datePublished: string;
  dateModified: string;
  authorId: number;
  authorName: string;
  authorSlug: string;
  authorPhoto: string | null;
  authorSourceUrl: string;
  categories: string[];
  tags: string[];
  featuredImage: string | null;
  featuredImageAlt: string;
  featuredImageSource: string | null;
  inlineImages: string[];
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string | null;
  twitterTitle: string;
  twitterDescription: string;
  sourceCharCount: number;
  migratedCharCount: number;
  status: string;
};

export type BlogAuthor = {
  id: number;
  slug: string;
  name: string;
  description: string;
  sourceUrl: string;
  photo: string | null;
  photoSource: string | null;
};

const data = blogFile as { posts: BlogPost[] };
const authors = authorsFile as BlogAuthor[];

export function getAllPosts(): BlogPost[] {
  return [...data.posts].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return data.posts.find((post) => post.slug === slug);
}

export function getAuthor(id: number): BlogAuthor | undefined {
  return authors.find((author) => author.id === id);
}

export function blogPageCount(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / BLOG_PAGE_SIZE));
}

export function getPostsPage(page: number): BlogPost[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return getAllPosts().slice(start, start + BLOG_PAGE_SIZE);
}

export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = getAllPosts().filter((item) => item.slug !== post.slug);
  const sameCategory = others.filter((item) => item.categories.some((cat) => post.categories.includes(cat)));
  const pool = sameCategory.length ? sameCategory : others;
  return pool.slice(0, limit);
}

export function formatBlogDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("ro-RO", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function authorInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "A";
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
