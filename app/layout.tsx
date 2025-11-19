import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "KMS Construction - Leading Tile Dealers & Tile Laying Experts in Namakkal",
  description: "15+ years of trusted tile laying excellence in Namakkal. Specialists in floor & wall tile laying, tile dealers, renovation, and waterproofing. Quality, speed, and reliability guaranteed.",
  keywords: "tile laying Namakkal, tile dealers Namakkal, floor tiles, wall tiles, construction Namakkal, tile installation, renovation services, waterproofing, KMS Construction",
  authors: [{ name: "KMS Construction" }],
  openGraph: {
    title: "KMS Construction - Tile Laying Experts in Namakkal",
    description: "15+ years of trusted tile laying excellence. Leading tile dealers and specialists in Namakkal.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}



