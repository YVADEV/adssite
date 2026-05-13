import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Dentist Cluj | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Dentist Cluj",
    subtitle: "Stomatologie generală în Cluj-Napoca, cu plan personalizat.",
  });
}
