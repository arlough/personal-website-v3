"use client";
import React from "react";
import Navbtn from "../components/atoms/Navbtn";
import { DarkModeSwitch } from "./darkModeSwitch";

export default function Navbar() {
  return (
    <nav className="mt-3 text-xl font-bold justify-self-start">
      <div className="flex items-center justify-center md:hidden"></div>
      <div className="hidden mx-auto rounded md:inline">
        <div className="flex justify-between">
          <div className="flex px-5 py-2 space-x-5">
            {/* right nav */}
            <div className="flex items-center space-x-5 ">
              <Navbtn link={"/"} label={"Home"}></Navbtn>
              <Navbtn link={"/about"} label={"About"}></Navbtn>
            </div>
          </div>

          {/* left nav */}
          <div className="flex items-center px-5 py-2">
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
