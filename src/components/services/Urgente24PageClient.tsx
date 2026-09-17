"use client";

import { CLINIC } from "@/lib/contact";

const emergencyTypes = [
  {
    title: "Durere dentară acută",
    body: "Durere intensă, spontană sau pulsatilă, durere care te trezește din somn, durere accentuată la masticație ori sensibilitate severă la rece sau cald. În funcție de cauză, medicul poate interveni pentru controlul durerii și stabilizarea dintelui. Tratamentul definitiv poate continua ulterior, dacă este necesar.",
  },
  {
    title: "Urgențe endodontice",
    body: "Putem evalua inflamația pulpei dentare, durerea de origine endodontică, durerea apărută la un dinte aflat în tratament de canal sau alte complicații endodontice acute. Intervenția de urgență poate avea ca obiectiv reducerea durerii și stabilizarea situației. Tratamentul endodontic complet se continuă, de regulă, într-o programare ulterioară.",
  },
  {
    title: "Abces dentar sau infecție localizată",
    body: "Durerea asociată cu inflamație sau umflătură localizată necesită evaluare medicală. Medicul va stabili dacă situația poate fi gestionată în siguranță în cabinet sau dacă este necesară adresarea către un serviciu medical ori spitalicesc de urgență.",
  },
  {
    title: "Dinte fracturat sau fisurat",
    body: "Un dinte fracturat poate deveni foarte dureros, mai ales dacă fractura afectează structurile profunde. În regim de urgență putem evalua situația, controla durerea și, atunci când este posibil, proteja temporar dintele până la tratamentul definitiv.",
  },
  {
    title: "Obturație căzută sau fracturată",
    body: "Dacă pierderea unei obturații determină durere, sensibilitate importantă sau disconfort accentuat, situația poate necesita intervenție de urgență. În funcție de caz, poate fi realizată o soluție temporară sau definitivă.",
  },
  {
    title: "Coroană sau punte dentară decimentată",
    body: "O coroană sau o punte care s-a desprins poate fi evaluată în regim de urgență, în special dacă provoacă durere, sensibilitate sau afectează semnificativ funcția. Recimentarea se realizează numai atunci când situația clinică permite acest lucru.",
  },
  {
    title: "Traumatisme dentare",
    body: "Loviturile la nivelul dinților pot produce fracturarea, mobilizarea sau deplasarea unui dinte. În anumite traumatisme, timpul până la intervenție poate influența opțiunile de tratament. În cazul traumatismelor cranio-faciale importante, pacientul va fi îndrumat către serviciul medical corespunzător.",
  },
  {
    title: "Dinte permanent ieșit complet în urma unui traumatism",
    body: "Aceasta este o situație în care timpul este important. Sună imediat pentru instrucțiuni și evaluarea situației. Nu amâna contactul până în ziua următoare.",
  },
  {
    title: "Durere după extracție sau alt tratament stomatologic",
    body: "Durerea severă sau care se accentuează după o extracție ori altă intervenție stomatologică poate necesita evaluare. Pot fi evaluate inclusiv anumite complicații postextracționale, precum suspiciunea de alveolită.",
  },
  {
    title: "Sângerare după o intervenție stomatologică",
    body: "O sângerare persistentă după extracție sau altă procedură trebuie evaluată. Dacă sângerarea este abundentă și nu poate fi controlată sau este însoțită de alterarea stării generale, solicită asistență medicală de urgență.",
  },
  {
    title: "Urgențe ortodontice",
    body: "Putem interveni în anumite situații precum un arc ortodontic care traumatizează mucoasa, un bracket desprins sau alte elemente ale aparatului care produc durere ori leziuni. În regim de urgență poate fi realizată o soluție temporară. Tratamentul ortodontic propriu-zis continuă ulterior cu medicul ortodont.",
  },
  {
    title: "Probleme acute ale lucrărilor pe implanturi",
    body: "Durerea, inflamația sau mobilitatea unei componente protetice pe implant necesită evaluare. Intervenția posibilă în regim de urgență depinde de situația clinică și de tipul lucrării existente.",
  },
];

const steps = [
  {
    n: "1",
    title: "Ne contactezi telefonic",
    body: "Suni la numărul clinicii și descrii pe scurt problema.",
  },
  {
    n: "2",
    title: "Medicul evaluează telefonic situația",
    body: "Îți vom adresa câteva întrebări despre durere, umflătură, sângerare, traumatism, starea generală și istoricul medical relevant. Această discuție este un triaj preliminar și nu înlocuiește consultația din clinică.",
  },
  {
    n: "3",
    title: "Stabilim dacă este necesară prezentarea la clinică",
    body: "Medicul poate recomanda prezentarea la Alverna Dental Studio în regim de urgență, programarea în timpul programului obișnuit sau adresarea către un serviciu medical ori spitalicesc de urgență.",
  },
  {
    n: "4",
    title: "Primești confirmarea",
    body: "Dacă este stabilită prezentarea la clinică, vei primi ora aproximativă sau confirmată și, atunci când situația permite, un formular scurt cu informațiile necesare înaintea consultației.",
  },
  {
    n: "5",
    title: "Medicul se deplasează la clinică",
    body: "În afara programului obișnuit, medicul nu se află permanent în cabinet. Se deplasează pentru urgența confirmată. Nu veni la clinică înainte de confirmarea telefonică.",
  },
  {
    n: "6",
    title: "Evaluăm și tratăm urgența",
    body: "După examinarea clinică și investigațiile necesare, medicul stabilește diagnosticul și opțiunile de intervenție. Obiectivul este controlul problemei acute, reducerea durerii atunci când este posibil și stabilizarea situației. Tratamentul definitiv poate necesita programări ulterioare.",
  },
];

function CallButton({ label = "Sună acum" }: { label?: string }) {
  return (
    <a
      href={`tel:${CLINIC.phoneTel}`}
      className="ads-btn-emergency-glow inline-flex w-fit max-w-full shrink-0 items-center justify-center self-start rounded-full px-5 text-[16px] font-semibold sm:min-h-[48px] sm:px-6 sm:text-[18px] min-h-[46px]"
    >
      {label}
    </a>
  );
}

export default function Urgente24PageClient() {
  return (
    <main className="bg-[#0A0A0A] pb-24 text-white">
      <section className="relative overflow-hidden px-4 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:px-12">
        <div
          aria-hidden
          className="ads-emergency-backglow pointer-events-none absolute right-[-140px] top-[-80px] h-[420px] w-[420px] rounded-full blur-[120px]"
        />
        <div className="relative mx-auto w-full max-w-[1100px]">
          <p className="text-[16px] font-medium uppercase tracking-[0.16em] text-[#c45c52] sm:text-[18px]">
            Programare telefonică prealabilă
          </p>
          <h1 className="mt-4 max-w-[920px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[48px] md:text-[64px] lg:text-[76px]">
            Urgențe stomatologice 24/7 în Cluj-Napoca
          </h1>
          <p className="mt-6 max-w-[760px] text-[18px] leading-[1.65] text-white/85 sm:text-[21px]">
            Ai o urgență dentară care nu poate aștepta până la programul obișnuit al clinicii? Alverna Dental Studio
            oferă un serviciu de urgențe stomatologice disponibil 24/7, inclusiv seara, noaptea, în weekend și în zilele
            libere.
          </p>
          <p className="mt-4 max-w-[760px] text-[18px] leading-[1.65] text-white/85 sm:text-[21px]">
            În afara programului obișnuit, serviciul funcționează exclusiv cu programare telefonică prealabilă. Medicul
            nu este prezent permanent în clinică, ci se deplasează la cabinet după evaluarea telefonică a situației și
            confirmarea programării.
          </p>
          <p className="mt-5 max-w-[760px] rounded-[16px] border border-[#c45c52]/45 bg-[#c45c52]/10 px-5 py-4 text-[18px] font-semibold leading-[1.5] sm:text-[21px]">
            Nu te deplasa la clinică înainte de confirmarea telefonică a programării.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton label={`Sună acum: ${CLINIC.phoneDisplay}`} />
            <p className="text-[16px] leading-[1.5] text-white/70 sm:text-[18px]">
              Disponibil 24/7. Prezentarea la clinică se face după evaluarea telefonică și confirmarea medicului.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1100px] px-4 md:px-8 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">
          Cu ce urgențe stomatologice te putem ajuta?
        </h2>
        <p className="mt-4 max-w-[760px] text-[18px] leading-[1.65] text-white/80 sm:text-[21px]">
          Serviciul este destinat problemelor dentare acute care necesită evaluare sau intervenție într-un interval scurt
          și care nu pot fi amânate în siguranță până la o programare obișnuită.
        </p>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {emergencyTypes.map((item) => (
            <details key={item.title} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[20px] font-semibold leading-[1.25] tracking-[-0.02em] sm:text-[24px] [&::-webkit-details-marker]:hidden">
                {item.title}
                <span aria-hidden className="pt-0.5 text-[22px] leading-none text-white/60 group-open:hidden">
                  +
                </span>
                <span aria-hidden className="hidden pt-0.5 text-[22px] leading-none text-white/60 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 max-w-[760px] text-[18px] leading-[1.65] text-white/75 sm:text-[21px]">{item.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">
          Ce NU tratăm în regim de urgență 24/7?
        </h2>
        <div className="mt-5 max-w-[760px] space-y-4 text-[18px] leading-[1.65] text-white/80 sm:text-[21px]">
          <p>
            Serviciul 24/7 este destinat urgențelor stomatologice, nu tratamentelor care pot fi programate în timpul
            programului obișnuit.
          </p>
          <p>
            În această etapă a serviciului, nu efectuăm în regim on-call extracții complicate sau intervenții de
            chirurgie dento-alveolară complexă.
          </p>
          <p>
            Consultațiile de rutină, igienizările profesionale, tratamentele estetice, lucrările protetice elective și
            alte tratamente fără caracter de urgență vor fi programate în timpul programului obișnuit al clinicii.
          </p>
          <p>
            Dacă situația necesită o intervenție care nu poate fi realizată în siguranță în cadrul serviciului on-call,
            medicul îți va explica pașii următori și te va îndruma către serviciul medical corespunzător.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">
          Cum funcționează serviciul de urgențe 24/7?
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[18px] border border-white/12 bg-white/5 p-5">
              <p className="text-[16px] font-semibold uppercase tracking-[0.14em] text-[#c45c52]">Pasul {step.n}</p>
              <h3 className="mt-2 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[18px] leading-[1.6] text-white/75 sm:text-[20px]">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <CallButton label={`Sună: ${CLINIC.phoneDisplay}`} />
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">
          Când trebuie să apelezi 112?
        </h2>
        <p className="mt-4 max-w-[760px] text-[18px] leading-[1.65] text-white/80 sm:text-[21px]">
          Există situații care pot depăși o urgență stomatologică obișnuită. Solicită asistență medicală de urgență dacă
          apar:
        </p>
        <ul className="mt-5 max-w-[760px] list-disc space-y-2 pl-6 text-[18px] leading-[1.6] text-white/80 sm:text-[21px]">
          <li>dificultăți de respirație;</li>
          <li>dificultăți importante la înghițire;</li>
          <li>umflarea importantă sau rapid progresivă a feței ori gâtului;</li>
          <li>sângerare abundentă care nu poate fi controlată;</li>
          <li>traumatism important al feței sau capului;</li>
          <li>pierderea stării de conștiență;</li>
          <li>stare generală sever alterată sau alte simptome care sugerează o urgență medicală majoră.</li>
        </ul>
        <p className="mt-5 max-w-[760px] text-[18px] font-semibold leading-[1.6] sm:text-[21px]">
          În asemenea situații, apelează 112 sau adresează-te serviciului spitalicesc de urgență corespunzător.
        </p>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">
          Tarife pentru urgențele în afara programului
        </h2>
        <div className="mt-5 max-w-[760px] space-y-4 text-[18px] leading-[1.65] text-white/80 sm:text-[21px]">
          <p>
            Pentru activarea serviciului și deplasarea medicului la clinică în afara programului standard se percepe o
            taxă de urgență on-call, distinctă de costul tratamentului.
          </p>
          <p>
            Consultația, investigațiile și procedurile se tarifează separat, în funcție de situația clinică. Costurile
            relevante îți vor fi comunicate telefonic, înaintea prezentării și a procedurilor, în măsura în care
            situația de urgență permite acest lucru.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px] md:text-[44px]">Întrebări frecvente</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {[
            {
              q: "Este medicul permanent în clinică 24/7?",
              a: "Nu. În afara programului obișnuit, serviciul funcționează în regim on-call. Medicul evaluează inițial solicitarea telefonic și se deplasează la clinică atunci când este stabilită necesitatea unei consultații de urgență.",
            },
            {
              q: "Pot veni direct la clinică dacă mă doare un dinte?",
              a: "În afara programului obișnuit, nu. Este necesar să ne contactezi și să primești confirmarea înainte de prezentare.",
            },
            {
              q: "Îmi veți termina tratamentul în aceeași noapte?",
              a: "Depinde de diagnostic. Într-o urgență, prioritatea poate fi controlul durerii și stabilizarea problemei. Tratamentul definitiv poate necesita continuarea în timpul programului obișnuit.",
            },
            {
              q: "Faceți tratamente de canal în regim de urgență?",
              a: "Putem realiza intervenții endodontice de urgență atunci când sunt indicate. În funcție de situație, tratamentul complet poate fi finalizat într-o programare ulterioară.",
            },
            {
              q: "Faceți extracții noaptea?",
              a: "În etapa actuală a serviciului, extracțiile complicate și intervențiile chirurgicale complexe nu sunt incluse în serviciul on-call. Medicul va evalua situația și va stabili conduita potrivită.",
            },
            {
              q: "Primesc antibiotic dacă am o infecție dentară?",
              a: "Necesitatea unui antibiotic este stabilită de medic după evaluarea situației. Antibioticul nu este necesar pentru orice durere dentară și nu înlocuiește tratamentul cauzei.",
            },
            {
              q: "Pot solicita serviciul dacă nu sunt pacient Alverna?",
              a: "Da. Serviciul de urgențe este disponibil și pacienților care nu au mai fost tratați anterior în clinica noastră.",
            },
            {
              q: "Ce trebuie să am la mine?",
              a: "Un act de identitate și, dacă sunt relevante, informații despre afecțiunile medicale, tratamentele medicamentoase curente și investigațiile stomatologice recente.",
            },
          ].map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-[20px] font-semibold leading-[1.25] sm:text-[24px] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="pt-0.5 text-[22px] leading-none text-white/60 group-open:hidden">
                  +
                </span>
                <span aria-hidden className="hidden pt-0.5 text-[22px] leading-none text-white/60 group-open:inline">
                  −
                </span>
              </summary>
              <p className="mt-3 max-w-[760px] text-[18px] leading-[1.65] text-white/75 sm:text-[21px]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 w-full max-w-[1100px] px-4 md:px-8 lg:mt-20 lg:px-12">
        <div className="rounded-[24px] border border-[#c45c52]/40 bg-[#c45c52]/10 p-6 md:p-10">
          <h2 className="text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">Ai o urgență dentară?</h2>
          <p className="mt-4 max-w-[720px] text-[18px] leading-[1.65] text-white/85 sm:text-[21px]">
            Nu este nevoie să fii deja pacient Alverna Dental Studio. Contactează medicul înainte de a te deplasa la
            clinică.
          </p>
          <div className="mt-7">
            <CallButton label={`Sună acum — ${CLINIC.phoneDisplay}`} />
          </div>
          <p className="mt-6 text-[18px] leading-[1.6] text-white/75 sm:text-[21px]">
            Alverna Dental Studio
            <br />
            {CLINIC.addressShort}
          </p>
          <p className="mt-3 text-[16px] leading-[1.55] text-white/60 sm:text-[18px]">
            Serviciu disponibil 24/7, cu programare telefonică prealabilă. Medicul nu este prezent permanent în clinică
            în afara programului standard.
          </p>
        </div>
      </section>
    </main>
  );
}
