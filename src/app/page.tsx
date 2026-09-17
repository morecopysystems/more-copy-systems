import Hero from "@/components/home/Hero";
import Journeys from "@/components/home/Journeys";
import ProductShowcase from "@/components/home/ProductShowcase";
import ServicesOverview from "@/components/home/ServicesOverview";
import BrandsSection from "@/components/home/BrandsSection";
import WhySection from "@/components/home/WhySection";
import ContactSection from "@/components/home/ContactSection";
import SeoIndex from "@/components/SeoIndex";

export default function Home() {
  return (
    <>
      <Hero />
      <Journeys />
      <ProductShowcase />
      <ServicesOverview />
      <BrandsSection />
      <WhySection />
      <ContactSection />
      <SeoIndex />
    </>
  );
}
