"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LightningDropsBg from "@/components/ui/LightningDropsBg";

const SLIDES = [
  {
    badge: "Lightning Protection",
    title: "Protecting What Matters",
    subtitle: "Advanced, IS/IEC 62305 compliant lightning protection systems engineered for industrial facilities.",
    image: "/images/lightning-1.png"
  },
  {
    badge: "Precision Earthing",
    title: "Engineered to Never Fail",
    subtitle: "Expert earthing and grounding design complying with IEEE 80 and IS 3043. Safeguarding heavy machinery.",
    image: "/images/lightning-2.png"
  },
  {
    badge: "Surge Protection",
    title: "Absolute Transient Safety",
    subtitle: "High-capacity transient surge protection networks shielding critical infrastructure from catastrophic impulses.",
    image: "/images/lightning-3.png"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getSlidePosition = (index: number) => {
    const offset = (index - current + SLIDES.length) % SLIDES.length;
    if (offset === 0) return 0; // Center
    if (offset === 1) return 1; // Right
    if (offset === SLIDES.length - 1) return -1; // Left
    return 2; // Hidden (or further back)
  };

  return (
    <section className="relative w-full min-h-[100dvh] bg-slate-950 overflow-hidden flex flex-col items-center justify-center pt-32 pb-20">
      <LightningDropsBg />
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center w-full">
        
        {/* Top Text Section matching the requested theme */}
        <div className="text-center mb-6 md:mb-10 max-w-4xl mx-auto w-full h-[130px] md:h-[150px] relative">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white mb-4 tracking-tight leading-tight absolute w-full left-0 top-0"
            >
              {SLIDES[current].title}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-medium font-body absolute w-full left-0 top-[80px] sm:top-[70px] lg:top-[85px] px-4"
            >
              {SLIDES[current].subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 3D Curved Carousel */}
        <div className="relative w-full max-w-[1400px] mx-auto h-[300px] sm:h-[400px] md:h-[500px] [perspective:1200px] flex items-center justify-center mt-6">
          <AnimatePresence initial={false}>
            {SLIDES.map((slide, index) => {
              const position = getSlidePosition(index);
              
              if (Math.abs(position) > 1) return null;

              const isCenter = position === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: `${position * 100}%`, 
                    z: -300,
                    rotateY: position * -45
                  }}
                  animate={{ 
                    opacity: isCenter ? 1 : 0.85,
                    x: `${position * 90}%`, // Places left/right items 90% of width away from center
                    z: isCenter ? 0 : -150,
                    rotateY: position * -25, // Creates the inward curved panoramic effect
                    scale: isCenter ? 1 : 0.85
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: `${position * 100}%`, 
                    z: -300,
                    rotateY: position * -45
                  }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  style={{ zIndex: isCenter ? 20 : 10 }}
                  className={`absolute w-[280px] sm:w-[500px] md:w-[700px] lg:w-[800px] h-[220px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[6px] border-white bg-white ${isCenter ? '' : 'pointer-events-none'}`}
                  onClick={() => {
                    if (!isCenter) {
                       setCurrent(index);
                    }
                  }}
                >
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className={`object-cover transition-transform duration-1000 ${isCenter ? 'hover:scale-105' : ''}`} 
                    priority={isCenter}
                  />
                  
                  {/* Subtle white overlay for side images to give depth */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
                  )}
                  
                  {/* Content for the center slide */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: 0.3 }}
                        className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col items-start"
                      >
                        <span className="inline-block px-4 py-1.5 bg-amber-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg mb-3">
                          {slide.badge}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Indicators */}
        <div className="flex items-center gap-3 mt-12 z-20">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="group relative h-2.5 rounded-full overflow-hidden transition-all duration-500 bg-slate-700 hover:bg-slate-600"
              style={{ width: current === idx ? "48px" : "12px" }}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {current === idx && (
                <motion.div 
                  layoutId="activeCarouselDot"
                  className="absolute inset-0 bg-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
