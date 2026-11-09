import type { ReactNode } from "react";

import { BookingForm } from "@/components/booking/BookingForm";
import { CLINIC } from "@/lib/contact";

export function BookingSection({
  source,
  asideTitle = "Primul pas spre un zâmbet sănătos începe aici.",
  asideBody = "Echipa Alverna Dental Studio te ajută să înțelegi opțiunile de tratament și pașii următori.",
  aside,
}: {
  source: string;
  asideTitle?: string;
  asideBody?: string;
  aside?: ReactNode;
}) {
  return (
    <section
      id="contact"
      data-anim="section"
      className="relative isolate w-full overflow-visible bg-[#0A0A0A] py-20 md:py-[120px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <div className="absolute right-[-120px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#B6B94C] opacity-45 blur-[120px] max-md:right-0 max-md:h-[280px] max-md:w-[280px] max-md:scale-100 max-md:opacity-30 max-md:animate-none [will-change:transform] md:animate-[contact-glow-drift_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1680px] grid-cols-1 gap-12 px-4 md:px-8 lg:grid-cols-[430px_1fr] lg:gap-20 lg:px-[96px]">
        <BookingForm source={source} />
        {aside ?? (
          <div className="pt-0 text-white lg:pt-8">
            <h3 className="max-w-[720px] text-[32px] font-semibold leading-[1.04] tracking-[-0.04em] md:text-[44px]">
              {asideTitle}
            </h3>
            <p className="mt-5 max-w-[680px] text-[21px] leading-[1.65] text-white">{asideBody}</p>
            <a
              href={`tel:${CLINIC.phoneTel}`}
              className="mt-7 inline-flex min-h-[44px] items-center text-[21px] text-white underline decoration-[#B6B94C]/50 underline-offset-4 hover:decoration-white"
            >
              Preferi telefonic? Sună acum
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
