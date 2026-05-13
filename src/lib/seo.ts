export const SITE_URL = "https://alvernadental.com";

export const BUSINESS = {
  name: "Alverna Dental Studio",
  legalName: "Alverna Dental Studio",
  description:
    "Clinică stomatologică premium în Cluj-Napoca. Implantologie, ortodonție, estetică dentară, profilaxie, pedodonție și urgențe stomatologice.",
  phone: "+40376448810",
  phoneDisplay: "0376 448 810",
  email: "contact@alvernadental.com",
  street: "Strada Alverna 33",
  city: "Cluj-Napoca",
  postalCode: "400469",
  country: "RO",
  region: "Cluj",
  latitude: 46.758115,
  longitude: 23.6122138,
  priceRange: "$$$",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "21:00" },
    { days: ["Saturday"], opens: "09:00", closes: "15:00" },
  ],
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/icon`,
  sameAs: [
    "https://www.google.com/maps/place/Alverna+Dental+Studio",
  ],
} as const;

export type ServiceMeta = {
  slug: string;
  path: string;
  name: string;
  short: string;
};

export const SERVICES: ReadonlyArray<ServiceMeta> = [
  { slug: "implant-dentar", path: "/servicii/implant-dentar/", name: "Implant dentar", short: "Implantologie orală modernă cu plan personalizat." },
  { slug: "ortodontie", path: "/servicii/ortodontie/", name: "Ortodonție", short: "Aliniere dentară corectivă pentru adulți și copii." },
  { slug: "estetica-dentara", path: "/servicii/estetica-dentara/", name: "Estetică dentară", short: "Albire profesională, fațete și makeover de zâmbet." },
  { slug: "fatete-dentare", path: "/servicii/fatete-dentare/", name: "Fațete dentare", short: "Fațete ceramice și de compozit pentru un zâmbet armonios." },
  { slug: "coroana-dentara", path: "/servicii/coroana-dentara/", name: "Coroană dentară", short: "Coroane ceramice și metalo-ceramice cu fit precis." },
  { slug: "protetica", path: "/servicii/protetica/", name: "Protetică dentară", short: "Lucrări protetice fixe și mobile, soluții complete." },
  { slug: "endodontie", path: "/servicii/endodontie/", name: "Endodonție", short: "Tratament de canal modern, sub microscop." },
  { slug: "odontologie", path: "/servicii/odontologie/", name: "Odontologie", short: "Tratamente conservative pentru carii și leziuni dentare." },
  { slug: "chirurgie-dentara", path: "/servicii/chirurgie-dentara/", name: "Chirurgie dentară", short: "Extracții complexe, chirurgie orală minim invazivă." },
  { slug: "augmentarea-osoasa", path: "/servicii/augmentarea-osoasa/", name: "Augmentare osoasă", short: "Sinus lift și augmentări pentru implantologie." },
  { slug: "profilaxie", path: "/servicii/profilaxie/", name: "Profilaxie dentară", short: "Igienizare profesională airflow și consult preventiv." },
  { slug: "pedodontie", path: "/servicii/pedodontie/", name: "Pedodonție", short: "Stomatologie pediatrică prietenoasă și empatică." },
  { slug: "urgente-stomatologice", path: "/servicii/urgente-stomatologice/", name: "Urgențe stomatologice", short: "Intervenție rapidă pentru dureri și traumatisme orale." },
  { slug: "dentist-cluj", path: "/servicii/dentist-cluj/", name: "Dentist Cluj", short: "Stomatologie generală în Cluj-Napoca, cu plan personalizat." },
  { slug: "spark", path: "/servicii/aparat-dentar/spark/", name: "Aliniatori Spark", short: "Ortodonție invizibilă cu aliniatori transparenți Spark." },
  { slug: "gutiera-de-contentie", path: "/servicii/aparat-dentar/gutiera-de-contentie/", name: "Gutieră de contenție", short: "Menținerea rezultatelor după tratamentul ortodontic." },
];

export const STATIC_ROUTES = [
  "/",
  "/servicii/",
  "/echipa/",
  "/echipa/radu-nichimis/",
  "/cazuri/",
  "/tarife/",
  "/testimoniale/",
  "/contact/",
  "/turism-dentar/",
  "/politica-de-confidentialitate/",
  "/termeni-si-conditii/",
] as const;
