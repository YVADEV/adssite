import type { Metadata } from "next";
import ServiciiPageClient from "@/components/services/ServiciiPageClient";

const PATH = "/servicii/";
const DESCRIPTION =
  "Servicii stomatologice complete în Cluj-Napoca: implant dentar, ortodonție, fațete, profilaxie, pedodonție, urgențe și estetică dentară. Aparatură modernă, plan personalizat.";

export const metadata: Metadata = {
  title: "Servicii stomatologice Cluj",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function ServiciiPage() {
  return <ServiciiPageClient />;
}
