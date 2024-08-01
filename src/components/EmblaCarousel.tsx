"use client"

import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HeroImgs } from "@/constants";
import Image from "next/image";
import { SLIDES } from "./Slides";

type HeroImgType = {
  // title: string;
  imgUrl: string;
  // description?: string;
};

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}



export default function EmblaCarousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);


  return (
    <div className="embla max-w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex ">
        {slides.map((slide,i) => (
            <div className="embla__slide flex-none basis-full min-w-0" key={i}>
              <Image
                src={slide}
                alt={slide}
                width={2000}
                height={700}
                className="object-cover w-full min-w-400 max-h-[700px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

