"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { services } from "@/config/services";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import SiteFooter from "@/components/layout/SiteFooter";

type PrototypeFrameProps = {
  children: ReactNode;
  darkHeader?: boolean;
};

export default function PrototypeFrame({ children }: PrototypeFrameProps) {
  const pageContentRef = useRef<HTMLDivElement>(null);
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuTopLineRef = useRef<HTMLSpanElement>(null);
  const menuMidLineRef = useRef<HTMLSpanElement>(null);
  const menuBottomLineRef = useRef<HTMLSpanElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAparatOpen, setMobileAparatOpen] = useState(false);

  useEffect(() => {
    const overlay = menuOverlayRef.current;
    const page = pageContentRef.current;
    const top = menuTopLineRef.current;
    const mid = menuMidLineRef.current;
    const bottom = menuBottomLineRef.current;
    if (!overlay || !page || !top || !mid || !bottom) return;

    const ease = "cubic-bezier(0.16, 1, 0.3, 1)";
    const menuItems = overlay.querySelectorAll<HTMLElement>("[data-menu-item]");
    let frame = 0;
    let tl: gsap.core.Timeline | null = null;

    if (menuOpen) {
      setMenuVisible(true);
      document.body.style.overflow = "hidden";
      frame = requestAnimationFrame(() => {
        gsap.set(overlay, { opacity: 0, scale: 0.98, pointerEvents: "auto" });
        gsap.set(menuItems, { opacity: 0, y: 40 });
        tl = gsap.timeline({ defaults: { ease } });
        tl.to(overlay, { opacity: 1, scale: 1, duration: 0.42, ease })
          .to(page, { opacity: 0.2, duration: 0.42, ease }, "<")
          .to(top, { y: 8, rotate: 45, duration: 0.36, ease }, "-=0.34")
          .to(mid, { opacity: 0, scaleX: 0.35, duration: 0.3, ease }, "<")
          .to(bottom, { y: -8, rotate: -45, duration: 0.36, ease }, "<")
          .to(menuItems, { opacity: 1, y: 0, stagger: 0.08, duration: 0.62, ease }, "-=0.16");
      });
    } else if (menuVisible) {
      tl = gsap.timeline({ defaults: { ease } });
      tl.to(menuItems, { opacity: 0, y: 20, stagger: { each: 0.07, from: "end" }, duration: 0.34, ease })
        .to(overlay, { opacity: 0, duration: 0.38, ease }, "-=0.08")
        .to(page, { opacity: 1, duration: 0.38, ease }, "<")
        .to(top, { y: 0, rotate: 0, duration: 0.32, ease }, "<")
        .to(mid, { opacity: 1, scaleX: 1, duration: 0.28, ease }, "<")
        .to(bottom, { y: 0, rotate: 0, duration: 0.32, ease }, "<")
        .add(() => setMenuVisible(false));
      document.body.style.overflow = "";
    } else {
      gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
      document.body.style.overflow = "";
    }

    return () => {
      cancelAnimationFrame(frame);
      tl?.kill();
      document.body.style.overflow = "";
    };
  }, [menuOpen, menuVisible]);

  return (
    <div className="overflow-x-hidden bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <div
        ref={menuOverlayRef}
        className={`fixed inset-0 z-[8888] bg-[#0f1115] ${menuVisible ? "" : "pointer-events-none"}`}
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col overflow-y-auto px-6 py-6 md:px-10">
          <div className="flex items-center justify-between">
            <span className="text-[22px] font-bold tracking-[-0.03em] text-white">alverna®</span>
            <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="relative h-10 w-10">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center">
            <div className="pl-[6vw] md:pl-[10vw]">
              {[
                { href: "/", label: "Acasă" },
                { href: "/cazuri", label: "Cazuri" },
                { href: "/tarife", label: "Tarife" },
                { href: "/echipa", label: "Echipa" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  data-menu-item
                  onClick={() => setMenuOpen(false)}
                  className="block text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                aria-label="Deschide lista de servicii"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="mt-2 flex w-full items-center justify-between rounded-[12px] px-3 py-2 text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white"
              >
                <span>Servicii</span>
                <span className="text-[22px]">{mobileServicesOpen ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileServicesOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pl-3 pt-1">
                  {services.map((service) =>
                    service.children?.length ? (
                      <div key={service.slug}>
                        <button
                          type="button"
                          aria-label={`Deschide submeniul ${service.title}`}
                          aria-expanded={mobileAparatOpen}
                          onClick={() => setMobileAparatOpen((prev) => !prev)}
                          className="flex min-h-[48px] w-full items-center justify-between rounded-[10px] px-2 text-[18px] font-semibold text-white"
                        >
                          <span>{service.title}</span>
                          <span>{mobileAparatOpen ? "−" : "+"}</span>
                        </button>
                        <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${mobileAparatOpen ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}`}>
                          {(service.children ?? []).map((child) => (
                            <Link
                              key={child.slug}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="block min-h-[48px] rounded-[10px] px-3 py-3 text-[15px] text-white/85"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        key={service.slug}
                        href={service.href}
                        onClick={() => setMenuOpen(false)}
                        className="block min-h-[48px] rounded-[10px] px-2 py-3 text-[17px] font-medium text-white"
                      >
                        {service.title}
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </nav>
          <div className="flex flex-col gap-4 pt-6 text-white sm:flex-row sm:items-end sm:justify-between">
            <div className="text-[13px] leading-[1.5]">
              <a href="tel:+40748085933">+40 748 085 933</a>
              <a href="mailto:contact@alvernadental.com">contact@alvernadental.com</a>
            </div>
            <div className="text-right text-[12px] leading-[1.6]">
              <div className="flex justify-end gap-5">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
              <p className="mt-1">© Alverna Dental Studio</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={pageContentRef}>
        <header className="sticky top-0 z-30 h-[68px] w-full bg-[#0f1115] text-white sm:h-[72px]">
          <div className="mx-auto flex h-full w-full max-w-[1920px] items-center justify-between px-3 text-[15px] font-medium sm:px-4 md:px-6 lg:px-8 2xl:px-12">
            <a
              href="mailto:contact@alvernadental.com?subject=Solicita%20o%20programare"
              className="inline-flex min-w-0 items-center gap-2 truncate text-[14px] font-bold tracking-[-0.02em] text-white transition duration-200 hover:opacity-80 sm:text-[16px] lg:text-[22px] lg:tracking-[-0.88px]"
            >
              <span aria-hidden className="text-[16px] sm:text-[18px]">✉</span>
              <span className="truncate">Programeaza-te acum</span>
            </a>
            <nav className="hidden w-[min(100%,980px)] justify-center gap-8 tracking-[-0.01em] lg:flex xl:gap-14 2xl:gap-20">
              <Link href="/">Acasă</Link>
              <Link href="/cazuri">Cazuri</Link>
              <Link href="/tarife">Tarife</Link>
              <Link href="/echipa">Echipa</Link>
              <ServicesDropdown isDark />
              <Link href="/contact">Contact</Link>
            </nav>
            <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((prev) => !prev)} className="flex h-10 w-10 shrink-0 flex-col justify-center gap-[5px] sm:h-12 sm:w-12 sm:gap-[6px]">
              <span ref={menuTopLineRef} className="h-[2px] w-full bg-white" />
              <span ref={menuMidLineRef} className="h-[2px] w-full bg-white" />
              <span ref={menuBottomLineRef} className="h-[2px] w-full bg-white" />
            </button>
          </div>
        </header>
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
