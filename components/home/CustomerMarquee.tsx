"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const CUSTOMERS = [
  { name: "Ramraj Cotton", sector: "Textile & Apparel", logo: "/customers/ramraj.png", fallback: "RC" },
  { name: "ACC Cement", sector: "Construction & Manufacturing", logo: "/customers/acc.png", fallback: "ACC" },
  { name: "Thriveni", sector: "Automotive Dealership", logo: "/customers/thriveni.png", fallback: "TH" },
  { name: "SKM Egg Products", sector: "Food & Agriculture", logo: "/customers/skm.png", fallback: "SKM" },
  { name: "Montfort School", sector: "Education", logo: "/customers/montfort.png", fallback: "MS" },
];

function CustomerCard({ c }: { c: (typeof CUSTOMERS)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white border border-slate-100 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:border-[#1e3a8a]/20 hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 md:gap-4 text-center w-[180px] md:w-[280px] shrink-0 mx-2 md:mx-4">
      {/* Logo container */}
      <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden p-2 md:p-3 shadow-inner group-hover:scale-110 group-hover:bg-white transition-all duration-300">
        {imgError ? (
          <span className="text-[#1e3a8a] font-display font-bold text-sm md:text-lg">
            {c.fallback}
          </span>
        ) : (
          <Image
            src={c.logo}
            alt={`${c.name} logo`}
            width={80}
            height={80}
            className="w-full h-full object-contain transition-all duration-500"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div>
        <p className="font-display font-bold text-slate-900 text-[13px] md:text-[15px] mb-0.5 md:mb-1">{c.name}</p>
        <p className="text-[9px] md:text-[11px] text-slate-500 uppercase tracking-widest">{c.sector}</p>
      </div>
    </div>
  );
}

export default function CustomerMarquee() {
  // Duplicate array 3 times to ensure seamless infinite looping on ultra-wide screens
  const marqueeItems = [...CUSTOMERS, ...CUSTOMERS, ...CUSTOMERS];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <h2 className="font-display font-black text-3xl lg:text-4xl text-slate-900 text-center tracking-tight">
          Our Customers
        </h2>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Left/Right Fade gradients */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-33.333333%"] }}
          transition={{
            ease: "linear",
            duration: 20, // Time it takes to complete one full cycle
            repeat: Infinity,
          }}
        >
          {marqueeItems.map((c, i) => (
            <CustomerCard key={i} c={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
