import Link from "next/link";

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const textColor = variant === "dark" ? "text-white" : "text-ink";
  const mutedColor = variant === "dark" ? "text-white/55" : "text-ink/55";

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="H.O.L.D. Governance Solution">
      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-hold-gold/50 bg-ink text-sm font-bold tracking-[0.18em] text-hold-gold shadow-glow transition group-hover:scale-105">
        H
      </span>
      <span className="leading-tight">
        <span className={`block text-sm font-semibold tracking-[0.24em] ${textColor}`}>H.O.L.D.</span>
        <span className={`block text-xs uppercase tracking-[0.2em] ${mutedColor}`}>Governance Solution</span>
      </span>
    </Link>
  );
}
