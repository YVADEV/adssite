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
      <main className="bg-[#ececec] pb-24 pt-12 md:pt-16 lg:pt-[110px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="rounded-[28px] border border-black/8 bg-white px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-[#5f5f5f]">Transparență totală</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h1 className="text-[52px] font-extrabold leading-[0.92] tracking-[-0.05em] text-[#0A0A0A] md:text-[84px] lg:text-[120px]">Tarife</h1>
              <div className="flex flex-wrap gap-2 text-[12px] text-[#4F7F47]">
                <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Prețuri clare</span>
                <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Fără costuri ascunse</span>
                <span className="rounded-full border border-[rgba(79,127,71,0.25)] px-3 py-1">Plan personalizat</span>
              </div>
            </div>

            <p className="mt-4 max-w-[960px] text-[16px] leading-[1.65] text-[#4a4a4a]">
              Aceleași tarife complete din homepage, organizate într-o interfață clară, premium și ușor de parcurs. Selectează categoria dorită pentru a vedea toate procedurile și prețurile disponibile.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
              <aside className="rounded-[20px] border border-black/8 bg-[#f7f7f7] p-4">
                <div className="max-h-[620px] space-y-2 overflow-y-auto pr-1">
                  {pricingData.map((category) => {
                    const isActive = category.category === activeData.category;
                    return (
                      <motion.button
                        key={category.category}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onClick={() => setActiveCategory(category.category)}
                        className={`grid h-[56px] w-full grid-cols-[1fr_26px] items-center rounded-[14px] px-4 text-left text-[14px] font-medium transition ${
                          isActive ? "bg-[#0A0A0A] text-white" : "bg-white text-[#0A0A0A] hover:bg-[#f1f1f1]"
                        }`}
                      >
                        <span className="truncate pr-2">{category.category}</span>
                        <span className={`text-[18px] leading-none ${isActive ? "text-[#8fd17f]" : "text-[#9a9a9a]"}`}>+</span>
                      </motion.button>
                    );
                  })}
                </div>
              </aside>

              <article className="rounded-[20px] border border-black/8 bg-white p-5 md:p-6 lg:p-7">
                <div className="border-b border-black/8 pb-5">
                  <h2 className="text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] md:text-[36px]">{activeData.category}</h2>
                  <p className="mt-2 text-[14px] text-[#616161]">{activeData.items.length} proceduri disponibile</p>
                </div>

                <div className="mt-5 max-h-[620px] space-y-0 overflow-y-auto pr-2">
                  {activeData.items.map((entry) => (
                    <div key={`${activeData.category}-${entry.name}`} className="group flex items-end gap-3 border-b border-black/7 py-[10px]">
                      <p className="text-[14px] leading-[1.45] text-[#2f2f2f]">{entry.name}</p>
                      <span className="mb-[6px] flex-1 border-b border-dotted border-black/20" />
                      <p className="shrink-0 text-right text-[14px] font-semibold text-[#0A0A0A]">{entry.price}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[16px] border border-[rgba(79,127,71,0.2)] bg-[rgba(79,127,71,0.05)] p-4">
                  <p className="text-[18px] font-semibold text-[#0A0A0A]">Solicită un plan personalizat</p>
                  <p className="mt-1 text-[13px] text-[#555]">Te contactăm rapid pentru o estimare clară și pașii potriviți cazului tău.</p>
                  <a href="/#contact" className="mt-3 inline-flex h-[42px] items-center rounded-full bg-[#0A0A0A] px-5 text-[14px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
                    Programează o consultație
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-[16px] bg-[#f7f7f7] p-4">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#6f6f6f]">Consultație</p>
                <p className="mt-2 text-[24px] font-semibold leading-none text-[#0A0A0A]">de la 150 RON</p>
              </div>
              <div className="rounded-[16px] bg-[#f7f7f7] p-4">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#6f6f6f]">Implantologie</p>
                <p className="mt-2 text-[24px] font-semibold leading-none text-[#0A0A0A]">de la 400 EURO</p>
              </div>
              <div className="rounded-[16px] bg-[#f7f7f7] p-4">
                <p className="text-[12px] uppercase tracking-[0.1em] text-[#6f6f6f]">Alignere</p>
                <p className="mt-2 text-[24px] font-semibold leading-none text-[#0A0A0A]">de la 6000 RON</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
