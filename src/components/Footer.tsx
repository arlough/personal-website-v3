import React from "react";
import { Link } from "next-view-transitions";
import InlineLink from "./atoms/InlineLink";

export default function Footer() {
  return (
    <footer className="w-full py-5 mt-auto text-sm text-center">
      © 2025 Aidan Loughney · <InlineLink href="colophon">colophon</InlineLink>
    </footer>
  );
}
