import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "More Copy Systems - Printing equipments provider",
  description:
    "Discover top-quality photocopiers, printers, scanners, and more. Expert sales and service support for all your printing needs.",
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
