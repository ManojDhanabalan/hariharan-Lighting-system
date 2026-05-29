import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/data/company";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const BASE_URL = "https://aadithyatech.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${company.name} | Lightning Protection & Earthing Safety Experts`,
    template: `%s | ${company.name}`,
  },
  description:
    "Aadithya delivers expert Lightning Protection, Earthing Systems & Surge Protection Solutions. Headquartered in Erode, serving Coimbatore and industrial facilities across Tamil Nadu & India. Backed by 18+ years of experience.",
  keywords: [
    // Core Services & Systems
    "lightning protection system", "earthing system", "surge protection devices", "grounding system", "electrical earthing", "chemical earthing", "maintenance free earthing", "ESE lightning arrester", "conventional lightning arrester", "early streamer emission", "transient voltage surge suppressor", "TVSS", "SPD", "copper earthing", "GI earthing", "copper bonded earth rod", "earthing electrode", "earthing pit", "exothermic welding", "earth enhancement material", "backfill compound",
    
    // Services
    "lightning protection contractors", "earthing contractors", "surge protection installation", "earthing system design", "lightning protection design", "earthing audit", "lightning protection audit", "earth pit testing", "soil resistivity testing", "ground grid design", "touch and step potential analysis", "electrical safety audit", "earthing consultants", "lightning protection consultants",
    
    // Core Locations
    "lightning protection Tamil Nadu", "earthing system Tamil Nadu", "surge protection Tamil Nadu", "lightning protection Erode", "earthing contractors Erode", "chemical earthing Erode", "lightning arrester Erode", "lightning protection Coimbatore", "earthing system Coimbatore", "surge protection Coimbatore", "lightning arrester installation Coimbatore", "earthing contractors Coimbatore",
    
    // Extended Locations (Tamil Nadu Hubs)
    "lightning protection Chennai", "earthing contractors Chennai", "lightning protection Tirupur", "earthing system Tirupur", "lightning protection Salem", "earthing contractors Salem", "lightning protection Madurai", "earthing system Madurai", "lightning protection Trichy", "earthing contractors Trichy", "lightning protection Hosur", "earthing system Hosur", "lightning protection South India", "earthing contractors India",
    
    // Standards & Compliance
    "IS IEC 62305 lightning protection", "IEEE 80 earthing design", "IS 3043 earthing standard", "BS 7430 grounding", "IEC 62561 lightning protection components", "IS IEC 61643 surge protection", "CEA regulations earthing", "CBIP manual 339", "UL listed earthing rod", "CPRI tested earthing", "type tested lightning arrester", "IEC 60364 electrical installations",
    
    // Application Sectors
    "industrial earthing solutions", "substation earthing design", "GIS substation grounding", "AIS substation earthing", "solar plant earthing", "wind farm lightning protection", "data center earthing", "hospital electrical earthing", "commercial building lightning protection", "factory earthing system", "oil and gas earthing", "metro rail earthing", "communication tower lightning protection", "hazardous area earthing",
    
    // Long-tail & Specific Queries
    "best lightning protection company in Tamil Nadu", "top earthing contractors in Coimbatore", "industrial lightning protection Erode", "maintenance free chemical earthing Tamil Nadu", "ESE lightning arrester suppliers Coimbatore", "earth pit resistance testing Erode", "exothermic welding contractors Tamil Nadu", "surge protection device installation Coimbatore", "type 1 type 2 SPD installation", "lightning risk assessment IS 62305", "grounding system design software", "soil resistivity test contractors Erode",
    
    // Related technical terms
    "down conductor", "equipotential bonding", "earth termination network", "faraday cage lightning protection", "air termination network", "lightning strike counter", "surge counter", "earth busbar", "equipotential busbar", "galvanic corrosion earthing", "ground loop impedance", "fault current dissipation", "step voltage", "touch voltage", "ground potential rise", "GPR", "electrical transient protection"
  ],
  authors: [{ name: company.founderName }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: company.name,
    title: `${company.name} | Lightning Protection in Tamil Nadu`,
    description: "Expert Lightning Protection & Earthing Audits for Industrial & Commercial Facilities. Based in Erode, serving Coimbatore and beyond.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: company.name,
              description: company.tagline,
              telephone: company.phone,
              email: company.email,
              address: { "@type": "PostalAddress", streetAddress: "68A/7, Indgra Nagar, Allampalayam", addressLocality: "Pallipalayam", addressRegion: "Tamil Nadu", postalCode: "638008", addressCountry: "IN" },
              foundingDate: company.established,
              founder: { "@type": "Person", name: company.founderName },
              areaServed: "India",
            }),
          }}
        />
      </head>
      <body className={`${jakartaSans.variable} ${inter.variable} font-body antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary`}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
