"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/nav/SiteHeader";

type PrototypeFrameProps = {
  children: ReactNode;
  darkHeader?: boolean;
};

export default function PrototypeFrame({ children }: PrototypeFrameProps) {
  const pageContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-w-0 bg-[#0f1115] text-white [scroll-behavior:smooth]">
      <div ref={pageContentRef} id="main" tabIndex={-1} className="outline-none">
        <SiteHeader pageContentRef={pageContentRef} />
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
