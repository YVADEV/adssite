import { notFound } from "next/navigation";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getServiceBySlug, services } from "@/config/services";

export const runtime = "nodejs";

type PageProps = {
  params: Promise<{ serviceSlug: string }>;
};

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
