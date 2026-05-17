import type { Metadata } from "next";
import CTABanner from "@/components/shared/CTABanner";
import { services } from "@/data/services";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import { CheckCircle2, ArrowRight, Factory, FileText, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive electrical safety services: Earthing Audits, and LPS Adequacy Audits — compliant with IS, IEEE & IEC standards.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Engineering Safety. Eliminating Risk. Our team of qualified engineers delivers detailed assessments, analyses, and compliance reports."
        stats={[
          { icon: "shield" as const, label: `${services.length} Core Services` },
          { icon: "factory" as const, label: "12+ Industries" }
        ]}
      />

      {/* ── Services Grid ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.slug}`}
                className="group relative bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10 hover:shadow-2xl hover:border-slate-200 transition-all duration-500 flex flex-col overflow-hidden">
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-600/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-maroon-600 to-maroon-700 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-maroon-50 border border-maroon-100 flex items-center justify-center text-2xl group-hover:bg-maroon-100 group-hover:scale-110 transition-all duration-500">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-maroon-700 transition-colors">
                      <span className="text-xs font-display font-semibold uppercase tracking-wider">Details</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Title & subtitle */}
                  <h2 className="font-display font-extrabold text-2xl text-slate-900 mb-1 group-hover:text-maroon-700 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs font-display font-semibold text-slate-400 uppercase tracking-[0.12em] mb-5 pb-4 border-b border-slate-200">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.shortDesc}
                  </p>

                  {/* Key features */}
                  <ul className="space-y-2.5 mb-6">
                    {(service.valueAdds || []).slice(0, 3).map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-maroon-600 shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* Application areas */}
                  {service.applicationArea && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-wider mb-2">
                        <Factory className="w-3.5 h-3.5" />
                        Application Areas
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.applicationArea.slice(0, 4).map(a => (
                          <span key={a} className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                            {a}
                          </span>
                        ))}
                        {service.applicationArea.length > 4 && (
                          <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-400">
                            +{service.applicationArea.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Standards */}
                  {service.standards && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-wider mb-2">
                        <FileText className="w-3.5 h-3.5" />
                        Standards
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.standards.slice(0, 3).map(s => (
                          <span key={s} className="px-2 py-0.5 bg-maroon-50 border border-maroon-100 rounded text-xs font-mono text-maroon-800">
                            {s}
                          </span>
                        ))}
                        {service.standards.length > 3 && (
                          <span className="px-2 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs font-mono text-slate-400">
                            +{service.standards.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex items-center gap-2 py-3.5 bg-white border border-slate-200 rounded-xl text-center group-hover:shadow-md group-hover:border-maroon-200 transition-all">
                    <span className="font-display font-bold text-sm text-slate-700 flex-grow group-hover:text-maroon-700 transition-colors">
                      View Full Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-maroon-700 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTABanner
        headline="Ready to Secure Your Facility?"
        subtext="Schedule a comprehensive electrical safety assessment with our expert engineers."
        ctaLabel="Request an Assessment"
        ctaHref="/contact"
        secondaryCta={{ label: "View Solutions", href: "/solutions" }}
      />
    </>
  );
}
