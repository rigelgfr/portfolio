import { SectionContainerBorderless } from "../ui/section-container"
import { FaWrench } from "react-icons/fa"
import { Separator } from "../ui/separator"
import { skills } from "@/data/skills"
import { SkillCard } from "../ui/section-card"

export function SkillsSection() {
  return (
    <SectionContainerBorderless id="skills">
      <div className="flex-col space-y-3">
        <span className="flex items-center gap-2">
      
            <FaWrench className="w-4 h-4" />
            <span className="flex gap-1 items-center">
              <h1 className="text-md font-semibold">skills & technologies</h1>
              <p className="text-sm text-grey-light">—</p>
              <p className="text-sm text-grey-light">what i usually use</p>
            </span>

        </span>

        <Separator />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>

    </SectionContainerBorderless>
  )
}