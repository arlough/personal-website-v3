import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col  bg-grey-600'>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
    
  )
}
