
import { buttonVariants } from "./ui/button";

import EmblaCarousel from "./EmblaCarousel";
import { HeroImgs } from "@/constants";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = HeroImgs.map(({ imgUrl }) => imgUrl);

export default function Hero() {
  return (
    <main className="mb-20  ">
      <header className="">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </header>
      <div className="flex justify-center my-6 pb-10 gap-6">
        <a
          className={buttonVariants({
            size: "sm",
            className: "rounded-full mt-8",
          })}
          href="#products"
        >
          View Products
        </a>
        <a
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "rounded-full mt-8 ",
          })}
          href="#services"
        >
          Our Services
        </a>
      </div>
    </main>
  );
}
