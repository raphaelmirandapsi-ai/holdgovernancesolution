import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Sobre a HOLD" };

export default function SobrePage() {
  return (
    <>
      <Hero
        eyebrow="Sobre a HOLD"
        title="Uma consultoria de governança para ambientes de alta responsabilidade."
        description="A HOLD estrutura conversas, critérios e caminhos executivos para organizações que precisam decidir com segurança em contextos técnicos, humanos e institucionais complexos."
        secondaryLabel="Ver ecossistema"
        secondaryHref="/ecossistema"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Posicionamento"
          title="Executiva no tom, técnica na leitura e humana na condução."
          description="A empresa atua como camada institucional entre liderança, especialistas e tecnologia, tornando decisões mais claras sem transformar conteúdo sensível em material público."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Missão", "Apoiar decisões críticas com governança, clareza e responsabilidade."],
            ["Visão", "Ser referência em modelos seguros de decisão institucional e continuidade."],
            ["Princípio", "Expor apenas o necessário, proteger o essencial e documentar o que sustenta a decisão."],
          ].map(([title, text]) => (
            <Card key={title}>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-ink/65">{text}</p>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
