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
    default: `Aadithya Protective Systems & Technologies | Lightning Protection & Earthing Safety Experts`,
    template: `%s | Aadithya Protective Systems & Technologies`,
  },
  description:
    "Aadithya Protective Systems & Technologies delivers expert Lightning Protection, Earthing Systems & Surge Protection Solutions. Headquartered at Pallipalayam, Namakkal District (638006), serving Tamil Nadu & India. Backed by 18+ years of experience.",
  keywords: [
    // Core Services & Systems
    "lightning protection system", "earthing system", "surge protection devices", "grounding system", "electrical earthing", "chemical earthing", "maintenance free earthing", "ESE lightning arrester", "conventional lightning arrester", "early streamer emission", "transient voltage surge suppressor", "TVSS", "SPD", "copper earthing", "GI earthing", "copper bonded earth rod", "earthing electrode", "earthing pit", "exothermic welding", "earth enhancement material", "backfill compound",
    
    // Services
    "lightning protection contractors", "earthing contractors", "surge protection installation", "earthing system design", "lightning protection design", "earthing audit", "lightning protection audit", "earth pit testing", "soil resistivity testing", "ground grid design", "touch and step potential analysis", "electrical safety audit", "earthing consultants", "lightning protection consultants",
    
    // Primary Locations — Namakkal & Pallipalayam
    "lightning protection Namakkal", "earthing system Namakkal", "surge protection Namakkal", "lightning arrester Namakkal", "earthing contractors Namakkal", "chemical earthing Namakkal",
    "lightning protection Pallipalayam", "earthing system Pallipalayam", "surge protection Pallipalayam", "lightning protection contractors Pallipalayam",

    // Core Locations
    "lightning protection Tamil Nadu", "earthing system Tamil Nadu", "surge protection Tamil Nadu", "lightning protection Erode", "earthing contractors Erode", "chemical earthing Erode", "lightning arrester Erode", "lightning protection Coimbatore", "earthing system Coimbatore", "surge protection Coimbatore", "lightning arrester installation Coimbatore", "earthing contractors Coimbatore",
    
    // Extended Locations (Tamil Nadu Hubs)
    "lightning protection Chennai", "earthing contractors Chennai", "lightning protection Tirupur", "earthing system Tirupur", "lightning protection Salem", "earthing contractors Salem", "lightning protection Madurai", "earthing system Madurai", "lightning protection Trichy", "earthing contractors Trichy", "lightning protection Hosur", "earthing system Hosur", "lightning protection South India", "earthing contractors India",
    
    // Standards & Compliance
    "IS IEC 62305 lightning protection", "IEEE 80 earthing design", "IS 3043 earthing standard", "BS 7430 grounding", "IEC 62561 lightning protection components", "IS IEC 61643 surge protection", "CEA regulations earthing", "CBIP manual 339", "UL listed earthing rod", "CPRI tested earthing", "type tested lightning arrester", "IEC 60364 electrical installations",
    
    // Application Sectors
    "industrial earthing solutions", "substation earthing design", "GIS substation grounding", "AIS substation earthing", "solar plant earthing", "wind farm lightning protection", "data center earthing", "hospital electrical earthing", "commercial building lightning protection", "factory earthing system", "oil and gas earthing", "metro rail earthing", "communication tower lightning protection", "hazardous area earthing",
    
    // Long-tail & Specific Queries
    "best lightning protection company in Tamil Nadu", "top earthing contractors in Namakkal", "industrial lightning protection Namakkal", "maintenance free chemical earthing Tamil Nadu", "ESE lightning arrester suppliers Coimbatore", "earth pit resistance testing Namakkal", "exothermic welding contractors Tamil Nadu", "surge protection device installation Coimbatore", "type 1 type 2 SPD installation", "lightning risk assessment IS 62305", "grounding system design software", "soil resistivity test contractors Namakkal",
    
    // Brand & Company
    "Aadithya Protective Systems", "Aadithya Technologies", "Aadithya Protective Systems & Technologies", "Aadithya earthing", "Aadithya lightning protection",
    
    // Related technical terms
    "down conductor", "equipotential bonding", "earth termination network", "faraday cage lightning protection", "air termination network", "lightning strike counter", "surge counter", "earth busbar", "equipotential busbar", "galvanic corrosion earthing", "ground loop impedance", "fault current dissipation", "step voltage", "touch voltage", "ground potential rise", "GPR", "electrical transient protection"
  ],
  authors: [{ name: company.founderName }],
  creator: "Aadithya Protective Systems & Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Aadithya Protective Systems & Technologies",
    title: `Aadithya Protective Systems & Technologies | Lightning Protection in Tamil Nadu`,
    description: "Expert Lightning Protection & Earthing Audits for Industrial & Commercial Facilities. Based in Pallipalayam, Namakkal District, serving Tamil Nadu & beyond.",
    images: [
      {
        url: "/logo.png",
        width: 560,
        height: 240,
        alt: "Aadithya Protective Systems & Technologies",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ overflowX: 'clip' }}>
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
              address: {
                "@type": "PostalAddress",
                streetAddress: "No-09, Pillayar Kovil Street",
                addressLocality: "Pallipalayam",
                addressRegion: "Tamil Nadu",
                postalCode: "638006",
                addressCountry: "IN"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "11.4915",
                longitude: "77.7207"
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  opens: "09:00",
                  closes: "17:30"
                }
              ],
              url: "https://aadithyatech.com",
              sameAs: ["https://aadithyatech.com"],
              foundingDate: company.established,
              founder: { "@type": "Person", name: company.founderName },
              areaServed: "India",
            }),
          }}
        />
      </head>
      <body className={`${jakartaSans.variable} ${inter.variable} font-body antialiased min-h-screen flex flex-col bg-bg-primary text-text-primary`} style={{ overflowX: 'clip' }}>
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
