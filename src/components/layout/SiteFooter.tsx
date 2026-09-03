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
  { href: "/cazuri", label: "Studii de caz" },
  { href: "/testimoniale", label: "Testimoniale" },
  { href: "/contact", label: "Contact" },
  { href: "/politica-de-confidentialitate", label: "Politica de confidențialitate" },
];

export default function SiteFooter() {
  return (
    <>
      <InstagramReelsSection />
    <footer className="flex flex-col bg-[#0f1115] px-4 pb-10 pt-12 text-white md:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1720px] flex-1 grid-cols-1 gap-10 border-t border-black/10 pt-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <section>
          <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-white">Alverna Dental Studio</h3>
          <p className="mt-4 max-w-[560px] text-[21px] leading-[1.7] text-white">
            Clinica stomatologică Alverna Dental Studio include cabinete stomatologice modern amenajate și echipate cu
            aparatură de ultimă generație. Astfel, serviciile pe care le oferim sunt de o calitate superioară, iar
            pacienții noștri se simt mereu bine primiți. Fiecare cabinet stomatologic este pregătit să vă asigure un
            confort sporit, iar experiența și profesionalismul medicilor noștri sunt puse în slujba asigurării unei
            sănătăți dentare excelente!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-[21px] text-white">
            <Link href="/termeni-si-conditii" className="hover:underline">
              Termeni și condiții
            </Link>
            <Link href="/politica-de-confidentialitate" className="hover:underline">
              Politică de confidențialitate
            </Link>
          </div>
        </section>

        <section>
          <h4 className="text-[21px] font-semibold text-white">Pagini</h4>
          <div className="mt-4 space-y-2 text-[21px] text-white">
            {pageLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block hover:text-white hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[21px] font-semibold text-white">Servicii</h4>
          <div className="mt-4 space-y-2 text-[21px] text-white">
            {services.map((service) => (
              <Link key={service.slug} href={service.href} className="block hover:text-white hover:underline">
                {service.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[21px] font-semibold text-white">Contact</h4>
          <div className="mt-4 space-y-2 text-[21px] leading-[1.6] text-white">
            <a href={CLINIC.mapsPlaceUrl} target="_blank" rel="noreferrer" className="block hover:underline">
              {CLINIC.addressShort}
            </a>
            <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a>
            <a href={`mailto:${CLINIC.email}`} className="block">
              {CLINIC.email}
            </a>
            <a href={CLINIC.website} target="_blank" rel="noreferrer">
              {CLINIC.websiteDisplay}
            </a>
          </div>
        </section>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1720px] shrink-0 px-2">
        <a
          href={CLINIC.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="ads-footer-instagram block w-full text-center text-white transition-all duration-[400ms] ease-out hover:-translate-y-[2px] hover:text-white"
        >
          {CLINIC.instagramHandle}
        </a>
      </div>
    </footer>
    </>
  );
}
