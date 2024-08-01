"use client";

import { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.dataset.useServiceCore 
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <article className=" ">
      <MaxWidthWrapper>
        <h1 className="text-2xl md:text-4xl font-semibold text-center mt-8  mb-16">
          What our customers say..
        </h1>
        <div
          className="elfsight-app-d28f778e-5301-4d6a-bebf-f597ff7bf0f1"
          data-elfsight-app-lazy
        ></div>
      </MaxWidthWrapper>
    </article>
  );
};

export default Testimonials;

{
  /* <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div
        class="elfsight-app-d28f778e-5301-4d6a-bebf-f597ff7bf0f1"
        data-elfsight-app-lazy
      ></div> */
}
