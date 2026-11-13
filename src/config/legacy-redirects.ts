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
  { oldPath: "/servicii/stomatologie-copii/", newPath: "/servicii/pedodontie/", notes: "Legacy pedodontie URL" },
  { oldPath: "/servicii/urgente-stomatologice/", newPath: "/urgente-stomatologice-cluj/", notes: "Emergency page moved" },
  { oldPath: "/studii-de-caz/", newPath: "/cazuri/", notes: "Cases listing renamed" },
  { oldPath: "/echipa/parvu-andreea/", newPath: "/echipa/andreea-parvu/", notes: "Doctor slug order" },
  { oldPath: "/gdpr/", newPath: "/politica-de-confidentialitate/", notes: "GDPR content lives on privacy page" },
];

const extraPairs: Array<{ oldPath: string; newPath: string }> = [
  { oldPath: "/servicii/stomatologie-copii/", newPath: "/servicii/pedodontie/" },
  { oldPath: "/servicii/urgente-stomatologice/", newPath: "/urgente-stomatologice-cluj/" },
  { oldPath: "/studii-de-caz/", newPath: "/cazuri/" },
  { oldPath: "/echipa/parvu-andreea/", newPath: "/echipa/andreea-parvu/" },
  { oldPath: "/gdpr/", newPath: "/politica-de-confidentialitate/" },
  { oldPath: "/politica-cookies/", newPath: "/politica-de-cookies/" },
  { oldPath: "/cookie-policy/", newPath: "/politica-de-cookies/" },
];

export const LEGACY_REDIRECTS: LegacyRedirect[] = extraPairs.flatMap((row) => pair(row.oldPath, row.newPath));

export function redirectDestinations() {
  return [...new Set(LEGACY_REDIRECTS.map((row) => row.destination))];
}
