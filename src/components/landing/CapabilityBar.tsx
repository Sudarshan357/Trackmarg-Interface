import { BarChartIcon, CloudIcon, DevicesIcon, GlobeIcon } from "../icons"

const ITEMS = [
  { icon: GlobeIcon, title: "Built for Bharat.", body: "Ready for the World." },
  { icon: CloudIcon, title: "Cloud Access", body: "Access anytime, anywhere" },
  { icon: DevicesIcon, title: "Multi-Device", body: "Use on desktop, tablet or mobile" },
  { icon: BarChartIcon, title: "Sustainable Operations", body: "for a Brighter Tomorrow." },
]

export default function CapabilityBar() {
  return (
    // Static (in normal flow, right after the mobile card stack) below lg, where there's no
    // reserved space to overlay into - only becomes a bottom overlay on the spacious desktop
    // hero, where the image already extends the full viewport height behind it.
    <div className="pointer-events-none relative z-20 mt-6 bg-gradient-to-t from-black/55 via-black/20 to-transparent pt-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
      <div className="pointer-events-auto mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-4 px-5 py-4 sm:px-8 lg:grid-cols-4 lg:gap-x-0 lg:py-5">
        {ITEMS.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            className={`flex items-center gap-3 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : ""}`}
          >
            <Icon className="h-4 w-4 shrink-0 text-mist-300" />
            <p className="min-w-0 text-[11px] leading-snug sm:text-xs">
              <span className="block font-semibold text-white drop-shadow-sm">{title}</span>
              <span className="block text-mist-200 drop-shadow-sm">{body}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
