import { Separator } from "./separator";

type SectionHeaderProps = {
  icon?: React.ReactElement;
  title: string;
  description: string;
  separator?: boolean;
};

export function SectionHeader({ 
  title, 
  description, 
  separator = false 
}: SectionHeaderProps) {
  // The inner content that's common to both cases
  const titleContent = (
    <span className="flex items-center gap-2">
      <span className="flex gap-1 items-center">
        <h1 className="font-semibold text-sm sm:text-md md:text-lg">{title}</h1>
        <div className="flex justify-center items-end gap-1">
          <p className="text-grey-light text-sm md:text-md">—</p>
          <p className="text-grey-light text-sm md:text-md">{description}</p>
        </div>
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