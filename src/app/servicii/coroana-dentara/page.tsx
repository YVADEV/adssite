import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import CoroanaDentaraPageClient from "@/components/services/CoroanaDentaraPageClient";

export const metadata: Metadata = {
  title: "Coroană dentară Cluj | Restaurări estetice și funcționale | Alverna Dental Studio",
  description:
    "Coroană dentară în Cluj la Alverna Dental Studio: coroane din zirconiu, ceramică sau metalo-ceramică, realizate digital pentru estetică naturală și rezistență pe termen lung.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/coroana-dentara/",
  },
};

export default function CoroanaDentaraPage() {
  return (
    <PrototypeFrame>
      <CoroanaDentaraPageClient />
    </PrototypeFrame>
  );
}
