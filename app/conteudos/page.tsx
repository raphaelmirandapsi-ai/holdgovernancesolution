import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = { title: "Conteúdos e White Papers" };

const papers = [
  "Governança para decisões sensíveis em saúde",
  "Continuidade institucional em ambientes de risco",
  "Como comunicar métodos proprietários sem expor propriedade intelectual",
];

export default function ConteudosPage() {
  return (
    <>
      <Hero
        eyebrow="Conteúdos / White Papers"
        title="Conhecimento executivo para apoiar conversas estratégicas."
        description="A biblioteca editorial da HOLD apresenta teses, problemas e tendências com linguagem acessível, mantendo frameworks completos e detalhes sensíveis em ambiente reservado."
        secondaryLabel="Falar com a HOLD"
        secondaryHref="/contato"
      />
      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="Em desenvolvimento"
          title="White papers institucionais sem abertura de metodologia proprietária."
          description="Os materiais foram pensados para gerar confiança, educar stakeholders e preparar reuniões qualificadas."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {papers.map((paper) => (
            <Card key={paper}>
              <p className="kicker">White paper</p>
              <h3 className="mt-4 text-2xl font-semibold">{paper}</h3>
              <p className="mt-5 text-sm leading-7 text-ink/62">Resumo executivo disponível mediante cadastro e avaliação de aderência institucional.</p>
              <button className="mt-8 rounded-full border border-ink/15 px-5 py-3 text-sm font-bold text-ink/75" type="button">
                Em breve
              </button>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
