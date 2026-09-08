type LogoProps = {
  /** icon-only mark */
  variant?: "mark" | "inline" | "stacked"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const MARK_SIZES: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 28,
  md: 36,
  lg: 48,
  xl: 72,
}

const WORDMARK_SIZES: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
}

export function LogoMark({ size = "md", className = "" }: Pick<LogoProps, "size" | "className">) {
  const px = MARK_SIZES[size]
  return (
    <svg
      width={px}
      height={(px * 140) / 120}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tm-pin-fill" x1="20" y1="10" x2="100" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c4cbdc" />
        </linearGradient>
        <mask id="tm-pin-hole">
          <rect width="120" height="140" fill="#ffffff" />
          <circle cx="60" cy="52" r="19" fill="#000000" />
        </mask>
      </defs>

      <path
        d="M60 6 C86 6 106 26 106 51 C106 84 60 134 60 134 C60 134 14 84 14 51 C14 26 34 6 60 6 Z"
        fill="url(#tm-pin-fill)"
        mask="url(#tm-pin-hole)"
      />

      <path
        d="M30,102 C12,90 8,66 20,53 C27,45 36,42 44,44"
        stroke="#ff7a1e"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="0.5 11"
        fill="none"
      />

      <path
        d="M0,-3.5 L25,-3.5 L25,-9 L46,0 L25,9 L25,3.5 L0,3.5 Z"
        fill="#ff7a1e"
        transform="translate(70,44) rotate(-50)"
      />
    </svg>
  )
}

export default function Logo({ variant = "inline", size = "md", className = "" }: LogoProps) {
  if (variant === "mark") {
    return <LogoMark size={size} className={className} />
  }

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-3 ${className}`}>
        <LogoMark size={size === "sm" ? "lg" : "xl"} />
        <div className="flex flex-col items-center gap-2">
          <span className={`font-extrabold tracking-tight ${WORDMARK_SIZES[size]}`}>
            <span className="text-white">Track</span>
            <span className="text-brand-500">Marg</span>
          </span>
          <span className="h-[3px] w-10 rounded-full bg-brand-500" />
        </div>
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} />
      <span className={`font-extrabold tracking-tight ${WORDMARK_SIZES[size]}`}>
        <span className="text-white">Track</span>
        <span className="text-brand-500">Marg</span>
      </span>
    </div>
  )
}
