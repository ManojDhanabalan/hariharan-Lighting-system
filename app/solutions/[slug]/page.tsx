 import type { Metadata } from "next";
import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import {
  CheckCircle2, Factory, FileText, Settings,
  Layers, Zap, ArrowRight, Shield
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = solutions.find((s) => s.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.shortDesc,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: {
      title: `${s.title} | Aadithya`,
      description: s.shortDesc,
      url: `/solutions/${s.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${s.title} | Aadithya`,
      description: s.shortDesc,
    },
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: solution.title,
            description: solution.shortDesc,
            brand: {
              "@type": "Brand",
              name: "Aadithya"
            }
          }),
        }}
      />
      <PageHero
        title={solution.title}
        subtitle={solution.subtitle}
        stats={[
          ...(solution.standards ? [{ icon: "shield" as const, label: `${solution.standards.length} Standards Compliant` }] : []),
          ...(solution.applicationArea ? [{ icon: "factory" as const, label: `${solution.applicationArea.length}+ Industries` }] : []),
          ...(solution.deliveryModel ? [{ icon: "settings" as const, label: "Full Lifecycle" }] : []),
        ]}
      />

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* ── Main Content (Col Span 8) ── */}
            <div className="lg:col-span-8 space-y-20">
              
              {/* Overview */}
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-maroon-600 animate-pulse" />
                  <span className="text-slate-700 font-display font-bold text-xs tracking-widest uppercase">Overview</span>
                </div>
                <h2 className="font-display font-extrabold text-4xl text-slate-900 mb-6 leading-tight">
                  Advanced <span className="text-maroon-700">Engineering</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-body bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  {solution.overview.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* What Are Surges (Dynamic Block) */}
              {solution.whatAreSurges && (
                <div className="relative flex items-start gap-6 p-8 bg-[#F8FAFC] rounded-3xl overflow-hidden group border border-slate-200 shadow-md">
                  
                  {/* Faded Watermark on the Right */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none">
                    <Zap className="w-64 h-64" />
                  </div>

                  {/* Medal Badge */}
                  <div className="relative shrink-0 flex flex-col items-center justify-start w-16 h-20 pt-1">
                    {/* Hexagon Ring */}
                    <div className="absolute top-0 w-14 h-14 bg-white border-[3px] border-[#D98743] flex items-center justify-center z-10 shadow-sm" 
                         style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                      <Zap className="w-6 h-6 text-[#D98743]" strokeWidth={2.5} />
                    </div>
                    {/* Ribbon Tail */}
                    <div className="absolute bottom-0 w-8 h-8 bg-[#C57635] z-0" 
                         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%)' }} />
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                       <h3 className="font-display font-bold text-slate-900 text-2xl leading-tight">
                         Understanding Transients
                       </h3>
                       <div className="flex items-center gap-1.5 sm:border-l sm:border-slate-300 sm:pl-4">
                         {/* Star icon */}
                         <svg className="w-4 h-4 text-[#E6C35C] fill-[#E6C35C]" viewBox="0 0 24 24">
                           <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                         </svg>
                         <span className="text-[11px] sm:text-xs font-black text-[#D3B454] tracking-wide uppercase">
                           FUNDAMENTAL
                         </span>
                         <span className="text-[11px] sm:text-xs font-bold text-slate-500 tracking-wide uppercase ml-1">
                           CONCEPT
                         </span>
                       </div>
                    </div>
                    <p className="text-slate-600 text-base leading-relaxed pr-8">
                      {solution.whatAreSurges}
                    </p>
                  </div>

                </div>
              )}

              {/* Why Good Grounding Matters (Dynamic Block) */}
              {solution.goodGroundingImportance && (
                <div>
                  <h3 className="font-display font-extrabold text-3xl text-slate-900 mb-8">Why Good Grounding Matters</h3>
                  
                  <div className="flex flex-col gap-4">
                    {solution.goodGroundingImportance.map((item, i) => {
                      const badgeStyles = [
                        { border: 'border-[#D98743]', tail: 'bg-[#C57635]', icon: 'text-[#D98743]' }, // Orange/Bronze
                        { border: 'border-[#2D73D5]', tail: 'bg-[#225BB0]', icon: 'text-[#2D73D5]' }, // Blue
                        { border: 'border-[#43B87A]', tail: 'bg-[#329861]', icon: 'text-[#43B87A]' }, // Green
                        { border: 'border-[#D52D58]', tail: 'bg-[#B02246]', icon: 'text-[#D52D58]' }, // Red
                      ];
                      const b = badgeStyles[i % badgeStyles.length];

                      return (
                        <div key={i} className="relative flex items-center gap-6 p-5 sm:p-6 bg-[#F8FAFC] rounded-2xl overflow-hidden group border border-slate-100 hover:border-slate-200 transition-colors">
                          
                          {/* Faded Watermark on the Right */}
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-300 pointer-events-none">
                            <Shield className="w-48 h-48" />
                          </div>

                          {/* Medal Badge */}
                          <div className="relative shrink-0 flex flex-col items-center justify-start w-16 h-20">
                            {/* Hexagon Ring */}
                            <div className={`absolute top-0 w-14 h-14 bg-white border-[3px] ${b.border} flex items-center justify-center z-10 shadow-sm`} 
                                 style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                              <Layers className={`w-6 h-6 ${b.icon}`} strokeWidth={2.5} />
                            </div>
                            {/* Ribbon Tail */}
                            <div className={`absolute bottom-0 w-8 h-8 ${b.tail} z-0`} 
                                 style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 70%, 0 100%)' }} />
                          </div>

                          {/* Text Content */}
                          <div className="relative z-10 flex-1">
                            <h4 className="font-display font-bold text-slate-800 text-lg sm:text-xl leading-tight mb-2 pr-12">
                              {item}
                            </h4>
                            <div className="flex items-center gap-1.5">
                              {/* Star icon */}
                              <svg className="w-4 h-4 text-[#E6C35C] fill-[#E6C35C]" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                              <span className="text-[11px] sm:text-xs font-black text-[#D3B454] tracking-wide uppercase">
                                ESSENTIAL
                              </span>
                              <span className="text-[11px] sm:text-xs font-bold text-slate-500 tracking-wide uppercase ml-1">
                                {100 - (i * 10)} POINTS
                              </span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Our Offerings */}
              {(solution.offerings || solution.productCategories || solution.spdCategories) && (
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-slate-700 font-display font-bold text-xs tracking-widest uppercase">Our Offerings</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(solution.offerings || solution.productCategories || solution.spdCategories)?.map((item: { name?: string; type?: string; desc?: string; image?: string }, i: number) => {
                      const bgImages = [
                        "1581092160562-40aa08e78837", // Engineering
                        "1504328345606-18bbc8c9d7d1", // Blueprint/Architecture
                        "1513828583688-c52646db42da", // Abstract Architecture
                        "1530893609608-32a9af3aa95c", // Tech/Circuit
                      ];
                      const bgId = bgImages[i % bgImages.length];
                      const finalImage = item.image || `https://images.unsplash.com/photo-${bgId}?auto=format&fit=crop&w=600&q=80`;

                      return (
                        <div key={i} className="group rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-red-900/5 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full bg-white border border-slate-200 hover:border-red-500">
                          
                          {/* Top: Image */}
                          <div className="relative h-56 w-full overflow-hidden border-b border-slate-100">
                            <Image 
                              src={finalImage} 
                              alt={item.name || item.type || "Offering feature"} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 bg-red-900/0 group-hover:bg-red-900/10 transition-colors duration-500" />
                          </div>

                          {/* Bottom: Content */}
                          <div className="relative p-8 flex-1 flex flex-col bg-white">
                            <h4 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">{item.name || item.type}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Design Process - Responsive Timeline */}
              {solution.designProcess && (
                <div className="pt-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-10">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-slate-700 font-display font-bold text-xs tracking-widest uppercase">Engineering Process</span>
                  </div>

                  {/* ── MOBILE: left-aligned single column ── */}
                  <div className="md:hidden relative pl-10">
                    {/* Left vertical track */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-slate-200" />
                    <div className="space-y-6">
                      {solution.designProcess.map((step, i) => (
                        <div key={i} className="relative">
                          {/* Dot on track */}
                          <div className="absolute -left-[26px] top-5 w-4 h-4 rounded-full bg-red-600 border-[3px] border-white shadow z-10" />
                          <div className="bg-yellow-50 border border-red-100 border-b-[3px] border-b-red-600 border-r-[3px] border-r-red-600 rounded-2xl p-4 shadow-sm">
                            <span className="block font-mono font-black text-red-600 text-[10px] tracking-widest mb-1">
                              STEP {String(i + 1).padStart(2, "0")}
                            </span>
                            <h4 className="font-display font-bold text-slate-900 text-base leading-tight mb-1">{step.title}</h4>
                            <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── DESKTOP md+: center alternating layout ── */}
                  <div className="hidden md:block relative py-4">
                    {/* Center Vertical Track */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2" />

                    <div className="space-y-0">
                      {solution.designProcess.map((step, i) => {
                        const isLeft = i % 2 === 0;
                        return (
                          <div key={i} className="relative flex items-center min-h-[120px]">

                            {/* Center dot node */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                              <div className="w-4 h-4 rounded-full bg-red-600 border-[3px] border-white shadow-md" />
                            </div>

                            {isLeft ? (
                              <>
                                {/* LEFT: text label */}
                                <div className="w-[42%] pr-16 text-right">
                                  <span className="block font-mono font-black text-red-600 text-xs tracking-widest mb-1">
                                    STEP {String(i + 1).padStart(2, "00")}
                                  </span>
                                  <span className="block font-display font-bold text-slate-900 text-sm leading-tight">
                                    {step.title}
                                  </span>
                                  <span className="block text-slate-500 text-xs mt-1 leading-snug">
                                    {step.desc}
                                  </span>
                                </div>

                                {/* Dashed connector */}
                                <div className="absolute left-[42%] right-[calc(50%+22px)] top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-300" />

                                {/* Icon box left of center */}
                                <div className="absolute left-[calc(50%-54px)] top-1/2 -translate-y-1/2">
                                  <div className="w-11 h-11 rounded-xl bg-yellow-50 border border-red-100 border-b-[3px] border-b-red-600 border-r-[3px] border-r-red-600 flex items-center justify-center shadow-sm">
                                    <span className="font-mono font-black text-red-600 text-sm">{String(i + 1).padStart(2, "0")}</span>
                                  </div>
                                </div>

                                <div className="w-[58%] ml-auto" />
                              </>
                            ) : (
                              <>
                                <div className="w-[42%]" />

                                {/* Icon box right of center */}
                                <div className="absolute right-[calc(50%-54px)] top-1/2 -translate-y-1/2">
                                  <div className="w-11 h-11 rounded-xl bg-yellow-50 border border-red-100 border-b-[3px] border-b-red-600 border-r-[3px] border-r-red-600 flex items-center justify-center shadow-sm">
                                    <span className="font-mono font-black text-red-600 text-sm">{String(i + 1).padStart(2, "0")}</span>
                                  </div>
                                </div>

                                {/* Dashed connector */}
                                <div className="absolute right-[42%] left-[calc(50%+22px)] top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-300" />

                                {/* RIGHT: text label */}
                                <div className="w-[42%] ml-auto pl-16 text-left">
                                  <span className="block font-mono font-black text-red-600 text-xs tracking-widest mb-1">
                                    STEP {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span className="block font-display font-bold text-slate-900 text-sm leading-tight">
                                    {step.title}
                                  </span>
                                  <span className="block text-slate-500 text-xs mt-1 leading-snug">
                                    {step.desc}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Key Advantages */}
              {solution.valueAdds && (
                <div>
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-slate-700 font-display font-bold text-xs tracking-widest uppercase">Key Advantages</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solution.valueAdds.map((item, i) => (
                      <div key={i} className="drop-shadow-sm hover:drop-shadow-xl transition-all duration-500 h-full">
                        <div className="group relative p-[1px] h-full" 
                             style={{ clipPath: "polygon(32px 0, 100% 0, 100% 100%, 0 100%, 0 32px)" }}>
                          
                          {/* Outer Border Layer */}
                          <div className="absolute inset-0 bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-maroon-500 group-hover:to-orange-500 transition-all duration-500" />
                          
                          {/* Inner Card */}
                          <div className="relative h-full w-full bg-[#0A192F] p-6 sm:p-8 flex items-start gap-5 overflow-hidden"
                               style={{ clipPath: "polygon(31px 0, 100% 0, 100% 100%, 0 100%, 0 31px)" }}>
                            
                            {/* Background Watermark Number */}
                            <div className="absolute -right-4 -bottom-6 text-8xl font-display font-black text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-500 pointer-events-none select-none">
                              {String(i + 1).padStart(2, "0")}
                            </div>

                            <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-maroon-500/20 group-hover:border-maroon-500/50 transition-all duration-500">
                              <CheckCircle2 className="w-6 h-6 text-slate-400 group-hover:text-maroon-400 transition-colors duration-500" />
                            </div>
                            <span className="relative z-10 text-slate-300 text-sm leading-relaxed font-medium mt-1.5 group-hover:text-white transition-colors duration-500">
                              {item}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── Sidebar (Col Span 4) ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">

                {/* Reference Standards - Orbital Animation */}
                {solution.standards && (
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden">
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-10 w-full text-left">Standards</h3>
                    
                    <div className="relative flex items-center justify-center w-full h-[260px]">
                      
                      {/* Outer Orbit */}
                      <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-red-200 flex items-center justify-center"
                           style={{ animation: 'spin 40s linear infinite' }}>
                         {solution.standards.map((std, i) => {
                           const angle = (i * 360) / solution.standards.length;
                           return (
                             <div 
                               key={i} 
                               className="absolute w-full h-full"
                               style={{ transform: `rotate(${angle}deg)` }}
                             >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                     style={{ transform: `rotate(-${angle}deg)` }}>
                                  <div style={{ animation: 'spin 40s linear infinite reverse' }}>
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-maroon-100 shadow-md rounded-full text-[10px] sm:text-[11px] font-mono font-bold text-maroon-700 whitespace-nowrap hover:border-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-default">
                                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                      {std}
                                    </div>
                                  </div>
                                </div>
                             </div>
                           )
                         })}
                      </div>

                      {/* Inner Orbit (Decorative) */}
                      <div className="absolute w-[130px] h-[130px] rounded-full border border-dashed border-maroon-100/50" 
                           style={{ animation: 'spin 20s linear infinite reverse' }} />

                      {/* Central Icon */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0A192F] to-maroon-900 flex items-center justify-center shadow-2xl z-10 border-[6px] border-white group cursor-default hover:scale-110 transition-transform duration-500">
                         {/* Pulse effect */}
                         <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300" />
                         <FileText className="w-7 h-7 text-white relative z-10 group-hover:text-red-400 transition-colors" />
                      </div>

                    </div>
                  </div>
                )}

                {/* Application Areas */}
                {solution.applicationArea && (
                  <div className="bg-[#0A192F] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
                    <div className="relative z-10 flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                        <Factory className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="font-display font-bold text-xl">Industries</h3>
                    </div>
                    <ul className="relative z-10 space-y-3">
                      {solution.applicationArea.map((area, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Delivery Model */}
                {solution.deliveryModel && (
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-[#F1F5F9] flex items-center justify-center">
                        <Settings className="w-6 h-6 text-slate-700" />
                      </div>
                      <h3 className="font-display font-bold text-2xl text-slate-900">Delivery Model</h3>
                    </div>
                    <div className="space-y-3">
                      {solution.deliveryModel.split("→").map((item, i) => (
                        <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 cursor-default">
                          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-sm">
                            <span className="text-[13px] font-bold text-white">{i + 1}</span>
                          </div>
                          <span className="text-slate-800 text-[15px] font-medium tracking-tight">{item.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-maroon-700 rounded-3xl p-8 relative overflow-hidden text-white shadow-xl">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/30 rounded-full blur-[40px]" />
                  <div className="relative z-10">
                    <h4 className="font-display font-bold text-2xl mb-4">Need Expert Help?</h4>
                    <p className="text-maroon-100 text-sm mb-8 leading-relaxed">
                      Our engineers are ready to design a robust {solution.title.toLowerCase()} tailored to your needs.
                    </p>
                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-lg">
                      Request Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom CTA ──────── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-6">Ready to secure your infrastructure?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
            Contact Engineering Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
