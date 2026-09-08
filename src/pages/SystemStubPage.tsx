import { useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Button } from "../components/Button"
import TopNav from "../components/TopNav"
import { getSystem, resolveExternalUrl } from "../data/systems"

export default function SystemStubPage() {
  const { systemId } = useParams<{ systemId: string }>()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get("mode") === "login" ? "login" : "onboarding"
  const system = getSystem(systemId)
  const backTo = mode === "login" ? "/login" : "/get-started"
  const externalUrl = system ? resolveExternalUrl(system, mode) : undefined

  // Cards for systems with a live deployment link straight out and never reach this
  // page — this only fires for a stale/shared link pointing here directly.
  useEffect(() => {
    if (externalUrl) {
      window.location.replace(externalUrl)
    }
  }, [externalUrl])

  if (system && externalUrl) {
    return (
      <div className="relative flex min-h-svh flex-col">
        <main className="relative z-10 flex flex-1 items-center justify-center px-6 text-center">
          <p className="text-sm text-mist-400">Taking you to {system.name}…</p>
        </main>
      </div>
    )
  }

  if (!system) {
    return (
      <div className="relative flex min-h-svh flex-col">
        <TopNav backTo="/" backLabel="Home" />
        <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold text-white">System not found</h1>
          <p className="mt-3 text-mist-400">We couldn't find that system. Head back and pick one from the list.</p>
          <Button to="/get-started" className="mt-8">
            Choose a system
          </Button>
        </main>
      </div>
    )
  }

  const Icon = system.icon

  return (
    <div className="relative flex min-h-svh flex-col">
      <TopNav backTo={backTo} backLabel="Change system" />

      <main className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-6 pb-16 text-center sm:px-8">
        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${system.accent.iconBg}`}>
          <Icon className={`h-8 w-8 ${system.accent.iconText}`} />
        </div>

        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{system.name}</h1>

        <p className="mt-3 text-base leading-relaxed text-mist-400">{system.description}</p>

        <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
          <p className="text-sm font-medium text-mist-300">
            {mode === "login"
              ? `Sign-in for ${system.name} is being connected.`
              : `Onboarding for ${system.name} is being connected.`}
          </p>
          <p className="mt-2 text-sm text-mist-500">
            This is where the {system.name} {mode === "login" ? "login" : "setup"} experience will live. Check back
            soon, or explore another system for now.
          </p>
        </div>

        <Button to="/get-started" variant="outline" className="mt-8">
          ← Explore other systems
        </Button>
      </main>
    </div>
  )
}
