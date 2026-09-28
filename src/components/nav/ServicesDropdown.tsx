"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/config/services";

type ServicesDropdownProps = {
  isDark?: boolean;
};

export default function ServicesDropdown({ isDark = false }: ServicesDropdownProps) {
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/servicii");
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);

  const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));
  const groupedColumns = [
    ["implant-dentar", "chirurgie-dentara", "augmentarea-osoasa", "protetica"],
    ["ortodontie", "aparat-dentar", "estetica-dentara", "fatete-dentare", "coroana-dentara"],
    ["profilaxie", "endodontie", "odontologie", "pedodontie", "urgente-stomatologice", "dentist-cluj"],
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
    }, 170);
  };

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
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
        aria-haspopup="menu"
        aria-current={isServicesActive ? "page" : undefined}
        onFocus={handleOpen}
        className={`text-[18px] font-medium tracking-[-0.01em] transition duration-200 ${
          isServicesActive ? "underline decoration-2 underline-offset-[10px]" : ""
        } ${isDark ? "text-white hover:text-white" : "text-white hover:text-white"}`}
      >
        Servicii
      </button>

      <div
        aria-hidden={!open}
        inert={!open}
        className={`fixed left-1/2 top-[4.75rem] z-[120] w-[min(860px,calc(100vw-2rem))] max-w-[calc(100vw-2rem)] rounded-[20px] border px-6 py-6 backdrop-blur-xl transition-all duration-[220ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:px-10 sm:py-8 ${
          open ? "pointer-events-auto -translate-x-1/2 translate-y-0 opacity-100" : "pointer-events-none -translate-x-1/2 translate-y-[6px] opacity-0"
        } ${isDark ? "border-white/10 bg-[rgba(9,9,9,0.82)] text-white" : "border-black/10 bg-[rgba(245,245,245,0.85)] text-white"}`}
      >
        <div className="grid grid-cols-3 gap-x-10">
          {groupedColumns.map((column, idx) => (
            <div key={`services-column-${idx}`} className="space-y-2">
              {column.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                return (
                  <div key={item.slug} className="relative">
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      onFocus={handleOpen}
                      className={`flex min-h-[40px] items-center justify-between gap-2 rounded-[10px] px-3 py-2 text-[19px] font-medium leading-[1.35] transition duration-200 ${
                        pathname === item.href || pathname.startsWith(`${item.href}`) ? "bg-[#B6B94C]/15 text-white" : ""
                      } ${
                        isDark ? "text-white hover:translate-x-[3px] hover:bg-white/10 hover:text-white" : "ads-text-on-light hover:translate-x-[3px] hover:bg-[#edf2eb]"
                      }`}
                    >
                      <span className="min-w-0 flex-1 text-left">{item.title}</span>
                    </Link>

                    {hasChildren ? (
                      <div className="pl-[16px]">
                        {(item.children ?? []).map((child) => (
                          <Link
                            key={child.slug}
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={`mt-1.5 flex min-h-[36px] items-center rounded-[8px] px-3 py-2 text-[18px] font-normal leading-[1.35] transition duration-200 ${
                              pathname === child.href ? "bg-[#B6B94C]/15 text-white" : ""
                            } ${
                              isDark ? "text-white hover:translate-x-[2px] hover:bg-white/10 hover:text-white" : "ads-text-on-light hover:translate-x-[2px] hover:bg-[#edf2eb]"
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
