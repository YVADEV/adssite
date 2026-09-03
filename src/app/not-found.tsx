import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#0f1115] px-4 py-20 text-center text-white">
      <p className="text-[21px] font-medium uppercase tracking-[0.12em] text-white/60">404</p>
      <h1 className="mt-4 text-[40px] font-bold leading-[1.05] md:text-[56px]">Pagina nu a fost găsită</h1>
      <Link
        href="/"
        className="ads-btn-lit mt-8 inline-flex min-h-[44px] items-center rounded-full px-6 text-[21px] font-semibold"
      >
        Înapoi acasă
      </Link>
    </main>
  );
}
