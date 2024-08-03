import { buttonVariants } from "./ui/button";

import EmblaCarousel from "./EmblaCarousel";
import { HeroImgs } from "@/constants";
import { EmblaOptionsType } from "embla-carousel";
import { Button } from "./ui/moving-border";
import { TypewriterEffectDemo } from "./TypewriterEffectDemo";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = HeroImgs.map(({ imgUrl }) => imgUrl);

export default function Hero() {
  return (
    <main className="grainy-light ">
      <header className="">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <TypewriterEffectDemo/>
      </header>
    </main>
  );
}
