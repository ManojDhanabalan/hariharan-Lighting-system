import type { Metadata } from "next";
import PageHero      from "@/components/shared/PageHero";
import CTABanner     from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { solutions } from "@/data/solutions";
import Link          from "next/link";
import { CheckCircle2, ArrowRight, Factory, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Complete protection solutions: Earthing System, Lightning System, Ground Design & Surge Protection — design, supply, installation and commissioning across India.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero title="Our Solutions" subtitle="Complete Protection, End to End"
        tag="Solutions" breadcrumb={[{ label: "Home", href: "/" }, { label: "Solutions", href: "/solutions" }]} />

      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-50/60 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-14"><SectionHeader overline="Complete Protection" title="End-to-End Protection Systems"
            subtitle="From design and supply to installation and commissioning — comprehensive protection systems tailored to your specific industrial requirements." centered /></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <div key={solution.id} className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 hover:shadow-card transition-all duration-300 card-hover flex flex-col">
                <div className="h-1 w-full bg-volt-gradient opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-8 flex flex-col flex-grow">
                  <div className="absolute top-9 right-8 w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    <span className="font-mono text-xs text-text-dim">{String(idx+1).padStart(2,"0")}</span>
                  </div>
                  <div className="mb-5 w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-2xl group-hover:bg-amber-100 transition-colors">{solution.icon}</div>
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-1 group-hover:text-volt transition-colors">{solution.title}</h2>
                  <p className="text-xs font-display font-semibold text-text-dim uppercase tracking-[0.12em] mb-5 pb-4 border-b border-slate-100">{solution.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{solution.shortDesc}</p>
                  <ul className="space-y-2.5 mb-6">
                    {(solution.valueAdds||[]).slice(0,3).map((p,i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-volt shrink-0 mt-0.5" />{p}
                      </li>
                    ))}
                  </ul>
                  {solution.deliveryModel && (
                    <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                      <div className="flex items-center gap-2 text-volt text-xs font-display font-bold uppercase tracking-wider mb-2"><Settings className="w-3.5 h-3.5" />Delivery Model</div>
                      <div className="flex flex-wrap gap-2">
                        {solution.deliveryModel.split("→").map((s,i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            {i>0 && <span className="text-text-dim text-xs">→</span>}
                            <span className="text-xs font-display font-semibold text-text-secondary">{s.trim()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {solution.applicationArea && (
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-text-dim text-xs font-display uppercase tracking-wider mb-2"><Factory className="w-3.5 h-3.5" />Application Areas</div>
                      <div className="flex flex-wrap gap-1.5">
                        {solution.applicationArea.slice(0,4).map(a => <span key={a} className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-text-secondary">{a}</span>)}
                        {solution.applicationArea.length>4 && <span className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs text-text-dim">+{solution.applicationArea.length-4}</span>}
                      </div>
                    </div>
                  )}
                  <Link href={`/solutions/${solution.slug}`}
                    className="group/btn flex items-center justify-center gap-2 py-3.5 bg-slate-50 hover:bg-volt border border-slate-200 hover:border-volt text-slate-700 hover:text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300">
                    Explore Solution <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Discuss Your Project Requirements" subtext="Our engineering team is ready to design a custom protection solution for your specific needs."
        ctaLabel="Contact Engineering" ctaHref="/contact" secondaryCta={{ label: "View Services", href: "/services" }} />
    </>
  );
}
