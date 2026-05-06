import type { Metadata } from "next";
import HeroSection       from "@/components/home/HeroSection";
import StatsSection      from "@/components/home/StatsSection";
import ServicesPreview   from "@/components/home/ServicesPreview";
import SolutionsPreview  from "@/components/home/SolutionsPreview";
import ProcessSection    from "@/components/home/ProcessSection";
import WhyChooseUs       from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTABanner         from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Aadithya | Lightning Protection & Earthing Safety Experts",
  description: "Expert Lightning Protection, Earthing Audits & Power Quality Solutions for Industrial & Commercial Facilities across India since 2010.",
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
      <CTABanner
        headline="Is Your Facility Fully Protected?"
        subtext="Get a professional Earthing or Lightning Protection audit today. Our engineers are ready to help."
        ctaLabel="Request a Free Audit"
        ctaHref="/contact"
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
