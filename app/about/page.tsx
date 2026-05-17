import type { Metadata } from "next";
import { company } from "@/data/company";
import {
  CheckCircle2, Target, Eye, Zap, MapPin, Phone, User,
  Building2, Shield, ArrowRight, Globe, Award,
  Clock, ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import CustomerLogos from "@/components/about/CustomerLogos";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "About Us | Aadithya – Lightning Protection & Earthing Experts",
  description:
    "Aadithya is a trusted name in lightning protection, earthing systems, and surge protection solutions backed by 18+ years of field experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Aadithya"
        subtitle="A knowledge-driven engineering company specialising in lightning protection, earthing systems, and surge safety across India."
      />

      {/* ── Our Story ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start max-w-6xl mx-auto">
            {/* Left - Story */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Our Story</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
                Building a Legacy of Safety
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2017, Aadithya has grown into a trusted name in lightning protection
                  and earthing systems — backed by over 18 years of hands-on engineering experience.
                </p>
                <p>
                  We design and commission IS/IEC-compliant protection systems for factories,
                  commercial buildings, power substations, telecom towers, and critical
                  infrastructure across 12+ Indian states.
                </p>
                <p>
                  Every project we deliver is a commitment to zero compromise on safety,
                  quality, and long-term performance.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { stat: "500+", label: "Projects Completed" },
                  { stat: "18+", label: "Years Experience" },
                  { stat: "12+", label: "States Served" },
                  { stat: "92%", label: "Client Retention" },
                  { stat: "100%", label: "IS/IEC Compliant" },
                  { stat: "24h", label: "Response Time" },
                ].map((h) => (
                  <div key={h.label} className="group bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-maroon-200 hover:shadow-lg transition-all duration-300">
                    <div className="font-display font-extrabold text-2xl text-maroon-700 group-hover:text-maroon-800 transition-colors">{h.stat}</div>
                    <div className="text-xs text-slate-500 mt-1">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Founder card */}
            <div className="lg:sticky lg:top-32">
              <div className="relative bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-xl">
                {/* Top gradient */}
                <div className="h-1.5 bg-gradient-to-r from-maroon-600 to-violet-500" />

                {/* Avatar area */}
                <div className="p-8 pb-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center mx-auto shadow-lg shadow-maroon-600/25">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="p-8 pt-6 text-center">
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">{company.founderName}</h3>
                  <p className="text-maroon-700 font-display font-semibold text-xs tracking-[0.15em] uppercase mb-6">
                    Founder & Managing Director
                  </p>

                  <div className="space-y-3 text-sm text-slate-600 text-left">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <Zap className="w-4 h-4 text-maroon-600 shrink-0" />
                      <span>{company.stats.yearsExperience} Industry Experience</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <Building2 className="w-4 h-4 text-maroon-600 shrink-0" />
                      <span>Est. {company.established}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <MapPin className="w-4 h-4 text-maroon-600 shrink-0" />
                      <span>{company.location}</span>
                    </div>
                    <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                       className="flex items-center gap-3 p-3 bg-maroon-50 rounded-xl text-maroon-700 hover:bg-maroon-100 transition-colors">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span className="font-medium">{company.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ─────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-slate-50">

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
              <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Our Direction</span>
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900">Vision & Mission</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="group bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 hover:shadow-xl hover:border-maroon-100 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shadow-lg shadow-maroon-600/25 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">Our Vision</h3>
              </div>
              <ul className="space-y-4">
                {company.vision.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-maroon-600 mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="group bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 hover:shadow-xl hover:border-violet-100 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">Our Mission</h3>
              </div>
              <ul className="space-y-4">
                {company.mission.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values (Bento Grid) ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
              <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Our Principles</span>
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {company.values.map((val, i) => {
              const gradients = [
                "from-maroon-600 to-maroon-700",
                "from-violet-500 to-violet-600",
                "from-amber-500 to-amber-600",
                "from-red-500 to-red-600",
                "from-teal-500 to-teal-600",
                "from-green-500 to-green-600",
              ];
              return (
                <div
                  key={val.title}
                  className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:shadow-xl hover:border-slate-200 transition-all duration-500"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-maroon-700 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{val.description}</p>

                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${gradients[i]} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us (Feature Grid) ─────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#030712] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-maroon-700/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
              <Shield className="w-3.5 h-3.5 text-maroon-500" />
              <span className="text-slate-300 text-xs font-display font-medium tracking-[0.15em] uppercase">Why Aadithya</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white mb-4">
              The Aadithya Advantage
            </h2>
            <p className="text-slate-400 text-lg">
              What sets us apart in the electrical safety industry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: "IS/IEC Certified", desc: "Full compliance with international safety standards", color: "text-maroon-500", bg: "bg-maroon-600/10" },
              { icon: Award, title: "18+ Years", desc: "Deep engineering expertise across industries", color: "text-amber-400", bg: "bg-amber-500/10" },
              { icon: Globe, title: "Pan-India", desc: "Serving clients across 12+ Indian states", color: "text-violet-400", bg: "bg-violet-500/10" },
              { icon: Clock, title: "24h Response", desc: "Rapid emergency support when you need it", color: "text-teal-400", bg: "bg-teal-500/10" },
            ].map((item) => (
              <div key={item.title} className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customers ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
              <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Trusted By</span>
              <div className="w-6 h-[2px] bg-maroon-600 rounded-full" />
            </div>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">
              Our Customers
            </h2>
            <p className="text-slate-500 text-lg">
              Proud to protect leading organisations across diverse sectors.
            </p>
          </div>

          <CustomerLogos />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 lg:p-16 overflow-hidden">
              {/* Background effects */}
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-maroon-700/20 rounded-full blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 w-[250px] h-[250px] bg-violet-600/15 rounded-full blur-[80px]" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-maroon-500" />
                    <span className="text-xs font-display font-bold uppercase tracking-[0.2em] text-maroon-300">
                      Ready to Get Started?
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white leading-tight mb-4">
                    Ready to Work With Us?
                  </h2>
                  <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                    Contact our engineering team to discuss your specific protection requirements.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                  <Link href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-maroon-700 to-maroon-600 text-white font-display font-bold text-sm uppercase tracking-wide rounded-2xl overflow-hidden shadow-lg shadow-maroon-600/25 hover:shadow-maroon-600/40 transition-all hover:scale-[1.02]">
                    <span className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link href="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-display font-bold text-sm uppercase tracking-wide rounded-2xl transition-all hover:scale-[1.02] backdrop-blur-md">
                    View Our Services
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
