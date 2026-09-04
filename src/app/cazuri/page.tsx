"use client";

import { motion, useReducedMotion } from "motion/react";
import { CaseImage } from "@/components/cazuri/CaseImage";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import danaHero from "@/assets/cazuri/dana-hero.png";
import aureliaHero from "@/assets/cazuri/aurelia-hero.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";
import sergiuHero from "@/assets/cazuri/sergiu-witberg/hero.png";
import simonaHero from "@/assets/cazuri/simona/hero.png";
import raduAfter1 from "@/assets/cazuri/radu/after-1.png";
import carmenAfter1 from "@/assets/cazuri/carmen/after-1.png";

const caseGallery = [
  { src: cazA7408097.src, alt: "Caz implantologie — rezultat final Alverna Dental Studio" },
  { src: danaHero.src, alt: "Caz Dana — reabilitare protetică integrală din zirconiu" },
  { src: aureliaHero.src, alt: "Caz Aurelia — estetică dentară și fațete" },
  { src: cazA7407944.src, alt: "Caz smile design — armonie dentară și facială" },
  { src: cazA7407760.src, alt: "Caz reabilitare protetică — funcție și estetică" },
  { src: cazA7408160.src, alt: "Caz reabilitare complexă — plan de tratament complet" },
  { src: sergiuHero.src, alt: "Caz Sergiu Witberg — fațete dentare estetice" },
  { src: simonaHero.src, alt: "Caz Simona — reabilitare estetică dentară" },
  { src: raduAfter1.src, alt: "Caz Radu — rezultat final după tratament" },
  { src: carmenAfter1.src, alt: "Caz Carmen — rezultat final după tratament" },
];

export default function CazuriPage() {
  const reduceMotion = useReducedMotion();

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 pt-0">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-0 flex w-full flex-col overflow-hidden border border-white/20 bg-black px-4 py-8 shadow-[0_0_35px_rgba(255,255,255,0.16),inset_0_0_20px_rgba(255,255,255,0.04)] sm:px-6 md:px-12 md:py-10 xl:px-[120px]"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[60%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_72%)]"
          />
          <div className="relative z-[2] flex flex-col">
            <p className="mb-3 text-[21px] font-semibold text-white md:mb-4">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[640px] whitespace-pre-line text-[36px] font-bold leading-[0.95] tracking-[-2px] text-white sm:text-[52px] md:text-[72px] md:tracking-[-2.8px] lg:max-w-[820px] lg:text-[96px] lg:tracking-[-3.6px]"
            >
              {"Cazuri reale,\nrezultate\ndocumentate"}
            </motion.h1>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-[minmax(280px,360px)_1fr] md:gap-10 lg:mt-12 lg:gap-12">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={reduceMotion ? {} : { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-[21px] font-semibold text-white">Înainte / După</p>
                <p className="mt-3 text-[21px] leading-[1.4] text-white">Cazuri selectate din tratamente finalizate în clinică, cu plan clar și rezultate predictibile.</p>
              </motion.div>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[520px] text-[21px] leading-[1.65] text-white lg:max-w-[620px]"
              >
                Fiecare caz este analizat complet, cu pași explicați și obiective clare. Accent pe funcționalitate, estetică și confort pe termen lung.
              </motion.p>
            </div>
          </div>
        </motion.section>

        <section className="mx-auto mt-14 grid w-full max-w-[1680px] grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:mt-[120px] lg:grid-cols-3 lg:gap-[74px] lg:px-12">
          {caseGallery.map(({ src, alt }, i) => (
            <CaseImage
              key={src}
              src={src}
              alt={alt}
              className="h-[min(72vw,420px)] w-full rounded-[20px] object-cover sm:h-[520px] md:h-[664px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            />
          ))}
        </section>

        <section className="mx-auto mt-16 w-full max-w-[1680px] px-4 md:mt-24 md:px-8 lg:mt-[120px] lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-start">
            <h2 className="text-[32px] font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-[42px] md:text-[58px] lg:text-[72px]">
              Cazuri <span className="text-white">mai în detaliu</span>
              <br />
              <span className="text-white">înainte și după</span>
            </h2>
            <a href="/cazuri/" className="ads-btn-lit mt-5 rounded-full px-6 py-2 text-[21px] font-semibold">
              Vezi toate
            </a>
          </div>
          <CazuriVideoStrip />
        </section>
      </main>
    </PrototypeFrame>
  );
}
