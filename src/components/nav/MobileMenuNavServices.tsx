"use client";

import type { Dispatch, SetStateAction } from "react";

import {
  mobileMenuIndex,
  mobileMenuItemClass,
  mobileMenuNumClass,
} from "@/components/nav/mobileMenuStyles";

type MobileMenuNavServicesProps = {
  panelId: string;
  mobileServicesOpen: boolean;
  setMobileServicesOpen: Dispatch<SetStateAction<boolean>>;
  setOpenSubmenuSlug: Dispatch<SetStateAction<string | null>>;
};

export function MobileMenuNavServices({
  panelId,
  mobileServicesOpen,
  setMobileServicesOpen,
  setOpenSubmenuSlug,
}: MobileMenuNavServicesProps) {
  return (
    <button
      type="button"
      data-menu-item
      data-menu-services-trigger
      aria-label="Deschide lista de servicii"
      aria-expanded={mobileServicesOpen}
      aria-controls={panelId}
      onClick={() => {
        setOpenSubmenuSlug(null);
        setMobileServicesOpen(true);
      }}
      className={`${mobileMenuItemClass} justify-between ${mobileServicesOpen ? "text-[color:var(--ads-accent)]" : ""}`}
    >
      <span className="flex min-w-0 items-center gap-3">
        <span className={mobileMenuNumClass}>{mobileMenuIndex(5)}</span>
        <span>Servicii</span>
      </span>
      <span aria-hidden className="text-[16px] font-normal text-white/40">
        →
      </span>
    </button>
  );
}
