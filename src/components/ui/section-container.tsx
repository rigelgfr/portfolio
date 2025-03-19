import { ReactNode } from "react";

type MainSectionProps = {
  id: string;
  children: ReactNode;
};

export function SectionContainer({ id, children }: MainSectionProps) {
  return (
    <section id={id} className="mb-20 flex items-center p-6">
      <div className="flex-col border rounded-lg p-6 space-y-3 w-full">
        {children}
      </div>
    </section>
  );
}
