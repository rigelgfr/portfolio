import { AboutSection } from "./components/sections/About";
import { SkillsSection } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { Toaster } from "./components/ui/sonner";
import { ProjectsSection } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";
import StarfieldBackground from "./components/bg/Particles";
import FloatingNavbar from "./components/ui/navbar";

export default function Page() {
  return (
    <main className="flex justify-center">
      <StarfieldBackground />
      <FloatingNavbar />

      <div className="mt-24 w-full sm:w-[600px] xl:w-[800px]">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </div>

      <Toaster position="bottom-left" />

    </main>
  )
}