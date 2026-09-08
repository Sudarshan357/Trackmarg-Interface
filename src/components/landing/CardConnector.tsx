// A short leader line from the card's corner down toward the truck/excavator
// it's describing, so the card reads as pointing at the vehicle in the photo
// rather than just floating near it. Colour is passed in via a text-* class
// so the line/dot pick it up through currentColor.
export default function CardConnector({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`pointer-events-none absolute -bottom-3 -left-3 hidden h-12 w-12 overflow-visible lg:block ${className}`}
      aria-hidden="true"
    >
      <line x1="44" y1="4" x2="6" y2="42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 4" strokeLinecap="round" opacity="0.8" />
      <circle cx="6" cy="42" r="7" fill="currentColor" opacity="0.2" />
      <circle cx="6" cy="42" r="3" fill="currentColor" className="animate-blink" />
    </svg>
  )
}
