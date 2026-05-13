import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Chirurgie dentară | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Chirurgie dentară",
    subtitle: "Extracții complexe, chirurgie orală minim invazivă.",
  });
}
