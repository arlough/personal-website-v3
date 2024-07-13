import React from "react";
import { Link } from "next-view-transitions";

export default function Footer() {
	return (
		<footer className="w-full py-5 mt-auto text-sm text-center ">
			© 2024 Aidan Loughney ·{" "}
			<Link className="underline hover:text-hover" href="colophon">
				colophon
			</Link>
		</footer>
	);
}
