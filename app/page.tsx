import { Card } from "@/components/Card";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ecosystem, pillars } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Vitrine institucional"
        title="Governança sofisticada para decisões que não admitem improviso."
        description="A H.O.L.D. Governance Solution apoia lideranças em problemas críticos, conectando tese, método, ecossistema e tecnologia segura em uma leitura executiva de alto nível."
      />

      <section className="section-shell py-20">
        <SectionHeader
          eyebrow="A tese"
          title="Toda decisão sensível precisa de contexto, responsabilidade e continuidade."
          description="A HOLD nasce para reduzir ruído, organizar evidências e transformar complexidade institucional em caminhos de decisão confiáveis, preservando a confidencialidade da metodologia proprietária."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/65">{pillar.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white/60 py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="O problema"
            title="Organizações enfrentam decisões clínicas, reputacionais e operacionais sob pressão."
            description="Nesses cenários, planilhas isoladas e pareceres desconectados não bastam. É necessário um sistema de governança que preserve segurança, registre critérios e mantenha foco estratégico."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Ambiguidade entre áreas", "Risco reputacional", "Dados sensíveis", "Pressão por resposta", "Falta de trilha decisória", "Baixa continuidade"].map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-hold-pearl p-5 font-semibold text-ink/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <SectionHeader eyebrow="Ecossistema" title="Uma rede estratégica para sustentar decisões complexas." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map((item) => (
            <Card key={item}>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-hold-bronze">HOLD</span>
              <h3 className="mt-3 text-xl font-semibold">{item}</h3>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
