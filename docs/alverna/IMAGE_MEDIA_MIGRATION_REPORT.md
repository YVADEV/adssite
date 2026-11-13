# Image and media migration report

Date: 13 November 2026.

## Blog

- `content/blog/posts.json` inventory: **702** images stored under `public/blog/` (prior migration log).
- This audit: **0** missing featured files on disk; **0** missing inline file paths; **727** inline refs.
- Featured image absent on source **and** Next: `anunt-important-despre-locatiile-alverna-dental-studio`.
- **15 articles** still embed Trustindex Google-review HTML (not a Next reviews component).
- **≥10 articles** map Presto Player `<video>` `src` to `/blog/inline/*.jpg` (poster mistaken for video). Example: `cat-rezista-un-implant-dentar` HTML contains `presto-player` with `src="/blog/inline/940118585e.jpg"`. **P2** — do not invent a video file.

## Service / homepage / cases

- Next uses approved photography (heroes, cazuri before/after). Pixel-match with WP is **not** required.
- WP implant page H2 references MegaGen imagery/copy; Next implant page uses current clinic photography — **REQUIRES_APPROVAL** if MegaGen is still a marketed system.
- Case studies exist only on Next (`/cazuri/{slug}/`); WP listed `/studii-de-caz/` as a gallery listing (301 → `/cazuri/` verified on staging).

## Doctors

- Next portraits live under `src/assets/echipa/`.
- WP `/echipa/corina-holici/` served an attachment image, not a bio page.
- No evidence in this pass of swapped portraits; not a pixel-forensic review.

## Legal / chrome

- WP `/footer/`, `/shop/`, builder home `prv-element-home` are not content pages to migrate as imagery.

## Broken images on staging

Not exhaustively crawled (hundreds of assets). Disk check for blog paths passed. Visual compression/crop of clinical photos was **not** scored; redesigned pages use different crops by design.
