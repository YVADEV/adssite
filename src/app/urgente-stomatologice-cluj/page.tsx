import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import Urgente24PageClient from "@/components/services/Urgente24PageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/urgente-stomatologice-cluj/";
const NAME = "Urgențe stomatologice 24/7 în Cluj-Napoca";
const DESCRIPTION =
  "Urgențe stomatologice 24/7 în Cluj-Napoca, cu programare telefonică prealabilă. Durere dentară, urgențe endodontice, traumatisme și alte probleme dentare acute.";

const faqItems = [
  {
    q: "Este medicul permanent în clinică 24/7?",
    a: "Nu. În afara programului obișnuit, serviciul funcționează în regim on-call. Medicul evaluează inițial solicitarea telefonic și se deplasează la clinică atunci când este stabilită necesitatea unei consultații de urgență.",
  },
  {
    q: "Pot veni direct la clinică dacă mă doare un dinte?",
    a: "În afara programului obișnuit, nu. Este necesar să ne contactezi și să primești confirmarea înainte de prezentare.",
  },
  {
    q: "Îmi veți termina tratamentul în aceeași noapte?",
    a: "Depinde de diagnostic. Într-o urgență, prioritatea poate fi controlul durerii și stabilizarea problemei. Tratamentul definitiv poate necesita continuarea în timpul programului obișnuit.",
  },
  {
    q: "Faceți tratamente de canal în regim de urgență?",
    a: "Putem realiza intervenții endodontice de urgență atunci când sunt indicate. În funcție de situație, tratamentul complet poate fi finalizat într-o programare ulterioară.",
  },
  {
    q: "Faceți extracții noaptea?",
    a: "În etapa actuală a serviciului, extracțiile complicate și intervențiile chirurgicale complexe nu sunt incluse în serviciul on-call. Medicul va evalua situația și va stabili conduita potrivită.",
  },
  {
    q: "Pot solicita serviciul dacă nu sunt pacient Alverna?",
    a: "Da. Serviciul de urgențe este disponibil și pacienților care nu au mai fost tratați anterior în clinica noastră.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Urgențe Stomatologice 24/7 Cluj-Napoca | Alverna Dental Studio",
  },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Urgențe Stomatologice 24/7 Cluj-Napoca | Alverna Dental Studio",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
  },
};

export default function UrgenteStomatologiceClujPage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd data={serviceLd({ name: NAME, description: DESCRIPTION, url })} />
      <JsonLd data={faqLd(faqItems)} />
      <Urgente24PageClient />
    </PrototypeFrame>
  );
}
