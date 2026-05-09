import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="space-y-5">
          <Logo variant="dark" />
          <p className="max-w-md text-sm leading-7 text-white/66">{site.description}</p>
          <p className="text-xs uppercase tracking-[0.24em] text-hold-gold">Informação institucional, não metodologia proprietária.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-hold-gold">Mapa</h3>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-hold-gold">Contato</h3>
          <div className="space-y-3 text-sm text-white/70">
            <p>{site.email}</p>
            <p>{site.phone}</p>
            <p>Atendimento executivo sob confidencialidade.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
