import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Footer() {
  return (
    <footer className="px-16 grainy-dark  ">
      {/* <div className="flex justify-between items-center">
        <div>
          <button className={cn(buttonVariants())}>Whatsapp us</button>
          <div className="flex pt-3">
            <Link href="fb">
              <Image
                src="/public/facebook.png"
                alt="fb"
                width={50}
                height={50}
              />
            </Link>
            <Link href="ig">
              <Image
                src="/public/instagram.png"
                alt="ig"
                width={50}
                height={50}
              />
            </Link>
            <Link href="mail">
              <Image src="/public/mail.png" alt="mail" width={50} height={50} />
            </Link>
          </div>
        </div>

        <div className="flex gap-7">
          <p>Home</p>
          <p>Products</p>
          <p>About </p>
          <p>Services</p>
        </div>

        <div>
          <p>address</p>
          <p>number</p>
        </div>
      </div>
      <div className="h-[0.5px] bg-slate-700 w-full "></div> */}
      <p className="text-slate-800 text-center text-sm py-3">
        © 2024 morecopysystems, Inc. All rights reserved.
      </p>
    </footer>
  );
}
