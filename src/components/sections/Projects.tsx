import { FaCode } from "react-icons/fa";
import { SectionContainerBorderless } from "../ui/section-container";
import { SectionHeader } from "../ui/section-header";
import { Separator } from "../ui/separator";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ui/section-card";

export function ProjectsSection() {
    return (
      <SectionContainerBorderless id="projects">
        <div className="flex-col space-y-3">
          <SectionHeader
            icon={<FaCode className="w-4 h-4"/>}
            title="projects"
            description="some client and personal projects i made"
          />

          <Separator />

          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {projects.map((projects, index) => (
              <ProjectCard
                key={index}
                app_name={projects.app_name}
                formality={projects.formality}
                team={projects.team}
                description={projects.description}
                job={projects.job}
                image={projects.image}
                source_code={projects.source_code}
                stack={projects.stack}
              />
            ))}
          </div>

        </div> 
      </SectionContainerBorderless>
    )
  }