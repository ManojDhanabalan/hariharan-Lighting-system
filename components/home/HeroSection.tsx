"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";

const QUICK_STATS = [
  { value: company.stats.projectsCompleted, label: "Projects Completed" },
  { value: company.stats.clientRetention,   label: "Client Retention" },
  { value: company.stats.statesServed,      label: "States Served" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden pt-32 pb-24">
      {/* Premium sophisticated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Premium refined ambient glowing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-maroon-700/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] bg-maroon-800/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Premium interactive glass badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-xl mb-6 hover:bg-white/[0.08] hover:border-amber-400/50 transition-all duration-400 group cursor-default glass-dark"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mr-3 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-200 text-[10px] font-display font-extrabold tracking-[0.3em] uppercase">
                Lightning Protection & Earthing Safety
              </span>
            </motion.div>

            {/* Premium hero title with elegant styling */}
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[1.05] mb-8">
              Protecting
              <span className="block mt-2">What Matters</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-maroon-400">
                Most
              </span>
            </h1>

            {/* Premium subtitle with refined typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-slate-300 text-lg md:text-xl font-body leading-relaxed mb-10 max-w-2xl font-light"
            >
              Advanced, standards-compliant engineering solutions for industrial and commercial facilities across India. Engineered for lifetime safety and absolute resilience.
            </motion.p>

            {/* Premium action buttons with sophisticated feedback */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl shadow-volt hover:shadow-volt-strong transition-all duration-400 hover:scale-[1.03] btn-premium">
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/[0.08] border border-white/20 text-white hover:bg-white/[0.12] hover:border-white/30 font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-400 hover:scale-[1.03] backdrop-blur-md glass-dark">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Luxury Glassmorphic Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Premium amber glowing backlight */}
              <div className="absolute inset-0 bg-amber-500/8 rounded-3xl blur-[40px] transform translate-y-6" />
              
              {/* Main premium glass card with refined styling */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="relative z-10 bg-white/[0.07] border border-white/20 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl shadow-black/50 glass-dark"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center shadow-volt">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-lg">Trusted Engineering</div>
                    <div className="text-slate-300 text-sm font-medium">Established {company.established}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {QUICK_STATS.map((s, idx) => (
                    <div key={s.label} className={`bg-white/[0.05] rounded-2xl p-4 border border-white/10 hover:border-amber-400/40 transition-all duration-300 ${idx === 2 ? 'col-span-2' : ''}`}>
                      <div className="font-display font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-200">{s.value}</div>
                      <div className="text-[10px] text-slate-300 uppercase tracking-wider font-body mt-2 font-semibold">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {["IS/IEC 62305 Compliant", "IEEE 80 Certified", "18+ Years Experience"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
