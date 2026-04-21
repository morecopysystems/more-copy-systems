import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { localBusinessSchema } from "@/lib/schema";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://morecopysystems.in"),
  title: "Canon Authorized Dealer | Printer, Photocopier & PVC Card Printer Shop in Kochi, Ernakulam | More Copy Systems",
  description:
    "Printer & photocopier sales, rental and repair in Ernakulam, Kochi. Canon, Kyocera, Xerox, Epson, Brother. Toner, cartridges, laminators in stock. Call +91 98470 39467.",
  alternates: {
    canonical: "https://morecopysystems.in",
  },
  openGraph: {
    title: "Canon Authorized Dealer | Printer & Photocopier Shop in Kochi | More Copy Systems",
    description:
      "Canon Authorized Dealer and photocopier dealer in Ernakulam, Kochi. Sales, rental, repair, lamination, binding, bulk printing, PVC card printing. Canon, Kyocera, Xerox, Epson, Brother, Konica Minolta. Riso Digital Duplicator, Evolis PVC Card Printer.",
    url: "https://morecopysystems.in",
    siteName: "More Copy Systems",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://morecopysystems.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "More Copy Systems — Printer and Photocopier Shop in Ernakulam, Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canon Authorized Dealer | Printer & Photocopier Shop in Kochi | More Copy Systems",
    description:
      "Printer, photocopier, and MFD dealer in Ernakulam, Kochi. Lamination, binding, bulk printing, PVC card printing, Riso, Evolis.",
    images: ["https://morecopysystems.in/og-image.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={recursive.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
