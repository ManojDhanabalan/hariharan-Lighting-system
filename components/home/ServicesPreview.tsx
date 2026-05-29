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
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeader overline="Our Services" title="Comprehensive Electrical Safety Services"
              subtitle="End-to-end audit, analysis, and engineering services to keep your facility safe and compliant." centered />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <ServiceCard key={s.id} title={s.title} subtitle={s.subtitle} icon={s.icon}
              shortDesc={s.shortDesc} href={`/services/${s.slug}`} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
