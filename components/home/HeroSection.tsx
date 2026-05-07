"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Award, Zap, Phone } from "lucide-react";
import { company } from "@/data/company";

const BADGES = [
  { icon: <Shield className="w-4 h-4" />, text: "IS/IEC 62305 Compliant" },
  { icon: <Zap className="w-4 h-4" />,   text: "IEEE 80 Certified" },
  { icon: <Award className="w-4 h-4" />, text: "18+ Years Experience" },
];

const QUICK_STATS = [
  { value: company.stats.projectsCompleted, label: "Projects" },
  { value: company.stats.clientRetention,   label: "Client Retention" },
  { value: company.stats.statesServed,      label: "States Served" },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-28 pb-20 overflow-hidden bg-white">
      {/* Animated gradient blobs */}
      <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-blue-100/80 rounded-full blur-[100px] animate-blob" />
      <div className="absolute top-32 right-[10%] w-[450px] h-[450px] bg-violet-100/70 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-[30%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-60 z-0" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />

      <div className="container mx-auto px-4 lg:px-8 z-10 flex flex-col items-center text-center">

        {/* Overline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-volt text-xs font-display font-bold uppercase tracking-[0.2em] mb-10"
        >
          <Zap className="w-3.5 h-3.5" fill="currentColor" />
          Lightning Protection &amp; Earthing Safety Experts
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[90px] text-slate-900 uppercase tracking-tight leading-[0.95] mb-8 max-w-5xl">
          {(["Protecting", "What", "Matters"] as const).map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-4 md:mr-6"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.51, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-gradient-volt"
          >
            Most
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="text-text-secondary text-lg md:text-xl font-body leading-relaxed max-w-2xl mb-12"
        >
          Expert Lightning Protection, Earthing &amp; Surge Protection Solutions for Industrial &amp;
          Commercial Facilities across India. Trusted since 2017 — compliant with IS, IEEE &amp; IEC standards.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.88 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Link href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-volt hover:bg-volt-dark text-white font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-all shadow-volt-btn hover:shadow-volt-strong hover:-translate-y-1">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-text-primary hover:border-volt hover:text-volt font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-all hover:-translate-y-1 shadow-sm">
            Explore Services
          </Link>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex items-center gap-8 mb-10 flex-wrap justify-center"
        >
          {QUICK_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3">
              {i > 0 && <div className="w-px h-8 bg-slate-200" />}
              <div className="text-center">
                <div className="font-display font-extrabold text-2xl text-volt">{s.value}</div>
                <div className="text-xs text-text-dim uppercase tracking-wider font-body">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {BADGES.map((b) => (
            <div key={b.text} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-text-secondary shadow-sm">
              <span className="text-volt">{b.icon}</span>
              {b.text}
            </div>
          ))}
          <a href={`tel:${company.phone.replace(/[^0-9+]/g,"")}`}
            className="flex items-center gap-2 px-4 py-2.5 bg-green-50 border border-green-200 rounded-full text-xs text-green-700 font-display font-semibold shadow-sm hover:bg-green-100 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            Call Now: {company.phone}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim text-xs uppercase tracking-widest z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-200 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-volt rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
