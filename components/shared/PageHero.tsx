"use client";

import { motion } from "framer-motion";
import LightningDropsBg from "@/components/ui/LightningDropsBg";

interface Stat {
  icon: "shield" | "factory" | "settings";
  label: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  stats?: Stat[];
}

const StatIcon = ({ type }: { type: Stat["icon"] }) => {
  if (type === "shield") return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  );
  if (type === "factory") return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M2 20h20M4 20V10l6-4v4l6-4v4l4-2v12" /></svg>
  );
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>
  );
};

export default function PageHero({ title, subtitle, stats }: PageHeroProps) {
  return (
    <section className="relative w-full pt-28 pb-12 overflow-hidden bg-[#030712]">
      {/* Animated Home Page Background */}
      <LightningDropsBg />
      
      {/* Dark gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/50 to-[#030712] pointer-events-none z-0" />
      <div className="container mx-auto px-4 lg:px-8 py-10 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="mt-3 text-white/70 text-sm max-w-xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-white/75 text-xs font-medium">
                <StatIcon type={stat.icon} />
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        )}

        <div className="mt-8" />
      </div>
    </section>
  );
}
