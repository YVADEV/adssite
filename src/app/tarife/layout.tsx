import type { Metadata } from "next";
import type { ReactNode } from "react";

const PATH = "/tarife/";
const DESCRIPTION =
  "Tarife complete și transparente la Alverna Dental Studio Cluj: implant dentar, ortodonție, estetică, profilaxie și urgențe. Prețuri clare, fără costuri ascunse.";

export const metadata: Metadata = {
  title: "Tarife stomatologice Cluj | Prețuri transparente",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function TarifeLayout({ children }: { children: ReactNode }) {
  return children;
}
