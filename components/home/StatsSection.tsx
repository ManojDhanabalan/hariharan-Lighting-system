"use client";

import { company } from "@/data/company";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { FolderCheck, Users, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: company.stats.projectsCompleted, label: "Projects Completed",  icon: FolderCheck, gradient: "from-[#7B2D3E] to-[#5C1F2E]", shadow: "shadow-[#7B2D3E]/15" },
  { value: company.stats.clientRetention,   label: "Client Retention",    icon: Users,       gradient: "from-[#9B3D52] to-[#7B2D3E]", shadow: "shadow-[#9B3D52]/15" },
  { value: company.stats.yearsExperience,   label: "Years Experience",    icon: Clock,       gradient: "from-[#C4718A] to-[#9B3D52]", shadow: "shadow-[#C4718A]/15" },
  { value: company.stats.statesServed,      label: "States Served",       icon: Map,         gradient: "from-[#D97706] to-[#B45309]", shadow: "shadow-[#D97706]/15" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-white">
      {/* Premium ambient radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(123,45,62,0.03),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#7B2D3E]/10 transition-all duration-500"
            >
              {/* Subtle elegant gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
              
              {/* Icon container */}
              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 shadow-md ${stat.shadow} group-hover:scale-105 transition-transform duration-500`}>
                <stat.icon className="w-5.5 h-5.5 text-white" />
              </div>

              {/* Counter with custom slate-900 typography */}
              <div className="mb-2">
                <AnimatedCounter value={stat.value} label={stat.label} delay={i * 120} />
              </div>

              {/* Bottom elegant accent line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${stat.gradient} group-hover:w-16 transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>

        {/* Trust badge row with coordinated maroon/amber safety dots */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[#64748B] text-sm border-t border-[#7B2D3E]/5 pt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7B2D3E]" />
            <span className="font-medium text-slate-700">IS/IEC 62305 Certified</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span className="font-medium text-slate-700">IEEE 80 Compliant</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-200" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#5C1F2E]" />
            <span className="font-medium text-slate-700">Since {company.established}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
