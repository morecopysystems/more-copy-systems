import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "More Copy Systems",
  description:
    "leading provider of sales and services of printing equipment and consumables",

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
