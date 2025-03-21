import { Separator } from "./separator";
import { Badge } from "./badge";

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
        <p className="text-xs text-grey-light">{description}</p>
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
        <h1 className="text-md font-bold">{institute}</h1>
        <p className="text-xs text-grey-light mb-1">{period}</p>
        <h1 className="text-sm">{work}</h1>
        {description && <p className="text-sm">{description}</p>}
        <ul className="ml-4 list-outside list-disc marker:text-grey-light">
          {points && points.map((point) => <li className="text-sm">{point}</li>)}
        </ul>
      </div>     
    </li>
         
  );
}

export type ProjectCardProps = {
  app_name: string;
  formality: string;
  description: string;
  job: string;
  image: string[];
  source_code: string;
  stack: StackBadgeProps[];
};

export function ProjectCard({ app_name, formality, description, image, source_code, stack }: ProjectCardProps) {
  return(
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex flex-col flex-1 max-sm:space-y-3">
        {image.length > 0 && (
          <img src={image[0]} alt={app_name} className="object-contain rounded-lg" />
        )}

        <div className="flex sm:hidden flex-1 items-center">
          <div className="flex flex-wrap gap-2 flex-grow">
            {stack.map((stack, index) => (
              <StackBadge key={index} icon={stack.icon} stack={stack.stack} frontend={stack.frontend} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <h1 className="text-md font-semibold">{app_name}</h1>
          <span className="text-sm text-grey-light w-full text-end self-end">{formality}</span>
        </div>

        <Separator />

        <p className="text-sm text-grey-light">{description}</p>
      
        <a href={source_code} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">source code</a>
      
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
    <Badge variant={frontend ? "secondary" : "default"}>
      {icon}{stack}
    </Badge>
  );
}
