import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Printer & Photocopier Shop in Kochi, Ernakulam | More Copy Systems",
  description:
    "More Copy Systems — trusted printer and photocopier dealer in Ernakulam, Kochi, Kerala. Sales, rental, repair, and service for Canon, Kyocera, Xerox, Epson, Brother, Konica Minolta. Call +91 98470 39467.",
  alternates: {
    canonical: "https://morecopysystems.in",
  },
  openGraph: {
    title: "Printer & Photocopier Shop in Kochi, Ernakulam | More Copy Systems",
    description:
      "Sales, rental, repair, and service for all major printer and photocopier brands in Ernakulam, Kochi, Kerala. Canon, Kyocera, Xerox, Epson, Brother, Konica Minolta.",
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
    title: "Printer & Photocopier Shop in Kochi | More Copy Systems",
    description:
      "Printer and photocopier sales, rental, and repair in Ernakulam, Kochi, Kerala.",
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
    <html lang="en">
      <body className={recursive.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://morecopysystems.in/#business",
              name: "More Copy Systems",
              url: "https://morecopysystems.in",
              telephone: ["+919847039467", "+919048567007"],
              email: "morecopysystems@gmail.com",
              description:
                "More Copy Systems is a leading printer and photocopier dealer in Ernakulam, Kochi, Kerala. We offer sales, rental, repair, and service for Canon, Kyocera, Xerox, Epson, Brother, and Konica Minolta equipment.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ashir Bhavan Ln, Kacheripady",
                addressLocality: "Ernakulam",
                addressRegion: "Kerala",
                postalCode: "682018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 9.987218173029484,
                longitude: 76.28430928043295,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              priceRange: "₹₹",
              image: "https://morecopysystems.in/og-image.jpg",
              sameAs: [
                "https://g.co/kgs/YSuww1X",
                "https://www.instagram.com/more_copy_systems/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Printing Equipment and Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Photocopier Sales in Kochi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Printer Sales in Ernakulam",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Photocopier Rental in Kerala",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Printer Repair and Service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Toner and Ink Consumables",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
