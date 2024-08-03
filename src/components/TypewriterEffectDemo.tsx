"use client";

import { buttonVariants } from "./ui/button";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Business",
    },
    {
      text: "solutions",
    },
    {
      text: "and",
    },
    {
      text: "the",
    },
    {
      text: "Personal",
      className: "text-blue-500",
    },
    {
      text: "Touch.",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[15rem] ">
      <TypewriterEffect words={words} />
      <div className="flex justify-center my-6  gap-6">
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
    </div>
  );
}
