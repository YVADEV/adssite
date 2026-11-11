"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaseImage } from "@/components/cazuri/CaseImage";
import { getCaseHrefForImage } from "@/config/cases";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";
import { ServiceFinalCTA } from "@/components/services/ServicePageParts";
import { CLINIC } from "@/lib/contact";
import ceciliaPortrait from "@/assets/cazuri/cecilia-portrait.jpg";
import danaCardCover from "@/assets/cazuri/dana-card-cover.jpg";
import aureliaHero from "@/assets/cazuri/aurelia-hero.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";
import sergiuSmileAfter from "@/assets/cazuri/sergiu-witberg/smile-after.jpg";
import simonaHero from "@/assets/cazuri/simona/hero.png";
import raduAfter1 from "@/assets/cazuri/radu/after-1.png";
import carmenAfter1 from "@/assets/cazuri/carmen/after-1.png";
import carmenPopPortrait from "@/assets/cazuri/carmen-pop/portrait.jpg";
import gabrielaCardCover from "@/assets/cazuri/gabriela-apati/card-cover.jpg";
import ioanaPortraitAfter from "@/assets/cazuri/ioana-mosut/portrait-after.jpg";
import bereczCardCover from "@/assets/cazuri/berecz/card-cover.jpg";

const CASE_FILTERS = ["Toate", "Implantologie", "All-on-X", "Protetică", "Estetică", "Ortodonție", "Parodontologie"] as const;

const caseGallery = [
  { src: ceciliaPortrait.src, alt: "Caz Cecilia — reabilitare totală All-on-4 Straumann", name: "Cecilia", tags: ["Implantologie", "All-on-X"] },
  { src: danaCardCover.src, alt: "Caz Dana — reabilitare protetică integrală din zirconiu", name: "Dana", tags: ["Protetică", "Parodontologie"] },
  { src: carmenPopPortrait.src, alt: "Caz Carmen — fațete dentare estetice", name: "Carmen", tags: ["Estetică"] },
  { src: gabrielaCardCover.src, alt: "Caz Gabriela — fațete dentare estetice", name: "Gabriela", tags: ["Estetică"] },
  { src: aureliaHero.src, alt: "Caz Aurelia — estetică dentară și fațete", name: "Aurelia", tags: ["Estetică"] },
  { src: ioanaPortraitAfter.src, alt: "Caz Ioana — reabilitare prin fațete dentare", name: "Ioana", tags: ["Estetică"] },
  { src: bereczCardCover.src, alt: "Caz Berecz — reabilitare protetică", name: "Berecz", tags: ["Protetică"] },
  { src: cazA7407944.src, alt: "Caz Laszlo — smile design", name: "Laszlo", tags: ["Estetică"] },
  { src: cazA7407760.src, alt: "Caz Laura — reabilitare protetică", name: "Laura", tags: ["Protetică"] },
  { src: cazA7408160.src, alt: "Caz Elena — reabilitare complexă, rezultat final", name: "Elena", tags: ["Protetică"] },
  { src: sergiuSmileAfter.src, alt: "Caz Sergiu — fațete dentare estetice", name: "Sergiu", tags: ["Estetică"] },
  { src: simonaHero.src, alt: "Caz Simona — reabilitare estetică dentară", name: "Simona", tags: ["Estetică"] },
  { src: raduAfter1.src, alt: "Caz Radu — rezultat final după tratament", name: "Radu", tags: ["Estetică"] },
  { src: carmenAfter1.src, alt: "Caz Carmen — rezultat final după tratament", name: "Carmen", tags: ["Estetică"] },
];

export default function CazuriPage() {
  const reduceMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<(typeof CASE_FILTERS)[number]>("Toate");
  const visibleCases = useMemo(
    () => (activeFilter === "Toate" ? caseGallery : caseGallery.filter((item) => item.tags.includes(activeFilter))),
    [activeFilter],
  );

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 pt-0">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-0 flex w-full flex-col overflow-hidden bg-black px-4 py-8 sm:px-6 md:px-12 md:py-10 xl:px-[120px]"
        >
          <div className="relative z-[2] flex flex-col">
            <p className="mb-3 text-[16px] font-medium text-white/50 md:mb-4">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[640px] whitespace-pre-line text-[36px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[52px] md:text-[56px] md:leading-[1.08] md:tracking-[-0.03em] lg:max-w-[820px] lg:text-[64px]"
            >
              {"Cazuri reale,\nrezultate\ndocumentate"}
            </motion.h1>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-[minmax(280px,360px)_1fr] md:gap-10 lg:mt-12 lg:gap-12">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={reduceMotion ? {} : { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-[16px] font-semibold text-white md:text-[21px]">Înainte / După</p>
                <p className="mt-3 text-[16px] leading-[1.5] text-white md:text-[21px] md:leading-[1.4]">Cazuri selectate din tratamente realizate în clinică, prezentate de la situația inițială până la rezultatul final.</p>
              </motion.div>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[520px] text-[16px] leading-[1.6] text-white md:text-[21px] md:leading-[1.65] lg:max-w-[620px]"
              >
                Fiecare caz este analizat complet, cu pași explicați și obiective clare. Accent pe funcționalitate, estetică și confort pe termen lung.
              </motion.p>
            </div>
          </div>
        </motion.section>

        <section className="mx-auto mt-10 w-full max-w-[1680px] px-4 md:px-8 lg:mt-14 lg:px-12">
          <div className="flex flex-wrap gap-2">
            {CASE_FILTERS.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[44px] rounded-full border px-4 text-[14px] font-semibold md:text-[16px] ${
                    isActive
                      ? "border-[color:var(--ads-accent)] bg-[color:var(--ads-accent)] text-black"
                      : "border-white/20 bg-transparent text-white hover:border-white/40"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-8 grid w-full max-w-[1680px] grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:mt-12 lg:grid-cols-3 lg:gap-[74px] lg:px-12">
          {visibleCases.length ? (
            visibleCases.map(({ src, alt, name }, i) => (
            <CaseImage
              key={src}
              src={src}
              alt={alt}
              overlayLabel={name}
              href={getCaseHrefForImage(src)}
              className="h-[min(72vw,420px)] w-full rounded-[20px] object-cover md:h-[664px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            />
            ))
          ) : (
            <p className="col-span-full text-[16px] leading-[1.5] text-white/70 md:text-[21px]">
              Nu avem încă un caz documentat în această categorie.
            </p>
          )}
        </section>

        <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:mt-24 md:px-8 lg:mt-[120px] lg:px-12">
          <h2 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-[42px] md:text-[58px] lg:text-[72px]">
            Cazuri <span className="text-white">mai în detaliu</span>
            <br />
            <span className="text-white">înainte și după</span>
          </h2>
          <CazuriVideoStrip />
        </section>

        <ServiceFinalCTA
          href={CLINIC.formPageHref}
          title="Vrei un rezultat documentat ca acestea?"
          body="Primul pas este o consultație. Evaluăm cazul tău și îți explicăm pașii posibili, fără presiune."
        />
      </main>
    </PrototypeFrame>
  );
}
