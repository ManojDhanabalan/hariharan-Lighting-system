"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
}

export default function CTABanner({ headline, subtext, ctaLabel, ctaHref, secondaryCta }: CTABannerProps) {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-volt-gradient">
      {/* Decorative blobs */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-white/8 rounded-full blur-[80px]" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-violet-500/15 rounded-full blur-[80px]" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center lg:text-left"
          >
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <Zap className="w-5 h-5 text-white/70" />
              <span className="text-xs font-display font-bold uppercase tracking-[0.2em] text-blue-200">
                Ready to Get Started?
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight text-white mb-4">
              {headline}
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed">{subtext}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-4 shrink-0"
          >
            <Link href={ctaHref}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-volt font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-all shadow-xl hover:-translate-y-1">
              {ctaLabel}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 font-display font-bold text-base uppercase tracking-wide rounded-2xl transition-all hover:-translate-y-1">
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
