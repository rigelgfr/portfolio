import { SectionContainerBorderless } from "../ui/section-container"
import { skills } from "@/data/skills"
import { SkillCard } from "../ui/section-card"
import { SectionHeader } from "../ui/section-header"

export function SkillsSection() {
  return (
    <SectionContainerBorderless id="technologies">
      <div className="flex-col space-y-3">
        
        <SectionHeader
          title="technologies"
          description="what i use, still learning and improving"
          separator
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
              animation={skill.animation}
            />
          ))}
        </div>
      </div>

    </SectionContainerBorderless>
  )
}