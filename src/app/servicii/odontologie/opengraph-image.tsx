import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Odontologie | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Odontologie",
    subtitle: "Tratamente conservative pentru carii și leziuni dentare.",
  });
}
