import type { Metadata } from "next";
import HeroSection       from "@/components/home/HeroSection";
import StatsSection      from "@/components/home/StatsSection";
import ServicesPreview   from "@/components/home/ServicesPreview";
import SolutionsPreview  from "@/components/home/SolutionsPreview";
import ProcessSection    from "@/components/home/ProcessSection";
import WhyChooseUs       from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CustomerMarquee   from "@/components/home/CustomerMarquee";

import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Aadithya | Lightning Protection & Earthing Experts in Tamil Nadu",
  description: "Aadithya delivers trusted Lightning Protection, Earthing Systems & Surge Protection Solutions. Headquartered in Erode, proudly serving Coimbatore and Tamil Nadu.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aadithya | Lightning Protection & Earthing Experts in Tamil Nadu",
    description: "Aadithya delivers trusted Lightning Protection, Earthing Systems & Surge Protection Solutions. Headquartered in Erode, proudly serving Coimbatore and Tamil Nadu.",
    url: "/",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadithya | Lightning Protection & Earthing Experts in Tamil Nadu",
    description: "Trusted Lightning Protection & Earthing Solutions in Erode, Coimbatore, and across Tamil Nadu.",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: company.name,
            url: "https://aadithyatech.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://aadithyatech.com/services/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
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
