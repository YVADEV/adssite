import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
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
    <html lang="ro" data-theme="dark" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-black text-white">
        {children}
        <StickyContactButtons />
      </body>
    </html>
  );
}
