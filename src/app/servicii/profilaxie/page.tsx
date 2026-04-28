import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ProfilaxiePageClient from "@/components/services/ProfilaxiePageClient";

export const metadata: Metadata = {
  title: "Profilaxie dentară Cluj | Detartraj și prevenție | Alverna Dental Studio",
  description:
    "Profilaxie dentară în Cluj la Alverna Dental Studio: detartraj, periaj profesional, Air-flow, fluorizare și plan personalizat de prevenție pentru sănătate orală pe termen lung.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/profilaxie/",
  },
};

export default function ProfilaxiePage() {
  return (
    <PrototypeFrame>
      <ProfilaxiePageClient />
    </PrototypeFrame>
  );
}
