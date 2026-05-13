import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Augmentare osoasă | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Augmentare osoasă",
    subtitle: "Sinus lift și augmentări pentru implantologie.",
  });
}
