import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Urgențe stomatologice 24/7 Cluj-Napoca | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Urgențe stomatologice 24/7",
    subtitle: "Cluj-Napoca · programare telefonică prealabilă",
  });
}
