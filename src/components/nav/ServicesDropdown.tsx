"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/config/services";

type ServicesDropdownProps = {
  isDark?: boolean;
};

export default function ServicesDropdown({ isDark = false }: ServicesDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [nestedOpen, setNestedOpen] = useState(false);

  const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));
  const aparatDentar = serviceMap["aparat-dentar"];
  const groupedColumns = [
    ["aparat-dentar", "pedodontie", "dentist-cluj", "odontologie", "urgente-stomatologice", "protetica"],
    ["ortodontie", "profilaxie", "implant-dentar", "chirurgie-dentara", "augmentarea-osoasa"],
    ["estetica-dentara", "fatete-dentare", "coroana-dentara", "endodontie"],
  ]
    .map((group) => group.map((slug) => serviceMap[slug]).filter(Boolean))
    .filter((group) => group.length > 0);

  const clearTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const handleOpen = () => {
    clearTimer();
    setOpen(true);
  };

  const handleCloseWithDelay = () => {
    clearTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setNestedOpen(false);
    }, 170);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setNestedOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setNestedOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
      clearTimer();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative hidden lg:block" onMouseEnter={handleOpen} onMouseLeave={handleCloseWithDelay}>
      <button
        type="button"
        aria-label="Deschide meniul Servicii"
        aria-expanded={open}
        onFocus={handleOpen}
        className={`text-[17px] font-medium tracking-[-0.01em] transition duration-200 ${isDark ? "text-white/90 hover:text-white" : "text-[#0A0A0A] hover:text-[#4E7044]"}`}
      >
        Servicii
      </button>

      <div
        className={`absolute left-1/2 top-[calc(100%+14px)] z-[120] w-[760px] max-w-[92vw] -translate-x-1/2 rounded-[24px] border px-10 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
          open ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-[14px] scale-[0.98] opacity-0"
        } ${isDark ? "border-white/10 bg-[rgba(9,9,9,0.75)] text-white" : "border-black/10 bg-[rgba(245,245,245,0.85)] text-[#0A0A0A]"}`}
      >
        <div className="grid grid-cols-3 gap-x-16">
          {groupedColumns.map((column, idx) => (
            <div key={`services-column-${idx}`} className="space-y-[14px]">
              {column.map((item) => {
                const isAparat = item.slug === "aparat-dentar";
                return (
                  <div
                    key={item.slug}
                    className="relative"
                    onMouseEnter={isAparat ? () => setNestedOpen(true) : undefined}
                    onMouseLeave={isAparat ? () => setNestedOpen(false) : undefined}
                  >
                    <Link
                      href={item.href}
                      onFocus={
                        isAparat
                          ? () => {
                              setOpen(true);
                              setNestedOpen(true);
                            }
                          : undefined
                      }
                      className={`flex h-[34px] items-center justify-between rounded-[10px] px-2 py-1.5 text-[14px] font-medium leading-[1.4] transition duration-200 ${
                        isDark ? "text-white/90 hover:translate-x-[3px] hover:bg-white/10 hover:text-white" : "text-[#0A0A0A] hover:translate-x-[3px] hover:bg-[#edf2eb]"
                      }`}
                    >
                      <span>{item.title}</span>
                      {isAparat ? <span className="text-[11px] opacity-60">›</span> : null}
                    </Link>

                    {isAparat && aparatDentar?.children?.length ? (
                      <div
                        className={`overflow-hidden pl-[16px] transition-[max-height,opacity] duration-300 ease-out ${
                          nestedOpen ? "max-h-[120px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {aparatDentar.children.map((child) => (
                          <Link
                            key={child.slug}
                            href={child.href}
                            className={`mt-[6px] flex h-[30px] items-center rounded-[8px] px-2 text-[13px] font-normal leading-[1.3] transition duration-200 ${
                              isDark ? "text-white/70 hover:translate-x-[2px] hover:bg-white/10 hover:text-white/90" : "text-[#1c1c1c]/70 hover:translate-x-[2px] hover:bg-[#edf2eb]"
                            }`}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
