import Link from "next/link";
import { navItems } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-hold-pearl/86 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-hold-bronze">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contato"
          className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-hold-slate"
        >
          Solicitar reunião
        </Link>
      </div>
    </header>
  );
}
