import Image from "next/image";
import Link from "next/link";
import caseTeamBanner from "@/assets/cazuri/Banner/case-team-banner.png";

export function CaseTeamBanner() {
  return (
    <section className="mx-auto mt-14 w-full max-w-[1680px] px-4 md:px-8 lg:mt-[120px] lg:px-12">
      <Link href="/echipa/" className="block overflow-hidden rounded-[24px] border border-white/12">
        <Image
          src={caseTeamBanner}
          alt="Alverna Dental Studio — echipa medicală"
          className="h-auto w-full"
          sizes="(max-width: 1680px) 100vw, 1680px"
          priority={false}
        />
      </Link>
    </section>
  );
}
