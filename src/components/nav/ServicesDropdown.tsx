"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services, type ServiceItem } from "@/config/services";

type ServicesDropdownProps = {
  isDark?: boolean;
};

const ITEM_CLASS =
  "ads-btn-green-glow-sm inline-flex h-11 w-full shrink-0 items-center rounded-full px-4 text-[15px] font-medium leading-none tracking-[-0.02em] text-white";

export default function ServicesDropdown({ isDark = false }: ServicesDropdownProps) {
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/servicii");
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const accordionTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [accordionSlug, setAccordionSlug] = useState<string | null>(null);

  const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));
  const groupedColumns = [
    ["implant-dentar", "all-on-x", "chirurgie-dentara", "augmentarea-osoasa", "protetica"],
    ["ortodontie", "aparat-dentar", "estetica-dentara", "fatete-dentare", "coroana-dentara"],
    ["profilaxie", "endodontie", "odontologie", "pedodontie", "urgente-stomatologice", "dentist-cluj"],
  ]
    .map((group) => group.map((slug) => serviceMap[slug]).filter(Boolean))
    .filter((group) => group.length > 0);

  const clearTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const clearAccordionTimer = () => {
    if (accordionTimerRef.current !== null) {
      window.clearTimeout(accordionTimerRef.current);
      accordionTimerRef.current = null;
    }
  };

  const openAccordion = (slug: string) => {
    clearAccordionTimer();
    setAccordionSlug(slug);
  };

  const closeAccordionWithDelay = () => {
    clearAccordionTimer();
    accordionTimerRef.current = window.setTimeout(() => {
      setAccordionSlug(null);
    }, 120);
  };

  const handleOpen = () => {
    clearTimer();
    setOpen(true);
  };

  const handleCloseWithDelay = () => {
    clearTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setAccordionSlug(null);
    }, 180);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setAccordionSlug(null);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setAccordionSlug(null);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
      clearTimer();
      clearAccordionTimer();
    };
  }, []);

  function renderItem(item: ServiceItem) {
    const children = item.children ?? [];
    const hasAccordion = children.length > 0 && item.slug === "aparat-dentar";
    const accordionOpen = accordionSlug === item.slug;

    if (!hasAccordion) {
      return (
        <Link
          href={item.href}
          prefetch={false}
          role="menuitem"
          aria-current={pathname === item.href ? "page" : undefined}
          onMouseEnter={() => {
            handleOpen();
            closeAccordionWithDelay();
          }}
          onFocus={handleOpen}
          className={ITEM_CLASS}
        >
          <span className="min-w-0 truncate">{item.title}</span>
        </Link>
      );
    }

    return (
      <div
        className="flex flex-col gap-2"
        onMouseEnter={() => {
          handleOpen();
          openAccordion(item.slug);
        }}
        onMouseLeave={closeAccordionWithDelay}
      >
        <div className={`${ITEM_CLASS} justify-between gap-2`}>
          <Link
            href={item.href}
            prefetch={false}
            role="menuitem"
            aria-current={pathname === item.href ? "page" : undefined}
            onFocus={() => {
              handleOpen();
              openAccordion(item.slug);
            }}
            className="flex min-h-11 min-w-0 flex-1 items-center truncate"
          >
            {item.title}
          </Link>
          <span aria-hidden className="pr-0.5 text-[15px] font-normal opacity-55">
            {accordionOpen ? "−" : "+"}
          </span>
        </div>
        <div
          id="servicii-aparat-dentar-submenu"
          role="region"
          aria-label="Alignere și gutieră"
          hidden={!accordionOpen}
          className={`flex flex-col gap-2 overflow-hidden rounded-[18px] border border-[#B6B94C]/45 bg-[#101218] p-2 ${
            accordionOpen ? "" : "hidden"
          }`}
        >
          {children.map((child) => (
            <Link
              key={child.slug}
              href={child.href}
              prefetch={false}
              role="menuitem"
              aria-current={pathname === child.href ? "page" : undefined}
              className={`${ITEM_CLASS} h-10 bg-white/[0.06] text-[14px]`}
            >
              <span className="min-w-0 truncate">{child.title}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative hidden lg:block" onMouseEnter={handleOpen} onMouseLeave={handleCloseWithDelay}>
      <button
        type="button"
        aria-label="Deschide meniul Servicii"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-current={isServicesActive ? "page" : undefined}
        onFocus={handleOpen}
        className={`text-[18px] font-medium tracking-[-0.01em] transition duration-200 ${
          isServicesActive ? "underline decoration-2 underline-offset-[10px]" : ""
        } ${isDark ? "text-white hover:text-white" : "text-white hover:text-white"}`}
      >
        Servicii
      </button>

      <div
        role="menu"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
        inert={!open}
        className={`ads-services-panel fixed left-1/2 top-[80px] z-[120] w-[920px] max-w-[calc(100vw-64px)] origin-top rounded-[28px] border border-white/[0.08] bg-[rgba(12,14,18,0.88)] p-6 backdrop-blur-2xl transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open
            ? "pointer-events-auto -translate-x-1/2 translate-y-0 opacity-100"
            : "pointer-events-none -translate-x-1/2 translate-y-2 opacity-0"
        }`}
      >
        <div className="grid grid-cols-3 gap-x-5">
          {groupedColumns.map((column, idx) => (
            <div key={`services-column-${idx}`} className="ads-services-col flex flex-col gap-2.5">
              {column.map((item) => (
                <div key={item.slug}>{renderItem(item)}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
