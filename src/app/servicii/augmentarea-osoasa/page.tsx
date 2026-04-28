import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import AugmentareaOsoasaPageClient from "@/components/services/AugmentareaOsoasaPageClient";

export const metadata: Metadata = {
  title: "Augmentare osoasă Cluj | Adiție de os | Alverna Dental Studio",
  description:
    "Augmentare osoasă în Cluj pentru reconstrucția osului maxilar și susținerea implanturilor dentare. Tehnici moderne, materiale biocompatibile și plan personalizat la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/augmentarea-osoasa/",
  },
};

export default function AugmentareaOsoasaPage() {
  return (
    <PrototypeFrame>
      <AugmentareaOsoasaPageClient />
    </PrototypeFrame>
  );
}
