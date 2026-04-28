export type ServiceChild = {
  title: string;
  slug: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  slug: string;
  href: string;
  children?: ServiceChild[];
};

export const services: ServiceItem[] = [
  {
    title: "Aparat dentar",
    slug: "aparat-dentar",
    href: "/servicii/aparat-dentar/",
    children: [
      {
        title: "Aparat dentar Spark",
        slug: "spark",
        href: "/servicii/aparat-dentar/spark/",
      },
      {
        title: "Gutiera de contenție",
        slug: "gutiera-de-contentie",
        href: "/servicii/aparat-dentar/gutiera-de-contentie/",
      },
    ],
  },
  { title: "Pedodonție", slug: "pedodontie", href: "/servicii/pedodontie/" },
  { title: "Augmentarea osoasă", slug: "augmentarea-osoasa", href: "/servicii/augmentarea-osoasa/" },
  { title: "Chirurgie dentară", slug: "chirurgie-dentara", href: "/servicii/chirurgie-dentara/" },
  { title: "Coroană dentară", slug: "coroana-dentara", href: "/servicii/coroana-dentara/" },
  { title: "Dentist Cluj", slug: "dentist-cluj", href: "/servicii/dentist-cluj/" },
  { title: "Fațete dentare", slug: "fatete-dentare", href: "/servicii/fatete-dentare/" },
  { title: "Endodonție", slug: "endodontie", href: "/servicii/endodontie/" },
  { title: "Estetică dentară", slug: "estetica-dentara", href: "/servicii/estetica-dentara/" },
  { title: "Implant dentar", slug: "implant-dentar", href: "/servicii/implant-dentar/" },
  { title: "Odontologie", slug: "odontologie", href: "/servicii/odontologie/" },
  { title: "Ortodonție", slug: "ortodontie", href: "/servicii/ortodontie/" },
  { title: "Profilaxie", slug: "profilaxie", href: "/servicii/profilaxie/" },
  { title: "Protetică", slug: "protetica", href: "/servicii/protetica/" },
  { title: "Urgențe stomatologice", slug: "urgente-stomatologice", href: "/servicii/urgente-stomatologice/" },
];

export function getServiceBySlug(serviceSlug: string) {
  return services.find((service) => service.slug === serviceSlug);
}

export function getSubService(serviceSlug: string, subServiceSlug: string) {
  const service = getServiceBySlug(serviceSlug);
  const child = service?.children?.find((sub) => sub.slug === subServiceSlug);
  return child ? { service, child } : null;
}
