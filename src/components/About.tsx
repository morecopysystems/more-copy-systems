import Image from "next/image";
import about_img from "../../public/printer-cartoon-img1.png";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Services from "./Services";

export default function About() {
  return (
    <>
      <section className=" my-16 py-10 grainy-dark " id="aboutus">
        <MaxWidthWrapper>
          <h1 className="text-3xl md:text-5xl font-semibold text-center">
            About us
          </h1>
          <div className="flex justify-center gap-8 max-w-full flex-wrap">
            <div className="max-w-xl px-4 gap-3 flex flex-col">
              <h2 className="text-lg md:text-xl font-semibold  mt-10 mb-2">
                MORE COPY SYSTEMS
              </h2>
              <p className="text-sm md:text-base pr-8 md:pr-16">
               At <span className="font-medium">More Copy Systems</span> , we are dedicated to meeting all your
                office equipment and supply needs with a diverse range of
                high-quality products and services. We proudly deal with leading
                brands such as <span className="text-[#BE0006]"> Canon, Kyocera, Konica Minolta, Epson,<span className="text-black"> and </span>
                 Brother</span>, offering a comprehensive selection including 
                 <span className="font-medium"> photocopier machines, printers, photo papers, laminators, and
                lamination pouches.</span>
              </p>

              <p className="text-sm md:text-base">
                Our product offerings extend to <span className="font-medium"> springs and sheets for spiral
                binding, inks and toners for printers and photocopiers (both
                genuine and compatible), spiral binders, paper cutters, and ID
                card printing machines and cutters. We also provide essential
                spares and consumables for photocopiers, including doors,
                paper tray(cassettes), trolleys, DADF/RADF units, drums, blades, coils, films,
                boards, pressure rollers, drum units, toner units, heater units,
                laser units, and power control boards (PCB).</span>
              </p>

              <p className="text-sm md:text-base">
                In addition to our sales, we offer expert <span className="font-semibold"> service, rental, and
                exchange options</span> for photocopier machines across all brands. Our
                goal is to ensure you receive reliable and efficient solutions
                tailored to your specific needs, keeping your office running
                smoothly and effectively.
              </p>

              <p className="font-medium text-sm md:text-base">
                Choose More Copy Systems for a comprehensive approach to your
                office equipment and supply requirements, backed by quality
                products and exceptional service.
              </p>
            </div>
            <Image
              src={about_img}
              alt="about"
              width={400}
              className="object-contain pl-8 md:w-[500px]"
            />
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="mb-16">
        <Services />
      </section>
    </>
  );
}
