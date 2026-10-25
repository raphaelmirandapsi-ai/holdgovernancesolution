import { useId } from "react";
import BrandLogo from "./BrandLogo.jsx";
import BrainMark from "./BrainMark.jsx";
import "./HeroVisual.css";

export default function HeroVisual() {
  const fadeId = `hold-connections-${useId().replace(/:/g, "")}`;

  return (
    <div
      className="hold-visual"
      role="img"
      aria-label="HOLD. Humanizar, Organizar, Liderar e Desenvolver. Pessoas, gestão e estratégia conectadas."
    >
      <div className="hold-visual__scene" aria-hidden="true">
        <svg className="hold-visual__network" viewBox="0 0 600 580" fill="none">
          <defs>
            <linearGradient id={fadeId} x1="80" y1="500" x2="570" y2="240" gradientUnits="userSpaceOnUse">
              <stop stopColor="#68ded5" stopOpacity="0" />
              <stop offset=".65" stopColor="#68ded5" stopOpacity=".35" />
              <stop offset="1" stopColor="#68ded5" stopOpacity=".08" />
            </linearGradient>
          </defs>
          <g stroke={`url(#${fadeId})`} strokeWidth=".8">
            {Array.from({ length: 18 }, (_, index) => (
              <path
                key={index}
                d={`M-40 ${455 + index * 8}C120 ${270 + index * 13} 295 ${680 - index * 5} 650 ${270 + index * 7}`}
              />
            ))}
          </g>
          <g stroke="#68ded5" strokeOpacity=".16" strokeWidth=".7">
            <circle cx="406" cy="218" r="172" />
            <circle cx="406" cy="218" r="218" />
            <path d="M318 60L519 111L570 270L456 403L271 352L215 195L318 60M318 60L456 403M215 195L519 111L271 352L570 270" />
          </g>
          <g fill="#68ded5" fillOpacity=".65">
            <circle cx="318" cy="60" r="3" />
            <circle cx="519" cy="111" r="3" />
            <circle cx="570" cy="270" r="3" />
            <circle cx="456" cy="403" r="3" />
            <circle cx="271" cy="352" r="3" />
            <circle cx="215" cy="195" r="3" />
          </g>
        </svg>

        <BrainMark className="hold-visual__watermark" decorative />

        <div className="hold-visual__topline">
          <span>CONEXÕES QUE TRANSFORMAM</span>
          <span className="hold-visual__cross">+</span>
        </div>

        <div className="hold-visual__identity">
          <BrandLogo assetSrc="/brand/hold-logo.svg" />
          <div className="hold-visual__identity-rule" />
          <p>
            Inteligência para conectar.
            <br />
            <span>Estrutura para transformar.</span>
          </p>
        </div>

        <div className="hold-visual__bottomline">
          <span>PESSOAS</span>
          <span className="hold-visual__connector" />
          <span>GESTÃO</span>
          <span className="hold-visual__connector" />
          <span>ESTRATÉGIA</span>
        </div>
      </div>
    </div>
  );
}
