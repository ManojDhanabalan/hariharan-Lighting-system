"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Activity, ShieldCheck, BarChart2, GitBranch, Zap, Layers, PenTool, ShieldAlert, LucideIcon } from "lucide-react";

const IconMap: Record<string, LucideIcon> = {
  Activity,
  ShieldCheck,
  BarChart2,
  GitBranch,
  Zap,
  Layers,
  PenTool,
  ShieldAlert,
};

interface ServiceCardProps {
  title: string;
  subtitle?: string;
  icon: string;
  shortDesc: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, subtitle, icon, shortDesc, href, index = 0 }: ServiceCardProps) {
  const IconComponent = IconMap[icon] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white border border-slate-200 rounded-2xl p-7 flex flex-col h-full overflow-hidden card-hover shadow-sm hover:shadow-card-hover hover:border-[#7B2D3E]/20"
    >
      {/* Left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7B2D3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />

      {/* Top gradient on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7B2D3E] to-[#9B3D52] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* Icon */}
      <div className="mb-5 w-14 h-14 rounded-2xl bg-[#FAF6F6] border border-[#7B2D3E]/10 group-hover:bg-[#7B2D3E]/10 group-hover:border-[#7B2D3E]/20 flex items-center justify-center text-[#7B2D3E] transition-colors duration-300">
        <IconComponent className="w-5.5 h-5.5" />
      </div>

      <h3 className="font-display font-bold text-xl text-slate-900 mb-1.5 group-hover:text-[#7B2D3E] transition-colors duration-300">
        {title}
      </h3>

      {subtitle && (
        <p className="text-xs font-display font-semibold text-[#94A3B8] uppercase tracking-[0.12em] mb-4 pb-4 border-b border-slate-100">
          {subtitle}
        </p>
      )}

      <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-6">
        {shortDesc}
      </p>

      <Link href={href}
        className="inline-flex items-center gap-2 text-[#7B2D3E] font-display font-bold text-sm uppercase tracking-wide hover:text-[#5C1F2E] transition-colors mt-auto group/link">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
