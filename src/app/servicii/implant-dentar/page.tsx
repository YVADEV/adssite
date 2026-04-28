import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ImplantDentarPageClient from "@/components/services/ImplantDentarPageClient";

export const metadata: Metadata = {
  title: "Implant dentar Cluj | Implantologie premium | Alverna Dental Studio",
  description:
    "Implant dentar Cluj la Alverna Dental Studio: plan personalizat, tehnologii moderne, sisteme premium și rezultate funcționale și estetice de lungă durată.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/implant-dentar/",
  },
};

export default function ImplantDentarPage() {
  return (
    <PrototypeFrame>
      <ImplantDentarPageClient />
    </PrototypeFrame>
  );
}
