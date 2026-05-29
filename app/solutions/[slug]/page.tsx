import type { Metadata } from "next";

import { solutions } from "@/data/solutions";
import { company } from "@/data/company";
import { notFound } from "next/navigation";
import {
  CheckCircle2, Factory, FileText, Phone, Settings,
  Layers, Zap, PenTool, ShieldAlert, LucideIcon,
  Shield, ArrowRight, ClipboardCheck,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

const IconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  PenTool,
  ShieldAlert,
};

const solutionConfig: Record<string, { gradient: string; bg: string; text: string; border: string; shadow: string; iconBg: string; accent: string }> = {
  "earthing-system": { gradient: "from-[#7B2D3E] to-[#5C1F2E]", bg: "bg-[#FAF6F6]", text: "text-[#7B2D3E]", border: "border-[#7B2D3E]/10", shadow: "shadow-[#7B2D3E]/15", iconBg: "bg-[#7B2D3E]/10", accent: "maroon" },
  "lightning-system": { gradient: "from-[#D97706] to-[#B45309]", bg: "bg-[#FFFBEB]", text: "text-[#D97706]", border: "border-[#D97706]/10", shadow: "shadow-[#D97706]/15", iconBg: "bg-[#D97706]/10", accent: "amber" },
  "ground-design": { gradient: "from-[#9B3D52] to-[#7B2D3E]", bg: "bg-[#FCF5F6]", text: "text-[#9B3D52]", border: "border-[#9B3D52]/10", shadow: "shadow-[#9B3D52]/15", iconBg: "bg-[#9B3D52]/10", accent: "crimson" },
  "surge-protection": { gradient: "from-[#5C1F2E] to-[#3D1220]", bg: "bg-[#F9F1F3]", text: "text-[#5C1F2E]", border: "border-[#5C1F2E]/10", shadow: "shadow-[#5C1F2E]/15", iconBg: "bg-[#5C1F2E]/10", accent: "maroonDark" },
};

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = solutions.find((s) => s.slug === params.slug);
  if (!s) return {};
  return { title: s.title, description: s.shortDesc, alternates: { canonical: `/solutions/${s.slug}` } };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  const config = solutionConfig[solution.slug] || solutionConfig["earthing-system"];

  return (
    <>
      <PageHero
        title={solution.title}
        subtitle={solution.subtitle}
        stats={[
          ...(solution.standards ? [{ icon: "shield" as const, label: `${solution.standards.length} Standards Compliant` }] : []),
          ...(solution.applicationArea ? [{ icon: "factory" as const, label: `${solution.applicationArea.length}+ Industries` }] : []),
          ...(solution.deliveryModel ? [{ icon: "settings" as const, label: "Full Lifecycle" }] : []),
        ]}
      />

      {/* ── Main Content + Sidebar ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

            {/* ── Main Content ─────────────────────────────── */}
            <div className="lg:col-span-2 space-y-16">

              {/* Overview */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                  <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Overview</span>
                </div>
                <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                  {solution.overview.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* What Are Surges (Surge Protection only) */}
              {solution.whatAreSurges && (
                <div className={`p-7 ${config.bg} border ${config.border} rounded-3xl`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md`}>
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">Understanding Transient Overvoltages</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">{solution.whatAreSurges}</p>
                </div>
              )}

              {/* Why Good Grounding Matters (Earthing System only) */}
              {solution.goodGroundingImportance && (
                <div className={`p-7 ${config.bg} border ${config.border} rounded-3xl`}>
                  <h3 className={`font-display font-bold text-base ${config.text} uppercase tracking-wide mb-5`}>Why Good Grounding Matters</h3>
                  <ul className="space-y-4">
                    {solution.goodGroundingImportance.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className={`w-5 h-5 ${config.text} shrink-0 mt-0.5`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Design Process (Ground Design only) */}
              {solution.designProcess && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Our Engineering Process</span>
                  </div>
                  <div className="relative pl-8 space-y-6">
                    {/* Vertical line */}
                    <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200" />

                    {solution.designProcess.map((step, i) => (
                      <div key={i} className="relative">
                        {/* Step number */}
                        <div className={`absolute -left-[2.5rem] top-0 w-8 h-8 rounded-full bg-gradient-to-br ${config.gradient} text-white flex items-center justify-center shadow-md z-10`}>
                          <span className="font-mono font-bold text-[10px]">{step.step}</span>
                        </div>
                        {/* Card */}
                        <div className={`bg-white border ${config.border} ${config.shadow} shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300 relative overflow-hidden group`}>
                          {/* subtle background glow */}
                          <div className={`absolute top-0 right-0 w-32 h-32 ${config.bg} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                          <h4 className="font-display font-bold text-base text-slate-900 mb-2 relative z-10">{step.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Offerings / Product Categories / SPD Categories */}
              {(solution.offerings || solution.productCategories || solution.spdCategories) && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Our Offerings</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-14 mt-4">
                    {(solution.offerings || solution.productCategories || solution.spdCategories)?.map((item: { name?: string; type?: string; desc: string }, i: number) => {
                      const cardGradient = [
                        "from-[#FFD000] to-[#FF7B00]",
                        "from-[#60EFFF] to-[#0061FF]",
                        "from-[#E83A59] to-[#4A0E4E]"
                      ][i % 3];
                      
                      const iconColor = [
                        "text-[#FF7B00]",
                        "text-[#0061FF]",
                        "text-[#E83A59]"
                      ][i % 3];

                      return (
                        <div key={i} className="relative bg-transparent mb-2 flex flex-col mt-2">
                          {/* Top half: Colored Gradient */}
                          <div className={`h-24 rounded-t-[1.5rem] bg-gradient-to-br ${cardGradient} relative overflow-hidden flex-shrink-0 z-10`}>
                            {/* Decorative Confetti SVG */}
                            <div className="absolute inset-0 flex items-end justify-center opacity-30">
                              <svg viewBox="0 0 200 100" className="w-full h-full text-white transform translate-y-4">
                                <path d="M 50 100 A 50 50 0 0 1 150 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
                                <circle cx="30" cy="60" r="1.5" fill="currentColor" />
                                <circle cx="170" cy="50" r="1.5" fill="currentColor" />
                                <circle cx="140" cy="30" r="2" fill="none" stroke="currentColor" />
                                <circle cx="60" cy="40" r="2" fill="none" stroke="currentColor" />
                                <path d="M 80 40 L 85 50 L 75 50 Z" fill="none" stroke="currentColor" />
                                <path d="M 120 50 L 125 40 L 135 45 Z" fill="none" stroke="currentColor" />
                                <path d="M 100 25 L 105 15 L 115 20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M 15 80 Q 25 70 35 80 T 55 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M 145 80 Q 155 90 165 80 T 185 80" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="100" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                              </svg>
                            </div>
                          </div>

                          {/* Floating Icon */}
                          <div className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.08)] border-[4px] border-white">
                            <Layers className={`w-6 h-6 ${iconColor}`} />
                          </div>

                          {/* Bottom half: White Background */}
                          <div className="relative z-20 bg-white rounded-b-[1.5rem] pt-10 pb-6 px-6 text-center flex-grow flex flex-col items-center shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-t-0 border-slate-100">
                            <h4 className="font-display font-bold text-slate-800 text-base mb-2">
                              {item.name || item.type}
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>

                          {/* Downward triangle pointer */}
                          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 rounded-sm shadow-[4px_4px_10px_rgba(0,0,0,0.04)] z-10 border-b border-r border-slate-100" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Key Advantages / Value Adds */}
              {solution.valueAdds && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Key Advantages</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.valueAdds.map((item, i) => (
                      <div key={i} className={`group flex items-start gap-3 p-5 ${config.bg} border ${config.border} rounded-2xl hover:shadow-md transition-all duration-300`}>
                        <CheckCircle2 className={`w-5 h-5 ${config.text} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                        <span className="text-slate-700 text-sm leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Deliverables */}
              {solution.deliverables && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Deliverables</span>
                  </div>
                  <div className={`${config.bg} border ${config.border} rounded-3xl p-8`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {solution.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-sm transition-all">
                          <ClipboardCheck className={`w-4 h-4 ${config.text} shrink-0 mt-0.5`} />
                          <span className="text-sm text-slate-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Other Solutions */}
              <div className={`${config.bg} border ${config.border} rounded-3xl p-8`}>
                <h3 className={`font-display font-bold text-xs ${config.text} uppercase tracking-[0.15em] mb-5`}>Explore Other Solutions</h3>
                <div className="flex flex-wrap gap-3">
                  {solutions.filter((s) => s.slug !== solution.slug).map((s) => {
                    const OtherIcon = IconMap[s.icon] || Layers;
                    return (
                      <Link key={s.slug} href={`/solutions/${s.slug}`}
                        className={`group flex items-center gap-2.5 px-5 py-3 bg-white border ${config.border} rounded-xl text-sm text-slate-600 hover:${config.text} hover:shadow-sm transition-all`}>
                        <OtherIcon className={`w-4 h-4 text-slate-400 group-hover:${config.text} transition-colors`} />
                        {s.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Sidebar ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Delivery Model */}
                {solution.deliveryModel && (
                  <div className={`${config.bg} border ${config.border} rounded-3xl p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md`}>
                        <Settings className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Delivery Model</h4>
                    </div>
                    <div className="flex flex-col gap-3">
                      {solution.deliveryModel.split("→").map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className={`flex items-center justify-center w-7 h-7 rounded-lg bg-white border ${config.border} text-xs font-mono ${config.text} shrink-0 shadow-sm`}>
                            {i + 1}
                          </span>
                          <span className="font-display font-semibold text-slate-700 text-sm uppercase tracking-wide">{step.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Application Areas */}
                {solution.applicationArea && (
                  <div className={`${config.bg} border ${config.border} rounded-3xl p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md`}>
                        <Factory className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Application Areas</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {solution.applicationArea.map((a, i) => (
                        <span key={i} className={`px-3 py-1.5 bg-white border ${config.border} rounded-lg text-xs text-slate-700 hover:shadow-sm transition-all cursor-default`}>
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reference Standards */}
                {solution.standards && (
                  <div className={`${config.bg} border ${config.border} rounded-3xl p-7`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-md`}>
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Reference Standards</h4>
                    </div>
                    <ul className="space-y-2">
                      {solution.standards.map((std, i) => (
                        <li key={i} className={`flex items-center gap-3 py-2.5 border-b ${config.border} last:border-0`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${config.gradient} shrink-0`} />
                          <span className="text-sm font-mono text-slate-700 font-medium">{std}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-7 relative overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-maroon-700/20 rounded-full blur-[40px]" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Phone className="w-4 h-4 text-maroon-500" />
                      <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.15em]">Get a Quote</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Ready to discuss your {solution.title.toLowerCase()} requirements?
                    </p>
                    <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-colors">
                      <Phone className="w-4 h-4" />
                      Call Us Now
                    </a>
                    <Link href="/contact"
                      className="mt-3 flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all">
                      Request a Quote
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Quick trust badge */}
                <div className="flex items-center gap-3 p-4 bg-maroon-50 border border-maroon-100 rounded-2xl">
                  <Shield className="w-5 h-5 text-maroon-700 shrink-0" />
                  <div>
                    <p className="text-sm font-display font-semibold text-slate-900">IS/IEC Certified</p>
                    <p className="text-xs text-slate-500">Full compliance guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
