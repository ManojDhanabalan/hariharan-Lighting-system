"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

function parseValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function AnimatedCounter({ value, label, icon, delay = 0 }: AnimatedCounterProps) {
  const { num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const [inView, setInView]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = (num / duration) * step;
      const interval = setInterval(() => {
        start += increment;
        if (start >= num) { setDisplay(num); clearInterval(interval); }
        else setDisplay(Math.floor(start));
      }, step);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, num, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {icon && <div className="mb-3">{icon}</div>}
      <div className="font-display font-extrabold text-3xl md:text-4xl text-volt tracking-tight mb-1.5">
        {display}{suffix}
      </div>
      <div className="font-body text-xs text-text-secondary uppercase tracking-[0.15em] font-medium">
        {label}
      </div>
    </div>
  );
}
