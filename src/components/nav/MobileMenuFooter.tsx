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

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  );
}

const socialLinkClass =
  "inline-flex h-11 w-11 items-center justify-center text-white/80 hover:text-[color:var(--ads-accent)]";

export function MobileMenuFooter({ className = "" }: MobileMenuFooterProps) {
  return (
    <div className={`relative z-20 mt-0 shrink-0 border-t border-white/10 bg-[#0f1115] pt-2.5 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <a href={`tel:${CLINIC.phoneTel}`} className="inline-flex min-h-10 items-center text-[14px] font-medium text-white">
          {CLINIC.phoneDisplay}
        </a>
        <div className="flex items-center">
          <a
            href={CLINIC.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Alverna Dental Studio"
            className={socialLinkClass}
          >
            <FacebookIcon />
          </a>
          <a
            href={CLINIC.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${CLINIC.instagramHandle}`}
            className={socialLinkClass}
          >
            <InstagramIcon />
          </a>
        </div>
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
