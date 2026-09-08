import { Link } from "react-router-dom"
import CardConnector from "./CardConnector"
import { ChevronRightIcon, ExcavatorIcon } from "../icons"

export default function MachineStatusCard() {
  return (
    <Link
      to="/get-started"
      className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-950/55 px-4 py-3 shadow-glow-soft backdrop-blur-md transition-colors duration-200 hover:bg-ink-950/70"
    >
      <CardConnector className="text-brand-400" />
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
        <ExcavatorIcon className="h-4.5 w-4.5" />
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 shrink-0 animate-blink rounded-full bg-brand-400" />
          <span className="text-xs font-semibold text-white sm:text-sm">Machine Active</span>
        </div>
        <p className="mt-0.5 text-[11px] text-mist-300 sm:text-xs">Excavator HX-200</p>
      </div>
      <ChevronRightIcon className="ml-1 h-4 w-4 shrink-0 text-mist-400 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  )
}
