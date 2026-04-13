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
                alt="facebook logo"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://www.instagram.com/more_copy_systems/">
              <Image
                src="/instagram.png"
                alt="instagram logo"
                width={30}
                height={30}
              />
            </Link>
            <a href="mailto:morecopysystems@gmail.com">
              <Image src="/mail.png" alt="mail" width={30} height={30} />
            </a>
            <Link href="https://www.linkedin.com/in/more-copy-systems-223818281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <Image
                src="/linkedin.png"
                alt="linkedin logo"
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
            More Copy Systems
            <br />
            Ashir Bhavan Ln, Kacheripady
            <br />
            Ernakulam, Kerala — 682018
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+919847039467" className="hover:underline">
              +91 98470 39467
            </a>
            {" / "}
            <a href="tel:+919048567007" className="hover:underline">
              +91 90485 67007
            </a>
          </p>
        </div>
      </div>
      <div className="h-[0.5px] bg-slate-700 w-full "></div>
      <p className="text-slate-800 text-center text-sm py-3">
        © 2024 morecopysystems, Inc. All rights reserved.
      </p>
    </footer>
  );
}
