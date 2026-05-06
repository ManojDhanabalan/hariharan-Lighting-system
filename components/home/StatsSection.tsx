"use client";

import { company } from "@/data/company";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { FolderCheck, Users, Clock, Map } from "lucide-react";

const STATS = [
  { value: company.stats.projectsCompleted, label: "Projects Completed",  icon: <FolderCheck className="w-5 h-5" />, color: "text-blue-600 bg-blue-50 border-blue-100" },
  { value: company.stats.clientRetention,   label: "Client Retention",    icon: <Users className="w-5 h-5" />,       color: "text-violet-600 bg-violet-50 border-violet-100" },
  { value: company.stats.yearsExperience,   label: "Years Experience",    icon: <Clock className="w-5 h-5" />,       color: "text-amber-600 bg-amber-50 border-amber-100" },
  { value: company.stats.statesServed,      label: "States Served",       icon: <Map className="w-5 h-5" />,         color: "text-teal-600 bg-teal-50 border-teal-100" },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 bg-bg-secondary border-y border-slate-100 relative">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-card transition-shadow">
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} label={stat.label} delay={i * 150} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
