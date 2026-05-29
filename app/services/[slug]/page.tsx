import type { Metadata } from "next";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  return { title: s.title, description: s.shortDesc, alternates: { canonical: `/services/${s.slug}` } };
}

const ICONS = [Target, Zap, Shield, Award, Lightbulb, Settings, BarChart2, TrendingUp];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  // Helper arrays for flexible rendering
  const isEarthing = service.slug === "earthing-audit";

  return (
    <>
      <PageHero 
        title={service.title} 
        subtitle={service.subtitle} 
      />

      {/* ── 1. Overview Section (Inspired by Image 1 & 5) ──────── */}
      <section className="py-20 bg-[#FDFBF7] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-orange-700 font-display font-bold text-xs tracking-widest uppercase">Overview</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-slate-900 leading-tight">
                Comprehensive <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EAB308]">
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
                <img 
                  src={isEarthing ? "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" : "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80"} 
                  alt="Engineering Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="col-span-1 grid grid-rows-2 gap-4 h-full">
                <div className="rounded-3xl bg-[#DEF7E5] p-8 flex flex-col justify-center shadow-lg relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-200 rounded-full blur-2xl" />
                  <h3 className="text-green-800 font-display font-medium text-lg mb-2 relative z-10">Application Areas</h3>
                  <p className="text-5xl font-display font-extrabold text-green-900 relative z-10">
                    {service.applicationArea?.length || 10}<span className="text-3xl">+</span>
                  </p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" 
                    alt="Audit Process" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Why It Matters (Inspired by Image 2 - Icon Grid) ──────── */}
      {service.whySection && (
        <section className="py-24 bg-white relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl text-center mb-16">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-4">Why It Matters</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Understanding the critical importance of a properly maintained and audited system to ensure ultimate safety and reliability.</p>
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {service.whySection.map((item, i) => {
                const Icon = ICONS[i % ICONS.length];
                return (
                  <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden">
                    {/* Hover Top Border Accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F97316] to-[#EAB308] opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-300">
                      <Icon className="w-7 h-7 text-slate-700 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. Value Proposition / Benefits (Inspired by Image 4 - Dark Panel) ──────── */}
      <section className="py-24 bg-[#0A192F] relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-900/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          
          {/* Top Stats Row */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-20 border-b border-white/10 pb-16">
            <div className="text-center">
              <p className="font-display font-extrabold text-5xl text-white mb-2">{service.standards?.length || 5}+</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold">Standards <br/>Compliant</p>
            </div>
            <div className="text-center">
              <p className="font-display font-extrabold text-5xl text-white mb-2">{service.valueAdds?.length || 10}+</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold">Value <br/>Additions</p>
            </div>
            <div className="text-center">
              <p className="font-display font-extrabold text-5xl text-white mb-2">100%</p>
              <p className="text-slate-400 text-sm tracking-widest uppercase font-bold">Safety <br/>Assured</p>
            </div>
          </div>

          <div className="text-center mb-16">
             <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-white">Our Value Proposition</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.valueAdds?.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 ${
                  i % 3 === 0 ? "bg-gradient-to-br from-blue-400 to-blue-600" : 
                  i % 3 === 1 ? "bg-gradient-to-br from-purple-400 to-purple-600" : 
                  "bg-gradient-to-br from-orange-400 to-orange-600"
                }`}>
                  <Hexagon className="w-8 h-8 text-white fill-white/20" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
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
                    const colors = [
                      "from-emerald-400 to-emerald-600",
                      "from-blue-400 to-blue-600",
                      "from-orange-400 to-orange-600",
                      "from-purple-400 to-purple-600"
                    ];
                    const color = colors[i % colors.length];

                    return (
                      <div key={i} className="relative pl-10 group">
                        {/* Diamond Icon */}
                        <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded bg-gradient-to-br ${color} rotate-45 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                          <div className="w-3 h-3 bg-white rounded-sm -rotate-45" />
                        </div>
                        
                        <h4 className={`font-display font-bold text-lg mb-2 bg-clip-text text-transparent bg-gradient-to-r ${color}`}>
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
                  <div className="bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-3xl p-8 text-white shadow-2xl shadow-orange-600/30">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <Factory className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-display font-bold text-xl">Industries Served</h3>
                    </div>
                    <ul className="space-y-3">
                      {service.applicationArea.map((area, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-orange-200" />
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
