import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import CoroanaDentaraPageClient from "@/components/services/CoroanaDentaraPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/coroana-dentara/";
const NAME = "Coroană dentară";
const DESCRIPTION =
  "Coroană dentară în Cluj la Alverna Dental Studio: coroane din zirconiu, ceramică sau metalo-ceramică, realizate digital pentru estetică naturală și rezistență pe termen lung.";

const faqItems = [
  {
    q: "Cât durează procedura pentru o coroană dentară?",
    a: "De regulă 2 ședințe, la interval de câteva zile. În funcție de caz și tehnologia folosită, durata totală poate varia.",
  },
  {
    q: "Este dureroasă montarea unei coroane dentare?",
    a: "Procedura se face sub anestezie locală și este, în general, bine tolerată. După tratament poate apărea sensibilitate temporară.",
  },
  {
    q: "Care este durata de viață a unei coroane?",
    a: "Cu igienă corectă și controale periodice, coroanele pot rezista în medie 10-15 ani sau mai mult, în funcție de material și obiceiurile pacientului.",
  },
  {
    q: "Ce fac dacă o coroană se desprinde?",
    a: "Păstrați coroana, evitați masticația pe zona respectivă și programați-vă cât mai repede la medic pentru refixare sau înlocuire.",
  },
  {
    q: "Cum se întreține corect o coroană dentară?",
    a: "Periaj de două ori pe zi, ață dentară/periuțe interdentare, evitarea alimentelor foarte dure și controale periodice la 6 luni.",
  },
  {
    q: "Care sunt contraindicațiile?",
    a: "Există puține contraindicații absolute; indicația se stabilește medical, în funcție de statusul general și de posibilitatea restaurării conservatoare.",
  },
];

export const metadata: Metadata = {
  title: "Coroană dentară Cluj | Restaurări estetice și funcționale | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function CoroanaDentaraPage() {
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
      <CoroanaDentaraPageClient />
    </PrototypeFrame>
  );
}
