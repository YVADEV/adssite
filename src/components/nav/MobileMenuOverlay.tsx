"use client";

import { useEffect, useRef, type Dispatch, type ReactNode, type RefObject, type SetStateAction } from "react";

import { MobileMenuFooter } from "@/components/nav/MobileMenuFooter";
import { MobileMenuLayout } from "@/components/nav/MobileMenuLayout";
import { MobileMenuServicesView } from "@/components/nav/MobileMenuServicesView";
import SiteLogo from "@/components/nav/SiteLogo";

type MobileMenuOverlayProps = {
  id: string;
  overlayRef: RefObject<HTMLDivElement | null>;
  menuVisible: boolean;
  onClose: () => void;
  servicesOpen: boolean;
  onServicesBack: () => void;
  openSubmenuSlug: string | null;
  setOpenSubmenuSlug: Dispatch<SetStateAction<string | null>>;
  children: ReactNode;
};

export function MobileMenuOverlay({
  id,
  overlayRef,
  menuVisible,
  onClose,
  servicesOpen,
  onServicesBack,
  openSubmenuSlug,
  setOpenSubmenuSlug,
  children,
}: MobileMenuOverlayProps) {
  const servicesBackRef = useRef<HTMLButtonElement>(null);
  const wasServicesOpenRef = useRef(false);
  const servicesPanelId = `${id}-services`;

  useEffect(() => {
    if (!menuVisible) {
      wasServicesOpenRef.current = false;
      return;
    }
    if (servicesOpen) {
      servicesBackRef.current?.focus({ preventScroll: true });
      wasServicesOpenRef.current = true;
      return;
    }
    if (wasServicesOpenRef.current) {
      const trigger = overlayRef.current?.querySelector<HTMLElement>("[data-menu-services-trigger]");
      trigger?.focus({ preventScroll: true });
      wasServicesOpenRef.current = false;
    }
  }, [menuVisible, overlayRef, servicesOpen]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Meniu principal"
      aria-hidden={!menuVisible}
      inert={!menuVisible}
      id={id}
      className={`ads-menu-overlay fixed inset-0 z-[10050] isolate h-[100dvh] bg-[#0f1115] ${
        menuVisible ? "ads-menu-overlay-open" : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[480px] flex-col overflow-hidden px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 pb-3">
          <SiteLogo />
          <button
            type="button"
            aria-label="Închide meniul"
            onClick={onClose}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(255,255,255,0.06)]"
          >
            <span className="absolute h-[2px] w-4 rotate-45 bg-[#ffffff]" />
            <span className="absolute h-[2px] w-4 -rotate-45 bg-[#ffffff]" />
          </button>
        </div>
        <div className="relative min-h-0 flex-1">
          <div
            className={`ads-menu-pane ads-menu-pane-main absolute inset-0 flex min-h-0 flex-col ${
              servicesOpen ? "is-away" : ""
            }`}
            inert={servicesOpen}
            aria-hidden={servicesOpen}
          >
            <MobileMenuLayout>{children}</MobileMenuLayout>
            <MobileMenuFooter />
          </div>
          <div
            className={`ads-menu-pane ads-menu-pane-services absolute inset-0 flex min-h-0 flex-col ${
              servicesOpen ? "is-in" : ""
            }`}
            inert={!servicesOpen}
            aria-hidden={!servicesOpen}
          >
            <MobileMenuServicesView
              panelId={servicesPanelId}
              backRef={servicesBackRef}
              openSubmenuSlug={openSubmenuSlug}
              setOpenSubmenuSlug={setOpenSubmenuSlug}
              onBack={onServicesBack}
              onCloseMenu={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
