"use client";

import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

import { services } from "@/config/services";
import { mobileMenuItemClass, mobileMenuOutlineClass } from "@/components/nav/mobileMenuStyles";

type MobileMenuNavServicesProps = {
  mobileServicesOpen: boolean;
  setMobileServicesOpen: Dispatch<SetStateAction<boolean>>;
  openSubmenuSlug: string | null;
  setOpenSubmenuSlug: Dispatch<SetStateAction<string | null>>;
  onCloseMenu: () => void;
};

export function MobileMenuNavServices({
  mobileServicesOpen,
  setMobileServicesOpen,
  openSubmenuSlug,
  setOpenSubmenuSlug,
  onCloseMenu,
}: MobileMenuNavServicesProps) {
  return (
    <>
      <button
        type="button"
        data-menu-item
        aria-label={mobileServicesOpen ? "Închide lista de servicii" : "Deschide lista de servicii"}
        aria-expanded={mobileServicesOpen}
        onClick={() => {
          setMobileServicesOpen((prev) => !prev);
          if (mobileServicesOpen) setOpenSubmenuSlug(null);
        }}
        className={`${mobileMenuItemClass} justify-between`}
      >
        <span>Servicii</span>
        <span aria-hidden className="text-[18px] font-normal opacity-50">
          {mobileServicesOpen ? "−" : "+"}
        </span>
      </button>
      <div
        inert={!mobileServicesOpen}
        aria-hidden={!mobileServicesOpen}
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
          mobileServicesOpen
            ? "pointer-events-auto max-h-[min(52vh,560px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="ml-1 flex max-h-[min(50vh,540px)] flex-col gap-1.5 overflow-y-auto overscroll-contain border-l border-white/12 py-1 pl-3">
          {services
            .filter((service) => service.slug !== "all-on-x")
            .map((service) => {
              const children = service.children ?? [];
              const hasAccordion = children.length > 0 && service.slug === "aparat-dentar";
              const accordionOpen = openSubmenuSlug === service.slug;

              if (!hasAccordion) {
                return (
                  <Link
                    key={service.slug}
                    href={service.href}
                    prefetch={false}
                    onClick={onCloseMenu}
                    className={mobileMenuOutlineClass}
                  >
                    {service.title}
                  </Link>
                );
              }

              return (
                <div key={service.slug} className="flex flex-col gap-1.5">
                  <div className={`${mobileMenuOutlineClass} justify-between gap-2`}>
                    <Link
                      href={service.href}
                      prefetch={false}
                      onClick={onCloseMenu}
                      className="flex min-h-[44px] min-w-0 flex-1 items-center truncate"
                    >
                      {service.title}
                    </Link>
                    <button
                      type="button"
                      aria-label={accordionOpen ? "Închide Alignere și gutieră" : "Deschide Alignere și gutieră"}
                      aria-expanded={accordionOpen}
                      onClick={() => setOpenSubmenuSlug((current) => (current === service.slug ? null : service.slug))}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[16px] font-normal opacity-55"
                    >
                      <span aria-hidden>{accordionOpen ? "−" : "+"}</span>
                    </button>
                  </div>
                  <div
                    hidden={!accordionOpen}
                    className={`ml-2 flex flex-col gap-1.5 border-l border-white/15 pl-3 ${accordionOpen ? "" : "hidden"}`}
                  >
                    {children.map((child) => (
                      <Link
                        key={child.slug}
                        href={child.href}
                        prefetch={false}
                        onClick={onCloseMenu}
                        className={`${mobileMenuOutlineClass} min-h-[44px] text-[15px] font-normal text-white/80`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
