import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Endodonție | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Endodonție",
    subtitle: "Tratament de canal modern, sub microscop.",
  });
}
