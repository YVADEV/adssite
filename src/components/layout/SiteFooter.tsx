"use client";

import Link from "next/link";

import InstagramReelsSection from "@/components/layout/InstagramReelsSection";
import { CLINIC } from "@/lib/contact";
import { services } from "@/config/services";

const pageLinks = [
  { href: "/", label: "Acasă" },
  { href: "/turism-dentar", label: "Turism dentar" },
  { href: "/servicii", label: "Servicii" },
  { href: "/echipa", label: "Echipa" },
  { href: "/tarife", label: "Tarife" },
  { href: "/urgente-stomatologice-cluj/", label: "Urgențe 24/7" },
  { href: "/cazuri", label: "Studii de caz" },
  { href: "/testimoniale", label: "Testimoniale" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-de-confidentialitate", label: "Politica de confidențialitate" },
];

export default function SiteFooter() {
  return (
    <>
      <InstagramReelsSection />
    <footer className="flex flex-col bg-[#0f1115] px-4 pb-12 pt-16 text-white md:px-8 md:pt-20 lg:px-12 lg:pb-14">
      <div className="mx-auto grid w-full max-w-[1720px] flex-1 grid-cols-1 gap-12 border-t border-white/8 pt-12 lg:grid-cols-[1.35fr_0.9fr_1fr_1fr] lg:gap-16">
        <section>
          <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-white">Alverna Dental Studio</h3>
          {/* SEO365: bloc vechi de copy — nu rescrie/șterge până nu validează rolul SEO și termenii de păstrat. */}
          <p className="mt-4 max-w-[560px] text-[18px] leading-[1.7] text-white/80 md:text-[21px]">
            Clinica stomatologică Alverna Dental Studio include cabinete stomatologice modern amenajate și echipate cu
            aparatură de ultimă generație. Astfel, serviciile pe care le oferim sunt de o calitate superioară, iar
            pacienții noștri se simt mereu bine primiți. Fiecare cabinet stomatologic este pregătit să vă asigure un
            confort sporit, iar experiența și profesionalismul medicilor noștri sunt puse în slujba asigurării unei
            sănătăți dentare excelente!
          </p>
          <div className="mt-8 flex flex-col gap-2 text-[18px] leading-[1.6] text-white md:text-[21px]">
            <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="block transition-transform duration-200 hover:translate-x-[3px] hover:underline">
              {CLINIC.addressShort}
            </a>
            <a href={`tel:${CLINIC.phoneTel}`} className="block transition-transform duration-200 hover:translate-x-[3px] hover:underline">
              {CLINIC.phoneDisplay}
            </a>
            <a href={`mailto:${CLINIC.email}`} className="block transition-transform duration-200 hover:translate-x-[3px] hover:underline">
              {CLINIC.email}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-[16px] text-white/55">
            <Link href="/termeni-si-conditii" className="hover:text-white hover:underline">
              Termeni și condiții
            </Link>
            <Link href="/politica-de-confidentialitate" className="hover:text-white hover:underline">
              Politică de confidențialitate
            </Link>
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-white/55">Pagini</h4>
          <div className="mt-4 space-y-2 text-[18px] text-white/85 md:text-[21px]">
            {pageLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block transition-transform duration-200 hover:translate-x-[3px] hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-white/55">Servicii</h4>
          <div className="mt-4 space-y-2 text-[18px] text-white/85 md:text-[21px]">
            {services.filter((service) => service.slug !== "all-on-x").map((service) => (
              <Link key={service.slug} href={service.href} className="block transition-transform duration-200 hover:translate-x-[3px] hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-white/55">Programare</h4>
          <div className="mt-4 flex flex-col gap-3 text-[18px] leading-[1.6] text-white md:text-[21px]">
            <a href={CLINIC.formPageHref} className="block font-semibold transition-transform duration-200 hover:translate-x-[3px]">
              Programează o consultație
            </a>
            <a href={`tel:${CLINIC.phoneTel}`} className="block transition-transform duration-200 hover:translate-x-[3px]">
              Sună acum
            </a>
            <a href="/cazuri/" className="block transition-transform duration-200 hover:translate-x-[3px]">
              Vezi cazuri reale
            </a>
            <a href="/tarife/" className="block transition-transform duration-200 hover:translate-x-[3px]">
              Vezi toate tarifele
            </a>
          </div>
        </section>
      </div>

      <div className="ads-footer-instagram-wrap mx-auto mt-16 w-full max-w-[1720px] shrink-0 px-2">
        <a
          href={CLINIC.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ads-footer-instagram block w-full text-center text-white transition-all duration-[400ms] ease-out hover:-translate-y-[2px] hover:text-white"
        >
          {CLINIC.instagramHandle}
        </a>
      </div>
    </footer>
    </>
  );
}
