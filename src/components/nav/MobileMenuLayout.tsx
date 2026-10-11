import type { ReactNode } from "react";

type MobileMenuLayoutProps = {
  children: ReactNode;
};

export function MobileMenuLayout({ children }: MobileMenuLayoutProps) {
  return (
    <nav className="relative z-0 flex min-h-0 flex-1 flex-col overflow-hidden" aria-label="Meniu pagini">
      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain pt-4 [scrollbar-width:thin]">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">Index</p>
        <div className="ads-menu-index flex w-full flex-col pb-4">{children}</div>
      </div>
    </nav>
  );
}
