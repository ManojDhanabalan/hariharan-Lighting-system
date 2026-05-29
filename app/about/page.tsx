import type { Metadata } from "next";
import { company } from "@/data/company";
import {
  Target, Eye, Zap, ArrowRight, ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import OurStorySection from "@/components/about/OurStorySection";

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
      <OurStorySection />

      {/* ── Vision & Mission ─────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl">
            
            {/* Vision (Amber/Orange Side) */}
            <div className="flex-1 bg-[#DF8626] p-8 lg:p-10 flex flex-col items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#B6691A] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#A35D16] transition-colors">
                  <Eye className="w-5 h-5 text-[#FDE3C4]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-medium tracking-tight text-3xl text-white">Our Vision</h3>
              </div>
              
              <div className="space-y-3 relative z-10">
                {company.vision.map((item, i) => (
                  <p key={i} className="text-white/95 text-[14px] lg:text-[15px] leading-relaxed font-body">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Mission (Teal Side) */}
            <div className="flex-1 bg-[#016C76] p-8 lg:p-10 flex flex-col items-start relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 group-hover:scale-110 transition-transform duration-700" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#015259] flex items-center justify-center shrink-0 shadow-inner group-hover:bg-[#01444A] transition-colors">
                  <Target className="w-5 h-5 text-[#81D4DC]" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-medium tracking-tight text-3xl text-white">Our Mission</h3>
              </div>
              
              <div className="space-y-3 relative z-10">
                {company.mission.map((item, i) => (
                  <p key={i} className="text-white/95 text-[14px] lg:text-[15px] leading-relaxed font-body">
                    {item}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Values & Advantage (Combined) ───────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Left - Numbered Grid */}
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12 pr-4 lg:pr-8">
              {[
                {
                  num: "1.",
                  title: "Uncompromising Safety",
                  desc: "Zero compromise on quality or safety. We engineer protection systems that never fail when it matters most."
                },
                {
                  num: "2.",
                  title: "IS/IEC Certified",
                  desc: "Full compliance with international safety standards, ensuring every project meets rigorous regulatory requirements."
                },
                {
                  num: "3.",
                  title: "Deep Expertise",
                  desc: "Backed by over 18 years of hands-on engineering experience across critical infrastructure and commercial sectors."
                },
                {
                  num: "4.",
                  title: "Pan-India Reach",
                  desc: "Serving clients across 12+ Indian states with rapid emergency response and dedicated engineering support."
                }
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-display font-extrabold text-4xl text-slate-800 mb-3">{item.num}</div>
                  <h3 className="font-display font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right - Masonry Collage */}
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300" alt="Industrial Safety" className="w-full h-40 object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=400" alt="Engineering Team" className="w-full h-64 object-cover shadow-sm" />
              </div>
              
              {/* Right Column */}
              <div className="flex flex-col gap-4">
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400&h=600" alt="Project Execution" className="w-full h-64 object-cover shadow-sm" />
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400&h=300" alt="Site Inspection" className="w-full h-40 object-cover shadow-sm" />
              </div>
            </div>
            
          </div>
        </div>
      </section>



      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-bg-secondary relative overflow-hidden">
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
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-wide rounded-2xl transition-colors">
                    <span className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link href="/services/earthing-audit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-display font-bold text-sm uppercase tracking-wide rounded-2xl transition-all hover:scale-[1.02] backdrop-blur-md">
                    View Earthing Audit
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
