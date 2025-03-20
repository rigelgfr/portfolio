export type SkillCardProps = {
  skill: string;
  description: string;
  icon: React.ReactElement;
  color: string;
};

export function SkillCard({ skill, description, icon, color }: SkillCardProps) {
  return (
    <div className="group flex items-center space-x-2 border rounded-lg p-3 hover:bg-accent/25 transition duration-300">
      <span className={`border p-2 rounded-lg ${color} group-hover:border-transparent transition duration-300`}>
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

