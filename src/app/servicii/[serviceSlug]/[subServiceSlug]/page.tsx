import { notFound } from "next/navigation";
import PrototypeFrame from "@/components/prototype/PrototypeFrame";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { getSubService, services } from "@/config/services";

export const runtime = "nodejs";

type PageProps = {
  params: Promise<{ serviceSlug: string; subServiceSlug: string }>;
};

export async function generateStaticParams() {
  return services.flatMap((service) =>
    (service.children ?? []).map((child) => ({
      serviceSlug: service.slug,
      subServiceSlug: child.slug,
    })),
  );
}

export default async function SubServiceDetailPage({ params }: PageProps) {
  const { serviceSlug, subServiceSlug } = await params;
  const data = getSubService(serviceSlug, subServiceSlug);
  if (!data) notFound();

  return (
    <PrototypeFrame>
      <ServicePageTemplate
        title={data.child.title}
        shortIntro={`Sub-serviciul ${data.child.title.toLowerCase()} este integrat în planurile noastre clinice pentru rezultate precise, monitorizare atentă și confort crescut pe toată durata tratamentului.`}
      />
    </PrototypeFrame>
  );
}
