"use client";

import { motion, useReducedMotion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { CazuriVideoStrip } from "@/components/media/LazyVideo";
import cazA7407853 from "@/assets/cazuri/A7407853 2.png";
import cazA7408097 from "@/assets/cazuri/A7408097 2.png";
import cazA7408137 from "@/assets/cazuri/A7408137 2.png";
import cazA7407760 from "@/assets/cazuri/A7407760 2.png";
import cazA7407944 from "@/assets/cazuri/A7407944 2.png";
import cazA7408160 from "@/assets/cazuri/A7408160-2 2.png";

const caseImages = [
  cazA7408097.src,
  cazA7407853.src,
  cazA7408137.src,
  cazA7407944.src,
  cazA7407760.src,
  cazA7408160.src,
];

export default function CazuriPage() {
  const reduceMotion = useReducedMotion();
  const heroCases = [
    { title: "Caz #1", role: "Implantologie", image: cazA7408097.src },
    { title: "Caz #2", role: "Reabilitare", image: cazA7407853.src },
    { title: "Caz #3", role: "Estetică dentară", image: cazA7408137.src },
    { title: "Caz #4", role: "Smile design", image: cazA7407944.src },
  ];

  return (
    <PrototypeFrame darkHeader>
      <main className="bg-black pb-20 pt-0">
        <motion.section
          initial={reduceMotion ? false : { opacity: 0, y: 80, scale: 0.96, filter: "blur(18px)" }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={reduceMotion ? {} : { duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative left-1/2 mt-0 grid min-h-[calc(100vh-72px)] w-screen -translate-x-1/2 grid-cols-1 gap-10 overflow-hidden border border-white/20 bg-black px-6 py-10 shadow-[0_0_35px_rgba(255,255,255,0.16),inset_0_0_20px_rgba(255,255,255,0.04)] md:px-12 md:py-12 lg:grid-cols-[1fr_1fr] lg:gap-[60px] xl:px-[120px]"
        >
          <motion.div
            aria-hidden
            animate={reduceMotion ? {} : { x: [-16, 20, -16], y: [-10, 14, -10] }}
            transition={reduceMotion ? {} : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-[60%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.04)_34%,transparent_72%)] blur-[44px]"
          />
          <div className="relative z-[2] flex min-h-[420px] flex-col">
            <p className="mb-[18px] text-[14px] font-semibold text-white">@alvernadentalstudio</p>
            <motion.h1
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(12px)" }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={reduceMotion ? {} : { duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[420px] whitespace-pre-line text-[42px] font-bold leading-[0.95] tracking-[-1.8px] text-white"
            >
              {"Cazuri reale,\nrezultate\ndocumentate"}
            </motion.h1>
            <div className="mt-auto grid grid-cols-1 gap-6 md:grid-cols-[230px_1fr]">
              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={reduceMotion ? {} : { duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                <p className="text-[12px] font-semibold text-white">Before & After</p>
                <p className="mt-2 text-[12px] leading-[1.35] text-white/70">Cazuri selectate din tratamente finalizate în clinică, cu plan clar și rezultate predictibile.</p>
              </motion.div>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={reduceMotion ? {} : { duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-[330px] text-[16px] leading-[1.1] text-white/65"
              >
                Fiecare caz este analizat complet, cu pași explicați și obiective clare. Accent pe funcționalitate, estetică și confort pe termen lung.
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { delayChildren: 0.26, staggerChildren: 0.12 } },
            }}
            className="relative z-[2] grid h-auto grid-cols-2 gap-[6px] lg:h-[680px] lg:w-full lg:max-w-[560px] lg:justify-self-end lg:grid-rows-2"
          >
            {heroCases.map((item) => (
              <motion.article
                key={item.title}
                variants={reduceMotion ? undefined : { hidden: { opacity: 0, y: 50, scale: 0.94, filter: "blur(12px)" }, visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } } }}
                whileHover={reduceMotion ? {} : { y: -8, borderColor: "rgba(255,255,255,0.35)", boxShadow: "0 10px 26px rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[225px] overflow-hidden rounded-[12px] border border-white/15 bg-[#111] lg:h-[337px]"
              >
                <motion.img src={item.image} alt={item.title} className="h-full w-full object-cover object-top" whileHover={reduceMotion ? {} : { scale: 1.05 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),transparent_55%)]" />
                <span className="absolute left-2 top-2 inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/35 bg-black/35 text-[11px] leading-none text-white">+</span>
                <p className="absolute right-2 top-2 max-w-[92px] text-right text-[10px] leading-[1.2] text-white/90">{item.role}</p>
                <p className="absolute bottom-2 left-2 text-[15px] font-bold text-white">{item.title}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <section className="mx-auto mt-14 grid w-full max-w-[1680px] grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:mt-[120px] lg:grid-cols-3 lg:gap-[74px] lg:px-12">
          {caseImages.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="h-[664px] w-full rounded-[20px] object-cover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
            />
          ))}
        </section>

        <section className="mx-auto mt-[120px] w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="flex items-start justify-between gap-6">
            <h2 className="text-[42px] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:text-[58px] lg:text-[72px]">
              Cazuri <span className="text-white/55">mai în detaliu</span>
              <br />
              <span className="text-white/55">before and after</span>
            </h2>
            <a href="/cazuri/" className="mt-5 rounded-full bg-white px-6 py-2 text-xs font-semibold text-black">
              Vezi toate
            </a>
          </div>
          <CazuriVideoStrip />
        </section>
      </main>
    </PrototypeFrame>
  );
}
