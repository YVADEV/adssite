"use client";

import Link from "next/link";
import type { Dispatch, RefObject, SetStateAction } from "react";

import { services } from "@/config/services";
import { mobileMenuIndex, mobileMenuNumClass, mobileMenuOutlineClass } from "@/components/nav/mobileMenuStyles";

type MobileMenuServicesViewProps = {
  panelId: string;
  backRef: RefObject<HTMLButtonElement | null>;
  openSubmenuSlug: string | null;
  setOpenSubmenuSlug: Dispatch<SetStateAction<string | null>>;
  onBack: () => void;
  onCloseMenu: () => void;
};

export function MobileMenuServicesView({
  panelId,
  backRef,
  openSubmenuSlug,
  setOpenSubmenuSlug,
  onBack,
  onCloseMenu,
}: MobileMenuServicesViewProps) {
  const listed = services.filter((service) => service.slug !== "all-on-x");

  return (
    <div id={panelId} className="flex h-full min-h-0 flex-col" role="region" aria-label="Index servicii">
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 pb-3">
        <button
          ref={backRef}
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] text-white/55 hover:text-[color:var(--ads-accent)]"
        >
          <span aria-hidden className="text-[color:var(--ads-accent)]">
            ←
          </span>
          Înapoi
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain pt-4 [scrollbar-width:thin]">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Servicii</p>
        <h2 className="mb-4 text-[clamp(28px,8vw,36px)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          Index servicii
        </h2>
        <nav aria-label="Servicii" className="flex flex-col pb-6">
          {listed.map((service, index) => {
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
                  className={`${mobileMenuOutlineClass} justify-between gap-3`}
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className={mobileMenuNumClass}>{mobileMenuIndex(index + 1)}</span>
                    <span className="min-w-0">{service.title}</span>
                  </span>
                  <span aria-hidden className="text-[14px] text-[color:var(--ads-accent)]/70">
                    →
                  </span>
                </Link>
              );
            }

            return (
              <div key={service.slug} className="flex flex-col">
                <div className={`${mobileMenuOutlineClass} justify-between gap-2`}>
                  <Link
                    href={service.href}
                    prefetch={false}
                    onClick={onCloseMenu}
                    className="flex min-h-12 min-w-0 flex-1 items-center gap-3"
                  >
                    <span className={mobileMenuNumClass}>{mobileMenuIndex(index + 1)}</span>
                    <span className="min-w-0">{service.title}</span>
                  </Link>
                  <button
                    type="button"
                    aria-label={accordionOpen ? "Închide Alignere și gutieră" : "Deschide Alignere și gutieră"}
                    aria-expanded={accordionOpen}
                    onClick={() => setOpenSubmenuSlug((current) => (current === service.slug ? null : service.slug))}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-[16px] font-normal text-[color:var(--ads-accent)]"
                  >
                    <span aria-hidden>{accordionOpen ? "−" : "+"}</span>
                  </button>
                </div>
                <div
                  hidden={!accordionOpen}
                  className={`ml-10 flex flex-col border-l border-white/12 pl-3 ${accordionOpen ? "" : "hidden"}`}
                >
                  {children.map((child) => (
                    <Link
                      key={child.slug}
                      href={child.href}
                      prefetch={false}
                      onClick={onCloseMenu}
                      className={`${mobileMenuOutlineClass} min-h-11 justify-between text-[15px] font-normal text-white/70`}
                    >
                      <span>{child.title}</span>
                      <span aria-hidden className="text-[13px] text-[color:var(--ads-accent)]/70">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
