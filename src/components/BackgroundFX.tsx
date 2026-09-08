/**
 * Ambient dark-SaaS backdrop shared by every TrackMarg screen: base navy,
 * a soft blue glow, a faint world-map dot grid, and drifting brand-orange
 * glow blooms. Fixed behind page content; purely decorative.
 */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(58,96,180,0.28) 0%, rgba(58,96,180,0) 60%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden="true">
        <defs>
          <pattern id="tm-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#3a4666" />
          </pattern>
          <radialGradient id="tm-dots-fade" cx="50%" cy="20%" r="75%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="tm-dots-mask">
            <rect width="100%" height="100%" fill="url(#tm-dots-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#tm-dots)" mask="url(#tm-dots-mask)" />
      </svg>

      <div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-[110px] animate-drift"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute -right-24 top-2/3 h-80 w-80 rounded-full bg-azure-500/15 blur-[120px] animate-drift"
        style={{ animationDelay: "-9s" }}
      />

      <div
        className="absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(180deg, rgba(5,7,13,0) 0%, rgba(5,7,13,0.9) 100%)",
        }}
      />
    </div>
  )
}
