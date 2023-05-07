import React from "react"
import Link from 'next/link';

export default function Navbtn({link, label}){
    return (
        <Link href={link} className='px-3 py-2 transition duration-300 group hover:text-hover'>
            {label}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-hover"></span>
        </Link>
    )
}