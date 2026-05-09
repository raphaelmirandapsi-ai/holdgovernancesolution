import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { methodSteps } from "@/lib/site";

export const metadata = { title: "Método H.O.L.D." };

export default function MetodoPage() {
  return (
    <>
      <Hero
        eyebrow="Método H.O.L.D."
        title="Um método executivo para transformar complexidade em governança acionável."
        description="A apresentação pública do método é intencionalmente estratégica: mostra tese, etapas e benefícios sem abrir fórmulas, pesos de matriz, parâmetros de scoring ou metodologia clínica completa."
        secondaryLabel="Conhecer o SIPI"
        secondaryHref="/sipi"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Visão geral"
          title="Do problema crítico ao plano de continuidade."
          description="O método H.O.L.D. organiza escuta, contexto, leitura institucional e acompanhamento em uma jornada simples de entender e segura de compartilhar."
        />
        <div className="mt-12 grid gap-5">
          {methodSteps.map((step, index) => (
            <Card key={step} className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-lg font-bold text-hold-gold">{index + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold">{step}</h3>
                <p className="mt-2 text-ink/62">Descrição executiva e ilustrativa, sem exposição de detalhes proprietários.</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="section-shell">
          <SectionHeader eyebrow="Limites de exposição" title="O que o site não revela." description="A vitrine institucional preserva a propriedade intelectual e a segurança operacional da HOLD." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {["Lógica algorítmica interna", "Pesos de matriz", "Fórmulas proprietárias", "Detalhes sensíveis do SIPI", "Metodologia clínica completa", "Parâmetros de scoring"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white/76">{item}</div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
