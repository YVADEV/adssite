import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import StickyContactButtons from "@/components/layout/StickyContactButtons";
import CookieConsent from "@/components/layout/CookieConsent";
import { JsonLd, organizationLd, websiteLd } from "@/components/seo/JsonLd";
import { BUSINESS, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS.name} | Clinică stomatologică premium în Cluj`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.description,
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  keywords: [
    "dentist Cluj",
    "implant dentar Cluj",
    "ortodonție Cluj",
    "stomatologie Cluj",
    "albire dinți Cluj",
    "fațete dentare Cluj",
    "estetică dentară Cluj",
    "clinică stomatologică Cluj",
    "Alverna Dental Studio",
  ],
  alternates: {
    canonical: "/",
    languages: { "ro-RO": "/" },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Clinică stomatologică premium în Cluj`,
    description: BUSINESS.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Clinică stomatologică premium în Cluj`,
    description: BUSINESS.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1115",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" data-theme="dark" className={`${geistSans.variable} antialiased`}>
      <head>
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
      </head>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0A0A0A] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4E7044]"
        >
          Sari la conținut
        </a>
        {children}
        <StickyContactButtons />
        <CookieConsent />
      </body>
    </html>
  );
}
