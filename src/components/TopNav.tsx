import { Link } from "react-router-dom"
import Logo from "./Logo"

type TopNavProps = {
  backTo: string
  backLabel: string
}

export default function TopNav({ backTo, backLabel }: TopNavProps) {
  return (
    <header className="relative z-10 flex items-center justify-between px-5 py-6 sm:px-10 sm:py-8">
      <Link to="/" aria-label="TrackMarg home">
        <Logo size="sm" />
      </Link>
      <Link
        to={backTo}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-400 transition-colors hover:text-mist-100"
      >
        <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-1">
          ←
        </span>
        {backLabel}
      </Link>
    </header>
  )
}
