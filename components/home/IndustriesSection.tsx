"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";
import SectionHeader from "@/components/shared/SectionHeader";
import { Factory, Fuel, Sun, Cpu, Building2, Zap, Train, Settings, Wifi, Warehouse } from "lucide-react";

const INDUSTRIES = [
  { name: "Manufacturing Plants", icon: Factory },
  { name: "Oil & Gas",             icon: Fuel },
  { name: "Solar & Wind Farms",    icon: Sun },
  { name: "Data Centers",          icon: Cpu },
  { name: "Commercial Buildings",  icon: Building2 },
  { name: "AIS & GIS Substations", icon: Zap },
  { name: "Metro Rail Projects",   icon: Train },
  { name: "Process Plants",        icon: Settings },
  { name: "Communication Towers",  icon: Wifi },
  { name: "Warehouses",            icon: Warehouse },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-indigo-50 to-cyan-50 relative overflow-hidden">
      {/* Vibrant ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(99,102,241,0.08),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-300/20 to-transparent rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
          <SectionHeader 
            overline="Industries We Serve" 
            title="Trusted Across Critical Industries"
            subtitle={`Protecting life and assets across ${company.industries.length}+ industry sectors throughout India.`}
            centered 
          />
        </motion.div>

        {/* Grid showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 text-center overflow-hidden"
              >
                {/* Vibrant hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/10 via-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center mx-auto mb-4 group-hover:from-indigo-200 group-hover:to-cyan-200 transition-all duration-500">
                  <Icon className="w-5.5 h-5.5 text-indigo-600 group-hover:text-cyan-700 transition-colors duration-500" />
                </div>

                {/* Name */}
                <h3 className="relative font-display font-semibold text-sm text-slate-700 group-hover:text-indigo-900 transition-colors">
                  {ind.name}
                </h3>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:w-12 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar with premium maroon-gold-crimson palette */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-16 grid grid-cols-3 gap-6 p-8 bg-gradient-to-r from-indigo-50 via-cyan-50 to-blue-50 rounded-3xl border-2 border-cyan-200 shadow-lg"
        >
          {[
            { value: "10+", label: "Industries Served", gradient: "from-rose-500 to-red-600" },
            { value: "12+", label: "States Covered", gradient: "from-amber-500 to-orange-600" },
            { value: "500+", label: "Projects Delivered", gradient: "from-cyan-500 to-blue-600" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className={`font-display font-extrabold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r ${s.gradient} mb-1`}>{s.value}</div>
              <div className="text-xs text-slate-600 uppercase tracking-wider font-display font-semibold">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
