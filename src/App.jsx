import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Check,
  Plus,
  Minus,
  Menu,
  X,
  Layers3,
  Network,
  Compass,
  CheckCheck,
  Download,
  Copy,
  Mail,
} from "lucide-react";
import HeroVisual from "./components/HeroVisual.jsx";
import BrandLogo from "./components/BrandLogo.jsx";
import BrainMark from "./components/BrainMark.jsx";
import { contact } from "./config.js";

const solutions = [
  {
    id: "governanca",
    label: "Governança",
    icon: Network,
    number: "01",
    title: "Boas decisões precisam de uma base sólida.",
    text: "Conectamos responsabilidades, pessoas e objetivos para construir uma governança que funciona na realidade da sua empresa.",
    points: [
      "Papéis e responsabilidades claros",
      "Estrutura para a tomada de decisão",
      "Rituais de gestão e acompanhamento",
    ],
    diagram: ["PROPÓSITO", "PESSOAS", "DECISÕES"],
    tag: "Alinhamento que gera confiança",
  },
  {
    id: "gestao",
    label: "Gestão & processos",
    icon: Layers3,
    number: "02",
    title: "Uma operação mais simples. Uma gestão mais forte.",
    text: "Organizamos o que acontece no dia a dia para que a sua equipe tenha clareza sobre o que fazer, como fazer e por que isso importa.",
    points: [
      "Mapeamento e organização de processos",
      "Indicadores que apoiam a gestão",
      "Rotinas mais conectadas e eficientes",
    ],
    diagram: ["PROCESSOS", "ROTINAS", "RESULTADOS"],
    tag: "Mais fluidez no dia a dia",
  },
  {
    id: "estrategia",
    label: "Estratégia & crescimento",
    icon: Compass,
    number: "03",
    title: "O próximo capítulo começa com uma direção.",
    text: "Traduzimos a visão de futuro em prioridades, escolhas e um plano de ação possível. Crescimento com intenção, consistência e acompanhamento.",
    points: [
      "Diagnóstico do momento do negócio",
      "Planejamento e definição de prioridades",
      "Plano de ação com visão de longo prazo",
    ],
    diagram: ["VISÃO", "ESTRATÉGIA", "AÇÃO"],
    tag: "Um caminho claro para avançar",
  },
];

const questions = [
  {
    title: "Para quem são as soluções da HOLD?",
    answer:
      "Para empresas que querem organizar sua gestão, estruturar a governança ou preparar um novo ciclo de crescimento. O ponto de partida é entender o momento, os desafios e os objetivos de cada negócio.",
  },
  {
    title: "Preciso ter uma estrutura de governança pronta?",
    answer:
      "Não. Podemos começar pelo diagnóstico e pela definição das primeiras responsabilidades e rotinas. A estrutura precisa fazer sentido para o tamanho e a realidade da sua empresa.",
  },
  {
    title: "Como começa um projeto?",
    answer:
      "Tudo começa com uma conversa sobre a sua empresa. A partir desse contexto, alinhamos o desafio, o escopo e os próximos passos. Você pode preparar um briefing pelo botão de contato do site.",
  },
  {
    title: "As soluções são adaptadas à minha empresa?",
    answer:
      "Sim. Consideramos o contexto do negócio, a estrutura atual e os objetivos de quem está à frente da empresa. O trabalho é desenhado a partir desse diagnóstico, com prioridades e entregas alinhadas.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="HOLD, início">
      <BrandLogo />
    </a>
  );
}

function BriefingDialog({ dialogRef, solution }) {
  const [prepared, setPrepared] = useState(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [values, setValues] = useState(null);
  const { email, whatsapp } = contact;

  function close() {
    dialogRef.current?.close();
  }
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setValues(Object.fromEntries(data));
    const content = `BRIEFING — HOLD\n\nNome: ${data.get("name").trim()}\nEmpresa: ${data.get("company").trim()}\nE-mail: ${data.get("email").trim()}\nInteresse: ${data.get("interest")}\n\nDesafio:\n${data.get("challenge").trim()}\n`;
    setPrepared(content);
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([prepared], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "meu-briefing-hold.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(prepared);
      setCopied(true);
      setCopyError(false);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <dialog
      ref={dialogRef}
      className="briefing-dialog"
      aria-labelledby="dialog-title"
      onClose={() => {
        setPrepared(null);
        setValues(null);
        setCopied(false);
        setCopyError(false);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="dialog-content">
        <button
          className="icon-button dialog-close"
          onClick={close}
          aria-label="Fechar conversa"
        >
          <X size={21} />
        </button>
        {prepared ? (
          <div className="briefing-result">
            <span className="success-icon">
              <CheckCheck size={30} />
            </span>
            <p className="eyebrow">UM BOM PONTO DE PARTIDA</p>
            <h2 id="dialog-title">
              Seu próximo passo,
              <br />
              mais claro.
            </h2>
            <p>
              Seu briefing está pronto. Escolha um canal para compartilhar com a
              HOLD e começar a nossa conversa.
            </p>
            <pre className="briefing-preview">{prepared}</pre>
            <div className="contact-methods">
              {whatsapp && (
                <a
                  className="button button-primary"
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(prepared)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar pelo WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              )}
              {email && (
                <a
                  className="button button-outline"
                  href={`mailto:${email}?subject=${encodeURIComponent("Vamos conversar — novo projeto")}&body=${encodeURIComponent(prepared)}`}
                >
                  Enviar por e-mail
                  <Mail size={16} />
                </a>
              )}
            </div>
            <div className="result-actions">
              <button className="button button-primary" onClick={download}>
                Baixar briefing
                <Download size={17} />
              </button>
              <button className="button button-outline" onClick={copy}>
                {copied ? "Copiado" : "Copiar"}
                {copied ? <Check size={17} /> : <Copy size={17} />}
              </button>
            </div>
            <p className="form-note" role="status">
              {copyError
                ? "Não foi possível copiar. Você pode baixar o arquivo acima."
                : "O briefing é gerado no seu navegador. Nenhum dado é enviado automaticamente."}
            </p>
            <button className="text-button" onClick={() => setPrepared(null)}>
              Editar meu briefing
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <>
            <p className="eyebrow">VAMOS CONSTRUIR O PRÓXIMO PASSO</p>
            <h2 id="dialog-title">
              Toda transformação
              <br />
              começa com uma conversa.
            </h2>
            <p className="dialog-intro">
              Conte um pouco sobre o seu negócio. Depois, envie seu briefing
              pelo WhatsApp ou e-mail.
            </p>
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Seu nome
                  <input
                    name="name"
                    autoComplete="name"
                    placeholder="Como podemos chamar você?"
                    defaultValue={values?.name}
                    required
                    maxLength={100}
                    pattern=".*\S.*"
                  />
                </label>
                <label>
                  Empresa
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="Nome da sua empresa"
                    defaultValue={values?.company}
                    required
                    maxLength={150}
                    pattern=".*\S.*"
                  />
                </label>
              </div>
              <label>
                E-mail profissional
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com.br"
                  defaultValue={values?.email}
                  required
                  maxLength={200}
                />
              </label>
              <label>
                Como podemos ajudar?
                <select
                  key={solution}
                  name="interest"
                  defaultValue={values?.interest || solution}
                >
                  <option>Governança</option>
                  <option>Gestão & processos</option>
                  <option>Estratégia & crescimento</option>
                  <option>Ainda quero entender melhor</option>
                </select>
              </label>
              <label>
                Qual é o seu desafio?
                <textarea
                  name="challenge"
                  placeholder="O que você gostaria de estruturar ou transformar na sua empresa?"
                  defaultValue={values?.challenge}
                  rows={3}
                  required
                  minLength={10}
                  maxLength={3000}
                />
              </label>
              <button
                className="button button-primary button-full"
                type="submit"
              >
                Preparar meu briefing
                <ArrowUpRight size={18} />
              </button>
              <p className="form-note">
                Você escolhe quando enviar. Nenhum dado é transmitido antes de
                abrir seu aplicativo de mensagens.
              </p>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);
  const [dialogSolution, setDialogSolution] = useState(
    "Ainda quero entender melhor",
  );
  const dialogRef = useRef(null);
  const tabRefs = useRef([]);
  const mobileMenuButton = useRef(null);
  const selected = solutions[activeSolution];
  const SelectedIcon = selected.icon;

  useEffect(() => {
    if (!menuOpen) return;
    function dismiss(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        mobileMenuButton.current?.focus();
      }
    }
    window.addEventListener("keydown", dismiss);
    return () => window.removeEventListener("keydown", dismiss);
  }, [menuOpen]);

  function openBriefing(interest = "Ainda quero entender melhor") {
    setDialogSolution(interest);
    setMenuOpen(false);
    dialogRef.current?.showModal();
  }
  function tabKey(event, index) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % solutions.length;
    else if (event.key === "ArrowLeft")
      next = (index + solutions.length - 1) % solutions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = solutions.length - 1;
    else return;
    event.preventDefault();
    setActiveSolution(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav
            id="main-navigation"
            className={`navigation ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegação principal"
          >
            <a href="#solucoes" onClick={() => setMenuOpen(false)}>
              Soluções
            </a>
            <a href="#como-atuamos" onClick={() => setMenuOpen(false)}>
              Como atuamos
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              A HOLD
            </a>
            <button
              className="button button-header"
              onClick={() => openBriefing()}
            >
              Vamos conversar
              <ArrowUpRight size={17} />
            </button>
          </nav>
          <button
            ref={mobileMenuButton}
            className="menu-button icon-button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="conteudo">
        <section
          id="inicio"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="status-dot" />
              GOVERNANÇA & SOLUÇÕES EMPRESARIAIS
            </div>
            <h1 id="hero-title">
              Estrutura para
              <br />
              crescer.
              <br />
              <span>
                Clareza para
                <br className="desktop-break" /> decidir.
              </span>
            </h1>
            <p className="hero-description">
              Transformamos a complexidade do seu negócio em direção. Conectamos
              estratégia, gestão e pessoas para construir o que vem a seguir.
            </p>
            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => openBriefing()}
              >
                Construa o próximo passo
                <ArrowUpRight size={20} />
              </button>
              <a
                className="hero-explore"
                href="#solucoes"
                aria-label="Explorar soluções"
              >
                <ArrowDown size={19} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="footnote-line" />
              Pessoas no centro. Estratégia em movimento.
            </div>
          </div>
          <div className="hero-art">
            <HeroVisual />
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>ESTRATÉGIA COM ESTRUTURA.</span>
            <span>01 — 04</span>
          </div>
        </section>

        <div className="principles-band">
          <div className="container principles-inner">
            {[
              ["H", "Humanizar", "Pessoas no centro"],
              ["O", "Organizar", "Clareza na gestão"],
              ["L", "Liderar", "Direção compartilhada"],
              ["D", "Desenvolver", "Evolução com propósito"],
            ].map(([initial, title, description]) => (
              <div className="brand-pillar" key={initial}>
                <span className="pillar-initial" aria-hidden="true">
                  {initial}
                </span>
                <span className="pillar-copy">
                  <strong>
                    {title}
                    {initial !== "D" && <span>&</span>}
                  </strong>
                  <small>{description}</small>
                </span>
              </div>
            ))}
          </div>
        </div>

        <section
          id="solucoes"
          className="solutions-section section-space"
          aria-labelledby="solutions-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />O QUE FAZEMOS
                </p>
                <h2 id="solutions-title">
                  Menos complexidade.
                  <br />
                  <span>Mais direção.</span>
                </h2>
              </div>
              <p className="section-description">
                Soluções que respeitam o momento da sua empresa e dão forma ao
                próximo estágio do seu negócio.
              </p>
            </div>
            <div
              className="solution-tabs"
              role="tablist"
              aria-label="Nossas soluções"
            >
              {solutions.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  role="tab"
                  aria-selected={activeSolution === index}
                  aria-controls={`panel-${item.id}`}
                  id={`tab-${item.id}`}
                  tabIndex={activeSolution === index ? 0 : -1}
                  className={`solution-tab ${activeSolution === index ? "active" : ""}`}
                  onClick={() => setActiveSolution(index)}
                  onKeyDown={(event) => tabKey(event, index)}
                >
                  <span className="tab-number">{item.number}</span>
                  {item.label}
                  <ArrowUpRight size={19} />
                </button>
              ))}
            </div>
            <div
              className="solution-panel"
              id={`panel-${selected.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${selected.id}`}
              tabIndex={0}
            >
              <div className="solution-content" key={selected.id}>
                <span className="solution-icon">
                  <SelectedIcon size={27} strokeWidth={1.4} />
                </span>
                <h3>{selected.title}</h3>
                <p>{selected.text}</p>
                <ul>
                  {selected.points.map((point) => (
                    <li key={point}>
                      <Check size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  className="text-button"
                  onClick={() => openBriefing(selected.label)}
                >
                  É disso que minha empresa precisa
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="solution-diagram" aria-hidden="true">
                <span className="diagram-kicker">TUDO SE CONECTA.</span>
                <div className="diagram-orbit">
                  <div className="diagram-center">
                    <SelectedIcon size={35} strokeWidth={1.25} />
                  </div>
                  {selected.diagram.map((label, index) => (
                    <span key={label} className={`diagram-node node-${index}`}>
                      {index === 1 && <span className="node-dot" />}
                      {label}
                    </span>
                  ))}
                  <span className="orbit-point" />
                  <span className="orbit-point point-two" />
                </div>
                <span className="diagram-caption">
                  <span className="status-dot" />
                  {selected.tag}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="como-atuamos"
          className="method-section section-space"
          aria-labelledby="method-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  <span />
                  NOSSO JEITO DE FAZER
                </p>
                <h2 id="method-title">
                  Do contexto à ação.
                  <br />
                  <span>Juntos, em cada etapa.</span>
                </h2>
              </div>
              <p className="section-description">
                Escuta antes da resposta. Método antes da execução. Proximidade
                durante todo o caminho.
              </p>
            </div>
            <div className="method-grid">
              {[
                [
                  "01",
                  "Entender",
                  "Mergulhamos na realidade da sua empresa. Ouvimos, investigamos e identificamos o que realmente precisa de atenção.",
                ],
                [
                  "02",
                  "Estruturar",
                  "Desenhamos o caminho com você. Prioridades claras, responsabilidades definidas e um plano que faz sentido.",
                ],
                [
                  "03",
                  "Transformar",
                  "Colocamos o plano em movimento. Acompanhamos a evolução e ajustamos a rota para construir mudanças consistentes.",
                ],
              ].map(([number, title, description]) => (
                <article className="method-step" key={number}>
                  <div className="step-top">
                    <span>{number}</span>
                    <ArrowUpRight size={23} strokeWidth={1.5} />
                  </div>
                  <h3>
                    {title}
                    <span>.</span>
                  </h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-art" aria-hidden="true">
              <span className="about-small-label">
                A FORÇA ESTÁ NA CONEXÃO.
              </span>
              <div className="brand-constellation">
                <svg
                  className="constellation-lines"
                  viewBox="0 0 480 420"
                  fill="none"
                >
                  <circle cx="240" cy="205" r="140" />
                  <circle cx="240" cy="205" r="178" />
                  <path d="M36 325L95 178L194 74L353 116L430 280L300 366L36 325M95 178L353 116L300 366L194 74M95 178L430 280" />
                  <g>
                    <circle cx="95" cy="178" r="4" />
                    <circle cx="194" cy="74" r="4" />
                    <circle cx="353" cy="116" r="4" />
                    <circle cx="430" cy="280" r="4" />
                    <circle cx="300" cy="366" r="4" />
                    <circle cx="36" cy="325" r="4" />
                  </g>
                </svg>
                <BrainMark className="about-brain" decorative />
                <span className="constellation-word word-humanizar">
                  HUMANIZAR
                </span>
                <span className="constellation-word word-organizar">
                  ORGANIZAR
                </span>
                <span className="constellation-word word-liderar">LIDERAR</span>
                <span className="constellation-word word-desenvolver">
                  DESENVOLVER
                </span>
              </div>
              <span className="about-art-label">
                INTELIGÊNCIA QUE CONECTA. GESTÃO QUE TRANSFORMA.
              </span>
            </div>
            <div className="about-copy">
              <p className="eyebrow">
                <span />
                PRAZER, SOMOS A HOLD
              </p>
              <h2 id="about-title">
                Apoiamos o presente.
                <br />
                <span>Estruturamos o futuro.</span>
              </h2>
              <p>
                Acreditamos que empresas mais bem estruturadas fazem escolhas
                melhores. E que a governança só faz sentido quando aproxima a
                estratégia da vida real.
              </p>
              <p>
                Humanizar, Organizar, Liderar e Desenvolver. A HOLD nasce desse
                encontro: visão de longo prazo com os pés no dia a dia. Uma
                parceria para conectar pessoas e transformar intenção em
                movimento.
              </p>
              <div className="about-signature">
                <BrainMark className="signature-brain" decorative />
                <span>
                  Próximos das pessoas.
                  <br />
                  <strong>Comprometidos com o negócio.</strong>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="faq-section section-space"
          aria-labelledby="faq-title"
        >
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">
                <span />
                CONVERSA ABERTA
              </p>
              <h2 id="faq-title">
                Antes do
                <br />
                <span>próximo passo.</span>
              </h2>
              <p className="faq-intro">
                Algumas respostas para começar
                <br />
                com mais clareza.
              </p>
            </div>
            <div className="faq-list">
              {questions.map((question, index) => (
                <div
                  className={`faq-item ${openQuestion === index ? "is-open" : ""}`}
                  key={question.title}
                >
                  <h3>
                    <button
                      id={`question-${index}`}
                      aria-expanded={openQuestion === index}
                      aria-controls={`answer-${index}`}
                      onClick={() =>
                        setOpenQuestion(openQuestion === index ? null : index)
                      }
                    >
                      {question.title}
                      {openQuestion === index ? (
                        <Minus size={19} />
                      ) : (
                        <Plus size={19} />
                      )}
                    </button>
                  </h3>
                  <div
                    id={`answer-${index}`}
                    role="region"
                    aria-labelledby={`question-${index}`}
                    hidden={openQuestion !== index}
                  >
                    <p>{question.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">
                <span />
                SEU PRÓXIMO CAPÍTULO
              </p>
              <h2 id="contact-title">
                O futuro da sua empresa
                <br />
                merece uma <span>boa conversa.</span>
              </h2>
              <p>Vamos entender o seu momento e construir o próximo passo.</p>
              <button
                className="button button-lime"
                onClick={() => openBriefing()}
              >
                Vamos conversar
                <ArrowUpRight size={20} />
              </button>
              <div className="contact-links">
                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp · +55 22 99288-6582
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
            <div className="contact-arrow" aria-hidden="true">
              <BrainMark className="contact-brain" decorative />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand />
              <p>
                Estrutura para crescer.
                <br />
                Clareza para decidir.
              </p>
            </div>
            <div className="footer-nav">
              <a href="#solucoes">Soluções</a>
              <a href="#como-atuamos">Como atuamos</a>
              <a href="#sobre">A HOLD</a>
              <button onClick={() => openBriefing()}>
                Contato
                <ArrowUpRight size={15} />
              </button>
            </div>
            <a
              className="back-top"
              href="#inicio"
              aria-label="Voltar ao início"
            >
              <ArrowUpRight size={21} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} HOLD. Todos os direitos reservados.
            </span>
            <span>Governança & Soluções Empresariais</span>
            <a className="footer-domain" href="https://www.holdsolution.com">
              holdsolution.com
            </a>
          </div>
        </div>
      </footer>
      <BriefingDialog dialogRef={dialogRef} solution={dialogSolution} />
    </>
  );
}
