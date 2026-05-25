"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled 
          ? "bg-white/98 backdrop-blur-xl shadow-volt border-b border-maroon-100" 
          : "bg-white/95 border-b border-maroon-50"
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50 hover:opacity-80 transition-opacity">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-maroon-700 to-maroon-800 flex items-center justify-center shadow-volt hover:shadow-volt-strong transition-all duration-300 group-hover:scale-105">
                <Zap className="w-5.5 h-5.5 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight transition-colors text-slate-900">
                {company.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  {link.children ? (
                    <button className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      pathname.startsWith(link.href) 
                        ? "text-maroon-700 bg-maroon-50"
                        : "text-slate-700 hover:text-maroon-700 hover:bg-maroon-50/50"
                    }`}>
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link href={link.href} className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                      pathname === link.href 
                        ? "text-maroon-700 bg-maroon-50"
                        : "text-slate-700 hover:text-maroon-700 hover:bg-maroon-50/50"
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
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
                      >
                        <div className="p-2">
                          {link.children.map((child) => (
                            <Link key={child.label} href={child.href}
                              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                                pathname === child.href ? "bg-maroon-50 text-maroon-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
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
                className="hidden xl:flex items-center gap-2 text-sm transition-all duration-300 group text-slate-700 hover:text-maroon-700">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 bg-maroon-50 group-hover:bg-maroon-100 border border-maroon-200/60">
                  <Phone className="w-4 h-4 text-maroon-700" />
                </div>
                <span className="font-semibold">{company.phone}</span>
              </a>
              <Link href="/contact"
                className="px-6 py-2.5 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-volt hover:shadow-volt-strong btn-premium">
                Get a Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden z-50 p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
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
                    <div className="mb-6">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-3 px-2 ${
                        isScrolled ? "text-slate-500" : "text-slate-600"
                      }`}>
                        {link.label}
                      </div>
                      <div className="flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                              pathname === child.href ? "bg-maroon-50 text-maroon-700 border border-maroon-200" : "text-slate-700 hover:bg-maroon-50/50 hover:text-maroon-700"
                            }`}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={link.href}
                      className={`block py-3.5 px-4 rounded-xl text-base font-semibold transition-all duration-300 ${
                        pathname === link.href ? "bg-maroon-50 text-maroon-700 border border-maroon-200" : "text-slate-700 hover:bg-maroon-50/50 hover:text-maroon-700"
                      }`}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-maroon-100">
                <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-3 py-3.5 bg-maroon-50 border border-maroon-200 rounded-xl text-maroon-700 font-semibold text-sm hover:bg-maroon-100 transition-all duration-300">
                  <Phone className="w-4 h-4" />{company.phone}
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-maroon-700 to-maroon-800 text-white font-semibold rounded-xl shadow-volt hover:shadow-volt-strong transition-all duration-300 btn-premium">
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
