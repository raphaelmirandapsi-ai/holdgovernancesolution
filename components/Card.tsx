import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[1.5rem] border border-ink/10 bg-white/74 p-6 shadow-card backdrop-blur ${className}`}>{children}</div>;
}
