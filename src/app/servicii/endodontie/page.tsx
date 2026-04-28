import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import EndodontiePageClient from "@/components/services/EndodontiePageClient";

export const metadata: Metadata = {
  title: "Endodonție Cluj | Tratament de canal | Alverna Dental Studio",
  description:
    "Tratamente de endodonție în Cluj pentru eliminarea infecțiilor de la nivelul rădăcinii dentare. Diagnostic precis, microscop dentar și tratamente moderne la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/endodontie/",
  },
};

export default function EndodontiePage() {
  return (
    <PrototypeFrame>
      <EndodontiePageClient />
    </PrototypeFrame>
  );
}
