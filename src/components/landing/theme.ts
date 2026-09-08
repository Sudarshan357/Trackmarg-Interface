export type Theme = "day" | "night"

/**
 * Default theme follows India Standard Time regardless of the visitor's own
 * timezone - Night from 7 PM up to (not including) 7 AM IST, Day the rest of
 * the day. Only the initial value: the toggle in the header still lets a
 * visitor override it freely, this just picks a sensible starting point.
 */
export function defaultThemeForTime(date: Date = new Date()): Theme {
  const istHour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hour12: false,
    }).format(date),
  )
  // Some environments format midnight as "24" instead of "0" with hour12:false.
  const hour = istHour % 24
  return hour >= 19 || hour < 7 ? "night" : "day"
}

/**
 * The hero copy stays white in both themes now - day's background carries
 * its own dark left-edge gradient (see ParallaxBackground) to give white
 * text enough contrast against the bright sky, the same way night's dark
 * backdrop already does. The glass cards, header chrome and footer strip are
 * unaffected either way, since they're UI, not "lit by" the scene behind them.
 */
export const heroTextClass = "text-white"
export const heroMutedTextClass = "text-mist-300"
export const heroFaintTextClass = "text-mist-400"

/**
 * Night's background is busier (lights, aurora, reflections) and leans on a
 * soft dark halo for extra insurance. Day now does the heavy lifting with
 * its gradient instead, so its text only needs a tight, low-blur shadow for
 * crisp edges - a big soft halo would look like a blurry glow against a
 * background that's mostly already dark near the text.
 */
export function heroTextShadow(theme: Theme): string {
  return theme === "day" ? "0 1px 2px rgba(0,0,0,0.35)" : "0 1px 3px rgba(0,0,0,0.6), 0 2px 20px rgba(0,0,0,0.45)"
}
