import { SectionContainerBorderless } from "../ui/section-container"
import { FaWrench } from "react-icons/fa"
import { Separator } from "../ui/separator"
import { skills } from "@/data/skills"
import { SkillCard } from "../ui/section-card"
import { SectionHeader } from "../ui/section-header"

export function SkillsSection() {
  return (
    <SectionContainerBorderless id="skills">
      <div className="flex-col space-y-3">
        
        <SectionHeader
          icon={<FaWrench className="w-4 h-4"/>}
          title="skills & technologies"
          description="what i use, still learning and improving"
        />

        <Separator />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3">
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