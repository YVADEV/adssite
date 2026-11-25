import { publicPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/echipa/";
const DESCRIPTION =
  "Cunoaște echipa Alverna Dental Studio: medici, laborator propriu, asistente și management. Experiență în implantologie, ortodonție, estetică și chirurgie dentară.";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
  title: "Echipa medicală | Medici stomatologi Cluj",
  description: DESCRIPTION,
  path: PATH,
});
}

export default function EchipaLayout({ children }: { children: ReactNode }) {
  return children;
}
