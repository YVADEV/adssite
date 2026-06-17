import type { ReactNode } from "react";
import menuClinicPhoto from "@/assets/menu-clinic-photo.png";

type MobileMenuLayoutProps = {
  children: ReactNode;
};

export function MobileMenuLayout({ children }: MobileMenuLayoutProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-8 md:grid md:grid-cols-[1fr_minmax(240px,42%)] md:items-center md:gap-10">
      <nav className="order-1 flex flex-1 flex-col justify-center md:order-1">
        <div className="w-full max-w-[760px] pl-[4vw] text-left md:pl-[6vw] lg:pl-[8vw] [&_a]:text-left [&_button]:justify-start [&_button]:text-left">
          {children}
        </div>
      </nav>
      <div className="relative order-2 mx-auto w-full max-w-[340px] shrink-0 overflow-hidden rounded-[16px] md:order-2 md:mx-0 md:max-w-none md:justify-self-end md:self-stretch">
        <img
          src={menuClinicPhoto.src}
          alt="Echipa Alverna Dental Studio în timpul unui tratament"
          className="aspect-[682/1024] h-full w-full object-cover object-[center_38%] md:max-h-[calc(100vh-220px)]"
        />
      </div>
    </div>
  );
}
