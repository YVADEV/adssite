import Link from "next/link";

import { EMERGENCY_HREF, EMERGENCY_NAV_LABEL } from "@/config/services";

export function EmergencyHeaderButton() {
  return (
    <Link
      href={EMERGENCY_HREF}
      className="ads-btn-emergency-glow inline-flex min-h-[36px] shrink-0 items-center justify-center rounded-full px-3 text-[14px] font-semibold tracking-[-0.02em] transition duration-200 sm:min-h-[40px] sm:px-4 sm:text-[16px]"
    >
      {EMERGENCY_NAV_LABEL}
    </Link>
  );
}
