import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar/Navbar";
import Products from "@/components/products/Products";
import Services from "@/components/Services";

import Testimonials from "@/components/Testimonials";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo";

export default function Home() {
  return (
    <div className="grainy-light">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <TypewriterEffectDemo/>
    </div>
  );
}
