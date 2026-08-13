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

const caseImages = [
  cazA7408097.src,
  danaHero.src,
  aureliaHero.src,
  cazA7407944.src,
  cazA7407760.src,
  cazA7408160.src,
  sergiuHero.src,
  simonaHero.src,
  raduAfter1.src,
  carmenAfter1.src,
];

export default function CazuriPage() {
  const reduceMotion = useReducedMotion();

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 pt-0">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 80, scale: 0.96, filter: "blur(18px)" }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative left-1/2 mt-0 flex w-screen -translate-x-1/2 flex-col overflow-hidden border border-white/20 bg-black px-6 py-8 shadow-[0_0_35px_rgba(255,255,255,0.16),inset_0_0_20px_rgba(255,255,255,0.04)] md:px-12 md:py-10 xl:px-[120px]"
        >
          <motion.div
            aria-hidden
            animate={reduceMotion ? {} : { x: [-16, 20, -16], y: [-10, 14, -10] }}
            transition={reduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[60%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_34%,transparent_72%)] blur-[44px]"
          />
          <div className="relative z-[2] flex flex-col">
            <p className="mb-3 text-[21px] font-semibold text-white md:mb-4">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[640px] whitespace-pre-line text-[52px] font-bold leading-[0.95] tracking-[-2px] text-white md:text-[72px] md:tracking-[-2.8px] lg:max-w-[820px] lg:text-[96px] lg:tracking-[-3.6px]"
            >
              {"Cazuri reale,\nrezultate\ndocumentate"}
            </motion.h1>
            <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-[minmax(280px,360px)_1fr] md:gap-10 lg:mt-12 lg:gap-12">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={reduceMotion ? {} : { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-[21px] font-semibold text-white">Before & After</p>
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
          {caseImages.map((src, i) => (
            <CaseImage
              key={src}
              src={src}
              alt=""
              className="h-[664px] w-full rounded-[20px] object-cover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            />
          ))}
        </section>

        <section className="mx-auto mt-[120px] w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-[42px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[58px] lg:text-[72px]">
              Cazuri <span className="text-white">mai în detaliu</span>
              <br />
              <span className="text-white">before and after</span>
            </h2>
            <a href="/cazuri/" className="mt-5 rounded-full bg-white px-6 py-2 text-[21px] font-semibold text-black">
              Vezi toate
            </a>
          </div>
          <CazuriVideoStrip />
        </section>
      </main>
    </PrototypeFrame>
  );
}
