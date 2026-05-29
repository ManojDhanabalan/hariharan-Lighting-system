import type { Metadata } from "next";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, Factory, FileText, BarChart2, Shield, 
  TrendingUp, ArrowRight, Zap, Target, Award, Lightbulb, Settings, Hexagon
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((s) => s.slug === params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.shortDesc,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} | Aadithya`,
      description: s.shortDesc,
      url: `/services/${s.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${s.title} | Aadithya`,
      description: s.shortDesc,
    },
  };
}

const ICONS = [Target, Zap, Shield, Award, Lightbulb, Settings, BarChart2, TrendingUp];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Helper arrays for flexible rendering
  const isEarthing = service.slug === "earthing-audit";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.shortDesc,
            provider: {
              "@type": "Organization",
              name: "Aadithya",
              url: "https://aadithyatech.com"
            },
            areaServed: "IN"
          }),
        }}
      />
      <PageHero 
        title={service.title} 
        subtitle={service.subtitle} 
      />

      {/* ── 1. Overview Section (Inspired by Image 1 & 5) ──────── */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-maroon-600 animate-pulse" />
                <span className="text-slate-700 font-display font-bold text-xs tracking-widest uppercase">Overview</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                Comprehensive <br/>
                <span className="text-maroon-700">
                  Solutions
                </span> in One Place
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-body">
                {service.overview.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right: Masonry / Stats Layout */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="col-span-1 rounded-3xl overflow-hidden shadow-2xl relative h-full">
                <Image 
                  src={isEarthing ? "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" : "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"} 
                  alt="Engineering Team" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
                <div className="rounded-3xl bg-slate-900 p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-maroon-600/40 rounded-full blur-3xl" />
                  <h3 className="text-slate-300 font-display font-medium text-lg mb-2 relative z-10">Application Areas</h3>
                  <p className="text-5xl font-display font-extrabold text-white relative z-10">
                    {service.applicationArea?.length || 10}<span className="text-3xl text-orange-500">+</span>
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" 
                    alt="Audit Process" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Why It Matters ──────── */}
      {service.whySection && (
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">Why It Matters</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Understanding the critical importance of a properly maintained and audited system to ensure ultimate safety and reliability.</p>
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {service.whySection.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                const bgImages = [
                  "1581092160562-40aa08e78837", // Engineering
                  "1504328345606-18bbc8c9d7d1", // Blueprint/Architecture
                  "1513828583688-c52646db42da", // Abstract Architecture
                  "1530893609608-32a9af3aa95c", // Tech/Circuit
                  "1605810230434-7631ac76ec81", // Industrial
                  "1581091226825-a6a2a5aee158"  // Tech lab
                ];
                const bgId = bgImages[i % bgImages.length];

                return (
                  <div key={i} className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative min-h-[320px] flex flex-col justify-end border border-slate-200 hover:border-transparent">
                    
                    {/* Background Image */}
                    <Image 
                      src={`https://images.unsplash.com/photo-${bgId}?auto=format&fit=crop&w=600&q=80`} 
                      alt="Why it matters" 
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-80"
                    />
                    
                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/40 group-hover:via-slate-900/70 transition-colors duration-500" />

                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-maroon-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    {/* Content */}
                    <div className="relative z-10 p-8 pt-12">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:border-transparent transition-all duration-500 transform group-hover:-translate-y-2">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
                        {item}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Value Proposition / Benefits ──────── */}
      <section className="py-24 bg-[#0A192F] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Top Stats Row */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-20 border-b border-white/10 pb-16 relative z-10">
            <div className="text-center group">
              <p className="font-display font-extrabold text-5xl text-white mb-2">{service.standards?.length || 5}+</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold group-hover:text-white transition-colors">Standards <br/>Compliant</p>
            </div>
            <div className="text-center group">
              <p className="font-display font-extrabold text-5xl text-white mb-2">{service.valueAdds?.length || 10}+</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold group-hover:text-white transition-colors">Value <br/>Additions</p>
            </div>
            <div className="text-center group">
              <p className="font-display font-extrabold text-5xl text-white mb-2">100%</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold group-hover:text-white transition-colors">Safety <br/>Assured</p>
            </div>
          </div>

          <div className="text-center mb-16 relative z-10">
             <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white">Our Value Proposition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {service.valueAdds?.map((item, i) => {
              const bgColors = [
                "bg-blue-50", "bg-orange-50", "bg-purple-50", 
                "bg-emerald-50", "bg-rose-50", "bg-amber-50"
              ];
              const textColors = [
                "text-blue-600", "text-orange-600", "text-purple-600", 
                "text-emerald-600", "text-rose-600", "text-amber-600"
              ];

              return (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${bgColors[i % bgColors.length]}`}>
                    <Hexagon className={`w-8 h-8 ${textColors[i % textColors.length]}`} strokeWidth={2} />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{item}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. Audit Activities / Deliverables (Inspired by Image 3 - Timeline) ──────── */}
      {(((service as Record<string, unknown>).auditActivitiesEHV) || service.deliverables) && (
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left: Timeline */}
              <div>
                <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-10">
                  {isEarthing ? "Audit Activities" : "Key Deliverables"}
                </h2>
                
                <div className="relative border-l-2 border-slate-200 ml-4 space-y-12 pb-4">
                  
                  {/* Map over activities or deliverables */}
                  {(((isEarthing ? (service as Record<string, unknown>).auditActivitiesEHV : service.deliverables) as string[]) || []).map((item: string, i: number) => {
                    return (
                      <div key={i} className="relative pl-10 group">
                        {/* Diamond Icon */}
                        <div className="absolute -left-[17px] top-1 w-8 h-8 rounded bg-slate-800 rotate-45 flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                          <div className="w-3 h-3 bg-orange-500 rounded-sm -rotate-45" />
                        </div>
                        
                        <h4 className="font-display font-bold text-lg mb-2 text-slate-800">
                          Step {i + 1}
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm bg-white p-4 rounded-xl border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow">
                          {item}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Sticky Info Box */}
              <div className="lg:sticky top-24 space-y-8">
                {/* Reference Standards */}
                {service.standards && (
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-slate-700" />
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900">Reference Standards</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.standards.map((std, i) => (
                        <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries */}
                {service.applicationArea && (
                  <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-maroon-600/30 rounded-full blur-3xl" />
                    <div className="relative z-10 flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Factory className="w-6 h-6 text-orange-500" />
                      </div>
                      <h3 className="font-display font-bold text-xl">Industries Served</h3>
                    </div>
                    <ul className="relative z-10 space-y-3">
                      {service.applicationArea.map((area, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-orange-500" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── 5. Bottom CTA ──────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 mb-6">Ready to secure your infrastructure?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-xl font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
            Book an Audit Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </>
  );
}
