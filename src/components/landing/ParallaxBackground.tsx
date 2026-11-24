import heroDay from "../../assets/hero-day.png"
import heroDayMobile from "../../assets/hero-day-mobile.webp"
import heroNight from "../../assets/hero-night.png"
import heroNightMobile from "../../assets/hero-night-mobile.webp"
import { ParallaxLayer } from "./ParallaxScene"
import type { Theme } from "./theme"

const IMAGES: Record<Theme, string> = {
  day: heroDay,
  night: heroNight,
}

/**
 * Both hero photos are one flat composition - the truck, excavator and
 * mountains are pixels in the same image, not separate cut-out layers - so
 * they travel together as a single background depth rather than each
 * getting their own independent parallax speed.
 */
export default function ParallaxBackground({ theme }: { theme: Theme }) {
  return (
    <ParallaxLayer depth={5} className="absolute inset-0">
      <picture
        className={`absolute inset-0 block transition-opacity duration-700 ${
          theme === "day" ? "opacity-100" : "opacity-0"
        }`}
      >
        <source media="(max-width: 767px)" type="image/webp" srcSet={heroDayMobile} />
        <img
          src={IMAGES.day}
          alt=""
          style={{ filter: "brightness(0.88) saturate(0.9)" }}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </picture>
      <picture
        className={`absolute inset-0 block transition-opacity duration-700 ${
          theme === "night" ? "opacity-100" : "opacity-0"
        }`}
      >
        <source media="(max-width: 767px)" type="image/webp" srcSet={heroNightMobile} />
        <img
          src={IMAGES.night}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </picture>
      {/* Top/bottom scrim so the header and footer chrome - dark-glass in both themes -
          reads cleanly against whichever part of the sky or road sits behind it. */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

      {/* Both themes: the hero copy is white either way, so both the bright day sky
          and the busier night sky (aurora, city lights) get the same dark backdrop for
          it to read against - a soft multi-stop left-edge fade rather than a flat box,
          so it blends into the photo instead of looking like a panel. Width tracks
          HeroContent's own responsive max-width so it always clears the text with a
          little room to spare, then fully fades out well before the floating cards
          further right. */}
      <div
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(6,10,18,0.55) 0%, rgba(6,10,18,0.44) 25%, rgba(6,10,18,0.2) 55%, rgba(6,10,18,0) 85%)",
        }}
        className="absolute inset-y-0 left-0 w-[88%] sm:w-[75%] md:w-[62%] lg:w-[52%] xl:w-[44%]"
      />
    </ParallaxLayer>
  )
}
