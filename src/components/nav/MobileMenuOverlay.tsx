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
      inert={!menuVisible}
      id={id}
      className={`fixed inset-0 z-[10050] isolate bg-[#0f1115] transition-opacity duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        menuVisible ? "opacity-100" : "invisible pointer-events-none opacity-0"
      }`}
    >
      <div className="relative z-10 mx-auto flex h-full min-h-0 w-full max-w-[480px] flex-col overflow-hidden px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div className="flex shrink-0 items-center justify-end pb-2">
          <button
            type="button"
            aria-label="Închide meniul"
            onClick={onClose}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/10"
          >
            <span className="absolute h-[2px] w-4 rotate-45 bg-white" />
            <span className="absolute h-[2px] w-4 -rotate-45 bg-white" />
          </button>
        </div>
        <MobileMenuLayout>{children}</MobileMenuLayout>
        <MobileMenuFooter />
      </div>
    </div>
  );
}
