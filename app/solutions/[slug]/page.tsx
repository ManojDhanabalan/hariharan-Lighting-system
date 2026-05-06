import type { Metadata } from "next";
import PageHero      from "@/components/shared/PageHero";
import CTABanner     from "@/components/shared/CTABanner";
import { solutions } from "@/data/solutions";
import { notFound }  from "next/navigation";
import { CheckCircle2, Factory, FileText, Phone, Settings } from "lucide-react";
import Link from "next/link";

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

  return (
    <>
      <PageHero title={solution.title} subtitle={solution.subtitle} tag={solution.heroTag}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: solution.title, href: `/solutions/${solution.slug}` }]} />

      <section className="py-20 bg-white">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* Main */}
            <div className="w-full lg:w-2/3 space-y-12">
              <div>
                <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Overview</h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  {solution.overview.split("\n\n").map((p,i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              {solution.whatAreSurges && (
                <div className="p-6 bg-blue-50 border-l-4 border-volt rounded-r-2xl">
                  <h3 className="font-display font-bold text-lg text-slate-900 uppercase tracking-tight mb-3">Understanding Transient Overvoltages</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{solution.whatAreSurges}</p>
                </div>
              )}

              {solution.designProcess && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-7 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Our Engineering Process</h2>
                  <div className="relative border-l-2 border-blue-200 pl-8 space-y-6">
                    {solution.designProcess.map((step, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[2.6rem] top-1 w-9 h-9 rounded-full bg-volt text-white flex items-center justify-center shadow-volt-btn">
                          <span className="font-mono font-bold text-xs">{step.step}</span>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 transition-colors shadow-sm">
                          <h4 className="font-display font-bold text-base text-slate-900 uppercase tracking-wide mb-2">{step.title}</h4>
                          <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(solution.offerings || solution.productCategories || solution.spdCategories) && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Our Offerings</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {(solution.offerings||solution.productCategories||solution.spdCategories)?.map((item: { name?: string; type?: string; desc: string }, i: number) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 transition-all card-hover shadow-sm">
                        <h4 className="font-display font-bold text-slate-900 text-base mb-2">{item.name||item.type}</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {solution.goodGroundingImportance && (
                <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl">
                  <h3 className="font-display font-bold text-base text-volt uppercase tracking-wide mb-4">Why Good Grounding Matters</h3>
                  <ul className="space-y-3">{solution.goodGroundingImportance.map((item,i) => <li key={i} className="flex items-start gap-3 text-sm text-text-secondary"><CheckCircle2 className="w-4 h-4 text-volt shrink-0 mt-0.5" />{item}</li>)}</ul>
                </div>
              )}

              {solution.valueAdds && (
                <div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 uppercase tracking-tight mb-5 flex items-center gap-3"><span className="w-6 h-[2px] bg-volt" />Key Advantages</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.valueAdds.map((item,i) => <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 transition-colors shadow-sm"><CheckCircle2 className="w-5 h-5 text-volt shrink-0 mt-0.5" /><span className="text-text-secondary text-sm leading-relaxed">{item}</span></div>)}
                  </div>
                </div>
              )}

              {solution.deliverables && (
                <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
                  <h2 className="font-display font-bold text-xl text-slate-900 uppercase tracking-tight mb-5 pb-4 border-b border-slate-100">Deliverables</h2>
                  <ul className="space-y-3">{solution.deliverables.map((item,i) => <li key={i} className="flex items-center gap-3 text-text-secondary text-sm"><span className="w-2 h-2 rounded-full bg-volt shrink-0" />{item}</li>)}</ul>
                </div>
              )}

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-display font-bold text-xs text-text-dim uppercase tracking-[0.15em] mb-4">Other Solutions</h3>
                <div className="flex flex-wrap gap-2">
                  {solutions.filter(s=>s.slug!==solution.slug).map(s => (
                    <Link key={s.slug} href={`/solutions/${s.slug}`} className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm text-text-secondary hover:text-volt hover:border-blue-200 transition-colors shadow-sm">
                      <span>{s.icon}</span>{s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 space-y-5">
                {solution.deliveryModel && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-2 text-volt mb-5"><Settings className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Delivery Model</h4></div>
                    <div className="flex flex-col gap-3">
                      {solution.deliveryModel.split("→").map((step,i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-50 border border-blue-100 text-xs font-mono text-volt shrink-0">{i+1}</span>
                          <span className="font-display font-semibold text-text-primary text-sm uppercase tracking-wide">{step.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {solution.applicationArea && (
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-card overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-volt-gradient rounded-t-2xl" />
                    <div className="flex items-center gap-2 text-volt mb-4"><Factory className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Application Areas</h4></div>
                    <div className="flex flex-wrap gap-2">{solution.applicationArea.map((a,i) => <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-xs text-text-secondary">{a}</span>)}</div>
                  </div>
                )}
                {solution.standards && (
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-2 text-volt mb-4"><FileText className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Reference Standards</h4></div>
                    <ul className="space-y-2">{solution.standards.map((std,i) => <li key={i} className="flex items-center gap-2 py-2 border-b border-slate-100 last:border-0"><span className="w-1.5 h-1.5 rounded-full bg-volt shrink-0" /><span className="text-sm font-mono text-text-secondary">{std}</span></li>)}</ul>
                  </div>
                )}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-volt">
                  <div className="flex items-center gap-2 text-volt mb-3"><Phone className="w-4 h-4" /><h4 className="font-display font-bold text-xs uppercase tracking-[0.15em]">Get a Quote</h4></div>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">Ready to discuss your {solution.title.toLowerCase()} requirements?</p>
                  <a href="tel:+917373766689" className="flex items-center justify-center gap-2 w-full py-3.5 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-volt-btn hover:-translate-y-0.5">
                    <Phone className="w-4 h-4" />Call Us Now
                  </a>
                  <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 w-full py-3 border-2 border-blue-200 hover:border-volt text-volt font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline={`Require a ${solution.title}?`}
        subtext="Our engineering team provides end-to-end design, supply, installation, and commissioning."
        ctaLabel="Request a Quote" ctaHref="/contact" secondaryCta={{ label: "All Solutions", href: "/solutions" }} />
    </>
  );
}
