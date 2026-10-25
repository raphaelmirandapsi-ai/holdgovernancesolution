import "./BrandPrinciples.css";

const principles = [
  {
    initial: "H",
    number: "01",
    title: "Humanizar",
    text: "Escutar pessoas e entender o contexto para construir relações de confiança.",
  },
  {
    initial: "O",
    number: "02",
    title: "Organizar",
    text: "Dar clareza a processos e responsabilidades para que o trabalho flua.",
  },
  {
    initial: "L",
    number: "03",
    title: "Liderar",
    text: "Alinhar escolhas e mobilizar pessoas em torno de uma direção comum.",
  },
  {
    initial: "D",
    number: "04",
    title: "Desenvolver",
    text: "Transformar aprendizado em evolução contínua para pessoas e negócios.",
  },
];

export default function BrandPrinciples() {
  return (
    <section
      className="brand-principles"
      id="pilares"
      aria-labelledby="brand-principles-title"
    >
      <div className="brand-principles__inner">
        <div className="brand-principles__intro">
          <p className="brand-principles__eyebrow">
            <span aria-hidden="true" />
            O QUE MOVE A HOLD
          </p>
          <h2 id="brand-principles-title">
            Pessoas e estratégia,<br />
            <span>na mesma direção.</span>
          </h2>
        </div>

        <div className="brand-principles__grid">
          {principles.map(({ initial, number, title, text }) => (
            <article className="brand-principles__item" key={initial}>
              <div className="brand-principles__item-top" aria-hidden="true">
                <span className="brand-principles__initial">{initial}</span>
                <span className="brand-principles__number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p className="brand-principles__description">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
