"use client";
import React from "react";
import { Link } from 'next-view-transitions'
import { usePathname } from "next/navigation";

export default function Navbtn({ link, label, onClick }) {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<Link
			onClick={() => {
				onClick && onClick();
			}}
			href={link}
			className="px-3 py-2 group hover:text-hover"
		>
			{label}
			<span className={pathname.replace('/', '') === label.toLowerCase() || label === "Home" && pathname.replace('/', '') === '' ? "block max-w-full h-0.5 bg-white group-hover:bg-hover" : "block max-w-0 group-hover:max-w-full  h-0.5 bg-hover"}></span>
		</Link>
	);
}
