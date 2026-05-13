import { BUSINESS, SITE_URL } from "@/lib/seo";

type JsonLdProps = {
  data: Record<string, unknown> | ReadonlyArray<Record<string, unknown>>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness", "MedicalClinic"],
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: SITE_URL,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: BUSINESS.openingHours.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: BUSINESS.sameAs,
    areaServed: {
      "@type": "City",
      name: "Cluj-Napoca",
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: "ro-RO",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceLd(params: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: params.name,
    description: params.description,
    url: params.url,
    image: params.image ?? BUSINESS.image,
    provider: { "@id": `${SITE_URL}/#organization` },
  };
}

export function faqLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function breadcrumbLd(items: ReadonlyArray<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function physicianLd(params: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  sameAs?: ReadonlyArray<string>;
  medicalSpecialty?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    url: params.url,
    image: params.image,
    sameAs: params.sameAs,
    medicalSpecialty: params.medicalSpecialty,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
  };
}
