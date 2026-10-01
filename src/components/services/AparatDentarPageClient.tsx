"use client";

import Link from "next/link";
import {
  ServicePageShell,
  ServiceHero,
  ServiceContentSection,
  ServiceParagraphSection,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";
import { CLINIC } from "@/lib/contact";

const types = [
  {
    id: "aparat-dentar-fix-metalic",
    title: "Aparat dentar fix metalic",
    tagline: "Clasic. Rezistent. Eficient.",
    body: "O soluție ortodontică versatilă, potrivită pentru corectarea unei game variate de probleme de aliniere și ocluzie. Bracketurile metalice oferă rezistență și control pe parcursul tratamentului, fiind în același timp una dintre cele mai accesibile opțiuni.",
    tags: "Rezistent · Versatil · Accesibil",
  },
  {
    id: "aparat-dentar-ceramic",
    title: "Aparat dentar ceramic",
    tagline: "Mai discret, cu aceeași abordare precisă.",
    body: "Bracketurile ceramice au o culoare apropiată de cea naturală a dinților, ceea ce face aparatul mai puțin vizibil. Este o alegere potrivită pentru pacienții care își doresc beneficiile unui aparat fix într-o variantă mai discretă.",
    tags: "Discret · Estetic · Confortabil",
  },
  {
    id: "aparat-dentar-safir",
    title: "Aparat dentar din safir",
    tagline: "Transparență și discreție.",
    body: "Bracketurile din safir sunt concepute pentru a se integra cât mai natural în aspectul zâmbetului. Dimensiunile reduse și aspectul discret fac din această variantă o opțiune pentru pacienții care acordă o atenție deosebită esteticii pe durata tratamentului.",
    tags: "Transparent · Discret · Rezistent",
  },
  {
    id: "aparat-dentar-lingual",
    title: "Aparat dentar lingual",
    tagline: "Aparatul fix pe care aproape nu îl vezi.",
    body: "Bracketurile sunt poziționate pe suprafața interioară a dinților, astfel încât aparatul rămâne ascuns atunci când zâmbești. Tratamentul este personalizat și necesită evaluarea medicului ortodont pentru a determina dacă această soluție este potrivită cazului tău.",
    tags: "Ascuns · Personalizat · Estetic",
  },
] as const;

export default function AparatDentarPageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/braces-model.png"
        imageAlt="Aparat dentar Cluj — Alverna Dental Studio"
        chip="Ortodonție"
        kicker="Tipuri de aparat dentar"
        title="Aparat dentar"
        intro="Fiecare zâmbet are nevoi diferite. În urma consultației ortodontice, medicul stabilește tipul de aparat potrivit în funcție de poziția dinților, complexitatea cazului și preferințele tale."
        secondaryCta={{ href: "/servicii/aparat-dentar/spark/", label: "Alignere transparente" }}
      />

      <ServiceContentSection>
        <ServiceParagraphSection
          first
          headingLevel="h2"
          heading="Tipuri de aparat dentar"
          body="Fiecare zâmbet are nevoi diferite. În urma consultației ortodontice, medicul stabilește tipul de aparat potrivit în funcție de poziția dinților, complexitatea cazului și preferințele tale."
        />

        <div className="mt-10 space-y-6">
          {types.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
            >
              <h3 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[32px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[18px] font-semibold text-white md:text-[21px]">{item.tagline}</p>
              <p className="mt-4 max-w-[920px] text-[18px] leading-[1.7] text-white/90 md:text-[21px]">{item.body}</p>
              <p className="mt-4 text-[16px] font-medium text-white/70 md:text-[18px]">{item.tags}</p>
            </article>
          ))}

          <article
            id="alignere-transparente"
            className="scroll-mt-28 rounded-[24px] border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <h3 className="text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[32px]">
              Alignere transparente
            </h3>
            <p className="mt-3 text-[18px] font-semibold text-white md:text-[21px]">
              Ortodonție care se adaptează vieții tale.
            </p>
            <p className="mt-4 max-w-[920px] text-[18px] leading-[1.7] text-white/90 md:text-[21px]">
              Alignerele transparente folosesc o succesiune de gutiere personalizate pentru deplasarea controlată a dinților.
              Sunt detașabile și discrete, oferind mai multă libertate în timpul meselor și al igienei orale.
            </p>
            <p className="mt-4 max-w-[920px] text-[18px] leading-[1.7] text-white/90 md:text-[21px]">
              În cadrul consultației, medicul ortodont stabilește dacă tratamentul cu alignere este potrivit pentru cazul tău
              și recomandă sistemul adecvat.
            </p>
            <p className="mt-4 text-[16px] font-medium text-white/70 md:text-[18px]">Transparent · Detașabil · Personalizat</p>
            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
              <div>
                <p className="text-[18px] font-semibold text-white md:text-[21px]">SPARK™ Clear Aligner</p>
                <p className="mt-2 max-w-[920px] text-[18px] leading-[1.7] text-white/90 md:text-[21px]">
                  Gutiere transparente personalizate, concepute pentru un tratament ortodontic discret și adaptat planului stabilit de medic.
                </p>
              </div>
              <div>
                <p className="text-[18px] font-semibold text-white md:text-[21px]">Angel Aligner</p>
                <p className="mt-2 max-w-[920px] text-[18px] leading-[1.7] text-white/90 md:text-[21px]">
                  Sistem de alignere transparente personalizate, utilizat pentru deplasarea progresivă a dinților conform planului ortodontic.
                </p>
              </div>
            </div>
            <Link
              href="/servicii/aparat-dentar/spark/"
              className="ads-btn-green-glow-sm mt-6 inline-flex min-h-[44px] items-center rounded-full px-5 text-[16px] font-semibold"
            >
              Vezi alignere transparente
            </Link>
          </article>
        </div>
      </ServiceContentSection>

      <ServiceContactForm
        headline="Nu trebuie să alegi singur."
        body="Tipul aparatului dentar nu se stabilește doar în funcție de aspect sau preț. Poziția dinților, mușcătura și obiectivele tratamentului sunt evaluate de medicul ortodont înainte de recomandarea unei soluții."
      />
      <ServiceFinalCTA
        title="Nu trebuie să alegi singur."
        body="Tipul aparatului dentar nu se stabilește doar în funcție de aspect sau preț. Poziția dinților, mușcătura și obiectivele tratamentului sunt evaluate de medicul ortodont înainte de recomandarea unei soluții."
        buttonLabel="Programează o consultație"
        href={CLINIC.formPageHref}
      />
    </ServicePageShell>
  );
}
