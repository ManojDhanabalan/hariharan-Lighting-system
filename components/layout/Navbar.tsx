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
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-3" : "bg-white/80 backdrop-blur-md py-4"
      }`}>
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group z-50">
            <div className="w-9 h-9 rounded-xl bg-volt flex items-center justify-center shadow-volt-btn group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-xl text-volt tracking-tight leading-none">
                {company.name}
              </span>
              <span className="text-[9px] text-text-dim tracking-[0.15em] uppercase font-body">
                Lightning & Earthing Experts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                {link.children ? (
                  <button className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-display font-semibold transition-all ${
                    pathname.startsWith(link.href) ? "text-volt bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-slate-50"
                  }`}>
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link href={link.href} className={`block px-4 py-2 rounded-lg text-sm font-display font-semibold transition-all ${
                    pathname === link.href ? "text-volt bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-slate-50"
                  }`}>
                    {link.label}
                  </Link>
                )}

                {(pathname === link.href || (link.children && pathname.startsWith(link.href))) && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-volt rounded-full" />
                )}

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-volt-gradient" />
                      <div className="p-2">
                        {link.children.map((child) => (
                          <Link key={child.label} href={child.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all group/item ${
                              pathname === child.href ? "text-volt bg-blue-50" : "text-text-secondary hover:text-text-primary hover:bg-slate-50"
                            }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-volt/40 group-hover/item:bg-volt transition-colors" />
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
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-volt transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-mono text-xs">{company.phone}</span>
            </a>
            <Link href="/contact"
              className="px-5 py-2.5 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm rounded-xl transition-all shadow-volt-btn hover:shadow-volt-strong hover:-translate-y-0.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden z-50 p-2 rounded-xl hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="w-6 h-6 text-text-primary" /> : <Menu className="w-6 h-6 text-text-primary" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto"
          >
            <div className="flex flex-col min-h-full pt-24 pb-10 px-6 gap-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <div className="mb-3">
                      <div className="text-xs font-display font-bold text-text-dim uppercase tracking-[0.2em] px-3 py-3 border-b border-slate-100 mb-2">
                        {link.label}
                      </div>
                      {link.children.map((child) => (
                        <Link key={child.label} href={child.href}
                          className={`flex items-center gap-3 py-3 px-3 rounded-xl text-base font-display font-semibold transition-colors ${
                            pathname === child.href ? "text-volt bg-blue-50" : "text-text-primary hover:text-volt"
                          }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-volt/40 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={link.href}
                      className={`block py-3 px-3 rounded-xl text-lg font-display font-bold transition-colors ${
                        pathname === link.href ? "text-volt bg-blue-50" : "text-text-primary hover:text-volt"
                      }`}>
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-2 py-4 border-2 border-slate-200 rounded-2xl text-text-secondary font-mono text-sm hover:border-volt hover:text-volt transition-colors">
                  <Phone className="w-4 h-4" />{company.phone}
                </a>
                <Link href="/contact"
                  className="block text-center py-4 bg-volt text-white font-display font-bold text-lg rounded-2xl shadow-volt-btn">
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
