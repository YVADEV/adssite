import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import OrtodontiePageClient from "@/components/services/OrtodontiePageClient";

export const metadata: Metadata = {
  title: "Ortodonție Cluj | Aparate dentare și alignere | Alverna Dental Studio",
  description:
    "Servicii de ortodonție în Cluj la Alverna Dental Studio: diagnostic precis, tratamente personalizate cu aparat dentar sau alignere, tehnologie modernă și rezultate stabile.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/ortodontie/",
  },
};

export default function OrtodontiePage() {
  return (
    <PrototypeFrame>
      <OrtodontiePageClient />
    </PrototypeFrame>
  );
}
