export default function OurStoryModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Our story"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-ink-900 p-6 text-left shadow-glow-soft sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Our Story</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-1.5 text-mist-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-mist-300 sm:text-base">
          <p>
            TrackMarg started with a simple frustration: running a transport or excavation
            business in India means juggling a truck's location, a machine's maintenance
            schedule and a partner's ledger across three different notebooks - or three
            different apps that don't talk to each other.
          </p>
          <p>
            We built one platform instead. Whatever moves your business - a fleet on the
            highway, a machine on a site, or money between partners - TrackMarg tracks it,
            manages it, and helps it grow.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-gradient-to-b from-brand-400 to-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-brand sm:text-base"
        >
          Got it
        </button>
      </div>
    </div>
  )
}
