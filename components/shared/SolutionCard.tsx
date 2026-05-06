"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  subtitle?: string;
  icon: string;
  shortDesc: string;
  href: string;
  index?: number;
}

export default function SolutionCard({ title, subtitle, icon, shortDesc, href, index = 0 }: SolutionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-7 flex flex-col h-full overflow-hidden card-hover shadow-sm hover:shadow-card-hover pt-9"
    >
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-volt-gradient rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="mb-5 w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 group-hover:bg-amber-100 flex items-center justify-center text-2xl transition-colors duration-300">
        {icon}
      </div>

      <h3 className="font-display font-bold text-xl text-slate-900 mb-1.5 group-hover:text-volt transition-colors duration-300">
        {title}
      </h3>

      {subtitle && (
        <p className="text-xs font-display font-semibold text-text-dim uppercase tracking-[0.12em] mb-4 pb-4 border-b border-slate-100">
          {subtitle}
        </p>
      )}

      <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-6">{shortDesc}</p>

      <Link href={href}
        className="inline-flex items-center gap-2 text-volt font-display font-bold text-sm uppercase tracking-wide hover:text-volt-dark transition-colors mt-auto group/link">
        View Solution
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
