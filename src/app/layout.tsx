import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import GlobalIntro from "@/components/GlobalIntro";
import StickyContactButtons from "@/components/layout/StickyContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alverna Dental Studio",
  description:
    "Website de prezentare pentru Alverna Dental Studio, construit conform designului Figma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <GlobalIntro />
        {children}
        <StickyContactButtons />
      </body>
    </html>
  );
}
