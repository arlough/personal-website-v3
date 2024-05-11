import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center ml-4 mr-4 text-white sm:flex-row">
      <motion.div
        className="px-8 "
        initial={{ scale: 0.75 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <Image
          priority={true}
          width={200}
          height={250}
          className=" rounded-3xl"
          src="/profile_pic.jpg"
          alt="profile picture"
        />
      </motion.div>

      <div
        id="hero"
        className="flex flex-col justify-center w-auto px-8 py-8 space-y-3 sm:w-2/5 "
      >

            <motion.h1
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              className="text-3xl font-extrabold text-left"
            >
              Aidan Loughney
            </motion.h1>
            <motion.p
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              className="text-xl font-bold text-left"
            >
              Hey there! <span className="inline-block animation-waving-hand">👋🏻</span>
            </motion.p>

            <motion.p
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              className="text-xl font-bold text-left"
            >
              I&apos;m Aidan, a Software Engineer based out of Salt Lake City <span className="inline-block hover:animate-jump">⛰️</span>
            </motion.p>
      
        </div>
    </section>
  );
}
