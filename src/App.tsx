import { AboutSection } from "./components/sections/About";

export default function Page() {
  return (
    <main className="flex justify-center">
      <div className="w-full md:w-1/3">
        <AboutSection />
      </div>
    </main>
  )
}