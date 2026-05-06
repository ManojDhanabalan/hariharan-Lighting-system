"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tag?: string;
  breadcrumb?: { label: string; href: string }[];
  cta?: { label: string; href: string };
}

export default function PageHero({ title, subtitle, tag, cta }: PageHeroProps) {
  /* Split the title: last word gets gradient treatment */
  const words = title.trim().split(" ");
  const mainWords = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <section className="relative w-full min-h-[340px] flex flex-col items-center justify-center pt-36 pb-20 overflow-hidden bg-white">
      {/* Subtle animated blobs */}
      <div className="absolute top-0 left-[10%] w-[420px] h-[420px] bg-blue-100/50 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-0 right-[10%] w-[380px] h-[380px] bg-violet-100/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-volt-gradient" />

      {/* Bottom soft fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50/60 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 z-10 flex flex-col items-center text-center">



        {/* Tag pill — gradient border style */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative mb-6 inline-block"
          >
            <div className="relative px-5 py-2 rounded-full bg-white border border-transparent text-slate-600 text-xs font-display font-bold uppercase tracking-[0.22em] shadow-sm gradient-border">
              {tag}
            </div>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-4xl md:text-5xl lg:text-[64px] text-slate-900 uppercase tracking-tight leading-tight mb-2"
        >
          {mainWords && <span className="mr-3">{mainWords}</span>}
          <span className="text-gradient-volt">{lastWord}</span>
        </motion.h1>

        {/* Underline accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-16 h-1 bg-volt-gradient rounded-full mb-6 origin-left"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="text-text-secondary text-base md:text-lg font-body leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Optional CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8"
          >
            <Link href={cta.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-volt-btn hover:-translate-y-0.5">
              {cta.label}
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
