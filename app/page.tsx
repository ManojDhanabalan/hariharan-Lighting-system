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
  title: "Aadithya Protective Systems & Technologies | Lightning Protection & Earthing Experts – Pallipalayam, Namakkal",
  description: "Aadithya Protective Systems & Technologies delivers IS/IEC-certified Lightning Protection, Earthing Systems & Surge Protection. Based at Pallipalayam, Namakkal District (638006). Serving Tamil Nadu & India since 2017.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aadithya Protective Systems & Technologies | Lightning Protection – Pallipalayam, Namakkal",
    description: "Expert Lightning Protection, Earthing Audits & Surge Protection solutions. Headquartered at No-09, Pillayar Kovil Street, Pallipalayam, Namakkal District – 638006. Serving industries across Tamil Nadu & India.",
    url: "/",
    siteName: company.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 560,
        height: 240,
        alt: "Aadithya Protective Systems & Technologies Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadithya Protective Systems & Technologies | Lightning Protection – Namakkal",
    description: "IS/IEC-certified Lightning Protection & Earthing Systems. Based in Pallipalayam, Namakkal District. Serving Tamil Nadu & India since 2017.",
    images: ["/logo.png"],
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
            alternateName: "Aadithya Protective Systems & Technologies",
            url: "https://aadithyatech.com",
            description: company.tagline,
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
