import { useState } from "react"
import { Button } from "../Button"
import { PlayIcon } from "../icons"
import OurStoryModal from "./OurStoryModal"
import { heroFaintTextClass, heroMutedTextClass, heroTextClass, heroTextShadow, type Theme } from "./theme"
import TransportStatusCard from "./TransportStatusCard"

export default function HeroContent({ theme }: { theme: Theme }) {
  const [storyOpen, setStoryOpen] = useState(false)
  const shadow = { textShadow: heroTextShadow(theme) }

  return (
    // Sized against viewport HEIGHT (clamp with dvh), not just width - a 1366x768 laptop and
    // a 1366x1024 tablet share a width breakpoint but not the vertical room, and the fixed
    // lg:/xl: sizing this replaced sized for the second while landing on both, overlapping
    // everything below it on the first. min() keeps it from over-growing on tall+narrow too.
    // lg:max-w-3xl (not just md:max-w-2xl) specifically so the CTA row has enough
    // room for the On the Move card to sit inline next to Watch the Full Story
    // instead of wrapping - the paragraph/tagline below have their own narrower
    // max-widths, so this only widens what the CTA row can use.
    <div className="max-w-xl px-6 pt-[clamp(0.75rem,3dvh,2rem)] sm:px-10 md:max-w-2xl lg:max-w-3xl">
      <div className="flex items-center gap-3">
        <span
          style={shadow}
          className={`text-[11px] font-bold uppercase tracking-[0.22em] sm:text-xs ${heroFaintTextClass}`}
        >
          Built for a Moving World
        </span>
        <span className="h-px w-8 bg-white/30" />
      </div>

      <h1
        style={shadow}
        className={`mt-3 text-[clamp(2.25rem,7dvh,4.75rem)] font-bold leading-[0.94] tracking-tight ${heroTextClass}`}
      >
        From Movement
        <br />
        to Management.
        <br />
        <span className="text-brand-500">Without Limits.</span>
      </h1>

      <p style={shadow} className={`mt-4 max-w-md text-base leading-relaxed sm:text-lg ${heroMutedTextClass}`}>
        Track vehicles. Manage excavators. Reconcile accounts.
        <br className="hidden sm:block" /> All in one intelligent platform.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
        <Button to="/get-started">
          Get Started
          <span aria-hidden="true">→</span>
        </Button>

        <button
          type="button"
          onClick={() => setStoryOpen(true)}
          style={shadow}
          className={`group flex items-center gap-2.5 text-sm font-semibold sm:text-base ${heroTextClass}`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 transition-colors duration-200 group-hover:border-white/70">
            <PlayIcon className="h-3.5 w-3.5" />
          </span>
          Watch the Full Story
        </button>

        <TransportStatusCard />
      </div>

      <div className="mt-5 max-w-[13rem] border-t border-white/15 pt-3">
        <span
          style={shadow}
          className={`text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] ${heroFaintTextClass}`}
        >
          Driving a Stronger Tomorrow
        </span>
      </div>

      {storyOpen && <OurStoryModal onClose={() => setStoryOpen(false)} />}
    </div>
  )
}
