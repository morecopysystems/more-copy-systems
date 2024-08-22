import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "More Copy Systems - leading provider of sales and services for a wide range of printing equipment and consumables",
  description:
    "Discover top-quality printers, photocopiers, scanners, laminators and a wide range of printing equipment and consumables, Expert sales and service support for all your printing needs. Shop now for reliable office solutions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
