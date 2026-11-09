import type { Metadata } from "next";
import Image from "next/image";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { AccreditationGallery } from "@/components/echipa/AccreditationGallery";
import { DoctorReviews } from "@/components/reviews/GoogleReviewsMobile";
import { BookingSection } from "@/components/booking/BookingSection";
import { CORINA_ACCREDITATIONS } from "@/config/accreditations";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import portrait from "@/assets/echipa/corina-holici.png";
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

        <BookingSection source="corina-holici" />
      </main>
    </PrototypeFrame>
  );
}
