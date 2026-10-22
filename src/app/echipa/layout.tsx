import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/echipa/";
const DESCRIPTION =
  "Cunoaște echipa Alverna Dental Studio: medici, laborator propriu, asistente și management. Experiență în implantologie, ortodonție, estetică și chirurgie dentară.";

export const metadata: Metadata = pageMetadata({
  title: "Echipa medicală | Medici stomatologi Cluj",
  description: DESCRIPTION,
  path: PATH,
});

export default function EchipaLayout({ children }: { children: ReactNode }) {
  return children;
}
