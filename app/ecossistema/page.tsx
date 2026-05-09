import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystem } from "@/lib/site";

export const metadata = { title: "Ecossistema" };

export default function EcossistemaPage() {
  return (
    <>
      <Hero
        eyebrow="Ecossistema estratégico"
        title="A HOLD opera como articuladora entre liderança, conhecimento e execução."
        description="O ecossistema reúne atores e recursos para que decisões críticas avancem com consistência, confidencialidade e alinhamento institucional."
        secondaryLabel="Ler conteúdos"
        secondaryHref="/conteudos"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Rede de valor"
          title="Cada componente existe para fortalecer a decisão."
          description="A visão de ecossistema evita silos: aproxima conselhos, áreas técnicas, especialistas e tecnologia em um modelo governável e orientado à continuidade."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item, index) => (
            <Card key={item}>
              <span className="text-5xl font-semibold text-hold-gold/70">0{index + 1}</span>
              <h3 className="mt-6 text-2xl font-semibold">{item}</h3>
              <p className="mt-4 leading-7 text-ink/62">Participação desenhada conforme escopo, maturidade e confidencialidade exigidos pelo caso.</p>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
