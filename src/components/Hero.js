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
          <div className="text-3xl font-extrabold text-left">
            {/* Header */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
              
            >
              Aidan Loughney
            </motion.div>
          </div>
          <div className="text-xl font-bold text-left">
            {/* Description */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              Hey there! 👋🏻
            </motion.div>
          </div>
          <div className="text-xl font-bold text-left">
            {/* Description */}
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring" }}
            >
              I'm Aidan, a Software Engineer based out of Salt Lake
              City ⛰️
            </motion.div>
          </div>
        </div>
    </section>
  );
}
