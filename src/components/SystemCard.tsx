import { Link } from "react-router-dom"
import { resolveExternalUrl, type SystemDef } from "../data/systems"

type SystemCardProps = {
  system: SystemDef
  to: string
  mode: "onboarding" | "login"
}

export default function SystemCard({ system, to, mode }: SystemCardProps) {
  const Icon = system.icon
  const externalUrl = resolveExternalUrl(system, mode)
  const className = `group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.07] sm:p-6 ${system.accent.ring} ${system.accent.glow}`

  const content = (
    <>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${system.accent.iconBg}`}
      >
        <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${system.accent.iconText}`} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-white sm:text-lg">{system.name}</h3>
        <p className="mt-1 text-sm leading-snug text-mist-400">{system.description}</p>
      </div>

      <span
        aria-hidden="true"
        className="shrink-0 text-xl text-mist-500 transition-all duration-200 group-hover:translate-x-1 group-hover:text-brand-400"
      >
        →
      </span>
    </>
  )

  if (externalUrl) {
    return (
      <a href={externalUrl} rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  )
}
