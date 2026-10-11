import type { ReactNode } from "react";

type MobileMenuLayoutProps = {
  children: ReactNode;
};

export function MobileMenuLayout({ children }: MobileMenuLayoutProps) {
  return (
    <nav className="relative z-0 flex min-h-0 flex-1 flex-col overflow-hidden" aria-label="Meniu pagini">
      <div className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain pt-3 [scrollbar-width:thin]">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">Index</p>
        <div className="ads-menu-index flex w-full flex-col">{children}</div>
      </div>
    </nav>
  );
}
