import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { company } from "@/data/company";
import { MapPin, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Aadithya for lightning protection and earthing audits. Call or email us today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Get in Touch" />

      {/* ── Main Content ───────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">

            {/* Left - Contact Info (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                  <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Contact Information</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-3">
                  How Can We Help?
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  Whether you need an earthing audit, lightning protection system, or surge protection solution — we&apos;re here to help.
                </p>
              </div>

              <ContactInfo />

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "IS/IEC Certified", desc: "Full compliance" },
                  { icon: Zap, label: "24h Response", desc: "Quick turnaround" },
                ].map((badge) => (
                  <div key={badge.label} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <badge.icon className="w-5 h-5 text-maroon-600 mb-2" />
                    <div className="text-sm font-display font-semibold text-slate-900">{badge.label}</div>
                    <div className="text-xs text-slate-500">{badge.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact Form (3 cols) */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ────────────────────────────────────── */}
      <section className="relative h-[400px] lg:h-[480px] bg-slate-100 overflow-hidden">
        <iframe
          title="Aadithya Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.66611382404!2d77.7941225750505!3d11.388062788795556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba966f155555555%3A0xe490d516d131c600!2sAadithya%20Protective%20Systems%20%26%20Technologies!5e0!3m2!1sen!2sin!4v1715873945678!5m2!1sen!2sin"
          className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay card */}
        <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto lg:w-96">
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-7 shadow-2xl">
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
              className="inline-flex items-center gap-2 text-sm text-maroon-700 font-display font-semibold hover:text-maroon-800 transition-colors group">
              Get Directions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
