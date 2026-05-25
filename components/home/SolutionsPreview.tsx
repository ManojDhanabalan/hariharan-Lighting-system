"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, Layers, Zap, PenTool, ShieldAlert, ArrowUpRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Zap,
  PenTool,
  ShieldAlert,
};

export default function SolutionsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Vibrant ambient radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(34,197,234,0.08),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/25 to-transparent rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
          <SectionHeader 
            overline="Our Solutions" 
            title="End-to-End Protection Solutions"
            subtitle="From design and supply to installation and commissioning — complete protection systems for every application."
            centered 
          />
        </motion.div>

        {/* Alternating feature rows */}
        <div className="space-y-16 lg:space-y-24">
          {solutions.map((solution, i) => {
            const Icon = iconMap[solution.icon] || Zap;
            const isEven = i % 2 === 0;
            
            // Vibrant, professional color gradients
            const gradients = [
              "from-amber-500 to-rose-600", // Warm vibrant
              "from-cyan-500 to-blue-600", // Cool vibrant
              "from-violet-500 to-purple-600", // Purple vibrant
              "from-green-500 to-emerald-600", // Green vibrant
            ];
            const bgGradients = [
              "from-amber-50 to-white",
              "from-cyan-50 to-white",
              "from-violet-50 to-white",
              "from-green-50 to-white",
            ];

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg shadow-[#7B2D3E]/10`}>
                        <Icon className="w-5.5 h-5.5 text-white" />
                      </div>
                      <span className="text-xs font-display font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
                        Solution {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-3xl lg:text-4xl text-slate-900 mb-3 group-hover:text-[#7B2D3E] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-display font-semibold text-[#7B2D3E] uppercase tracking-[0.1em] mb-5">
                      {solution.subtitle}
                    </p>
                    <p className="text-slate-600 text-base leading-relaxed mb-8">
                      {solution.shortDesc}
                    </p>

                    <Link href={`/solutions/${solution.slug}`}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradients[i]} text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.05] shadow-md`}>
                      View Solution
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>

                  {/* Visual card */}
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className={`relative bg-gradient-to-br ${bgGradients[i]} rounded-3xl p-10 border border-slate-100 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:border-[#7B2D3E]/10`}>
                      {/* Large icon watermark */}
                      <div className="absolute top-6 right-6 opacity-[0.03] text-slate-900">
                        <Icon className="w-32 h-32" />
                      </div>

                      {/* Feature list */}
                      <div className="relative z-10">
                        <h4 className="font-display font-bold text-lg text-slate-900 mb-6 pb-2 border-b border-slate-100">Key Features</h4>
                        <div className="space-y-4">
                          {(i === 0 
                            ? ["Maintenance-Free Grounding", "All Soil Types", "Type-Tested Products", "IS 3043 & IEEE 80 Compliant"]
                            : i === 1
                            ? ["ESE & Conventional LPS", "Surge Protection Devices", "Risk Assessment", "IS/IEC 62305 Compliant"]
                            : i === 2
                            ? ["Soil Resistivity Survey", "Grid Modelling & Simulation", "Touch & Step Analysis", "Design Documentation"]
                            : ["Type 1/2/3 SPDs", "Power & Data Protection", "Coordinated Protection", "IS/IEC 61643 Compliant"]
                          ).map((feature, fi) => (
                            <div key={fi} className="flex items-center gap-3">
                              <div className={`w-5.5 h-5.5 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center flex-shrink-0`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              </div>
                              <span className="text-slate-700 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-20 text-center"
        >
          <Link href="/solutions" className="inline-flex items-center gap-2 text-[#7B2D3E] font-display font-bold text-sm uppercase tracking-widest hover:text-[#5C1F2E] transition-colors group">
            View All Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
