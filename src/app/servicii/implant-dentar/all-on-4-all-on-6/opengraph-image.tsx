import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "All-on-4 / All-on-6 | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "All-on-4 / All-on-6",
    subtitle: "Dinți ficși pe implanturi, flux de lucru digital integrat, laborator propriu.",
  });
}
