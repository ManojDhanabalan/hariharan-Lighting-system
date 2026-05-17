import { company } from "@/data/company";
import { Phone, Mail, MapPin, Clock, User, ArrowRight } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Phone", value: company.phone, href: `tel:${company.phone.replace(/[^0-9+]/g, "")}`, color: "from-[#7B2D3E] to-[#5C1F2E]", bg: "bg-[#FAF6F6]", text: "text-[#7B2D3E]", border: "border-[#7B2D3E]/10" },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, color: "from-[#D97706] to-[#B45309]", bg: "bg-[#FFFBEB]", text: "text-[#D97706]", border: "border-[#D97706]/10" },
  { icon: MapPin, label: "Office", value: company.location, href: company.googleMapsLink, color: "from-[#9B3D52] to-[#7B2D3E]", bg: "bg-[#FCF5F6]", text: "text-[#9B3D52]", border: "border-[#9B3D52]/10" },
  { icon: Clock, label: "Working Hours", value: company.workingHours, href: null, color: "from-[#5C1F2E] to-[#3D1220]", bg: "bg-[#F9F1F3]", text: "text-[#5C1F2E]", border: "border-[#5C1F2E]/10" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {CONTACT_ITEMS.map((item) => (
        <div key={item.label} className="group flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-maroon-200 hover:bg-white hover:shadow-lg transition-all duration-300">
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-display font-bold text-slate-400 uppercase tracking-[0.12em] mb-1">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="text-slate-800 hover:text-maroon-700 transition-colors font-body text-sm flex items-center gap-1 group/link">
                <span className="truncate">{item.value}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-maroon-600 shrink-0" />
              </a>
            ) : (
              <p className="text-slate-800 font-body text-sm">{item.value}</p>
            )}
          </div>
        </div>
      ))}

      {/* Founder card */}
      <div className="relative bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-2xl p-6 overflow-hidden group hover:border-maroon-200 hover:shadow-lg transition-all duration-300">
        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7B2D3E] to-[#9B3D52] rounded-l-2xl" />

        <div className="flex items-start gap-4 pl-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon-600 to-maroon-700 flex items-center justify-center shrink-0 shadow-lg shadow-maroon-600/25 group-hover:scale-110 transition-transform duration-300">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-0.5">{company.founderName}</h3>
            <p className="text-maroon-700 text-xs font-display font-bold tracking-widest uppercase mb-3">Founder & Managing Director</p>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              &ldquo;Available for technical consultations to solve your most complex engineering challenges.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Quick call CTA */}
      <a href={`tel:${company.phone.replace(/[^0-9+]/g, "")}`}
        className="group flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-maroon-700 to-maroon-600 hover:from-maroon-600 hover:to-maroon-800 text-white font-display font-bold text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-lg shadow-maroon-600/25 hover:shadow-xl hover:shadow-maroon-600/40 hover:-translate-y-0.5 overflow-hidden relative">
        {/* Shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <Phone className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Call Us Now: {company.phone}</span>
      </a>
    </div>
  );
}
