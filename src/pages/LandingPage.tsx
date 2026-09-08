import { useState } from "react"
import { ArrowLink } from "../components/Button"
import CapabilityBar from "../components/landing/CapabilityBar"
import Header from "../components/landing/Header"
import HeroContent from "../components/landing/HeroContent"
import IndiaNetwork from "../components/landing/IndiaNetwork"
import MachineStatusCard from "../components/landing/MachineStatusCard"
import ParallaxBackground from "../components/landing/ParallaxBackground"
import { ParallaxLayer, ParallaxScene } from "../components/landing/ParallaxScene"
import { defaultThemeForTime, type Theme } from "../components/landing/theme"
import useSpaciousHero from "../components/landing/useSpaciousHero"
import RequestDemoModal from "../components/RequestDemoModal"

export default function LandingPage() {
  const [theme, setTheme] = useState<Theme>(defaultThemeForTime)
  const [demoOpen, setDemoOpen] = useState(false)
  const spacious = useSpaciousHero()

  return (
    <div className="relative min-h-svh overflow-hidden bg-ink-950">
      <ParallaxScene className="relative min-h-svh overflow-hidden">
        <ParallaxBackground theme={theme} />

        <div className="relative z-30">
          <Header theme={theme} onThemeChange={setTheme} onRequestDemo={() => setDemoOpen(true)} />
        </div>

        {/* Far-right pride block - sits beside the India network graphic. */}
        <ParallaxLayer
          depth={7}
          className="pointer-events-none absolute right-6 top-[10%] hidden max-w-[9rem] text-right xl:block"
        >
          <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-white/70 drop-shadow-sm">
            People
            <br />
            Machines
            <br />
            Businesses
            <br />
            A Stronger
            <br />
            India
          </p>
          <span className="mt-2 block h-[3px] w-full overflow-hidden rounded-full">
            <span className="flex h-full w-full">
              <span className="flex-1 bg-orange-500/80" />
              <span className="flex-1 bg-white/70" />
              <span className="flex-1 bg-emerald-500/80" />
            </span>
          </span>
          <p className="mt-3 text-xs font-medium leading-snug text-white/80 drop-shadow-sm">
            Connected
            <br />
            Across Every
            <br />
            Terrain.
          </p>
        </ParallaxLayer>

        <ParallaxLayer depth={9} className="pointer-events-none absolute inset-0">
          <IndiaNetwork />
        </ParallaxLayer>

        <ParallaxLayer depth={2} className="relative z-10 h-full">
          <HeroContent theme={theme} />
        </ParallaxLayer>

        {/* Positioned against the reference composition, then calibrated with
            measure-scene-v3.mjs (session scratch dir) so the vertical offset tracks
            HeroContent's actual bottom edge across viewport heights - below viewports
            short enough that it'd crowd the capability bar (see useSpaciousHero), it
            hides entirely. */}
        {spacious && (
          <ParallaxLayer
            depth={12}
            className="absolute right-[3%] top-[43%] hidden w-fit animate-float lg:block"
          >
            <MachineStatusCard />
          </ParallaxLayer>
        )}

        {/* Compact stand-in for the floating status card below lg, where there's no
            room to spare beside the hero text - and a mobile-only Log In link, since the
            header's dropdown remains the primary way to reach it above lg. */}
        <div className="relative z-10 mt-auto flex flex-col items-start gap-3 px-6 pb-6 sm:px-10 lg:hidden">
          <div className="flex flex-wrap gap-3">
            <MachineStatusCard />
          </div>
          <p className="text-xs font-medium text-white/80 drop-shadow-sm">
            Already using TrackMarg? <ArrowLink to="/login">Log In</ArrowLink>
          </p>
        </div>

        <CapabilityBar />
      </ParallaxScene>

      {demoOpen && <RequestDemoModal onClose={() => setDemoOpen(false)} />}
    </div>
  )
}
