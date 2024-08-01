import Image from "next/image";
import about_img from "../../public/printer-img.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Services from "./Services";

export default function About() {
  return (
    <>
      <section className=" my-16 py-16 grainy-dark " id="aboutus">
        <MaxWidthWrapper>
          <h1 className="text-4xl md:text-5xl font-semibold text-center">
            About us
          </h1>
          <div className="flex justify-center gap-10 max-w-full flex-wrap">
            <div className="max-w-xl px-4">
              <h2 className="text-xl font-semibold mt-10 mb-6">
                MORE COPY SYSTEMS
              </h2>
              <p className="text-base pr-8 md:pr-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                veritatis, dolorum vel sequi explicabo placeat hic illo?
                Blanditiis quos, suscipit odio alias repudiandae debitis, rem
                nostrum perferendis asperiores quasi temporibus. Eligendi
                libero, culpa dignissimos, minus perferendis unde nihil quisquam
                hic rem veritatis iusto et quia beatae. Animi quam quae
                accusamus eos dicta voluptatibus praesentium temporibus quasi,
                illum iste numquam unde! Accusantium suscipit est iste, rerum
                voluptatum ipsum? Repudiandae, ipsa amet exercitationem, saepe
                iusto alias nihil atque architecto obcaecati recusandae eligendi
                vitae officiis sunt rem impedit similique nostrum mollitia
                ratione. Architecto.
              </p>
            </div>
            <Image
              src={about_img}
              alt="about"
              width={400}
              className="object-contain pl-8"
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
