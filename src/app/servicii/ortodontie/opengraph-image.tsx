import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Ortodonție | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Ortodonție",
    subtitle: "Aliniere dentară corectivă pentru adulți și copii.",
  });
}
