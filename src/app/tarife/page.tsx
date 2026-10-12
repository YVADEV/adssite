"use client";

import { useId, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { pricingData } from "@/config/pricing";
import { CLINIC } from "@/lib/contact";

export default function TarifePage() {
  const [activeCategory, setActiveCategory] = useState(pricingData[0]?.category ?? "");
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const listboxId = useId();
  const pickerRef = useRef<HTMLDivElement>(null);

  const activeData = useMemo(() => pricingData.find((category) => category.category === activeCategory) ?? pricingData[0], [activeCategory]);

  const snapshotCards = (
    <>
      <div className="flex items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 md:block md:rounded-[16px] md:p-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/60 md:text-[21px] md:tracking-[0.1em]">Consultație</p>
        <p className="shrink-0 text-[15px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 150 RON</p>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 md:block md:rounded-[16px] md:p-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/60 md:text-[21px] md:tracking-[0.1em]">Implantologie</p>
        <p className="shrink-0 text-[15px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 400 EURO</p>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-[12px] border border-white/10 bg-white/[0.04] px-3.5 py-2.5 md:block md:rounded-[16px] md:p-4">
        <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/60 md:text-[21px] md:tracking-[0.1em]">Alignere</p>
        <p className="shrink-0 text-[15px] font-semibold leading-none text-white md:mt-2 md:text-[21px]">de la 6000 RON</p>
      </div>
    </>
  );

  return (
    <PrototypeFrame>
      <main className="min-w-0 bg-black pb-24 text-white">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative h-[min(32svh,220px)] min-h-[180px] w-full md:h-[min(68vh,640px)] lg:h-[min(74vh,760px)]">
            <img
              src="/tarife-hero.jpg"
              alt="Echipa Alverna Dental Studio"
              width={1024}
              height={585}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/35 to-transparent md:h-[38%]" />
            <div className="relative z-10 mx-auto flex h-full w-full max-w-[1680px] flex-col justify-end px-4 pb-5 pt-16 md:px-8 md:pb-12 md:pt-24 lg:px-12 lg:pb-16">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/80 md:text-[21px]">
                Transparență totală
              </p>
              <h1 className="mt-1 text-[32px] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:mt-2 md:text-[84px] lg:text-[120px]">
                Tarife
              </h1>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1680px] min-w-0 flex-col px-4 pt-6 md:px-8 md:pt-12 lg:px-12">
          <p className="max-w-[960px] text-[16px] leading-[1.6] text-white/75 md:text-[21px] md:leading-[1.65]">
            Aceleași tarife ale clinicii, organizate pe categorii. Selectează categoria dorită pentru a vedea toate procedurile și prețurile disponibile.
          </p>

          <div className="order-2 mt-5 grid grid-cols-1 gap-2 md:order-3 md:mt-8 md:grid-cols-3 md:gap-4">
            {snapshotCards}
          </div>

          <div className="order-3 mt-5 grid grid-cols-1 gap-5 md:order-2 md:mt-10 md:gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
            <div ref={pickerRef} className="scroll-mt-[72px] md:hidden">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">Categorie</p>
              <button
                type="button"
                aria-expanded={categoriesOpen}
                aria-controls={listboxId}
                onClick={() => setCategoriesOpen((open) => !open)}
                className="mt-2 flex min-h-[48px] w-full items-center justify-between gap-3 rounded-[14px] border border-[color:var(--ads-accent)]/50 bg-[color:var(--ads-accent)]/15 px-4 py-2.5 text-left text-[16px] font-semibold leading-[1.3] text-white"
              >
                <span className="min-w-0">{activeData.category}</span>
                <span aria-hidden className="shrink-0 text-[18px] leading-none text-white/80">
                  {categoriesOpen ? "−" : "+"}
                </span>
              </button>
              {categoriesOpen ? (
                <ul id={listboxId} role="listbox" className="mt-2 max-h-[min(52svh,380px)] divide-y divide-white/10 overflow-y-auto overscroll-contain rounded-[14px] border border-white/10 bg-[#0f1115]">
                  {pricingData.map((category) => {
                    const isActive = category.category === activeData.category;
                    return (
                      <li key={category.category} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveCategory(category.category);
                            setCategoriesOpen(false);
                            window.requestAnimationFrame(() => {
                              pickerRef.current?.scrollIntoView({ block: "start", behavior: "auto" });
                            });
                          }}
                          className={`flex min-h-[44px] w-full items-center px-4 py-2.5 text-left text-[15px] font-medium leading-[1.35] ${
                            isActive
                              ? "bg-[color:var(--ads-accent)]/18 text-white"
                              : "text-white/85"
                          }`}
                        >
                          {category.category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>

            <aside className="hidden md:block md:rounded-[24px] md:border md:border-white/10 md:bg-white/[0.04] md:p-3 lg:p-4">
              <div className="md:flex md:max-h-none md:flex-col md:space-y-2 md:overflow-visible lg:max-h-[620px] lg:overflow-y-auto lg:pr-1">
                {pricingData.map((category) => {
                  const isActive = category.category === activeData.category;
                  return (
                    <motion.button
                      key={category.category}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      onClick={() => setActiveCategory(category.category)}
                      className={`grid min-h-[52px] w-full grid-cols-[1fr_26px] items-center rounded-[12px] border px-4 py-3 text-left text-[18px] font-medium transition outline-none lg:text-[21px] ${
                        isActive
                          ? "border-[color:var(--ads-accent)]/60 bg-[color:var(--ads-accent)]/15 text-white ring-2 ring-[color:var(--ads-accent)]/35"
                          : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                      }`}
                    >
                      <span className="truncate pr-2">{category.category}</span>
                      <span className={`text-[21px] leading-none ${isActive ? "text-[color:var(--ads-accent)]" : "text-white/50"}`}>+</span>
                    </motion.button>
                  );
                })}
              </div>
            </aside>

            <article className="rounded-[16px] border border-white/10 bg-white/[0.04] p-4 md:rounded-[24px] md:p-6 lg:p-7">
              <div className="border-b border-white/10 pb-3 md:pb-5">
                <h2 className="scroll-mt-20 text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-white md:scroll-mt-0 md:text-[36px] md:leading-[1.1]">{activeData.category}</h2>
                <p className="mt-1 text-[13px] text-white/65 md:mt-2 md:text-[21px]">{activeData.items.length} proceduri disponibile</p>
              </div>

              <div className="mt-1 max-h-none space-y-0 overflow-visible md:mt-5 md:max-h-[620px] md:overflow-y-auto md:pr-2">
                {activeData.items.map((entry) => (
                  <div
                    key={`${activeData.category}-${entry.name}`}
                    className="flex flex-col gap-1 border-b border-white/10 py-3 md:flex-row md:items-end md:gap-3 md:py-[10px]"
                  >
                    <p className="min-w-0 text-[16px] leading-[1.45] text-white md:text-[21px] md:leading-[1.65]">{entry.name}</p>
                    <span className="mb-[6px] hidden flex-1 border-b border-dotted border-white/25 md:block" />
                    <p className="shrink-0 self-end text-right text-[16px] font-semibold tabular-nums text-white md:self-auto md:text-[21px]">{entry.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[16px] border border-[color:var(--ads-accent)]/35 bg-[color:var(--ads-accent)]/8 p-4 md:mt-6">
                <p className="text-[16px] font-semibold text-white md:text-[21px]">Solicită un plan personalizat</p>
                <p className="mt-1 text-[14px] leading-[1.45] text-white/75 md:text-[21px]">Te contactăm rapid pentru o estimare clară și pașii potriviți cazului tău.</p>
                <a href={CLINIC.formPageHref} className="ads-btn-lit mt-3 hidden min-h-[48px] w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[16px] font-semibold leading-[1.2] transition duration-200 hover:opacity-90 md:inline-flex md:w-auto md:px-5 md:text-[21px]">
                  Programează o consultație
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
