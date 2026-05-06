"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-blue-200 shadow-volt bg-white" : "border-slate-200 bg-white"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className={`font-display font-bold text-base transition-colors ${isOpen ? "text-volt" : "text-slate-800 group-hover:text-volt"}`}>
          {title}
        </span>
        <span className={`shrink-0 ml-4 w-8 h-8 rounded-xl border flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-volt border-volt text-white rotate-180" : "border-slate-200 text-slate-400"}`}>
          <ChevronDown className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 text-text-secondary border-t border-slate-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
