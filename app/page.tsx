import type { Metadata } from "next";
import HeroSection       from "@/components/home/HeroSection";
import StatsSection      from "@/components/home/StatsSection";
import ServicesPreview   from "@/components/home/ServicesPreview";
import SolutionsPreview  from "@/components/home/SolutionsPreview";
import ProcessSection    from "@/components/home/ProcessSection";
import WhyChooseUs       from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CustomerMarquee   from "@/components/home/CustomerMarquee";


export const metadata: Metadata = {
  title: "Aadithya | Lightning Protection, Earthing & Surge Protection Experts",
  description: "Founded in 2017, Aadithya delivers trusted Lightning Protection, Earthing Systems & Surge Protection Solutions across India. 18+ years of industry experience.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <SolutionsPreview />
      <ProcessSection />
      <WhyChooseUs />
      <IndustriesSection />
      <CustomerMarquee />
    </>
  );
}
