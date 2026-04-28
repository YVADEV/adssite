import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import DentistClujPageClient from "@/components/services/DentistClujPageClient";

export const metadata: Metadata = {
  title: "Dentist Cluj | Stomatologie modernă | Alverna Dental Studio",
  description:
    "Cauți un dentist în Cluj? La Alverna Dental Studio beneficiezi de medici specialiști, tehnologie modernă, planuri personalizate și tratamente stomatologice la standarde înalte.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/dentist-cluj/",
  },
};

export default function DentistClujPage() {
  return (
    <PrototypeFrame>
      <DentistClujPageClient />
    </PrototypeFrame>
  );
}
