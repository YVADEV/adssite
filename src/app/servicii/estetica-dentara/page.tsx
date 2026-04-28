import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import EsteticaDentaraPageClient from "@/components/services/EsteticaDentaraPageClient";

export const metadata: Metadata = {
  title: "Estetică dentară Cluj | Zâmbet armonios | Alverna Dental Studio",
  description:
    "Servicii complete de estetică dentară în Cluj: albire, fațete, restaurări și planuri personalizate pentru un zâmbet sănătos, strălucitor și natural.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/estetica-dentara/",
  },
};

export default function EsteticaDentaraPage() {
  return (
    <PrototypeFrame>
      <EsteticaDentaraPageClient />
    </PrototypeFrame>
  );
}
