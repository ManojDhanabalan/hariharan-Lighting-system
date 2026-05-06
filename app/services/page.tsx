import type { Metadata } from "next";
import PageHero      from "@/components/shared/PageHero";
import CTABanner     from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { services }  from "@/data/services";
import Link          from "next/link";
import { CheckCircle2, ArrowRight, Factory, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive electrical safety services: Earthing Audits, LPS Adequacy Audits, Power Quality Studies, and Power System Studies — compliant with IS, IEEE & IEC standards.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Engineering Safety. Eliminating Risk."
        tag="What We Do" breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-14"><SectionHeader overline="Audit & Analysis" title="Expert Engineering Services"
            subtitle="Our team of qualified engineers delivers detailed assessments, analyses, and compliance reports." centered /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={service.id} className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-card transition-all duration-300 card-hover flex flex-col overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-volt-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <div className="absolute top-6 right-6 w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                  <span className="font-mono text-xs text-text-dim">{String(idx+1).padStart(2,"0")}</span>
                </div>
                <div className="mb-5 w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl group-hover:bg-blue-100 transition-colors">{service.icon}</div>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-1 group-hover:text-volt transition-colors">{service.title}</h2>
                <p className="text-xs font-display font-semibold text-text-dim uppercase tracking-[0.12em] mb-5 pb-4 border-b border-slate-100">{service.subtitle}</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{service.shortDesc}</p>
                <ul className="space-y-2.5 mb-6">
                  {(service.valueAdds||[]).slice(0,3).map((p,i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-volt shrink-0 mt-0.5" />{p}
                    </li>
                  ))}
                </ul>
                {service.applicationArea && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-text-dim text-xs font-display uppercase tracking-wider mb-2"><Factory className="w-3.5 h-3.5" />Application Areas</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.applicationArea.slice(0,4).map(a => <span key={a} className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-text-secondary">{a}</span>)}
                      {service.applicationArea.length>4 && <span className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-text-dim">+{service.applicationArea.length-4}</span>}
                    </div>
                  </div>
                )}
                {service.standards && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-text-dim text-xs font-display uppercase tracking-wider mb-2"><FileText className="w-3.5 h-3.5" />Standards</div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.standards.slice(0,3).map(s => <span key={s} className="px-2 py-0.5 bg-blue-50 border border-blue-100 rounded text-xs font-mono text-blue-700">{s}</span>)}
                      {service.standards.length>3 && <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-text-dim">+{service.standards.length-3}</span>}
                    </div>
                  </div>
                )}
                <Link href={`/services/${service.slug}`}
                  className="group/btn flex items-center justify-center gap-2 py-3.5 bg-slate-50 hover:bg-volt border border-slate-200 hover:border-volt text-slate-700 hover:text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300">
                  View Full Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Secure Your Facility?" subtext="Schedule a comprehensive electrical safety assessment with our expert engineers."
        ctaLabel="Request an Assessment" ctaHref="/contact" secondaryCta={{ label: "View Solutions", href: "/solutions" }} />
    </>
  );
}
