"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Footer() {
  return (
    <footer className="px-16 grainy-dark  ">
      <FloatingWhatsApp phoneNumber="9048567007" accountName="Praveen Jose" avatar="/logo.png" />
      <div className="flex flex-col md:flex-row justify-between md:items-center py-4">
        <div className="w-[300px] mb-4">
          <a href="/">
            <h1 className="text-accent-foreground text-md md:text-lg font-semibold">
              MORE COPY SYSTEMS
            </h1>
          </a>

          <div className="flex gap-2 pt-3">
            <Link href="https://www.facebook.com/profile.php?id=100094021993089">
              <Image src="/facebook.png" alt="fb" width={30} height={30} />
            </Link>
            <Link href="https://www.instagram.com/more_copy_systems/">
              <Image src="/instagram.png" alt="ig" width={30} height={30} />
            </Link>
            <Link href="morecopysystems@gmail.com">
              <Image src="/mail.png" alt="mail" width={30} height={30} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col mb-4 md:flex-row md:gap-7">
          <a  href="/" className="text-sm">Home</a>
          <a href="#products" className="text-sm">Products</a>
          <a href="#aboutus" className="text-sm">About </a>
          <a href="#services" className="text-sm">Services</a>
        </div>

        <div className="max-w-[300px] ">
          <p className="text-sm">
            P.C Chambers , Banerji Road , Metro Pillar No : 625 , Ashirbhavan
            Lane, Kacheripady , Kochi, India, Kerala
          </p>
          <p className="text-sm">+91 98470 39467, +91 9048567007</p>
        </div>
      </div>
      <div className="h-[0.5px] bg-slate-700 w-full "></div>
      <p className="text-slate-800 text-center text-sm py-3">
        © 2024 morecopysystems, Inc. All rights reserved.
      </p>
    </footer>
  );
}
