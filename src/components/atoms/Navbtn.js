"use client";
import React from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function Navbtn({ link, label }) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className="px-3 py-2 group hover:text-hover"
    >
      {label}
      <span
        className={
          pathname.replace("/", "") === label.toLowerCase() ||
          (label === "Home" && pathname.replace("/", "") === "")
            ? "block max-w-full h-0.5 bg-hover group-hover:bg-hover"
            : "block max-w-0 group-hover:max-w-full  h-0.5 bg-hover"
        }
      ></span>
    </Link>
  );
}
