"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { services } from "@/config/services";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import { MobileMenuLayout } from "@/components/nav/MobileMenuLayout";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteLogo from "@/components/nav/SiteLogo";

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
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openSubmenuSlug, setOpenSubmenuSlug] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 4);
        ticking = false;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      document.body.style.overflow = "hidden";
      gsap.set(overlay, { opacity: 0, scale: 0.98, pointerEvents: "auto" });
      gsap.set(menuItems, { opacity: 0, y: 40 });
      setMenuVisible(true);
      frame = requestAnimationFrame(() => {
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

  useEffect(() => {
    if (!menuOpen) return;

    const overlay = menuOverlayRef.current;
    if (!overlay) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusables = () =>
      Array.from(overlay.querySelectorAll<HTMLElement>(focusableSelector));

    const firstFocus = focusables()[0];
    firstFocus?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setOpenSubmenuSlug(null);
    }
  }, [menuOpen]);

  const prevMenuOpenRef = useRef(false);
  useEffect(() => {
    if (prevMenuOpenRef.current && !menuOpen) {
      menuTriggerRef.current?.focus({ preventScroll: true });
    }
    prevMenuOpenRef.current = menuOpen;
  }, [menuOpen]);

  return (
    <div className="overflow-x-clip bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <div
        ref={menuOverlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Meniu principal"
        aria-hidden={!menuVisible}
        id="mobile-menu"
        className={`fixed inset-0 z-[8888] bg-[#0f1115] ${menuVisible ? "visible" : "pointer-events-none invisible opacity-0"}`}
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1920px] flex-col overflow-y-auto px-6 py-6 md:px-10">
          <div className="flex items-center justify-between">
            <span className="text-[22px] font-bold tracking-[-0.03em] text-white">alverna®</span>
            <button type="button" aria-label="Închide meniul" onClick={() => setMenuOpen(false)} className="relative h-10 w-10">
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ffffff]" />
              <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#ffffff]" />
            </button>
          </div>
          <MobileMenuLayout>
              {[
                { href: "/", label: "Acasă" },
                { href: "/echipa", label: "Echipa" },
                { href: "/cazuri", label: "Cazuri" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  data-menu-item
                  onClick={() => setMenuOpen(false)}
                  className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                aria-label="Deschide lista de servicii"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="ads-btn-no-glow mt-2 flex w-full items-center justify-start gap-3 rounded-[12px] px-3 py-2 text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white"
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
                          aria-expanded={openSubmenuSlug === service.slug}
                          onClick={() =>
                            setOpenSubmenuSlug((prev) => (prev === service.slug ? null : service.slug))
                          }
                          className="ads-btn-no-glow flex min-h-[48px] w-full items-center justify-start gap-2 rounded-[10px] px-2 text-left text-[16px] font-semibold text-white"
                        >
                          <span>{service.title}</span>
                          <span>{openSubmenuSlug === service.slug ? "−" : "+"}</span>
                        </button>
                        <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${openSubmenuSlug === service.slug ? "max-h-[180px] opacity-100" : "max-h-0 opacity-0"}`}>
                          {(service.children ?? []).map((child) => (
                            <Link
                              key={child.slug}
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="block min-h-[48px] rounded-[10px] px-3 py-3 text-left text-[16px] text-white"
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
                        className="block min-h-[48px] rounded-[10px] px-2 py-3 text-left text-[16px] font-medium text-white"
                      >
                        {service.title}
                      </Link>
                    ),
                  )}
                </div>
              </div>

              {[
                { href: "/tarife", label: "Tarife" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  data-menu-item
                  onClick={() => setMenuOpen(false)}
                  className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
                >
                  {item.label}
                </Link>
              ))}
          </MobileMenuLayout>
          <div className="flex flex-col gap-4 pt-6 text-white sm:flex-row sm:items-end sm:justify-between">
            <div className="text-[16px] leading-[1.5]">
              <a href="tel:+40748085933">+40 748 085 933</a>
              <a href="mailto:contact@alvernadental.com">contact@alvernadental.com</a>
            </div>
            <div className="text-right text-[16px] leading-[1.6]">
              <div className="flex justify-end gap-5">
                <a href="/politica-de-confidentialitate">Privacy Policy</a>
                <a href="/termeni-si-conditii">Terms of Service</a>
              </div>
              <p className="mt-1">© Alverna Dental Studio</p>
            </div>
          </div>
        </div>
      </div>
      <div ref={pageContentRef} id="main" tabIndex={-1} className="outline-none">
        <header
          className={`sticky top-0 z-40 h-[68px] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out sm:h-[72px] ${
            scrolled
              ? "bg-[#0f1115]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              : "bg-[#0f1115]"
          }`}
        >
          <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 text-[16px] font-medium sm:px-4 md:px-6 lg:px-8">
            <SiteLogo />
            <nav
              className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center tracking-[-0.01em] lg:flex"
              style={{ columnGap: "clamp(40px, 7vw, 140px)" }}
            >
              {[
                { href: "/", label: "Acasă" },
                { href: "/echipa", label: "Echipa" },
                { href: "/cazuri", label: "Cazuri" },
              ].map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  aria-current={isActive(it.href) ? "page" : undefined}
                  className={`pointer-events-auto transition-opacity duration-200 hover:opacity-75 ${
                    isActive(it.href) ? "underline decoration-2 underline-offset-[10px] opacity-100" : "opacity-90"
                  }`}
                >
                  {it.label}
                </Link>
              ))}
              <span className="pointer-events-auto"><ServicesDropdown isDark /></span>
              <Link
                href="/tarife"
                aria-current={isActive("/tarife") ? "page" : undefined}
                className={`pointer-events-auto transition-opacity duration-200 hover:opacity-75 ${
                  isActive("/tarife") ? "underline decoration-2 underline-offset-[10px] opacity-100" : "opacity-90"
                }`}
              >
                Tarife
              </Link>
              <Link
                href="/contact"
                aria-current={isActive("/contact") ? "page" : undefined}
                className={`pointer-events-auto transition-opacity duration-200 hover:opacity-75 ${
                  isActive("/contact") ? "underline decoration-2 underline-offset-[10px] opacity-100" : "opacity-90"
                }`}
              >
                Contact
              </Link>
            </nav>
            <button
              ref={menuTriggerRef}
              type="button"
              aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-haspopup="dialog"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative z-10 hidden h-10 w-10 shrink-0 max-lg:flex flex-col justify-center gap-[5px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9fc48f] sm:h-12 sm:w-12 sm:gap-[6px]"
            >
              <span ref={menuTopLineRef} className="h-[2px] w-full bg-[#ffffff]" />
              <span ref={menuMidLineRef} className="h-[2px] w-full bg-[#ffffff]" />
              <span ref={menuBottomLineRef} className="h-[2px] w-full bg-[#ffffff]" />
            </button>
          </div>
        </header>
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
