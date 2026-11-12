# Blog SEO QA

## Indexability
- Articles are server-rendered App Router pages.
- Canonicals use `https://alvernadental.com` via `pageMetadata` / `SITE_URL`.
- Netlify preview hosts still send `X-Robots-Tag: noindex` from existing middleware.
- Sitemap includes `/blog/`, paginated listing URLs, and every article path.

## Per article
| Field | Status |
| --- | --- |
| Unique title | From Yoast `title` when present, else post title |
| Meta description | From Yoast `description` when present, else excerpt |
| Canonical | Production domain + original slug |
| One H1 | Article title in page template |
| Open Graph | Title, description, image when featured/OG image existed |
| BlogPosting JSON-LD | datePublished, dateModified from WordPress, author name |
| Breadcrumb JSON-LD | Acasă / Blog / title |
| dateModified | WordPress `modified`, not the import timestamp |

## Gaps
- One source post has no featured image: `anunt-important-despre-locatiile-alverna-dental-studio`.
- Author JSON-LD is Person name only; WordPress did not expose credentials to invent.
- Dead internal href `/albire-dentara-cu-laser/` was not invented as a new article.

## Pagination
- Crawlable: `/blog/`, `/blog/page/2/` … statically generated.
