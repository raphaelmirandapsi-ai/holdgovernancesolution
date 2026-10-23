import "./HeroVisual.css";

export default function HeroVisual() {
  return (
    <div
      className="hold-visual"
      role="img"
      aria-label="Visão integrada da HOLD: governança, estratégia e gestão conectadas para transformar decisões em próximos passos."
    >
      <div className="hold-visual__content" aria-hidden="true">
        <div className="hold-visual__heading">
          <span className="hold-visual__live-dot" />
          UM NOVO PONTO DE VISTA
        </div>
        <div className="hold-visual__coordinates">VISÃO / AÇÃO</div>

        <svg className="hold-visual__diagram" viewBox="0 0 500 490" fill="none">
          <defs>
            <pattern
              id="hold-visual-grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path d="M32 0H0V32" stroke="currentColor" strokeWidth="0.65" />
            </pattern>
          </defs>
          <rect
            width="500"
            height="490"
            fill="url(#hold-visual-grid)"
            opacity=".13"
          />
          <path
            d="M0 246H500M250 0V490"
            stroke="currentColor"
            strokeOpacity=".12"
          />
          <circle
            cx="250"
            cy="246"
            r="174"
            stroke="currentColor"
            strokeOpacity=".12"
          />
          <circle
            cx="250"
            cy="246"
            r="124"
            stroke="currentColor"
            strokeOpacity=".27"
          />
          <circle
            cx="250"
            cy="246"
            r="84"
            stroke="currentColor"
            strokeOpacity=".18"
            strokeDasharray="3 6"
          />
          <path
            d="M250 72A174 174 0 0 1 424 246"
            stroke="#d9ef8b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M126 246A124 124 0 0 0 250 370"
            stroke="#d9ef8b"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M250 162V126H325M166 246H92V337M334 246H394V346"
            stroke="#b4c8b4"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <circle cx="250" cy="72" r="4" fill="#d9ef8b" />
          <circle cx="424" cy="246" r="4" fill="#d9ef8b" />
          <circle cx="126" cy="246" r="4" fill="#d9ef8b" />
          <circle cx="250" cy="370" r="4" fill="#d9ef8b" />
          <path
            d="M40 83H49M44.5 78.5V87.5M451 403H460M455.5 398.5V407.5"
            stroke="currentColor"
            strokeOpacity=".5"
          />
          <circle
            cx="250"
            cy="246"
            r="62"
            fill="#214a3c"
            stroke="#73966a"
            strokeOpacity=".5"
          />
          <rect x="213" y="209" width="74" height="74" rx="16" fill="#d9ef8b" />
          <path
            d="M232 226V266M268 226V266M232 246H268"
            stroke="#193f32"
            strokeWidth="11"
          />
          <path d="M257 239H278" stroke="#193f32" strokeWidth="2" />
          <text
            x="250"
            y="317"
            textAnchor="middle"
            fill="#d7e2d1"
            fontSize="9"
            letterSpacing="3"
            fontFamily="inherit"
          >
            HOLD / CONECTA
          </text>
          <text
            x="94"
            y="179"
            transform="rotate(-55 94 179)"
            fill="#a6bea8"
            fontSize="8"
            letterSpacing="2"
            fontFamily="inherit"
          >
            GOVERNANÇA
          </text>
          <text
            x="364"
            y="297"
            transform="rotate(-64 364 297)"
            fill="#a6bea8"
            fontSize="8"
            letterSpacing="2"
            fontFamily="inherit"
          >
            ESTRATÉGIA
          </text>
        </svg>

        <div className="hold-visual__card hold-visual__card--vision">
          <div className="hold-visual__card-top">
            <span className="hold-visual__icon">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                <path
                  d="m3 7 7-4 7 4-7 4-7-4Zm0 6 7 4 7-4M3 10l7 4 7-4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="hold-visual__tiny-label">CONECTAR</span>
          </div>
          <strong>Visão integrada</strong>
          <span className="hold-visual__card-note">
            O todo faz a diferença.
          </span>
        </div>

        <div className="hold-visual__card hold-visual__card--decisions">
          <span className="hold-visual__tiny-label">DO PLANO À PRÁTICA</span>
          <strong>
            <span>Decisões alinhadas</span>
            <span className="hold-visual__check">
              <svg viewBox="0 0 12 12" fill="none">
                <path
                  d="m3 6 2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </strong>
          <div className="hold-visual__progress">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className="hold-visual__next">
          <span className="hold-visual__next-icon">
            <svg viewBox="0 0 20 20" fill="none">
              <path
                d="M5 15 15 5M5 5h10v10"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            Clareza no
            <br />
            <strong>próximo passo.</strong>
          </span>
        </div>

        <div className="hold-visual__bottom">
          <span>MENOS COMPLEXIDADE. MAIS DIREÇÃO.</span>
          <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
            <path
              d="M0 6h30m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
