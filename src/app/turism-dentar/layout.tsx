import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/turism-dentar/";
const DESCRIPTION =
  "Turism dentar la Alverna Dental Studio Cluj: tratamente stomatologice de calitate, costuri accesibile și suport pentru pacienți internaționali. Mini-vacanță între proceduri.";

export const metadata: Metadata = {
  title: "Turism dentar Cluj | Tratamente și vacanță",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function TurismDentarLayout({ children }: { children: ReactNode }) {
  return children;
}
