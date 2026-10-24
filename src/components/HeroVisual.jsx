import { useId } from "react";
import BrainMark from "./BrainMark.jsx";
import "./HeroVisual.css";

export default function HeroVisual() {
  const dotsId = `hold-neural-dots-${useId().replace(/:/g, "")}`;
  return (
    <div
      className="hold-visual"
      role="img"
      aria-label="O cérebro da HOLD conecta pessoas, visão integrada e decisões alinhadas. Humanizar, organizar, liderar e desenvolver."
    >
      <div className="hold-visual__content" aria-hidden="true">
        <div className="hold-visual__heading">
          <span className="hold-visual__live-dot" />
          PESSOAS NO CENTRO.
        </div>
        <div className="hold-visual__coordinates">HOLD / CONECTA</div>

        <svg className="hold-visual__diagram" viewBox="0 0 500 490" fill="none">
          <defs>
            <pattern
              id={dotsId}
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r=".6" fill="#68ded5" opacity=".22" />
            </pattern>
          </defs>
          <rect width="500" height="490" fill={`url(#${dotsId})`} />
          <g stroke="#68ded5" strokeWidth=".7" strokeOpacity=".14">
            <path d="M-70 437C70 305 258 510 566 264M-65 411C82 289 252 480 552 246M-60 385C92 273 249 451 538 228M-55 359C103 257 245 421 524 210M-50 333C114 241 242 392 510 192M-45 307C125 225 238 362 496 174M-40 281C136 209 235 333 482 156" />
            <path d="M17 466C77 357 83 277 88 208M64 479C118 365 125 289 125 213M111 490C160 381 168 306 162 222M158 499C203 392 212 317 199 230M205 508C246 405 256 333 236 239M252 517C289 418 300 345 273 247M299 526C332 432 344 358 310 256M346 535C375 444 388 371 347 264M393 544C418 457 432 383 384 273M440 553C461 469 476 396 421 281" />
          </g>
          <g
            stroke="#68ded5"
            strokeWidth="1"
            strokeOpacity=".48"
            strokeLinecap="round"
          >
            <path d="M99 244C93 198 145 139 203 124C256 110 318 124 358 152" />
            <path d="M272 275C309 291 340 316 384 338" />
            <path d="M158 279C135 302 117 324 94 351" />
            <path d="M327 195C360 205 392 227 415 258" strokeDasharray="2 5" />
          </g>
          <g fill="#68ded5">
            <circle cx="99" cy="244" r="3" />
            <circle cx="203" cy="124" r="3" />
            <circle cx="358" cy="152" r="3" />
            <circle cx="384" cy="338" r="3" />
            <circle cx="94" cy="351" r="3" />
            <circle cx="415" cy="258" r="2.5" />
          </g>
          <g fill="#68ded5" opacity=".34">
            <circle cx="53" cy="365" r="2" />
            <circle cx="129" cy="384" r="2" />
            <circle cx="230" cy="392" r="2" />
            <circle cx="333" cy="369" r="2" />
            <circle cx="425" cy="327" r="2" />
            <circle cx="472" cy="291" r="2" />
          </g>
          <path
            d="M40 83H49M44.5 78.5V87.5M451 403H460M455.5 398.5V407.5"
            stroke="#68ded5"
            strokeOpacity=".25"
          />
        </svg>

        <div className="hold-visual__brain">
          <BrainMark />
        </div>

        <div className="hold-visual__card hold-visual__card--vision">
          <div className="hold-visual__card-top">
            <span className="hold-visual__icon">
              <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 10c4-6 10-6 14 0-4 6-10 6-14 0Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
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
          <span>HUMANIZAR. ORGANIZAR. LIDERAR. DESENVOLVER.</span>
          <svg width="24" height="12" viewBox="0 0 32 12" fill="none">
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
