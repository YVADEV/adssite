import type { ReactNode } from "react";

type MobileMenuLayoutProps = {
  children: ReactNode;
};

export function MobileMenuLayout({ children }: MobileMenuLayoutProps) {
  return (
    <nav className="flex min-h-0 flex-1 flex-col py-5" aria-label="Meniu pagini">
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">Navigare</p>
      <div className="flex w-full flex-col gap-2.5">{children}</div>
    </nav>
  );
}
