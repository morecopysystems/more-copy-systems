import { MapPin, Phone } from "lucide-react";
import MapContainer from "./MapContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Contact() {
  return (
    <section className="mb-20 grainy-dark  " id="contact">
      <MaxWidthWrapper>
        <h2 className="text-3xl md:text-5xl font-semibold text-center py-9">
          Contact us
        </h2>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-start py-3">
            Store Location
          </h3>
          <MapContainer />
        </div>
        <div className="py-6 ">
          <div className="flex gap-1 my-2">
            <Phone />
            <p className="text-lg font-medium">
              <a href="tel:+919847039467" className="hover:underline">
                +91 98470 39467
              </a>
              {", "}
              <a href="tel:+919048567007" className="hover:underline">
                +91 90485 67007
              </a>
            </p>
          </div>
          <div className="flex gap-2">
            <MapPin />
            <p>
              More Copy Systems
              <br />
              Ashir Bhavan Ln, Kacheripady
              <br />
              Ernakulam, Kerala — 682018
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
