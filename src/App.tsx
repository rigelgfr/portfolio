import { AboutSection } from "./components/sections/About";
import pokeball_animated from "./assets/icon/pokeball_animated.png";
import { Content } from "./components/sections/Content";

export default function Page() {
  return (
    <main className="flex justify-center">
      <div className="w-full md:w-1/3">
        <Content />
        <AboutSection />

        <div className="flex w-full justify-center">
          <img src={pokeball_animated} alt="Pokeball" className="object-contain select-none" />
        </div>

      </div>
    </main>
  )
}