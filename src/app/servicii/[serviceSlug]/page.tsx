import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug, services } from "@/config/services";

export const runtime = "nodejs";

type PageProps = {
  params: Promise<{ serviceSlug: string }>;
};

const SERVICE_DESCRIPTIONS: Partial<Record<string, string>> = {
  "aparat-dentar":
    "Aparat dentar la Alverna Dental Studio Cluj: evaluare ortodontică, plan personalizat și opțiuni moderne inclusiv Spark. Consultație clară, fără presiune comercială.",
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};

  const path = `/servicii/${serviceSlug}/`;
  const description =
    SERVICE_DESCRIPTIONS[serviceSlug] ??
    `Serviciul de ${service.title.toLowerCase()} la Alverna Dental Studio Cluj: protocoale moderne, comunicare clară și plan de tratament personalizat pentru confort și rezultate predictibile.`;

  return {
    title: `${service.title} Cluj | Alverna Dental Studio`,
    description,
    alternates: { canonical: path },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ serviceSlug: service.slug }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  return (
    <PrototypeFrame>
      <ServicePageTemplate
        title={service.title}
        shortIntro={`Serviciul de ${service.title.toLowerCase()} este realizat în clinică cu protocoale moderne, atenție la detalii și comunicare clară cu pacientul, pentru o experiență predictibilă și confortabilă.`}
      />
    </PrototypeFrame>
  );
}
