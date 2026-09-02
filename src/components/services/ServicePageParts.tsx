"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { CLINIC } from "@/lib/contact";
import alvernaLogo from "@/assets/alverna-logo.png";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";

export const reveal = {
  initial: { opacity: 0, y: 28, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: "easeOut" as const },
} as const;

function ServiceHeroVideo({
  videoSrc,
  videoObjectFit,
  image,
  imageAlt,
  withSound,
  variant = "fullscreen",
}: {
  videoSrc: string;
  videoObjectFit: "cover" | "contain";
  image?: string;
  imageAlt?: string;
  withSound?: boolean;
  variant?: "fullscreen" | "panel";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isPanel = variant === "panel";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    setIsMuted(true);
    const play = () => void video.play().catch(() => undefined);
    play();
    video.addEventListener("loadeddata", play);
    video.addEventListener("canplay", play);
    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("canplay", play);
    };
  }, [videoSrc]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    void video.play();
  };

  return (
    <div className={isPanel ? "relative h-full w-full overflow-hidden rounded-[20px] bg-[#0a0a0a]" : "contents"}>
      <video
        ref={videoRef}
        autoPlay
        muted={withSound ? isMuted : true}
        loop
        playsInline
        preload="metadata"
        poster={image}
        aria-label={imageAlt ?? "Alverna Dental Studio"}
        className={
          isPanel
            ? "absolute inset-0 h-full w-full rounded-[20px] object-cover object-center saturate-[0.98] brightness-[0.92]"
            : `absolute inset-0 h-full w-full object-center saturate-[0.98] brightness-[0.92] ${
                videoObjectFit === "contain" ? "object-contain" : "object-cover"
              }`
        }
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      {withSound ? (
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isMuted ? "Activează sunetul" : "Dezactivează sunetul"}
          aria-pressed={!isMuted}
          className={
            isPanel
              ? "absolute bottom-3 right-0 z-20 inline-flex h-[40px] items-center rounded-full border border-white/35 bg-black/55 px-4 text-[21px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-black/70 md:bottom-4"
              : "absolute right-4 top-20 z-20 inline-flex h-[44px] items-center rounded-full border border-white/35 bg-black/55 px-4 text-[21px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-black/70 md:right-8 md:top-24 lg:right-12 lg:top-28"
          }
        >
          {isMuted ? "Activează sunetul" : "Sunet activ"}
        </button>
      ) : null}
    </div>
  );
}

function ServiceHeroContent({
  chip,
  kicker,
  title,
  intro,
  className = "",
}: Pick<ServiceHeroProps, "chip" | "kicker" | "title" | "intro"> & { className?: string }) {
  return (
    <>
      <div className="absolute left-4 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[21px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur md:left-8 md:top-7 lg:left-12 lg:top-9">
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#9fc48f]" />
        {chip}
      </div>
      <div className={`relative z-10 flex h-full w-full flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-12 lg:pb-20 lg:pt-32 ${className}`}>
        <motion.div {...reveal} className="max-w-[820px]">
          <p className="text-[21px] font-medium uppercase tracking-[0.18em] text-white">{kicker}</p>
          <h1 className="mt-5 max-w-[980px] text-[36px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[76px] lg:text-[96px]">
            {title}
          </h1>
          <p className="mt-6 max-w-[720px] ads-readable text-white">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#contact" className="ads-btn-lit inline-flex h-[46px] items-center rounded-full px-6 text-[21px] font-semibold transition duration-300 hover:scale-[1.02]">
              Solicită o evaluare
            </a>
            <a href="/tarife/" className="inline-flex h-[46px] items-center rounded-full border border-white/35 bg-white/5 px-6 text-[21px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10">
              Vezi tarife
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

// -----------------------------------------------------------------------------
// HERO
// -----------------------------------------------------------------------------
export type ServiceHeroProps = {
  image?: string;
  videoSrc?: string;
  videoObjectFit?: "cover" | "contain";
  videoWithSound?: boolean;
  imageAlt?: string;
  kicker: string;
  title: ReactNode;
  intro: ReactNode;
  chip: string;
};

export function ServiceHero({
  image,
  videoSrc,
  videoObjectFit = "cover",
  videoWithSound = false,
  imageAlt,
  kicker,
  title,
  intro,
  chip,
}: ServiceHeroProps) {
  const splitVideoLayout = Boolean(videoSrc && videoObjectFit === "contain");

  if (splitVideoLayout && videoSrc) {
    return (
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[min(92vh,680px)] w-full bg-black md:h-[92vh] md:min-h-[720px] md:max-h-[1100px]">
          <div className="mx-auto grid h-full w-full max-w-[1680px] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,42%)] lg:gap-8 xl:gap-12">
            <div className="relative h-full min-h-0">
              <ServiceHeroContent chip={chip} kicker={kicker} title={title} intro={intro} />
            </div>
            <div className="relative flex h-full min-h-[320px] items-center justify-center px-4 pb-8 pt-24 lg:min-h-0 lg:justify-end lg:px-0 lg:pb-16 lg:pt-28">
              <motion.div
                {...reveal}
                className="relative aspect-[9/16] h-[min(62vh,760px)] w-auto max-w-[360px] rounded-[20px] border border-white/45 ads-btn-glow-lg lg:h-[min(78vh,900px)] lg:max-w-[420px] lg:-translate-x-[157px]"
              >
                <div className="h-full w-full overflow-hidden rounded-[20px]">
                  <ServiceHeroVideo
                    videoSrc={videoSrc}
                    videoObjectFit={videoObjectFit}
                    image={image}
                    imageAlt={imageAlt}
                    withSound={videoWithSound}
                    variant="panel"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[min(78vh,640px)] w-full bg-black md:h-[78vh] md:min-h-[600px] md:max-h-[900px]">
        {videoSrc ? (
          <ServiceHeroVideo
            videoSrc={videoSrc}
            videoObjectFit={videoObjectFit}
            image={image}
            imageAlt={imageAlt}
            withSound={videoWithSound}
          />
        ) : (
          <Image
            src={image ?? "/services/braces-model.png"}
            alt={imageAlt ?? "Alverna Dental Studio"}
            fill
            priority
            sizes="100vw"
            className="object-cover saturate-[0.98] brightness-[0.92]"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/22 via-transparent to-black/48" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/58 via-black/12 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-black/70 to-transparent" />
        <ServiceHeroContent chip={chip} kicker={kicker} title={title} intro={intro} className="mx-auto max-w-[1680px]" />
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// QUICK FACTS GRID
// -----------------------------------------------------------------------------
export function ServiceQuickFacts({ facts }: { facts: ReadonlyArray<readonly [string, string]> }) {
  return (
    <section data-theme="light" className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
      <motion.div {...reveal} className="grid grid-cols-1 gap-6 border-y border-black/12 py-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {facts.map(([label, value]) => (
          <div key={label}>
            <p className="text-[21px] uppercase tracking-[0.12em] text-white">{label}</p>
            <p className="mt-2 text-[21px] font-semibold leading-[1.35] text-white">{value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// CONTENT SECTIONS
// -----------------------------------------------------------------------------

type BaseSectionProps = {
  heading: string;
  headingLevel?: "h2" | "h3";
  first?: boolean;
};

function SectionHeading({ heading, level = "h3" }: { heading: string; level?: "h2" | "h3" }) {
  if (level === "h2") {
    return (
      <h2 className="text-[32px] font-semibold leading-[1.03] tracking-[-0.03em] text-white md:text-[44px]">
        {heading}
      </h2>
    );
  }
  return (
    <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] text-white md:text-[40px]">
      {heading}
    </h3>
  );
}

function sectionWrapperClass(first?: boolean) {
  return first ? "" : "mt-14";
}

export function ServiceParagraphSection({
  heading,
  body,
  headingLevel = "h3",
  first,
}: BaseSectionProps & { body: ReactNode }) {
  return (
    <motion.article
      {...reveal}
      className={`${sectionWrapperClass(first)} grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14`}
    >
      <SectionHeading heading={heading} level={headingLevel} />
      <p className="mt-5 ads-readable text-white lg:mt-0">{body}</p>
    </motion.article>
  );
}

export function ServiceBulletsSection({
  heading,
  items,
  headingLevel = "h3",
  first,
}: BaseSectionProps & { items: ReadonlyArray<string> }) {
  return (
    <motion.article
      {...reveal}
      className={`${sectionWrapperClass(first)} grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14`}
    >
      <SectionHeading heading={heading} level={headingLevel} />
      <ul className="mt-5 space-y-3 text-[21px] leading-[1.75] text-white lg:mt-0">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function ServiceCardsSection({
  heading,
  cards,
  headingLevel = "h3",
  first,
}: BaseSectionProps & { cards: ReadonlyArray<{ title: string; text: string }> }) {
  return (
    <motion.article
      {...reveal}
      className={`${sectionWrapperClass(first)} grid border-t border-black/12 pt-10 lg:grid-cols-[minmax(260px,0.95fr)_minmax(0,1.55fr)] lg:gap-14`}
    >
      <SectionHeading heading={heading} level={headingLevel} />
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-0">
        {cards.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className="border-t border-black/12 pt-4"
          >
            <h4 className="text-[21px] font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-[21px] leading-[1.65] text-white">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.article>
  );
}

export function ServiceStepsSection({
  heading,
  steps,
  headingLevel = "h3",
  first,
}: BaseSectionProps & { steps: ReadonlyArray<{ step: string; title: string; text: string }> }) {
  return (
    <motion.article {...reveal} className={`${sectionWrapperClass(first)} border-t border-black/12 pt-10`}>
      <SectionHeading heading={heading} level={headingLevel} />
      <div className="mt-7 divide-y divide-black/10">
        {steps.map((item, idx) => (
          <motion.article
            key={item.step}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="grid gap-3 py-5 md:grid-cols-[90px_1fr_1.4fr] md:items-start"
          >
            <p className="text-[30px] font-semibold leading-none tracking-[-0.03em] text-white">{item.step}</p>
            <p className="text-[21px] font-semibold leading-[1.2] text-white">{item.title}</p>
            <p className="text-[21px] leading-[1.65] text-white">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.article>
  );
}

export function ServiceTextBlock({
  heading,
  body,
  headingLevel = "h3",
  first,
}: BaseSectionProps & { body: ReactNode }) {
  return (
    <motion.article {...reveal} className={`${sectionWrapperClass(first)} border-t border-black/12 pt-10`}>
      <SectionHeading heading={heading} level={headingLevel} />
      <div className="mt-5 max-w-[1120px] text-[21px] leading-[1.75] text-white">{body}</div>
    </motion.article>
  );
}

// -----------------------------------------------------------------------------
// FAQ
// -----------------------------------------------------------------------------
export function ServiceFAQ({
  heading,
  items,
}: {
  heading: string;
  items: ReadonlyArray<{ q: string; a: string }>;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <motion.article {...reveal} className="mt-14 border-t border-black/12 pt-10">
      <SectionHeading heading={heading} level="h3" />
      <div className="mt-7 divide-y divide-black/10">
        {items.map((item, index) => {
          const isOpen = openFaq === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <article key={item.q} className="py-5">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenFaq((prev) => (prev === index ? null : index))}
                className="ads-btn-no-glow flex w-full items-start justify-between gap-4 text-left"
              >
                <h4 className="text-[21px] font-semibold leading-[1.35] text-white">{item.q}</h4>
                <span aria-hidden className="pt-1 text-[21px] text-white">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                  isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-3 max-w-[1100px] text-[21px] leading-[1.7] text-white">{item.a}</p>
              </div>
            </article>
          );
        })}
      </div>
    </motion.article>
  );
}

// -----------------------------------------------------------------------------
// CASES + TESTIMONIALS + CONTACT + FINAL CTA (shared bottom)
// -----------------------------------------------------------------------------
const sharedReviews = [
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
    text: "Am fost impresionata de profesionalism, atentie la detalii si de tehnologia moderna din clinica. Voi reveni cu placere.",
  },
  {
    name: "Denisa Tanase",
    meta: "2 recenzii · O fotografie",
    time: "acum 3 luni",
    text: "Experienta foarte buna, comunicare clara si echipa prietenoasa. Fiecare pas a fost explicat pe intelesul meu.",
  },
] as const;

export function ServiceCasesGrid() {
  return (
    <section data-theme="light" className="mt-14 bg-[#ececec] pb-[90px] pt-[10px] lg:pb-[120px]">
      <div className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
          <h2 className="text-[28px] font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-[36px] md:text-[58px] lg:text-[72px]">
            Cazuri <span className="text-white">mai în detaliu</span>
            <br />
            <span className="text-white">before and after</span>
          </h2>
          <a href="/cazuri/" className="rounded-full bg-black px-6 py-2 text-[21px] font-semibold text-white sm:mt-5">
            Vezi toate
          </a>
        </div>
        <CazuriVideoStrip />
      </div>
    </section>
  );
}

export function ServiceTestimonials() {
  return (
    <section data-theme="light" className="bg-[#ececec] pb-[110px]">
      <div className="mx-auto mt-2 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <h3 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[46px] lg:text-[62px]">
          Recenzii
        </h3>
        <p className="mt-3 text-[21px] font-semibold text-white">Scor mediu: 4.8 ⭐</p>
      </div>
      <div className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-[8px] px-4 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[6px] lg:px-12">
        <article className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[26px]">
          <div className="flex items-end gap-2">
            <strong className="text-[36px] font-semibold leading-none tracking-[-0.03em] md:text-[52px]">4,8</strong>
            <span className="mb-2 text-base opacity-60">/5</span>
            <img src="https://www.google.com/favicon.ico" alt="Google" className="mb-2 h-6 w-6" />
          </div>
          <div className="mx-auto mt-[40px] w-full max-w-[270px] space-y-2 text-[21px] leading-[1.45] text-white">
            <p>Adresă: {CLINIC.addressLine}</p>
            <p>Număr de telefon: {CLINIC.phoneDisplay}</p>
            <p>Program: {CLINIC.hoursDisplay}</p>
          </div>
          <Image src={alvernaLogo} alt="Alverna Dental Studio" width={210} height={70} className="mx-auto mt-auto h-auto w-[210px] object-contain pt-4" />
        </article>

        {sharedReviews.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            className="flex min-h-[300px] flex-col rounded-[18px] bg-[#f5f5f5] p-[22px]"
          >
            <div>
              <p className="text-[28px] font-semibold leading-[1.05] text-white">{r.name}</p>
              <p className="mt-1 text-[21px] text-white">{r.meta}</p>
              <p className="mt-1 text-[21px] text-white">{r.time}</p>
            </div>
            <p className="mt-6 text-[21px] leading-[1.55] text-white">{r.text}</p>
            <p aria-label="5 din 5 stele" className="mt-auto pt-4 text-[21px] leading-none tracking-[0.08em] text-white">
              ★★★★★
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function ServiceContactForm({ headline, body }: { headline: string; body: string }) {
  return (
    <section id="contact" className="relative w-full overflow-hidden bg-[#0A0A0A] py-20 md:py-[120px]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#4E7044] opacity-45 blur-[120px] max-md:scale-75 max-md:opacity-30 [will-change:transform]"
        animate={{ y: [-20, 20, -20], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-12">
        <ContactFormCard source="service-page" />

        <div className="pt-0 text-white lg:pt-8">
          <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[42px]">{headline}</h3>
          <p className="mt-5 max-w-[680px] text-[21px] leading-[1.55] text-white">{body}</p>
          <div className="mt-8 inline-block rounded-[16px] border border-white/20 bg-white/5 px-5 py-4">
            <p className="text-[21px] font-semibold text-white">4.8 ★★★★★</p>
            <p className="mt-1 text-[21px] text-white">Peste 9000 de pacienți mulțumiți</p>
          </div>
          <a
            href={`tel:${CLINIC.phoneTel}`}
            className="mt-7 inline-block text-[21px] text-white underline decoration-[#9fc48f]/50 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Preferi telefonic? Sună acum
          </a>
        </div>
      </div>
    </section>
  );
}

type ContactStatus = "idle" | "loading" | "ok" | "error";

export function ContactFormCard({ source }: { source: string }) {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const payload = {
      nume: String(formData.get("nume") ?? "").trim(),
      telefon: String(formData.get("telefon") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      serviciu: String(formData.get("serviciu") ?? "").trim(),
      mesaj: String(formData.get("mesaj") ?? "").trim(),
      source,
    };
    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await resp.json()) as { ok: boolean; error?: string };
      if (!resp.ok || !json.ok) {
        throw new Error(json.error ?? "Nu am putut trimite mesajul. Te rugăm să încerci din nou.");
      }
      setStatus("ok");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Eroare necunoscută");
    }
  }

  return (
    <div
      className="ads-card-lit rounded-[24px] p-8 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
    >
      <p className="text-[21px] opacity-70">{CLINIC.instagramHandle}</p>
      <h3 className="mt-2 text-[32px] font-semibold leading-[0.95] tracking-[-0.04em] md:text-[44px]">Solicită o programare</h3>
      <p className="mt-3 text-[21px] leading-[1.45] opacity-80">
        Lasă-ne datele tale și te contactăm în maxim 24h pentru confirmare.
      </p>
      {status === "ok" ? (
        <div role="status" className="ads-form-success-box mt-7 rounded-[18px] border border-[#4E7044]/30 bg-[#EDF4E9] p-6">
          <p className="text-[21px] font-semibold">Mulțumim! Mesajul a fost trimis.</p>
          <p className="mt-2 text-[21px] leading-[1.5]">
            Te contactăm în maxim 24h pentru confirmarea programării.
          </p>
        </div>
      ) : (
        <form className="mt-7 grid gap-3" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="contact-nume">Nume</label>
          <input
            id="contact-nume"
            name="nume"
            className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45"
            placeholder="Nume"
            required
            autoComplete="name"
          />
          <label className="sr-only" htmlFor="contact-telefon">Telefon</label>
          <input
            id="contact-telefon"
            name="telefon"
            type="tel"
            className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45"
            placeholder="Telefon"
            required
            autoComplete="tel"
          />
          <label className="sr-only" htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45"
            placeholder="Email (opțional)"
            autoComplete="email"
          />
          <label className="sr-only" htmlFor="contact-serviciu">Serviciu</label>
          <input
            id="contact-serviciu"
            name="serviciu"
            className="h-[52px] rounded-[12px] bg-[#F5F5F5] px-4 text-[21px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45"
            placeholder="Serviciu dorit"
          />
          <label className="sr-only" htmlFor="contact-mesaj">Mesaj</label>
          <textarea
            id="contact-mesaj"
            name="mesaj"
            className="min-h-[110px] rounded-[12px] bg-[#F5F5F5] px-4 py-3 text-[21px] outline-none transition focus:ring-2 focus:ring-[#4F7F47]/45"
            placeholder="Mesaj opțional"
          />
          {status === "error" ? (
            <p role="alert" className="rounded-[10px] border border-[#a4392b]/40 bg-[#fdecea] px-4 py-2 text-[21px] text-[#a4392b]">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex h-[54px] w-full items-center justify-center rounded-full bg-black text-[21px] font-semibold text-white transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Se trimite…" : "Solicită programare"}
          </button>
          <p className="mt-2 text-center text-[21px] opacity-75">
            Prin trimitere, accepți{" "}
            <Link href="/politica-de-confidentialitate" className="ads-link-accent underline decoration-[#9fc48f]/60 underline-offset-4">
              Politica de confidențialitate
            </Link>
            .
          </p>
        </form>
      )}
    </div>
  );
}

export function ServiceFinalCTA({
  title,
  body,
  buttonLabel = "Solicită programare",
}: {
  title: string;
  body: string;
  buttonLabel?: string;
}) {
  return (
    <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
      <motion.div {...reveal} className="relative overflow-hidden rounded-[28px] bg-[#0A0A0A] p-8 text-white md:p-10 lg:p-12">
        <div className="pointer-events-none absolute -right-24 -top-20 h-[220px] w-[220px] rounded-full bg-[#4E7044]/30 blur-[90px]" />
        <h3 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.028em] md:text-[40px]">{title}</h3>
        <p className="mt-4 max-w-[980px] text-[21px] leading-[1.7] text-white">{body}</p>
        <a
          href="/#contact"
          className="ads-btn-lit mt-7 inline-flex h-[44px] items-center rounded-full px-6 text-[21px] font-semibold transition duration-300 hover:scale-[1.02]"
        >
          {buttonLabel}
        </a>
        <p className="mt-4 text-[21px] text-white">Te contactăm în maxim 24h pentru confirmare.</p>
      </motion.div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// PAGE SHELL
// -----------------------------------------------------------------------------
export function ServicePageShell({ children }: { children: ReactNode }) {
  return (
    <main data-theme="light" className="bg-[#0A0A0A] pb-24">
      {children}
    </main>
  );
}

export function ServiceContentSection({ children }: { children: ReactNode }) {
  return (
    <section data-theme="light" className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
      {children}
    </section>
  );
}
