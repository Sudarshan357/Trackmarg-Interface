import {
  createContext,
  useContext,
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react"

/**
 * Lightweight pointer-parallax engine: no libraries, GPU-only transforms.
 *
 * Layers register themselves (with a "depth" - how far they travel relative
 * to the pointer) against a shared rAF loop owned by the nearest
 * <ParallaxScene>. Pointer position is lerp-smoothed each frame and applied
 * directly to each layer's `transform` via refs, so moving the mouse never
 * triggers a React re-render - only DOM writes inside one rAF callback.
 *
 * Disabled entirely (layers just sit at rest) for touch/coarse pointers,
 * prefers-reduced-motion, and narrow viewports - a 5-15px wiggle has no
 * pointer to react to on a phone, and costs battery for nothing.
 */

const LERP = 0.07
const MOBILE_BREAKPOINT = 768

type LayerEntry = { el: HTMLElement; depth: number }

type ParallaxCtx = {
  register: (el: HTMLElement, depth: number) => void
  unregister: (el: HTMLElement) => void
}

const Ctx = createContext<ParallaxCtx | null>(null)

function parallaxAllowed(): boolean {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  if (window.matchMedia("(pointer: coarse)").matches) return false
  if (window.innerWidth < MOBILE_BREAKPOINT) return false
  return true
}

export function ParallaxScene({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const layers = useRef<LayerEntry[]>([])
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !parallaxAllowed()) return

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      // -1..1 across the container, so the effect scales with however big the hero is.
      target.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
      }
    }
    const onLeave = () => {
      target.current = { x: 0, y: 0 }
    }

    container.addEventListener("pointermove", onMove, { passive: true })
    container.addEventListener("pointerleave", onLeave, { passive: true })

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * LERP
      current.current.y += (target.current.y - current.current.y) * LERP
      // Below this, floating point noise would keep the loop alive forever
      // doing invisible sub-pixel writes - worth cutting off explicitly.
      for (const { el, depth } of layers.current) {
        const dx = (current.current.x * depth).toFixed(2)
        const dy = (current.current.y * depth).toFixed(2)
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      container.removeEventListener("pointermove", onMove)
      container.removeEventListener("pointerleave", onLeave)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const register = (el: HTMLElement, depth: number) => {
    layers.current.push({ el, depth })
  }
  const unregister = (el: HTMLElement) => {
    layers.current = layers.current.filter((l) => l.el !== el)
  }

  return (
    <div ref={containerRef} className={className}>
      <Ctx.Provider value={{ register, unregister }}>{children}</Ctx.Provider>
    </div>
  )
}

/**
 * One depth layer inside a <ParallaxScene>. `depth` is the max travel in
 * pixels at the pointer's extremes (e.g. 4 = barely moves, 18 = floats
 * noticeably) - tune per element rather than reaching for a global setting.
 */
export function ParallaxLayer({
  depth,
  className,
  style,
  children,
}: {
  depth: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const ctx = useContext(Ctx)

  useEffect(() => {
    const el = ref.current
    if (!ctx || !el) return
    ctx.register(el, depth)
    return () => ctx.unregister(el)
  }, [ctx, depth])

  return (
    <div ref={ref} className={className} style={{ willChange: "transform", ...style }}>
      {children}
    </div>
  )
}
