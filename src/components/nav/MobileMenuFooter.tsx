import { CLINIC } from "@/lib/contact";

type MobileMenuFooterProps = {
  className?: string;
};

function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MobileMenuFooter({ className = "" }: MobileMenuFooterProps) {
  return (
    <div className={`relative z-20 mt-0 shrink-0 border-t border-white/10 bg-[#0f1115] pt-2.5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <a href={`tel:${CLINIC.phoneTel}`} className="inline-flex min-h-10 items-center text-[14px] font-medium text-white">
          {CLINIC.phoneDisplay}
        </a>
        <a
          href={CLINIC.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram ${CLINIC.instagramHandle}`}
          className="inline-flex h-11 w-11 items-center justify-center text-white/80 hover:text-[color:var(--ads-accent)]"
        >
          <InstagramIcon />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-end gap-x-4 text-[12px] text-white/50">
        <a href="/politica-de-confidentialitate" className="inline-flex min-h-9 items-center">
          Politica de confidențialitate
        </a>
        <a href="/termeni-si-conditii" className="inline-flex min-h-9 items-center">
          Termeni
        </a>
      </div>
    </div>
  );
}
