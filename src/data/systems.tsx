import type { ComponentType } from "react"
import { ExcavatorIcon, LedgerIcon, LedgerProIcon, TruckIcon } from "../components/icons"

export type SystemAccent = {
  iconBg: string
  iconText: string
  ring: string
  glow: string
}

export type SystemDef = {
  id: string
  name: string
  description: string
  icon: ComponentType<{ className?: string }>
  accent: SystemAccent
  /**
   * Live deployment to hand off to. When set, TrackMarg sends the user straight
   * there instead of the "coming soon" stub. A plain string is used as-is (the
   * app's own entry screen handles both onboarding and login itself, e.g.
   * Ledger+'s welcome screen). A function receives which TrackMarg flow sent the
   * user, for a system whose entry screen needs to be told which one to open —
   * e.g. Transport defaults to a login form and needs a hint to open signup
   * instead when the user came from Get Started.
   */
  externalUrl?: string | ((mode: "onboarding" | "login") => string)
}

export function resolveExternalUrl(
  system: SystemDef,
  mode: "onboarding" | "login",
): string | undefined {
  if (!system.externalUrl) return undefined
  return typeof system.externalUrl === "function" ? system.externalUrl(mode) : system.externalUrl
}

export const systems: SystemDef[] = [
  {
    id: "transport",
    name: "Transport Management",
    description: "Manage vehicles, trips, drivers, expenses and billing.",
    icon: TruckIcon,
    accent: {
      iconBg: "bg-brand-500/15",
      iconText: "text-brand-400",
      ring: "group-hover:border-brand-500/50",
      glow: "group-hover:shadow-glow-brand",
    },
    // The app's own entry screen (AuthPage.tsx) always defaults to its login form and
    // has no neutral "choose" screen of its own, unlike Ledger+ - so it needs to be told
    // which TrackMarg flow sent the user here, or Get Started would land on Login too.
    externalUrl: (mode) =>
      `https://shivam-transport.onrender.com/?mode=${mode === "onboarding" ? "signup" : "login"}`,
  },
  {
    id: "excavator",
    name: "Excavator Management",
    description: "Track machines, operators, services, diesel and maintenance.",
    icon: ExcavatorIcon,
    accent: {
      iconBg: "bg-amber-400/15",
      iconText: "text-amber-400",
      ring: "group-hover:border-amber-400/50",
      glow: "group-hover:shadow-[0_8px_30px_-4px_rgba(251,191,36,0.35)]",
    },
    externalUrl: "https://excavator.trackmarg.in",
  },
  {
    id: "ledger-plus",
    name: "Ledger+",
    description: "Partnership and business ledger management.",
    icon: LedgerIcon,
    accent: {
      iconBg: "bg-sky-400/15",
      iconText: "text-sky-400",
      ring: "group-hover:border-sky-400/50",
      glow: "group-hover:shadow-[0_8px_30px_-4px_rgba(56,189,248,0.35)]",
    },
    externalUrl: "https://ledger.trackmarg.in",
  },
  {
    id: "ledger-pro",
    name: "Ledger Pro",
    description: "Advanced business management, customers, jobs, billing and reports.",
    icon: LedgerProIcon,
    accent: {
      iconBg: "bg-violet-400/15",
      iconText: "text-violet-400",
      ring: "group-hover:border-violet-400/50",
      glow: "group-hover:shadow-[0_8px_30px_-4px_rgba(167,139,250,0.35)]",
    },
  },
]

export function getSystem(id: string | undefined) {
  return systems.find((s) => s.id === id)
}
