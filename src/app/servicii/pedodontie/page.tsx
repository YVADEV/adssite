import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import PedodontiePageClient from "@/components/services/PedodontiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/pedodontie/";
const NAME = "Pedodonție";
const DESCRIPTION =
  "Servicii de stomatologie copii în Cluj, de la primul dințișor de lapte până în adolescență. Prevenție, tratamente moderne și experiențe pozitive la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Când ar trebui prima vizită la pedodont?",
    a: "Ideal, odată cu apariția primului dințișor de lapte, în jurul vârstei de 6-8 luni.",
  },
  {
    q: "Cât de des trebuie controale la stomatologie copii?",
    a: "În general la 6 luni, iar în perioada erupției dinților permanenți, uneori la 3 luni, conform recomandării medicului.",
  },
  {
    q: "Cum prevenim frica de dentist?",
    a: "Prin vizite regulate, explicații pozitive și o familiarizare treptată a copilului cu mediul din cabinet.",
  },
  {
    q: "Dinții de lapte chiar trebuie tratați?",
    a: "Da. Dinții temporari au rol esențial în dezvoltarea dentiției permanente, masticație și aliniere.",
  },
];

export const metadata: Metadata = {
  title: "Stomatologie copii Cluj | Pedodonție | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function PedodontiePage() {
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
      <PedodontiePageClient />
    </PrototypeFrame>
  );
}
