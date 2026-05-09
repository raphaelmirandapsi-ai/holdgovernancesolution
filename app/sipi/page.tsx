import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "SIPI" };

export default function SipiPage() {
  return (
    <>
      <Hero
        eyebrow="SIPI"
        title="Inteligência institucional com exposição mínima e governança máxima."
        description="O SIPI é apresentado como camada estratégica de apoio: integra sinais, registro e acompanhamento sem publicar arquitetura sensível, parâmetros internos ou detalhes operacionais críticos."
        secondaryLabel="Ver método"
        secondaryHref="/metodo"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Visão segura"
          title="O que pode ser comunicado sobre o SIPI."
          description="A comunicação enfatiza benefícios e princípios de proteção, mantendo a profundidade técnica em canais controlados e reuniões sob confidencialidade."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Registro", "Trilhas de acompanhamento e memória institucional."],
            ["Priorização", "Apoio executivo para ordenar demandas e riscos."],
            ["Integração", "Conexão entre áreas, especialistas e governança."],
            ["Segurança", "Comunicação pública sem detalhes sensíveis do sistema."],
          ].map(([title, text]) => (
            <Card key={title}>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/65">{text}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="section-shell pb-20">
        <div className="rounded-[2rem] border border-ink/10 bg-white p-8 shadow-card">
          <p className="kicker">Benefícios</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Menos ruído na tomada de decisão", "Maior rastreabilidade executiva", "Melhor continuidade entre ciclos"].map((item) => (
              <div key={item} className="rounded-2xl bg-hold-pearl p-6 text-lg font-semibold text-ink/78">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
