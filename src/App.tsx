import { AboutSection } from "./components/sections/About";
import { Content } from "./components/sections/Navigation";
import { SkillsSection } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { Toaster } from "./components/ui/sonner";
import { ProjectsSection } from "./components/sections/Projects";
import { Footer } from "./components/sections/Footer";
import StarfieldBackground from "./components/bg/Particles";

export default function Page() {
  return (
    <main className="flex justify-center">
      <StarfieldBackground />

      <div className="w-full sm:w-[600px] xl:w-[800px]">
        <Content />
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