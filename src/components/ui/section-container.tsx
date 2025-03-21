import { ReactNode } from "react";

type MainSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionContainerBordered({ id, children, className }: MainSectionProps) {
  return (
    <section id={id} className={`flex items-center p-6 ${className}`}>
      <div className="flex-col border rounded-lg p-4 space-y-3 w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionContainerBorderless({ id, children, className }: MainSectionProps) {
  return (
    <section id={id} className={`flex items-center p-6 ${className}`}>
      <div className="flex-col m-6 space-y-3 w-full">
        {children}
      </div>
    </section>
  );
}