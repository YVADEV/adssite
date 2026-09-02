import type { ReactNode, RefObject } from "react";
import { MobileMenuFooter } from "@/components/nav/MobileMenuFooter";
import { MobileMenuLayout } from "@/components/nav/MobileMenuLayout";

type MobileMenuOverlayProps = {
  id: string;
  overlayRef: RefObject<HTMLDivElement | null>;
  menuVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function MobileMenuOverlay({
  id,
  overlayRef,
  menuVisible,
  onClose,
  children,
}: MobileMenuOverlayProps) {
  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Meniu principal"
      aria-hidden={!menuVisible}
      id={id}
      className={`fixed inset-0 z-[8888] isolate bg-[#0f1115] ${menuVisible ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
    >
      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[1920px] flex-col overflow-y-auto overscroll-contain px-6 py-6 md:px-10">
        <div className="flex items-center justify-between">
          <span className="text-[22px] font-bold tracking-[-0.03em] text-white">alverna®</span>
          <button type="button" aria-label="Închide meniul" onClick={onClose} className="relative h-10 w-10">
            <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ffffff]" />
            <span className="absolute left-1/2 top-1/2 h-[2px] w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#ffffff]" />
          </button>
        </div>
        <MobileMenuLayout>{children}</MobileMenuLayout>
        <MobileMenuFooter />
      </div>
    </div>
  );
}
