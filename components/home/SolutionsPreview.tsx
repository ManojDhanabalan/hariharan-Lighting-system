"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { solutions } from "@/data/solutions";
import SolutionCard from "@/components/shared/SolutionCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function SolutionsPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-50/80 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader overline="Our Solutions" title="End-to-End Protection Solutions"
              subtitle="From design and supply to installation and commissioning — complete protection systems for every application." />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/solutions" className="inline-flex items-center gap-2 text-volt font-display font-bold text-sm uppercase tracking-wide hover:text-volt-dark transition-colors group shrink-0">
              View All Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <SolutionCard key={s.id} title={s.title} subtitle={s.subtitle} icon={s.icon}
              shortDesc={s.shortDesc} href={`/solutions/${s.slug}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
