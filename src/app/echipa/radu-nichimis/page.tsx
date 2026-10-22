import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { AccreditationGallery } from "@/components/echipa/AccreditationGallery";
import { DoctorReviews } from "@/components/reviews/GoogleReviewsMobile";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { RADU_ACCREDITATIONS } from "@/config/accreditations";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { CLINIC } from "@/lib/contact";

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

        <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="radu-nichimis" />

            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.
              </p>
              <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
                <p className="text-[21px] font-semibold text-white">4,8 / 5</p>
                <p className="mt-1 text-[21px] text-white">Peste 9.000 de pacienți</p>
              </div>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="mt-7 inline-flex min-h-[44px] items-center text-[21px] text-white underline decoration-[#B6B94C]/50 underline-offset-4 hover:decoration-white"
              >
                Preferi telefonic? Sună acum
              </a>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
