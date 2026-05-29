"use client";

import { motion } from "framer-motion";
import { company } from "@/data/company";

export default function OurStorySection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 overflow-hidden relative border-b border-slate-100">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:hidden">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-[#F97316]" />
              <span className="text-[#F97316] font-bold text-sm tracking-[0.2em] uppercase">OUR STORY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 leading-tight">
              Building a Legacy of Safety.
            </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Left Side: Solar System Animation */}
          <div className="relative flex items-center justify-center min-h-[400px] lg:min-h-[600px] w-full max-w-[500px] mx-auto">
            
            {/* Outer Orbit */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] rounded-full border border-dashed border-slate-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 sm:-top-8 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-[4px] border-white shadow-xl"
              >
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150" alt="Engineer" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 sm:-bottom-8 w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border-[4px] border-white shadow-xl"
              >
                 <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=150&h=150" alt="Team" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            {/* Inner Orbit */}
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-slate-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -left-4 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-[3px] border-white shadow-lg"
              >
                 <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=150&h=150" alt="Work" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-4 sm:-right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-[3px] border-white shadow-lg"
              >
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=150&h=150" alt="Industrial" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>

            {/* Central Sun/Image */}
            <div className="relative w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10">
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=400&h=400" alt="Core Industrial" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side: Text & Content */}
          <div className="flex flex-col items-start text-left lg:pl-10">
            <div className="hidden lg:flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-[#F97316]" /> 
              <span className="text-[#F97316] font-bold text-sm tracking-[0.2em] uppercase">OUR STORY</span>
            </div>
            
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight hidden lg:block">
              Building a Legacy <br className="hidden xl:block"/> of Safety.
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Founded in 2017, Aadithya has grown into a trusted name in lightning protection and earthing systems — backed by over {company.stats.yearsExperience} of hands-on engineering experience.
            </p>

            <ul className="space-y-4 mb-10 w-full text-slate-700 font-medium">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0" />
                <span>We design and commission IS/IEC-compliant protection systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800 mt-2 shrink-0" />
                <span>Zero compromise on safety, quality, and long-term performance.</span>
              </li>
            </ul>

            {/* Stats Row */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-slate-200 pt-8 w-full">
              <div className="flex items-end gap-2">
                <span className="font-display font-black text-5xl text-slate-900">18+</span>
                <span className="text-slate-500 font-medium mb-1">/Years</span>
              </div>
              <div className="flex items-end gap-2">
                <span className="font-display font-black text-5xl text-slate-900">500+</span>
                <span className="text-slate-500 font-medium mb-1">/Projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
