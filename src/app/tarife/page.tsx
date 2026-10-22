"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { HeroIntroVideo } from "@/components/media/HeroIntroVideo";
import { pricingData } from "@/config/pricing";
import { CLINIC } from "@/lib/contact";

export default function TarifePage() {
  const [activeCategory, setActiveCategory] = useState(pricingData[0]?.category ?? "");
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pricesRef = useRef<HTMLElement>(null);

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
        <section className="relative w-full overflow-hidden bg-[#0f1115]">
          <div className="relative md:h-[min(68vh,640px)] lg:h-[min(74vh,760px)]">
            <div className="relative h-[min(54svh,440px)] w-full min-h-[280px] overflow-hidden md:absolute md:inset-0 md:h-full md:min-h-0 md:max-h-none">
              <HeroIntroVideo
                src="/tarife-concert.mp4"
                posterMobile="/tarife-concert-poster.jpg"
                posterTablet="/tarife-concert-poster.jpg"
                posterDesktop="/tarife-concert-poster.jpg"
                alt="Alverna Dental Studio — concert"
                coverBottom
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/35 to-transparent md:block"
              />
            </div>
            <div className="ads-hero-editorial relative z-[2] -mt-9 bg-[#0f1115] px-5 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] pt-6 text-white md:absolute md:inset-0 md:z-auto md:mt-0 md:flex md:flex-col md:items-start md:justify-end md:bg-transparent md:px-8 md:py-8 md:pb-12 lg:px-12 lg:pb-16">
              <div className="max-w-[1680px]">
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/80 md:text-[21px]">
                  Transparență totală
                </p>
                <h1 className="mt-1 text-[clamp(32px,9.4vw,40px)] font-extrabold leading-[0.92] tracking-[-0.05em] text-white md:mt-3 md:text-[60px] md:leading-[1.05] md:tracking-[-0.03em] lg:text-[72px]">
                  Tarife
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-[1680px] min-w-0 flex-col px-4 pt-6 md:px-8 md:pt-12 lg:px-12">
          <p className="max-w-[960px] text-[16px] leading-[1.6] text-white/75 md:text-[21px] md:leading-[1.65]">
            Aceleași tarife ale clinicii, organizate pe categorii. Selectează categoria dorită pentru a vedea toate procedurile și prețurile disponibile.
          </p>

          <div className="order-3 mt-8 grid grid-cols-1 gap-2 md:mt-8 md:grid-cols-3 md:gap-4">
            {snapshotCards}
          </div>

          <div className="order-2 mt-5 grid grid-cols-1 gap-4 md:mt-10 md:gap-6 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-8">
            <div className="flex flex-col gap-2 md:hidden">
              {pricingData.map((category, index) => {
                const isOpen = mobileOpen === category.category;
                const panelId = `tarife-cat-${index}`;
                return (
                  <div
                    key={category.category}
                    id={panelId}
                    className={`scroll-mt-[72px] rounded-[12px] border bg-white/5 ${
                      isOpen ? "border-[color:var(--ads-accent)]/70" : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-1 px-3">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => {
                          setMobileOpen(category.category);
                          window.requestAnimationFrame(() => {
                            document.getElementById(panelId)?.scrollIntoView({ block: "start", behavior: "smooth" });
                          });
                        }}
                        className="ads-btn-no-glow flex min-h-[48px] flex-1 items-center py-2.5 text-left text-[15px] font-semibold leading-[1.25] text-[color:var(--ads-accent)]"
                      >
                        {category.category}
                      </button>
                      {isOpen ? (
                        <button
                          type="button"
                          aria-label={`Închide ${category.category}`}
                          onClick={() => setMobileOpen(null)}
                          className="ads-btn-no-glow flex h-11 w-11 shrink-0 items-center justify-center text-[26px] leading-none text-white"
                        >
                          ×
                        </button>
                      ) : null}
                    </div>
                    {isOpen ? (
                      <div className="px-3 pb-3">
                        {category.items.map((entry) => (
                          <div key={`${category.category}-${entry.name}`} className="flex items-end gap-3 border-b border-white/10 py-3">
                            <p className="min-w-0 flex-1 text-[15px] leading-[1.4] text-white">{entry.name}</p>
                            <p className="shrink-0 text-right text-[15px] font-semibold tabular-nums text-white">{entry.price}</p>
                          </div>
                        ))}
                        <a href={CLINIC.formPageHref} className="ads-btn-lit mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[16px] font-semibold leading-[1.2]">
                          Programează o consultație
                        </a>
                      </div>
                    ) : null}
                  </div>
                );
              })}
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

            <article ref={pricesRef} className="hidden scroll-mt-[72px] rounded-[16px] border border-white/10 bg-white/[0.04] p-4 md:block md:rounded-[24px] md:p-6 lg:p-7">
              <div className="border-b border-white/10 pb-3 md:pb-5">
                <h2 className="scroll-mt-20 text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-white md:scroll-mt-0 md:text-[36px] md:leading-[1.1]">{activeData.category}</h2>
                <p className="mt-1 text-[13px] text-white/65 md:mt-2 md:text-[21px]">{activeData.items.length} proceduri disponibile</p>
              </div>

              <div className="mt-1 max-h-none space-y-0 overflow-visible md:mt-5 md:max-h-[620px] md:overflow-y-auto md:pr-2">
                {activeData.items.map((entry) => (
                  <div
                    key={`${activeData.category}-${entry.name}`}
                    className="flex items-end gap-3 border-b border-white/10 py-3 md:py-[10px]"
                  >
                    <p className="min-w-0 flex-1 text-[15px] leading-[1.4] text-white md:flex-none md:text-[21px] md:leading-[1.65]">{entry.name}</p>
                    <span className="mb-[6px] hidden min-w-6 flex-1 border-b border-dotted border-white/25 md:block" />
                    <p className="shrink-0 text-right text-[15px] font-semibold tabular-nums text-white md:text-[21px]">{entry.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[16px] border border-[color:var(--ads-accent)]/35 bg-[color:var(--ads-accent)]/8 p-4 md:mt-6">
                <p className="text-[16px] font-semibold text-white md:text-[21px]">Solicită un plan personalizat</p>
                <p className="mt-1 text-[14px] leading-[1.45] text-white/75 md:text-[21px]">Te contactăm rapid pentru o estimare clară și pașii potriviți cazului tău.</p>
                <a href={CLINIC.formPageHref} className="ads-btn-lit mt-3 inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-2.5 text-center text-[16px] font-semibold leading-[1.2] transition duration-200 hover:opacity-90 md:w-auto md:px-5 md:text-[21px]">
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
