import { useState, type FormEvent } from "react"
import { systems } from "../data/systems"

const DEMO_FORM_ENDPOINT = import.meta.env.VITE_DEMO_FORM_ENDPOINT
const FALLBACK_EMAIL = "trackmarg@gmail.com"

type Status = "idle" | "submitting" | "sent" | "opened-email" | "error"

function buildSummary(fields: {
  name: string
  business: string
  phone: string
  systemNames: string[]
  customNeed: string
}) {
  const lines = [
    `Name: ${fields.name}`,
    `Business: ${fields.business}`,
    `Phone: ${fields.phone}`,
    `Interested systems: ${fields.systemNames.length ? fields.systemNames.join(", ") : "None selected"}`,
  ]
  if (fields.customNeed.trim()) lines.push(`Personalized needs: ${fields.customNeed.trim()}`)
  return lines.join("\n")
}

export default function RequestDemoModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("")
  const [business, setBusiness] = useState("")
  const [phone, setPhone] = useState("")
  const [selected, setSelected] = useState<string[]>([])
  const [customNeed, setCustomNeed] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [error, setError] = useState<string | null>(null)

  const toggleSystem = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const canSubmit = name.trim() !== "" && business.trim() !== "" && phone.trim() !== "" && status !== "submitting"

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return

    const systemNames = selected.map((id) => systems.find((s) => s.id === id)?.name ?? id)
    const summary = buildSummary({ name, business, phone, systemNames, customNeed })

    // No form-service endpoint configured yet: fall back to a pre-filled mailto so the request
    // still reaches trackmarg@gmail.com, just via the visitor's own email app instead of
    // silently. Swap in VITE_DEMO_FORM_ENDPOINT (see .env.example) to submit silently instead.
    if (!DEMO_FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Demo request — ${business}`)
      const body = encodeURIComponent(summary)
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`
      setStatus("opened-email")
      return
    }

    setStatus("submitting")
    setError(null)
    try {
      const res = await fetch(DEMO_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          business,
          phone,
          systemsInterested: systemNames.join(", ") || "None selected",
          personalizedNeeds: customNeed.trim(),
          summary,
        }),
      })
      if (!res.ok) throw new Error("submit-failed")
      setStatus("sent")
    } catch {
      setError("Something went wrong sending that. Please try again, or email us directly.")
      setStatus("error")
    }
  }

  const done = status === "sent" || status === "opened-email"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Request a demo"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-ink-900 p-6 shadow-glow-soft sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">Request a Demo</h2>
            <p className="mt-1 text-sm text-mist-400">Tell us a bit about your business and we'll reach out.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-1.5 text-mist-400 transition-colors hover:bg-white/10 hover:text-white"
          >
            ✕
          </button>
        </div>

        {done ? (
          <div className="mt-6 rounded-xl border border-brand-500/30 bg-brand-500/10 p-5 text-center">
            <p className="font-semibold text-white">
              {status === "sent" ? "Thanks — your request is in!" : "Almost there!"}
            </p>
            <p className="mt-1.5 text-sm text-mist-300">
              {status === "sent"
                ? "We've received your details and will be in touch soon."
                : "Your email app should now be open with your request pre-filled — just hit send."}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-lg border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="demo-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-mist-500">
                Name
              </label>
              <input
                id="demo-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-mist-500 focus:border-brand-500/60 focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="demo-business" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-mist-500">
                Place of Business
              </label>
              <input
                id="demo-business"
                required
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-mist-500 focus:border-brand-500/60 focus:outline-none"
                placeholder="Business name & city"
              />
            </div>

            <div>
              <label htmlFor="demo-phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-mist-500">
                Phone Number
              </label>
              <input
                id="demo-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-mist-500 focus:border-brand-500/60 focus:outline-none"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-mist-500">
                System(s) you're interested in
              </span>
              <div className="flex flex-wrap gap-2">
                {systems.map((system) => {
                  const active = selected.includes(system.id)
                  return (
                    <button
                      key={system.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleSystem(system.id)}
                      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                        active
                          ? "border-brand-500 bg-brand-500/15 text-brand-300"
                          : "border-white/10 bg-white/5 text-mist-300 hover:bg-white/10"
                      }`}
                    >
                      {system.name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div>
              <label htmlFor="demo-custom" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-mist-500">
                Want something personalized? (optional)
              </label>
              <textarea
                id="demo-custom"
                value={customNeed}
                onChange={(e) => setCustomNeed(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-mist-500 focus:border-brand-500/60 focus:outline-none"
                placeholder="Tell us what you'd need in a custom system"
              />
            </div>

            {error && <p className="text-sm font-medium text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 w-full rounded-xl bg-gradient-to-b from-brand-400 to-brand-600 px-6 py-3 text-base font-semibold text-white shadow-glow-brand transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "submitting" ? "Sending…" : "Submit Request"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
