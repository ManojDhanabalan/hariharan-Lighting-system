import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  /** Optional hover lift effect */
  hover?: boolean;
}

/**
 * Premium glass‑morphism card.
 * Uses the Tailwind `bg-glass` and `border-glass` utilities defined in the config.
 * Adds a subtle backdrop‑blur and soft shadow.
 * When `hover` is true the card lifts on hover with a smooth transition.
 */
export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  const base = `bg-glass border-glass backdrop-blur-xl rounded-2xl p-6 shadow-soft ${hover ? 'card-hover' : ''}`;
  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}
