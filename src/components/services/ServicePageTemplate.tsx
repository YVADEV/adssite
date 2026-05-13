"use client";

import { motion } from "motion/react";

type ServicePageTemplateProps = {
  title: string;
  shortIntro: string;
  kicker?: string;
  chip?: string;
  image?: string;
  imageAlt?: string;
};

const recommendationBullets = [
  "Pacienților care își doresc un plan clar și etapizat de tratament.",
  "Persoanelor care caută rezultate stabile, cu accent pe funcționalitate și estetică.",
  "Cazurilor care au nevoie de monitorizare atentă și comunicare constantă.",
];

const benefitItems = [
  "Plan personalizat în funcție de obiectivul clinic.",
  "Aparatură modernă și protocoale actuale de tratament.",
  "Explicarea fiecărui pas înainte de intervenție.",
  "Confort crescut și monitorizare pe toată durata tratamentului.",
];

const reveal = {
  initial: { opacity: 0, y: 28, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

export default function ServicePageTemplate({
  title,
  shortIntro,
  kicker = "Servicii Alverna Dental Studio",
  chip = "Echipa Alverna Dental Studio",
  image = "/services/dental-chair.png",
  imageAlt,
}: ServicePageTemplateProps) {
  return (
    <main className="bg-[#0A0A0A] pb-24">
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative h-[78vh] min-h-[600px] max-h-[900px] w-full">
          <img
            src={image}
            alt={imageAlt ?? `${title} - Alverna Dental Studio`}
            className="absolute inset-0 h-full w-full object-cover saturate-[0.98] brightness-[0.92]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/22 via-transparent to-black/48" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/58 via-black/12 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute left-4 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur md:left-8 md:top-7 lg:left-12 lg:top-9">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#9fc48f]" />
            {chip}
          </div>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-12 lg:pb-20 lg:pt-32">
            <motion.div {...reveal} className="max-w-[1180px]">
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#9fc48f]">{kicker}</p>
              <h1 className="mt-5 max-w-[980px] text-[44px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[76px] lg:text-[112px]">
                {title}
              </h1>
              <p className="mt-6 max-w-[820px] text-[16px] leading-[1.75] text-white/80 md:text-[17px]">
                {shortIntro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#contact" className="inline-flex h-[46px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                  Solicită o evaluare
                </a>
                <a href="/tarife/" className="inline-flex h-[46px] items-center rounded-full border border-white/35 bg-white/5 px-6 text-[14px] font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10">
                  Vezi tarife
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px]">Ce presupune tratamentul</h2>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-white/75">
            În cadrul consultației inițiale, evaluăm situația clinică, discutăm obiectivele pacientului și stabilim un plan de tratament clar. Fiecare etapă este explicată pe înțelesul tău, cu accent pe siguranță, confort și rezultate predictibile.
          </p>
          <p className="mt-4 max-w-[980px] text-[16px] leading-[1.7] text-white/75">
            Echipa noastră urmărește evoluția cazului pe tot parcursul intervenției, iar recomandările post-tratament sunt personalizate pentru a menține rezultatele în timp.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px]">Cui i se recomandă</h2>
          <ul className="mt-5 space-y-3 text-[16px] leading-[1.7] text-white/75">
            {recommendationBullets.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[10px] h-[5px] w-[5px] rounded-full bg-[#9fc48f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div {...reveal} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-10 lg:p-12">
          <h2 className="text-[32px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[44px]">Beneficii</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {benefitItems.map((item) => (
              <article key={item} className="rounded-[16px] border border-white/10 bg-white/[0.04] p-5 text-[15px] leading-[1.55] text-white/85">
                {item}
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-8 text-white md:p-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#4E7044]/30 blur-[120px]" />
          <h2 className="relative text-[34px] font-semibold leading-[1.04] tracking-[-0.03em] md:text-[48px]">Programează o consultație</h2>
          <p className="relative mt-4 max-w-[820px] text-[16px] leading-[1.7] text-white/80">
            Îți oferim o evaluare clară, pași concreți și un plan personalizat. Te contactăm rapid pentru confirmare, fără spam și fără presiune comercială.
          </p>
          <a
            href="/#contact"
            className="relative mt-7 inline-flex h-[46px] items-center rounded-full bg-white px-6 text-[14px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]"
          >
            Solicită programare
          </a>
        </motion.div>
      </section>
    </main>
  );
}
