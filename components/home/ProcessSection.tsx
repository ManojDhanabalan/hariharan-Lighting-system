"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { UserCog, ShieldAlert, PenTool, HardHat, BadgeCheck } from "lucide-react";

const STEPS = [
  { number: "01", title: "Site Consultation",    desc: "Detailed consultation to understand your facility, existing systems, and specific protection requirements.", icon: UserCog, color: "indigo" },
  { number: "02", title: "Risk Assessment",       desc: "Comprehensive risk assessment per IS, IEEE & IEC standards to identify vulnerabilities and protection levels.", icon: ShieldAlert, color: "amber" },
  { number: "03", title: "Design & Engineering", desc: "Detailed engineering designs with drawings, BOQ, specifications, and full compliance declarations.", icon: PenTool, color: "rose" },
  { number: "04", title: "Supply & Installation", desc: "Type-tested products supplied and installed by our qualified engineers following approved methodology.", icon: HardHat, color: "teal" },
  { number: "05", title: "Testing & Commissioning", desc: "Rigorous testing per relevant standards with comprehensive commissioning report and compliance certificate.", icon: BadgeCheck, color: "emerald" },
];

const colorMap: Record<string, { bg: string; text: string; shadowDark: string }> = {
  indigo:  { bg: "bg-indigo-600", text: "text-indigo-600", shadowDark: "rgba(49, 46, 129, 0.7)" },
  amber:   { bg: "bg-amber-500",  text: "text-amber-600",  shadowDark: "rgba(120, 53, 15, 0.7)" },
  rose:    { bg: "bg-rose-500",   text: "text-rose-600",   shadowDark: "rgba(136, 19, 55, 0.7)" },
  teal:    { bg: "bg-teal-500",   text: "text-teal-600",   shadowDark: "rgba(19, 78, 74, 0.7)" },
  emerald: { bg: "bg-emerald-500",text: "text-emerald-600",shadowDark: "rgba(6, 78, 59, 0.7)" },
};

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden font-display">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(123,45,62,0.03),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center max-w-3xl mx-auto">
          <SectionHeader 
            overline="Our Process" 
            title="How We Work"
            subtitle="A systematic, standards-driven approach from consultation to commissioning." 
            centered 
          />
        </motion.div>

        <div className="max-w-5xl mx-auto relative" ref={containerRef}>
          
          {/* Center Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-indigo-500 via-rose-500 to-emerald-500"
              style={{ height }}
            />
          </div>

          {/* Left Timeline Line (Mobile only) */}
          <div className="block md:hidden absolute left-8 top-0 bottom-0 w-1 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-indigo-500 via-rose-500 to-emerald-500"
              style={{ height }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const colors = colorMap[step.color];
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative flex items-center justify-between md:justify-normal md:even:flex-row-reverse w-full min-h-[140px]">
                  
                  {/* Timeline Icon / Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${colors.bg} text-white flex items-center justify-center shadow-2xl border-4 border-white`}
                      style={{ boxShadow: `0 10px 25px -5px ${colors.shadowDark}` }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </motion.div>
                  </div>

                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-full pl-24 md:pl-0 md:w-1/2 flex justify-start md:px-12 relative z-10" style={{ perspective: "1500px" }}>
                    <motion.div 
                      initial={{ opacity: 0, rotateX: 60, y: 50 }}
                      whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                      style={{ transformOrigin: "bottom center" }}
                      className="w-full relative"
                    >
                      {/* Dark Offset Layer (Solid block, smaller offset) */}
                      <div 
                        className="absolute inset-0 rounded-2xl z-[-1]" 
                        style={{ 
                          backgroundColor: colors.shadowDark,
                          transform: 'translate(6px, 6px)'
                        }} 
                      />

                      {/* Main Card */}
                      <div className="bg-white w-full rounded-2xl p-6 md:p-8 border border-slate-100 relative z-10">
                        <span className={`inline-block px-3 py-1 bg-slate-50 rounded-lg text-xs font-bold uppercase tracking-widest ${colors.text} mb-4`}>
                          Step {step.number}
                        </span>
                        <h3 className="font-extrabold text-xl md:text-2xl text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{step.desc}</p>
                      </div>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
