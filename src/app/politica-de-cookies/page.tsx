import type { Metadata } from "next";
import Link from "next/link";

import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Politica de cookies",
  description:
    "Cookie-urile folosite pe alvernadental.com: esențiale pentru funcționarea site-ului și, cu acordul tău, analize anonime.",
  path: "/politica-de-cookies/",
});

export default function CookiePolicyPage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#0A0A0A] pb-24 pt-16 md:pt-20 lg:pt-[120px]">
        <article className="mx-auto w-full max-w-[860px] px-4 text-white md:px-8 lg:px-12">
          <p className="text-[21px] font-medium uppercase tracking-[0.18em] text-white">Document legal</p>
          <h1 className="mt-4 text-[40px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[64px]">
            Politica de cookies
          </h1>
          <p className="mt-4 text-[21px] text-white">
            Textul de mai jos este extras din{" "}
            <Link href="/politica-de-confidentialitate/#cookie-uri" className="underline decoration-[#B6B94C]/60 underline-offset-4">
              Politica de confidențialitate
            </Link>
            , secțiunea Cookie-uri. Nu este un document legal nou.
          </p>

          <div className="mt-10 space-y-7 text-[21px] leading-[1.75] text-white">
            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">Cookie-uri</h2>
              <p className="mt-2">
                Folosim cookie-uri esențiale (fără de care site-ul nu funcționează) și, cu acordul tău, cookie-uri
                pentru analize anonime. Poți accepta sau refuza din bannerul afișat la prima vizită.
              </p>
            </section>
            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">Detalii GDPR</h2>
              <p className="mt-2">
                Operatorul de date, temeiul legal, duratele de păstrare și drepturile tale sunt descrise în{" "}
                <Link href="/politica-de-confidentialitate/" className="underline decoration-[#B6B94C]/60 underline-offset-4">
                  Politica de confidențialitate
                </Link>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
    </PrototypeFrame>
  );
}
