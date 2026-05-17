"use client";

import Image from "next/image";
import { useState } from "react";

const CUSTOMERS = [
  {
    name: "Ramraj Cotton",
    sector: "Textile & Apparel",
    logo: "/customers/ramraj.png",
    fallback: "RC",
  },
  {
    name: "ACC Cement",
    sector: "Construction & Manufacturing",
    logo: "/customers/acc.png",
    fallback: "ACC",
  },
  {
    name: "Thriveni",
    sector: "Automotive Dealership",
    logo: "/customers/thriveni.png",
    fallback: "TH",
  },
  {
    name: "SKM Egg Products",
    sector: "Food & Agriculture",
    logo: "/customers/skm.png",
    fallback: "SKM",
  },
  {
    name: "Montfort School",
    sector: "Education",
    logo: "/customers/montfort.png",
    fallback: "MS",
  },
];

function CustomerCard({ c }: { c: (typeof CUSTOMERS)[number] }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:border-maroon-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center gap-3 text-center">
      {/* Logo container */}
      <div className="w-16 h-16 rounded-xl bg-white border border-slate-100 flex items-center justify-center overflow-hidden p-1 shadow-sm group-hover:scale-110 transition-transform duration-300">
        {imgError ? (
          /* Text fallback */
          <span className="w-12 h-12 rounded-lg bg-maroon-50 border border-maroon-100 text-maroon-700 font-display font-bold text-xs flex items-center justify-center">
            {c.fallback}
          </span>
        ) : (
          <Image
            src={c.logo}
            alt={`${c.name} logo`}
            width={56}
            height={56}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <div>
        <p className="font-display font-bold text-slate-900 text-xs leading-tight">{c.name}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{c.sector}</p>
      </div>
    </div>
  );
}

export default function CustomerLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
      {CUSTOMERS.map((c) => (
        <CustomerCard key={c.name} c={c} />
      ))}
    </div>
  );
}
