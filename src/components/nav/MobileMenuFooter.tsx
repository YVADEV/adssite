import { CLINIC } from "@/lib/contact";

type MobileMenuFooterProps = {
  className?: string;
};

export function MobileMenuFooter({ className = "" }: MobileMenuFooterProps) {
  const mailto = `mailto:${CLINIC.email}?subject=${encodeURIComponent(CLINIC.mailtoSubject)}`;

  return (
    <div className={`mt-auto shrink-0 border-t border-white/10 pt-5 ${className}`}>
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/45">Contact</p>
      <div className="flex flex-col gap-1 text-[17px] font-medium text-white">
        <a href={`tel:${CLINIC.phoneTel}`} className="inline-flex min-h-[44px] items-center">
          {CLINIC.phoneDisplay}
        </a>
        <a href={mailto} className="inline-flex min-h-[44px] items-center">
          {CLINIC.email}
        </a>
        <a
          href={CLINIC.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center"
        >
          WhatsApp
        </a>
        <a
          href={CLINIC.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center"
        >
          Instagram {CLINIC.instagramHandle}
        </a>
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-white/45">
        <a href="/politica-de-confidentialitate" className="inline-flex min-h-[44px] items-center">
          Confidențialitate
        </a>
        <a href="/termeni-si-conditii" className="inline-flex min-h-[44px] items-center">
          Termeni
        </a>
      </div>
    </div>
  );
}
