import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col justify-between space-y-80'>
      <div className='flex-col self-center justify-between space-y-16'>
      <Head>
        <title>
          Home - Aidan Loughney
        </title>
        <meta
          name="description"
          content="Welcome to my portfolio website! Here, you'll find examples of my software development projects, technical skills, and experience. Browse my site to learn more about how I can contribute to your organization, and to connect with me for potential opportunities."
          key="desc"
        />
        <meta property="og:title" content="Aidan Loughney's Portfolio"></meta>
        <meta property="og:description" content="A portfolio website filled with examples of my software development projects, technical skills, and experience." />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      </div>
      <About></About>
      <Projects></Projects>
      {/* Fun links section or "on the web section" */}
      <Footer></Footer>
    </div>
    
  )
}
