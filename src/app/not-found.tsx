import Link from "next/link";
import { CLINIC } from "@/lib/contact";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0f1115] px-4 py-20 text-center text-white">
      <p className="text-[21px] font-medium uppercase tracking-[0.12em] text-white/60">404</p>
      <h1 className="mt-4 text-[40px] font-bold leading-[1.05] md:text-[56px]">Pagina nu a fost găsită</h1>
      <p className="mt-4 max-w-[420px] text-[18px] leading-[1.55] text-white/70 md:text-[21px]">
        Linkul nu duce către o pagină din site. Poți reveni acasă, solicita o programare sau suna clinica.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <Link
          href="/"
          className="ads-btn-lit inline-flex min-h-[48px] items-center justify-center rounded-full px-6 text-[21px] font-semibold"
        >
          Înapoi acasă
        </Link>
        <Link
          href={CLINIC.formPageHref}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 px-6 text-[21px] font-semibold text-white"
        >
          Programează o consultație
        </Link>
        <a
          href={`tel:${CLINIC.phoneTel}`}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/25 px-6 text-[21px] font-semibold text-white"
        >
          Sună {CLINIC.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
