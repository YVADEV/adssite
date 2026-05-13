import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import EsteticaDentaraPageClient from "@/components/services/EsteticaDentaraPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/estetica-dentara/";
const NAME = "Estetică dentară";
const DESCRIPTION =
  "Servicii complete de estetică dentară în Cluj: albire, fațete, restaurări și planuri personalizate pentru un zâmbet sănătos, strălucitor și natural.";

const faqItems = [
  {
    q: "Cine poate beneficia de tratamente de estetică dentară?",
    a: "Pacienții care își doresc îmbunătățirea aspectului zâmbetului și au o sănătate orală adecvată. La nevoie, se recomandă tratamente preliminare înaintea etapelor estetice.",
  },
  {
    q: "Tratamentele de estetică dentară sunt dureroase?",
    a: "În general, nu. Procedurile moderne folosesc anestezie locală și tehnologii minim invazive, astfel încât disconfortul este redus.",
  },
  {
    q: "Fațetele dentare afectează dinții naturali?",
    a: "Fațetele moderne sunt minim invazive și adaptate individual. Cu indicație corectă și tehnică adecvată, rezultatele sunt stabile și naturale.",
  },
  {
    q: "Cum se stabilesc costurile tratamentelor?",
    a: "Costurile depind de complexitatea cazului, numărul de dinți implicați, procedurile necesare și etapele de planificare. Estimarea este prezentată transparent în consultație.",
  },
];

export const metadata: Metadata = {
  title: "Estetică dentară Cluj | Zâmbet armonios | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function EsteticaDentaraPage() {
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
      <EsteticaDentaraPageClient />
    </PrototypeFrame>
  );
}
