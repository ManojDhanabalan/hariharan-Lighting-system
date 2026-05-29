"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { company } from "@/data/company";
import SectionHeader from "@/components/shared/SectionHeader";
import { Factory, Fuel, Sun, Cpu, Building2, Zap, Train, Settings, Wifi, Warehouse, Shield } from "lucide-react";

const NODES = [
  { name: "Manufacturing", icon: Factory, color: "cyan", 
    d: { t: 15, l: 50, a: "right" }, m: { t: 8, l: 30, a: "right" } },
  { name: "Oil & Gas", icon: Fuel, color: "pink", 
    d: { t: 25, l: 75, a: "left" }, m: { t: 17, l: 85, a: "left" } },
  { name: "Solar & Wind", icon: Sun, color: "cyan", 
    d: { t: 55, l: 85, a: "left" }, m: { t: 26, l: 15, a: "right" } },
  { name: "Data Centers", icon: Cpu, color: "pink", 
    d: { t: 80, l: 70, a: "left" }, m: { t: 35, l: 80, a: "left" } },
  { name: "Commercial", icon: Building2, color: "cyan", 
    d: { t: 80, l: 30, a: "right" }, m: { t: 44, l: 25, a: "right" } },
  { name: "Substations", icon: Zap, color: "pink", 
    d: { t: 55, l: 15, a: "right" }, m: { t: 53, l: 85, a: "left" } },
  { name: "Metro Rail", icon: Train, color: "cyan", 
    d: { t: 25, l: 25, a: "right" }, m: { t: 62, l: 15, a: "right" } },
  { name: "Process Plants", icon: Settings, color: "pink", 
    d: { t: 45, l: 65, a: "left" }, m: { t: 71, l: 75, a: "left" } },
  { name: "Communication", icon: Wifi, color: "cyan", 
    d: { t: 65, l: 45, a: "right" }, m: { t: 80, l: 25, a: "right" } },
  { name: "Warehouses", icon: Warehouse, color: "pink", 
    d: { t: 40, l: 35, a: "right" }, m: { t: 89, l: 85, a: "left" } },
];

export default function IndustriesSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-slate-950 relative overflow-hidden font-display">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center max-w-3xl mx-auto">
          <SectionHeader 
            overline="Industries We Serve" 
            title="Trusted Across Critical Industries"
            subtitle={`Protecting life and assets across ${company.industries.length}+ industry sectors throughout India.`}
            centered 
            dark
          />
        </motion.div>

        {/* Network Diagram Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[750px] md:h-[600px] lg:h-[700px] rounded-[40px] overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 to-slate-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 flex items-center justify-center">
          
          {/* Wireframe Background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Pentagons / Circles */}
            <circle cx="50" cy="50" r="20" stroke="#4A5568" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="35" stroke="#4A5568" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="50" stroke="#4A5568" strokeWidth="0.2" fill="none" strokeDasharray="1 1" />
            {/* Radial Lines */}
            <line x1="50" y1="50" x2="50" y2="0" stroke="#4A5568" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="95" y2="35" stroke="#4A5568" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="80" y2="95" stroke="#4A5568" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="20" y2="95" stroke="#4A5568" strokeWidth="0.2" />
            <line x1="50" y1="50" x2="5" y2="35" stroke="#4A5568" strokeWidth="0.2" />
          </svg>

          {/* Central Core */}
          <div className="absolute w-0 h-0 flex items-center justify-center pointer-events-none z-10">
            <div className="absolute w-24 h-24 bg-[#F96D80] rounded-full mix-blend-screen blur-[20px] opacity-60 animate-pulse" />
            <div className="absolute w-16 h-16 bg-[#71E1DF] rounded-full mix-blend-screen blur-[15px] opacity-60 translate-x-4 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(249,109,128,0.3)]">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Nodes */}
          {NODES.map((node, i) => {
            const pos = isMobile ? node.m : node.d;
            const isCyan = node.color === "cyan";
            const dotColor = isCyan ? "bg-[#71E1DF]" : "bg-[#F96D80]";
            const shadowColor = isCyan ? "shadow-[0_0_15px_#71E1DF]" : "shadow-[0_0_15px_#F96D80]";
            const textColor = isCyan ? "text-[#71E1DF]" : "text-[#F96D80]";
            
            return (
              <motion.div
                key={node.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring" }}
                className="absolute w-0 h-0 flex items-center justify-center z-20"
                style={{ top: `${pos.t}%`, left: `${pos.l}%` }}
              >
                {/* Floating animation wrapper */}
                <motion.div 
                  animate={{ y: [0, -6, 0] }} 
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative flex items-center justify-center group cursor-pointer"
                >
                  {/* The Dot */}
                  <div className={`relative z-20 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${dotColor} ${shadowColor} group-hover:scale-150 transition-transform duration-300`} />
                  
                  {/* Outer ripple */}
                  <div className={`absolute w-6 h-6 md:w-8 md:h-8 rounded-full ${dotColor} opacity-20 animate-ping`} style={{ animationDuration: '3s' }} />

                  {/* Label */}
                  <div className={`absolute flex items-center gap-2.5 whitespace-nowrap transition-all duration-300 bg-slate-950/60 group-hover:bg-slate-800/90 p-2 md:p-2.5 rounded-2xl border border-slate-700/50 backdrop-blur-md shadow-lg ${pos.a === 'right' ? 'left-4 md:left-6' : 'right-4 md:right-6 flex-row-reverse'}`}>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                      <node.icon className={`w-3 h-3 md:w-4 md:h-4 ${textColor}`} />
                    </div>
                    <span className="text-white text-xs md:text-sm font-bold tracking-wide drop-shadow-md">{node.name}</span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
