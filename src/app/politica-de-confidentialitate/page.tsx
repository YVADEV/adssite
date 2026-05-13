import type { Metadata } from "next";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description:
    "Cum colectează, folosește și protejează Alverna Dental Studio datele tale personale, conform GDPR și legislației române.",
  alternates: { canonical: "/politica-de-confidentialitate/" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#0A0A0A] pb-24 pt-16 md:pt-20 lg:pt-[120px]">
        <article className="mx-auto w-full max-w-[860px] px-4 text-white md:px-8 lg:px-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#9fc48f]">Document legal</p>
          <h1 className="mt-4 text-[40px] font-extrabold leading-[0.95] tracking-[-0.03em] md:text-[64px]">
            Politica de confidențialitate
          </h1>
          <p className="mt-4 text-[13px] text-white/55">Ultima actualizare: 13 mai 2026</p>

          <div className="mt-10 space-y-7 text-[15px] leading-[1.75] text-white/85">
            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">1. Operatorul de date</h2>
              <p className="mt-2">
                Alverna Dental Studio, Strada Alverna 33, 400469 Cluj-Napoca, România. Pentru orice solicitare privind
                datele tale personale ne poți scrie la{" "}
                <a href="mailto:contact@alvernadental.com" className="underline decoration-[#9fc48f]/60 underline-offset-4">
                  contact@alvernadental.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">2. Ce date colectăm</h2>
              <ul className="mt-2 space-y-2 pl-5 [list-style:disc] marker:text-[#9fc48f]">
                <li>Datele pe care ni le transmiți prin formularul de contact: nume, telefon, email, serviciu de interes, mesajul tău.</li>
                <li>Date despre vizita pe site (pagini accesate, durată, dispozitiv) — în formă agregată, fără identificare directă.</li>
                <li>Date medicale relevante pentru tratament, pe care ni le furnizezi în cabinet, sub regimul secretului profesional medical.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">3. Pentru ce le folosim</h2>
              <ul className="mt-2 space-y-2 pl-5 [list-style:disc] marker:text-[#9fc48f]">
                <li>Pentru a-ți răspunde la solicitări și a confirma programări.</li>
                <li>Pentru a planifica și a urmări tratamentul tău, dacă alegi să devii pacient.</li>
                <li>Pentru a respecta obligațiile legale (facturare, raportare medicală).</li>
                <li>Pentru a îmbunătăți site-ul prin analize anonime de trafic, cu acordul tău.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">4. Temei legal</h2>
              <p className="mt-2">
                Prelucrăm datele tale pe baza consimțământului tău (formularul de contact), pentru executarea
                contractului medical (când devii pacient), pe baza intereselor noastre legitime (analize anonime de trafic)
                și pentru a ne conforma obligațiilor legale (raportări medicale, fiscale).
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">5. Cât timp păstrăm datele</h2>
              <p className="mt-2">
                Mesajele primite prin formularul de contact: maxim 24 de luni. Datele medicale: minim 5 ani după
                ultima vizită, conform reglementărilor medicale. Datele de facturare: 10 ani, conform legislației fiscale.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">6. Cui transferăm datele</h2>
              <p className="mt-2">
                Datele tale rămân la noi. Folosim furnizori de servicii (hosting, email transactional, analitică
                anonimă) care procesează datele strict pentru noi, în baza unor contracte conform GDPR. Nu vindem
                date și nu le folosim în scopuri de marketing extern.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">7. Drepturile tale</h2>
              <ul className="mt-2 space-y-2 pl-5 [list-style:disc] marker:text-[#9fc48f]">
                <li>Dreptul de acces la propriile date.</li>
                <li>Dreptul la rectificare sau ștergere.</li>
                <li>Dreptul la restricționarea sau opoziția față de prelucrare.</li>
                <li>Dreptul la portabilitatea datelor.</li>
                <li>Dreptul de a depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
                  Caracter Personal (ANSPDCP).</li>
              </ul>
              <p className="mt-2">
                Îți poți exercita aceste drepturi scriindu-ne la adresa de email de mai sus. Răspundem în maxim 30 de zile.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">8. Cookie-uri</h2>
              <p className="mt-2">
                Folosim cookie-uri esențiale (fără de care site-ul nu funcționează) și, cu acordul tău, cookie-uri
                pentru analize anonime. Poți accepta sau refuza din bannerul afișat la prima vizită.
              </p>
            </section>
          </div>
        </article>
      </main>
    </PrototypeFrame>
  );
}
