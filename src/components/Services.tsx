import MaxWidthWrapper from "./MaxWidthWrapper";
import { Servicess } from "@/constants";
import { HoverEffect } from "./ui/card-hover-effect";

export default function Services() {
  return (
    <section className="mx-auto w-full px-8 py-4 " id="services">
      <MaxWidthWrapper>
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Services we provide
        </h1>
        <HoverEffect items={Servicess} />
      </MaxWidthWrapper>
    </section>
  );
}
