/** HOLD's profile brain: a continuous, open outline with a right-hand speech tail. */
export default function BrainMark({
  className = "",
  brainColor = "#68ded5",
  bowlColor = "#eef9f8",
  bowl = true,
  decorative = true,
  title = "HOLD: humanizar, organizar, liderar e desenvolver",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 124"
      className={`hold-brain-mark ${className}`.trim()}
      fill="none"
      aria-hidden={decorative ? "true" : undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
      focusable="false"
      {...props}
    >
      <g
        stroke={brainColor}
        strokeWidth="9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 63H48C52 63 55 64 59 67L83 85V63H105C117 63 120 48 105 34C106 21 94 10 79 15C70 1 53 1 42 15C29 11 18 21 20 33C5 37-1 60 18 63Z" />
        <path d="M20 33C19 40 25 46 28 48" />
        <path d="M39 31C48 35 51 42 49 49C47 58 43 63 36 63" />
        <path d="M40 32L57 20" />
        <path d="M49 47C61 53 74 45 83 32" />
        <path d="M69 46L80 55" />
        <path d="M64 33C68 23 71 18 79 15" />
        <path d="M96 43L105 34" />
        <path d="M96 63L104 54" />
      </g>
      {bowl && (
        <path
          d="M3 76H25C26 94 40 103 60 103C80 103 94 94 95 76H117C115 105 92 124 60 124C28 124 5 105 3 76Z"
          fill={bowlColor}
        />
      )}
    </svg>
  );
}
