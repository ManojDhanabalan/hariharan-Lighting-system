"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { company } from "@/data/company";

const REASONS = [
  {
    title: "Safety First",
    desc: "Human and equipment safety is non-negotiable in every project we undertake. Zero compromises.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800" // Safety engineer on site with hard hat
  },
  {
    title: "Deep Expertise",
    desc: "Over 18 years of hands-on engineering experience in complex industrial and commercial environments.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800" // Advanced technical engineer working on electrical design
  },
  {
    title: "Standards Compliance",
    desc: "Strict adherence to IS, IEEE, IEC, and CEA regulations ensuring full compliance and peace of mind.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800" // Professional technical checklists and inspections
  },
  {
    title: "Complete Transparency",
    desc: "We operate with total transparency in every design, ensuring you know exactly what is required and why.",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800" // Clean schematics and transparent project drawings
  },
  {
    title: "Engineering Innovation",
    desc: "We implement cutting-edge, technically superior solutions rather than just legacy standard practices.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800" // High precision modern electrical innovation/circuit testing
  },
  {
    title: "Absolute Dependability",
    desc: "You can count on us to deliver on time. We respect your operational timelines and constraints.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800" // Dedicated engineering team collaborating on site
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Premium subtle backgrounds */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FAF6F6]/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFFBEB]/20 rounded-full blur-[120px] pointer-events-none" />
 
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <SectionHeader 
            overline="Why Choose Us" 
            title="Built on Expertise, Driven by Safety"
            subtitle="We combine deep technical knowledge with an unwavering commitment to quality, delivering solutions you can trust."
            centered 
          />
        </motion.div>
 
        {/* Grid matching the exact reference card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REASONS.map((r, i) => (
            <motion.div 
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group bg-white border border-slate-100 rounded-[28px] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:border-slate-200/80 transition-all duration-500"
            >
              {/* Image container rounded internally */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-4 bg-slate-100">
                <img 
                  src={r.image} 
                  alt={r.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
 
              {/* Text Area */}
              <div className="px-2 pb-2">
                <h3 className="font-display font-extrabold text-lg md:text-xl text-slate-900 mb-1.5 group-hover:text-maroon-700 transition-colors">
                  {r.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-body">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
 

      </div>
    </section>
  );
}
