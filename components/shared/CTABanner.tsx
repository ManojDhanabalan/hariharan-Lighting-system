"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Phone } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ headline, subtext, ctaLabel, ctaHref, secondaryCta }: CTABannerProps) {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-maroon-700/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[140px]" 
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 lg:p-16 shadow-2xl"
          >
            {/* Top accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-maroon-600 to-maroon-800 rounded-full" />

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left - Content */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shadow-lg shadow-maroon-500/30">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-display font-bold uppercase tracking-[0.2em] text-maroon-300">
                    Ready to Get Started?
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
                  {headline}
                </h2>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-8">
                  {subtext}
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-maroon-500" />
                    <span>IS/IEC Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-maroon-500" />
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>

              {/* Right - CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link href={ctaHref}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-colors duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaLabel}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                {secondaryCta && (
                  <Link href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 px-8 py-5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-all hover:scale-[1.02] backdrop-blur-md">
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
