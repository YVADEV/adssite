import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aliniatori Spark | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Aliniatori Spark",
    subtitle: "Ortodonție invizibilă cu aliniatori transparenți Spark.",
  });
}
