import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ProteticaPageClient from "@/components/services/ProteticaPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/protetica/";
const NAME = "Protetică dentară";
const DESCRIPTION =
  "Servicii de protetică dentară în Cluj la Alverna Dental Studio: coroane, fațete, punți și proteze personalizate, realizate digital pentru estetică și funcționalitate optimă.";

const faqItems = [
  {
    q: "Cât durează realizarea unei lucrări protetice?",
    a: "În funcție de complexitate, o coroană sau o fațetă se poate finaliza în aproximativ 7-10 zile, incluzând consultația, pregătirea și montarea.",
  },
  {
    q: "Sunt lucrările protetice durabile?",
    a: "Da. Cu igienă corectă și controale periodice, lucrările protetice pot rezista 10-15 ani sau chiar mai mult, în funcție de material și context clinic.",
  },
  {
    q: "Lucrările protetice sunt doar pentru estetică?",
    a: "Nu. Ele au rol dublu: estetic și funcțional, contribuind la masticație corectă, vorbire clară și echilibru ocluzal.",
  },
  {
    q: "Care este diferența dintre coroană și fațetă?",
    a: "Coroana acoperă întreaga suprafață a dintelui și îl consolidează, în timp ce fațeta acoperă doar fața vizibilă și are predominant rol estetic.",
  },
  {
    q: "Care este diferența dintre punte și implant?",
    a: "Puntea se sprijină pe dinții vecini (care necesită preparare), iar implantul înlocuiește rădăcina dintelui direct în os, fără a afecta dinții adiacenți.",
  },
  {
    q: "Se poate plăti în rate?",
    a: 'Da, la Alverna Dental Studio sunt disponibile opțiuni de plată în rate prin partenerii financiari, în funcție de eligibilitate.',
  },
  {
    q: "Cât costă o lucrare de protetică dentară?",
    a: "Costul diferă în funcție de tipul lucrării, materialele alese și complexitatea cazului; estimarea exactă se oferă după consultație.",
  },
];

export const metadata: Metadata = {
  title: "Protetică dentară Cluj | Coroane, fațete, punți | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function ProteticaPage() {
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
      <ProteticaPageClient />
    </PrototypeFrame>
  );
}
