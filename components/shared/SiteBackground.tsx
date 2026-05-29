"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const DRIZZLE_DROPS = [
  { left: "4%",  h: 40, d: 3.5, del: 0.2, o: 0.3, b: 0 },
  { left: "12%", h: 25, d: 4.2, del: 1.5, o: 0.2, b: 1 },
  { left: "21%", h: 50, d: 3.0, del: 0.8, o: 0.4, b: 0 },
  { left: "28%", h: 30, d: 4.8, del: 2.1, o: 0.15, b: 2 },
  { left: "36%", h: 45, d: 3.2, del: 0.5, o: 0.35, b: 0 },
  { left: "45%", h: 20, d: 5.0, del: 1.2, o: 0.2, b: 1.5 },
  { left: "54%", h: 35, d: 3.8, del: 2.8, o: 0.25, b: 0.5 },
  { left: "62%", h: 40, d: 4.5, del: 3.2, o: 0.2, b: 1 },
  { left: "71%", h: 30, d: 3.5, del: 1.1, o: 0.3, b: 0 },
  { left: "79%", h: 55, d: 3.1, del: 2.4, o: 0.4, b: 0 },
  { left: "86%", h: 25, d: 4.7, del: 0.3, o: 0.15, b: 2 },
  { left: "95%", h: 45, d: 3.9, del: 1.9, o: 0.3, b: 0.5 },
  { left: "8%",  h: 35, d: 4.1, del: 3.5, o: 0.25, b: 1 },
  { left: "18%", h: 20, d: 5.2, del: 0.9, o: 0.1, b: 2 },
  { left: "33%", h: 40, d: 3.6, del: 2.7, o: 0.3, b: 0 },
  { left: "48%", h: 30, d: 4.4, del: 1.6, o: 0.2, b: 1.5 },
  { left: "58%", h: 50, d: 3.3, del: 0.4, o: 0.35, b: 0 },
  { left: "68%", h: 25, d: 4.9, del: 2.2, o: 0.15, b: 1 },
  { left: "75%", h: 45, d: 3.7, del: 1.3, o: 0.3, b: 0 },
  { left: "83%", h: 35, d: 4.3, del: 2.9, o: 0.25, b: 0.5 },
  { left: "91%", h: 40, d: 3.4, del: 0.6, o: 0.4, b: 0 },
  { left: "15%", h: 25, d: 5.1, del: 3.1, o: 0.15, b: 2 },
  { left: "40%", h: 30, d: 4.2, del: 1.4, o: 0.2, b: 1 },
  { left: "65%", h: 50, d: 3.5, del: 2.5, o: 0.35, b: 0 },
  { left: "98%", h: 35, d: 4.6, del: 0.7, o: 0.25, b: 1 }
];

export default function SiteBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -50 }}>
      {/* High Quality Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B1120] to-[#0A192F] z-0" />
      
      {/* Realistic Drizzle Animation - Glowing Drops with Lightning */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {DRIZZLE_DROPS.map((drop, i) => (
          <motion.div
            key={i}
            className="absolute top-[-100px]"
            style={{
              left: drop.left,
              opacity: drop.o,
              filter: `blur(${drop.b}px)`
            }}
            animate={{
              y: ["0dvh", "120dvh"],
            }}
            transition={{
              duration: drop.d,
              repeat: Infinity,
              delay: drop.del,
              ease: "linear",
            }}
          >
            {/* Realistic Teardrop Shape */}
            <div 
              className="relative flex items-center justify-center w-5 h-5 bg-gradient-to-br from-blue-400/80 to-indigo-600/80 shadow-[0_0_20px_rgba(59,130,246,0.8)] backdrop-blur-md border border-white/20"
              style={{ borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)' }}
            >
              <Zap className="w-2.5 h-2.5 text-amber-300 fill-amber-300" style={{ transform: 'rotate(45deg)' }} />
            </div>
            {/* Rain tail */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-gradient-to-t from-blue-400/50 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
