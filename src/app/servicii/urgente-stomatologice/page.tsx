import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import UrgenteStomatologicePageClient from "@/components/services/UrgenteStomatologicePageClient";

export const metadata: Metadata = {
  title: "Urgențe stomatologice Cluj | Intervenție rapidă | Alverna Dental Studio",
  description:
    "Urgențe stomatologice în Cluj la Alverna Dental Studio: dureri acute, infecții, traumatisme dentare și sângerări tratate prompt de echipa noastră specializată.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/urgente-stomatologice/",
  },
};

export default function UrgenteStomatologicePage() {
  return (
    <PrototypeFrame>
      <UrgenteStomatologicePageClient />
    </PrototypeFrame>
  );
}
