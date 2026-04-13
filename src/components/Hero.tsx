import EmblaCarousel from "./EmblaCarousel";
import { HeroImgs } from "@/constants";
import { EmblaOptionsType } from "embla-carousel";
import { TypewriterEffectDemo } from "./TypewriterEffectDemo";
import Image from "next/image";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = HeroImgs.map(({ imgUrl }) => imgUrl);
const ALT_TEXTS = [
  "Canon photocopier machine for sale in Ernakulam, Kochi",
  "Office printer and photocopier showroom — More Copy Systems, Kerala",
  "Kyocera and Xerox photocopier machines available in Ernakulam",
];

export default function Hero() {
  return (
    <main className="grainy-light ">
      <header className="">
        <h1 className="sr-only">
          Printer &amp; Photocopier Shop in Kochi, Ernakulam — More Copy Systems
        </h1>
        <EmblaCarousel options={OPTIONS}>
          {SLIDES.map((slide, i) => (
            <div
              className="embla__slide flex-none basis-full min-w-0 h-[30rem] lg:h-[40rem]"
              key={`emblaCarousel-${i}-embla__slide-${slide.replace(" ", "")}`}
            >
              <Image
                src={slide}
                alt={ALT_TEXTS[i]}
                width={1920}
                height={1080}
                className="object-cover w-full h-full sm:h-[600px] md:h-[700px] rounded-2xl"
              />
            </div>
          ))}
        </EmblaCarousel>
        <TypewriterEffectDemo />
      </header>
    </main>
  );
}
