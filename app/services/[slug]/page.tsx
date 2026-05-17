import type { Metadata } from "next";

import AccordionItem from "@/components/shared/AccordionItem";
import { services } from "@/data/services";
import { company } from "@/data/company";
import { notFound } from "next/navigation";
import {
  CheckCircle2, Factory, FileText, Phone, BarChart2,
  Activity, ShieldCheck, GitBranch, LucideIcon,
  Shield, AlertTriangle, TrendingUp, ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

const IconMap: Record<string, LucideIcon> = {
  Activity,
  ShieldCheck,
  BarChart2,
  GitBranch,
};

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
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        stats={[
          ...(service.standards ? [{ icon: "shield" as const, label: `${service.standards.length} Standards Compliant` }] : []),
          ...(service.applicationArea ? [{ icon: "factory" as const, label: `${service.applicationArea.length}+ Industries` }] : []),
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
                  {service.overview.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              {service.whySection && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Why It Matters</span>
                  </div>
                  <div className="grid gap-4">
                    {service.whySection.map((item, i) => (
                      <div key={i} className="group flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-maroon-200 hover:bg-maroon-50/50 hover:shadow-lg transition-all duration-300">
                        <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 text-white font-mono text-xs font-bold shrink-0 shadow-md shadow-maroon-600/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-slate-600 text-sm leading-relaxed mt-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Value Proposition */}
              {service.valueAdds && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Value Proposition</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.valueAdds.map((item, i) => (
                      <div key={i} className="group flex items-start gap-3 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-maroon-200 hover:shadow-lg transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-maroon-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Audit Activities (EHV/LV) */}
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {('auditActivitiesEHV' in service && (service as any).auditActivitiesEHV) && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-[2px] bg-maroon-600 rounded-full" />
                    <span className="text-maroon-700 font-display font-bold text-xs tracking-[0.2em] uppercase">Audit Activities</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {(service as any).auditActivitiesEHV && (
                      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:border-maroon-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shadow-md shadow-maroon-600/25">
                            <BarChart2 className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-display font-bold text-base text-slate-900">EHV Switchyard</h3>
                        </div>
                        <ul className="space-y-3">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {(service as any).auditActivitiesEHV.map((it: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-maroon-500 mt-1.5 shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {('auditActivitiesLV' in service && (service as any).auditActivitiesLV) && (
                      <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:border-maroon-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-md shadow-violet-500/25">
                            <BarChart2 className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="font-display font-bold text-base text-slate-900">LV / MV Network</h3>
                        </div>
                        <ul className="space-y-3">
                          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                          {(service as any).auditActivitiesLV.map((it: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Accordion Sections */}
              <div className="space-y-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {('commonIssues' in service && (service as any).commonIssues) && (
                  <AccordionItem title="Common Issues & Challenges" defaultOpen>
                    <div className="space-y-6">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(service as any).commonIssues.map((issue: { title: string; items: string[] }, i: number) => (
                        <div key={i}>
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-amber-500" />
                            <strong className="text-slate-800 font-display font-semibold text-sm">{issue.title}</strong>
                          </div>
                          <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
                            {issue.items.map((it: string, j: number) => (
                              <li key={j}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                )}
                {service.deliverables && (
                  <AccordionItem title="Deliverables" defaultOpen>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                          <ClipboardCheck className="w-4 h-4 text-maroon-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                )}
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {('benefits' in service && (service as any).benefits) && (
                  <AccordionItem title="Key Benefits">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(service as any).benefits.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                          <TrendingUp className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-sm text-green-800">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionItem>
                )}
              </div>

              {/* Other Services */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h3 className="font-display font-bold text-xs text-slate-400 uppercase tracking-[0.15em] mb-5">Explore Other Services</h3>
                <div className="flex flex-wrap gap-3">
                  {services.filter((s) => s.slug !== service.slug).map((s) => {
                    const OtherIcon = IconMap[s.icon] || BarChart2;
                    return (
                      <Link key={s.slug} href={`/services/${s.slug}`}
                        className="group flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-600 hover:text-maroon-700 hover:border-maroon-200 hover:shadow-md transition-all">
                        <OtherIcon className="w-4 h-4 text-slate-400 group-hover:text-maroon-600 transition-colors" />
                        {s.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-maroon-600" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Sidebar ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Application Areas */}
                {service.applicationArea && (
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shadow-md shadow-maroon-600/25">
                        <Factory className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Application Areas</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.applicationArea.map((a, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-600 hover:border-maroon-300 hover:text-maroon-700 transition-colors cursor-default">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reference Standards */}
                {service.standards && (
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-md shadow-violet-500/25">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-slate-900">Reference Standards</h4>
                    </div>
                    <ul className="space-y-2">
                      {service.standards.map((std, i) => (
                        <li key={i} className="flex items-center gap-3 py-2.5 border-b border-slate-200 last:border-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                          <span className="text-sm font-mono text-slate-600">{std}</span>
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
                      <h4 className="font-display font-bold text-xs text-white uppercase tracking-[0.15em]">Need This Service?</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      Call our engineering experts directly for a consultation.
                    </p>
                    <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-maroon-700 to-maroon-600 hover:from-maroon-600 hover:to-maroon-800 text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-maroon-600/25 hover:shadow-maroon-600/40">
                      <Phone className="w-4 h-4" />
                      {company.phone}
                    </a>
                    <Link href="/contact"
                      className="mt-3 flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all">
                      Send Enquiry
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
