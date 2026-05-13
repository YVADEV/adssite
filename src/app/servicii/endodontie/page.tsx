import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import EndodontiePageClient from "@/components/services/EndodontiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/endodontie/";
const NAME = "Endodonție";
const DESCRIPTION =
  "Tratamente de endodonție în Cluj pentru eliminarea infecțiilor de la nivelul rădăcinii dentare. Diagnostic precis, microscop dentar și tratamente moderne la Alverna Dental Studio.";

const faqItems = [
  {
    q: "Cât durează procedura?",
    a: "Tratamentul poate avea loc într-o singură ședință sau în mai multe, în funcție de complexitatea cazului și timpul necesar intervenției.",
  },
  {
    q: "Care sunt etapele procedurii?",
    a: "Se efectuează radiografii digitale, anestezie locală, izolare cu digă, curățarea canalelor radiculare, dezinfectare, sigilare biocompatibilă și restaurare coronară.",
  },
  {
    q: "Care este gradul de disconfort?",
    a: "Datorită anesteziei locale, disconfortul este minim. După tratament poate apărea sensibilitate ușoară, de regulă temporară.",
  },
  {
    q: "Ce responsabilități are pacientul?",
    a: "Respectarea medicației și indicațiilor postoperatorii, plus restaurarea coronară în termenul recomandat de medic, pentru protejarea dintelui tratat.",
  },
  {
    q: "Cum decurge procesul de vindecare?",
    a: "În primele zile poate exista sensibilitate la mușcătură. Cu igienă corectă, controale periodice și recomandări respectate, vindecarea evoluează favorabil.",
  },
  {
    q: "Care sunt recomandările post-tratament?",
    a: "Evitarea presiunii excesive pe dintele tratat, igienă orală strictă, antiinflamatoare la nevoie și monitorizare regulată în cabinet.",
  },
];

export const metadata: Metadata = {
  title: "Endodonție Cluj | Tratament de canal | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function EndodontiePage() {
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
      <EndodontiePageClient />
    </PrototypeFrame>
  );
}
