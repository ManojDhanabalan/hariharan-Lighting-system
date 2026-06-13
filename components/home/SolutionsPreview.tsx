"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowUpRight, Layers, Zap, PenTool, ShieldAlert } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Zap,
  PenTool,
  ShieldAlert,
};

const CARDS_DATA = [
  {
    ...solutions[0],
    gradient: "from-[#0EA5E9] to-[#0284C7]", // Aqua Blue
    shadow: "shadow-[#0EA5E9]/20",
    watermark: "SYS",
    features: ["Maintenance-Free Grounding", "All Soil Types Compatibility", "Type-Tested Electrodes", "IEEE 80 / IS 3043 Compliant"]
  },
  {
    ...solutions[1],
    gradient: "from-[#E11D48] to-[#9F1239]", // Vibrant Crimson / Maroon
    shadow: "shadow-[#E11D48]/20",
    watermark: "LPS",
    features: ["ESE & Conventional LPS", "Surge Protection Devices", "Risk Assessment Software", "IS/IEC 62305 Protection"]
  },
  {
    ...solutions[2],
    gradient: "from-[#F59E0B] to-[#D97706]", // Rich Amber / Gold
    shadow: "shadow-[#F59E0B]/20",
    watermark: "GRD",
    features: ["Soil Resistivity Surveys", "Grid Modelling & Simulation", "Touch & Step Potential Analysis", "Full CAD Design Drawings"]
  }
];

export default function SolutionsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* High-tech abstract backdrop grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-maroon-900/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <SectionHeader 
            overline="Our Solutions" 
            title="Premium Safety Engineering Solutions"
            subtitle="Explore our certified, standards-compliant protection technologies designed to safeguard lives and critical infrastructure."
            centered
            dark
          />
        </motion.div>

        {/* 3D Isometric Card Deck Wrapper */}
        <div className="perspective-[1500px] w-full flex flex-col items-center justify-center py-10">
          
          {/* Overlapping Deck Layout */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 lg:gap-0 max-w-6xl w-full px-4">
            {CARDS_DATA.map((card, i) => {
              const Icon = iconMap[card.icon] || Zap;
              
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50, rotateY: -35, rotateX: 12, rotateZ: -4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ 
                    rotateY: 0, 
                    rotateX: 0, 
                    rotateZ: 0, 
                    z: 60,
                    y: -30,
                    scale: 1.05,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="relative w-full sm:w-[290px] h-[450px] bg-white text-slate-800 rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.55)] border border-white/10 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 lg:-ml-12 first:ml-0 z-[10] hover:z-[50]"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  {/* Vibrant Gradient Header section matching mockup */}
                  <div className={`h-[180px] bg-gradient-to-br ${card.gradient} p-6 flex flex-col justify-between relative text-white`}>
                    {/* Top action details */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-black/20 py-1 px-2 rounded-full border border-white/5">
                        {card.standards[0]}
                      </span>
                    </div>

                    {/* Card Title info */}
                    <div>
                      <h4 className="font-display font-extrabold text-xl leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-[10.5px] font-medium text-white/80 mt-1 uppercase tracking-wider">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Clean white bottom half of card */}
                  <div className="flex-1 p-6 flex flex-col justify-between relative bg-white">
                    
                    {/* Feature list detail */}
                    <div className="space-y-3.5 relative z-10">
                      {card.features.map((feature, fi) => (
                        <div key={fi} className="flex items-center gap-2.5">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center flex-shrink-0`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          </div>
                          <span className="text-slate-700 text-xs font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Massive bottom watermark matches the mockup's UI letters */}
                    <div className={`absolute bottom-3 right-6 font-display font-black text-7xl select-none pointer-events-none opacity-[0.04] bg-clip-text bg-gradient-to-br ${card.gradient}`}>
                      {card.watermark}
                    </div>

                    {/* Action footer link inside the card */}
                    <div className="relative z-10 mt-4 border-t border-slate-100 pt-4 flex items-center justify-between group/link">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-600 transition-colors">
                        Learn More
                      </span>
                      <Link href={`/solutions/${card.slug}`}>
                        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover/link:bg-gradient-to-br ${card.gradient} group-hover/link:text-white transition-all duration-300`}>
                          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover/link:text-white transition-colors" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
