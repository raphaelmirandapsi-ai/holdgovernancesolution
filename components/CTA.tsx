import Link from "next/link";

export function CTA() {
  return (
    <section className="section-shell py-16">
      <div className="overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-card sm:p-12 lg:p-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="kicker text-hold-gold">Próximo passo</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-5xl">Converse com a HOLD sobre seu desafio institucional.</h2>
            <p className="mt-5 max-w-2xl text-white/68">Agende uma reunião confidencial para avaliar aderência, escopo e modelo de governança sem expor informações sensíveis em canais abertos.</p>
          </div>
          <Link href="/contato" className="rounded-full bg-hold-gold px-7 py-4 text-center text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">
            Solicitar reunião
          </Link>
        </div>
      </div>
    </section>
  );
}
