interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({ overline, title, subtitle, centered = false, dark = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center mx-auto max-w-3xl" : ""} ${className}`}>
      {overline && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? "justify-center" : ""}`}>
          <span className="w-6 h-[2px] bg-volt rounded-full" />
          <span className="text-volt font-display font-bold text-xs tracking-[0.22em] uppercase">{overline}</span>
          {centered && <span className="w-6 h-[2px] bg-volt rounded-full" />}
        </div>
      )}
      <h2 className={`font-display font-extrabold uppercase tracking-tight leading-tight text-3xl md:text-4xl lg:text-5xl ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${dark ? "text-slate-300" : "text-text-secondary"} ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
