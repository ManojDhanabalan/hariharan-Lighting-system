"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const STEPS = [
  { number: "01", title: "Site Consultation",    desc: "Detailed consultation to understand your facility, existing systems, and specific protection requirements.", bg: "bg-blue-600" },
  { number: "02", title: "Risk Assessment",       desc: "Comprehensive risk assessment per IS, IEEE & IEC standards to identify vulnerabilities and protection levels.", bg: "bg-violet-600" },
  { number: "03", title: "Design & Engineering", desc: "Detailed engineering designs with drawings, BOQ, specifications, and full compliance declarations.", bg: "bg-indigo-600" },
  { number: "04", title: "Supply & Installation", desc: "Type-tested products supplied and installed by our qualified engineers following approved methodology.", bg: "bg-blue-700" },
  { number: "05", title: "Testing & Commissioning", desc: "Rigorous testing per relevant standards with comprehensive commissioning report and compliance certificate.", bg: "bg-violet-700" },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <SectionHeader overline="Our Process" title="How We Work"
            subtitle="A systematic, standards-driven approach from consultation to commissioning." centered />
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden lg:flex items-start gap-0 relative">
          <div className="absolute top-6 left-[calc(10%)] right-[calc(10%)] h-[2px] bg-gradient-to-r from-blue-200 via-violet-300 to-blue-200" />
          {STEPS.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="flex-1 flex flex-col items-center text-center px-4">
              <div className={`relative z-10 w-12 h-12 rounded-full ${step.bg} text-white flex items-center justify-center mb-6 shadow-lg`}>
                <span className="font-display font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wide mb-2">{step.title}</h3>
              <p className="text-text-secondary text-xs leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="flex lg:hidden flex-col gap-0 relative pl-14">
          <div className="absolute left-5 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-200 via-violet-300 to-blue-200" />
          {STEPS.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pb-8 last:pb-0">
              <div className={`absolute -left-[2.85rem] top-0 w-9 h-9 rounded-full ${step.bg} text-white flex items-center justify-center shadow-md`}>
                <span className="font-display font-bold text-xs">{step.number}</span>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="font-display font-bold text-base text-slate-900 uppercase tracking-wide mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
