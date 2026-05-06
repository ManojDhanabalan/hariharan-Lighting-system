import type { Metadata } from "next";
import PageHero    from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aadithya for lightning protection, earthing audits, and power quality services. Call or email us today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch" subtitle="Our engineering team is ready to help with your electrical safety requirements."
        tag="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us", href: "/contact" }]} />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
            <div className="w-full lg:w-5/12 xl:w-2/5">
              <h2 className="font-display font-bold text-3xl text-slate-900 uppercase tracking-tight mb-8">Contact Information</h2>
              <ContactInfo />
            </div>
            <div className="flex-1"><ContactForm /></div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[420px] w-full bg-bg-secondary border-y border-slate-200 relative overflow-hidden">
        <iframe
          title="Aadithya Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(company.location)}&output=embed&z=14`}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl px-5 py-3 flex items-center gap-3 shadow-card">
          <span className="text-volt text-xl">📍</span>
          <div>
            <p className="text-slate-900 font-display font-bold text-sm">{company.name}</p>
            <p className="text-text-secondary text-xs">{company.location}</p>
          </div>
        </div>
      </section>
    </>
  );
}
