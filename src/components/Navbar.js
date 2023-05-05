import React from "react"
import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className="invisible mt-3 text-2xl font-bold text-white shadow-xl bg-background lg:visible">
            <div className='mx-auto rounded max-w-screen-2xl'>
                <div className='flex justify-between'>
                    <div className='flex px-5 py-2 space-x-5'>
                    {/* right nav */}
                    <div className='flex items-center space-x-5 '>
                        <Link href="/" className='px-3 py-2 hover:text-hover'>
                            Home
                        </Link>
                        <Link href="/projects" className='px-3 py-2 hover:text-hover'>
                            Projects
                        </Link>
                    </div>
                </div>
                
                {/* left nav */}
                <div className='flex items-center'>
                    <Link href="/contact" className='px-5 py-2 hover:text-hover'>
                        Contact
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    )
}