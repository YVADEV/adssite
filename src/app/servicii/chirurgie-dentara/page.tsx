import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ChirurgieDentaraPageClient from "@/components/services/ChirurgieDentaraPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/chirurgie-dentara/";
const NAME = "Chirurgie dentară";
const DESCRIPTION =
  "Servicii de chirurgie dentară în Cluj: extracții complexe, molari incluși, implantologie și reconstrucții. Intervenții sigure, tehnologii moderne și recuperare atent monitorizată.";

const faqItems = [
  {
    q: "Când este necesară o intervenție de chirurgie dentară?",
    a: "Când problema depășește aria tratamentelor clasice: extracții complexe, molari incluși, infecții extinse, reconstrucții osoase sau proceduri premergătoare implanturilor.",
  },
  {
    q: "Extracțiile dentare se fac cu durere?",
    a: "Nu. Intervențiile se realizează cu anestezie corespunzătoare, iar disconfortul postoperator este, în general, redus și controlabil.",
  },
  {
    q: "Cum decurge recuperarea după extracția măselei de minte?",
    a: "În primele zile pot apărea inflamație și sensibilitate locală. Respectarea recomandărilor privind igiena, dieta și medicația accelerează vindecarea.",
  },
  {
    q: "Ce tehnologii sunt utilizate în chirurgia dentară modernă?",
    a: "Piezosurgery, microchirurgie dentară, laser dentar și imagistică 3D pentru intervenții precise, cu traumă minimă și recuperare mai rapidă.",
  },
  {
    q: "Cum sunt stabilite costurile procedurilor?",
    a: "Costurile depind de tipul intervenției, complexitate, tehnologiile folosite și eventualele etape suplimentare. Planul și estimarea sunt prezentate înainte de tratament.",
  },
  {
    q: "Ce responsabilități are pacientul după intervenție?",
    a: "Respectarea strictă a indicațiilor postoperatorii: igienă adecvată, dietă recomandată, evitarea fumatului și prezentarea la controalele indicate.",
  },
];

export const metadata: Metadata = {
  title: "Chirurgie dentară Cluj | Intervenții orale complexe | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function ChirurgieDentaraPage() {
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
      <ChirurgieDentaraPageClient />
    </PrototypeFrame>
  );
}
