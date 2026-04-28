import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import GutieraContentiePageClient from "@/components/services/GutieraContentiePageClient";

export const metadata: Metadata = {
  title: "Gutiera de contenție Cluj | Menținerea alinierii dentare | Alverna Dental Studio",
  description:
    "Gutiera de contenție în Cluj pentru menținerea rezultatului ortodontic. Soluție confortabilă, plan personalizat și monitorizare la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/aparat-dentar/gutiera-de-contentie/",
  },
};

export default function GutieraContentiePage() {
  return (
    <PrototypeFrame>
      <GutieraContentiePageClient />
    </PrototypeFrame>
  );
}
