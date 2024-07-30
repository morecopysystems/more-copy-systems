import Image from "next/image";
import hero from "../../public/hero-img.jpg";
import { buttonVariants } from "./ui/button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <header className="">
      <main className="relative">
        <Navbar />
        <Image
          src={hero}
          alt="hero img"
          width={2000}
          height={700}
          className="object-cover w-full min-w-500 max-h-[700px]"
        />
      </main>
      <div className="flex justify-center  gap-6">
        <a
          className={buttonVariants({
            size: "lg",
            className: "rounded-full mt-8",
          })}
          href="#products"
        >
          View Products
        </a>
        <a
          className={buttonVariants({
            size: "lg",
            className: "rounded-full mt-8 ",
          })}
          href="#services"
        >
          Our Services
        </a>
      </div>
    </header>
  );
}
