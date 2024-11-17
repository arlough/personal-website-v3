import { ReactNode } from "react";

interface ExtLinkProps {
  date: string;
  children: ReactNode;
}

export default function NowBlock({ date, children }: ExtLinkProps) {
  return (
    <section className="text-lg font-bold ">
      <i>{date}</i>
      <div className="px-8 py-2">{children}</div>
    </section>
  );
}
