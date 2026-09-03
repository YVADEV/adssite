import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import alvernaLogo from "@/assets/alverna-logo.png";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";
import { ContactFormCard } from "@/components/services/ServicePageParts";
import { IMPLANT_CASE_STRIP } from "@/config/case-strips";
import { JsonLd, breadcrumbLd, physicianLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import { CLINIC } from "@/lib/contact";

const PATH = "/echipa/radu-nichimis/";
const NAME = "Ast.Univ Dr. Radu Nichimiș";
const DESCRIPTION =
  "Profil profesional Ast.Univ Dr. Radu Nichimiș, specialist în chirurgie maxilo-facială, cu accent pe planificare digitală, funcționalitate și armonie estetică.";

export const metadata: Metadata = {
  title: "Ast.Univ Radu Nichimiș | Chirurgie maxilo-facială | Alverna Dental Studio",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Ast.Univ Dr. Radu Nichimiș — Chirurgie maxilo-facială",
    description: DESCRIPTION,
    url: PATH,
    type: "profile",
  },
};

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
          jobTitle: "Medic specialist chirurgie maxilo-facială",
          description: DESCRIPTION,
          url,
          medicalSpecialty: "OralAndMaxillofacialSurgery",
        })}
      />
      <main className="min-h-screen bg-black pb-24 pt-16 text-white md:pt-20 lg:pt-[130px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[21px] font-medium uppercase tracking-[0.14em] text-white">Profil medical</p>
          <h1 className="mt-5 max-w-[1150px] text-[36px] font-extrabold leading-[0.95] tracking-[-0.04em] text-white md:text-[58px] lg:text-[84px]">
            Dr. Radu Nichimiș - Chirurgie maxilo-facială & excelență academică în Cluj-Napoca
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

        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="rounded-[24px] border border-white/15 bg-white/[0.03] p-5 md:p-7">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[28px] font-semibold tracking-[-0.03em] text-white md:text-[36px]">Acreditări</h2>
              <a
                href="/acreditari-radu-nichimis.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ads-btn-outline-lit inline-flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-5 text-[21px] font-semibold text-white transition duration-300"
              >
                Deschide PDF
              </a>
            </div>
            <p className="mb-4 text-[18px] leading-[1.5] text-white/70 md:hidden">
              Pe telefon, PDF-ul se deschide în viewer-ul nativ pentru o navigare mai ușoară.
            </p>
            <div className="hidden overflow-hidden rounded-[16px] border border-white/10 bg-black md:block">
              <iframe
                src="/acreditari-radu-nichimis.pdf#view=FitH"
                title="Acreditări Ast.Univ Radu Nichimiș"
                className="h-[72vh] min-h-[560px] w-full"
              />
            </div>
            <a
              href="/acreditari-radu-nichimis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ads-btn-lit flex min-h-[52px] w-full items-center justify-center rounded-[16px] text-[21px] font-semibold md:hidden"
            >
              Vizualizează acreditările (PDF)
            </a>
          </div>
        </section>

        <section className="mt-14 bg-black pb-[90px] pt-[10px] lg:pb-[120px]">
          <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
              <h2 className="text-[28px] font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-[36px] md:text-[58px] lg:text-[72px]">
                Cazuri <span className="text-white">mai în detaliu</span>
                <br />
                <span className="text-white">înainte și după</span>
              </h2>
              <a href="/cazuri/" className="ads-btn-lit mt-5 rounded-full px-6 py-2 text-[21px] font-semibold">
                Vezi toate
              </a>
            </div>
            <CazuriVideoStrip items={IMPLANT_CASE_STRIP} />
          </div>
        </section>

        <section className="bg-black pb-[110px]">
          <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
            <h3 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[46px] lg:text-[62px]">Recenzii</h3>
            <p className="mt-3 text-[21px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
          </div>
          <div className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-[8px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[6px] lg:px-12">
            <article className="ads-surface-light-muted flex min-h-[300px] flex-col rounded-[18px] p-[26px]">
              <div className="flex items-end gap-2">
                <strong className="text-[36px] font-semibold leading-none tracking-[-0.03em] md:text-[52px]">4,8</strong>
                <span className="mb-2 text-base opacity-60">/5</span>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
              </div>
              <div className="mx-auto mt-[40px] w-full max-w-[270px] space-y-2 text-[21px] leading-[1.65]">
                <p>
                  Adresă:{" "}
                  <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noreferrer" className="underline decoration-[#9fc48f]/60 underline-offset-4">
                    {CLINIC.addressLine}
                  </a>
                </p>
                <p>
                  Număr de telefon:{" "}
                  <a href={`tel:${CLINIC.phoneTel}`} className="underline decoration-[#9fc48f]/60 underline-offset-4">
                    {CLINIC.phoneDisplay}
                  </a>
                </p>
                <p>Program: Deschis · Închide la 21</p>
              </div>
              <img src={alvernaLogo.src} alt="Alverna logo" className="mx-auto mt-auto h-auto w-[210px] object-contain pt-4" />
            </article>

            {[
              {
                name: "Andreea Nisipeanu",
                meta: "3 recenzii",
                time: "acum o lună",
                text: "Recomand cu mare încredere Clinica Alverna Dental! De la prima vizită am fost întâmpinată cu multă căldură și profesionalism.",
              },
              {
                name: "Carmen Ilea",
                meta: "4 recenzii",
                time: "acum 2 luni",
                text: "Am fost impresionată de profesionalism, atenție la detalii și de tehnologia modernă din clinică. Voi reveni cu plăcere.",
              },
              {
                name: "Denisa Tănase",
                meta: "2 recenzii · O fotografie",
                time: "acum 3 luni",
                text: "Experiență foarte bună, comunicare clară și echipă prietenoasă. Fiecare pas a fost explicat pe înțelesul meu.",
              },
            ].map((r) => (
              <article key={r.name} className="ads-surface-light-muted flex min-h-[300px] flex-col rounded-[18px] p-[22px]">
                  <div>
                    <p className="text-[28px] font-semibold leading-[1.05]">{r.name}</p>
                    <p className="mt-1 text-[21px]">{r.meta}</p>
                    <p className="mt-1 text-[21px]">{r.time}</p>
                  </div>
                <p className="mt-6 text-[21px] leading-[1.65]">{r.text}</p>
                <p className="mt-auto pt-4 text-[21px] leading-none tracking-[0.08em]">★★★★★</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
          <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
            <ContactFormCard source="radu-nichimis" />

            <div className="pt-0 text-white lg:pt-8">
              <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">Primul pas spre un zâmbet sănătos începe aici.</h3>
              <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">
                Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune.
              </p>
              <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
                <p className="text-[21px] font-semibold text-white">4.8 ★★★★★</p>
                <p className="mt-1 text-[21px] text-white">Peste 9000 de pacienți mulțumiți</p>
              </div>
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="mt-7 inline-block text-[21px] text-white underline decoration-[#9fc48f]/50 underline-offset-4 hover:decoration-white"
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
