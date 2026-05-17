"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import ServiceCard from "@/components/shared/ServiceCard";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon-50/80 rounded-full blur-[120px]" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader overline="Our Services" title="Comprehensive Electrical Safety Services"
              subtitle="End-to-end audit, analysis, and engineering services to keep your facility safe and compliant." />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-volt font-display font-bold text-sm uppercase tracking-wide hover:text-volt-dark transition-colors group shrink-0">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.id} title={s.title} subtitle={s.subtitle} icon={s.icon}
              shortDesc={s.shortDesc} href={`/services/${s.slug}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
