import MaxWidthWrapper from "./MaxWidthWrapper";
import { Servicess } from "@/constants";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";

export default function Services() {
  return (
    <section className="mx-auto w-full px-8 bg-white " id="services">
      <MaxWidthWrapper>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Services we provide
        </h1>
        <HoverEffect items={Servicess} />
        
      </MaxWidthWrapper>
    </section>
  );
}
