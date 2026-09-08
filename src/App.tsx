import { BrowserRouter, Route, Routes } from "react-router-dom"
import BackgroundFX from "./components/BackgroundFX"
import ChooseSystemPage from "./pages/ChooseSystemPage"
import LandingPage from "./pages/LandingPage"
import SystemStubPage from "./pages/SystemStubPage"

export default function App() {
  return (
    <BrowserRouter>
      <BackgroundFX />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get-started" element={<ChooseSystemPage mode="onboarding" />} />
        <Route path="/login" element={<ChooseSystemPage mode="login" />} />
        <Route path="/systems/:systemId" element={<SystemStubPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
