import { ReactNode } from "react";

interface sectionProps {
  title?: string;
  children: ReactNode;
}

export function Section({ title, children }: sectionProps) {
  return (
    <section className="flex flex-col space-y-4">
      {title && <h2 className="text-3xl font-extrabold ">{title}</h2>}
      <div className="text-lg font-bold">{children}</div>
    </section>
  );
}
