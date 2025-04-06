"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center ml-auto mr-auto sm:flex-row">
      <div>
        <Image
          priority={true}
          width={200}
          height={250}
          className=" rounded-3xl"
          src="/profile_pic.jpg"
          alt="profile picture"
        />
      </div>

      <div
        id="hero"
        className="flex flex-col justify-center py-8 space-y-3 sm:px-8 max-w-fit "
      >
        <h1 className="text-4xl font-black text-left">Aidan Loughney</h1>
        <h2 className="text-xl font-bold text-left">
          Hey there!{" "}
          <span className="inline-block animation-waving-hand">👋🏻</span>
        </h2>

        <h2 className="text-xl font-bold text-left">
          I&apos;m Aidan, a Software Engineer <br/> based out of Salt Lake
          City<span className="inline-block hover:animate-jump">⛰️</span>
        </h2>
      </div>
    </section>
  );
}
