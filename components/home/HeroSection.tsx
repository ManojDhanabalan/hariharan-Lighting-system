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
    <section className="relative w-full min-h-[92vh] flex items-center bg-slate-950 overflow-hidden pt-32 pb-24">
      {/* Premium ambient high-tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Stunning luxury-tier ambient glowing blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#7B2D3E]/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#D97706]/8 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-[#5C1F2E]/10 rounded-full blur-[140px]" />
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
            {/* Ultra-premium interactive glass badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 hover:border-[#D97706]/40 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-[#D97706] mr-2.5 animate-pulse group-hover:scale-125 transition-transform" />
              <span className="text-slate-300 text-[10.5px] font-display font-extrabold tracking-[0.25em] uppercase">
                Lightning Protection & Earthing Safety Experts
              </span>
            </motion.div>

            {/* Title with Outfit/Fraunces dynamic styling */}
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] mb-6">
              Protecting
              <span className="block mt-2">What Matters</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#7B2D3E] filter drop-shadow-sm">
                Most
              </span>
            </h1>

            {/* Subtitle - elegant layout with high-readability color */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-slate-300 text-lg md:text-xl font-body leading-relaxed mb-8 max-w-xl"
            >
              Advanced, standards-compliant engineering solutions for industrial and commercial facilities across India. Engineered for lifetime safety and absolute resilience.
            </motion.p>

            {/* Premium action buttons with interactive feedback */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4"
            >
              <Link href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#7B2D3E] to-[#9B3D52] hover:from-[#9B3D52] hover:to-[#7B2D3E] text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#7B2D3E]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-[#7B2D3E]/35">
                <span className="relative z-10 flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-md">
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
              {/* Golden-amber glowing backlight */}
              <div className="absolute inset-0 bg-[#D97706]/10 rounded-3xl blur-[32px] transform translate-y-4" />
              
              {/* Main glass card with custom border highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="relative z-10 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-black/40"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7B2D3E] to-[#5C1F2E] flex items-center justify-center shadow-lg shadow-[#7B2D3E]/30">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-lg">Trusted Engineering</div>
                    <div className="text-slate-400 text-sm">Established in {company.established}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {QUICK_STATS.map((s, idx) => (
                    <div key={s.label} className={`bg-white/[0.02] rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-colors ${idx === 2 ? 'col-span-2' : ''}`}>
                      <div className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#F59E0B]">{s.value}</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-body mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  {["IS/IEC 62305 Compliant", "IEEE 80 Certified", "18+ Years Experience"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#D97706] flex-shrink-0" />
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
