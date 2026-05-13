import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import OrtodontiePageClient from "@/components/services/OrtodontiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/ortodontie/";
const NAME = "Ortodonție";
const DESCRIPTION =
  "Servicii de ortodonție în Cluj la Alverna Dental Studio: diagnostic precis, tratamente personalizate cu aparat dentar sau alignere, tehnologie modernă și rezultate stabile.";

const faqItems = [
  {
    q: "Când ar trebui să merg la ortodont?",
    a: "Ideal este să faceți evaluări periodice, chiar dacă dinții par aliniați. Malocluzia poate exista fără semne evidente și poate afecta funcția masticatorie pe termen lung.",
  },
  {
    q: "Tratamentul ortodontic este doar pentru copii?",
    a: "Nu. Tratamentul poate fi făcut la orice vârstă, dacă starea gingiilor și a osului permite. Tot mai mulți adulți aleg terapii ortodontice moderne.",
  },
  {
    q: "Cât durează tratamentul ortodontic?",
    a: "Durata depinde de complexitatea cazului, tipul aparatului și complianța pacientului. Estimarea exactă se stabilește după consultația de specialitate.",
  },
  {
    q: "Cum aleg între aparat fix și alignere?",
    a: "Decizia se ia împreună cu medicul ortodont, în funcție de obiectivele clinice, stilul de viață, nivelul de disciplină și buget.",
  },
  {
    q: "Este necesară contenția după aparat?",
    a: "Da. Etapa de contenție este esențială pentru stabilizarea rezultatului și prevenirea recidivei pozițiilor dentare.",
  },
  {
    q: "Cât costă un tratament ortodontic?",
    a: "Costul variază în funcție de complexitatea cazului și de tipul aparatului (metalic, ceramic, safir, lingual, alignere). Devizul personalizat se stabilește după evaluare.",
  },
];

export const metadata: Metadata = {
  title: "Ortodonție Cluj | Aparate dentare și alignere | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function OrtodontiePage() {
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
      <OrtodontiePageClient />
    </PrototypeFrame>
  );
}
