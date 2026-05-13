"use client";

import {
  ServicePageShell,
  ServiceHero,
  ServiceQuickFacts,
  ServiceTextBlock,
  ServiceStepsSection,
  ServiceBulletsSection,
  ServiceContentSection,
  ServiceFAQ,
  ServiceCasesGrid,
  ServiceTestimonials,
  ServiceContactForm,
  ServiceFinalCTA,
} from "./ServicePageParts";

const symptoms = [
  "Durere intensă la masticație",
  "Sensibilitate prelungită la cald și rece",
  "Umflarea gingiei",
  "Decolorarea dintelui",
];

const processSteps = [
  {
    step: "01",
    title: "Diagnostic și radiografii digitale",
    text: "Se evaluează infecția pulpară înainte, în timpul și după tratament.",
  },
  {
    step: "02",
    title: "Anestezie și izolare",
    text: "Se aplică anestezie locală și digă dentară pentru confort și control optim.",
  },
  {
    step: "03",
    title: "Curățare endodontică",
    text: "Țesuturile infectate sunt îndepărtate, canalele dezinfectate și modelate.",
  },
  {
    step: "04",
    title: "Sigilare și restaurare",
    text: "Canalele se obturează cu materiale biocompatibile, apoi se restaurează coroana dintelui.",
  },
];

const recommendations = [
  "Evitați alimentele foarte tari sau lipicioase în primele zile",
  "Mențineți o igienă orală riguroasă (periaj + ață dentară)",
  "Utilizați antiinflamatoare doar la recomandarea medicului",
  "Reveniți la controlul periodic pentru monitorizarea vindecării",
  "Realizați restaurarea coronară în maximum o lună de la tratament",
];

const faqItems = [
  {
    q: "Cât durează procedura?",
    a: "Tratamentul poate avea loc într-o singură ședință sau în mai multe, în funcție de complexitatea cazului și timpul necesar intervenției.",
  },
  {
    q: "Care sunt etapele procedurii?",
    a: "Se efectuează radiografii digitale, anestezie locală, izolare cu digă, curățarea canalelor radiculare, dezinfectare, sigilare biocompatibilă și restaurare coronară.",
  },
  {
    q: "Care este gradul de disconfort?",
    a: "Datorită anesteziei locale, disconfortul este minim. După tratament poate apărea sensibilitate ușoară, de regulă temporară.",
  },
  {
    q: "Ce responsabilități are pacientul?",
    a: "Respectarea medicației și indicațiilor postoperatorii, plus restaurarea coronară în termenul recomandat de medic, pentru protejarea dintelui tratat.",
  },
  {
    q: "Cum decurge procesul de vindecare?",
    a: "În primele zile poate exista sensibilitate la mușcătură. Cu igienă corectă, controale periodice și recomandări respectate, vindecarea evoluează favorabil.",
  },
  {
    q: "Care sunt recomandările post-tratament?",
    a: "Evitarea presiunii excesive pe dintele tratat, igienă orală strictă, antiinflamatoare la nevoie și monitorizare regulată în cabinet.",
  },
];

export default function EndodontiePageClient() {
  return (
    <ServicePageShell>
      <ServiceHero
        image="/services/computer-xray.png"
        imageAlt="Tratament de endodonție în Cluj"
        chip="Tratamente de canal moderne"
        kicker="Endodonție"
        title="Endodonție Cluj"
        intro="Tratamentul de endodonție (tratament de canal) elimină infecția de la nivelul rădăcinii și camerei pulpare, având ca obiectiv păstrarea dintelui natural și prevenirea complicațiilor. În clinicile Alverna Dental Studio din Cluj, intervențiile sunt realizate cu aparatură modernă și protocoale precise."
      />

      <ServiceQuickFacts
        facts={[
          ["Serviciu", "Endodonție / tratament de canal"],
          ["Obiectiv", "Eliminarea infecției și salvarea dintelui"],
          ["Indicație", "Inflamație sau infecție pulpară"],
          ["Rezultat", "Dinte funcțional, fără durere"],
        ]}
      />

      <ServiceContentSection>
        <ServiceTextBlock
          first
          headingLevel="h2"
          heading="Când este necesară endodonția?"
          body={
            <div className="space-y-4">
              <p>
                Endodonția devine necesară când infecția atinge pulpa dentară și rădăcina. Intervenția timpurie previne extinderea infecției spre os și apariția abceselor.
              </p>
              <p className="font-semibold text-[#0A0A0A]">Simptome frecvente:</p>
              <ul className="space-y-2">
                {symptoms.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-[4px] w-[4px] rounded-full bg-[#4E7044]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
        <ServiceStepsSection heading="Etapele tratamentului de endodonție" steps={processSteps} />
        <ServiceBulletsSection heading="Recomandări post-tratament" items={recommendations} />
        <ServiceTextBlock
          heading="Video informativ"
          body={
            <div className="overflow-hidden rounded-[20px] border border-black/10 bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/Gegfq4ORYP8"
                  title="Endodonție Cluj - video informativ"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          }
        />
        <ServiceFAQ heading="Întrebări frecvente despre endodonție" items={faqItems} />
      </ServiceContentSection>

      <ServiceCasesGrid />
      <ServiceTestimonials />
      <ServiceContactForm
        headline="Primul pas spre un zâmbet sănătos începe aici."
        body="Echipa Alverna Dental Studio te ajută să alegi tratamentul potrivit, fără stres și fără presiune."
      />
      <ServiceFinalCTA
        title="Aveți nevoie de endodonție în Cluj?"
        body="Programați-vă la Alverna Dental Studio pentru diagnostic corect, tratament modern de canal și monitorizare atentă, astfel încât dintele natural să poată fi păstrat în condiții optime."
      />
    </ServicePageShell>
  );
}
