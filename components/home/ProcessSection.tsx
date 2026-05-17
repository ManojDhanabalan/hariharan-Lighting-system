"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { MessageSquare, Search, PenTool, Package, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const STEPS = [
  { number: "01", title: "Site Consultation",    desc: "Detailed consultation to understand your facility, existing systems, and specific protection requirements.", icon: MessageSquare, color: "maroon" },
  { number: "02", title: "Risk Assessment",       desc: "Comprehensive risk assessment per IS, IEEE & IEC standards to identify vulnerabilities and protection levels.", icon: Search, color: "gold" },
  { number: "03", title: "Design & Engineering", desc: "Detailed engineering designs with drawings, BOQ, specifications, and full compliance declarations.", icon: PenTool, color: "crimson" },
  { number: "04", title: "Supply & Installation", desc: "Type-tested products supplied and installed by our qualified engineers following approved methodology.", icon: Package, color: "maroonDark" },
  { number: "05", title: "Testing & Commissioning", desc: "Rigorous testing per relevant standards with comprehensive commissioning report and compliance certificate.", icon: CheckCircle2, color: "goldDark" },
];

const colorMap: Record<string, { bg: string; ring: string; text: string; line: string }> = {
  maroon:     { bg: "bg-[#7B2D3E]", ring: "ring-[#7B2D3E]/30", text: "text-[#7B2D3E]", line: "bg-[#7B2D3E]/20" },
  gold:       { bg: "bg-[#D97706]", ring: "ring-[#D97706]/30", text: "text-[#D97706]", line: "bg-[#D97706]/20" },
  crimson:    { bg: "bg-[#9B3D52]", ring: "ring-[#9B3D52]/30", text: "text-[#9B3D52]", line: "bg-[#9B3D52]/20" },
  maroonDark: { bg: "bg-[#5C1F2E]", ring: "ring-[#5C1F2E]/30", text: "text-[#5C1F2E]", line: "bg-[#5C1F2E]/20" },
  goldDark:   { bg: "bg-[#B45309]", ring: "ring-[#B45309]/30", text: "text-[#B45309]", line: "bg-[#B45309]/20" },
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-[#FAF6F6] relative overflow-hidden">
      {/* Background radial accent overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(123,45,62,0.03),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
          <SectionHeader overline="Our Process" title="How We Work"
            subtitle="A systematic, standards-driven approach from consultation to commissioning." centered />
        </motion.div>

        {/* Desktop - Interactive horizontal timeline */}
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="relative mb-16">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200" />
            <motion.div 
              className="absolute top-8 left-[10%] h-0.5 bg-gradient-to-r from-[#7B2D3E] via-[#D97706] to-[#B45309]"
              initial={{ width: "0%" }}
              whileInView={{ width: `${(activeStep / (STEPS.length - 1)) * 80}%` }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="relative flex items-start justify-between px-[10%]">
              {STEPS.map((step, i) => {
                const colors = colorMap[step.color];
                const isActive = i === activeStep;
                const isCompleted = i < activeStep;
                const Icon = i === 3 ? Package : step.icon; // safely load step 4 icon component

                return (
                  <motion.button
                    key={step.number}
                    onClick={() => setActiveStep(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex flex-col items-center text-center group focus:outline-none"
                  >
                    {/* Step circle */}
                    <div className={`relative w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                      isActive 
                        ? `${colors.bg} text-white shadow-lg ${colors.ring} ring-4 scale-110` 
                        : isCompleted
                        ? `${colors.bg} text-white shadow-md`
                        : "bg-white text-slate-400 border-2 border-slate-200 group-hover:border-[#7B2D3E]/30"
                    }`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>

                    {/* Step number */}
                    <span className={`text-xs font-display font-bold uppercase tracking-widest mb-2 ${
                      isActive ? colors.text : "text-slate-400"
                    }`}>
                      Step {step.number}
                    </span>

                    {/* Step title */}
                    <h3 className={`font-display font-bold text-base mb-2 transition-colors ${
                      isActive ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                    }`}>
                      {step.title}
                    </h3>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active step detail */}
          <motion.div 
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl p-10 border border-[#7B2D3E]/10 shadow-lg text-center"
          >
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${colorMap[STEPS[activeStep].color].bg} text-white mb-6 shadow-lg shadow-[#7B2D3E]/10`}>
              {(() => { const Icon = activeStep === 3 ? Package : STEPS[activeStep].icon; return <Icon className="w-6 h-6" />; })()}
            </div>
            <h4 className="font-display font-bold text-2xl text-slate-900 mb-4">{STEPS[activeStep].title}</h4>
            <p className="text-slate-600 text-base leading-relaxed">{STEPS[activeStep].desc}</p>
          </motion.div>
        </div>

        {/* Mobile - Vertical timeline */}
        <div className="flex lg:hidden flex-col gap-0 relative pl-16">
          {/* Vertical line */}
          <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-slate-200" />
          <motion.div 
            className="absolute left-7 top-4 w-0.5 bg-gradient-to-b from-[#7B2D3E] via-[#D97706] to-[#B45309]"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {STEPS.map((step, i) => {
            const colors = colorMap[step.color];
            const Icon = i === 3 ? Package : step.icon;
            return (
              <motion.div 
                key={step.number} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.08 }} 
                className="relative pb-10 last:pb-0"
              >
                {/* Step indicator */}
                <div className={`absolute -left-[2.85rem] top-0 w-10 h-10 rounded-full ${colors.bg} text-white flex items-center justify-center shadow-md z-10`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <span className={`text-xs font-display font-bold uppercase tracking-widest ${colors.text} mb-2 block`}>
                    Step {step.number}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
