import type { Metadata } from "next";
import PageHero          from "@/components/shared/PageHero";
import StatsSection      from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTABanner         from "@/components/shared/CTABanner";
import SectionHeader     from "@/components/shared/SectionHeader";
import { company }       from "@/data/company";
import { CheckCircle2, Target, Eye, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Aadithya — founded by Hariharan with a mission to bring world-class lightning protection and earthing expertise to industries across India since 2010.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="Who We Are" subtitle="A knowledge-driven engineering company committed to protecting life and assets."
        tag="About Aadithya" breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />

      {/* Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <SectionHeader overline="Our Story" title="Building a Legacy of Safety" className="mb-8" />
              <div className="space-y-5 text-text-secondary leading-relaxed text-base">
                <p>Aadithya was founded with a singular mission: to bring world-class electrical safety — specifically lightning protection and grounding expertise — to industries across Tamil Nadu and beyond. With over 15 years of hands-on engineering experience, our founder Hariharan built Aadithya from the ground up, combining deep technical knowledge with an unwavering commitment to safety and service quality.</p>
                <p>We are a knowledge-driven company with a proven track record in Grounding, Power Quality, Lightning Protection, Earthing Design & Health Assessment, and Power System Studies. Based in Erode, Tamil Nadu, we serve clients across industries — from small commercial buildings to large substations and solar farms.</p>
                <p>Our approach is always the same: understand the client&apos;s system, assess risks against the latest Indian and International standards, and deliver solutions that are technically superior and cost-optimum.</p>
              </div>
              <div className="mt-10 flex flex-col gap-3">
                {[{ year: "2010", event: "Aadithya founded in Erode, Tamil Nadu" }, { year: "2015", event: "Expanded operations to 6+ states" }, { year: "2020", event: "Completed 300+ successful projects" }, { year: "2024", event: "500+ projects, 12+ states served" }].map((m) => (
                  <div key={m.year} className="flex items-center gap-4">
                    <div className="shrink-0 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-volt font-mono font-bold text-sm">{m.year}</div>
                    <div className="flex-1 h-px bg-slate-100" />
                    <p className="text-text-secondary text-sm">{m.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder card */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card">
                <div className="absolute top-0 left-0 right-0 h-1 bg-volt-gradient" />
                <div className="w-full h-56 bg-blue-50 flex flex-col items-center justify-center border-b border-slate-100 gap-3">
                  <div className="w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center"><span className="text-4xl">👤</span></div>
                  <span className="text-text-dim text-xs font-mono">Founder portrait</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">{company.founderName}</h3>
                  <p className="text-volt font-display font-bold text-xs tracking-[0.2em] uppercase mb-4 pb-4 border-b border-slate-100">Founder & Managing Director</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>⚡ {company.stats.yearsExperience} Engineering Experience</p>
                    <p>📍 {company.location}</p>
                    <p>📞 <a href={`tel:${company.phone.replace(/[^0-9+]/g,"")}`} className="text-volt hover:text-volt-dark transition-colors">{company.phone}</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14"><SectionHeader overline="What Drives Us" title="Our Foundation" subtitle="Every project is guided by these principles that define who we are." centered /></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", color: "bg-blue-50 border-blue-100 text-blue-600", desc: "To provide technically superior, cost-effective, and standards-compliant electrical safety solutions that protect human life and industrial assets." },
              { icon: Eye, title: "Our Vision", color: "bg-violet-50 border-violet-100 text-violet-600", desc: "To be the most trusted name in Lightning Protection and Earthing Solutions across South India — setting new standards for safety and engineering excellence." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-card transition-all card-hover">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-volt uppercase tracking-tight mb-4">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-volt" />
              <div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5 pl-2">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 uppercase tracking-tight mb-5">Core Values</h3>
              <ul className="space-y-4">
                {company.values.map((val) => (
                  <li key={val.title} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 font-display font-bold text-sm mb-0.5">{val.title}</strong>
                      <span className="text-xs text-text-dim leading-relaxed">{val.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <IndustriesSection />
      <CTABanner headline="Ready to Work With Us?" subtext="Contact our engineering team to discuss your specific protection requirements."
        ctaLabel="Get in Touch" ctaHref="/contact" secondaryCta={{ label: "View Our Services", href: "/services" }} />
    </>
  );
}
