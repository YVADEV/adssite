"use client";

import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

import { services } from "@/config/services";

const primaryItemClass =
  "block w-full text-left text-[clamp(42px,8vw,96px)] font-extrabold leading-[0.95] tracking-[-0.035em] text-white transition duration-250 hover:translate-y-[-2px]";

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
  onCloseMenu,
}: MobileMenuNavServicesProps) {
  return (
    <>
      <button
        type="button"
        data-menu-item
        aria-label="Deschide lista de servicii"
        aria-expanded={mobileServicesOpen}
        onClick={() => setMobileServicesOpen((prev) => !prev)}
        className={primaryItemClass}
      >
        Servicii
      </button>
      <div
        inert={!mobileServicesOpen}
        aria-hidden={!mobileServicesOpen}
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          mobileServicesOpen
            ? "pointer-events-auto max-h-[min(70vh,720px)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="max-h-[min(68vh,700px)] overflow-y-auto overscroll-contain pt-2 pr-1">
          {services
          .filter((service) => service.slug !== "all-on-x")
          .map((service) => (
            <div key={service.slug}>
              <Link
                href={service.href}
                prefetch={false}
                onClick={onCloseMenu}
                className="block min-h-[48px] rounded-[10px] px-2 py-3 text-left text-[21px] font-medium text-white"
              >
                {service.title}
              </Link>
              {(service.children ?? []).map((child) => (
                <Link
                  key={child.slug}
                  href={child.href}
                  prefetch={false}
                  onClick={onCloseMenu}
                  className="block min-h-[44px] rounded-[10px] py-2 pl-6 pr-3 text-left text-[19px] text-white/85"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
