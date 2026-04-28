import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ChirurgieDentaraPageClient from "@/components/services/ChirurgieDentaraPageClient";

export const metadata: Metadata = {
  title: "Chirurgie dentară Cluj | Intervenții orale complexe | Alverna Dental Studio",
  description:
    "Servicii de chirurgie dentară în Cluj: extracții complexe, molari incluși, implantologie și reconstrucții. Intervenții sigure, tehnologii moderne și recuperare atent monitorizată.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/chirurgie-dentara/",
  },
};

export default function ChirurgieDentaraPage() {
  return (
    <PrototypeFrame>
      <ChirurgieDentaraPageClient />
    </PrototypeFrame>
  );
}
