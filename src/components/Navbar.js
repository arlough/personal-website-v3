import React from "react"

export default function Navbar(){
    return (
        <nav className="invisible mt-3 text-2xl font-bold text-white shadow-xl bg-background lg:visible">
            <div className='mx-auto rounded max-w-screen-2xl'>
                <div className='flex justify-between'>
                    <div className='flex px-5 py-2 space-x-5'>
                    {/* right nav */}
                    <div className='flex items-center space-x-5 '>
                        <a href="#hero" className='px-3 py-2 hover:text-hover'>
                            About Me
                        </a>
                        <a href="#projects" className='px-3 py-2 hover:text-hover'>
                            Projects
                        </a>
                    </div>
                </div>
                
                {/* left nav */}
                <div className='flex items-center'>
                    <a href="#" className='px-5 py-2 hover:text-hover'>
                        Contact
                    </a>
                </div>
                </div>
            </div>
        </nav>
    )
}