"use client";

import { company } from "@/data/company";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { FolderCheck, Users, Clock, Map } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: company.stats.projectsCompleted, label: "Projects Completed",  icon: FolderCheck, colors: "text-blue-600 bg-blue-50 border-blue-200" },
  { value: company.stats.clientRetention,   label: "Client Retention",    icon: Users,       colors: "text-amber-600 bg-amber-50 border-amber-200" },
  { value: company.stats.yearsExperience,   label: "Years Experience",    icon: Clock,       colors: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { value: company.stats.statesServed,      label: "States Served",       icon: Map,         colors: "text-indigo-600 bg-indigo-50 border-indigo-200" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Elite, compact, minimalist grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-y-0 divide-x-0 lg:divide-x lg:divide-slate-200">
          {STATS.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="group flex flex-col items-center justify-center text-center px-4"
            >
              {/* Elegant, delicate colored icon container */}
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${stat.colors}`}>
                  <stat.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
              </div>

              {/* Counter with solid premium color */}
              <AnimatedCounter 
                value={stat.value} 
                label={stat.label} 
                delay={i * 100} 
                numberClassName="text-[#7B2D3E]" // Solid maroon color
                labelClassName="text-slate-500 group-hover:text-slate-800 transition-colors duration-300"
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
