import React from "react";
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero(){
    
    return (
        <section className="flex flex-col-reverse self-center justify-between h-auto ml-20 mr-20 overflow-hidden text-white lg:max-w-7xl lg:space-x-10 lg:flex-row">
            {/* Hero container div */}
            <div id="hero" className="flex flex-col justify-center flex-grow w-auto px-8 py-8 space-y-8 lg:w-1/5">
                {/* Left side */}
                <div className="flex flex-col space-y-8 ">
                <div className="text-3xl font-extrabold text-center text-white sm:text-4xl md:text-left md:text-6xl">
                    {/* Header */}
                    <motion.div
                        initial={{y:-100}}
                        animate={{ y: 0}}
                        transition={{ type: "spring" }}
                        
                    >
                        Aidan Loughney
                    </motion.div>
                   
                </div>
                <div className="text-2xl font-extrabold text-center sm:text-3xl md:text-left md:text-4xl">
                    {/* Description */}
                    <Typewriter 
                    onInit={(typewriter) => 
                    {typewriter.typeString('Software Engineer').callFunction(() => {console.log('String typed out!');}).start();}}
                    />
                </div>
                </div>
                
            </div>

          
                {/* Right side - image */}
                <motion.div
                    className="container self-center w-4/5 h-auto m-auto mb-10 shadow-2xl sm:w-2/5 lg:mb-0 rounded-2xl shadow-secondary"
                    initial={{ scale: 0 }}
                    animate={{scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.75 }}
                >
                    <Image 
                    priority={true} 
                    width={750}
                    height={750} className=""
                    src='/profile_pic.jpg'
                    alt="profile picture"
                    />
                </motion.div>

            
        </section>
    );
}




