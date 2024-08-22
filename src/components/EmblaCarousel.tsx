"use client";

import React, { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type PropType = {
  options?: EmblaOptionsType;
  children: ReactNode;
};

export default function EmblaCarousel(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3200 }),
  ]);

  return (
    <div className="embla max-w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex ">{props.children}</div>
      </div>
    </div>
  );
}
