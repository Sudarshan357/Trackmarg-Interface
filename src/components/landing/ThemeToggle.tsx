import { MoonIcon, SunIcon } from "../icons"
import type { Theme } from "./theme"

export default function ThemeToggle({
  theme,
  onChange,
}: {
  theme: Theme
  onChange: (theme: Theme) => void
}) {
  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/30 p-1 backdrop-blur-md"
    >
      <button
        type="button"
        aria-pressed={theme === "day"}
        aria-label="Day theme"
        onClick={() => onChange("day")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all duration-500 sm:px-3 sm:text-sm ${
          theme === "day" ? "bg-white text-ink-950 shadow-sm" : "text-white/70 hover:text-white"
        }`}
      >
        <span className="hidden sm:inline">Day</span>
        <SunIcon className={`h-3.5 w-3.5 ${theme === "day" ? "text-brand-500" : ""}`} />
      </button>
      <button
        type="button"
        aria-pressed={theme === "night"}
        aria-label="Night theme"
        onClick={() => onChange("night")}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all duration-500 sm:px-3 sm:text-sm ${
          theme === "night" ? "bg-white text-ink-950 shadow-sm" : "text-white/70 hover:text-white"
        }`}
      >
        <span className="hidden sm:inline">Night</span>
        <MoonIcon className={`h-3.5 w-3.5 ${theme === "night" ? "text-azure-500" : ""}`} />
      </button>
    </div>
  )
}
