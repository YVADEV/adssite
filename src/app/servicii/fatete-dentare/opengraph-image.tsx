import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Fațete dentare | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Fațete dentare",
    subtitle: "Fațete ceramice și de compozit pentru un zâmbet armonios.",
  });
}
