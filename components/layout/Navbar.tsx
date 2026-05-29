"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/nav";
import { company } from "@/data/company";
import { Menu, X, ChevronDown, Zap, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-800" 
          : "bg-transparent border-b border-transparent"
      }`}>
        {/* Slanted White Logo Background */}
        <div 
           className="absolute top-0 left-0 h-full w-[240px] sm:w-[280px] lg:w-[340px] bg-white z-0"
           style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }} 
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center group z-50">
              <Image 
                src="/logo.svg" 
                alt={`${company.name} Logo`} 
                width={200} 
                height={80} 
                className="h-12 sm:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  {link.children ? (
                    <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname.startsWith(link.href) 
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}>
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={link.href} className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href 
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-white"
                    }`}>
                      {link.label}
                    </Link>
                  )}

                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link key={child.label} href={child.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                                pathname === child.href ? "bg-white/5 text-blue-400" : "text-slate-300 hover:bg-white/5 hover:text-white"
                              }`}>
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                className="hidden xl:flex items-center gap-2 text-sm transition-colors group text-slate-300 hover:text-blue-400">
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-white/5 group-hover:bg-blue-500/20">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="font-medium">{company.phone}</span>
              </a>
              <Link href="/contact"
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm rounded-full transition-colors">
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button 
              className={`lg:hidden z-50 p-2 rounded-lg transition-colors ${
                mobileOpen 
                  ? "text-slate-900 hover:bg-slate-100" 
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)} 
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20 pb-10 px-6"
          >
            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="mb-4">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-3 px-2 ${
                        isScrolled ? "text-slate-400" : "text-slate-500"
                      }`}>
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className={`flex items-center gap-3 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                              pathname === child.href ? "bg-maroon-50 text-maroon-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            }`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}
                      className={`block py-3 px-4 rounded-lg text-base font-semibold transition-colors ${
                        pathname === link.href ? "bg-maroon-50 text-maroon-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-slate-100">
                <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium text-sm hover:bg-slate-100 transition-colors">
                  <Phone className="w-4 h-4 text-maroon-700" />{company.phone}
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
