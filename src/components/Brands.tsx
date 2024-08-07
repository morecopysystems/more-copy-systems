"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Brands() {
  return (
    <div className="h-[10rem]  xl:h-[15rem] rounded-md mb-5 flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden grainy-light">
      <InfiniteMovingCards items={brands} direction="right" speed="normal" />
    </div>
  );
}

const brands = [
  {
    name: "Canon",
    logo: "/canonpng.png",
  },
  {
    name: " Kyocera",
    logo: "/kyoserapng.png",
  },
  {
    name: "Konica Minolta",
    logo: "/konicapng.png",
  },
  {
    name: "Epson",
    logo: "/epsonpng.png",
  },
  {
    name: "Brother",
    logo: "/brotherpng.png",
  },
];


