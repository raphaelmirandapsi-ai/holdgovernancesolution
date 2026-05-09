import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryLabel = "Solicitar reunião",
  primaryHref = "/contato",
  secondaryLabel = "Conhecer o método",
  secondaryHref = "/metodo",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,164,93,0.28),transparent_26rem),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%)]" />
      <div className="section-shell relative grid min-h-[620px] items-center gap-12 py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="kicker text-hold-gold">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={primaryHref} className="rounded-full bg-hold-gold px-7 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-hold-gold hover:text-hold-gold">
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-6 shadow-glow backdrop-blur">
          <div className="rounded-[1.5rem] bg-hold-pearl p-6 text-ink">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-hold-bronze">Fluxo ilustrativo</p>
            <div className="mt-6 space-y-4">
              {["Problema crítico", "Governança", "Leitura contextual", "Decisão orientada", "Continuidade"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-hold-gold">{index + 1}</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-ink/60">Representação executiva: não exibe pesos, fórmulas, parâmetros de scoring ou lógica algorítmica interna.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
