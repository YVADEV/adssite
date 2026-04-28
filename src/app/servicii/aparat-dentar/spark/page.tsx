import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import SparkServicePageClient from "@/components/services/SparkServicePageClient";

export const metadata: Metadata = {
  title: "Aparat dentar Spark Cluj | Gutiere transparente | Alverna Dental Studio",
  description:
    "Aparat dentar Spark în Cluj pentru alinierea discretă a dinților. Gutiere transparente, tratament personalizat și evaluare ortodontică la Alverna Dental Studio.",
  alternates: {
    canonical: "https://alvernadental.com/servicii/aparat-dentar/spark/",
  },
};

export default function SparkPage() {
  return (
    <PrototypeFrame>
      <SparkServicePageClient />
    </PrototypeFrame>
  );
}
