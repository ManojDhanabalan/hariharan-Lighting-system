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

const BASE_URL = "https://aadithya.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${company.name} | Lightning Protection & Earthing Safety Experts`,
    template: `%s | ${company.name}`,
  },
  description:
    "Founded in 2017, Aadithya delivers expert Lightning Protection, Earthing Systems & Surge Protection Solutions for Industrial & Commercial facilities across India. Backed by 18+ years of industry experience.",
  keywords: ["lightning protection", "earthing system", "surge protection", "IS IEC 62305", "IEEE 80", "Erode", "Tamil Nadu"],
  authors: [{ name: company.founderName }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: company.name,
    title: `${company.name} | Lightning Protection & Earthing Safety Experts`,
    description: "Expert Lightning Protection & Earthing Audits for Industrial & Commercial Facilities across India.",
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
