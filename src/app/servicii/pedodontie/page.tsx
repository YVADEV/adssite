import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import PedodontiePageClient from "@/components/services/PedodontiePageClient";

export const metadata: Metadata = {
  title: "Stomatologie copii Cluj | Pedodonție | Alverna Dental Studio",
  description:
    "Servicii de stomatologie copii în Cluj, de la primul dințișor de lapte până în adolescență. Prevenție, tratamente moderne și experiențe pozitive la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/pedodontie/",
  },
};

export default function PedodontiePage() {
  return (
    <PrototypeFrame>
      <PedodontiePageClient />
    </PrototypeFrame>
  );
}
