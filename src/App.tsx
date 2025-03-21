import { AboutSection } from "./components/sections/About";
import pokeball_animated from "./assets/icon/pokeball_animated.png";
import { Content } from "./components/sections/Content";
import { SkillsSection } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { Toaster } from "./components/ui/sonner";
import { ProjectsSection } from "./components/sections/Projects";
import Starfield from 'react-starfield';

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

        <div className="flex w-full justify-center">
          <img src={pokeball_animated} alt="Pokeball" className="object-contain select-none" />
        </div>

      </div>
      <Toaster position="bottom-left" />

    </main>
  )
}