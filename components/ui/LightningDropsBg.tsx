"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Drop {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function LightningDropsBg() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    // Generate perfectly smooth, little, natural raindrops
    const generatedDrops = Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // Perfectly distributed across the screen width
      delay: Math.random() * -50, // Massive negative delay for an extremely slow continuous flow
      duration: 15 + Math.random() * 20, // Ultra-slow, dreamy falling speed (15s to 35s)
      size: 0.15 + Math.random() * 0.4, // Very little drops
      opacity: 0.3 + Math.random() * 0.7, 
    }));
    setDrops(generatedDrops);
  }, []);

  if (drops.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle light blue radial gradient in the center, not too bright */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/15 rounded-full blur-[120px] pointer-events-none" />

      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute top-0 flex flex-col items-center justify-center z-10"
          style={{ 
            left: `${drop.x}%`,
            scale: drop.size,
            opacity: drop.opacity
          }}
          initial={{ y: "-10vh" }} // Perfectly straight fall downwards for proper flow
          animate={{ y: "110vh" }} 
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear", // Flawless continuous linear motion
          }}
        >
          {/* Smooth, little, elegant drop shape */}
          <div className="relative w-3 h-5">
            <svg 
              viewBox="0 0 24 36" 
              className="absolute inset-0 w-full h-full drop-shadow-[0_0_6px_rgba(96,165,250,0.9)]"
            >
              <defs>
                <radialGradient id={`glow-${drop.id}`} cx="0.5" cy="0.7" r="0.5">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <path 
                d="M12 0C12 0 0 18 0 24C0 30.627 5.373 36 12 36C18.627 36 24 30.627 24 24C24 18 12 0 12 0Z" 
                fill={`url(#glow-${drop.id})`}
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
