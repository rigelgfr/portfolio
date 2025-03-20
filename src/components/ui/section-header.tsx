type SectionHeaderProps = {
    icon: React.ReactElement;
    title: string;
    description: string;
  };

export function SectionHeader({ icon, title, description }: SectionHeaderProps) {
    return (
        <span className="flex items-center gap-2">
            {icon}
            <span className="flex gap-1 items-center">
                <h1 className="text-md font-semibold">{title}</h1>
                <p className="text-sm text-grey-light">—</p>
                <p className="text-sm text-grey-light">{description}</p>
            </span>
        </span>
    )
}