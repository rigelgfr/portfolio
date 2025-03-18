import { RightEmpty } from "./components/layout/Empty";
import { LeftSidebar } from "./components/layout/Sidebar";
import { AboutSection } from "./components/sections/About";
import { ExperienceSection } from "./components/sections/Experience";
import { ProjectsSection } from "./components/sections/Projects";
import { SkillsSection } from "./components/sections/Skills";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left sidebar (1/4) */}
      <div className="w-1/6">
        <LeftSidebar />
      </div>
      
      {/* Main content (1/2) */}
      <div className="w-2/3 h-screen overflow-y-auto py-6 px-10">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
      
      {/* Right sidebar for future use (1/4) */}
      <div className="w-1/6">
        <RightEmpty />
      </div>
    </div>
  )
}