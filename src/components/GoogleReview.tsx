"use client";

import { useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { Star } from "lucide-react";

const GoogleReview = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://static.elfsight.com/platform/platform.js";
  //   script.dataset.useServiceCore = "true";
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <article className="bg-white py-10 md:py-0">
      <MaxWidthWrapper>
        <div className="flex justify-center gap-4 items-center">
          <a href="https://g.co/kgs/YSuww1X" target="_blank">
            <Image
              src="/Google My Business Logo.png"
              alt="google bussinee"
              width={200}
              height={200}
              className="w-20 cursor-pointer"
            />
          </a>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex ">
              <p className="text-2xl mr-1 font-bold">5.0</p>
              <Star className="text-[#fcba03] fill-[#fcba03]" />
              <Star className="text-[#fcba03] fill-[#fcba03]" />
              <Star className="text-[#fcba03] fill-[#fcba03]" />
              <Star className="text-[#fcba03] fill-[#fcba03]" />
              <Star className="text-[#fcba03] fill-[#fcba03]" />
            </div>
            <a
              href="https://www.google.com/search?hl=en-IN&gl=in&q=Metro+Pillar+No+:+625,+More+Copy+Systems,+P.C+Chambers,+Banerji+Road,+Ashir+Bhavan+Ln,+Kacheripady,+Kochi,+Kerala+682018&ludocid=1239549074488004333&lsig=AB86z5WzO8QooGE-IWvFa9_yV4dU#lrd=0x3b080d19cf2a1d71:0x1133c350da858eed,3"
              className=" text-lg md:text-xl cursor-pointer font-semibold text-center  bg-blue-600 text-white rounded-full px-4 py-2"
            >
              Review us on Google
            </a>
          </div>
        </div>
      </MaxWidthWrapper>
    </article>
  );
};

export default GoogleReview;
