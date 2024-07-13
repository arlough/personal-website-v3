"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import Navbtn from "../components/atoms/Navbtn";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function closeIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 18.75 7.5-7.5 7.5 7.5"
			/>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 12.75 7.5-7.5 7.5 7.5"
			/>
		</svg>
	);
}

function openIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="size-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
			/>
		</svg>
	);
}

// TODO: highlight current page you're on with an underline or some signifier. This should be share behavior with the nav bar
export default function NavDrawer() {
	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<button className="hover:text-hover" onClick={toggle}>
				{openIcon()}
			</button>
			<AnimatePresence>
				{isOpen && (
					<Dialog static open={isOpen} onClose={toggle}>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<DialogPanel className="absolute top-0 flex flex-col items-center w-full pt-4 pb-4 bg-black shadow-lg rounded-3xl shadow-primary">
								<Navbtn onClick={toggle} link={"/"} label={"Home"}></Navbtn>
								<Navbtn
									onClick={toggle}
									link={"/about"}
									label={"About"}
								></Navbtn>
								<Navbtn onClick={toggle} link={"/now"} label={"Now"}></Navbtn>
								<button className="hover:text-hover" onClick={toggle}>
									{closeIcon()}
								</button>
							</DialogPanel>
						</motion.div>
					</Dialog>
				)}
			</AnimatePresence>
		</>
	);
}
