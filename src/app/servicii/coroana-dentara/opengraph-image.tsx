import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Coroană dentară | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Coroană dentară",
    subtitle: "Coroane ceramice și metalo-ceramice cu fit precis.",
  });
}
