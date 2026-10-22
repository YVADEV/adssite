"use client";

import type { Dispatch, SetStateAction } from "react";

import { mobileMenuItemClass } from "@/components/nav/mobileMenuStyles";

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
      className={`${mobileMenuItemClass} ${mobileServicesOpen ? "text-[color:var(--ads-accent)]" : ""}`}
    >
      Servicii
    </button>
  );
}
