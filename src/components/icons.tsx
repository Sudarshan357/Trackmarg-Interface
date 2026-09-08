type IconProps = { className?: string }

const shared = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M2 8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8H2z" />
      <path d="M14 10h3.5a1 1 0 0 1 .8.4l2.2 2.93a1 1 0 0 1 .2.6V16a1 1 0 0 1-1 1H14" />
      <circle cx="6.5" cy="17.5" r="1.75" />
      <circle cx="16.5" cy="17.5" r="1.75" />
      <path d="M9 17.5h4" />
    </svg>
  )
}

export function ExcavatorIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="2" y="16" width="9" height="3" rx="1" />
      <rect x="4" y="11" width="6" height="5" rx="1" />
      <path d="M9 12.5 18 7" />
      <path d="M18 7 21 10.5 17.5 12.5 15.5 9.8Z" />
    </svg>
  )
}

export function LedgerIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M12 6c-1.8-1.2-4.2-1.7-6.5-1.2a1 1 0 0 0-.8 1v11.6c0 .6.5 1 1 1a1 1 0 0 0 .2 0c2-.4 4.2 0 5.8 1.1" />
      <path d="M12 6c1.8-1.2 4.2-1.7 6.5-1.2a1 1 0 0 1 .8 1v11.6c0 .6-.5 1-1 1a1 1 0 0 1-.2 0c-2-.4-4.2 0-5.8 1.1" />
      <path d="M12 6v13.5" />
    </svg>
  )
}

export function LedgerProIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h3" />
      <path d="M8 17v-4M12 17v-7M16 17v-2" />
    </svg>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 7 8.5-7" />
    </svg>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M12 3.5 4.5 6v5.2c0 4.6 3.2 7.5 7.5 9.3 4.3-1.8 7.5-4.7 7.5-9.3V6Z" />
      <path d="m8.7 12 2.2 2.2 4.4-4.4" />
    </svg>
  )
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M7 18a4.5 4.5 0 0 1-.6-8.96 5.5 5.5 0 0 1 10.6-1.3A4 4 0 0 1 17 18H7Z" />
    </svg>
  )
}

export function DevicesIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="13" height="9.5" rx="1.3" />
      <path d="M6 17h5" />
      <rect x="17" y="9" width="5" height="10" rx="1.2" />
    </svg>
  )
}

export function BarChartIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M5 20V11M12 20V4M19 20v-7" />
    </svg>
  )
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <rect x="4.5" y="3" width="15" height="18" rx="1.6" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  )
}

export function PieChartIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5H12Z" />
      <path d="M15.5 3.9A8.52 8.52 0 0 1 20.1 8.5H12Z" />
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5v7l6-3.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.3M12 19.2v2.3M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.3M19.2 12h2.3M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
    </svg>
  )
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2Z" />
    </svg>
  )
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.2 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.2-3.7-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  )
}

export function CheckBadgeIcon({ className }: IconProps) {
  return (
    <svg {...shared} className={className} aria-hidden="true">
      <path d="M9 12.5 11 14.5 15.5 9.5" />
      <path d="M12 2.5c1 1.2 2.4 1.4 3.8 1 .7 1.3 1.8 2.1 3.2 2.3-.2 1.4.2 2.7 1.2 3.7-1 1-1.4 2.3-1.2 3.7-1.4.2-2.5 1-3.2 2.3-1.4-.4-2.8-.2-3.8 1-1-1.2-2.4-1.4-3.8-1-.7-1.3-1.8-2.1-3.2-2.3.2-1.4-.2-2.7-1.2-3.7 1-1 1.4-2.3 1.2-3.7 1.4-.2 2.5-1 3.2-2.3 1 .4 2.8.2 3.8-1Z" />
    </svg>
  )
}
