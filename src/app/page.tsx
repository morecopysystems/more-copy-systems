import Hero from "@/components/home/Hero";
import Journeys from "@/components/home/Journeys";
import ProductShowcase from "@/components/home/ProductShowcase";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhySection from "@/components/home/WhySection";
import LocalSection from "@/components/home/LocalSection";
import ContactCta from "@/components/ContactCta";
import SeoIndex from "@/components/SeoIndex";

export default function Home() {
  return (
    <>
      <Hero />
      <Journeys />
      <ProductShowcase />
      <BrandsSection />
      <ServicesSection />
      <WhySection />
      <LocalSection />
      <ContactCta />
      <SeoIndex />
    </>
  );
}
