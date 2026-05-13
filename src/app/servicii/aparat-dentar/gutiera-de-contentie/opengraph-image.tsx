import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Gutieră de contenție | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Gutieră de contenție",
    subtitle: "Menținerea rezultatelor după tratamentul ortodontic.",
  });
}
