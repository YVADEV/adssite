import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Protetică dentară | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Protetică dentară",
    subtitle: "Lucrări protetice fixe și mobile, soluții complete.",
  });
}
