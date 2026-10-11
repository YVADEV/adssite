"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { pricingData } from "@/config/pricing";
import { CLINIC } from "@/lib/contact";

export default function TarifePage() {
  const [activeCategory, setActiveCategory] = useState(pricingData[0]?.category ?? "");

  const activeData = useMemo(() => pricingData.find((category) => category.category === activeCategory) ?? pricingData[0], [activeCategory]);

  return (
    <PrototypeFrame>
      <main className="min-w-0 bg-black pb-24 text-white">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative aspect-[1024/585] w-full md:aspect-auto md:h-[min(68vh,640px)] lg:h-[min(74vh,760px)]">
            <img
              src="/tarife-hero.jpg"
              alt="Echipa Alverna Dental Studio"
              width={1024}
              height={585}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/35 to-transparent md:h-[38%]" />
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-8 pt-24 md:px-8 md:pb-12 lg:px-12 lg:pb-16">
              <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[18px] md:text-[21px]">
                Transparență totală
              </p>
              <h1 className="mt-2 text-[40px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:text-[84px] lg:text-[120px]">
                Tarife
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1680px] px-4 pt-8 md:px-8 md:pt-12 lg:px-12">
          <p className="max-w-[960px] text-[16px] leading-[1.6] text-white/75 md:text-[21px] md:leading-[1.65]">
            Aceleași tarife ale clinicii, organizate pe categorii. Selectează categoria dorită pentru a vedea toate procedurile și prețurile disponibile.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5 md:mt-10 md:gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
            <aside className="max-md:-mx-4 max-md:px-4 md:rounded-[24px] md:border md:border-white/10 md:bg-white/[0.04] md:p-3 lg:p-4">
              <div className="flex gap-2 overflow-x-auto pb-1 max-md:[scrollbar-width:thin] md:max-h-none md:flex-col md:space-y-2 md:overflow-visible md:pb-0 lg:max-h-[620px] lg:overflow-y-auto lg:pr-1">
                {pricingData.map((category) => {
                  const isActive = category.category === activeData.category;
                  return (
                    <motion.button
                      key={category.category}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      onClick={() => setActiveCategory(category.category)}
                      className={`grid min-h-11 shrink-0 grid-cols-[1fr_auto] items-center rounded-full border px-4 py-2 text-left text-[14px] font-medium transition outline-none md:min-h-[52px] md:w-full md:grid-cols-[1fr_26px] md:rounded-[12px] md:py-3 md:text-[18px] lg:text-[21px] ${
                        isActive
                          ? "border-[color:var(--ads-accent)]/60 bg-[color:var(--ads-accent)]/15 text-white ring-2 ring-[color:var(--ads-accent)]/35"
                          : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <span className="whitespace-nowrap pr-2 md:truncate">{category.category}</span>
                      <span className={`hidden text-[21px] leading-none md:inline ${isActive ? "text-[color:var(--ads-accent)]" : "text-white/50"}`}>+</span>
                    </motion.button>
                  );
                })}
              </div>
            </aside>

            <article className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-6 lg:p-7">
              <div className="border-b border-white/10 pb-3 md:pb-5">
                <h2 className="text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[36px]">{activeData.category}</h2>
                <p className="mt-1 text-[14px] text-white/65 md:mt-2 md:text-[21px]">{activeData.items.length} proceduri disponibile</p>
              </div>

              <div className="mt-2 max-h-none space-y-0 overflow-visible md:mt-5 md:max-h-[620px] md:overflow-y-auto md:pr-2">
                {activeData.items.map((entry) => (
                  <div key={`${activeData.category}-${entry.name}`} className="group flex items-end gap-3 border-b border-white/10 py-2 md:py-[10px]">
                    <p className="min-w-0 text-[15px] leading-[1.45] text-white md:text-[21px] md:leading-[1.65]">{entry.name}</p>
                    <span className="mb-[6px] flex-1 border-b border-dotted border-white/25" />
                    <p className="shrink-0 text-right text-[15px] font-semibold tabular-nums text-white md:text-[21px]">{entry.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[16px] border border-[color:var(--ads-accent)]/35 bg-[color:var(--ads-accent)]/8 p-4 md:mt-6">
                <p className="text-[16px] font-semibold text-white md:text-[21px]">Solicită un plan personalizat</p>
                <p className="mt-1 text-[14px] text-white/75 md:text-[21px]">Te contactăm rapid pentru o estimare clară și pașii potriviți cazului tău.</p>
                <a href={CLINIC.formPageHref} className="ads-btn-lit mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[17px] font-semibold leading-[1.2] transition duration-200 hover:opacity-90 sm:w-auto sm:px-5 sm:text-[21px]">
                  Programează o consultație
                </a>
              </div>
            </article>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
            <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-3 md:rounded-[16px] md:p-4">
              <p className="text-[12px] uppercase tracking-[0.1em] text-white/60 md:text-[21px]">Consultație</p>
              <p className="mt-1 text-[16px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 150 RON</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-3 md:rounded-[16px] md:p-4">
              <p className="text-[12px] uppercase tracking-[0.1em] text-white/60 md:text-[21px]">Implantologie</p>
              <p className="mt-1 text-[16px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 400 EURO</p>
            </div>
            <div className="rounded-[14px] border border-white/10 bg-white/[0.04] p-3 md:rounded-[16px] md:p-4">
              <p className="text-[12px] uppercase tracking-[0.1em] text-white/60 md:text-[21px]">Alignere</p>
              <p className="mt-1 text-[16px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 6000 RON</p>
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
