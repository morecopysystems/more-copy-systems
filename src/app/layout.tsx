import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactDock from "@/components/layout/ContactDock";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";
import { localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/data/site";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "More Copy Systems — Printer, Photocopier & Office Equipment Dealer in Kochi, Ernakulam",
    template: "%s | More Copy Systems",
  },
  description:
    "Printer and photocopier sales, rental, exchange and repair in Kacheripady, Ernakulam, Kochi. Canon authorised dealer. Kyocera, Konica Minolta, Xerox, Epson, Brother. Toner, cartridges, paper, lamination and binding in stock. Call +91 98470 39467.",
  alternates: { canonical: SITE.url },
  keywords: [
    "printer shop Kochi",
    "photocopier dealer Ernakulam",
    "Canon authorised dealer Kochi",
    "printer repair Ernakulam",
    "photocopier rental Kochi",
    "toner cartridge Ernakulam",
    "PVC card printing Kochi",
  ],
  openGraph: {
    title: "More Copy Systems — Printers, Photocopiers & Service in Kochi",
    description:
      "Canon authorised dealer in Ernakulam, Kochi. Sales, rental, exchange, repair, consumables, lamination, binding, bulk printing and PVC card printing.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "More Copy Systems — printer and photocopier shop in Ernakulam, Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "More Copy Systems — Printers, Photocopiers & Service in Kochi",
    description:
      "Printer, photocopier and MFD dealer in Ernakulam, Kochi. Sales, rental, repair and consumables.",
    images: [`${SITE.url}/og-image.jpg`],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="grain min-h-screen bg-ink text-paper">
        <SmoothScroll />
        <SiteHeader />
        <main id="main" className="relative">
          {children}
        </main>
        <SiteFooter />
        <ContactDock />
      </body>
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
    </html>
  );
}
