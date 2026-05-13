import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import UrgenteStomatologicePageClient from "@/components/services/UrgenteStomatologicePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/urgente-stomatologice/";
const NAME = "Urgențe stomatologice";
const DESCRIPTION =
  "Urgențe stomatologice în Cluj la Alverna Dental Studio: dureri acute, infecții, traumatisme dentare și sângerări tratate prompt de echipa noastră specializată.";

const faqItems = [
  {
    q: "Ce fac dacă am durere dentară intensă în afara programului?",
    a: "Clătește blând cu apă călduță, menține igiena locală și folosește analgezic doar conform recomandărilor uzuale. Programează-te cât mai rapid la urgență stomatologică.",
  },
  {
    q: "Cum opresc sângerarea orală după extracție sau traumatism?",
    a: "Aplică presiune cu tifon steril 15-20 minute, fără clătiri agresive. Dacă sângerarea persistă, este necesară prezentarea imediată la medic.",
  },
  {
    q: "În cât timp ar trebui să ajung la dentist în caz de urgență?",
    a: "Ideal în 30-60 minute, mai ales în traumatisme sau avulsii dentare. Intervenția rapidă crește semnificativ șansele de salvare a dintelui.",
  },
  {
    q: "Ce fac dacă s-a fracturat dintele sau a căzut plomba?",
    a: "Evită masticația pe partea afectată, păstrează zona curată și prezintă-te urgent la consult pentru a evita infecțiile și agravarea leziunii.",
  },
  {
    q: "Ce înseamnă umflarea obrazului în context dentar?",
    a: "Poate semnala o infecție activă (abces). Nu aplica căldură locală și nu încerca drenaj acasă; este necesară intervenție stomatologică urgentă.",
  },
];

export const metadata: Metadata = {
  title: "Urgențe stomatologice Cluj | Intervenție rapidă | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function UrgenteStomatologicePage() {
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
      <UrgenteStomatologicePageClient />
    </PrototypeFrame>
  );
}
