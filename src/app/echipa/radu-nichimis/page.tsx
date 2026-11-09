import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { AccreditationGallery } from "@/components/echipa/AccreditationGallery";
import { DoctorReviews } from "@/components/reviews/GoogleReviewsMobile";
import { BookingSection } from "@/components/booking/BookingSection";
import { RADU_ACCREDITATIONS } from "@/config/accreditations";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/echipa/radu-nichimis/";
const NAME = "Dr. Radu Nichimiș";
const DESCRIPTION =
  "Profil profesional Dr. Radu Nichimiș, medic specialist Chirurgie Orală și Maxilo-Facială, cu accent pe planificare digitală, funcționalitate și armonie estetică.";

export const metadata: Metadata = pageMetadata({
  title: "Dr. Radu Nichimiș | Chirurgie Orală și Maxilo-Facială | Alverna Dental Studio",
  description: DESCRIPTION,
  path: PATH,
  type: "profile",
});

export default function RaduNichimisPage() {
  const url = `${SITE_URL}${PATH}`;
  return (
    <PrototypeFrame darkHeader>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Echipa", url: `${SITE_URL}/echipa/` },
          { name: NAME, url },
        ])}
      />
      <JsonLd
        data={physicianLd({
          name: NAME,
          jobTitle: "Medic specialist Chirurgie Orală și Maxilo-Facială",
          description: DESCRIPTION,
          url,
          medicalSpecialty: "OralAndMaxillofacialSurgery",
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[21px] font-medium uppercase tracking-[0.14em] text-white">Profil medical</p>
          <h1 className="mt-5 max-w-[18ch] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[48px] md:leading-[1.08] md:tracking-[-0.03em] lg:text-[60px]">
            Dr. Radu Nichimiș — Medic specialist Chirurgie Orală și Maxilo-Facială
          </h1>
          <div className="mt-8 max-w-[1120px] space-y-5 text-[21px] leading-[1.75] text-white">
            <p>
              Dr. Radu Nichimiș, medic specialist în chirurgie maxilo-facială, recunoscut pentru rigoarea profesională
              și abordarea modernă a tratamentelor chirurgicale.
            </p>
            <p>
              Expertiza sa acoperă chirurgia dento-alveolară avansată, de la proceduri de implantologie orală, realizate
              prin planificare digitală, tratamentele afecțiunilor oro-maxilo-faciale și managementul traumatismelor
              faciale, fiecare caz fiind analizat individual și tratat cu rigoare medicală și viziune estetică.
            </p>
            <p>
              Fiecare procedură este concepută nu doar pentru a reda funcționalitatea, ci și pentru a restabili armonia
              și echilibrul natural al structurilor faciale, într-un cadru sigur, modern și orientat spre excelență.
            </p>
            <p>
              Punând pacientul în centrul actului medical, Dr. Nichimiș oferă soluții personalizate, bazate pe evaluări
              detaliate și tehnologii moderne, într-un cadru profesional și sigur.
            </p>
          </div>
        </section>

        <AccreditationGallery images={RADU_ACCREDITATIONS} name={NAME} pdfHref="/acreditari-radu-nichimis.pdf" />
        <DoctorReviews />

        <BookingSection source="radu-nichimis" />
      </main>
    </PrototypeFrame>
  );
}
