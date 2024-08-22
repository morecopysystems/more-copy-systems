import { MapPin, Phone } from "lucide-react";
import MapContainer from "./MapContainer";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Contact() {
  return (
    <section className="mb-20 grainy-dark  " id="contact">
      <MaxWidthWrapper>
        <h4 className="text-3xl md:text-5xl font-semibold text-center py-9">
          Contact us
        </h4>
        <div>
          <h5 className="text-xl md:text-2xl font-semibold text-start py-3">
            Store Location
          </h5>
          <MapContainer />
        </div>
        <div className="py-6 ">
          <div className="flex gap-1 my-2">
            <Phone />
            <p className="text-lg font-medium">
              +91 98470 39467, +91 9048567007
            </p>
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
