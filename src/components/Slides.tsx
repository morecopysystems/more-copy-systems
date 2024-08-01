import { HeroImgs } from "@/constants";


export const SLIDES = HeroImgs.map((imgUrl, index) => ({
  id: index,       // A unique identifier for each slide
  imgUrl: imgUrl,  // URL of the image
  altText: `Slide ${index}`, // Alternative text for the image
}));
