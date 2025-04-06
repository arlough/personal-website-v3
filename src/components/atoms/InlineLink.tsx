import { Link } from "next-view-transitions";
import { ReactNode } from "react";

interface InlineLinkProps {
  href: string;
  children: ReactNode;
}

export default function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <Link className="inline-block underline hover:text-hover" href={href}>
      {children}
    </Link>
  );
}
