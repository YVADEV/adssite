import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { CaseTeamBanner } from "@/components/cazuri/CaseTeamBanner";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";
import { JsonLd, breadcrumbLd } from "@/components/seo/JsonLd";
import { CASE_STUDIES, getCaseStudy } from "@/config/cases";
import { SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caz = getCaseStudy(slug);
  if (!caz) return {};

  const titleLine = caz.title.replace("\n", " ");

  return {
    title: `${caz.caseNumber} · ${titleLine} | Alverna Dental Studio`,
    description: caz.seoDescription,
    alternates: { canonical: caz.path },
    openGraph: {
      title: `${caz.caseNumber} · ${titleLine}`,
      description: caz.seoDescription,
      url: caz.path,
      type: "article",
      images: [{ url: caz.heroImage.src }],
    },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const caz = getCaseStudy(slug);
  if (!caz) notFound();

  const url = `${SITE_URL}${caz.path}`;
  const titleLines = caz.title.split("\n");

  return (
    <PrototypeFrame darkHeader>
      <JsonLd
        data={breadcrumbLd([
          { name: "Acasă", url: `${SITE_URL}/` },
          { name: "Cazuri", url: `${SITE_URL}/cazuri/` },
          { name: caz.caseNumber, url },
        ])}
      />
      <main className="bg-black pb-20 pt-0 text-white">
        {/* Hero — full-bleed patient photo */}
        <section className="relative h-[min(calc(100vh-40px),640px)] w-full overflow-hidden bg-black md:min-h-[700px] md:h-[calc(100vh-40px)]">
          <Image
            src={caz.heroImage}
            alt={titleLines.join(" ")}
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-contain"
            style={{
              imageRendering: "auto",
              objectPosition: caz.heroObjectPosition ?? "center",
              transform: caz.heroImageScale ? `scale(${caz.heroImageScale})` : undefined,
            }}
          />

          <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1680px] flex-col px-6 md:px-10 lg:px-12">
            <Link
              href="/cazuri/"
              className="absolute left-4 top-6 inline-flex w-fit items-center gap-2 text-[18px] font-medium text-white transition hover:text-white md:left-10 md:top-8 md:text-[21px] lg:left-12 lg:top-10"
            >
              ← Înapoi la cazuri
            </Link>
            {caz.patientName && (
              <p className="absolute bottom-20 left-4 max-w-[calc(100%-2rem)] text-[36px] font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-[56px] md:bottom-36 md:left-10 md:text-[80px] lg:bottom-44 lg:left-12 lg:text-[100px]">
                {caz.patientName}
              </p>
            )}
          </div>
        </section>

        {/* Story images — before → proteză → after */}
        {caz.storyImages.length > 0 && (
          <section className="mx-auto w-full max-w-[1680px] px-4 pt-6 md:px-8 md:pt-8 lg:px-12">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-10">
              {caz.storyImages.map((item, i) => (
                <figure
                  key={`story-${item.label}-${i}`}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-black"
                >
                  <img
                    src={item.image.src}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: item.objectPosition ?? "center center" }}
                  />
                  <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[21px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Quick facts */}
        <section className="mx-auto mt-14 w-full max-w-[1680px] border-y border-white/10 px-4 py-8 md:px-8 lg:mt-[100px] lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {caz.quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="text-[21px] uppercase tracking-[0.12em] text-white">{fact.label}</p>
                <p className="mt-2 text-[21px] font-semibold leading-[1.35] text-white">{fact.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:mt-[120px] lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-20">
            <div>
              <p className="text-[21px] font-semibold uppercase tracking-[0.12em] text-white">Documentare clinică</p>
              <h2 className="mt-3 max-w-[900px] text-[32px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-[48px]">
                Povestea cazului
              </h2>
              <div className="mt-8 max-w-[820px] space-y-6 text-[21px] leading-[1.8] text-white">
                {caz.paragraphs.map((p, i) => (
                  <p key={`paragraph-${i}`}>{p}</p>
                ))}
              </div>
            </div>
            <aside className="lg:pt-16">
              <blockquote className="rounded-[20px] border border-white/12 bg-white/[0.03] p-6 md:p-8">
                <p className="text-[21px] font-semibold uppercase tracking-[0.14em] text-white">Rezultat final</p>
                <p className="mt-4 text-[21px] font-medium leading-[1.65] tracking-[-0.02em] text-white md:text-[21px]">
                  &ldquo;{caz.closingQuote}&rdquo;
                </p>
              </blockquote>
            </aside>
          </div>
        </section>

        <CaseTeamBanner />

        {/* Treatment steps */}
        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:mt-[120px] lg:px-12">
          <p className="text-[21px] font-semibold uppercase tracking-[0.12em] text-white">Protocol tratament</p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-[48px]">
            Pași parcurși
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {caz.treatmentSteps.map((step, i) => (
              <article
                key={step.label}
                className="rounded-[18px] border border-white/12 bg-white/[0.03] p-5 transition duration-300 hover:border-white/25"
              >
                <span className="text-[21px] font-semibold uppercase tracking-[0.14em] text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.02em] text-white">{step.label}</h3>
                <p className="mt-2 text-[21px] leading-[1.65] text-white">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Before & After */}
        <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:mt-[120px] lg:px-12">
          <p className="text-[21px] font-semibold uppercase tracking-[0.12em] text-white">Rezultat documentat</p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-[48px]">
            Before & After
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:gap-10">
            {caz.beforeAfterImages.map((item, i) => (
              <figure
                key={`before-after-${item.label}-${i}`}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-black"
              >
                <img
                  src={item.image.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: item.objectPosition ?? "center center" }}
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[21px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Video strip */}
        <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:mt-24 md:px-8 lg:mt-[120px] lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
            <h2 className="text-[28px] font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-[36px] md:text-[58px] lg:text-[72px]">
              Cazuri <span className="text-white">mai în detaliu</span>
              <br />
              <span className="text-white">before and after</span>
            </h2>
            <Link href="/cazuri/" className="ads-btn-lit mt-5 rounded-full px-6 py-2 text-[21px] font-semibold">
              Vezi toate
            </Link>
          </div>
          <CazuriVideoStrip />
        </section>
      </main>
    </PrototypeFrame>
  );
}
