import { useState } from "react";
import BrainMark from "./BrainMark.jsx";
import "./BrandLogo.css";

/** Optional assetSrc uses the supplied transparent artwork, with a vector fallback. */
export default function BrandLogo({
  className = "",
  compact = false,
  assetSrc,
  ...props
}) {
  const [failedAsset, setFailedAsset] = useState(null);
  return (
    <span
      className={`hold-brand-logo ${compact ? "hold-brand-logo--compact" : ""} ${className}`.trim()}
      role="img"
      aria-label="hold — Humanizar, Organizar, Liderar e Desenvolver"
      {...props}
    >
      {assetSrc && failedAsset !== assetSrc ? (
        <img
          src={assetSrc}
          alt=""
          className="hold-brand-logo__asset"
          onError={() => setFailedAsset(assetSrc)}
        />
      ) : (
        <>
          <svg
            className="hold-brand-logo__wordmark"
            viewBox="0 0 310 124"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M0 0H19V35C30 26 43 24 54 28C72 33 80 47 80 67V113H61V66C61 52 53 45 40 45C27 45 19 54 19 68V113H0V0Z"
              fill="currentColor"
            />
            <BrainMark x="84" y="12" width="96" height="100" />
            <path d="M186 0H205V113H186V0Z" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M284 0H303V113H284V103C276 111 266 116 253 116C227 116 210 96 210 72C210 47 228 26 253 26C266 26 276 30 284 38V0ZM285 71C285 54 274 44 260 44C242 44 229 56 229 72C229 89 242 99 260 99C274 99 285 89 285 71Z"
              fill="currentColor"
            />
          </svg>
          {!compact && (
            <span className="hold-brand-logo__slogan" aria-hidden="true">
              <span>
                <b>H</b>UMANIZAR&
              </span>
              <span>
                <b>O</b>RGANIZAR&
              </span>
              <span>
                <b>L</b>IDERAR&
              </span>
              <span>
                <b>D</b>ESENVOLVER
              </span>
            </span>
          )}
        </>
      )}
    </span>
  );
}
