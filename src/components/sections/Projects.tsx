"use client";

import { useState } from "react";
import { SectionContainerBorderless } from "../ui/section-container";
import { SectionHeader } from "../ui/section-header";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ui/section-card";
import WaveLoadingDots from "../ui/wave-dots";
import { Button } from "../ui/button";

export function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleProjects = projects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const allShown = visibleCount >= projects.length;

  return (
    <SectionContainerBorderless id="projects">
      <div className="flex-col space-y-3">
        <SectionHeader
          title="projects"
          description="projects i made/contributed in"
          separator
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              app_name={project.app_name}
              formality={project.formality}
              description={project.description}
              job={project.job}
              thumbnail={project.thumbnail}
              image={project.image}
              live={project.live}
              source_code={project.source_code}
              stack={project.stack}
            />
          ))}
        </div>

        {!allShown && (
          <div className="flex w-full justify-center">
            <Button
              variant="outline"
              onClick={handleShowMore}
              className="w-full">
              Show more
            </Button>
          </div>
        )}

        {allShown && <WaveLoadingDots />}
      </div>
    </SectionContainerBorderless>
  );
}
