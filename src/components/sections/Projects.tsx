import { SectionContainerBorderless } from "../ui/section-container";
import { SectionHeader } from "../ui/section-header";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ui/section-card";
import WaveLoadingDots from "../ui/wave-dots";

export function ProjectsSection() {
    return (
      <SectionContainerBorderless id="projects">
        <div className="flex-col space-y-3">
          <SectionHeader
            title="projects"
            description="some projects i made/contributed in"
            separator
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((projects, index) => (
              <ProjectCard
                key={index}
                app_name={projects.app_name}
                formality={projects.formality}
                description={projects.description}
                job={projects.job}
                thumbnail={projects.thumbnail}
                image={projects.image}
                live={projects.live}
                source_code={projects.source_code}
                stack={projects.stack}
              />
            ))}
          </div>

          <WaveLoadingDots />

        </div> 
      </SectionContainerBorderless>
    )
  }