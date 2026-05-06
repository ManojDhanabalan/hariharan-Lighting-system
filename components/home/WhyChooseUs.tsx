"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Lightbulb, HardHat, ShieldCheck, FileCheck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const REASONS = [
  { icon: Eye,        title: "Integrity & Transparency", desc: "We operate with complete transparency in every engagement, ensuring you know exactly what is needed and why.", color: "bg-blue-50 border-blue-100 text-blue-600" },
  { icon: Clock,      title: "Dependability",             desc: "You can count on us to deliver on time, every time. We respect your operational schedules and commitments.", color: "bg-violet-50 border-violet-100 text-violet-600" },
  { icon: Lightbulb,  title: "Innovation",                desc: "We implement cutting-edge, technically superior solutions rather than just standard legacy practices.", color: "bg-amber-50 border-amber-100 text-amber-600" },
  { icon: HardHat,    title: "Safety First",              desc: "Human and equipment safety is non-negotiable in every project we undertake. Zero compromises.", color: "bg-red-50 border-red-100 text-red-600" },
  { icon: ShieldCheck,title: "Deep Expertise",            desc: "Over 15 years of hands-on engineering experience in complex industrial and commercial environments.", color: "bg-teal-50 border-teal-100 text-teal-600" },
  { icon: FileCheck,  title: "Standards Compliance",      desc: "Strict adherence to IS, IEEE, IEC, and latest CEA regulations ensuring full compliance and peace of mind.", color: "bg-green-50 border-green-100 text-green-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-50/60 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <SectionHeader overline="Why Choose Us" title="Built on Expertise, Driven by Safety"
            subtitle="We combine deep technical knowledge with an unwavering commitment to quality, delivering solutions you can trust."
            centered />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-card transition-all duration-300 card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 ${r.color}`}>
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-volt transition-colors">{r.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
