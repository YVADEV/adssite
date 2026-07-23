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
  openSubmenuSlug,
  setOpenSubmenuSlug,
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
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          mobileServicesOpen
            ? "pointer-events-auto max-h-[1200px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="pt-2">
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
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
                    openSubmenuSlug === service.slug
                      ? "max-h-[180px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {(service.children ?? []).map((child) => (
                    <Link
                      key={child.slug}
                      href={child.href}
                      onClick={onCloseMenu}
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
                onClick={onCloseMenu}
                className="block min-h-[48px] rounded-[10px] px-2 py-3 text-left text-[16px] font-medium text-white"
              >
                {service.title}
              </Link>
            ),
          )}
        </div>
      </div>
    </>
  );
}
