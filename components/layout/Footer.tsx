import Link from "next/link";
import { company } from "@/data/company";
import { navLinks } from "@/data/nav";
import { MapPin, Phone, Mail, Zap, ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const servicesLinks  = navLinks.find(l => l.label === "Services")?.children  || [];
  const solutionsLinks = navLinks.find(l => l.label === "Solutions")?.children || [];
  const standards = ["IS 3043", "IEEE 80", "IS/IEC 62305", "IEC 60364", "IEEE 81"];

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative">
      {/* Premium gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-maroon-700 via-amber-500 to-maroon-700" />

      {/* Premium Standards strip */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-between">
            <div className="flex items-center gap-2.5 text-slate-300 text-xs font-display uppercase tracking-wider font-semibold">
              <Shield className="w-4.5 h-4.5 text-amber-400" />
              Compliant Standards:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {standards.map((std) => (
                <span key={std} className="px-4 py-1.5 bg-white/[0.08] border border-white/15 rounded-lg text-xs font-mono text-slate-300 hover:text-amber-300 hover:border-amber-400/50 hover:bg-white/[0.12] transition-all duration-300 cursor-default font-semibold">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand col - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            <Link href="/" className="flex items-center gap-3 w-fit group hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon-600 to-maroon-800 flex items-center justify-center shadow-volt group-hover:shadow-volt-strong transition-all group-hover:scale-105 duration-300">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">{company.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{company.tagline}</p>
            
            {/* Contact info - Premium */}
            <div className="flex flex-col gap-4">
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-300 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center group-hover:border-amber-400/50 group-hover:bg-amber-500/10 transition-all duration-300 shrink-0">
                  <Phone className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <span className="font-medium">{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-300 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center group-hover:border-amber-400/50 group-hover:bg-amber-500/10 transition-all duration-300 shrink-0">
                  <Mail className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <span className="font-medium">{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-10 h-10 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5 text-amber-400" />
                </div>
                <span className="font-medium">{company.location}</span>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{company.workingHours}</span>
            </div>
          </div>

          {/* Services - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-maroon-500 rounded-full" />Services
            </h3>
            <ul className="flex flex-col gap-4">
              {servicesLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-amber-300 transition-all duration-300 flex items-center gap-2 group font-medium">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-teal-500 rounded-full" />Solutions
            </h3>
            <ul className="flex flex-col gap-4">
              {solutionsLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-teal-300 transition-all duration-300 flex items-center gap-2 group font-medium">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Quick CTA - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-6 h-[2.5px] bg-amber-500 rounded-full" />Company
            </h3>
            <ul className="flex flex-col gap-4">
              {[{ label: "About Us", href: "/about" }, { label: "Contact Us", href: "/contact" }].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-amber-300 transition-all duration-300 flex items-center gap-2 group font-medium">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Premium Quick CTA card */}
            <div className="mt-2 p-6 bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/20 rounded-2xl backdrop-blur-md glass-dark hover:border-white/30 transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle2 className="w-5 h-5 text-amber-400" />
                <p className="text-sm text-white font-display font-bold">Get Protected Today</p>
              </div>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed font-medium">Professional lightning protection & earthing solutions for your facility.</p>
              <Link href="/contact"
                className="block text-center py-3.5 bg-gradient-to-r from-maroon-700 to-maroon-800 hover:from-maroon-800 hover:to-maroon-900 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-volt hover:shadow-volt-strong btn-premium">
                Request a Free Quote
              </Link>
            </div>

            {/* Premium Trust badges */}
            <div className="flex flex-wrap gap-2.5 mt-2">
              {["IS/IEC 62305", "IEEE 80", "18+ Years"].map((badge) => (
                <span key={badge} className="px-3.5 py-1.5 bg-white/[0.08] border border-white/15 rounded-lg text-[10px] text-slate-300 font-display font-semibold uppercase tracking-wide hover:border-white/30 hover:bg-white/[0.12] transition-all duration-300">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bottom bar */}
      <div className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-400">
          <p className="font-medium">© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-amber-300 transition-all duration-300 font-medium">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-300 transition-all duration-300 font-medium">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1.5 font-medium"><MapPin className="w-3.5 h-3.5 text-amber-400" />{company.location}</p>
        </div>
      </div>
    </footer>
  );
}
