import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import DentistClujPageClient from "@/components/services/DentistClujPageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/dentist-cluj/";
const NAME = "Dentist Cluj";
const DESCRIPTION =
  "Cauți un dentist în Cluj? La Alverna Dental Studio beneficiezi de medici specialiști, tehnologie modernă, planuri personalizate și tratamente stomatologice la standarde înalte.";

const faqItems = [
  {
    q: "Cum funcționează întregul proces?",
    a: "Totul începe cu o programare la medicul dentist din cadrul clinicii. După consultație, se stabilește planul de tratament, care poate include investigații suplimentare și una sau mai multe ședințe, în funcție de complexitate.",
  },
  {
    q: "Cât de dureroase sunt procedurile?",
    a: "Majoritatea procedurilor se realizează cu anestezie locală și tehnici moderne, astfel încât disconfortul să fie minim. Medicul îți explică din timp fiecare etapă și opțiunile de confort.",
  },
  {
    q: "De ce să aleg un medic dentist Cluj la Alverna Dental Studio?",
    a: "Pentru combinația dintre expertiză medicală, tehnologie avansată și comunicare empatică. Echipa noastră oferă tratamente moderne, planuri personalizate și suport constant pe parcursul intervențiilor.",
  },
  {
    q: "Pot beneficia și pacienții veniți din străinătate?",
    a: "Da. Echipa noastră comunică eficient în limba engleză și oferă suport complet pentru pacienții care accesează servicii de stomatologie și turism dentar în Cluj.",
  },
];

export const metadata: Metadata = {
  title: "Dentist Cluj | Stomatologie modernă | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function DentistClujPage() {
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
      <DentistClujPageClient />
    </PrototypeFrame>
  );
}
