import { CLINIC } from "@/lib/contact";

type MobileMenuFooterProps = {
  className?: string;
};

export function MobileMenuFooter({ className = "" }: MobileMenuFooterProps) {
  return (
    <div
      className={`relative z-20 mt-auto shrink-0 border-t border-white/10 bg-[#0f1115] pt-6 ${className}`}
    >
      <div className="flex flex-col gap-4 text-white sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-2 text-[18px] leading-[1.5] sm:text-[21px]">
          <a href={`tel:${CLINIC.phoneTel}`} className="block hover:opacity-80">
            {CLINIC.phoneDisplay}
          </a>
          <a href={`mailto:${CLINIC.email}`} className="block hover:opacity-80">
            {CLINIC.email}
          </a>
        </div>
        <div className="text-left text-[16px] leading-[1.6] sm:text-right sm:text-[21px]">
          <div className="flex flex-wrap gap-x-5 gap-y-1 sm:justify-end">
            <a href="/politica-de-confidentialitate" className="hover:opacity-80">
              Politica de confidențialitate
            </a>
            <a href="/termeni-si-conditii" className="hover:opacity-80">
              Termeni și condiții
            </a>
          </div>
          <p className="mt-1 opacity-80">© Alverna Dental Studio</p>
        </div>
      </div>
    </div>
  );
}
