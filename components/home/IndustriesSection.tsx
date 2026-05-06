"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import SectionHeader from "@/components/shared/SectionHeader";

const INDUSTRIES = [
  { name: "Manufacturing Plants", emoji: "🏭" },
  { name: "Oil & Gas",             emoji: "⛽" },
  { name: "Solar & Wind Farms",    emoji: "☀️" },
  { name: "Data Centers",          emoji: "🖥️" },
  { name: "Commercial Buildings",  emoji: "🏢" },
  { name: "AIS & GIS Substations", emoji: "⚡" },
  { name: "Metro Rail Projects",   emoji: "🚇" },
  { name: "Process Plants",        emoji: "🔧" },
  { name: "Communication Towers",  emoji: "📡" },
  { name: "Warehouses",            emoji: "🏬" },
];

export default function IndustriesSection() {
  const doubled = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="py-20 bg-bg-secondary border-y border-slate-100 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <SectionHeader overline="Industries We Serve" title="Trusted Across Critical Industries"
            subtitle={`Protecting life and assets across ${company.industries.length}+ industry sectors throughout India.`}
            centered />
        </motion.div>
      </div>

      <div className="marquee-wrapper overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-secondary to-transparent z-10 pointer-events-none" />
        <div className="marquee-track py-2">
          {doubled.map((ind, i) => (
            <div key={`${ind.name}-${i}`}
              className="mx-3 flex items-center gap-2.5 px-5 py-3 bg-white border border-slate-200 rounded-full font-display font-semibold text-sm text-text-secondary hover:border-blue-300 hover:text-volt hover:shadow-sm transition-all duration-200 whitespace-nowrap cursor-default shadow-sm">
              <span className="text-base">{ind.emoji}</span>
              {ind.name}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-10">
          {[{ value: "10+", label: "Industries", color: "text-blue-600" }, { value: "12+", label: "States", color: "text-violet-600" }, { value: "500+", label: "Projects", color: "text-amber-600" }].map(s => (
            <div key={s.label} className="flex items-center gap-3">
              <span className={`font-display font-extrabold text-2xl ${s.color}`}>{s.value}</span>
              <span className="text-text-dim text-sm font-display uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
