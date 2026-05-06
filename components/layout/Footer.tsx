import Link from "next/link";
import { company } from "@/data/company";
import { navLinks } from "@/data/nav";
import { MapPin, Phone, Mail, Zap, ArrowUpRight, Shield } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const servicesLinks  = navLinks.find(l => l.label === "Services")?.children  || [];
  const solutionsLinks = navLinks.find(l => l.label === "Solutions")?.children || [];
  const standards = ["IS 3043", "IEEE 80", "IS/IEC 62305", "IEC 60364", "IEEE 81"];

  return (
    <footer className="bg-slate-900 text-white relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-volt-gradient" />

      {/* Standards strip */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-between">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-display uppercase tracking-widest">
              <Shield className="w-4 h-4 text-blue-400" />
              Compliant Standards:
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {standards.map((std) => (
                <span key={std} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-mono text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors">
                  {std}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-volt flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="font-display font-bold text-white text-xl tracking-tight">{company.name}</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">{company.tagline}</p>
            <div className="flex flex-col gap-3">
              <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/40 transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500/40 transition-colors shrink-0">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                {company.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span>{company.location}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-volt rounded-full" />Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {servicesLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-volt rounded-full" />Solutions
            </h3>
            <ul className="flex flex-col gap-2.5">
              {solutionsLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="flex flex-col gap-5">
            <h3 className="font-display font-bold text-sm text-white uppercase tracking-[0.15em] flex items-center gap-2">
              <span className="w-4 h-[2px] bg-volt rounded-full" />Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[{ label: "About Us", href: "/about" }, { label: "Services", href: "/services" }, { label: "Solutions", href: "/solutions" }, { label: "Contact Us", href: "/contact" }].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 p-4 bg-slate-800 border border-slate-700 rounded-2xl">
              <p className="text-xs text-slate-400 mb-3 leading-relaxed">Need a safety audit or protection system?</p>
              <Link href="/contact"
                className="block text-center py-2.5 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-colors shadow-volt-btn">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-blue-500/50" />{company.location}</p>
        </div>
      </div>
    </footer>
  );
}
