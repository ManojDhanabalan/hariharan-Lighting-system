import type { Metadata } from "next";
import PageHero          from "@/components/shared/PageHero";
import StatsSection      from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTABanner         from "@/components/shared/CTABanner";
import SectionHeader     from "@/components/shared/SectionHeader";
import { company }       from "@/data/company";
import { CheckCircle2, Target, Eye, Star, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2017, Aadithya is a trusted name in lightning protection, earthing systems, and surge protection solutions, backed by over 18 years of industry experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        subtitle="A knowledge-driven engineering company committed to protecting life and assets."
        tag="About Aadithya"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]}
      />

      {/* Story */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1">
              <SectionHeader overline="Our Story" title="Building a Legacy of Safety" className="mb-8" />
              <div className="space-y-5 text-text-secondary leading-relaxed text-base">
                <p>
                  Founded in 2017, Aadithya is a trusted name in the field of lightning protection,
                  earthing systems, and surge protection solutions. Backed by over 18 years of industry
                  experience, we bring deep technical expertise and practical knowledge to every project
                  we undertake.
                </p>
                <p>
                  At Aadithya, we are committed to delivering reliable and effective protection systems
                  that safeguard people, property, and equipment from electrical hazards. Our solutions
                  are designed to meet industry standards while ensuring long-term safety and performance.
                </p>
                <p>
                  With a strong focus on quality, innovation, and customer satisfaction, we have built a
                  reputation for providing dependable services tailored to the unique needs of our clients
                  across various sectors.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-10 flex flex-col gap-3">
                {[
                  { year: "2017", event: "Aadithya founded in Erode, Tamil Nadu" },
                  { year: "2019", event: "Expanded operations to key industrial sectors" },
                  { year: "2021", event: "Completed 200+ successful protection projects" },
                  { year: "2025", event: "500+ projects, serving clients across 12+ states" },
                ].map((m) => (
                  <div key={m.year} className="flex items-center gap-4">
                    <div className="shrink-0 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-volt font-mono font-bold text-sm">
                      {m.year}
                    </div>
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
                  <div className="w-20 h-20 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center">
                    <span className="text-4xl">👤</span>
                  </div>
                  <span className="text-text-dim text-xs font-mono">Founder portrait</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">{company.founderName}</h3>
                  <p className="text-volt font-display font-bold text-xs tracking-[0.2em] uppercase mb-4 pb-4 border-b border-slate-100">
                    Founder &amp; Managing Director
                  </p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>⚡ {company.stats.yearsExperience} Industry Experience</p>
                    <p>🏢 Est. {company.established}</p>
                    <p>📍 {company.location}</p>
                    <p>
                      📞{" "}
                      <a
                        href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-volt hover:text-volt-dark transition-colors"
                      >
                        {company.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <SectionHeader
              overline="Where We Are Headed"
              title="Our Vision"
              subtitle="A clear direction guiding every decision we make."
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {company.vision.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm pt-1">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-14">
            <SectionHeader
              overline="What Drives Us"
              title="Our Mission"
              subtitle="Every project is guided by a commitment to safety, quality, and lasting results."
              centered
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {company.mission.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-card transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-text-secondary leading-relaxed text-sm pt-1">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-14">
            <SectionHeader overline="Our Principles" title="Core Values" centered />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.values.map((val) => (
              <div
                key={val.title}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-card transition-all card-hover text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-6 h-6 text-volt" />
                </div>
                <strong className="block text-slate-800 font-display font-bold text-base mb-2">{val.title}</strong>
                <span className="text-xs text-text-dim leading-relaxed">{val.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50/50 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-14">
            <SectionHeader
              overline="Who Trusts Us"
              title="Our Customers"
              subtitle="Proud to serve leading organisations across diverse sectors."
              centered
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {company.customers.map((c, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-card transition-all card-hover flex items-center gap-4"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Building2 className="w-6 h-6 text-volt" />
                </div>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm leading-tight">{c.name}</p>
                  <p className="text-xs text-text-dim mt-1">{c.sector}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <IndustriesSection />
      <CTABanner
        headline="Ready to Work With Us?"
        subtext="Contact our engineering team to discuss your specific protection requirements."
        ctaLabel="Get in Touch"
        ctaHref="/contact"
        secondaryCta={{ label: "View Our Services", href: "/services" }}
      />
    </>
  );
}
