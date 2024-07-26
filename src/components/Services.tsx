import MaxWidthWrapper from "./MaxWidthWrapper";
import { Servicess } from "@/constants";

export default function Services() {
  return (
    <section>
      <div className="flex">
        
          {Servicess.map((service) => (
            <div key={service.title}>
              <h1>{service.title}</h1>
              <p>{service.desc}</p>
            </div>
          ))}
     
      </div>
    </section>
  );
}
