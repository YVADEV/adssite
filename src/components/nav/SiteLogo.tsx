import Image from "next/image";
import Link from "next/link";

import navLogo from "@/assets/alverna-nav-logo.png";

type SiteLogoProps = {
  className?: string;
};

export default function SiteLogo({ className = "" }: SiteLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Alverna Dental Studio — Acasă"
      className={`relative z-10 inline-flex shrink-0 items-center transition duration-200 hover:opacity-80 ${className}`}
    >
      <Image
        src={navLogo}
        alt="Alverna Dental Studio"
        priority
        className="h-[26px] w-auto object-contain sm:h-[30px] lg:h-[34px]"
      />
    </Link>
  );
}
