import type { ReactNode } from "react"
import { Link } from "react-router-dom"

type CommonProps = {
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & {
  to?: string
  onClick?: () => void
  variant?: "primary" | "outline"
  type?: "button" | "submit"
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-b from-brand-400 to-brand-600 text-white shadow-glow-brand hover:from-brand-300 hover:to-brand-500 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-ink-500 bg-white/5 text-mist-100 backdrop-blur-sm hover:border-brand-500/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
}

export function Button({ children, className = "", to, onClick, variant = "primary", type = "button" }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export function ArrowLink({
  children,
  className = "",
  to,
  onClick,
}: CommonProps & { to?: string; onClick?: () => void }) {
  const classes = `group inline-flex items-center gap-1.5 font-semibold text-brand-400 transition-colors hover:text-brand-300 ${className}`
  const content = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
