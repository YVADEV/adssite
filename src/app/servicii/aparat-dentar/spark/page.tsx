import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import SparkServicePageClient from "@/components/services/SparkServicePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/aparat-dentar/spark/";
const NAME = "Aliniatori Spark";
const DESCRIPTION =
  "Aparat dentar Spark în Cluj pentru alinierea discretă a dinților. Gutiere transparente, tratament personalizat și evaluare ortodontică la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Este aparatul dentar Spark vizibil?",
    a: "Gutierele Spark sunt transparente și au un aspect discret, fiind greu de observat în interacțiunile de zi cu zi.",
  },
  {
    q: "Pot mânca purtând gutierele?",
    a: "Gutierele se îndepărtează în timpul mesei și se reaplică după igienizarea dinților.",
  },
  {
    q: "Cât durează tratamentul?",
    a: "Durata depinde de complexitatea cazului și este stabilită după consultația inițială.",
  },
  {
    q: "Este potrivit pentru adulți?",
    a: "Da, Spark este o opțiune potrivită pentru adulți și adolescenți, în funcție de recomandarea medicului.",
  },
];

export const metadata: Metadata = {
  title: "Aparat dentar Spark Cluj | Gutiere transparente | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function SparkPage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Servicii", url: `${SITE_URL}/servicii/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd data={serviceLd({ name: NAME, description: DESCRIPTION, url })} />
      <JsonLd data={faqLd(faqItems)} />
      <SparkServicePageClient />
    </PrototypeFrame>
  );
}
