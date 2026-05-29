"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  icon: string;
  shortDesc: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, subtitle, shortDesc, href, index = 0 }: ServiceCardProps) {


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.4, 0.2, 1] }}
      className="group relative flex flex-col w-full aspect-[9/16] min-h-[480px] max-h-[550px] overflow-hidden rounded-[2.5rem] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(30,58,138,0.5)] bg-[#020617]"
      style={{
        WebkitMaskImage: "radial-gradient(circle 55px at top left, transparent 55px, black 56px)",
        maskImage: "radial-gradient(circle 55px at top left, transparent 55px, black 56px)",
      }}
    >
      {/* 
        1. Top/Bottom Animated Gradient 
        Continuously breathing top/bottom gradient
      */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(180deg, #082f49 0%, #020617 100%)",
            "linear-gradient(180deg, #0f172a 0%, #0369a1 100%)",
            "linear-gradient(180deg, #082f49 0%, #020617 100%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Darkening overlay so text stays readable */}
      <div className="absolute inset-0 bg-slate-950/40 z-0" />

      {/* 
        2. Realistic Water Ripple Animation (Slow, aquatic flow)
        Constantly active. Uses 3D shadow effects to look like actual water displacement.
      */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-1000">
        {[0, 1, 2].map((circle) => (
          <motion.div
            key={circle}
            className="absolute rounded-full"
            style={{ 
              boxShadow: '0 0 20px rgba(255,255,255,0.15), inset 0 0 30px rgba(0,0,0,0.4), 0 0 50px rgba(34,211,238,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(3px)'
            }}
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{ 
              width: ["0px", "1000px"], 
              height: ["0px", "1000px"], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 8, // Much slower and more natural flow
              repeat: Infinity,
              delay: circle * 2.6, // Evenly spaced
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Edge Highlights */}
      <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_0_1px_rgba(147,197,253,0.5)] transition-all duration-500 z-10 pointer-events-none" />

      {/* Decorative bite accent */}
      <div className="absolute top-[3px] left-[58px] w-16 h-[1px] bg-gradient-to-r from-blue-300 to-transparent z-10 opacity-70" />
      <div className="absolute top-[58px] left-[3px] w-[1px] h-16 bg-gradient-to-b from-blue-300 to-transparent z-10 opacity-70" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full p-8 pt-14">
        
        {/* Top Section */}
        <div className="flex justify-end items-start mb-10">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/50 transition-all duration-500 backdrop-blur-sm bg-black/20">
             <span className="text-sm font-bold tracking-widest font-display">{(index + 1).toString().padStart(2, '0')}</span>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-auto">
          {subtitle && (
            <p className="text-[10px] font-display font-bold text-blue-300 uppercase tracking-[0.25em] mb-4 drop-shadow-md">
              {subtitle}
            </p>
          )}
          
          <h3 className="font-display font-extrabold text-3xl text-white mb-5 group-hover:text-blue-50 transition-colors duration-300 drop-shadow-lg">
            {title}
          </h3>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 line-clamp-4 group-hover:text-white transition-colors duration-300 drop-shadow-md">
            {shortDesc}
          </p>

          <Link href={href}
            className="inline-flex items-center gap-4 text-white font-display font-bold text-xs md:text-sm uppercase tracking-widest group/link">
            <span className="relative overflow-hidden h-5 flex items-center">
              <span className="block transition-transform duration-500 group-hover/link:-translate-y-full">Explore Service</span>
              <span className="absolute inset-0 text-blue-200 transition-transform duration-500 translate-y-full group-hover/link:translate-y-0 flex items-center drop-shadow-md">Explore Service</span>
            </span>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-blue-500 border border-white/20 group-hover/link:border-blue-300 group-hover/link:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-500 backdrop-blur-md">
               <ArrowRight className="w-4 h-4 text-white transition-transform drop-shadow-md" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
