import SystemCard from "../components/SystemCard"
import TopNav from "../components/TopNav"
import { systems } from "../data/systems"

type ChooseSystemPageProps = {
  mode: "onboarding" | "login"
}

const copy = {
  onboarding: {
    heading: "Welcome to TrackMarg 👋",
    subheading: "Choose the system you want to get started with.",
  },
  login: {
    heading: "Choose your system to log in",
    subheading: "Select the system you use, and we'll take you to its sign-in page.",
  },
}

export default function ChooseSystemPage({ mode }: ChooseSystemPageProps) {
  const { heading, subheading } = copy[mode]

  return (
    <div className="relative flex min-h-svh flex-col">
      <TopNav backTo="/" backLabel="Back" />

      <main className="relative z-10 mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center px-6 pb-16 sm:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{heading}</h1>
          <p className="mt-3 text-base text-mist-400 sm:text-lg">{subheading}</p>
        </div>

        <div className="flex flex-col gap-4">
          {systems.map((system) => (
            <SystemCard key={system.id} system={system} mode={mode} to={`/systems/${system.id}?mode=${mode}`} />
          ))}
        </div>
      </main>
    </div>
  )
}
