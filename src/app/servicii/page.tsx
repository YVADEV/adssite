"use client";

import { motion } from "motion/react";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { services } from "@/config/services";

export default function ServiciiPage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#ececec] pb-16 pt-16 md:pt-24 lg:pt-[140px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_760px]">
            <h1 className="text-[92px] font-semibold leading-[0.9] tracking-[-4px] lg:text-[144px] lg:tracking-[-8.64px]">Servicii</h1>
            <p className="pt-4 text-[16px] leading-6 tracking-[-0.64px] opacity-70 lg:pt-[28px]">
              Ne menținem statutul de clinică stomatologică modernă, în cadrul căreia fiecare cabinet este dotat cu aparatură medicală de ultimă generație.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-14 grid w-full max-w-[1680px] gap-4 px-4 md:px-8 lg:mt-16 lg:grid-cols-3 lg:gap-6 lg:px-12">
          {services.map((service, i) => (
            <motion.article
              key={service.slug}
              className="overflow-hidden rounded-[16px] bg-white p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ scale: 1.005 }}
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6b6b6b]">Serviciu</p>
              <h2 className="mt-3 text-[28px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A]">{service.title}</h2>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#4a4a4a]">Tratament personalizat, comunicare clară și monitorizare atentă în fiecare etapă.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={service.href} className="inline-flex h-[38px] items-center rounded-full bg-[#0A0A0A] px-4 text-[13px] font-semibold text-white transition duration-300 hover:scale-[1.02]">
                  Vezi detalii
                </a>
                {service.children?.map((child) => (
                  <a key={child.slug} href={child.href} className="inline-flex h-[38px] items-center rounded-full border border-black/15 px-4 text-[12px] font-semibold text-[#0A0A0A] transition duration-300 hover:scale-[1.02]">
                    {child.title}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </PrototypeFrame>
  );
}
