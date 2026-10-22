"use client";

import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import { LazyVideo } from "@/components/media/LazyVideo";
import { GoogleReviews } from "@/components/reviews/GoogleReviewsMobile";
import { CLINIC } from "@/lib/contact";

const tourismReviews = [
  {
    name: "Andreea Nisipeanu",
    meta: "3 recenzii",
    text: "Recomand cu mare încredere Clinica Alverna Dental! De la prima vizită am fost întâmpinată cu multă căldură și profesionalism. Clinica este impecabil de curată și dotată cu aparatură foarte modernă.",
  },
  {
    name: "Carmen Ilea",
    meta: "4 recenzii",
    text: "Am fost impresionată de profesionalismul d-nei dr Andreea Pârvu. Studioul este foarte curat și dotat cu tehnologie de ultimă generație. Am să revin cu plăcere.",
  },
  {
    name: "Denisa Tănase",
    meta: "2 recenzii",
    text: "Am avut parte de o experiență bună și ușoară. Am fost tratată cu respect și prietenie, mi s-a explicat în detaliu fiecare pas, iar atenția la detalii a fost excelentă.",
  },
];

export default function TurismDentarPage() {
  return (
    <PrototypeFrame>
      <main className="bg-[#ececec] pb-20 pt-10 md:pt-16 lg:pt-[96px]">
        <section className="mx-auto w-full max-w-[1680px] px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:gap-16">
            <p className="text-[21px] font-medium leading-[1.25] text-[#5b5b5b]">(turism dentar)</p>
            <div>
              <p className="text-[21px] font-medium text-[#6b6b6b]">🦷 Turism dentar – Alverna Dental Studio</p>
              <h1 className="mt-3 text-[36px] font-extrabold leading-[0.96] tracking-[-0.045em] text-white md:text-[52px] md:leading-[1.08] md:tracking-[-0.03em] lg:text-[64px]">Turism dentar</h1>
              <p className="mt-5 text-[21px] font-medium text-[#232323]">4,8 ★ · {CLINIC.hoursDisplay}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1680px] px-4 md:px-8 lg:mt-16 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">Introducere</h2>
            <p className="mt-5 max-w-[1120px] text-[21px] leading-[1.65] text-[#2e2e2e]">
              Clinica oferă pachete de turism dentar care combină tratamentele stomatologice cu activități turistice, astfel încât pacienții să beneficieze de servicii medicale de calitate la costuri mai mici și, în același timp, să se bucure de experiența unei vizite în Cluj.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:mt-8 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">🧭 Viziunea</h2>
            <div className="mt-5 space-y-4 text-[21px] leading-[1.65] text-[#2e2e2e]">
              <p>
                Echipa medicală tratează pacienții în clinica din Strada Alverna 33. Titulatura fiecărui medic este cea de pe pagina lui de profil.
              </p>
              <p>
                Clinica recunoaște faptul că accesul la servicii dentare de calitate poate fi dificil chiar și în țări dezvoltate, motiv pentru care oferă soluții accesibile pentru pacienți internaționali.
              </p>
              <p>Turismul dentar este prezentat ca o opțiune tot mai populară datorită raportului excelent între calitate și preț.</p>
              <p>Există un departament dedicat care:</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[21px] leading-[1.6] text-[#2e2e2e]">
              <li>dezvoltă soluții pentru turism dentar</li>
              <li>ajută la organizarea timpului liber între tratamente</li>
            </ul>
            <p className="mt-6 text-[21px] font-semibold leading-[1.5] text-white">👉 Obiectivul: transformarea tratamentelor dentare în mini-vacanțe plăcute pentru pacienți.</p>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:mt-8 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">❓ De ce să alegi Alverna Dental Studio</h2>
            <div className="mt-5 space-y-4 text-[21px] leading-[1.65] text-[#2e2e2e]">
              <p>Turismul dentar a crescut mult în popularitate, inițial datorită prețurilor, dar ulterior și datorită calității serviciilor.</p>
              <p>Clinica se evidențiază prin:</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[21px] leading-[1.6] text-[#2e2e2e]">
              <li>profesionalism</li>
              <li>proceduri moderne</li>
              <li>experiență apreciată de pacienți români și străini</li>
            </ul>
            <p className="mt-6 text-[21px] leading-[1.65] text-[#2e2e2e]">
              Un motiv major pentru popularitatea turismului dentar este combinația dintre: tratamente de înaltă calitate și costuri mai mici decât în alte țări.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:mt-8 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">🌍 Ce oferă concret serviciile</h2>
            <div className="mt-5 space-y-4 text-[21px] leading-[1.65] text-[#2e2e2e]">
              <p>Pacienții internaționali primesc:</p>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[21px] leading-[1.6] text-[#2e2e2e]">
              <li>tratamente stomatologice complete</li>
              <li>planuri personalizate</li>
              <li>suport pentru organizarea șederii</li>
              <li>experiență confortabilă și relaxantă în Cluj</li>
            </ul>
            <p className="mt-6 text-[21px] leading-[1.65] text-[#2e2e2e]">Tratamentul poate include:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-[21px] leading-[1.6] text-[#2e2e2e]">
              <li>implanturi dentare</li>
              <li>coroane</li>
              <li>fațete</li>
              <li>albiri dentare</li>
              <li>aparate dentare</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:mt-8 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">Cazuri mai în detaliu</h2>
              <p className="text-[21px] text-[#666666]">Înainte și după · rezultate reale</p>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-[3px] overflow-hidden rounded-[18px] md:grid-cols-[1fr_1fr_1fr]">
              <article className="relative h-[min(65vw,380px)] bg-black md:h-[520px]">
                <LazyVideo src="/cazuri-1.mp4" poster="/services/exam-male.png" ariaLabel="Caz tratat" />
              </article>
              <article className="relative h-[min(65vw,380px)] bg-black md:h-[520px]">
                <LazyVideo src="/cori-angel.mp4" poster="/services/smile-mirror.png" ariaLabel="Caz tratat" />
              </article>
              <article className="relative h-[min(65vw,380px)] bg-black md:h-[520px]">
                <LazyVideo src="/cazuri-2.mp4" poster="/services/whitening-2.png" ariaLabel="Caz tratat" />
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-6 w-full max-w-[1680px] px-4 md:px-8 lg:mt-8 lg:px-12">
          <div className="rounded-[24px] bg-white p-6 md:p-10 lg:p-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-white md:text-[36px]">Recenzii Google</h2>
              <p className="text-[21px] font-medium text-white">4.8/5 • Google</p>
            </div>
            <div className="mt-7">
              <GoogleReviews reviews={tourismReviews} />
            </div>
          </div>
        </section>
      </main>
    </PrototypeFrame>
  );
}
