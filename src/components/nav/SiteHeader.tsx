"use client";

import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CaseBackLink } from "@/components/cazuri/CaseBackLink";
import { EmergencyNav } from "@/components/nav/EmergencyNav";
import { MobileMenuNavServices } from "@/components/nav/MobileMenuNavServices";
import { MobileMenuOverlay } from "@/components/nav/MobileMenuOverlay";
import { mobileMenuClassForLabel } from "@/components/nav/mobileMenuStyles";
import ServicesDropdown from "@/components/nav/ServicesDropdown";
import SiteLogo from "@/components/nav/SiteLogo";
import { isNavActive, MOBILE_TRAILING_NAV, PRIMARY_NAV, TRAILING_NAV } from "@/config/nav";
import { isFixedTeethNav } from "@/config/services";
import { useMobileMenu } from "@/hooks/useMobileMenu";
import { useStickyHeaderScroll } from "@/hooks/useStickyHeaderScroll";

type SiteHeaderProps = {
  pageContentRef: RefObject<HTMLDivElement | null>;
  introNav?: boolean;
  menuId?: string;
};

export default function SiteHeader({ pageContentRef, introNav = false, menuId = "mobile-menu" }: SiteHeaderProps) {
  const pathname = usePathname();
  const scrolled = useStickyHeaderScroll();
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuTopLineRef = useRef<HTMLSpanElement>(null);
  const menuMidLineRef = useRef<HTMLSpanElement>(null);
  const menuBottomLineRef = useRef<HTMLSpanElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  useEffect(() => {
    setEmergencyOpen(false);
    setServicesOpen(false);
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- close transient UI on route change only
  }, [pathname]);

  const islandExpanded = emergencyOpen || servicesOpen;
  const compact = scrolled;
  const isCaseDetail = pathname.replace(/\/$/, "").startsWith("/cazuri/");

  const handleEmergencyChange = useCallback(
    (open: boolean) => {
      if (open) {
        setServicesOpen(false);
        closeMenu();
      }
      setEmergencyOpen(open);
    },
    [closeMenu],
  );

  const handleServicesChange = useCallback((open: boolean) => {
    if (open) setEmergencyOpen(false);
    setServicesOpen(open);
  }, []);

  const handleToggleMenu = useCallback(() => {
    setEmergencyOpen(false);
    setServicesOpen(false);
    toggleMenu();
  }, [toggleMenu]);

  const navLinkClass = (href: string, label: string) =>
    `pointer-events-auto whitespace-nowrap transition-opacity duration-200 hover:opacity-75 ${
      isFixedTeethNav(label) ? "ads-nav-green-glow" : ""
    } ${isNavActive(pathname, href) ? "underline decoration-2 underline-offset-[10px] opacity-100" : "opacity-90"}`;

  return (
    <>
      <MobileMenuOverlay
        id={menuId}
        overlayRef={menuOverlayRef}
        menuVisible={menuVisible}
        onClose={closeMenu}
        hideChrome
        servicesOpen={mobileServicesOpen}
        onServicesBack={() => {
          setOpenSubmenuSlug(null);
          setMobileServicesOpen(false);
        }}
        openSubmenuSlug={openSubmenuSlug}
        setOpenSubmenuSlug={setOpenSubmenuSlug}
      >
        {PRIMARY_NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            prefetch={false}
            data-menu-item
            onClick={closeMenu}
            className={mobileMenuClassForLabel(item.label)}
            aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
          >
            <span>{item.label}</span>
          </Link>
        ))}
        <MobileMenuNavServices
          panelId={`${menuId}-services`}
          mobileServicesOpen={mobileServicesOpen}
          setMobileServicesOpen={setMobileServicesOpen}
          setOpenSubmenuSlug={setOpenSubmenuSlug}
        />
        {MOBILE_TRAILING_NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            prefetch={false}
            data-menu-item
            onClick={closeMenu}
            className={mobileMenuClassForLabel(item.label)}
            aria-current={isNavActive(pathname, item.href) ? "page" : undefined}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </MobileMenuOverlay>

      <header
        data-intro={introNav ? "nav" : undefined}
        className={`ads-site-header w-full overflow-visible text-white ${compact ? "is-compact" : ""} ${
          islandExpanded ? "is-island-expanded" : ""
        } ${
          scrolled && !compact
            ? "bg-[#0f1115]/92 shadow-[0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md"
            : compact
              ? "bg-transparent"
              : "bg-[#0f1115]"
        }`}
      >
        <div className="ads-island ads-site-header-bar mx-auto px-4 text-[16px] font-medium sm:px-5 md:px-6 md:text-[15px] lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <SiteLogo />
            {isCaseDetail ? <CaseBackLink /> : null}
          </div>
          <nav
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center tracking-[-0.01em] lg:flex"
            style={{ columnGap: compact ? "clamp(16px, 2.4vw, 48px)" : "clamp(20px, 3.6vw, 80px)" }}
          >
            {PRIMARY_NAV.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                prefetch={false}
                aria-current={isNavActive(pathname, it.href) ? "page" : undefined}
                className={navLinkClass(it.href, it.label)}
              >
                {it.label}
              </Link>
            ))}
            <span className="pointer-events-auto">
              <ServicesDropdown isDark open={servicesOpen} onOpenChange={handleServicesChange} />
            </span>
            {TRAILING_NAV.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                prefetch={false}
                aria-current={isNavActive(pathname, it.href) ? "page" : undefined}
                className={navLinkClass(it.href, it.label)}
              >
                {it.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <EmergencyNav open={emergencyOpen} onOpenChange={handleEmergencyChange} />
            <button
              ref={menuTriggerRef}
              type="button"
              aria-label={menuOpen ? "Închide meniul" : "Deschide meniul"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-haspopup="dialog"
              onClick={handleToggleMenu}
              className="relative z-10 flex h-11 w-11 shrink-0 flex-col justify-center gap-[6px] rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--ads-accent)] lg:hidden"
            >
              <span ref={menuTopLineRef} className="ads-menu-line ads-menu-line-top h-[2px] w-full bg-[#ffffff]" />
              <span ref={menuMidLineRef} className="ads-menu-line ads-menu-line-mid h-[2px] w-full bg-[#ffffff]" />
              <span ref={menuBottomLineRef} className="ads-menu-line ads-menu-line-bottom h-[2px] w-full bg-[#ffffff]" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
