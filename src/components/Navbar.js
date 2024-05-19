import React from "react"
import Link from 'next/link';
import Navbtn from '../components/atoms/Navbtn'

export default function Navbar(){
    return (
        <nav className="hidden mt-3 text-lg font-bold text-white shadow-xl justify-self-start bg-background md:inline">
            <div className='mx-auto rounded'>
                <div className='flex justify-between'>
                    <div className='flex px-5 py-2 space-x-5'>
                    {/* right nav */}
                    <div className='flex items-center space-x-5 '>
                        <Navbtn link={"/"} label={"Home"}></Navbtn>
                        {/* <Navbtn link={"/about"} label={"About"}></Navbtn> */}
                        {/* <Navbtn link={"/projects"} label={"Projects"}></Navbtn> */}
                        {/* <Navbtn link={"/bookshelf"} label={"Bookshelf"}></Navbtn> */}
                    </div>
                </div>
                
                {/* left nav */}
                <div className='flex items-center px-5 py-2'>
                    {/* <Navbtn link={"/contact"} label={"Contact"}></Navbtn> */}
                </div>
                </div>
            </div>
        </nav>
    )
}
