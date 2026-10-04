import type { ReactNode } from "react";

type MobileMenuLayoutProps = {
  children: ReactNode;
};

export function MobileMenuLayout({ children }: MobileMenuLayoutProps) {
  return (
    <nav className="relative z-0 flex min-h-0 flex-1 flex-col overflow-hidden" aria-label="Meniu pagini">
      <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain py-2 [scrollbar-width:thin]">
        <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">Navigare</p>
        <div className="flex w-full flex-col gap-2 pb-3">{children}</div>
      </div>
    </nav>
  );
}
