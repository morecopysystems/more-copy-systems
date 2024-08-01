import { MapPin, Phone } from "lucide-react";
import MapContainer from "./MapContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Contact() {
  return (
    <section
      className="my-20 grainy-dark  "
      id="contact"
    >
      <MaxWidthWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold text-center py-9">
          Contact us
        </h1>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-start py-3">
            Store Location
          </h2>
          <MapContainer />
        </div>
        <div className="py-6 ">
          <div className="flex gap-1 my-2">
            <Phone />
            <h2 className="text-lg font-medium">
              +91 98470 39467, +91 9048567007
            </h2>
          </div>
          <div className="flex gap-2">
            <MapPin />
            <p>
              Metro Pillar No : 625, P.C Chambers, Banerji Road, Ashir Bhavan
              Ln, Kacheripady, Kochi, Kerala 682018
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
