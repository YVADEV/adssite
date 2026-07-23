"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { pricingData } from "@/components/home/HomePageClient";

export default function TarifePage() {
  const [activeCategory, setActiveCategory] = useState(pricingData[0]?.category ?? "");

  const activeData = useMemo(() => pricingData.find((category) => category.category === activeCategory) ?? pricingData[0], [activeCategory]);

  return (
    <PrototypeFrame>
      <main className="bg-black pb-24 pt-12 text-white md:pt-16 lg:pt-[110px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <p className="text-[16px] font-medium uppercase tracking-[0.14em] text-white/70">Transparență totală</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h1 className="text-[52px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[84px] lg:text-[120px]">Tarife</h1>
            <div className="flex flex-wrap gap-2 text-[16px] text-white">
              <span className="rounded-full border border-[rgba(79,127,71,0.35)] px-3 py-1">Prețuri clare</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.35)] px-3 py-1">Fără costuri ascunse</span>
              <span className="rounded-full border border-[rgba(79,127,71,0.35)] px-3 py-1">Plan personalizat</span>
            </div>
          </div>

          <p className="mt-4 max-w-[960px] text-[16px] leading-[1.65] text-white/75">
            Aceleași tarife complete din homepage, organizate într-o interfață clară, premium și ușor de parcurs. Selectează categoria dorită pentru a vedea toate procedurile și prețurile disponibile.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
            <aside className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4">
              <div className="max-h-[620px] space-y-2 overflow-y-auto pr-1">
                {pricingData.map((category) => {
                  const isActive = category.category === activeData.category;
                  return (
                    <motion.button
                      key={category.category}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      onClick={() => setActiveCategory(category.category)}
                      className={`grid h-[52px] w-full grid-cols-[1fr_26px] items-center rounded-[12px] border px-4 text-left text-[16px] font-medium transition outline-none ${
                        isActive
                          ? "border-[#4F7F47]/60 bg-[#4F7F47]/15 text-white ring-2 ring-[#4F7F47]/35"
                          : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <span className="truncate pr-2">{category.category}</span>
                      <span className={`text-[16px] leading-none ${isActive ? "text-[#8fd17f]" : "text-white/50"}`}>+</span>
                    </motion.button>
                  );
                })}
              </div>
            </aside>

            <article className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 md:p-6 lg:p-7">
              <div className="border-b border-white/10 pb-5">
                <h2 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-white md:text-[36px]">{activeData.category}</h2>
                <p className="mt-2 text-[16px] text-white/65">{activeData.items.length} proceduri disponibile</p>
              </div>

              <div className="mt-5 max-h-[620px] space-y-0 overflow-y-auto pr-2">
                {activeData.items.map((entry) => (
                  <div key={`${activeData.category}-${entry.name}`} className="group flex items-end gap-3 border-b border-white/10 py-[10px]">
                    <p className="text-[16px] leading-[1.65] text-white">{entry.name}</p>
                    <span className="mb-[6px] flex-1 border-b border-dotted border-white/25" />
                    <p className="shrink-0 text-right text-[16px] font-semibold text-white">{entry.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[16px] border border-[rgba(79,127,71,0.35)] bg-[rgba(79,127,71,0.08)] p-4">
                <p className="text-[16px] font-semibold text-white">Solicită un plan personalizat</p>
                <p className="mt-1 text-[16px] text-white/75">Te contactăm rapid pentru o estimare clară și pașii potriviți cazului tău.</p>
                <a href="/#contact" className="mt-3 inline-flex h-[42px] items-center rounded-full bg-white px-5 text-[16px] font-semibold text-black transition duration-300 hover:scale-[1.02]">
                  Programează o consultație
                </a>
              </div>
            </article>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[16px] uppercase tracking-[0.1em] text-white/60">Consultație</p>
              <p className="mt-2 text-[24px] font-semibold leading-none text-white">de la 150 RON</p>
            </div>
            <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[16px] uppercase tracking-[0.1em] text-white/60">Implantologie</p>
              <p className="mt-2 text-[24px] font-semibold leading-none text-white">de la 400 EURO</p>
            </div>
            <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[16px] uppercase tracking-[0.1em] text-white/60">Alignere</p>
              <p className="mt-2 text-[24px] font-semibold leading-none text-white">de la 6000 RON</p>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
