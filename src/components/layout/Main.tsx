"use client"

import { AboutSection } from "../sections/About"
import { ContactSection } from "../sections/Contact"
import { ExperienceSection } from "../sections/Experience"
import { ProjectsSection } from "../sections/Projects"
import { SkillsSection } from "../sections/Skills"

export default function Main() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

    </div>
  )
}