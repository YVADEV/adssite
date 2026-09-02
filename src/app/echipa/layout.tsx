import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/echipa/";
const DESCRIPTION =
  "Cunoaște echipa Alverna Dental Studio: medici specialiști, laborator propriu, asistente și management. Experiență în implantologie, ortodonție, estetică și chirurgie dentară.";

export const metadata: Metadata = {
  title: "Echipa medicală | Medici stomatologi Cluj",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function EchipaLayout({ children }: { children: ReactNode }) {
  return children;
}
