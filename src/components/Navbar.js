"use client";
import React from "react";
import Navbtn from "../components/atoms/Navbtn";
import { DarkModeSwitch } from "./darkModeSwitch";
import HomeLink from "./HomeLink";

export default function Navbar() {
  return (
    <nav className="mt-3 text-xl font-bold justify-self-start">
      <div className="flex items-center justify-center md:hidden"></div>
      <div className="hidden mx-auto rounded-sm md:inline">
        <div className="flex justify-between">
          <div className="flex px-5 py-2 space-x-5">
            {/* right nav */}
            <div className="flex items-center space-x-5 ">
              <HomeLink/>        
            </div>
          </div>

          {/* left nav */}
          <div className="flex items-center px-5 py-2 space-x-5">
             <Navbtn link={"/now"} label={"Now"}></Navbtn>
          <Navbtn link={"/about"} label={"About"}></Navbtn>
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
