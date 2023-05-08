import React from "react"
import Link from 'next/link';
import Navbtn from '@/components/atoms/Navbtn'

export default function Navbar(){
    return (
        <nav className="invisible mt-3 text-2xl font-bold text-white shadow-xl bg-background md:visible">
            <div className='mx-auto rounded max-w-screen-2xl'>
                <div className='flex justify-between'>
                    <div className='flex px-5 py-2 space-x-5'>
                    {/* right nav */}
                    <div className='flex items-center space-x-5 '>
                        <Navbtn link={"/"} label={"Home"}></Navbtn>
                        <Navbtn link={"/projects"} label={"Projects"}></Navbtn>
                    </div>
                </div>
                
                {/* left nav */}
                <div className='flex items-center px-5 py-2'>
                    <Navbtn link={"/contact"} label={"Contacts"}></Navbtn>
                </div>
                </div>
            </div>
        </nav>
    )
}
