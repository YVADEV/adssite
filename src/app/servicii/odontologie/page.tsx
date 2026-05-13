import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import OdontologiePageClient from "@/components/services/OdontologiePageClient";
import { JsonLd, breadcrumbLd, faqLd, serviceLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";

const PATH = "/servicii/odontologie/";
const NAME = "Odontologie";
const DESCRIPTION =
  "Servicii de odontologie în Cluj la Alverna Dental Studio: tratamente pentru carii și leziuni dentare, restaurări estetice și funcționale, cu tehnologii moderne și materiale biocompatibile.";

const faqItems = [
  {
    q: "Cât durează o procedură de odontologie?",
    a: "Durata depinde de complexitate: o obturație simplă poate fi realizată într-o singură ședință, în timp ce reconstrucțiile complexe pot necesita mai multe vizite.",
  },
  {
    q: "Sunt procedurile de odontologie dureroase?",
    a: "Nu. Tratamentele sunt realizate cu anestezie locală modernă, iar disconfortul este minim. Pentru pacienții anxioși putem discuta opțiuni suplimentare de confort.",
  },
  {
    q: "Rezultatele sunt permanente?",
    a: "Rezultatele sunt durabile, dar depind de igiena orală și de controalele periodice. Materialele restaurative trebuie monitorizate în timp, la fel ca dinții naturali.",
  },
  {
    q: "Este necesară o perioadă de recuperare?",
    a: "Majoritatea tratamentelor odontologice nu necesită recuperare propriu-zisă, iar pacientul își poate relua rapid activitățile obișnuite.",
  },
  {
    q: "Cât costă un tratament de odontologie la Alverna Dental Studio?",
    a: "Costul variază în funcție de tipul leziunii, materialele utilizate și complexitatea cazului. Devizul se stabilește după consultație, iar opțiunile de plată în rate sunt disponibile.",
  },
  {
    q: "Ce materiale utilizați pentru restaurări?",
    a: "Folosim compozite fotopolimerizabile, materiale bioactive, cimenturi ionomere de sticlă și rășini hibride, pentru rezultate funcționale și estetice de durată.",
  },
];

export const metadata: Metadata = {
  title: "Odontologie Cluj | Tratamente moderne | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
};

export default function OdontologiePage() {
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
      <OdontologiePageClient />
    </PrototypeFrame>
  );
}
