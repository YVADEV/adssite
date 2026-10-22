import type { Metadata } from "next";
import Image from "next/image";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { AccreditationGallery } from "@/components/echipa/AccreditationGallery";
import { DoctorReviews } from "@/components/reviews/GoogleReviewsMobile";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { CORINA_ACCREDITATIONS } from "@/config/accreditations";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/echipa/corina-holici.png";
import { CLINIC } from "@/lib/contact";
import { pageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/echipa/corina-holici/";
const PDF = "/acreditari-corina-holici.pdf";
const NAME = "Dr. Corina Holici";
const ROLE = "Medic stomatolog";
const DESCRIPTION =
  "Profil Dr. Corina Holici, medic în echipa Alverna Dental Studio. Diplome și certificate de participare la cursuri și congrese de ortodonție.";

export const metadata: Metadata = pageMetadata({
  title: `${NAME} | Alverna Dental Studio`,
  description: DESCRIPTION,
  path: PATH,
  type: "profile",
  images: [portrait.src],
});

export default function CorinaHoliciPage() {
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
          jobTitle: ROLE,
          description: DESCRIPTION,
          url,
          image: portrait.src,
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto grid w-full max-w-[1680px] items-start gap-10 px-4 md:px-8 lg:grid-cols-[minmax(0,280px)_1fr] lg:px-12">
          <Image
            src={portrait}
            alt="Dr. Corina Holici, medic stomatolog Alverna Dental Studio"
            className="aspect-[3/4] w-full -scale-x-100 rounded-[18px] object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 280px"
            priority
          />
          <div>
            <p className="text-[21px] font-medium uppercase tracking-[0.14em] text-white">Profil medical</p>
            <h1 className="mt-5 max-w-[18ch] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[48px] md:leading-[1.08] md:tracking-[-0.03em] lg:text-[60px]">
              Dr. Corina Holici
            </h1>
            <div className="mt-8 max-w-[1120px] space-y-5 text-[21px] leading-[1.75] text-white">
              <p>Dr. Corina Holici face parte din echipa medicală Alverna Dental Studio.</p>
              <p>
                Mai jos sunt diplomele și certificatele de participare la cursuri și congrese, inclusiv Spark, Angel
                Aligner și congrese de ortodonție.
              </p>
            </div>
          </div>
        </section>

        <AccreditationGallery images={CORINA_ACCREDITATIONS} name={NAME} pdfHref={PDF} />
        <DoctorReviews />

        <section id="contact" className="relative mt-14 w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="corina-holici" />
            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">
                Primul pas spre un zâmbet sănătos începe aici.
              </h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.
              </p>
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
