import { useState } from "react"
import { Link } from "react-router-dom"
import { MailIcon, MenuIcon } from "../icons"
import Logo from "../Logo"
import ThemeToggle from "./ThemeToggle"
import type { Theme } from "./theme"

const CONTACT_EMAIL = "trackmarg@gmail.com"

export default function Header({
  theme,
  onThemeChange,
  onRequestDemo,
}: {
  theme: Theme
  onThemeChange: (theme: Theme) => void
  onRequestDemo: () => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-30 grid grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 py-5 sm:px-10 sm:py-6">
      <div className="justify-self-start">
        <Logo variant="inline" size="sm" />
      </div>

      <div className="justify-self-center">
        <ThemeToggle theme={theme} onChange={onThemeChange} />
      </div>

      <div className="flex items-center justify-self-end gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onRequestDemo}
          className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/45 sm:px-4 sm:text-sm"
        >
          <span className="hidden sm:inline">Request Demo</span>
          <span className="sm:hidden">Demo</span>
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            →
          </span>
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition-colors duration-200 hover:bg-black/45"
          >
            <MenuIcon className="h-4.5 w-4.5" />
          </button>

          {menuOpen && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-30 cursor-default"
                onClick={() => setMenuOpen(false)}
              />
              <div className="absolute right-0 top-12 z-40 w-60 rounded-2xl border border-white/10 bg-ink-900/95 p-2 text-left shadow-glow-soft backdrop-blur-md">
                <Link
                  to="/login"
                  className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-mist-100 hover:bg-white/5"
                >
                  Log In
                  <span className="text-brand-400" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-mist-100 hover:bg-white/5"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-mist-400" />
                  {CONTACT_EMAIL}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
