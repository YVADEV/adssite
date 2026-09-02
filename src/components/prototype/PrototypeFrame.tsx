"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import { MobileMenuNavServices } from "@/components/nav/MobileMenuNavServices";
import { MobileMenuOverlay } from "@/components/nav/MobileMenuOverlay";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteLogo from "@/components/nav/SiteLogo";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useStickyHeaderScroll } from "@/hooks/useStickyHeaderScroll";

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
  const pathname = usePathname();
  const scrolled = useStickyHeaderScroll();

  const {
    menuOpen,
    menuVisible,
    mobileServicesOpen,
    setMobileServicesOpen,
    openSubmenuSlug,
    setOpenSubmenuSlug,
    closeMenu,
    toggleMenu,
  } = useMobileMenu({
    overlayRef: menuOverlayRef,
    pageRef: pageContentRef,
    topLineRef: menuTopLineRef,
    midLineRef: menuMidLineRef,
    bottomLineRef: menuBottomLineRef,
    menuTriggerRef,
  });

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="overflow-x-clip bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <MobileMenuOverlay
        id="mobile-menu"
        overlayRef={menuOverlayRef}
        menuVisible={menuVisible}
        onClose={closeMenu}
      >
        {[
          { href: "/", label: "Acasă" },
          { href: "/echipa", label: "Echipa" },
          { href: "/cazuri", label: "Cazuri" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
          >
            {item.label}
          </Link>
        ))}

        <MobileMenuNavServices
          mobileServicesOpen={mobileServicesOpen}
          setMobileServicesOpen={setMobileServicesOpen}
          openSubmenuSlug={openSubmenuSlug}
          setOpenSubmenuSlug={setOpenSubmenuSlug}
          onCloseMenu={closeMenu}
        />

        {[
          { href: "/tarife", label: "Tarife" },
          { href: "/contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            data-menu-item
            onClick={closeMenu}
            className="block text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]"
          >
            {item.label}
          </Link>
        ))}
      </MobileMenuOverlay>
      <div ref={pageContentRef} id="main" tabIndex={-1} className="outline-none">
        <header
          className={`sticky top-0 z-50 h-[68px] w-full text-white transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out sm:h-[72px] ${
            scrolled
              ? "bg-[#0f1115]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              : "bg-[#0f1115]"
          }`}
        >
          <div className="relative mx-auto flex h-full w-full items-center justify-between px-3 text-[18px] font-medium sm:px-4 md:px-6 lg:px-8">
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
              onClick={toggleMenu}
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
