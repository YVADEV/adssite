import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ProteticaPageClient from "@/components/services/ProteticaPageClient";

export const metadata: Metadata = {
  title: "Protetică dentară Cluj | Coroane, fațete, punți | Alverna Dental Studio",
  description:
    "Servicii de protetică dentară în Cluj la Alverna Dental Studio: coroane, fațete, punți și proteze personalizate, realizate digital pentru estetică și funcționalitate optimă.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/protetica/",
  },
};

export default function ProteticaPage() {
  return (
    <PrototypeFrame>
      <ProteticaPageClient />
    </PrototypeFrame>
  );
}
