import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata = { title: "Contato" };

export default function ContatoPage() {
  return (
    <>
      <Hero
        eyebrow="Contato"
        title="Agende uma conversa confidencial com a HOLD."
        description="Compartilhe apenas informações iniciais. Detalhes sensíveis devem ser tratados em reunião qualificada, com escopo e condições de confidencialidade definidos."
        primaryLabel="Enviar e-mail"
        primaryHref={`mailto:${site.email}`}
        secondaryLabel="Conhecer a empresa"
        secondaryHref="/sobre"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Solicitação de reunião"
          title="Um primeiro contato simples, seguro e objetivo."
          description="O formulário abaixo é uma interface institucional demonstrativa. Em produção, ele pode ser conectado a CRM, agenda executiva ou fluxo seguro de triagem."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <form className="grid gap-5">
              {[
                ["Nome", "text"],
                ["E-mail corporativo", "email"],
                ["Organização", "text"],
                ["Tema da conversa", "text"],
              ].map(([label, type]) => (
                <label key={label} className="grid gap-2 text-sm font-semibold text-ink/75">
                  {label}
                  <input className="rounded-2xl border border-ink/12 bg-hold-pearl px-4 py-4 outline-none transition focus:border-hold-gold" type={type} placeholder={label} />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-semibold text-ink/75">
                Contexto inicial
                <textarea className="min-h-36 rounded-2xl border border-ink/12 bg-hold-pearl px-4 py-4 outline-none transition focus:border-hold-gold" placeholder="Descreva em nível executivo, sem dados sensíveis." />
              </label>
              <button className="rounded-full bg-ink px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5" type="button">
                Solicitar reunião
              </button>
            </form>
          </Card>
          <Card className="bg-ink text-white">
            <p className="kicker text-hold-gold">Canais</p>
            <div className="mt-8 space-y-5 text-white/72">
              <p>{site.email}</p>
              <p>{site.phone}</p>
              <p>Atendimento executivo para empresas, conselhos, instituições de saúde e parceiros estratégicos.</p>
              <div className="gold-divider" />
              <p className="text-sm">Não envie documentos clínicos, dados pessoais sensíveis ou informações protegidas antes da definição de canal seguro.</p>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
