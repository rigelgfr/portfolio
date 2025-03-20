type SkillCardProps = {
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