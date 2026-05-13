import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Urgențe stomatologice | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Urgențe stomatologice",
    subtitle: "Intervenție rapidă pentru dureri și traumatisme orale.",
  });
}
