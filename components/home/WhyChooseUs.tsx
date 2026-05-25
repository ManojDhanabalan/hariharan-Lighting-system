"use client";

import { motion } from "framer-motion";
import { Eye, Clock, Lightbulb, HardHat, ShieldCheck, FileCheck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const REASONS = [
  { icon: Eye,        title: "Integrity & Transparency", desc: "We operate with complete transparency in every engagement, ensuring you know exactly what is needed and why.", gradient: "from-rose-500 to-red-600", bg: "bg-rose-50", text: "text-rose-600" },
  { icon: Clock,      title: "Dependability",             desc: "You can count on us to deliver on time, every time. We respect your operational schedules and commitments.", gradient: "from-amber-500 to-orange-600", bg: "bg-amber-50", text: "text-amber-600" },
  { icon: Lightbulb,  title: "Innovation",                desc: "We implement cutting-edge, technically superior solutions rather than just standard legacy practices.", gradient: "from-cyan-500 to-blue-600", bg: "bg-cyan-50", text: "text-cyan-600" },
  { icon: HardHat,    title: "Safety First",              desc: "Human and equipment safety is non-negotiable in every project we undertake. Zero compromises.", gradient: "from-violet-500 to-purple-600", bg: "bg-violet-50", text: "text-violet-600" },
  { icon: ShieldCheck,title: "Deep Expertise",            desc: "Over 18 years of hands-on engineering experience in complex industrial and commercial environments.", gradient: "from-green-500 to-emerald-600", bg: "bg-green-50", text: "text-green-600" },
  { icon: FileCheck,  title: "Standards Compliance",      desc: "Strict adherence to IS, IEEE, IEC, and latest CEA regulations ensuring full compliance and peace of mind.", gradient: "from-indigo-500 to-blue-600", bg: "bg-indigo-50", text: "text-indigo-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white via-rose-50 to-orange-50 relative overflow-hidden">
      {/* Vibrant gradient backgrounds */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-rose-300/30 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-amber-300/25 to-transparent rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 text-center max-w-3xl mx-auto">
          <SectionHeader 
            overline="Why Choose Us" 
            title="Built on Expertise, Driven by Safety"
            subtitle="We combine deep technical knowledge with an unwavering commitment to quality, delivering solutions you can trust."
            centered 
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((r, i) => (
            <motion.div 
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border-2 border-slate-100 rounded-3xl p-8 hover:shadow-2xl hover:border-current transition-all duration-500"
            >
              {/* Elegant gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-2xl ${r.bg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500`}>
                <r.icon className={`w-5.5 h-5.5 ${r.text}`} />
              </div>

              {/* Title */}
              <h3 className={`font-display font-bold text-xl text-slate-900 mb-3 group-hover:${r.text} transition-colors`}>
                {r.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {r.desc}
              </p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${r.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom trust badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 rounded-3xl border-2 border-rose-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 flex items-center justify-center shadow-lg shadow-rose-500/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-900">18+ Years of Excellence</div>
              <div className="text-sm text-slate-500">Trusted by 500+ clients across India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
