import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description:
    "Termenii și condițiile de utilizare ale site-ului alvernadental.com și de programare la Alverna Dental Studio.",
  alternates: { canonical: "/termeni-si-conditii/" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#0A0A0A] pb-24 pt-16 md:pt-20 lg:pt-[120px]">
        <article className="mx-auto w-full max-w-[860px] px-4 text-white md:px-8 lg:px-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#9fc48f]">Document legal</p>
          <h1 className="mt-4 text-[40px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[64px]">
            Termeni și condiții
          </h1>
          <p className="mt-4 text-[13px] text-white/55">Ultima actualizare: 13 mai 2026</p>

          <div className="mt-10 space-y-7 text-[15px] leading-[1.75] text-white/85">
            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">1. Despre noi</h2>
              <p className="mt-2">
                Site-ul alvernadental.com este administrat de Alverna Dental Studio, cu sediul în Cluj-Napoca,
                Strada Alverna 33. Pentru întrebări legate de servicii medicale, programări sau acest document,
                ne poți contacta la{" "}
                <a href="mailto:contact@alvernadental.com" className="underline decoration-[#9fc48f]/60 underline-offset-4">
                  contact@alvernadental.com
                </a>{" "}
                sau la 0376 448 810.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">2. Conținutul site-ului</h2>
              <p className="mt-2">
                Informațiile prezentate pe site au caracter de prezentare a serviciilor medicale oferite și nu
                constituie un sfat medical. Diagnosticul și planul de tratament se stabilesc doar în urma unei
                consultații în cabinet.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">3. Drepturi de autor</h2>
              <p className="mt-2">
                Toate textele, imaginile și video-urile de pe site aparțin Alverna Dental Studio sau partenerilor
                noștri și sunt protejate de legea drepturilor de autor. Reproducerea sau republicarea fără acord
                scris este interzisă.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">4. Programări</h2>
              <p className="mt-2">
                Programarea online prin formular reprezintă o solicitare. Confirmarea finală o primești telefonic
                sau prin email, în maxim 24 de ore lucrătoare. Te rugăm să anunți cu cel puțin 24 de ore înainte
                dacă nu mai poți onora programarea.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">5. Tarife</h2>
              <p className="mt-2">
                Tarifele afișate sunt orientative și pot varia în funcție de complexitatea cazului, de materialele
                folosite și de planul de tratament personalizat. Devizul final se discută transparent înainte de
                începerea oricărei intervenții.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">6. Limitarea răspunderii</h2>
              <p className="mt-2">
                Facem eforturi continue să menținem informația de pe site actualizată și corectă, dar nu garantăm
                absența erorilor sau a întreruperilor tehnice. Nu suntem răspunzători pentru pagube indirecte
                rezultate din utilizarea site-ului.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">7. Soluționarea litigiilor</h2>
              <p className="mt-2">
                Orice neînțelegere se va soluționa pe cale amiabilă. În caz contrar, competente sunt instanțele
                judecătorești din Cluj-Napoca, conform legislației din România.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">8. Modificări</h2>
              <p className="mt-2">
                Ne rezervăm dreptul de a actualiza acești termeni. Versiunea curentă este cea afișată pe pagina de
                față, cu data ultimei actualizări menționată mai sus.
              </p>
            </section>
          </div>
        </article>
      </main>
    </PrototypeFrame>
  );
}
