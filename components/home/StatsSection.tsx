"use client";

import { company } from "@/data/company";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { FolderCheck, Users, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: company.stats.projectsCompleted, label: "Projects Completed",  icon: FolderCheck, gradient: "from-maroon-700 to-maroon-800", shadow: "shadow-maroon-700/12" },
  { value: company.stats.clientRetention,   label: "Client Retention",    icon: Users,       gradient: "from-maroon-600 to-maroon-700", shadow: "shadow-maroon-600/12" },
  { value: company.stats.yearsExperience,   label: "Years Experience",    icon: Clock,       gradient: "from-amber-500 to-amber-600", shadow: "shadow-amber-500/12" },
  { value: company.stats.statesServed,      label: "States Served",       icon: Map,         gradient: "from-teal-500 to-teal-600", shadow: "shadow-teal-500/12" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-white">
      {/* Premium ambient radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(107,31,53,0.04),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 border border-maroon-100 shadow-card hover:shadow-card-hover hover:border-maroon-200 transition-all duration-500 card-hover"
            >
              {/* Subtle elegant gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              {/* Icon container - Premium */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-7 shadow-volt group-hover:shadow-volt-strong group-hover:scale-110 transition-all duration-500`}>
                <stat.icon className="w-6.5 h-6.5 text-white" />
              </div>

              {/* Counter with premium typography */}
              <div className="mb-3">
                <AnimatedCounter value={stat.value} label={stat.label} delay={i * 120} />
              </div>

              {/* Bottom elegant accent line */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${stat.gradient} group-hover:w-20 transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>

        {/* Premium trust badge row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-600 text-sm border-t border-maroon-100 pt-10"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-maroon-700" />
            <span className="font-semibold text-slate-800">IS/IEC 62305 Certified</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-maroon-200" />
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="font-semibold text-slate-800">IEEE 80 Compliant</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-maroon-200" />
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-maroon-800" />
            <span className="font-semibold text-slate-800">Since {company.established}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
