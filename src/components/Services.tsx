import MaxWidthWrapper from "./MaxWidthWrapper";
import { Servicess } from "@/constants";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto px-8" id="services">
      <h1 className="text-2xl font-bold text-center">Services we provide</h1>
    <HoverEffect items={Servicess} />
  </section>
  );
}

