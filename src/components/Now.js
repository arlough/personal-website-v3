import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Now() {
  return (
    <section   className="flex flex-col ml-4 mr-4 space-y-4 font-extrabold text-white ">
      <h2 className="text-3xl">Now</h2>
      <ul className="text-xl">
        <li>- Working at SoFi as a Full-Stack Software Engineer</li>
        <li>- Exploring Salt Lake City & Utah 🏞️</li>
      </ul>
    </section>
  );
}
