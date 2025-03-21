import { AboutSection } from "./components/sections/About";
import { Content } from "./components/sections/Content";
import { SkillsSection } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { Toaster } from "./components/ui/sonner";
import { ProjectsSection } from "./components/sections/Projects";
import Starfield from 'react-starfield';
import { Footer } from "./components/sections/Footer";

export default function Page() {
  return (
    <main className="flex justify-center">
      <Starfield
        starCount={750}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />

      <div className="w-full sm:w-3/4 xl:w-[800px]">
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