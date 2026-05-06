import { company } from "@/data/company";
import { Phone, Mail, MapPin, Clock, User } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Phone,  label: "Phone",        value: company.phone,                                       href: `tel:${company.phone.replace(/[^0-9+]/g,"")}` },
  { icon: Mail,   label: "Email",        value: company.email,                                       href: `mailto:${company.email}` },
  { icon: MapPin, label: "Office",       value: company.location,                                    href: null },
  { icon: Clock,  label: "Working Hours",value: "Mon – Sat, 9:00 AM – 6:00 PM IST",                 href: null },
];

const COLORS = ["bg-blue-50 border-blue-100 text-blue-600","bg-violet-50 border-violet-100 text-violet-600","bg-teal-50 border-teal-100 text-teal-600","bg-amber-50 border-amber-100 text-amber-600"];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {CONTACT_ITEMS.map((item, i) => (
        <div key={item.label} className="flex items-start gap-4 p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all group">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${COLORS[i]}`}>
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-display font-bold text-text-dim uppercase tracking-[0.12em] mb-1">{item.label}</p>
            {item.href
              ? <a href={item.href} className="text-slate-800 hover:text-volt transition-colors font-body text-sm">{item.value}</a>
              : <p className="text-slate-800 font-body text-sm">{item.value}</p>}
          </div>
        </div>
      ))}

      {/* Founder card */}
      <div className="relative bg-blue-50 border border-blue-200 rounded-2xl p-6 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-volt rounded-l-2xl" />
        <div className="flex items-start gap-4 pl-2">
          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-200 flex items-center justify-center shrink-0">
            <User className="w-6 h-6 text-volt" />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-0.5">{company.founderName}</h3>
            <p className="text-volt text-xs font-display font-bold tracking-widest uppercase mb-3">Founder & Managing Director</p>
            <p className="text-text-secondary text-sm leading-relaxed italic">
              &ldquo;Available for technical consultations to solve your most complex engineering challenges.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Quick call */}
      <a href={`tel:${company.phone.replace(/[^0-9+]/g,"")}`}
        className="flex items-center justify-center gap-2 py-4 bg-volt hover:bg-volt-dark text-white font-display font-bold text-sm uppercase tracking-widest rounded-2xl transition-all shadow-volt-btn hover:shadow-volt-strong hover:-translate-y-0.5">
        <Phone className="w-4 h-4" />Call Us Now: {company.phone}
      </a>
    </div>
  );
}
