import About from "@/components/About";
import { Brands } from "@/components/Brands";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/products/Products";
import GoogleReview from "@/components/GoogleReview";

export default function Home() {
  return (
    <div className="grainy-light">
      <Hero />
      <About />
      <Products />
      <Brands />
      <GoogleReview />
      <Contact />
    </div>
  );
}
