import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { company } from "@/data/company";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Lightning Protection Services in Tamil Nadu",
  description: "Get in touch with Aadithya for lightning protection and earthing audits in Erode, Coimbatore, and Tamil Nadu. Call or email us today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Aadithya - Tamil Nadu",
    description: "Get in touch with Aadithya for lightning protection and earthing audits in Erode, Coimbatore, and Tamil Nadu. Call or email us today.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Aadithya - Tamil Nadu",
    description: "Get in touch with Aadithya for lightning protection and earthing audits in Erode & Coimbatore.",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "Organization",
              name: company.name,
              telephone: company.phone,
              email: company.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "No-09, Pillayar Kovil Street",
                addressLocality: "Pallipalayam",
                addressRegion: "Tamil Nadu",
                postalCode: "638006",
                addressCountry: "IN"
              }
            }
          }),
        }}
      />
      <PageHero title="Contact Us" subtitle="Any question or remarks? Just write us a message!" />

      {/* ── Main Content ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
        
        {/* Massive Orange Background Shape */}
        <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-[#F97316] rounded-b-[400px] z-0 hidden lg:block translate-x-10 -translate-y-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row p-2">
            
            {/* Left - Dark Blue Contact Info Panel */}
            <div className="lg:w-[40%] bg-[#0A192F] rounded-[1.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-between">
              
              {/* Overlapping Circles Background */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-sm" />
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-sm" />

              <div className="relative z-10">
                <h3 className="font-display font-bold text-3xl mb-2">Contact Information</h3>
                <p className="text-slate-400 text-sm mb-12">Say something to start a live chat!</p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <Phone className="w-5 h-5 text-white/80" />
                    <span className="text-sm">{company.phone}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <Mail className="w-5 h-5 text-white/80" />
                    <span className="text-sm">{company.email}</span>
                  </div>
                  <div className="flex items-start gap-6">
                    <MapPin className="w-6 h-6 text-white/80 shrink-0 mt-1" />
                    <span className="text-sm leading-relaxed max-w-[250px]">{company.location}</span>
                  </div>
                </div>
              </div>


            </div>

            {/* Right - Contact Form Wrapper */}
            <div className="lg:w-[60%] p-10 lg:p-14">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Map Section ────────────────────────────────────── */}
      <section className="relative h-[400px] lg:h-[480px] bg-slate-100 overflow-hidden">
        <iframe
          title="Aadithya Location"
          src="https://maps.google.com/maps?q=No-09,+Pillayar+Kovil+Street,+Pallipalayam,+Namakkal+District,+Tamil+Nadu+638006&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay card */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto lg:w-96">
          <div className="bg-bg-card/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-7 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shadow-lg shadow-maroon-600/25">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900">{company.name}</h3>
                <p className="text-xs text-slate-500">Engineering Office</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-4">{company.location}</p>
            <Link href={company.googleMapsLink || "#"} target="_blank"
              className="inline-flex items-center gap-2 text-sm text-[#F97316] font-display font-semibold hover:text-[#EA580C] transition-colors group">
              Get Directions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
