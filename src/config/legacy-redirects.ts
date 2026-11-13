import { withTrailingSlash } from "../lib/site";

export type LegacyRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
};

function toDestination(path: string) {
  return withTrailingSlash(path);
}

/** Slash and non-slash sources so Netlify/Next do not create an extra hop. */
function pair(sourcePath: string, destinationPath: string): LegacyRedirect[] {
  const destination = toDestination(destinationPath);
  const trimmed = sourcePath.replace(/\/$/, "") || "/";
  const withSlash = trimmed === "/" ? "/" : `${trimmed}/`;
  const rows: LegacyRedirect[] = [{ source: trimmed, destination, statusCode: 301 }];
  if (withSlash !== trimmed) {
    rows.push({ source: withSlash, destination, statusCode: 301 });
  }
  return rows;
}

/**
 * Verified WP → Next mappings. Destinations exist in this repository.
 * Do not add doctor or legal targets that are not real pages.
 */
export const VERIFIED_REDIRECT_PAIRS: Array<{ oldPath: string; newPath: string; notes: string }> = [
  { oldPath: "/servicii/stomatologie-copii/", newPath: "/servicii/pedodontie/", notes: "WP pedodontie page slug" },
  { oldPath: "/servicii/urgente-stomatologice/", newPath: "/urgente-stomatologice-cluj/", notes: "Emergency page moved" },
  { oldPath: "/studii-de-caz/", newPath: "/cazuri/", notes: "Cases listing renamed" },
  { oldPath: "/echipa/parvu-andreea/", newPath: "/echipa/andreea-parvu/", notes: "Doctor slug order; profile exists" },
  { oldPath: "/gdpr/", newPath: "/politica-de-confidentialitate/", notes: "WP GDPR page; privacy policy is the equivalent" },
  { oldPath: "/politica-cookies/", newPath: "/politica-de-cookies/", notes: "Alternate slug; /politica-de-cookies/ is KEEP_URL" },
  { oldPath: "/cookie-policy/", newPath: "/politica-de-cookies/", notes: "English slug variant" },
  { oldPath: "/category/blog/", newPath: "/blog/", notes: "Yoast category archive equals the blog index" },
  { oldPath: "/category/blog/page/1/", newPath: "/blog/", notes: "First category page is the index" },
  { oldPath: "/category/blog/page/2/", newPath: "/blog/page/2/", notes: "WP category pagination page 2 of 5" },
  { oldPath: "/category/blog/page/3/", newPath: "/blog/page/3/", notes: "WP category pagination page 3 of 5" },
  { oldPath: "/category/blog/page/4/", newPath: "/blog/page/4/", notes: "WP category pagination page 4 of 5" },
  { oldPath: "/category/blog/page/5/", newPath: "/blog/page/5/", notes: "WP category pagination page 5 of 5" },
];

export const LEGACY_REDIRECTS: LegacyRedirect[] = VERIFIED_REDIRECT_PAIRS.flatMap((row) => pair(row.oldPath, row.newPath));

export function redirectDestinations() {
  return [...new Set(LEGACY_REDIRECTS.map((row) => row.destination))];
}
