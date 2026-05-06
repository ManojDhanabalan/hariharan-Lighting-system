import type { Metadata } from "next";
import PageHero      from "@/components/shared/PageHero";
import CTABanner     from "@/components/shared/CTABanner";
import AccordionItem from "@/components/shared/AccordionItem";
import { services }  from "@/data/services";
import { notFound }  from "next/navigation";
import { CheckCircle2, Factory, FileText, Phone, BarChart2 } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find((s) => s.slug === params.slug);
  if (!s) return {};
  return { title: s.title, description: s.shortDesc, alternates: { canonical: `/services/${s.slug}` } };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title={service.title} subtitle={service.subtitle} tag={service.heroTag}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title, href: `/services/${service.slug}` }]} />

      <section className="py-20 bg-white">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main */}
            <div className="w-full lg:w-2/3 space-y-12">
              <div>
                <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-volt" />Overview
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  {service.overview.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              {service.whySection && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Why It Matters</h2>
                  <div className="flex flex-col gap-3">
                    {service.whySection.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 transition-colors shadow-sm">
                        <span className="flex items-center justify-center w-7 h-7 rounded-xl bg-blue-50 border border-blue-100 text-volt font-mono text-xs font-bold shrink-0">{String(i+1).padStart(2,"0")}</span>
                        <span className="text-text-secondary text-sm leading-relaxed mt-0.5">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.valueAdds && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Value Proposition</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.valueAdds.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 transition-colors shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-volt shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {service.commonIssues && (
                  <AccordionItem title="Common Issues & Challenges" defaultOpen>
                    <div className="space-y-5">
                      {service.commonIssues.map((issue, i) => (
                        <div key={i}><strong className="text-slate-800 block mb-2 font-display">{issue.title}</strong>
                          <ul className="list-disc pl-5 space-y-1 text-sm">{issue.items.map((it,j) => <li key={j}>{it}</li>)}</ul>
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                )}
                {service.deliverables && (
                  <AccordionItem title="Deliverables" defaultOpen>
                    <ul className="space-y-2">{service.deliverables.map((item,i) => <li key={i} className="flex items-start gap-2.5"><span className="w-2 h-2 rounded-full bg-volt mt-1.5 shrink-0" /><span className="text-sm">{item}</span></li>)}</ul>
                  </AccordionItem>
                )}
                {service.reportIncludes && (
                  <AccordionItem title="Report Contents">
                    <ul className="space-y-2">{service.reportIncludes.map((item,i) => <li key={i} className="flex items-start gap-2.5"><span className="w-2 h-2 rounded-full bg-volt mt-1.5 shrink-0" /><span className="text-sm">{item}</span></li>)}</ul>
                  </AccordionItem>
                )}
                {service.benefits && (
                  <AccordionItem title="Key Benefits">
                    <ul className="space-y-2">{service.benefits.map((item,i) => <li key={i} className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 text-volt shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>)}</ul>
                  </AccordionItem>
                )}
              </div>

              {(service.auditActivitiesEHV || service.auditActivitiesLV) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.auditActivitiesEHV && (
                    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2 text-volt mb-4"><BarChart2 className="w-4 h-4" /><h3 className="font-display font-bold text-sm uppercase tracking-wider">EHV Switchyard</h3></div>
                      <ul className="space-y-2">{service.auditActivitiesEHV.map((it,i) => <li key={i} className="flex gap-2 text-sm text-text-secondary"><span className="text-volt shrink-0">•</span>{it}</li>)}</ul>
                    </div>
                  )}
                  {service.auditActivitiesLV && (
                    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2 text-volt mb-4"><BarChart2 className="w-4 h-4" /><h3 className="font-display font-bold text-sm uppercase tracking-wider">LV / MV Network</h3></div>
                      <ul className="space-y-2">{service.auditActivitiesLV.map((it,i) => <li key={i} className="flex gap-2 text-sm text-text-secondary"><span className="text-volt shrink-0">•</span>{it}</li>)}</ul>
                    </div>
                  )}
                </div>
              )}

              {service.studyTypes && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Analysis Portfolio</h2>
                  <div className="flex flex-wrap gap-3">{service.studyTypes.map((t,i) => <span key={i} className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl font-display text-blue-800 text-sm hover:bg-blue-100 transition-colors">{t}</span>)}</div>
                </div>
              )}

              {service.studyCapabilities && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Study Capabilities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.studyCapabilities.map((cap,i) => <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-200 transition-colors shadow-sm"><CheckCircle2 className="w-4 h-4 text-volt shrink-0" /><span className="text-sm text-text-secondary">{cap}</span></div>)}
                  </div>
                </div>
              )}

              {service.consequences && (
                <div className="p-6 bg-red-50 border border-red-200 rounded-2xl">
                  <h3 className="font-display font-bold text-sm text-red-700 uppercase tracking-wide mb-4">⚠️ Consequences of Insufficient Power Quality</h3>
                  <ul className="space-y-2">{service.consequences.map((c,i) => <li key={i} className="flex gap-2 text-sm text-red-700/80"><span className="text-red-400 shrink-0">•</span>{c}</li>)}</ul>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-display font-bold text-xs text-text-dim uppercase tracking-[0.15em] mb-4">Other Services</h3>
                <div className="flex flex-wrap gap-2">
                  {services.filter(s => s.slug!==service.slug).map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-text-secondary hover:text-volt hover:border-blue-200 transition-colors shadow-sm">
                      <span>{s.icon}</span>{s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 space-y-5">
                {service.applicationArea && (
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-card overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-volt-gradient rounded-t-2xl" />
                    <div className="flex items-center gap-2 text-volt mb-4"><Factory className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Application Areas</h4></div>
                    <div className="flex flex-wrap gap-2">{service.applicationArea.map((a,i) => <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-text-secondary">{a}</span>)}</div>
                  </div>
                )}
                {service.standards && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-2 text-volt mb-4"><FileText className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Reference Standards</h4></div>
                    <ul className="space-y-2">{service.standards.map((std,i) => <li key={i} className="flex items-center gap-2 py-2 border-b border-slate-100 last:border-0"><span className="w-1.5 h-1.5 rounded-full bg-volt shrink-0" /><span className="text-sm font-mono text-text-secondary">{std}</span></li>)}</ul>
                  </div>
                )}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-volt">
                  <div className="flex items-center gap-2 text-volt mb-3"><Phone className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Need This Service?</h4></div>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">Call our engineering experts directly for a consultation.</p>
                  <a href="tel:+917373766689" className="flex items-center justify-center gap-2 w-full py-3.5 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-volt-btn hover:-translate-y-0.5">
                    <Phone className="w-4 h-4" />+91 73737 66689
                  </a>
                  <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 w-full py-3 border-2 border-blue-200 hover:border-volt text-volt font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all">
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline={`Need a Professional ${service.title}?`}
        subtext="Ensure the safety and reliability of your electrical infrastructure today."
        ctaLabel="Contact Us" ctaHref="/contact" secondaryCta={{ label: "All Services", href: "/services" }} />
    </>
  );
}
