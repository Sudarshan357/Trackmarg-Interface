import { useEffect, useState } from "react"

const QUERY = "(min-width: 1024px) and (min-height: 720px)"

/**
 * The two floating status cards (On the Move / Machine Active) sit low enough
 * that on short-but-wide screens they can run into the capability bar
 * overlaid at the bottom of the hero - measured the real gap between them
 * across heights and it turns negative below ~673px, so 720px keeps a
 * comfortable margin without hiding the cards on any normal laptop/desktop
 * viewport.
 */
export default function useSpaciousHero(): boolean {
  const [spacious, setSpacious] = useState(
    () => typeof window !== "undefined" && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = () => setSpacious(mql.matches)
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return spacious
}
