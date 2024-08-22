"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Footer() {
  return (
    <footer className="px-16 grainy-dark  ">
      <FloatingWhatsApp
        phoneNumber="9847039467"
        accountName="Francis Alumkal"
        avatar="/whatsappdp.jpeg"
      />
      <div className="flex flex-col md:flex-row justify-between md:items-center py-4">
        <div className="w-[300px] mb-4">
          <a href="/">
            <h3 className="text-accent-foreground text-md md:text-lg font-semibold">
              MORE COPY SYSTEMS
            </h3>
          </a>

          <div className="flex gap-2 pt-3">
            <Link href="https://www.facebook.com/profile.php?id=100094021993089">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.instagram.com/more_copy_systems/">
              <Image
                src="/instagram.png"
                alt="instagram"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnXVQcfxWxTwWKVbJgWZCdVbHzrLqMtpCpNXVMhjSGxpBFrFkcGWHMfqsHJrLRXNqxbwtg">
              <Image src="/mail.png" alt="mail" width={30} height={30} />
            </Link>
            <Link href="https://www.linkedin.com/in/more-copy-systems-223818281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Image
                src="/linkedin.png"
                alt="linkedin"
                width={30}
                height={30}
              />
            </Link>
          </div>
        </div>

        <div className="flex items-start flex-col mb-4 md:flex-row md:gap-7">
          <a
            className={buttonVariants({
              size: "a",
              variant: "link",
            })}
            href="/"
          >
            Home
          </a>
          <a
            className={buttonVariants({
              size: "a",
              variant: "link",
            })}
            href="#products"
          >
            Products
          </a>
          <a
            className={buttonVariants({
              size: "a",
              variant: "link",
            })}
            href="#aboutus"
          >
            About
          </a>
          <a
            className={buttonVariants({
              size: "a",
              variant: "link",
            })}
            href="#services"
          >
            Services
          </a>
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
