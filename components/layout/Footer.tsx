import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { navLinks } from "@/data/nav";
import { MapPin, Phone, Mail, Zap, ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const servicesLinks  = navLinks.find(l => l.label === "Services")?.children  || [];
  const solutionsLinks = navLinks.find(l => l.label === "Solutions")?.children || [];
  const standards = ["IS 3043", "IEEE 80", "IS/IEC 62305", "IEC 60364", "IEEE 81"];

  return (
    <footer className="bg-[#030712] text-white relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-maroon-600 via-violet-500 to-maroon-600" />

      {/* Standards strip */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-between">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-widest">
              <Shield className="w-4 h-4 text-maroon-500" />
              Compliant Standards:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {standards.map((std) => (
                <span key={std} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-slate-400 hover:text-maroon-500 hover:border-maroon-600/30 transition-colors cursor-default">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Brand col - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center w-fit group">
              <div className="bg-white px-3 py-2 rounded-xl shadow-lg group-hover:shadow-white/10 transition-shadow">
                <Image 
                  src="/logo.svg" 
                  alt={`${company.name} Logo`} 
                  width={200} 
                  height={80} 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{company.tagline}</p>
            
            {/* Contact info */}
            <div className="flex flex-col gap-4">
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-maroon-500 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-maroon-600/30 group-hover:bg-maroon-600/10 transition-all shrink-0">
                  <Phone className="w-4 h-4 text-maroon-500" />
                </div>
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-maroon-500 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-maroon-600/30 group-hover:bg-maroon-600/10 transition-all shrink-0">
                  <Mail className="w-4 h-4 text-maroon-500" />
                </div>
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-maroon-500" />
                </div>
                <span>{company.location}</span>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{company.workingHours}</span>
            </div>
          </div>

          {/* Services - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-maroon-600 rounded-full" />Services
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-maroon-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-maroon-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions - spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-violet-500 rounded-full" />Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {solutionsLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-violet-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-violet-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Quick CTA - spans 4 cols */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h3 className="font-display font-bold text-xs text-white uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-amber-500 rounded-full" />Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[{ label: "About Us", href: "/about" }, { label: "Contact Us", href: "/contact" }].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick CTA card */}
            <div className="mt-4 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-maroon-500" />
                <p className="text-sm text-white font-display font-semibold">Get Protected Today</p>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">Professional lightning protection & earthing solutions for your facility.</p>
              <Link href="/contact"
                className="block text-center py-3 bg-red-600 hover:bg-red-700 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl transition-colors">
                Request a Free Quote
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {["IS/IEC 62305", "IEEE 80", "18+ Years"].map((badge) => (
                <span key={badge} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] text-slate-400 font-display font-medium uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-maroon-600/50" />{company.location}</p>
        </div>
      </div>
    </footer>
  );
}
