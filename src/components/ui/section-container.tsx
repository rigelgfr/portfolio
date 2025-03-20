import { ReactNode } from "react";

type MainSectionProps = {
  id: string;
  children: ReactNode;
};

export function SectionContainerBordered({ id, children }: MainSectionProps) {
  return (
    <section id={id} className="flex items-center p-6">
      <div className="flex-col border rounded-lg p-6 space-y-3 w-full">
        {children}
      </div>
    </section>
  );
}

export function SectionContainerBorderless({ id, children }: MainSectionProps) {
  return (
    <section id={id} className="flex items-center">
      <div className="flex-col m-6 space-y-3 w-full">
        {children}
      </div>
    </section>
  );
}