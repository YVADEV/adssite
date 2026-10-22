"use client";

import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { serviceListingImages, services } from "@/config/services";
import { ServiceFinalCTA } from "@/components/services/ServicePageParts";
import { CLINIC } from "@/lib/contact";

const listedServices = services.filter((service) => service.slug !== "all-on-x");
const listingBlurb = "Tratament personalizat, comunicare clară și monitorizare atentă în fiecare etapă.";

export default function ServiciiPageClient() {
  return (
    <PrototypeFrame>
      <main className="ads-service-page bg-[#ececec] pb-16 pt-16 max-md:bg-[#0f1115] max-md:text-white md:pt-24 lg:pt-[140px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid min-w-0 grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,760px)]">
            <h1 className="min-w-0 text-[36px] font-semibold leading-[0.9] tracking-[-4px] md:text-[56px] md:leading-[1.06] md:tracking-[-0.03em] lg:text-[68px]">Servicii</h1>
            {/* SEO365: bloc vechi de copy — nu rescrie/șterge până nu validează rolul SEO și termenii de păstrat. */}
            <p className="min-w-0 max-w-full pt-4 text-[16px] leading-[1.55] tracking-[-0.64px] opacity-70 md:text-[21px] md:leading-6 lg:pt-[28px]">
              Ne menținem statutul de clinică stomatologică modernă, în cadrul căreia fiecare cabinet este dotat cu aparatură medicală de ultimă generație.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1680px] px-4 md:hidden">
          <div className="flex flex-col">
            {listedServices.map((service) => {
              const media = serviceListingImages[service.slug];
              return (
                <article key={service.slug} className="border-b border-white/10 py-5">
                  {media ? (
                    <a href={service.href} className="block overflow-hidden rounded-[14px]">
                      <img
                        src={media.src}
                        alt={service.title}
                        width={800}
                        height={500}
                        decoding="async"
                        className="aspect-[16/10] h-auto w-full object-cover"
                        style={{ objectPosition: media.objectPosition ?? "center" }}
                      />
                    </a>
                  ) : null}
                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--ads-accent)]">Serviciu</p>
                      <h2 className="mt-1 text-[24px] font-semibold leading-[1.1] tracking-[-0.03em]">{service.title}</h2>
                      <p className="mt-2 text-[15px] leading-[1.5] text-white/70">{listingBlurb}</p>
                    </div>
                    <a
                      href={service.href}
                      className="mt-6 shrink-0 text-[18px] text-[color:var(--ads-accent)]"
                      aria-label={`Vezi detalii: ${service.title}`}
                    >
                      →
                    </a>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={service.href}
                      className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-[15px] font-semibold text-[#0A0A0A]"
                    >
                      Vezi detalii
                    </a>
                    {service.children?.map((child) => (
                      <a
                        key={child.slug}
                        href={child.href}
                        className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 text-[14px] font-medium text-white"
                      >
                        {child.title}
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-14 hidden w-full max-w-[1680px] grid-cols-1 gap-4 px-4 md:mt-16 md:grid md:px-8 lg:grid-cols-3 lg:gap-6 lg:px-12">
          {listedServices.map((service, i) => (
            <motion.article
              key={service.slug}
              className="overflow-hidden rounded-[16px] bg-white p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.005 }}
            >
              <p className="text-[21px] font-medium uppercase tracking-[0.12em] text-[#6b6b6b]">Serviciu</p>
              <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A]">{service.title}</h2>
              <p className="mt-3 text-[21px] leading-[1.6] text-[#4a4a4a]">{listingBlurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={service.href} className="inline-flex min-h-[44px] items-center rounded-full bg-[#0A0A0A] px-4 text-[21px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
                  Vezi detalii
                </a>
                {service.children?.map((child) => (
                  <a key={child.slug} href={child.href} className="inline-flex min-h-[44px] items-center rounded-full border border-black/15 px-4 text-[18px] font-medium text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                    {child.title}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </section>

        <ServiceFinalCTA
          href={CLINIC.formPageHref}
          title="Nu ești sigur ce serviciu ți se potrivește?"
          body="Programează o consultație. După evaluare, îți explicăm opțiunile potrivite cazului tău."
        />
      </main>
    </PrototypeFrame>
  );
}
