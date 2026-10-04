import { CLINIC } from "@/lib/contact";

type MobileMenuFooterProps = {
  className?: string;
};

export function MobileMenuFooter({ className = "" }: MobileMenuFooterProps) {
  const mailto = `mailto:${CLINIC.email}?subject=${encodeURIComponent(CLINIC.mailtoSubject)}`;

  return (
    <div className={`relative z-20 mt-0 shrink-0 border-t border-white/10 bg-[#0f1115] pt-3 ${className}`}>
      <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">Contact</p>
      <div className="grid grid-cols-2 gap-x-3 text-[16px] font-medium text-white">
        <a href={`tel:${CLINIC.phoneTel}`} className="inline-flex min-h-[44px] items-center">
          {CLINIC.phoneDisplay}
        </a>
        <a
          href={CLINIC.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center"
        >
          WhatsApp
        </a>
        <a href={mailto} className="col-span-2 inline-flex min-h-[44px] items-center truncate">
          {CLINIC.email}
        </a>
        <a
          href={CLINIC.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 inline-flex min-h-[44px] items-center truncate"
        >
          Instagram {CLINIC.instagramHandle}
        </a>
      </div>
      <div className="mt-1 flex flex-wrap gap-x-4 text-[13px] text-white/45">
        <a href="/politica-de-confidentialitate" className="inline-flex min-h-[40px] items-center">
          Confidențialitate
        </a>
        <a href="/termeni-si-conditii" className="inline-flex min-h-[40px] items-center">
          Termeni
        </a>
      </div>
    </div>
  );
}
