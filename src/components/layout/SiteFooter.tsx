"use client";

import Link from "next/link";

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
    <footer className="bg-white px-4 pb-10 pt-12 text-[#0A0A0A] md:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1720px] grid-cols-1 gap-10 border-t border-black/10 pt-10 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">
        <section>
          <h3 className="text-[24px] font-semibold tracking-[-0.03em]">Alverna Dental Studio</h3>
          <p className="mt-4 max-w-[560px] text-[14px] leading-[1.7] text-[#3d3d3d]">
            Clinica stomatologică Alverna Dental Studio include cabinete stomatologice modern amenajate și echipate cu
            aparatură de ultimă generație. Astfel, serviciile pe care le oferim sunt de o calitate superioară, iar
            pacienții noștri se simt mereu bine primiți. Fiecare cabinet stomatologic este pregătit să vă asigure un
            confort sporit, iar experiența și profesionalismul medicilor noștri sunt puse în slujba asigurării unei
            sănătăți dentare excelente!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-[13px] text-[#1f1f1f]">
            <Link href="/termeni-si-conditii" className="hover:underline">Termeni și condiții</Link>
            <Link href="/politica-de-confidentialitate" className="hover:underline">Politică de confidențialitate</Link>
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold">Pagini</h4>
          <div className="mt-4 space-y-2 text-[14px] text-[#2f2f2f]">
            {pageLinks.map((item) => (
              <Link key={item.label} href={item.href} className="block hover:text-[#0A0A0A] hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold">Servicii</h4>
          <div className="mt-4 space-y-2 text-[14px] text-[#2f2f2f]">
            {services.map((service) => (
              <Link key={service.slug} href={service.href} className="block hover:text-[#0A0A0A] hover:underline">
                {service.title}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-[16px] font-semibold">Contact</h4>
          <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#2f2f2f]">
            <p>Str. Alverna 33, 400469, Cluj-Napoca, Romania</p>
            <a href="tel:+40748085933">+40 376 448 810</a>
            <a href="mailto:contact@alvernadental.com" className="block">
              contact@alvernadental.com
            </a>
            <a href="https://alvernadental.com" target="_blank" rel="noreferrer">
              alvernadental.com
            </a>
          </div>
        </section>
      </div>

      <a
        href="https://www.instagram.com/alvernadentalstudio/?hl=en"
        target="_blank"
        rel="noreferrer"
        className="mx-auto mt-16 block w-full max-w-[1720px] text-center text-[48px] font-semibold leading-[0.92] tracking-[-0.04em] text-[#0A0A0A] transition-all duration-[400ms] ease-out hover:-translate-y-[2px] hover:text-[#3e6538] hover:[text-shadow:0_0_24px_rgba(78,112,68,0.18)] md:text-[80px] lg:text-[120px]"
      >
        @alvernadentalstudio
      </a>
    </footer>
  );
}
