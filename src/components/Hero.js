import React from "react";

import profile from "../assets/profile_pic.jpg"

export default function Hero(){
    return (
        <div className="flex ml-10 mt-20 border border-red-500">
            {/* Hero container div */}
            <div className="space-y-5 border border-blue-500">
                {/* Left side */}
                <div >
                    {/* Header */}
                    Hi, I'm Aidan Loughney
                </div>
                <div>
                    {/* Description */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="flex space-x-4">
                    {/* Links */}
                    <a href="#" >Github</a>
                    <a href="#">Linkedin</a>
                </div>
            </div>

            <div className=" w-full h-screen items-center border border-blue-500">
                {/* RIght side - image */}
                <img
                src={profile}
                />
            </div>
        </div>
    );
}