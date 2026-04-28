import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import FateteDentarePageClient from "@/components/services/FateteDentarePageClient";

export const metadata: Metadata = {
  title: "Fațete dentare Cluj | Zâmbet estetic | Alverna Dental Studio",
  description:
    "Aplicare fațete dentare în Cluj pentru corectarea formei și culorii dinților. Soluții premium, materiale biocompatibile și rezultate naturale la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/fatete-dentare/",
  },
};

export default function FateteDentarePage() {
  return (
    <PrototypeFrame>
      <FateteDentarePageClient />
    </PrototypeFrame>
  );
}
