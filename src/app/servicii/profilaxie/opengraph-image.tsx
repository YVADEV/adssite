import { renderServiceOg, ogSize, ogContentType } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Profilaxie dentară | Alverna Dental Studio";

export default async function Image() {
  return renderServiceOg({
    title: "Profilaxie dentară",
    subtitle: "Igienizare profesională airflow și consult preventiv.",
  });
}
