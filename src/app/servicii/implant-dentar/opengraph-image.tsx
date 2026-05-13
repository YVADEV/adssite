import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Implant dentar | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Implant dentar",
    subtitle: "Implantologie orală modernă cu plan personalizat.",
  });
}
