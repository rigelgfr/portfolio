import { AboutSection } from "./components/sections/About";
import pokeball_animated from "./assets/icon/pokeball_animated.png";
import { Content } from "./components/sections/Content";
import { SkillsSection } from "./components/sections/Skills";
import { ExperienceSection } from "./components/sections/Experience";
import { Toaster } from "./components/ui/sonner";

export default function Page() {
  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-2/3 xl:w-1/3">
        <Content />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />

        <div className="flex w-full justify-center">
          <img src={pokeball_animated} alt="Pokeball" className="object-contain select-none" />
        </div>

      </div>
      <Toaster position="bottom-left" />

    </main>
  )
}