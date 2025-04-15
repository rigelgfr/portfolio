import { useState } from "react";
import { Separator } from "./separator";
import {
  Dialog,
  DialogTrigger,
} from "./dialog";
import { Badge } from "./badge";
import { LiveButton, SourceCodeButton } from "./custom-button";
import { Pokeball } from "./pokeball";
import { ProjectsDialog } from "./projects-dialog";

export type SkillCardProps = {
  skill: string;
  description: string;
  icon: React.ReactElement;
  animation: string;
};

export function SkillCard({ skill, description, icon, animation }: SkillCardProps) {
  return (
    <div className="group flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent/25 transition duration-300">
      <span className={`border p-2 rounded-lg ${animation} group-hover:border-transparent transition duration-300`}>
        {icon}
      </span>
      <div className="flex-col">
        <h1 className="text-sm">{skill}</h1>
        <p className="text-[10px] sm:text-xs text-grey-light">{description}</p>
      </div>
    </div>
  );
}

export type ExperienceCard = {
  children: React.ReactNode;
}

export function ExperienceCard({ children }: ExperienceCard) {
  return (
    <div className="border rounded-lg">
      <ul className="ml-10 border-l">
        {children}
      </ul>
    </div>
  );
}

export type ExperienceCardRowProps = {
  image: string;
  institute: string;
  link: string;
  period: string;
  work: string;
  description?: string;
  points?: string[];
}

export function ExperienceCardRow({ image, institute, link, period, work, description, points }: ExperienceCardRowProps) {
  return (
    <li className="relative ml-10 py-4">
      <a href={link} target="_blank" rel="noopener noreferrer"
      className="absolute -left-16 top-4 flex items-center justify-center rounded-full bg-grey-light"
      >
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-12 border hover:animate-pulse">
          <img src={image} alt={institute} className="aspect-square h-full w-full bg-white object-contain"></img>
        </span>
      </a>
        
      <div className="flex flex-1 flex-col justify-start mr-4">
        <h1 className="text-sm sm:text-md font-semibold">{institute}</h1>
        <p className="text-xs mb-1">{period}</p>
        <h1 className="text-sm text-grey-light">{work}</h1>
        {description && <p className="text-sm">{description}</p>}
        <ul className="ml-4 text-xs list-outside list-disc marker:text-grey-light">
          {points && points.map((point, index) => <li className="text-sm" key={index}>{point}</li>)}
        </ul>
      </div>     
    </li>
         
  );
}

export type ProjectCardProps = {
  app_name: string;
  formality: string;
  description: string;
  job: string[];
  thumbnail: string;
  image: string[];
  live?: string;
  source_code: string;
  stack: StackBadgeProps[];
};

export function ProjectCard({ app_name, formality, description, thumbnail, image, live, source_code, stack }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return(
    <div className="border rounded-lg p-4 flex flex-col h-full hover:bg-accent/25 transition duration-300">
      <div className="space-y-3 flex-grow">
        {image.length > 0 && (
          <div className="relative group cursor-pointer">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg">
                  {!imageLoaded && (
                    <div className="flex items-center justify-center">
                      <Pokeball />
                    </div>
                  )}

                  <img 
                    src={thumbnail}
                    alt={app_name} 
                    className={`w-full h-full object-contain transition duration-300 group-hover:opacity-70 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-sm font-semibold">see details</span>
                  </div>
                </div>
              </DialogTrigger>
              <ProjectsDialog
                app_name={app_name}
                image={image}
                stack={stack}
              />
            </Dialog>
          </div>
        )}
      
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <h1 className="text-sm sm:text-md font-semibold w-full">{app_name}</h1>
            <span className="text-sm text-grey-light w-full text-end self-end">{formality}</span>
          </div>

          <Separator />

          <p className="text-sm text-grey-light">{description}</p>
        </div>
      </div>
      
      <div className="mt-auto pt-3">
        <div className="flex justify-end space-x-3">
          {live && <LiveButton source={live} />}
          <SourceCodeButton source={source_code} />
        </div>
      </div>
    </div>
  );
}

export type StackBadgeProps = {
  icon: React.ReactNode;
  stack: string;
  frontend: boolean;
}

export function StackBadge({ icon, stack, frontend }: StackBadgeProps) {
  return (
    <Badge variant={frontend ? "secondary" : "default"} className="select-none hover:scale-105 transition">
      {icon}{stack}
    </Badge>
  );
}
