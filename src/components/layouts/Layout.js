import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({children}) {
  return (
    <div className='flex flex-col justify-between min-h-screen space-y-40 '>
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
      <main id='content' className='flex flex-col justify-between flex-auto space-y-80' >
      {children}
      </main>
      <Footer></Footer>
    </div>
    
  )
}
