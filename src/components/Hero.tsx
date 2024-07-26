import Image from "next/image";
import hero from "../../public/hero_img.jpg";
import { buttonVariants } from "./ui/button";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="">
      <Navbar />
      <div>
        <Image
          src={hero}
          alt="main img"
          width={3000}
          className="object-cover max-h-[700px]"
        />
      </div>
      <div className="flex justify-center gap-6">
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
    </div>
  );
}
