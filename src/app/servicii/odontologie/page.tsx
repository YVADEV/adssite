import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import OdontologiePageClient from "@/components/services/OdontologiePageClient";

export const metadata: Metadata = {
  title: "Odontologie Cluj | Tratamente moderne | Alverna Dental Studio",
  description:
    "Servicii de odontologie în Cluj la Alverna Dental Studio: tratamente pentru carii și leziuni dentare, restaurări estetice și funcționale, cu tehnologii moderne și materiale biocompatibile.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/odontologie/",
  },
};

export default function OdontologiePage() {
  return (
    <PrototypeFrame>
      <OdontologiePageClient />
    </PrototypeFrame>
  );
}
