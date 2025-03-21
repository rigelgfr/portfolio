import { Separator } from "./separator";

type SectionHeaderProps = {
  icon: React.ReactElement;
  title: string;
  description: string;
  separator?: boolean;
};

export function SectionHeader({ 
  icon, 
  title, 
  description, 
  separator = false 
}: SectionHeaderProps) {
  // The inner content that's common to both cases
  const titleContent = (
    <span className="flex items-center gap-2">
      {icon}
      <span className="flex gap-1 items-center">
        <h1 className="text-md md:text-lg font-semibold">{title}</h1>
        <p className="text-md md:text-md text-grey-light">—</p>
        <p className="text-md md:text-md text-grey-light ">{description}</p>
      </span>
    </span>
  );

  // If separator is true, use the full div with Separator
  if (separator) {
    return (
      <div className="flex flex-col gap-2">
        {titleContent}
        <Separator />
      </div>
    );
  }
  
  // If separator is false, just use the span
  return titleContent;
}